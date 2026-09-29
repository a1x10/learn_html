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

echo "==> Домен: $DOMAIN"

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
SITE_DOMAIN="$DOMAIN" caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
systemctl enable caddy >/dev/null
systemctl restart caddy

if command -v ufw >/dev/null 2>&1 && ufw status | grep -q "Status: active"; then
  echo "==> Открываю порты 80 и 443 в ufw"
  ufw allow 80/tcp
  ufw allow 443/tcp
fi

echo
echo "Готово: https://$DOMAIN"
echo "Первый выпуск сертификата занимает до минуты. Логи: journalctl -u caddy -f"
