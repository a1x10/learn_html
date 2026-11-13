#!/usr/bin/env bash
# Установка портфолио на сервер Ubuntu/Debian с HTTPS через Caddy.
# Запуск:  sudo bash deploy/setup-server.sh [домен]
# Повторный запуск обновляет файлы сайта (например, после git pull).
set -euo pipefail

DOMAIN="${1:-portfolioalex.duckdns.org}"
SRC_DIR="$(cd "$(dirname "$0")/.." && pwd)"
WEB_ROOT="/var/www/portfolio"

if [ "$(id -u)" -ne 0 ]; then
  echo "Запустите через sudo: sudo bash $0 $DOMAIN" >&2
  exit 1
fi
if ! command -v apt-get >/dev/null 2>&1; then
  echo "Скрипт рассчитан на Ubuntu или Debian (нужен apt-get)." >&2
  exit 1
fi

echo "==> Домен: $DOMAIN"

# Домен должен указывать на этот сервер, иначе HTTPS-сертификат не выпустится.
DOMAIN_IP="$(getent ahostsv4 "$DOMAIN" | awk 'NR==1 {print $1}')"
if [ -z "$DOMAIN_IP" ]; then
  echo "!!  Домен $DOMAIN не находится в DNS. Проверьте запись в Duck DNS." >&2
elif ! hostname -I | tr ' ' '\n' | grep -qx "$DOMAIN_IP"; then
  echo "!!  $DOMAIN указывает на $DOMAIN_IP, а у этого сервера адреса: $(hostname -I)"
  echo "    Если это не ваш сервер, впишите его IP в Duck DNS и подождите пару минут."
fi

# Порты 80 и 443 должны быть свободны (часто их занимает nginx или apache).
BUSY="$(ss -ltnpH '( sport = :80 or sport = :443 )' 2>/dev/null | grep -v caddy || true)"
if [ -n "$BUSY" ]; then
  echo "!!  Порты 80/443 заняты другой программой:" >&2
  echo "$BUSY" >&2
  echo "    Остановите её, например: systemctl disable --now nginx apache2" >&2
  exit 1
fi

if ! command -v caddy >/dev/null 2>&1; then
  echo "==> Устанавливаю Caddy"
  apt-get update
  apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl gnupg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
    | gpg --dearmor --yes -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
  curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
    > /etc/apt/sources.list.d/caddy-stable.list
  chmod o+r /usr/share/keyrings/caddy-stable-archive-keyring.gpg /etc/apt/sources.list.d/caddy-stable.list
  apt-get update
  apt-get install -y caddy
fi

echo "==> Копирую сайт в $WEB_ROOT"
mkdir -p "$WEB_ROOT"
find "$WEB_ROOT" -mindepth 1 -delete
cp -r "$SRC_DIR/index.html" "$SRC_DIR/css" "$SRC_DIR/js" "$WEB_ROOT/"
chown -R caddy:caddy "$WEB_ROOT" 2>/dev/null || true

echo "==> Настраиваю Caddy"
cp "$SRC_DIR/deploy/Caddyfile" /etc/caddy/Caddyfile
mkdir -p /etc/systemd/system/caddy.service.d
printf '[Service]\nEnvironment=SITE_DOMAIN=%s\n' "$DOMAIN" > /etc/systemd/system/caddy.service.d/domain.conf
systemctl daemon-reload
SITE_DOMAIN="$DOMAIN" caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile >/dev/null
systemctl enable caddy >/dev/null 2>&1
systemctl restart caddy

if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  echo "==> Открываю порты 80 и 443 в ufw"
  ufw allow 80/tcp
  ufw allow 443/tcp
fi

echo "==> Жду выпуск HTTPS-сертификата (до 90 секунд)"
for _ in $(seq 1 18); do
  CODE="$(curl -s -o /dev/null -w '%{http_code}' --max-time 5 "https://$DOMAIN/" || true)"
  if [ "$CODE" = "200" ]; then
    echo
    echo "Готово: https://$DOMAIN"
    exit 0
  fi
  sleep 5
done

echo
echo "Caddy запущен, но https://$DOMAIN пока не открывается. Проверьте:"
echo "  1) в панели хостинга (Firewall) открыты входящие TCP 80 и 443;"
echo "  2) домен в Duck DNS указывает на IP этого сервера;"
echo "  3) логи: journalctl -u caddy -n 50 --no-pager"
exit 1
