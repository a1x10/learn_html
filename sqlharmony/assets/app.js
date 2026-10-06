(()=>{var p1=Object.defineProperty;var m1=(r,t,e)=>t in r?p1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Xt=(r,t,e)=>m1(r,typeof t!="symbol"?t+"":t,e);function Pr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function G0(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},sl={duration:.5,overwrite:!1,delay:0},Bd,Ii,Je,Gn=1e8,ke=1/Gn,Cd=Math.PI*2,g1=Cd/4,_1=0,W0=Math.sqrt,x1=Math.cos,v1=Math.sin,xi=function(t){return typeof t=="string"},ii=function(t){return typeof t=="function"},Fr=function(t){return typeof t=="number"},Qc=function(t){return typeof t>"u"},gr=function(t){return typeof t=="object"},mn=function(t){return t!==!1},kd=function(){return typeof window<"u"},Wc=function(t){return ii(t)||xi(t)},X0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Gi=Array.isArray,y1=/random\([^)]+\)/g,S1=/,\s*/g,N0=/(?:-?\.?\d|\.)+/gi,zd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hd=/[+-]=-?[.\d]+/,M1=/[^,'"\[\]\s]+/gi,b1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qe,pr,Dd,Vd,Tn={},$c={},Y0,q0=function(t){return($c=Fo(t,Tn))&&Wi},tu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ol=function(t,e){return!e&&console.warn(t)},$0=function(t,e){return t&&(Tn[t]=e)&&$c&&($c[t]=e)||Tn},al=function(){return 0},w1={suppressEvents:!0,isStart:!0,kill:!1},Xc={suppressEvents:!0,kill:!1},E1={suppressEvents:!0},Gd={},ss=[],Rd={},Z0,dn={},Md={},O0=30,Yc=[],Wd="",Xd=function(t){var e=t[0],i,n;if(gr(e)||ii(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Yc.length;n--&&!Yc[n].targetTest(e););i=Yc[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new Zd(t[n],i)))||t.splice(n,1);return t},os=function(t){return t._gsap||Xd(Wn(t))[0]._gsap},Yd=function(t,e,i){return(i=t[e])&&ii(i)?t[e]():Qc(i)&&t.getAttribute&&t.getAttribute(e)||i},nn=function(t,e){return(t=t.split(",")).forEach(e)||t},ni=function(t){return Math.round(t*1e5)/1e5||0},je=function(t){return Math.round(t*1e7)/1e7||0},Gs=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},T1=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Zc=function(){var t=ss.length,e=ss.slice(0),i,n;for(Rd={},ss.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},qd=function(t){return!!(t._initted||t._startAt||t.add)},J0=function(t,e,i,n){ss.length&&!Ii&&Zc(),t.render(e,i,n||!!(Ii&&e<0&&qd(t))),ss.length&&!Ii&&Zc()},K0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(M1).length<2?e:xi(t)?t.trim():t},j0=function(t){return t},An=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},A1=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Fo=function(t,e){for(var i in e)t[i]=e[i];return t},U0=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=gr(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Jc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},il=function(t){var e=t.parent||Qe,i=t.keyframes?A1(Gi(t.keyframes)):An;if(mn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},C1=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Q0=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},eu=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},as=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ks=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},D1=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Pd=function(t,e,i,n){return t._startAt&&(Ii?t._startAt.revert(Xc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},R1=function r(t){return!t||t._ts&&r(t.parent)},B0=function(t){return t._repeat?Lo(t._tTime,t=t.duration()+t._rDelay)*t:0},Lo=function(t,e){var i=Math.floor(t=je(t/e));return t&&i===t?i-1:i},Kc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},iu=function(t){return t._end=je(t._start+(t._tDur/Math.abs(t._ts||t._rts||ke)||0))},nu=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=je(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),iu(t),i._dirty||ks(i,t)),t},tg=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Kc(t.rawTime(),e),(!e._dur||ul(0,e.totalDuration(),i)-e._tTime>ke)&&e.render(i,!0)),ks(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-ke}},mr=function(t,e,i,n){return e.parent&&as(e),e._start=je((Fr(i)?i:i||t!==Qe?Vn(t,i,e):t._time)+e._delay),e._end=je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Q0(t,e,"_first","_last",t._sort?"_start":0),Id(e)||(t._recent=e),n||tg(t,e),t._ts<0&&nu(t,t._tTime),t},eg=function(t,e){return(Tn.ScrollTrigger||tu("scrollTrigger",e))&&Tn.ScrollTrigger.create(e,t)},ig=function(t,e,i,n,s){if(jd(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ii&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Z0!==pn.frame)return ss.push(t),t._lazy=[s,n],1},P1=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Id=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},I1=function(t,e,i,n){var s=t.ratio,o=e<0||!e&&(!t._start&&P1(t)&&!(!t._initted&&Id(t))||(t._ts<0||t._dp._ts<0)&&!Id(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ul(0,t._tDur,e),u=Lo(l,a),t._yoyo&&u&1&&(o=1-o),u!==Lo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ii||n||t._zTime===ke||!e&&t._zTime){if(!t._initted&&ig(t,e,n,i,l))return;for(h=t._zTime,t._zTime=e||(i?ke:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Pd(t,e,i,!0),t._onUpdate&&!i&&En(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&En(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&as(t,1),!i&&!Ii&&(En(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},F1=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},No=function(t,e,i,n){var s=t._repeat,o=je(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:je(o*(s+1)+t._rDelay*s):o,a>0&&!n&&nu(t,t._tTime=t._tDur*a),t.parent&&iu(t),i||ks(t.parent,t),t},k0=function(t){return t instanceof Vi?ks(t):No(t,t._dur)},L1={_start:0,endTime:al,totalDuration:al},Vn=function r(t,e,i){var n=t.labels,s=t._recent||L1,o=t.duration()>=Gn?s.endTime(!1):t._dur,a,l,c;return xi(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Gi(i)?i[0]:i).totalDuration()),a>1?r(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},nl=function(t,e,i){var n=Fr(e[1]),s=(n?2:1)+(t<2?0:1),o=e[s],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;o.immediateRender=mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new ci(e[0],o,e[s+1])},ls=function(t,e){return t||t===0?e(t):e},ul=function(t,e,i){return i<t?t:i>e?e:i},Fi=function(t,e){return!xi(t)||!(e=b1.exec(t))?"":e[1]},N1=function(t,e,i){return ls(i,function(n){return ul(t,e,n)})},Fd=[].slice,ng=function(t,e){return t&&gr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gr(t[0]))&&!t.nodeType&&t!==pr},O1=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return xi(n)&&!e||ng(n,1)?(s=i).push.apply(s,Wn(n)):i.push(n)})||i},Wn=function(t,e,i){return Je&&!e&&Je.selector?Je.selector(t):xi(t)&&!i&&(Dd||!Oo())?Fd.call((e||Vd).querySelectorAll(t),0):Gi(t)?O1(t,i):ng(t)?Fd.call(t,0):t?[t]:[]},Ld=function(t){return t=Wn(t)[0]||ol("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Wn(e,i.querySelectorAll?i:i===t?ol("Invalid scope")||Vd.createElement("div"):t)}},rg=function(t){return t.sort(function(){return .5-Math.random()})},sg=function(t){if(ii(t))return t;var e=gr(t)?t:{each:t},i=zs(e.ease),n=e.from||0,s=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,u=n,h=n;return xi(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],h=n[1]),function(f,d,p){var _=(p||e).length,m=o[_],g,v,b,y,M,E,A,x,S;if(!m){if(S=e.grid==="auto"?0:(e.grid||[1,Gn])[1],!S){for(A=-Gn;A<(A=p[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],g=l?Math.min(S,_)*u-.5:n%S,v=S===Gn?0:l?_*h/S-.5:n/S|0,A=0,x=Gn,E=0;E<_;E++)b=E%S-g,y=v-(E/S|0),m[E]=M=c?Math.abs(c==="y"?y:b):W0(b*b+y*y),M>A&&(A=M),M<x&&(x=M);n==="random"&&rg(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(n==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Fi(e.amount||e.each)||0,i=i&&_<0?Z1(i):i}return _=(m[f]-m.min)/m.max||0,je(m.b+(i?i(_):_)*m.v)+m.u}},Nd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=je(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Fr(i)?0:Fi(i))}},og=function(t,e){var i=Gi(t),n,s;return!i&&gr(t)&&(n=i=t.radius||Gn,t.values?(t=Wn(t.values),(s=!Fr(t[0]))&&(n*=n)):t=Nd(t.increment)),ls(e,i?ii(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Gn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!n||c<=n?t[u]:o,s||u===o||Fr(o)?u:u+Fi(o)}:Nd(t))},ag=function(t,e,i,n){return ls(Gi(t)?!e:i===!0?!!(i=0):!n,function(){return Gi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},U1=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,o){return o(s)},n)}},B1=function(t,e){return function(i){return t(parseFloat(i))+(e||Fi(i))}},k1=function(t,e,i){return cg(t,e,0,1,i)},lg=function(t,e,i){return ls(i,function(n){return t[~~e(n)]})},z1=function r(t,e,i){var n=e-t;return Gi(t)?lg(t,r(0,t.length),e):ls(i,function(s){return(n+(s-t)%n)%n+t})},H1=function r(t,e,i){var n=e-t,s=n*2;return Gi(t)?lg(t,r(0,t.length-1),e):ls(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},Uo=function(t){return t.replace(y1,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(S1);return ag(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},cg=function(t,e,i,n,s){var o=e-t,a=n-i;return ls(s,function(l){return i+((l-t)/o*a||0)})},V1=function r(t,e,i,n){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=xi(t),a={},l,c,u,h,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Gi(t)&&!Gi(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(p){p*=h;var _=Math.min(f,~~p);return u[_](p-_)},i=e}else n||(t=Fo(Gi(t)?[]:{},t));if(!u){for(l in e)Jd.call(a,t,l,"get",e[l]);s=function(p){return ep(p,a)||(o?t.p:t)}}}return ls(i,s)},z0=function(t,e,i){var n=t.labels,s=Gn,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},En=function(t,e,i){var n=t.vars,s=n[e],o=Je,a=t._ctx,l,c,u;if(s)return l=n[e+"Params"],c=n.callbackScope||t,i&&ss.length&&Zc(),a&&(Je=a),u=l?s.apply(c,l):s.call(c),Je=o,u},tl=function(t){return as(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ii),t.progress()<1&&En(t,"onInterrupt"),t},Io,ug=[],hg=function(t){if(t)if(t=!t.name&&t.default||t,kd()||t.headless){var e=t.name,i=ii(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:al,render:ep,add:Jd,kill:sS,modifier:rS,rawVars:0},o={targetTest:0,get:0,getSetter:ru,aliases:{},register:0};if(Oo(),t!==n){if(dn[e])return;An(n,An(Jc(t,s),o)),Fo(n.prototype,Fo(s,Jc(t,o))),dn[n.prop=e]=n,t.targetTest&&(Yc.push(n),Gd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}$0(e,n),t.register&&t.register(Wi,n,rn)}else ug.push(t)},Be=255,el={aqua:[0,Be,Be],lime:[0,Be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Be],navy:[0,0,128],white:[Be,Be,Be],olive:[128,128,0],yellow:[Be,Be,0],orange:[Be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Be,0,0],pink:[Be,192,203],cyan:[0,Be,Be],transparent:[Be,Be,Be,0]},bd=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Be+.5|0},fg=function(t,e,i){var n=t?Fr(t)?[t>>16,t>>8&Be,t&Be]:0:el.black,s,o,a,l,c,u,h,f,d,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),el[t])n=el[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Be,n&Be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Be,t&Be]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(N0),!e)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=bd(l+1/3,s,o),n[1]=bd(l,s,o),n[2]=bd(l-1/3,s,o);else if(~t.indexOf("="))return n=t.match(zd),i&&n.length<4&&(n[3]=1),n}else n=t.match(N0)||el.transparent;n=n.map(Number)}return e&&!p&&(s=n[0]/Be,o=n[1]/Be,a=n[2]/Be,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},dg=function(t){var e=[],i=[],n=-1;return t.split(Ir).forEach(function(s){var o=s.match(Vs)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},H0=function(t,e,i){var n="",s=(t+n).match(Ir),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=fg(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=dg(t),l=i.c,l.join(n)!==u.c.join(n)))for(c=t.replace(Ir,"1").split(Vs),h=c.length-1;a<h;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(Ir),h=c.length-1;a<h;a++)n+=c[a]+s[a];return n+c[h]},Ir=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in el)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),G1=/hsl[a]?\(/,$d=function(t){var e=t.join(" "),i;if(Ir.lastIndex=0,Ir.test(e))return i=G1.test(e),t[1]=H0(t[1],i),t[0]=H0(t[0],i,dg(t[1])),!0},ll,pn=(function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function _(m){var g=r()-n,v=m===!0,b,y,M,E;if((g>t||g<0)&&(i+=g-e),n+=g,M=n-i,b=M-o,(b>0||v)&&(E=++h.frame,f=M-h.time*1e3,h.time=M=M/1e3,o+=b+(b>=s?4:s-b),y=1),v||(l=c(_)),y)for(d=0;d<a.length;d++)a[d](M,f,E,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Y0&&(!Dd&&kd()&&(pr=Dd=window,Vd=pr.document||{},Tn.gsap=Wi,(pr.gsapVersions||(pr.gsapVersions=[])).push(Wi.version),q0($c||pr.GreenSockGlobals||!pr.gsap&&pr||{}),ug.forEach(hg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ll=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ll=0,c=al},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,g,v){var b=g?function(y,M,E,A){m(y,M,E,A),h.remove(b)}:m;return h.remove(m),a[v?"unshift":"push"](b),Oo(),b},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),Oo=function(){return!ll&&pn.wake()},Se={},W1=/^[\d.\-M][\d.\-,\s]/,X1=/["']/g,Y1=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(X1,"").trim():+c,n=l.substr(a+1).trim();return e},q1=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},$1=function(t){var e=(t+"").split("("),i=Se[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Y1(e[1])]:q1(t).split(",").map(K0)):Se._CE&&W1.test(t)?Se._CE("",t):i},Z1=function(t){return function(e){return 1-t(1-e)}},zs=function(t,e){return t&&(ii(t)?t:Se[t]||$1(t))||e},Ws=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},o;return nn(t,function(a){Se[a]=Tn[a]=s,Se[o=a.toLowerCase()]=i;for(var l in s)Se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Se[a+"."+l]=s[l]}),s},pg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},wd=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Cd*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*v1((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:pg(a);return s=Cd/s,l.config=function(c,u){return r(t,c,u)},l},Ed=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:pg(i);return n.config=function(s){return r(t,s)},n};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ws(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;Ws("Elastic",wd("in"),wd("out"),wd());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(a){return a<e?r*a*a:a<i?r*Math.pow(a-1.5/t,2)+.75:a<n?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ws("Circ",function(r){return-(W0(1-r*r)-1)});Ws("Sine",function(r){return r===1?1:-x1(r*g1)+1});Ws("Back",Ed("in"),Ed("out"),Ed());Se.SteppedEase=Se.steps=Tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,o=1-ke;return function(a){return((n*ul(0,o,a)|0)+s)*i}}};sl.ease=Se["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Wd+=r+","+r+"Params,"});var Zd=function(t,e){this.id=_1++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yd,this.set=e?e.getSetter:ru},cl=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,No(this,+e.duration,1,1),this.data=e.data,Je&&(this._ctx=Je,Je.data.push(this)),ll||pn.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,No(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nu(this,i),!s._dp||s.parent||tg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&mr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===ke||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),J0(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+B0(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+B0(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Lo(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-ke?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Kc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-ke?0:this._rts,this.totalTime(ul(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),iu(this),D1(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ke&&(this._tTime-=ke)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=je(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&mr(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kc(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=E1);var n=Ii;return Ii=i,qd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ii=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,k0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,k0(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Vn(this,i),mn(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,mn(n)),this._dur||(this._zTime=-ke),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-ke:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ke,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-ke)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(o){var a=ii(i)?i:j0,l=function(){var u=n.then;n.then=null,s&&s(),ii(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=u),o(a),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){tl(this)},r})();An(cl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ke,_prom:0,_ps:!1,_rts:1});var Vi=(function(r){G0(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=mn(i.sortChildren),Qe&&mr(i.parent||Qe,Pr(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&eg(Pr(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,o){return nl(0,arguments,this),this},e.from=function(n,s,o){return nl(1,arguments,this),this},e.fromTo=function(n,s,o,a){return nl(2,arguments,this),this},e.set=function(n,s,o){return s.duration=0,s.parent=this,il(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ci(n,s,Vn(this,o),1),this},e.call=function(n,s,o){return mr(this,ci.delayedCall(0,n,s),o)},e.staggerTo=function(n,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new ci(n,o,Vn(this,l)),this},e.staggerFrom=function(n,s,o,a,l,c,u){return o.runBackwards=1,il(o).immediateRender=mn(o.immediateRender),this.staggerTo(n,s,o,a,l,c,u)},e.staggerFromTo=function(n,s,o,a,l,c,u,h){return a.startAt=o,il(a).immediateRender=mn(a.immediateRender),this.staggerTo(n,s,a,l,c,u,h)},e.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:je(n),h=this._zTime<0!=n<0&&(this._initted||!c),f,d,p,_,m,g,v,b,y,M,E,A;if(this!==Qe&&u>l&&n>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),f=u,y=this._start,b=this._ts,g=!b,h&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(f=je(u%m),u===l?(_=this._repeat,f=c):(M=je(u/m),_=~~M,_&&_===M&&(f=c,_--),f>c&&(f=c)),M=Lo(this._tTime,m),!a&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),E&&_&1&&(f=c-f,A=1),_!==M&&!this._lock){var x=E&&M&1,S=x===(E&&_&1);if(_<M&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(A?0:je(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&En(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,M=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=F1(this,je(a),je(f)),v&&(u-=f-(f=v._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&u&&c&&!s&&!M&&(En(this,"onStart"),this._tTime!==u))return this;if(f>=a&&n>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(n,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=-ke);break}}d=p}else{d=this._last;for(var w=n<0?n:f;d;){if(p=d._prev,(d._act||w<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(n,s,o);if(d.render(d._ts>0?(w-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(w-d._start)*d._ts,s,o||Ii&&qd(d)),f!==this._time||!this._ts&&!g){v=0,p&&(u+=this._zTime=w?-ke:ke);break}}d=p}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-ke)._zTime=f>=a?1:-1,this._ts))return this._start=y,iu(this),this.render(n,s,o);this._onUpdate&&!s&&En(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(n<0&&!a)&&(u||a||!l)&&(En(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var o=this;if(Fr(s)||(s=Vn(this,s,n)),!(n instanceof cl)){if(Gi(n))return n.forEach(function(a){return o.add(a,s)}),this;if(xi(n))return this.addLabel(n,s);if(ii(n))n=ci.delayedCall(0,n);else return this}return this!==n?mr(this,n,s):this},e.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Gn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ci?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},e.remove=function(n){return xi(n)?this.removeLabel(n):ii(n)?this.killTweensOf(n):(n.parent===this&&eu(this,n),n===this._recent&&(this._recent=this._last),ks(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(pn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=Vn(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,o){var a=ci.delayedCall(0,s||al,o);return a.data="isPause",this._hasPause=1,mr(this,a,Vn(this,n))},e.removePause=function(n){var s=this._first;for(n=Vn(this,n);s;)s._start===n&&s.data==="isPause"&&as(s),s=s._next},e.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var o=[],a=Wn(n),l=this._first,c=Fr(s),u;l;)l instanceof ci?T1(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(n,s){s=s||{};var o=this,a=Vn(o,n),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=ci.to(o,An({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ke,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&No(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(n,s,o){return this.tweenTo(s,An({startAt:{time:Vn(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),z0(this,Vn(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),z0(this,Vn(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+ke)},e.shiftChildren=function(n,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=je(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return ks(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ks(this)},e.totalDuration=function(n){var s=0,o=this,a=o._last,l=Gn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,mr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=je(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;No(o,o===Qe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(Qe._ts&&(J0(Qe,Kc(n,Qe)),Z0=pn.frame),pn.frame>=O0){O0+=gn.autoSleep||120;var s=Qe._first;if((!s||!s._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},t})(cl);An(Vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var J1=function(t,e,i,n,s,o,a){var l=new rn(this._pt,t,e,0,1,tp,null,s),c=0,u=0,h,f,d,p,_,m,g,v;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Uo(n)),o&&(v=[i,n],o(v,t,e),i=v[0],n=v[1]),f=i.match(Sd)||[];h=Sd.exec(n);)p=h[0],_=n.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Gs(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Sd.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(Hd.test(n)||g)&&(l.e=0),this._pt=l,l},Jd=function(t,e,i,n,s,o,a,l,c,u){ii(n)&&(n=n(s||0,t,o));var h=t[e],f=i!=="get"?i:ii(h)?c?t[e.indexOf("set")||!ii(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=ii(h)?c?eS:_g:Qd,p;if(xi(n)&&(~n.indexOf("random(")&&(n=Uo(n)),n.charAt(1)==="="&&(p=Gs(f,n)+(Fi(f)||0),(p||p===0)&&(n=p))),!u||f!==n||Od)return!isNaN(f*n)&&n!==""?(p=new rn(this._pt,t,e,+f||0,n-(f||0),typeof h=="boolean"?nS:xg,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!h&&!(e in t)&&tu(e,n),J1.call(this,t,e,f,n,d,l||gn.stringFilter,c))},K1=function(t,e,i,n,s){if(ii(t)&&(t=rl(t,s,e,i,n)),!gr(t)||t.style&&t.nodeType||Gi(t)||X0(t))return xi(t)?rl(t,s,e,i,n):t;var o={},a;for(a in t)o[a]=rl(t[a],s,e,i,n);return o},Kd=function(t,e,i,n,s,o){var a,l,c,u;if(dn[t]&&(a=new dn[t]).init(s,a.rawVars?e[t]:K1(e[t],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new rn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Io))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rs,Od,jd=function r(t,e,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,v=g&&g.data==="nested"?g.vars.targets:m,b=t._overwrite==="auto"&&!Bd,y=t.timeline,M=n.easeReverse||h,E,A,x,S,w,D,R,N,I,F,U,B,Y;if(y&&(!f||!s)&&(s="none"),t._ease=zs(s,sl.ease),t._rEase=M&&(zs(M)||t._ease),t._from=!y&&!!n.runBackwards,t._from&&(t.ratio=1),!y||f&&!n.stagger){if(N=m[0]?os(m[0]).harness:0,B=N&&n[N.prop],E=Jc(n,Gd),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?Xc:w1),_._lazy=0),o){if(as(t._startAt=ci.set(m,An({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&mn(l),startAt:null,delay:0,onUpdate:c&&function(){return En(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ii||!a&&!d)&&t._startAt.revert(Xc),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&p&&!_){if(e&&(a=!1),x=An({overwrite:!1,data:"isFromStart",lazy:a&&!_&&mn(l),immediateRender:a,stagger:0,parent:g},E),B&&(x[N.prop]=B),as(t._startAt=ci.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ii?t._startAt.revert(Xc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,ke,ke);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&mn(l)||l&&!p,A=0;A<m.length;A++){if(w=m[A],R=w._gsap||Xd(m)[A]._gsap,t._ptLookup[A]=F={},Rd[R.id]&&ss.length&&Zc(),U=v===m?A:v.indexOf(w),N&&(I=new N).init(w,B||E,t,U,v)!==!1&&(t._pt=S=new rn(t._pt,w,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(V){F[V]=S}),I.priority&&(D=1)),!N||B)for(x in E)dn[x]&&(I=Kd(x,E,t,U,w,v))?I.priority&&(D=1):F[x]=S=Jd.call(t,w,x,"get",E[x],U,v,0,n.stringFilter);t._op&&t._op[A]&&t.kill(w,t._op[A]),b&&t._pt&&(rs=t,Qe.killTweensOf(w,F,t.globalTime(e)),Y=!t.parent,rs=0),t._pt&&l&&(Rd[R.id]=1)}D&&ip(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,f&&e<=0&&y.render(Gn,!0,!0)},j1=function(t,e,i,n,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Od=1,t.vars[e]="+=0",jd(t,a),Od=0,l?ol(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(n||n===0)&&!s?n:u.s+(n||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=ni(i)+Fi(h.e)),h.b&&(h.b=u.s+Fi(h.b))},Q1=function(t,e){var i=t[0]?os(t[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return e;s=Fo({},e);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tS=function(t,e,i,n){var s=e.ease||n||"power1.inOut",o,a;if(Gi(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},rl=function(t,e,i,n,s){return ii(t)?t.call(e,i,n,s):xi(t)&&~t.indexOf("random(")?Uo(t):t},mg=Wd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",gg={};nn(mg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return gg[r]=1});var ci=(function(r){G0(t,r);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:il(n))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=n.parent||Qe,v=(Gi(i)||X0(i)?Fr(i[0]):"length"in n)?[i]:Wn(i),b,y,M,E,A,x,S,w;if(a._targets=v.length?Xd(v):ol("GSAP target "+i+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Wc(c)||Wc(u)){n=a.vars;var D=n.easeReverse||n.yoyoEase;if(b=a.timeline=new Vi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),b.kill(),b.parent=b._dp=Pr(a),b._start=0,f||Wc(c)||Wc(u)){if(E=v.length,S=f&&sg(f),gr(f))for(A in f)~mg.indexOf(A)&&(w||(w={}),w[A]=f[A]);for(y=0;y<E;y++)M=Jc(n,gg),M.stagger=0,D&&(M.easeReverse=D),w&&Fo(M,w),x=v[y],M.duration=+rl(c,Pr(a),y,x,v),M.delay=(+rl(u,Pr(a),y,x,v)||0)-a._delay,!f&&E===1&&M.delay&&(a._delay=u=M.delay,a._start+=u,M.delay=0),b.to(x,M,S?S(y,x,v):0),b._ease=Se.none;b.duration()?c=u=0:a.timeline=0}else if(p){il(An(b.vars.defaults,{ease:"none"})),b._ease=zs(p.ease||n.ease||"none");var R=0,N,I,F;if(Gi(p))p.forEach(function(U){return b.to(v,U,">")}),b.duration();else{M={};for(A in p)A==="ease"||A==="easeEach"||tS(A,p[A],M,p.easeEach);for(A in M)for(N=M[A].sort(function(U,B){return U.t-B.t}),R=0,y=0;y<N.length;y++)I=N[y],F={ease:I.e,duration:(I.t-(y?N[y-1].t:0))/100*c},F[A]=I.v,b.to(v,F,R),R+=F.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Bd&&(rs=Pr(a),Qe.killTweensOf(v),rs=0),mr(g,Pr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(h||!c&&!p&&a._start===je(g._time)&&mn(h)&&R1(Pr(a))&&g.data!=="nested")&&(a._tTime=-ke,a.render(Math.max(0,-u)||0)),m&&eg(Pr(a),m),a}var e=t.prototype;return e.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-ke&&!u?l:n<ke?0:n,f,d,p,_,m,g,v,b;if(!c)I1(this,n,s,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,s,o);if(f=je(h%_),h===l?(p=this._repeat,f=c):(m=je(h/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=Lo(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(je(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(ig(this,u?n:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._rEase){var y=f<a;if(y!==this._inv){var M=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(En(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;b&&b.render(n<0?n:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Pd(this,n,s,o),En(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&En(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Pd(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(u&&!a)&&(h||a||g)&&(En(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,o,a,l){ll||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||jd(this,c),u=this._ease(c/this._dur),j1(this,n,s,o,a,u,c,l)?this.resetTo(n,s,o,a,1):(nu(this,0),this.parent||Q0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?tl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ii),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,rs&&rs.vars.overwrite!==!0)._first||tl(this),this.parent&&o!==this.timeline.totalDuration()&&No(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Wn(n):a,c=this._ptLookup,u=this._pt,h,f,d,p,_,m,g;if((!s||s==="all")&&C1(a,l))return s==="all"&&(this._pt=0),tl(this);for(h=this._op=this._op||[],s!=="all"&&(xi(s)&&(_={},nn(s,function(v){return _[v]=1}),s=_),s=Q1(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,p=f,d={}):(d=h[g]=h[g]||{},p=s);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&eu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&tl(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return nl(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return nl(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return Qe.killTweensOf(n,s,o)},t})(cl);An(ci.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(r){ci[r]=function(){var t=new Vi,e=Fd.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Qd=function(t,e,i){return t[e]=i},_g=function(t,e,i){return t[e](i)},eS=function(t,e,i,n){return t[e](n.fp,i)},iS=function(t,e,i){return t.setAttribute(e,i)},ru=function(t,e){return ii(t[e])?_g:Qc(t[e])&&t.setAttribute?iS:Qd},xg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},nS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},tp=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},ep=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},rS=function(t,e,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,e,i),s=o},sS=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?eu(this,e,"_pt"):e.dep||(i=1),e=n;return!i},oS=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},ip=function(t){for(var e=t._pt,i,n,s,o;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=s},rn=(function(){function r(e,i,n,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||xg,this.d=l||this,this.set=c||Qd,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=oS,this.m=i,this.mt=s,this.tween=n},r})();nn(Wd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Gd[r]=1});Tn.TweenMax=Tn.TweenLite=ci;Tn.TimelineLite=Tn.TimelineMax=Vi;Qe=new Vi({sortChildren:!1,defaults:sl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=$d;var Hs=[],qc={},aS=[],V0=0,lS=0,Td=function(t){return(qc[t]||aS).map(function(e){return e()})},Ud=function(){var t=Date.now(),e=[];t-V0>2&&(Td("matchMediaInit"),Hs.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=pr.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),Td("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),V0=t,Td("matchMedia"))},vg=(function(){function r(e,i){this.selector=i&&Ld(i),this.data=[],this._r=[],this.isReverted=!1,this.id=lS++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){ii(i)&&(s=n,n=i,i=ii);var o=this,a=function(){var c=Je,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ld(s)),Je=o,h=n.apply(o,arguments),ii(h)&&o._r.push(h),Je=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===ii?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=Je;Je=null,i(this),Je=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof ci&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Vi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ci)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=Hs.length;o--;)Hs[o].id===this.id&&Hs.splice(o,1)},t.revert=function(i){this.kill(i||{})},r})(),cS=(function(){function r(e){this.contexts=[],this.scope=e,Je&&Je.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){gr(i)||(i={matches:i});var o=new vg(0,s||this.scope),a=o.conditions={},l,c,u;Je&&!o.selector&&(o.selector=Je.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?u=1:(l=pr.matchMedia(i[c]),l&&(Hs.indexOf(o)<0&&Hs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ud):l.addEventListener("change",Ud)));return u&&n(o,function(h){return o.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),jc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return hg(n)})},timeline:function(t){return new Vi(t)},getTweensOf:function(t,e){return Qe.getTweensOf(t,e)},getProperty:function(t,e,i,n){xi(t)&&(t=Wn(t)[0]);var s=os(t||{}).get,o=i?j0:K0;return i==="native"&&(i=""),t&&(e?o((dn[e]&&dn[e].get||s)(t,e,i,n)):function(a,l,c){return o((dn[a]&&dn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Wn(t),t.length>1){var n=t.map(function(u){return Wi.quickSetter(u,e,i)}),s=n.length;return function(u){for(var h=s;h--;)n[h](u)}}t=t[0]||{};var o=dn[e],a=os(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Io._pt=0,h.init(t,i?u+i:u,Io,0,[t]),h.render(1,h),Io._pt&&ep(1,Io)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var n,s=Wi.to(t,An((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Qe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zs(t.ease,sl.ease)),U0(sl,t||{})},config:function(t){return U0(gn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!dn[a]&&!Tn[a]&&ol(e+" effect requires "+a+" plugin.")}),Md[e]=function(a,l,c){return i(Wn(a),An(l||{},s),c)},o&&(Vi.prototype[e]=function(a,l,c){return this.add(Md[e](a,gr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Se[t]=zs(e)},parseEase:function(t,e){return arguments.length?zs(t,e):Se},getById:function(t){return Qe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Vi(t),n,s;for(i.smoothChildTiming=mn(t.smoothChildTiming),Qe.remove(i),i._dp=0,i._time=i._tTime=Qe._time,n=Qe._first;n;)s=n._next,(e||!(!n._dur&&n instanceof ci&&n.vars.onComplete===n._targets[0]))&&mr(i,n,n._start-n._delay),n=s;return mr(Qe,i,0),i},context:function(t,e){return t?new vg(t,e):Je},matchMedia:function(t){return new cS(t)},matchMediaRefresh:function(){return Hs.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Ud()},addEventListener:function(t,e){var i=qc[t]||(qc[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=qc[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:z1,wrapYoyo:H1,distribute:sg,random:ag,snap:og,normalize:k1,getUnit:Fi,clamp:N1,splitColor:fg,toArray:Wn,selector:Ld,mapRange:cg,pipe:U1,unitize:B1,interpolate:V1,shuffle:rg},install:q0,effects:Md,ticker:pn,updateRoot:Vi.updateRoot,plugins:dn,globalTimeline:Qe,core:{PropTween:rn,globals:$0,Tween:ci,Timeline:Vi,Animation:cl,getCache:os,_removeLinkedListItem:eu,reverting:function(){return Ii},context:function(t){return t&&Je&&(Je.data.push(t),t._ctx=Je),Je},suppressOverwrites:function(t){return Bd=t}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return jc[r]=ci[r]});pn.add(Vi.updateRoot);Io=jc.to({},{duration:0});var uS=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},hS=function(t,e){var i=t._targets,n,s,o;for(n in e)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=uS(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[s],n))},Ad=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(xi(s)&&(l={},nn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}hS(a,s)}}}},Wi=jc.registerPlugin({name:"attr",init:function(t,e,i,n,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ii?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ad("roundProps",Nd),Ad("modifiers"),Ad("snap",og))||jc;ci.version=Vi.version=Wi.version="3.15.0";Y0=1;kd()&&Oo();var fS=Se.Power0,dS=Se.Power1,pS=Se.Power2,mS=Se.Power3,gS=Se.Power4,_S=Se.Linear,xS=Se.Quad,vS=Se.Cubic,yS=Se.Quart,SS=Se.Quint,MS=Se.Strong,bS=Se.Elastic,wS=Se.Back,ES=Se.SteppedEase,TS=Se.Bounce,AS=Se.Sine,CS=Se.Expo,DS=Se.Circ;var yg,cs,ko,lp,$s,RS,Sg,cp,PS=function(){return typeof window<"u"},Nr={},qs=180/Math.PI,zo=Math.PI/180,Bo=Math.atan2,Mg=1e8,up=/([A-Z])/g,IS=/(left|right|width|margin|padding|x)/i,FS=/[\s,\(]\S/,_r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},LS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},NS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},OS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},US=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Rg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Pg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},BS=function(t,e,i){return t.style[e]=i},kS=function(t,e,i){return t.style.setProperty(e,i)},zS=function(t,e,i){return t._gsap[e]=i},HS=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},VS=function(t,e,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},GS=function(t,e,i,n,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},ti="transform",_n=ti+"Origin",WS=function r(t,e){var i=this,n=this.target,s=n.style,o=n._gsap;if(t in Nr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=_r[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Lr(n,a)}):this.tfm[t]=o.x?o[t]:Lr(n,t),t===_n&&(this.tfm.zOrigin=o.zOrigin);else return _r.transform.split(",").forEach(function(a){return r.call(i,a,e)});if(this.props.indexOf(ti)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(_n,e,"")),t=ti}(s||e)&&this.props.push(t,e,s[t])},Ig=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},XS=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(up,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=cp(),(!s||!s.isStart)&&!i[ti]&&(Ig(i),n.zOrigin&&i[_n]&&(i[_n]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Fg=function(t,e){var i={target:t,props:[],revert:XS,save:WS};return t._gsap||Wi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Lg,sp=function(t,e){var i=cs.createElementNS?cs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cs.createElement(t);return i&&i.style?i:cs.createElement(t)},Cn=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(up,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,Ho(e)||e,1)||""},bg="O,Moz,ms,Ms,Webkit".split(","),Ho=function(t,e,i){var n=e||$s,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(bg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?bg[o]:"")+t},op=function(){PS()&&window.document&&(yg=window,cs=yg.document,ko=cs.documentElement,$s=sp("div")||{style:{}},RS=sp("div"),ti=Ho(ti),_n=ti+"Origin",$s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lg=!!Ho("perspective"),cp=Wi.core.reverting,lp=1)},wg=function(t){var e=t.ownerSVGElement,i=sp("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),ko.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),ko.removeChild(i),s},Eg=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Ng=function(t){var e,i;try{e=t.getBBox()}catch{e=wg(t),i=1}return e&&(e.width||e.height)||i||(e=wg(t)),e&&!e.width&&!e.x&&!e.y?{x:+Eg(t,["x","cx","x1"])||0,y:+Eg(t,["y","cy","y1"])||0,width:0,height:0}:e},Og=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ng(t))},hs=function(t,e){if(e){var i=t.style,n;e in Nr&&e!==_n&&(e=ti),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(up,"-$1").toLowerCase())):i.removeAttribute(e)}},us=function(t,e,i,n,s,o){var a=new rn(t._pt,e,i,0,1,o?Pg:Rg);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},Tg={deg:1,rad:1,turn:1},YS={grid:1,flex:1},fs=function r(t,e,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=$s.style,l=IS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",p,_,m,g;if(n===o||!s||Tg[n]||Tg[o])return s;if(o!=="px"&&!f&&(s=r(t,e,i,"px")),g=t.getCTM&&Og(t),(d||o==="%")&&(Nr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[u],ni(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:n),_=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===cs||!_.appendChild)&&(_=cs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===pn.time&&!m.uncache)return ni(s/m.width*h);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=h+n,p=t[u],v?t.style[e]=v:hs(t,e)}else(d||o==="%")&&!YS[Cn(_,"display")]&&(a.position=Cn(t,"position")),_===t&&(a.position="static"),_.appendChild($s),p=$s[u],_.removeChild($s),a.position="absolute";return l&&d&&(m=os(_),m.time=pn.time,m.width=_[u]),ni(f?p*s/h:p&&s?h/p*s:0)},Lr=function(t,e,i,n){var s;return lp||op(),e in _r&&e!=="transform"&&(e=_r[e],~e.indexOf(",")&&(e=e.split(",")[0])),Nr[e]&&e!=="transform"?(s=dl(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ou(Cn(t,_n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=su[e]&&su[e](t,e,i)||Cn(t,e)||Yd(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?fs(t,e,s,i)+i:s},qS=function(t,e,i,n){if(!i||i==="none"){var s=Ho(e,t,1),o=s&&Cn(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=Cn(t,"borderTopColor"))}var a=new rn(this._pt,t.style,e,0,1,tp),l=0,c=0,u,h,f,d,p,_,m,g,v,b,y,M;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=Cn(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=t.style[e],t.style[e]=n,n=Cn(t,e)||n,_?t.style[e]=_:hs(t,e)),u=[i,n],$d(u),i=u[0],n=u[1],f=i.match(Vs)||[],M=n.match(Vs)||[],M.length){for(;h=Vs.exec(n);)m=h[0],v=n.substring(l,h.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,y=_.substr((d+"").length),m.charAt(1)==="="&&(m=Gs(d,m)+y),g=parseFloat(m),b=m.substr((g+"").length),l=Vs.lastIndex-b.length,b||(b=b||gn.units[e]||y,l===n.length&&(n+=b,a.e+=b)),y!==b&&(d=fs(t,e,_,b)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?Pg:Rg;return Hd.test(n)&&(a.e=0),this._pt=a,a},Ag={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$S=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Ag[i]||i,e[1]=Ag[n]||n,e.join(" ")},ZS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Nr[a]&&(l=1,a=a==="transformOrigin"?_n:ti),hs(i,a);l&&(hs(i,ti),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",dl(i,1),o.uncache=1,Ig(n)))}},su={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new rn(t._pt,e,i,0,0,ZS);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},fl=[1,0,0,1,0,0],Ug={},Bg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Cg=function(t){var e=Cn(t,ti);return Bg(e)?fl:e.substr(7).match(zd).map(ni)},hp=function(t,e){var i=t._gsap||os(t),n=t.style,s=Cg(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fl:s):(s===fl&&!t.offsetParent&&t!==ko&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ko.appendChild(t)),s=Cg(t),l?n.display=l:hs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ko.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ap=function(t,e,i,n,s,o){var a=t._gsap,l=s||hp(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],v=l[5],b=e.split(" "),y=parseFloat(b[0])||0,M=parseFloat(b[1])||0,E,A,x,S;i?l!==fl&&(A=d*m-p*_)&&(x=y*(m/A)+M*(-_/A)+(_*v-m*g)/A,S=y*(-p/A)+M*(d/A)-(d*v-p*g)/A,y=x,M=S):(E=Ng(t),y=E.x+(~b[0].indexOf("%")?y/100*E.width:y),M=E.y+(~(b[1]||b[0]).indexOf("%")?M/100*E.height:M)),n||n!==!1&&a.smooth?(g=y-c,v=M-u,a.xOffset=h+(g*d+v*_)-g,a.yOffset=f+(g*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[_n]="0px 0px",o&&(us(o,a,"xOrigin",c,y),us(o,a,"yOrigin",u,M),us(o,a,"xOffset",h,a.xOffset),us(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+M)},dl=function(t,e){var i=t._gsap||new Zd(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Cn(t,_n)||"0",u,h,f,d,p,_,m,g,v,b,y,M,E,A,x,S,w,D,R,N,I,F,U,B,Y,V,P,J,ot,_t,Ft,Q;return u=h=f=_=m=g=v=b=y=0,d=p=1,i.svg=!!(t.getCTM&&Og(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[ti]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ti]!=="none"?l[ti]:"")),n.scale=n.rotate=n.translate="none"),A=hp(t,i.svg),i.svg&&(i.uncache?(Y=t.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),ap(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,A)),M=i.xOrigin||0,E=i.yOrigin||0,A!==fl&&(D=A[0],R=A[1],N=A[2],I=A[3],u=F=A[4],h=U=A[5],A.length===6?(d=Math.sqrt(D*D+R*R),p=Math.sqrt(I*I+N*N),_=D||R?Bo(R,D)*qs:0,v=N||I?Bo(N,I)*qs+_:0,v&&(p*=Math.abs(Math.cos(v*zo))),i.svg&&(u-=M-(M*D+E*N),h-=E-(M*R+E*I))):(Q=A[6],_t=A[7],P=A[8],J=A[9],ot=A[10],Ft=A[11],u=A[12],h=A[13],f=A[14],x=Bo(Q,ot),m=x*qs,x&&(S=Math.cos(-x),w=Math.sin(-x),B=F*S+P*w,Y=U*S+J*w,V=Q*S+ot*w,P=F*-w+P*S,J=U*-w+J*S,ot=Q*-w+ot*S,Ft=_t*-w+Ft*S,F=B,U=Y,Q=V),x=Bo(-N,ot),g=x*qs,x&&(S=Math.cos(-x),w=Math.sin(-x),B=D*S-P*w,Y=R*S-J*w,V=N*S-ot*w,Ft=I*w+Ft*S,D=B,R=Y,N=V),x=Bo(R,D),_=x*qs,x&&(S=Math.cos(x),w=Math.sin(x),B=D*S+R*w,Y=F*S+U*w,R=R*S-D*w,U=U*S-F*w,D=B,F=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=ni(Math.sqrt(D*D+R*R+N*N)),p=ni(Math.sqrt(U*U+Q*Q)),x=Bo(F,U),v=Math.abs(x)>2e-4?x*qs:0,y=Ft?1/(Ft<0?-Ft:Ft):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Bg(Cn(t,ti)),B&&t.setAttribute("transform",B))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=ni(d),i.scaleY=ni(p),i.rotation=ni(_)+a,i.rotationX=ni(m)+a,i.rotationY=ni(g)+a,i.skewX=v+a,i.skewY=b+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[_n]=ou(c)),i.xOffset=i.yOffset=0,i.force3D=gn.force3D,i.renderTransform=i.svg?KS:Lg?kg:JS,i.uncache=0,i},ou=function(t){return(t=t.split(" "))[0]+" "+t[1]},np=function(t,e,i){var n=Fi(e);return ni(parseFloat(e)+parseFloat(fs(t,"x",i+"px",n)))+n},JS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,kg(t,e)},Xs="0deg",hl="0px",Ys=") ",kg=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,v=i.target,b=i.zOrigin,y="",M=g==="auto"&&t&&t!==1||g===!0;if(b&&(h!==Xs||u!==Xs)){var E=parseFloat(u)*zo,A=Math.sin(E),x=Math.cos(E),S;E=parseFloat(h)*zo,S=Math.cos(E),o=np(v,o,A*S*-b),a=np(v,a,-Math.sin(E)*-b),l=np(v,l,x*S*-b+b)}m!==hl&&(y+="perspective("+m+Ys),(n||s)&&(y+="translate("+n+"%, "+s+"%) "),(M||o!==hl||a!==hl||l!==hl)&&(y+=l!==hl||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ys),c!==Xs&&(y+="rotate("+c+Ys),u!==Xs&&(y+="rotateY("+u+Ys),h!==Xs&&(y+="rotateX("+h+Ys),(f!==Xs||d!==Xs)&&(y+="skew("+f+", "+d+Ys),(p!==1||_!==1)&&(y+="scale("+p+", "+_+Ys),v.style[ti]=y||"translate(0, 0)"},KS=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,v=i.forceCSS,b=parseFloat(o),y=parseFloat(a),M,E,A,x,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=zo,c*=zo,M=Math.cos(l)*h,E=Math.sin(l)*h,A=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=zo,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,x*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),M*=S,E*=S)),M=ni(M),E=ni(E),A=ni(A),x=ni(x)):(M=h,x=f,E=A=0),(b&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(b=fs(d,"x",o,"px"),y=fs(d,"y",a,"px")),(p||_||m||g)&&(b=ni(b+p-(p*M+_*A)+m),y=ni(y+_-(p*E+_*x)+g)),(n||s)&&(S=d.getBBox(),b=ni(b+n/100*S.width),y=ni(y+s/100*S.height)),S="matrix("+M+","+E+","+A+","+x+","+b+","+y+")",d.setAttribute("transform",S),v&&(d.style[ti]=S)},jS=function(t,e,i,n,s){var o=360,a=xi(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?qs:1),c=l-n,u=n+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Mg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Mg)%o-~~(c/o)*o)),t._pt=f=new rn(t._pt,e,i,n,c,LS),f.e=u,f.u="deg",t._props.push(i),f},Dg=function(t,e){for(var i in e)t[i]=e[i];return t},QS=function(t,e,i){var n=Dg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[ti]=e,a=dl(i,1),hs(i,ti),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ti],o[ti]=e,a=dl(i,1),o[ti]=c);for(l in Nr)c=n[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Fi(c),p=Fi(u),h=d!==p?fs(i,l,c,p):parseFloat(c),f=parseFloat(u),t._pt=new rn(t._pt,a,l,h,f-h,rp),t._pt.u=p||0,t._props.push(l));Dg(a,n)};nn("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",o=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(a){return t<2?r+a:"border"+a+r});su[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return Lr(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var fp={name:"css",register:op,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,h,f,d,p,_,m,g,v,b,y,M,E,A,x,S;lp||op(),this.styles=this.styles||Fg(t),x=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(dn[_]&&Kd(_,e,i,n,t,s)))){if(d=typeof u,p=su[_],d==="function"&&(u=u.call(i,n,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Uo(u)),p)p(this,t,_,u,i)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ir.lastIndex=0,Ir.test(c)||(m=Fi(c),g=Fi(u),g?m!==g&&(c=fs(t,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,n,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,t,s):l[_],xi(c)&&~c.indexOf("random(")&&(c=Uo(c)),Fi(c+"")||c==="auto"||(c+=gn.units[_]||Fi(Lr(t,_))||""),(c+"").charAt(1)==="="&&(c=Lr(t,_))):c=Lr(t,_),f=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),h=parseFloat(u),_ in _r&&(_==="autoAlpha"&&(f===1&&Lr(t,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,a.visibility),us(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=_r[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Nr,b){if(this.styles.save(_),S=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Cn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var w=t.style.perspective;t.style.perspective=u,u=Cn(t,"perspective"),w?t.style.perspective=w:hs(t,"perspective")}h=parseFloat(u)}if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||dl(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new rn(this._pt,a,ti,0,1,M.renderTransform,M,0,-1),y.dep=1),_==="scale")this._pt=new rn(this._pt,M,"scaleY",M.scaleY,(v?Gs(M.scaleY,v+h):h)-M.scaleY||0,rp),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(_n,0,a[_n]),u=$S(u),M.svg?ap(t,u,0,E,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==M.zOrigin&&us(this,M,"zOrigin",M.zOrigin,g),us(this,a,_,ou(c),ou(u)));continue}else if(_==="svgOrigin"){ap(t,u,1,E,0,this);continue}else if(_ in Ug){jS(this,M,_,f,v?Gs(f,v+u):u);continue}else if(_==="smoothOrigin"){us(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){QS(this,u,t);continue}}else _ in a||(_=Ho(_)||_);if(b||(h||h===0)&&(f||f===0)&&!FS.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),g=Fi(u)||(_ in gn.units?gn.units[_]:m),m!==g&&(f=fs(t,_,c,g)),this._pt=new rn(this._pt,b?M:a,_,f,(v?Gs(f,v+h):h)-f,!b&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?US:rp),this._pt.u=g||0,b&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=OS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=NS);else if(_ in a)qS.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,n,s);else if(_!=="parseTransform"){tu(_,u);continue}b||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}A&&ip(this)},render:function(t,e){if(e.tween._time||!cp())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Lr,aliases:_r,getSetter:function(t,e,i){var n=_r[e];return n&&n.indexOf(",")<0&&(e=n),e in Nr&&e!==_n&&(t._gsap.x||Lr(t,"x"))?i&&Sg===i?e==="scale"?HS:zS:(Sg=i||{})&&(e==="scale"?VS:GS):t.style&&!Qc(t.style[e])?BS:~e.indexOf("-")?kS:ru(t,e)},core:{_removeProperty:hs,_getMatrix:hp}};Wi.utils.checkPrefix=Ho;Wi.core.getStyleSaver=Fg;(function(r,t,e,i){var n=nn(r+","+t+","+e,function(s){Nr[s]=1});nn(t,function(s){gn.units[s]="deg",Ug[s]=1}),_r[n[13]]=r+","+t,nn(i,function(s){var o=s.split(":");_r[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){gn.units[r]="px"});Wi.registerPlugin(fp);var gt=Wi.registerPlugin(fp)||Wi,H2=gt.core.Tween;function zg(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function tM(r,t,e){return t&&zg(r.prototype,t),e&&zg(r,e),r}var Li,cu,eM,Dn,ds,ps,Go,Vg,Zs,Wo,Gg,Or,tr,Wg,Xg=function(){return Li||typeof window<"u"&&(Li=window.gsap)&&Li.registerPlugin&&Li},Yg=1,Vo=[],fe=[],er=[],ml=Date.now,dp=function(t,e){return e},iM=function(){var t=Wo.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,fe),n.push.apply(n,er),fe=i,er=n,dp=function(o,a){return e[o](a)}},Br=function(t,e){return~er.indexOf(t)&&er[er.indexOf(t)+1][e]},gl=function(t){return!!~Gg.indexOf(t)},on=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:n!==!1,capture:!!s})},sn=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},au="scrollLeft",lu="scrollTop",pp=function(){return Or&&Or.isPressed||fe.cache++},uu=function(t,e){var i=function n(s){if(s||s===0){Yg&&(Dn.history.scrollRestoration="manual");var o=Or&&Or.isPressed;s=n.v=Math.round(s)||(Or&&Or.iOS?1:0),t(s),n.cacheID=fe.cache,o&&dp("ss",s)}else(e||fe.cache!==n.cacheID||dp("ref"))&&(n.cacheID=fe.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Xi={s:au,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:uu(function(r){return arguments.length?Dn.scrollTo(r,pi.sc()):Dn.pageXOffset||ds[au]||ps[au]||Go[au]||0})},pi={s:lu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Xi,sc:uu(function(r){return arguments.length?Dn.scrollTo(Xi.sc(),r):Dn.pageYOffset||ds[lu]||ps[lu]||Go[lu]||0})},an=function(t,e){return(e&&e._ctx&&e._ctx.selector||Li.utils.toArray)(t)[0]||(typeof t=="string"&&Li.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},nM=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},Ur=function(t,e){var i=e.s,n=e.sc;gl(t)&&(t=ds.scrollingElement||ps);var s=fe.indexOf(t),o=n===pi.sc?1:2;!~s&&(s=fe.push(t)-1),fe[s+o]||on(t,"scroll",pp);var a=fe[s+o],l=a||(fe[s+o]=uu(Br(t,i),!0)||(gl(t)?n:uu(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Li.getProperty(t,"scrollBehavior")==="smooth"),l},hu=function(t,e,i){var n=t,s=t,o=ml(),a=o,l=e||50,c=Math.max(500,l*3),u=function(p,_){var m=ml();_||m-o>l?(s=n,n=p,a=o,o=m):i?n+=p:n=s+(p-s)/(m-a)*(o-a)},h=function(){s=n=i?0:n,a=o=0},f=function(p){var _=a,m=s,g=ml();return(p||p===0)&&p!==n&&u(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},pl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Hg=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},qg=function(){Wo=Li.core.globals().ScrollTrigger,Wo&&Wo.core&&iM()},$g=function(t){return Li=t||Xg(),!cu&&Li&&typeof document<"u"&&document.body&&(Dn=window,ds=document,ps=ds.documentElement,Go=ds.body,Gg=[Dn,ds,ps,Go],eM=Li.utils.clamp,Wg=Li.core.context||function(){},Zs="onpointerenter"in Go?"pointer":"mouse",Vg=ri.isTouch=Dn.matchMedia&&Dn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Dn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,tr=ri.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Yg=0},500),cu=1),Wo||qg(),cu};Xi.op=pi;fe.cache=0;var ri=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(i){cu||$g(Li)||console.warn("Please gsap.registerPlugin(Observer)"),Wo||qg();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,p=i.wheelSpeed,_=i.event,m=i.onDragStart,g=i.onDragEnd,v=i.onDrag,b=i.onPress,y=i.onRelease,M=i.onRight,E=i.onLeft,A=i.onUp,x=i.onDown,S=i.onChangeX,w=i.onChangeY,D=i.onChange,R=i.onToggleX,N=i.onToggleY,I=i.onHover,F=i.onHoverEnd,U=i.onMove,B=i.ignoreCheck,Y=i.isNormalizer,V=i.onGestureStart,P=i.onGestureEnd,J=i.onWheel,ot=i.onEnable,_t=i.onDisable,Ft=i.onClick,Q=i.scrollSpeed,lt=i.capture,W=i.allowClicks,K=i.lockAxis,dt=i.onLockAxis;this.target=a=an(a)||ps,this.vars=i,d&&(d=Li.utils.toArray(d)),n=n||1e-9,s=s||0,p=p||1,Q=Q||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Dn.getComputedStyle(Go).lineHeight)||22);var yt,ut,Ot,Ct,Tt,jt,se,G=this,ie=0,xe=0,De=i.passive||!u&&i.passive!==!1,Ut=Ur(a,Xi),Dt=Ur(a,pi),k=Ut(),Ne=Dt(),te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&tr[0]==="pointerdown",L=gl(a),T=a.ownerDocument||ds,X=[0,0,0],$=[0,0,0],tt=0,mt=function(){return tt=ml()},ht=function(st,Zt){return(G.event=st)&&d&&nM(st.target,d)||Zt&&te&&st.pointerType!=="touch"||B&&B(st,Zt)},et=function(){G._vx.reset(),G._vy.reset(),ut.pause(),h&&h(G)},nt=function(){var st=G.deltaX=Hg(X),Zt=G.deltaY=Hg($),ct=Math.abs(st)>=n,Kt=Math.abs(Zt)>=n;D&&(ct||Kt)&&D(G,st,Zt,X,$),ct&&(M&&G.deltaX>0&&M(G),E&&G.deltaX<0&&E(G),S&&S(G),R&&G.deltaX<0!=ie<0&&R(G),ie=G.deltaX,X[0]=X[1]=X[2]=0),Kt&&(x&&G.deltaY>0&&x(G),A&&G.deltaY<0&&A(G),w&&w(G),N&&G.deltaY<0!=xe<0&&N(G),xe=G.deltaY,$[0]=$[1]=$[2]=0),(Ct||Ot)&&(U&&U(G),Ot&&(m&&Ot===1&&m(G),v&&v(G),Ot=0),Ct=!1),jt&&!(jt=!1)&&dt&&dt(G),Tt&&(J(G),Tt=!1),yt=0},Mt=function(st,Zt,ct){X[ct]+=st,$[ct]+=Zt,G._vx.update(st),G._vy.update(Zt),c?yt||(yt=requestAnimationFrame(nt)):nt()},zt=function(st,Zt){K&&!se&&(G.axis=se=Math.abs(st)>Math.abs(Zt)?"x":"y",jt=!0),se!=="y"&&(X[2]+=st,G._vx.update(st,!0)),se!=="x"&&($[2]+=Zt,G._vy.update(Zt,!0)),c?yt||(yt=requestAnimationFrame(nt)):nt()},bt=function(st){if(!ht(st,1)){st=pl(st,u);var Zt=st.clientX,ct=st.clientY,Kt=Zt-G.x,Ht=ct-G.y,oe=G.isDragging;G.x=Zt,G.y=ct,(oe||(Kt||Ht)&&(Math.abs(G.startX-Zt)>=s||Math.abs(G.startY-ct)>=s))&&(Ot||(Ot=oe?2:1),oe||(G.isDragging=!0),zt(Kt,Ht))}},St=G.onPress=function(ft){ht(ft,1)||ft&&ft.button||(G.axis=se=null,ut.pause(),G.isPressed=!0,ft=pl(ft),ie=xe=0,G.startX=G.x=ft.clientX,G.startY=G.y=ft.clientY,G._vx.reset(),G._vy.reset(),on(Y?a:T,tr[1],bt,De,!0),G.deltaX=G.deltaY=0,b&&b(G))},pt=G.onRelease=function(ft){if(!ht(ft,1)){sn(Y?a:T,tr[1],bt,!0);var st=!isNaN(G.y-G.startY),Zt=G.isDragging,ct=Zt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Kt=pl(ft);!ct&&st&&(G._vx.reset(),G._vy.reset(),u&&W&&Li.delayedCall(.08,function(){if(ml()-tt>300&&!ft.defaultPrevented){if(ft.target.click)ft.target.click();else if(T.createEvent){var Ht=T.createEvent("MouseEvents");Ht.initMouseEvent("click",!0,!0,Dn,1,Kt.screenX,Kt.screenY,Kt.clientX,Kt.clientY,!1,!1,!1,!1,0,null),ft.target.dispatchEvent(Ht)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&Zt&&!Y&&ut.restart(!0),Ot&&nt(),g&&Zt&&g(G),y&&y(G,ct)}},qt=function(st){return st.touches&&st.touches.length>1&&(G.isGesturing=!0)&&V(st,G.isDragging)},Qt=function(){return(G.isGesturing=!1)||P(G)},z=function(st){if(!ht(st)){var Zt=Ut(),ct=Dt();Mt((Zt-k)*Q,(ct-Ne)*Q,1),k=Zt,Ne=ct,h&&ut.restart(!0)}},xt=function(st){if(!ht(st)){st=pl(st,u),J&&(Tt=!0);var Zt=(st.deltaMode===1?l:st.deltaMode===2?Dn.innerHeight:1)*p;Mt(st.deltaX*Zt,st.deltaY*Zt,0),h&&!Y&&ut.restart(!0)}},it=function(st){if(!ht(st)){var Zt=st.clientX,ct=st.clientY,Kt=Zt-G.x,Ht=ct-G.y;G.x=Zt,G.y=ct,Ct=!0,h&&ut.restart(!0),(Kt||Ht)&&zt(Kt,Ht)}},wt=function(st){G.event=st,I(G)},At=function(st){G.event=st,F(G)},rt=function(st){return ht(st)||pl(st,u)&&Ft(G)};ut=G._dc=Li.delayedCall(f||.25,et).pause(),G.deltaX=G.deltaY=0,G._vx=hu(0,50,!0),G._vy=hu(0,50,!0),G.scrollX=Ut,G.scrollY=Dt,G.isDragging=G.isGesturing=G.isPressed=!1,Wg(this),G.enable=function(ft){return G.isEnabled||(on(L?T:a,"scroll",pp),o.indexOf("scroll")>=0&&on(L?T:a,"scroll",z,De,lt),o.indexOf("wheel")>=0&&on(a,"wheel",xt,De,lt),(o.indexOf("touch")>=0&&Vg||o.indexOf("pointer")>=0)&&(on(a,tr[0],St,De,lt),on(T,tr[2],pt),on(T,tr[3],pt),W&&on(a,"click",mt,!0,!0),Ft&&on(a,"click",rt),V&&on(T,"gesturestart",qt),P&&on(T,"gestureend",Qt),I&&on(a,Zs+"enter",wt),F&&on(a,Zs+"leave",At),U&&on(a,Zs+"move",it)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Ct=Ot=!1,G._vx.reset(),G._vy.reset(),k=Ut(),Ne=Dt(),ft&&ft.type&&St(ft),ot&&ot(G)),G},G.disable=function(){G.isEnabled&&(Vo.filter(function(ft){return ft!==G&&gl(ft.target)}).length||sn(L?T:a,"scroll",pp),G.isPressed&&(G._vx.reset(),G._vy.reset(),sn(Y?a:T,tr[1],bt,!0)),sn(L?T:a,"scroll",z,lt),sn(a,"wheel",xt,lt),sn(a,tr[0],St,lt),sn(T,tr[2],pt),sn(T,tr[3],pt),sn(a,"click",mt,!0),sn(a,"click",rt),sn(T,"gesturestart",qt),sn(T,"gestureend",Qt),sn(a,Zs+"enter",wt),sn(a,Zs+"leave",At),sn(a,Zs+"move",it),G.isEnabled=G.isPressed=G.isDragging=!1,_t&&_t(G))},G.kill=G.revert=function(){G.disable();var ft=Vo.indexOf(G);ft>=0&&Vo.splice(ft,1),Or===G&&(Or=0)},Vo.push(G),Y&&gl(a)&&(Or=G),G.enable(_)},tM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ri.version="3.15.0";ri.create=function(r){return new ri(r)};ri.register=$g;ri.getAll=function(){return Vo.slice()};ri.getById=function(r){return Vo.filter(function(t){return t.vars.id===r})[0]};Xg()&&Li.registerPlugin(ri);var kt,$o,ge,Re,In,Te,Cp,Au,Rl,bl,xl,fu,Yi,Ru,Sp,cn,Zg,Jg,Zo,f_,mp,d_,ln,Mp,p_,m_,ms,bp,Dp,Jo,Rp,wl,wp,gp,du=1,qi=Date.now,_p=qi(),qn=0,vl=0,Kg=function(t,e,i){var n=Pn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},jg=function(t,e){return e&&(!Pn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},rM=function r(){return vl&&requestAnimationFrame(r)},Qg=function(){return Ru=1},t_=function(){return Ru=0},xr=function(t){return t},yl=function(t){return Math.round(t*1e5)/1e5||0},g_=function(){return typeof window<"u"},__=function(){return kt||g_()&&(kt=window.gsap)&&kt.registerPlugin&&kt},eo=function(t){return!!~Cp.indexOf(t)},x_=function(t){return(t==="Height"?Rp:ge["inner"+t])||In["client"+t]||Te["client"+t]},v_=function(t){return Br(t,"getBoundingClientRect")||(eo(t)?function(){return Tu.width=ge.innerWidth,Tu.height=Rp,Tu}:function(){return kr(t)})},sM=function(t,e,i){var n=i.d,s=i.d2,o=i.a;return(o=Br(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?x_(s):t["client"+s])||0}},oM=function(t,e){return!e||~er.indexOf(t)?v_(t):function(){return Tu}},vr=function(t,e){var i=e.s,n=e.d2,s=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=Br(t,i))?o()-v_(t)()[s]:eo(t)?(In[i]||Te[i])-x_(n):t[i]-t["offset"+n])},pu=function(t,e){for(var i=0;i<Zo.length;i+=3)(!e||~e.indexOf(Zo[i+1]))&&t(Zo[i],Zo[i+1],Zo[i+2])},Pn=function(t){return typeof t=="string"},$i=function(t){return typeof t=="function"},Sl=function(t){return typeof t=="number"},Js=function(t){return typeof t=="object"},_l=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Xo=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},Yo=Math.abs,y_="left",S_="top",Pp="right",Ip="bottom",js="width",Qs="height",El="Right",Tl="Left",Al="Top",Cl="Bottom",mi="padding",Xn="margin",jo="Width",Fp="Height",vi="px",Yn=function(t){return ge.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},aM=function(t){var e=Yn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},e_=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},kr=function(t,e){var i=e&&Yn(t)[Sp]!=="matrix(1, 0, 0, 1, 0, 0)"&&kt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Cu=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},M_=function(t){var e=[],i=t.labels,n=t.duration(),s;for(s in i)e.push(i[s]/n);return e},lM=function(t){return function(e){return kt.utils.snap(M_(t),e)}},Lp=function(t){var e=kt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return e(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=e(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:e(s<0?n-t:n+t)}},cM=function(t){return function(e,i){return Lp(M_(t))(e,i.direction)}},mu=function(t,e,i,n){return i.split(",").forEach(function(s){return t(e,s,n)})},Ci=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},Ai=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},gu=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},i_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_u={toggleActions:"play",anticipatePin:0},Du={top:0,left:0,center:.5,bottom:1,right:1},Mu=function(t,e){if(Pn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in Du?Du[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},xu=function(t,e,i,n,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,p=Re.createElement("div"),_=eo(i)||Br(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?Te:i.tagName==="IFRAME"?i.contentDocument.body:i,v=t.indexOf("start")!==-1,b=v?c:u,y="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(y+=(n===pi?Pp:Ip)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],bu(p,0,n,v),p},bu=function(t,e,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+jo]=1,s["border"+a+jo]=0,s[i.p]=e+"px",kt.set(t,s)},de=[],Ep={},Pl,n_=function(){return qi()-qn>34&&(Pl||(Pl=requestAnimationFrame(zr)))},qo=function(){(!ln||!ln.isPressed||ln.startX>Te.clientWidth)&&(fe.cache++,ln?Pl||(Pl=requestAnimationFrame(zr)):zr(),qn||no("scrollStart"),qn=qi())},xp=function(){m_=ge.innerWidth,p_=ge.innerHeight},Ml=function(t){fe.cache++,(t===!0||!Yi&&!d_&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!Mp||m_!==ge.innerWidth||Math.abs(ge.innerHeight-p_)>ge.innerHeight*.25))&&Au.restart(!0)},io={},uM=[],b_=function r(){return Ai(Lt,"scrollEnd",r)||Ks(!0)},no=function(t){return io[t]&&io[t].map(function(e){return e()})||uM},Rn=[],w_=function(t){for(var e=0;e<Rn.length;e+=5)(!t||Rn[e+4]&&Rn[e+4].query===t)&&(Rn[e].style.cssText=Rn[e+1],Rn[e].getBBox&&Rn[e].setAttribute("transform",Rn[e+2]||""),Rn[e+3].uncache=1)},E_=function(){return fe.forEach(function(t){return $i(t)&&++t.cacheID&&(t.rec=t())})},Np=function(t,e){var i;for(cn=0;cn<de.length;cn++)i=de[cn],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));wl=!0,e&&w_(e),e||no("revert")},T_=function(t,e){fe.cache++,(e||!un)&&fe.forEach(function(i){return $i(i)&&i.cacheID++&&(i.rec=0)}),Pn(t)&&(ge.history.scrollRestoration=Dp=t)},un,to=0,r_,hM=function(){if(r_!==to){var t=r_=to;requestAnimationFrame(function(){return t===to&&Ks(!0)})}},A_=function(){Te.appendChild(Jo),Rp=!ln&&Jo.offsetHeight||ge.innerHeight,Te.removeChild(Jo)},s_=function(t){return Rl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ks=function(t,e){if(In=Re.documentElement,Te=Re.body,Cp=[ge,Re,In,Te],qn&&!t&&!wl){Ci(Lt,"scrollEnd",b_);return}A_(),un=Lt.isRefreshing=!0,wl||E_();var i=no("refreshInit");f_&&Lt.sort(),e||Np(),fe.forEach(function(n){$i(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),de.slice(0).forEach(function(n){return n.refresh()}),wl=!1,de.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),wp=1,s_(!0),de.forEach(function(n){var s=vr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),s_(!1),wp=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),fe.forEach(function(n){$i(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),T_(Dp,1),Au.pause(),to++,un=2,zr(2),de.forEach(function(n){return $i(n.vars.onRefresh)&&n.vars.onRefresh(n)}),un=Lt.isRefreshing=!1,no("refresh")},Tp=0,wu=1,Dl,zr=function(t){if(t===2||!un&&!wl){Lt.isUpdating=!0,Dl&&Dl.update(0);var e=de.length,i=qi(),n=i-_p>=50,s=e&&de[0].scroll();if(wu=Tp>s?-1:1,un||(Tp=s),n&&(qn&&!Ru&&i-qn>200&&(qn=0,no("scrollEnd")),xl=_p,_p=i),wu<0){for(cn=e;cn-- >0;)de[cn]&&de[cn].update(0,n);wu=1}else for(cn=0;cn<e;cn++)de[cn]&&de[cn].update(0,n);Lt.isUpdating=!1}Pl=0},Ap=[y_,S_,Ip,Pp,Xn+Cl,Xn+El,Xn+Al,Xn+Tl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Eu=Ap.concat([js,Qs,"boxSizing","max"+jo,"max"+Fp,"position",Xn,mi,mi+Al,mi+El,mi+Cl,mi+Tl]),fM=function(t,e,i){Ko(i);var n=t._gsap;if(n.spacerIsNative)Ko(n.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},vp=function(t,e,i,n){if(!t._gsap.swappedIn){for(var s=Ap.length,o=e.style,a=t.style,l;s--;)l=Ap[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Ip]=a[Pp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[js]=Cu(t,Xi)+vi,o[Qs]=Cu(t,pi)+vi,o[mi]=a[Xn]=a[S_]=a[y_]="0",Ko(n),a[js]=a["max"+jo]=i[js],a[Qs]=a["max"+Fp]=i[Qs],a[mi]=i[mi],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},dM=/([A-Z])/g,Ko=function(t){if(t){var e=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||kt.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?e[s]=o:e[s]&&e.removeProperty(s.replace(dM,"-$1").toLowerCase())}},vu=function(t){for(var e=Eu.length,i=t.style,n=[],s=0;s<e;s++)n.push(Eu[s],i[Eu[s]]);return n.t=t,n},pM=function(t,e,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Tu={left:0,top:0},o_=function(t,e,i,n,s,o,a,l,c,u,h,f,d,p){$i(t)&&(t=t(l)),Pn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Mu("0"+t.substr(3),i):0));var _=d?d.time():0,m,g,v;if(d&&d.seek(0),isNaN(t)||(t=+t),Sl(t))d&&(t=kt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&bu(a,i,n,!0);else{$i(e)&&(e=e(l));var b=(t||"0").split(" "),y,M,E,A;v=an(e,l)||Te,y=kr(v)||{},(!y||!y.left&&!y.top)&&Yn(v).display==="none"&&(A=v.style.display,v.style.display="block",y=kr(v),A?v.style.display=A:v.style.removeProperty("display")),M=Mu(b[0],y[n.d]),E=Mu(b[1]||"0",i),t=y[n.p]-c[n.p]-u+M+s-E,a&&bu(a,E,n,i-E<20||a._isStart&&E>20),i-=i-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var x=t+i,S=o._isStart;m="scroll"+n.d2,bu(o,x,n,S&&x>20||!S&&(h?Math.max(Te[m],In[m]):o.parentNode[m])<=x+1),h&&(c=kr(a),h&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+vi))}return d&&v&&(m=kr(v),d.seek(f),g=kr(v),d._caScrollDist=m[n.p]-g[n.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},mM=/(webkit|moz|length|cssText|inset)/i,a_=function(t,e,i,n){if(t.parentNode!==e){var s=t.style,o,a;if(e===Te){t._stOrig=s.cssText,a=Yn(t);for(o in a)!+o&&!mM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;kt.core.getCache(t).uncache=1,e.appendChild(t)}},C_=function(t,e,i){var n=e,s=n;return function(o){var a=Math.round(t());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},yu=function(t,e,i){var n={};n[e.p]="+="+i,kt.set(t,n)},l_=function(t,e){var i=Ur(t,e),n="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||i();var _=C_(i,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){fe.cache++,o.tween&&zr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=kt.to(t,l),f};return t[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ci(t,"wheel",i.wheelHandler),Lt.isTouch&&Ci(t,"touchmove",i.wheelHandler),s},Lt=(function(){function r(e,i){$o||r.register(kt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bp(this),this.init(e,i)}var t=r.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!vl){this.update=this.refresh=this.kill=xr;return}i=e_(Pn(i)||Sl(i)||i.nodeType?{trigger:i}:i,_u);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,v=s.onSnapComplete,b=s.once,y=s.snap,M=s.pinReparent,E=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,S=s.preventOverlaps,w=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Xi:pi,D=!h&&h!==0,R=an(i.scroller||ge),N=kt.core.getCache(R),I=eo(R),F=("pinType"in i?i.pinType:Br(R,"pinType")||I&&"fixed")==="fixed",U=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=D&&i.toggleActions.split(" "),Y="markers"in i?i.markers:_u.markers,V=I?0:parseFloat(Yn(R)["border"+w.p2+jo])||0,P=this,J=i.onRefreshInit&&function(){return i.onRefreshInit(P)},ot=sM(R,I,w),_t=oM(R,I),Ft=0,Q=0,lt=0,W=Ur(R,w),K,dt,yt,ut,Ot,Ct,Tt,jt,se,G,ie,xe,De,Ut,Dt,k,Ne,te,L,T,X,$,tt,mt,ht,et,nt,Mt,zt,bt,St,pt,qt,Qt,z,xt,it,wt,At;if(P._startClamp=P._endClamp=!1,P._dir=w,m*=45,P.scroller=R,P.scroll=A?A.time.bind(A):W,ut=W(),P.vars=i,n=n||i.animation,"refreshPriority"in i&&(f_=1,i.refreshPriority===-9999&&(Dl=P)),N.tweenScroll=N.tweenScroll||{top:l_(R,pi),left:l_(R,Xi)},P.tweenTo=K=N.tweenScroll[w.p],P.scrubDuration=function(ct){qt=Sl(ct)&&ct,qt?pt?pt.duration(ct):pt=kt.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:qt,paused:!0,onComplete:function(){return g&&g(P)}}):(pt&&pt.progress(1).kill(),pt=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(h),bt=0,l||(l=n.vars.id)),y&&((!Js(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Te.style&&kt.set(I?[Te,In]:R,{scrollBehavior:"auto"}),fe.forEach(function(ct){return $i(ct)&&ct.target===(I?Re.scrollingElement||In:R)&&(ct.smooth=!1)}),yt=$i(y.snapTo)?y.snapTo:y.snapTo==="labels"?lM(n):y.snapTo==="labelsDirectional"?cM(n):y.directional!==!1?function(ct,Kt){return Lp(y.snapTo)(ct,qi()-Q<500?0:Kt.direction)}:kt.utils.snap(y.snapTo),Qt=y.duration||{min:.1,max:2},Qt=Js(Qt)?bl(Qt.min,Qt.max):bl(Qt,Qt),z=kt.delayedCall(y.delay||qt/2||.1,function(){var ct=W(),Kt=qi()-Q<500,Ht=K.tween;if((Kt||Math.abs(P.getVelocity())<10)&&!Ht&&!Ru&&Ft!==ct){var oe=(ct-Ct)/Ut,hi=n&&!D?n.totalProgress():oe,me=Kt?0:(hi-St)/(qi()-xl)*1e3||0,We=kt.utils.clamp(-oe,1-oe,Yo(me/2)*me/.185),Ei=oe+(y.inertia===!1?0:We),Xe,Oe,ye=y,Qi=ye.onStart,ze=ye.onInterrupt,zi=ye.onComplete;if(Xe=yt(Ei,P),Sl(Xe)||(Xe=Ei),Oe=Math.max(0,Math.round(Ct+Xe*Ut)),ct<=Tt&&ct>=Ct&&Oe!==ct){if(Ht&&!Ht._initted&&Ht.data<=Yo(Oe-ct))return;y.inertia===!1&&(We=Xe-oe),K(Oe,{duration:Qt(Yo(Math.max(Yo(Ei-hi),Yo(Xe-hi))*.185/me/.05||0)),ease:y.ease||"power3",data:Yo(Oe-ct),onInterrupt:function(){return z.restart(!0)&&ze&&Xo(P,ze)},onComplete:function(){P.update(),Ft=W(),n&&!D&&(pt?pt.resetTo("totalProgress",Xe,n._tTime/n._tDur):n.progress(Xe)),bt=St=n&&!D?n.totalProgress():P.progress,v&&v(P),zi&&Xo(P,zi)}},ct,We*Ut,Oe-ct-We*Ut),Qi&&Xo(P,Qi,K.tween)}}else P.isActive&&Ft!==ct&&z.restart(!0)}).pause()),l&&(Ep[l]=P),f=P.trigger=an(f||d!==!0&&d),At=f&&f._gsap&&f._gsap.stRevert,At&&(At=At(P)),d=d===!0?f:an(d),Pn(a)&&(a={targets:f,className:a}),d&&(p===!1||p===Xn||(p=!p&&d.parentNode&&d.parentNode.style&&Yn(d.parentNode).display==="flex"?!1:mi),P.pin=d,dt=kt.core.getCache(d),dt.spacer?Dt=dt.pinState:(E&&(E=an(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),dt.spacerIsNative=!!E,E&&(dt.spacerState=vu(E))),dt.spacer=te=E||Re.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),dt.pinState=Dt=vu(d)),i.force3D!==!1&&kt.set(d,{force3D:!0}),P.spacer=te=dt.spacer,zt=Yn(d),mt=zt[p+w.os2],T=kt.getProperty(d),X=kt.quickSetter(d,w.a,vi),vp(d,te,zt),Ne=vu(d)),Y){xe=Js(Y)?e_(Y,i_):i_,G=xu("scroller-start",l,R,w,xe,0),ie=xu("scroller-end",l,R,w,xe,0,G),L=G["offset"+w.op.d2];var rt=an(Br(R,"content")||R);jt=this.markerStart=xu("start",l,rt,w,xe,L,0,A),se=this.markerEnd=xu("end",l,rt,w,xe,L,0,A),A&&(wt=kt.quickSetter([jt,se],w.a,vi)),!F&&!(er.length&&Br(R,"fixedMarkers")===!0)&&(aM(I?Te:R),kt.set([G,ie],{force3D:!0}),et=kt.quickSetter(G,w.a,vi),Mt=kt.quickSetter(ie,w.a,vi))}if(A){var ft=A.vars.onUpdate,st=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ft&&ft.apply(A,st||[])})}if(P.previous=function(){return de[de.indexOf(P)-1]},P.next=function(){return de[de.indexOf(P)+1]},P.revert=function(ct,Kt){if(!Kt)return P.kill(!0);var Ht=ct!==!1||!P.enabled,oe=Yi;Ht!==P.isReverted&&(Ht&&(xt=Math.max(W(),P.scroll.rec||0),lt=P.progress,it=n&&n.progress()),jt&&[jt,se,G,ie].forEach(function(hi){return hi.style.display=Ht?"none":"block"}),Ht&&(Yi=P,P.update(Ht)),d&&(!M||!P.isActive)&&(Ht?fM(d,te,Dt):vp(d,te,Yn(d),ht)),Ht||P.update(Ht),Yi=oe,P.isReverted=Ht)},P.refresh=function(ct,Kt,Ht,oe){if(!((Yi||!P.enabled)&&!Kt)){if(d&&ct&&qn){Ci(r,"scrollEnd",b_);return}!un&&J&&J(P),Yi=P,K.tween&&!Ht&&(K.tween.kill(),K.tween=0),pt&&pt.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Et){return Et.vars.immediateRender&&Et.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var hi=ot(),me=_t(),We=A?A.duration():vr(R,w),Ei=Ut<=.01||!Ut,Xe=0,Oe=oe||0,ye=Js(Ht)?Ht.end:i.end,Qi=i.endTrigger||f,ze=Js(Ht)?Ht.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),zi=P.pinnedContainer=i.pinnedContainer&&an(i.pinnedContainer,P),tn=f&&Math.max(0,de.indexOf(P))||0,fi=tn,ei,_i,fr,Co,Ti,ai,zn,Do,C,H,j,q,Z;for(Y&&Js(Ht)&&(q=kt.getProperty(G,w.p),Z=kt.getProperty(ie,w.p));fi-- >0;)ai=de[fi],ai.end||ai.refresh(0,1)||(Yi=P),zn=ai.pin,zn&&(zn===f||zn===d||zn===zi)&&!ai.isReverted&&(H||(H=[]),H.unshift(ai),ai.revert(!0,!0)),ai!==de[fi]&&(tn--,fi--);for($i(ze)&&(ze=ze(P)),ze=Kg(ze,"start",P),Ct=o_(ze,f,hi,w,W(),jt,G,P,me,V,F,We,A,P._startClamp&&"_startClamp")||(d?-.001:0),$i(ye)&&(ye=ye(P)),Pn(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(Pn(ze)?ze.split(" ")[0]:"")+ye:(Xe=Mu(ye.substr(2),hi),ye=Pn(ze)?ze:(A?kt.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ct):Ct)+Xe,Qi=f)),ye=Kg(ye,"end",P),Tt=Math.max(Ct,o_(ye||(Qi?"100% 0":We),Qi,hi,w,W()+Xe,se,ie,P,me,V,F,We,A,P._endClamp&&"_endClamp"))||-.001,Xe=0,fi=tn;fi--;)ai=de[fi]||{},zn=ai.pin,zn&&ai.start-ai._pinPush<=Ct&&!A&&ai.end>0&&(ei=ai.end-(P._startClamp?Math.max(0,ai.start):ai.start),(zn===f&&ai.start-ai._pinPush<Ct||zn===zi)&&isNaN(ze)&&(Xe+=ei*(1-ai.progress)),zn===d&&(Oe+=ei));if(Ct+=Xe,Tt+=Xe,P._startClamp&&(P._startClamp+=Xe),P._endClamp&&!un&&(P._endClamp=Tt||-.001,Tt=Math.min(Tt,vr(R,w))),Ut=Tt-Ct||(Ct-=.01)&&.001,Ei&&(lt=kt.utils.clamp(0,1,kt.utils.normalize(Ct,Tt,xt))),P._pinPush=Oe,jt&&Xe&&(ei={},ei[w.a]="+="+Xe,zi&&(ei[w.p]="-="+W()),kt.set([jt,se],ei)),d&&!(wp&&P.end>=vr(R,w)))ei=Yn(d),Co=w===pi,fr=W(),$=parseFloat(T(w.a))+Oe,!We&&Tt>1&&(j=(I?Re.scrollingElement||In:R).style,j={style:j,value:j["overflow"+w.a.toUpperCase()]},I&&Yn(Te)["overflow"+w.a.toUpperCase()]!=="scroll"&&(j.style["overflow"+w.a.toUpperCase()]="scroll")),vp(d,te,ei),Ne=vu(d),_i=kr(d,!0),Do=F&&Ur(R,Co?Xi:pi)(),p?(ht=[p+w.os2,Ut+Oe+vi],ht.t=te,fi=p===mi?Cu(d,w)+Ut+Oe:0,fi&&(ht.push(w.d,fi+vi),te.style.flexBasis!=="auto"&&(te.style.flexBasis=fi+vi)),Ko(ht),zi&&de.forEach(function(Et){Et.pin===zi&&Et.vars.pinSpacing!==!1&&(Et._subPinOffset=!0)}),F&&W(xt)):(fi=Cu(d,w),fi&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=fi+vi)),F&&(Ti={top:_i.top+(Co?fr-Ct:Do)+vi,left:_i.left+(Co?Do:fr-Ct)+vi,boxSizing:"border-box",position:"fixed"},Ti[js]=Ti["max"+jo]=Math.ceil(_i.width)+vi,Ti[Qs]=Ti["max"+Fp]=Math.ceil(_i.height)+vi,Ti[Xn]=Ti[Xn+Al]=Ti[Xn+El]=Ti[Xn+Cl]=Ti[Xn+Tl]="0",Ti[mi]=ei[mi],Ti[mi+Al]=ei[mi+Al],Ti[mi+El]=ei[mi+El],Ti[mi+Cl]=ei[mi+Cl],Ti[mi+Tl]=ei[mi+Tl],k=pM(Dt,Ti,M),un&&W(0)),n?(C=n._initted,mp(1),n.render(n.duration(),!0,!0),tt=T(w.a)-$+Ut+Oe,nt=Math.abs(Ut-tt)>1,F&&nt&&k.splice(k.length-2,2),n.render(0,!0,!0),C||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),mp(0)):tt=Ut,j&&(j.value?j.style["overflow"+w.a.toUpperCase()]=j.value:j.style.removeProperty("overflow-"+w.a));else if(f&&W()&&!A)for(_i=f.parentNode;_i&&_i!==Te;)_i._pinOffset&&(Ct-=_i._pinOffset,Tt-=_i._pinOffset),_i=_i.parentNode;H&&H.forEach(function(Et){return Et.revert(!1,!0)}),P.start=Ct,P.end=Tt,ut=Ot=un?xt:W(),!A&&!un&&(ut<xt&&W(xt),P.scroll.rec=0),P.revert(!1,!0),Q=qi(),z&&(Ft=-1,z.restart(!0)),Yi=0,n&&D&&(n._initted||it)&&n.progress()!==it&&n.progress(it||0,!0).render(n.time(),!0,!0),(Ei||lt!==P.progress||A||_||n&&!n._initted)&&(n&&!D&&(n._initted||lt||n.vars.immediateRender!==!1)&&n.totalProgress(A&&Ct<-.001&&!lt?kt.utils.normalize(Ct,Tt,0):lt,!0),P.progress=Ei||(ut-Ct)/Ut===lt?0:lt),d&&p&&(te._pinOffset=Math.round(P.progress*tt)),pt&&pt.invalidate(),isNaN(q)||(q-=kt.getProperty(G,w.p),Z-=kt.getProperty(ie,w.p),yu(G,w,q),yu(jt,w,q-(oe||0)),yu(ie,w,Z),yu(se,w,Z-(oe||0))),Ei&&!un&&P.update(),u&&!un&&!De&&(De=!0,u(P),De=!1)}},P.getVelocity=function(){return(W()-Ot)/(qi()-xl)*1e3||0},P.endAnimation=function(){_l(P.callbackAnimation),n&&(pt?pt.progress(1):n.paused()?D||_l(n,P.direction<0,1):_l(n,n.reversed()))},P.labelToScroll=function(ct){return n&&n.labels&&(Ct||P.refresh()||Ct)+n.labels[ct]/n.duration()*Ut||0},P.getTrailing=function(ct){var Kt=de.indexOf(P),Ht=P.direction>0?de.slice(0,Kt).reverse():de.slice(Kt+1);return(Pn(ct)?Ht.filter(function(oe){return oe.vars.preventOverlaps===ct}):Ht).filter(function(oe){return P.direction>0?oe.end<=Ct:oe.start>=Tt})},P.update=function(ct,Kt,Ht){if(!(A&&!Ht&&!ct)){var oe=un===!0?xt:P.scroll(),hi=ct?0:(oe-Ct)/Ut,me=hi<0?0:hi>1?1:hi||0,We=P.progress,Ei,Xe,Oe,ye,Qi,ze,zi,tn;if(Kt&&(Ot=ut,ut=A?W():oe,y&&(St=bt,bt=n&&!D?n.totalProgress():me)),m&&d&&!Yi&&!du&&qn&&(!me&&Ct<oe+(oe-Ot)/(qi()-xl)*m?me=1e-4:me===1&&Tt>oe+(oe-Ot)/(qi()-xl)*m&&(me=.9999)),me!==We&&P.enabled){if(Ei=P.isActive=!!me&&me<1,Xe=!!We&&We<1,ze=Ei!==Xe,Qi=ze||!!me!=!!We,P.direction=me>We?1:-1,P.progress=me,Qi&&!Yi&&(Oe=me&&!We?0:me===1?1:We===1?2:3,D&&(ye=!ze&&B[Oe+1]!=="none"&&B[Oe+1]||B[Oe],tn=n&&(ye==="complete"||ye==="reset"||ye in n))),S&&(ze||tn)&&(tn||h||!n)&&($i(S)?S(P):P.getTrailing(S).forEach(function(fr){return fr.endAnimation()})),D||(pt&&!Yi&&!du?(pt._dp._time-pt._start!==pt._time&&pt.render(pt._dp._time-pt._start),pt.resetTo?pt.resetTo("totalProgress",me,n._tTime/n._tDur):(pt.vars.totalProgress=me,pt.invalidate().restart())):n&&n.totalProgress(me,!!(Yi&&(Q||ct)))),d){if(ct&&p&&(te.style[p+w.os2]=mt),!F)X(yl($+tt*me));else if(Qi){if(zi=!ct&&me>We&&Tt+1>oe&&oe+1>=vr(R,w),M)if(!ct&&(Ei||zi)){var fi=kr(d,!0),ei=oe-Ct;a_(d,Te,fi.top+(w===pi?ei:0)+vi,fi.left+(w===pi?0:ei)+vi)}else a_(d,te);Ko(Ei||zi?k:Ne),nt&&me<1&&Ei||X($+(me===1&&!zi?tt:0))}}y&&!K.tween&&!Yi&&!du&&z.restart(!0),a&&(ze||b&&me&&(me<1||!gp))&&Rl(a.targets).forEach(function(fr){return fr.classList[Ei||b?"add":"remove"](a.className)}),o&&!D&&!ct&&o(P),Qi&&!Yi?(D&&(tn&&(ye==="complete"?n.pause().totalProgress(1):ye==="reset"?n.restart(!0).pause():ye==="restart"?n.restart(!0):n[ye]()),o&&o(P)),(ze||!gp)&&(c&&ze&&Xo(P,c),U[Oe]&&Xo(P,U[Oe]),b&&(me===1?P.kill(!1,1):U[Oe]=0),ze||(Oe=me===1?1:3,U[Oe]&&Xo(P,U[Oe]))),x&&!Ei&&Math.abs(P.getVelocity())>(Sl(x)?x:2500)&&(_l(P.callbackAnimation),pt?pt.progress(1):_l(n,ye==="reverse"?1:!me,1))):D&&o&&!Yi&&o(P)}if(Mt){var _i=A?oe/A.duration()*(A._caScrollDist||0):oe;et(_i+(G._isFlipped?1:0)),Mt(_i)}wt&&wt(-oe/A.duration()*(A._caScrollDist||0))}},P.enable=function(ct,Kt){P.enabled||(P.enabled=!0,Ci(R,"resize",Ml),I||Ci(R,"scroll",qo),J&&Ci(r,"refreshInit",J),ct!==!1&&(P.progress=lt=0,ut=Ot=Ft=W()),Kt!==!1&&P.refresh())},P.getTween=function(ct){return ct&&K?K.tween:pt},P.setPositions=function(ct,Kt,Ht,oe){if(A){var hi=A.scrollTrigger,me=A.duration(),We=hi.end-hi.start;ct=hi.start+We*ct/me,Kt=hi.start+We*Kt/me}P.refresh(!1,!1,{start:jg(ct,Ht&&!!P._startClamp),end:jg(Kt,Ht&&!!P._endClamp)},oe),P.update()},P.adjustPinSpacing=function(ct){if(ht&&ct){var Kt=ht.indexOf(w.d)+1;ht[Kt]=parseFloat(ht[Kt])+ct+vi,ht[1]=parseFloat(ht[1])+ct+vi,Ko(ht)}},P.disable=function(ct,Kt){if(ct!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Kt||pt&&pt.pause(),xt=0,dt&&(dt.uncache=1),J&&Ai(r,"refreshInit",J),z&&(z.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!I)){for(var Ht=de.length;Ht--;)if(de[Ht].scroller===R&&de[Ht]!==P)return;Ai(R,"resize",Ml),I||Ai(R,"scroll",qo)}},P.kill=function(ct,Kt){P.disable(ct,Kt),pt&&!Kt&&pt.kill(),l&&delete Ep[l];var Ht=de.indexOf(P);Ht>=0&&de.splice(Ht,1),Ht===cn&&wu>0&&cn--,Ht=0,de.forEach(function(oe){return oe.scroller===P.scroller&&(Ht=1)}),Ht||un||(P.scroll.rec=0),n&&(n.scrollTrigger=null,ct&&n.revert({kill:!1}),Kt||n.kill()),jt&&[jt,se,G,ie].forEach(function(oe){return oe.parentNode&&oe.parentNode.removeChild(oe)}),Dl===P&&(Dl=0),d&&(dt&&(dt.uncache=1),Ht=0,de.forEach(function(oe){return oe.pin===d&&Ht++}),Ht||(dt.spacer=0)),i.onKill&&i.onKill(P)},de.push(P),P.enable(!1,!1),At&&At(P),n&&n.add&&!Ut){var Zt=P.update;P.update=function(){P.update=Zt,fe.cache++,Ct||Tt||P.refresh()},kt.delayedCall(.01,P.update),Ut=.01,Ct=Tt=0}else P.refresh();d&&hM()},r.register=function(i){return $o||(kt=i||__(),g_()&&window.document&&r.enable(),$o=vl),$o},r.defaults=function(i){if(i)for(var n in i)_u[n]=i[n];return _u},r.disable=function(i,n){vl=0,de.forEach(function(o){return o[n?"kill":"disable"](i)}),Ai(ge,"wheel",qo),Ai(Re,"scroll",qo),clearInterval(fu),Ai(Re,"touchcancel",xr),Ai(Te,"touchstart",xr),mu(Ai,Re,"pointerdown,touchstart,mousedown",Qg),mu(Ai,Re,"pointerup,touchend,mouseup",t_),Au.kill(),pu(Ai);for(var s=0;s<fe.length;s+=3)gu(Ai,fe[s],fe[s+1]),gu(Ai,fe[s],fe[s+2])},r.enable=function(){if(ge=window,Re=document,In=Re.documentElement,Te=Re.body,kt){if(Rl=kt.utils.toArray,bl=kt.utils.clamp,bp=kt.core.context||xr,mp=kt.core.suppressOverwrites||xr,Dp=ge.history.scrollRestoration||"auto",Tp=ge.pageYOffset||0,kt.core.globals("ScrollTrigger",r),Te){vl=1,Jo=document.createElement("div"),Jo.style.height="100vh",Jo.style.position="absolute",A_(),rM(),ri.register(kt),r.isTouch=ri.isTouch,ms=ri.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mp=ri.isTouch===1,Ci(ge,"wheel",qo),Cp=[ge,Re,In,Te],kt.matchMedia?(r.matchMedia=function(u){var h=kt.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},kt.addEventListener("matchMediaInit",function(){E_(),Np()}),kt.addEventListener("matchMediaRevert",function(){return w_()}),kt.addEventListener("matchMedia",function(){Ks(0,1),no("matchMedia")}),kt.matchMedia().add("(orientation: portrait)",function(){return xp(),xp})):console.warn("Requires GSAP 3.11.0 or later"),xp(),Ci(Re,"scroll",qo);var i=Te.hasAttribute("style"),n=Te.style,s=n.borderTopStyle,o=kt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=kr(Te),pi.m=Math.round(a.top+pi.sc())||0,Xi.m=Math.round(a.left+Xi.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(Te.setAttribute("style",""),Te.removeAttribute("style")),fu=setInterval(n_,250),kt.delayedCall(.5,function(){return du=0}),Ci(Re,"touchcancel",xr),Ci(Te,"touchstart",xr),mu(Ci,Re,"pointerdown,touchstart,mousedown",Qg),mu(Ci,Re,"pointerup,touchend,mouseup",t_),Sp=kt.utils.checkPrefix("transform"),Eu.push(Sp),$o=qi(),Au=kt.delayedCall(.2,Ks).pause(),Zo=[Re,"visibilitychange",function(){var u=ge.innerWidth,h=ge.innerHeight;Re.hidden?(Zg=u,Jg=h):(Zg!==u||Jg!==h)&&Ml()},Re,"DOMContentLoaded",Ks,ge,"load",Ks,ge,"resize",Ml],pu(Ci),de.forEach(function(u){return u.enable(0,1)}),l=0;l<fe.length;l+=3)gu(Ai,fe[l],fe[l+1]),gu(Ai,fe[l],fe[l+2])}else if(Re){var c=function u(){r.enable(),Re.removeEventListener("DOMContentLoaded",u)};Re.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(gp=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(fu)||(fu=n)&&setInterval(n_,n),"ignoreMobileResize"in i&&(Mp=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(pu(Ai)||pu(Ci,i.autoRefreshEvents||"none"),d_=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=an(i),o=fe.indexOf(s),a=eo(s);~o&&fe.splice(o,a?6:2),n&&(a?er.unshift(ge,n,Te,n,In,n):er.unshift(s,n))},r.clearMatchMedia=function(i){de.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(Pn(i)?an(i):i).getBoundingClientRect(),a=o[s?js:Qs]*n||0;return s?o.right-a>0&&o.left+a<ge.innerWidth:o.bottom-a>0&&o.top+a<ge.innerHeight},r.positionInViewport=function(i,n,s){Pn(i)&&(i=an(i));var o=i.getBoundingClientRect(),a=o[s?js:Qs],l=n==null?a/2:n in Du?Du[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/ge.innerWidth:(o.top+l)/ge.innerHeight},r.killAll=function(i){if(de.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=io.killAll||[];io={},n.forEach(function(s){return s()})}},r})();Lt.version="3.15.0";Lt.saveStyles=function(r){return r?Rl(r).forEach(function(t){if(t&&t.style){var e=Rn.indexOf(t);e>=0&&Rn.splice(e,5),Rn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),kt.core.getCache(t),bp())}}):Rn};Lt.revert=function(r,t){return Np(!r,t)};Lt.create=function(r,t){return new Lt(r,t)};Lt.refresh=function(r){return r?Ml(!0):($o||Lt.register())&&Ks(!0)};Lt.update=function(r){return++fe.cache&&zr(r===!0?2:0)};Lt.clearScrollMemory=T_;Lt.maxScroll=function(r,t){return vr(r,t?Xi:pi)};Lt.getScrollFunc=function(r,t){return Ur(an(r),t?Xi:pi)};Lt.getById=function(r){return Ep[r]};Lt.getAll=function(){return de.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Lt.isScrolling=function(){return!!qn};Lt.snapDirectional=Lp;Lt.addEventListener=function(r,t){var e=io[r]||(io[r]=[]);~e.indexOf(t)||e.push(t)};Lt.removeEventListener=function(r,t){var e=io[r],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Lt.batch=function(r,t){var e=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=kt.delayedCall(n,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),s<=h.length&&d.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&$i(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return $i(s)&&(s=s(),Ci(Lt,"refresh",function(){return s=t.batchMax()})),Rl(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(Lt.create(c))}),e};var c_=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},yp=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ri.isTouch?" pinch-zoom":""):"none",t===In&&r(Te,e)},Su={auto:1,scroll:1},gM=function(t){var e=t.event,i=t.target,n=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||kt.core.getCache(s),a=qi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Su[(l=Yn(s)).overflowY]||Su[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!eo(s)&&(Su[(l=Yn(s)).overflowY]||Su[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},D_=function(t,e,i,n){return ri.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&gM,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ci(Re,ri.eventTypes[0],h_,!1,!0)},onDisable:function(){return Ai(Re,ri.eventTypes[0],h_,!0)}})},_M=/(input|label|select|textarea)/i,u_,h_=function(t){var e=_M.test(t.target.tagName);(e||u_)&&(t._gsapAllow=!0,u_=e)},xM=function(t){Js(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=an(t.target)||In,u=kt.core.globals().ScrollSmoother,h=u&&u.get(),f=ms&&(t.content&&an(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Ur(c,pi),p=Ur(c,Xi),_=1,m=(ri.isTouch&&ge.visualViewport?ge.visualViewport.scale*ge.visualViewport.width:ge.outerWidth)/ge.innerWidth,g=0,v=$i(n)?function(){return n(a)}:function(){return n||2.8},b,y,M=D_(c,t.type,!0,s),E=function(){return y=!1},A=xr,x=xr,S=function(){l=vr(c,pi),x=bl(ms?1:0,l),i&&(A=bl(0,vr(c,Xi))),b=to},w=function(){f._gsap.y=yl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(y){requestAnimationFrame(E);var Y=yl(a.deltaY/2),V=x(d.v-Y);if(f&&V!==d.v+d.offset){d.offset=V-d.v;var P=yl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=fe.cache,zr()}return!0}d.offset&&w(),y=!0},R,N,I,F,U=function(){S(),R.isActive()&&R.vars.scrollY>l&&(d()>l?R.progress(1)&&d(l):R.resetTo("scrollY",l))};return f&&kt.set(f,{y:"+=0"}),t.ignoreCheck=function(B){return ms&&B.type==="touchmove"&&D(B)||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},t.onPress=function(){y=!1;var B=_;_=yl((ge.visualViewport&&ge.visualViewport.scale||1)/m),R.pause(),B!==_&&yp(c,_>1.01?!0:i?!1:"x"),N=p(),I=d(),S(),b=to},t.onRelease=t.onGestureStart=function(B,Y){if(d.offset&&w(),!Y)F.restart(!0);else{fe.cache++;var V=v(),P,J;i&&(P=p(),J=P+V*.05*-B.velocityX/.227,V*=c_(p,P,J,vr(c,Xi)),R.vars.scrollX=A(J)),P=d(),J=P+V*.05*-B.velocityY/.227,V*=c_(d,P,J,vr(c,pi)),R.vars.scrollY=x(J),R.invalidate().duration(V).play(.01),(ms&&R.vars.scrollY>=l||P>=l-1)&&kt.to({},{onUpdate:U,duration:V})}o&&o(B)},t.onWheel=function(){R._ts&&R.pause(),qi()-g>1e3&&(b=0,g=qi())},t.onChange=function(B,Y,V,P,J){if(to!==b&&S(),Y&&i&&p(A(P[2]===Y?N+(B.startX-B.x):p()+Y-P[1])),V){d.offset&&w();var ot=J[2]===V,_t=ot?I+B.startY-B.y:d()+V-J[1],Ft=x(_t);ot&&_t!==Ft&&(I+=Ft-_t),d(Ft)}(V||Y)&&zr()},t.onEnable=function(){yp(c,i?!1:"x"),Lt.addEventListener("refresh",U),Ci(ge,"resize",U),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),M.enable()},t.onDisable=function(){yp(c,!0),Ai(ge,"resize",U),Lt.removeEventListener("refresh",U),M.kill()},t.lockAxis=t.lockAxis!==!1,a=new ri(t),a.iOS=ms,ms&&!d()&&d(1),ms&&kt.ticker.add(xr),F=a._dc,R=kt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:C_(d,d(),function(){return R.pause()})},onUpdate:zr,onComplete:F.vars.onComplete}),a};Lt.sort=function(r){if($i(r))return de.sort(r);var t=ge.pageYOffset||0;return Lt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ge.innerHeight}),de.sort(r||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Lt.observe=function(r){return new ri(r)};Lt.normalizeScroll=function(r){if(typeof r>"u")return ln;if(r===!0&&ln)return ln.enable();if(r===!1){ln&&ln.kill(),ln=r;return}var t=r instanceof ri?r:xM(r);return ln&&ln.target===t.target&&ln.kill(),eo(t.target)&&(ln=t),t};Lt.core={_getVelocityProp:hu,_inputObserver:D_,_scrollers:fe,_proxies:er,bridge:{ss:function(){qn||no("scrollStart"),qn=qi()},ref:function(){return Yi}}};__()&&kt.registerPlugin(Lt);var Il,Fl,R_=typeof Symbol=="function"?Symbol():"_split",Up,vM=()=>Up||ta.register(window.gsap),P_=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ll=r=>r?typeof r=="string"?Ll(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...Ll(e)):t.push(e),t),[]):[r]:[],I_=r=>Ll(r).filter(t=>t&&t.nodeType===1),Bp=[],Op=function(){},yM={add:r=>r()},SM=/\s+/g,F_=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Pu={left:0,top:0,width:0,height:0},MM=(r,t)=>{for(;++t<r.length&&r[t]===Pu;);return r[t]||Pu},L_=({element:r,html:t,ariaL:e,ariaH:i})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")},N_=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||Bp),i=r.length,n,s,o,a;if(e.size)for(;--i>-1;){s=r[i];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(n=0,a=s;o.startsWith(a+=r[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){r[i]=o,r.splice(i+1,n);break}}}}return r},O_=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),Qo=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),kp=(r,t,e)=>{let i=t[r+"sClass"]||"",{tag:n="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=u=>{let h=document.createElement(n),f=e.length+1;return i&&(h.className=i+(l?" "+i+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),n!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,e.push(h),h};return l&&(i=i.replace("++","")),c.collection=e,c},bM=(r,t,e,i)=>{let n=kp("line",e,i),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},U_=(r,t,e,i,n,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=t,m=r.getBoundingClientRect(),g=m,v=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",b=0,y=e.collection,M,E,A,x,S,w,D,R,N,I,F,U,B,Y,V,P,J,ot;for(typeof d=="object"?(A=d.delimiter||d,E=d.replaceWith||""):E=d===""?"":d||" ",M=E!==" ";f<h.length;f++)if(x=h[f],x.nodeType===3){for(V=x.textContent||"",p?V=V.replace(SM," "):v&&(V=V.replace(/\n/g,E+`
`)),_&&(V=_(V,r)),x.textContent=V,S=E||A?V.split(A||E):V.match(a)||Bp,J=S[S.length-1],R=M?J.slice(-1)===" ":!J,J||S.pop(),g=m,D=M?S[0].charAt(0)===" ":!S[0],D&&Qo(" ",r,x),S[0]||S.shift(),N_(S,l),s&&c||(x.textContent=""),N=1;N<=S.length;N++)if(P=S[N-1],!p&&v&&P.charAt(0)===`
`&&((u=x.previousSibling)==null||u.remove(),Qo(document.createElement("br"),r,x),P=P.slice(1)),!p&&P==="")Qo(E,r,x);else if(P===" ")r.insertBefore(document.createTextNode(" "),x);else{if(M&&P.charAt(0)===" "&&Qo(" ",r,x),b&&N===1&&!D&&y.indexOf(b.parentNode)>-1?(w=y[y.length-1],w.appendChild(document.createTextNode(i?"":P))):(w=e(i?"":P),Qo(w,r,x),b&&N===1&&!D&&w.insertBefore(b,w.firstChild)),i)for(F=P_?N_([...P_.segment(P)].map(_t=>_t.segment),l):P.match(a)||Bp,ot=0;ot<F.length;ot++)w.appendChild(F[ot]===" "?document.createTextNode(" "):i(F[ot]));if(s&&c){if(V=x.textContent=V.substring(P.length+1,V.length),I=w.getBoundingClientRect(),I.top>g.top&&I.left<=g.left){for(U=r.cloneNode(),B=r.childNodes[0];B&&B!==w;)Y=B,B=B.nextSibling,U.appendChild(Y);r.parentNode.insertBefore(U,r),n&&O_(U)}g=I}(N<S.length||R)&&Qo(N>=S.length?" ":M&&P.slice(-1)===" "?" "+E:E,r,x)}r.removeChild(x),b=0}else x.nodeType===1&&(o&&o.indexOf(x)>-1?(y.indexOf(x.previousSibling)>-1&&y[y.length-1].appendChild(x),b=x):(U_(x,t,e,i,n,s,o,a,l,!0),b=0),n&&O_(x))},B_=class k_{constructor(t,e){this.isSplit=!1,vM(),this.elements=I_(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[R_])==null||a._data.orig.filter(({element:l})=>l===o).forEach(L_)),o[R_]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n,s=()=>{let o=i.length,a;for(;o--;){a=i[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(n),n=setTimeout(s,200)})},Op(this),this.split(e)}split(t){return(this._ctx||yM).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,h=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,d=h&&!f&&!u,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+F_.source,"gu"):F_,m=!!t.ignore&&I_(t.ignore),{orig:g,animTime:v,obs:b}=this._data,y;(h||f||u)&&(this.elements.forEach((M,E)=>{g[E]={element:M,html:M.innerHTML,ariaL:M.getAttribute("aria-label"),ariaH:M.getAttribute("aria-hidden")},i==="auto"?M.setAttribute("aria-label",(M.textContent||"").trim()):i==="hidden"&&M.setAttribute("aria-hidden","true");let A=[],x=[],S=[],w=h?kp("char",t,A):null,D=kp("word",t,x),R,N,I,F;if(U_(M,t,D,w,d,n&&(u||d),m,_,p,!1),u){let U=Ll(M.childNodes),B=bM(M,U,t,S),Y,V=[],P=0,J=U.map(Ft=>Ft.nodeType===1?Ft.getBoundingClientRect():Pu),ot=Pu,_t;for(R=0;R<U.length;R++)Y=U[R],Y.nodeType===1&&(Y.nodeName==="BR"?((!R||U[R-1].nodeName!=="BR")&&(V.push(Y),B(P,R+1)),P=R+1,ot=MM(J,R)):(_t=J[R],R&&_t.top>ot.top&&_t.left<ot.left+ot.width-1&&(B(P,R),P=R),ot=_t));P<R&&B(P,R),V.forEach(Ft=>{var Q;return(Q=Ft.parentNode)==null?void 0:Q.removeChild(Ft)})}if(!f){for(R=0;R<x.length;R++)if(N=x[R],h||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!u){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";N.firstChild;)I.appendChild(N.firstChild);N.replaceWith(I)}else N.replaceWith(...N.childNodes);else F=N.nextSibling,F&&F.nodeType===3&&(F.textContent=(N.textContent||"")+(F.textContent||""),N.remove());x.length=0,M.normalize()}this.lines.push(...S),this.words.push(...x),this.chars.push(...A)}),c&&this[c]&&this.masks.push(...this[c].map(M=>{let E=M.cloneNode();return M.replaceWith(E),E.appendChild(M),M.className&&(E.className=M.className.trim().split(" ").map(A=>A+"-mask").join(" ")),E.style.overflow="clip",E}))),this.isSplit=!0,Fl&&u&&a&&Fl.addEventListener("loadingdone",this._split),(y=o&&o(this))&&y.totalTime&&(this._data.anim=v?y.totalTime(v):y),u&&a&&this.elements.forEach((M,E)=>{g[E].width=M.offsetWidth,b&&b.observe(M)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Fl?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(L_),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new k_(t,e)}static register(t){Il=Il||t||window.gsap,Il&&(Ll=Il.utils.toArray,Op=Il.core.context||Op),!Up&&window.innerWidth>0&&(Fl=document.fonts,Up=!0)}};B_.version="3.15.0";var ta=B_;var wM=/(?:^\s+|\s+$)/g,EM=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function ea(r){var t=r.nodeType,e="";if(t===1||t===9||t===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)e+=ea(r)}else if(t===3||t===4)return r.nodeValue;return e}function Iu(r,t,e,i,n){for(var s=r.firstChild,o=[],a;s;)s.nodeType===3?(a=(s.nodeValue+"").replace(/^\n+/g,""),i||(a=a.replace(/\s+/g," ")),o.push.apply(o,xn(a,t,e,i,n))):(s.nodeName+"").toLowerCase()==="br"?o[o.length-1]+="<br>":o.push(s.outerHTML),s=s.nextSibling;if(!n)for(a=o.length;a--;)o[a]==="&"&&o.splice(a,1,"&amp;");return o}function xn(r,t,e,i,n){if(r+="",e&&(r=r.trim?r.trim():r.replace(wM,"")),t&&t!=="")return r.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var s=[],o=r.length,a=0,l,c;a<o;a++)c=r.charAt(a),(c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||r.charCodeAt(a+1)>=65024&&r.charCodeAt(a+1)<=65039)&&(l=((r.substr(a,12).split(EM)||[])[1]||"").length||2,c=r.substr(a,l),s.emoji=1,a+=l-1),s.push(n?c:c===">"?"&gt;":c==="<"?"&lt;":i&&c===" "&&(r.charAt(a-1)===" "||r.charAt(a+1)===" ")?"&nbsp;":c);return s}var Fu=(function(){function r(e){this.chars=xn(e),this.sets=[],this.length=50;for(var i=0;i<20;i++)this.sets[i]=H_(80,this.chars)}var t=r.prototype;return t.grow=function(i){for(var n=0;n<20;n++)this.sets[n]+=H_(i-this.length,this.chars);this.length=i},r})(),ro,W_,X_=function(){return ro||typeof window<"u"&&(ro=window.gsap)&&ro.registerPlugin&&ro},TM=1,z_=/\s+/g,H_=function(t,e){for(var i=e.length,n="";--t>-1;)n+=e[~~(Math.random()*i)];return n},zp="ABCDEFGHIJKLMNOPQRSTUVWXYZ",V_=zp.toLowerCase(),AM={upperCase:new Fu(zp),lowerCase:new Fu(V_),upperAndLowerCase:new Fu(zp+V_)},G_=function(){W_=ro=X_()},Nl={version:"3.15.0",name:"scrambleText",register:function(t,e,i){ro=t,G_()},init:function(t,e,i,n,s){if(W_||G_(),this.prop="innerHTML"in t?"innerHTML":"textContent"in t?"textContent":0,!!this.prop){this.target=t,typeof e!="object"&&(e={text:e});var o=e.text||e.value||"",a=e.trim!==!1,l=this,c,u,h,f;return l.delimiter=c=e.delimiter||"",l.original=xn(ea(t).replace(z_," ").split("&nbsp;").join(""),c,a),(o==="{original}"||o===!0||o==null)&&(o=l.original.join(c)),l.text=xn((o||"").replace(z_," "),c,a),l.hasClass=!!(e.newClass||e.oldClass),l.newClass=e.newClass,l.oldClass=e.oldClass,f=c==="",l.textHasEmoji=f&&!!l.text.emoji,l.charsHaveEmoji=!!e.chars&&!!xn(e.chars).emoji,l.length=f?l.original.length:l.original.join(c).length,l.lengthDif=(f?l.text.length:l.text.join(c).length)-l.length,l.fillChar=e.fillChar||e.chars&&~e.chars.indexOf(" ")?"&nbsp;":"",l.charSet=h=AM[e.chars||"upperCase"]||new Fu(e.chars),l.speed=.05/(e.speed||1),l.prevScrambleTime=0,l.setIndex=Math.random()*20|0,u=l.length+Math.max(l.lengthDif,0),u>h.length&&h.grow(u),l.chars=h.sets[l.setIndex],l.revealDelay=e.revealDelay||0,l.tweenLength=e.tweenLength!==!1,l.tween=i,l.rightToLeft=!!e.rightToLeft,l._props.push("scrambleText","text"),TM}},render:function(t,e){var i=e.target,n=e.prop,s=e.text,o=e.delimiter,a=e.tween,l=e.prevScrambleTime,c=e.revealDelay,u=e.setIndex,h=e.chars,f=e.charSet,d=e.length,p=e.textHasEmoji,_=e.charsHaveEmoji,m=e.lengthDif,g=e.tweenLength,v=e.oldClass,b=e.newClass,y=e.rightToLeft,M=e.fillChar,E=e.speed,A=e.original,x=e.hasClass,S=s.length,w=a._time,D=w-l,R,N,I,F,U,B,Y,V,P,J,ot;c&&(a._from&&(w=a._dur-w),t=w===0?0:w<c?1e-6:w===a._dur?1:a._ease((w-c)/(a._dur-c))),t<0?t=0:t>1&&(t=1),y&&(t=1-t),R=~~(t*S+.5),t?((D>E||D<-E)&&(e.setIndex=u=(u+(Math.random()*19|0))%20,e.chars=f.sets[u],e.prevScrambleTime+=D),F=h):F=A.join(o),ot=a._from?t:1-t,J=d+(g?a._from?ot*ot*ot:1-ot*ot*ot:1)*m,y?t===1&&(a._from||a.data==="isFromStart")?(I="",F=A.join(o)):(Y=s.slice(R).join(o),_?I=xn(F).slice(0,J-(p?xn(Y):Y).length+.5|0).join(""):I=F.substr(0,J-(p?xn(Y):Y).length+.5|0),F=Y):(I=s.slice(0,R).join(o),N=(p?xn(I):I).length,_?F=xn(F).slice(N,J+.5|0).join(""):F=F.substr(N,J-N+.5|0)),x?(V=y?v:b,P=y?b:v,U=V&&R!==0,B=P&&R!==S,Y=(U?"<span class='"+V+"'>":"")+I+(U?"</span>":"")+(B?"<span class='"+P+"'>":"")+o+F+(B?"</span>":"")):Y=I+o+F,i[n]=M==="&nbsp;"&&~Y.indexOf("  ")?Y.split("  ").join("&nbsp;&nbsp;"):Y}};Nl.emojiSafeSplit=xn;Nl.getText=ea;X_()&&ro.registerPlugin(Nl);var CM=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var DM=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var RM=Math.PI/180,J2=180/Math.PI,Lu=Math.sin,Nu=Math.cos,Ul=Math.abs,Ol=Math.sqrt;var PM=function(t){return typeof t=="number"};var Y_=1e5;var gs=function(t){return Math.round(t*Y_)/Y_||0};var q_=function(t){return t.closed=Math.abs(t[0]-t[t.length-2])<.001&&Math.abs(t[1]-t[t.length-1])<.001};function $_(r,t,e,i,n,s,o){for(var a=r.length,l,c,u,h,f;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],f=l[u+1],l[u]=h*t+f*i+s,l[u+1]=h*e+f*n+o;return r._dirty=1,r}function IM(r,t,e,i,n,s,o,a,l){if(!(r===a&&t===l)){e=Ul(e),i=Ul(i);var c=n%360*RM,u=Nu(c),h=Lu(c),f=Math.PI,d=f*2,p=(r-a)/2,_=(t-l)/2,m=u*p+h*_,g=-h*p+u*_,v=m*m,b=g*g,y=v/(e*e)+b/(i*i);y>1&&(e=Ol(y)*e,i=Ol(y)*i);var M=e*e,E=i*i,A=(M*E-M*b-E*v)/(M*b+E*v);A<0&&(A=0);var x=(s===o?-1:1)*Ol(A),S=x*(e*g/i),w=x*-(i*m/e),D=(r+a)/2,R=(t+l)/2,N=D+(u*S-h*w),I=R+(h*S+u*w),F=(m-S)/e,U=(g-w)/i,B=(-m-S)/e,Y=(-g-w)/i,V=F*F+U*U,P=(U<0?-1:1)*Math.acos(F/Ol(V)),J=(F*Y-U*B<0?-1:1)*Math.acos((F*B+U*Y)/Ol(V*(B*B+Y*Y)));isNaN(J)&&(J=f),!o&&J>0?J-=d:o&&J<0&&(J+=d),P%=d,J%=d;var ot=Math.ceil(Ul(J)/(d/4)),_t=[],Ft=J/ot,Q=4/3*Lu(Ft/2)/(1+Nu(Ft/2)),lt=u*e,W=h*e,K=h*-i,dt=u*i,yt;for(yt=0;yt<ot;yt++)n=P+yt*Ft,m=Nu(n),g=Lu(n),F=Nu(n+=Ft),U=Lu(n),_t.push(m-Q*g,g+Q*m,F+Q*U,U-Q*F,F,U);for(yt=0;yt<_t.length;yt+=2)m=_t[yt],g=_t[yt+1],_t[yt]=m*lt+g*K+N,_t[yt+1]=m*W+g*dt+I;return _t[yt-2]=a,_t[yt-1]=l,_t}}function Z_(r){var t=(r+"").replace(DM,function(S){var w=+S;return w<1e-4&&w>-1e-4?0:w}).match(CM)||[],e=[],i=0,n=0,s=2/3,o=t.length,a=0,l="ERROR: malformed path: "+r,c,u,h,f,d,p,_,m,g,v,b,y,M,E,A,x=function(w,D,R,N){v=(R-w)/3,b=(N-D)/3,_.push(w+v,D+b,R-v,N-b,R,N)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<o;c++)if(M=d,isNaN(t[c])?(d=t[c].toUpperCase(),p=d!==t[c]):c--,h=+t[c+1],f=+t[c+2],p&&(h+=i,f+=n),c||(m=h,g=f),d==="M")_&&(_.length<8?e.length-=1:a+=_.length,q_(_)),i=m=h,n=g=f,_=[h,f],e.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),p||(i=n=0),_.push(h,f,i+t[c+3]*1,n+t[c+4]*1,i+=t[c+5]*1,n+=t[c+6]*1),c+=6;else if(d==="S")v=i,b=n,(M==="C"||M==="S")&&(v+=i-_[_.length-4],b+=n-_[_.length-3]),p||(i=n=0),_.push(v,b,h,f,i+=t[c+3]*1,n+=t[c+4]*1),c+=4;else if(d==="Q")v=i+(h-i)*s,b=n+(f-n)*s,p||(i=n=0),i+=t[c+3]*1,n+=t[c+4]*1,_.push(v,b,i+(h-i)*s,n+(f-n)*s,i,n),c+=4;else if(d==="T")v=i-_[_.length-4],b=n-_[_.length-3],_.push(i+v,n+b,h+(i+v*1.5-h)*s,f+(n+b*1.5-f)*s,i=h,n=f),c+=2;else if(d==="H")x(i,n,i=h,n),c+=1;else if(d==="V")x(i,n,i,n=h+(p?n-i:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=m,f=g,_.closed=!0),(d==="L"||Ul(i-h)>.5||Ul(n-f)>.5)&&(x(i,n,h,f),d==="L"&&(c+=2)),i=h,n=f;else if(d==="A"){if(E=t[c+4],A=t[c+5],v=t[c+6],b=t[c+7],u=7,E.length>1&&(E.length<3?(b=v,v=A,u--):(b=A,v=E.substr(2),u-=2),A=E.charAt(1),E=E.charAt(0)),y=IM(i,n,+t[c+1],+t[c+2],+t[c+3],+E,+A,(p?i:0)+v*1,(p?n:0)+b*1),c+=u,y)for(u=0;u<y.length;u++)_.push(y[u]);i=_[_.length-2],n=_[_.length-1]}else console.log(l);return c=_.length,c<6?(e.pop(),c=0):q_(_),e.totalPoints=a+c,e}function J_(r){PM(r[0])&&(r=[r]);var t="",e=r.length,i,n,s,o;for(n=0;n<e;n++){for(o=r[n],t+="M"+gs(o[0])+","+gs(o[1])+" C",i=o.length,s=2;s<i;s++)t+=gs(o[s++])+","+gs(o[s++])+" "+gs(o[s++])+","+gs(o[s++])+" "+gs(o[s++])+","+gs(o[s])+" ";o.closed&&(t+="z")}return t}var vn,j_,Q_=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},K_=function(){vn=Q_(),vn?(vn.registerEase("_CE",so.create),j_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},FM=1e20,Ou=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},LM=1,NM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,OM=/[cLlsSaAhHvVtTqQ]/g,UM=function(t){var e=t.length,i=FM,n;for(n=1;n<e;n+=6)+t[n]<i&&(i=+t[n]);return i},BM=function(t,e,i){!i&&i!==0&&(i=Math.max(+t[t.length-1],+t[1]));var n=+t[0]*-1,s=-i,o=t.length,a=1/(+t[o-2]+n),l=-e||(Math.abs(+t[o-1]-+t[1])<.01*(+t[o-2]-+t[0])?UM(t)+s:+t[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)t[c]=(+t[c]+n)*a,t[c+1]=(+t[c+1]+s)*l},kM=function r(t,e,i,n,s,o,a,l,c,u,h){var f=(t+i)/2,d=(e+n)/2,p=(i+s)/2,_=(n+o)/2,m=(s+a)/2,g=(o+l)/2,v=(f+p)/2,b=(d+_)/2,y=(p+m)/2,M=(_+g)/2,E=(v+y)/2,A=(b+M)/2,x=a-t,S=l-e,w=Math.abs((i-a)*S-(n-l)*x),D=Math.abs((s-a)*S-(o-l)*x),R;return u||(u=[{x:t,y:e},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:E,y:A}),(w+D)*(w+D)>c*(x*x+S*S)&&(R=u.length,r(t,e,f,d,v,b,E,A,c,u,h),r(E,A,y,M,m,g,a,l,c,u,h+1+(u.length-R))),u},so=(function(){function r(e,i,n){j_||K_(),this.id=e,LM&&this.setData(i,n)}var t=r.prototype;return t.setData=function(i,n){n=n||{},i=i||"0,0,1,1";var s=i.match(NM),o=1,a=[],l=[],c=n.precision||1,u=c<=1,h,f,d,p,_,m,g,v,b;if(this.data=i,(OM.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(s=Z_(i)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&BM(s,n.height,n.originY),this.segment=s,p=2;p<h;p+=6)f={x:+s[p-2],y:+s[p-1]},d={x:+s[p+4],y:+s[p+5]},a.push(f,d),kM(f.x,f.y,+s[p],+s[p+1],+s[p+2],+s[p+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(h=a.length,p=0;p<h;p++)g=a[p],v=a[p-1]||g,(g.x>v.x||v.y!==g.y&&v.x===g.x||g===v)&&g.x<=1?(v.cx=g.x-v.x,v.cy=g.y-v.y,v.n=g,v.nx=g.x,u&&p>1&&Math.abs(v.cy/v.cx-a[p-2].cy/a[p-2].cx)>2&&(u=0),v.cx<o&&(v.cx?o=v.cx:(v.cx=.001,p===h-1&&(v.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(p--,1),h--);if(h=1/o+1|0,_=1/h,m=0,g=a[0],u){for(p=0;p<h;p++)b=p*_,g.nx<b&&(g=a[++m]),f=g.y+(b-g.x)/g.cx*g.cy,l[p]={x:b,cx:_,y:f,cy:0,nx:9},p&&(l[p-1].cy=f-l[p-1].y);m=a[a.length-1],l[h-1].cy=m.y-f,l[h-1].cx=m.x-l[l.length-1].x}else{for(p=0;p<h;p++)g.nx<p*_&&(g=a[++m]),l[p]=g;m<a.length-1&&(l[p-1]=a[a.length-2])}return this.ease=function(y){var M=l[y*h|0]||l[h-1];return M.nx<y&&(M=M.n),M.y+(y-M.x)/M.cx*M.cy},this.ease.custom=this,this.id&&vn&&vn.registerEase(this.id,this.ease),this},t.getSVGData=function(i){return r.getSVGData(this,i)},r.create=function(i,n,s){return new r(i,n,s).ease},r.register=function(i){vn=i,K_()},r.get=function(i){return vn.parseEase(i)},r.getSVGData=function(i,n){n=n||{};var s=n.width||100,o=n.height||100,a=n.x||0,l=(n.y||0)+o,c=vn.utils.toArray(n.path)[0],u,h,f,d,p,_,m,g,v,b;if(n.invert&&(o=-o,l=0),typeof i=="string"&&(i=vn.parseEase(i)),i.custom&&(i=i.custom),i instanceof r)u=J_($_([i.segment.slice(0)],s,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(n.precision||1)*200),d=1/m,m+=2,g=5/m,v=Ou(a+d*s),b=Ou(l+i(d)*-o),h=(b-l)/(v-a),f=2;f<m;f++)p=Ou(a+f*d*s),_=Ou(l+i(f*d)*-o),(Math.abs((_-b)/(p-v)-h)>g||f===m-1)&&(u.push(v,b),h=(_-b)/(p-v)),v=p,b=_;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();so.version="3.15.0";so.headless=!0;Q_()&&vn.registerPlugin(so);var Hr,oo,Wp,ku,Bl,Uu,Bu,kl,ir="transform",Gp=ir+"Origin",tx,zu=function(t){var e=t.ownerDocument||t;for(!(ir in t.style)&&("msTransform"in t.style)&&(ir="msTransform",Gp=ir+"Origin");e.parentNode&&(e=e.parentNode););if(oo=window,Bu=new _s,e){Hr=e,Wp=e.documentElement,ku=e.body,kl=Hr.createElementNS("http://www.w3.org/2000/svg","g"),kl.style.transform="none";var i=e.createElement("div"),n=e.createElement("div"),s=e&&(e.body||e.firstElementChild);s&&s.appendChild&&(s.appendChild(i),i.appendChild(n),i.style.position="static",i.style.transform="translate3d(0,0,1px)",tx=n.offsetParent!==i,s.removeChild(i))}return e},zM=function(t){for(var e,i;t&&t!==ku;)i=t._gsap,i&&i.uncache&&i.get(t,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),e?e.push(i):e=[i]),t=t.parentNode;return e},ex=[],ix=[],Hu=function(){return oo.pageYOffset||Hr.scrollTop||Wp.scrollTop||ku.scrollTop||0},Vu=function(){return oo.pageXOffset||Hr.scrollLeft||Wp.scrollLeft||ku.scrollLeft||0},Xp=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},HM=function r(t){if(oo.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},Hp=function r(t,e){if(t.parentNode&&(Hr||zu(t))){var i=Xp(t),n=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=i?e?"rect":"g":"div",o=e!==2?0:100,a=e===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=Hr.createElementNS?Hr.createElementNS(n.replace(/^https/,"http"),s):Hr.createElement(s);return e&&(i?(Uu||(Uu=r(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),c.setAttribute("fill","transparent"),Uu.appendChild(c)):(Bl||(Bl=r(t),Object.assign(Bl.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:a+"px",left:o+"px"}),Bl.appendChild(c))),c}throw"Need document and parent."},VM=function(t){for(var e=new _s,i=0;i<t.numberOfItems;i++)e.multiply(t.getItem(i).matrix);return e},Yp=function(t){var e=t.getCTM(),i;return e||(i=t.style[ir],t.style[ir]="none",t.appendChild(kl),e=kl.getCTM(),t.removeChild(kl),i?t.style[ir]=i:t.style.removeProperty(ir.replace(/([A-Z])/g,"-$1").toLowerCase())),e||Bu.clone()},GM=function(t,e){var i=Xp(t),n=t===i,s=i?ex:ix,o=t.parentNode,a=o&&!i&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,u,h,f,d;if(t===oo)return t;if(s.length||s.push(Hp(t,1),Hp(t,2),Hp(t,3)),l=i?Uu:Bl,i)n?(u=Yp(t),h=-u.e/u.a,f=-u.f/u.d,c=Bu):t.getBBox?(u=t.getBBox(),c=t.transform?t.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?VM(c):c.getItem(0).matrix:Bu,h=c.a*u.x+c.c*u.y,f=c.b*u.x+c.d*u.y):(c=new _s,h=f=0),e&&t.tagName.toLowerCase()==="g"&&(h=f=0),(n||!t.getBoundingClientRect().width?i:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+h)+","+(c.f+f)+")");else{if(h=f=0,tx)for(c=t.offsetParent,u=t;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(oo.getComputedStyle(u)[ir]+"").length>4&&(h=u.offsetLeft,f=u.offsetTop,u=0);if(d=oo.getComputedStyle(t),d.position!=="absolute"&&d.position!=="fixed")for(c=t.offsetParent;o&&o!==c;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=l.style,u.top=t.offsetTop-f+"px",u.left=t.offsetLeft-h+"px",u[ir]=d[ir],u[Gp]=d[Gp],u.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},Vp=function(t,e,i,n,s,o,a){return t.a=e,t.b=i,t.c=n,t.d=s,t.e=o,t.f=a,t},_s=(function(){function r(e,i,n,s,o,a){e===void 0&&(e=1),i===void 0&&(i=0),n===void 0&&(n=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),Vp(this,e,i,n,s,o,a)}var t=r.prototype;return t.inverse=function(){var i=this.a,n=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=i*o-n*s||1e-10;return Vp(this,o/c,-n/c,-s/c,i/c,(s*l-o*a)/c,-(i*l-n*a)/c)},t.multiply=function(i){var n=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=i.a,h=i.c,f=i.b,d=i.d,p=i.e,_=i.f;return Vp(this,u*n+f*o,u*s+f*a,h*n+d*o,h*s+d*a,l+p*n+_*o,c+p*s+_*a)},t.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(i){var n=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return n===i.a&&s===i.b&&o===i.c&&a===i.d&&l===i.e&&c===i.f},t.apply=function(i,n){n===void 0&&(n={});var s=i.x,o=i.y,a=this.a,l=this.b,c=this.c,u=this.d,h=this.e,f=this.f;return n.x=s*a+o*c+h||0,n.y=s*l+o*u+f||0,n},r})();function nr(r,t,e,i){if(!r||!r.parentNode||(Hr||zu(r)).documentElement===r)return new _s;var n=zM(r),s=Xp(r),o=s?ex:ix,a=GM(r,e),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),h=a.parentNode,f=!i&&HM(r),d=new _s((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:Vu()),l.top+(f?0:Hu()));if(h.removeChild(a),n)for(l=n.length;l--;)c=n[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return t?d.inverse():d}var WM=1,sa,Ni,qe,zl,xs,Vr,Qp,nx=function(t,e){return t.actions.forEach(function(i){return i.vars[e]&&i.vars[e](i)})},tm={},rx=180/Math.PI,XM=Math.PI/180,Xu={},sx={},$u={},im=function(t){return typeof t=="string"?t.split(" ").join("").split(","):t},YM=im("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Zu=im("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Hl=function(t){return sa(t)[0]||console.warn("Element not found:",t)},ia=function(t){return Math.round(t*1e4)/1e4||0},qp=function(t,e,i){return t.forEach(function(n){return n.classList[i](e)})},ox={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},fx={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},dx=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},na=function(t,e){var i={},n;for(n in t)e[n]||(i[n]=t[n]);return i},nm={},px=function(t){var e=nm[t]=im(t);return $u[t]=e.concat(Zu),e},qM=function(t){var e=t._gsap||Ni.core.getCache(t);return e.gmCache===Ni.ticker.frame?e.gMatrix:(e.gmCache=Ni.ticker.frame,e.gMatrix=nr(t,!0,!1,!0))},$M=function r(t,e,i){i===void 0&&(i=0);for(var n=t.parentNode,s=1e3*Math.pow(10,i)*(e?-1:1),o=e?-s*900:0;t;)o+=s,t=t.previousSibling;return n?o+r(n,e,i+1):o},Yu=function(t,e,i){return t.forEach(function(n){return n.d=$M(i?n.element:n.t,e)}),t.sort(function(n,s){return n.d-s.d}),t},Vl=function(t,e){for(var i=t.element.style,n=t.css=t.css||[],s=e.length,o,a;s--;)o=e[s],a=i[o]||i.getPropertyValue(o),n.push(a?o:sx[o]||(sx[o]=dx(o)),a);return i},qu=function(t){var e=t.css,i=t.element.style,n=0;for(t.cache.uncache=1;n<e.length;n+=2)e[n+1]?i[e[n]]=e[n+1]:i.removeProperty(e[n]);!e[e.indexOf("transform")+1]&&i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))},ax=function(t,e){t.forEach(function(i){return i.a.cache.uncache=1}),e||t.finalStates.forEach(qu)},$p="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),rm=function(t,e,i){var n=t.element,s=t.width,o=t.height,a=t.uncache,l=t.getProp,c=n.style,u=4,h,f,d;if(typeof e!="object"&&(e=t),qe&&i!==1)return qe._abs.push({t:n,b:t,a:t,sd:0}),qe._final.push(function(){return(t.cache.uncache=1)&&qu(t)}),n;for(f=l("display")==="none",(!t.isVisible||f)&&(f&&(Vl(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=s=t.width||e.width,t.height=o=t.height||e.height),Vl(t,$p),d=window.getComputedStyle(n);u--;)c[$p[u]]=d[$p[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)h=new ao(n);else if(h=na(t,Xu),h.position="absolute",t.simple){var p=n.getBoundingClientRect();h.matrix=new _s(1,0,0,1,p.left+Vu(),p.top+Hu())}else h.matrix=nr(n,!1,!1,!0);return h=ra(h,t,!0),t.x=Vr(h.x,.01),t.y=Vr(h.y,.01),n},lx=function(t,e){return e!==!0&&(e=sa(e),t=t.filter(function(i){if(e.indexOf((i.sd<0?i.b:i.a).element)!==-1)return!0;i.t._gsap.renderTransform(1),i.b.isVisible&&(i.t.style.width=i.b.width+"px",i.t.style.height=i.b.height+"px")})),t},mx=function(t){return Yu(t,!0).forEach(function(e){return(e.a.isVisible||e.b.isVisible)&&rm(e.sd<0?e.b:e.a,e.b,1)})},ZM=function(t,e){return e&&t.idLookup[em(e).id]||t.elementStates[0]},em=function(t,e,i,n){return t instanceof ao?t:t instanceof rr?ZM(t,n):new ao(typeof t=="string"?Hl(t)||console.warn(t+" not found"):t,e,i)},JM=function(t,e){for(var i=Ni.getProperty(t.element,null,"native"),n=t.props={},s=e.length;s--;)n[e[s]]=(i(e[s])+"").trim();return n.zIndex&&(n.zIndex=parseFloat(n.zIndex)||0),t},gx=function(t,e){var i=t.style||t,n;for(n in e)i[n]=e[n]},KM=function(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+WM++),e},_x=function(t){return t.map(function(e){return e.element})},cx=function(t,e,i){return t&&e.length&&i.add(t(_x(e),i,new rr(e,0,!0)),0)},ra=function(t,e,i,n,s,o){var a=t.element,l=t.cache,c=t.parent,u=t.x,h=t.y,f=e.width,d=e.height,p=e.scaleX,_=e.scaleY,m=e.rotation,g=e.bounds,v=o&&Qp&&Qp(a,"transform,width,height"),b=t,y=e.matrix,M=y.e,E=y.f,A=t.bounds.width!==g.width||t.bounds.height!==g.height||t.scaleX!==p||t.scaleY!==_||t.rotation!==m,x=!A&&t.simple&&e.simple&&!s,S,w,D,R,N,I,F;return x||!c?(p=_=1,m=S=0):(N=qM(c),I=N.clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),m=ia(Math.atan2(I.b,I.a)*rx),S=ia(Math.atan2(I.c,I.d)*rx+m)%360,p=Math.sqrt(Math.pow(I.a,2)+Math.pow(I.b,2)),_=Math.sqrt(Math.pow(I.c,2)+Math.pow(I.d,2))*Math.cos(S*XM),s&&(s=sa(s)[0],R=Ni.getProperty(s),F=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),b={scaleX:R("scaleX"),scaleY:R("scaleY"),width:F?F.width:Math.ceil(parseFloat(R("width","px"))),height:F?F.height:parseFloat(R("height","px"))}),l.rotation=m+"deg",l.skewX=S+"deg"),i?(p*=f===b.width||!b.width?1:f/b.width,_*=d===b.height||!b.height?1:d/b.height,l.scaleX=p,l.scaleY=_):(f=Vr(f*p/b.scaleX,0),d=Vr(d*_/b.scaleY,0),a.style.width=f+"px",a.style.height=d+"px"),n&&gx(a,e.props),x||!c?(u+=M-t.matrix.e,h+=E-t.matrix.f):A||c!==e.parent?(l.x=u+"px",l.y=h+"px",l.renderTransform(1,l),I=nr(s||a,!1,!1,!0),w=N.apply({x:I.e,y:I.f}),D=N.apply({x:M,y:E}),u+=D.x-w.x,h+=D.y-w.y):(N.e=N.f=0,D=N.apply({x:M-t.matrix.e,y:E-t.matrix.f}),u+=D.x,h+=D.y),u=Vr(u,.02),h=Vr(h,.02),o&&!(o instanceof ao)?v&&v.revert():(l.x=u+"px",l.y=h+"px",l.renderTransform(1,l)),o&&(o.x=u,o.y=h,o.rotation=m,o.skewX=S,i?(o.scaleX=p,o.scaleY=_):(o.width=f,o.height=d)),o||l},Zp=function(t,e){return t instanceof rr?t:new rr(t,e)},xx=function(t,e,i){var n=t.idLookup[i],s=t.alt[i];return s.isVisible&&(!(e.getElementState(s.element)||s).isVisible||!n.isVisible)?s:n},Jp=[],Kp="width,height,overflowX,overflowY".split(","),Gu,ux=function(t){if(t!==Gu){var e=xs.style,i=xs.clientWidth===window.outerWidth,n=xs.clientHeight===window.outerHeight,s=4;if(t&&(i||n)){for(;s--;)Jp[s]=e[Kp[s]];i&&(e.width=xs.clientWidth+"px",e.overflowY="hidden"),n&&(e.height=xs.clientHeight+"px",e.overflowX="hidden"),Gu=t}else if(Gu){for(;s--;)Jp[s]?e[Kp[s]]=Jp[s]:e.removeProperty(dx(Kp[s]));Gu=t}}},hx=function(t,e){for(var i=0;i<t.length;i+=3)Ni.set(t[i],{clearProps:!0}),t[i].setAttribute("style",t[i+e]),t[i]._gsap.gmCache=-1},jp=function(t,e,i,n){t instanceof rr&&e instanceof rr||console.warn("Not a valid state object."),i=i||{};var s=i,o=s.clearProps,a=s.onEnter,l=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,h=s.custom,f=s.delay,d=s.paused,p=s.repeat,_=s.repeatDelay,m=s.yoyo,g=s.toggleClass,v=s.nested,b=s.zIndex,y=s.scale,M=s.fade,E=s.stagger,A=s.spin,x=s.prune,S=("props"in i?i:t).props,w=na(i,ox),D=Ni.timeline({delay:f,paused:d,repeat:p,repeatDelay:_,yoyo:m,data:"isFlip"}),R=w,N=[],I=[],F=[],U=[],B=A===!0?1:A||0,Y=typeof A=="function"?A:function(){return B},V=t.interrupted||e.interrupted,P=D[n!==1?"to":"from"],J,ot,_t,Ft,Q,lt,W,K,dt,yt,ut,Ot,Ct,Tt;for(ot in e.idLookup)ut=e.alt[ot]?xx(e,t,ot):e.idLookup[ot],Q=ut.element,yt=t.idLookup[ot],t.alt[ot]&&Q===yt.element&&(t.alt[ot].isVisible||!ut.isVisible)&&(yt=t.alt[ot]),yt?(lt={t:Q,b:yt,a:ut,sd:yt.element===Q?0:ut.isVisible?1:-1},F.push(lt),lt.sd&&(lt.sd<0&&(lt.b=ut,lt.a=yt),V&&Vl(lt.b,S?$u[S]:Zu),M&&F.push(lt.swap={t:yt.element,b:lt.b,a:lt.a,sd:-lt.sd,swap:lt})),Q._flip=yt.element._flip=qe?qe.timeline:D):ut.isVisible&&(F.push({t:Q,b:na(ut,{isVisible:1}),a:ut,sd:0,entering:1}),Q._flip=qe?qe.timeline:D);if(S&&(nm[S]||px(S)).forEach(function(G){return w[G]=function(ie){return F[ie].a.props[G]}}),F.finalStates=dt=[],Ot=function(){Yu(F),ux(!0);var ie=[];for(Ft=0;Ft<F.length;Ft++)lt=F[Ft],Ct=lt.a,Tt=lt.b,x&&!Ct.isDifferent(Tt)&&!lt.entering?F.splice(Ft--,1):(Q=lt.t,v&&!(lt.sd<0)&&Ft&&(Ct=lt.a=Ct.clone({matrix:nr(Q,!1,!1,!0)})),Tt.isVisible&&Ct.isVisible?(lt.sd<0?(v&&hx(ie,1),W=new ao(Q,S,t.simple),ra(W,Ct,y,0,0,W),W.matrix=nr(Q,!1,!1,!0),W.bounds=Q.getBoundingClientRect(),W.css=lt.b.css,lt.a=Ct=W,M&&(Q.style.opacity=V?Tt.opacity:Ct.opacity),E&&U.push(Q),v&&(hx(ie,2),ie.push(Q,Q.getAttribute("style")))):lt.sd>0&&M&&(Q.style.opacity=V?Ct.opacity-Tt.opacity:"0"),ra(Ct,Tt,y,S),v&&lt.sd<0&&ie.push(Q.getAttribute("style"))):Tt.isVisible!==Ct.isVisible&&(Tt.isVisible?Ct.isVisible||(Tt.css=Ct.css,I.push(Tt),F.splice(Ft--,1),c&&v&&ra(Ct,Tt,y,S)):(Ct.isVisible&&N.push(Ct),F.splice(Ft--,1))),y||(Q.style.maxWidth=Math.max(Ct.width,Tt.width)+"px",Q.style.maxHeight=Math.max(Ct.height,Tt.height)+"px",Q.style.minWidth=Math.min(Ct.width,Tt.width)+"px",Q.style.minHeight=Math.min(Ct.height,Tt.height)+"px"),v&&g&&Q.classList.add(g)),dt.push(Ct);var xe;if(g&&(xe=dt.map(function(Dt){return Dt.element}),v&&xe.forEach(function(Dt){return Dt.classList.remove(g)})),ux(!1),y?(w.scaleX=function(Dt){return F[Dt].a.scaleX},w.scaleY=function(Dt){return F[Dt].a.scaleY}):(w.width=function(Dt){return F[Dt].a.width+"px"},w.height=function(Dt){return F[Dt].a.height+"px"},w.autoRound=i.autoRound||!1),w.x=function(Dt){return F[Dt].a.x+"px"},w.y=function(Dt){return F[Dt].a.y+"px"},w.rotation=function(Dt){return F[Dt].a.rotation+(A?Y(Dt,K[Dt],K)*360:0)},w.skewX=function(Dt){return F[Dt].a.skewX},K=F.map(function(Dt){return Dt.t}),(b||b===0)&&(w.modifiers={zIndex:function(){return b}},w.zIndex=b,w.immediateRender=i.immediateRender!==!1),M&&(w.opacity=function(Dt){return F[Dt].sd<0?0:F[Dt].sd>0?F[Dt].a.opacity:"+=0"}),U.length){E=Ni.utils.distribute(E);var De=K.slice(U.length);w.stagger=function(Dt,k){return E(~U.indexOf(k)?K.indexOf(F[Dt].swap.t):Dt,k,De)}}if(YM.forEach(function(Dt){return i[Dt]&&D.eventCallback(Dt,i[Dt],i[Dt+"Params"])}),h&&K.length){R=na(w,ox),"scale"in h&&(h.scaleX=h.scaleY=h.scale,delete h.scale);for(ot in h)J=na(h[ot],fx),J[ot]=w[ot],!("duration"in J)&&"duration"in w&&(J.duration=w.duration),J.stagger=w.stagger,P.call(D,K,J,0),delete R[ot]}(K.length||I.length||N.length)&&(g&&D.add(function(){return qp(xe,g,D._zTime<0?"remove":"add")},0)&&!d&&qp(xe,g,"add"),K.length&&P.call(D,K,R,0)),cx(a,N,D),cx(l,I,D);var Ut=qe&&qe.timeline;Ut&&(Ut.add(D,0),qe._final.push(function(){return ax(F,!o)})),_t=D.duration(),D.call(function(){var Dt=D.time()>=_t;Dt&&!Ut&&ax(F,!o),g&&qp(xe,g,Dt?"remove":"add")})},u&&(c=F.filter(function(G){return!G.sd&&!G.a.isVisible&&G.b.isVisible}).map(function(G){return G.a.element})),qe){var jt;c&&(jt=qe._abs).push.apply(jt,lx(F,c)),qe._run.push(Ot)}else c&&mx(lx(F,c)),Ot();var se=qe?qe.timeline:D;return se.revert=function(){return sm(se,1,1)},se},jM=function r(t){t.vars.onInterrupt&&t.vars.onInterrupt.apply(t,t.vars.onInterruptParams||[]),t.getChildren(!0,!1,!0).forEach(r)},sm=function(t,e,i){if(t&&t.progress()<1&&(!t.paused()||i))return e&&(jM(t),e<2&&t.progress(1),t.kill()),!0},Wu=function(t){for(var e=t.idLookup={},i=t.alt={},n=t.elementStates,s=n.length,o;s--;)o=n[s],e[o.id]?i[o.id]=o:e[o.id]=o},rr=(function(){function r(e,i,n){if(this.props=i&&i.props,this.simple=!!(i&&i.simple),n)this.targets=_x(e),this.elementStates=e,Wu(this);else{this.targets=sa(e);var s=i&&(i.kill===!1||i.batch&&!i.kill);qe&&!s&&qe._kill.push(this),this.update(s||!!qe)}}var t=r.prototype;return t.update=function(i){var n=this;return this.elementStates=this.targets.map(function(s){return new ao(s,n.props,n.simple)}),Wu(this),this.interrupt(i),this.recordInlineStyles(),this},t.clear=function(){return this.targets.length=this.elementStates.length=0,Wu(this),this},t.fit=function(i,n,s){for(var o=Yu(this.elementStates.slice(0),!1,!0),a=(i||this).idLookup,l=0,c,u;l<o.length;l++)c=o[l],s&&(c.matrix=nr(c.element,!1,!1,!0)),u=a[c.id],u&&ra(c,u,n,!0,0,c),c.matrix=nr(c.element,!1,!1,!0);return this},t.getProperty=function(i,n){var s=this.getElementState(i)||Xu;return(n in s?s:s.props||Xu)[n]},t.add=function(i){for(var n=i.targets.length,s=this.idLookup,o=this.alt,a,l,c;n--;)l=i.elementStates[n],c=s[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,i.targets[n]),this.elementStates.splice(a,1,l)):(this.targets.push(i.targets[n]),this.elementStates.push(l));return i.interrupted&&(this.interrupted=!0),i.simple||(this.simple=!1),Wu(this),this},t.compare=function(i){var n=i.idLookup,s=this.idLookup,o=[],a=[],l=[],c=[],u=[],h=i.alt,f=this.alt,d=function(x,S,w){return(x.isVisible!==S.isVisible?x.isVisible?l:c:x.isVisible?a:o).push(w)&&u.push(w)},p=function(x,S,w){return u.indexOf(w)<0&&d(x,S,w)},_,m,g,v,b,y,M,E;for(g in n)b=h[g],y=f[g],_=b?xx(i,this,g):n[g],v=_.element,m=s[g],y?(E=m.isVisible||!y.isVisible&&v===m.element?m:y,M=b&&!_.isVisible&&!b.isVisible&&E.element===b.element?b:_,M.isVisible&&E.isVisible&&M.element!==E.element?((M.isDifferent(E)?a:o).push(M.element,E.element),u.push(M.element,E.element)):d(M,E,M.element),b&&M.element===b.element&&(b=n[g]),p(M.element!==m.element&&b?b:M,m,m.element),p(b&&b.element===y.element?b:M,y,y.element),b&&p(b,y.element===b.element?y:m,b.element)):(m?m.isDifferent(_)?d(_,m,v):o.push(v):l.push(v),b&&p(b,m,b.element));for(g in s)n[g]||(c.push(s[g].element),f[g]&&c.push(f[g].element));return{changed:a,unchanged:o,enter:l,leave:c}},t.recordInlineStyles=function(){for(var i=$u[this.props]||Zu,n=this.elementStates.length;n--;)Vl(this.elementStates[n],i)},t.interrupt=function(i){var n=this,s=[];this.targets.forEach(function(o){var a=o._flip,l=sm(a,i?0:1);i&&l&&s.indexOf(a)<0&&a.add(function(){return n.updateVisibility()}),l&&s.push(a)}),!i&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},t.updateVisibility=function(){this.elementStates.forEach(function(i){var n=i.element.getBoundingClientRect();i.isVisible=!!(n.width||n.height||n.top||n.left),i.uncache=1})},t.getElementState=function(i){return this.elementStates[this.targets.indexOf(Hl(i))]},t.makeAbsolute=function(){return Yu(this.elementStates.slice(0),!0,!0).map(rm)},r})(),ao=(function(){function r(e,i,n){e instanceof r?Object.assign(this,e,i||{}):(this.element=e,this.update(i,n))}var t=r.prototype;return t.isDifferent=function(i){var n=this.bounds,s=i.bounds;return n.top!==s.top||n.left!==s.left||n.width!==s.width||n.height!==s.height||!this.matrix.equals(i.matrix)||this.opacity!==i.opacity||this.props&&i.props&&JSON.stringify(this.props)!==JSON.stringify(i.props)},t.clone=function(i){return new r(this,i)},t.update=function(i,n){var s=this,o=s.element,a=Ni.getProperty(o),l=Ni.core.getCache(o),c=o.getBoundingClientRect(),u=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),h=n?new _s(1,0,0,1,c.left+Vu(),c.top+Hu()):nr(o,!1,!1,!0);l.uncache=1,s.getProp=a,s.element=o,s.id=KM(o),s.matrix=h,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x","px"),s.y=a("y","px"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=u?u.width:Vr(a("width","px"),.04),s.height=u?u.height:Vr(a("height","px"),.04),i&&JM(s,nm[i]||px(i)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Yp(o).inverse(),s.simple=n||ia(h.a)===1&&!ia(h.b)&&!ia(h.c)&&ia(h.d)===1,s.uncache=0},r})(),QM=(function(){function r(e,i){this.vars=e,this.batch=i,this.states=[],this.timeline=i.timeline}var t=r.prototype;return t.getStateById=function(i){for(var n=this.states.length;n--;)if(this.states[n].idLookup[i])return this.states[n]},t.kill=function(){this.batch.remove(this)},r})(),tb=(function(){function r(e){this.id=e,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new rr,this.timeline=Ni.timeline()}var t=r.prototype;return t.add=function(i){var n=this.actions.filter(function(s){return s.vars===i});return n.length?n[0]:(n=new QM(typeof i=="function"?{animate:i}:i,this),this.actions.push(n),n)},t.remove=function(i){var n=this.actions.indexOf(i);return n>=0&&this.actions.splice(n,1),this},t.getState=function(i){var n=this,s=qe,o=zl;return qe=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,zl=a,a.state=a.vars.getState(a)),i&&a.states.forEach(function(l){return n.state.add(l)})}),zl=o,qe=s,this.killConflicts(),this},t.animate=function(){var i=this,n=qe,s=this.timeline,o=this.actions.length,a,l;for(qe=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,h=c.vars.onLeave,f=c.targets,d,p;f&&f.length&&(u||h)&&(d=new rr,c.states.forEach(function(_){return d.add(_)}),p=d.compare(vs.getState(f)),p.enter.length&&u&&u(p.enter),p.leave.length&&h&&h(p.leave))}),mx(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),a=this._final.slice(0),s.add(function(){l<=s.time()&&(a.forEach(function(c){return c()}),nx(i,"onComplete"))}),qe=n;o--;)this.actions[o].vars.once&&this.actions[o].kill();return nx(this,"onStart"),s.restart(),this},t.loadState=function(i){i||(i=function(){return 0});var n=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function l(c){c&&(s.targets=c),o=n.indexOf(l),~o&&(n.splice(o,1),n.length||i())};n.push(a),s.vars.loadState(a)}}),n.length||i(),this},t.setState=function(){return this.actions.forEach(function(i){return i.targets=i.vars.setState&&i.vars.setState(i)}),this},t.killConflicts=function(i){return this.state.interrupt(i),this._kill.forEach(function(n){return n.interrupt(i)}),this},t.run=function(i,n){var s=this;return this!==qe&&(i||this.getState(n),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},t.clear=function(i){this.state.clear(),i||(this.actions.length=0)},t.getStateById=function(i){for(var n=this.actions.length,s;n--;)if(s=this.actions[n].getStateById(i),s)return s;return this.state.idLookup[i]&&this.state},t.kill=function(){this._killed=1,this.clear(),delete tm[this.id]},r})(),vs=(function(){function r(){}return r.getState=function(e,i){var n=Zp(e,i);return zl&&zl.states.push(n),i&&i.batch&&r.batch(i.batch).state.add(n),n},r.from=function(e,i){return i=i||{},"clearProps"in i||(i.clearProps=!0),jp(e,Zp(i.targets||e.targets,{props:i.props||e.props,simple:i.simple,kill:!!i.kill}),i,-1)},r.to=function(e,i){return jp(e,Zp(i.targets||e.targets,{props:i.props||e.props,simple:i.simple,kill:!!i.kill}),i,1)},r.fromTo=function(e,i,n){return jp(e,i,n)},r.fit=function(e,i,n){var s=n?na(n,fx):{},o=n||s,a=o.absolute,l=o.scale,c=o.getVars,u=o.props,h=o.runBackwards,f=o.onComplete,d=o.simple,p=n&&n.fitChild&&Hl(n.fitChild),_=em(i,u,d,e),m=em(e,0,d,_),g=u?$u[u]:Zu,v=Ni.context();return u&&gx(s,_.props),Vl(m,g),h&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){qu(m),f&&f.apply(this,arguments)}),a&&rm(m,_),s=ra(m,_,l||p,!s.duration&&u,p,s.duration||c?s:0),typeof n=="object"&&"zIndex"in n&&(s.zIndex=n.zIndex),v&&!c&&v.add(function(){return function(){return qu(m)}}),c?s:s.duration?Ni.to(m.element,s):null},r.makeAbsolute=function(e,i){return(e instanceof rr?e:new rr(e,i)).makeAbsolute()},r.batch=function(e){return e||(e="default"),tm[e]||(tm[e]=new tb(e))},r.killFlipsOf=function(e,i){(e instanceof rr?e.targets:sa(e)).forEach(function(n){return n&&sm(n._flip,i!==!1?1:2)})},r.isFlipping=function(e){var i=r.getByTarget(e);return!!i&&i.isActive()},r.getByTarget=function(e){return(Hl(e)||Xu)._flip},r.getElementState=function(e,i){return new ao(Hl(e),i)},r.convertCoordinates=function(e,i,n){var s=nr(i,!0,!0).multiply(nr(e));return n?s.apply(n):s},r.register=function(e){if(xs=typeof document<"u"&&document.body,xs){Ni=e,zu(xs),sa=Ni.utils.toArray,Qp=Ni.core.getStyleSaver;var i=Ni.utils.snap(.1);Vr=function(s,o){return i(parseFloat(s)+o)}}},r})();vs.version="3.15.0";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(vs);var Gl,Ju,eb=function(){return Gl||typeof window<"u"&&(Gl=window.gsap)&&Gl.registerPlugin&&Gl},oa={version:"3.15.0",name:"text",init:function(t,e,i){typeof e!="object"&&(e={value:e});var n=t.nodeName.toUpperCase(),s=this,o=e,a=o.newClass,l=o.oldClass,c=o.preserveSpaces,u=o.rtl,h=s.delimiter=e.delimiter||"",f=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),d,p,_,m,g,v,b,y;if(s.svg=t.getBBox&&(n==="TEXT"||n==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(_=Iu(t,h,!1,c,s.svg),Ju||(Ju=document.createElement("div")),Ju.innerHTML=e.value,p=Iu(Ju,h,!1,c,s.svg),s.from=i._from,(s.from||u)&&!(u&&s.from)&&(n=_,_=p,p=n),s.hasClass=!!(a||l),s.newClass=u?l:a,s.oldClass=u?a:l,n=_.length-p.length,d=n<0?_:p,n<0&&(n=-n);--n>-1;)d.push(f);if(e.type==="diff"){for(m=0,g=[],v=[],b="",n=0;n<p.length;n++)y=p[n],y===_[n]?b+=y:(g[m]=b+y,v[m++]=b+_[n],b="");p=g,_=v,b&&(p.push(b),_.push(b))}e.speed&&i.duration(Math.min(.05/e.speed*d.length,e.maxDuration||9999)),s.rtl=u,s.original=_,s.text=p,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var i=e.text,n=e.hasClass,s=e.newClass,o=e.oldClass,a=e.delimiter,l=e.target,c=e.fillChar,u=e.original,h=e.rtl,f=i.length,d=(h?1-t:t)*f+.5|0,p,_,m;n&&t?(p=s&&d,_=o&&d!==f,m=(p?"<span class='"+s+"'>":"")+i.slice(0,d).join(a)+(p?"</span>":"")+(_?"<span class='"+o+"'>":"")+a+u.slice(d).join(a)+(_?"</span>":"")):m=i.slice(0,d).join(a)+a+u.slice(d).join(a),e.svg?l.textContent=m:l.innerHTML=c==="&nbsp;"&&~m.indexOf("  ")?m.split("  ").join("&nbsp;&nbsp;"):m}};oa.splitInnerHTML=Iu;oa.emojiSafeSplit=xn;oa.getText=ea;eb()&&Gl.registerPlugin(oa);var aa=r=>window.matchMedia(r).matches,Wt={reduced:aa("(prefers-reduced-motion: reduce)"),fine:aa("(pointer: fine)")&&aa("(hover: hover)"),mobile:aa("(max-width: 760px)")||aa("(pointer: coarse)")&&Math.min(screen.width,screen.height)<820,touch:aa("(pointer: coarse)"),artifact:document.documentElement.classList.contains("is-artifact")},yr=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),lo=(r,t,e)=>r+(t-r)*e,$n=(r,t,e)=>{let i=yr((e-r)/(t-r));return i*i*(3-2*i)},vx=r=>new Promise(t=>setTimeout(t,r)),at=(r,t=document)=>t.querySelector(r),le=(r,t=document)=>Array.from(t.querySelectorAll(r));var yx="1.3.26";function bx(r,t,e){return Math.max(r,Math.min(t,e))}function ib(r,t,e){return(1-e)*r+e*t}function nb(r,t,e,i){return ib(r,t,1-Math.exp(-e*i))}function rb(r,t){return(r%t+t)%t}var sb=class{constructor(){Xt(this,"isRunning",!1);Xt(this,"value",0);Xt(this,"from",0);Xt(this,"to",0);Xt(this,"currentTime",0);Xt(this,"lerp");Xt(this,"duration");Xt(this,"easing");Xt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=bx(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=nb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function ob(r,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,i)},t)}}var ab=class{constructor(r,t,{autoResize:e=!0,debounce:i=250}={}){Xt(this,"width",0);Xt(this,"height",0);Xt(this,"scrollHeight",0);Xt(this,"scrollWidth",0);Xt(this,"debouncedResize");Xt(this,"wrapperResizeObserver");Xt(this,"contentResizeObserver");Xt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Xt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Xt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=ob(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},wx=class{constructor(){Xt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},lb=100/6,ys={passive:!1};function Sx(r,t){return r===1?lb:r===2?t:1}var cb=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Xt(this,"touchStart",{x:0,y:0});Xt(this,"lastDelta",{x:0,y:0});Xt(this,"window",{width:0,height:0});Xt(this,"emitter",new wx);Xt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Xt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})});Xt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Xt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:i}=r,n=Sx(i,this.window.width),s=Sx(i,this.window.height);t*=n,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Xt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ys),this.element.addEventListener("touchstart",this.onTouchStart,ys),this.element.addEventListener("touchmove",this.onTouchMove,ys),this.element.addEventListener("touchend",this.onTouchEnd,ys)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ys),this.element.removeEventListener("touchstart",this.onTouchStart,ys),this.element.removeEventListener("touchmove",this.onTouchMove,ys),this.element.removeEventListener("touchend",this.onTouchEnd,ys)}},Mx=r=>Math.min(1,1.001-2**(-10*r)),Ex=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:v=!0,autoRaf:b=!1,anchors:y=!1,autoToggle:M=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:x=A,stopInertiaOnNavigate:S=!1,respectReducedMotion:w=!0}={}){Xt(this,"_isScrolling",!1);Xt(this,"_isStopped",!1);Xt(this,"_isLocked",!1);Xt(this,"_preventNextNativeScrollEvent",!1);Xt(this,"_resetVelocityTimeout",null);Xt(this,"_rafId",null);Xt(this,"_isDraggingSelection",!1);Xt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Xt(this,"isTouching");Xt(this,"isIos");Xt(this,"time",0);Xt(this,"userData",{});Xt(this,"lastVelocity",0);Xt(this,"velocity",0);Xt(this,"direction",0);Xt(this,"options");Xt(this,"targetScroll");Xt(this,"animatedScroll");Xt(this,"animate",new sb);Xt(this,"emitter",new wx);Xt(this,"dimensions");Xt(this,"virtualScroll");Xt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Xt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Xt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Xt(this,"onClick",r=>{let t=r.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Xt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Xt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let f=n&&this.options.syncTouch,d=n&&i.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Xt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Xt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=yx,window.lenis||(window.lenis={}),window.lenis.version=yx,h==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Mx:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:v,autoRaf:b,anchors:y,autoToggle:M,allowNestedScroll:E,naiveDimensions:x,stopInertiaOnNavigate:S,respectReducedMotion:w},this.dimensions=new ab(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new cb(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],s=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(n?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(p=f),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?y.left:y.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=bx(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Mx:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let i=Date.now();r._lenis||(r._lenis={});let n=r._lenis,s,o,a,l,c,u,h,f,d,p;if(i-(n.time??0)>2e3){n.time=Date.now();let E=window.getComputedStyle(r);if(n.computedStyle=E,s=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),u=["auto"].includes(E.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,a=h>d,l=f>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=h,n.scrollHeight=f,n.clientWidth=d,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=u}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,h=n.scrollWidth,f=n.scrollHeight,d=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,u=n.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,v,b,y,M;if(_==="horizontal")m=Math.round(r.scrollLeft),g=h-d,v=t,b=s,y=a,M=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=f-p,v=e,b=o,y=l,M=u;else return!1;return!M&&(m>=g||m<=0)?!0:(v>0?m<g:m>0)&&b&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?rb(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Oi=null,om=new Set;function Ax(){Wt.reduced||(Oi=new Ex({lerp:.09,smoothWheel:!0,wheelMultiplier:.9,touchMultiplier:1.4,syncTouch:!1}),Oi.on("scroll",Lt.update));let r=performance.now(),t=/[?&]dtcap=1/.test(location.search)?1:.1;return gt.ticker.add(()=>{let e=performance.now(),i=Math.min((e-r)/1e3,t);r=e,Oi&&Oi.raf(e);for(let n of om)n(i,e/1e3)}),gt.ticker.lagSmoothing(0),Oi}function Cx(r){return om.add(r),()=>om.delete(r)}function Dx(){return Oi?Oi.velocity*60:0}function Tx(r,t={}){if(Oi)Oi.scrollTo(r,{duration:1.8,easing:e=>1-Math.pow(1-e,4),...t});else{let e=typeof r=="number"?r:r.getBoundingClientRect().top+window.scrollY+(t.offset||0);window.scrollTo({top:e,behavior:Wt.reduced?"auto":"smooth"})}}function Rx(r){document.addEventListener("click",t=>{let e=t.target.closest('a[href^="#"]');if(!e)return;let i=e.getAttribute("href");if(i==="#"||i.length<2)return;let n=document.querySelector(i);if(!n)return;t.preventDefault();let s=n.parentElement&&n.parentElement.classList.contains("pin-spacer")?n.parentElement:n;Tx(i==="#top"?0:s),r?.(i),n.hasAttribute("tabindex")||n.setAttribute("tabindex","-1"),n.focus({preventScroll:!0})}),document.querySelectorAll("[data-to-top]").forEach(t=>t.addEventListener("click",()=>Tx(0,{duration:2.6})))}var si={noseTop:[0,-.88,1.52],noseBot:[0,-1.04,1.44],lip:[0,-1.12,1.2],chin:[0,-1.18,.82],throat:[0,-1.02,-.1],bridge:[0,-.5,1.2],stop:[0,-.06,.86],fore:[0,.36,.66],crownF:[0,.58,.36],crownB:[0,.66,-.2],backT:[0,.4,-.7],backB:[0,-.32,-.76],noseS:[.15,-.97,1.4],snoutS:[.2,-.66,1.16],lipS:[.24,-1.08,1.08],mouth:[.4,-1.04,.8],jaw:[.46,-1.08,.4],snoutM:[.4,-.56,.94],eyeI:[.19,-.08,.86],eyeB:[.38,-.2,.78],eyeO:[.6,.06,.6],eyeT:[.38,.1,.76],brow:[.6,.3,.5],cheek:[.7,-.36,.6],fluffU:[.96,-.06,.28],fluff:[1.28,-.5,.12],fluffL:[.84,-.86,.3],earFI:[.22,.6,.44],earFO:[.86,.36,.26],earT:[1.02,1.6,0],earB:[.56,.56,-.18],temple:[.94,.16,-.12],sideB:[.68,-.12,-.56],sideL:[.58,-.74,-.36]};(()=>{let r=si.earFI,t=si.earFO,e=si.earT,i=[(r[0]+t[0]+e[0])/3,(r[1]+t[1]+e[1])/3,(r[2]+t[2]+e[2])/3],n=(o,a,l)=>[o[0]+(i[0]-o[0])*a,o[1]+(i[1]-o[1])*a,o[2]+(i[2]-o[2])*a+l];si.earIA=n(r,.36,-.07),si.earIB=n(t,.36,-.07),si.earIT=n(e,.3,-.05);let s=(o,a,l)=>[o[0]+(a[0]-o[0])*l,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l];si.tipI=s(si.earFI,si.earT,.8),si.tipO=s(si.earFO,si.earT,.8),si.tipB=s(si.earB,si.earT,.8)})();var Ie="fur",Zn="furDark",Ui="cream",Ku="ink",Px="eye",ub="inner",hb=[["noseTop","noseS","noseBot",Ku],["noseTop","snoutS","noseS",Ku],["bridge","snoutS","noseTop",Ie],["bridge","snoutM","snoutS",Ie],["bridge","stop","eyeI",Ie],["bridge","eyeI","snoutM",Ie],["eyeI","eyeB","snoutM",Ie],["snoutM","eyeB","cheek",Ie],["eyeB","eyeO","cheek",Ie],["eyeI","eyeT","eyeB",Px],["eyeT","eyeO","eyeB",Px],["stop","eyeT","eyeI",Ie],["stop","fore","eyeT",Ie],["fore","brow","eyeT",Ie],["eyeT","brow","eyeO",Ie],["fore","crownF","earFI",Ie],["fore","earFI","brow",Ie],["earFI","earFO","brow",Ie],["brow","earFO","fluffU",Ie],["brow","fluffU","eyeO",Ie],["eyeO","fluffU","cheek",Ie],["cheek","fluffU","fluff",Ui],["cheek","fluff","fluffL",Ui],["snoutM","cheek","mouth",Ui],["cheek","fluffL","mouth",Ui],["mouth","fluffL","jaw",Ui],["noseS","snoutS","lipS",Ui],["snoutS","snoutM","lipS",Ui],["snoutM","mouth","lipS",Ui],["noseBot","noseS","lipS",Ui],["noseBot","lipS","lip",Ui],["lip","lipS","mouth",Ui],["lip","mouth","chin",Ui],["chin","mouth","jaw",Ui],["earFI","earFO","earIB",Ie],["earFI","earIB","earIA",Ie],["earFO","earT","earIT",Ie],["earFO","earIT","earIB",Ie],["earT","earFI","earIA",Ie],["earT","earIA","earIT",Ie],["earIA","earIB","earIT",ub],["earFO","earB","tipB",Zn],["earFO","tipB","tipO",Zn],["tipO","tipB","earT",Ku],["earB","earFI","tipI",Zn],["earB","tipI","tipB",Zn],["tipB","tipI","earT",Ku],["crownF","earFI","earB",Ie],["crownF","earB","crownB",Ie],["crownB","earB","backT",Zn],["backT","earB","sideB",Zn],["earB","temple","sideB",Zn],["earB","earFO","temple",Ie],["earFO","fluffU","temple",Ie],["temple","fluffU","fluff",Ie],["temple","fluff","sideB",Zn],["sideB","fluff","sideL",Zn],["fluff","fluffL","sideL",Ui],["fluffL","jaw","sideL",Ui],["backT","sideB","backB",Zn],["backB","sideB","sideL",Zn],["backB","sideL","throat",Zn],["sideL","jaw","throat",Ui],["jaw","chin","throat",Ui]],Wl={fur:"#F26B1D",furDark:"#B8410F",cream:"#FFF0E0",ink:"#17131C",eye:"#0B0A10",inner:"#3A1D17"};function fb(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function db(r){let t=parseInt(r.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function pb(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function Xl({height:r=2,palette:t=Wl,seed:e=7}={}){let i=fb(e),n=[],s=p=>[-p[0],p[1],p[2]];for(let[p,_,m,g]of hb){let v=si[p],b=si[_],y=si[m];n.push({a:v,b,c:y,role:g}),n.push({a:s(v),b:s(y),c:s(b),role:g})}let o=1/0,a=-1/0,l=1/0,c=-1/0;for(let p of n)for(let _ of[p.a,p.b,p.c])o=Math.min(o,_[1]),a=Math.max(a,_[1]),l=Math.min(l,_[2]),c=Math.max(c,_[2]);let u=r/(a-o),h=(o+a)/2,f=(l+c)/2,d=p=>[p[0]*u,(p[1]-h)*u,(p[2]-f)*u];return Xl.landmarks={eyeI:d(si.eyeI),eyeO:d(si.eyeO),eyeT:d(si.eyeT),eyeB:d(si.eyeB)},n.map(p=>{let _=db(t[p.role]),m=p.role==="fur"||p.role==="furDark"?.07:p.role==="cream"?.035:.02,g=1+(i()*2-1)*m,v=_.map(b=>pb(Math.min(1,b*g)));return{a:d(p.a),b:d(p.b),c:d(p.c),role:p.role,color:v}})}function Ix(r,t=1){let e=r;for(let i=0;i<t;i++){let n=[];for(let s of e){let o=(u,h)=>[(u[0]+h[0])/2,(u[1]+h[1])/2,(u[2]+h[2])/2],a=o(s.a,s.b),l=o(s.b,s.c),c=o(s.c,s.a);n.push({...s,a:s.a,b:a,c}),n.push({...s,a,b:s.b,c:l}),n.push({...s,a:c,b:l,c:s.c}),n.push({...s,a,b:l,c})}e=n}return e}function Yl({ry:r=-16,rx:t=8,height:e=2}={}){let i=Xl({height:e}),n=Math.cos(r*Math.PI/180),s=Math.sin(r*Math.PI/180),o=Math.cos(t*Math.PI/180),a=Math.sin(t*Math.PI/180),l=([u,h,f])=>{let d=u*n+f*s,p=-u*s+f*n;return[d,h*o-p*a,h*a+p*o]},c=[];for(let u of i){let h=l(u.a),f=l(u.b),d=l(u.c),p=[f[0]-h[0],f[1]-h[1],f[2]-h[2]],_=[d[0]-h[0],d[1]-h[1],d[2]-h[2]],m=[p[1]*_[2]-p[2]*_[1],p[2]*_[0]-p[0]*_[2],p[0]*_[1]-p[1]*_[0]],g=Math.hypot(m[0],m[1],m[2])||1;m=m.map(v=>v/g),m[2]<0&&(m=m.map(v=>-v)),!(m[2]<.04)&&c.push({pts:[h,f,d].map(v=>[v[0],-v[1]]),z:(h[2]+f[2]+d[2])/3,n:m,role:u.role})}return c.sort((u,h)=>u.z-h.z),c}function Fx(){let r=at("#preloader");if(!r)return{set(){},finish:async()=>{}};let t=at(".preloader__fox",r),e=at(".preloader__bar span",r),i=at(".preloader__count",r),n=at(".preloader__typed",r),s=at(".preloader__status",r),o=n?.dataset.text||"",a="http://www.w3.org/2000/svg",l=Yl({ry:-16,rx:8}),c=1/0,u=-1/0,h=1/0,f=-1/0;for(let x of l)for(let[S,w]of x.pts)c=Math.min(c,S),u=Math.max(u,S),h=Math.min(h,w),f=Math.max(f,w);let d=.08;t.setAttribute("viewBox",`${c-d} ${h-d} ${u-c+d*2} ${f-h+d*2}`);let p=[],_=[-.45,.65,.7],m=Math.hypot(..._);for(let x of l){let S=document.createElementNS(a,"path");S.setAttribute("d",`M${x.pts.map(([R,N])=>`${R.toFixed(4)} ${N.toFixed(4)}`).join("L")}Z`);let w=Math.max(0,(x.n[0]*_[0]+x.n[1]*_[1]+x.n[2]*_[2])/m),D=x.role==="ink"||x.role==="eye"||x.role==="inner";S.setAttribute("class","fill"),S.style.fill=mb(Wl[x.role],D?.85+w*.3:.62+w*.48),t.appendChild(S),p.push(S)}let g=new Set,v=[];for(let x of l)for(let S=0;S<3;S++){let w=x.pts[S],D=x.pts[(S+1)%3],R=`${w[0].toFixed(3)},${w[1].toFixed(3)}|${D[0].toFixed(3)},${D[1].toFixed(3)}`,N=`${D[0].toFixed(3)},${D[1].toFixed(3)}|${w[0].toFixed(3)},${w[1].toFixed(3)}`;g.has(R)||g.has(N)||(g.add(R),v.push([w,D]))}v.sort((x,S)=>Math.hypot(x[0][0],x[0][1]-.7)-Math.hypot(S[0][0],S[0][1]-.7));let b=v.map(([x,S])=>{let w=document.createElementNS(a,"path");w.setAttribute("d",`M${x[0].toFixed(4)} ${x[1].toFixed(4)}L${S[0].toFixed(4)} ${S[1].toFixed(4)}`);let D=Math.hypot(S[0]-x[0],S[1]-x[1]);return w.style.strokeDasharray=`${D}`,w.style.strokeDashoffset=`${D}`,w._len=D,t.appendChild(w),w}),y={p:0,shown:0},M=["Connecting to workbench","Loading fonts","Compiling shaders","Warming the cache","Ready"],E=()=>{let x=y.shown;e.style.transform=`scaleX(${x})`,i.textContent=String(Math.round(x*100)).padStart(3,"0");let S=Math.floor(x*b.length);for(let w=0;w<b.length;w++){let D=b[w],R=w<S?1:w===S?x*b.length%1:0;D.style.strokeDashoffset=`${D._len*(1-R)}`}n.textContent=o.slice(0,Math.round(x*o.length)),s.textContent=M[Math.min(M.length-1,Math.floor(x*(M.length-1)+1e-4))]},A=()=>{y.shown+=(y.p-y.shown)*.08+.0015,y.shown=Math.min(y.shown,y.p),E()};return gt.ticker.add(A),{set(x){y.p=Math.max(y.p,Math.min(1,x))},async finish(){if(y.p=1,await new Promise(S=>{let w=()=>y.shown>.995?S():requestAnimationFrame(w);w()}),y.shown=1,E(),gt.ticker.remove(A),Wt.reduced){r.classList.add("is-done");return}let x=gt.timeline();x.to(p,{opacity:1,duration:.5,stagger:{each:.004,from:"random"},ease:"power2.out"},0),x.to(b,{opacity:0,duration:.4},.25),x.to(t,{scale:1.08,duration:.9,ease:"power3.inOut"},.1),x.to(".preloader__inner",{opacity:0,y:-20,duration:.5,ease:"power2.in"},.75),x.set(r,{background:"transparent"},1.05),x.to(".preloader__shutter--top",{yPercent:-100,duration:1.1,ease:"expo.inOut"},1.05),x.to(".preloader__shutter--bottom",{yPercent:100,duration:1.1,ease:"expo.inOut"},1.05),await new Promise(S=>x.call(S,null,1.25)),x.call(()=>r.classList.add("is-done"),null,2.2)}}}function mb(r,t){let e=parseInt(r.slice(1),16);return`rgb(${[e>>16&255,e>>8&255,e&255].map(n=>Math.min(255,Math.round(n*t))).join(",")})`}var fv=0,zm=1,dv=2;var Mc=1,pv=2,za=3,Ls=0,ki=1,Pi=2,jn=0,Ha=1,Ze=2,Hm=3,Vm=4,mv=5;var Mo=100,gv=101,_v=102,xv=103,vv=104,yv=200,Sv=201,Mv=202,bv=203,Gm=204,Wm=205,wv=206,Ev=207,Tv=208,Av=209,Cv=210,Dv=211,Rv=212,Pv=213,Iv=214,Ah=0,Ch=1,Dh=2,Ea=3,Rh=4,Ph=5,Ih=6,Fh=7,Xm=0,Fv=1,Lv=2,ur=0,bc=1,wc=2,Ec=3,Tc=4,Ac=5,Cc=6,bo=7;var Ym=300,Ns=301,wo=302,af=303,lf=304,Dc=306,Ta=1e3,Mr=1001,Lh=1002,ui=1003,Nv=1004;var Rc=1005;var yi=1006,cf=1007;var Ar=1008;var Sn=1009,qm=1010,$m=1011,Va=1012,uf=1013,hr=1014,Mn=1015,Mi=1016,hf=1017,ff=1018,Ga=1020,Zm=35902,Jm=35899,Km=1021,jm=1022,bn=1023,br=1026,Os=1027,df=1028,pf=1029,Us=1030,mf=1031;var gf=1033,Pc=33776,Ic=33777,Fc=33778,Lc=33779,_f=35840,xf=35841,vf=35842,yf=35843,Sf=36196,Mf=37492,bf=37496,wf=37488,Ef=37489,Nc=37490,Tf=37491,Af=37808,Cf=37809,Df=37810,Rf=37811,Pf=37812,If=37813,Ff=37814,Lf=37815,Nf=37816,Of=37817,Uf=37818,Bf=37819,kf=37820,zf=37821,Hf=36492,Vf=36494,Gf=36495,Wf=36283,Xf=36284,Oc=36285,Yf=36286;var ec=2300,Nh=2301,Eh=2302,Pm=2303,Im=2400,Fm=2401,Lm=2402;var Ov=3200;var qf=0,Uv=1,Jr="",Bi="srgb",ic="srgb-linear",nc="linear",be="srgb";var Th=7680;var Bv=519,kv=512,zv=513,Hv=514,$f=515,Vv=516,Gv=517,Zf=518,Wv=519,Xv=35044,Qm=35048;var t0="300 es",lr=2e3,Aa=2001;function gb(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function _b(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function rc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yv(){let r=rc("canvas");return r.style.display="block",r}var Lx={},Ca=null;function e0(...r){let t="THREE."+r.shift();Ca?Ca("log",t,...r):console.log(t,...r)}function qv(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ee(...r){r=qv(r);let t="THREE."+r.shift();if(Ca)Ca("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ne(...r){r=qv(r);let t="THREE."+r.shift();if(Ca)Ca("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function po(...r){let t=r.join(" ");t in Lx||(Lx[t]=!0,ee(...r))}function $v(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var Zv={[Ah]:Ch,[Dh]:Ih,[Rh]:Fh,[Ea]:Ph,[Ch]:Ah,[Ih]:Dh,[Fh]:Rh,[Ph]:Ea},wr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},Zi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nx=1234567,ba=Math.PI/180,Da=180/Math.PI;function Wa(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zi[r&255]+Zi[r>>8&255]+Zi[r>>16&255]+Zi[r>>24&255]+"-"+Zi[t&255]+Zi[t>>8&255]+"-"+Zi[t>>16&15|64]+Zi[t>>24&255]+"-"+Zi[e&63|128]+Zi[e>>8&255]+"-"+Zi[e>>16&255]+Zi[e>>24&255]+Zi[i&255]+Zi[i>>8&255]+Zi[i>>16&255]+Zi[i>>24&255]).toLowerCase()}function pe(r,t,e){return Math.max(t,Math.min(e,r))}function i0(r,t){return(r%t+t)%t}function xb(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function vb(r,t,e){return r!==t?(e-r)/(t-r):0}function tc(r,t,e){return(1-e)*r+e*t}function yb(r,t,e,i){return tc(r,t,1-Math.exp(-e*i))}function Sb(r,t=1){return t-Math.abs(i0(r,t*2)-t)}function Mb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function bb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function wb(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Eb(r,t){return r+Math.random()*(t-r)}function Tb(r){return r*(.5-Math.random())}function Ab(r){r!==void 0&&(Nx=r);let t=Nx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cb(r){return r*ba}function Db(r){return r*Da}function Rb(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Pb(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ib(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fb(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Ma(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kr={DEG2RAD:ba,RAD2DEG:Da,generateUUID:Wa,clamp:pe,euclideanModulo:i0,mapLinear:xb,inverseLerp:vb,lerp:tc,damp:yb,pingpong:Sb,smoothstep:Mb,smootherstep:bb,randInt:wb,randFloat:Eb,randFloatSpread:Tb,seededRandom:Ab,degToRad:Cb,radToDeg:Db,isPowerOfTwo:Rb,ceilPowerOfTwo:Pb,floorPowerOfTwo:Ib,setQuaternionFromProperEuler:Fb,normalize:hn,denormalize:Ma},a0=class a0{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};a0.prototype.isVector2=!0;var It=a0,Si=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let v=Math.acos(m),b=Math.sin(v);g=Math.sin(g*v)/b,a=Math.sin(a*v)/b,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a;let v=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=v,c*=v,u*=v,h*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(s/2),f=l(i/2),d=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-n)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-n)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+n*c-s*l,this._y=n*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},l0=class l0{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ox.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ox.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),u=2*(a*e-s*n),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=n+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return am.copy(this).projectOnVector(t),this.sub(am)}reflect(t){return this.sub(am.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};l0.prototype.isVector3=!0;var O=l0,am=new O,Ox=new Si,c0=class c0{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],_=n[0],m=n[3],g=n[6],v=n[1],b=n[4],y=n[7],M=n[2],E=n[5],A=n[8];return s[0]=o*_+a*v+l*M,s[3]=o*m+a*b+l*E,s[6]=o*g+a*y+l*A,s[1]=c*_+u*v+h*M,s[4]=c*m+u*b+h*E,s[7]=c*g+u*y+h*A,s[2]=f*_+d*v+p*M,s[5]=f*m+d*b+p*E,s[8]=f*g+d*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+i*f+n*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=h*_,t[1]=(n*c-u*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(u*e-n*l)*_,t[5]=(n*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lm.makeScale(t,e)),this}rotate(t){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lm.makeRotation(-t)),this}translate(t,e){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lm.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};c0.prototype.isMatrix3=!0;var re=c0,lm=new re,Ux=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bx=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){let r={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===be&&(n.r=Zr(n.r),n.g=Zr(n.g),n.b=Zr(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(n.r=wa(n.r),n.g=wa(n.g),n.b=wa(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Jr?nc:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[ic]:{primaries:t,whitePoint:i,transfer:nc,toXYZ:Ux,fromXYZ:Bx,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Bi},outputColorSpaceConfig:{drawingBufferColorSpace:Bi}},[Bi]:{primaries:t,whitePoint:i,transfer:be,toXYZ:Ux,fromXYZ:Bx,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Bi}}}),r}var _e=Lb();function Zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function wa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var la,Oh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{la===void 0&&(la=rc("canvas")),la.width=t.width,la.height=t.height;let n=la.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=la}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=rc("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Zr(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zr(e[i]/255)*255):e[i]=Zr(e[i]);return{data:e,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Nb=0,Ra=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=Wa(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(cm(n[o].image)):s.push(cm(n[o]))}else s=cm(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function cm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Oh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}var Ob=0,um=new O,fn=class r extends wr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Mr,n=Mr,s=yi,o=Ar,a=bn,l=Sn,c=r.DEFAULT_ANISOTROPY,u=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Wa(),this.name="",this.source=new Ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(um).x}get height(){return this.source.getSize(um).y}get depth(){return this.source.getSize(um).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ee(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){ee(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ym)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ta:t.x=t.x-Math.floor(t.x);break;case Mr:t.x=t.x<0?0:1;break;case Lh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ta:t.y=t.y-Math.floor(t.y);break;case Mr:t.y=t.y<0?0:1;break;case Lh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Ym;fn.DEFAULT_ANISOTROPY=1;var u0=class u0{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(d+1)/2,M=(g+1)/2,E=(u+f)/4,A=(h+_)/4,x=(p+m)/4;return b>y&&b>M?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=E/i,s=A/i):y>M?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=x/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=A/s,n=x/s),this.set(i,n,s,e),this}let v=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};u0.prototype.isVector4=!0;var Ge=u0,Uh=class extends wr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},s=new fn(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:yi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ra(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends Uh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sc=class extends fn{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Bh=class extends fn{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ui,this.minFilter=ui,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var of=class of{constructor(t,e,i,n,s,o,a,l,c,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,u,h,f,d,p,_,m)}set(t,e,i,n,s,o,a,l,c,u,h,f,d,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new of().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/ca.setFromMatrixColumn(t,0).length(),s=1/ca.setFromMatrixColumn(t,1).length(),o=1/ca.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ub,t,Bb)}lookAt(t,e,i){let n=this.elements;return Fn.subVectors(t,e),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),Ss.crossVectors(i,Fn),Ss.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),Ss.crossVectors(i,Fn)),Ss.normalize(),ju.crossVectors(Fn,Ss),n[0]=Ss.x,n[4]=ju.x,n[8]=Fn.x,n[1]=Ss.y,n[5]=ju.y,n[9]=Fn.y,n[2]=Ss.z,n[6]=ju.z,n[10]=Fn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],v=i[3],b=i[7],y=i[11],M=i[15],E=n[0],A=n[4],x=n[8],S=n[12],w=n[1],D=n[5],R=n[9],N=n[13],I=n[2],F=n[6],U=n[10],B=n[14],Y=n[3],V=n[7],P=n[11],J=n[15];return s[0]=o*E+a*w+l*I+c*Y,s[4]=o*A+a*D+l*F+c*V,s[8]=o*x+a*R+l*U+c*P,s[12]=o*S+a*N+l*B+c*J,s[1]=u*E+h*w+f*I+d*Y,s[5]=u*A+h*D+f*F+d*V,s[9]=u*x+h*R+f*U+d*P,s[13]=u*S+h*N+f*B+d*J,s[2]=p*E+_*w+m*I+g*Y,s[6]=p*A+_*D+m*F+g*V,s[10]=p*x+_*R+m*U+g*P,s[14]=p*S+_*N+m*B+g*J,s[3]=v*E+b*w+y*I+M*Y,s[7]=v*A+b*D+y*F+M*V,s[11]=v*x+b*R+y*U+M*P,s[15]=v*S+b*N+y*B+M*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],v=l*d-c*f,b=a*d-c*h,y=a*f-l*h,M=o*d-c*u,E=o*f-l*u,A=o*h-a*u;return e*(_*v-m*b+g*y)-i*(p*v-m*M+g*E)+n*(p*b-_*M+g*A)-s*(p*y-_*E+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(s*u-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],v=e*a-i*o,b=e*l-n*o,y=e*c-s*o,M=i*l-n*a,E=i*c-s*a,A=n*c-s*l,x=u*_-h*p,S=u*m-f*p,w=u*g-d*p,D=h*m-f*_,R=h*g-d*_,N=f*g-d*m,I=v*N-b*R+y*D+M*w-E*S+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(a*N-l*R+c*D)*F,t[1]=(n*R-i*N-s*D)*F,t[2]=(_*A-m*E+g*M)*F,t[3]=(f*E-h*A-d*M)*F,t[4]=(l*w-o*N-c*S)*F,t[5]=(e*N-n*w+s*S)*F,t[6]=(m*y-p*A-g*b)*F,t[7]=(u*A-f*y+d*b)*F,t[8]=(o*R-a*w+c*x)*F,t[9]=(i*w-e*R-s*x)*F,t[10]=(p*E-_*y+g*v)*F,t[11]=(h*y-u*E-d*v)*F,t[12]=(a*S-o*D-l*x)*F,t[13]=(e*D-i*S+n*x)*F,t[14]=(_*b-p*M-m*v)*F,t[15]=(u*M-h*b+f*v)*F,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,_=o*u,m=o*h,g=a*h,v=l*c,b=l*u,y=l*h,M=i.x,E=i.y,A=i.z;return n[0]=(1-(_+g))*M,n[1]=(d+y)*M,n[2]=(p-b)*M,n[3]=0,n[4]=(d-y)*E,n[5]=(1-(f+g))*E,n[6]=(m+v)*E,n[7]=0,n[8]=(p+b)*A,n[9]=(m-v)*A,n[10]=(1-(f+_))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=ca.set(n[0],n[1],n[2]).length(),a=ca.set(n[4],n[5],n[6]).length(),l=ca.set(n[8],n[9],n[10]).length();s<0&&(o=-o),sr.copy(this);let c=1/o,u=1/a,h=1/l;return sr.elements[0]*=c,sr.elements[1]*=c,sr.elements[2]*=c,sr.elements[4]*=u,sr.elements[5]*=u,sr.elements[6]*=u,sr.elements[8]*=h,sr.elements[9]*=h,sr.elements[10]*=h,e.setFromRotationMatrix(sr),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=lr,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(i-n),f=(e+t)/(e-t),d=(i+n)/(i-n),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===lr)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Aa)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=lr,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-n),f=-(e+t)/(e-t),d=-(i+n)/(i-n),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===lr)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Aa)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};of.prototype.isMatrix4=!0;var ue=of,ca=new O,sr=new ue,Ub=new O(0,0,0),Bb=new O(1,1,1),Ss=new O,ju=new O,Fn=new O,kx=new ue,zx=new Si,On=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kx,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zx.setFromEuler(this),this.setFromQuaternion(zx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Pa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kb=0,Hx=new O,ua=new Si,Gr=new ue,Qu=new O,ql=new O,zb=new O,Hb=new Si,Vx=new O(1,0,0),Gx=new O(0,1,0),Wx=new O(0,0,1),Xx={type:"added"},Vb={type:"removed"},ha={type:"childadded",child:null},hm={type:"childremoved",child:null},Ri=class r extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new O,e=new On,i=new Si,n=new O(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ue},normalMatrix:{value:new re}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ua.setFromAxisAngle(t,e),this.quaternion.multiply(ua),this}rotateOnWorldAxis(t,e){return ua.setFromAxisAngle(t,e),this.quaternion.premultiply(ua),this}rotateX(t){return this.rotateOnAxis(Vx,t)}rotateY(t){return this.rotateOnAxis(Gx,t)}rotateZ(t){return this.rotateOnAxis(Wx,t)}translateOnAxis(t,e){return Hx.copy(t).applyQuaternion(this.quaternion),this.position.add(Hx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vx,t)}translateY(t){return this.translateOnAxis(Gx,t)}translateZ(t){return this.translateOnAxis(Wx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Qu.copy(t):Qu.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gr.lookAt(ql,Qu,this.up):Gr.lookAt(Qu,ql,this.up),this.quaternion.setFromRotationMatrix(Gr),n&&(Gr.extractRotation(n.matrixWorld),ua.setFromRotationMatrix(Gr),this.quaternion.premultiply(ua.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ne("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xx),ha.child=t,this.dispatchEvent(ha),ha.child=null):ne("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vb),hm.child=t,this.dispatchEvent(hm),hm.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xx),ha.child=t,this.dispatchEvent(ha),ha.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,t,zb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,Hb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ri.DEFAULT_UP=new O(0,1,0);Ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ve=class extends Ri{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gb={type:"move"},Ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gb)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Jv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},th={h:0,s:0,l:0};function fm(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var vt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=_e.workingColorSpace){if(t=i0(t,1),e=pe(e,0,1),i=pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=fm(o,s,t+1/3),this.g=fm(o,s,t),this.b=fm(o,s,t-1/3)}return _e.colorSpaceToWorking(this,n),this}setStyle(t,e=Bi){function i(s){s!==void 0&&parseFloat(s)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:ee("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bi){let i=Jv[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}copyLinearToSRGB(t){return this.r=wa(t.r),this.g=wa(t.g),this.b=wa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bi){return _e.workingToColorSpace(Ji.copy(this),t),Math.round(pe(Ji.r*255,0,255))*65536+Math.round(pe(Ji.g*255,0,255))*256+Math.round(pe(Ji.b*255,0,255))}getHexString(t=Bi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Ji.copy(this),e);let i=Ji.r,n=Ji.g,s=Ji.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Ji.copy(this),e),t.r=Ji.r,t.g=Ji.g,t.b=Ji.b,t}getStyle(t=Bi){_e.workingToColorSpace(Ji.copy(this),t);let e=Ji.r,i=Ji.g,n=Ji.b;return t!==Bi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(th);let i=tc(Ms.h,th.h,e),n=tc(Ms.s,th.s,e),s=tc(Ms.l,th.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ji=new vt;vt.NAMES=Jv;var mo=class extends Ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},or=new O,Wr=new O,dm=new O,Xr=new O,fa=new O,da=new O,Yx=new O,pm=new O,mm=new O,gm=new O,_m=new Ge,xm=new Ge,vm=new Ge,$r=class r{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),or.subVectors(t,e),n.cross(or);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){or.subVectors(n,e),Wr.subVectors(i,e),dm.subVectors(t,e);let o=or.dot(or),a=or.dot(Wr),l=or.dot(dm),c=Wr.dot(Wr),u=Wr.dot(dm),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Xr)===null?!1:Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Xr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xr.x),l.addScaledVector(o,Xr.y),l.addScaledVector(a,Xr.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return _m.setScalar(0),xm.setScalar(0),vm.setScalar(0),_m.fromBufferAttribute(t,e),xm.fromBufferAttribute(t,i),vm.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(_m,s.x),o.addScaledVector(xm,s.y),o.addScaledVector(vm,s.z),o}static isFrontFacing(t,e,i,n){return or.subVectors(i,e),Wr.subVectors(t,e),or.cross(Wr).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return or.subVectors(this.c,this.b),Wr.subVectors(this.a,this.b),or.cross(Wr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;fa.subVectors(n,i),da.subVectors(s,i),pm.subVectors(t,i);let l=fa.dot(pm),c=da.dot(pm);if(l<=0&&c<=0)return e.copy(i);mm.subVectors(t,n);let u=fa.dot(mm),h=da.dot(mm);if(u>=0&&h<=u)return e.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(fa,o);gm.subVectors(t,s);let d=fa.dot(gm),p=da.dot(gm);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(da,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Yx.subVectors(s,n),a=(h-u)/(h-u+(d-p)),e.copy(n).addScaledVector(Yx,a);let g=1/(m+_+f);return o=_*g,a=f*g,e.copy(i).addScaledVector(fa,o).addScaledVector(da,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Er=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ar.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ar.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ar.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ar):ar.fromBufferAttribute(s,o),ar.applyMatrix4(t.matrixWorld),this.expandByPoint(ar);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),eh.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eh.copy(i.boundingBox)),eh.applyMatrix4(t.matrixWorld),this.union(eh)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ar),ar.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($l),ih.subVectors(this.max,$l),pa.subVectors(t.a,$l),ma.subVectors(t.b,$l),ga.subVectors(t.c,$l),bs.subVectors(ma,pa),ws.subVectors(ga,ma),co.subVectors(pa,ga);let e=[0,-bs.z,bs.y,0,-ws.z,ws.y,0,-co.z,co.y,bs.z,0,-bs.x,ws.z,0,-ws.x,co.z,0,-co.x,-bs.y,bs.x,0,-ws.y,ws.x,0,-co.y,co.x,0];return!ym(e,pa,ma,ga,ih)||(e=[1,0,0,0,1,0,0,0,1],!ym(e,pa,ma,ga,ih))?!1:(nh.crossVectors(bs,ws),e=[nh.x,nh.y,nh.z],ym(e,pa,ma,ga,ih))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ar).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ar).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yr=[new O,new O,new O,new O,new O,new O,new O,new O],ar=new O,eh=new Er,pa=new O,ma=new O,ga=new O,bs=new O,ws=new O,co=new O,$l=new O,ih=new O,nh=new O,uo=new O;function ym(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){uo.fromArray(r,s);let a=n.x*Math.abs(uo.x)+n.y*Math.abs(uo.y)+n.z*Math.abs(uo.z),l=t.dot(uo),c=e.dot(uo),u=i.dot(uo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var gi=new O,rh=new It,Wb=0,we=class extends wr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Xv,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)rh.fromBufferAttribute(this,e),rh.applyMatrix3(t),this.setXY(e,rh.x,rh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.applyMatrix3(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.applyMatrix4(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.applyNormalMatrix(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gi.fromBufferAttribute(this,e),gi.transformDirection(t),this.setXYZ(e,gi.x,gi.y,gi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ma(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=hn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ma(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ma(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ma(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ma(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=class extends we{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ac=class extends we{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ae=class extends we{constructor(t,e,i){super(new Float32Array(t),e,i)}},Xb=new Er,Zl=new O,Sm=new O,Kn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Xb.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zl.subVectors(t,this.center);let e=Zl.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Zl,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sm.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zl.copy(t.center).add(Sm)),this.expandByPoint(Zl.copy(t.center).sub(Sm))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Yb=0,Jn=new ue,Mm=new Ri,_a=new O,Ln=new Er,Jl=new Er,Di=new O,Ce=class r extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yb++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gb(t)?ac:oc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new re().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,i){return Jn.makeTranslation(t,e,i),this.applyMatrix4(Jn),this}scale(t,e,i){return Jn.makeScale(t,e,i),this.applyMatrix4(Jn),this}lookAt(t){return Mm.lookAt(t),Mm.updateMatrix(),this.applyMatrix4(Mm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Di.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Di),Di.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Di)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ne('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ne("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Jl.setFromBufferAttribute(a),this.morphTargetsRelative?(Di.addVectors(Ln.min,Jl.min),Ln.expandByPoint(Di),Di.addVectors(Ln.max,Jl.max),Ln.expandByPoint(Di)):(Ln.expandByPoint(Jl.min),Ln.expandByPoint(Jl.max))}Ln.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)Di.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Di));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Di.fromBufferAttribute(a,c),l&&(_a.fromBufferAttribute(t,c),Di.add(_a)),n=Math.max(n,i.distanceToSquared(Di))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ne('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ne("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new we(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new O,l[x]=new O;let c=new O,u=new O,h=new O,f=new It,d=new It,p=new It,_=new O,m=new O;function g(x,S,w){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,w),f.fromBufferAttribute(s,x),d.fromBufferAttribute(s,S),p.fromBufferAttribute(s,w),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(D),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(D),a[x].add(_),a[S].add(_),a[w].add(_),l[x].add(m),l[S].add(m),l[w].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let x=0,S=v.length;x<S;++x){let w=v[x],D=w.start,R=w.count;for(let N=D,I=D+R;N<I;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new O,y=new O,M=new O,E=new O;function A(x){M.fromBufferAttribute(n,x),E.copy(M);let S=a[x];b.copy(S),b.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(E,S);let D=y.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,D)}for(let x=0,S=v.length;x<S;++x){let w=v[x],D=w.start,R=w.count;for(let N=D,I=D+R;N<I;N+=3)A(t.getX(N+0)),A(t.getX(N+1)),A(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new we(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(n,s),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(n,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Di.fromBufferAttribute(t,e),Di.normalize(),t.setXYZ(e,Di.x,Di.y,Di.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new we(f,u,h)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(n[l]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var bm=new O,qb=new O,$b=new re,Nn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=bm.subVectors(i,e).cross(qb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(bm),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||$b.getNormalMatrix(t),n=this.coplanarPoint(bm).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zb=0,Tr=class extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Ha,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gm,this.blendDst=Wm,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Th,this.stencilZFail=Th,this.stencilZPass=Th,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ee(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){ee(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Nn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new It().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qr=new O,wm=new O,sh=new O,oh=new O,go=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qr.copy(this.origin).addScaledVector(this.direction,e),qr.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){wm.copy(t).add(e).multiplyScalar(.5),sh.copy(e).sub(t).normalize(),oh.copy(this.origin).sub(wm);let s=t.distanceTo(e)*.5,o=-this.direction.dot(sh),a=oh.dot(this.direction),l=-oh.dot(sh),c=oh.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(wm).addScaledVector(sh,f),d}intersectSphere(t,e){if(t.radius<0)return null;qr.subVectors(t.center,this.origin);let i=qr.dot(this.direction),n=qr.dot(qr)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,qr)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=i.x-o.x,v=i.y-o.y,b=i.z-o.z,y=Math.abs(l),M=Math.abs(c),E=Math.abs(u),A,x,S,w,D,R,N,I,F,U,B,Y;if(y>=M&&y>=E?(S=l,R=h,F=p,Y=g,l>=0?(A=c,x=u,w=f,D=d,N=_,I=m,U=v,B=b):(A=u,x=c,w=d,D=f,N=m,I=_,U=b,B=v)):M>=E?(S=c,R=f,F=_,Y=v,c>=0?(A=u,x=l,w=d,D=h,N=m,I=p,U=b,B=g):(A=l,x=u,w=h,D=d,N=p,I=m,U=g,B=b)):(S=u,R=d,F=m,Y=b,u>=0?(A=l,x=c,w=h,D=f,N=p,I=_,U=g,B=v):(A=c,x=l,w=f,D=h,N=_,I=p,U=v,B=g)),S===0)return null;let V=A/S,P=x/S,J=1/S,ot=w-V*R,_t=D-P*R,Ft=N-V*F,Q=I-P*F,lt=U-V*Y,W=B-P*Y,K=lt*Q-W*Ft,dt=ot*W-_t*lt,yt=Ft*_t-Q*ot;if(n){if(K<0||dt<0||yt<0)return null}else if((K<0||dt<0||yt<0)&&(K>0||dt>0||yt>0))return null;let ut=K+dt+yt;if(ut===0)return null;let Ot=J*(K*R+dt*F+yt*Y);return(ut>0?Ot<0:Ot>0)?null:this.at(Ot/ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class extends Tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},qx=new ue,ho=new go,ah=new Kn,$x=new O,lh=new O,ch=new O,uh=new O,Em=new O,hh=new O,Zx=new O,fh=new O,Jt=class extends Ri{constructor(t=new Ce,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){hh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(Em.fromBufferAttribute(h,t),o?hh.addScaledVector(Em,u):hh.addScaledVector(Em.sub(e),u))}e.add(hh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ah.copy(i.boundingSphere),ah.applyMatrix4(s),ho.copy(t.ray).recast(t.near),!(ah.containsPoint(ho.origin)===!1&&(ho.intersectSphere(ah,$x)===null||ho.origin.distanceToSquared($x)>(t.far-t.near)**2))&&(qx.copy(s).invert(),ho.copy(t.ray).applyMatrix4(qx),!(i.boundingBox!==null&&ho.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ho)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,M=b;y<M;y+=3){let E=a.getX(y),A=a.getX(y+1),x=a.getX(y+2);n=dh(this,g,t,i,c,u,h,E,A,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=a.getX(m),b=a.getX(m+1),y=a.getX(m+2);n=dh(this,o,t,i,c,u,h,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],v=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=v,M=b;y<M;y+=3){let E=y,A=y+1,x=y+2;n=dh(this,g,t,i,c,u,h,E,A,x),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let v=m,b=m+1,y=m+2;n=dh(this,o,t,i,c,u,h,v,b,y),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function Jb(r,t,e,i,n,s,o,a){let l;if(t.side===ki?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Ls,a),l===null)return null;fh.copy(a),fh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(fh);return c<e.near||c>e.far?null:{distance:c,point:fh.clone(),object:r}}function dh(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,lh),r.getVertexPosition(l,ch),r.getVertexPosition(c,uh);let u=Jb(r,t,e,i,lh,ch,uh,Zx);if(u){let h=new O;$r.getBarycoord(Zx,lh,ch,uh,h),n&&(u.uv=$r.getInterpolatedAttribute(n,a,l,c,h,new It)),s&&(u.uv1=$r.getInterpolatedAttribute(s,a,l,c,h,new It)),o&&(u.normal=$r.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};$r.getNormal(lh,ch,uh,f.normal),u.face=f,u.barycoord=h}return u}var _o=class extends fn{constructor(t=null,e=1,i=1,n,s,o,a,l,c=ui,u=ui,h,f){super(null,o,a,l,c,u,n,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lc=class extends we{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xa=new ue,Jx=new ue,ph=[],Kx=new Er,Kb=new ue,Kl=new Jt,jl=new Kn,xo=class extends Jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Kb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Er),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xa),Kx.copy(t.boundingBox).applyMatrix4(xa),this.boundingBox.union(Kx)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xa),jl.copy(t.boundingSphere).applyMatrix4(xa),this.boundingSphere.union(jl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Kl.geometry=this.geometry,Kl.material=this.material,Kl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),jl.copy(this.boundingSphere),jl.applyMatrix4(i),t.ray.intersectsSphere(jl)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,xa),Jx.multiplyMatrices(i,xa),Kl.matrixWorld=Jx,Kl.raycast(t,ph);for(let o=0,a=ph.length;o<a;o++){let l=ph[o];l.instanceId=s,l.object=this,e.push(l)}ph.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(n*this.count),n,this.count,df,Mn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fo=new Kn,jb=new It(.5,.5),mh=new O,Fa=class{constructor(t=new Nn,e=new Nn,i=new Nn,n=new Nn,s=new Nn,o=new Nn){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=lr,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],v=s[12],b=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-o,d-u,g-p,M-v).normalize(),n[1].setComponents(c+o,d+u,g+p,M+v).normalize(),n[2].setComponents(c+a,d+h,g+_,M+b).normalize(),n[3].setComponents(c-a,d-h,g-_,M-b).normalize(),i)n[4].setComponents(l,f,m,y).normalize(),n[5].setComponents(c-l,d-f,g-m,M-y).normalize();else if(n[4].setComponents(c-l,d-f,g-m,M-y).normalize(),e===lr)n[5].setComponents(c+l,d+f,g+m,M+y).normalize();else if(e===Aa)n[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(t){fo.center.set(0,0,0);let e=jb.distanceTo(t.center);return fo.radius=.7071067811865476+e,fo.applyMatrix4(t.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(mh.x=n.normal.x>0?t.max.x:t.min.x,mh.y=n.normal.y>0?t.max.y:t.min.y,mh.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(mh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var La=class extends Tr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},kh=new O,zh=new O,jx=new ue,Ql=new go,gh=new Kn,Tm=new O,Qx=new O,vo=class extends Ri{constructor(t=new Ce,e=new La){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)kh.fromBufferAttribute(e,n-1),zh.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=kh.distanceTo(zh);t.setAttribute("lineDistance",new Ae(i,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gh.copy(i.boundingSphere),gh.applyMatrix4(n),gh.radius+=s,t.ray.intersectsSphere(gh)===!1)return;jx.copy(n).invert(),Ql.copy(t.ray).applyMatrix4(jx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),v=u.getX(_+1),b=_h(this,t,Ql,l,g,v,_);b&&e.push(b)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=_h(this,t,Ql,l,_,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=_h(this,t,Ql,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=_h(this,t,Ql,l,p-1,d,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function _h(r,t,e,i,n,s,o){let a=r.geometry.attributes.position;if(kh.fromBufferAttribute(a,n),zh.fromBufferAttribute(a,s),e.distanceSqToSegment(kh,zh,Tm,Qx)>i)return;Tm.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Tm);if(!(c<t.near||c>t.far))return{distance:c,point:Qx.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var tv=new O,ev=new O,yo=class extends vo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)tv.fromBufferAttribute(e,n),ev.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+tv.distanceTo(ev);t.setAttribute("lineDistance",new Ae(i,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Hh=class extends Tr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},iv=new ue,Nm=new go,xh=new Kn,vh=new O,cc=class extends Ri{constructor(t=new Ce,e=new Hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xh.copy(i.boundingSphere),xh.applyMatrix4(n),xh.radius+=s,t.ray.intersectsSphere(xh)===!1)return;iv.copy(n).invert(),Nm.copy(t.ray).applyMatrix4(iv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);vh.fromBufferAttribute(h,m),nv(vh,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)vh.fromBufferAttribute(h,p),nv(vh,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function nv(r,t,e,i,n,s,o){let a=Nm.distanceSqToPoint(r);if(a<e){let l=new O;Nm.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var uc=class extends fn{constructor(t=[],e=Ns,i,n,s,o,a,l,c,u){super(t,e,i,n,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hc=class extends fn{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ts=class extends fn{constructor(t,e,i=hr,n,s,o,a=ui,l=ui,c,u=br,h=1){if(u!==br&&u!==Os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,n,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ra(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vh=class extends Ts{constructor(t,e=hr,i=Ns,n,s,o=ui,a=ui,l,c=br){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,n,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fc=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},As=class r extends Ce{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2));function p(_,m,g,v,b,y,M,E,A,x,S){let w=y/A,D=M/x,R=y/2,N=M/2,I=E/2,F=A+1,U=x+1,B=0,Y=0,V=new O;for(let P=0;P<U;P++){let J=P*D-N;for(let ot=0;ot<F;ot++){let _t=ot*w-R;V[_]=_t*v,V[m]=J*b,V[g]=I,c.push(V.x,V.y,V.z),V[_]=0,V[m]=0,V[g]=E>0?1:-1,u.push(V.x,V.y,V.z),h.push(ot/A),h.push(1-P/x),B+=1}}for(let P=0;P<x;P++)for(let J=0;J<A;J++){let ot=f+J+F*P,_t=f+J+F*(P+1),Ft=f+(J+1)+F*(P+1),Q=f+(J+1)+F*P;l.push(ot,_t,Q),l.push(_t,Ft,Q),Y+=6}a.addGroup(d,Y,S),d+=Y,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Na=class r extends Ce{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let u=[],h=[],f=[],d=[],p=0,_=[],m=i/2,g=0;v(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function v(){let y=new O,M=new O,E=0,A=(e-t)/i;for(let x=0;x<=s;x++){let S=[],w=x/s,D=w*(e-t)+t;for(let R=0;R<=n;R++){let N=R/n,I=N*l+a,F=Math.sin(I),U=Math.cos(I);M.x=D*F,M.y=-w*i+m,M.z=D*U,h.push(M.x,M.y,M.z),y.set(F,A,U).normalize(),f.push(y.x,y.y,y.z),d.push(N,1-w),S.push(p++)}_.push(S)}for(let x=0;x<n;x++)for(let S=0;S<s;S++){let w=_[S][x],D=_[S+1][x],R=_[S+1][x+1],N=_[S][x+1];(t>0||S!==0)&&(u.push(w,D,N),E+=3),(e>0||S!==s-1)&&(u.push(D,R,N),E+=3)}c.addGroup(g,E,0),g+=E}function b(y){let M=p,E=new It,A=new O,x=0,S=y===!0?t:e,w=y===!0?1:-1;for(let R=1;R<=n;R++)h.push(0,m*w,0),f.push(0,w,0),d.push(.5,.5),p++;let D=p;for(let R=0;R<=n;R++){let I=R/n*l+a,F=Math.cos(I),U=Math.sin(I);A.x=S*U,A.y=m*w,A.z=S*F,h.push(A.x,A.y,A.z),f.push(0,w,0),E.x=F*.5+.5,E.y=U*.5*w+.5,d.push(E.x,E.y),p++}for(let R=0;R<n;R++){let N=M+R,I=D+R;y===!0?u.push(I,I+1,N):u.push(I+1,I,N),x+=3}c.addGroup(g,x,y===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var dc=class r extends Ce{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),c(i),u(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let b=new O,y=new O,M=new O;for(let E=0;E<e.length;E+=3)d(e[E+0],b),d(e[E+1],y),d(e[E+2],M),l(b,y,M,v)}function l(v,b,y,M){let E=M+1,A=[];for(let x=0;x<=E;x++){A[x]=[];let S=v.clone().lerp(y,x/E),w=b.clone().lerp(y,x/E),D=E-x;for(let R=0;R<=D;R++)R===0&&x===E?A[x][R]=S:A[x][R]=S.clone().lerp(w,R/D)}for(let x=0;x<E;x++)for(let S=0;S<2*(E-x)-1;S++){let w=Math.floor(S/2);S%2===0?(f(A[x][w+1]),f(A[x+1][w]),f(A[x][w])):(f(A[x][w+1]),f(A[x+1][w+1]),f(A[x+1][w]))}}function c(v){let b=new O;for(let y=0;y<s.length;y+=3)b.x=s[y+0],b.y=s[y+1],b.z=s[y+2],b.normalize().multiplyScalar(v),s[y+0]=b.x,s[y+1]=b.y,s[y+2]=b.z}function u(){let v=new O;for(let b=0;b<s.length;b+=3){v.x=s[b+0],v.y=s[b+1],v.z=s[b+2];let y=m(v)/2/Math.PI+.5,M=g(v)/Math.PI+.5;o.push(y,1-M)}p(),h()}function h(){for(let v=0;v<o.length;v+=6){let b=o[v+0],y=o[v+2],M=o[v+4],E=Math.max(b,y,M),A=Math.min(b,y,M);E>.9&&A<.1&&(b<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),M<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,b){let y=v*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let v=new O,b=new O,y=new O,M=new O,E=new It,A=new It,x=new It;for(let S=0,w=0;S<s.length;S+=9,w+=6){v.set(s[S+0],s[S+1],s[S+2]),b.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(o[w+0],o[w+1]),A.set(o[w+2],o[w+3]),x.set(o[w+4],o[w+5]),M.copy(v).add(b).add(y).divideScalar(3);let D=m(M);_(E,w+0,v,D),_(A,w+2,b,D),_(x,w+4,y,D)}}function _(v,b,y,M){M<0&&v.x===1&&(o[b]=v.x-1),y.x===0&&y.z===0&&(o[b]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function g(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var yh=new O,Sh=new O,Am=new O,Mh=new $r,pc=class extends Ce{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),s=Math.cos(ba*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=Mh;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Mh.getNormal(Am),h[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let v=0;v<3;v++){let b=(v+1)%3,y=h[v],M=h[b],E=Mh[u[v]],A=Mh[u[b]],x=`${y}_${M}`,S=`${M}_${y}`;S in f&&f[S]?(Am.dot(f[S].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(A.x,A.y,A.z)),f[S]=null):x in f||(f[x]={index0:c[v],index1:c[b],normal:Am.clone()})}}for(let p in f)if(f[p]){let{index0:_,index1:m}=f[p];yh.fromBufferAttribute(a,_),Sh.fromBufferAttribute(a,m),d.push(yh.x,yh.y,yh.z),d.push(Sh.x,Sh.y,Sh.z)}this.setAttribute("position",new Ae(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Gh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ee("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let u=i[n],f=i[n+1]-u,d=(o-u)/f;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new It:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,n=[],s=[],o=[],a=new O,l=new ue;for(let d=0;d<=t;d++){let p=d/t;n[d]=this.getTangentAt(p,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pe(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(pe(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],d*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Qb(r,t){let e=1-r;return e*e*t}function tw(r,t){return 2*(1-r)*r*t}function ew(r,t){return r*r*t}function Cm(r,t,e,i){return Qb(r,t)+tw(r,e)+ew(r,i)}var mc=class extends Gh{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(Cm(t,n.x,s.x,o.x),Cm(t,n.y,s.y,o.y),Cm(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};var Oa=class r extends dc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var gc=class r extends dc{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Fe=class r extends Ce{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let v=g*f-o;for(let b=0;b<c;b++){let y=b*h-s;p.push(y,-v,0),_.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let v=0;v<a;v++){let b=v+c*g,y=v+c*(g+1),M=v+1+c*(g+1),E=v+1+c*g;d.push(b,y,E),d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Cs=class r extends Ce{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new O,f=new O,d=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let v=[],b=g/i,y=o+b*a,M=t*Math.cos(y),E=Math.sqrt(t*t-M*M),A=0;g===0&&o===0?A=.5/e:g===i&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let S=x/e,w=n+S*s;h.x=-E*Math.cos(w),h.y=M,h.z=E*Math.sin(w),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(S+A,1-b),v.push(c++)}u.push(v)}for(let g=0;g<i;g++)for(let v=0;v<e;v++){let b=u[g][v+1],y=u[g][v],M=u[g+1][v],E=u[g+1][v+1];(g!==0||o>0)&&d.push(b,y,E),(g!==i-1||l<Math.PI)&&d.push(y,M,E)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ds=class r extends Ce{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],h=[],f=new O,d=new O,p=new O;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let g=0;g<=n;g++){let v=g/n*s;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(g/n),h.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=n;m++){let g=(n+1)*_+m-1,v=(n+1)*(_-1)+m-1,b=(n+1)*(_-1)+m,y=(n+1)*_+m;l.push(g,v,y),l.push(v,b,y)}this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Eo(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(rv(n))n.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(rv(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ji(r){let t={};for(let e=0;e<r.length;e++){let i=Eo(r[e]);for(let n in i)t[n]=i[n]}return t}function rv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function iw(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function n0(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var jr={clone:Eo,merge:ji},nw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends Tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nw,this.fragmentShader=rw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=iw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new vt().setHex(n.value);break;case"v2":this.uniforms[i].value=new It().fromArray(n.value);break;case"v3":this.uniforms[i].value=new O().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ge().fromArray(n.value);break;case"m3":this.uniforms[i].value=new re().fromArray(n.value);break;case"m4":this.uniforms[i].value=new ue().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ua=class extends ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},So=class extends Tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yn=class extends So{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new vt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new vt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new vt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Wh=class extends Tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ov,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xh=class extends Tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function va(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Dm(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Rs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Yh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Im,endingEnd:Im}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fm:s=t,a=2*e-i;break;case Lm:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fm:o=t,l=2*i-e;break;case Lm:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(n-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,b=(-1-d)*m+(1.5+d)*_+.5*p,y=d*m-d*_;for(let M=0;M!==a;++M)s[M]=g*o[u+M]+v*o[c+M]+b*o[l+M]+y*o[h+M];return s}},qh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(n-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},$h=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},Zh=class extends Rs{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-e)/(n-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,v=h[g],b=h[g+1],y=t*f+p*2,M=u[y],E=u[y+1],A=ow(i,e,v,M,n);s[p]=Kv(A,_,b,E,m)}return s}};function Kv(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function sw(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function ow(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=Kv(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=sw(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Un=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=va(e,this.TimeBufferType),this.values=va(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:va(t.times,Array),values:va(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Dm(t.settings)&&(i.settings={inTangents:va(t.settings.inTangents,Array),outTangents:va(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new $h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Zh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ec:e=this.InterpolantFactoryMethodDiscrete;break;case Nh:e=this.InterpolantFactoryMethodLinear;break;case Eh:e=this.InterpolantFactoryMethodSmooth;break;case Pm:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ee("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ec;case this.InterpolantFactoryMethodLinear:return Nh;case this.InterpolantFactoryMethodSmooth:return Eh;case this.InterpolantFactoryMethodBezier:return Pm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Dm(this.settings)&&(sv(this.settings.inTangents,t),sv(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ne("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(ne("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ne("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ne("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&_b(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){ne("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Eh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(n)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let _=e[h+p];if(_!==e[f+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Dm(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function sv(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Nh;var Ps=class extends Un{constructor(t,e,i){super(t,e,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ec;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Jh=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}};Jh.prototype.ValueTypeName="color";var Kh=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}};Kh.prototype.ValueTypeName="number";var jh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let u=c+a;c!==u;c+=4)Si.slerpFlat(s,0,o,c-a,o,c,l);return s}},_c=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new jh(this.times,this.values,this.getValueSize(),t)}};_c.prototype.ValueTypeName="quaternion";_c.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Un{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=ec;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var Qh=class extends Un{constructor(t,e,i,n){super(t,e,i,n)}};Qh.prototype.ValueTypeName="vector";var tf=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&n.onStart!==void 0&&n.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jv=new tf,ef=class{constructor(t){this.manager=t!==void 0?t:jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ef.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ba=class extends Ri{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xc=class extends Ba{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ri.DEFAULT_UP),this.updateMatrix(),this.groundColor=new vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Rm=new ue,ov=new O,av=new O,nf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ov.setFromMatrixPosition(t.matrixWorld),e.position.copy(ov),av.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(av),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Rm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Rm,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Aa||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Rm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},bh=new O,wh=new Si,Sr=new O,vc=class extends Ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=lr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(bh,wh,Sr),Sr.x===1&&Sr.y===1&&Sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bh,wh,Sr.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(bh,wh,Sr),Sr.x===1&&Sr.y===1&&Sr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bh,wh,Sr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new O,lv=new It,cv=new It,Ki=class extends vc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Da*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Da*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,e){return this.getViewBounds(t,lv,cv),e.subVectors(cv,lv)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fs=class extends vc{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Om=class extends nf{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ka=class extends Ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ri.DEFAULT_UP),this.updateMatrix(),this.target=new Ri,this.shadow=new Om}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},yc=class extends Ba{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var ya=-90,Sa=1,rf=class extends Ri{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ki(ya,Sa,t,e);n.layers=this.layers,this.add(n);let s=new Ki(ya,Sa,t,e);s.layers=this.layers,this.add(s);let o=new Ki(ya,Sa,t,e);o.layers=this.layers,this.add(o);let a=new Ki(ya,Sa,t,e);a.layers=this.layers,this.add(a);let l=new Ki(ya,Sa,t,e);l.layers=this.layers,this.add(l);let c=new Ki(ya,Sa,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===lr)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},sf=class extends Ki{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Sc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=aw.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function aw(){this._document.hidden===!1&&this.reset()}var r0="\\[\\]\\.:\\/",lw=new RegExp("["+r0+"]","g"),s0="[^"+r0+"]",cw="[^"+r0.replace("\\.","")+"]",uw=/((?:WC+[\/:])*)/.source.replace("WC",s0),hw=/(WCOD+)?/.source.replace("WCOD",cw),fw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",s0),dw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",s0),pw=new RegExp("^"+uw+hw+fw+dw+"$"),mw=["material","materials","bones","map"],Um=class{constructor(t,e,i){let n=i||$e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},$e=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(lw,"")}static parseTrackName(t){let e=pw.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);mw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ee("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ne("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ne("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ne("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ne("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ne("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ne("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;ne("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ne("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$e.Composite=Um;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bD=new Float32Array(1);var uv=new ue,cr=class{constructor(t,e,i=0,n=1/0){this.ray=new go(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ne("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uv),this}intersectObject(t,e=!0,i=[]){return Bm(t,this,i,e),i.sort(hv),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Bm(t[n],this,i,e);return i.sort(hv),i}};function hv(r,t){return r.distance-t.distance}function Bm(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Bm(s[o],t,e,!0)}}var h0=class h0{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};h0.prototype.isMatrix2=!0;var km=h0;function o0(r,t,e,i){let n=gw(i);switch(e){case Km:return r*t;case df:return r*t/n.components*n.byteLength;case pf:return r*t/n.components*n.byteLength;case Us:return r*t*2/n.components*n.byteLength;case mf:return r*t*2/n.components*n.byteLength;case jm:return r*t*3/n.components*n.byteLength;case bn:return r*t*4/n.components*n.byteLength;case gf:return r*t*4/n.components*n.byteLength;case Pc:case Ic:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fc:case Lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xf:case yf:return Math.max(r,16)*Math.max(t,8)/4;case _f:case vf:return Math.max(r,8)*Math.max(t,8)/2;case Sf:case Mf:case wf:case Ef:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bf:case Nc:case Tf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Af:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cf:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Df:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Rf:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Pf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case If:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ff:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Lf:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Nf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Of:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Uf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bf:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case kf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case zf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Hf:case Vf:case Gf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wf:case Xf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Oc:case Yf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function gw(r){switch(r){case Sn:case qm:return{byteLength:1,components:1};case Va:case $m:case Mi:return{byteLength:2,components:1};case hf:case ff:return{byteLength:2,components:4};case hr:case uf:case Mn:return{byteLength:4,components:1};case Zm:case Jm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function yy(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function xw(r){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var vw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ww=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ew=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Aw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Cw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Fw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ww=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Xw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ME=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,DE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,LE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,oT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,aT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_T=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,TT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,DT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,WT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:vw,alphahash_pars_fragment:yw,alphamap_fragment:Sw,alphamap_pars_fragment:Mw,alphatest_fragment:bw,alphatest_pars_fragment:ww,aomap_fragment:Ew,aomap_pars_fragment:Tw,batching_pars_vertex:Aw,batching_vertex:Cw,begin_vertex:Dw,beginnormal_vertex:Rw,bsdfs:Pw,iridescence_fragment:Iw,bumpmap_pars_fragment:Fw,clipping_planes_fragment:Lw,clipping_planes_pars_fragment:Nw,clipping_planes_pars_vertex:Ow,clipping_planes_vertex:Uw,color_fragment:Bw,color_pars_fragment:kw,color_pars_vertex:zw,color_vertex:Hw,common:Vw,cube_uv_reflection_fragment:Gw,defaultnormal_vertex:Ww,displacementmap_pars_vertex:Xw,displacementmap_vertex:Yw,emissivemap_fragment:qw,emissivemap_pars_fragment:$w,colorspace_fragment:Zw,colorspace_pars_fragment:Jw,envmap_fragment:Kw,envmap_common_pars_fragment:jw,envmap_pars_fragment:Qw,envmap_pars_vertex:tE,envmap_physical_pars_fragment:hE,envmap_vertex:eE,fog_vertex:iE,fog_pars_vertex:nE,fog_fragment:rE,fog_pars_fragment:sE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:aE,lights_lambert_fragment:lE,lights_lambert_pars_fragment:cE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:pE,lights_phong_pars_fragment:mE,lights_physical_fragment:gE,lights_physical_pars_fragment:_E,lights_fragment_begin:xE,lights_fragment_maps:vE,lights_fragment_end:yE,lightprobes_pars_fragment:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:bE,logdepthbuf_pars_vertex:wE,logdepthbuf_vertex:EE,map_fragment:TE,map_pars_fragment:AE,map_particle_fragment:CE,map_particle_pars_fragment:DE,metalnessmap_fragment:RE,metalnessmap_pars_fragment:PE,morphinstance_vertex:IE,morphcolor_vertex:FE,morphnormal_vertex:LE,morphtarget_pars_vertex:NE,morphtarget_vertex:OE,normal_fragment_begin:UE,normal_fragment_maps:BE,normal_pars_fragment:kE,normal_pars_vertex:zE,normal_vertex:HE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:GE,clearcoat_normal_fragment_maps:WE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:YE,opaque_fragment:qE,packing:$E,premultiplied_alpha_fragment:ZE,project_vertex:JE,dithering_fragment:KE,dithering_pars_fragment:jE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:tT,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:iT,shadowmap_vertex:nT,shadowmask_pars_fragment:rT,skinbase_vertex:sT,skinning_pars_vertex:oT,skinning_vertex:aT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:hT,tonemapping_pars_fragment:fT,transmission_fragment:dT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:_T,worldpos_vertex:xT,background_vert:vT,background_frag:yT,backgroundCube_vert:ST,backgroundCube_frag:MT,cube_vert:bT,cube_frag:wT,depth_vert:ET,depth_frag:TT,distance_vert:AT,distance_frag:CT,equirect_vert:DT,equirect_frag:RT,linedashed_vert:PT,linedashed_frag:IT,meshbasic_vert:FT,meshbasic_frag:LT,meshlambert_vert:NT,meshlambert_frag:OT,meshmatcap_vert:UT,meshmatcap_frag:BT,meshnormal_vert:kT,meshnormal_frag:zT,meshphong_vert:HT,meshphong_frag:VT,meshphysical_vert:GT,meshphysical_frag:WT,meshtoon_vert:XT,meshtoon_frag:YT,points_vert:qT,points_frag:$T,shadow_vert:ZT,shadow_frag:JT,sprite_vert:KT,sprite_frag:jT},Rt={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Dr={basic:{uniforms:ji([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:ji([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:ji([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:ji([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:ji([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new vt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:ji([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:ji([Rt.points,Rt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:ji([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:ji([Rt.common,Rt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:ji([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:ji([Rt.sprite,Rt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distance:{uniforms:ji([Rt.common,Rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distance_vert,fragmentShader:he.distance_frag},shadow:{uniforms:ji([Rt.lights,Rt.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Dr.physical={uniforms:ji([Dr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var Jf={r:0,b:0,g:0},QT=new ue,Sy=new re;Sy.set(-1,0,0,0,1,0,0,0,1);function tA(r,t,e,i,n,s){let o=new vt(0),a=n===!0?0:1,l,c,u=null,h=0,f=null;function d(v){let b=v.isScene===!0?v.background:null;if(b&&b.isTexture){let y=v.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(v){let b=!1,y=d(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),b=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,b){let y=d(b);y&&(y.isCubeTexture||y.mapping===Dc)?(c===void 0&&(c=new Jt(new As(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:Eo(Dr.backgroundCube.uniforms),vertexShader:Dr.backgroundCube.vertexShader,fragmentShader:Dr.backgroundCube.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(QT.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Sy),c.material.toneMapped=_e.getTransfer(y.colorSpace)!==be,(u!==y||h!==y.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Jt(new Fe(2,2),new ae({name:"BackgroundMaterial",uniforms:Eo(Dr.background.uniforms),vertexShader:Dr.background.vertexShader,fragmentShader:Dr.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=_e.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,b){v.getRGB(Jf,n0(r)),e.buffers.color.setClear(Jf.r,Jf.g,Jf.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:_,dispose:g}}function eA(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null),s=n,o=!1;function a(D,R,N,I,F){let U=!1,B=h(D,I,N,R);s!==B&&(s=B,c(s.object)),U=d(D,I,N,F),U&&p(D,I,N,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(U||o)&&(o=!1,y(D,R,N,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(D){return r.bindVertexArray(D)}function u(D){return r.deleteVertexArray(D)}function h(D,R,N,I){let F=I.wireframe===!0,U=i[R.id];U===void 0&&(U={},i[R.id]=U);let B=D.isInstancedMesh===!0?D.id:0,Y=U[B];Y===void 0&&(Y={},U[B]=Y);let V=Y[N.id];V===void 0&&(V={},Y[N.id]=V);let P=V[F];return P===void 0&&(P=f(l()),V[F]=P),P}function f(D){let R=[],N=[],I=[];for(let F=0;F<e;F++)R[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,R,N,I){let F=s.attributes,U=R.attributes,B=0,Y=N.getAttributes();for(let V in Y)if(Y[V].location>=0){let J=F[V],ot=U[V];if(ot===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),J===void 0||J.attribute!==ot||ot&&J.data!==ot.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function p(D,R,N,I){let F={},U=R.attributes,B=0,Y=N.getAttributes();for(let V in Y)if(Y[V].location>=0){let J=U[V];J===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));let ot={};ot.attribute=J,J&&J.data&&(ot.data=J.data),F[V]=ot,B++}s.attributes=F,s.attributesNum=B,s.index=I}function _(){let D=s.newAttributes;for(let R=0,N=D.length;R<N;R++)D[R]=0}function m(D){g(D,0)}function g(D,R){let N=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;N[D]=1,I[D]===0&&(r.enableVertexAttribArray(D),I[D]=1),F[D]!==R&&(r.vertexAttribDivisor(D,R),F[D]=R)}function v(){let D=s.newAttributes,R=s.enabledAttributes;for(let N=0,I=R.length;N<I;N++)R[N]!==D[N]&&(r.disableVertexAttribArray(N),R[N]=0)}function b(D,R,N,I,F,U,B){B===!0?r.vertexAttribIPointer(D,R,N,F,U):r.vertexAttribPointer(D,R,N,I,F,U)}function y(D,R,N,I){_();let F=I.attributes,U=N.getAttributes(),B=R.defaultAttributeValues;for(let Y in U){let V=U[Y];if(V.location>=0){let P=F[Y];if(P===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(P=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(P=D.instanceColor)),P!==void 0){let J=P.normalized,ot=P.itemSize,_t=t.get(P);if(_t===void 0)continue;let Ft=_t.buffer,Q=_t.type,lt=_t.bytesPerElement,W=Q===r.INT||Q===r.UNSIGNED_INT||P.gpuType===uf;if(P.isInterleavedBufferAttribute){let K=P.data,dt=K.stride,yt=P.offset;if(K.isInstancedInterleavedBuffer){for(let ut=0;ut<V.locationSize;ut++)g(V.location+ut,K.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ut=0;ut<V.locationSize;ut++)m(V.location+ut);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let ut=0;ut<V.locationSize;ut++)b(V.location+ut,ot/V.locationSize,Q,J,dt*lt,(yt+ot/V.locationSize*ut)*lt,W)}else{if(P.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)g(V.location+K,P.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ft);for(let K=0;K<V.locationSize;K++)b(V.location+K,ot/V.locationSize,Q,J,ot*lt,ot/V.locationSize*K*lt,W)}}else if(B!==void 0){let J=B[Y];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(V.location,J);break;case 3:r.vertexAttrib3fv(V.location,J);break;case 4:r.vertexAttrib4fv(V.location,J);break;default:r.vertexAttrib1fv(V.location,J)}}}}v()}function M(){S();for(let D in i){let R=i[D];for(let N in R){let I=R[N];for(let F in I){let U=I[F];for(let B in U)u(U[B].object),delete U[B];delete I[F]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let R=i[D.id];for(let N in R){let I=R[N];for(let F in I){let U=I[F];for(let B in U)u(U[B].object),delete U[B];delete I[F]}}delete i[D.id]}function A(D){for(let R in i){let N=i[R];for(let I in N){let F=N[I];if(F[D.id]===void 0)continue;let U=F[D.id];for(let B in U)u(U[B].object),delete U[B];delete F[D.id]}}}function x(D){for(let R in i){let N=i[R],I=D.isInstancedMesh===!0?D.id:0,F=N[I];if(F!==void 0){for(let U in F){let B=F[U];for(let Y in B)u(B[Y].object),delete B[Y];delete F[U]}delete N[I],Object.keys(N).length===0&&delete i[R]}}}function S(){w(),o=!0,s!==n&&(s=n,c(s.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:S,resetDefaultState:w,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function iA(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function nA(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){return!(A!==bn&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let x=A===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==Mn&&!x&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(ee("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&ee("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:y,maxSamples:M,samples:E}}function rA(r){let t=this,e=null,i=0,n=!1,s=!1,o=new Nn,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!n||p===null||p.length===0||s&&!m)s?u(null):c();else{let v=s?0:i,b=v*4,y=g.clippingState||null;l.value=y,y=u(p,f,b,d);for(let M=0;M!==b;++M)y[M]=e[M];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,y=d;b!==_;++b,y+=4)o.copy(h[b]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Ya=4,sA=6,oA=20,aA=256,Uc=new Fs,Qv=new vt,f0=null,d0=0,p0=0,m0=!1,lA=new O,To=new O,$a=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=lA}=s;f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iy(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ey(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(f0,d0,p0),this._renderer.xr.enabled=m0,t.scissorTest=!1,Xa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),f0=this._renderer.getRenderTarget(),d0=this._renderer.getActiveCubeFace(),p0=this._renderer.getActiveMipmapLevel(),m0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Mi,format:bn,colorSpace:ic,depthBuffer:!1},n=ty(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ty(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=cA(s)),this._blurMaterial=hA(s,t,e),this._ggxMaterial=uA(s,t,e)}return n}_compileMaterial(t){let e=new Jt(new Ce,t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,i,n,s){let l=new Ki(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Qv),h.toneMapping=ur,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Jt(new As,new Ke({name:"PMREM.Background",side:ki,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,g=!0):(m.color.copy(Qv),g=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let M=this._cubeSize;Xa(n,y*M,b>2?M:0,M,M),h.setRenderTarget(n),g&&h.render(_,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ns||t.mapping===wo;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=iy()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ey());let s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Xa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Uc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,_=this._sizeLods[i],m=3*_*(i>p-Ya?i-p+Ya:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Xa(s,m,g,3*_,2*_),n.setRenderTarget(s),n.render(a,Uc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Xa(t,m,g,3*_,2*_),n.setRenderTarget(t),n.render(a,Uc)}_blur(t,e,i,n){let s=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,n,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[n],h=3*u*(n>this._lodMax-Ya?n-this._lodMax+Ya:0),f=4*(this._cubeSize-u);Xa(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Uc)}};function cA(r){let t=[],e=[],i=r,n=r-Ya+1+sA;for(let s=0;s<n;s++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),_=new Float32Array(d*f*h);for(let g=0;g<h;g++){let v=g%3*2/3-1,b=g>2?0:-1,y=[v,b,0,v+2/3,b,0,v+2/3,b+1,0,v,b,0,v+2/3,b+1,0,v,b+1,0];p.set(y,d*f*g);for(let M=0;M<f;M++){let E=u[M*2]*2-1,A=u[M*2+1]*2-1;g===0?To.set(1,A,E):g===1?To.set(-E,1,-A):g===2?To.set(-E,A,1):g===3?To.set(-1,A,-E):g===4?To.set(-E,-1,A):To.set(E,A,-1),To.toArray(_,(g*f+M)*d)}}let m=new Ce;m.setAttribute("position",new we(p,d)),m.setAttribute("outputDirection",new we(_,d)),e.push(new Jt(m,null)),i>Ya&&i--}return{lodMeshes:e,sizeLods:t}}function ty(r,t,e){let i=new oi(r,t,e);return i.texture.mapping=Dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xa(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function uA(r,t,e){return new ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:td(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function hA(r,t,e){return new ae({name:"SphericalGaussianBlur",defines:{SAMPLES:oA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:td(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function ey(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function iy(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var jf=class extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new uc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new As(5,5,5),s=new ae({name:"CubemapFromEquirect",uniforms:Eo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ki,blending:jn});s.uniforms.tEquirect.value=e;let o=new Jt(n,s),a=e.minFilter;return e.minFilter===Ar&&(e.minFilter=yi),new rf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}};function fA(r){let t=new WeakMap,e=new WeakMap,i=null;function n(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===af||d===lf)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new jf(p.height);return _.fromEquirectangularTexture(r,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===af||d===lf,_=d===Ns||d===wo;if(p||_){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new $a(r)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return p&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new $a(r)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===af?f.mapping=Ns:d===lf&&(f.mapping=wo),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:h}}function dA(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&po("WebGLRenderer: "+i+" extension not supported."),n}}}function pA(r,t,e,i){let n={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete n[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(d!==null){let v=d.array;_=d.version;for(let b=0,y=v.length;b<y;b+=3){let M=v[b+0],E=v[b+1],A=v[b+2];f.push(M,E,E,A,A,M)}}else{let v=p.array;_=p.version;for(let b=0,y=v.length/3-1;b<y;b+=3){let M=b+0,E=b+1,A=b+2;f.push(M,E,E,A,A,M)}}let m=new(p.count>=65535?ac:oc)(f,1);m.version=_;let g=s.get(h);g&&t.remove(g),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function mA(r,t,e){let i;function n(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(i,f,s,h*o),e.update(f,i,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(i,f,s,h*o,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];e.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function gA(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ne("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function _A(r,t,e){let i=new WeakMap,n=new Ge;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let S=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=a.attributes.position.count*b,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*M*4*h),A=new sc(E,y,M,h);A.type=Mn,A.needsUpdate=!0;let x=b*4;for(let w=0;w<h;w++){let D=m[w],R=g[w],N=v[w],I=y*M*4*w;for(let F=0;F<D.count;F++){let U=F*x;d===!0&&(n.fromBufferAttribute(D,F),E[I+U+0]=n.x,E[I+U+1]=n.y,E[I+U+2]=n.z,E[I+U+3]=0),p===!0&&(n.fromBufferAttribute(R,F),E[I+U+4]=n.x,E[I+U+5]=n.y,E[I+U+6]=n.z,E[I+U+7]=0),_===!0&&(n.fromBufferAttribute(N,F),E[I+U+8]=n.x,E[I+U+9]=n.y,E[I+U+10]=n.z,E[I+U+11]=N.itemSize===4?n.w:1)}}f={count:h,texture:A,size:new It(y,M)},i.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function xA(r,t,e,i,n){let s=new WeakMap;function o(c){let u=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var vA={[bc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[Ec]:"CINEON_TONE_MAPPING",[Tc]:"ACES_FILMIC_TONE_MAPPING",[Cc]:"AGX_TONE_MAPPING",[bo]:"NEUTRAL_TONE_MAPPING",[Ac]:"CUSTOM_TONE_MAPPING"};function yA(r,t,e,i,n,s){let o=new oi(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ce;c.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let u=new Ua({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Jt(c,u),f=new Fs(-1,1,1,-1,0,1),d=null,p=null,_=!1,m,g=null,v=[],b=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let E=0;E<v.length;E++){let A=v[E];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){v=y,b=v.length>0&&v[0].isRenderPass===!0;let M=o.width,E=o.height;v.length>0&&a===null&&(a=new oi(M,E,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),l=new oi(M,E,{type:Mi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let x=v[A];x.setSize&&x.setSize(M,E)}},this.begin=function(y,M){if(_||y.toneMapping===ur&&v.length===0)return!1;if(g=M,M!==null){let E=M.width,A=M.height;(o.width!==E||o.height!==A)&&this.setSize(E,A)}return b===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=ur,!0},this.hasRenderPass=function(){return b},this.end=function(y,M){y.toneMapping=m,_=!0;let E=o,A=a;for(let x=0;x<v.length;x++){let S=v[x];S.enabled!==!1&&(S.render(y,A,E,M),S.needsSwap!==!1&&(E=A,A=A===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,u.defines={},_e.getTransfer(d)===be&&(u.defines.SRGB_TRANSFER="");let x=vA[p];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(h,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var My=new fn,x0=new Ts(1,1),by=new sc,wy=new Bh,Ey=new uc,ny=[],ry=[],sy=new Float32Array(16),oy=new Float32Array(9),ay=new Float32Array(4);function Za(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=ny[n];if(s===void 0&&(s=new Float32Array(n),ny[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function bi(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function wi(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function ed(r,t){let e=ry[t];e===void 0&&(e=new Int32Array(t),ry[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function SA(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function MA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bi(e,t))return;r.uniform2fv(this.addr,t),wi(e,t)}}function bA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(bi(e,t))return;r.uniform3fv(this.addr,t),wi(e,t)}}function wA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bi(e,t))return;r.uniform4fv(this.addr,t),wi(e,t)}}function EA(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(bi(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),wi(e,t)}else{if(bi(e,i))return;ay.set(i),r.uniformMatrix2fv(this.addr,!1,ay),wi(e,i)}}function TA(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(bi(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),wi(e,t)}else{if(bi(e,i))return;oy.set(i),r.uniformMatrix3fv(this.addr,!1,oy),wi(e,i)}}function AA(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(bi(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),wi(e,t)}else{if(bi(e,i))return;sy.set(i),r.uniformMatrix4fv(this.addr,!1,sy),wi(e,i)}}function CA(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function DA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bi(e,t))return;r.uniform2iv(this.addr,t),wi(e,t)}}function RA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bi(e,t))return;r.uniform3iv(this.addr,t),wi(e,t)}}function PA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bi(e,t))return;r.uniform4iv(this.addr,t),wi(e,t)}}function IA(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function FA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(bi(e,t))return;r.uniform2uiv(this.addr,t),wi(e,t)}}function LA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(bi(e,t))return;r.uniform3uiv(this.addr,t),wi(e,t)}}function NA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(bi(e,t))return;r.uniform4uiv(this.addr,t),wi(e,t)}}function OA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(x0.compareFunction=e.isReversedDepthBuffer()?Zf:$f,s=x0):s=My,e.setTexture2D(t||s,n)}function UA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||wy,n)}function BA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||Ey,n)}function kA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||by,n)}function zA(r){switch(r){case 5126:return SA;case 35664:return MA;case 35665:return bA;case 35666:return wA;case 35674:return EA;case 35675:return TA;case 35676:return AA;case 5124:case 35670:return CA;case 35667:case 35671:return DA;case 35668:case 35672:return RA;case 35669:case 35673:return PA;case 5125:return IA;case 36294:return FA;case 36295:return LA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return UA;case 35680:case 36300:case 36308:case 36293:return BA;case 36289:case 36303:case 36311:case 36292:return kA}}function HA(r,t){r.uniform1fv(this.addr,t)}function VA(r,t){let e=Za(t,this.size,2);r.uniform2fv(this.addr,e)}function GA(r,t){let e=Za(t,this.size,3);r.uniform3fv(this.addr,e)}function WA(r,t){let e=Za(t,this.size,4);r.uniform4fv(this.addr,e)}function XA(r,t){let e=Za(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function YA(r,t){let e=Za(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function qA(r,t){let e=Za(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function $A(r,t){r.uniform1iv(this.addr,t)}function ZA(r,t){r.uniform2iv(this.addr,t)}function JA(r,t){r.uniform3iv(this.addr,t)}function KA(r,t){r.uniform4iv(this.addr,t)}function jA(r,t){r.uniform1uiv(this.addr,t)}function QA(r,t){r.uniform2uiv(this.addr,t)}function tC(r,t){r.uniform3uiv(this.addr,t)}function eC(r,t){r.uniform4uiv(this.addr,t)}function iC(r,t,e){let i=this.cache,n=t.length,s=ed(e,n);bi(i,s)||(r.uniform1iv(this.addr,s),wi(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=x0:o=My;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function nC(r,t,e){let i=this.cache,n=t.length,s=ed(e,n);bi(i,s)||(r.uniform1iv(this.addr,s),wi(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||wy,s[o])}function rC(r,t,e){let i=this.cache,n=t.length,s=ed(e,n);bi(i,s)||(r.uniform1iv(this.addr,s),wi(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||Ey,s[o])}function sC(r,t,e){let i=this.cache,n=t.length,s=ed(e,n);bi(i,s)||(r.uniform1iv(this.addr,s),wi(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||by,s[o])}function oC(r){switch(r){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return XA;case 35675:return YA;case 35676:return qA;case 5124:case 35670:return $A;case 35667:case 35671:return ZA;case 35668:case 35672:return JA;case 35669:case 35673:return KA;case 5125:return jA;case 36294:return QA;case 36295:return tC;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return iC;case 35679:case 36299:case 36307:return nC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return sC}}var v0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zA(e.type)}},y0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=oC(e.type)}},S0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},g0=/(\w+)(\])?(\[|\.)?/g;function ly(r,t){r.seq.push(t),r.map[t.id]=t}function aC(r,t,e){let i=r.name,n=i.length;for(g0.lastIndex=0;;){let s=g0.exec(i),o=g0.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){ly(e,c===void 0?new v0(a,r,t):new y0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new S0(a),ly(e,h)),e=h}}}var qa=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);aC(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function cy(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var lC=37297,cC=0;function uC(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var uy=new re;function hC(r){_e._getMatrix(uy,_e.workingColorSpace,r);let t=`mat3( ${uy.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(r)){case nc:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function hy(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+uC(r.getShaderSource(t),a)}else return s}function fC(r,t){let e=hC(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var dC={[bc]:"Linear",[wc]:"Reinhard",[Ec]:"Cineon",[Tc]:"ACESFilmic",[Cc]:"AgX",[bo]:"Neutral",[Ac]:"Custom"};function pC(r,t){let e=dC[t];return e===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Kf=new O;function mC(){_e.getLuminanceCoefficients(Kf);let r=Kf.x.toFixed(4),t=Kf.y.toFixed(4),e=Kf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kc).join(`
`)}function _C(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function xC(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function kc(r){return r!==""}function fy(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dy(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var vC=/^[ \t]*#include +<([\w\d./]+)>/gm;function M0(r){return r.replace(vC,SC)}var yC=new Map;function SC(r,t){let e=he[t];if(e===void 0){let i=yC.get(t);if(i!==void 0)e=he[i],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return M0(e)}var MC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function py(r){return r.replace(MC,bC)}function bC(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function my(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var wC={[Mc]:"SHADOWMAP_TYPE_PCF",[za]:"SHADOWMAP_TYPE_VSM"};function EC(r){return wC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var TC={[Ns]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE",[Dc]:"ENVMAP_TYPE_CUBE_UV"};function AC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":TC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var CC={[wo]:"ENVMAP_MODE_REFRACTION"};function DC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":CC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var RC={[Xm]:"ENVMAP_BLENDING_MULTIPLY",[Fv]:"ENVMAP_BLENDING_MIX",[Lv]:"ENVMAP_BLENDING_ADD"};function PC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":RC[r.combine]||"ENVMAP_BLENDING_NONE"}function IC(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function FC(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=EC(e),c=AC(e),u=DC(e),h=PC(e),f=IC(e),d=gC(e),p=_C(s),_=n.createProgram(),m,g,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(kc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(kc).join(`
`),g.length>0&&(g+=`
`)):(m=[my(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kc).join(`
`),g=[my(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ur?"#define TONE_MAPPING":"",e.toneMapping!==ur?he.tonemapping_pars_fragment:"",e.toneMapping!==ur?pC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,fC("linearToOutputTexel",e.outputColorSpace),mC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(kc).join(`
`)),o=M0(o),o=fy(o,e),o=dy(o,e),a=M0(a),a=fy(a,e),a=dy(a,e),o=py(o),a=py(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===t0?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===t0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=v+m+o,y=v+g+a,M=cy(n,n.VERTEX_SHADER,b),E=cy(n,n.FRAGMENT_SHADER,y);n.attachShader(_,M),n.attachShader(_,E),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(D){if(r.debug.checkShaderErrors){let R=n.getProgramInfoLog(_)||"",N=n.getShaderInfoLog(M)||"",I=n.getShaderInfoLog(E)||"",F=R.trim(),U=N.trim(),B=I.trim(),Y=!0,V=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,M,E);else{let P=hy(n,M,"vertex"),J=hy(n,E,"fragment");ne("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+P+`
`+J)}else F!==""?ee("WebGLProgram: Program Info Log:",F):(U===""||B==="")&&(V=!1);V&&(D.diagnostics={runnable:Y,programLog:F,vertexShader:{log:U,prefix:m},fragmentShader:{log:B,prefix:g}})}n.deleteShader(M),n.deleteShader(E),x=new qa(n,_),S=xC(n,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=n.getProgramParameter(_,lC)),w},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cC++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}var LC=0,b0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new w0(t),e.set(t,i)),i}},w0=class{constructor(t){this.id=LC++,this.code=t,this.usedTimes=0}};function NC(r){return r===Us||r===Nc||r===Oc}function OC(r,t,e,i,n,s){let o=new Pa,a=new b0,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,w,D,R,N){let I=D.fog,F=R.geometry,U=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||U,B),V=Y&&Y.mapping===Dc?Y.image.height:null,P=d[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&ee("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ot=J!==void 0?J.length:0,_t=0;F.morphAttributes.position!==void 0&&(_t=1),F.morphAttributes.normal!==void 0&&(_t=2),F.morphAttributes.color!==void 0&&(_t=3);let Ft,Q,lt,W;if(P){let Zt=Dr[P];Ft=Zt.vertexShader,Q=Zt.fragmentShader}else{Ft=x.vertexShader,Q=x.fragmentShader;let Zt=a.getVertexShaderStage(x),ct=a.getFragmentShaderStage(x);a.update(x,Zt,ct),lt=Zt.id,W=ct.id}let K=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),yt=R.isInstancedMesh===!0,ut=R.isBatchedMesh===!0,Ot=!!x.map,Ct=!!x.matcap,Tt=!!Y,jt=!!x.aoMap,se=!!x.lightMap,G=!!x.bumpMap&&x.wireframe===!1,ie=!!x.normalMap,xe=!!x.displacementMap,De=!!x.emissiveMap,Ut=!!x.metalnessMap,Dt=!!x.roughnessMap,k=x.anisotropy>0,Ne=x.clearcoat>0,te=x.dispersion>0,L=x.retroreflectivity>0,T=x.iridescence>0,X=x.sheen>0,$=x.transmission>0,tt=k&&!!x.anisotropyMap,mt=Ne&&!!x.clearcoatMap,ht=Ne&&!!x.clearcoatNormalMap,et=Ne&&!!x.clearcoatRoughnessMap,nt=T&&!!x.iridescenceMap,Mt=T&&!!x.iridescenceThicknessMap,zt=X&&!!x.sheenColorMap,bt=X&&!!x.sheenRoughnessMap,St=!!x.specularMap,pt=!!x.specularColorMap,qt=!!x.specularIntensityMap,Qt=$&&!!x.transmissionMap,z=$&&!!x.thicknessMap,xt=!!x.gradientMap,it=!!x.alphaMap,wt=x.alphaTest>0,At=!!x.alphaHash,rt=!!x.extensions,ft=ur;x.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ft=r.toneMapping);let st={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:Q,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ut,batchingColor:ut&&R._colorsTexture!==null,instancing:yt,instancingColor:yt&&R.instanceColor!==null,instancingMorph:yt&&R.morphTexture!==null,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ot,matcap:Ct,envMap:Tt,envMapMode:Tt&&Y.mapping,envMapCubeUVHeight:V,aoMap:jt,lightMap:se,bumpMap:G,normalMap:ie,displacementMap:xe,emissiveMap:De,normalMapObjectSpace:ie&&x.normalMapType===Uv,normalMapTangentSpace:ie&&x.normalMapType===qf,packedNormalMap:ie&&x.normalMapType===qf&&NC(x.normalMap.format),metalnessMap:Ut,roughnessMap:Dt,anisotropy:k,anisotropyMap:tt,clearcoat:Ne,clearcoatMap:mt,clearcoatNormalMap:ht,clearcoatRoughnessMap:et,dispersion:te,retroreflection:L,iridescence:T,iridescenceMap:nt,iridescenceThicknessMap:Mt,sheen:X,sheenColorMap:zt,sheenRoughnessMap:bt,specularMap:St,specularColorMap:pt,specularIntensityMap:qt,transmission:$,transmissionMap:Qt,thicknessMap:z,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Ha&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:wt,alphaHash:At,combine:x.combine,mapUv:Ot&&p(x.map.channel),aoMapUv:jt&&p(x.aoMap.channel),lightMapUv:se&&p(x.lightMap.channel),bumpMapUv:G&&p(x.bumpMap.channel),normalMapUv:ie&&p(x.normalMap.channel),displacementMapUv:xe&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:Ut&&p(x.metalnessMap.channel),roughnessMapUv:Dt&&p(x.roughnessMap.channel),anisotropyMapUv:tt&&p(x.anisotropyMap.channel),clearcoatMapUv:mt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(x.sheenRoughnessMap.channel),specularMapUv:St&&p(x.specularMap.channel),specularColorMapUv:pt&&p(x.specularColorMap.channel),specularIntensityMapUv:qt&&p(x.specularIntensityMap.channel),transmissionMapUv:Qt&&p(x.transmissionMap.channel),thicknessMapUv:z&&p(x.thicknessMap.channel),alphaMapUv:it&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ie||k),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(Ot||it),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&ie===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:dt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ot,morphTextureStride:_t,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:ft,decodeVideoTexture:Ot&&x.map.isVideoTexture===!0&&_e.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&_e.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pi,flipSided:x.side===ki,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return st.vertexUv1s=l.has(1),st.vertexUv2s=l.has(2),st.vertexUv3s=l.has(3),l.clear(),st}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let w in x.defines)S.push(w),S.push(x.defines[w]);return x.isRawShaderMaterial===!1&&(g(S,x),v(S,x),S.push(r.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function g(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function v(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let S=d[x.type],w;if(S){let D=Dr[S];w=jr.clone(D.uniforms)}else w=x.uniforms;return w}function y(x,S){let w=u.get(S);return w!==void 0?++w.usedTimes:(w=new FC(r,S,x,n),c.push(w),u.set(S,w)),w}function M(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:A}}function UC(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function BC(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function gy(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function _y(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let v=r[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=g),t++,v}function l(f,d,p,_,m,g,v){v.reversedDepth===!0&&(m=-m);let b=a(f,d,p,_,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):e.push(b)}function c(f,d,p,_,m,g){let v=a(f,d,p,_,m,g);p.transmission>0?i.unshift(v):p.transparent===!0?n.unshift(v):e.unshift(v)}function u(f,d){e.length>1&&e.sort(f||BC),i.length>1&&i.sort(d||gy),n.length>1&&n.sort(d||gy)}function h(){for(let f=t,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:h,sort:u}}function kC(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new _y,r.set(i,[o])):n>=s.length?(o=new _y,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function zC(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new vt};break;case"SpotLight":e={position:new O,direction:new O,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":e={color:new vt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function HC(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var VC=0;function GC(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function WC(r){let t=new zC,e=HC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);let n=new O,s=new ue,o=new ue;function a(c){let u=0,h=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,v=0,b=0,y=0,M=0,E=0,A=0,x=0,S=0,w=0;c.sort(GC);for(let R=0,N=c.length;R<N;R++){let I=c[R],F=I.color,U=I.intensity,B=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Us?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*U,h+=F.g*U,f+=F.b*U;else if(I.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(I.sh.coefficients[V],U);w++}else if(I.isSunLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,J=e.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[p]=J,i.sunShadowMap[p]=Y;let ot=P.getViewportCount();for(let _t=0;_t<ot;_t++)i.sunShadowMatrix[_+_t]=P.getMatrix(_t),i.sunShadowCascade[_+_t]=P._cascadeData[_t];_+=ot,p++}i.sun[d]=V,d++}else if(I.isDirectionalLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,J=e.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=I.shadow.matrix,M++}i.directional[m]=V,m++}else if(I.isSpotLight){let V=t.get(I);V.position.setFromMatrixPosition(I.matrixWorld),V.color.copy(F).multiplyScalar(U),V.distance=B,V.coneCos=Math.cos(I.angle),V.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),V.decay=I.decay,i.spot[v]=V;let P=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,P.updateMatrices(I),I.castShadow&&S++),i.spotLightMatrix[v]=P.matrix,I.castShadow){let J=e.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=Y,A++}v++}else if(I.isRectAreaLight){let V=t.get(I);V.color.copy(F).multiplyScalar(U),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=V,b++}else if(I.isPointLight){let V=t.get(I);if(V.color.copy(I.color).multiplyScalar(I.intensity),V.distance=I.distance,V.decay=I.decay,I.castShadow){let P=I.shadow,J=e.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,J.shadowCameraNear=P.camera.near,J.shadowCameraFar=P.camera.far,i.pointShadow[g]=J,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,E++}i.point[g]=V,g++}else if(I.isHemisphereLight){let V=t.get(I);V.skyColor.copy(I.color).multiplyScalar(U),V.groundColor.copy(I.groundColor).multiplyScalar(U),i.hemi[y]=V,y++}}b>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let D=i.hash;(D.sunLength!==d||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==b||D.hemiLength!==y||D.numSunShadows!==p||D.numDirectionalShadows!==M||D.numPointShadows!==E||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==w)&&(i.sun.length=d,i.directional.length=m,i.spot.length=v,i.rectArea.length=b,i.point.length=g,i.hemi.length=y,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-S,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=w,D.sunLength=d,D.directionalLength=m,D.pointLength=g,D.spotLength=v,D.rectAreaLength=b,D.hemiLength=y,D.numSunShadows=p,D.numDirectionalShadows=M,D.numPointShadows=E,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=w,i.version=VC++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let v=0,b=c.length;v<b;v++){let y=c[v];if(y.isSunLight){let M=i.sun[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),h++}else if(y.isDirectionalLight){let M=i.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),f++}else if(y.isSpotLight){let M=i.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(g),p++}else if(y.isRectAreaLight){let M=i.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){let M=i.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function xy(r){let t=new WC(r),e=[],i=[],n=[];function s(f){h.camera=f,e.length=0,i.length=0,n.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){n.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function XC(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new xy(r),t.set(n,[a])):s>=o.length?(a=new xy(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var YC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$C=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],ZC=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],vy=new ue,Bc=new O,_0=new O;function JC(r,t,e){let i=new Fa,n=new It,s=new It,o=new Ge,a=new Wh,l=new Xh,c={},u=e.maxTextureSize,h={[Ls]:ki,[ki]:Ls,[Pi]:Pi},f=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:YC,fragmentShader:qC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ce;p.setAttribute("position",new we(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Jt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mc;let g=this.type;this.render=function(E,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===pv&&(ee("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Mc);let S=r.getRenderTarget(),w=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),R=r.state;R.setBlending(jn),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let N=g!==this.type;N&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){let U=E[I],B=U.shadow;if(B===void 0){ee("WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let Y=B.getFrameExtents();n.multiply(Y),s.copy(B.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/Y.x),n.x=s.x*Y.x,B.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/Y.y),n.y=s.y*Y.y,B.mapSize.y=s.y));let V=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=V,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===za){if(U.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new oi(n.x,n.y,{format:Us,type:Mi,minFilter:yi,magFilter:yi,generateMipmaps:!1}),B.map.texture.name=U.name+".shadowMap",B.map.depthTexture=new Ts(n.x,n.y,Mn),B.map.depthTexture.name=U.name+".shadowMapDepth",B.map.depthTexture.format=br,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ui,B.map.depthTexture.magFilter=ui}else U.isPointLight?(B.map=new jf(n.x),B.map.depthTexture=new Vh(n.x,hr)):(B.map=new oi(n.x,n.y),B.map.depthTexture=new Ts(n.x,n.y,hr)),B.map.depthTexture.name=U.name+".shadowMap",B.map.depthTexture.format=br,this.type===Mc?(B.map.depthTexture.compareFunction=V?Zf:$f,B.map.depthTexture.minFilter=yi,B.map.depthTexture.magFilter=yi):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ui,B.map.depthTexture.magFilter=ui);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);let P=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();U.isPointLight!==!0&&B.updateMatrices(U,x);for(let J=0;J<P;J++){let ot=B.getCamera(J);if(U.isPointLight){let _t=B.camera,Ft=B.matrix,Q=U.distance||_t.far;Q!==_t.far&&(_t.far=Q,_t.updateProjectionMatrix()),Bc.setFromMatrixPosition(U.matrixWorld),_t.position.copy(Bc),_0.copy(_t.position),_0.add($C[J]),_t.up.copy(ZC[J]),_t.lookAt(_0),_t.updateMatrixWorld(),Ft.makeTranslation(-Bc.x,-Bc.y,-Bc.z),vy.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),B._frustum.setFromProjectionMatrix(vy,_t.coordinateSystem,_t.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,J),r.clear();else{J===0&&(r.setRenderTarget(B.map),r.clear());let _t=B.getViewport(J);o.set(s.x*_t.x,s.y*_t.y,s.x*_t.z,s.y*_t.w),R.viewport(o)}i=B.getFrustum(J),y(A,x,ot,U,this.type)}B.isPointLightShadow!==!0&&this.type===za&&v(B,x),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(S,w,D)};function v(E,A){let x=t.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new oi(n.x,n.y,{format:Us,type:Mi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,x,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,x,d,_,null)}function b(E,A,x,S){let w=null,D=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)w=D;else if(w=x.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let R=w.uuid,N=A.uuid,I=c[R];I===void 0&&(I={},c[R]=I);let F=I[N];F===void 0&&(F=w.clone(),I[N]=F,A.addEventListener("dispose",M)),w=F}if(w.visible=A.visible,w.wireframe=A.wireframe,S===za?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:h[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,x.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let R=r.properties.get(w);R.light=x}return w}function y(E,A,x,S,w){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===za)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let N=t.update(E),I=E.material;if(Array.isArray(I)){let F=N.groups;for(let U=0,B=F.length;U<B;U++){let Y=F[U],V=I[Y.materialIndex];if(V&&V.visible){let P=b(E,V,S,w);E.onBeforeShadow(r,E,A,x,N,P,Y),r.renderBufferDirect(x,null,N,P,E,Y),E.onAfterShadow(r,E,A,x,N,P,Y)}}}else if(I.visible){let F=b(E,I,S,w);E.onBeforeShadow(r,E,A,x,N,F,null),r.renderBufferDirect(x,null,N,F,E,null),E.onAfterShadow(r,E,A,x,N,F,null)}}let R=E.children;for(let N=0,I=R.length;N<I;N++)y(R[N],A,x,S,w)}function M(E){E.target.removeEventListener("dispose",M);for(let x in c){let S=c[x],w=E.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function KC(r,t){function e(){let z=!1,xt=new Ge,it=null,wt=new Ge(0,0,0,0);return{setMask:function(At){it!==At&&!z&&(r.colorMask(At,At,At,At),it=At)},setLocked:function(At){z=At},setClear:function(At,rt,ft,st,Zt){Zt===!0&&(At*=st,rt*=st,ft*=st),xt.set(At,rt,ft,st),wt.equals(xt)===!1&&(r.clearColor(At,rt,ft,st),wt.copy(xt))},reset:function(){z=!1,it=null,wt.set(-1,0,0,0)}}}function i(){let z=!1,xt=!1,it=null,wt=null,At=null;return{setReversed:function(rt){if(xt!==rt){let ft=t.get("EXT_clip_control");rt?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),xt=rt;let st=At;At=null,this.setClear(st)}},getReversed:function(){return xt},setTest:function(rt){rt?K(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(rt){it!==rt&&!z&&(r.depthMask(rt),it=rt)},setFunc:function(rt){if(xt&&(rt=Zv[rt]),wt!==rt){switch(rt){case Ah:r.depthFunc(r.NEVER);break;case Ch:r.depthFunc(r.ALWAYS);break;case Dh:r.depthFunc(r.LESS);break;case Ea:r.depthFunc(r.LEQUAL);break;case Rh:r.depthFunc(r.EQUAL);break;case Ph:r.depthFunc(r.GEQUAL);break;case Ih:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=rt}},setLocked:function(rt){z=rt},setClear:function(rt){At!==rt&&(At=rt,xt&&(rt=1-rt),r.clearDepth(rt))},reset:function(){z=!1,it=null,wt=null,At=null,xt=!1}}}function n(){let z=!1,xt=null,it=null,wt=null,At=null,rt=null,ft=null,st=null,Zt=null;return{setTest:function(ct){z||(ct?K(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(ct){xt!==ct&&!z&&(r.stencilMask(ct),xt=ct)},setFunc:function(ct,Kt,Ht){(it!==ct||wt!==Kt||At!==Ht)&&(r.stencilFunc(ct,Kt,Ht),it=ct,wt=Kt,At=Ht)},setOp:function(ct,Kt,Ht){(rt!==ct||ft!==Kt||st!==Ht)&&(r.stencilOp(ct,Kt,Ht),rt=ct,ft=Kt,st=Ht)},setLocked:function(ct){z=ct},setClear:function(ct){Zt!==ct&&(r.clearStencil(ct),Zt=ct)},reset:function(){z=!1,xt=null,it=null,wt=null,At=null,rt=null,ft=null,st=null,Zt=null}}}let s=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,M=null,E=null,A=null,x=new vt(0,0,0),S=0,w=!1,D=null,R=null,N=null,I=null,F=null,U=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=Y>=2);let P=null,J={},ot=r.getParameter(r.SCISSOR_BOX),_t=r.getParameter(r.VIEWPORT),Ft=new Ge().fromArray(ot),Q=new Ge().fromArray(_t);function lt(z,xt,it,wt){let At=new Uint8Array(4),rt=r.createTexture();r.bindTexture(z,rt),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<it;ft++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(xt+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return rt}let W={};W[r.TEXTURE_2D]=lt(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=lt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=lt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=lt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Ea),G(!1),ie(zm),K(r.CULL_FACE),jt(jn);function K(z){u[z]!==!0&&(r.enable(z),u[z]=!0)}function dt(z){u[z]!==!1&&(r.disable(z),u[z]=!1)}function yt(z,xt){return f[z]!==xt?(r.bindFramebuffer(z,xt),f[z]=xt,z===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=xt),z===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function ut(z,xt){let it=p,wt=!1;if(z){it=d.get(xt),it===void 0&&(it=[],d.set(xt,it));let At=z.textures;if(it.length!==At.length||it[0]!==r.COLOR_ATTACHMENT0){for(let rt=0,ft=At.length;rt<ft;rt++)it[rt]=r.COLOR_ATTACHMENT0+rt;it.length=At.length,wt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,wt=!0);wt&&r.drawBuffers(it)}function Ot(z){return _!==z?(r.useProgram(z),_=z,!0):!1}let Ct={[Mo]:r.FUNC_ADD,[gv]:r.FUNC_SUBTRACT,[_v]:r.FUNC_REVERSE_SUBTRACT};Ct[xv]=r.MIN,Ct[vv]=r.MAX;let Tt={[yv]:r.ZERO,[Sv]:r.ONE,[Mv]:r.SRC_COLOR,[Gm]:r.SRC_ALPHA,[Cv]:r.SRC_ALPHA_SATURATE,[Tv]:r.DST_COLOR,[wv]:r.DST_ALPHA,[bv]:r.ONE_MINUS_SRC_COLOR,[Wm]:r.ONE_MINUS_SRC_ALPHA,[Av]:r.ONE_MINUS_DST_COLOR,[Ev]:r.ONE_MINUS_DST_ALPHA,[Dv]:r.CONSTANT_COLOR,[Rv]:r.ONE_MINUS_CONSTANT_COLOR,[Pv]:r.CONSTANT_ALPHA,[Iv]:r.ONE_MINUS_CONSTANT_ALPHA};function jt(z,xt,it,wt,At,rt,ft,st,Zt,ct){if(z===jn){m===!0&&(dt(r.BLEND),m=!1);return}if(m===!1&&(K(r.BLEND),m=!0),z!==mv){if(z!==g||ct!==w){if((v!==Mo||M!==Mo)&&(r.blendEquation(r.FUNC_ADD),v=Mo,M=Mo),ct)switch(z){case Ha:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ze:r.blendFunc(r.ONE,r.ONE);break;case Hm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Vm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ne("WebGLState: Invalid blending: ",z);break}else switch(z){case Ha:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ze:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hm:ne("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vm:ne("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ne("WebGLState: Invalid blending: ",z);break}b=null,y=null,E=null,A=null,x.set(0,0,0),S=0,g=z,w=ct}return}At=At||xt,rt=rt||it,ft=ft||wt,(xt!==v||At!==M)&&(r.blendEquationSeparate(Ct[xt],Ct[At]),v=xt,M=At),(it!==b||wt!==y||rt!==E||ft!==A)&&(r.blendFuncSeparate(Tt[it],Tt[wt],Tt[rt],Tt[ft]),b=it,y=wt,E=rt,A=ft),(st.equals(x)===!1||Zt!==S)&&(r.blendColor(st.r,st.g,st.b,Zt),x.copy(st),S=Zt),g=z,w=!1}function se(z,xt){z.side===Pi?dt(r.CULL_FACE):K(r.CULL_FACE);let it=z.side===ki;xt&&(it=!it),G(it),z.blending===Ha&&z.transparent===!1?jt(jn):jt(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);let wt=z.stencilWrite;a.setTest(wt),wt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),De(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function G(z){D!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),D=z)}function ie(z){z!==fv?(K(r.CULL_FACE),z!==R&&(z===zm?r.cullFace(r.BACK):z===dv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),R=z}function xe(z){z!==N&&(B&&r.lineWidth(z),N=z)}function De(z,xt,it){z?(K(r.POLYGON_OFFSET_FILL),(I!==xt||F!==it)&&(I=xt,F=it,o.getReversed()&&(xt=-xt),r.polygonOffset(xt,it))):dt(r.POLYGON_OFFSET_FILL)}function Ut(z){z?K(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function Dt(z){z===void 0&&(z=r.TEXTURE0+U-1),P!==z&&(r.activeTexture(z),P=z)}function k(z,xt,it){it===void 0&&(P===null?it=r.TEXTURE0+U-1:it=P);let wt=J[it];wt===void 0&&(wt={type:void 0,texture:void 0},J[it]=wt),(wt.type!==z||wt.texture!==xt)&&(P!==it&&(r.activeTexture(it),P=it),r.bindTexture(z,xt||W[z]),wt.type=z,wt.texture=xt)}function Ne(){let z=J[P];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function te(){try{r.compressedTexImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function T(){try{r.texSubImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function X(){try{r.texSubImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function tt(){try{r.compressedTexSubImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function mt(){try{r.texStorage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function ht(){try{r.texStorage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function et(){try{r.texImage2D(...arguments)}catch(z){ne("WebGLState:",z)}}function nt(){try{r.texImage3D(...arguments)}catch(z){ne("WebGLState:",z)}}function Mt(z){return h[z]!==void 0?h[z]:r.getParameter(z)}function zt(z,xt){h[z]!==xt&&(r.pixelStorei(z,xt),h[z]=xt)}function bt(z){Ft.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),Ft.copy(z))}function St(z){Q.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Q.copy(z))}function pt(z,xt){let it=c.get(xt);it===void 0&&(it=new WeakMap,c.set(xt,it));let wt=it.get(z);wt===void 0&&(wt=r.getUniformBlockIndex(xt,z.name),it.set(z,wt))}function qt(z,xt){let wt=c.get(xt).get(z);l.get(xt)!==wt&&(r.uniformBlockBinding(xt,wt,z.__bindingPointIndex),l.set(xt,wt))}function Qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},P=null,J={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,v=null,b=null,y=null,M=null,E=null,A=null,x=new vt(0,0,0),S=0,w=!1,D=null,R=null,N=null,I=null,F=null,Ft.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:dt,bindFramebuffer:yt,drawBuffers:ut,useProgram:Ot,setBlending:jt,setMaterial:se,setFlipSided:G,setCullFace:ie,setLineWidth:xe,setPolygonOffset:De,setScissorTest:Ut,activeTexture:Dt,bindTexture:k,unbindTexture:Ne,compressedTexImage2D:te,compressedTexImage3D:L,texImage2D:et,texImage3D:nt,pixelStorei:zt,getParameter:Mt,updateUBOMapping:pt,uniformBlockBinding:qt,texStorage2D:mt,texStorage3D:ht,texSubImage2D:T,texSubImage3D:X,compressedTexSubImage2D:$,compressedTexSubImage3D:tt,scissor:bt,viewport:St,reset:Qt}}function jC(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):rc("canvas")}function m(L,T,X){let $=1,tt=te(L);if((tt.width>X||tt.height>X)&&($=X/Math.max(tt.width,tt.height)),$<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let mt=Math.floor($*tt.width),ht=Math.floor($*tt.height);f===void 0&&(f=_(mt,ht));let et=T?_(mt,ht):f;return et.width=mt,et.height=ht,et.getContext("2d").drawImage(L,0,0,mt,ht),ee("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+mt+"x"+ht+")."),et}else return"data"in L&&ee("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),L;return L}function g(L){return L.generateMipmaps}function v(L){r.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,T,X,$,tt,mt=!1){if(L!==null){if(r[L]!==void 0)return r[L];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ht;$&&(ht=t.get("EXT_texture_norm16"),ht||ee("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=T;if(T===r.RED&&(X===r.FLOAT&&(et=r.R32F),X===r.HALF_FLOAT&&(et=r.R16F),X===r.UNSIGNED_BYTE&&(et=r.R8),X===r.UNSIGNED_SHORT&&ht&&(et=ht.R16_EXT),X===r.SHORT&&ht&&(et=ht.R16_SNORM_EXT)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.R8UI),X===r.UNSIGNED_SHORT&&(et=r.R16UI),X===r.UNSIGNED_INT&&(et=r.R32UI),X===r.BYTE&&(et=r.R8I),X===r.SHORT&&(et=r.R16I),X===r.INT&&(et=r.R32I)),T===r.RG&&(X===r.FLOAT&&(et=r.RG32F),X===r.HALF_FLOAT&&(et=r.RG16F),X===r.UNSIGNED_BYTE&&(et=r.RG8),X===r.UNSIGNED_SHORT&&ht&&(et=ht.RG16_EXT),X===r.SHORT&&ht&&(et=ht.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RG8UI),X===r.UNSIGNED_SHORT&&(et=r.RG16UI),X===r.UNSIGNED_INT&&(et=r.RG32UI),X===r.BYTE&&(et=r.RG8I),X===r.SHORT&&(et=r.RG16I),X===r.INT&&(et=r.RG32I)),T===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RGB8UI),X===r.UNSIGNED_SHORT&&(et=r.RGB16UI),X===r.UNSIGNED_INT&&(et=r.RGB32UI),X===r.BYTE&&(et=r.RGB8I),X===r.SHORT&&(et=r.RGB16I),X===r.INT&&(et=r.RGB32I)),T===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),X===r.UNSIGNED_INT&&(et=r.RGBA32UI),X===r.BYTE&&(et=r.RGBA8I),X===r.SHORT&&(et=r.RGBA16I),X===r.INT&&(et=r.RGBA32I)),T===r.RGB&&(X===r.UNSIGNED_SHORT&&ht&&(et=ht.RGB16_EXT),X===r.SHORT&&ht&&(et=ht.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(et=r.R11F_G11F_B10F)),T===r.RGBA){let nt=mt?nc:_e.getTransfer(tt);X===r.FLOAT&&(et=r.RGBA32F),X===r.HALF_FLOAT&&(et=r.RGBA16F),X===r.UNSIGNED_BYTE&&(et=nt===be?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&ht&&(et=ht.RGBA16_EXT),X===r.SHORT&&ht&&(et=ht.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function M(L,T){let X;return L?T===null||T===hr||T===Ga?X=r.DEPTH24_STENCIL8:T===Mn?X=r.DEPTH32F_STENCIL8:T===Va&&(X=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===hr||T===Ga?X=r.DEPTH_COMPONENT24:T===Mn?X=r.DEPTH_COMPONENT32F:T===Va&&(X=r.DEPTH_COMPONENT16),X}function E(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==ui&&L.minFilter!==yi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function A(L){let T=L.target;T.removeEventListener("dispose",A),S(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function x(L){let T=L.target;T.removeEventListener("dispose",x),D(T)}function S(L){let T=i.get(L);if(T.__webglInit===void 0)return;let X=L.source,$=d.get(X);if($){let tt=$[T.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&w(L),Object.keys($).length===0&&d.delete(X)}i.remove(L)}function w(L){let T=i.get(L);r.deleteTexture(T.__webglTexture);let X=L.source,$=d.get(X);delete $[T.__cacheKey],o.memory.textures--}function D(L){let T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let tt=0;tt<T.__webglFramebuffer[$].length;tt++)r.deleteFramebuffer(T.__webglFramebuffer[$][tt]);else r.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)r.deleteFramebuffer(T.__webglFramebuffer[$]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let X=L.textures;for(let $=0,tt=X.length;$<tt;$++){let mt=i.get(X[$]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(X[$])}i.remove(L)}let R=0;function N(){R=0}function I(){return R}function F(L){R=L}function U(){let L=R;return L>=n.maxTextures&&ee("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+n.maxTextures),R+=1,L}function B(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Y(L,T){let X=i.get(L);if(L.isVideoTexture&&k(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let $=L.image;if($===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(X,L,T);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function V(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){dt(X,L,T);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function P(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){dt(X,L,T);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function J(L,T){let X=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){yt(X,L,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}let ot={[Ta]:r.REPEAT,[Mr]:r.CLAMP_TO_EDGE,[Lh]:r.MIRRORED_REPEAT},_t={[ui]:r.NEAREST,[Nv]:r.NEAREST_MIPMAP_NEAREST,[Rc]:r.NEAREST_MIPMAP_LINEAR,[yi]:r.LINEAR,[cf]:r.LINEAR_MIPMAP_NEAREST,[Ar]:r.LINEAR_MIPMAP_LINEAR},Ft={[kv]:r.NEVER,[Wv]:r.ALWAYS,[zv]:r.LESS,[$f]:r.LEQUAL,[Hv]:r.EQUAL,[Zf]:r.GEQUAL,[Vv]:r.GREATER,[Gv]:r.NOTEQUAL};function Q(L,T){if(T.type===Mn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===yi||T.magFilter===cf||T.magFilter===Rc||T.magFilter===Ar||T.minFilter===yi||T.minFilter===cf||T.minFilter===Rc||T.minFilter===Ar)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ot[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ot[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ot[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,_t[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,_t[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,Ft[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ui||T.minFilter!==Rc&&T.minFilter!==Ar||T.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function lt(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",A));let $=T.source,tt=d.get($);tt===void 0&&(tt={},d.set($,tt));let mt=B(T);if(mt!==L.__cacheKey){tt[mt]===void 0&&(tt[mt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),tt[mt].usedTimes++;let ht=tt[L.__cacheKey];ht!==void 0&&(tt[L.__cacheKey].usedTimes--,ht.usedTimes===0&&w(T)),L.__cacheKey=mt,L.__webglTexture=tt[mt].texture}return X}function W(L,T,X){return Math.floor(Math.floor(L/X)/T)}function K(L,T,X,$){let mt=L.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,X,$,T.data);else{mt.sort((zt,bt)=>zt.start-bt.start);let ht=0;for(let zt=1;zt<mt.length;zt++){let bt=mt[ht],St=mt[zt],pt=bt.start+bt.count,qt=W(St.start,T.width,4),Qt=W(bt.start,T.width,4);St.start<=pt+1&&qt===Qt&&W(St.start+St.count-1,T.width,4)===qt?bt.count=Math.max(bt.count,St.start+St.count-bt.start):(++ht,mt[ht]=St)}mt.length=ht+1;let et=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),Mt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let zt=0,bt=mt.length;zt<bt;zt++){let St=mt[zt],pt=Math.floor(St.start/4),qt=Math.ceil(St.count/4),Qt=pt%T.width,z=Math.floor(pt/T.width),xt=qt,it=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,Qt),e.pixelStorei(r.UNPACK_SKIP_ROWS,z),e.texSubImage2D(r.TEXTURE_2D,0,Qt,z,xt,it,X,$,T.data)}L.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,et),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,Mt)}}function dt(L,T,X){let $=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=r.TEXTURE_3D);let tt=lt(L,T),mt=T.source;e.bindTexture($,L.__webglTexture,r.TEXTURE0+X);let ht=i.get(mt);if(mt.version!==ht.__version||tt===!0){if(e.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let it=_e.getPrimaries(_e.workingColorSpace),wt=T.colorSpace===Jr?null:_e.getPrimaries(T.colorSpace),At=T.colorSpace===Jr||it===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let nt=m(T.image,!1,n.maxTextureSize);nt=Ne(T,nt);let Mt=s.convert(T.format,T.colorSpace),zt=s.convert(T.type),bt=y(T.internalFormat,Mt,zt,T.normalized,T.colorSpace,T.isVideoTexture);Q($,T);let St,pt=T.mipmaps,qt=T.isVideoTexture!==!0,Qt=ht.__version===void 0||tt===!0,z=mt.dataReady,xt=E(T,nt);if(T.isDepthTexture)bt=M(T.format===Os,T.type),Qt&&(qt?e.texStorage2D(r.TEXTURE_2D,1,bt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,bt,nt.width,nt.height,0,Mt,zt,null));else if(T.isDataTexture)if(pt.length>0){qt&&Qt&&e.texStorage2D(r.TEXTURE_2D,xt,bt,pt[0].width,pt[0].height);for(let it=0,wt=pt.length;it<wt;it++)St=pt[it],qt?z&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,St.width,St.height,Mt,zt,St.data):e.texImage2D(r.TEXTURE_2D,it,bt,St.width,St.height,0,Mt,zt,St.data);T.generateMipmaps=!1}else qt?(Qt&&e.texStorage2D(r.TEXTURE_2D,xt,bt,nt.width,nt.height),z&&K(T,nt,Mt,zt)):e.texImage2D(r.TEXTURE_2D,0,bt,nt.width,nt.height,0,Mt,zt,nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qt&&Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,bt,pt[0].width,pt[0].height,nt.depth);for(let it=0,wt=pt.length;it<wt;it++)if(St=pt[it],T.format!==bn)if(Mt!==null)if(qt){if(z)if(T.layerUpdates.size>0){let At=o0(St.width,St.height,T.format,T.type);for(let rt of T.layerUpdates){let ft=St.data.subarray(rt*At/St.data.BYTES_PER_ELEMENT,(rt+1)*At/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,rt,St.width,St.height,1,Mt,ft)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,St.width,St.height,nt.depth,Mt,St.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,bt,St.width,St.height,nt.depth,0,St.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?z&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,St.width,St.height,nt.depth,Mt,zt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,bt,St.width,St.height,nt.depth,0,Mt,zt,St.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{qt&&Qt&&e.texStorage2D(r.TEXTURE_2D,xt,bt,pt[0].width,pt[0].height);for(let it=0,wt=pt.length;it<wt;it++)St=pt[it],T.format!==bn?Mt!==null?qt?z&&e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,it,bt,St.width,St.height,0,St.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?z&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,St.width,St.height,Mt,zt,St.data):e.texImage2D(r.TEXTURE_2D,it,bt,St.width,St.height,0,Mt,zt,St.data)}else if(T.isDataArrayTexture)if(qt){if(Qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,bt,nt.width,nt.height,nt.depth),z)if(T.layerUpdates.size>0){let it=o0(nt.width,nt.height,T.format,T.type);for(let wt of T.layerUpdates){let At=nt.data.subarray(wt*it/nt.data.BYTES_PER_ELEMENT,(wt+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,wt,nt.width,nt.height,1,Mt,zt,At)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,Mt,zt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,bt,nt.width,nt.height,nt.depth,0,Mt,zt,nt.data);else if(T.isData3DTexture)qt?(Qt&&e.texStorage3D(r.TEXTURE_3D,xt,bt,nt.width,nt.height,nt.depth),z&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,Mt,zt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,bt,nt.width,nt.height,nt.depth,0,Mt,zt,nt.data);else if(T.isFramebufferTexture){if(Qt)if(qt)e.texStorage2D(r.TEXTURE_2D,xt,bt,nt.width,nt.height);else{let it=nt.width,wt=nt.height;for(let At=0;At<xt;At++)e.texImage2D(r.TEXTURE_2D,At,bt,it,wt,0,Mt,zt,null),it>>=1,wt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let it=r.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),nt.parentNode!==it){it.appendChild(nt),h.add(T),it.onpaint=wt=>{let At=wt.changedElements;for(let rt of h)At.includes(rt.image)&&(rt.needsUpdate=!0)},it.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let At=r.RGBA,rt=r.RGBA,ft=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,At,rt,ft,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(pt.length>0){if(qt&&Qt){let it=te(pt[0]);e.texStorage2D(r.TEXTURE_2D,xt,bt,it.width,it.height)}for(let it=0,wt=pt.length;it<wt;it++)St=pt[it],qt?z&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,Mt,zt,St):e.texImage2D(r.TEXTURE_2D,it,bt,Mt,zt,St);T.generateMipmaps=!1}else if(qt){if(Qt){let it=te(nt);e.texStorage2D(r.TEXTURE_2D,xt,bt,it.width,it.height)}z&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,zt,nt)}else e.texImage2D(r.TEXTURE_2D,0,bt,Mt,zt,nt);g(T)&&v($),ht.__version=mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function yt(L,T,X){if(T.image.length!==6)return;let $=lt(L,T),tt=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);let mt=i.get(tt);if(tt.version!==mt.__version||$===!0){e.activeTexture(r.TEXTURE0+X);let ht=_e.getPrimaries(_e.workingColorSpace),et=T.colorSpace===Jr?null:_e.getPrimaries(T.colorSpace),nt=T.colorSpace===Jr||ht===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Mt=T.isCompressedTexture||T.image[0].isCompressedTexture,zt=T.image[0]&&T.image[0].isDataTexture,bt=[];for(let rt=0;rt<6;rt++)!Mt&&!zt?bt[rt]=m(T.image[rt],!0,n.maxCubemapSize):bt[rt]=zt?T.image[rt].image:T.image[rt],bt[rt]=Ne(T,bt[rt]);let St=bt[0],pt=s.convert(T.format,T.colorSpace),qt=s.convert(T.type),Qt=y(T.internalFormat,pt,qt,T.normalized,T.colorSpace),z=T.isVideoTexture!==!0,xt=mt.__version===void 0||$===!0,it=tt.dataReady,wt=E(T,St);Q(r.TEXTURE_CUBE_MAP,T);let At;if(Mt){z&&xt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,Qt,St.width,St.height);for(let rt=0;rt<6;rt++){At=bt[rt].mipmaps;for(let ft=0;ft<At.length;ft++){let st=At[ft];T.format!==bn?pt!==null?z?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,0,0,st.width,st.height,pt,st.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,Qt,st.width,st.height,0,st.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,0,0,st.width,st.height,pt,qt,st.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft,Qt,st.width,st.height,0,pt,qt,st.data)}}}else{if(At=T.mipmaps,z&&xt){At.length>0&&wt++;let rt=te(bt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,Qt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(zt){z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,bt[rt].width,bt[rt].height,pt,qt,bt[rt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,bt[rt].width,bt[rt].height,0,pt,qt,bt[rt].data);for(let ft=0;ft<At.length;ft++){let Zt=At[ft].image[rt].image;z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,0,0,Zt.width,Zt.height,pt,qt,Zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,Qt,Zt.width,Zt.height,0,pt,qt,Zt.data)}}else{z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt,qt,bt[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Qt,pt,qt,bt[rt]);for(let ft=0;ft<At.length;ft++){let st=At[ft];z?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,0,0,pt,qt,st.image[rt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ft+1,Qt,pt,qt,st.image[rt])}}}g(T)&&v(r.TEXTURE_CUBE_MAP),mt.__version=tt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ut(L,T,X,$,tt,mt){let ht=s.convert(X.format,X.colorSpace),et=s.convert(X.type),nt=y(X.internalFormat,ht,et,X.normalized,X.colorSpace),Mt=i.get(T),zt=i.get(X);if(zt.__renderTarget=T,!Mt.__hasExternalTextures){let bt=Math.max(1,T.width>>mt),St=Math.max(1,T.height>>mt);tt===r.TEXTURE_3D||tt===r.TEXTURE_2D_ARRAY?e.texImage3D(tt,mt,nt,bt,St,T.depth,0,ht,et,null):e.texImage2D(tt,mt,nt,bt,St,0,ht,et,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Dt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,tt,zt.__webglTexture,0,Ut(T)):(tt===r.TEXTURE_2D||tt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,tt,zt.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(L,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){let $=T.depthTexture,tt=$&&$.isDepthTexture?$.type:null,mt=M(T.stencilBuffer,tt),ht=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Dt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut(T),mt,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,L)}else{let $=T.textures;for(let tt=0;tt<$.length;tt++){let mt=$[tt],ht=s.convert(mt.format,mt.colorSpace),et=s.convert(mt.type),nt=y(mt.internalFormat,ht,et,mt.normalized,mt.colorSpace);Dt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ut(T),nt,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ut(T),nt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,nt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ct(L,T,X){let $=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(T.depthTexture);if(tt.__renderTarget=T,(!tt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$){if(tt.__webglInit===void 0&&(tt.__webglInit=!0,T.depthTexture.addEventListener("dispose",A)),tt.__webglTexture===void 0){tt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,tt.__webglTexture),Q(r.TEXTURE_CUBE_MAP,T.depthTexture);let Mt=s.convert(T.depthTexture.format),zt=s.convert(T.depthTexture.type),bt;T.depthTexture.format===br?bt=r.DEPTH_COMPONENT24:T.depthTexture.format===Os&&(bt=r.DEPTH24_STENCIL8);for(let St=0;St<6;St++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,bt,T.width,T.height,0,Mt,zt,null)}}else Y(T.depthTexture,0);let mt=tt.__webglTexture,ht=Ut(T),et=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,nt=T.depthTexture.format===Os?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===br)Dt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,et,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,nt,et,mt,0);else if(T.depthTexture.format===Os)Dt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,et,mt,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,nt,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(L){let T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let $=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){let tt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",tt)};$.addEventListener("dispose",tt),T.__depthDisposeCallback=tt}T.__boundDepthTexture=$}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let $=0;$<6;$++)Ct(T.__webglFramebuffer[$],L,$);else{let $=L.texture.mipmaps;$&&$.length>0?Ct(T.__webglFramebuffer[0],L,0):Ct(T.__webglFramebuffer,L,0)}else if(X){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=r.createRenderbuffer(),Ot(T.__webglDepthbuffer[$],L,!1);else{let tt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,mt)}}else{let $=L.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Ot(T.__webglDepthbuffer,L,!1);else{let tt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,tt,r.RENDERBUFFER,mt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function jt(L,T,X){let $=i.get(L);T!==void 0&&ut($.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Tt(L)}function se(L){let T=L.texture,X=i.get(L),$=i.get(T);L.addEventListener("dispose",x);let tt=L.textures,mt=L.isWebGLCubeRenderTarget===!0,ht=tt.length>1;if(ht||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=T.version,o.memory.textures++),mt){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let nt=0;nt<T.mipmaps.length;nt++)X.__webglFramebuffer[et][nt]=r.createFramebuffer()}else X.__webglFramebuffer[et]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<T.mipmaps.length;et++)X.__webglFramebuffer[et]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ht)for(let et=0,nt=tt.length;et<nt;et++){let Mt=i.get(tt[et]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&Dt(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<tt.length;et++){let nt=tt[et];X.__webglColorRenderbuffer[et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let Mt=s.convert(nt.format,nt.colorSpace),zt=s.convert(nt.type),bt=y(nt.internalFormat,Mt,zt,nt.normalized,nt.colorSpace,L.isXRRenderTarget===!0),St=Ut(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,St,bt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,X.__webglColorRenderbuffer[et])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ot(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Q(r.TEXTURE_CUBE_MAP,T);for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0)for(let nt=0;nt<T.mipmaps.length;nt++)ut(X.__webglFramebuffer[et][nt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else ut(X.__webglFramebuffer[et],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(T)&&v(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let et=0,nt=tt.length;et<nt;et++){let Mt=tt[et],zt=i.get(Mt),bt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(bt,zt.__webglTexture),Q(bt,Mt),ut(X.__webglFramebuffer,L,Mt,r.COLOR_ATTACHMENT0+et,bt,0),g(Mt)&&v(bt)}e.unbindTexture()}else{let et=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(et,$.__webglTexture),Q(et,T),T.mipmaps&&T.mipmaps.length>0)for(let nt=0;nt<T.mipmaps.length;nt++)ut(X.__webglFramebuffer[nt],L,T,r.COLOR_ATTACHMENT0,et,nt);else ut(X.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,et,0);g(T)&&v(et),e.unbindTexture()}L.depthBuffer&&Tt(L)}function G(L){let T=L.textures;for(let X=0,$=T.length;X<$;X++){let tt=T[X];if(g(tt)){let mt=b(L),ht=i.get(tt).__webglTexture;e.bindTexture(mt,ht),v(mt),e.unbindTexture()}}}let ie=[],xe=[];function De(L){if(L.samples>0){if(Dt(L)===!1){let T=L.textures,X=L.width,$=L.height,tt=r.COLOR_BUFFER_BIT,mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=i.get(L),et=T.length>1;if(et)for(let Mt=0;Mt<T.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let nt=L.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let Mt=0;Mt<T.length;Mt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(tt|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(tt|=r.STENCIL_BUFFER_BIT)),et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Mt]);let zt=i.get(T[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,zt,0)}r.blitFramebuffer(0,0,X,$,0,0,X,$,tt,r.NEAREST),l===!0&&(ie.length=0,xe.length=0,ie.push(r.COLOR_ATTACHMENT0+Mt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(ie.push(mt),xe.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,xe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),et)for(let Mt=0;Mt<T.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[Mt]);let zt=i.get(T[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,zt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Ut(L){return Math.min(n.maxSamples,L.samples)}function Dt(L){let T=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function k(L){let T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function Ne(L,T){let X=L.colorSpace,$=L.format,tt=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==ic&&X!==Jr&&(_e.getTransfer(X)===be?($!==bn||tt!==Sn)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ne("WebGLTextures: Unsupported texture color space:",X)),T}function te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=V,this.setTexture3D=P,this.setTextureCube=J,this.rebindTextures=jt,this.setupRenderTarget=se,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function QC(r,t){function e(i,n=Jr){let s,o=_e.getTransfer(n);if(i===Sn)return r.UNSIGNED_BYTE;if(i===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(i===ff)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Zm)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Jm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===qm)return r.BYTE;if(i===$m)return r.SHORT;if(i===Va)return r.UNSIGNED_SHORT;if(i===uf)return r.INT;if(i===hr)return r.UNSIGNED_INT;if(i===Mn)return r.FLOAT;if(i===Mi)return r.HALF_FLOAT;if(i===Km)return r.ALPHA;if(i===jm)return r.RGB;if(i===bn)return r.RGBA;if(i===br)return r.DEPTH_COMPONENT;if(i===Os)return r.DEPTH_STENCIL;if(i===df)return r.RED;if(i===pf)return r.RED_INTEGER;if(i===Us)return r.RG;if(i===mf)return r.RG_INTEGER;if(i===gf)return r.RGBA_INTEGER;if(i===Pc||i===Ic||i===Fc||i===Lc)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Pc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Pc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_f||i===xf||i===vf||i===yf)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===_f)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Sf||i===Mf||i===bf||i===wf||i===Ef||i===Nc||i===Tf)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Sf||i===Mf)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===wf)return s.COMPRESSED_R11_EAC;if(i===Ef)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return s.COMPRESSED_RG11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Af||i===Cf||i===Df||i===Rf||i===Pf||i===If||i===Ff||i===Lf||i===Nf||i===Of||i===Uf||i===Bf||i===kf||i===zf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Af)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Df)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ff)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Of)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hf||i===Vf||i===Gf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Hf)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===Xf||i===Oc||i===Yf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ga?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var t2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,E0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new fc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ae({vertexShader:t2,fragmentShader:e2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},T0=class extends wr{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new E0,g={},v=e.getContextAttributes(),b=null,y=null,M=[],E=[],A=new It,x=null,S=null,w=new Ki;w.viewport=new Ge;let D=new Ki;D.viewport=new Ge;let R=[w,D],N=new sf,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=M[W];return K===void 0&&(K=new Ia,M[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=M[W];return K===void 0&&(K=new Ia,M[W]=K),K.getGripSpace()},this.getHand=function(W){let K=M[W];return K===void 0&&(K=new Ia,M[W]=K),K.getHandSpace()};function U(W){let K=E.indexOf(W.inputSource);if(K===-1)return;let dt=M[K];dt!==void 0&&(dt.update(W.inputSource,W.frame,c||o),dt.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",Y);for(let W=0;W<M.length;W++){let K=E[W];K!==null&&(E[W]=null,M[W].disconnect(K))}I=null,F=null,m.reset();for(let W in g)delete g[W];if(t.setRenderTarget(b),d=null,f=null,h=null,n=null,y=null,lt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),S!==null){let W=S.camera;W.fov=S.fov,W.zoom=S.zoom,W.updateProjectionMatrix(),S=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(n,e)),h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",B),n.addEventListener("inputsourceschange",Y),v.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,yt=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=v.stencil?Os:br,yt=v.stencil?Ga:hr);let Ot={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ot),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new oi(f.textureWidth,f.textureHeight,{format:bn,type:Sn,depthTexture:new Ts(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,dt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new oi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),lt.setContext(n),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y(W){for(let K=0;K<W.removed.length;K++){let dt=W.removed[K],yt=E.indexOf(dt);yt>=0&&(E[yt]=null,M[yt].disconnect(dt))}for(let K=0;K<W.added.length;K++){let dt=W.added[K],yt=E.indexOf(dt);if(yt===-1){for(let Ot=0;Ot<M.length;Ot++)if(Ot>=E.length){E.push(dt),yt=Ot;break}else if(E[Ot]===null){E[Ot]=dt,yt=Ot;break}if(yt===-1)break}let ut=M[yt];ut&&ut.connect(dt)}}let V=new O,P=new O;function J(W,K,dt){V.setFromMatrixPosition(K.matrixWorld),P.setFromMatrixPosition(dt.matrixWorld);let yt=V.distanceTo(P),ut=K.projectionMatrix.elements,Ot=dt.projectionMatrix.elements,Ct=ut[14]/(ut[10]-1),Tt=ut[14]/(ut[10]+1),jt=(ut[9]+1)/ut[5],se=(ut[9]-1)/ut[5],G=(ut[8]-1)/ut[0],ie=(Ot[8]+1)/Ot[0],xe=Ct*G,De=Ct*ie,Ut=yt/(-G+ie),Dt=Ut*-G;if(K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Dt),W.translateZ(Ut),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),ut[10]===-1)W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let k=Ct+Ut,Ne=Tt+Ut,te=xe-Dt,L=De+(yt-Dt),T=jt*Tt/Ne*k,X=se*Tt/Ne*k;W.projectionMatrix.makePerspective(te,L,T,X,k,Ne),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ot(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let K=W.near,dt=W.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),N.near=D.near=w.near=K,N.far=D.far=w.far=dt,(I!==N.near||F!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,F=N.far),N.layers.mask=W.layers.mask|6,w.layers.mask=N.layers.mask&-5,D.layers.mask=N.layers.mask&-3;let yt=W.parent,ut=N.cameras;ot(N,yt);for(let Ot=0;Ot<ut.length;Ot++)ot(ut[Ot],yt);ut.length===2?J(N,w,D):N.projectionMatrix.copy(w.projectionMatrix),S===null&&W.isPerspectiveCamera&&(S={camera:W,fov:W.fov,zoom:W.zoom}),_t(W,N,yt)};function _t(W,K,dt){dt===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(dt.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Da*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(W){return g[W]};let Ft=null;function Q(W,K){if(u=K.getViewerPose(c||o),p=K,u!==null){let dt=u.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let yt=!1;dt.length!==N.cameras.length&&(N.cameras.length=0,yt=!0);for(let Tt=0;Tt<dt.length;Tt++){let jt=dt[Tt],se=null;if(d!==null)se=d.getViewport(jt);else{let ie=h.getViewSubImage(f,jt);se=ie.viewport,Tt===0&&(t.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(y))}let G=R[Tt];G===void 0&&(G=new Ki,G.layers.enable(Tt),G.viewport=new Ge,R[Tt]=G),G.matrix.fromArray(jt.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(jt.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(se.x,se.y,se.width,se.height),Tt===0&&(N.matrix.copy(G.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),yt===!0&&N.cameras.push(G)}let ut=n.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let Tt=h.getDepthInformation(dt[0]);Tt&&Tt.isValid&&Tt.texture&&m.init(Tt,n.renderState)}if(ut&&ut.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let Tt=0;Tt<dt.length;Tt++){let jt=dt[Tt].camera;if(jt){let se=g[jt];se||(se=new fc,g[jt]=se);let G=h.getCameraImage(jt);se.sourceTexture=G}}}}for(let dt=0;dt<M.length;dt++){let yt=E[dt],ut=M[dt];yt!==null&&ut!==void 0&&ut.update(yt,K,c||o)}Ft&&Ft(W,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),p=null}let lt=new yy;lt.setAnimationLoop(Q),this.setAnimationLoop=function(W){Ft=W},this.dispose=function(){}}},i2=new ue,Ty=new re;Ty.set(-1,0,0,0,1,0,0,0,1);function n2(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,n0(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,v,b,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,y)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,v,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===ki&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===ki&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let v=t.get(g),b=v.envMap,y=v.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(i2.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ty),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,v,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*v,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,v){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ki&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let v=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function r2(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let E=M.program;i.uniformBlockBinding(y,E)}function c(y,M){let E=n[y.id];E===void 0&&(m(y),E=u(y),n[y.id]=E,y.addEventListener("dispose",v));let A=M.program;i.updateUBOMapping(y,A);let x=t.render.frame;s[y.id]!==x&&(f(y),s[y.id]=x)}function u(y){let M=h();y.__bindingPointIndex=M;let E=r.createBuffer(),A=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,A,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,E),E}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return ne("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let M=n[y.id],E=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let x=0,S=E.length;x<S;x++){let w=E[x];if(Array.isArray(w))for(let D=0,R=w.length;D<R;D++)d(w[D],x,D,A);else d(w,x,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,M,E,A){if(_(y,M,E,A)===!0){let x=y.__offset,S=y.value;if(Array.isArray(S)){let w=0;for(let D=0;D<S.length;D++){let R=S[D],N=g(R);p(R,y.__data,w),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(w+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function p(y,M,E){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function _(y,M,E,A){let x=y.value,S=M+"_"+E;if(A[S]===void 0)return typeof x=="number"||typeof x=="boolean"?A[S]=x:ArrayBuffer.isView(x)?A[S]=x.slice():A[S]=x.clone(),!0;{let w=A[S];if(typeof x=="number"||typeof x=="boolean"){if(w!==x)return A[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(w.equals(x)===!1)return w.copy(x),!0}}return!1}function m(y){let M=y.uniforms,E=0,A=16;for(let S=0,w=M.length;S<w;S++){let D=Array.isArray(M[S])?M[S]:[M[S]];for(let R=0,N=D.length;R<N;R++){let I=D[R],F=Array.isArray(I.value)?I.value:[I.value];for(let U=0,B=F.length;U<B;U++){let Y=F[U],V=g(Y),P=E%A,J=P%V.boundary,ot=P+J;E+=J,ot!==0&&A-ot<V.storage&&(E+=A-ot),I.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=V.storage}}}let x=E%A;return x>0&&(E+=A-x),y.__size=E,y.__cache={},this}function g(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):ee("WebGLRenderer: Unsupported uniform value type.",y),M}function v(y){let M=y.target;M.removeEventListener("dispose",v);let E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),r.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function b(){for(let y in n)r.deleteBuffer(n[y]);o=[],n={},s={}}return{bind:l,update:c,dispose:b}}var s2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cr=null;function o2(){return Cr===null&&(Cr=new _o(s2,16,16,Us,Mi),Cr.name="DFG_LUT",Cr.minFilter=yi,Cr.magFilter=yi,Cr.wrapS=Mr,Cr.wrapT=Mr,Cr.generateMipmaps=!1,Cr.needsUpdate=!0),Cr}var Qf=class{constructor(t={}){let{canvas:e=Yv(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Sn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=d,m=new Set([gf,mf,pf]),g=new Set([Sn,hr,Va,Ga,hf,ff]),v=new Uint32Array(4),b=new Int32Array(4),y=new O,M=null,E=null,A=[],x=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ur,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,D=!1,R=null,N=null,I=null,F=null;this._outputColorSpace=Bi;let U=0,B=0,Y=null,V=-1,P=null,J=new Ge,ot=new Ge,_t=null,Ft=new vt(0),Q=0,lt=e.width,W=e.height,K=1,dt=null,yt=null,ut=new Ge(0,0,lt,W),Ot=new Ge(0,0,lt,W),Ct=!1,Tt=new Fa,jt=!1,se=!1,G=new ue,ie=new O,xe=new Ge,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function Dt(){return Y===null?K:1}let k=i;function Ne(C,H){return e.getContext(C,H)}let te,L,T,X,$,tt,mt,ht,et,nt,Mt,zt,bt,St,pt,qt,Qt,z,xt,it,wt,At,rt;try{let C={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",ct,!1),e.addEventListener("webglcontextcreationerror",Kt,!1),k===null){let H="webgl2";if(k=Ne(H,C),k===null)throw Ne(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ft()}catch(C){throw e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),ne("WebGLRenderer: "+C.message),C}function ft(){te=new dA(k),te.init(),wt=new QC(k,te),L=new nA(k,te,t,wt),T=new KC(k,te),L.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),N=k.createFramebuffer(),I=k.createFramebuffer(),F=k.createFramebuffer(),X=new gA(k),$=new UC,tt=new jC(k,te,T,$,L,wt,X),mt=new fA(w),ht=new xw(k),At=new eA(k,ht),et=new pA(k,ht,X,At),nt=new xA(k,et,ht,At,X),z=new _A(k,L,tt),pt=new rA($),Mt=new OC(w,mt,te,L,At,pt),zt=new n2(w,$),bt=new kC,St=new XC(te),Qt=new tA(w,mt,T,nt,p,l),qt=new JC(w,nt,L),rt=new r2(k,X,L,T),xt=new iA(k,te,X),it=new mA(k,te,X),X.programs=Mt.programs,w.capabilities=L,w.extensions=te,w.properties=$,w.renderLists=bt,w.shadowMap=qt,w.state=T,w.info=X}_!==Sn&&(S=new yA(_,e.width,e.height,a,n,s));let st=new T0(w,k);this.xr=st,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let C=te.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=te.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(C){C!==void 0&&(K=C,this.setSize(lt,W,!1))},this.getSize=function(C){return C.set(lt,W)},this.setSize=function(C,H,j=!0){if(st.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=C,W=H,e.width=Math.floor(C*K),e.height=Math.floor(H*K),j===!0&&(e.style.width=C+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,C,H)},this.getDrawingBufferSize=function(C){return C.set(lt*K,W*K).floor()},this.setDrawingBufferSize=function(C,H,j){lt=C,W=H,K=j,e.width=Math.floor(C*j),e.height=Math.floor(H*j),this.setViewport(0,0,C,H)},this.setEffects=function(C){if(_===Sn){ne("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let H=0;H<C.length;H++)if(C[H].isOutputPass===!0){ee("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(J)},this.getViewport=function(C){return C.copy(ut)},this.setViewport=function(C,H,j,q){C.isVector4?ut.set(C.x,C.y,C.z,C.w):ut.set(C,H,j,q),T.viewport(J.copy(ut).multiplyScalar(K).round())},this.getScissor=function(C){return C.copy(Ot)},this.setScissor=function(C,H,j,q){C.isVector4?Ot.set(C.x,C.y,C.z,C.w):Ot.set(C,H,j,q),T.scissor(ot.copy(Ot).multiplyScalar(K).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(C){T.setScissorTest(Ct=C)},this.setOpaqueSort=function(C){dt=C},this.setTransparentSort=function(C){yt=C},this.getClearColor=function(C){return C.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor(...arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha(...arguments)},this.clear=function(C=!0,H=!0,j=!0){let q=0;if(C){let Z=!1;if(Y!==null){let Et=Y.texture.format;Z=m.has(Et)}if(Z){let Et=Y.texture.type,Bt=g.has(Et),Pt=Qt.getClearColor(),Vt=Qt.getClearAlpha(),$t=Pt.r,ce=Pt.g,ve=Pt.b;Bt?(v[0]=$t,v[1]=ce,v[2]=ve,v[3]=Vt,k.clearBufferuiv(k.COLOR,0,v)):(b[0]=$t,b[1]=ce,b[2]=ve,b[3]=Vt,k.clearBufferiv(k.COLOR,0,b))}else q|=k.COLOR_BUFFER_BIT}H&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),R=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",ct,!1),e.removeEventListener("webglcontextcreationerror",Kt,!1),Qt.dispose(),bt.dispose(),St.dispose(),$.dispose(),mt.dispose(),nt.dispose(),At.dispose(),rt.dispose(),Mt.dispose(),st.dispose(),st.removeEventListener("sessionstart",Xe),st.removeEventListener("sessionend",Oe),ye.stop()};function Zt(C){C.preventDefault(),e0("WebGLRenderer: Context Lost."),D=!0}function ct(){e0("WebGLRenderer: Context Restored."),D=!1;let C=X.autoReset,H=qt.enabled,j=qt.autoUpdate,q=qt.needsUpdate,Z=qt.type;ft(),X.autoReset=C,qt.enabled=H,qt.autoUpdate=j,qt.needsUpdate=q,qt.type=Z}function Kt(C){ne("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ht(C){let H=C.target;H.removeEventListener("dispose",Ht),oe(H)}function oe(C){hi(C),$.remove(C)}function hi(C){let H=$.get(C).programs;H!==void 0&&(H.forEach(function(j){Mt.releaseProgram(j)}),C.isShaderMaterial&&Mt.releaseShaderCache(C))}this.renderBufferDirect=function(C,H,j,q,Z,Et){H===null&&(H=De);let Bt=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pt=Ti(C,H,j,q,Z);T.setMaterial(q,Bt);let Vt=j.index,$t=1;if(q.wireframe===!0){if(Vt=et.getWireframeAttribute(j),Vt===void 0)return;$t=2}let ce=j.drawRange,ve=j.attributes.position,Gt=ce.start*$t,Ee=(ce.start+ce.count)*$t;Et!==null&&(Gt=Math.max(Gt,Et.start*$t),Ee=Math.min(Ee,(Et.start+Et.count)*$t)),Vt!==null?(Gt=Math.max(Gt,0),Ee=Math.min(Ee,Vt.count)):ve!=null&&(Gt=Math.max(Gt,0),Ee=Math.min(Ee,ve.count));let di=Ee-Gt;if(di<0||di===1/0)return;At.setup(Z,q,Pt,j,Vt);let Ye,Ue=xt;if(Vt!==null&&(Ye=ht.get(Vt),Ue=it,Ue.setIndex(Ye)),Z.isMesh)q.wireframe===!0?(T.setLineWidth(q.wireframeLinewidth*Dt()),Ue.setMode(k.LINES)):Ue.setMode(k.TRIANGLES);else if(Z.isLine){let Hi=q.linewidth;Hi===void 0&&(Hi=1),T.setLineWidth(Hi*Dt()),Z.isLineSegments?Ue.setMode(k.LINES):Z.isLineLoop?Ue.setMode(k.LINE_LOOP):Ue.setMode(k.LINE_STRIP)}else Z.isPoints?Ue.setMode(k.POINTS):Z.isSprite&&Ue.setMode(k.TRIANGLES);if(Z.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Ue.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Hi=Z._multiDrawStarts,Nt=Z._multiDrawCounts,en=Z._multiDrawCount,Me=Vt?ht.get(Vt).bytesPerElement:1,Hn=$.get(q).currentProgram.getUniforms();for(let dr=0;dr<en;dr++)Hn.setValue(k,"_gl_DrawID",dr),Ue.render(Hi[dr]/Me,Nt[dr])}else if(Z.isInstancedMesh)Ue.renderInstances(Gt,di,Z.count);else if(j.isInstancedBufferGeometry){let Hi=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Nt=Math.min(j.instanceCount,Hi);Ue.renderInstances(Gt,di,Nt)}else Ue.render(Gt,di)};function me(C,H,j,q){R!==null&&C.isNodeMaterial&&R.setObject(q,C),jt===!0&&pt.setState(C,j,!1),C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=ki,C.needsUpdate=!0,ei(C,H,q),C.side=Ls,C.needsUpdate=!0,ei(C,H,q),C.side=Pi):ei(C,H,q)}this.compile=function(C,H,j=null){j===null&&(j=C),R!==null&&R.renderStart(C,H,j),E=St.get(j),E.init(H),x.push(E),j.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),C!==j&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(H.layers)&&(E.pushLight(Z),Z.castShadow&&E.pushShadow(Z))}),E.setupLights(),R!==null&&R.updateLights(E.state.lightsArray),se=this.localClippingEnabled,jt=pt.init(this.clippingPlanes,se),jt===!0&&pt.setGlobalState(this.clippingPlanes,H),R!==null&&qt.render(E.state.shadowsArray,j,H);let q=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let Et=Z.material;if(Et)if(Array.isArray(Et))for(let Bt=0;Bt<Et.length;Bt++){let Pt=Et[Bt];me(Pt,j,H,Z),q.add(Pt)}else me(Et,j,H,Z),q.add(Et)}),E=x.pop(),R!==null&&R.renderEnd(),q},this.compileAsync=function(C,H,j=null){let q=this.compile(C,H,j);return new Promise(Z=>{function Et(){if(q.forEach(function(Bt){let Vt=$.get(Bt).currentProgram;(Vt===void 0||Vt.isReady())&&q.delete(Bt)}),q.size===0){Z(C);return}setTimeout(Et,10)}te.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let We=null;function Ei(C){We&&We(C)}function Xe(){ye.stop()}function Oe(){ye.start()}let ye=new yy;ye.setAnimationLoop(Ei),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(C){We=C,st.setAnimationLoop(C),C===null?ye.stop():ye.start()},st.addEventListener("sessionstart",Xe),st.addEventListener("sessionend",Oe),this.render=function(C,H){if(H!==void 0&&H.isCamera!==!0){ne("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;R!==null&&R.renderStart(C,H);let j=st.enabled===!0&&st.isPresenting===!0,q=S!==null&&(Y===null||j)&&S.begin(w,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(H),H=st.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,H,Y),E=St.get(C,x.length),E.init(H),E.state.textureUnits=tt.getTextureUnits(),x.push(E),G.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Tt.setFromProjectionMatrix(G,lr,H.reversedDepth),se=this.localClippingEnabled,jt=pt.init(this.clippingPlanes,se),M=bt.get(C,A.length),M.init(),A.push(M),st.enabled===!0&&st.isPresenting===!0){let Bt=w.xr.getDepthSensingMesh();Bt!==null&&Qi(Bt,H,-1/0,w.sortObjects)}Qi(C,H,0,w.sortObjects),M.finish(),R!==null&&R.updateLights(E.state.lightsArray),w.sortObjects===!0&&M.sort(dt,yt),Ut=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Ut&&Qt.addToRenderList(M,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),jt===!0&&pt.beginShadows();let Z=E.state.shadowsArray;if(qt.render(Z,C,H),jt===!0&&pt.endShadows(),(q&&S.hasRenderPass())===!1){let Bt=M.opaque,Pt=M.transmissive;if(E.setupLights(),H.isArrayCamera){let Vt=H.cameras;if(Pt.length>0)for(let $t=0,ce=Vt.length;$t<ce;$t++){let ve=Vt[$t];zi(Bt,Pt,C,ve)}Ut&&Qt.render(C);for(let $t=0,ce=Vt.length;$t<ce;$t++){let ve=Vt[$t];ze(M,C,ve,ve.viewport)}}else Pt.length>0&&zi(Bt,Pt,C,H),Ut&&Qt.render(C),ze(M,C,H)}Y!==null&&B===0&&(tt.updateMultisampleRenderTarget(Y),tt.updateRenderTargetMipmap(Y)),q&&S.end(w),C.isScene===!0&&C.onAfterRender(w,C,H),At.resetDefaultState(),V=-1,P=null,x.pop(),x.length>0?(E=x[x.length-1],tt.setTextureUnits(E.state.textureUnits),jt===!0&&pt.setGlobalState(w.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,R!==null&&R.renderEnd()};function Qi(C,H,j,q){if(C.visible===!1)return;if(C.layers.test(H.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(H);else if(C.isLightProbeGrid)E.pushLightProbeGrid(C);else if(C.isLight)E.pushLight(C),C.castShadow&&E.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Tt)){q&&xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(G);let Bt=nt.update(C),Pt=C.material;Pt.visible&&M.push(C,Bt,Pt,j,xe.z,null,H)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Tt))){let Bt=nt.update(C),Pt=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),xe.copy(C.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),xe.copy(Bt.boundingSphere.center)),xe.applyMatrix4(C.matrixWorld).applyMatrix4(G)),Array.isArray(Pt)){let Vt=Bt.groups;for(let $t=0,ce=Vt.length;$t<ce;$t++){let ve=Vt[$t],Gt=Pt[ve.materialIndex];Gt&&Gt.visible&&M.push(C,Bt,Gt,j,xe.z,ve,H)}}else Pt.visible&&M.push(C,Bt,Pt,j,xe.z,null,H)}}let Et=C.children;for(let Bt=0,Pt=Et.length;Bt<Pt;Bt++)Qi(Et[Bt],H,j,q)}function ze(C,H,j,q){let{opaque:Z,transmissive:Et,transparent:Bt}=C;E.setupLightsView(j),jt===!0&&pt.setGlobalState(w.clippingPlanes,j),q&&T.viewport(J.copy(q)),Z.length>0&&tn(Z,H,j),Et.length>0&&tn(Et,H,j),Bt.length>0&&tn(Bt,H,j),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function zi(C,H,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[q.id]===void 0){let Gt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[q.id]=new oi(1,1,{generateMipmaps:!0,type:Gt?Mi:Sn,minFilter:Ar,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Et=E.state.transmissionRenderTarget[q.id],Bt=q.viewport||J;Et.setSize(Bt.z*w.transmissionResolutionScale,Bt.w*w.transmissionResolutionScale);let Pt=w.getRenderTarget(),Vt=w.getActiveCubeFace(),$t=w.getActiveMipmapLevel();w.setRenderTarget(Et),w.getClearColor(Ft),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),Ut&&Qt.render(j);let ce=w.toneMapping;w.toneMapping=ur;let ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),E.setupLightsView(q),jt===!0&&pt.setGlobalState(w.clippingPlanes,q),tn(C,j,q),tt.updateMultisampleRenderTarget(Et),tt.updateRenderTargetMipmap(Et),te.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Ee=0,di=H.length;Ee<di;Ee++){let Ye=H[Ee],{object:Ue,geometry:Hi,material:Nt,group:en}=Ye;if(Nt.side===Pi&&Ue.layers.test(q.layers)){let Me=Nt.side;Nt.side=ki,Nt.needsUpdate=!0,fi(Ue,j,q,Hi,Nt,en),Nt.side=Me,Nt.needsUpdate=!0,Gt=!0}}Gt===!0&&(tt.updateMultisampleRenderTarget(Et),tt.updateRenderTargetMipmap(Et))}w.setRenderTarget(Pt,Vt,$t),w.setClearColor(Ft,Q),ve!==void 0&&(q.viewport=ve),w.toneMapping=ce}function tn(C,H,j){let q=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Et=C.length;Z<Et;Z++){let Bt=C[Z],{object:Pt,geometry:Vt,group:$t}=Bt,ce=Bt.material;ce.allowOverride===!0&&q!==null&&(ce=q),Pt.layers.test(j.layers)&&fi(Pt,H,j,Vt,ce,$t)}}function fi(C,H,j,q,Z,Et){R!==null&&Z.isNodeMaterial&&R.setObject(C,Z),C.onBeforeRender(w,H,j,q,Z,Et),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(w,H,j,q,C,Et),Z.transparent===!0&&Z.side===Pi&&Z.forceSinglePass===!1?(Z.side=ki,Z.needsUpdate=!0,w.renderBufferDirect(j,H,q,Z,C,Et),Z.side=Ls,Z.needsUpdate=!0,w.renderBufferDirect(j,H,q,Z,C,Et),Z.side=Pi):w.renderBufferDirect(j,H,q,Z,C,Et),C.onAfterRender(w,H,j,q,Z,Et)}function ei(C,H,j){H.isScene!==!0&&(H=De);let q=$.get(C),Z=E.state.lights,Et=E.state.shadowsArray,Bt=Z.state.version,Pt=Mt.getParameters(C,Z.state,Et,H,j,E.state.lightProbeGridArray),Vt=Mt.getProgramCacheKey(Pt),$t=q.programs;q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?H.environment:null,q.fog=H.fog;let ce=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;q.envMap=mt.get(C.envMap||q.environment,ce),q.envMapRotation=q.environment!==null&&C.envMap===null?H.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",Ht),$t=new Map,q.programs=$t);let ve=$t.get(Vt);if(ve!==void 0){if(q.currentProgram===ve&&q.lightsStateVersion===Bt)return fr(C,Pt),ve}else Pt.uniforms=Mt.getUniforms(C),R!==null&&C.isNodeMaterial&&R.build(C,j,Pt),C.onBeforeCompile(Pt,w),ve=Mt.acquireProgram(Pt,Vt),$t.set(Vt,ve),q.uniforms=Pt.uniforms;let Gt=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Gt.clippingPlanes=pt.uniform),fr(C,Pt),q.needsLights=zn(C),q.lightsStateVersion=Bt,q.needsLights&&(Gt.ambientLightColor.value=Z.state.ambient,Gt.lightProbe.value=Z.state.probe,Gt.sunLights.value=Z.state.sun,Gt.sunLightShadows.value=Z.state.sunShadow,Gt.directionalLights.value=Z.state.directional,Gt.directionalLightShadows.value=Z.state.directionalShadow,Gt.spotLights.value=Z.state.spot,Gt.spotLightShadows.value=Z.state.spotShadow,Gt.rectAreaLights.value=Z.state.rectArea,Gt.ltc_1.value=Z.state.rectAreaLTC1,Gt.ltc_2.value=Z.state.rectAreaLTC2,Gt.pointLights.value=Z.state.point,Gt.pointLightShadows.value=Z.state.pointShadow,Gt.hemisphereLights.value=Z.state.hemi,Gt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Gt.sunShadowCascade.value=Z.state.sunShadowCascade,Gt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Z.state.spotLightMatrix,Gt.spotLightMap.value=Z.state.spotLightMap,Gt.pointShadowMatrix.value=Z.state.pointShadowMatrix),q.lightProbeGrid=E.state.lightProbeGridArray.length>0,q.currentProgram=ve,q.uniformsList=null,ve}function _i(C){if(C.uniformsList===null){let H=C.currentProgram.getUniforms();C.uniformsList=qa.seqWithValue(H.seq,C.uniforms)}return C.uniformsList}function fr(C,H){let j=$.get(C);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function Co(C,H){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let j=0,q=C.length;j<q;j++){let Z=C[j];if(Z.texture!==null&&Z.boundingBox.containsPoint(y))return Z}return null}function Ti(C,H,j,q,Z){H.isScene!==!0&&(H=De),tt.resetTextureUnits();let Et=H.fog,Bt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?H.environment:null,Pt=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:_e.workingColorSpace,Vt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,$t=mt.get(q.envMap||Bt,Vt),ce=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ve=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Gt=!!j.morphAttributes.position,Ee=!!j.morphAttributes.normal,di=!!j.morphAttributes.color,Ye=ur;q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ye=w.toneMapping);let Ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Hi=Ue!==void 0?Ue.length:0,Nt=$.get(q),en=E.state.lights;if(jt===!0&&(se===!0||C!==P)){let He=C===P&&q.id===V;pt.setState(q,C,He)}let Me=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==en.state.version||Nt.outputColorSpace!==Pt||Z.isBatchedMesh&&Nt.batching===!1||!Z.isBatchedMesh&&Nt.batching===!0||Z.isBatchedMesh&&Nt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Nt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Nt.instancing===!1||!Z.isInstancedMesh&&Nt.instancing===!0||Z.isSkinnedMesh&&Nt.skinning===!1||!Z.isSkinnedMesh&&Nt.skinning===!0||Z.isInstancedMesh&&Nt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Nt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Nt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Nt.instancingMorph===!1&&Z.morphTexture!==null||Nt.envMap!==$t||q.fog===!0&&Nt.fog!==Et||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==pt.numPlanes||Nt.numIntersection!==pt.numIntersection)||Nt.vertexAlphas!==ce||Nt.vertexTangents!==ve||Nt.morphTargets!==Gt||Nt.morphNormals!==Ee||Nt.morphColors!==di||Nt.toneMapping!==Ye||Nt.morphTargetsCount!==Hi||!!Nt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Nt.__version=q.version);let Hn=Nt.currentProgram;Me===!0&&(Hn=ei(q,H,Z),R&&q.isNodeMaterial&&R.onUpdateProgram(q,Hn,Nt));let dr=!1,es=!1,Ro=!1,Pe=Hn.getUniforms(),li=Nt.uniforms;if(T.useProgram(Hn.program)&&(dr=!0,es=!0,Ro=!0),q.id!==V&&(V=q.id,es=!0),Nt.needsLights){let He=Co(E.state.lightProbeGridArray,Z);Nt.lightProbeGrid!==He&&(Nt.lightProbeGrid=He,es=!0)}if(dr||P!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Pe.setValue(k,"projectionMatrix",C.projectionMatrix),Pe.setValue(k,"viewMatrix",C.matrixWorldInverse);let ns=Pe.map.cameraPosition;ns!==void 0&&ns.setValue(k,ie.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&Pe.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Pe.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,es=!0,Ro=!0)}if(Nt.needsLights&&(en.state.sunShadowMap.length>0&&Pe.setValue(k,"sunShadowMap",en.state.sunShadowMap,tt),en.state.directionalShadowMap.length>0&&Pe.setValue(k,"directionalShadowMap",en.state.directionalShadowMap,tt),en.state.spotShadowMap.length>0&&Pe.setValue(k,"spotShadowMap",en.state.spotShadowMap,tt),en.state.pointShadowMap.length>0&&Pe.setValue(k,"pointShadowMap",en.state.pointShadowMap,tt)),Z.isSkinnedMesh){Pe.setOptional(k,Z,"bindMatrix"),Pe.setOptional(k,Z,"bindMatrixInverse");let He=Z.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Pe.setValue(k,"boneTexture",He.boneTexture,tt))}Z.isBatchedMesh&&(Pe.setOptional(k,Z,"batchingTexture"),Pe.setValue(k,"batchingTexture",Z._matricesTexture,tt),Pe.setOptional(k,Z,"batchingIdTexture"),Pe.setValue(k,"batchingIdTexture",Z._indirectTexture,tt),Pe.setOptional(k,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pe.setValue(k,"batchingColorTexture",Z._colorsTexture,tt));let is=j.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&z.update(Z,j,Hn),(es||Nt.receiveShadow!==Z.receiveShadow)&&(Nt.receiveShadow=Z.receiveShadow,Pe.setValue(k,"receiveShadow",Z.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&H.environment!==null&&(li.envMapIntensity.value=H.environmentIntensity),li.dfgLUT!==void 0&&(li.dfgLUT.value=o2()),es){if(Pe.setValue(k,"toneMappingExposure",w.toneMappingExposure),Nt.needsLights&&ai(li,Ro),Et&&q.fog===!0&&zt.refreshFogUniforms(li,Et),zt.refreshMaterialUniforms(li,q,K,W,E.state.transmissionRenderTarget[C.id]),Nt.needsLights&&Nt.lightProbeGrid){let He=Nt.lightProbeGrid;li.probesSH.value=He.texture,li.probesMin.value.copy(He.boundingBox.min),li.probesMax.value.copy(He.boundingBox.max),li.probesResolution.value.copy(He.resolution)}qa.upload(k,_i(Nt),li,tt)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(qa.upload(k,_i(Nt),li,tt),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Pe.setValue(k,"center",Z.center),Pe.setValue(k,"modelViewMatrix",Z.modelViewMatrix),Pe.setValue(k,"normalMatrix",Z.normalMatrix),Pe.setValue(k,"modelMatrix",Z.matrixWorld),q.uniformsGroups!==void 0){let He=q.uniformsGroups;for(let ns=0,Po=He.length;ns<Po;ns++){let L0=He[ns];rt.update(L0,Hn),rt.bind(L0,Hn)}}return Hn}function ai(C,H){C.ambientLightColor.needsUpdate=H,C.lightProbe.needsUpdate=H,C.sunLights.needsUpdate=H,C.sunLightShadows.needsUpdate=H,C.directionalLights.needsUpdate=H,C.directionalLightShadows.needsUpdate=H,C.pointLights.needsUpdate=H,C.pointLightShadows.needsUpdate=H,C.spotLights.needsUpdate=H,C.spotLightShadows.needsUpdate=H,C.rectAreaLights.needsUpdate=H,C.hemisphereLights.needsUpdate=H}function zn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,H,j){let q=$.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(C.texture).__webglTexture=H,$.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:j,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,H){let j=$.get(C);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(C,H=0,j=0){Y=C,U=H,B=j;let q=null,Z=!1,Et=!1;if(C){let Pt=$.get(C);if(Pt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(k.FRAMEBUFFER,Pt.__webglFramebuffer),J.copy(C.viewport),ot.copy(C.scissor),_t=C.scissorTest,T.viewport(J),T.scissor(ot),T.setScissorTest(_t),V=-1;return}else if(Pt.__webglFramebuffer===void 0)tt.setupRenderTarget(C);else if(Pt.__hasExternalTextures)tt.rebindTextures(C,$.get(C.texture).__webglTexture,$.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ce=C.depthTexture;if(Pt.__boundDepthTexture!==ce){if(ce!==null&&$.has(ce)&&(C.width!==ce.image.width||C.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(C)}}let Vt=C.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Et=!0);let $t=$.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[H])?q=$t[H][j]:q=$t[H],Z=!0):C.samples>0&&tt.useMultisampledRTT(C)===!1?q=$.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?q=$t[j]:q=$t,J.copy(C.viewport),ot.copy(C.scissor),_t=C.scissorTest}else J.copy(ut).multiplyScalar(K).floor(),ot.copy(Ot).multiplyScalar(K).floor(),_t=Ct;if(j!==0&&(q=N),T.bindFramebuffer(k.FRAMEBUFFER,q)&&T.drawBuffers(C,q),T.viewport(J),T.scissor(ot),T.setScissorTest(_t),Z){let Pt=$.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,Pt.__webglTexture,j)}else if(Et){let Pt=H;for(let Vt=0;Vt<C.textures.length;Vt++){let $t=$.get(C.textures[Vt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Vt,$t.__webglTexture,j,Pt)}}else if(C!==null&&j!==0){let Pt=$.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,j)}V=-1};function Do(C){let H=$.get(C);return(H.__readFormat!==C.format||H.__readType!==C.type)&&(H.__readFormat=C.format,H.__readType=C.type,H.__formatReadable=L.textureFormatReadable(C.format),H.__typeReadable=L.textureTypeReadable(C.type)),H}this.readRenderTargetPixels=function(C,H,j,q,Z,Et,Bt,Pt=0){if(!(C&&C.isWebGLRenderTarget)){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt){T.bindFramebuffer(k.FRAMEBUFFER,Vt);try{let $t=C.textures[Pt],ce=$t.format,ve=$t.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt);let Gt=Do($t);if(Gt.__formatReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Gt.__typeReadable===!1){ne("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=C.width-q&&j>=0&&j<=C.height-Z&&k.readPixels(H,j,q,Z,wt.convert(ce),wt.convert(ve),Et)}finally{let $t=Y!==null?$.get(Y).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,H,j,q,Z,Et,Bt,Pt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=$.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Bt!==void 0&&(Vt=Vt[Bt]),Vt)if(H>=0&&H<=C.width-q&&j>=0&&j<=C.height-Z){T.bindFramebuffer(k.FRAMEBUFFER,Vt);let $t=C.textures[Pt],ce=$t.format,ve=$t.type;C.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pt);let Gt=Do($t);if(Gt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Gt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ee=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ee),k.bufferData(k.PIXEL_PACK_BUFFER,Et.byteLength,k.STREAM_READ),k.readPixels(H,j,q,Z,wt.convert(ce),wt.convert(ve),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let di=Y!==null?$.get(Y).__webglFramebuffer:null;T.bindFramebuffer(k.FRAMEBUFFER,di);let Ye=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await $v(k,Ye,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ee),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Et),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Ee),k.deleteSync(Ye),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,H=null,j=0){let q=Math.pow(2,-j),Z=Math.floor(C.image.width*q),Et=Math.floor(C.image.height*q),Bt=H!==null?H.x:0,Pt=H!==null?H.y:0;tt.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,j,0,0,Bt,Pt,Z,Et),T.unbindTexture()},this.copyTextureToTexture=function(C,H,j=null,q=null,Z=0,Et=0){let Bt,Pt,Vt,$t,ce,ve,Gt,Ee,di,Ye=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(j!==null)Bt=j.max.x-j.min.x,Pt=j.max.y-j.min.y,Vt=j.isBox3?j.max.z-j.min.z:1,$t=j.min.x,ce=j.min.y,ve=j.isBox3?j.min.z:0;else{let li=Math.pow(2,-Z);Bt=Math.floor(Ye.width*li),Pt=Math.floor(Ye.height*li),C.isDataArrayTexture?Vt=Ye.depth:C.isData3DTexture?Vt=Math.floor(Ye.depth*li):Vt=1,$t=0,ce=0,ve=0}q!==null?(Gt=q.x,Ee=q.y,di=q.z):(Gt=0,Ee=0,di=0);let Ue=wt.convert(H.format),Hi=wt.convert(H.type),Nt;H.isData3DTexture?(tt.setTexture3D(H,0),Nt=k.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(tt.setTexture2DArray(H,0),Nt=k.TEXTURE_2D_ARRAY):(tt.setTexture2D(H,0),Nt=k.TEXTURE_2D),T.activeTexture(k.TEXTURE0),T.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,H.flipY),T.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),T.pixelStorei(k.UNPACK_ALIGNMENT,H.unpackAlignment);let en=T.getParameter(k.UNPACK_ROW_LENGTH),Me=T.getParameter(k.UNPACK_IMAGE_HEIGHT),Hn=T.getParameter(k.UNPACK_SKIP_PIXELS),dr=T.getParameter(k.UNPACK_SKIP_ROWS),es=T.getParameter(k.UNPACK_SKIP_IMAGES);T.pixelStorei(k.UNPACK_ROW_LENGTH,Ye.width),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ye.height),T.pixelStorei(k.UNPACK_SKIP_PIXELS,$t),T.pixelStorei(k.UNPACK_SKIP_ROWS,ce),T.pixelStorei(k.UNPACK_SKIP_IMAGES,ve);let Ro=C.isDataArrayTexture||C.isData3DTexture,Pe=H.isDataArrayTexture||H.isData3DTexture;if(C.isDepthTexture){let li=$.get(C),is=$.get(H),He=$.get(li.__renderTarget),ns=$.get(is.__renderTarget);T.bindFramebuffer(k.READ_FRAMEBUFFER,He.__webglFramebuffer),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let Po=0;Po<Vt;Po++)Ro&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(C).__webglTexture,Z,ve+Po),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,$.get(H).__webglTexture,Et,di+Po)),k.blitFramebuffer($t,ce,Bt,Pt,Gt,Ee,Bt,Pt,k.DEPTH_BUFFER_BIT,k.NEAREST);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||$.has(C)){let li=$.get(C),is=$.get(H);T.bindFramebuffer(k.READ_FRAMEBUFFER,I),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,F);for(let He=0;He<Vt;He++)Ro?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,li.__webglTexture,Z,ve+He):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,li.__webglTexture,Z),Pe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,is.__webglTexture,Et,di+He):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,is.__webglTexture,Et),Z!==0?k.blitFramebuffer($t,ce,Bt,Pt,Gt,Ee,Bt,Pt,k.COLOR_BUFFER_BIT,k.NEAREST):Pe?k.copyTexSubImage3D(Nt,Et,Gt,Ee,di+He,$t,ce,Bt,Pt):k.copyTexSubImage2D(Nt,Et,Gt,Ee,$t,ce,Bt,Pt);T.bindFramebuffer(k.READ_FRAMEBUFFER,null),T.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Pe?C.isDataTexture||C.isData3DTexture?k.texSubImage3D(Nt,Et,Gt,Ee,di,Bt,Pt,Vt,Ue,Hi,Ye.data):H.isCompressedArrayTexture?k.compressedTexSubImage3D(Nt,Et,Gt,Ee,di,Bt,Pt,Vt,Ue,Ye.data):k.texSubImage3D(Nt,Et,Gt,Ee,di,Bt,Pt,Vt,Ue,Hi,Ye):C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Et,Gt,Ee,Bt,Pt,Ue,Hi,Ye.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Et,Gt,Ee,Ye.width,Ye.height,Ue,Ye.data):k.texSubImage2D(k.TEXTURE_2D,Et,Gt,Ee,Bt,Pt,Ue,Hi,Ye);T.pixelStorei(k.UNPACK_ROW_LENGTH,en),T.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Me),T.pixelStorei(k.UNPACK_SKIP_PIXELS,Hn),T.pixelStorei(k.UNPACK_SKIP_ROWS,dr),T.pixelStorei(k.UNPACK_SKIP_IMAGES,es),Et===0&&H.generateMipmaps&&k.generateMipmap(Nt),T.unbindTexture()},this.initRenderTarget=function(C){$.get(C).__webglFramebuffer===void 0&&tt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?tt.setTextureCube(C,0):C.isData3DTexture?tt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?tt.setTexture2DArray(C,0):tt.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){U=0,B=0,Y=null,T.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var Ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},a2=new Fs(-1,1,1,-1,0,1),A0=class extends Ce{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}},l2=new A0,Bs=class{constructor(t){this._mesh=new Jt(l2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,a2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ka=class extends Bn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jr.clone(t.uniforms),this.material=new ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Bs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zc=class extends Bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},id=class extends Bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var nd=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new It);this._width=i.width,this._height=i.height,e=new oi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ka(Ja),this.copyPass.material.blending=jn,this.timer=new Sc}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}zc!==void 0&&(o instanceof zc?i=!0:o instanceof id&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var rd=class extends Bn{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new vt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Ay={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ja=class r extends Bn{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new vt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new oi(s,o,{type:Mi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new oi(s,o,{type:Mi,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new oi(s,o,{type:Mi,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Ay;this.highPassUniforms=jr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new It(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=jr.clone(Ja.uniforms),this.blendMaterial=new ae({uniforms:this.copyUniforms,vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader,premultipliedAlpha:!0,blending:Ze,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new vt,this._oldClearAlpha=1,this._basic=new Ke,this._fsQuad=new Bs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new It(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),s.push(c)}return new ae({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ja.BlurDirectionX=new It(1,0);ja.BlurDirectionY=new It(0,1);var Hc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var sd=class extends Bn{constructor(){super(),this.isOutputPass=!0,this.uniforms=jr.clone(Hc.uniforms),this.material=new Ua({name:Hc.name,uniforms:this.uniforms,vertexShader:Hc.vertexShader,fragmentShader:Hc.fragmentShader}),this._fsQuad=new Bs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},_e.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===bc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ac&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Cy(r){let t=new mo,e=new Jt(new Cs(40,48,24),new ae({side:ki,depthWrite:!1,uniforms:{top:{value:new vt("#1b2340")},horizon:{value:new vt("#0d1124")},bottom:{value:new vt("#05060c")}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
        varying vec3 vDir;
        void main() {
          float h = vDir.y;
          vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.8)) : mix(horizon, bottom, pow(-h, 0.5));
          gl_FragColor = vec4(c, 1.0);
        }`}));t.add(e);let i=new O,n=(a,l,c,u,h,f,d)=>{let p=new Jt(new Fe(a,l),new Ke({color:new vt(c).multiplyScalar(u),side:Pi}));p.position.set(h,f,d),p.lookAt(i),t.add(p)};n(9,6,"#ffe2c4",3.2,-6,9,7),n(14,4,"#ffd9bd",1.1,2,0,12),n(12,3,"#fff0e0",.8,0,-6,9),n(10,5,"#4f7dff",2,5,3,-10),n(6,8,"#3d5cff",.6,-8,1,-8),n(.35,16,"#ffffff",6,-10,1,1),n(.3,16,"#ffd2a6",7,10,0,2),n(9,.45,"#ffffff",3.5,0,7,9),n(20,20,"#ff6a1a",.22,0,-12,0);let s=new $a(r),o=s.fromScene(t,.035);return s.dispose(),t.traverse(a=>{a.isMesh&&(a.geometry.dispose(),a.material.dispose())}),o.texture}var Vc=12,Dy=30,c2={uniforms:{tDiffuse:{value:null},uTime:{value:0},uShift:{value:0},uVignette:{value:.9},uRes:{value:new It(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uShift;
    uniform float uVignette;
    uniform vec2 uRes;
    varying vec2 vUv;
    void main() {
      vec2 c = vUv - 0.5;
      float r2 = dot(c, c);
      // lens-like RGB split, stronger at the edges and while scrolling fast
      vec2 off = c * (0.0012 + uShift) * (0.3 + r2 * 2.4);
      vec3 col;
      col.r = texture2D(tDiffuse, vUv + off).r;
      col.g = texture2D(tDiffuse, vUv).g;
      col.b = texture2D(tDiffuse, vUv - off).b;
      // vignette
      float v = smoothstep(0.95, 0.18, r2 * uVignette * 1.6);
      col *= mix(0.62, 1.0, v);
      // fine dither against banding in the dark gradients
      float n = fract(sin(dot(gl_FragCoord.xy + uTime * 61.0, vec2(12.9898, 78.233))) * 43758.5453);
      col += (n - 0.5) / 255.0 * 2.0;
      gl_FragColor = vec4(col, 1.0);
    }`},od=class{constructor(t,{mobile:e=!1,reduced:i=!1,touch:n=!1}={}){this.canvas=t,this.mobile=e,this.touch=n,this.reduced=i,this.things=[],this.anchors=new Set,this.failed=!1,this.time=0,this.pointer=new It(0,0),this.pointerRaw=new It(0,0),this.scrollVel=0;try{if(this.renderer=new Qf({canvas:t,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 required")}catch{this.failed=!0;return}let s=this.renderer;s.outputColorSpace=Bi,s.toneMapping=bo,s.toneMappingExposure=1,s.setClearColor("#05070e",1),this.maxDpr=e?1.5:1.75,this.dpr=Math.min(window.devicePixelRatio||1,this.maxDpr),this.useBloom=!e,this.scene=new mo,this.env=Cy(s),this.scene.environment=this.env,this.camera=new Ki(Dy,1,.1,220),this.camera.position.set(0,0,Vc),this.camBase=new O(0,0,Vc),this.lookAt=new O(0,0,0);let o=new ka("#fff0e0",1.9);o.position.set(-3,4,5);let a=new ka("#5b8cff",.9);a.position.set(3,2.5,-8);let l=new yc("#3b4670",.2),c=new xc("#b9c6ff","#ffb27a",.75);this.scene.add(o,a,l,c),this.lights={key:o,rim:a,amb:l,hemi:c},this.w=0,this.h=0,this._buildPost(),this.resize(),window.addEventListener("resize",()=>this.resize()),this._frames=[],this._last=performance.now(),this._slowStrikes=0,this._fast=0,this._cool=0;let u=h=>{this.pointerRaw.set(h.clientX/window.innerWidth*2-1,-(h.clientY/window.innerHeight*2-1))};window.addEventListener("pointermove",u,{passive:!0}),window.addEventListener("pointerdown",u,{passive:!0})}_buildPost(){let t=this.renderer,e=new oi(4,4,{type:Mi,samples:this.mobile?0:4});this.composer=new nd(t,e),this.composer.addPass(new rd(this.scene,this.camera)),this.bloom=new ja(new It(256,256),.45,.6,.9),this.bloom.enabled=this.useBloom,this.composer.addPass(this.bloom),this.composer.addPass(new sd),this.final=new Ka(c2),this.composer.addPass(this.final)}resize(){if(this.failed)return;let t=window.innerWidth,e=window.innerHeight;if(this.touch&&t===this.w&&e<this.h&&(e=this.h),!(t===this.w&&e===this.h&&this.renderer.getPixelRatio()===this.dpr)){this.w=t,this.h=e,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,e),this.bloom.resolution.set(t*.5,e*.5),this.final.uniforms.uRes.value.set(t*this.dpr,e*this.dpr),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();for(let i of this.things)i.resize?.(t,e)}}add(t){return t.world=this,this.things.push(t),t.object&&this.scene.add(t.object),t}unitsPerPx(t=0){return 2*(this.camBase.z-t)*Math.tan(Kr.degToRad(Dy/2))/this.h}viewSize(t=0){let e=this.unitsPerPx(t);return{w:this.w*e,h:this.h*e}}anchor(t,{z:e=0,margin:i=.25}={}){let n={el:t,z:e,margin:i,x:0,y:0,w:1,h:1,px:{left:0,top:0,width:0,height:0},visible:!1,progress:0};return this.anchors.add(n),n}_updateAnchors(){let t=this.w,e=this.h;for(let i of this.anchors){if(!i.el)continue;let n=i.el.getBoundingClientRect(),s=i.margin*e;i.px.left=n.left,i.px.top=n.top,i.px.width=n.width,i.px.height=n.height,i.visible=n.width>0&&n.bottom>-s&&n.top<e+s;let o=this.unitsPerPx(i.z);i.x=(n.left+n.width/2-t/2)*o,i.y=-(n.top+n.height/2-e/2)*o,i.w=n.width*o,i.h=n.height*o,i.progress=Kr.clamp((e-n.top)/(e+n.height),0,1)}}async warmup(){if(this.failed)return;let t=[];this.scene.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{await this.renderer.compileAsync(this.scene,this.camera)}catch{}this.composer.render(.016);for(let e of t)e.visible=!1}render(t){if(this.failed)return;this.time+=t;let e=this.time,i=1-Math.pow(.0015,t);this.pointer.lerp(this.pointerRaw,i),this._updateAnchors();for(let o of this.things)o.enabled!==!1&&o.update?.(e,t);let n=this.camera;n.position.x=this.camBase.x+this.pointer.x*.35,n.position.y=this.camBase.y+this.pointer.y*.22,n.position.z=this.camBase.z,n.lookAt(this.lookAt),(window.innerWidth!==this.w||!this.touch&&window.innerHeight!==this.h)&&this.resize(),this.final.uniforms.uTime.value=e;let s=Math.min(Math.abs(this.scrollVel)/4e3,1);this.final.uniforms.uShift.value+=(s*.012-this.final.uniforms.uShift.value)*Math.min(1,t*6),this.composer.render(t),this._adapt()}_adapt(){let t=performance.now(),e=t-this._last;if(this._last=t,e>250||(this._frames.push(e),this._frames.length<60))return;this._frames.sort((n,s)=>n-s);let i=this._frames[30];this._frames.length=0,this._cool=Math.max(0,(this._cool||0)-1),i>40?(this._fast=0,this.dpr>1?(this.dpr=Math.max(1,this.dpr-.25),this._cool=6,this.resize()):this.bloom.enabled&&this.useBloom&&++this._slowStrikes>1&&(this.bloom.enabled=!1,this._cool=6)):i<17.5&&this._cool===0?++this._fast>=4&&(this._fast=0,this._cool=6,this.useBloom&&!this.bloom.enabled?this.bloom.enabled=!0:this.dpr<this.maxDpr&&(this.dpr=Math.min(this.maxDpr,Math.min(window.devicePixelRatio||1,this.dpr+.25)),this.resize())):this._fast=0}};var ad=class{constructor(){this.uniforms={uTime:{value:0},uAspect:{value:1},uTop:{value:new vt("#050812")},uBottom:{value:new vt("#020308")},uWarm:{value:new vt("#ff8f3d")},uCold:{value:new vt("#3d63ff")},uWarmPos:{value:new It(-.55,-.6)},uColdPos:{value:new It(.75,.55)},uWarmAmt:{value:.16},uColdAmt:{value:.14},uScroll:{value:0},uPointer:{value:new It(0,0)}};let t=new ae({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = vec4(position.xy, 0.9999, 1.0); }`,fragmentShader:`
        uniform float uTime; uniform float uAspect; uniform float uScroll; uniform vec2 uPointer;
        uniform vec3 uTop; uniform vec3 uBottom; uniform vec3 uWarm; uniform vec3 uCold;
        uniform vec2 uWarmPos; uniform vec2 uColdPos; uniform float uWarmAmt; uniform float uColdAmt;
        varying vec2 vUv;
        float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p) {
          vec2 i = floor(p); vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
        }
        float fbm(vec2 p) { float v = 0.0; float a = 0.5; for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.02; a *= 0.5; } return v; }
        void main() {
          vec2 p = (vUv - 0.5) * 2.0; p.x *= uAspect;
          vec3 col = mix(uBottom, uTop, smoothstep(-1.2, 1.0, p.y));
          float n = fbm(p * 0.9 + vec2(uTime * 0.02, -uTime * 0.015 + uScroll * 0.08));
          vec2 wp = uWarmPos * vec2(uAspect, 1.0) + vec2(sin(uTime * 0.11), cos(uTime * 0.09)) * 0.12;
          vec2 cp = uColdPos * vec2(uAspect, 1.0) + vec2(cos(uTime * 0.07), sin(uTime * 0.1)) * 0.14;
          float w = exp(-dot(p - wp, p - wp) * 0.9) * (0.65 + n * 0.7);
          float c = exp(-dot(p - cp, p - cp) * 0.8) * (0.65 + n * 0.7);
          col += uWarm * w * uWarmAmt * 0.26;
          col += uCold * c * uColdAmt * 0.3;
          // a faint light that follows the cursor
          vec2 mp = uPointer * vec2(uAspect, 1.0);
          float m = exp(-dot(p - mp, p - mp) * 6.0);
          col += mix(uWarm, uCold, 0.5) * m * 0.018;
          gl_FragColor = vec4(col, 1.0);
        }`}),e=new Ce;e.setAttribute("position",new we(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e.setAttribute("uv",new we(new Float32Array([0,0,2,0,0,2]),2)),this.mesh=new Jt(e,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.object=this.mesh}resize(t,e){this.uniforms.uAspect.value=t/e}update(t){this.uniforms.uTime.value=t,this.world&&this.uniforms.uPointer.value.copy(this.world.pointer)}},ld=class{constructor({count:t=1400}={}){let e=new Float32Array(t*3),i=new Float32Array(t*4);for(let o=0;o<t;o++)e[o*3]=(Math.random()-.5)*30,e[o*3+1]=(Math.random()-.5)*20,e[o*3+2]=-28+Math.random()*34,i[o*4]=Math.random(),i[o*4+1]=Math.random(),i[o*4+2]=Math.random(),i[o*4+3]=Math.random();let n=new Ce;n.setAttribute("position",new we(e,3)),n.setAttribute("aRand",new we(i,4)),this.uniforms={uTime:{value:0},uScroll:{value:0},uPx:{value:1},uOpacity:{value:1},uWarm:{value:new vt("#ffae6b")},uCold:{value:new vt("#9fb8ff")}};let s=new ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Ze,vertexShader:`
        attribute vec4 aRand;
        uniform float uTime; uniform float uScroll; uniform float uPx;
        varying float vA; varying float vWarm;
        void main() {
          vec3 p = position;
          float depth = clamp((p.z + 28.0) / 34.0, 0.0, 1.0);
          p.y += uScroll * (0.002 + depth * 0.006);
          p.y = mod(p.y + 10.0, 20.0) - 10.0;
          p.x += sin(uTime * (0.1 + aRand.x * 0.2) + aRand.y * 6.28) * 0.3;
          p.y += cos(uTime * (0.08 + aRand.z * 0.2) + aRand.x * 6.28) * 0.25;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          float size = (0.6 + aRand.w * 1.8) * uPx;
          gl_PointSize = size * (14.0 / -mv.z);
          vA = (0.25 + 0.75 * (0.5 + 0.5 * sin(uTime * (0.6 + aRand.z * 1.5) + aRand.y * 20.0))) * smoothstep(-0.5, -4.0, mv.z);
          vWarm = step(0.82, aRand.x);
        }`,fragmentShader:`
        uniform float uOpacity; uniform vec3 uWarm; uniform vec3 uCold;
        varying float vA; varying float vWarm;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d);
          a *= a;
          gl_FragColor = vec4(mix(uCold, uWarm, vWarm) * a * vA * uOpacity * 0.9, 1.0);
        }`});this.points=new cc(n,s),this.points.frustumCulled=!1,this.object=this.points}resize(t,e){this.uniforms.uPx.value=Math.min(window.devicePixelRatio||1,1.75)*(e/900)*1.4}update(t){this.uniforms.uTime.value=t,this.uniforms.uScroll.value=window.scrollY}};var Yt={FOX:0,CLOUD:1,HALO:2,COPY:3,HISTORY:4,FORMAT:5,GRID:6,SPHERE:7,GALAXY:8,SCATTER:9,SNAP:10,SNAPW:11},D0=12;function u2(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var kn=(r,t)=>({pts:[r,t],closed:!1});function Ry(r,t,e,i=0,n=Math.PI*2,s=64){let o=[];for(let a=0;a<=s;a++){let l=i+(n-i)*a/s;o.push([r+Math.cos(l)*e,t+Math.sin(l)*e])}return{pts:o,closed:!1}}function C0(r,t,e,i,n){let s=[],o=[[r+e/2-n,t+i/2-n,0],[r-e/2+n,t+i/2-n,Math.PI/2],[r-e/2+n,t-i/2+n,Math.PI],[r+e/2-n,t-i/2+n,Math.PI*3/2]];for(let[a,l,c]of o)for(let u=0;u<=6;u++){let h=c+Math.PI/2*(u/6);s.push([a+Math.cos(h)*n,l+Math.sin(h)*n])}return{pts:s,closed:!0}}function Py(r){let t=0,e=r.pts.length;for(let i=1;i<e+(r.closed?1:0);i++){let n=r.pts[(i-1)%e],s=r.pts[i%e];t+=Math.hypot(s[0]-n[0],s[1]-n[1])}return t}function h2(r,t){let e=r.pts.length;for(let i=1;i<e+(r.closed?1:0);i++){let n=r.pts[(i-1)%e],s=r.pts[i%e],o=Math.hypot(s[0]-n[0],s[1]-n[1]);if(t<=o||i===e-(r.closed?0:1)){let a=o>0?Math.min(1,t/o):0;return[n[0]+(s[0]-n[0])*a,n[1]+(s[1]-n[1])*a]}t-=o}return r.pts[e-1]}function f2(r,t,e,{jitter:i=.03,zJitter:n=.05}={}){let s=r.map(c=>(c.path?Py(c.path):c.box[2]*c.box[3]*6)*(c.weight??1)),o=s.reduce((c,u)=>c+u,0),a=[],l=0;return r.forEach((c,u)=>{let h=u===r.length-1?t-a.length:Math.round(s[u]/o*t);l+=h;for(let f=0;f<h;f++){let d,p;if(c.path){let _=Py(c.path);[d,p]=h2(c.path,(f+e()*.6)/h*_)}else{let[_,m,g,v]=c.box;d=_+(e()-.5)*g,p=m+(e()-.5)*v}a.push([d+(e()-.5)*i,p+(e()-.5)*i,(c.z??0)+(e()-.5)*n])}}),a.slice(0,t)}function Iy(r,t){for(let e=r.length-1;e>0;e--){let i=Math.floor(t()*(e+1));[r[e],r[i]]=[r[i],r[e]]}return r}function Fy(r,t){let e=[],i=u2(1234),n=(a,l)=>{let c=new Float32Array(t*4);for(let u=0;u<t;u++){let h=a[u];c[u*4]=h[0],c[u*4+1]=h[1],c[u*4+2]=h[2],c[u*4+3]=l(u)}return c};{let a=[];for(let l=0;l<t;l++)a.push([r[l*3],r[l*3+1],r[l*3+2]]);e[Yt.FOX]=n(a,()=>-1)}{let a=[];for(let l=0;l<t;l++){let c=r[l*3],u=r[l*3+1],h=r[l*3+2],f=c+(i()-.5)*1.2,d=u+(i()-.5)*1.2,p=h+(i()-.2)*1.6,_=Math.hypot(f,d,p)||1;f/=_,d/=_,p/=_;let m=3.2+Math.pow(i(),.8)*9;a.push([f*m*1.45,d*m*.85,Math.max(-16,Math.min(Vc-5,p*m*.8-4))])}e[Yt.CLOUD]=n(a,()=>.04+Math.pow(i(),2.5)*.17)}{let a=[];for(let l=0;l<t;l++){let c=i()*Math.PI*2,u=(i()-.5)*.9+(i()-.5)*.5,h=7.2+u,f=3.9+u*.6;a.push([Math.cos(c)*h,Math.sin(c)*f,-3.5+(i()-.5)*1.2+Math.sin(c*2)*.6])}e[Yt.HALO]=n(a,()=>.05+i()*.1)}let s=(a,l)=>Iy(f2(a,t,i,l),i),o=()=>.05+i()*.035;e[Yt.COPY]=n(s([{path:C0(-.32,.3,1.45,1.85,.18),z:-.35},{path:C0(.3,-.28,1.45,1.85,.18),z:.3,weight:1.15},{path:kn([-.1,.22],[.72,.22]),z:.3},{path:kn([-.1,-.08],[.72,-.08]),z:.3},{path:kn([-.1,-.38],[.5,-.38]),z:.3},{path:kn([-.1,-.68],[.62,-.68]),z:.3}]),o);{let a=Ry(0,0,1.25,Math.PI*.62,Math.PI*2.42,90),l=a.pts[0],c=[l[0]-.02,l[1]],u=[{path:a,z:0},{path:kn(c,[c[0]-.36,c[1]+.05]),z:0},{path:kn(c,[c[0]+.06,c[1]+.36]),z:0},{path:Ry(0,0,.88,0,Math.PI*2,64),z:.12,weight:.8},{path:kn([0,0],[0,.6]),z:.25,weight:1.6},{path:kn([0,0],[.45,-.22]),z:.25,weight:1.6}];for(let h=0;h<12;h++){let f=h/12*Math.PI*2;u.push({path:kn([Math.cos(f)*.7,Math.sin(f)*.7],[Math.cos(f)*.8,Math.sin(f)*.8]),z:.12,weight:1.4})}e[Yt.HISTORY]=n(s(u),o)}{let a=[[0,1.3],[1,1],[1,1.25],[0,.7],[1,1.1],[2,.75],[0,.95]],l=[];a.forEach(([c,u],h)=>{let f=.95-h*.32,d=-1.15+c*.32;l.push({box:[d+u/2,f,u,.1],z:.1*(c-1)})}),l.push({path:kn([-1.02,.7],[-1.02,-.85]),z:-.1,weight:.5}),l.push({path:kn([-.7,.05],[-.7,-.45]),z:-.1,weight:.5}),e[Yt.FORMAT]=n(s(l,{jitter:.02}),o)}{let a=[];a.push({path:C0(0,0,2.6,1.9,.08),z:0});for(let f=1;f<4;f++){let d=-1.3+.65*f;a.push({path:kn([d,1.9/2],[d,-1.9/2]),z:0,weight:.8})}for(let f=1;f<5;f++){let d=.95-.38*f;a.push({path:kn([-2.6/2,d],[2.6/2,d]),z:0,weight:.8})}a.push({box:[0,1.9/2-1.9/5/2,2.6,1.9/5*.7],z:.05,weight:.5}),a.push({box:[-2.6/2+2.6/4*1.5,1.9/2-1.9/5*2.5,2.6/4*.7,1.9/5*.55],z:.35,weight:.6}),a.push({box:[-2.6/2+2.6/4*2.5,1.9/2-1.9/5*3.5,2.6/4*.7,1.9/5*.55],z:.55,weight:.6}),e[Yt.GRID]=n(s(a,{jitter:.02}),o)}{let a=[],l=Math.PI*(3-Math.sqrt(5));for(let c=0;c<t;c++){let u=1-c/(t-1)*2,h=Math.sqrt(1-u*u),f=l*c,d=c%3===0?1.55+i()*.25:1.12+i()*.06;a.push([Math.cos(f)*h*d,u*d,Math.sin(f)*h*d])}e[Yt.SPHERE]=n(Iy(a,i),()=>.035+i()*.04)}{let a=[];for(let l=0;l<t;l++){let c=l%3,u=.45+Math.pow(i(),.7)*1.55,h=u*2.6+c*Math.PI*2/3+(i()-.5)*.5,f=(i()-.5)*.08*(2.2-u);a.push([Math.cos(h)*u,f,Math.sin(h)*u*.9])}e[Yt.GALAXY]=n(a,()=>.018+i()*.03)}{let a=[];for(let l=0;l<t;l++){let c=i()*Math.PI*2,u=1.5+i()*7;a.push([Math.cos(c)*u*1.5,Math.sin(c)*u,Vc+1.5+i()*10])}e[Yt.SCATTER]=n(a,()=>.12+i()*.2)}return e[Yt.SNAP]=new Float32Array(t*4),e[Yt.SNAPW]=new Float32Array(t*4),e}var Qa=64,d2=`
  attribute vec3 aCenter;
  attribute float aIndex;
  attribute vec4 aRand;
  attribute float aSize;
  attribute vec2 aOrder;
  uniform highp sampler2D uForms;
  uniform float uRows;
  uniform float uFormA;
  uniform float uFormB;
  uniform float uMix;
  uniform mat4 uMatA;
  uniform mat4 uMatB;
  uniform float uScaleA;
  uniform float uScaleB;
  uniform float uFoxA;
  uniform float uFoxB;
  uniform mat3 uRefRot;
  uniform float uTime;
  uniform float uStagger;
  uniform vec3 uOrderW;
  uniform float uSwirl;
  uniform float uSpin;
  uniform vec3 uPointer;
  uniform float uHover;
  uniform float uHoverR;
  uniform vec3 uFoxCenter;
  uniform float uBreath;
  uniform float uBlink;
  uniform vec4 uEyeLine; // eye inner corner (xy) and outer corner (zw), right eye
  uniform vec2 uEyeR;    // falloff radii
  varying float vFree;
  varying float vHot;

  vec4 shardForm(float f) {
    float row = floor(aIndex / ${Qa}.0) + f * uRows;
    float col = mod(aIndex, ${Qa}.0);
    return texelFetch(uForms, ivec2(int(col), int(row)), 0);
  }
  vec3 rotAxis(vec3 v, vec3 k, float a) {
    float c = cos(a); float s = sin(a);
    return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
  }
`,p2=`
  vec4 FA = shardForm(uFormA);
  vec4 FB = shardForm(uFormB);
  float ord = dot(vec3(aRand.w, aOrder.x, aOrder.y), uOrderW);
  float t = clamp(uMix * (1.0 + uStagger) - ord * uStagger, 0.0, 1.0);
  t = t * t * (3.0 - 2.0 * t);

  vec3 cA = (uMatA * vec4(FA.xyz, 1.0)).xyz;
  vec3 cB = (uMatB * vec4(FB.xyz, 1.0)).xyz;
  vec3 c = mix(cA, cB, t);
  vec3 sw = normalize(aRand.xyz - 0.5 + 0.0001);
  c += sw * sin(3.14159265 * t) * uSwirl * (0.35 + aRand.w);

  // after an interrupted morph, slot A is a snapshot that remembers each shard's fox weight
  float foxA = uFoxA;
  if (abs(uFormA - ${Yt.SNAP}.0) < 0.5) foxA = shardForm(${Yt.SNAPW}.0).x;
  float wFox = foxA * (1.0 - t) + uFoxB * t;

  // living surface: a slow wave runs over the fox from chin to ears.
  // Evaluated per vertex (not per shard) so neighbouring facets stay sealed.
  vec3 vOut = uRefRot * normalize(position + vec3(0.0, 0.0, 0.0001));
  vec3 breath = vOut * sin(uTime * 1.7 - position.y * 4.0) * uBreath * wFox * uScaleA;
  vec3 out0 = c - uFoxCenter;
  float ol = length(out0);
  vec3 outward = ol > 0.0001 ? out0 / ol : vec3(0.0, 0.0, 1.0);

  // facets near the cursor lift and part
  vec2 dp = c.xy - uPointer.xy;
  float hd = length(dp);
  float lift = smoothstep(uHoverR, 0.0, hd) * uHover;
  c.xy += (hd > 0.0001 ? dp / hd : vec2(0.0)) * lift * 0.35;
  c += outward * lift * 0.6;
  vHot = lift;

  float sA = (FA.w < 0.0 ? aSize : FA.w) * uScaleA;
  float sB = (FB.w < 0.0 ? aSize : FB.w) * uScaleB;
  float s = mix(sA, sB, t);

  // free tumbling; wrapped to \xB1\u03C0 so returning to the fox never unwinds many turns
  float af = uTime * (0.2 + aRand.w * 0.9) * uSpin + aRand.w * 40.0;
  af = mod(af + 3.14159265, 6.28318531) - 3.14159265;
  float ang = af * (1.0 - wFox);
  vec3 axis = normalize(aRand.zxy - 0.5 + 0.0001);
  // blink: the area around each eye folds onto the line between its corners.
  // A smooth field over positions, so facets stretch instead of tearing apart.
  vec3 bp = position;
  if (uBlink > 0.0) {
    float ax = abs(bp.x);
    vec2 ei = uEyeLine.xy; vec2 eo = uEyeLine.zw;
    vec2 ec = (ei + eo) * 0.5;
    vec2 dd = (vec2(ax, bp.y) - ec) / uEyeR;
    float fall = exp(-dot(dd, dd) * 1.6) * smoothstep(-0.05, 0.25, bp.z);
    float lineY = ei.y + (clamp(ax, ei.x, eo.x) - ei.x) * (eo.y - ei.y) / (eo.x - ei.x);
    bp.y = mix(bp.y, lineY, uBlink * fall * wFox);
  }
  vec3 local = uRefRot * (bp - aCenter) * (s / max(aSize, 0.0001));
  local = rotAxis(local, axis, ang);

  vec3 transformed = c + local + breath;
  vFree = 1.0 - wFox;
`,cd=class{constructor({levels:t=2}={}){let e=Ix(Xl({height:2}),t),i=Xl.landmarks,n=e.length;this.N=n;let s=new Float32Array(n*9),o=new Float32Array(n*9),a=new Float32Array(n*9),l=new Float32Array(n*3),c=new Float32Array(n*12),u=new Float32Array(n*3),h=new Float32Array(n*6),f=new Float32Array(n*3);this.sizes=new Float32Array(n),this.rnd=new Float32Array(n*4),this.ord=new Float32Array(n*2),this.roles=[];let d=1/0,p=-1/0,_=0;e.forEach((A,x)=>{let S=(A.a[0]+A.b[0]+A.c[0])/3,w=(A.a[1]+A.b[1]+A.c[1])/3,D=(A.a[2]+A.b[2]+A.c[2])/3;f.set([S,w,D],x*3),d=Math.min(d,w),p=Math.max(p,w),_=Math.max(_,Math.hypot(S,w))});let m=99,g=()=>(m=m*16807%2147483647,m/2147483647);e.forEach((A,x)=>{let S=f[x*3],w=f[x*3+1],D=f[x*3+2],R=Math.max(...[A.a,A.b,A.c].map(U=>Math.hypot(U[0]-S,U[1]-w,U[2]-D)));this.sizes[x]=R;let N=[g(),g(),g(),g()];this.rnd.set(N,x*4);let I=(w-d)/(p-d),F=Math.hypot(S,w)/_;this.ord.set([I,F],x*2),this.roles.push(A.role),[A.a,A.b,A.c].forEach((U,B)=>{let Y=x*3+B;s.set(U,Y*3),o.set([S,w,D],Y*3),a.set(A.color,Y*3),l[Y]=x,c.set(N,Y*4),u[Y]=R,h.set([I,F],Y*2)})});let v=new Ce;v.setAttribute("position",new we(s,3)),v.setAttribute("aCenter",new we(o,3)),v.setAttribute("color",new we(a,3)),v.setAttribute("aIndex",new we(l,1)),v.setAttribute("aRand",new we(c,4)),v.setAttribute("aSize",new we(u,1)),v.setAttribute("aOrder",new we(h,2)),v.boundingSphere=new Kn(new O,1e4),this.forms=Fy(f,n),this.rows=Math.ceil(n/Qa);let b=new Float32Array(Qa*this.rows*D0*4);this.forms.forEach((A,x)=>this._writeForm(b,x,A)),this.texData=b,this.tex=new _o(b,Qa,this.rows*D0,bn,Mn),this.tex.minFilter=ui,this.tex.magFilter=ui,this.tex.needsUpdate=!0,this.uniforms={uForms:{value:this.tex},uRows:{value:this.rows},uFormA:{value:Yt.SCATTER},uFormB:{value:Yt.FOX},uMix:{value:0},uMatA:{value:new ue},uMatB:{value:new ue},uScaleA:{value:1},uScaleB:{value:1},uFoxA:{value:0},uFoxB:{value:1},uRefRot:{value:new re},uTime:{value:0},uStagger:{value:.6},uOrderW:{value:new O(1,0,0)},uSwirl:{value:.6},uSpin:{value:1},uPointer:{value:new O(999,999,0)},uHover:{value:0},uHoverR:{value:.9},uFoxCenter:{value:new O},uBreath:{value:.012},uBlink:{value:0},uEyeLine:{value:new Ge},uEyeR:{value:new It(.26,.17)},uGlow:{value:.55},uSelfLit:{value:.1},uFlash:{value:0}};let y=new yn({vertexColors:!0,flatShading:!0,roughness:.36,metalness:0,clearcoat:.85,clearcoatRoughness:.22,side:Pi,envMapIntensity:1.15});y.onBeforeCompile=A=>{Object.assign(A.uniforms,this.uniforms),A.vertexShader=A.vertexShader.replace("#include <common>",`#include <common>
`+d2).replace("#include <begin_vertex>",p2),A.fragmentShader=A.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;
uniform float uSelfLit;
uniform float uFlash;
varying float vFree;
varying float vHot;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * (uSelfLit + vFree * uGlow + uFlash + vHot * 0.6);`)},y.customProgramCacheKey=()=>"fox-shards",this.material=y,this.uniforms.uEyeLine.value.set(i.eyeI[0],i.eyeI[1],i.eyeO[0],i.eyeO[1]);let M=i.eyeO[0]-i.eyeI[0],E=i.eyeT[1]-i.eyeB[1];this.uniforms.uEyeR.value.set(M*.75,E*.95),this.mesh=new Jt(v,y),this.mesh.frustumCulled=!1,this.object=this.mesh,this.places={identity:()=>{}},this.A={form:Yt.SCATTER,place:"identity"},this.B={form:Yt.FOX,place:"identity"},this.mix=0,this.tween=null,this.mode="tween",this._p={pos:new O,quat:new Si,scale:1},this._matA=new ue,this._matB=new ue,this._refRot=new re,this._m4=new ue}_writeForm(t,e,i){let n=e*this.rows*Qa*4;t.set(i,n)}place(t,e){this.places[t]=e}_placement(t,e){let i=this._p;i.pos.set(0,0,0),i.quat.identity(),i.scale=1;let n=this.places[t.place];return n&&n(i),(this._sv||(this._sv=new O)).setScalar(i.scale),e.compose(i.pos,i.quat,this._sv),i.scale}get settled(){return!this.tween&&this.mix>=1}get target(){return this.B}go(t,e,i={}){if(this.B.form===t&&this.B.place===e&&this.mode==="tween"&&(this.tween||this.mix>=1))return;this.mode="tween",this.mix>0&&this.mix<1?this._snapshot():this.mix>=1&&(this.A=this.B),this.B={form:t,place:e},this.mix=0;let n=this.uniforms;n.uStagger.value=i.stagger??.55,n.uOrderW.value.set(...i.order||[1,0,0]),n.uSwirl.value=i.swirl??.8,this.tween={t:0,dur:i.duration??1.8,ease:i.ease||(s=>s)}}scrub(t,e,i,n,s,o={}){(this.mode!=="scrub"||this.A.form!==t||this.B.form!==i||this.A.place!==e||this.B.place!==n)&&(this.mode="scrub",this.tween=null,this.A={form:t,place:e},this.B={form:i,place:n},o.from!=null&&(this.mix=o.from));let a=this.uniforms;a.uStagger.value=o.stagger??.7,a.uOrderW.value.set(...o.order||[.35,0,.65]),a.uSwirl.value=o.swirl??1.2,this._scrubTarget=s}_snapshot(){let t=this.N,e=this.uniforms,i=this.forms[this.A.form],n=this.forms[this.B.form],s=this._placement(this.A,this._matA),o=this._placement(this.B,this._matB),a=this.forms[Yt.SNAP],l=this.forms[Yt.SNAPW],c=this._nextW||(this._nextW=new Float32Array(t)),u=this.B.form===Yt.FOX?1:0,h=e.uOrderW.value,f=e.uStagger.value,d=e.uSwirl.value,p=new O,_=new O;for(let m=0;m<t;m++){let g=this.rnd[m*4+3],v=g*h.x+this.ord[m*2]*h.y+this.ord[m*2+1]*h.z,b=Math.min(1,Math.max(0,this.mix*(1+f)-v*f));b=b*b*(3-2*b),p.set(i[m*4],i[m*4+1],i[m*4+2]).applyMatrix4(this._matA),_.set(n[m*4],n[m*4+1],n[m*4+2]).applyMatrix4(this._matB),p.lerp(_,b);let y=this.rnd[m*4]-.5,M=this.rnd[m*4+1]-.5,E=this.rnd[m*4+2]-.5,A=Math.hypot(y,M,E)||1,x=Math.sin(Math.PI*b)*d*(.35+g);p.x+=y/A*x,p.y+=M/A*x,p.z+=E/A*x;let S=(i[m*4+3]<0?this.sizes[m]:i[m*4+3])*s,w=(n[m*4+3]<0?this.sizes[m]:n[m*4+3])*o;a[m*4]=p.x,a[m*4+1]=p.y,a[m*4+2]=p.z,a[m*4+3]=S+(w-S)*b;let D=this.A.form===Yt.SNAP?l[m*4]:this.A.form===Yt.FOX?1:0;c[m]=D*(1-b)+u*b}for(let m=0;m<t;m++)l[m*4]=c[m];this._writeForm(this.texData,Yt.SNAP,a),this._writeForm(this.texData,Yt.SNAPW,l),this.tex.needsUpdate=!0,this.A={form:Yt.SNAP,place:"identity"},this.mix=0}update(t,e){let i=this.uniforms;if(i.uTime.value=t,this.mode==="tween"&&this.tween){let u=this.tween;u.t=Math.min(1,u.t+e/u.dur),this.mix=u.ease(u.t),u.t>=1&&(this.tween=null,this.mix=1,u.onDone?.())}else if(this.mode==="scrub"){let u=1-Math.pow(.002,e);this.mix+=(this._scrubTarget-this.mix)*u}i.uFormA.value=this.A.form,i.uFormB.value=this.B.form,i.uMix.value=this.mix,i.uScaleA.value=this._placement(this.A,i.uMatA.value);let n=this._p.quat.clone(),s=this._p.pos.clone();i.uScaleB.value=this._placement(this.B,i.uMatB.value);let o=this._p.quat.clone(),a=this._p.pos.clone(),l=this.A.form===Yt.FOX?1:0,c=this.B.form===Yt.FOX?1:0;if(i.uFoxA.value=l,i.uFoxB.value=c,l||c){let u=l&&c?n.slerp(o,this.mix):l?n:o;this._m4.makeRotationFromQuaternion(u),i.uRefRot.value.setFromMatrix4(this._m4),i.uFoxCenter.value.copy(l&&c?s.lerp(a,this.mix):l?s:a)}}};var Le={display:'"Bricolage Grotesque", "Arial Narrow", system-ui, sans-serif',body:'Geist, "Segoe UI", system-ui, sans-serif',mono:'"JetBrains Mono", ui-monospace, Consolas, monospace',serif:'"Instrument Serif", Georgia, serif'};function Qr(r,{srgb:t=!0,mips:e=!0,aniso:i=4}={}){let n=new hc(r);return t&&(n.colorSpace=Bi),n.generateMipmaps=e,n.minFilter=e?Ar:yi,n.anisotropy=i,n.needsUpdate=!0,n}function Ao(r,t,e,i,n,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+i,e,t+i,e+n,s),r.arcTo(t+i,e+n,t,e+n,s),r.arcTo(t,e+n,t,e,s),r.arcTo(t,e,t+i,e,s),r.closePath()}function Ly(r,{width:t=4096,height:e=1024}={}){let i=document.createElement("canvas");i.width=t,i.height=e;let n=i.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,t,e);let s=e*.86;n.font=`800 ${s}px ${Le.display}`;let o=n.measureText(r),a=t*.96/o.width;s*=Math.min(1,a),n.font=`800 ${s}px ${Le.display}`,n.textAlign="center",n.textBaseline="middle",n.globalCompositeOperation="lighter",n.fillStyle="#00ff00",n.fillText(r,t/2,e*.54),n.lineWidth=Math.max(2,s*.006),n.strokeStyle="#ff0000",n.strokeText(r,t/2,e*.54);let l=n.measureText(r);return{canvas:i,texture:Qr(i,{srgb:!1}),textWidth:l.width/t}}function Ny(r,{accent:t=!1}={}){let i=document.createElement("canvas"),n=i.getContext("2d");n.font=`500 ${96*.4}px ${Le.mono}`;let s=n.measureText(r).width,o=Math.ceil(s+96*.9+(t?96*.32:0));i.width=o+8,i.height=104,n.translate(4,4),Ao(n,0,0,o,96,96/2);let a=n.createLinearGradient(0,0,0,96);a.addColorStop(0,t?"rgba(255,128,48,0.32)":"rgba(120,140,220,0.24)"),a.addColorStop(1,t?"rgba(255,90,20,0.14)":"rgba(40,52,100,0.22)"),n.fillStyle=a,n.fill(),n.lineWidth=2.5,n.strokeStyle=t?"rgba(255,170,110,0.75)":"rgba(170,190,255,0.45)",n.stroke();let l=96*.45;return t&&(n.fillStyle="#ff8a3d",n.beginPath(),n.arc(l+96*.08,96/2,96*.09,0,Math.PI*2),n.fill(),l+=96*.32),n.font=`500 ${96*.4}px ${Le.mono}`,n.textBaseline="middle",n.fillStyle=t?"#ffe2c8":"#dfe6ff",n.fillText(r,l,96/2+2),{texture:Qr(i),aspect:i.width/i.height}}function R0(r,{height:t=256,sep:e="\u2726",font:i=Le.display,weight:n=700,color:s="#ffffff",sepColor:o="#ff7a2a"}={}){let a=document.createElement("canvas"),l=a.getContext("2d"),c=t*.62;l.font=`${n} ${c}px ${i}`;let u=c*.55,h=l.measureText(e).width,f=0;for(let m of r)f+=l.measureText(m).width+u*2+h;let d=Math.min(16384,Math.ceil(f));a.width=d,a.height=t,l.font=`${n} ${c}px ${i}`,l.textBaseline="middle";let p=0;for(let m of r)l.fillStyle=s,l.fillText(m,p,t*.54),p+=l.measureText(m).width+u,l.fillStyle=o,l.fillText(e,p,t*.52),p+=h+u;let _=Qr(a);return _.wrapS=Ta,{texture:_,aspect:d/t}}function Oy(r,{size:t=64,color:e="#e8edff",font:i=Le.mono,weight:n=600,pad:s=.6,bg:o=null,border:a=null}={}){let l=document.createElement("canvas"),c=l.getContext("2d");c.font=`${n} ${t}px ${i}`;let u=c.measureText(r).width,h=Math.ceil(u+t*s*2),f=Math.ceil(t*1.7);return l.width=h+6,l.height=f+6,c.translate(3,3),o&&(Ao(c,0,0,h,f,f*.3),c.fillStyle=o,c.fill(),a&&(c.lineWidth=2,c.strokeStyle=a,c.stroke())),c.font=`${n} ${t}px ${i}`,c.textBaseline="middle",c.textAlign="center",c.fillStyle=e,c.fillText(r,h/2,f/2+t*.04),{texture:Qr(l),aspect:l.width/l.height}}var ud=class{constructor(t,e,{word:i="HARMONY",mobile:n=!1}={}){this.world=t,this.getFox=e;let{texture:s}=Ly(i,n?{width:2048,height:512}:{});this.aspect=4,this.uniforms={uTex:{value:s},uTime:{value:0},uMouse:{value:new It(.5,.5)},uLight:{value:0},uReveal:{value:0},uOut:{value:0},uAspect:{value:this.aspect}};let o=new ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Ze,vertexShader:`
        varying vec2 vUv;
        void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,fragmentShader:`
        uniform sampler2D uTex; uniform float uTime; uniform vec2 uMouse; uniform float uLight;
        uniform float uReveal; uniform float uOut; uniform float uAspect;
        varying vec2 vUv;
        void main() {
          vec2 uv = vUv;
          uv.y += sin(uv.x * 9.0 + uTime * 0.7) * 0.006 * (1.0 + uOut * 4.0);
          vec2 d = (uv - uMouse) * vec2(uAspect, 1.0);
          float r = length(d);
          uv += (r > 0.0001 ? d / r : vec2(0.0)) / vec2(uAspect, 1.0) * sin(r * 26.0 - uTime * 3.5) * 0.004 * smoothstep(0.6, 0.0, r) * uLight;
          float split = 0.0008 + uOut * 0.01;
          vec4 tr = texture2D(uTex, uv + vec2(split, 0.0));
          vec4 tg = texture2D(uTex, uv);
          vec4 tb = texture2D(uTex, uv - vec2(split, 0.0));
          float outline = tg.r;
          float fill = tg.g;
          // reveal: letters rise through a soft horizontal edge
          float rev = smoothstep(0.0, 0.18, uReveal * 1.25 - (1.0 - vUv.y) * 0.25 - abs(vUv.x - 0.5) * 0.6);
          float light = smoothstep(0.75, 0.0, r) * uLight;
          vec3 warm = mix(vec3(1.0, 0.36, 0.08), vec3(1.0, 0.72, 0.4), smoothstep(0.2, 0.9, vUv.y));
          vec3 cool = vec3(0.62, 0.7, 1.0);
          vec3 col = vec3(tr.r, tg.r, tb.r) * cool * 0.2;
          col += warm * fill * (0.012 + light * 0.75);
          col *= rev * (1.0 - uOut);
          gl_FragColor = vec4(col, 1.0);
        }`});this.mesh=new Jt(new Fe(1,1),o),this.mesh.renderOrder=-10,this.object=this.mesh,this._ray=new cr,this._hit=[],this.z=-5}update(t){let e=this.getFox(),i=this.uniforms;if(this.mesh.visible=e.visible&&i.uOut.value<.999&&i.uReveal.value>.001,!this.mesh.visible)return;i.uTime.value=t;let n=this.world.viewSize(this.z),s=n.h/this.world.viewSize(0).h,o=n.w*.96,a=o/this.aspect;this.mesh.position.set(0,(e.pos.y+e.scale*.12)*s,this.z),this.mesh.scale.set(o*(1+i.uOut.value*.35),a*(1+i.uOut.value*.35),1),this._ray.setFromCamera(this.world.pointer,this.world.camera),this._hit.length=0,this._ray.intersectObject(this.mesh,!1,this._hit),this._hit.length&&i.uMouse.value.lerp(this._hit[0].uv,.2)}},Uy=[["SELECT",!0],["JOIN",!1],["WHERE",!1],["GROUP BY",!1],["PL/SQL",!0],["HAVING",!1],[".xlsx",!1],["ChatGPT",!0],["COUNT(*)",!1],["ORDER BY",!1]],hd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.getCenter=e,this.group=new Ve,this.object=this.group,this.items=[],this.out=0,this.reveal=0;let n=i?Uy.slice(0,6):Uy,s=[0,0,0];n.forEach((a,l)=>s[l%3]++);let o=[.1,-.075,.13];n.forEach(([a,l],c)=>{let{texture:u,aspect:h}=Ny(a,{accent:l}),f=new Ke({map:u,transparent:!0,depthWrite:!1,opacity:1,toneMapped:!1}),d=new Jt(new Fe(h,1),f);d.renderOrder=5;let p=c%3,_=Math.floor(c/3);this.items.push({mesh:d,phase:_/s[p]*Math.PI*2+p*1.1,speed:o[p],rx:1.45+p*.38,ry:.5+p*.22,tilt:-.35+p*.28,bob:Math.random()*6,size:.13+(l?.025:0)}),this.group.add(d)}),this._v=new O}update(t){let e=this.getCenter();if(this.group.visible=e.visible&&this.out<.999,!this.group.visible)return;let i=e.scale;for(let n of this.items){let s=n.phase+t*n.speed,o=Math.cos(s)*n.rx,a=Math.sin(s)*n.rx*.8,l=Math.sin(s)*n.ry*.35+Math.sin(t*.7+n.bob)*.06;l+=o*Math.sin(n.tilt)*.3;let c=1+this.out*2.4;this._v.set(o*c,l*c+this.out*.6,a*c+this.out*2),n.mesh.position.copy(this._v).multiplyScalar(i).add(e.pos),n.mesh.quaternion.copy(this.world.camera.quaternion);let u=(a/(n.rx*.8)+1)/2,h=n.size*i*(.9+u*.3)*(.6+.4*this.reveal);n.mesh.scale.set(h,h,h),n.mesh.material.opacity=(.45+u*.55)*this.reveal*(1-this.out)}}},fd=class{constructor(t,e,{rows:i=46,cols:n=150,mobile:s=!1}={}){this.world=t,this.getFox=e,s&&(i=30,n=90);let o=i*(n-1),a=new Float32Array(o*2*3),l=0;for(let h=0;h<i;h++){let f=-h/(i-1);for(let d=0;d<n-1;d++){let p=d/(n-1)-.5,_=(d+1)/(n-1)-.5;a.set([p,0,f,_,0,f],l),l+=6}}let c=new Ce;c.setAttribute("position",new we(a,3)),this.uniforms={uTime:{value:0},uAmp:{value:1},uMouse:{value:new It(0,0)},uFade:{value:1},uFade2:{value:1},uWarm:{value:new vt("#ff8a3d")},uCold:{value:new vt("#3d5cff")},uPulse:{value:0}};let u=new ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Ze,vertexShader:`
        uniform float uTime; uniform float uAmp; uniform vec2 uMouse; uniform float uPulse;
        varying float vZ; varying float vX; varying float vH;
        void main() {
          vec3 p = position;
          float x = p.x * 26.0;
          float z = p.z * 30.0;
          // sum of harmonics: a chord, not noise
          float h = sin(x * 0.42 + uTime * 0.9) * 0.5
                  + sin(x * 0.84 - z * 0.3 + uTime * 1.3) * 0.25
                  + sin(x * 1.26 + z * 0.5 - uTime * 0.7) * 0.16
                  + sin(z * 0.7 + uTime * 0.5) * 0.3;
          float centre = exp(-p.x * p.x * 7.0);
          h *= (0.35 + centre * 0.9);
          // ripple from the cursor
          vec2 q = vec2(x, z) - uMouse;
          float d = length(q);
          h += sin(d * 1.2 - uTime * 3.0) * exp(-d * 0.18) * 0.35;
          h += uPulse * sin(d * 0.6 - uTime * 6.0) * exp(-d * 0.08);
          vec3 w = vec3(x, h * uAmp, z);
          vZ = -p.z; vX = p.x; vH = h;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(w, 1.0);
        }`,fragmentShader:`
        uniform vec3 uWarm; uniform vec3 uCold; uniform float uFade; uniform float uFade2;
        varying float vZ; varying float vX; varying float vH;
        void main() {
          float centre = exp(-vX * vX * 9.0);
          vec3 col = mix(uCold, uWarm, centre * 0.85 + clamp(vH, 0.0, 1.0) * 0.25);
          float a = (1.0 - vZ) * (1.0 - vZ) * smoothstep(0.5, 0.36, abs(vX)) * (0.05 + centre * 0.17);
          gl_FragColor = vec4(col * a * uFade * uFade2, 1.0);
        }`});this.mesh=new yo(c,u),this.mesh.frustumCulled=!1,this.object=this.mesh,this._mouse=new It}update(t){let e=this.getFox();if(this.mesh.visible=e.visible&&this.uniforms.uFade.value*this.uniforms.uFade2.value>.001,!this.mesh.visible)return;let i=this.uniforms;i.uTime.value=t,this.mesh.position.set(0,e.pos.y-e.scale*1.55,3),this._mouse.set(this.world.pointer.x*12,(this.world.pointer.y+1)*-8),i.uMouse.value.lerp(this._mouse,.05)}};var dd=class{constructor(t,{count:e=90}={}){this.world=t;let i=new Ce;i.setAttribute("position",new we(new Float32Array([0,.62,0,-.42,-.36,0,.5,-.26,0]),3)),i.computeVertexNormals();let n=new Ke({color:16777215,side:Pi,transparent:!0,depthWrite:!1,toneMapped:!1});this.mesh=new xo(i,n,e),this.mesh.instanceMatrix.setUsage(Qm),this.mesh.frustumCulled=!1,this.mesh.renderOrder=20,this.object=this.mesh,this.parts=[];let s=["#ff7a2a","#ffb066","#ffe3c6","#ff5a1a","#8fb0ff"];for(let o=0;o<e;o++){this.parts.push({life:0,pos:new O,vel:new O,rot:new On,spin:new O,size:0});let a=new vt(s[o%s.length]).multiplyScalar(o%5===4?1.4:1.8);this.mesh.setColorAt(o,a)}this.mesh.instanceColor.needsUpdate=!0,this.next=0,this.last=new It(999,999),this.acc=0,this._m=new ue,this._q=new Si,this._s=new O,this._p=new O,this.z=4,this.plane=new Nn(new O(0,0,1),-this.z),this.ray=new cr,this.enabled=!0}spawn(t,e,i){let n=this.parts[this.next];this.next=(this.next+1)%this.parts.length,n.life=1,n.pos.set(t,e,this.z),n.vel.set((Math.random()-.5)*.6,-.15-Math.random()*.5,(Math.random()-.5)*.4).multiplyScalar(.6+i*.4),n.rot.set(Math.random()*6.28,Math.random()*6.28,Math.random()*6.28),n.spin.set((Math.random()-.5)*8,(Math.random()-.5)*8,(Math.random()-.5)*6),n.size=.03+Math.random()*.045}update(t,e){let i=this.world,n=i.pointerRaw;this.ray.setFromCamera(n,i.camera);let s=this.ray.ray.intersectPlane(this.plane,this._p),o=n.x-this.last.x,a=n.y-this.last.y,l=Math.hypot(o*i.w,a*i.h)*.5;if(s&&this.lastHit&&this.last.x!==999&&l>1.5){this.acc+=l;let u=Math.min(3,l/20);for(;this.acc>14;){this.acc-=14;let h=Math.random();this.spawn(s.x+(this.lastHit.x-s.x)*h,s.y+(this.lastHit.y-s.y)*h,u)}}this.last.copy(n),s&&(this.lastHit||(this.lastHit=new O)).copy(s);let c=0;for(let u=0;u<this.parts.length;u++){let h=this.parts[u];if(h.life<=0){this._m.makeScale(0,0,0),this.mesh.setMatrixAt(u,this._m);continue}c++,h.life-=e*1.1,h.vel.y-=e*.25,h.pos.addScaledVector(h.vel,e),h.rot.x+=h.spin.x*e,h.rot.y+=h.spin.y*e,h.rot.z+=h.spin.z*e;let f=h.size*Math.max(0,h.life)*(1.4-h.life*.4);this._q.setFromEuler(h.rot),this._s.setScalar(f),this._m.compose(h.pos,this._q,this._s),this.mesh.setMatrixAt(u,this._m)}this.mesh.visible=c>0,this.mesh.instanceMatrix.needsUpdate=!0}};var m2=[Yt.COPY,Yt.HISTORY,Yt.FORMAT,Yt.GRID],By={Why:[Yt.CLOUD,"cloud",{duration:1.6,stagger:.5,glow:.22}],Workbench:[Yt.HALO,"halo",{duration:2,stagger:.6,swirl:1.2,glow:.4}],Dialect:[Yt.SCATTER,"identity",{duration:1.6,stagger:.45,swirl:.4}],"AI help":[Yt.SPHERE,"ai",{duration:1.9,stagger:.6,swirl:1.4,glow:.45}],Instances:[Yt.GALAXY,"inst",{duration:2,stagger:.6,swirl:1.2,glow:.3}],Editor:[Yt.SCATTER,"identity",{duration:1.5,stagger:.4,swirl:.4}],Desktop:[Yt.SCATTER,"identity",{duration:1.5}],Demo:[Yt.SCATTER,"identity",{duration:1.5}],Specs:[Yt.SCATTER,"identity",{duration:1.5}],FAQ:[Yt.SCATTER,"identity",{duration:1.5}],Start:[Yt.FOX,"cta",{duration:2.6,stagger:.75,order:[.25,.75,0],swirl:1.4}],Contact:[Yt.FOX,"cta",{duration:2.6,stagger:.75,order:[.25,.75,0],swirl:1.4}]},g2={hero:{warm:.12,cold:.14,wp:[-.1,-.9],cp:[.85,.75]},cloud:{warm:.12,cold:.12,wp:[-.8,.2],cp:[.8,-.4]},halo:{warm:.1,cold:.16,wp:[0,-.9],cp:[0,.8]},ring:{warm:.14,cold:.08,wp:[0,0],cp:[.9,.9]},features:{warm:.12,cold:.12,wp:[-.7,0],cp:[.9,-.6]},ai:{warm:.12,cold:.2,wp:[.6,-.6],cp:[.5,.3]},instances:{warm:.06,cold:.22,wp:[-.8,-.8],cp:[0,0]},studio:{warm:.12,cold:.1,wp:[-.6,0],cp:[.8,.6]},desktop:{warm:.16,cold:.12,wp:[.5,-.3],cp:[-.7,.7]},video:{warm:.08,cold:.16,wp:[-.8,-.8],cp:[0,.2]},specs:{warm:.08,cold:.08,wp:[-.5,0],cp:[.5,0]},faq:{warm:.06,cold:.1,wp:[-.9,.9],cp:[.9,-.9]},cta:{warm:.26,cold:.1,wp:[0,.25],cp:[0,-.9]},footer:{warm:.18,cold:.08,wp:[0,-.4],cp:[.8,.8]}};function ky(r,t,{backdrop:e,mobile:i,reduced:n=!1}){let s=at(".hero"),o=r.anchor(at('[data-anchor="hero"]'),{margin:2}),a=r.anchor(at('[data-anchor="cta"]'),{margin:1}),l=r.anchor(at('[data-anchor="orb"]'),{margin:1}),c=r.anchor(at('[data-anchor="constellation"]'),{margin:1}),u=le(".feature__icon").map(S=>r.anchor(S,{margin:1})),h=r.pointer,f=new On,d=new Si,p={intro:!0,section:"Intro",feature:0,heroP:0,fox:{pos:new O,scale:1,visible:!0},spin:0,spinVel:0,dragging:!1},_=le('[data-anchor="hero"], [data-anchor="cta"]'),m=0;_.forEach(S=>{S.addEventListener("pointerdown",D=>{p.dragging=!0,m=D.clientX,S.setPointerCapture?.(D.pointerId),t.uniforms.uFlash.value=.12,gt.to(t.uniforms.uFlash,{value:0,duration:.8,ease:"power2.out",overwrite:!0}),document.dispatchEvent(new CustomEvent("fox-poke"))}),S.addEventListener("pointermove",D=>{if(!p.dragging)return;let R=D.clientX-m;m=D.clientX,p.spin+=R*.012,p.spinVel=R*.012*60});let w=()=>p.dragging=!1;S.addEventListener("pointerup",w),S.addEventListener("pointercancel",w)});let g=(S,w,D)=>{let R=r.unitsPerPx(0);return D.set((S-r.w/2)*R,-(w-r.h/2)*R,0),D},v=S=>{let w=o,D=w.px.top+window.scrollY,R=n?w.px.top+w.px.height*.5:D+w.px.height*.5-window.scrollY*.32;g(w.px.left+w.px.width/2,R,S.pos),S.scale=w.px.height*r.unitsPerPx(0)/2.25;let N=r.time;f.set(.1-h.y*.22+Math.sin(N*.6)*.03+p.heroP*.5,-.3+h.x*.55+Math.sin(N*.37)*.06+p.heroP*1.4+p.spin,h.x*-.06,"YXZ"),S.quat.setFromEuler(f),p.fox.pos.copy(S.pos),p.fox.scale=S.scale};t.place("hero",v);let b={pos:new O,quat:new Si,scale:1},y=()=>r.w<r.h;t.place("cloud",S=>{f.set(0,r.time*.018,y()?Math.PI/2:0,"ZYX"),S.quat.setFromEuler(f),S.pos.set(0,0,0)}),t.place("halo",S=>{let w=r.viewSize(-3.5);f.set(-.2,0,r.time*.03+(y()?Math.PI/2:0),"XYZ"),S.quat.setFromEuler(f),S.scale=Math.min(1,(y()?w.h:w.w)/16)}),u.forEach((S,w)=>{t.place("feat"+w,D=>{D.pos.set(S.x,S.y,0),D.scale=Math.min(S.w/3.4,S.h/3),f.set(.18+h.y*-.12,-.32+Math.sin(r.time*.4+w)*.22+h.x*.2,0,"XYZ"),D.quat.setFromEuler(f)})}),t.place("ai",S=>{S.pos.set(l.x,l.y,0),S.scale=Math.min(l.w,l.h)/3.9,f.set(.3,r.time*.12,.1,"XYZ"),S.quat.setFromEuler(f)}),t.place("inst",S=>{S.pos.set(c.x,c.y-c.h*.04,0),S.scale=Math.min(c.w/6.4,c.h/3.4)*.95,f.set(.42-h.y*.1,r.time*.05+h.x*.25,0,"XYZ"),S.quat.setFromEuler(f)}),t.place("cta",S=>{S.pos.set(a.x,a.y,0),S.scale=a.h*1/2.3;let w=r.time;f.set(.08-h.y*.2+Math.sin(w*.5)*.04,-.15+h.x*.5+Math.sin(w*.3)*.08+p.spin,0,"YXZ"),S.quat.setFromEuler(f)});let M=S=>{let w=g2[S];if(!w||!e)return;let D=e.uniforms;gt.to(D.uWarmAmt,{value:w.warm,duration:1.6,ease:"power2.inOut",overwrite:!0}),gt.to(D.uColdAmt,{value:w.cold,duration:1.6,ease:"power2.inOut",overwrite:!0}),gt.to(D.uWarmPos.value,{x:w.wp[0],y:w.wp[1],duration:2.4,ease:"power2.inOut",overwrite:!0}),gt.to(D.uColdPos.value,{x:w.cp[0],y:w.cp[1],duration:2.4,ease:"power2.inOut",overwrite:!0})};le("[data-section]").forEach((S,w)=>{Lt.create({trigger:S,start:"top 55%",end:"bottom 55%",refreshPriority:-10,onToggle:D=>{D.isActive&&(p.section=S.dataset.section,M(S.dataset.tone),document.dispatchEvent(new CustomEvent("section",{detail:{name:S.dataset.section,index:w,el:S}})))}})}),M("hero");let A=()=>s.offsetHeight;if(document.addEventListener("shards-flash",S=>{gt.fromTo(t.uniforms.uFlash,{value:S.detail||.4},{value:0,duration:1.1,ease:"power3.out",overwrite:!0})}),!n){let S=()=>{let w=t.uniforms.uBlink,D=gt.timeline({onComplete:()=>gt.delayedCall(2.5+Math.random()*4,S)});D.to(w,{value:1,duration:.09,ease:"power2.in"}).to(w,{value:0,duration:.16,ease:"power2.out"}),Math.random()<.3&&D.to(w,{value:1,duration:.08,ease:"power2.in"},"+=0.12").to(w,{value:0,duration:.15,ease:"power2.out"})};gt.delayedCall(4.5,S)}let x=!1;return window.addEventListener("pointermove",()=>x=!0,{once:!0,passive:!0}),{state:p,setFeature(S){p.feature=S},intro(){if(n){t.A={form:Yt.FOX,place:"hero"},t.B={form:Yt.FOX,place:"hero"},t.mix=1,t.mode="tween",t.tween=null,t.uniforms.uBreath.value=0,p.intro=!1;return}p.intro=!0,t.A={form:Yt.SCATTER,place:"identity"},t.B={form:Yt.SCATTER,place:"identity"},t.mix=1,t.go(Yt.FOX,"hero",{duration:2.8,stagger:.75,order:[.3,.7,0],swirl:1.6}),t.tween.onDone=()=>{p.intro=!1},gt.fromTo(t.uniforms.uFlash,{value:0},{value:.5,duration:.5,delay:2.4,yoyo:!0,repeat:1,ease:"sine.inOut"})},frame(){if(v(b),n){let V=p.section==="Start"||p.section==="Contact",P=V?"cta":"hero";t.A=t.B={form:Yt.FOX,place:P},t.mix=1,t.tween=null,p.heroP=0,t.mesh.visible=V||window.scrollY<s.offsetHeight*.9;return}let S=1/60;if(!p.dragging){p.spin+=p.spinVel*S,p.spinVel*=.94;let V=Math.round(p.spin/(Math.PI*2))*Math.PI*2;Math.abs(p.spinVel)<.6&&(p.spin+=(V-p.spin)*.04)}let w=t.uniforms;w.uBreath.value=.012+Math.min(.05,Math.abs(p.spinVel)*.004);let D=t.B.form===Yt.FOX||t.A.form===Yt.FOX&&t.mix<.5;g((h.x+1)/2*r.w,(1-h.y)/2*r.h,w.uPointer.value);let R=D&&x?i?.15:.32:0;w.uHover.value+=(R-w.uHover.value)*.08,w.uHoverR.value=p.fox.scale*.55;let N=A(),I=window.scrollY;if(p.heroP=yr(I/(N*.85)),p.fox.visible=I<N*1.2,p.intro)return;if(I<N*.98){let V=t.B.form===Yt.CLOUD&&t.B.place==="cloud",P=t.B.form===Yt.FOX&&t.B.place==="hero";t.mode==="scrub"||(V||P)&&t.settled?(t.scrub(Yt.FOX,"hero",Yt.CLOUD,"cloud",p.heroP,{from:P?0:1,stagger:.7,order:[.4,0,.6],swirl:1.3}),t.uniforms.uGlow.value=.55-p.heroP*.33):V||t.go(Yt.CLOUD,"cloud",{duration:1.3,stagger:.4});return}let F=By[p.section];if(p.section==="Features"&&(F=[m2[p.feature]??Yt.COPY,"feat"+p.feature,{duration:1.5,stagger:.55,swirl:1.1}]),p.section==="Intro"&&(F=By.Why),!F)return;let[U,B,Y]=F;(t.B.form!==U||t.B.place!==B||t.mode==="scrub")&&(t.go(U,B,Y),gt.to(t.uniforms.uGlow,{value:Y.glow??.55,duration:Y.duration??1.5,ease:"power2.inOut",overwrite:!0}))}}}function zy({word:r,chips:t,floor:e,director:i}){let n=at(".hero"),s=le(".hero__words",n),o=at(".pill",n),a=at(".hero__bottom",n),l=le(".hero__meta li",n),c=at(".hero__scroll",n),u=at("#nav");Wt.reduced||(gt.set(s,{yPercent:118,rotate:3,transformOrigin:"0% 100%"}),gt.set([o,a,c],{opacity:0,y:24}),gt.set(l,{opacity:0,y:14}),gt.set(u,{yPercent:-100,opacity:0}));let h=!1,f=()=>{if(h||Wt.reduced)return;h=!0;let d={opacity:1,y:0,immediateRender:!1},p=gt.timeline({scrollTrigger:{trigger:n,start:"top top",end:"bottom top",scrub:!0}});p.fromTo(s[0],{yPercent:0,autoAlpha:1,filter:"blur(0px)",immediateRender:!1},{yPercent:-60,autoAlpha:0,filter:"blur(8px)",ease:"power1.in",duration:.6},.05),p.fromTo(s[1],{yPercent:0,autoAlpha:1,filter:"blur(0px)",immediateRender:!1},{yPercent:-40,autoAlpha:0,filter:"blur(8px)",ease:"power1.in",duration:.6},.1),p.fromTo(a,d,{y:-60,opacity:0,ease:"power1.in",duration:.45},0),p.fromTo([o,c,...l],d,{opacity:0,duration:.25},0)};return e&&document.addEventListener("fox-poke",()=>gt.fromTo(e.uniforms.uPulse,{value:1.2},{value:0,duration:2.4,ease:"power2.out",overwrite:!0})),{intro(){if(Wt.reduced){r&&(r.uniforms.uReveal.value=1),t&&(t.reveal=1);return}let d=gt.timeline({defaults:{ease:"expo.out"}});return r&&d.to(r.uniforms.uReveal,{value:1,duration:2.6,ease:"power2.inOut"},.2),e&&d.fromTo(e.uniforms.uFade,{value:0},{value:1,duration:2.4,ease:"power2.out"},.4),t&&d.to(t,{reveal:1,duration:2.2,ease:"power3.out"},2),d.to(s,{yPercent:0,rotate:0,duration:1.5,stagger:.12},1.15),d.to(o,{opacity:1,y:0,duration:1.2},1.5),d.to(a,{opacity:1,y:0,duration:1.3},1.6),d.to(l,{opacity:1,y:0,duration:1,stagger:.07},1.75),d.to(c,{opacity:1,y:0,duration:1},2.1),d.to(u,{yPercent:0,opacity:1,duration:1.3},1.4),d.call(f),d},frame(){let d=i?i.state.heroP:0;r&&(r.uniforms.uOut.value=$n(.02,.75,d)),t&&(t.out=$n(0,.65,d)),e&&(e.uniforms.uAmp.value=1+d*2.5,e.uniforms.uFade2.value=1-$n(.05,.6,d))}}}function Hy(r,{color:t="#f3f5ff",back:e="#ff8a3d",backAmt:i=.32,repeat:n=1}={}){return new ae({uniforms:{uTex:{value:r},uOffset:{value:0},uRepeat:{value:n},uColor:{value:new vt(t)},uBack:{value:new vt(e)},uBackAmt:{value:i},uFade:{value:1}},side:Pi,transparent:!0,depthWrite:!1,vertexShader:`
      varying vec2 vUv; varying float vSide;
      varying vec3 vN; varying vec3 vV;
      void main() {
        vUv = uv;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vN = normalize(normalMatrix * normal);
        vV = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uTex; uniform float uOffset; uniform float uRepeat;
      uniform vec3 uColor; uniform vec3 uBack; uniform float uBackAmt; uniform float uFade;
      varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main() {
        vec2 uv = vec2(fract(vUv.x * uRepeat + uOffset), vUv.y);
        if (!gl_FrontFacing) uv.x = fract(-vUv.x * uRepeat - uOffset + 0.5);
        vec4 t = texture2D(uTex, uv);
        float a = t.a;
        vec3 tc = t.rgb;
        float facing = abs(dot(normalize(vN), normalize(vV)));
        vec3 col;
        float alpha;
        if (gl_FrontFacing) {
          col = tc * uColor * (0.75 + 0.25 * facing);
          alpha = a * smoothstep(0.0, 0.35, facing);
        } else {
          col = mix(tc, uBack, 0.65);
          alpha = a * uBackAmt * smoothstep(0.0, 0.4, facing);
        }
        gl_FragColor = vec4(col, alpha * uFade);
      }`})}var pd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.group=new Ve,this.object=this.group,this.spin=0;let n=R0(["SELECT","FROM","LEFT JOIN","WHERE","GROUP BY","HAVING","ORDER BY","PL/SQL","XLSX"],{height:i?160:256,font:Le.display,weight:700}),s=R0(["SQL HARMONY","ORACLE FUSION CLOUD","WEB + WINDOWS","FREE TO START","CHATGPT INSIDE"],{height:i?96:128,font:Le.mono,weight:500,color:"#ffb36b",sepColor:"#7d9bff"}),o=3.3,a=.62,l=Math.max(1,Math.round(2*Math.PI*o/a/n.aspect));this.outer=new Jt(new Na(o,o,a,160,1,!0),Hy(n.texture,{repeat:l}));let c=2.35,u=.2,h=Math.max(1,Math.round(2*Math.PI*c/u/s.aspect));this.inner=new Jt(new Na(c,c,u,128,1,!0),Hy(s.texture,{repeat:h,color:"#ffc28a",back:"#6f8cff",backAmt:.22}));let f=new Jt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:Ze,uniforms:{uColor:{value:new vt("#ff7a2a")},uAmt:{value:.22}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uAmt; varying vec2 vUv; void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*4.0)*smoothstep(1.0, 0.55, d)*uAmt; gl_FragColor = vec4(uColor*a, 1.0); }"}));f.scale.set(9,5,1),f.position.z=-1.5,this.glow=f,this.tilt=new Ve,this.tilt.rotation.set(.32,0,-.1),this.inner.rotation.x=-.18,this.inner.rotation.z=.22,this.tilt.add(this.outer,this.inner),this.group.add(f,this.tilt),this.group.visible=!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible)return;let n=this.world.scrollVel||0;this.spin+=e*(.06+Math.min(.9,Math.abs(n)/2500))*(n<-30?-1:1),this.outer.material.uniforms.uOffset.value=this.spin,this.inner.material.uniforms.uOffset.value=-this.spin*1.3+t*.01;let s=Math.min(i.w/8.4,i.h/4.3);this.group.position.set(i.x,i.y-i.h*.06,0),this.group.scale.setScalar(s);let o=i.progress;this.tilt.rotation.x=.55-o*.45+this.world.pointer.y*.08,this.tilt.rotation.y=this.world.pointer.x*.12,this.tilt.rotation.z=-.1+Math.sin(t*.3)*.02}};var _2=`
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0); const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy)); vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz); vec3 l=1.0-g; vec3 i1=min(g.xyz,l.zxy); vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx; vec3 x2=x0-i2+C.yyy; vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857; vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z); vec4 x_=floor(j*ns.z); vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy; vec4 y=y_*ns.x+ns.yyyy; vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy); vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0; vec4 s1=floor(b1)*2.0+1.0; vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy; vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x); vec3 p1=vec3(a0.zw,h.y); vec3 p2=vec3(a1.xy,h.z); vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m=max(0.5-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0); m=m*m;
  return 105.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`,md=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.group=new Ve,this.object=this.group,this.think=0,this.ok=0,this.uniforms={uTime:{value:0},uThink:{value:0},uOk:{value:0},uPointer:{value:new It}};let n=new Oa(1,i?28:56),s=new ae({uniforms:this.uniforms,vertexShader:`
        ${_2}
        uniform float uTime; uniform float uThink; uniform vec2 uPointer;
        varying vec3 vN; varying vec3 vV; varying float vD; varying vec3 vP;
        float field(vec3 p) {
          float sp = 0.22 + uThink * 0.5;
          float n = snoise(p * 1.25 + vec3(0.0, uTime * sp, 0.0)) * 0.55;
          n += snoise(p * 2.6 - vec3(uTime * sp * 1.3)) * 0.22;
          n += snoise(p * 5.0 + vec3(uTime * sp * 2.0)) * 0.08 * (0.4 + uThink);
          return n;
        }
        void main() {
          vec3 p = position;
          float amp = 0.1 + uThink * 0.12;
          float d = field(p) * amp;
          // pointer pushes a gentle bulge
          d += max(0.0, dot(normalize(p), normalize(vec3(uPointer, 0.6)))) * 0.06;
          vec3 disp = p * (1.0 + d);
          // normal by finite differences on the displaced sphere
          vec3 t1 = normalize(cross(p, vec3(0.0, 1.0, 0.0001)));
          vec3 t2 = normalize(cross(p, t1));
          float e = 0.02;
          vec3 pa = normalize(p + t1 * e); vec3 pb = normalize(p + t2 * e);
          vec3 da = pa * (1.0 + field(pa) * amp);
          vec3 db = pb * (1.0 + field(pb) * amp);
          vec3 n = normalize(cross(da - disp, db - disp));
          if (dot(n, p) < 0.0) n = -n;
          vN = normalize(normalMatrix * n);
          vec4 mv = modelViewMatrix * vec4(disp, 1.0);
          vV = normalize(-mv.xyz);
          vD = d;
          vP = p;
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        uniform float uTime; uniform float uThink; uniform float uOk;
        varying vec3 vN; varying vec3 vV; varying float vD; varying vec3 vP;
        vec3 pal(float t) {
          // fox orange \u2192 amber \u2192 violet \u2192 data blue
          vec3 a = vec3(1.0, 0.42, 0.1);
          vec3 b = vec3(1.0, 0.66, 0.3);
          vec3 c = vec3(0.45, 0.33, 1.0);
          vec3 d = vec3(0.22, 0.58, 1.0);
          t = fract(t);
          if (t < 0.33) return mix(a, b, t / 0.33);
          if (t < 0.66) return mix(b, c, (t - 0.33) / 0.33);
          return mix(c, d, (t - 0.66) / 0.34);
        }
        void main() {
          vec3 n = normalize(vN);
          float f = 1.0 - max(0.0, dot(n, normalize(vV)));
          float fr = pow(f, 2.2);
          float band = vD * 2.6 + fr * 0.9 + vP.y * 0.25 + uTime * 0.04;
          vec3 irid = pal(band);
          vec3 core = vec3(0.025, 0.03, 0.07);
          vec3 col = mix(core, irid * 0.4, 0.18 + vD * 1.2);
          col += irid * fr * (1.25 + uThink * 1.6);
          // soft key light from top-left
          float l = max(0.0, dot(n, normalize(vec3(-0.5, 0.7, 0.6))));
          col += vec3(1.0, 0.85, 0.75) * pow(l, 18.0) * 0.9;
          col += pal(band + 0.5) * pow(l, 3.0) * 0.12;
          col = mix(col, vec3(0.2, 1.0, 0.65) * (0.4 + fr * 1.6), uOk * 0.75);
          gl_FragColor = vec4(col, 1.0);
        }`});this.sphere=new Jt(n,s);let o=new yo(new pc(new Oa(1.42,2)),new La({color:new vt("#8fa8ff"),transparent:!0,opacity:.16,blending:Ze,depthWrite:!1}));this.lattice=o;let a=new Jt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:Ze,uniforms:{uAmt:{value:.55},uThink:this.uniforms.uThink,uOk:this.uniforms.uOk},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uAmt; uniform float uThink; uniform float uOk; varying vec2 vUv;
          void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*3.0) * smoothstep(1.0, 0.55, d) * (uAmt + uThink*0.35);
          vec3 c = mix(vec3(1.0,0.35,0.25), vec3(0.45,0.4,1.0), smoothstep(0.0,1.0,d));
          c = mix(c, vec3(0.2,1.0,0.6), uOk*0.7);
          gl_FragColor = vec4(c*a*0.55, 1.0); }`}));a.scale.set(5.2,5.2,1),a.position.z=-1.2,this.halo=a,this.group.add(a,this.sphere,o),this.group.visible=!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible)return;let n=this.uniforms;n.uTime.value=t,n.uThink.value+=(this.think-n.uThink.value)*Math.min(1,e*3),n.uOk.value+=(this.ok-n.uOk.value)*Math.min(1,e*4),n.uPointer.value.lerp(this.world.pointer,.05);let s=Math.min(i.w,i.h)*.3;this.group.position.set(i.x,i.y,0),this.group.scale.setScalar(s*(1+Math.sin(t*1.3)*.012+n.uThink.value*.04)),this.sphere.rotation.y=t*.12,this.lattice.rotation.set(t*.05,-t*.08,0),this.lattice.material.opacity=.12+n.uThink.value*.2}};var P0=["DEV1","DEV2","TEST","UAT","PROD"],x2=`
  varying float vT;
  attribute float aT;
  void main() { vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,v2=`
  uniform float uTime; uniform float uActive; uniform vec3 uColor; uniform vec3 uHot; uniform float uFade;
  varying float vT;
  void main() {
    float base = 0.12 + uActive * 0.25;
    float speed = 0.35 + uActive * 0.6;
    float k = fract(vT * 3.0 - uTime * speed);
    float packet = smoothstep(0.0, 0.08, k) * smoothstep(0.2, 0.08, k);
    float back = fract((1.0 - vT) * 2.0 - uTime * speed * 0.7);
    float packet2 = (smoothstep(0.0, 0.06, back) * smoothstep(0.14, 0.06, back)) * 0.5;
    vec3 col = mix(uColor, uHot, uActive) * (base + (packet + packet2) * (0.8 + uActive * 1.6));
    float ends = smoothstep(0.0, 0.06, vT) * smoothstep(1.0, 0.92, vT);
    gl_FragColor = vec4(col * ends * uFade, 1.0);
  }`,gd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.group=new Ve,this.object=this.group,this.active=1,this.tilt=new Ve,this.group.add(this.tilt),this.nodes=[],this.time=0;let n=new yn({color:"#ff8a3d",emissive:"#ff5a1a",emissiveIntensity:.9,roughness:.25,metalness:.1,clearcoat:1,flatShading:!0});this.hub=new Jt(new gc(.34,0),n),this.hubGlow=Vy("#ff6a1a",1.2),this.hubGlow.scale.setScalar(2.2);let s=Gy("SQL HARMONY",{color:"#ffd2ad",size:52});s.position.set(0,.66,0),s.scale.multiplyScalar(.27),this.hubLabel=s,this.tilt.add(this.hubGlow,this.hub,s),this._q=new Si;let o=new Cs(.11,24,16),a=new Cs(.42,12,8),l=new Ke({visible:!1});this.hits=[],this.hovered=-1,this.ray=new cr;let c=new Ds(.2,.006,6,64);P0.forEach((u,h)=>{let f=h/P0.length*Math.PI*2+.35,d=2.35+h%2*.25,p=new O(Math.cos(f)*d,h%2?.28:-.12,Math.sin(f)*d*.9),_=new Ke({color:new vt("#8fb0ff")}),m=new Jt(o,_);m.position.copy(p);let g=new Jt(a,l);g.position.copy(p),g.userData.index=h,this.hits.push(g),this.tilt.add(g);let v=new Jt(c,new Ke({color:"#8fb0ff",transparent:!0,opacity:.6,blending:Ze,depthWrite:!1}));v.position.copy(p);let b=Vy("#4d7cff",.9);b.position.copy(p),b.scale.setScalar(.9);let y=Gy(u,{color:"#e6ecff",size:56});y.position.copy(p).add(new O(0,.34,0)),y.scale.multiplyScalar(.3);let M=p.clone().multiplyScalar(.5).add(new O(0,.9+h%2*.3,0)),A=new mc(new O(0,0,0),M,p).getPoints(80),x=new Ce().setFromPoints(A);x.setAttribute("aT",new we(new Float32Array(A.map((R,N)=>N/(A.length-1))),1));let S=new ae({uniforms:{uTime:{value:0},uActive:{value:0},uColor:{value:new vt("#5f86ff")},uHot:{value:new vt("#ffb36b")},uFade:{value:1}},vertexShader:x2,fragmentShader:v2,transparent:!0,depthWrite:!1,blending:Ze}),w=new vo(x,S),D=new vo(x,S);D.position.y=.012,this.tilt.add(w,D,b,m,v,y),this.nodes.push({node:m,ring:v,glow:b,label:y,beamMat:S,mat:_,phase:h*1.3,act:h===this.active?1:0})});for(let u=0;u<2;u++){let h=new Jt(new Ds(1.1+u*.55,.004,4,160),new Ke({color:u?"#4d7cff":"#ff8a3d",transparent:!0,opacity:.25,blending:Ze,depthWrite:!1}));h.rotation.x=Math.PI/2,this.tilt.add(h)}this.tilt.rotation.x=.42,this.group.visible=!1}setActive(t){this.active=t}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible){this.hovered>=0&&(this.hovered=-1,document.dispatchEvent(new CustomEvent("cursor-label",{detail:null})));return}this.ray.setFromCamera(this.world.pointerRaw,this.world.camera);let n=this.ray.intersectObjects(this.hits,!1)[0],s=n?n.object.userData.index:-1;s!==this.hovered&&(this.hovered=s,document.dispatchEvent(new CustomEvent("cursor-label",{detail:s>=0?P0[s]:null})));let o=Math.min(i.w/6.4,i.h/3.4);this.group.position.set(i.x,i.y-i.h*.04,0),this.group.scale.setScalar(o),this.tilt.rotation.y=t*.05+this.world.pointer.x*.25,this.tilt.rotation.x=.42-this.world.pointer.y*.1,this.hub.rotation.y=t*.6,this.hub.rotation.x=Math.sin(t*.5)*.3,this.tilt.updateWorldMatrix(!0,!1);let a=this.tilt.getWorldQuaternion(this._q).invert().multiply(this.world.camera.quaternion);this.hubLabel.quaternion.copy(a),this.nodes.forEach((l,c)=>{let u=c===this.active?1:0;l.act+=(u-l.act)*Math.min(1,e*4);let h=1+Math.sin(t*2+l.phase)*.06;l.node.scale.setScalar((1+l.act*.6)*h),l.ring.scale.setScalar(1+l.act*.9+Math.sin(t*1.5+l.phase)*.08),l.ring.quaternion.copy(a),l.mat.color.set(l.act>.5?"#ffd2ad":"#8fb0ff").lerp(new vt("#ffffff"),l.act*.3),l.ring.material.color.set(l.act>.5?"#ff9a50":"#8fb0ff"),l.glow.material.opacity=.45+l.act*.5,l.glow.scale.setScalar(.7+l.act*.6),l.label.quaternion.copy(a),l.label.material.opacity=.55+l.act*.45,l.beamMat.uniforms.uTime.value=t+l.phase,l.beamMat.uniforms.uActive.value=l.act})}};function Vy(r,t){let e=new Jt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:Ze,uniforms:{uColor:{value:new vt(r)},opacity:{value:t}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc;
        gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float opacity; varying vec2 vUv;
        void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*5.0) * smoothstep(1.0, 0.6, d) * opacity; gl_FragColor = vec4(uColor*a, 1.0); }`}));return Object.defineProperty(e.material,"opacity",{get(){return e.material.uniforms.opacity.value},set(i){e.material.uniforms&&(e.material.uniforms.opacity.value=i)}}),e}function Gy(r,{color:t,size:e}){let{texture:i,aspect:n}=Oy(r,{size:e,color:t,font:Le.mono,weight:600,bg:"rgba(10,14,30,0.55)",border:"rgba(150,170,255,0.35)"});return new Jt(new Fe(n,1),new Ke({map:i,transparent:!0,depthWrite:!1,toneMapped:!1}))}var Gc=new O;function Qn(r,t,e,i,n,s){let o=2*Math.PI*n/4,a=Math.max(s-2*n,0),l=Math.PI/4;Gc.copy(t),Gc[i]=0,Gc.normalize();let c=.5*o/(o+a),u=1-Gc.angleTo(r)/l;return Math.sign(Gc[e])===1?u*c:a/(o+a)+c+c*(1-u)}var ts=class r extends As{constructor(t=1,e=1,i=1,n=2,s=.1){let o=n*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new O,c=new O,u=new O(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new O,m=.5/o;for(let g=0,v=0;g<h.length;g+=3,v+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[v+0]=Qn(_,c,"z","y",s,i),d[v+1]=1-Qn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),d[v+0]=1-Qn(_,c,"z","y",s,i),d[v+1]=1-Qn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),d[v+0]=1-Qn(_,c,"x","z",s,t),d[v+1]=Qn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),d[v+0]=1-Qn(_,c,"x","z",s,t),d[v+1]=1-Qn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),d[v+0]=1-Qn(_,c,"x","y",s,t),d[v+1]=1-Qn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),d[v+0]=Qn(_,c,"x","y",s,t),d[v+1]=1-Qn(_,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};function y2(r,t){let e=new ts(r,.5,t,5,.12),i=e.attributes.position;for(let n=0;n<i.count;n++){let s=i.getY(n),o=(s+.25)/.5,a=1-o*.14;i.setX(n,i.getX(n)*a),i.setZ(n,i.getZ(n)*a-o*.04),o>.98&&i.setY(n,s-.02*(1-(i.getX(n)**2+i.getZ(n)**2)/(r*r*.25)))}return e.computeVertexNormals(),e}function S2(r,{w:t=256,h:e=256,color:i="#ffb36b",size:n=120,font:s=Le.display,weight:o=700,sub:a=""}={}){let l=document.createElement("canvas");l.width=t,l.height=e;let c=l.getContext("2d");return c.clearRect(0,0,t,e),c.fillStyle=i,c.textAlign="center",c.textBaseline="middle",c.font=`${o} ${n}px ${s}`,c.fillText(r,t/2,e/2+(a?-n*.1:n*.04)),a&&(c.font=`500 ${n*.32}px ${Le.mono}`,c.globalAlpha=.7,c.fillText(a,t/2,e/2+n*.55)),Qr(l)}var M2=[{t:"S",x:-1.55,y:.55,z:.2,rx:.5,ry:.25,rz:.18},{t:"Q",x:-.35,y:1.05,z:-.4,rx:.42,ry:-.2,rz:-.12},{t:"L",x:.95,y:.6,z:.1,rx:.55,ry:.15,rz:.1},{t:"Ctrl",x:-1.2,y:-.75,z:.5,rx:.62,ry:.3,rz:-.2,w:1.3,size:70},{t:"RUN",x:.55,y:-.8,z:.6,rx:.5,ry:-.25,rz:.08,w:1.9,accent:!0,size:92,sub:"SUBMIT"},{t:"Tab",x:1.95,y:-.1,z:-.6,rx:.4,ry:-.35,rz:-.22,size:78}],_d=class{constructor(t,e){this.world=t,this.anchor=e,this.group=new Ve,this.object=this.group,this.keys=[],this.seqT=0,this.ray=new cr;let i=new yn({color:"#1d2130",roughness:.46,metalness:.05,clearcoat:.5,clearcoatRoughness:.35,sheen:.35,sheenRoughness:.5,sheenColor:new vt("#ff9a50")}),n=new yn({color:"#ff6b1a",roughness:.32,metalness:0,clearcoat:1,clearcoatRoughness:.12,emissive:"#ff4a0a",emissiveIntensity:.15});for(let s of M2){let o=s.w||1,a=new Ve;a.position.set(s.x,s.y,s.z),a.rotation.set(s.rx,s.ry,s.rz);let l=new Jt(y2(o,1),s.accent?n.clone():i),c=new Jt(new Fe(o*.74,.74),new Ke({map:S2(s.t,{w:Math.round(256*o),color:s.accent?"#1a0a03":"#ffffff",size:s.size||120,sub:s.sub}),color:s.accent?new vt(1,1,1):new vt(2.4,1.25,.55),transparent:!0,depthWrite:!1,toneMapped:!1}));c.rotation.x=-Math.PI/2,c.position.y=.262,c.position.z=-.03,c.renderOrder=3,l.add(c),a.add(l),this.group.add(a),this.keys.push({holder:a,body:l,base:a.position.clone(),press:0,target:0,phase:Math.random()*6,accent:!!s.accent,t:s.t})}this.run=this.keys.find(s=>s.accent),this.group.visible=!1}click(){return this.hovered?(this.hovered.kick=1.2,!0):!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible){this.hovered&&(this.hovered=null,document.dispatchEvent(new CustomEvent("cursor-label",{detail:null})));return}let n=Math.min(i.w/5.2,i.h/3.6);this.group.position.set(i.x,i.y,0),this.group.scale.setScalar(n),this.group.rotation.y=this.world.pointer.x*.25+Math.sin(t*.2)*.08,this.group.rotation.x=-this.world.pointer.y*.15,this.seqT=(this.seqT+e)%4.2;let s=["S","Q","L","RUN"],o=[.4,.75,1.1,1.9];for(let u of this.keys){let h=s.indexOf(u.t),f=0;if(h>=0){let d=this.seqT-o[h];d>0&&d<.26&&(f=Math.sin(d/.26*Math.PI))}u.target=Math.max(f,u.hover||0)}this.ray.setFromCamera(this.world.pointerRaw,this.world.camera),this.bodies||(this.bodies=this.keys.map(u=>u.body));let l=this.ray.intersectObjects(this.bodies,!1)[0]?.object,c=this.keys.find(u=>u.body===l)||null;c!==this.hovered&&(this.hovered=c,document.dispatchEvent(new CustomEvent("cursor-label",{detail:c?"Press":null})));for(let u of this.keys){u.kick=Math.max(0,(u.kick||0)-e*3),u.target=Math.max(u.target,u.kick),u.hover=u.body===l?.35:0,u.press+=(u.target-u.press)*Math.min(1,e*14);let h=Math.sin(t*.9+u.phase)*.06;u.holder.position.set(u.base.x,u.base.y+h,u.base.z),u.body.position.y=-u.press*.16,u.body.scale.setScalar(1-u.press*.03),u.accent&&(u.body.material.emissiveIntensity=.15+u.press*1.6)}}};var b2=[[["k","SELECT"],["t"," h.invoice_num, h.invoice_amount,"]],[["t","       s.vendor_name, h.invoice_date"]],[["k","FROM"],["t","   ap_invoices_all h"]],[["k","JOIN"],["t","   poz_suppliers_v s"]],[["k","  ON"],["t","   s.vendor_id = h.vendor_id"]],[["k","WHERE"],["t","  h.invoice_amount > "],["n","1000"]]],Wy=["INVOICE_ID","INVOICE_NUM","INVOICE_DATE","INVOICE_AMOUNT","VENDOR_ID","PAYMENT_STATUS_FLAG"],w2=["AP_INVOICES_ALL","AP_INVOICE_LINES_ALL","POZ_SUPPLIERS_V","GL_JE_HEADERS","GL_JE_LINES","PER_ALL_PEOPLE_F","HZ_PARTIES","RA_CUSTOMER_TRX_ALL"],I0=[["INV-26-1187","41 137.24","Acme Paper Ltd","2026-09-30"],["INV-26-1186","11 205.80","Northwind GmbH","2026-09-30"],["NW-88213","8 952.60","Northwind GmbH","2026-09-29"],["INV-26-1179","4 582.03","Globex Corp","2026-09-29"],["GX-55120","1 619.20","Globex Corp","2026-09-28"],["AC-00932","1 634.00","Acme Paper Ltd","2026-09-27"],["INV-26-1160","2 388.72","Initech LLC","2026-09-26"]],F0=class{constructor(t,e){this.w=t,this.h=e,this.c=document.createElement("canvas"),this.c.width=t,this.c.height=e,this.g=this.c.getContext("2d"),this.tex=Qr(this.c,{mips:!1,aniso:8}),this.t=0,this.chars=[],b2.forEach((i,n)=>{for(let[s,o]of i)for(let a of o)this.chars.push([s,a,n]);this.chars.push(["t",`
`,n])}),this.draw(0)}draw(t){let{g:e,w:i,h:n}=this,s=i/1280;e.setTransform(s,0,0,s,0,0);let o=1280,a=800;e.fillStyle="#0b0e17",e.fillRect(0,0,o,a),e.fillStyle="#111522",e.fillRect(0,0,o,40),this.drawFox(e,14,8,24),e.font=`600 15px ${Le.body}`,e.fillStyle="#e6eaf7",e.textBaseline="middle",e.fillText("SQLHarmonyDesk",48,21),e.fillStyle="#6f7896",e.fillText("\u2014  DEV2",178,21),e.strokeStyle="#8a93ad",e.lineWidth=1.5,e.beginPath(),e.moveTo(o-132,21),e.lineTo(o-120,21),e.stroke(),e.strokeRect(o-84,15,11,11),e.beginPath(),e.moveTo(o-38,15),e.lineTo(o-27,26),e.moveTo(o-27,15),e.lineTo(o-38,26),e.stroke(),e.fillStyle="#0e1220",e.fillRect(0,40,270,a-72),e.fillStyle="#6f7896",e.font=`600 12px ${Le.mono}`,e.fillText("TABLES",20,66),Ao(e,16,80,238,30,8),e.fillStyle="#161b2c",e.fill(),e.fillStyle="#8a93ad",e.font=`13px ${Le.mono}`,e.fillText("\u2315  ap_inv",28,96);let l=132;w2.forEach((D,R)=>{let N=R===0;e.fillStyle=N?"#ffb36b":"#c3cae0",e.font=`${N?600:400} 13px ${Le.mono}`,e.fillText(`${N?"\u25BE":"\u25B8"} ${D}`,20,l),l+=26,N&&(Wy.forEach((I,F)=>{let U=Math.floor(t*.8)%Wy.length===F;U&&(e.fillStyle="rgba(255,122,42,0.14)",e.fillRect(12,l-12,246,22)),e.fillStyle=U?"#ffe3c6":"#8a93ad",e.font=`12px ${Le.mono}`,e.fillText(`   ${I.toLowerCase()}`,22,l),e.fillStyle="#4f5878",e.fillText(F===2?"DATE":F===3||F===0||F===4?"NUMBER":"VARCHAR2",196,l),l+=22}),l+=6)});let c=270;e.fillStyle="#0b0e17",e.fillRect(c,40,o-c,44);let u=["invoices.sql","suppliers.sql","+"],h=c+14;u.forEach((D,R)=>{e.font=`13px ${Le.body}`;let N=e.measureText(D).width+30;R===0&&(Ao(e,h,50,N,34,8),e.fillStyle="#151a2a",e.fill(),e.fillStyle="#ff8a3d",e.fillRect(h+10,82,N-20,2)),e.fillStyle=R===0?"#eef1fb":"#6f7896",e.fillText(D,h+15,68),h+=N+6});let f=(D,R,N,I)=>{e.font=`600 13px ${Le.body}`;let F=e.measureText(R).width+26;return Ao(e,D,96,F,30,8),e.fillStyle=N,e.fill(),e.fillStyle=I,e.fillText(R,D+13,112),D+F+8},d=t%9>4.2&&t%9<4.9,p=c+14;p=f(p,d?"\u25A0  Running":"\u25B6  Run",d?"#b45309":"#16a34a","#fff"),p=f(p,"PL/SQL","#151a2a","#a9b2cf"),p=f(p,"Export CSV","#151a2a","#a9b2cf"),p=f(p,"Export XLSX","#151a2a","#a9b2cf"),e.font=`12px ${Le.mono}`,e.fillStyle="#34d99b",e.fillText("\u25CF",o-230,112),e.fillStyle="#a9b2cf",e.fillText("SSO \xB7 signed in",o-212,112);let _=136;e.fillStyle="#0d1120",e.fillRect(c,_,o-c,250);let m=Math.min(this.chars.length,Math.floor(t%9/4*this.chars.length)),g=0,v=0;e.font=`15px ${Le.mono}`;let b=e.measureText("M").width;for(let D=0;D<6;D++)e.fillStyle="#3d4566",e.fillText(String(D+1).padStart(2," "),c+14,_+26+D*26);let y=c+56,M=_+26;for(let D=0;D<m;D++){let[R,N]=this.chars[D];if(N===`
`){g++,v=0;continue}e.fillStyle=R==="k"?"#8fb0ff":R==="n"?"#ffb36b":"#e6eaf7",e.fillText(N,c+56+v*b,_+26+g*26),v++,y=c+56+v*b,M=_+26+g*26}if((Math.floor(t*2)%2===0||m<this.chars.length)&&(e.fillStyle="#ff8a3d",e.fillRect(y+1,M-11,2,20)),t%9>1.2&&t%9<2.6){let D=c+56+14*b,R=_+40;Ao(e,D,R,300,128,10),e.fillStyle="#161b2c",e.fill(),e.strokeStyle="rgba(150,170,255,0.25)",e.lineWidth=1,e.stroke(),["invoice_num        VARCHAR2","invoice_amount     NUMBER","invoice_date       DATE","invoice_currency   VARCHAR2"].forEach((N,I)=>{I===0&&(e.fillStyle="rgba(255,122,42,0.18)",e.fillRect(D+6,R+8+I*28,288,26)),e.fillStyle=I===0?"#ffe3c6":"#a9b2cf",e.font=`13px ${Le.mono}`,e.fillText(N,D+16,R+22+I*28)})}let A=_+262;e.fillStyle="#0b0e17",e.fillRect(c,A,o-c,a-A-32);let x=t%9>4.9?Math.min(I0.length,Math.floor((t%9-4.9)*8)):t%9<4.2?I0.length:0,S=[c+18,c+230,c+410,c+690];e.font=`600 12px ${Le.mono}`,e.fillStyle="#6f7896",["INVOICE_NUM","INVOICE_AMOUNT","VENDOR_NAME","INVOICE_DATE"].forEach((D,R)=>e.fillText(D,S[R],A+22)),e.fillStyle="rgba(150,170,255,0.12)",e.fillRect(c,A+36,o-c,1);for(let D=0;D<x;D++){let R=A+58+D*30;D%2&&(e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(c,R-16,o-c,30)),e.font=`13px ${Le.mono}`,I0[D].forEach((N,I)=>{e.fillStyle=I===1?"#ffd2ad":"#c3cae0",e.fillText(N,S[I],R)})}e.font=`12px ${Le.mono}`,e.fillStyle="#8a93ad",e.fillText("Rows 1\u201350 of 1 284",c+18,a-52);let w=1+Math.floor(t/3)%4;e.fillText(`\u2039  Page ${w} / 26  \u203A`,o-190,a-52),e.fillStyle="#111522",e.fillRect(0,a-32,o,32),e.fillStyle="#34d99b",e.fillText("\u25CF",14,a-15),e.fillStyle="#a9b2cf",e.fillText("Connected \xB7 DEV2 \xB7 Oracle Fusion Cloud",32,a-15),e.fillStyle="#6f7896",e.fillText("UTF-8   PL/SQL off   v0.5.0",o-250,a-15),this.tex.needsUpdate=!0}drawFox(t,e,i,n){this._fox||(this._fox=Yl({ry:-16,rx:8})),t.save(),t.translate(e+n/2,i+n/2),t.scale(n/2.4,n/2.4);for(let s of this._fox)t.beginPath(),t.moveTo(s.pts[0][0],s.pts[0][1]+.15),t.lineTo(s.pts[1][0],s.pts[1][1]+.15),t.lineTo(s.pts[2][0],s.pts[2][1]+.15),t.closePath(),t.fillStyle=Wl[s.role],t.fill();t.restore()}};function E2(){let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d"),e=Yl({ry:0,rx:0});t.translate(128,132),t.scale(92,92);for(let i of e){t.beginPath(),t.moveTo(...i.pts[0]),t.lineTo(...i.pts[1]),t.lineTo(...i.pts[2]),t.closePath();let n=.75+.25*i.n[2];t.fillStyle=`rgba(255,${Math.round(150*n)},${Math.round(90*n)},${.9})`,t.fill(),t.strokeStyle="rgba(255,200,150,0.6)",t.lineWidth=.008,t.stroke()}return Qr(r)}var xd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.mobile=i,this.group=new Ve,this.object=this.group,this.open=0,this.power=0,this.spin=0,this._acc=0;let n=new yn({color:"#2b303c",metalness:.82,roughness:.3,clearcoat:.35,clearcoatRoughness:.25}),s=new So({color:"#0c0e15",roughness:.55,metalness:.2}),o=new Jt(new ts(3.4,.12,2.3,4,.05),n);o.position.y=.06;let a=new Jt(new Fe(2.96,1.1),new So({color:"#141824",roughness:.7,metalness:.3}));a.rotation.x=-Math.PI/2,a.position.set(0,.1205,-.32);let l=new ts(.17,.03,.155,2,.02),c=14,u=5,h=new xo(l,s,c*u),f=new ue,d=0;for(let E=0;E<u;E++)for(let A=0;A<c;A++)f.makeTranslation(-1.33+A*.205,.128,-.76+E*.205),h.setMatrixAt(d++,f);let p=new Jt(new ts(1.25,.004,.78,2,.002),new yn({color:"#343a48",metalness:.6,roughness:.22,clearcoat:.8}));p.position.set(0,.121,.62),this.lid=new Ve,this.lid.position.set(0,.12,-1.15);let _=new Jt(new ts(3.4,2.26,.06,4,.03),n);_.position.set(0,1.13,-.03);let m=new Jt(new Fe(3.3,2.16),new yn({color:"#05060a",roughness:.15,metalness:0,clearcoat:1}));m.position.set(0,1.13,.0012);let g=i?960:1280;this.screen=new F0(g,Math.round(g*.625)),this.screenMat=new Ke({map:this.screen.tex,color:new vt(0,0,0),toneMapped:!1});let v=new Jt(new Fe(3.16,1.975),this.screenMat);v.position.set(0,1.15,.0025);let b=new Jt(new Fe(.62,.62),new Ke({map:E2(),transparent:!0,depthWrite:!1,toneMapped:!1,color:new vt(1.2,1.2,1.2)}));b.position.set(0,1.13,-.0615),b.rotation.y=Math.PI,this.lid.add(_,m,v,b);let y=new Jt(new Fe(6,4.4),new ae({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv; void main(){ vec2 d=(vUv-0.5)*vec2(1.0,1.3); float a=exp(-dot(d,d)*9.0)*0.75*smoothstep(0.5,0.38,length(vUv-0.5)); gl_FragColor=vec4(0.0,0.0,0.0,a);}"}));y.rotation.x=-Math.PI/2,y.position.y=-.01;let M=new Jt(new Fe(3.2,1.6),new ae({transparent:!0,depthWrite:!1,blending:Ze,uniforms:{uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform float uAmt; varying vec2 vUv; void main(){ float a = smoothstep(0.0,1.0,vUv.y) * (1.0 - abs(vUv.x-0.5)*1.6) * uAmt; gl_FragColor=vec4(vec3(0.35,0.45,0.9)*a*0.35,1.0);}"}));M.rotation.x=-Math.PI/2,M.position.set(0,.145,-.35),this.spill=M,this.body=new Ve,this.body.add(y,o,a,h,p,M,this.lid),this.body.position.set(0,-.9,.3),this.group.add(this.body),this.group.visible=!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible)return;let n=this.world.w<760?Math.min(i.w/5.3,i.h/3.7):Math.min(i.w/4.3,i.h/3.3);this.group.position.set(i.x,i.y,0),this.group.scale.setScalar(n);let s=this.open;this.lid.rotation.x=Kr.lerp(Math.PI/2-.02,-.26,s);let o=this.world.pointer.x,a=this.world.pointer.y;this.group.rotation.set(Kr.lerp(.62,.2,s)-a*.06,Kr.lerp(-.75,-.32,s)+o*.12+Math.sin(t*.3)*.03,Kr.lerp(.08,0,s)),this.body.position.y=-.9+Math.sin(t*.8)*.03;let l=s>.55?1:0;this.power+=(l-this.power)*Math.min(1,e*2.5);let c=this.power<.95?.85+Math.random()*.15:1,u=this.power*c;this.screenMat.color.setRGB(u*1.05,u*1.05,u*1.05),this.spill.material.uniforms.uAmt.value=this.power,this.power>.01&&(this._acc+=e,this._acc>(this.mobile?.125:.083)&&(this._acc=0,this.screen.draw(t)))}};var vd=class{constructor(t,e){this.world=t,this.anchor=e,this.group=new Ve,this.object=this.group,this.reveal=0,this.rings=[];let i=(s,o)=>new ae({transparent:!0,depthWrite:!1,blending:Ze,uniforms:{uTime:{value:0},uC1:{value:new vt(s)},uC2:{value:new vt(o)},uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform vec3 uC1; uniform vec3 uC2; uniform float uAmt; varying vec2 vUv;
          void main(){ float t = fract(vUv.x - uTime*0.08); float head = pow(t, 6.0);
          vec3 c = mix(uC2, uC1, t); gl_FragColor = vec4(c * (0.18 + head*1.6) * uAmt, 1.0); }`}),n=[[1.75,"#ffb36b","#ff5a1a",[1.2,.2,0]],[2.05,"#8fb0ff","#4d7cff",[.4,1,.3]],[2.35,"#ffd2ad","#ff6b1a",[-.6,.5,1.1]]];for(let[s,o,a,l]of n){let c=new Jt(new Ds(s,.012,8,220),i(o,a));c.rotation.set(...l),this.rings.push({m:c,speed:.12+s*.04,axis:new O(...l).normalize()}),this.group.add(c)}this.glow=new Jt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:Ze,uniforms:{uTime:{value:0},uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform float uAmt; varying vec2 vUv;
          void main(){ vec2 p = (vUv - 0.5) * 2.0; float d = length(p); float a = atan(p.y, p.x);
          float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 0.25), 6.0) * 0.6 + pow(0.5 + 0.5 * sin(a * 5.0 - uTime * 0.18), 8.0) * 0.5;
          float core = exp(-d * d * 7.0);
          float halo = exp(-d * 2.6) * rays * smoothstep(1.0, 0.2, d);
          vec3 c = vec3(1.0, 0.45, 0.14) * core * 0.9 + vec3(1.0, 0.6, 0.3) * halo * 0.45;
          gl_FragColor = vec4(c * uAmt * smoothstep(1.0, 0.7, d), 1.0); }`})),this.glow.scale.set(9,9,1),this.glow.position.z=-2.2,this.group.add(this.glow),this.group.visible=!1}update(t){let e=this.anchor;if(this.group.visible=e.visible,!e.visible)return;let i=Math.min(1,Math.max(0,(e.progress-.12)/.3));this.reveal+=(i-this.reveal)*.05;let n=e.h/2.3*.95;this.group.position.set(e.x,e.y,0),this.group.scale.setScalar(n*(.8+this.reveal*.2));for(let s of this.rings)s.m.rotateOnAxis(s.axis,.0025+s.speed*.004),s.m.material.uniforms.uTime.value=t*s.speed*3,s.m.material.uniforms.uAmt.value=this.reveal;this.glow.material.uniforms.uTime.value=t,this.glow.material.uniforms.uAmt.value=this.reveal*.8}};var Xy=[[["k","SELECT"],[""," invoice_id,"]],[["","       invoice_num,"]],[["","       invoice_date,"]],[["","       invoice_amount,"]],[["","       amount_paid,"]],[["","       invoice_currency_code"]],[["k","FROM"],["","   ap_invoices_all"]],[["k","WHERE"],["","  invoice_date >= "],["p",":p_from_date"]],[["","  "],["k","AND"],["","  org_id = "],["p",":p_org_id"]],[["k","ORDER BY"],[""," invoice_date "],["k","DESC"]]],T2=[["300000047112381","INV-26-1187","2026-09-30","41 137.24","0.00","USD"],["300000047112377","INV-26-1186","2026-09-30","11 205.80","11 205.80","USD"],["300000047112352","NW-88213","2026-09-29","8 952.60","0.00","EUR"],["300000047112349","INV-26-1179","2026-09-29","4 582.03","4 582.03","USD"],["300000047112330","GX-55120","2026-09-28","619.20","0.00","GBP"],["300000047112318","INV-26-1171","2026-09-28","298.42","298.42","USD"],["300000047112301","AC-00932","2026-09-27","1 634.00","0.00","EUR"],["300000047112296","INV-26-1165","2026-09-27","725.39","725.39","USD"],["300000047112288","NW-88197","2026-09-26","559.50","0.00","EUR"],["300000047112270","INV-26-1160","2026-09-26","388.72","388.72","USD"]];function Yy(r){let t=at(".workbench");if(!t)return()=>{};let e=at(".workbench__pin",t),i=at(".workbench__stage",t),n=at(".app-wrap",t),s=at(".app",t),o=at("#wb-code"),a=at(".ed__gutter",t),l=at("#wb-rows"),c=at(".tb--submit",t),u=at(".tb--cols",t),h=at(".tb--xlsx",t),f=at(".tb--format",t),d=at(".app__status .st",t),p=at(".app__toast",t),_=at(".app__toast-text",t),m=le(".step",t),g=le("th.col-pick",t),v=at('.cb[data-callout-target="plsql"]',t),b=le(".callout",t),y=[];Xy.forEach((Q,lt)=>{for(let[W,K]of Q)for(let dt of K)y.push([W,dt]);lt<Xy.length-1&&y.push(["",`
`])}),a.textContent=Array.from({length:12},(Q,lt)=>lt+1).join(`
`),l.innerHTML=T2.map(Q=>`<tr>${Q.map((lt,W)=>`<td class="${W===1||W===3?"pk":""}${W>3?" hide-s":""}">${lt}</td>`).join("")}</tr>`).join("");let M=le("tr",l),E=le("td.pk",l),A=-1,x=Q=>{if(Q===A)return;A=Q;let lt="",W=null,K="",dt=()=>{K&&(lt+=W?`<span class="${W}">${K}</span>`:K,K="")};for(let yt=0;yt<Q;yt++){let[ut,Ot]=y[yt];ut!==W&&(dt(),W=ut),K+=Ot==="<"?"&lt;":Ot===">"?"&gt;":Ot}dt(),o.innerHTML=lt+'<span class="ed__caret"></span>'},S=1040,w=600,D=()=>{let Q=window.innerWidth<=760;S=Q?620:1040,w=Q?560:600,s.style.width=S+"px",s.style.height=w+"px";let lt=i.getBoundingClientRect(),W=Math.min((lt.width-8)/S,(lt.height-8)/w,1.25);n.style.setProperty("--app-w",`${S*W}px`),n.style.setProperty("--app-h",`${w*W}px`),s.style.setProperty("--app-s",W),R(W)},R=Q=>{let lt=s.getBoundingClientRect(),W=lt.width/S||1;b.forEach(K=>{let dt=at(`[data-callout-target="${K.dataset.for}"]`,s);if(!dt||dt.offsetParent===null){K.style.display="none";return}K.style.display="";let yt=dt.getBoundingClientRect(),ut=(yt.left+yt.width/2-lt.left)/W*Q,Ot=(yt.top-lt.top)/W*Q,Ct=parseFloat(K.dataset.dy||"0"),Tt=K.offsetWidth/2+4,jt=S*Q;K.style.left=`${Math.min(jt-Tt,Math.max(Tt,ut))}px`,K.style.top=`${Ot-Ct}px`,K.style.setProperty("--stem",`${10+Math.max(0,Ct)}px`)})},N={instances:0,tabs:0,params:1,plsql:1,fix:1,format:2,xlsx:2,history:2},I=0,F=0,U=-1,B=.016,Y={x:0,y:0};window.addEventListener("pointermove",Q=>{Y.x=Q.clientX/innerWidth-.5,Y.y=Q.clientY/innerHeight-.5});let V=null;Wt.reduced?I=1:V=Lt.create({trigger:t,pin:e,start:"top top",end:()=>"+="+Math.round(window.innerHeight*(window.innerWidth<=760?2.2:2.8)),onUpdate:Q=>I=Q.progress,onRefresh:D}),window.addEventListener("resize",D),requestAnimationFrame(D);let P=(Q,lt,W)=>Q&&Q.classList.toggle(lt,W),J=[.47,.8,.93],ot=0,_t=Q=>{for(let lt of J)ot<lt&&Q>=lt&&document.dispatchEvent(new CustomEvent("shards-flash",{detail:lt===.47?.55:.35}));ot=Q},Ft=Q=>{_t(Q);let lt=Wt.reduced?1:$n(0,.2,Q),W=lo(34,0,lt)-Y.y*4*lt,K=lo(-18,0,lt)+Y.x*6*lt,dt=lo(5,0,lt),yt=lo(-280,0,lt),ut=lo(80,0,lt);n.style.transform=`translate3d(0, ${ut}px, ${yt}px) rotateX(${W}deg) rotateY(${K}deg) rotateZ(${dt}deg)`,s.style.setProperty("--sheen",`${lo(-80,180,$n(.04,.3,Q))}%`);let Ot=yr((Q-.14)/.28);x(Math.round(Ot*y.length));let Ct=Q>.44&&Q<.5;P(c,"is-press",Ct),P(v,"is-on",!1);let Tt=Q<.44?"Ready":Q<.5?"Running\u2026":"Successful Response \xB7 10 rows";d.textContent!==Tt&&(d.textContent=Tt,d.className="st"+(Q>=.44&&Q<.5?" is-run":Q>=.5?" is-ok":""));let jt=yr((Q-.5)/.16);M.forEach((Ut,Dt)=>{let k=yr(jt*M.length-Dt);Ut.style.opacity=k,Ut.style.transform=`translateY(${(1-k)*10}px)`});let se=Q>.72;g.forEach(Ut=>P(Ut,"is-picked",se)),E.forEach(Ut=>P(Ut,"is-picked",se)),P(u,"is-press",Q>.78&&Q<.82),P(h,"is-press",Q>.9&&Q<.94),P(f,"is-press",!1);let G=0,ie="";Q>.8&&Q<.89?(G=$n(.8,.82,Q)*(1-$n(.87,.89,Q)),ie="2 columns copied"):Q>.92&&(G=$n(.92,.94,Q),ie="results.xlsx exported"),ie&&_.textContent!==ie&&(_.textContent=ie),p.style.opacity=G,p.style.transform=`translateY(${(1-G)*14}px) scale(${.96+G*.04})`;let xe=Q<.44?0:Q<.72?1:2,De=[[.1,.44],[.44,.72],[.72,1]];m.forEach((Ut,Dt)=>{P(Ut,"is-on",Dt===xe),Ut.style.setProperty("--p",yr((Q-De[Dt][0])/(De[Dt][1]-De[Dt][0])))}),b.forEach(Ut=>{let Dt=N[Ut.dataset.for],k=!Wt.reduced&&Q>.16&&Dt===xe?1:0,Ne=parseFloat(Ut.dataset.on||"0"),te=Ne+(k-Ne)*Math.min(1,B*9);Ut.dataset.on=te.toFixed(3),Ut.style.opacity=te,Ut.style.transform=`translate(-50%, calc(-100% - ${4+te*8}px)) scale(${.92+te*.08})`})};return Q=>{if(V&&!V.isActive&&(window.scrollY<V.start-window.innerHeight*1.2||window.scrollY>V.end+window.innerHeight*1.2))return;B=Q;let lt=1-Math.pow(5e-4,Q);F+=(I-F)*lt,(Math.abs(F-U)>5e-5||Y.x||Y.y||b.some(W=>{let K=parseFloat(W.dataset.on||"0");return K>.001&&K<.999}))&&(Ft(F),U=F)}}function qy(r){let t=at(".features");if(!t)return()=>{};let e=document.documentElement,i=at(".features__pin",t),n=at(".features__track",t),s=le(".feature",t),o=at(".features__cur",t),a=at(".features__progress i",t),l=s.map((_,m)=>[A2,C2,D2,R2][m]?.(_)),c=-1,u=_=>{if(_===c)return;let m=c;if(c=_,r?.setFeature(_),l.forEach((g,v)=>v===_?g?.play():g?.pause()),o){let g=m<_?1:-1;gt.fromTo(o,{yPercent:60*g,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:.6,ease:"expo.out"}),o.textContent=String(_+1).padStart(2,"0")}s.forEach((g,v)=>g.classList.toggle("is-active",v===_))};if(Wt.reduced)return l.forEach(_=>_?.rest()),r?.setFeature(0),()=>{};let h=null,f=()=>Math.max(0,n.scrollWidth-window.innerWidth),d=gt.matchMedia();d.add("(min-height: 561px)",()=>(e.classList.remove("feat-stack"),h=gt.to(n,{x:()=>-f(),ease:"none",scrollTrigger:{trigger:t,pin:i,start:"top top",end:()=>"+="+Math.round(f()*1.25+window.innerHeight*.4),scrub:.8,invalidateOnRefresh:!0,onUpdate:_=>{a&&(a.style.transform=`scaleX(${_.progress})`)}}}),()=>{h=null,s.forEach(_=>{_.style.transform="",_.style.opacity=""})})),d.add("(max-height: 560px)",()=>{e.classList.add("feat-stack");let _=s.map((m,g)=>Lt.create({trigger:m,start:"top 70%",end:"bottom 30%",onToggle:v=>v.isActive&&u(g)}));return()=>{e.classList.remove("feat-stack"),_.forEach(m=>m.kill())}}),u(0);let p=!1;return()=>{let _=h?.scrollTrigger;if(!_)return;if(!(_.isActive||window.scrollY>_.start-window.innerHeight&&window.scrollY<_.end+window.innerHeight)){p||(p=!0,_.progress<=0&&u(0));return}p=!1;let g=window.innerWidth/2,v=0,b=1/0;s.forEach((y,M)=>{let E=y.getBoundingClientRect(),A=(E.left+E.width/2-g)/window.innerWidth,x=Math.abs(A);x<b&&(b=x,v=M);let S=yr(x*1.4);y.style.transform=`perspective(1400px) rotateY(${-A*16}deg) translateZ(${-S*120}px) scale(${1-S*.06})`,y.style.opacity=String(1-S*.45)}),_.isActive?u(v):_.progress<=0&&u(0)}}function A2(r){let t=at(".demo--copy",r);if(!t)return null;let e=le(".mg-row:not(.mg-head) .pick",t),i=at(".clip__text",t),n=i.textContent;i.textContent="";let s=gt.timeline({paused:!0,repeat:-1,repeatDelay:.6});return s.call(()=>{t.classList.remove("is-picked"),i.textContent=""}),s.call(()=>t.classList.add("is-picked"),null,.4),e.forEach((o,a)=>{s.call(()=>{let l=t.getBoundingClientRect(),c=o.getBoundingClientRect(),u=i.getBoundingClientRect(),h=document.createElement("span");h.className="fly",h.textContent=o.textContent,t.appendChild(h),gt.fromTo(h,{x:c.left-l.left,y:c.top-l.top,scale:1,autoAlpha:1},{x:u.left-l.left+a*18,y:u.top-l.top,scale:.8,duration:.75,ease:"power3.inOut",onComplete:()=>gt.to(h,{autoAlpha:0,duration:.2,onComplete:()=>h.remove()})})},null,.8+a*.14)}),s.to(i,{duration:1.1,scrambleText:{text:n,chars:"'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-",speed:.8}},1.5),s.to({},{duration:1.8}),{play:()=>s.play(),pause:()=>s.pause(),rest:()=>{t.classList.add("is-picked"),i.textContent=n}}}function C2(r){let t=at(".demo--history",r);if(!t)return null;let e=at(".hist-search__q",t),i=le(".hist-list li",t),n="invoice",s=gt.timeline({paused:!0,repeat:-1,repeatDelay:.8});s.call(()=>{e.textContent="",i.forEach(l=>l.classList.remove("is-hit"))}),s.set(i,{height:"auto",autoAlpha:1,paddingTop:7,paddingBottom:7});for(let l=1;l<=n.length;l++)s.call(()=>e.textContent=n.slice(0,l),null,.4+l*.12);let o=i.filter(l=>l.dataset.k!=="invoice"),a=i.filter(l=>l.dataset.k==="invoice");return s.to(o,{height:0,paddingTop:0,paddingBottom:0,autoAlpha:0,duration:.5,ease:"expo.inOut",stagger:.05},1.5),s.call(()=>a[0]?.classList.add("is-hit"),null,2.1),s.fromTo(a[0]||{},{x:0},{x:6,duration:.15,yoyo:!0,repeat:1},2.15),s.to({},{duration:2.2}),{play:()=>s.play(),pause:()=>s.pause(),rest:()=>{e.textContent=n,o.forEach(l=>l.style.display="none"),a[0]?.classList.add("is-hit")}}}function D2(r){let t=at(".demo--format",r);if(!t)return null;let e=at(".fmt-code code",t),i=at(".fmt-btn",t),n=[["select","k",0,0],["invoice_id,","",0,0],["invoice_num,","",1,7],["amount","",1,7],["from","k",1,0],["ap_invoices_all","",0,0],["where","k",1,0],["amount","",0,0],[">","",0,0],["1000","p",0,0],["order","k",1,0],["by","k",0,0],["invoice_num","",0,0]],s=n.map(([c,u])=>{let h=document.createElement("span");return h.className="tok"+(u?" "+u:""),h.textContent=c,h._raw=c,h._up=u==="k"?c.toUpperCase():c,h}),o=()=>{e.textContent="",s.forEach((c,u)=>{c.textContent=c._raw,e.appendChild(c),u<s.length-1&&e.appendChild(document.createTextNode(" "))})},a=()=>{e.textContent="",s.forEach((c,u)=>{let[,,h,f]=n[u];u>0&&e.appendChild(document.createTextNode(h?`
`+" ".repeat(f):" ")),c.textContent=c._up,e.appendChild(c)})};o();let l=gt.timeline({paused:!0,repeat:-1,repeatDelay:.4});return l.call(()=>o()),l.call(()=>i.classList.add("is-press"),null,.9),l.call(()=>i.classList.remove("is-press"),null,1.15),l.call(()=>{let c=vs.getState(s);a(),vs.from(c,{duration:1.1,ease:"expo.inOut",stagger:.02,scale:!0})},null,1.15),l.to({},{duration:2.8}),{play:()=>l.play(),pause:()=>l.pause(),rest:()=>a()}}function R2(r){let t=at(".demo--excel",r);if(!t)return null;let e=le(".xl-cells span",t),i=at(".xl-file__bar i",t),n=at(".xl-file__name",t),s=gt.timeline({paused:!0,repeat:-1,repeatDelay:.6});return s.call(()=>{e.forEach(o=>o.classList.remove("is-lit")),n.textContent="results.xlsx"}),s.set(i,{scaleX:0}),e.forEach((o,a)=>s.call(()=>o.classList.add("is-lit"),null,.3+a*.08)),s.to(i,{scaleX:1,duration:1.2,ease:"power2.inOut"},.6),s.call(()=>n.textContent="results.xlsx  \u2713",null,1.85),s.to(e,{scale:.9,duration:.2,yoyo:!0,repeat:1,stagger:.02},1.9),s.to({},{duration:1.6}),{play:()=>s.play(),pause:()=>s.pause(),rest:()=>{e.forEach(o=>o.classList.add("is-lit")),gt.set(i,{scaleX:1}),n.textContent="results.xlsx  \u2713"}}}function $y(r){let t=at(".ai-card");if(!t)return;let e=at(".ai-card__fix",t),i=at(".ai-card__msg",t),n=at(".ai-card__apply",t),s=at(".ai-card__bubble",t),o=at(".ai-card__bubble-wrap",t),a=i.dataset.msg;if(Wt.reduced){i.textContent=a;return}let l=gt.timeline({paused:!0,repeat:-1,repeatDelay:1.2});l.call(()=>{t.classList.remove("is-fixed"),i.textContent="",r&&(r.think=0,r.ok=0)}),l.set(s,{autoAlpha:0,y:14}),l.set(o,{height:0}),l.call(()=>e.classList.add("is-press"),null,.8),l.call(()=>{e.classList.remove("is-press"),r&&(r.think=1)},null,1.05),l.to(o,{height:"auto",duration:.7,ease:"expo.out"},1.15),l.to(s,{autoAlpha:1,y:0,duration:.6,ease:"expo.out"},1.2),l.to(i,{duration:1.8,text:{value:a},ease:"none"},1.5),l.call(()=>n.classList.add("is-press"),null,3.7),l.call(()=>{n.classList.remove("is-press"),t.classList.add("is-fixed"),document.dispatchEvent(new CustomEvent("shards-flash",{detail:.5})),r&&(r.think=0,r.ok=1),gt.fromTo(t,{boxShadow:"0 0 0 0 rgba(52,217,155,0.0)"},{boxShadow:"0 0 0 6px rgba(52,217,155,0.25)",duration:.35,yoyo:!0,repeat:1})},null,3.95),l.call(()=>r&&(r.ok=0),null,5.6),l.to(s,{autoAlpha:0,y:-8,duration:.5,ease:"power2.in"},6.6),l.to(o,{height:0,duration:.6,ease:"expo.inOut"},6.8),l.to({},{duration:.6}),Lt.create({trigger:t,start:"top 85%",end:"bottom 10%",onToggle:c=>c.isActive?l.play():l.pause()}),gt.fromTo(t,{y:60,rotateX:10,transformPerspective:1200},{y:-20,rotateX:-4,ease:"none",scrollTrigger:{trigger:".ai",start:"top bottom",end:"bottom top",scrub:!0}})}function Zy(r){let t=le('.inst-tabs [role="tab"]'),e=at(".inst-status__name"),i=at(".inst-status .sr-only");if(!t.length)return;let n=at(".inst-tabs"),s=document.createElement("span");s.className="inst-tabs__glider",s.setAttribute("aria-hidden","true"),n.prepend(s);let o=(h,f)=>{let d=t[h];gt.to(s,{x:d.offsetLeft,width:d.offsetWidth,height:d.offsetHeight,y:d.offsetTop-parseFloat(getComputedStyle(s).top||0),duration:f||Wt.reduced?0:.7,ease:"expo.out"})};window.addEventListener("resize",()=>o(a,!0));let a=1,l=!1,c=(h,f)=>{a=h,f&&(l=!0),o(h),t.forEach((d,p)=>d.setAttribute("aria-selected",String(p===h))),r?.setActive(h),f&&i&&(i.textContent=`Working in ${t[h].textContent}`),e&&(Wt.reduced?e.textContent=t[h].textContent:gt.to(e,{duration:.6,scrambleText:{text:t[h].textContent,chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",speed:.6}}))};t.forEach((h,f)=>{h.addEventListener("click",()=>c(f,!0)),h.addEventListener("keydown",d=>{if(d.key==="ArrowRight"||d.key==="ArrowLeft"){let p=(f+(d.key==="ArrowRight"?1:t.length-1))%t.length;t[p].focus(),c(p,!0)}})});let u=null;Lt.create({trigger:".instances",start:"top 70%",end:"bottom 30%",onToggle:h=>{clearInterval(u),h.isActive&&!Wt.reduced&&(u=setInterval(()=>{l||c((a+1)%t.length,!1)},2600))}}),at(".instances")?.addEventListener("click",h=>{h.target.closest("button, a")||r&&r.hovered>=0&&c(r.hovered,!0)}),c(1,!1),requestAnimationFrame(()=>o(1,!0)),document.fonts?.ready.then(()=>o(a,!0))}function Jy(r){let t=at(".desktop");if(!t)return()=>{};let e=at(".desktop__pin",t),i=le(".desk-list li",t),n=0,s=0,o=()=>window.innerWidth>1100&&window.innerHeight>=700;return Wt.reduced?n=1:Lt.matchMedia({"(min-width: 1101px) and (min-height: 700px)":()=>{let a=Lt.create({trigger:t,pin:e,start:"top top",end:"+=120%",onUpdate:l=>n=l.progress});return()=>a.kill()},"(max-width: 1100px), (max-height: 699px)":()=>{let a=Lt.create({trigger:t,start:"top 85%",end:"center 45%",onUpdate:l=>n=l.progress});return()=>a.kill()}}),a=>{s+=(n-s)*(1-Math.pow(.002,a)),r&&(r.open=$n(.02,o()?.5:.85,s)),i.forEach((l,c)=>l.classList.toggle("is-lit",s>.3+c*.12||!o()))}}function Ky(){let r=at(".ring__caption");if(!r||Wt.reduced)return;let[t,e]=le("span",r);gt.fromTo(t,{x:-60},{x:40,ease:"none",scrollTrigger:{trigger:".ring",start:"top bottom",end:"bottom top",scrub:!0}}),gt.fromTo(e,{x:60},{x:-40,ease:"none",scrollTrigger:{trigger:".ring",start:"top bottom",end:"bottom top",scrub:!0}})}function jy(){!at(".cta__title")||Wt.reduced||(gt.fromTo(".cta__inner",{y:80},{y:0,ease:"none",scrollTrigger:{trigger:".cta",start:"top bottom",end:"top top",scrub:!0}}),Lt.matchMedia({"(min-height: 640px)":()=>{let t=Lt.create({trigger:".cta",pin:".cta__pin",start:"top top",end:"+=55%"});return()=>t.kill()}}))}function Qy(r){at(".studio")?.addEventListener("pointerdown",()=>r?.click()),!Wt.reduced&&le(".studio__cards .card").forEach((t,e)=>{gt.fromTo(t,{x:Wt.mobile?0:60+e*20,rotationZ:2.5},{x:0,rotationZ:0,ease:"none",scrollTrigger:{trigger:t,start:"top 98%",end:"top 60%",scrub:!0}})})}function t1(){!at(".video")||Wt.reduced||gt.fromTo(".video-wrap",{rotateX:24,scale:.88,y:60,transformPerspective:1600,transformOrigin:"50% 100%"},{rotateX:0,scale:1,y:0,ease:"none",scrollTrigger:{trigger:".video-wrap",start:"top bottom",end:"center 60%",scrub:!0}})}function yd(r,t,e){let i=[];return i.push(Yy(e)),i.push(qy(t.director)),$y(t.orb),Zy(t.constellation),i.push(Jy(t.laptop)),Ky(),jy(),Qy(t.keys),t1(),{frame(n){for(let s of i)s?.(n)}}}yd.gl=async(r,t,e)=>{let i=(n,s)=>r.anchor(at(n),s);t.ring=r.add(new pd(r,i('[data-anchor="ring"]',{margin:.3}),{mobile:e.mobile})),t.orb=r.add(new md(r,i('[data-anchor="orb"]',{margin:.3}),{mobile:e.mobile})),t.constellation=r.add(new gd(r,i('[data-anchor="constellation"]',{margin:.3}),{mobile:e.mobile})),t.keys=r.add(new _d(r,i('[data-anchor="keys"]',{margin:.3}))),t.laptop=r.add(new xd(r,i('[data-anchor="laptop"]',{margin:.3}),{mobile:e.mobile})),t.portal=r.add(new vd(r,i('[data-anchor="cta"]',{margin:.5})))};function e1(){if(!Wt.fine||Wt.reduced)return{frame(){}};let r=at(".cursor"),t=at(".cursor__dot",r),e=at(".cursor__ring",r),i=at(".cursor__label",r),n={x:innerWidth/2,y:innerHeight/2},s={x:n.x,y:n.y},o=!1;window.addEventListener("pointermove",u=>{n.x=u.clientX,n.y=u.clientY,o||(o=!0,r.style.opacity=1,s.x=n.x,s.y=n.y)},{passive:!0}),document.addEventListener("pointerleave",()=>{o=!1,r.style.opacity=0}),window.addEventListener("pointerdown",()=>r.classList.add("is-down")),window.addEventListener("pointerup",()=>r.classList.remove("is-down"));let a=null,l=null,c=()=>{let u=a?.dataset.cursor||!a&&l||null;r.classList.toggle("is-label",!!u),r.classList.toggle("is-link",!!a&&!u),u&&(i.textContent=u)};return document.addEventListener("pointerover",u=>{a=u.target.closest('[data-cursor], a, button, summary, [role="tab"], label'),c()}),document.addEventListener("cursor-label",u=>{l=u.detail||null,c()}),{frame(u){let h=1-Math.pow(4e-4,u);s.x+=(n.x-s.x)*h,s.y+=(n.y-s.y)*h,t.style.transform=`translate3d(${n.x}px, ${n.y}px, 0)`,e.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`}}}function i1(){!Wt.fine||Wt.reduced||(le("[data-magnetic]").forEach(r=>{let t=at(".btn__label",r),e=gt.quickTo(r,"x",{duration:.6,ease:"power3.out"}),i=gt.quickTo(r,"y",{duration:.6,ease:"power3.out"}),n=t?gt.quickTo(t,"x",{duration:.6,ease:"power3.out"}):null,s=t?gt.quickTo(t,"y",{duration:.6,ease:"power3.out"}):null;r.addEventListener("pointermove",o=>{let a=r.getBoundingClientRect(),l=o.clientX-(a.left+a.width/2),c=o.clientY-(a.top+a.height/2);e(l*.28),i(c*.38),n?.(l*.12),s?.(c*.16),r.style.setProperty("--mx",`${o.clientX-a.left}px`),r.style.setProperty("--my",`${o.clientY-a.top}px`)}),r.addEventListener("pointerleave",()=>{gt.to(r,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"}),t&&gt.to(t,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"})})}),le(".btn__label").forEach(r=>{r.dataset.text||(r.dataset.text=r.textContent.trim())}))}function n1(){!Wt.fine||Wt.reduced||(le("[data-tilt]").forEach(r=>{gt.set(r,{transformPerspective:900});let t=gt.quickTo(r,"rotationX",{duration:.6,ease:"power3.out"}),e=gt.quickTo(r,"rotationY",{duration:.6,ease:"power3.out"});r.addEventListener("pointermove",i=>{let n=r.getBoundingClientRect(),s=(i.clientX-n.left)/n.width,o=(i.clientY-n.top)/n.height;t((.5-o)*7),e((s-.5)*7),r.style.setProperty("--mx",`${s*100}%`),r.style.setProperty("--my",`${o*100}%`)}),r.addEventListener("pointerleave",()=>{t(0),e(0)})}),le(".video").forEach(r=>{r.addEventListener("pointermove",t=>{let e=r.getBoundingClientRect(),i=(t.clientX-e.left)/e.width,n=(t.clientY-e.top)/e.height;r.style.setProperty("--ry",`${(i-.5)*5}deg`),r.style.setProperty("--rx",`${(.5-n)*5}deg`)}),r.addEventListener("pointerleave",()=>{r.style.setProperty("--rx","0deg"),r.style.setProperty("--ry","0deg")})}))}function r1(){let r=document.documentElement,t=at("#nav"),e=at(".progress span"),i=at(".rail__num"),n=at(".rail__name"),s=at(".rail__line i"),o=at(".burger"),a=at("#menu"),l=le(".nav__links a"),c=window.scrollY,u=!1,h=1,f=()=>h=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);f(),Lt.addEventListener("refresh",f),window.addEventListener("resize",f);let d=m=>{r.classList.toggle("menu-open",m),o?.setAttribute("aria-expanded",String(m)),o?.setAttribute("aria-label",m?"Close menu":"Open menu"),a?.setAttribute("aria-hidden",String(!m)),m?(gt.fromTo(le(".menu__links a, .menu__foot .btn"),{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,stagger:.05,ease:"expo.out",delay:.2}),setTimeout(()=>at(".menu__links a")?.focus({preventScroll:!0}),250)):a?.contains(document.activeElement)&&o?.focus({preventScroll:!0})};o?.addEventListener("click",()=>d(!r.classList.contains("menu-open"))),a?.addEventListener("click",m=>{m.target.closest("a")&&d(!1)}),window.addEventListener("keydown",m=>{m.key==="Escape"&&r.classList.contains("menu-open")&&d(!1)});let p={Workbench:"#workbench",Features:"#features","AI help":"#ai",Desktop:"#desktop",FAQ:"#faq"},_=0;return document.addEventListener("section",m=>{let{name:g,index:v}=m.detail;_=Math.max(_,le("[data-section]").length),i&&gt.to(i,{duration:.6,scrambleText:{text:String(v+1).padStart(2,"0"),chars:"0123456789",speed:.6}}),n&&gt.to(n,{duration:.8,scrambleText:{text:g,chars:"upperCase",speed:.5}});let b=p[g];l.forEach(y=>y.classList.toggle("is-active",y.getAttribute("href")===b))}),{closeMenu:()=>d(!1),frame(){let m=window.scrollY,g=h,v=g>0?m/g:0;e&&(e.style.transform=`scaleX(${v})`),s&&(s.style.transform=`scaleY(${v})`),t?.classList.toggle("is-scrolled",m>30);let b=m-c;r.classList.contains("menu-open")||(b>6&&m>500&&!u?(u=!0,t?.classList.add("is-hidden")):(b<-6||m<200)&&u&&(u=!1,t?.classList.remove("is-hidden"))),c=m}}}function s1(){if(Wt.reduced)return;le("[data-split]").forEach(e=>{ta.create(e,{type:"lines,words",mask:"lines",linesClass:"split-line",wordsClass:"sw",autoSplit:!0,onSplit(i){return gt.from(i.words,{yPercent:115,rotate:4,transformOrigin:"0% 100%",duration:1.3,ease:"expo.out",stagger:.045,scrollTrigger:{trigger:e,start:"top 88%",once:!0}})}})}),le(".eyebrow").forEach(e=>{let i=[...e.childNodes].find(o=>o.nodeType===3&&o.textContent.trim());if(!i)return;let n=document.createElement("span");n.textContent=i.textContent.trim(),e.replaceChild(n,i);let s=n.textContent;n.style.minWidth=`${s.length*.62}em`,gt.set(e,{autoAlpha:0}),Lt.create({trigger:e,start:"top 90%",once:!0,onEnter:()=>{gt.to(e,{autoAlpha:1,duration:.4}),gt.fromTo(n,{scrambleText:{text:""}},{duration:1.2,scrambleText:{text:s,chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ/_<>01",speed:.7,revealDelay:.2}})}})});let r=le(".lead, .ticks li, .desk-list li, .studio__cards .card, .download, .inst-tabs, .inst-status, .qa, .spec, .cta__buttons, .cta__dev, .ring__caption, .features__side, .footer__top");r.forEach(e=>gt.set(e,{opacity:0,y:34})),Lt.batch(r,{start:"top 92%",once:!0,onEnter:e=>gt.to(e,{opacity:1,y:0,duration:1.2,ease:"expo.out",stagger:.08,overwrite:!0})}),document.addEventListener("focusin",e=>{let i=r.find(n=>n.contains(e.target));i&&+getComputedStyle(i).opacity<1&&gt.to(i,{opacity:1,y:0,duration:.6,overwrite:!0})});let t=at("[data-words]");if(t){let e=ta.create(t,{type:"words",wordsClass:"w"});gt.to(e.words,{opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:t,start:"top 82%",end:"bottom 45%",scrub:.6}}),le(".mark-word",t).forEach(i=>{gt.to(i,{"--u":1,ease:"none",scrollTrigger:{trigger:i,start:"top 62%",end:"top 45%",scrub:.6}})})}}function o1(){le(".qa").forEach(t=>{let e=at("summary",t),i=at(".qa__a",t);e.addEventListener("click",n=>{Wt.reduced||(n.preventDefault(),t.open?gt.to(i,{height:0,duration:.6,ease:"expo.out",onComplete:()=>{t.open=!1,gt.set(i,{clearProps:"height"}),Lt.refresh()}}):(t.open=!0,gt.fromTo(i,{height:0},{height:"auto",duration:.8,ease:"expo.out",onComplete:()=>Lt.refresh()}),gt.fromTo(at("p",i),{y:16,autoAlpha:0},{y:0,autoAlpha:1,duration:.8,ease:"expo.out",delay:.05})))})});let r=at(".download__more");r&&r.addEventListener("toggle",()=>Lt.refresh())}function a1(){le("[data-copy]").forEach(r=>{r.addEventListener("click",async()=>{let t=r.dataset.copy,e=!1;try{await navigator.clipboard.writeText(t),e=!0}catch{let n=r.previousElementSibling;if(n){let s=document.createRange();s.selectNodeContents(n);let o=window.getSelection();o.removeAllRanges(),o.addRange(s)}}r.textContent=e?"Copied":"Selected",r.classList.add("is-done"),setTimeout(()=>{r.textContent="Copy",r.classList.remove("is-done")},1800)})})}function l1(){le("[data-count]").forEach(r=>{let t=parseFloat(r.dataset.count),e=parseInt(r.dataset.decimals||"0",10),i=r.dataset.prefix||"";if(Wt.reduced)return;let n={v:t===0?99:0};r.textContent=i+n.v.toFixed(e),Lt.create({trigger:r,start:"top 90%",once:!0,onEnter:()=>gt.to(n,{v:t,duration:t===0?1.6:2,ease:"expo.out",onUpdate:()=>r.textContent=i+n.v.toFixed(e)})})})}function c1(){let r=at(".video"),t=at("#video-modal");if(!r||!t)return;let e=at(".modal__video",t),i=at(".modal__frame",t),n=r.dataset.video,s=()=>{t.hidden=!1,Oi?.stop(),Wt.artifact?e.innerHTML=`<div class="modal__fallback"><p>The video opens on YouTube.</p><a class="btn btn--fox" href="https://www.youtube.com/watch?v=${n}" target="_blank" rel="noopener"><span class="btn__label">Watch on YouTube</span></a></div>`:e.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${n}?autoplay=1&rel=0" title="SQL Harmony demo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;for(let a of document.querySelectorAll("main, header, footer"))a.inert=!0;gt.fromTo(at(".modal__backdrop",t),{autoAlpha:0},{autoAlpha:1,duration:.5}),gt.fromTo(i,{scale:.86,y:40,opacity:0,rotateX:8},{scale:1,y:0,opacity:1,rotateX:0,duration:.9,ease:"expo.out"}),at(".modal__close",t).focus({preventScroll:!0})},o=()=>{for(let a of document.querySelectorAll("main, header, footer"))a.inert=!1;gt.to(i,{scale:.92,opacity:0,duration:.35,ease:"power2.in"}),gt.to(at(".modal__backdrop",t),{autoAlpha:0,duration:.4,onComplete:()=>{t.hidden=!0,e.innerHTML="",Oi?.start(),r.focus({preventScroll:!0})}})};r.addEventListener("click",a=>{a.preventDefault(),s()}),t.addEventListener("click",a=>{a.target.closest("[data-close]")&&o()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&o()})}function u1(){let r=at(".footer__word");if(!r)return;let t=le(".fw",r).filter(i=>!i.classList.contains("fw--gap"));if(Wt.reduced||(gt.from(t,{yPercent:70,rotateX:-80,autoAlpha:0,duration:1.4,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:r,start:"top 96%",once:!0}}),!Wt.fine))return;let e=t.map(i=>({l:i,y:gt.quickTo(i,"y",{duration:.6,ease:"power3.out"}),r:gt.quickTo(i,"rotateX",{duration:.6,ease:"power3.out"}),s:gt.quickTo(i,"scaleY",{duration:.6,ease:"power3.out"})}));r.addEventListener("pointermove",i=>{for(let n of e){let s=n.l.getBoundingClientRect(),o=Math.abs(i.clientX-(s.left+s.width/2))/s.width,a=Math.max(0,1-o/2.2);n.y(-a*s.height*.12),n.r(a*-18),n.s(1+a*.08)}}),r.addEventListener("pointerleave",()=>e.forEach(i=>(i.y(0),i.r(0),i.s(1))))}function h1(){let r=at(".marquee__track");if(!r||Wt.reduced)return{frame(){}};r.innerHTML+=r.innerHTML;let t=0,e=r.scrollWidth/2;window.addEventListener("resize",()=>e=r.scrollWidth/2);let i=0;return{frame(n){let s=Oi?Oi.velocity:0;t-=Math.min(4e3,60+Math.abs(s)*30)*n*(s<0?-1:1),e>0&&(t=(t%e+e)%e-e),i+=(Math.max(-12,Math.min(12,s*.6))-i)*.1,r.style.transform=`translate3d(${t}px,0,0) skewX(${-i}deg)`}}}function f1(){let r=at(".sound");if(!r)return;let t=null,e=null,i=null,n=!1,s=null,o=[146.83,220,277.18,329.63,369.99,415.3,440,554.37,659.25],a=[880,987.77,1108.73,1318.51,1479.98];function l(p=4.5,_=2.6){let m=t.sampleRate,g=m*p,v=t.createBuffer(2,g,m);for(let b=0;b<2;b++){let y=v.getChannelData(b);for(let M=0;M<g;M++)y[M]=(Math.random()*2-1)*Math.pow(1-M/g,_)}return v}function c(){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.gain.value=0,i=t.createBiquadFilter(),i.type="lowpass",i.frequency.value=1200,i.Q.value=.4;let p=t.createConvolver();p.buffer=l();let _=t.createGain();_.gain.value=.7;let m=t.createGain();m.gain.value=.35,i.connect(m).connect(e),i.connect(p).connect(_).connect(e),e.connect(t.destination)}function u(p,_,m){let g=t.createGain();g.gain.setValueAtTime(0,_),g.gain.linearRampToValueAtTime(.05,_+m*.4),g.gain.linearRampToValueAtTime(0,_+m),g.connect(i);for(let v of[-6,0,7]){let b=t.createOscillator();b.type=v===0?"sine":"triangle",b.frequency.value=p,b.detune.value=v,b.connect(g),b.start(_),b.stop(_+m+.1)}}function h(){if(!n)return;let p=t.currentTime,_=o[Math.floor(Math.random()*3)];u(_/2,p,9);for(let m=0;m<3;m++){let g=o[2+Math.floor(Math.random()*(o.length-2))];u(g,p+m*.9+Math.random()*.6,6+Math.random()*3)}s=setTimeout(h,5200+Math.random()*1800)}function f(p=a[Math.floor(Math.random()*a.length)],_=.035){if(!n||!t)return;let m=t.currentTime,g=t.createOscillator(),v=t.createGain();g.type="sine",g.frequency.value=p,v.gain.setValueAtTime(0,m),v.gain.linearRampToValueAtTime(_,m+.008),v.gain.exponentialRampToValueAtTime(1e-4,m+.35),g.connect(v).connect(i),g.start(m),g.stop(m+.4)}function d(){if(n=!n,n&&!t&&c(),r.setAttribute("aria-pressed",String(n)),r.setAttribute("aria-label",n?"Turn ambient sound off":"Turn ambient sound on"),!t)return;t.resume();let p=t.currentTime;e.gain.cancelScheduledValues(p),e.gain.setValueAtTime(e.gain.value,p),e.gain.linearRampToValueAtTime(n?.9:0,p+(n?2.5:.8)),clearTimeout(s),n&&(h(),f(1318.51,.05))}return r.addEventListener("click",d),Wt.fine&&document.addEventListener("pointerover",p=>{let _=p.target.closest('a, button, summary, [role="tab"]');_&&_!==r&&f()}),{frame(){if(!n||!i)return;let p=Math.min(1,Math.abs(Oi?Oi.velocity:0)/40);i.frequency.setTargetAtTime(1100+p*2600,t.currentTime,.25)}}}function d1(r){let t=e1();i1(),n1();let e=r1();s1(),o1(),a1(),l1(),c1(),u1();let i=h1(),n=f1();return{closeMenu:e.closeMenu,frame(s){t.frame(s),e.frame(s),i.frame(s),n?.frame(s)}}}gt.registerPlugin(Lt,ta,Nl,so,vs,oa);gt.config({nullTargetWarn:!1});Lt.config({ignoreMobileResize:!0});so.create("silk","0.16, 1, 0.3, 1");var Rr=document.documentElement;"scrollRestoration"in history&&(history.scrollRestoration="manual");function P2(r=180){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),i=e.createImageData(r,r);for(let n=0;n<i.data.length;n+=4){let s=Math.random()*255;i.data[n]=i.data[n+1]=i.data[n+2]=s,i.data[n+3]=255}return e.putImageData(i,0,0),t.toDataURL("image/png")}async function I2(){Rr.classList.remove("no-js"),Rr.classList.add("js",Wt.reduced?"reduced":"anim"),Wt.fine&&!Wt.reduced&&Rr.classList.add("has-cursor"),window.scrollTo(0,0);let r=Fx(),t=at(".grain");t&&(t.style.backgroundImage=`url(${P2()})`);try{await Promise.race([Promise.all([document.fonts.load('800 200px "Bricolage Grotesque"'),document.fonts.load('500 40px "JetBrains Mono"'),document.fonts.load('italic 400 40px "Instrument Serif"'),document.fonts.load('400 16px "Geist"')]),vx(4e3)])}catch{}r.set(.3);let e=null,i={};try{e=new od(at("#gl"),{mobile:Wt.mobile,reduced:Wt.reduced,touch:Wt.touch}),e.failed&&(e=null)}catch(l){console.warn("WebGL off:",l),e=null}if(e)try{Rr.classList.add("webgl-on"),i.backdrop=e.add(new ad),i.dust=e.add(new ld({count:Wt.mobile?650:1400})),i.shards=e.add(new cd({levels:2})),i.director=ky(e,i.shards,{backdrop:i.backdrop,mobile:Wt.mobile,reduced:Wt.reduced});let l=()=>i.director.state.fox;i.word=e.add(new ud(e,l,{mobile:Wt.mobile})),i.floor=e.add(new fd(e,l,{mobile:Wt.mobile})),i.chips=e.add(new hd(e,l,{mobile:Wt.mobile})),Wt.fine&&!Wt.reduced&&(i.trail=e.add(new dd(e))),r.set(.45),await yd.gl?.(e,i,Wt),r.set(.6),await e.warmup(),r.set(.92)}catch(l){console.warn("3D disabled:",l),Rr.classList.remove("webgl-on"),Rr.classList.add("webgl-off"),e=null}else Rr.classList.add("webgl-off");/[?&]debug=1/.test(location.search)&&(window.__gl={world:e,...i});let n=Ax();n?.stop();let s=zy({word:i.word,chips:i.chips,floor:i.floor,director:i.director}),o=yd(e,i,Wt),a=d1(Wt);if(Rx(()=>a.closeMenu?.()),Cx(l=>{e?(e.scrollVel=Dx(),i.director?.frame(),s.frame(),o.frame?.(l),e.render(l)):o.frame?.(l),a.frame?.(l)}),Lt.refresh(),await r.finish(),Rr.classList.add("is-ready"),n?.start(),location.hash.length>1){let l=document.getElementById(decodeURIComponent(location.hash.slice(1)));if(l){let u=(l.parentElement?.classList.contains("pin-spacer")?l.parentElement:l).getBoundingClientRect().top+window.scrollY;n?n.scrollTo(u,{immediate:!0,force:!0}):window.scrollTo(0,u),Lt.update()}}i.director?.intro(),s.intro(),a.intro?.(),window.addEventListener("load",()=>Lt.refresh()),document.fonts?.ready&&document.fonts.ready.then(()=>Lt.refresh())}I2().catch(r=>{console.error(r),at("#preloader")?.classList.add("is-done"),Rr.classList.remove("anim"),Rr.classList.add("is-ready")});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2026, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
   * @author: Jack Doyle
   *)

gsap/utils/strings.js:
  (*!
   * strings: 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrambleTextPlugin.js:
  (*!
   * ScrambleTextPlugin 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/paths.js:
  (*!
   * paths 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CustomEase.js:
  (*!
   * CustomEase 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.15.0
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/TextPlugin.js:
  (*!
   * TextPlugin 3.15.0
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
