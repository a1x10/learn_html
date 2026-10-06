(()=>{var dx=Object.defineProperty;var px=(r,t,e)=>t in r?dx(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Lt=(r,t,e)=>px(r,typeof t!="symbol"?t+"":t,e);function hr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Cp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},la={duration:.5,overwrite:!1,delay:0},Zu,pn,Be,Si=1e8,Pe=1/Si,Bu=Math.PI*2,mx=Bu/4,gx=0,Rp=Math.sqrt,_x=Math.cos,xx=Math.sin,on=function(t){return typeof t=="string"},Ye=function(t){return typeof t=="function"},fr=function(t){return typeof t=="number"},Bl=function(t){return typeof t>"u"},qi=function(t){return typeof t=="object"},$n=function(t){return t!==!1},$u=function(){return typeof window<"u"},Rl=function(t){return Ye(t)||on(t)},Pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Sn=Array.isArray,vx=/random\([^)]+\)/g,yx=/,\s*/g,yp=/(?:-?\.?\d|\.)+/gi,Ju=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,us=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Iu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ku=/[+-]=-?[.\d]+/,Sx=/[^,'"\[\]\s]+/gi,Mx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,Wi,ku,Qu,ii={},Dl={},Ip,Lp=function(t){return(Dl=Js(t,ii))&&Mn},kl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ca=function(t,e){return!e&&console.warn(t)},Dp=function(t,e){return t&&(ii[t]=e)&&Dl&&(Dl[t]=e)||ii},ha=function(){return 0},bx={suppressEvents:!0,isStart:!0,kill:!1},Pl={suppressEvents:!0,kill:!1},Ex={suppressEvents:!0},ju={},Nr=[],zu={},Np,Yn={},Lu={},Sp=30,Il=[],tf="",ef=function(t){var e=t[0],n,i;if(qi(e)||Ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Il.length;i--&&!Il[i].targetTest(e););n=Il[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new of(t[i],n)))||t.splice(i,1);return t},Ur=function(t){return t._gsap||ef(Mi(t))[0]._gsap},nf=function(t,e,n){return(n=t[e])&&Ye(n)?t[e]():Bl(n)&&t.getAttribute&&t.getAttribute(e)||n},Un=function(t,e){return(t=t.split(",")).forEach(e)||t},Ze=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},fs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Tx=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Nl=function(){var t=Nr.length,e=Nr.slice(0),n,i;for(zu={},Nr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rf=function(t){return!!(t._initted||t._startAt||t.add)},Up=function(t,e,n,i){Nr.length&&!pn&&Nl(),t.render(e,n,i||!!(pn&&e<0&&rf(t))),Nr.length&&!pn&&Nl()},Fp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Sx).length<2?e:on(t)?t.trim():t},Op=function(t){return t},ri=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Js=function(t,e){for(var n in e)t[n]=e[n];return t},Mp=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=qi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ul=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},sa=function(t){var e=t.parent||We,n=t.keyframes?wx(Sn(t.keyframes)):ri;if($n(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ax=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Bp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},zl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Fr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ls=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Cx=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Hu=function(t,e,n,i){return t._startAt&&(pn?t._startAt.revert(Pl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Rx=function r(t){return!t||t._ts&&r(t.parent)},bp=function(t){return t._repeat?Ks(t._tTime,t=t.duration()+t._rDelay)*t:0},Ks=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},Fl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Hl=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Pe)||0))},Vl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Hl(t),n._dirty||ls(n,t)),t},kp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Fl(t.rawTime(),e),(!e._dur||da(0,e.totalDuration(),n)-e._tTime>Pe)&&e.render(n,!0)),ls(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Pe}},Xi=function(t,e,n,i){return e.parent&&Fr(e),e._start=Ge((fr(n)?n:n||t!==We?yi(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Bp(t,e,"_first","_last",t._sort?"_start":0),Vu(e)||(t._recent=e),i||kp(t,e),t._ts<0&&Vl(t,t._tTime),t},zp=function(t,e){return(ii.ScrollTrigger||kl("scrollTrigger",e))&&ii.ScrollTrigger.create(e,t)},Hp=function(t,e,n,i,s){if(cf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Np!==Zn.frame)return Nr.push(t),t._lazy=[s,i],1},Px=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Vu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ix=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&Px(t)&&!(!t._initted&&Vu(t))||(t._ts<0||t._dp._ts<0)&&!Vu(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=da(0,t._tDur,e),h=Ks(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ks(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||pn||i||t._zTime===Pe||!e&&t._zTime){if(!t._initted&&Hp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Pe:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Hu(t,e,n,!0),t._onUpdate&&!n&&ni(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ni(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Fr(t,1),!n&&!pn&&(ni(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Lx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Qs=function(t,e,n,i){var s=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ge(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Vl(t,t._tTime=t._tDur*a),t.parent&&Hl(t),n||ls(t.parent,t),t},Ep=function(t){return t instanceof yn?ls(t):Qs(t,t._dur)},Dx={_start:0,endTime:ha,totalDuration:ha},yi=function r(t,e,n){var i=t.labels,s=t._recent||Dx,o=t.duration()>=Si?s.endTime(!1):t._dur,a,l,c;return on(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Sn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},oa=function(t,e,n){var i=fr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;o.immediateRender=$n(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new je(e[0],o,e[s+1])},Or=function(t,e){return t||t===0?e(t):e},da=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!on(t)||!(e=Mx.exec(t))?"":e[1]},Nx=function(t,e,n){return Or(n,function(i){return da(t,e,i)})},Gu=[].slice,Vp=function(t,e){return t&&qi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&qi(t[0]))&&!t.nodeType&&t!==Wi},Ux=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return on(i)&&!e||Vp(i,1)?(s=n).push.apply(s,Mi(i)):n.push(i)})||n},Mi=function(t,e,n){return Be&&!e&&Be.selector?Be.selector(t):on(t)&&!n&&(ku||!js())?Gu.call((e||Qu).querySelectorAll(t),0):Sn(t)?Ux(t,n):Vp(t)?Gu.call(t,0):t?[t]:[]},Wu=function(t){return t=Mi(t)[0]||ca("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Mi(e,n.querySelectorAll?n:n===t?ca("Invalid scope")||Qu.createElement("div"):t)}},Gp=function(t){return t.sort(function(){return .5-Math.random()})},Wp=function(t){if(Ye(t))return t;var e=qi(t)?t:{each:t},n=cs(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return on(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var _=(g||e).length,m=o[_],p,v,y,x,b,w,T,C,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,Si])[1],!M){for(T=-Si;T<(T=g[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],p=l?Math.min(M,_)*h-.5:i%M,v=M===Si?0:l?_*u/M-.5:i/M|0,T=0,C=Si,w=0;w<_;w++)y=w%M-p,x=v-(w/M|0),m[w]=b=c?Math.abs(c==="y"?x:y):Rp(y*y+x*x),b>T&&(T=b),b<C&&(C=b);i==="random"&&Gp(m),m.max=T-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=mn(e.amount||e.each)||0,n=n&&_<0?Zx(n):n}return _=(m[f]-m.min)/m.max||0,Ge(m.b+(n?n(_):_)*m.v)+m.u}},Xu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(fr(n)?0:mn(n))}},Xp=function(t,e){var n=Sn(t),i,s;return!n&&qi(t)&&(i=n=t.radius||Si,t.values?(t=Mi(t.values),(s=!fr(t[0]))&&(i*=i)):t=Xu(t.increment)),Or(e,n?Ye(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Si,h=0,u=t.length,f,d;u--;)s?(f=t[u].x-a,d=t[u].y-l,f=f*f+d*d):f=Math.abs(t[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?t[h]:o,s||h===o||fr(o)?h:h+mn(o)}:Xu(t))},qp=function(t,e,n,i){return Or(Sn(t)?!e:n===!0?!!(n=0):!i,function(){return Sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Fx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},Ox=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},Bx=function(t,e,n){return Zp(t,e,0,1,n)},Yp=function(t,e,n){return Or(n,function(i){return t[~~e(i)]})},kx=function r(t,e,n){var i=e-t;return Sn(t)?Yp(t,r(0,t.length),e):Or(n,function(s){return(i+(s-t)%i)%i+t})},zx=function r(t,e,n){var i=e-t,s=i*2;return Sn(t)?Yp(t,r(0,t.length-1),e):Or(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},to=function(t){return t.replace(vx,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(yx);return qp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Zp=function(t,e,n,i,s){var o=e-t,a=i-n;return Or(s,function(l){return n+((l-t)/o*a||0)})},Hx=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=on(t),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Sn(t)&&!Sn(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Js(Sn(t)?[]:{},t));if(!h){for(l in e)af.call(a,t,l,"get",e[l]);s=function(g){return ff(g,a)||(o?t.p:t)}}}return Or(n,s)},Tp=function(t,e,n){var i=t.labels,s=Si,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ni=function(t,e,n){var i=t.vars,s=i[e],o=Be,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Nr.length&&Nl(),a&&(Be=a),h=l?s.apply(c,l):s.call(c),Be=o,h},ia=function(t){return Fr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&ni(t,"onInterrupt"),t},$s,$p=[],Jp=function(t){if(t)if(t=!t.name&&t.default||t,$u()||t.headless){var e=t.name,n=Ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ha,render:ff,add:af,kill:rv,modifier:iv,rawVars:0},o={targetTest:0,get:0,getSetter:Gl,aliases:{},register:0};if(js(),t!==i){if(Yn[e])return;ri(i,ri(Ul(t,s),o)),Js(i.prototype,Js(s,Ul(t,o))),Yn[i.prop=e]=i,t.targetTest&&(Il.push(i),ju[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Dp(e,i),t.register&&t.register(Mn,i,Fn)}else $p.push(t)},Re=255,ra={aqua:[0,Re,Re],lime:[0,Re,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Re],navy:[0,0,128],white:[Re,Re,Re],olive:[128,128,0],yellow:[Re,Re,0],orange:[Re,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Re,0,0],pink:[Re,192,203],cyan:[0,Re,Re],transparent:[Re,Re,Re,0]},Du=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Re+.5|0},Kp=function(t,e,n){var i=t?fr(t)?[t>>16,t>>8&Re,t&Re]:0:ra.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ra[t])i=ra[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Re,i&Re,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Re,t&Re]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(yp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Du(l+1/3,s,o),i[1]=Du(l,s,o),i[2]=Du(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Ju),n&&i.length<4&&(i[3]=1),i}else i=t.match(yp)||ra.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Re,o=i[1]/Re,a=i[2]/Re,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Qp=function(t){var e=[],n=[],i=-1;return t.split(ur).forEach(function(s){var o=s.match(us)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},wp=function(t,e,n){var i="",s=(t+i).match(ur),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Kp(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=Qp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ur,"1").split(us),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ur),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ur=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ra)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Vx=/hsl[a]?\(/,sf=function(t){var e=t.join(" "),n;if(ur.lastIndex=0,ur.test(e))return n=Vx.test(e),t[1]=wp(t[1],n),t[0]=wp(t[0],n,Qp(t[1])),!0},ua,Zn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function _(m){var p=r()-i,v=m===!0,y,x,b,w;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,y=b-o,(y>0||v)&&(w=++u.frame,f=b-u.time*1e3,u.time=b=b/1e3,o+=y+(y>=s?4:s-y),x=1),v||(l=c(_)),x)for(d=0;d<a.length;d++)a[d](b,f,w,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ip&&(!ku&&$u()&&(Wi=ku=window,Qu=Wi.document||{},ii.gsap=Mn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Mn.version),Lp(Dl||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),$p.forEach(Jp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},ua=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ua=0,c=ha},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,v){var y=p?function(x,b,w,T){m(x,b,w,T),u.remove(y)}:m;return u.remove(m),a[v?"unshift":"push"](y),js(),y},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},u})(),js=function(){return!ua&&Zn.wake()},de={},Gx=/^[\d.\-M][\d.\-,\s]/,Wx=/["']/g,Xx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Wx,"").trim():+c,i=l.substr(a+1).trim();return e},qx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Yx=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Xx(e[1])]:qx(t).split(",").map(Fp)):de._CE&&Gx.test(t)?de._CE("",t):n},Zx=function(t){return function(e){return 1-t(1-e)}},cs=function(t,e){return t&&(Ye(t)?t:de[t]||Yx(t))||e},ds=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Un(t,function(a){de[a]=ii[a]=s,de[o=a.toLowerCase()]=n;for(var l in s)de[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[a+"."+l]=s[l]}),s},jp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Nu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Bu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*xx((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:jp(a);return s=Bu/s,l.config=function(c,h){return r(t,c,h)},l},Uu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:jp(n);return i.config=function(s){return r(t,s)},i};Un("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ds(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;ds("Elastic",Nu("in"),Nu("out"),Nu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ds("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ds("Circ",function(r){return-(Rp(1-r*r)-1)});ds("Sine",function(r){return r===1?1:-_x(r*mx)+1});ds("Back",Uu("in"),Uu("out"),Uu());de.SteppedEase=de.steps=ii.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Pe;return function(a){return((i*da(0,o,a)|0)+s)*n}}};la.ease=de["quad.out"];Un("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return tf+=r+","+r+"Params,"});var of=function(t,e){this.id=gx++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:nf,this.set=e?e.getSetter:Gl},fa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Qs(this,+e.duration,1,1),this.data=e.data,Be&&(this._ctx=Be,Be.data.push(this)),ua||Zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Qs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Vl(this,n),!s._dp||s.parent||kp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Pe||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Up(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ks(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Pe?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Pe?0:this._rts,this.totalTime(da(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Hl(this),Cx(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pe&&(this._tTime-=Pe)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Ex);var i=pn;return pn=n,rf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ep(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ep(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(yi(this,n),$n(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Pe),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Pe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pe,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Pe)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ye(n)?n:Op,l=function(){var h=i.then;i.then=null,s&&s(),Ye(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ia(this)},r})();ri(fa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pe,_prom:0,_ps:!1,_rts:1});var yn=(function(r){Cp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$n(n.sortChildren),We&&Xi(n.parent||We,hr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zp(hr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return oa(0,arguments,this),this},e.from=function(i,s,o){return oa(1,arguments,this),this},e.fromTo=function(i,s,o,a){return oa(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new je(i,s,yi(this,o),1),this},e.call=function(i,s,o){return Xi(this,je.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new je(i,o,yi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,sa(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,sa(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ge(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,_,m,p,v,y,x,b,w,T;if(this!==We&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,y=this._ts,p=!y,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(f=Ge(h%m),h===l?(_=this._repeat,f=c):(b=Ge(h/m),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=Ks(this._tTime,m),!a&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,T=1),_!==b&&!this._lock){var C=w&&b&1,M=C===(w&&_&1);if(_<b&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(T?0:Ge(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Lx(this,Ge(a),Ge(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!b&&(ni(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){v=0,g&&(h+=this._zTime=-Pe);break}}d=g}else{d=this._last;for(var S=i<0?i:f;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,o||pn&&rf(d)),f!==this._time||!this._ts&&!p){v=0,g&&(h+=this._zTime=S?-Pe:Pe);break}}d=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Pe)._zTime=f>=a?1:-1,this._ts))return this._start=x,Hl(this),this.render(i,s,o);this._onUpdate&&!s&&ni(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Fr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ni(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(fr(s)||(s=yi(this,s,i)),!(i instanceof fa)){if(Sn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(on(i))return this.addLabel(i,s);if(Ye(i))i=je.delayedCall(0,i);else return this}return this!==i?Xi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof je?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return on(i)?this.removeLabel(i):Ye(i)?this.killTweensOf(i):(i.parent===this&&zl(this,i),i===this._recent&&(this._recent=this._last),ls(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(Zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=yi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=je.delayedCall(0,s||ha,o);return a.data="isPause",this._hasPause=1,Xi(this,a,yi(this,i))},e.removePause=function(i){var s=this._first;for(i=yi(this,i);s;)s._start===i&&s.data==="isPause"&&Fr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Dr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Mi(i),l=this._first,c=fr(s),h;l;)l instanceof je?Tx(l._targets,a)&&(c?(!Dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=yi(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=je.to(o,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Pe,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Qs(g,m,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ri({startAt:{time:yi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Tp(this,yi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Tp(this,yi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Pe)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ge(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ls(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ls(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Si,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Ge(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Qs(o,o===We&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(We._ts&&(Up(We,Fl(i,We)),Np=Zn.frame),Zn.frame>=Sp){Sp+=Jn.autoSleep||120;var s=We._first;if((!s||!s._ts)&&Jn.autoSleep&&Zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Zn.sleep()}}},t})(fa);ri(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $x=function(t,e,n,i,s,o,a){var l=new Fn(this._pt,t,e,0,1,uf,null,s),c=0,h=0,u,f,d,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=to(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(Iu)||[];u=Iu.exec(i);)g=u[0],_=i.substring(c,u.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?fs(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Iu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ku.test(i)||p)&&(l.e=0),this._pt=l,l},af=function(t,e,n,i,s,o,a,l,c,h){Ye(i)&&(i=i(s||0,t,o));var u=t[e],f=n!=="get"?n:Ye(u)?c?t[e.indexOf("set")||!Ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,d=Ye(u)?c?tv:nm:hf,g;if(on(i)&&(~i.indexOf("random(")&&(i=to(i)),i.charAt(1)==="="&&(g=fs(f,i)+(mn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||qu)return!isNaN(f*i)&&i!==""?(g=new Fn(this._pt,t,e,+f||0,i-(f||0),typeof u=="boolean"?nv:im,0,d),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&kl(e,i),$x.call(this,t,e,f,i,d,l||Jn.stringFilter,c))},Jx=function(t,e,n,i,s){if(Ye(t)&&(t=aa(t,s,e,n,i)),!qi(t)||t.style&&t.nodeType||Sn(t)||Pp(t))return on(t)?aa(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=aa(t[a],s,e,n,i);return o},lf=function(t,e,n,i,s,o){var a,l,c,h;if(Yn[t]&&(a=new Yn[t]).init(s,a.rawVars?e[t]:Jx(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Fn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==$s))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Dr,qu,cf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,v=p&&p.data==="nested"?p.vars.targets:m,y=t._overwrite==="auto"&&!Zu,x=t.timeline,b=i.easeReverse||u,w,T,C,M,S,D,P,F,k,W,V,X,H;if(x&&(!f||!s)&&(s="none"),t._ease=cs(s,la.ease),t._rEase=b&&(cs(b)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||f&&!i.stagger){if(F=m[0]?Ur(m[0]).harness:0,X=F&&i[F.prop],w=Ul(i,ju),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&g?Pl:bx),_._lazy=0),o){if(Fr(t._startAt=je.set(m,ri({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!a&&!d)&&t._startAt.revert(Pl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),C=ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&$n(l),immediateRender:a,stagger:0,parent:p},w),X&&(C[F.prop]=X),Fr(t._startAt=je.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(Pl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Pe,Pe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&$n(l)||l&&!g,T=0;T<m.length;T++){if(S=m[T],P=S._gsap||ef(m)[T]._gsap,t._ptLookup[T]=W={},zu[P.id]&&Nr.length&&Nl(),V=v===m?T:v.indexOf(S),F&&(k=new F).init(S,X||w,t,V,v)!==!1&&(t._pt=M=new Fn(t._pt,S,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(K){W[K]=M}),k.priority&&(D=1)),!F||X)for(C in w)Yn[C]&&(k=lf(C,w,t,V,S,v))?k.priority&&(D=1):W[C]=M=af.call(t,S,C,"get",w[C],V,v,0,i.stringFilter);t._op&&t._op[T]&&t.kill(S,t._op[T]),y&&t._pt&&(Dr=t,We.killTweensOf(S,W,t.globalTime(e)),H=!t.parent,Dr=0),t._pt&&l&&(zu[P.id]=1)}D&&df(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,f&&e<=0&&x.render(Si,!0,!0)},Kx=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(h=f[d][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return qu=1,t.vars[e]="+=0",cf(t,a),qu=0,l?ca(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ze(n)+mn(u.e)),u.b&&(u.b=h.s+mn(u.b))},Qx=function(t,e){var n=t[0]?Ur(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Js({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},jx=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Sn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},aa=function(t,e,n,i,s){return Ye(t)?t.call(e,n,i,s):on(t)&&~t.indexOf("random(")?to(t):t},tm=tf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",em={};Un(tm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return em[r]=1});var je=(function(r){Cp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:sa(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||We,v=(Sn(n)||Pp(n)?fr(n[0]):"length"in i)?[n]:Mi(n),y,x,b,w,T,C,M,S;if(a._targets=v.length?ef(v):ca("GSAP target "+n+" not found. https://gsap.com",!Jn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Rl(c)||Rl(h)){i=a.vars;var D=i.easeReverse||i.yoyoEase;if(y=a.timeline=new yn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:v}),y.kill(),y.parent=y._dp=hr(a),y._start=0,f||Rl(c)||Rl(h)){if(w=v.length,M=f&&Wp(f),qi(f))for(T in f)~tm.indexOf(T)&&(S||(S={}),S[T]=f[T]);for(x=0;x<w;x++)b=Ul(i,em),b.stagger=0,D&&(b.easeReverse=D),S&&Js(b,S),C=v[x],b.duration=+aa(c,hr(a),x,C,v),b.delay=(+aa(h,hr(a),x,C,v)||0)-a._delay,!f&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),y.to(C,b,M?M(x,C,v):0),y._ease=de.none;y.duration()?c=h=0:a.timeline=0}else if(g){sa(ri(y.vars.defaults,{ease:"none"})),y._ease=cs(g.ease||i.ease||"none");var P=0,F,k,W;if(Sn(g))g.forEach(function(V){return y.to(v,V,">")}),y.duration();else{b={};for(T in g)T==="ease"||T==="easeEach"||jx(T,g[T],b,g.easeEach);for(T in b)for(F=b[T].sort(function(V,X){return V.t-X.t}),P=0,x=0;x<F.length;x++)k=F[x],W={ease:k.e,duration:(k.t-(x?F[x-1].t:0))/100*c},W[T]=k.v,y.to(v,W,P),P+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Zu&&(Dr=hr(a),We.killTweensOf(v),Dr=0),Xi(p,hr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Ge(p._time)&&$n(u)&&Rx(hr(a))&&p.data!=="nested")&&(a._tTime=-Pe,a.render(Math.max(0,-h)||0)),m&&zp(hr(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Pe&&!h?l:i<Pe?0:i,f,d,g,_,m,p,v,y;if(!c)Ix(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(f=Ge(u%_),u===l?(g=this._repeat,f=c):(m=Ge(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),p=this._yoyo&&g&1,p&&(f=c-f),m=Ks(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ge(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Hp(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var b=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(f/c);if(this._from&&(this.ratio=v=1-v),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(ni(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Hu(this,i,s,o),ni(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ni(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Hu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Fr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(ni(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ua||Zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||cf(this,c),h=this._ease(c/this._dur),Kx(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Vl(this,0),this.parent||Bp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Dr&&Dr.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&Qs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Mi(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,_,m,p;if((!s||s==="all")&&Ax(a,l))return s==="all"&&(this._pt=0),ia(this);for(u=this._op=this._op||[],s!=="all"&&(on(s)&&(_={},Un(s,function(v){return _[v]=1}),s=_),s=Qx(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(u[p]=s,g=f,d={}):(d=u[p]=u[p]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&zl(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&h&&ia(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return oa(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return oa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return We.killTweensOf(i,s,o)},t})(fa);ri(je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Un("staggerTo,staggerFrom,staggerFromTo",function(r){je[r]=function(){var t=new yn,e=Gu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var hf=function(t,e,n){return t[e]=n},nm=function(t,e,n){return t[e](n)},tv=function(t,e,n,i){return t[e](i.fp,n)},ev=function(t,e,n){return t.setAttribute(e,n)},Gl=function(t,e){return Ye(t[e])?nm:Bl(t[e])&&t.setAttribute?ev:hf},im=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},nv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},uf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ff=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},iv=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},rv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?zl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},sv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},df=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Fn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||im,this.d=l||this,this.set=c||hf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sv,this.m=n,this.mt=s,this.tween=i},r})();Un(tf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ju[r]=1});ii.TweenMax=ii.TweenLite=je;ii.TimelineLite=ii.TimelineMax=yn;We=new yn({sortChildren:!1,defaults:la,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Jn.stringFilter=sf;var hs=[],Ll={},ov=[],Ap=0,av=0,Fu=function(t){return(Ll[t]||ov).map(function(e){return e()})},Yu=function(){var t=Date.now(),e=[];t-Ap>2&&(Fu("matchMediaInit"),hs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Fu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ap=t,Fu("matchMedia"))},rm=(function(){function r(e,n){this.selector=n&&Wu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=av++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ye(n)&&(s=i,i=n,n=Ye);var o=this,a=function(){var c=Be,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Wu(s)),Be=o,u=i.apply(o,arguments),Ye(u)&&o._r.push(u),Be=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ye?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Be;Be=null,n(this),Be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof je&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof je)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=hs.length;o--;)hs[o].id===this.id&&hs.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),lv=(function(){function r(e){this.contexts=[],this.scope=e,Be&&Be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){qi(n)||(n={matches:n});var o=new rm(0,s||this.scope),a=o.conditions={},l,c,h;Be&&!o.selector&&(o.selector=Be.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Wi.matchMedia(n[c]),l&&(hs.indexOf(o)<0&&hs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yu):l.addEventListener("change",Yu)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ol={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Jp(i)})},timeline:function(t){return new yn(t)},getTweensOf:function(t,e){return We.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=Mi(t)[0]);var s=Ur(t||{}).get,o=n?Op:Fp;return n==="native"&&(n=""),t&&(e?o((Yn[e]&&Yn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Yn[a]&&Yn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Mi(t),t.length>1){var i=t.map(function(h){return Mn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Yn[e],a=Ur(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;$s._pt=0,u.init(t,n?h+n:h,$s,0,[t]),u.render(1,u),$s._pt&&ff(1,$s)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=Mn.to(t,ri((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return We.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=cs(t.ease,la.ease)),Mp(la,t||{})},config:function(t){return Mp(Jn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Yn[a]&&!ii[a]&&ca(e+" effect requires "+a+" plugin.")}),Lu[e]=function(a,l,c){return n(Mi(a),ri(l||{},s),c)},o&&(yn.prototype[e]=function(a,l,c){return this.add(Lu[e](a,qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=cs(e)},parseEase:function(t,e){return arguments.length?cs(t,e):de},getById:function(t){return We.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new yn(t),i,s;for(n.smoothChildTiming=$n(t.smoothChildTiming),We.remove(n),n._dp=0,n._time=n._tTime=We._time,i=We._first;i;)s=i._next,(e||!(!i._dur&&i instanceof je&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=s;return Xi(We,n,0),n},context:function(t,e){return t?new rm(t,e):Be},matchMedia:function(t){return new lv(t)},matchMediaRefresh:function(){return hs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yu()},addEventListener:function(t,e){var n=Ll[t]||(Ll[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ll[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:kx,wrapYoyo:zx,distribute:Wp,random:qp,snap:Xp,normalize:Bx,getUnit:mn,clamp:Nx,splitColor:Kp,toArray:Mi,selector:Wu,mapRange:Zp,pipe:Fx,unitize:Ox,interpolate:Hx,shuffle:Gp},install:Lp,effects:Lu,ticker:Zn,updateRoot:yn.updateRoot,plugins:Yn,globalTimeline:We,core:{PropTween:Fn,globals:Dp,Tween:je,Timeline:yn,Animation:fa,getCache:Ur,_removeLinkedListItem:zl,reverting:function(){return pn},context:function(t){return t&&Be&&(Be.data.push(t),t._ctx=Be),Be},suppressOverwrites:function(t){return Zu=t}}};Un("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ol[r]=je[r]});Zn.add(yn.updateRoot);$s=Ol.to({},{duration:0});var cv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},hv=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=cv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Ou=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(on(s)&&(l={},Un(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}hv(a,s)}}}},Mn=Ol.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ou("roundProps",Xu),Ou("modifiers"),Ou("snap",Xp))||Ol;je.version=yn.version=Mn.version="3.15.0";Ip=1;$u()&&js();var uv=de.Power0,fv=de.Power1,dv=de.Power2,pv=de.Power3,mv=de.Power4,gv=de.Linear,_v=de.Quad,xv=de.Cubic,vv=de.Quart,yv=de.Quint,Sv=de.Strong,Mv=de.Elastic,bv=de.Back,Ev=de.SteppedEase,Tv=de.Bounce,wv=de.Sine,Av=de.Expo,Cv=de.Circ;var sm,Br,no,vf,_s,Rv,om,yf,Pv=function(){return typeof window<"u"},pr={},gs=180/Math.PI,io=Math.PI/180,eo=Math.atan2,am=1e8,Sf=/([A-Z])/g,Iv=/(left|right|width|margin|padding|x)/i,Lv=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Dv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Nv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Uv=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Fv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},mm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},gm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ov=function(t,e,n){return t.style[e]=n},Bv=function(t,e,n){return t.style.setProperty(e,n)},kv=function(t,e,n){return t._gsap[e]=n},zv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Hv=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Vv=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Xe="transform",Kn=Xe+"Origin",Gv=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in pr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Yi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=dr(i,a)}):this.tfm[t]=o.x?o[t]:dr(i,t),t===Kn&&(this.tfm.zOrigin=o.zOrigin);else return Yi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Kn,e,"")),t=Xe}(s||e)&&this.props.push(t,e,s[t])},_m=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Wv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Sf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=yf(),(!s||!s.isStart)&&!n[Xe]&&(_m(n),i.zOrigin&&n[Kn]&&(n[Kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xm=function(t,e){var n={target:t,props:[],revert:Wv,save:Gv};return t._gsap||Mn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},vm,gf=function(t,e){var n=Br.createElementNS?Br.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Br.createElement(t);return n&&n.style?n:Br.createElement(t)},si=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Sf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ro(e)||e,1)||""},lm="O,Moz,ms,Ms,Webkit".split(","),ro=function(t,e,n){var i=e||_s,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(lm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?lm[o]:"")+t},_f=function(){Pv()&&window.document&&(sm=window,Br=sm.document,no=Br.documentElement,_s=gf("div")||{style:{}},Rv=gf("div"),Xe=ro(Xe),Kn=Xe+"Origin",_s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",vm=!!ro("perspective"),yf=Mn.core.reverting,vf=1)},cm=function(t){var e=t.ownerSVGElement,n=gf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),no.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),no.removeChild(n),s},hm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},ym=function(t){var e,n;try{e=t.getBBox()}catch{e=cm(t),n=1}return e&&(e.width||e.height)||n||(e=cm(t)),e&&!e.width&&!e.x&&!e.y?{x:+hm(t,["x","cx","x1"])||0,y:+hm(t,["y","cy","y1"])||0,width:0,height:0}:e},Sm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&ym(t))},zr=function(t,e){if(e){var n=t.style,i;e in pr&&e!==Kn&&(e=Xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Sf,"-$1").toLowerCase())):n.removeAttribute(e)}},kr=function(t,e,n,i,s,o){var a=new Fn(t._pt,e,n,0,1,o?gm:mm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},um={deg:1,rad:1,turn:1},Xv={grid:1,flex:1},Hr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=_s.style,l=Iv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,_,m,p;if(i===o||!s||um[i]||um[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&Sm(t),(d||o==="%")&&(pr[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],Ze(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Br||!_.appendChild)&&(_=Br.body),m=_._gsap,m&&d&&m.width&&l&&m.time===Zn.time&&!m.uncache)return Ze(s/m.width*u);if(d&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=u+i,g=t[h],v?t.style[e]=v:zr(t,e)}else(d||o==="%")&&!Xv[si(_,"display")]&&(a.position=si(t,"position")),_===t&&(a.position="static"),_.appendChild(_s),g=_s[h],_.removeChild(_s),a.position="absolute";return l&&d&&(m=Ur(_),m.time=Zn.time,m.width=_[h]),Ze(f?g*s/u:g&&s?u/g*s:0)},dr=function(t,e,n,i){var s;return vf||_f(),e in Yi&&e!=="transform"&&(e=Yi[e],~e.indexOf(",")&&(e=e.split(",")[0])),pr[e]&&e!=="transform"?(s=ga(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Xl(si(t,Kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wl[e]&&Wl[e](t,e,n)||si(t,e)||nf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hr(t,e,s,n)+n:s},qv=function(t,e,n,i){if(!n||n==="none"){var s=ro(e,t,1),o=s&&si(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=si(t,"borderTopColor"))}var a=new Fn(this._pt,t.style,e,0,1,uf),l=0,c=0,h,u,f,d,g,_,m,p,v,y,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=si(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=si(t,e)||i,_?t.style[e]=_:zr(t,e)),h=[n,i],sf(h),n=h[0],i=h[1],f=n.match(us)||[],b=i.match(us)||[],b.length){for(;u=us.exec(i);)m=u[0],v=i.substring(l,u.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=fs(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=us.lastIndex-y.length,y||(y=y||Jn.units[e]||x,l===i.length&&(i+=y,a.e+=y)),x!==y&&(d=Hr(t,e,_,y)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?gm:mm;return Ku.test(i)&&(a.e=0),this._pt=a,a},fm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Yv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=fm[n]||n,e[1]=fm[i]||i,e.join(" ")},Zv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],pr[a]&&(l=1,a=a==="transformOrigin"?Kn:Xe),zr(n,a);l&&(zr(n,Xe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ga(n,1),o.uncache=1,_m(i)))}},Wl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Fn(t._pt,e,n,0,0,Zv);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ma=[1,0,0,1,0,0],Mm={},bm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},dm=function(t){var e=si(t,Xe);return bm(e)?ma:e.substr(7).match(Ju).map(Ze)},Mf=function(t,e){var n=t._gsap||Ur(t),i=t.style,s=dm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ma:s):(s===ma&&!t.offsetParent&&t!==no&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,no.appendChild(t)),s=dm(t),l?i.display=l:zr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):no.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xf=function(t,e,n,i,s,o){var a=t._gsap,l=s||Mf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],y=e.split(" "),x=parseFloat(y[0])||0,b=parseFloat(y[1])||0,w,T,C,M;n?l!==ma&&(T=d*m-g*_)&&(C=x*(m/T)+b*(-_/T)+(_*v-m*p)/T,M=x*(-g/T)+b*(d/T)-(d*v-g*p)/T,x=C,b=M):(w=ym(t),x=w.x+(~y[0].indexOf("%")?x/100*w.width:x),b=w.y+(~(y[1]||y[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(p=x-c,v=b-h,a.xOffset=u+(p*d+v*_)-p,a.yOffset=f+(p*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Kn]="0px 0px",o&&(kr(o,a,"xOrigin",c,x),kr(o,a,"yOrigin",h,b),kr(o,a,"xOffset",u,a.xOffset),kr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},ga=function(t,e){var n=t._gsap||new of(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=si(t,Kn)||"0",h,u,f,d,g,_,m,p,v,y,x,b,w,T,C,M,S,D,P,F,k,W,V,X,H,K,L,it,ft,Ut,Rt,Pt;return h=u=f=_=m=p=v=y=x=0,d=g=1,n.svg=!!(t.getCTM&&Sm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),T=Mf(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),xf(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,w=n.yOrigin||0,T!==ma&&(D=T[0],P=T[1],F=T[2],k=T[3],h=W=T[4],u=V=T[5],T.length===6?(d=Math.sqrt(D*D+P*P),g=Math.sqrt(k*k+F*F),_=D||P?eo(P,D)*gs:0,v=F||k?eo(F,k)*gs+_:0,v&&(g*=Math.abs(Math.cos(v*io))),n.svg&&(h-=b-(b*D+w*F),u-=w-(b*P+w*k))):(Pt=T[6],Ut=T[7],L=T[8],it=T[9],ft=T[10],Rt=T[11],h=T[12],u=T[13],f=T[14],C=eo(Pt,ft),m=C*gs,C&&(M=Math.cos(-C),S=Math.sin(-C),X=W*M+L*S,H=V*M+it*S,K=Pt*M+ft*S,L=W*-S+L*M,it=V*-S+it*M,ft=Pt*-S+ft*M,Rt=Ut*-S+Rt*M,W=X,V=H,Pt=K),C=eo(-F,ft),p=C*gs,C&&(M=Math.cos(-C),S=Math.sin(-C),X=D*M-L*S,H=P*M-it*S,K=F*M-ft*S,Rt=k*S+Rt*M,D=X,P=H,F=K),C=eo(P,D),_=C*gs,C&&(M=Math.cos(C),S=Math.sin(C),X=D*M+P*S,H=W*M+V*S,P=P*M-D*S,V=V*M-W*S,D=X,W=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=Ze(Math.sqrt(D*D+P*P+F*F)),g=Ze(Math.sqrt(V*V+Pt*Pt)),C=eo(W,V),v=Math.abs(C)>2e-4?C*gs:0,x=Rt?1/(Rt<0?-Rt:Rt):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!bm(si(t,Xe)),X&&t.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ze(d),n.scaleY=Ze(g),n.rotation=Ze(_)+a,n.rotationX=Ze(m)+a,n.rotationY=Ze(p)+a,n.skewX=v+a,n.skewY=y+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Kn]=Xl(c)),n.xOffset=n.yOffset=0,n.force3D=Jn.force3D,n.renderTransform=n.svg?Jv:vm?Em:$v,n.uncache=0,n},Xl=function(t){return(t=t.split(" "))[0]+" "+t[1]},pf=function(t,e,n){var i=mn(e);return Ze(parseFloat(e)+parseFloat(Hr(t,"x",n+"px",i)))+i},$v=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Em(t,e)},ps="0deg",pa="0px",ms=") ",Em=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,y=n.zOrigin,x="",b=p==="auto"&&t&&t!==1||p===!0;if(y&&(u!==ps||h!==ps)){var w=parseFloat(h)*io,T=Math.sin(w),C=Math.cos(w),M;w=parseFloat(u)*io,M=Math.cos(w),o=pf(v,o,T*M*-y),a=pf(v,a,-Math.sin(w)*-y),l=pf(v,l,C*M*-y+y)}m!==pa&&(x+="perspective("+m+ms),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(b||o!==pa||a!==pa||l!==pa)&&(x+=l!==pa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ms),c!==ps&&(x+="rotate("+c+ms),h!==ps&&(x+="rotateY("+h+ms),u!==ps&&(x+="rotateX("+u+ms),(f!==ps||d!==ps)&&(x+="skew("+f+", "+d+ms),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ms),v.style[Xe]=x||"translate(0, 0)"},Jv=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,y=parseFloat(o),x=parseFloat(a),b,w,T,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=io,c*=io,b=Math.cos(l)*u,w=Math.sin(l)*u,T=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=io,M=Math.tan(c-h),M=Math.sqrt(1+M*M),T*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),b*=M,w*=M)),b=Ze(b),w=Ze(w),T=Ze(T),C=Ze(C)):(b=u,C=f,w=T=0),(y&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(y=Hr(d,"x",o,"px"),x=Hr(d,"y",a,"px")),(g||_||m||p)&&(y=Ze(y+g-(g*b+_*T)+m),x=Ze(x+_-(g*w+_*C)+p)),(i||s)&&(M=d.getBBox(),y=Ze(y+i/100*M.width),x=Ze(x+s/100*M.height)),M="matrix("+b+","+w+","+T+","+C+","+y+","+x+")",d.setAttribute("transform",M),v&&(d.style[Xe]=M)},Kv=function(t,e,n,i,s){var o=360,a=on(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?gs:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*am)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*am)%o-~~(c/o)*o)),t._pt=f=new Fn(t._pt,e,n,i,c,Dv),f.e=h,f.u="deg",t._props.push(n),f},pm=function(t,e){for(var n in e)t[n]=e[n];return t},Qv=function(t,e,n){var i=pm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xe]=e,a=ga(n,1),zr(n,Xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xe],o[Xe]=e,a=ga(n,1),o[Xe]=c);for(l in pr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=mn(c),g=mn(h),u=d!==g?Hr(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Fn(t._pt,a,l,u,f-u,mf),t._pt.u=g||0,t._props.push(l));pm(a,i)};Un("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Wl[t>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return dr(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,_){return d[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,u)}});var bf={name:"css",register:_f,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,f,d,g,_,m,p,v,y,x,b,w,T,C,M;vf||_f(),this.styles=this.styles||xm(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Yn[_]&&lf(_,e,n,i,t,s)))){if(d=typeof h,g=Wl[_],d==="function"&&(h=h.call(n,i,t,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=to(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ur.lastIndex=0,ur.test(c)||(m=mn(c),p=mn(h),p?m!==p&&(c=Hr(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],on(c)&&~c.indexOf("random(")&&(c=to(c)),mn(c+"")||c==="auto"||(c+=Jn.units[_]||mn(dr(t,_))||""),(c+"").charAt(1)==="="&&(c=dr(t,_))):c=dr(t,_),f=parseFloat(c),v=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),_ in Yi&&(_==="autoAlpha"&&(f===1&&dr(t,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,a.visibility),kr(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Yi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in pr,y){if(this.styles.save(_),M=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=si(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=si(t,"perspective"),S?t.style.perspective=S:zr(t,"perspective")}u=parseFloat(h)}if(x||(b=t._gsap,b.renderTransform&&!e.parseTransform||ga(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Fn(this._pt,a,Xe,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new Fn(this._pt,b,"scaleY",b.scaleY,(v?fs(b.scaleY,v+u):u)-b.scaleY||0,mf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Kn,0,a[Kn]),h=Yv(h),b.svg?xf(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==b.zOrigin&&kr(this,b,"zOrigin",b.zOrigin,p),kr(this,a,_,Xl(c),Xl(h)));continue}else if(_==="svgOrigin"){xf(t,h,1,w,0,this);continue}else if(_ in Mm){Kv(this,b,_,f,v?fs(f,v+h):h);continue}else if(_==="smoothOrigin"){kr(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){Qv(this,h,t);continue}}else _ in a||(_=ro(_)||_);if(y||(u||u===0)&&(f||f===0)&&!Lv.test(h)&&_ in a)m=(c+"").substr((f+"").length),u||(u=0),p=mn(h)||(_ in Jn.units?Jn.units[_]:m),m!==p&&(f=Hr(t,_,c,p)),this._pt=new Fn(this._pt,y?b:a,_,f,(v?fs(f,v+u):u)-f,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Fv:mf),this._pt.u=p||0,y&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=Uv):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Nv);else if(_ in a)qv.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,s);else if(_!=="parseTransform"){kl(_,h);continue}y||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}T&&df(this)},render:function(t,e){if(e.tween._time||!yf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:dr,aliases:Yi,getSetter:function(t,e,n){var i=Yi[e];return i&&i.indexOf(",")<0&&(e=i),e in pr&&e!==Kn&&(t._gsap.x||dr(t,"x"))?n&&om===n?e==="scale"?zv:kv:(om=n||{})&&(e==="scale"?Hv:Vv):t.style&&!Bl(t.style[e])?Ov:~e.indexOf("-")?Bv:Gl(t,e)},core:{_removeProperty:zr,_getMatrix:Mf}};Mn.utils.checkPrefix=ro;Mn.core.getStyleSaver=xm;(function(r,t,e,n){var i=Un(r+","+t+","+e,function(s){pr[s]=1});Un(t,function(s){Jn.units[s]="deg",Mm[s]=1}),Yi[i[13]]=r+","+t,Un(n,function(s){var o=s.split(":");Yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Un("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Jn.units[r]="px"});Mn.registerPlugin(bf);var kt=Mn.registerPlugin(bf)||Mn,rw=kt.core.Tween;function Tm(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function jv(r,t,e){return t&&Tm(r.prototype,t),e&&Tm(r,e),r}var gn,Zl,ty,oi,Vr,Gr,oo,Am,xs,ao,Cm,mr,Ii,Rm,Pm=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},Im=1,so=[],oe=[],Li=[],xa=Date.now,Ef=function(t,e){return e},ey=function(){var t=ao.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,oe),i.push.apply(i,Li),oe=n,Li=i,Ef=function(o,a){return e[o](a)}},_r=function(t,e){return~Li.indexOf(t)&&Li[Li.indexOf(t)+1][e]},va=function(t){return!!~Cm.indexOf(t)},Bn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},On=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ql="scrollLeft",Yl="scrollTop",Tf=function(){return mr&&mr.isPressed||oe.cache++},$l=function(t,e){var n=function i(s){if(s||s===0){Im&&(oi.history.scrollRestoration="manual");var o=mr&&mr.isPressed;s=i.v=Math.round(s)||(mr&&mr.iOS?1:0),t(s),i.cacheID=oe.cache,o&&Ef("ss",s)}else(e||oe.cache!==i.cacheID||Ef("ref"))&&(i.cacheID=oe.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},bn={s:ql,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$l(function(r){return arguments.length?oi.scrollTo(r,en.sc()):oi.pageXOffset||Vr[ql]||Gr[ql]||oo[ql]||0})},en={s:Yl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:$l(function(r){return arguments.length?oi.scrollTo(bn.sc(),r):oi.pageYOffset||Vr[Yl]||Gr[Yl]||oo[Yl]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||gn.utils.toArray)(t)[0]||(typeof t=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ny=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},gr=function(t,e){var n=e.s,i=e.sc;va(t)&&(t=Vr.scrollingElement||Gr);var s=oe.indexOf(t),o=i===en.sc?1:2;!~s&&(s=oe.push(t)-1),oe[s+o]||Bn(t,"scroll",Tf);var a=oe[s+o],l=a||(oe[s+o]=$l(_r(t,n),!0)||(va(t)?i:$l(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=gn.getProperty(t,"scrollBehavior")==="smooth"),l},Jl=function(t,e,n){var i=t,s=t,o=xa(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=xa();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(g){var _=a,m=s,p=xa();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:u,getVelocity:f}},_a=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Lm=function(){ao=gn.core.globals().ScrollTrigger,ao&&ao.core&&ey()},Dm=function(t){return gn=t||Pm(),!Zl&&gn&&typeof document<"u"&&document.body&&(oi=window,Vr=document,Gr=Vr.documentElement,oo=Vr.body,Cm=[oi,Vr,Gr,oo],ty=gn.utils.clamp,Rm=gn.core.context||function(){},xs="onpointerenter"in oo?"pointer":"mouse",Am=$e.isTouch=oi.matchMedia&&oi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in oi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ii=$e.eventTypes=("ontouchstart"in Gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Im=0},500),Zl=1),ao||Lm(),Zl};bn.op=en;oe.cache=0;var $e=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Zl||Dm(gn)||console.warn("Please gsap.registerPlugin(Observer)"),ao||Lm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,v=n.onDrag,y=n.onPress,x=n.onRelease,b=n.onRight,w=n.onLeft,T=n.onUp,C=n.onDown,M=n.onChangeX,S=n.onChangeY,D=n.onChange,P=n.onToggleX,F=n.onToggleY,k=n.onHover,W=n.onHoverEnd,V=n.onMove,X=n.ignoreCheck,H=n.isNormalizer,K=n.onGestureStart,L=n.onGestureEnd,it=n.onWheel,ft=n.onEnable,Ut=n.onDisable,Rt=n.onClick,Pt=n.scrollSpeed,$=n.capture,J=n.allowClicks,lt=n.lockAxis,yt=n.onLockAxis;this.target=a=kn(a)||Gr,this.vars=n,d&&(d=gn.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Pt=Pt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(oi.getComputedStyle(oo).lineHeight)||22);var vt,xt,Xt,I,qt,Ot,It,O=this,ce=0,St=0,$t=n.passive||!h&&n.passive!==!1,ee=gr(a,bn),xe=gr(a,en),R=ee(),E=xe(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Ii[0]==="pointerdown",Q=va(a),j=a.ownerDocument||Vr,Z=[0,0,0],Mt=[0,0,0],ot=0,At=function(){return ot=xa()},dt=function(Dt,jt){return(O.event=Dt)&&d&&ny(Dt.target,d)||jt&&G&&Dt.pointerType!=="touch"||X&&X(Dt,jt)},st=function(){O._vx.reset(),O._vy.reset(),xt.pause(),u&&u(O)},ut=function(){var Dt=O.deltaX=wm(Z),jt=O.deltaY=wm(Mt),pt=Math.abs(Dt)>=i,Yt=Math.abs(jt)>=i;D&&(pt||Yt)&&D(O,Dt,jt,Z,Mt),pt&&(b&&O.deltaX>0&&b(O),w&&O.deltaX<0&&w(O),M&&M(O),P&&O.deltaX<0!=ce<0&&P(O),ce=O.deltaX,Z[0]=Z[1]=Z[2]=0),Yt&&(C&&O.deltaY>0&&C(O),T&&O.deltaY<0&&T(O),S&&S(O),F&&O.deltaY<0!=St<0&&F(O),St=O.deltaY,Mt[0]=Mt[1]=Mt[2]=0),(I||Xt)&&(V&&V(O),Xt&&(m&&Xt===1&&m(O),v&&v(O),Xt=0),I=!1),Ot&&!(Ot=!1)&&yt&&yt(O),qt&&(it(O),qt=!1),vt=0},Vt=function(Dt,jt,pt){Z[pt]+=Dt,Mt[pt]+=jt,O._vx.update(Dt),O._vy.update(jt),c?vt||(vt=requestAnimationFrame(ut)):ut()},Ct=function(Dt,jt){lt&&!It&&(O.axis=It=Math.abs(Dt)>Math.abs(jt)?"x":"y",Ot=!0),It!=="y"&&(Z[2]+=Dt,O._vx.update(Dt,!0)),It!=="x"&&(Mt[2]+=jt,O._vy.update(jt,!0)),c?vt||(vt=requestAnimationFrame(ut)):ut()},ht=function(Dt){if(!dt(Dt,1)){Dt=_a(Dt,h);var jt=Dt.clientX,pt=Dt.clientY,Yt=jt-O.x,Bt=pt-O.y,Qt=O.isDragging;O.x=jt,O.y=pt,(Qt||(Yt||Bt)&&(Math.abs(O.startX-jt)>=s||Math.abs(O.startY-pt)>=s))&&(Xt||(Xt=Qt?2:1),Qt||(O.isDragging=!0),Ct(Yt,Bt))}},Jt=O.onPress=function(_t){dt(_t,1)||_t&&_t.button||(O.axis=It=null,xt.pause(),O.isPressed=!0,_t=_a(_t),ce=St=0,O.startX=O.x=_t.clientX,O.startY=O.y=_t.clientY,O._vx.reset(),O._vy.reset(),Bn(H?a:j,Ii[1],ht,$t,!0),O.deltaX=O.deltaY=0,y&&y(O))},N=O.onRelease=function(_t){if(!dt(_t,1)){On(H?a:j,Ii[1],ht,!0);var Dt=!isNaN(O.y-O.startY),jt=O.isDragging,pt=jt&&(Math.abs(O.x-O.startX)>3||Math.abs(O.y-O.startY)>3),Yt=_a(_t);!pt&&Dt&&(O._vx.reset(),O._vy.reset(),h&&J&&gn.delayedCall(.08,function(){if(xa()-ot>300&&!_t.defaultPrevented){if(_t.target.click)_t.target.click();else if(j.createEvent){var Bt=j.createEvent("MouseEvents");Bt.initMouseEvent("click",!0,!0,oi,1,Yt.screenX,Yt.screenY,Yt.clientX,Yt.clientY,!1,!1,!1,!1,0,null),_t.target.dispatchEvent(Bt)}}})),O.isDragging=O.isGesturing=O.isPressed=!1,u&&jt&&!H&&xt.restart(!0),Xt&&ut(),p&&jt&&p(O),x&&x(O,pt)}},rt=function(Dt){return Dt.touches&&Dt.touches.length>1&&(O.isGesturing=!0)&&K(Dt,O.isDragging)},at=function(){return(O.isGesturing=!1)||L(O)},mt=function(Dt){if(!dt(Dt)){var jt=ee(),pt=xe();Vt((jt-R)*Pt,(pt-E)*Pt,1),R=jt,E=pt,u&&xt.restart(!0)}},nt=function(Dt){if(!dt(Dt)){Dt=_a(Dt,h),it&&(qt=!0);var jt=(Dt.deltaMode===1?l:Dt.deltaMode===2?oi.innerHeight:1)*g;Vt(Dt.deltaX*jt,Dt.deltaY*jt,0),u&&!H&&xt.restart(!0)}},tt=function(Dt){if(!dt(Dt)){var jt=Dt.clientX,pt=Dt.clientY,Yt=jt-O.x,Bt=pt-O.y;O.x=jt,O.y=pt,I=!0,u&&xt.restart(!0),(Yt||Bt)&&Ct(Yt,Bt)}},Et=function(Dt){O.event=Dt,k(O)},Wt=function(Dt){O.event=Dt,W(O)},ge=function(Dt){return dt(Dt)||_a(Dt,h)&&Rt(O)};xt=O._dc=gn.delayedCall(f||.25,st).pause(),O.deltaX=O.deltaY=0,O._vx=Jl(0,50,!0),O._vy=Jl(0,50,!0),O.scrollX=ee,O.scrollY=xe,O.isDragging=O.isGesturing=O.isPressed=!1,Rm(this),O.enable=function(_t){return O.isEnabled||(Bn(Q?j:a,"scroll",Tf),o.indexOf("scroll")>=0&&Bn(Q?j:a,"scroll",mt,$t,$),o.indexOf("wheel")>=0&&Bn(a,"wheel",nt,$t,$),(o.indexOf("touch")>=0&&Am||o.indexOf("pointer")>=0)&&(Bn(a,Ii[0],Jt,$t,$),Bn(j,Ii[2],N),Bn(j,Ii[3],N),J&&Bn(a,"click",At,!0,!0),Rt&&Bn(a,"click",ge),K&&Bn(j,"gesturestart",rt),L&&Bn(j,"gestureend",at),k&&Bn(a,xs+"enter",Et),W&&Bn(a,xs+"leave",Wt),V&&Bn(a,xs+"move",tt)),O.isEnabled=!0,O.isDragging=O.isGesturing=O.isPressed=I=Xt=!1,O._vx.reset(),O._vy.reset(),R=ee(),E=xe(),_t&&_t.type&&Jt(_t),ft&&ft(O)),O},O.disable=function(){O.isEnabled&&(so.filter(function(_t){return _t!==O&&va(_t.target)}).length||On(Q?j:a,"scroll",Tf),O.isPressed&&(O._vx.reset(),O._vy.reset(),On(H?a:j,Ii[1],ht,!0)),On(Q?j:a,"scroll",mt,$),On(a,"wheel",nt,$),On(a,Ii[0],Jt,$),On(j,Ii[2],N),On(j,Ii[3],N),On(a,"click",At,!0),On(a,"click",ge),On(j,"gesturestart",rt),On(j,"gestureend",at),On(a,xs+"enter",Et),On(a,xs+"leave",Wt),On(a,xs+"move",tt),O.isEnabled=O.isPressed=O.isDragging=!1,Ut&&Ut(O))},O.kill=O.revert=function(){O.disable();var _t=so.indexOf(O);_t>=0&&so.splice(_t,1),mr===O&&(mr=0)},so.push(O),H&&va(a)&&(mr=O),O.enable(_)},jv(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$e.version="3.15.0";$e.create=function(r){return new $e(r)};$e.register=Dm;$e.getAll=function(){return so.slice()};$e.getById=function(r){return so.filter(function(t){return t.vars.id===r})[0]};Pm()&&gn.registerPlugin($e);var wt,uo,he,Me,ci,ve,kf,fc,Da,wa,Sa,Kl,En,mc,Lf,Hn,Nm,Um,fo,Km,wf,Qm,zn,Df,jm,tg,Wr,Nf,zf,po,Hf,Aa,Uf,Af,Ql=1,Tn=Date.now,Cf=Tn(),Ti=0,Ma=0,Fm=function(t,e,n){var i=li(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Om=function(t,e){return e&&(!li(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},iy=function r(){return Ma&&requestAnimationFrame(r)},Bm=function(){return mc=1},km=function(){return mc=0},Zi=function(t){return t},ba=function(t){return Math.round(t*1e5)/1e5||0},eg=function(){return typeof window<"u"},ng=function(){return wt||eg()&&(wt=window.gsap)&&wt.registerPlugin&&wt},Es=function(t){return!!~kf.indexOf(t)},ig=function(t){return(t==="Height"?Hf:he["inner"+t])||ci["client"+t]||ve["client"+t]},rg=function(t){return _r(t,"getBoundingClientRect")||(Es(t)?function(){return uc.width=he.innerWidth,uc.height=Hf,uc}:function(){return xr(t)})},ry=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=_r(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?ig(s):t["client"+s])||0}},sy=function(t,e){return!e||~Li.indexOf(t)?rg(t):function(){return uc}},$i=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=_r(t,n))?o()-rg(t)()[s]:Es(t)?(ci[n]||ve[n])-ig(i):t[n]-t["offset"+i])},jl=function(t,e){for(var n=0;n<fo.length;n+=3)(!e||~e.indexOf(fo[n+1]))&&t(fo[n],fo[n+1],fo[n+2])},li=function(t){return typeof t=="string"},wn=function(t){return typeof t=="function"},Ea=function(t){return typeof t=="number"},vs=function(t){return typeof t=="object"},ya=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},lo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},co=Math.abs,sg="left",og="top",Vf="right",Gf="bottom",Ss="width",Ms="height",Ca="Right",Ra="Left",Pa="Top",Ia="Bottom",nn="padding",bi="margin",go="Width",Wf="Height",an="px",Ei=function(t){return he.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},oy=function(t){var e=Ei(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},zm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},xr=function(t,e){var n=e&&Ei(t)[Lf]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},dc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},ag=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},ay=function(t){return function(e){return wt.utils.snap(ag(t),e)}},Xf=function(t){var e=wt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},ly=function(t){return function(e,n){return Xf(ag(t))(e,n.direction)}},tc=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},hn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ec=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Hm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nc={toggleActions:"play",anticipatePin:0},pc={top:0,left:0,center:.5,bottom:1,right:1},ac=function(t,e){if(li(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in pc?pc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ic=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,g=Me.createElement("div"),_=Es(n)||_r(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?ve:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,y=v?c:h,x="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===en?Vf:Gf)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],lc(g,0,i,v),g},lc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+go]=1,s["border"+a+go]=0,s[n.p]=e+"px",wt.set(t,s)},ae=[],Ff={},Na,Vm=function(){return Tn()-Ti>34&&(Na||(Na=requestAnimationFrame(vr)))},ho=function(){(!zn||!zn.isPressed||zn.startX>ve.clientWidth)&&(oe.cache++,zn?Na||(Na=requestAnimationFrame(vr)):vr(),Ti||ws("scrollStart"),Ti=Tn())},Rf=function(){tg=he.innerWidth,jm=he.innerHeight},Ta=function(t){oe.cache++,(t===!0||!En&&!Qm&&!Me.fullscreenElement&&!Me.webkitFullscreenElement&&(!Df||tg!==he.innerWidth||Math.abs(he.innerHeight-jm)>he.innerHeight*.25))&&fc.restart(!0)},Ts={},cy=[],lg=function r(){return hn(zt,"scrollEnd",r)||ys(!0)},ws=function(t){return Ts[t]&&Ts[t].map(function(e){return e()})||cy},ai=[],cg=function(t){for(var e=0;e<ai.length;e+=5)(!t||ai[e+4]&&ai[e+4].query===t)&&(ai[e].style.cssText=ai[e+1],ai[e].getBBox&&ai[e].setAttribute("transform",ai[e+2]||""),ai[e+3].uncache=1)},hg=function(){return oe.forEach(function(t){return wn(t)&&++t.cacheID&&(t.rec=t())})},qf=function(t,e){var n;for(Hn=0;Hn<ae.length;Hn++)n=ae[Hn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Aa=!0,e&&cg(e),e||ws("revert")},ug=function(t,e){oe.cache++,(e||!Vn)&&oe.forEach(function(n){return wn(n)&&n.cacheID++&&(n.rec=0)}),li(t)&&(he.history.scrollRestoration=zf=t)},Vn,bs=0,Gm,hy=function(){if(Gm!==bs){var t=Gm=bs;requestAnimationFrame(function(){return t===bs&&ys(!0)})}},fg=function(){ve.appendChild(po),Hf=!zn&&po.offsetHeight||he.innerHeight,ve.removeChild(po)},Wm=function(t){return Da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ys=function(t,e){if(ci=Me.documentElement,ve=Me.body,kf=[he,Me,ci,ve],Ti&&!t&&!Aa){un(zt,"scrollEnd",lg);return}fg(),Vn=zt.isRefreshing=!0,Aa||hg();var n=ws("refreshInit");Km&&zt.sort(),e||qf(),oe.forEach(function(i){wn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ae.slice(0).forEach(function(i){return i.refresh()}),Aa=!1,ae.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Uf=1,Wm(!0),ae.forEach(function(i){var s=$i(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Wm(!1),Uf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),oe.forEach(function(i){wn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ug(zf,1),fc.pause(),bs++,Vn=2,vr(2),ae.forEach(function(i){return wn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Vn=zt.isRefreshing=!1,ws("refresh")},Of=0,cc=1,La,vr=function(t){if(t===2||!Vn&&!Aa){zt.isUpdating=!0,La&&La.update(0);var e=ae.length,n=Tn(),i=n-Cf>=50,s=e&&ae[0].scroll();if(cc=Of>s?-1:1,Vn||(Of=s),i&&(Ti&&!mc&&n-Ti>200&&(Ti=0,ws("scrollEnd")),Sa=Cf,Cf=n),cc<0){for(Hn=e;Hn-- >0;)ae[Hn]&&ae[Hn].update(0,i);cc=1}else for(Hn=0;Hn<e;Hn++)ae[Hn]&&ae[Hn].update(0,i);zt.isUpdating=!1}Na=0},Bf=[sg,og,Gf,Vf,bi+Ia,bi+Ca,bi+Pa,bi+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hc=Bf.concat([Ss,Ms,"boxSizing","max"+go,"max"+Wf,"position",bi,nn,nn+Pa,nn+Ca,nn+Ia,nn+Ra]),uy=function(t,e,n){mo(n);var i=t._gsap;if(i.spacerIsNative)mo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Pf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Bf.length,o=e.style,a=t.style,l;s--;)l=Bf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Gf]=a[Vf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ss]=dc(t,bn)+an,o[Ms]=dc(t,en)+an,o[nn]=a[bi]=a[og]=a[sg]="0",mo(i),a[Ss]=a["max"+go]=n[Ss],a[Ms]=a["max"+Wf]=n[Ms],a[nn]=n[nn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},fy=/([A-Z])/g,mo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||wt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(fy,"-$1").toLowerCase())}},rc=function(t){for(var e=hc.length,n=t.style,i=[],s=0;s<e;s++)i.push(hc[s],n[hc[s]]);return i.t=t,i},dy=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},uc={left:0,top:0},Xm=function(t,e,n,i,s,o,a,l,c,h,u,f,d,g){wn(t)&&(t=t(l)),li(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?ac("0"+t.substr(3),n):0));var _=d?d.time():0,m,p,v;if(d&&d.seek(0),isNaN(t)||(t=+t),Ea(t))d&&(t=wt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&lc(a,n,i,!0);else{wn(e)&&(e=e(l));var y=(t||"0").split(" "),x,b,w,T;v=kn(e,l)||ve,x=xr(v)||{},(!x||!x.left&&!x.top)&&Ei(v).display==="none"&&(T=v.style.display,v.style.display="block",x=xr(v),T?v.style.display=T:v.style.removeProperty("display")),b=ac(y[0],x[i.d]),w=ac(y[1]||"0",n),t=x[i.p]-c[i.p]-h+b+s-w,a&&lc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+n,M=o._isStart;m="scroll"+i.d2,lc(o,C,i,M&&C>20||!M&&(u?Math.max(ve[m],ci[m]):o.parentNode[m])<=C+1),u&&(c=xr(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return d&&v&&(m=xr(v),d.seek(f),p=xr(v),d._caScrollDist=m[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},py=/(webkit|moz|length|cssText|inset)/i,qm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ve){t._stOrig=s.cssText,a=Ei(t);for(o in a)!+o&&!py.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;wt.core.getCache(t).uncache=1,e.appendChild(t)}},dg=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},sc=function(t,e,n){var i={};i[e.p]="+="+n,wt.set(t,i)},Ym=function(t,e){var n=gr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,g={};c=c||n();var _=dg(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){oe.cache++,o.tween&&vr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=wt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(t,"wheel",n.wheelHandler),zt.isTouch&&un(t,"touchmove",n.wheelHandler),s},zt=(function(){function r(e,n){uo||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Nf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ma){this.update=this.refresh=this.kill=Zi;return}n=zm(li(n)||Ea(n)||n.nodeType?{trigger:n}:n,nc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,y=s.once,x=s.snap,b=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:en,D=!u&&u!==0,P=kn(n.scroller||he),F=wt.core.getCache(P),k=Es(P),W=("pinType"in n?n.pinType:_r(P,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=D&&n.toggleActions.split(" "),H="markers"in n?n.markers:nc.markers,K=k?0:parseFloat(Ei(P)["border"+S.p2+go])||0,L=this,it=n.onRefreshInit&&function(){return n.onRefreshInit(L)},ft=ry(P,k,S),Ut=sy(P,k),Rt=0,Pt=0,$=0,J=gr(P,S),lt,yt,vt,xt,Xt,I,qt,Ot,It,O,ce,St,$t,ee,xe,R,E,G,Q,j,Z,Mt,ot,At,dt,st,ut,Vt,Ct,ht,Jt,N,rt,at,mt,nt,tt,Et,Wt;if(L._startClamp=L._endClamp=!1,L._dir=S,m*=45,L.scroller=P,L.scroll=T?T.time.bind(T):J,xt=J(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Km=1,n.refreshPriority===-9999&&(La=L)),F.tweenScroll=F.tweenScroll||{top:Ym(P,en),left:Ym(P,bn)},L.tweenTo=lt=F.tweenScroll[S.p],L.scrubDuration=function(pt){rt=Ea(pt)&&pt,rt?N?N.duration(pt):N=wt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:rt,paused:!0,onComplete:function(){return p&&p(L)}}):(N&&N.progress(1).kill(),N=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(u),ht=0,l||(l=i.vars.id)),x&&((!vs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in ve.style&&wt.set(k?[ve,ci]:P,{scrollBehavior:"auto"}),oe.forEach(function(pt){return wn(pt)&&pt.target===(k?Me.scrollingElement||ci:P)&&(pt.smooth=!1)}),vt=wn(x.snapTo)?x.snapTo:x.snapTo==="labels"?ay(i):x.snapTo==="labelsDirectional"?ly(i):x.directional!==!1?function(pt,Yt){return Xf(x.snapTo)(pt,Tn()-Pt<500?0:Yt.direction)}:wt.utils.snap(x.snapTo),at=x.duration||{min:.1,max:2},at=vs(at)?wa(at.min,at.max):wa(at,at),mt=wt.delayedCall(x.delay||rt/2||.1,function(){var pt=J(),Yt=Tn()-Pt<500,Bt=lt.tween;if((Yt||Math.abs(L.getVelocity())<10)&&!Bt&&!mc&&Rt!==pt){var Qt=(pt-I)/ee,Ke=i&&!D?i.totalProgress():Qt,re=Yt?0:(Ke-Jt)/(Tn()-Sa)*1e3||0,Oe=wt.utils.clamp(-Qt,1-Qt,co(re/2)*re/.185),Qe=Qt+(x.inertia===!1?0:Oe),Le,Ae,Se=x,jn=Se.onStart,De=Se.onInterrupt,Dn=Se.onComplete;if(Le=vt(Qe,L),Ea(Le)||(Le=Qe),Ae=Math.max(0,Math.round(I+Le*ee)),pt<=qt&&pt>=I&&Ae!==pt){if(Bt&&!Bt._initted&&Bt.data<=co(Ae-pt))return;x.inertia===!1&&(Oe=Le-Qt),lt(Ae,{duration:at(co(Math.max(co(Qe-Ke),co(Le-Ke))*.185/re/.05||0)),ease:x.ease||"power3",data:co(Ae-pt),onInterrupt:function(){return mt.restart(!0)&&De&&lo(L,De)},onComplete:function(){L.update(),Rt=J(),i&&!D&&(N?N.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),ht=Jt=i&&!D?i.totalProgress():L.progress,v&&v(L),Dn&&lo(L,Dn)}},pt,Oe*ee,Ae-pt-Oe*ee),jn&&lo(L,jn,lt.tween)}}else L.isActive&&Rt!==pt&&mt.restart(!0)}).pause()),l&&(Ff[l]=L),f=L.trigger=kn(f||d!==!0&&d),Wt=f&&f._gsap&&f._gsap.stRevert,Wt&&(Wt=Wt(L)),d=d===!0?f:kn(d),li(a)&&(a={targets:f,className:a}),d&&(g===!1||g===bi||(g=!g&&d.parentNode&&d.parentNode.style&&Ei(d.parentNode).display==="flex"?!1:nn),L.pin=d,yt=wt.core.getCache(d),yt.spacer?xe=yt.pinState:(w&&(w=kn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),yt.spacerIsNative=!!w,w&&(yt.spacerState=rc(w))),yt.spacer=G=w||Me.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),yt.pinState=xe=rc(d)),n.force3D!==!1&&wt.set(d,{force3D:!0}),L.spacer=G=yt.spacer,Ct=Ei(d),At=Ct[g+S.os2],j=wt.getProperty(d),Z=wt.quickSetter(d,S.a,an),Pf(d,G,Ct),E=rc(d)),H){St=vs(H)?zm(H,Hm):Hm,O=ic("scroller-start",l,P,S,St,0),ce=ic("scroller-end",l,P,S,St,0,O),Q=O["offset"+S.op.d2];var ge=kn(_r(P,"content")||P);Ot=this.markerStart=ic("start",l,ge,S,St,Q,0,T),It=this.markerEnd=ic("end",l,ge,S,St,Q,0,T),T&&(Et=wt.quickSetter([Ot,It],S.a,an)),!W&&!(Li.length&&_r(P,"fixedMarkers")===!0)&&(oy(k?ve:P),wt.set([O,ce],{force3D:!0}),st=wt.quickSetter(O,S.a,an),Vt=wt.quickSetter(ce,S.a,an))}if(T){var _t=T.vars.onUpdate,Dt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),_t&&_t.apply(T,Dt||[])})}if(L.previous=function(){return ae[ae.indexOf(L)-1]},L.next=function(){return ae[ae.indexOf(L)+1]},L.revert=function(pt,Yt){if(!Yt)return L.kill(!0);var Bt=pt!==!1||!L.enabled,Qt=En;Bt!==L.isReverted&&(Bt&&(nt=Math.max(J(),L.scroll.rec||0),$=L.progress,tt=i&&i.progress()),Ot&&[Ot,It,O,ce].forEach(function(Ke){return Ke.style.display=Bt?"none":"block"}),Bt&&(En=L,L.update(Bt)),d&&(!b||!L.isActive)&&(Bt?uy(d,G,xe):Pf(d,G,Ei(d),dt)),Bt||L.update(Bt),En=Qt,L.isReverted=Bt)},L.refresh=function(pt,Yt,Bt,Qt){if(!((En||!L.enabled)&&!Yt)){if(d&&pt&&Ti){un(r,"scrollEnd",lg);return}!Vn&&it&&it(L),En=L,lt.tween&&!Bt&&(lt.tween.kill(),lt.tween=0),N&&N.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ue){return ue.vars.immediateRender&&ue.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ke=ft(),re=Ut(),Oe=T?T.duration():$i(P,S),Qe=ee<=.01||!ee,Le=0,Ae=Qt||0,Se=vs(Bt)?Bt.end:n.end,jn=n.endTrigger||f,De=vs(Bt)?Bt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Dn=L.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,L),_i=f&&Math.max(0,ae.indexOf(L))||0,sn=_i,A,B,q,Y,z,et,ct,Tt,bt,Gt,Ft,Nt,ne;for(H&&vs(Bt)&&(Nt=wt.getProperty(O,S.p),ne=wt.getProperty(ce,S.p));sn-- >0;)et=ae[sn],et.end||et.refresh(0,1)||(En=L),ct=et.pin,ct&&(ct===f||ct===d||ct===Dn)&&!et.isReverted&&(Gt||(Gt=[]),Gt.unshift(et),et.revert(!0,!0)),et!==ae[sn]&&(_i--,sn--);for(wn(De)&&(De=De(L)),De=Fm(De,"start",L),I=Xm(De,f,Ke,S,J(),Ot,O,L,re,K,W,Oe,T,L._startClamp&&"_startClamp")||(d?-.001:0),wn(Se)&&(Se=Se(L)),li(Se)&&!Se.indexOf("+=")&&(~Se.indexOf(" ")?Se=(li(De)?De.split(" ")[0]:"")+Se:(Le=ac(Se.substr(2),Ke),Se=li(De)?De:(T?wt.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,I):I)+Le,jn=f)),Se=Fm(Se,"end",L),qt=Math.max(I,Xm(Se||(jn?"100% 0":Oe),jn,Ke,S,J()+Le,It,ce,L,re,K,W,Oe,T,L._endClamp&&"_endClamp"))||-.001,Le=0,sn=_i;sn--;)et=ae[sn]||{},ct=et.pin,ct&&et.start-et._pinPush<=I&&!T&&et.end>0&&(A=et.end-(L._startClamp?Math.max(0,et.start):et.start),(ct===f&&et.start-et._pinPush<I||ct===Dn)&&isNaN(De)&&(Le+=A*(1-et.progress)),ct===d&&(Ae+=A));if(I+=Le,qt+=Le,L._startClamp&&(L._startClamp+=Le),L._endClamp&&!Vn&&(L._endClamp=qt||-.001,qt=Math.min(qt,$i(P,S))),ee=qt-I||(I-=.01)&&.001,Qe&&($=wt.utils.clamp(0,1,wt.utils.normalize(I,qt,nt))),L._pinPush=Ae,Ot&&Le&&(A={},A[S.a]="+="+Le,Dn&&(A[S.p]="-="+J()),wt.set([Ot,It],A)),d&&!(Uf&&L.end>=$i(P,S)))A=Ei(d),Y=S===en,q=J(),Mt=parseFloat(j(S.a))+Ae,!Oe&&qt>1&&(Ft=(k?Me.scrollingElement||ci:P).style,Ft={style:Ft,value:Ft["overflow"+S.a.toUpperCase()]},k&&Ei(ve)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ft.style["overflow"+S.a.toUpperCase()]="scroll")),Pf(d,G,A),E=rc(d),B=xr(d,!0),Tt=W&&gr(P,Y?bn:en)(),g?(dt=[g+S.os2,ee+Ae+an],dt.t=G,sn=g===nn?dc(d,S)+ee+Ae:0,sn&&(dt.push(S.d,sn+an),G.style.flexBasis!=="auto"&&(G.style.flexBasis=sn+an)),mo(dt),Dn&&ae.forEach(function(ue){ue.pin===Dn&&ue.vars.pinSpacing!==!1&&(ue._subPinOffset=!0)}),W&&J(nt)):(sn=dc(d,S),sn&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=sn+an)),W&&(z={top:B.top+(Y?q-I:Tt)+an,left:B.left+(Y?Tt:q-I)+an,boxSizing:"border-box",position:"fixed"},z[Ss]=z["max"+go]=Math.ceil(B.width)+an,z[Ms]=z["max"+Wf]=Math.ceil(B.height)+an,z[bi]=z[bi+Pa]=z[bi+Ca]=z[bi+Ia]=z[bi+Ra]="0",z[nn]=A[nn],z[nn+Pa]=A[nn+Pa],z[nn+Ca]=A[nn+Ca],z[nn+Ia]=A[nn+Ia],z[nn+Ra]=A[nn+Ra],R=dy(xe,z,b),Vn&&J(0)),i?(bt=i._initted,wf(1),i.render(i.duration(),!0,!0),ot=j(S.a)-Mt+ee+Ae,ut=Math.abs(ee-ot)>1,W&&ut&&R.splice(R.length-2,2),i.render(0,!0,!0),bt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),wf(0)):ot=ee,Ft&&(Ft.value?Ft.style["overflow"+S.a.toUpperCase()]=Ft.value:Ft.style.removeProperty("overflow-"+S.a));else if(f&&J()&&!T)for(B=f.parentNode;B&&B!==ve;)B._pinOffset&&(I-=B._pinOffset,qt-=B._pinOffset),B=B.parentNode;Gt&&Gt.forEach(function(ue){return ue.revert(!1,!0)}),L.start=I,L.end=qt,xt=Xt=Vn?nt:J(),!T&&!Vn&&(xt<nt&&J(nt),L.scroll.rec=0),L.revert(!1,!0),Pt=Tn(),mt&&(Rt=-1,mt.restart(!0)),En=0,i&&D&&(i._initted||tt)&&i.progress()!==tt&&i.progress(tt||0,!0).render(i.time(),!0,!0),(Qe||$!==L.progress||T||_||i&&!i._initted)&&(i&&!D&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(T&&I<-.001&&!$?wt.utils.normalize(I,qt,0):$,!0),L.progress=Qe||(xt-I)/ee===$?0:$),d&&g&&(G._pinOffset=Math.round(L.progress*ot)),N&&N.invalidate(),isNaN(Nt)||(Nt-=wt.getProperty(O,S.p),ne-=wt.getProperty(ce,S.p),sc(O,S,Nt),sc(Ot,S,Nt-(Qt||0)),sc(ce,S,ne),sc(It,S,ne-(Qt||0))),Qe&&!Vn&&L.update(),h&&!Vn&&!$t&&($t=!0,h(L),$t=!1)}},L.getVelocity=function(){return(J()-Xt)/(Tn()-Sa)*1e3||0},L.endAnimation=function(){ya(L.callbackAnimation),i&&(N?N.progress(1):i.paused()?D||ya(i,L.direction<0,1):ya(i,i.reversed()))},L.labelToScroll=function(pt){return i&&i.labels&&(I||L.refresh()||I)+i.labels[pt]/i.duration()*ee||0},L.getTrailing=function(pt){var Yt=ae.indexOf(L),Bt=L.direction>0?ae.slice(0,Yt).reverse():ae.slice(Yt+1);return(li(pt)?Bt.filter(function(Qt){return Qt.vars.preventOverlaps===pt}):Bt).filter(function(Qt){return L.direction>0?Qt.end<=I:Qt.start>=qt})},L.update=function(pt,Yt,Bt){if(!(T&&!Bt&&!pt)){var Qt=Vn===!0?nt:L.scroll(),Ke=pt?0:(Qt-I)/ee,re=Ke<0?0:Ke>1?1:Ke||0,Oe=L.progress,Qe,Le,Ae,Se,jn,De,Dn,_i;if(Yt&&(Xt=xt,xt=T?J():Qt,x&&(Jt=ht,ht=i&&!D?i.totalProgress():re)),m&&d&&!En&&!Ql&&Ti&&(!re&&I<Qt+(Qt-Xt)/(Tn()-Sa)*m?re=1e-4:re===1&&qt>Qt+(Qt-Xt)/(Tn()-Sa)*m&&(re=.9999)),re!==Oe&&L.enabled){if(Qe=L.isActive=!!re&&re<1,Le=!!Oe&&Oe<1,De=Qe!==Le,jn=De||!!re!=!!Oe,L.direction=re>Oe?1:-1,L.progress=re,jn&&!En&&(Ae=re&&!Oe?0:re===1?1:Oe===1?2:3,D&&(Se=!De&&X[Ae+1]!=="none"&&X[Ae+1]||X[Ae],_i=i&&(Se==="complete"||Se==="reset"||Se in i))),M&&(De||_i)&&(_i||u||!i)&&(wn(M)?M(L):L.getTrailing(M).forEach(function(q){return q.endAnimation()})),D||(N&&!En&&!Ql?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",re,i._tTime/i._tDur):(N.vars.totalProgress=re,N.invalidate().restart())):i&&i.totalProgress(re,!!(En&&(Pt||pt)))),d){if(pt&&g&&(G.style[g+S.os2]=At),!W)Z(ba(Mt+ot*re));else if(jn){if(Dn=!pt&&re>Oe&&qt+1>Qt&&Qt+1>=$i(P,S),b)if(!pt&&(Qe||Dn)){var sn=xr(d,!0),A=Qt-I;qm(d,ve,sn.top+(S===en?A:0)+an,sn.left+(S===en?0:A)+an)}else qm(d,G);mo(Qe||Dn?R:E),ut&&re<1&&Qe||Z(Mt+(re===1&&!Dn?ot:0))}}x&&!lt.tween&&!En&&!Ql&&mt.restart(!0),a&&(De||y&&re&&(re<1||!Af))&&Da(a.targets).forEach(function(q){return q.classList[Qe||y?"add":"remove"](a.className)}),o&&!D&&!pt&&o(L),jn&&!En?(D&&(_i&&(Se==="complete"?i.pause().totalProgress(1):Se==="reset"?i.restart(!0).pause():Se==="restart"?i.restart(!0):i[Se]()),o&&o(L)),(De||!Af)&&(c&&De&&lo(L,c),V[Ae]&&lo(L,V[Ae]),y&&(re===1?L.kill(!1,1):V[Ae]=0),De||(Ae=re===1?1:3,V[Ae]&&lo(L,V[Ae]))),C&&!Qe&&Math.abs(L.getVelocity())>(Ea(C)?C:2500)&&(ya(L.callbackAnimation),N?N.progress(1):ya(i,Se==="reverse"?1:!re,1))):D&&o&&!En&&o(L)}if(Vt){var B=T?Qt/T.duration()*(T._caScrollDist||0):Qt;st(B+(O._isFlipped?1:0)),Vt(B)}Et&&Et(-Qt/T.duration()*(T._caScrollDist||0))}},L.enable=function(pt,Yt){L.enabled||(L.enabled=!0,un(P,"resize",Ta),k||un(P,"scroll",ho),it&&un(r,"refreshInit",it),pt!==!1&&(L.progress=$=0,xt=Xt=Rt=J()),Yt!==!1&&L.refresh())},L.getTween=function(pt){return pt&&lt?lt.tween:N},L.setPositions=function(pt,Yt,Bt,Qt){if(T){var Ke=T.scrollTrigger,re=T.duration(),Oe=Ke.end-Ke.start;pt=Ke.start+Oe*pt/re,Yt=Ke.start+Oe*Yt/re}L.refresh(!1,!1,{start:Om(pt,Bt&&!!L._startClamp),end:Om(Yt,Bt&&!!L._endClamp)},Qt),L.update()},L.adjustPinSpacing=function(pt){if(dt&&pt){var Yt=dt.indexOf(S.d)+1;dt[Yt]=parseFloat(dt[Yt])+pt+an,dt[1]=parseFloat(dt[1])+pt+an,mo(dt)}},L.disable=function(pt,Yt){if(pt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Yt||N&&N.pause(),nt=0,yt&&(yt.uncache=1),it&&hn(r,"refreshInit",it),mt&&(mt.pause(),lt.tween&&lt.tween.kill()&&(lt.tween=0)),!k)){for(var Bt=ae.length;Bt--;)if(ae[Bt].scroller===P&&ae[Bt]!==L)return;hn(P,"resize",Ta),k||hn(P,"scroll",ho)}},L.kill=function(pt,Yt){L.disable(pt,Yt),N&&!Yt&&N.kill(),l&&delete Ff[l];var Bt=ae.indexOf(L);Bt>=0&&ae.splice(Bt,1),Bt===Hn&&cc>0&&Hn--,Bt=0,ae.forEach(function(Qt){return Qt.scroller===L.scroller&&(Bt=1)}),Bt||Vn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Yt||i.kill()),Ot&&[Ot,It,O,ce].forEach(function(Qt){return Qt.parentNode&&Qt.parentNode.removeChild(Qt)}),La===L&&(La=0),d&&(yt&&(yt.uncache=1),Bt=0,ae.forEach(function(Qt){return Qt.pin===d&&Bt++}),Bt||(yt.spacer=0)),n.onKill&&n.onKill(L)},ae.push(L),L.enable(!1,!1),Wt&&Wt(L),i&&i.add&&!ee){var jt=L.update;L.update=function(){L.update=jt,oe.cache++,I||qt||L.refresh()},wt.delayedCall(.01,L.update),ee=.01,I=qt=0}else L.refresh();d&&hy()},r.register=function(n){return uo||(wt=n||ng(),eg()&&window.document&&r.enable(),uo=Ma),uo},r.defaults=function(n){if(n)for(var i in n)nc[i]=n[i];return nc},r.disable=function(n,i){Ma=0,ae.forEach(function(o){return o[i?"kill":"disable"](n)}),hn(he,"wheel",ho),hn(Me,"scroll",ho),clearInterval(Kl),hn(Me,"touchcancel",Zi),hn(ve,"touchstart",Zi),tc(hn,Me,"pointerdown,touchstart,mousedown",Bm),tc(hn,Me,"pointerup,touchend,mouseup",km),fc.kill(),jl(hn);for(var s=0;s<oe.length;s+=3)ec(hn,oe[s],oe[s+1]),ec(hn,oe[s],oe[s+2])},r.enable=function(){if(he=window,Me=document,ci=Me.documentElement,ve=Me.body,wt){if(Da=wt.utils.toArray,wa=wt.utils.clamp,Nf=wt.core.context||Zi,wf=wt.core.suppressOverwrites||Zi,zf=he.history.scrollRestoration||"auto",Of=he.pageYOffset||0,wt.core.globals("ScrollTrigger",r),ve){Ma=1,po=document.createElement("div"),po.style.height="100vh",po.style.position="absolute",fg(),iy(),$e.register(wt),r.isTouch=$e.isTouch,Wr=$e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Df=$e.isTouch===1,un(he,"wheel",ho),kf=[he,Me,ci,ve],wt.matchMedia?(r.matchMedia=function(h){var u=wt.matchMedia(),f;for(f in h)u.add(f,h[f]);return u},wt.addEventListener("matchMediaInit",function(){hg(),qf()}),wt.addEventListener("matchMediaRevert",function(){return cg()}),wt.addEventListener("matchMedia",function(){ys(0,1),ws("matchMedia")}),wt.matchMedia().add("(orientation: portrait)",function(){return Rf(),Rf})):console.warn("Requires GSAP 3.11.0 or later"),Rf(),un(Me,"scroll",ho);var n=ve.hasAttribute("style"),i=ve.style,s=i.borderTopStyle,o=wt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=xr(ve),en.m=Math.round(a.top+en.sc())||0,bn.m=Math.round(a.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),Kl=setInterval(Vm,250),wt.delayedCall(.5,function(){return Ql=0}),un(Me,"touchcancel",Zi),un(ve,"touchstart",Zi),tc(un,Me,"pointerdown,touchstart,mousedown",Bm),tc(un,Me,"pointerup,touchend,mouseup",km),Lf=wt.utils.checkPrefix("transform"),hc.push(Lf),uo=Tn(),fc=wt.delayedCall(.2,ys).pause(),fo=[Me,"visibilitychange",function(){var h=he.innerWidth,u=he.innerHeight;Me.hidden?(Nm=h,Um=u):(Nm!==h||Um!==u)&&Ta()},Me,"DOMContentLoaded",ys,he,"load",ys,he,"resize",Ta],jl(un),ae.forEach(function(h){return h.enable(0,1)}),l=0;l<oe.length;l+=3)ec(hn,oe[l],oe[l+1]),ec(hn,oe[l],oe[l+2])}else if(Me){var c=function h(){r.enable(),Me.removeEventListener("DOMContentLoaded",h)};Me.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Af=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Kl)||(Kl=i)&&setInterval(Vm,i),"ignoreMobileResize"in n&&(Df=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(jl(hn)||jl(un,n.autoRefreshEvents||"none"),Qm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=kn(n),o=oe.indexOf(s),a=Es(s);~o&&oe.splice(o,a?6:2),i&&(a?Li.unshift(he,i,ve,i,ci,i):Li.unshift(s,i))},r.clearMatchMedia=function(n){ae.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(li(n)?kn(n):n).getBoundingClientRect(),a=o[s?Ss:Ms]*i||0;return s?o.right-a>0&&o.left+a<he.innerWidth:o.bottom-a>0&&o.top+a<he.innerHeight},r.positionInViewport=function(n,i,s){li(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?Ss:Ms],l=i==null?a/2:i in pc?pc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/he.innerWidth:(o.top+l)/he.innerHeight},r.killAll=function(n){if(ae.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ts.killAll||[];Ts={},i.forEach(function(s){return s()})}},r})();zt.version="3.15.0";zt.saveStyles=function(r){return r?Da(r).forEach(function(t){if(t&&t.style){var e=ai.indexOf(t);e>=0&&ai.splice(e,5),ai.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),Nf())}}):ai};zt.revert=function(r,t){return qf(!r,t)};zt.create=function(r,t){return new zt(r,t)};zt.refresh=function(r){return r?Ta(!0):(uo||zt.register())&&ys(!0)};zt.update=function(r){return++oe.cache&&vr(r===!0?2:0)};zt.clearScrollMemory=ug;zt.maxScroll=function(r,t){return $i(r,t?bn:en)};zt.getScrollFunc=function(r,t){return gr(kn(r),t?bn:en)};zt.getById=function(r){return Ff[r]};zt.getAll=function(){return ae.filter(function(r){return r.vars.id!=="ScrollSmoother"})};zt.isScrolling=function(){return!!Ti};zt.snapDirectional=Xf;zt.addEventListener=function(r,t){var e=Ts[r]||(Ts[r]=[]);~e.indexOf(t)||e.push(t)};zt.removeEventListener=function(r,t){var e=Ts[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],f=[],d=wt.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(g){u.length||d.restart(!0),u.push(g.trigger),f.push(g),s<=u.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&wn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return wn(s)&&(s=s(),un(zt,"refresh",function(){return s=t.batchMax()})),Da(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(zt.create(c))}),e};var Zm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},If=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+($e.isTouch?" pinch-zoom":""):"none",t===ci&&r(ve,e)},oc={auto:1,scroll:1},my=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||wt.core.getCache(s),a=Tn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ve&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(oc[(l=Ei(s)).overflowY]||oc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Es(s)&&(oc[(l=Ei(s)).overflowY]||oc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},pg=function(t,e,n,i){return $e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&my,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&un(Me,$e.eventTypes[0],Jm,!1,!0)},onDisable:function(){return hn(Me,$e.eventTypes[0],Jm,!0)}})},gy=/(input|label|select|textarea)/i,$m,Jm=function(t){var e=gy.test(t.target.tagName);(e||$m)&&(t._gsapAllow=!0,$m=e)},_y=function(t){vs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=kn(t.target)||ci,h=wt.core.globals().ScrollSmoother,u=h&&h.get(),f=Wr&&(t.content&&kn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),d=gr(c,en),g=gr(c,bn),_=1,m=($e.isTouch&&he.visualViewport?he.visualViewport.scale*he.visualViewport.width:he.outerWidth)/he.innerWidth,p=0,v=wn(i)?function(){return i(a)}:function(){return i||2.8},y,x,b=pg(c,t.type,!0,s),w=function(){return x=!1},T=Zi,C=Zi,M=function(){l=$i(c,en),C=wa(Wr?1:0,l),n&&(T=wa(0,$i(c,bn))),y=bs},S=function(){f._gsap.y=ba(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},D=function(){if(x){requestAnimationFrame(w);var H=ba(a.deltaY/2),K=C(d.v-H);if(f&&K!==d.v+d.offset){d.offset=K-d.v;var L=ba((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",d.cacheID=oe.cache,vr()}return!0}d.offset&&S(),x=!0},P,F,k,W,V=function(){M(),P.isActive()&&P.vars.scrollY>l&&(d()>l?P.progress(1)&&d(l):P.resetTo("scrollY",l))};return f&&wt.set(f,{y:"+=0"}),t.ignoreCheck=function(X){return Wr&&X.type==="touchmove"&&D(X)||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){x=!1;var X=_;_=ba((he.visualViewport&&he.visualViewport.scale||1)/m),P.pause(),X!==_&&If(c,_>1.01?!0:n?!1:"x"),F=g(),k=d(),M(),y=bs},t.onRelease=t.onGestureStart=function(X,H){if(d.offset&&S(),!H)W.restart(!0);else{oe.cache++;var K=v(),L,it;n&&(L=g(),it=L+K*.05*-X.velocityX/.227,K*=Zm(g,L,it,$i(c,bn)),P.vars.scrollX=T(it)),L=d(),it=L+K*.05*-X.velocityY/.227,K*=Zm(d,L,it,$i(c,en)),P.vars.scrollY=C(it),P.invalidate().duration(K).play(.01),(Wr&&P.vars.scrollY>=l||L>=l-1)&&wt.to({},{onUpdate:V,duration:K})}o&&o(X)},t.onWheel=function(){P._ts&&P.pause(),Tn()-p>1e3&&(y=0,p=Tn())},t.onChange=function(X,H,K,L,it){if(bs!==y&&M(),H&&n&&g(T(L[2]===H?F+(X.startX-X.x):g()+H-L[1])),K){d.offset&&S();var ft=it[2]===K,Ut=ft?k+X.startY-X.y:d()+K-it[1],Rt=C(Ut);ft&&Ut!==Rt&&(k+=Rt-Ut),d(Rt)}(K||H)&&vr()},t.onEnable=function(){If(c,n?!1:"x"),zt.addEventListener("refresh",V),un(he,"resize",V),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),b.enable()},t.onDisable=function(){If(c,!0),hn(he,"resize",V),zt.removeEventListener("refresh",V),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new $e(t),a.iOS=Wr,Wr&&!d()&&d(1),Wr&&wt.ticker.add(Zi),W=a._dc,P=wt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:dg(d,d(),function(){return P.pause()})},onUpdate:vr,onComplete:W.vars.onComplete}),a};zt.sort=function(r){if(wn(r))return ae.sort(r);var t=he.pageYOffset||0;return zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+he.innerHeight}),ae.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};zt.observe=function(r){return new $e(r)};zt.normalizeScroll=function(r){if(typeof r>"u")return zn;if(r===!0&&zn)return zn.enable();if(r===!1){zn&&zn.kill(),zn=r;return}var t=r instanceof $e?r:_y(r);return zn&&zn.target===t.target&&zn.kill(),Es(t.target)&&(zn=t),t};zt.core={_getVelocityProp:Jl,_inputObserver:pg,_scrollers:oe,_proxies:Li,bridge:{ss:function(){Ti||ws("scrollStart"),Ti=Tn()},ref:function(){return En}}};ng()&&wt.registerPlugin(zt);var Ua,Fa,mg=typeof Symbol=="function"?Symbol():"_split",Zf,xy=()=>Zf||Xr.register(window.gsap),gg=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Oa=r=>r?typeof r=="string"?Oa(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...Oa(e)):t.push(e),t),[]):[r]:[],_g=r=>Oa(r).filter(t=>t&&t.nodeType===1),$f=[],Yf=function(){},vy={add:r=>r()},yy=/\s+/g,xg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),gc={left:0,top:0,width:0,height:0},Sy=(r,t)=>{for(;++t<r.length&&r[t]===gc;);return r[t]||gc},vg=({element:r,html:t,ariaL:e,ariaH:n})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},yg=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||$f),n=r.length,i,s,o,a;if(e.size)for(;--n>-1;){s=r[n];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(i=0,a=s;o.startsWith(a+=r[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){r[n]=o,r.splice(n+1,i);break}}}}return r},Sg=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),_o=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Jf=(r,t,e)=>{let n=t[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let u=document.createElement(i),f=e.length+1;return n&&(u.className=n+(l?" "+n+f:"")),o&&u.style.setProperty("--"+r,f+""),s!=="none"&&u.setAttribute("aria-hidden","true"),i!=="span"&&(u.style.position="relative",u.style.display=a),u.textContent=h,e.push(u),u};return l&&(n=n.replace("++","")),c.collection=e,c},My=(r,t,e,n)=>{let i=Jf("line",e,n),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Mg=(r,t,e,n,i,s,o,a,l,c)=>{var h;let u=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:g=!0,prepareText:_}=t,m=r.getBoundingClientRect(),p=m,v=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",y=0,x=e.collection,b,w,T,C,M,S,D,P,F,k,W,V,X,H,K,L,it,ft;for(typeof d=="object"?(T=d.delimiter||d,w=d.replaceWith||""):w=d===""?"":d||" ",b=w!==" ";f<u.length;f++)if(C=u[f],C.nodeType===3){for(K=C.textContent||"",g?K=K.replace(yy," "):v&&(K=K.replace(/\n/g,w+`
`)),_&&(K=_(K,r)),C.textContent=K,M=w||T?K.split(T||w):K.match(a)||$f,it=M[M.length-1],P=b?it.slice(-1)===" ":!it,it||M.pop(),p=m,D=b?M[0].charAt(0)===" ":!M[0],D&&_o(" ",r,C),M[0]||M.shift(),yg(M,l),s&&c||(C.textContent=""),F=1;F<=M.length;F++)if(L=M[F-1],!g&&v&&L.charAt(0)===`
`&&((h=C.previousSibling)==null||h.remove(),_o(document.createElement("br"),r,C),L=L.slice(1)),!g&&L==="")_o(w,r,C);else if(L===" ")r.insertBefore(document.createTextNode(" "),C);else{if(b&&L.charAt(0)===" "&&_o(" ",r,C),y&&F===1&&!D&&x.indexOf(y.parentNode)>-1?(S=x[x.length-1],S.appendChild(document.createTextNode(n?"":L))):(S=e(n?"":L),_o(S,r,C),y&&F===1&&!D&&S.insertBefore(y,S.firstChild)),n)for(W=gg?yg([...gg.segment(L)].map(Ut=>Ut.segment),l):L.match(a)||$f,ft=0;ft<W.length;ft++)S.appendChild(W[ft]===" "?document.createTextNode(" "):n(W[ft]));if(s&&c){if(K=C.textContent=K.substring(L.length+1,K.length),k=S.getBoundingClientRect(),k.top>p.top&&k.left<=p.left){for(V=r.cloneNode(),X=r.childNodes[0];X&&X!==S;)H=X,X=X.nextSibling,V.appendChild(H);r.parentNode.insertBefore(V,r),i&&Sg(V)}p=k}(F<M.length||P)&&_o(F>=M.length?" ":b&&L.slice(-1)===" "?" "+w:w,r,C)}r.removeChild(C),y=0}else C.nodeType===1&&(o&&o.indexOf(C)>-1?(x.indexOf(C.previousSibling)>-1&&x[x.length-1].appendChild(C),y=C):(Mg(C,t,e,n,i,s,o,a,l,!0),y=0),i&&Sg(C))},bg=class Eg{constructor(t,e){this.isSplit=!1,xy(),this.elements=_g(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[mg])==null||a._data.orig.filter(({element:l})=>l===o).forEach(vg)),o[mg]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Yf(this),this.split(e)}split(t){return(this._ctx||vy).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,u=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,d=u&&!f&&!h,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+xg.source,"gu"):xg,m=!!t.ignore&&_g(t.ignore),{orig:p,animTime:v,obs:y}=this._data,x;(u||f||h)&&(this.elements.forEach((b,w)=>{p[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let T=[],C=[],M=[],S=u?Jf("char",t,T):null,D=Jf("word",t,C),P,F,k,W;if(Mg(b,t,D,S,d,i&&(h||d),m,_,g,!1),h){let V=Oa(b.childNodes),X=My(b,V,t,M),H,K=[],L=0,it=V.map(Rt=>Rt.nodeType===1?Rt.getBoundingClientRect():gc),ft=gc,Ut;for(P=0;P<V.length;P++)H=V[P],H.nodeType===1&&(H.nodeName==="BR"?((!P||V[P-1].nodeName!=="BR")&&(K.push(H),X(L,P+1)),L=P+1,ft=Sy(it,P)):(Ut=it[P],P&&Ut.top>ft.top&&Ut.left<ft.left+ft.width-1&&(X(L,P),L=P),ft=Ut));L<P&&X(L,P),K.forEach(Rt=>{var Pt;return(Pt=Rt.parentNode)==null?void 0:Pt.removeChild(Rt)})}if(!f){for(P=0;P<C.length;P++)if(F=C[P],u||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!h){for(k=document.createElement("span"),k.style.whiteSpace="nowrap";F.firstChild;)k.appendChild(F.firstChild);F.replaceWith(k)}else F.replaceWith(...F.childNodes);else W=F.nextSibling,W&&W.nodeType===3&&(W.textContent=(F.textContent||"")+(W.textContent||""),F.remove());C.length=0,b.normalize()}this.lines.push(...M),this.words.push(...C),this.chars.push(...T)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.trim().split(" ").map(T=>T+"-mask").join(" ")),w.style.overflow="clip",w}))),this.isSplit=!0,Fa&&h&&a&&Fa.addEventListener("loadingdone",this._split),(x=o&&o(this))&&x.totalTime&&(this._data.anim=v?x.totalTime(v):x),h&&a&&this.elements.forEach((b,w)=>{p[w].width=b.offsetWidth,y&&y.observe(b)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Fa?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(vg),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new Eg(t,e)}static register(t){Ua=Ua||t||window.gsap,Ua&&(Oa=Ua.utils.toArray,Yf=Ua.core.context||Yf),!Zf&&window.innerWidth>0&&(Fa=document.fonts,Zf=!0)}};bg.version="3.15.0";var Xr=bg;var e0=0,Ld=1,n0=2;var Dd=1,i0=2,sr=3,wr=0,xn=1,Pn=2,Rr=0,Ls=1,In=2,Nd=3,Ud=4,r0=5,ts=100,s0=101,o0=102,a0=103,l0=104,c0=200,h0=201,u0=202,f0=203,Zc=204,$c=205,d0=206,p0=207,m0=208,g0=209,_0=210,x0=211,v0=212,y0=213,S0=214,Eh=0,Th=1,wh=2,Ds=3,Ah=4,Ch=5,Rh=6,Ph=7,Fd=0,M0=1,b0=2,Pr=0,E0=1,T0=2,w0=3,A0=4,C0=5,R0=6,Ih=7;var Od=300,ks=301,zs=302,Lh=303,Dh=304,yl=306,Jc=1e3,Qr=1001,Kc=1002,Qn=1003,P0=1004;var Sl=1005;var Oi=1006,Nh=1007;var rs=1008;var Hi=1009,Bd=1010,kd=1011,qo=1012,Uh=1013,ss=1014,Vi=1015,Yo=1016,Fh=1017,Oh=1018,Zo=1020,zd=35902,Hd=35899,Vd=1021,Gd=1022,Ci=1023,Fo=1026,$o=1027,Bh=1028,kh=1029,Wd=1030,zh=1031;var Hh=1033,Ml=33776,bl=33777,El=33778,Tl=33779,Vh=35840,Gh=35841,Wh=35842,Xh=35843,qh=36196,Yh=37492,Zh=37496,$h=37808,Jh=37809,Kh=37810,Qh=37811,jh=37812,tu=37813,eu=37814,nu=37815,iu=37816,ru=37817,su=37818,ou=37819,au=37820,lu=37821,cu=36492,hu=36494,uu=36495,fu=36283,du=36284,pu=36285,mu=36286;var $a=2300,Qc=2301,qc=2302,Ed=2400,Td=2401,wd=2402;var I0=3200,L0=3201;var Xd=0,D0=1,Ir="",tn="srgb",Ns="srgb-linear",Ja="linear",Ee="srgb";var Is=7680;var Ad=519,N0=512,U0=513,F0=514,qd=515,O0=516,B0=517,k0=518,z0=519,jc=35044;var Yd="300 es",Fi=2e3,Ka=2001;var Ar=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Yc=Math.PI/180,th=180/Math.PI;function jr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[t&255]+An[t>>8&255]+"-"+An[t>>16&15|64]+An[t>>24&255]+"-"+An[e&63|128]+An[e>>8&255]+"-"+An[e>>16&255]+An[e>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function by(r,t){return(r%t+t)%t}function Kf(r,t,e){return(1-e)*r+e*t}function Ki(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Te(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Kt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let b=Math.sqrt(y),w=Math.atan2(b,p*v);m=Math.sin(m*w)/b,a=Math.sin(a*w)/b}let x=a*v;if(l=l*m+f*x,c=c*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qf=new U,Tg=new Bi,te=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],b=i[2],w=i[5],T=i[8];return s[0]=o*_+a*v+l*b,s[3]=o*m+a*y+l*w,s[6]=o*p+a*x+l*T,s[1]=c*_+h*v+u*b,s[4]=c*m+h*y+u*w,s[7]=c*p+h*x+u*T,s[2]=f*_+d*v+g*b,s[5]=f*m+d*y+g*w,s[8]=f*p+d*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(jf.makeScale(t,e)),this}rotate(t){return this.premultiply(jf.makeRotation(-t)),this}translate(t,e){return this.premultiply(jf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jf=new te;function Zd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function H0(){let r=Qa("canvas");return r.style.display="block",r}var wg={};function Oo(r){r in wg||(wg[r]=!0,console.warn(r))}function V0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ag=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cg=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ey(){let r={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Ee&&(i.r=Tr(i.r),i.g=Tr(i.g),i.b=Tr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ee&&(i.r=Uo(i.r),i.g=Uo(i.g),i.b=Uo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ir?Ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Oo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Oo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ns]:{primaries:t,whitePoint:n,transfer:Ja,toXYZ:Ag,fromXYZ:Cg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:Ee,toXYZ:Ag,fromXYZ:Cg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),r}var me=Ey();function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Uo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var xo,eh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xo===void 0&&(xo=Qa("canvas")),xo.width=t.width,xo.height=t.height;let i=xo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=xo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Tr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Tr(e[n]/255)*255):e[n]=Tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ty=0,Bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=jr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(td(i[o].image)):s.push(td(i[o]))}else s=td(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function td(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?eh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var wy=0,ed=new U,Wn=class r extends Ar{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Qr,i=Qr,s=Oi,o=rs,a=Ci,l=Hi,c=r.DEFAULT_ANISOTROPY,h=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=jr(),this.name="",this.source=new Bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Od)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jc:t.x=t.x-Math.floor(t.x);break;case Qr:t.x=t.x<0?0:1;break;case Kc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jc:t.y=t.y-Math.floor(t.y);break;case Qr:t.y=t.y<0?0:1;break;case Kc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=Od;Wn.DEFAULT_ANISOTROPY=1;var be=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,x=(d+1)/2,b=(p+1)/2,w=(h+f)/4,T=(u+_)/4,C=(g+m)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=T/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=C/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=T/s,i=C/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nh=class extends Ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new Wn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Bo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ji=class extends nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ja=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ih=class extends Wn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qn,this.minFilter=Qn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var tr=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Di.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Di.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Di.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Di):Di.fromBufferAttribute(s,o),Di.applyMatrix4(t.matrixWorld),this.expandByPoint(Di);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_c.copy(n.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Di),Di.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),xc.subVectors(this.max,Ba),vo.subVectors(t.a,Ba),yo.subVectors(t.b,Ba),So.subVectors(t.c,Ba),qr.subVectors(yo,vo),Yr.subVectors(So,yo),As.subVectors(vo,So);let e=[0,-qr.z,qr.y,0,-Yr.z,Yr.y,0,-As.z,As.y,qr.z,0,-qr.x,Yr.z,0,-Yr.x,As.z,0,-As.x,-qr.y,qr.x,0,-Yr.y,Yr.x,0,-As.y,As.x,0];return!nd(e,vo,yo,So,xc)||(e=[1,0,0,0,1,0,0,0,1],!nd(e,vo,yo,So,xc))?!1:(vc.crossVectors(qr,Yr),e=[vc.x,vc.y,vc.z],nd(e,vo,yo,So,xc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Di).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Di).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yr=[new U,new U,new U,new U,new U,new U,new U,new U],Di=new U,_c=new tr,vo=new U,yo=new U,So=new U,qr=new U,Yr=new U,As=new U,Ba=new U,xc=new U,vc=new U,Cs=new U;function nd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Cs.fromArray(r,s);let a=i.x*Math.abs(Cs.x)+i.y*Math.abs(Cs.y)+i.z*Math.abs(Cs.z),l=t.dot(Cs),c=e.dot(Cs),h=n.dot(Cs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ay=new tr,ka=new U,id=new U,er=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ay.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ka.subVectors(t,this.center);let e=ka.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ka,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ka.copy(t.center).add(id)),this.expandByPoint(ka.copy(t.center).sub(id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Sr=new U,rd=new U,yc=new U,Zr=new U,sd=new U,Sc=new U,od=new U,ko=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Sr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Sr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Sr.copy(this.origin).addScaledVector(this.direction,e),Sr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rd.copy(t).add(e).multiplyScalar(.5),yc.copy(e).sub(t).normalize(),Zr.copy(this.origin).sub(rd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(yc),a=Zr.dot(this.direction),l=-Zr.dot(yc),c=Zr.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(rd).addScaledVector(yc,f),d}intersectSphere(t,e){Sr.subVectors(t.center,this.origin);let n=Sr.dot(this.direction),i=Sr.dot(Sr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Sr)!==null}intersectTriangle(t,e,n,i,s){sd.subVectors(e,t),Sc.subVectors(n,t),od.crossVectors(sd,Sc);let o=this.direction.dot(od),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zr.subVectors(this.origin,t);let l=a*this.direction.dot(Sc.crossVectors(Zr,Sc));if(l<0)return null;let c=a*this.direction.dot(sd.cross(Zr));if(c<0||l+c>o)return null;let h=-a*Zr.dot(od);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Mo.setFromMatrixColumn(t,0).length(),s=1/Mo.setFromMatrixColumn(t,1).length(),o=1/Mo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Cy,t,Ry)}lookAt(t,e,n){let i=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),$r.crossVectors(n,hi),$r.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),$r.crossVectors(n,hi)),$r.normalize(),Mc.crossVectors(hi,$r),i[0]=$r.x,i[4]=Mc.x,i[8]=hi.x,i[1]=$r.y,i[5]=Mc.y,i[9]=hi.y,i[2]=$r.z,i[6]=Mc.z,i[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],b=n[15],w=i[0],T=i[4],C=i[8],M=i[12],S=i[1],D=i[5],P=i[9],F=i[13],k=i[2],W=i[6],V=i[10],X=i[14],H=i[3],K=i[7],L=i[11],it=i[15];return s[0]=o*w+a*S+l*k+c*H,s[4]=o*T+a*D+l*W+c*K,s[8]=o*C+a*P+l*V+c*L,s[12]=o*M+a*F+l*X+c*it,s[1]=h*w+u*S+f*k+d*H,s[5]=h*T+u*D+f*W+d*K,s[9]=h*C+u*P+f*V+d*L,s[13]=h*M+u*F+f*X+d*it,s[2]=g*w+_*S+m*k+p*H,s[6]=g*T+_*D+m*W+p*K,s[10]=g*C+_*P+m*V+p*L,s[14]=g*M+_*F+m*X+p*it,s[3]=v*w+y*S+x*k+b*H,s[7]=v*T+y*D+x*W+b*K,s[11]=v*C+y*P+x*V+b*L,s[15]=v*M+y*F+x*X+b*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,y=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,x=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,b=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,w=e*v+n*y+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(_*f*s-u*m*s-_*i*d+n*m*d+u*i*p-n*f*p)*T,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*T,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*T,t[4]=y*T,t[5]=(h*m*s-g*f*s+g*i*d-e*m*d-h*i*p+e*f*p)*T,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*T,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*T,t[8]=x*T,t[9]=(g*u*s-h*_*s-g*n*d+e*_*d+h*n*p-e*u*p)*T,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*T,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*T,t[12]=b*T,t[13]=(h*_*i-g*u*i+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,_=o*h,m=o*u,p=a*u,v=l*c,y=l*h,x=l*u,b=n.x,w=n.y,T=n.z;return i[0]=(1-(_+p))*b,i[1]=(d+x)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(f+p))*w,i[6]=(m+v)*w,i[7]=0,i[8]=(g+y)*T,i[9]=(m-v)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Mo.set(i[0],i[1],i[2]).length(),o=Mo.set(i[4],i[5],i[6]).length(),a=Mo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ni.copy(this);let c=1/s,h=1/o,u=1/a;return Ni.elements[0]*=c,Ni.elements[1]*=c,Ni.elements[2]*=c,Ni.elements[4]*=h,Ni.elements[5]*=h,Ni.elements[6]*=h,Ni.elements[8]*=u,Ni.elements[9]*=u,Ni.elements[10]*=u,e.setFromRotationMatrix(Ni),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Fi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Fi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ka)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Fi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Fi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ka)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mo=new U,Ni=new ye,Cy=new U(0,0,0),Ry=new U(1,1,1),$r=new U,Mc=new U,hi=new U,Rg=new ye,Pg=new Bi,fi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pg.setFromEuler(this),this.setFromQuaternion(Pg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var tl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Py=0,Ig=new U,bo=new Bi,Mr=new ye,bc=new U,za=new U,Iy=new U,Ly=new Bi,Lg=new U(1,0,0),Dg=new U(0,1,0),Ng=new U(0,0,1),Ug={type:"added"},Dy={type:"removed"},Eo={type:"childadded",child:null},ad={type:"childremoved",child:null},dn=class r extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new U,e=new fi,n=new Bi,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new te}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.multiply(bo),this}rotateOnWorldAxis(t,e){return bo.setFromAxisAngle(t,e),this.quaternion.premultiply(bo),this}rotateX(t){return this.rotateOnAxis(Lg,t)}rotateY(t){return this.rotateOnAxis(Dg,t)}rotateZ(t){return this.rotateOnAxis(Ng,t)}translateOnAxis(t,e){return Ig.copy(t).applyQuaternion(this.quaternion),this.position.add(Ig.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Lg,t)}translateY(t){return this.translateOnAxis(Dg,t)}translateZ(t){return this.translateOnAxis(Ng,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bc.copy(t):bc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(za,bc,this.up):Mr.lookAt(bc,za,this.up),this.quaternion.setFromRotationMatrix(Mr),i&&(Mr.extractRotation(i.matrixWorld),bo.setFromRotationMatrix(Mr),this.quaternion.premultiply(bo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ug),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Dy),ad.child=t,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ug),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,t,Iy),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Ly,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};dn.DEFAULT_UP=new U(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ui=new U,br=new U,ld=new U,Er=new U,To=new U,wo=new U,Fg=new U,cd=new U,hd=new U,ud=new U,fd=new be,dd=new be,pd=new be,Qi=class r{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ui.subVectors(t,e),i.cross(Ui);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ui.subVectors(i,e),br.subVectors(n,e),ld.subVectors(t,e);let o=Ui.dot(Ui),a=Ui.dot(br),l=Ui.dot(ld),c=br.dot(br),h=br.dot(ld),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Er)===null?!1:Er.x>=0&&Er.y>=0&&Er.x+Er.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Er)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Er.x),l.addScaledVector(o,Er.y),l.addScaledVector(a,Er.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return fd.setScalar(0),dd.setScalar(0),pd.setScalar(0),fd.fromBufferAttribute(t,e),dd.fromBufferAttribute(t,n),pd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fd,s.x),o.addScaledVector(dd,s.y),o.addScaledVector(pd,s.z),o}static isFrontFacing(t,e,n,i){return Ui.subVectors(n,e),br.subVectors(t,e),Ui.cross(br).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Ui.cross(br).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;To.subVectors(i,n),wo.subVectors(s,n),cd.subVectors(t,n);let l=To.dot(cd),c=wo.dot(cd);if(l<=0&&c<=0)return e.copy(n);hd.subVectors(t,i);let h=To.dot(hd),u=wo.dot(hd);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(To,o);ud.subVectors(t,s);let d=To.dot(ud),g=wo.dot(ud);if(g>=0&&d<=g)return e.copy(s);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(wo,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Fg.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(Fg,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(To,o).addScaledVector(wo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function md(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=by(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=md(o,s,t+1/3),this.g=md(o,s,t),this.b=md(o,s,t-1/3)}return me.colorSpaceToWorking(this,i),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=G0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}copyLinearToSRGB(t){return this.r=Uo(t.r),this.g=Uo(t.g),this.b=Uo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return me.workingToColorSpace(Cn.copy(this),t),Math.round(fe(Cn.r*255,0,255))*65536+Math.round(fe(Cn.g*255,0,255))*256+Math.round(fe(Cn.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.workingToColorSpace(Cn.copy(this),e);let n=Cn.r,i=Cn.g,s=Cn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.workingToColorSpace(Cn.copy(this),e),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=tn){me.workingToColorSpace(Cn.copy(this),t);let e=Cn.r,n=Cn.g,i=Cn.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Jr),this.setHSL(Jr.h+t,Jr.s+e,Jr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Jr),t.getHSL(Ec);let n=Kf(Jr.h,Ec.h,e),i=Kf(Jr.s,Ec.s,e),s=Kf(Jr.l,Ec.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Ht;Ht.NAMES=G0;var Ny=0,ki=class extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=jr(),this.name="",this.type="Material",this.blending=Ls,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=$c,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zc&&(n.blendSrc=this.blendSrc),this.blendDst!==$c&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ad&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Rn=class extends ki{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Fd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new U,Tc=new Kt,Uy=0,ze=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uy++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jc,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Tc.fromBufferAttribute(this,e),Tc.applyMatrix3(t),this.setXY(e,Tc.x,Tc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jc&&(t.usage=this.usage),t}};var el=class extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nl=class extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ie=class extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}},Fy=0,wi=new ye,gd=new dn,Ao=new U,ui=new tr,Ha=new tr,fn=new U,Ie=class r extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zd(t)?nl:el)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,n){return wi.makeTranslation(t,e,n),this.applyMatrix4(wi),this}scale(t,e,n){return wi.makeScale(t,e,n),this.applyMatrix4(wi),this}lookAt(t){return gd.lookAt(t),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ie(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ha.setFromBufferAttribute(a),this.morphTargetsRelative?(fn.addVectors(ui.min,Ha.min),ui.expandByPoint(fn),fn.addVectors(ui.max,Ha.max),ui.expandByPoint(fn)):(ui.expandByPoint(Ha.min),ui.expandByPoint(Ha.max))}ui.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)fn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fn.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(t,c),fn.add(Ao)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new U,l[C]=new U;let c=new U,h=new U,u=new U,f=new Kt,d=new Kt,g=new Kt,_=new U,m=new U;function p(C,M,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let D=1/(d.x*g.y-g.x*d.y);isFinite(D)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(D),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(D),a[C].add(_),a[M].add(_),a[S].add(_),l[C].add(m),l[M].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,M=v.length;C<M;++C){let S=v[C],D=S.start,P=S.count;for(let F=D,k=D+P;F<k;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new U,x=new U,b=new U,w=new U;function T(C){b.fromBufferAttribute(i,C),w.copy(b);let M=a[C];y.copy(M),y.sub(b.multiplyScalar(b.dot(M))).normalize(),x.crossVectors(w,M);let D=x.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,D)}for(let C=0,M=v.length;C<M;++C){let S=v[C],D=S.start,P=S.count;for(let F=D,k=D+P;F<k;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fn.fromBufferAttribute(t,e),fn.normalize(),t.setXYZ(e,fn.x,fn.y,fn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ze(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Og=new ye,Rs=new ko,wc=new er,Bg=new U,Ac=new U,Cc=new U,Rc=new U,_d=new U,Pc=new U,kg=new U,Ic=new U,le=class extends dn{constructor(t=new Ie,e=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(_d.fromBufferAttribute(u,t),o?Pc.addScaledVector(_d,h):Pc.addScaledVector(_d.sub(e),h))}e.add(Pc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),Rs.copy(t.ray).recast(t.near),!(wc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(wc,Bg)===null||Rs.origin.distanceToSquared(Bg)>(t.far-t.near)**2))&&(Og.copy(s).invert(),Rs.copy(t.ray).applyMatrix4(Og),!(n.boundingBox!==null&&Rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,b=y;x<b;x+=3){let w=a.getX(x),T=a.getX(x+1),C=a.getX(x+2);i=Lc(this,p,t,n,c,h,u,w,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Lc(this,o,t,n,c,h,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,b=y;x<b;x+=3){let w=x,T=x+1,C=x+2;i=Lc(this,p,t,n,c,h,u,w,T,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=m,y=m+1,x=m+2;i=Lc(this,o,t,n,c,h,u,v,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Oy(r,t,e,n,i,s,o,a){let l;if(t.side===xn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===wr,a),l===null)return null;Ic.copy(a),Ic.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ic);return c<e.near||c>e.far?null:{distance:c,point:Ic.clone(),object:r}}function Lc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Ac),r.getVertexPosition(l,Cc),r.getVertexPosition(c,Rc);let h=Oy(r,t,e,n,Ac,Cc,Rc,kg);if(h){let u=new U;Qi.getBarycoord(kg,Ac,Cc,Rc,u),i&&(h.uv=Qi.getInterpolatedAttribute(i,a,l,c,u,new Kt)),s&&(h.uv1=Qi.getInterpolatedAttribute(s,a,l,c,u,new Kt)),o&&(h.normal=Qi.getInterpolatedAttribute(o,a,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};Qi.getNormal(Ac,Cc,Rc,f.normal),h.face=f,h.barycoord=u}return h}var nr=class r extends Ie{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(u,2));function g(_,m,p,v,y,x,b,w,T,C,M){let S=x/T,D=b/C,P=x/2,F=b/2,k=w/2,W=T+1,V=C+1,X=0,H=0,K=new U;for(let L=0;L<V;L++){let it=L*D-F;for(let ft=0;ft<W;ft++){let Ut=ft*S-P;K[_]=Ut*v,K[m]=it*y,K[p]=k,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),u.push(ft/T),u.push(1-L/C),X+=1}}for(let L=0;L<C;L++)for(let it=0;it<T;it++){let ft=f+it+W*L,Ut=f+it+W*(L+1),Rt=f+(it+1)+W*(L+1),Pt=f+(it+1)+W*L;l.push(ft,Ut,Pt),l.push(Ut,Rt,Pt),H+=6}a.addGroup(d,H,M),d+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Hs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ln(r){let t={};for(let e=0;e<r.length;e++){let n=Hs(r[e]);for(let i in n)t[i]=n[i]}return t}function By(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function $d(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var W0={clone:Hs,merge:Ln},ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Je=class extends ki{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ky,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=By(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},il=class extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Kr=new U,zg=new Kt,Hg=new Kt,_n=class extends il{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=th*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return th*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kr.x,Kr.y).multiplyScalar(-t/Kr.z),Kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kr.x,Kr.y).multiplyScalar(-t/Kr.z)}getViewSize(t,e){return this.getViewBounds(t,zg,Hg),e.subVectors(Hg,zg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Yc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Co=-90,Ro=1,rh=class extends dn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new _n(Co,Ro,t,e);i.layers=this.layers,this.add(i);let s=new _n(Co,Ro,t,e);s.layers=this.layers,this.add(s);let o=new _n(Co,Ro,t,e);o.layers=this.layers,this.add(o);let a=new _n(Co,Ro,t,e);a.layers=this.layers,this.add(a);let l=new _n(Co,Ro,t,e);l.layers=this.layers,this.add(l);let c=new _n(Co,Ro,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},rl=class extends Wn{constructor(t=[],e=ks,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},sh=class extends ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new rl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nr(5,5,5),s=new Je({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:Rr});s.uniforms.tEquirect.value=e;let o=new le(i,s),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=Oi),new rh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},ke=class extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hy={type:"move"},zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Us=class extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},oh=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jc,this.updateRanges=[],this.version=0,this.uuid=jr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Gn=new U,sl=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyMatrix4(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.applyNormalMatrix(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Gn.fromBufferAttribute(this,e),Gn.transformDirection(t),this.setXYZ(e,Gn.x,Gn.y,Gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ki(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ki(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ki(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ki(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),s=Te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ir=class extends ki{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Po,Va=new U,Io=new U,Lo=new U,Do=new Kt,Ga=new Kt,X0=new ye,Dc=new U,Wa=new U,Nc=new U,Vg=new Kt,xd=new Kt,Gg=new Kt,Cr=class extends dn{constructor(t=new ir){if(super(),this.isSprite=!0,this.type="Sprite",Po===void 0){Po=new Ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oh(e,5);Po.setIndex([0,1,2,0,2,3]),Po.setAttribute("position",new sl(n,3,0,!1)),Po.setAttribute("uv",new sl(n,2,3,!1))}this.geometry=Po,this.material=t,this.center=new Kt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Io.setFromMatrixScale(this.matrixWorld),X0.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Lo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Io.multiplyScalar(-Lo.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Uc(Dc.set(-.5,-.5,0),Lo,o,Io,i,s),Uc(Wa.set(.5,-.5,0),Lo,o,Io,i,s),Uc(Nc.set(.5,.5,0),Lo,o,Io,i,s),Vg.set(0,0),xd.set(1,0),Gg.set(1,1);let a=t.ray.intersectTriangle(Dc,Wa,Nc,!1,Va);if(a===null&&(Uc(Wa.set(-.5,.5,0),Lo,o,Io,i,s),xd.set(0,1),a=t.ray.intersectTriangle(Dc,Nc,Wa,!1,Va),a===null))return;let l=t.ray.origin.distanceTo(Va);l<t.near||l>t.far||e.push({distance:l,point:Va.clone(),uv:Qi.getInterpolation(Va,Dc,Wa,Nc,Vg,xd,Gg,new Kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Uc(r,t,e,n,i,s){Do.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ga.x=s*Do.x-i*Do.y,Ga.y=i*Do.x+s*Do.y):Ga.copy(Do),r.copy(t),r.x+=Ga.x,r.y+=Ga.y,r.applyMatrix4(X0)}var ah=class extends Wn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Qn,h=Qn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ol=class extends ze{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},No=new ye,Wg=new ye,Fc=[],Xg=new tr,Vy=new ye,Xa=new le,qa=new er,al=class extends le{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ol(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Vy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new tr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,No),Xg.copy(t.boundingBox).applyMatrix4(No),this.boundingBox.union(Xg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new er),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,No),qa.copy(t.boundingSphere).applyMatrix4(No),this.boundingSphere.union(qa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),t.ray.intersectsSphere(qa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,No),Wg.multiplyMatrices(n,No),Xa.matrixWorld=Wg,Xa.raycast(t,Fc);for(let o=0,a=Fc.length;o<a;o++){let l=Fc[o];l.instanceId=s,l.object=this,e.push(l)}Fc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ah(new Float32Array(i*this.count),i,this.count,Bh,Vi));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vd=new U,Gy=new U,Wy=new te,Ji=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=vd.subVectors(n,e).cross(Gy.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(vd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wy.getNormalMatrix(t),i=this.coplanarPoint(vd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ps=new er,Xy=new Kt(.5,.5),Oc=new U,Ho=class{constructor(t=new Ji,e=new Ji,n=new Ji,i=new Ji,s=new Ji,o=new Ji){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Fi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],_=s[9],m=s[10],p=s[11],v=s[12],y=s[13],x=s[14],b=s[15];if(i[0].setComponents(c-o,d-h,p-g,b-v).normalize(),i[1].setComponents(c+o,d+h,p+g,b+v).normalize(),i[2].setComponents(c+a,d+u,p+_,b+y).normalize(),i[3].setComponents(c-a,d-u,p-_,b-y).normalize(),n)i[4].setComponents(l,f,m,x).normalize(),i[5].setComponents(c-l,d-f,p-m,b-x).normalize();else if(i[4].setComponents(c-l,d-f,p-m,b-x).normalize(),e===Fi)i[5].setComponents(c+l,d+f,p+m,b+x).normalize();else if(e===Ka)i[5].setComponents(l,f,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(t){Ps.center.set(0,0,0);let e=Xy.distanceTo(t.center);return Ps.radius=.7071067811865476+e,Ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Oc.x=i.normal.x>0?t.max.x:t.min.x,Oc.y=i.normal.y>0?t.max.y:t.min.y,Oc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vo=class extends ki{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},lh=new U,ch=new U,qg=new ye,Ya=new ko,Bc=new er,yd=new U,Yg=new U,ll=class extends dn{constructor(t=new Ie,e=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)lh.fromBufferAttribute(e,i-1),ch.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=lh.distanceTo(ch);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bc.copy(n.boundingSphere),Bc.applyMatrix4(i),Bc.radius+=s,t.ray.intersectsSphere(Bc)===!1)return;qg.copy(i).invert(),Ya.copy(t.ray).applyMatrix4(qg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=h.getX(_),v=h.getX(_+1),y=kc(this,t,Ya,l,p,v,_);y&&e.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),p=kc(this,t,Ya,l,_,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=kc(this,t,Ya,l,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){let _=kc(this,t,Ya,l,g-1,d,g-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function kc(r,t,e,n,i,s,o){let a=r.geometry.attributes.position;if(lh.fromBufferAttribute(a,i),ch.fromBufferAttribute(a,s),e.distanceSqToSegment(lh,ch,yd,Yg)>n)return;yd.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(yd);if(!(c<t.near||c>t.far))return{distance:c,point:Yg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var Zg=new U,$g=new U,es=class extends ll{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Zg.fromBufferAttribute(e,i),$g.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zg.distanceTo($g);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},cl=class extends ll{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},hh=class extends ki{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jg=new ye,Cd=new ko,zc=new er,Hc=new U,Go=class extends dn{constructor(t=new Ie,e=new hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zc.copy(n.boundingSphere),zc.applyMatrix4(i),zc.radius+=s,t.ray.intersectsSphere(zc)===!1)return;Jg.copy(i).invert(),Cd.copy(t.ray).applyMatrix4(Jg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Hc.fromBufferAttribute(u,m),Kg(Hc,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Hc.fromBufferAttribute(u,g),Kg(Hc,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Kg(r,t,e,n,i,s,o){let a=Cd.distanceSqToPoint(r);if(a<e){let l=new U;Cd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rr=class extends Wn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hl=class extends Wn{constructor(t,e,n=ss,i,s,o,a=Qn,l=Qn,c,h=Fo,u=1){if(h!==Fo&&h!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ul=class extends Wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var fl=class r extends Ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new U,h=new Kt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var dl=class r extends Ie{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ie(s,3)),this.setAttribute("normal",new ie(s.slice(),3)),this.setAttribute("uv",new ie(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let y=new U,x=new U,b=new U;for(let w=0;w<e.length;w+=3)d(e[w+0],y),d(e[w+1],x),d(e[w+2],b),l(y,x,b,v)}function l(v,y,x,b){let w=b+1,T=[];for(let C=0;C<=w;C++){T[C]=[];let M=v.clone().lerp(x,C/w),S=y.clone().lerp(x,C/w),D=w-C;for(let P=0;P<=D;P++)P===0&&C===w?T[C][P]=M:T[C][P]=M.clone().lerp(S,P/D)}for(let C=0;C<w;C++)for(let M=0;M<2*(w-C)-1;M++){let S=Math.floor(M/2);M%2===0?(f(T[C][S+1]),f(T[C+1][S]),f(T[C][S])):(f(T[C][S+1]),f(T[C+1][S+1]),f(T[C+1][S]))}}function c(v){let y=new U;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(v),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){let v=new U;for(let y=0;y<s.length;y+=3){v.x=s[y+0],v.y=s[y+1],v.z=s[y+2];let x=m(v)/2/Math.PI+.5,b=p(v)/Math.PI+.5;o.push(x,1-b)}g(),u()}function u(){for(let v=0;v<o.length;v+=6){let y=o[v+0],x=o[v+2],b=o[v+4],w=Math.max(y,x,b),T=Math.min(y,x,b);w>.9&&T<.1&&(y<.2&&(o[v+0]+=1),x<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function f(v){s.push(v.x,v.y,v.z)}function d(v,y){let x=v*3;y.x=t[x+0],y.y=t[x+1],y.z=t[x+2]}function g(){let v=new U,y=new U,x=new U,b=new U,w=new Kt,T=new Kt,C=new Kt;for(let M=0,S=0;M<s.length;M+=9,S+=6){v.set(s[M+0],s[M+1],s[M+2]),y.set(s[M+3],s[M+4],s[M+5]),x.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),C.set(o[S+4],o[S+5]),b.copy(v).add(y).add(x).divideScalar(3);let D=m(b);_(w,S+0,v,D),_(T,S+2,y,D),_(C,S+4,x,D)}}function _(v,y,x,b){b<0&&v.x===1&&(o[y]=v.x-1),x.x===0&&x.z===0&&(o[y]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Vc=new U,Gc=new U,Sd=new U,Wc=new Qi,pl=class extends Ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),s=Math.cos(Yc*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:_,b:m,c:p}=Wc;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Wc.getNormal(Sd),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,u[2]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){let y=(v+1)%3,x=u[v],b=u[y],w=Wc[h[v]],T=Wc[h[y]],C=`${x}_${b}`,M=`${b}_${x}`;M in f&&f[M]?(Sd.dot(f[M].normal)<=s&&(d.push(w.x,w.y,w.z),d.push(T.x,T.y,T.z)),f[M]=null):C in f||(f[C]={index0:c[v],index1:c[y],normal:Sd.clone()})}}for(let g in f)if(f[g]){let{index0:_,index1:m}=f[g];Vc.fromBufferAttribute(a,_),Gc.fromBufferAttribute(a,m),d.push(Vc.x,Vc.y,Vc.z),d.push(Gc.x,Gc.y,Gc.z)}this.setAttribute("position",new ie(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};var Fs=class r extends dl{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var ml=class r extends dl{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ai=class r extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let y=0;y<c;y++){let x=y*u-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,x=v+c*(p+1),b=v+1+c*(p+1),w=v+1+c*p;d.push(y,x,w),d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Os=class r extends Ie{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new U,f=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],y=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let w=b/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(w+x,1-y),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){let y=h[p][v+1],x=h[p][v],b=h[p+1][v],w=h[p+1][v+1];(p!==0||o>0)&&d.push(y,x,w),(p!==n-1||l<Math.PI)&&d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(_,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gl=class r extends Ie{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new U,u=new U,f=new U;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wo=class extends ki{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new Kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},di=class extends Wo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var uh=class extends ki{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fh=class extends ki{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Xc(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function qy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends Bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ed,endingEnd:Ed}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Td:s=t,a=2*e-n;break;case wd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Td:o=t,l=2*n-e;break;case wd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,x=d*m-d*_;for(let b=0;b!==a;++b)s[b]=p*o[h+b]+v*o[c+b]+y*o[l+b]+x*o[u+b];return s}},ph=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},mh=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Xc(e,this.TimeBufferType),this.values=Xc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Xc(t.times,Array),values:Xc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new dh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $a:e=this.InterpolantFactoryMethodDiscrete;break;case Qc:e=this.InterpolantFactoryMethodLinear;break;case qc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return Qc;case this.InterpolantFactoryMethodSmooth:return qc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&qy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=Qc;var ns=class extends pi{constructor(t,e,n){super(t,e,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=$a;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};gh.prototype.ValueTypeName="color";var _h=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};_h.prototype.ValueTypeName="number";var xh=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Bi.slerpFlat(s,0,o,c-a,o,c,l);return s}},_l=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new xh(this.times,this.values,this.getValueSize(),t)}};_l.prototype.ValueTypeName="quaternion";_l.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends pi{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=$a;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};vh.prototype.ValueTypeName="vector";var yh=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},q0=new yh,Sh=class{constructor(t){this.manager=t!==void 0?t:q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xo=class extends dn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Md=new ye,Qg=new U,jg=new U,Mh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Kt(512,512),this.mapType=Hi,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new Kt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qg),jg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jg),e.updateMatrixWorld(),Md.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Md)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var t0=new ye,Za=new U,bd=new U,Rd=class extends Mh{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Kt(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Za.setFromMatrixPosition(t.matrixWorld),n.position.copy(Za),bd.copy(n.position),bd.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bd),n.updateMatrixWorld(),i.makeTranslation(-Za.x,-Za.y,-Za.z),t0.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(t0,n.coordinateSystem,n.reversedDepth)}},xl=class extends Xo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Rd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},vl=class extends il{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Pd=class extends Mh{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mi=class extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new Pd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},zi=class extends Xo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var bh=class extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jd="\\[\\]\\.:\\/",Yy=new RegExp("["+Jd+"]","g"),Kd="[^"+Jd+"]",Zy="[^"+Jd.replace("\\.","")+"]",$y=/((?:WC+[\/:])*)/.source.replace("WC",Kd),Jy=/(WCOD+)?/.source.replace("WCOD",Zy),Ky=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kd),Qy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kd),jy=new RegExp("^"+$y+Jy+Ky+Qy+"$"),tS=["material","materials","bones","map"],Id=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(t){let e=jy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);tS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Id;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hw=new Float32Array(1);function Qd(r,t,e,n){let i=eS(n);switch(e){case Vd:return r*t;case Bh:return r*t/i.components*i.byteLength;case kh:return r*t/i.components*i.byteLength;case Wd:return r*t*2/i.components*i.byteLength;case zh:return r*t*2/i.components*i.byteLength;case Gd:return r*t*3/i.components*i.byteLength;case Ci:return r*t*4/i.components*i.byteLength;case Hh:return r*t*4/i.components*i.byteLength;case Ml:case bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case El:case Tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gh:case Xh:return Math.max(r,16)*Math.max(t,8)/4;case Vh:case Wh:return Math.max(r,8)*Math.max(t,8)/2;case qh:case Yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case eu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case nu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case su:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ou:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case lu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case cu:case hu:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case fu:case du:return Math.ceil(r/4)*Math.ceil(t/4)*8;case pu:case mu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eS(r){switch(r){case Hi:case Bd:return{byteLength:1,components:1};case qo:case kd:case Yo:return{byteLength:2,components:1};case Fh:case Oh:return{byteLength:2,components:4};case ss:case Uh:case Vi:return{byteLength:4,components:1};case zd:case Hd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function g_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function iS(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var rS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sS=`#ifdef USE_ALPHAHASH
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
#endif`,oS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hS=`#ifdef USE_AOMAP
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
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_S=`#ifdef USE_IRIDESCENCE
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
#endif`,xS=`#ifdef USE_BUMPMAP
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
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ES=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,AS=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,CS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,LS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NS="gl_FragColor = linearToOutputTexel( gl_FragColor );",US=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BS=`#ifdef USE_ENVMAP
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
#endif`,kS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XS=`#ifdef USE_GRADIENTMAP
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
}`,qS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,JS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,KS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,nM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iM=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dM=`#if defined( USE_POINTS_UV )
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
#endif`,pM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_M=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vM=`#ifdef USE_MORPHTARGETS
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
#endif`,yM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,MM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wM=`#ifdef USE_NORMALMAP
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
#endif`,AM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,UM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,OM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,HM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,VM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,GM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WM=`#ifdef USE_SKINNING
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
#endif`,XM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qM=`#ifdef USE_SKINNING
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
#endif`,YM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,JM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,KM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QM=`#ifdef USE_TRANSMISSION
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
#endif`,jM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rb=`uniform sampler2D t2D;
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
}`,sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ob=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`#include <common>
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
}`,hb=`#if DEPTH_PACKING == 3200
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
}`,ub=`#define DISTANCE
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
}`,fb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,db=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`uniform float scale;
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
}`,gb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,xb=`uniform vec3 diffuse;
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
}`,vb=`#define LAMBERT
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
}`,yb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Sb=`#define MATCAP
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
}`,Mb=`#define MATCAP
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
}`,bb=`#define NORMAL
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
}`,Eb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tb=`#define PHONG
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
}`,wb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Ab=`#define STANDARD
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
}`,Cb=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Rb=`#define TOON
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
}`,Pb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ib=`uniform float size;
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
}`,Lb=`uniform vec3 diffuse;
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
}`,Db=`#include <common>
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
}`,Nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ub=`uniform float rotation;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:rS,alphahash_pars_fragment:sS,alphamap_fragment:oS,alphamap_pars_fragment:aS,alphatest_fragment:lS,alphatest_pars_fragment:cS,aomap_fragment:hS,aomap_pars_fragment:uS,batching_pars_vertex:fS,batching_vertex:dS,begin_vertex:pS,beginnormal_vertex:mS,bsdfs:gS,iridescence_fragment:_S,bumpmap_pars_fragment:xS,clipping_planes_fragment:vS,clipping_planes_pars_fragment:yS,clipping_planes_pars_vertex:SS,clipping_planes_vertex:MS,color_fragment:bS,color_pars_fragment:ES,color_pars_vertex:TS,color_vertex:wS,common:AS,cube_uv_reflection_fragment:CS,defaultnormal_vertex:RS,displacementmap_pars_vertex:PS,displacementmap_vertex:IS,emissivemap_fragment:LS,emissivemap_pars_fragment:DS,colorspace_fragment:NS,colorspace_pars_fragment:US,envmap_fragment:FS,envmap_common_pars_fragment:OS,envmap_pars_fragment:BS,envmap_pars_vertex:kS,envmap_physical_pars_fragment:JS,envmap_vertex:zS,fog_vertex:HS,fog_pars_vertex:VS,fog_fragment:GS,fog_pars_fragment:WS,gradientmap_pars_fragment:XS,lightmap_pars_fragment:qS,lights_lambert_fragment:YS,lights_lambert_pars_fragment:ZS,lights_pars_begin:$S,lights_toon_fragment:KS,lights_toon_pars_fragment:QS,lights_phong_fragment:jS,lights_phong_pars_fragment:tM,lights_physical_fragment:eM,lights_physical_pars_fragment:nM,lights_fragment_begin:iM,lights_fragment_maps:rM,lights_fragment_end:sM,logdepthbuf_fragment:oM,logdepthbuf_pars_fragment:aM,logdepthbuf_pars_vertex:lM,logdepthbuf_vertex:cM,map_fragment:hM,map_pars_fragment:uM,map_particle_fragment:fM,map_particle_pars_fragment:dM,metalnessmap_fragment:pM,metalnessmap_pars_fragment:mM,morphinstance_vertex:gM,morphcolor_vertex:_M,morphnormal_vertex:xM,morphtarget_pars_vertex:vM,morphtarget_vertex:yM,normal_fragment_begin:SM,normal_fragment_maps:MM,normal_pars_fragment:bM,normal_pars_vertex:EM,normal_vertex:TM,normalmap_pars_fragment:wM,clearcoat_normal_fragment_begin:AM,clearcoat_normal_fragment_maps:CM,clearcoat_pars_fragment:RM,iridescence_pars_fragment:PM,opaque_fragment:IM,packing:LM,premultiplied_alpha_fragment:DM,project_vertex:NM,dithering_fragment:UM,dithering_pars_fragment:FM,roughnessmap_fragment:OM,roughnessmap_pars_fragment:BM,shadowmap_pars_fragment:kM,shadowmap_pars_vertex:zM,shadowmap_vertex:HM,shadowmask_pars_fragment:VM,skinbase_vertex:GM,skinning_pars_vertex:WM,skinning_vertex:XM,skinnormal_vertex:qM,specularmap_fragment:YM,specularmap_pars_fragment:ZM,tonemapping_fragment:$M,tonemapping_pars_fragment:JM,transmission_fragment:KM,transmission_pars_fragment:QM,uv_pars_fragment:jM,uv_pars_vertex:tb,uv_vertex:eb,worldpos_vertex:nb,background_vert:ib,background_frag:rb,backgroundCube_vert:sb,backgroundCube_frag:ob,cube_vert:ab,cube_frag:lb,depth_vert:cb,depth_frag:hb,distanceRGBA_vert:ub,distanceRGBA_frag:fb,equirect_vert:db,equirect_frag:pb,linedashed_vert:mb,linedashed_frag:gb,meshbasic_vert:_b,meshbasic_frag:xb,meshlambert_vert:vb,meshlambert_frag:yb,meshmatcap_vert:Sb,meshmatcap_frag:Mb,meshnormal_vert:bb,meshnormal_frag:Eb,meshphong_vert:Tb,meshphong_frag:wb,meshphysical_vert:Ab,meshphysical_frag:Cb,meshtoon_vert:Rb,meshtoon_frag:Pb,points_vert:Ib,points_frag:Lb,shadow_vert:Db,shadow_frag:Nb,sprite_vert:Ub,sprite_frag:Fb},gt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},or={basic:{uniforms:Ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ln([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ln([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ln([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ln([gt.points,gt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ln([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ln([gt.common,gt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ln([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ln([gt.sprite,gt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ln([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ln([gt.lights,gt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};or.physical={uniforms:Ln([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var gu={r:0,b:0,g:0},Vs=new fi,Ob=new ye;function Bb(r,t,e,n,i,s,o){let a=new Ht(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1,b=g(y);b===null?p(a,l):b&&b.isColor&&(p(b,1),x=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(y,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===yl)?(h===void 0&&(h=new le(new nr(1,1,1),new Je({name:"BackgroundCubeMaterial",uniforms:Hs(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Vs.copy(x.backgroundRotation),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ob.makeRotationFromEuler(Vs)),h.material.toneMapped=me.getTransfer(b.colorSpace)!==Ee,(u!==b||f!==b.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new le(new Ai(2,2),new Je({name:"BackgroundMaterial",uniforms:Hs(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=me.getTransfer(b.colorSpace)!==Ee,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(gu,$d(r)),n.buffers.color.setClear(gu.r,gu.g,gu.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:m,dispose:v}}function kb(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(S,D,P,F,k){let W=!1,V=u(F,P,D);s!==V&&(s=V,c(s.object)),W=d(S,F,P,k),W&&g(S,F,P,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,x(S,D,P,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,D,P){let F=P.wireframe===!0,k=n[S.id];k===void 0&&(k={},n[S.id]=k);let W=k[D.id];W===void 0&&(W={},k[D.id]=W);let V=W[F];return V===void 0&&(V=f(l()),W[F]=V),V}function f(S){let D=[],P=[],F=[];for(let k=0;k<e;k++)D[k]=0,P[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:P,attributeDivisors:F,object:S,attributes:{},index:null}}function d(S,D,P,F){let k=s.attributes,W=D.attributes,V=0,X=P.getAttributes();for(let H in X)if(X[H].location>=0){let L=k[H],it=W[H];if(it===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(it=S.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(S,D,P,F){let k={},W=D.attributes,V=0,X=P.getAttributes();for(let H in X)if(X[H].location>=0){let L=W[H];L===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(L=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(L=S.instanceColor));let it={};it.attribute=L,L&&L.data&&(it.data=L.data),k[H]=it,V++}s.attributes=k,s.attributesNum=V,s.index=F}function _(){let S=s.newAttributes;for(let D=0,P=S.length;D<P;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){let P=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;P[S]=1,F[S]===0&&(r.enableVertexAttribArray(S),F[S]=1),k[S]!==D&&(r.vertexAttribDivisor(S,D),k[S]=D)}function v(){let S=s.newAttributes,D=s.enabledAttributes;for(let P=0,F=D.length;P<F;P++)D[P]!==S[P]&&(r.disableVertexAttribArray(P),D[P]=0)}function y(S,D,P,F,k,W,V){V===!0?r.vertexAttribIPointer(S,D,P,k,W):r.vertexAttribPointer(S,D,P,F,k,W)}function x(S,D,P,F){_();let k=F.attributes,W=P.getAttributes(),V=D.defaultAttributeValues;for(let X in W){let H=W[X];if(H.location>=0){let K=k[X];if(K===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){let L=K.normalized,it=K.itemSize,ft=t.get(K);if(ft===void 0)continue;let Ut=ft.buffer,Rt=ft.type,Pt=ft.bytesPerElement,$=Rt===r.INT||Rt===r.UNSIGNED_INT||K.gpuType===Uh;if(K.isInterleavedBufferAttribute){let J=K.data,lt=J.stride,yt=K.offset;if(J.isInstancedInterleavedBuffer){for(let vt=0;vt<H.locationSize;vt++)p(H.location+vt,J.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<H.locationSize;vt++)m(H.location+vt);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let vt=0;vt<H.locationSize;vt++)y(H.location+vt,it/H.locationSize,Rt,L,lt*Pt,(yt+it/H.locationSize*vt)*Pt,$)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<H.locationSize;J++)p(H.location+J,K.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<H.locationSize;J++)m(H.location+J);r.bindBuffer(r.ARRAY_BUFFER,Ut);for(let J=0;J<H.locationSize;J++)y(H.location+J,it/H.locationSize,Rt,L,it*Pt,it/H.locationSize*J*Pt,$)}}else if(V!==void 0){let L=V[X];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(H.location,L);break;case 3:r.vertexAttrib3fv(H.location,L);break;case 4:r.vertexAttrib4fv(H.location,L);break;default:r.vertexAttrib1fv(H.location,L)}}}}v()}function b(){C();for(let S in n){let D=n[S];for(let P in D){let F=D[P];for(let k in F)h(F[k].object),delete F[k];delete D[P]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let D=n[S.id];for(let P in D){let F=D[P];for(let k in F)h(F[k].object),delete F[k];delete D[P]}delete n[S.id]}function T(S){for(let D in n){let P=n[D];if(P[S.id]===void 0)continue;let F=P[S.id];for(let k in F)h(F[k].object),delete F[k];delete P[S.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function zb(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hb(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Ci&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Hi&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Vi&&!C)}function l(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:b,maxSamples:w}}function Vb(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Ji,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,y=v*4,x=p.clippingState||null;l.value=x,x=h(g,f,y,d);for(let b=0;b!==y;++b)x[b]=e[b];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gb(r){let t=new WeakMap;function e(o,a){return a===Lh?o.mapping=ks:a===Dh&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lh||a===Dh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sh(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ko=4,Y0=[.125,.215,.35,.446,.526,.582],Xs=20,jd=new vl,Z0=new Ht,tp=null,ep=0,np=0,ip=!1,Ws=(1+Math.sqrt(5))/2,Jo=1/Ws,$0=[new U(-Ws,Jo,0),new U(Ws,Jo,0),new U(-Jo,0,Ws),new U(Jo,0,Ws),new U(0,Ws,-Jo),new U(0,Ws,Jo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Wb=new U,jo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=Wb}=s;tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tp,ep,np),this._renderer.xr.enabled=ip,t.scissorTest=!1,_u(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tp=this._renderer.getRenderTarget(),ep=this._renderer.getActiveCubeFace(),np=this._renderer.getActiveMipmapLevel(),ip=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Yo,format:Ci,colorSpace:Ns,depthBuffer:!1},i=J0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=J0(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xb(s)),this._blurMaterial=qb(s,t,e)}return i}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,jd)}_sceneToCubeUV(t,e,n,i,s){let l=new _n(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Z0),u.toneMapping=Pr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let _=new Rn({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),m=new le(new nr,_),p=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,p=!0):(_.color.copy(Z0),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let b=this._cubeSize;_u(i,x*b,y>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ks||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K0());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;_u(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jd)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$0[(i-s-1)%$0.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new le(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Xs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Xs;m>Xs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xs}`);let p=[],v=0;for(let T=0;T<Xs;++T){let C=T/_,M=Math.exp(-C*C/2);p.push(M),T===0?v+=M:T<m&&(v+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let x=this._sizeLods[i],b=3*x*(i>y-Ko?i-y+Ko:0),w=4*(this._cubeSize-x);_u(e,b,w,3*x,2*x),l.setRenderTarget(e),l.render(u,jd)}};function Xb(r){let t=[],e=[],n=[],i=r,s=r-Ko+1+Y0.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ko?l=Y0[o-r+Ko-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let w=0;w<d;w++){let T=w%3*2/3-1,C=w>2?0:-1,M=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];v.set(M,_*g*w),y.set(f,m*g*w);let S=[w,w,w,w,w,w];x.set(S,p*g*w)}let b=new Ie;b.setAttribute("position",new ze(v,_)),b.setAttribute("uv",new ze(y,m)),b.setAttribute("faceIndex",new ze(x,p)),t.push(b),i>Ko&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function J0(r,t,e){let n=new ji(r,t,e);return n.texture.mapping=yl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _u(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function qb(r,t,e){let n=new Float32Array(Xs),i=new U(0,1,0);return new Je({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function K0(){return new Je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dp(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Q0(){return new Je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function dp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yb(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Lh||l===Dh,h=l===ks||l===zs;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new jo(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new jo(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zb(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Oo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $b(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){let b=v[y+0],w=v[y+1],T=v[y+2];f.push(b,w,w,T,T,b)}}else if(g!==void 0){let v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){let b=y+0,w=y+1,T=y+2;f.push(b,w,w,T,T,b)}}else return;let m=new(Zd(f)?nl:el)(f,1);m.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jb(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=d[v]*_[v];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kb(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qb(r,t,e){let n=new WeakMap,i=new be;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=a.attributes.position.count*y,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*b*4*u),T=new ja(w,x,b,u);T.type=Vi,T.needsUpdate=!0;let C=y*4;for(let S=0;S<u;S++){let D=m[S],P=p[S],F=v[S],k=x*b*4*S;for(let W=0;W<D.count;W++){let V=W*C;d===!0&&(i.fromBufferAttribute(D,W),w[k+V+0]=i.x,w[k+V+1]=i.y,w[k+V+2]=i.z,w[k+V+3]=0),g===!0&&(i.fromBufferAttribute(P,W),w[k+V+4]=i.x,w[k+V+5]=i.y,w[k+V+6]=i.z,w[k+V+7]=0),_===!0&&(i.fromBufferAttribute(F,W),w[k+V+8]=i.x,w[k+V+9]=i.y,w[k+V+10]=i.z,w[k+V+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:T,size:new Kt(x,b)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function jb(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var __=new Wn,j0=new hl(1,1),x_=new ja,v_=new ih,y_=new rl,t_=[],e_=[],n_=new Float32Array(16),i_=new Float32Array(9),r_=new Float32Array(4);function ta(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=t_[i];if(s===void 0&&(s=new Float32Array(i),t_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ln(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function cn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function yu(r,t){let e=e_[t];e===void 0&&(e=new Int32Array(t),e_[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function tE(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function eE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2fv(this.addr,t),cn(e,t)}}function nE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ln(e,t))return;r.uniform3fv(this.addr,t),cn(e,t)}}function iE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4fv(this.addr,t),cn(e,t)}}function rE(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;r_.set(n),r.uniformMatrix2fv(this.addr,!1,r_),cn(e,n)}}function sE(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;i_.set(n),r.uniformMatrix3fv(this.addr,!1,i_),cn(e,n)}}function oE(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(ln(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),cn(e,t)}else{if(ln(e,n))return;n_.set(n),r.uniformMatrix4fv(this.addr,!1,n_),cn(e,n)}}function aE(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function lE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2iv(this.addr,t),cn(e,t)}}function cE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3iv(this.addr,t),cn(e,t)}}function hE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4iv(this.addr,t),cn(e,t)}}function uE(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function fE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ln(e,t))return;r.uniform2uiv(this.addr,t),cn(e,t)}}function dE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ln(e,t))return;r.uniform3uiv(this.addr,t),cn(e,t)}}function pE(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ln(e,t))return;r.uniform4uiv(this.addr,t),cn(e,t)}}function mE(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(j0.compareFunction=qd,s=j0):s=__,e.setTexture2D(t||s,i)}function gE(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||v_,i)}function _E(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||y_,i)}function xE(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||x_,i)}function vE(r){switch(r){case 5126:return tE;case 35664:return eE;case 35665:return nE;case 35666:return iE;case 35674:return rE;case 35675:return sE;case 35676:return oE;case 5124:case 35670:return aE;case 35667:case 35671:return lE;case 35668:case 35672:return cE;case 35669:case 35673:return hE;case 5125:return uE;case 36294:return fE;case 36295:return dE;case 36296:return pE;case 35678:case 36198:case 36298:case 36306:case 35682:return mE;case 35679:case 36299:case 36307:return gE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return xE}}function yE(r,t){r.uniform1fv(this.addr,t)}function SE(r,t){let e=ta(t,this.size,2);r.uniform2fv(this.addr,e)}function ME(r,t){let e=ta(t,this.size,3);r.uniform3fv(this.addr,e)}function bE(r,t){let e=ta(t,this.size,4);r.uniform4fv(this.addr,e)}function EE(r,t){let e=ta(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function TE(r,t){let e=ta(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function wE(r,t){let e=ta(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function AE(r,t){r.uniform1iv(this.addr,t)}function CE(r,t){r.uniform2iv(this.addr,t)}function RE(r,t){r.uniform3iv(this.addr,t)}function PE(r,t){r.uniform4iv(this.addr,t)}function IE(r,t){r.uniform1uiv(this.addr,t)}function LE(r,t){r.uniform2uiv(this.addr,t)}function DE(r,t){r.uniform3uiv(this.addr,t)}function NE(r,t){r.uniform4uiv(this.addr,t)}function UE(r,t,e){let n=this.cache,i=t.length,s=yu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||__,s[o])}function FE(r,t,e){let n=this.cache,i=t.length,s=yu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||v_,s[o])}function OE(r,t,e){let n=this.cache,i=t.length,s=yu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||y_,s[o])}function BE(r,t,e){let n=this.cache,i=t.length,s=yu(e,i);ln(n,s)||(r.uniform1iv(this.addr,s),cn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||x_,s[o])}function kE(r){switch(r){case 5126:return yE;case 35664:return SE;case 35665:return ME;case 35666:return bE;case 35674:return EE;case 35675:return TE;case 35676:return wE;case 5124:case 35670:return AE;case 35667:case 35671:return CE;case 35668:case 35672:return RE;case 35669:case 35673:return PE;case 5125:return IE;case 36294:return LE;case 36295:return DE;case 36296:return NE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return FE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return BE}}var sp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vE(e.type)}},op=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kE(e.type)}},ap=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},rp=/(\w+)(\])?(\[|\.)?/g;function s_(r,t){r.seq.push(t),r.map[t.id]=t}function zE(r,t,e){let n=r.name,i=n.length;for(rp.lastIndex=0;;){let s=rp.exec(n),o=rp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){s_(e,c===void 0?new sp(a,r,t):new op(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new ap(a),s_(e,u)),e=u}}}var Qo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);zE(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function o_(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var HE=37297,VE=0;function GE(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var a_=new te;function WE(r){me._getMatrix(a_,me.workingColorSpace,r);let t=`mat3( ${a_.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case Ja:return[t,"LinearTransferOETF"];case Ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function l_(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+GE(r.getShaderSource(t),a)}else return s}function XE(r,t){let e=WE(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function qE(r,t){let e;switch(t){case E0:e="Linear";break;case T0:e="Reinhard";break;case w0:e="Cineon";break;case A0:e="ACESFilmic";break;case R0:e="AgX";break;case Ih:e="Neutral";break;case C0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var xu=new U;function YE(){me.getLuminanceCoefficients(xu);let r=xu.x.toFixed(4),t=xu.y.toFixed(4),e=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ZE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wl).join(`
`)}function $E(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function JE(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function wl(r){return r!==""}function c_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function h_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var KE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lp(r){return r.replace(KE,jE)}var QE=new Map;function jE(r,t){let e=se[t];if(e===void 0){let n=QE.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return lp(e)}var tT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(r){return r.replace(tT,eT)}function eT(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function f_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function nT(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Dd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===i0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===sr&&(t="SHADOWMAP_TYPE_VSM"),t}function iT(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ks:case zs:t="ENVMAP_TYPE_CUBE";break;case yl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rT(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function sT(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fd:t="ENVMAP_BLENDING_MULTIPLY";break;case M0:t="ENVMAP_BLENDING_MIX";break;case b0:t="ENVMAP_BLENDING_ADD";break}return t}function oT(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function aT(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=nT(e),c=iT(e),h=rT(e),u=sT(e),f=oT(e),d=ZE(e),g=$E(s),_=i.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(wl).join(`
`),p.length>0&&(p+=`
`)):(m=[f_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wl).join(`
`),p=[f_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pr?"#define TONE_MAPPING":"",e.toneMapping!==Pr?se.tonemapping_pars_fragment:"",e.toneMapping!==Pr?qE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,XE("linearToOutputTexel",e.outputColorSpace),YE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wl).join(`
`)),o=lp(o),o=c_(o,e),o=h_(o,e),a=lp(a),a=c_(a,e),a=h_(a,e),o=u_(o),a=u_(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Yd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,x=v+p+a,b=o_(i,i.VERTEX_SHADER,y),w=o_(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(D){if(r.debug.checkShaderErrors){let P=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(b)||"",k=i.getShaderInfoLog(w)||"",W=P.trim(),V=F.trim(),X=k.trim(),H=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,b,w);else{let L=l_(i,b,"vertex"),it=l_(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+L+`
`+it)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(V===""||X==="")&&(K=!1);K&&(D.diagnostics={runnable:H,programLog:W,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(b),i.deleteShader(w),C=new Qo(i,_),M=JE(i,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,HE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=VE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var lT=0,cp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hp(t),e.set(t,n)),n}},hp=class{constructor(t){this.id=lT++,this.code=t,this.usedTimes=0}};function cT(r,t,e,n,i,s,o){let a=new tl,l=new cp,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,S,D,P,F){let k=P.fog,W=F.geometry,V=M.isMeshStandardMaterial?P.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),H=X&&X.mapping===yl?X.image.height:null,K=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let L=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,it=L!==void 0?L.length:0,ft=0;W.morphAttributes.position!==void 0&&(ft=1),W.morphAttributes.normal!==void 0&&(ft=2),W.morphAttributes.color!==void 0&&(ft=3);let Ut,Rt,Pt,$;if(K){let _t=or[K];Ut=_t.vertexShader,Rt=_t.fragmentShader}else Ut=M.vertexShader,Rt=M.fragmentShader,l.update(M),Pt=l.getVertexShaderID(M),$=l.getFragmentShaderID(M);let J=r.getRenderTarget(),lt=r.state.buffers.depth.getReversed(),yt=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,xt=!!M.map,Xt=!!M.matcap,I=!!X,qt=!!M.aoMap,Ot=!!M.lightMap,It=!!M.bumpMap,O=!!M.normalMap,ce=!!M.displacementMap,St=!!M.emissiveMap,$t=!!M.metalnessMap,ee=!!M.roughnessMap,xe=M.anisotropy>0,R=M.clearcoat>0,E=M.dispersion>0,G=M.iridescence>0,Q=M.sheen>0,j=M.transmission>0,Z=xe&&!!M.anisotropyMap,Mt=R&&!!M.clearcoatMap,ot=R&&!!M.clearcoatNormalMap,At=R&&!!M.clearcoatRoughnessMap,dt=G&&!!M.iridescenceMap,st=G&&!!M.iridescenceThicknessMap,ut=Q&&!!M.sheenColorMap,Vt=Q&&!!M.sheenRoughnessMap,Ct=!!M.specularMap,ht=!!M.specularColorMap,Jt=!!M.specularIntensityMap,N=j&&!!M.transmissionMap,rt=j&&!!M.thicknessMap,at=!!M.gradientMap,mt=!!M.alphaMap,nt=M.alphaTest>0,tt=!!M.alphaHash,Et=!!M.extensions,Wt=Pr;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Wt=r.toneMapping);let ge={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:Ut,fragmentShader:Rt,defines:M.defines,customVertexShaderID:Pt,customFragmentShaderID:$,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:yt,instancingColor:yt&&F.instanceColor!==null,instancingMorph:yt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ns,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:Xt,envMap:I,envMapMode:I&&X.mapping,envMapCubeUVHeight:H,aoMap:qt,lightMap:Ot,bumpMap:It,normalMap:O,displacementMap:f&&ce,emissiveMap:St,normalMapObjectSpace:O&&M.normalMapType===D0,normalMapTangentSpace:O&&M.normalMapType===Xd,metalnessMap:$t,roughnessMap:ee,anisotropy:xe,anisotropyMap:Z,clearcoat:R,clearcoatMap:Mt,clearcoatNormalMap:ot,clearcoatRoughnessMap:At,dispersion:E,iridescence:G,iridescenceMap:dt,iridescenceThicknessMap:st,sheen:Q,sheenColorMap:ut,sheenRoughnessMap:Vt,specularMap:Ct,specularColorMap:ht,specularIntensityMap:Jt,transmission:j,transmissionMap:N,thicknessMap:rt,gradientMap:at,opaque:M.transparent===!1&&M.blending===Ls&&M.alphaToCoverage===!1,alphaMap:mt,alphaTest:nt,alphaHash:tt,combine:M.combine,mapUv:xt&&_(M.map.channel),aoMapUv:qt&&_(M.aoMap.channel),lightMapUv:Ot&&_(M.lightMap.channel),bumpMapUv:It&&_(M.bumpMap.channel),normalMapUv:O&&_(M.normalMap.channel),displacementMapUv:ce&&_(M.displacementMap.channel),emissiveMapUv:St&&_(M.emissiveMap.channel),metalnessMapUv:$t&&_(M.metalnessMap.channel),roughnessMapUv:ee&&_(M.roughnessMap.channel),anisotropyMapUv:Z&&_(M.anisotropyMap.channel),clearcoatMapUv:Mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Vt&&_(M.sheenRoughnessMap.channel),specularMapUv:Ct&&_(M.specularMap.channel),specularColorMapUv:ht&&_(M.specularColorMap.channel),specularIntensityMapUv:Jt&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:rt&&_(M.thicknessMap.channel),alphaMapUv:mt&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(O||xe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(xt||mt),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:lt,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ft,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Wt,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&me.getTransfer(M.map.colorSpace)===Ee,decodeVideoTextureEmissive:St&&M.emissiveMap.isVideoTexture===!0&&me.getTransfer(M.emissiveMap.colorSpace)===Ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Pn,flipSided:M.side===xn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Et&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&M.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function p(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let D in M.defines)S.push(D),S.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(S,M),y(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){let S=g[M.type],D;if(S){let P=or[S];D=W0.clone(P.uniforms)}else D=M.uniforms;return D}function b(M,S){let D;for(let P=0,F=h.length;P<F;P++){let k=h[P];if(k.cacheKey===S){D=k,++D.usedTimes;break}}return D===void 0&&(D=new aT(r,S,M,s),h.push(D)),D}function w(M){if(--M.usedTimes===0){let S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:C}}function hT(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function uT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function d_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function p_(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||uT),n.length>1&&n.sort(f||d_),i.length>1&&i.sort(f||d_)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function fT(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new p_,r.set(n,[o])):i>=s.length?(o=new p_,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function dT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function pT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var mT=0;function gT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function _T(r){let t=new dT,e=pT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,s=new ye,o=new ye;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,v=0,y=0,x=0,b=0,w=0,T=0;c.sort(gT);for(let M=0,S=c.length;M<S;M++){let D=c[M],P=D.color,F=D.intensity,k=D.distance,W=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=P.r*F,u+=P.g*F,f+=P.b*F;else if(D.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(D.sh.coefficients[V],F);T++}else if(D.isDirectionalLight){let V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let X=D.shadow,H=e.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=D.shadow.matrix,v++}n.directional[d]=V,d++}else if(D.isSpotLight){let V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(P).multiplyScalar(F),V.distance=k,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,n.spot[_]=V;let X=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,D.castShadow){let H=e.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=W,x++}_++}else if(D.isRectAreaLight){let V=t.get(D);V.color.copy(P).multiplyScalar(F),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=V,m++}else if(D.isPointLight){let V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){let X=D.shadow,H=e.get(D);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=V,g++}else if(D.isHemisphereLight){let V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(F),V.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=V,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==x||C.numSpotMaps!==b||C.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=x,C.numSpotMaps=b,C.numLightProbes=T,n.version=mT++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function m_(r){let t=new _T(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function xT(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new m_(r),t.set(i,[a])):s>=o.length?(a=new m_(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ST(r,t,e){let n=new Ho,i=new Kt,s=new Kt,o=new be,a=new uh({depthPacking:L0}),l=new fh,c={},h=e.maxTextureSize,u={[wr]:xn,[xn]:wr,[Pn]:Pn},f=new Je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:vT,fragmentShader:yT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new le(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Rr),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=p!==sr&&this.type===sr,k=p===sr&&this.type!==sr;for(let W=0,V=w.length;W<V;W++){let X=w[W],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let K=H.getFrameExtents();if(i.multiply(K),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,H.mapSize.y=s.y)),H.map===null||F===!0||k===!0){let it=this.type!==sr?{minFilter:Qn,magFilter:Qn}:{};H.map!==null&&H.map.dispose(),H.map=new ji(i.x,i.y,it),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();let L=H.getViewportCount();for(let it=0;it<L;it++){let ft=H.getViewport(it);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),P.viewport(o),H.updateMatrices(X,it),n=H.getFrustum(),x(T,C,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===sr&&v(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,D)};function v(w,T){let C=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ji(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,C,f,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,C,d,_,null)}function y(w,T,C,M){let S=null,D=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=S.uuid,F=T.uuid,k=c[P];k===void 0&&(k={},c[P]=k);let W=k[F];W===void 0&&(W=S.clone(),k[F]=W,T.addEventListener("dispose",b)),S=W}if(S.visible=T.visible,S.wireframe=T.wireframe,M===sr?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:u[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let P=r.properties.get(S);P.light=C}return S}function x(w,T,C,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===sr)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let F=t.update(w),k=w.material;if(Array.isArray(k)){let W=F.groups;for(let V=0,X=W.length;V<X;V++){let H=W[V],K=k[H.materialIndex];if(K&&K.visible){let L=y(w,K,M,S);w.onBeforeShadow(r,w,T,C,F,L,H),r.renderBufferDirect(C,null,F,L,w,H),w.onAfterShadow(r,w,T,C,F,L,H)}}}else if(k.visible){let W=y(w,k,M,S);w.onBeforeShadow(r,w,T,C,F,W,null),r.renderBufferDirect(C,null,F,W,w,null),w.onAfterShadow(r,w,T,C,F,W,null)}}let P=w.children;for(let F=0,k=P.length;F<k;F++)x(P[F],T,C,M,S)}function b(w){w.target.removeEventListener("dispose",b);for(let C in c){let M=c[C],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}var MT={[Eh]:Th,[wh]:Rh,[Ah]:Ph,[Ds]:Ch,[Th]:Eh,[Rh]:wh,[Ph]:Ah,[Ch]:Ds};function bT(r,t){function e(){let N=!1,rt=new be,at=null,mt=new be(0,0,0,0);return{setMask:function(nt){at!==nt&&!N&&(r.colorMask(nt,nt,nt,nt),at=nt)},setLocked:function(nt){N=nt},setClear:function(nt,tt,Et,Wt,ge){ge===!0&&(nt*=Wt,tt*=Wt,Et*=Wt),rt.set(nt,tt,Et,Wt),mt.equals(rt)===!1&&(r.clearColor(nt,tt,Et,Wt),mt.copy(rt))},reset:function(){N=!1,at=null,mt.set(-1,0,0,0)}}}function n(){let N=!1,rt=!1,at=null,mt=null,nt=null;return{setReversed:function(tt){if(rt!==tt){let Et=t.get("EXT_clip_control");tt?Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.ZERO_TO_ONE_EXT):Et.clipControlEXT(Et.LOWER_LEFT_EXT,Et.NEGATIVE_ONE_TO_ONE_EXT),rt=tt;let Wt=nt;nt=null,this.setClear(Wt)}},getReversed:function(){return rt},setTest:function(tt){tt?J(r.DEPTH_TEST):lt(r.DEPTH_TEST)},setMask:function(tt){at!==tt&&!N&&(r.depthMask(tt),at=tt)},setFunc:function(tt){if(rt&&(tt=MT[tt]),mt!==tt){switch(tt){case Eh:r.depthFunc(r.NEVER);break;case Th:r.depthFunc(r.ALWAYS);break;case wh:r.depthFunc(r.LESS);break;case Ds:r.depthFunc(r.LEQUAL);break;case Ah:r.depthFunc(r.EQUAL);break;case Ch:r.depthFunc(r.GEQUAL);break;case Rh:r.depthFunc(r.GREATER);break;case Ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=tt}},setLocked:function(tt){N=tt},setClear:function(tt){nt!==tt&&(rt&&(tt=1-tt),r.clearDepth(tt),nt=tt)},reset:function(){N=!1,at=null,mt=null,nt=null,rt=!1}}}function i(){let N=!1,rt=null,at=null,mt=null,nt=null,tt=null,Et=null,Wt=null,ge=null;return{setTest:function(_t){N||(_t?J(r.STENCIL_TEST):lt(r.STENCIL_TEST))},setMask:function(_t){rt!==_t&&!N&&(r.stencilMask(_t),rt=_t)},setFunc:function(_t,Dt,jt){(at!==_t||mt!==Dt||nt!==jt)&&(r.stencilFunc(_t,Dt,jt),at=_t,mt=Dt,nt=jt)},setOp:function(_t,Dt,jt){(tt!==_t||Et!==Dt||Wt!==jt)&&(r.stencilOp(_t,Dt,jt),tt=_t,Et=Dt,Wt=jt)},setLocked:function(_t){N=_t},setClear:function(_t){ge!==_t&&(r.clearStencil(_t),ge=_t)},reset:function(){N=!1,rt=null,at=null,mt=null,nt=null,tt=null,Et=null,Wt=null,ge=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,b=null,w=null,T=new Ht(0,0,0),C=0,M=!1,S=null,D=null,P=null,F=null,k=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=X>=2);let K=null,L={},it=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),Ut=new be().fromArray(it),Rt=new be().fromArray(ft);function Pt(N,rt,at,mt){let nt=new Uint8Array(4),tt=r.createTexture();r.bindTexture(N,tt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Et=0;Et<at;Et++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(rt+Et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return tt}let $={};$[r.TEXTURE_2D]=Pt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Pt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Pt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Pt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(r.DEPTH_TEST),o.setFunc(Ds),It(!1),O(Ld),J(r.CULL_FACE),qt(Rr);function J(N){h[N]!==!0&&(r.enable(N),h[N]=!0)}function lt(N){h[N]!==!1&&(r.disable(N),h[N]=!1)}function yt(N,rt){return u[N]!==rt?(r.bindFramebuffer(N,rt),u[N]=rt,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function vt(N,rt){let at=d,mt=!1;if(N){at=f.get(rt),at===void 0&&(at=[],f.set(rt,at));let nt=N.textures;if(at.length!==nt.length||at[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,Et=nt.length;tt<Et;tt++)at[tt]=r.COLOR_ATTACHMENT0+tt;at.length=nt.length,mt=!0}}else at[0]!==r.BACK&&(at[0]=r.BACK,mt=!0);mt&&r.drawBuffers(at)}function xt(N){return g!==N?(r.useProgram(N),g=N,!0):!1}let Xt={[ts]:r.FUNC_ADD,[s0]:r.FUNC_SUBTRACT,[o0]:r.FUNC_REVERSE_SUBTRACT};Xt[a0]=r.MIN,Xt[l0]=r.MAX;let I={[c0]:r.ZERO,[h0]:r.ONE,[u0]:r.SRC_COLOR,[Zc]:r.SRC_ALPHA,[_0]:r.SRC_ALPHA_SATURATE,[m0]:r.DST_COLOR,[d0]:r.DST_ALPHA,[f0]:r.ONE_MINUS_SRC_COLOR,[$c]:r.ONE_MINUS_SRC_ALPHA,[g0]:r.ONE_MINUS_DST_COLOR,[p0]:r.ONE_MINUS_DST_ALPHA,[x0]:r.CONSTANT_COLOR,[v0]:r.ONE_MINUS_CONSTANT_COLOR,[y0]:r.CONSTANT_ALPHA,[S0]:r.ONE_MINUS_CONSTANT_ALPHA};function qt(N,rt,at,mt,nt,tt,Et,Wt,ge,_t){if(N===Rr){_===!0&&(lt(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),N!==r0){if(N!==m||_t!==M){if((p!==ts||x!==ts)&&(r.blendEquation(r.FUNC_ADD),p=ts,x=ts),_t)switch(N){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case In:r.blendFunc(r.ONE,r.ONE);break;case Nd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ud:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case In:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Nd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ud:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,y=null,b=null,w=null,T.set(0,0,0),C=0,m=N,M=_t}return}nt=nt||rt,tt=tt||at,Et=Et||mt,(rt!==p||nt!==x)&&(r.blendEquationSeparate(Xt[rt],Xt[nt]),p=rt,x=nt),(at!==v||mt!==y||tt!==b||Et!==w)&&(r.blendFuncSeparate(I[at],I[mt],I[tt],I[Et]),v=at,y=mt,b=tt,w=Et),(Wt.equals(T)===!1||ge!==C)&&(r.blendColor(Wt.r,Wt.g,Wt.b,ge),T.copy(Wt),C=ge),m=N,M=!1}function Ot(N,rt){N.side===Pn?lt(r.CULL_FACE):J(r.CULL_FACE);let at=N.side===xn;rt&&(at=!at),It(at),N.blending===Ls&&N.transparent===!1?qt(Rr):qt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let mt=N.stencilWrite;a.setTest(mt),mt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),St(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):lt(r.SAMPLE_ALPHA_TO_COVERAGE)}function It(N){S!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),S=N)}function O(N){N!==e0?(J(r.CULL_FACE),N!==D&&(N===Ld?r.cullFace(r.BACK):N===n0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):lt(r.CULL_FACE),D=N}function ce(N){N!==P&&(V&&r.lineWidth(N),P=N)}function St(N,rt,at){N?(J(r.POLYGON_OFFSET_FILL),(F!==rt||k!==at)&&(r.polygonOffset(rt,at),F=rt,k=at)):lt(r.POLYGON_OFFSET_FILL)}function $t(N){N?J(r.SCISSOR_TEST):lt(r.SCISSOR_TEST)}function ee(N){N===void 0&&(N=r.TEXTURE0+W-1),K!==N&&(r.activeTexture(N),K=N)}function xe(N,rt,at){at===void 0&&(K===null?at=r.TEXTURE0+W-1:at=K);let mt=L[at];mt===void 0&&(mt={type:void 0,texture:void 0},L[at]=mt),(mt.type!==N||mt.texture!==rt)&&(K!==at&&(r.activeTexture(at),K=at),r.bindTexture(N,rt||$[N]),mt.type=N,mt.texture=rt)}function R(){let N=L[K];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{r.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{r.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{r.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{r.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{r.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function st(){try{r.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(N){Ut.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ut.copy(N))}function Vt(N){Rt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Rt.copy(N))}function Ct(N,rt){let at=c.get(rt);at===void 0&&(at=new WeakMap,c.set(rt,at));let mt=at.get(N);mt===void 0&&(mt=r.getUniformBlockIndex(rt,N.name),at.set(N,mt))}function ht(N,rt){let mt=c.get(rt).get(N);l.get(rt)!==mt&&(r.uniformBlockBinding(rt,mt,N.__bindingPointIndex),l.set(rt,mt))}function Jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,L={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,v=null,y=null,x=null,b=null,w=null,T=new Ht(0,0,0),C=0,M=!1,S=null,D=null,P=null,F=null,k=null,Ut.set(0,0,r.canvas.width,r.canvas.height),Rt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:lt,bindFramebuffer:yt,drawBuffers:vt,useProgram:xt,setBlending:qt,setMaterial:Ot,setFlipSided:It,setCullFace:O,setLineWidth:ce,setPolygonOffset:St,setScissorTest:$t,activeTexture:ee,bindTexture:xe,unbindTexture:R,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:dt,texImage3D:st,updateUBOMapping:Ct,uniformBlockBinding:ht,texStorage2D:ot,texStorage3D:At,texSubImage2D:Q,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:Mt,scissor:ut,viewport:Vt,reset:Jt}}function ET(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Kt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,E){return d?new OffscreenCanvas(R,E):Qa("canvas")}function _(R,E,G){let Q=1,j=xe(R);if((j.width>G||j.height>G)&&(Q=G/Math.max(j.width,j.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(Q*j.width),Mt=Math.floor(Q*j.height);u===void 0&&(u=g(Z,Mt));let ot=E?g(Z,Mt):u;return ot.width=Z,ot.height=Mt,ot.getContext("2d").drawImage(R,0,0,Z,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+Mt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(R,E,G,Q,j=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=E;if(E===r.RED&&(G===r.FLOAT&&(Z=r.R32F),G===r.HALF_FLOAT&&(Z=r.R16F),G===r.UNSIGNED_BYTE&&(Z=r.R8)),E===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.R8UI),G===r.UNSIGNED_SHORT&&(Z=r.R16UI),G===r.UNSIGNED_INT&&(Z=r.R32UI),G===r.BYTE&&(Z=r.R8I),G===r.SHORT&&(Z=r.R16I),G===r.INT&&(Z=r.R32I)),E===r.RG&&(G===r.FLOAT&&(Z=r.RG32F),G===r.HALF_FLOAT&&(Z=r.RG16F),G===r.UNSIGNED_BYTE&&(Z=r.RG8)),E===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RG8UI),G===r.UNSIGNED_SHORT&&(Z=r.RG16UI),G===r.UNSIGNED_INT&&(Z=r.RG32UI),G===r.BYTE&&(Z=r.RG8I),G===r.SHORT&&(Z=r.RG16I),G===r.INT&&(Z=r.RG32I)),E===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),G===r.UNSIGNED_INT&&(Z=r.RGB32UI),G===r.BYTE&&(Z=r.RGB8I),G===r.SHORT&&(Z=r.RGB16I),G===r.INT&&(Z=r.RGB32I)),E===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),G===r.UNSIGNED_INT&&(Z=r.RGBA32UI),G===r.BYTE&&(Z=r.RGBA8I),G===r.SHORT&&(Z=r.RGBA16I),G===r.INT&&(Z=r.RGBA32I)),E===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),E===r.RGBA){let Mt=j?Ja:me.getTransfer(Q);G===r.FLOAT&&(Z=r.RGBA32F),G===r.HALF_FLOAT&&(Z=r.RGBA16F),G===r.UNSIGNED_BYTE&&(Z=Mt===Ee?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function x(R,E){let G;return R?E===null||E===ss||E===Zo?G=r.DEPTH24_STENCIL8:E===Vi?G=r.DEPTH32F_STENCIL8:E===qo&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ss||E===Zo?G=r.DEPTH_COMPONENT24:E===Vi?G=r.DEPTH_COMPONENT32F:E===qo&&(G=r.DEPTH_COMPONENT16),G}function b(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qn&&R.minFilter!==Oi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function w(R){let E=R.target;E.removeEventListener("dispose",w),C(E),E.isVideoTexture&&h.delete(E)}function T(R){let E=R.target;E.removeEventListener("dispose",T),S(E)}function C(R){let E=n.get(R);if(E.__webglInit===void 0)return;let G=R.source,Q=f.get(G);if(Q){let j=Q[E.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(R),Object.keys(Q).length===0&&f.delete(G)}n.remove(R)}function M(R){let E=n.get(R);r.deleteTexture(E.__webglTexture);let G=R.source,Q=f.get(G);delete Q[E.__cacheKey],o.memory.textures--}function S(R){let E=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let j=0;j<E.__webglFramebuffer[Q].length;j++)r.deleteFramebuffer(E.__webglFramebuffer[Q][j]);else r.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)r.deleteFramebuffer(E.__webglFramebuffer[Q]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=R.textures;for(let Q=0,j=G.length;Q<j;Q++){let Z=n.get(G[Q]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(G[Q])}n.remove(R)}let D=0;function P(){D=0}function F(){let R=D;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function k(R){let E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function W(R,E){let G=n.get(R);if(R.isVideoTexture&&$t(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(G,R,E);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+E)}function V(R,E){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){$(G,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+E)}function X(R,E){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){$(G,R,E);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+E)}function H(R,E){let G=n.get(R);if(R.version>0&&G.__version!==R.version){J(G,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+E)}let K={[Jc]:r.REPEAT,[Qr]:r.CLAMP_TO_EDGE,[Kc]:r.MIRRORED_REPEAT},L={[Qn]:r.NEAREST,[P0]:r.NEAREST_MIPMAP_NEAREST,[Sl]:r.NEAREST_MIPMAP_LINEAR,[Oi]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},it={[N0]:r.NEVER,[z0]:r.ALWAYS,[U0]:r.LESS,[qd]:r.LEQUAL,[F0]:r.EQUAL,[k0]:r.GEQUAL,[O0]:r.GREATER,[B0]:r.NOTEQUAL};function ft(R,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Oi||E.magFilter===Nh||E.magFilter===Sl||E.magFilter===rs||E.minFilter===Oi||E.minFilter===Nh||E.minFilter===Sl||E.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,K[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,K[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,K[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Qn||E.minFilter!==Sl&&E.minFilter!==rs||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ut(R,E){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",w));let Q=E.source,j=f.get(Q);j===void 0&&(j={},f.set(Q,j));let Z=k(E);if(Z!==R.__cacheKey){j[Z]===void 0&&(j[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[Z].usedTimes++;let Mt=j[R.__cacheKey];Mt!==void 0&&(j[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&M(E)),R.__cacheKey=Z,R.__webglTexture=j[Z].texture}return G}function Rt(R,E,G){return Math.floor(Math.floor(R/G)/E)}function Pt(R,E,G,Q){let Z=R.updateRanges;if(Z.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,G,Q,E.data);else{Z.sort((st,ut)=>st.start-ut.start);let Mt=0;for(let st=1;st<Z.length;st++){let ut=Z[Mt],Vt=Z[st],Ct=ut.start+ut.count,ht=Rt(Vt.start,E.width,4),Jt=Rt(ut.start,E.width,4);Vt.start<=Ct+1&&ht===Jt&&Rt(Vt.start+Vt.count-1,E.width,4)===ht?ut.count=Math.max(ut.count,Vt.start+Vt.count-ut.start):(++Mt,Z[Mt]=Vt)}Z.length=Mt+1;let ot=r.getParameter(r.UNPACK_ROW_LENGTH),At=r.getParameter(r.UNPACK_SKIP_PIXELS),dt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let st=0,ut=Z.length;st<ut;st++){let Vt=Z[st],Ct=Math.floor(Vt.start/4),ht=Math.ceil(Vt.count/4),Jt=Ct%E.width,N=Math.floor(Ct/E.width),rt=ht,at=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,Jt,N,rt,at,G,Q,E.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,At),r.pixelStorei(r.UNPACK_SKIP_ROWS,dt)}}function $(R,E,G){let Q=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=r.TEXTURE_3D);let j=Ut(R,E),Z=E.source;e.bindTexture(Q,R.__webglTexture,r.TEXTURE0+G);let Mt=n.get(Z);if(Z.version!==Mt.__version||j===!0){e.activeTexture(r.TEXTURE0+G);let ot=me.getPrimaries(me.workingColorSpace),At=E.colorSpace===Ir?null:me.getPrimaries(E.colorSpace),dt=E.colorSpace===Ir||ot===At?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let st=_(E.image,!1,i.maxTextureSize);st=ee(E,st);let ut=s.convert(E.format,E.colorSpace),Vt=s.convert(E.type),Ct=y(E.internalFormat,ut,Vt,E.colorSpace,E.isVideoTexture);ft(Q,E);let ht,Jt=E.mipmaps,N=E.isVideoTexture!==!0,rt=Mt.__version===void 0||j===!0,at=Z.dataReady,mt=b(E,st);if(E.isDepthTexture)Ct=x(E.format===$o,E.type),rt&&(N?e.texStorage2D(r.TEXTURE_2D,1,Ct,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Ct,st.width,st.height,0,ut,Vt,null));else if(E.isDataTexture)if(Jt.length>0){N&&rt&&e.texStorage2D(r.TEXTURE_2D,mt,Ct,Jt[0].width,Jt[0].height);for(let nt=0,tt=Jt.length;nt<tt;nt++)ht=Jt[nt],N?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ht.width,ht.height,ut,Vt,ht.data):e.texImage2D(r.TEXTURE_2D,nt,Ct,ht.width,ht.height,0,ut,Vt,ht.data);E.generateMipmaps=!1}else N?(rt&&e.texStorage2D(r.TEXTURE_2D,mt,Ct,st.width,st.height),at&&Pt(E,st,ut,Vt)):e.texImage2D(r.TEXTURE_2D,0,Ct,st.width,st.height,0,ut,Vt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){N&&rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ct,Jt[0].width,Jt[0].height,st.depth);for(let nt=0,tt=Jt.length;nt<tt;nt++)if(ht=Jt[nt],E.format!==Ci)if(ut!==null)if(N){if(at)if(E.layerUpdates.size>0){let Et=Qd(ht.width,ht.height,E.format,E.type);for(let Wt of E.layerUpdates){let ge=ht.data.subarray(Wt*Et/ht.data.BYTES_PER_ELEMENT,(Wt+1)*Et/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Wt,ht.width,ht.height,1,ut,ge)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,ut,ht.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,Ct,ht.width,ht.height,st.depth,0,ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?at&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,st.depth,ut,Vt,ht.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,Ct,ht.width,ht.height,st.depth,0,ut,Vt,ht.data)}else{N&&rt&&e.texStorage2D(r.TEXTURE_2D,mt,Ct,Jt[0].width,Jt[0].height);for(let nt=0,tt=Jt.length;nt<tt;nt++)ht=Jt[nt],E.format!==Ci?ut!==null?N?at&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,ht.width,ht.height,ut,ht.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,Ct,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ht.width,ht.height,ut,Vt,ht.data):e.texImage2D(r.TEXTURE_2D,nt,Ct,ht.width,ht.height,0,ut,Vt,ht.data)}else if(E.isDataArrayTexture)if(N){if(rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Ct,st.width,st.height,st.depth),at)if(E.layerUpdates.size>0){let nt=Qd(st.width,st.height,E.format,E.type);for(let tt of E.layerUpdates){let Et=st.data.subarray(tt*nt/st.data.BYTES_PER_ELEMENT,(tt+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,ut,Vt,Et)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ut,Vt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ct,st.width,st.height,st.depth,0,ut,Vt,st.data);else if(E.isData3DTexture)N?(rt&&e.texStorage3D(r.TEXTURE_3D,mt,Ct,st.width,st.height,st.depth),at&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ut,Vt,st.data)):e.texImage3D(r.TEXTURE_3D,0,Ct,st.width,st.height,st.depth,0,ut,Vt,st.data);else if(E.isFramebufferTexture){if(rt)if(N)e.texStorage2D(r.TEXTURE_2D,mt,Ct,st.width,st.height);else{let nt=st.width,tt=st.height;for(let Et=0;Et<mt;Et++)e.texImage2D(r.TEXTURE_2D,Et,Ct,nt,tt,0,ut,Vt,null),nt>>=1,tt>>=1}}else if(Jt.length>0){if(N&&rt){let nt=xe(Jt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Ct,nt.width,nt.height)}for(let nt=0,tt=Jt.length;nt<tt;nt++)ht=Jt[nt],N?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ut,Vt,ht):e.texImage2D(r.TEXTURE_2D,nt,Ct,ut,Vt,ht);E.generateMipmaps=!1}else if(N){if(rt){let nt=xe(st);e.texStorage2D(r.TEXTURE_2D,mt,Ct,nt.width,nt.height)}at&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut,Vt,st)}else e.texImage2D(r.TEXTURE_2D,0,Ct,ut,Vt,st);m(E)&&p(Q),Mt.__version=Z.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function J(R,E,G){if(E.image.length!==6)return;let Q=Ut(R,E),j=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);let Z=n.get(j);if(j.version!==Z.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);let Mt=me.getPrimaries(me.workingColorSpace),ot=E.colorSpace===Ir?null:me.getPrimaries(E.colorSpace),At=E.colorSpace===Ir||Mt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let dt=E.isCompressedTexture||E.image[0].isCompressedTexture,st=E.image[0]&&E.image[0].isDataTexture,ut=[];for(let tt=0;tt<6;tt++)!dt&&!st?ut[tt]=_(E.image[tt],!0,i.maxCubemapSize):ut[tt]=st?E.image[tt].image:E.image[tt],ut[tt]=ee(E,ut[tt]);let Vt=ut[0],Ct=s.convert(E.format,E.colorSpace),ht=s.convert(E.type),Jt=y(E.internalFormat,Ct,ht,E.colorSpace),N=E.isVideoTexture!==!0,rt=Z.__version===void 0||Q===!0,at=j.dataReady,mt=b(E,Vt);ft(r.TEXTURE_CUBE_MAP,E);let nt;if(dt){N&&rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Jt,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){nt=ut[tt].mipmaps;for(let Et=0;Et<nt.length;Et++){let Wt=nt[Et];E.format!==Ci?Ct!==null?N?at&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,Wt.width,Wt.height,Ct,Wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Jt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,0,0,Wt.width,Wt.height,Ct,ht,Wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et,Jt,Wt.width,Wt.height,0,Ct,ht,Wt.data)}}}else{if(nt=E.mipmaps,N&&rt){nt.length>0&&mt++;let tt=xe(ut[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Jt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){N?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ut[tt].width,ut[tt].height,Ct,ht,ut[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,ut[tt].width,ut[tt].height,0,Ct,ht,ut[tt].data);for(let Et=0;Et<nt.length;Et++){let ge=nt[Et].image[tt].image;N?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,ge.width,ge.height,Ct,ht,ge.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Jt,ge.width,ge.height,0,Ct,ht,ge.data)}}else{N?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ct,ht,ut[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Jt,Ct,ht,ut[tt]);for(let Et=0;Et<nt.length;Et++){let Wt=nt[Et];N?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,0,0,Ct,ht,Wt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Et+1,Jt,Ct,ht,Wt.image[tt])}}}m(E)&&p(r.TEXTURE_CUBE_MAP),Z.__version=j.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function lt(R,E,G,Q,j,Z){let Mt=s.convert(G.format,G.colorSpace),ot=s.convert(G.type),At=y(G.internalFormat,Mt,ot,G.colorSpace),dt=n.get(E),st=n.get(G);if(st.__renderTarget=E,!dt.__hasExternalTextures){let ut=Math.max(1,E.width>>Z),Vt=Math.max(1,E.height>>Z);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,At,ut,Vt,E.depth,0,Mt,ot,null):e.texImage2D(j,Z,At,ut,Vt,0,Mt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),St(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,j,st.__webglTexture,0,ce(E)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,j,st.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function yt(R,E,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){let Q=E.depthTexture,j=Q&&Q.isDepthTexture?Q.type:null,Z=x(E.stencilBuffer,j),Mt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=ce(E);St(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,Z,E.width,E.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,Z,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Z,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Mt,r.RENDERBUFFER,R)}else{let Q=E.textures;for(let j=0;j<Q.length;j++){let Z=Q[j],Mt=s.convert(Z.format,Z.colorSpace),ot=s.convert(Z.type),At=y(Z.internalFormat,Mt,ot,Z.colorSpace),dt=ce(E);G&&St(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,At,E.width,E.height):St(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,At,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,At,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function vt(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(E.depthTexture);Q.__renderTarget=E,(!Q.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);let j=Q.__webglTexture,Z=ce(E);if(E.depthTexture.format===Fo)St(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,j,0);else if(E.depthTexture.format===$o)St(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function xt(R){let E=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){let Q=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let j=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",j)};Q.addEventListener("dispose",j),E.__depthDisposeCallback=j}E.__boundDepthTexture=Q}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Q=R.texture.mipmaps;Q&&Q.length>0?vt(E.__webglFramebuffer[0],R):vt(E.__webglFramebuffer,R)}else if(G){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=r.createRenderbuffer(),yt(E.__webglDepthbuffer[Q],R,!1);else{let j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Z)}}else{let Q=R.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),yt(E.__webglDepthbuffer,R,!1);else{let j=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Z)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Xt(R,E,G){let Q=n.get(R);E!==void 0&&lt(Q.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&xt(R)}function I(R){let E=R.texture,G=n.get(R),Q=n.get(E);R.addEventListener("dispose",T);let j=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Mt=j.length>1;if(Mt||(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=E.version,o.memory.textures++),Z){G.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[ot]=[];for(let At=0;At<E.mipmaps.length;At++)G.__webglFramebuffer[ot][At]=r.createFramebuffer()}else G.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)G.__webglFramebuffer[ot]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Mt)for(let ot=0,At=j.length;ot<At;ot++){let dt=n.get(j[ot]);dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&St(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ot=0;ot<j.length;ot++){let At=j[ot];G.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ot]);let dt=s.convert(At.format,At.colorSpace),st=s.convert(At.type),ut=y(At.internalFormat,dt,st,At.colorSpace,R.isXRRenderTarget===!0),Vt=ce(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Vt,ut,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,G.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),yt(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ft(r.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)lt(G.__webglFramebuffer[ot][At],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,At);else lt(G.__webglFramebuffer[ot],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(E)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ot=0,At=j.length;ot<At;ot++){let dt=j[ot],st=n.get(dt),ut=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ut=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,st.__webglTexture),ft(ut,dt),lt(G.__webglFramebuffer,R,dt,r.COLOR_ATTACHMENT0+ot,ut,0),m(dt)&&p(ut)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,Q.__webglTexture),ft(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let At=0;At<E.mipmaps.length;At++)lt(G.__webglFramebuffer[At],R,E,r.COLOR_ATTACHMENT0,ot,At);else lt(G.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ot,0);m(E)&&p(ot),e.unbindTexture()}R.depthBuffer&&xt(R)}function qt(R){let E=R.textures;for(let G=0,Q=E.length;G<Q;G++){let j=E[G];if(m(j)){let Z=v(R),Mt=n.get(j).__webglTexture;e.bindTexture(Z,Mt),p(Z),e.unbindTexture()}}}let Ot=[],It=[];function O(R){if(R.samples>0){if(St(R)===!1){let E=R.textures,G=R.width,Q=R.height,j=r.COLOR_BUFFER_BIT,Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=n.get(R),ot=E.length>1;if(ot)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer);let At=R.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);let st=n.get(E[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,G,Q,0,0,G,Q,j,r.NEAREST),l===!0&&(Ot.length=0,It.length=0,Ot.push(r.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ot.push(Z),It.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,It)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);let st=n.get(E[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Mt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,st,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function ce(R){return Math.min(i.maxSamples,R.samples)}function St(R){let E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function $t(R){let E=o.render.frame;h.get(R)!==E&&(h.set(R,E),R.update())}function ee(R,E){let G=R.colorSpace,Q=R.format,j=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Ns&&G!==Ir&&(me.getTransfer(G)===Ee?(Q!==Ci||j!==Hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=Xt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=St}function TT(r,t){function e(n,i=Ir){let s,o=me.getTransfer(i);if(n===Hi)return r.UNSIGNED_BYTE;if(n===Fh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Hd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bd)return r.BYTE;if(n===kd)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===Uh)return r.INT;if(n===ss)return r.UNSIGNED_INT;if(n===Vi)return r.FLOAT;if(n===Yo)return r.HALF_FLOAT;if(n===Vd)return r.ALPHA;if(n===Gd)return r.RGB;if(n===Ci)return r.RGBA;if(n===Fo)return r.DEPTH_COMPONENT;if(n===$o)return r.DEPTH_STENCIL;if(n===Bh)return r.RED;if(n===kh)return r.RED_INTEGER;if(n===Wd)return r.RG;if(n===zh)return r.RG_INTEGER;if(n===Hh)return r.RGBA_INTEGER;if(n===Ml||n===bl||n===El||n===Tl)if(o===Ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ml)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ml)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Gh||n===Wh||n===Xh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qh||n===Yh||n===Zh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qh||n===Yh)return o===Ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zh)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$h||n===Jh||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$h)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jh)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===iu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ru)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ou)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return o===Ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===cu||n===hu||n===uu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===cu)return o===Ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===du||n===pu||n===mu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===fu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AT=`
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

}`,up=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ul(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Je({vertexShader:wT,fragmentShader:AT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fp=class extends Ar{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new up,p={},v=e.getContextAttributes(),y=null,x=null,b=[],w=[],T=new Kt,C=null,M=new _n;M.viewport=new be;let S=new _n;S.viewport=new be;let D=[M,S],P=new bh,F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=b[$];return J===void 0&&(J=new zo,b[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=b[$];return J===void 0&&(J=new zo,b[$]=J),J.getGripSpace()},this.getHand=function($){let J=b[$];return J===void 0&&(J=new zo,b[$]=J),J.getHandSpace()};function W($){let J=w.indexOf($.inputSource);if(J===-1)return;let lt=b[J];lt!==void 0&&(lt.update($.inputSource,$.frame,c||o),lt.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let $=0;$<b.length;$++){let J=w[$];J!==null&&(w[$]=null,b[$].disconnect(J))}F=null,k=null,m.reset();for(let $ in p)delete p[$];t.setRenderTarget(y),d=null,f=null,u=null,i=null,x=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let lt=null,yt=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=v.stencil?$o:Fo,yt=v.stencil?Zo:ss);let xt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(xt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new ji(f.textureWidth,f.textureHeight,{format:Ci,type:Hi,depthTexture:new hl(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let lt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new ji(d.framebufferWidth,d.framebufferHeight,{format:Ci,type:Hi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Pt.setContext(i),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X($){for(let J=0;J<$.removed.length;J++){let lt=$.removed[J],yt=w.indexOf(lt);yt>=0&&(w[yt]=null,b[yt].disconnect(lt))}for(let J=0;J<$.added.length;J++){let lt=$.added[J],yt=w.indexOf(lt);if(yt===-1){for(let xt=0;xt<b.length;xt++)if(xt>=w.length){w.push(lt),yt=xt;break}else if(w[xt]===null){w[xt]=lt,yt=xt;break}if(yt===-1)break}let vt=b[yt];vt&&vt.connect(lt)}}let H=new U,K=new U;function L($,J,lt){H.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(lt.matrixWorld);let yt=H.distanceTo(K),vt=J.projectionMatrix.elements,xt=lt.projectionMatrix.elements,Xt=vt[14]/(vt[10]-1),I=vt[14]/(vt[10]+1),qt=(vt[9]+1)/vt[5],Ot=(vt[9]-1)/vt[5],It=(vt[8]-1)/vt[0],O=(xt[8]+1)/xt[0],ce=Xt*It,St=Xt*O,$t=yt/(-It+O),ee=$t*-It;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ee),$.translateZ($t),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),vt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let xe=Xt+$t,R=I+$t,E=ce-ee,G=St+(yt-ee),Q=qt*I/R*xe,j=Ot*I/R*xe;$.projectionMatrix.makePerspective(E,G,Q,j,xe,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function it($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let J=$.near,lt=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(lt=m.depthFar)),P.near=S.near=M.near=J,P.far=S.far=M.far=lt,(F!==P.near||k!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,k=P.far),P.layers.mask=$.layers.mask|6,M.layers.mask=P.layers.mask&3,S.layers.mask=P.layers.mask&5;let yt=$.parent,vt=P.cameras;it(P,yt);for(let xt=0;xt<vt.length;xt++)it(vt[xt],yt);vt.length===2?L(P,M,S):P.projectionMatrix.copy(M.projectionMatrix),ft($,P,yt)};function ft($,J,lt){lt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(lt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=th*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(P)},this.getCameraTexture=function($){return p[$]};let Ut=null;function Rt($,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let lt=h.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let yt=!1;lt.length!==P.cameras.length&&(P.cameras.length=0,yt=!0);for(let I=0;I<lt.length;I++){let qt=lt[I],Ot=null;if(d!==null)Ot=d.getViewport(qt);else{let O=u.getViewSubImage(f,qt);Ot=O.viewport,I===0&&(t.setRenderTargetTextures(x,O.colorTexture,O.depthStencilTexture),t.setRenderTarget(x))}let It=D[I];It===void 0&&(It=new _n,It.layers.enable(I),It.viewport=new be,D[I]=It),It.matrix.fromArray(qt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(qt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),I===0&&(P.matrix.copy(It.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),yt===!0&&P.cameras.push(It)}let vt=i.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let I=u.getDepthInformation(lt[0]);I&&I.isValid&&I.texture&&m.init(I,i.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let I=0;I<lt.length;I++){let qt=lt[I].camera;if(qt){let Ot=p[qt];Ot||(Ot=new ul,p[qt]=Ot);let It=u.getCameraImage(qt);Ot.sourceTexture=It}}}}for(let lt=0;lt<b.length;lt++){let yt=w[lt],vt=b[lt];yt!==null&&vt!==void 0&&vt.update(yt,J,c||o)}Ut&&Ut($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let Pt=new g_;Pt.setAnimationLoop(Rt),this.setAnimationLoop=function($){Ut=$},this.dispose=function(){}}},Gs=new fi,CT=new ye;function RT(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,$d(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,x=v.envMapRotation;y&&(m.envMap.value=y,Gs.copy(x),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),m.envMapRotation.value.setFromMatrix4(CT.makeRotationFromEuler(Gs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PT(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){let x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",m));let b=y.program;n.updateUBOMapping(v,b);let w=t.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function h(v){let y=u();v.__bindingPointIndex=y;let x=r.createBuffer(),b=v.__size,w=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let y=i[v.id],x=v.uniforms,b=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let w=0,T=x.length;w<T;w++){let C=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,S=C.length;M<S;M++){let D=C[M];if(d(D,w,M,b)===!0){let P=D.__offset,F=Array.isArray(D.value)?D.value:[D.value],k=0;for(let W=0;W<F.length;W++){let V=F[W],X=_(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,P+k,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):(V.toArray(D.__data,k),k+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,y,x,b){let w=v.value,T=y+"_"+x;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{let C=b[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return b[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(v){let y=v.uniforms,x=0,b=16;for(let T=0,C=y.length;T<C;T++){let M=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,D=M.length;S<D;S++){let P=M[S],F=Array.isArray(P.value)?P.value:[P.value];for(let k=0,W=F.length;k<W;k++){let V=F[k],X=_(V),H=x%b,K=H%X.boundary,L=H+K;x+=K,L!==0&&b-L<X.storage&&(x+=b-L),P.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=x,x+=X.storage}}}let w=x%b;return w>0&&(x+=b-w),v.__size=x,v.__cache={},this}function _(v){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){let y=v.target;y.removeEventListener("dispose",m);let x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var vu=class{constructor(t={}){let{canvas:e=H0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=tn;let w=0,T=0,C=null,M=-1,S=null,D=new be,P=new be,F=null,k=new Ht(0),W=0,V=e.width,X=e.height,H=1,K=null,L=null,it=new be(0,0,V,X),ft=new be(0,0,V,X),Ut=!1,Rt=new Ho,Pt=!1,$=!1,J=new ye,lt=new U,yt=new be,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function Xt(){return C===null?H:1}let I=n;function qt(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),I===null){let B="webgl2";if(I=qt(B,A),I===null)throw qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ot,It,O,ce,St,$t,ee,xe,R,E,G,Q,j,Z,Mt,ot,At,dt,st,ut,Vt,Ct,ht,Jt;function N(){Ot=new Zb(I),Ot.init(),Ct=new TT(I,Ot),It=new Hb(I,Ot,t,Ct),O=new bT(I,Ot),It.reversedDepthBuffer&&f&&O.buffers.depth.setReversed(!0),ce=new Kb(I),St=new hT,$t=new ET(I,Ot,O,St,It,Ct,ce),ee=new Gb(x),xe=new Yb(x),R=new iS(I),ht=new kb(I,R),E=new $b(I,R,ce,ht),G=new jb(I,E,R,ce),st=new Qb(I,It,$t),ot=new Vb(St),Q=new cT(x,ee,xe,Ot,It,ht,ot),j=new RT(x,St),Z=new fT,Mt=new xT(Ot),dt=new Bb(x,ee,xe,O,G,d,l),At=new ST(x,G,It),Jt=new PT(I,ce,It,O),ut=new zb(I,Ot,ce),Vt=new Jb(I,Ot,ce),ce.programs=Q.programs,x.capabilities=It,x.extensions=Ot,x.properties=St,x.renderLists=Z,x.shadowMap=At,x.state=O,x.info=ce}N();let rt=new fp(x,I);this.xr=rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=Ot.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ot.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(V,X,!1))},this.getSize=function(A){return A.set(V,X)},this.setSize=function(A,B,q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,X=B,e.width=Math.floor(A*H),e.height=Math.floor(B*H),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(V*H,X*H).floor()},this.setDrawingBufferSize=function(A,B,q){V=A,X=B,H=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,B,q,Y){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,B,q,Y),O.viewport(D.copy(it).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,B,q,Y){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,B,q,Y),O.scissor(P.copy(ft).multiplyScalar(H).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(A){O.setScissorTest(Ut=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,q=!0){let Y=0;if(A){let z=!1;if(C!==null){let et=C.texture.format;z=et===Hh||et===zh||et===kh}if(z){let et=C.texture.type,ct=et===Hi||et===ss||et===qo||et===Zo||et===Fh||et===Oh,Tt=dt.getClearColor(),bt=dt.getClearAlpha(),Gt=Tt.r,Ft=Tt.g,Nt=Tt.b;ct?(g[0]=Gt,g[1]=Ft,g[2]=Nt,g[3]=bt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=Gt,_[1]=Ft,_[2]=Nt,_[3]=bt,I.clearBufferiv(I.COLOR,0,_))}else Y|=I.COLOR_BUFFER_BIT}B&&(Y|=I.DEPTH_BUFFER_BIT),q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),Z.dispose(),Mt.dispose(),St.dispose(),ee.dispose(),xe.dispose(),G.dispose(),ht.dispose(),Jt.dispose(),Q.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",jt),rt.removeEventListener("sessionend",pt),Yt.stop()};function at(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let A=ce.autoReset,B=At.enabled,q=At.autoUpdate,Y=At.needsUpdate,z=At.type;N(),ce.autoReset=A,At.enabled=B,At.autoUpdate=q,At.needsUpdate=Y,At.type=z}function nt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function tt(A){let B=A.target;B.removeEventListener("dispose",tt),Et(B)}function Et(A){Wt(A),St.remove(A)}function Wt(A){let B=St.get(A).programs;B!==void 0&&(B.forEach(function(q){Q.releaseProgram(q)}),A.isShaderMaterial&&Q.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Y,z,et){B===null&&(B=vt);let ct=z.isMesh&&z.matrixWorld.determinant()<0,Tt=Se(A,B,q,Y,z);O.setMaterial(Y,ct);let bt=q.index,Gt=1;if(Y.wireframe===!0){if(bt=E.getWireframeAttribute(q),bt===void 0)return;Gt=2}let Ft=q.drawRange,Nt=q.attributes.position,ne=Ft.start*Gt,ue=(Ft.start+Ft.count)*Gt;et!==null&&(ne=Math.max(ne,et.start*Gt),ue=Math.min(ue,(et.start+et.count)*Gt)),bt!==null?(ne=Math.max(ne,0),ue=Math.min(ue,bt.count)):Nt!=null&&(ne=Math.max(ne,0),ue=Math.min(ue,Nt.count));let qe=ue-ne;if(qe<0||qe===1/0)return;ht.setup(z,Y,Tt,q,bt);let Ne,Ce=ut;if(bt!==null&&(Ne=R.get(bt),Ce=Vt,Ce.setIndex(Ne)),z.isMesh)Y.wireframe===!0?(O.setLineWidth(Y.wireframeLinewidth*Xt()),Ce.setMode(I.LINES)):Ce.setMode(I.TRIANGLES);else if(z.isLine){let Zt=Y.linewidth;Zt===void 0&&(Zt=1),O.setLineWidth(Zt*Xt()),z.isLineSegments?Ce.setMode(I.LINES):z.isLineLoop?Ce.setMode(I.LINE_LOOP):Ce.setMode(I.LINE_STRIP)}else z.isPoints?Ce.setMode(I.POINTS):z.isSprite&&Ce.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Oo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ot.get("WEBGL_multi_draw"))Ce.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Zt=z._multiDrawStarts,He=z._multiDrawCounts,_e=z._multiDrawCount,ti=bt?R.get(bt).bytesPerElement:1,Zs=St.get(Y).currentProgram.getUniforms();for(let ei=0;ei<_e;ei++)Zs.setValue(I,"_gl_DrawID",ei),Ce.render(Zt[ei]/ti,He[ei])}else if(z.isInstancedMesh)Ce.renderInstances(ne,qe,z.count);else if(q.isInstancedBufferGeometry){let Zt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,He=Math.min(q.instanceCount,Zt);Ce.renderInstances(ne,qe,He)}else Ce.render(ne,qe)};function ge(A,B,q){A.transparent===!0&&A.side===Pn&&A.forceSinglePass===!1?(A.side=xn,A.needsUpdate=!0,Qe(A,B,q),A.side=wr,A.needsUpdate=!0,Qe(A,B,q),A.side=Pn):Qe(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),p=Mt.get(q),p.init(B),y.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==q&&A.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Y=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let et=z.material;if(et)if(Array.isArray(et))for(let ct=0;ct<et.length;ct++){let Tt=et[ct];ge(Tt,q,z),Y.add(Tt)}else ge(et,q,z),Y.add(et)}),p=y.pop(),Y},this.compileAsync=function(A,B,q=null){let Y=this.compile(A,B,q);return new Promise(z=>{function et(){if(Y.forEach(function(ct){St.get(ct).currentProgram.isReady()&&Y.delete(ct)}),Y.size===0){z(A);return}setTimeout(et,10)}Ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let _t=null;function Dt(A){_t&&_t(A)}function jt(){Yt.stop()}function pt(){Yt.start()}let Yt=new g_;Yt.setAnimationLoop(Dt),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(A){_t=A,rt.setAnimationLoop(A),A===null?Yt.stop():Yt.start()},rt.addEventListener("sessionstart",jt),rt.addEventListener("sessionend",pt),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(B),B=rt.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,C),p=Mt.get(A,y.length),p.init(B),y.push(p),J.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Rt.setFromProjectionMatrix(J,Fi,B.reversedDepth),$=this.localClippingEnabled,Pt=ot.init(this.clippingPlanes,$),m=Z.get(A,v.length),m.init(),v.push(m),rt.enabled===!0&&rt.isPresenting===!0){let et=x.xr.getDepthSensingMesh();et!==null&&Bt(et,B,-1/0,x.sortObjects)}Bt(A,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(K,L),xt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,xt&&dt.addToRenderList(m,A),this.info.render.frame++,Pt===!0&&ot.beginShadows();let q=p.state.shadowsArray;At.render(q,A,B),Pt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){let et=B.cameras;if(z.length>0)for(let ct=0,Tt=et.length;ct<Tt;ct++){let bt=et[ct];Ke(Y,z,A,bt)}xt&&dt.render(A);for(let ct=0,Tt=et.length;ct<Tt;ct++){let bt=et[ct];Qt(m,A,bt,bt.viewport)}}else z.length>0&&Ke(Y,z,A,B),xt&&dt.render(A),Qt(m,A,B);C!==null&&T===0&&($t.updateMultisampleRenderTarget(C),$t.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,B),ht.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],Pt===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Bt(A,B,q,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Rt.intersectsSprite(A)){Y&&yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(J);let ct=G.update(A),Tt=A.material;Tt.visible&&m.push(A,ct,Tt,q,yt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Rt.intersectsObject(A))){let ct=G.update(A),Tt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),yt.copy(A.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),yt.copy(ct.boundingSphere.center)),yt.applyMatrix4(A.matrixWorld).applyMatrix4(J)),Array.isArray(Tt)){let bt=ct.groups;for(let Gt=0,Ft=bt.length;Gt<Ft;Gt++){let Nt=bt[Gt],ne=Tt[Nt.materialIndex];ne&&ne.visible&&m.push(A,ct,ne,q,yt.z,Nt)}}else Tt.visible&&m.push(A,ct,Tt,q,yt.z,null)}}let et=A.children;for(let ct=0,Tt=et.length;ct<Tt;ct++)Bt(et[ct],B,q,Y)}function Qt(A,B,q,Y){let z=A.opaque,et=A.transmissive,ct=A.transparent;p.setupLightsView(q),Pt===!0&&ot.setGlobalState(x.clippingPlanes,q),Y&&O.viewport(D.copy(Y)),z.length>0&&re(z,B,q),et.length>0&&re(et,B,q),ct.length>0&&re(ct,B,q),O.buffers.depth.setTest(!0),O.buffers.depth.setMask(!0),O.buffers.color.setMask(!0),O.setPolygonOffset(!1)}function Ke(A,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ji(1,1,{generateMipmaps:!0,type:Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float")?Yo:Hi,minFilter:rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let et=p.state.transmissionRenderTarget[Y.id],ct=Y.viewport||D;et.setSize(ct.z*x.transmissionResolutionScale,ct.w*x.transmissionResolutionScale);let Tt=x.getRenderTarget(),bt=x.getActiveCubeFace(),Gt=x.getActiveMipmapLevel();x.setRenderTarget(et),x.getClearColor(k),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),xt&&dt.render(q);let Ft=x.toneMapping;x.toneMapping=Pr;let Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Pt===!0&&ot.setGlobalState(x.clippingPlanes,Y),re(A,q,Y),$t.updateMultisampleRenderTarget(et),$t.updateRenderTargetMipmap(et),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let ue=0,qe=B.length;ue<qe;ue++){let Ne=B[ue],Ce=Ne.object,Zt=Ne.geometry,He=Ne.material,_e=Ne.group;if(He.side===Pn&&Ce.layers.test(Y.layers)){let ti=He.side;He.side=xn,He.needsUpdate=!0,Oe(Ce,q,Y,Zt,He,_e),He.side=ti,He.needsUpdate=!0,ne=!0}}ne===!0&&($t.updateMultisampleRenderTarget(et),$t.updateRenderTargetMipmap(et))}x.setRenderTarget(Tt,bt,Gt),x.setClearColor(k,W),Nt!==void 0&&(Y.viewport=Nt),x.toneMapping=Ft}function re(A,B,q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,et=A.length;z<et;z++){let ct=A[z],Tt=ct.object,bt=ct.geometry,Gt=ct.group,Ft=ct.material;Ft.allowOverride===!0&&Y!==null&&(Ft=Y),Tt.layers.test(q.layers)&&Oe(Tt,B,q,bt,Ft,Gt)}}function Oe(A,B,q,Y,z,et){A.onBeforeRender(x,B,q,Y,z,et),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(x,B,q,Y,A,et),z.transparent===!0&&z.side===Pn&&z.forceSinglePass===!1?(z.side=xn,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,A,et),z.side=wr,z.needsUpdate=!0,x.renderBufferDirect(q,B,Y,z,A,et),z.side=Pn):x.renderBufferDirect(q,B,Y,z,A,et),A.onAfterRender(x,B,q,Y,z,et)}function Qe(A,B,q){B.isScene!==!0&&(B=vt);let Y=St.get(A),z=p.state.lights,et=p.state.shadowsArray,ct=z.state.version,Tt=Q.getParameters(A,z.state,et,B,q),bt=Q.getProgramCacheKey(Tt),Gt=Y.programs;Y.environment=A.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(A.isMeshStandardMaterial?xe:ee).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Gt===void 0&&(A.addEventListener("dispose",tt),Gt=new Map,Y.programs=Gt);let Ft=Gt.get(bt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===ct)return Ae(A,Tt),Ft}else Tt.uniforms=Q.getUniforms(A),A.onBeforeCompile(Tt,x),Ft=Q.acquireProgram(Tt,bt),Gt.set(bt,Ft),Y.uniforms=Tt.uniforms;let Nt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Nt.clippingPlanes=ot.uniform),Ae(A,Tt),Y.needsLights=De(A),Y.lightsStateVersion=ct,Y.needsLights&&(Nt.ambientLightColor.value=z.state.ambient,Nt.lightProbe.value=z.state.probe,Nt.directionalLights.value=z.state.directional,Nt.directionalLightShadows.value=z.state.directionalShadow,Nt.spotLights.value=z.state.spot,Nt.spotLightShadows.value=z.state.spotShadow,Nt.rectAreaLights.value=z.state.rectArea,Nt.ltc_1.value=z.state.rectAreaLTC1,Nt.ltc_2.value=z.state.rectAreaLTC2,Nt.pointLights.value=z.state.point,Nt.pointLightShadows.value=z.state.pointShadow,Nt.hemisphereLights.value=z.state.hemi,Nt.directionalShadowMap.value=z.state.directionalShadowMap,Nt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Nt.spotShadowMap.value=z.state.spotShadowMap,Nt.spotLightMatrix.value=z.state.spotLightMatrix,Nt.spotLightMap.value=z.state.spotLightMap,Nt.pointShadowMap.value=z.state.pointShadowMap,Nt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function Le(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=Qo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Ae(A,B){let q=St.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Se(A,B,q,Y,z){B.isScene!==!0&&(B=vt),$t.resetTextureUnits();let et=B.fog,ct=Y.isMeshStandardMaterial?B.environment:null,Tt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ns,bt=(Y.isMeshStandardMaterial?xe:ee).get(Y.envMap||ct),Gt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ft=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!q.morphAttributes.position,ne=!!q.morphAttributes.normal,ue=!!q.morphAttributes.color,qe=Pr;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(qe=x.toneMapping);let Ne=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,Zt=St.get(Y),He=p.state.lights;if(Pt===!0&&($===!0||A!==S)){let Nn=A===S&&Y.id===M;ot.setState(Y,A,Nn)}let _e=!1;Y.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==He.state.version||Zt.outputColorSpace!==Tt||z.isBatchedMesh&&Zt.batching===!1||!z.isBatchedMesh&&Zt.batching===!0||z.isBatchedMesh&&Zt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Zt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Zt.instancing===!1||!z.isInstancedMesh&&Zt.instancing===!0||z.isSkinnedMesh&&Zt.skinning===!1||!z.isSkinnedMesh&&Zt.skinning===!0||z.isInstancedMesh&&Zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Zt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Zt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Zt.instancingMorph===!1&&z.morphTexture!==null||Zt.envMap!==bt||Y.fog===!0&&Zt.fog!==et||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ot.numPlanes||Zt.numIntersection!==ot.numIntersection)||Zt.vertexAlphas!==Gt||Zt.vertexTangents!==Ft||Zt.morphTargets!==Nt||Zt.morphNormals!==ne||Zt.morphColors!==ue||Zt.toneMapping!==qe||Zt.morphTargetsCount!==Ce)&&(_e=!0):(_e=!0,Zt.__version=Y.version);let ti=Zt.currentProgram;_e===!0&&(ti=Qe(Y,B,z));let Zs=!1,ei=!1,na=!1,Ve=ti.getUniforms(),xi=Zt.uniforms;if(O.useProgram(ti.program)&&(Zs=!0,ei=!0,na=!0),Y.id!==M&&(M=Y.id,ei=!0),Zs||S!==A){O.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(I,"projectionMatrix",A.projectionMatrix),Ve.setValue(I,"viewMatrix",A.matrixWorldInverse);let qn=Ve.map.cameraPosition;qn!==void 0&&qn.setValue(I,lt.setFromMatrixPosition(A.matrixWorld)),It.logarithmicDepthBuffer&&Ve.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ve.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,ei=!0,na=!0)}if(z.isSkinnedMesh){Ve.setOptional(I,z,"bindMatrix"),Ve.setOptional(I,z,"bindMatrixInverse");let Nn=z.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ve.setValue(I,"boneTexture",Nn.boneTexture,$t))}z.isBatchedMesh&&(Ve.setOptional(I,z,"batchingTexture"),Ve.setValue(I,"batchingTexture",z._matricesTexture,$t),Ve.setOptional(I,z,"batchingIdTexture"),Ve.setValue(I,"batchingIdTexture",z._indirectTexture,$t),Ve.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&Ve.setValue(I,"batchingColorTexture",z._colorsTexture,$t));let vi=q.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&st.update(z,q,ti),(ei||Zt.receiveShadow!==z.receiveShadow)&&(Zt.receiveShadow=z.receiveShadow,Ve.setValue(I,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(xi.envMap.value=bt,xi.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(xi.envMapIntensity.value=B.environmentIntensity),ei&&(Ve.setValue(I,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&jn(xi,na),et&&Y.fog===!0&&j.refreshFogUniforms(xi,et),j.refreshMaterialUniforms(xi,Y,H,X,p.state.transmissionRenderTarget[A.id]),Qo.upload(I,Le(Zt),xi,$t)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Qo.upload(I,Le(Zt),xi,$t),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ve.setValue(I,"center",z.center),Ve.setValue(I,"modelViewMatrix",z.modelViewMatrix),Ve.setValue(I,"normalMatrix",z.normalMatrix),Ve.setValue(I,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Nn=Y.uniformsGroups;for(let qn=0,Pu=Nn.length;qn<Pu;qn++){let as=Nn[qn];Jt.update(as,ti),Jt.bind(as,ti)}}return ti}function jn(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function De(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,B,q){let Y=St.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),St.get(A.texture).__webglTexture=B,St.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let q=St.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let Dn=I.createFramebuffer();this.setRenderTarget=function(A,B=0,q=0){C=A,w=B,T=q;let Y=!0,z=null,et=!1,ct=!1;if(A){let bt=St.get(A);if(bt.__useDefaultFramebuffer!==void 0)O.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(bt.__webglFramebuffer===void 0)$t.setupRenderTarget(A);else if(bt.__hasExternalTextures)$t.rebindTextures(A,St.get(A.texture).__webglTexture,St.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Nt=A.depthTexture;if(bt.__boundDepthTexture!==Nt){if(Nt!==null&&St.has(Nt)&&(A.width!==Nt.image.width||A.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$t.setupDepthRenderbuffer(A)}}let Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(ct=!0);let Ft=St.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ft[B])?z=Ft[B][q]:z=Ft[B],et=!0):A.samples>0&&$t.useMultisampledRTT(A)===!1?z=St.get(A).__webglMultisampledFramebuffer:Array.isArray(Ft)?z=Ft[q]:z=Ft,D.copy(A.viewport),P.copy(A.scissor),F=A.scissorTest}else D.copy(it).multiplyScalar(H).floor(),P.copy(ft).multiplyScalar(H).floor(),F=Ut;if(q!==0&&(z=Dn),O.bindFramebuffer(I.FRAMEBUFFER,z)&&Y&&O.drawBuffers(A,z),O.viewport(D),O.scissor(P),O.setScissorTest(F),et){let bt=St.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,bt.__webglTexture,q)}else if(ct){let bt=B;for(let Gt=0;Gt<A.textures.length;Gt++){let Ft=St.get(A.textures[Gt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Gt,Ft.__webglTexture,q,bt)}}else if(A!==null&&q!==0){let bt=St.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,bt.__webglTexture,q)}M=-1},this.readRenderTargetPixels=function(A,B,q,Y,z,et,ct,Tt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&(bt=bt[ct]),bt){O.bindFramebuffer(I.FRAMEBUFFER,bt);try{let Gt=A.textures[Tt],Ft=Gt.format,Nt=Gt.type;if(!It.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-z&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Tt),I.readPixels(B,q,Y,z,Ct.convert(Ft),Ct.convert(Nt),et))}finally{let Gt=C!==null?St.get(C).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Y,z,et,ct,Tt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=St.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ct!==void 0&&(bt=bt[ct]),bt)if(B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-z){O.bindFramebuffer(I.FRAMEBUFFER,bt);let Gt=A.textures[Tt],Ft=Gt.format,Nt=Gt.type;if(!It.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.bufferData(I.PIXEL_PACK_BUFFER,et.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Tt),I.readPixels(B,q,Y,z,Ct.convert(Ft),Ct.convert(Nt),0);let ue=C!==null?St.get(C).__webglFramebuffer:null;O.bindFramebuffer(I.FRAMEBUFFER,ue);let qe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await V0(I,qe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,et),I.deleteBuffer(ne),I.deleteSync(qe),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,q=0){let Y=Math.pow(2,-q),z=Math.floor(A.image.width*Y),et=Math.floor(A.image.height*Y),ct=B!==null?B.x:0,Tt=B!==null?B.y:0;$t.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,ct,Tt,z,et),O.unbindTexture()};let _i=I.createFramebuffer(),sn=I.createFramebuffer();this.copyTextureToTexture=function(A,B,q=null,Y=null,z=0,et=null){et===null&&(z!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=z,z=0):et=0);let ct,Tt,bt,Gt,Ft,Nt,ne,ue,qe,Ne=A.isCompressedTexture?A.mipmaps[et]:A.image;if(q!==null)ct=q.max.x-q.min.x,Tt=q.max.y-q.min.y,bt=q.isBox3?q.max.z-q.min.z:1,Gt=q.min.x,Ft=q.min.y,Nt=q.isBox3?q.min.z:0;else{let vi=Math.pow(2,-z);ct=Math.floor(Ne.width*vi),Tt=Math.floor(Ne.height*vi),A.isDataArrayTexture?bt=Ne.depth:A.isData3DTexture?bt=Math.floor(Ne.depth*vi):bt=1,Gt=0,Ft=0,Nt=0}Y!==null?(ne=Y.x,ue=Y.y,qe=Y.z):(ne=0,ue=0,qe=0);let Ce=Ct.convert(B.format),Zt=Ct.convert(B.type),He;B.isData3DTexture?($t.setTexture3D(B,0),He=I.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?($t.setTexture2DArray(B,0),He=I.TEXTURE_2D_ARRAY):($t.setTexture2D(B,0),He=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);let _e=I.getParameter(I.UNPACK_ROW_LENGTH),ti=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Zs=I.getParameter(I.UNPACK_SKIP_PIXELS),ei=I.getParameter(I.UNPACK_SKIP_ROWS),na=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ne.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ft),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Nt);let Ve=A.isDataArrayTexture||A.isData3DTexture,xi=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let vi=St.get(A),Nn=St.get(B),qn=St.get(vi.__renderTarget),Pu=St.get(Nn.__renderTarget);O.bindFramebuffer(I.READ_FRAMEBUFFER,qn.__webglFramebuffer),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pu.__webglFramebuffer);for(let as=0;as<bt;as++)Ve&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(A).__webglTexture,z,Nt+as),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,St.get(B).__webglTexture,et,qe+as)),I.blitFramebuffer(Gt,Ft,ct,Tt,ne,ue,ct,Tt,I.DEPTH_BUFFER_BIT,I.NEAREST);O.bindFramebuffer(I.READ_FRAMEBUFFER,null),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||St.has(A)){let vi=St.get(A),Nn=St.get(B);O.bindFramebuffer(I.READ_FRAMEBUFFER,_i),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,sn);for(let qn=0;qn<bt;qn++)Ve?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vi.__webglTexture,z,Nt+qn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vi.__webglTexture,z),xi?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nn.__webglTexture,et,qe+qn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nn.__webglTexture,et),z!==0?I.blitFramebuffer(Gt,Ft,ct,Tt,ne,ue,ct,Tt,I.COLOR_BUFFER_BIT,I.NEAREST):xi?I.copyTexSubImage3D(He,et,ne,ue,qe+qn,Gt,Ft,ct,Tt):I.copyTexSubImage2D(He,et,ne,ue,Gt,Ft,ct,Tt);O.bindFramebuffer(I.READ_FRAMEBUFFER,null),O.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else xi?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(He,et,ne,ue,qe,ct,Tt,bt,Ce,Zt,Ne.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(He,et,ne,ue,qe,ct,Tt,bt,Ce,Ne.data):I.texSubImage3D(He,et,ne,ue,qe,ct,Tt,bt,Ce,Zt,Ne):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,et,ne,ue,ct,Tt,Ce,Zt,Ne.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,et,ne,ue,Ne.width,Ne.height,Ce,Ne.data):I.texSubImage2D(I.TEXTURE_2D,et,ne,ue,ct,Tt,Ce,Zt,Ne);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ti),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Zs),I.pixelStorei(I.UNPACK_SKIP_ROWS,ei),I.pixelStorei(I.UNPACK_SKIP_IMAGES,na),et===0&&B.generateMipmaps&&I.generateMipmap(He),O.unbindTexture()},this.initRenderTarget=function(A){St.get(A).__webglFramebuffer===void 0&&$t.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?$t.setTextureCube(A,0):A.isData3DTexture?$t.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?$t.setTexture2DArray(A,0):$t.setTexture2D(A,0),O.unbindTexture()},this.resetState=function(){w=0,T=0,C=null,O.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};function S_(r){let t=new Us,e=new le(new Os(40,48,24),new Je({side:xn,depthWrite:!1,uniforms:{top:{value:new Ht("#1d2150")},horizon:{value:new Ht("#10122a")},bottom:{value:new Ht("#040409")}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom;
        varying vec3 vDir;
        void main() {
          float h = vDir.y;
          vec3 c = h > 0.0 ? mix(horizon, top, pow(h, 0.7)) : mix(horizon, bottom, pow(-h, 0.45));
          gl_FragColor = vec4(c, 1.0);
        }`}));t.add(e);let n=new U,i=(a,l,c,h,u,f,d)=>{let g=new le(new Ai(a,l),new Rn({color:new Ht(c).multiplyScalar(h),side:Pn}));g.position.set(u,f,d),g.lookAt(n),t.add(g)};i(9,9,"#ffffff",2.2,0,14,4),i(6,10,"#ff8a3d",3.2,-12,2,6),i(6,10,"#4d6bff",3,12,1,4),i(1.2,16,"#ffffff",5,-7,0,11),i(1.2,16,"#c9d4ff",4,8,0,10),i(14,3,"#7b4dff",1.4,0,-6,-12);let s=new jo(r),o=s.fromScene(t,.035);return s.dispose(),t.traverse(a=>{a.geometry?.dispose(),a.material?.dispose()}),o.texture}var Ri=class{constructor(t,e={}){this.el=t,this.scene=new Us,this.camera=new _n(e.fov??30,1,e.near??.1,e.far??100),this.width=0,this.height=0,this.enabled=!0,this.visible=!1,this.transmissive=!!e.transmissive,this.bgColor=e.bgColor?new Ht(e.bgColor):null,this.margin=e.margin??0,this.time=0}resize(){}update(){}},Su=class{constructor(t,e={}){this.canvas=t,this.stages=[],this.failed=!1;let n=window.matchMedia("(pointer: coarse)").matches;this.isMobile=n||window.innerWidth<760,this.maxDpr=e.maxDpr??(this.isMobile?1.5:1.75),this.dpr=Math.min(window.devicePixelRatio||1,this.maxDpr);try{this.renderer=new vu({canvas:t,antialias:!0,alpha:!0,stencil:!1,powerPreference:"high-performance"})}catch{this.failed=!0;return}let i=this.renderer;i.outputColorSpace=tn,i.toneMapping=Ih,i.toneMappingExposure=1,i.autoClear=!1,i.setClearColor(0,0),this.pageBg=new Ht("#07080F"),this.env=S_(i),this.cw=0,this.ch=0,this.resize(),this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(t),this._frames=[],this._last=performance.now(),this._quietFrames=0,this.jobs=[]}add(t){return t.engine=this,t.scene.environment===null&&(t.scene.environment=this.env),this.stages.push(t),t}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;t===this.cw&&e===this.ch&&this.renderer.getPixelRatio()===this.dpr||(this.cw=t,this.ch=e,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1))}async warmup(t){if(this.failed)return;let e=this.renderer,n=this.stages.length;for(let i=0;i<n;i++){let s=this.stages[i];s.camera.aspect=1,s.camera.updateProjectionMatrix();let o=[];s.scene.traverse(a=>{a.visible||(o.push(a),a.visible=!0)});try{await e.compileAsync(s.scene,s.camera)}catch{}e.setScissorTest(!0),e.setViewport(0,0,8,8),e.setScissor(0,0,8,8),e.setClearColor(this.pageBg,1),e.render(s.scene,s.camera);for(let a of o)a.visible=!1;t?.((i+1)/n),await new Promise(a=>requestAnimationFrame(a))}e.setScissorTest(!1),e.setClearColor(0,0),e.clear()}render(t,e){if(this.failed)return;let n=this.renderer,i=this.cw,s=this.ch,o=!1,a=!1;if(this.jobs.length){let l=this.jobs.shift();try{l()}catch(c){console.warn(c)}a=!0}for(let l of this.stages){if(!l.enabled){l.visible&&(l.visible=!1,l.onVisibility?.(!1));continue}let c=l.el.getBoundingClientRect(),h=l.margin,u=c.left-h,f=c.top-h,d=c.width+h*2,g=c.height+h*2,_=d>2&&g>2&&f<s&&f+g>0&&u<i&&u+d>0;_!==l.visible&&(l.visible=_,l.onVisibility?.(_)),l._rect=_?{left:u,top:f,w:d,h:g}:null,_&&(o=!0)}if(!o){a&&(this._quietFrames=0),this._quietFrames++<2&&(n.setScissorTest(!1),n.setClearColor(0,0),n.clear());return}this._quietFrames=0,n.setScissorTest(!1),n.setClearColor(0,0),n.clear();for(let l of this.stages){if(!l.visible||!l._rect)continue;let{left:c,top:h,w:u,h:f}=l._rect;(Math.abs(l.width-u)>.5||Math.abs(l.height-f)>.5)&&(l.width=u,l.height=f,l.camera.aspect=u/f,l.camera.updateProjectionMatrix(),l.resize(u,f)),l.time+=e,l.update(t,e);let d=s-(h+f);n.setViewport(c,d,u,f);let g=Math.max(0,c),_=Math.max(0,d),m=Math.min(i,c+u)-g,p=Math.min(s,d+f)-_;m<=0||p<=0||(n.setScissor(g,_,m,p),n.setScissorTest(!0),n.clearDepth(),l.transmissive?n.setClearColor(l.bgColor||this.pageBg,1):n.setClearColor(0,0),n.render(l.scene,l.camera))}n.setScissorTest(!1),n.setClearColor(0,0),this._adapt()}_adapt(){let t=performance.now(),e=t-this._last;if(this._last=t,e>200||(this._frames.push(e),this._frames.length<90))return;let n=this._frames.reduce((i,s)=>i+s,0)/this._frames.length;this._frames.length=0,n>26&&this.dpr>1&&(this.dpr=Math.max(1,this.dpr-.25),this.resize())}};var IT={N:[0,-.78,1.1],NB:[0,-.5,.98],BR:[0,.02,.64],FH:[0,.48,.5],CR:[0,.8,.05],NK:[0,.42,-.58],CH:[0,-.99,.8],TH:[0,-1.08,.12],BB:[0,-.56,-.52],SN:[.17,-.57,.92],SL:[.2,-.86,.86],MZ:[.44,-.5,.62],EI:[.22,-.05,.64],EO:[.54,.09,.5],EY:[.37,-.2,.62],TM:[.56,.44,.34],EBI:[.27,.74,.24],EBO:[.84,.42,.12],ET:[.96,1.46,.02],EIN:[.7,.86,.2],EBK:[.62,.8,-.24],CK:[1.1,-.38,.1],CL:[.74,-.8,.32],JW:[.4,-.96,.44],SD:[.74,-.1,-.36]},LT={o:"#ff6a2a",d:"#d9481a",a:"#ff9a48",w:"#f5efe7",s:"#cfc6d8",k:"#17121f",i:"#ffd2ad",e:"#2a1830"},DT=[["NB","SN","N","o"],["N","SN","SL","k"],["N","SL","CH","w"],["SL","JW","CH","s"],["SN","MZ","SL","w"],["SL","MZ","JW","s"],["NB","BR","SN","a"],["SN","BR","EI","o"],["SN","EI","MZ","o"],["EI","EY","MZ","a"],["EI","EO","EY","k"],["EI","BR","FH","o"],["EI","FH","TM","o"],["EI","TM","EO","d"],["MZ","EY","EO","a"],["MZ","EO","CK","w"],["MZ","CK","CL","w"],["MZ","CL","JW","s"],["EO","TM","EBO","o"],["EO","EBO","CK","d"],["FH","CR","EBI","o"],["FH","EBI","TM","a"],["TM","EBI","EBO","o"],["EBI","EIN","ET","e"],["EIN","EBO","ET","i"],["EBI","EBO","EIN","d"],["ET","EBO","EBK","d"],["ET","EBK","EBI","o"],["EBI","EBK","CR","d"],["CR","EBK","NK","d"],["EBK","SD","NK","d"],["EBK","EBO","SD","o"],["EBO","CK","SD","d"],["CK","CL","SD","s"],["CL","JW","TH","w"],["CL","TH","BB","s"],["CL","BB","SD","s"],["JW","CH","TH","w"],["SD","BB","NK","d"]];function pp(r,t){let e=IT[r];return new U(t&&e[0]!==0?-e[0]:e[0],e[1],e[2])}var M_=`
  attribute vec3 aCenter;
  attribute vec3 aTarget;
  attribute vec3 aAxis;
  attribute float aRand;
  attribute vec3 aCorner;
  attribute vec3 aCellColor;
  uniform float uExplode;
  uniform float uGrid;
  uniform float uTime;
  varying float vRand;
  vec3 rotAxis(vec3 v, vec3 k, float a) {
    float c = cos(a), s = sin(a);
    return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
  }
`,b_=`
  vec3 local = transformed - aCenter;
  float e = uExplode;
  vec3 dir = normalize(aCenter + vec3(0.0, 0.0, 0.35));
  vec3 scatter = aCenter + dir * e * (1.4 + aRand * 3.2)
    + vec3(sin(uTime * 0.6 + aRand * 20.0), cos(uTime * 0.5 + aRand * 13.0), 0.0) * e * 0.25;
  float ang = e * (aRand * 7.0 + 2.0) * (1.0 - uGrid);
  local = rotAxis(local, aAxis, ang);
  // \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u043E\u0441\u043A\u043E\u043B\u043E\u043A \u043B\u043E\u0436\u0438\u0442\u0441\u044F \u043F\u043B\u043E\u0441\u043A\u043E \u0438 \u0447\u0443\u0442\u044C \u0434\u044B\u0448\u0438\u0442
  vec3 cell = aTarget + vec3(0.0, 0.0, sin(uTime * 1.4 + aTarget.x * 1.7 + aTarget.y * 2.3) * 0.05);
  float gp = smoothstep(0.0, 1.0, uGrid);
  vec3 c = mix(scatter, cell, gp);
  // \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0435 \u043A\u0430\u0436\u0434\u0430\u044F \u043F\u0430\u0440\u0430 \u0433\u0440\u0430\u043D\u0435\u0439 \u043F\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044F \u0432 \u043F\u0440\u044F\u043C\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0443\u044E \u044F\u0447\u0435\u0439\u043A\u0443
  float shape = smoothstep(0.35, 1.0, uGrid);
  transformed = c + mix(local * mix(1.0, 0.7, gp), aCorner, shape);
  vRand = aRand;
`;function E_(){let r=[],t=[],e=[],n=[],i=[],s=[],o=[],a=[],l=[],c={center:[],target:[],axis:[],rand:[],corner:[],cellColor:[]},h=[];for(let P of[!1,!0])for(let F of DT){let k=pp(F[0],P),W=pp(F[1],P),V=pp(F[2],P);h.push({v:P?[k,V,W]:[k,W,V],color:F[3]})}let u=h.map((P,F)=>{let k=(P.v[0].x+P.v[1].x+P.v[2].x)/3,W=(P.v[0].y+P.v[1].y+P.v[2].y)/3;return{i:F,key:-W*10+k}}).sort((P,F)=>P.key-F.key),f=4,d=Math.ceil(h.length/2/f),g=.92,_=.24,m=.06,p=.05,v=new Array(h.length);u.forEach((P,F)=>v[P.i]=F);let y=new Ht;h.forEach((P,F)=>{let k=P.v[0].clone().add(P.v[1]).add(P.v[2]).multiplyScalar(.3333333333333333),W=v[F],V=Math.floor(W/2),X=W%2,H=Math.floor(V/f),K=V%f,L=new U((K-(f-1)/2)*(g+m),((d-1)/2-H)*(_+p),0),it=g/2,ft=_/2,Ut=X?[[-it,ft],[it,ft],[-it,-ft]]:[[it,ft],[it,-ft],[-it,-ft]],Rt=new Ht(H===0?"#ff6a2a":(H+K)%2?"#262b5e":"#1d2149");H>0&&K===3&&Rt.set("#3b2a5a");let Pt=new U(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),$=Math.random();y.set(LT[P.color]);let J={};y.getHSL(J),y.setHSL(J.h+(Math.random()-.5)*.012,J.s,J.l*(.94+Math.random()*.1)),P.v.forEach((lt,yt)=>{o.push(Ut[yt][0],Ut[yt][1],0),a.push(Rt.r,Rt.g,Rt.b),r.push(lt.x,lt.y,lt.z),t.push(y.r,y.g,y.b),e.push(k.x,k.y,k.z),n.push(L.x,L.y,L.z),i.push(Pt.x,Pt.y,Pt.z),s.push($)});for(let[lt,yt]of[[0,1],[1,2],[2,0]])for(let vt of[lt,yt]){let xt=P.v[vt];l.push(xt.x,xt.y,xt.z),c.corner.push(Ut[vt][0],Ut[vt][1],0),c.cellColor.push(0,0,0),c.center.push(k.x,k.y,k.z),c.target.push(L.x,L.y,L.z),c.axis.push(Pt.x,Pt.y,Pt.z),c.rand.push($)}});let x=new Ie;x.setAttribute("position",new ie(r,3)),x.setAttribute("color",new ie(t,3)),x.setAttribute("aCenter",new ie(e,3)),x.setAttribute("aTarget",new ie(n,3)),x.setAttribute("aAxis",new ie(i,3)),x.setAttribute("aRand",new ie(s,1)),x.setAttribute("aCorner",new ie(o,3)),x.setAttribute("aCellColor",new ie(a,3)),x.computeVertexNormals();let b=new Ie;b.setAttribute("position",new ie(l,3)),b.setAttribute("aCenter",new ie(c.center,3)),b.setAttribute("aTarget",new ie(c.target,3)),b.setAttribute("aAxis",new ie(c.axis,3)),b.setAttribute("aRand",new ie(c.rand,1)),b.setAttribute("aCorner",new ie(c.corner,3)),b.setAttribute("aCellColor",new ie(c.cellColor,3));let w={uExplode:{value:0},uGrid:{value:0},uTime:{value:0},uGlow:{value:.35}},T=new di({vertexColors:!0,flatShading:!0,roughness:.32,metalness:.05,clearcoat:1,clearcoatRoughness:.12,iridescence:.35,iridescenceIOR:1.6,envMapIntensity:1.25,side:Pn});T.onBeforeCompile=P=>{Object.assign(P.uniforms,w),P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
`+M_).replace("#include <begin_vertex>",`#include <begin_vertex>
`+b_).replace("#include <color_vertex>",`#include <color_vertex>
vColor.rgb = mix(vColor.rgb, aCellColor, smoothstep(0.4, 1.0, uGrid));`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGrid; uniform float uTime; varying float vRand;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float pulse = smoothstep(0.75, 1.0, sin(uTime * 1.6 + vRand * 40.0) * 0.5 + 0.5);
         totalEmissiveRadiance += diffuseColor.rgb * (0.08 + uGrid * (0.25 + pulse * 0.6));`)},T.customProgramCacheKey=()=>"fox-shatter";let C=new Je({uniforms:w,transparent:!0,depthWrite:!1,blending:In,vertexShader:`
      ${M_}
      varying float vDepth;
      void main() {
        vec3 transformed = position;
        ${b_}
        vec4 mv = modelViewMatrix * vec4(transformed, 1.0);
        vDepth = transformed.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uGlow; uniform float uGrid; uniform float uTime;
      varying float vRand; varying float vDepth;
      void main() {
        vec3 warm = vec3(1.0, 0.62, 0.32);
        vec3 cool = vec3(0.45, 0.55, 1.0);
        vec3 c = mix(warm, cool, uGrid * 0.8 + vRand * 0.2);
        float flick = 0.75 + 0.25 * sin(uTime * 3.0 + vRand * 30.0);
        gl_FragColor = vec4(c * flick, uGlow * (1.0 - uGrid * 0.85) * (0.55 + 0.45 * smoothstep(-0.6, 1.0, vDepth)));
      }`}),M=new ke,S=new le(x,T),D=new es(b,C);return D.renderOrder=2,M.add(S,D),{group:M,mesh:S,lines:D,uniforms:w,grid:{cols:f,rows:d}}}var Mu=(r,t=0,e=1)=>Math.min(Math.max(r,t),e),Xn=(r,t,e)=>r+(t-r)*e,Fe=(r,t,e)=>Mu((r-t)/(e-t)),T_=r=>r*r*(3-2*r),gi=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,ea=r=>1-Math.pow(1-r,3);var vn=(r,t,e,n)=>Xn(r,t,1-Math.exp(-e*n)),we={x:0,y:0,sx:0,sy:0,active:!1};typeof window<"u"&&window.addEventListener("pointermove",r=>{we.x=r.clientX/window.innerWidth*2-1,we.y=r.clientY/window.innerHeight*2-1,we.active=!0},{passive:!0});function w_(r){we.sx=vn(we.sx,we.x,3.2,r),we.sy=vn(we.sy,we.y,3.2,r)}function qs(r,t,e){let n=Math.tan(r.fov*Math.PI/360),i=t/2/n,s=e/r.aspect/2/n;return Math.max(i,s)}var Gi='"Geist Mono", ui-monospace, monospace',bu='"Geist", system-ui, sans-serif';function Eu(r){let t=new rr(r);return t.colorSpace=tn,t.anisotropy=4,t}function A_(r,t){let n=document.createElement("canvas"),i=n.getContext("2d");i.font=`500 44px ${Gi}`;let s=Math.ceil(i.measureText(r).width)+64;return n.width=s,n.height=96,i.font=`500 44px ${Gi}`,i.fillStyle="rgba(14,16,40,0.55)",i.strokeStyle=t,i.globalAlpha=1,i.lineWidth=2,Al(i,2,2,s-4,92,46),i.fill(),i.globalAlpha=.6,i.stroke(),i.globalAlpha=1,i.fillStyle=t,i.textBaseline="middle",i.fillText(r,32,96/2+2),{texture:Eu(n),aspect:s/96}}function C_(r,t,e){let n=document.createElement("canvas");n.width=512,n.height=192;let i=n.getContext("2d");return i.fillStyle="rgba(10,12,30,0.72)",Al(i,4,4,504,184,36),i.fill(),i.strokeStyle=e,i.lineWidth=3,i.globalAlpha=.8,i.stroke(),i.globalAlpha=1,i.fillStyle=e,i.beginPath(),i.arc(58,96,14,0,Math.PI*2),i.fill(),i.fillStyle="#eef0ff",i.font=`600 64px ${bu}`,i.textBaseline="middle",i.fillText(r,96,80),i.fillStyle="rgba(200,206,255,0.6)",i.font=`400 30px ${Gi}`,i.fillText(t,98,140),Eu(n)}function R_(){let e=document.createElement("canvas");e.width=1600,e.height=1e3;let n=e.getContext("2d");n.fillStyle="#0b0d1c",n.fillRect(0,0,1600,1e3),n.fillStyle="#12152b",n.fillRect(0,0,1600,54),["#ff5f57","#febc2e","#28c840"].forEach((u,f)=>{n.fillStyle=u,n.beginPath(),n.arc(30+f*28,27,8,0,Math.PI*2),n.fill()}),n.fillStyle="#c9cdf0",n.font=`600 22px ${bu}`,n.fillText("SQLHarmonyDesk",130,34),n.fillStyle="#6b7099",n.font=`400 18px ${Gi}`,n.fillText("fusion-prod \xB7 PL/SQL mode",330,34),n.fillStyle="#0f1226",n.fillRect(0,54,300,946),n.fillStyle="#7d83b3",n.font=`600 16px ${bu}`,n.fillText("TABLES",26,96);let i=["PER_ALL_PEOPLE_F","PER_ALL_ASSIGNMENTS_M","HR_ALL_ORGANIZATION_UNITS","AP_INVOICES_ALL","GL_JE_HEADERS","PO_HEADERS_ALL","HZ_PARTIES"];n.font=`400 17px ${Gi}`,i.forEach((u,f)=>{n.fillStyle=f===0?"#ff8a4a":"#a7acd6",n.fillText((f===0?"\u25BE ":"\u25B8 ")+u,22,134+f*34)}),["PERSON_ID","EFFECTIVE_START_DATE","PERSON_NUMBER","BUSINESS_GROUP_ID"].forEach((u,f)=>{n.fillStyle="#6f75a6",n.fillText("  \xB7 "+u,34,166+f*28+204)}),["employees.sql","invoices.sql","gl_balance.sql"].forEach((u,f)=>{n.fillStyle=f===0?"#0b0d1c":"#12152b",n.fillRect(300+f*220,54,218,46),n.fillStyle=f===0?"#eef0ff":"#6b7099",n.font=`400 18px ${Gi}`,n.fillText(u,324+f*220,84)}),n.fillStyle="#ff6a2a",n.fillRect(300,98,218,3);let s=[[["SELECT","k"],[" p.person_number,","t"]],[["       n.full_name,","t"]],[["       ","t"],["COUNT","f"],["(a.assignment_id) ","t"],["AS","k"],[" assignments","t"]],[["FROM","k"],["   per_all_people_f p","t"]],[["JOIN","k"],["   per_person_names_f n ","t"],["ON","k"],[" n.person_id = p.person_id","t"]],[["WHERE","k"],["  n.name_type = ","t"],["'GLOBAL'","s"]],[["GROUP BY","k"],[" p.person_number, n.full_name","t"]],[["ORDER BY","k"],[" assignments ","t"],["DESC","k"],[";","t"]]],o={k:"#ff8a4a",t:"#d9dcf7",f:"#7aa2ff",s:"#7ee0b1"};n.font=`400 22px ${Gi}`,s.forEach((u,f)=>{let d=370,g=150+f*36;n.fillStyle="#3f4470",n.fillText(String(f+1).padStart(2," "),320,g);for(let[_,m]of u)n.fillStyle=o[m],n.fillText(_,d,g),d+=n.measureText(_).width});let a=470;n.fillStyle="#0f1226",n.fillRect(300,a,1300,1e3-a),n.fillStyle="#7d83b3",n.font=`600 16px ${bu}`,n.fillText("RESULTS",324,a+36),n.fillStyle="#2bd49a",n.font=`400 16px ${Gi}`,n.fillText("\u25CF page 1 \xB7 rows 1\u201350",430,a+36),[["CSV","#7aa2ff"],["XLSX","#2bd49a"]].forEach(([u,f],d)=>{n.strokeStyle=f,n.lineWidth=2,Al(n,1380+d*100,a+14,84,32,8),n.stroke(),n.fillStyle=f,n.font=`600 16px ${Gi}`,n.fillText(u,1395+d*100,a+36)});let l=["PERSON_NUMBER","FULL_NAME","ASSIGNMENTS"],c=[324,640,1100];n.fillStyle="#181c3a",n.fillRect(300,a+62,1300,40),n.font=`600 17px ${Gi}`,n.fillStyle="#a7acd6",l.forEach((u,f)=>n.fillText(u,c[f],a+88));let h=["Avery Collins","Jordan Patel","Mia Novak","Lucas Romero","Emma Lindqvist","Noah Fischer","Sofia Marin","Ethan Brooks","Chloe Dubois","Liam Okafor"];return n.font=`400 17px ${Gi}`,h.forEach((u,f)=>{let d=a+136+f*38;f%2&&(n.fillStyle="rgba(255,255,255,0.025)",n.fillRect(300,d-26,1300,38)),n.fillStyle="#c9cdf0",n.fillText(String(100231+f*17),c[0],d),n.fillText(u,c[1],d),n.fillStyle="#ff9a5a",n.fillText(String(12-Math.floor(f*.9)),c[2],d)}),Eu(e)}function P_(){let r=document.createElement("canvas");r.width=1024,r.height=640;let t=r.getContext("2d");t.fillStyle="#1a1c2b",t.fillRect(0,0,1024,640);let e=[14,14,13,12,9],n=62,i=8;return e.forEach((s,o)=>{let l=(1024-(s*n+(s-1)*i))/2;for(let c=0;c<s;c++){let h=o===4&&c===4?4:1,u=n*h+i*(h-1);t.fillStyle="#0d0e18",Al(t,l,40+o*70,u,60,9),t.fill(),l+=u+i,h>1&&(c+=0)}}),t.fillStyle="#22253a",Al(t,362,410,300,190,18),t.fill(),Eu(r)}function Al(r,t,e,n,i,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+n,e,t+n,e+i,s),r.arcTo(t+n,e+i,t,e+i,s),r.arcTo(t,e+i,t,e,s),r.arcTo(t,e,t+n,e,s),r.closePath()}var I_=["SELECT","JOIN","WHERE","GROUP BY","HAVING","PL/SQL","MERGE","UNION","OVER()","COMMIT","WITH","ORDER BY","LISTAGG","NVL()"],Tu=class extends Ri{constructor(t,e={}){super(t,{fov:32}),this.mobile=!!e.mobile,this.progress=0,this.intro=0,this.boost=0;let n=this.scene;n.add(new zi("#8a90ff",.35));let i=new mi("#ffd7b8",2.2);i.position.set(-3,4,5),n.add(i);let s=new mi("#5b6bff",2.6);s.position.set(4,1,-3),n.add(s),this.root=new ke,n.add(this.root),this.fox=E_(),this.foxPivot=new ke,this.foxPivot.add(this.fox.group),this.root.add(this.foxPivot);let o=NT();this.glow=new Cr(new ir({map:o,color:"#ff7a3a",transparent:!0,opacity:.55,depthWrite:!1,blending:In})),this.glow.scale.set(6.5,6.5,1),this.glow.position.set(0,0,-1.6),this.root.add(this.glow),this.glow2=new Cr(new ir({map:o,color:"#4053ff",transparent:!0,opacity:.5,depthWrite:!1,blending:In})),this.glow2.scale.set(9,9,1),this.glow2.position.set(1.4,-.8,-3),this.root.add(this.glow2),this.ring=new ke,this.ring.rotation.set(.32,0,-.18),this.words=I_.map((a,l)=>{let{texture:c,aspect:h}=A_(a,l%3===0?"#ffb07a":"#b9c3ff"),u=new Cr(new ir({map:c,transparent:!0,depthWrite:!1,opacity:.9})),f=.17;return u.scale.set(f*h,f,1),u.userData.a=l/I_.length*Math.PI*2,this.ring.add(u),u}),this.root.add(this.ring),this.stream=UT(this.mobile?900:1800),this.root.add(this.stream),this.sea=FT(this.mobile?70:110),this.sea.position.set(0,-2.1,-1),this.root.add(this.sea)}resize(t,e){if(this.aspect=t/e,this.narrow=this.aspect<.9,!this.narrow){this.layout={x:1.75,y:.05,s:1,gy:.62,gs:1},this.baseDist=qs(this.camera,4.6,8.6);return}this.baseDist=qs(this.camera,1,4.3);let n=2*this.baseDist*Math.tan(this.camera.fov*Math.PI/360)/e,i=this.slot||{top:e*.1,bottom:e*.42},s=Math.max(110,i.bottom-i.top),o=Math.min(1,s*n/2.75),a=(i.top+i.bottom)/2;this.layout={x:0,y:(e/2-a)*n-.19*o,s:o,gy:1.1,gs:.92}}update(t,e){let n=this.time,i=this.progress,s=this.fox.uniforms;s.uTime.value=n,this.boost=vn(this.boost,this.boostTarget||0,4,e);let o=1-gi(this.intro),a=Fe(i,.08,.5),l=gi(Fe(i,.38,.92));s.uExplode.value=Math.max(o,a*(1-l*0))+this.boost*.06,s.uGrid.value=l,s.uGlow.value=.28+this.boost*.5+Fe(i,.1,.4)*.4;let c=this.layout||{x:1.7,y:0,s:1},h=1-l;this.foxPivot.rotation.y=vn(this.foxPivot.rotation.y,(we.sx*.55-.18+Math.sin(n*.4)*.06)*h,4,e),this.foxPivot.rotation.x=vn(this.foxPivot.rotation.x,(we.sy*.3+.05)*h,4,e),this.foxPivot.position.y=Math.sin(n*1.1)*.06*h,this.root.position.x=Xn(c.x,0,l),this.root.position.y=Xn(c.y,c.gy??.62,l),this.root.scale.setScalar(Xn(c.s??1,c.gs??1,l));let u=1.75+a*1.2;this.ring.rotation.z=-.18+we.sx*.08,this.words.forEach((g,_)=>{let m=g.userData.a+n*.22;g.position.set(Math.cos(m)*u,Math.sin(m*2+_)*.08,Math.sin(m)*u),g.material.opacity=(.25+.75*(Math.sin(m)*.5+.5))*(1-l)*Math.min(1,this.intro*1.5)}),this.stream.material.uniforms.uTime.value=n,this.stream.material.uniforms.uFade.value=(1-l*.85)*this.intro,this.stream.material.uniforms.uBoost.value=this.boost,this.sea.material.uniforms.uTime.value=n,this.sea.material.uniforms.uFade.value=this.intro,this.glow.material.opacity=(.45+Math.sin(n*1.3)*.08+this.boost*.3)*this.intro,this.glow2.material.opacity=.45*this.intro;let f=(this.baseDist||9)*Xn(1,this.narrow?1:.92,l),d=this.camera;d.position.x=vn(d.position.x,we.sx*.35,3,e),d.position.y=vn(d.position.y,-we.sy*.22+l*.2,3,e),d.position.z=f,d.lookAt(this.root.position.x*0,0,0)}};function NT(){let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d"),e=t.createRadialGradient(128,128,0,128,128,128);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.45)"),e.addColorStop(.6,"rgba(255,255,255,0.08)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);let n=new rr(r);return n.colorSpace=tn,n}function UT(r){let t=new Ie,e=new Float32Array(r*4);for(let s=0;s<r;s++)e[s*4]=Math.random(),e[s*4+1]=Math.random()*Math.PI*2,e[s*4+2]=.4+Math.random()*.8,e[s*4+3]=Math.random();t.setAttribute("position",new ze(new Float32Array(r*3),3)),t.setAttribute("aSeed",new ze(e,4));let n=new Je({transparent:!0,depthWrite:!1,blending:In,uniforms:{uTime:{value:0},uFade:{value:0},uBoost:{value:0},uPx:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime; uniform float uBoost; uniform float uPx;
      varying float vLife; varying float vHue;
      void main() {
        float life = fract(aSeed.x + uTime * 0.07 * aSeed.z * (1.0 + uBoost * 2.0));
        float r = mix(5.5, 0.35, life);
        float a = aSeed.y + life * 5.0 * (0.6 + aSeed.z);
        float y = sin(aSeed.y * 3.0 + life * 6.0) * mix(1.6, 0.1, life);
        vec3 p = vec3(cos(a) * r, y, sin(a) * r * 0.75);
        vLife = life; vHue = aSeed.w;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = (2.0 + aSeed.w * 3.0) * uPx * (6.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uFade;
      varying float vLife; varying float vHue;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.0, length(d));
        vec3 c = mix(vec3(0.38, 0.48, 1.0), vec3(1.0, 0.55, 0.25), smoothstep(0.35, 0.95, vLife + vHue * 0.2));
        float a = m * smoothstep(0.0, 0.15, vLife) * smoothstep(1.0, 0.85, vLife) * uFade;
        gl_FragColor = vec4(c, a * 0.9);
      }`}),i=new Go(t,n);return i.frustumCulled=!1,i}function FT(r){let t=new Float32Array(r*r*3),e=0;for(let o=0;o<r;o++)for(let a=0;a<r;a++)t[e++]=(o/(r-1)-.5)*16,t[e++]=0,t[e++]=(a/(r-1)-.5)*12-2;let n=new Ie;n.setAttribute("position",new ze(t,3));let i=new Je({transparent:!0,depthWrite:!1,blending:In,uniforms:{uTime:{value:0},uFade:{value:0},uPx:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
      uniform float uTime; uniform float uPx;
      varying float vH; varying float vD;
      void main() {
        vec3 p = position;
        float d = length(p.xz - vec2(0.0, 1.0));
        float h = sin(d * 1.6 - uTime * 1.4) * 0.12 * smoothstep(7.0, 1.0, d)
                + sin(p.x * 0.7 + uTime * 0.6) * cos(p.z * 0.9 - uTime * 0.4) * 0.12;
        p.y += h;
        vH = h; vD = d;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = 1.6 * uPx * (7.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uFade;
      varying float vH; varying float vD;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.1, length(d));
        vec3 c = mix(vec3(0.3, 0.36, 0.95), vec3(1.0, 0.5, 0.22), smoothstep(0.02, 0.2, vH));
        gl_FragColor = vec4(c, m * uFade * 0.55 * smoothstep(8.0, 2.0, vD));
      }`}),s=new Go(n,i);return s.frustumCulled=!1,s}var Cl=new U;function Pi(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Cl.copy(t),Cl[n]=0,Cl.normalize();let c=.5*o/(o+a),h=1-Cl.angleTo(r)/l;return Math.sign(Cl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ar=class r extends nr{constructor(t=1,e=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,_=new U,m=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/g)){case 0:_.set(1,0,0),d[v+0]=Pi(_,c,"z","y",s,n),d[v+1]=1-Pi(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),d[v+0]=1-Pi(_,c,"z","y",s,n),d[v+1]=1-Pi(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),d[v+0]=1-Pi(_,c,"x","z",s,t),d[v+1]=Pi(_,c,"z","x",s,n);break;case 3:_.set(0,-1,0),d[v+0]=1-Pi(_,c,"x","z",s,t),d[v+1]=1-Pi(_,c,"z","x",s,n);break;case 4:_.set(0,0,1),d[v+0]=1-Pi(_,c,"x","y",s,t),d[v+1]=1-Pi(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),d[v+0]=Pi(_,c,"x","y",s,t),d[v+1]=1-Pi(_,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var lr=(r,t={})=>new di({color:r,roughness:.18,metalness:.1,clearcoat:1,clearcoatRoughness:.08,iridescence:.4,envMapIntensity:1.3,...t}),wu=class extends Ri{constructor(t,e){super(t,{fov:28}),this.kind=e,this.hover=0,this.hoverTarget=0,this.inView=0;let n=this.scene;n.add(new zi("#9aa0ff",.4));let i=new mi("#ffffff",2);i.position.set(2,3,4),n.add(i),this.camera.position.set(0,0,6.4),this.root=new ke,this.root.position.y=-.15,n.add(this.root),this[`build_${e}`](),t.closest(".fcard")?.addEventListener("pointerenter",()=>this.hoverTarget=1),t.closest(".fcard")?.addEventListener("pointerleave",()=>this.hoverTarget=0)}build_copy(){let t=new ar(1.15,.36,.36,3,.08),e=lr("#ff6a2a"),n=lr("#5b6bff",{transparent:!0,opacity:.85});this.colA=[],this.colB=[];for(let i=0;i<6;i++){let s=new le(t,e);s.position.set(-.75,1.05-i*.42,0),this.root.add(s),this.colA.push(s);let o=new le(t,n);this.root.add(o),this.colB.push(o)}this.root.rotation.set(.25,-.5,0)}build_history(){let t=new ar(1.5,.08,.95,3,.04);this.cards=[];for(let e=0;e<12;e++){let n=new Ht().setHSL(.66-e*.045,.75,.6),i=new le(t,lr(n));this.root.add(i),this.cards.push(i)}this.root.rotation.set(.35,0,.08),this.root.scale.setScalar(.85)}build_format(){let t=new ar(1,.2,.2,2,.08),e=[lr("#ff6a2a"),lr("#7a8cff"),lr("#e8e6f5"),lr("#2bd49a")],n=[[0,1,0],[.45,1.6,2],[.45,1.2,2],[0,.9,1],[.45,1.8,2],[0,1.1,0],[.45,1.4,3]];this.bars=n.map(([i,s,o],a)=>{let l=new le(t,e[o]);return l.userData={order:new U(-1.3+i+s/2,1.2-a*.4,0),len:s,chaos:new U((Math.random()-.5)*2.6,(Math.random()-.5)*2.4,(Math.random()-.5)*1.6),rot:new fi(Math.random()*3,Math.random()*3,Math.random()*3)},this.root.add(l),l}),this.root.rotation.set(.2,-.35,0)}build_excel(){let t=new ar(.42,.42,.42,2,.06),e=[lr("#2bd49a"),lr("#1f9e72"),lr("#d8fff0",{transmission:.4,thickness:.4})];this.cells=[];for(let n=-1;n<=1;n++)for(let i=-1;i<=1;i++)for(let s=-1;s<=1;s++){let o=new le(t,e[(n+i+s+3)%3]);o.userData.home=new U(n,i,s).multiplyScalar(.5),o.userData.r=Math.random(),this.root.add(o),this.cells.push(o)}this.root.rotation.set(.5,.6,0)}update(t,e){let n=this.time;this.hover=vn(this.hover,this.hoverTarget,5,e);let i=this.hover,s=1+i*1.5;if(this.kind==="copy"){let o=n*.35*s%1,a=gi(Math.min(1,Math.max(0,(o-.1)/.5))),l=o>.85?1-(o-.85)/.15:1;this.colA.forEach((c,h)=>{let u=gi(Math.min(1,Math.max(0,a*1.6-h*.12))),f=this.colB[h];f.position.set(-.75+u*1.5,c.position.y,u*.15),f.scale.setScalar(Math.max(.001,l*(.6+u*.4))),c.rotation.x=Math.sin(n*2+h)*.05}),this.root.rotation.y=-.5+Math.sin(n*.5)*.15}if(this.kind==="history"&&(this.cards.forEach((o,a)=>{let l=a*.55+n*.6*s,c=.95;o.position.set(Math.cos(l)*c*.35,1.3-a*.24+Math.sin(n+a)*.02,Math.sin(l)*c*.35),o.rotation.y=-l*.5;let h=a===0?.2+Math.sin(n*2)*.05:0;o.position.y+=h}),this.root.rotation.y=n*.15),this.kind==="format"){let o=n*.22*s%1,a=o<.6?1:o<.75?1-gi((o-.6)/.15):o<.82?0:gi((o-.82)/.18),l=Math.max(a,i*.85);this.bars.forEach((c,h)=>{let u=c.userData;c.position.lerpVectors(u.chaos,u.order,l),c.rotation.set(u.rot.x*(1-l),u.rot.y*(1-l),u.rot.z*(1-l)),c.scale.x=u.len*(.5+.5*l),c.position.z+=Math.sin(n*2+h)*.03}),this.root.rotation.y=-.35+Math.sin(n*.4)*.2}if(this.kind==="excel"){let a=1+T_(Math.sin(n*.9)*.5+.5)*.35+i*.5;this.cells.forEach(l=>{let c=l.userData;l.position.copy(c.home).multiplyScalar(a);let h=Math.max(0,Math.sin(n*3+c.r*30)-.85)*3;l.scale.setScalar(1-h*.25)}),this.root.rotation.x=.5+n*.2*s,this.root.rotation.y=.6+n*.3*s}this.camera.position.z=6.4-i*.6,this.camera.lookAt(0,0,0)}};var mp=[{name:"DEV",sub:"fusion-dev",color:"#7aa2ff"},{name:"TEST",sub:"fusion-test",color:"#b48cff"},{name:"UAT",sub:"fusion-uat",color:"#2bd49a"},{name:"PROD",sub:"fusion-prod",color:"#ff7a3a"}],Au=class extends Ri{constructor(t){super(t,{fov:30}),this.active=3,this.spin=0,this.scrollP=0;let e=this.scene;e.add(new zi("#9aa0ff",.35));let n=new mi("#ffffff",1.8);n.position.set(3,4,5),e.add(n),this.pt=new xl("#ff7a3a",6,6,1.5),e.add(this.pt),this.root=new ke,e.add(this.root),this.core=new le(new Fs(.75,1),new di({color:"#c9d0ff",roughness:.05,metalness:.2,transparent:!0,opacity:.42,iridescence:1,flatShading:!0,envMapIntensity:2,depthWrite:!1})),this.heart=new le(new Fs(.34,2),new Rn({color:"#ff8a4a"})),this.root.add(this.heart,this.core),this.coreWire=new es(new pl(new Fs(1.05,1)),new Vo({color:"#8b97ff",transparent:!0,opacity:.25})),this.root.add(this.coreWire),this.cache=new al(new nr(.14,.05,.22),new di({color:"#ffffff",roughness:.3,clearcoat:1,emissive:"#3b45c9",emissiveIntensity:.6}),64),this.cacheTilt=new ke,this.cacheTilt.rotation.x=1.2,this.cacheTilt.add(this.cache),this.root.add(this.cacheTilt),this._m=new ye,this._q=new Bi,this._v=new U,this._s=new U(1,1,1),this._c=new Ht,this.nodes=mp.map((i,s)=>{let o=new ke,a=new le(new ml(.36,0),new di({color:i.color,roughness:.2,clearcoat:1,flatShading:!0,emissive:i.color,emissiveIntensity:.15,envMapIntensity:1.2})),l=new le(new gl(.58,.012,8,64),new Rn({color:i.color,transparent:!0,opacity:.5})),c=new Cr(new ir({map:C_(i.name,i.sub,i.color),transparent:!0,depthWrite:!1,depthTest:!1}));c.renderOrder=10,c.scale.set(1.2,.45,1),c.position.set(0,.86,0),o.add(a,l,c),o.userData={body:a,halo:l,label:c,a:s/mp.length*Math.PI*2+.6,glow:0},this.root.add(o);let h=new Ie;h.setAttribute("position",new ze(new Float32Array(192),3));let u=new Float32Array(64);for(let g=0;g<64;g++)u[g]=Math.floor(g/2)/31+g%2/31;h.setAttribute("aT",new ze(u,1));let f=new es(h,new Je({transparent:!0,depthWrite:!1,blending:In,uniforms:{uTime:{value:0},uColor:{value:new Ht(i.color)},uOn:{value:0}},vertexShader:"attribute float aT; varying float vT; void main(){ vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform vec3 uColor; uniform float uOn; varying float vT;
            void main(){ float dash = smoothstep(0.55, 1.0, sin(vT * 40.0 - uTime * 8.0));
              float a = (0.12 + uOn * (0.35 + dash * 0.9)) * smoothstep(0.0, 0.15, vT);
              gl_FragColor = vec4(uColor * (1.0 + dash), a); }`}));f.frustumCulled=!1,this.root.add(f),o.userData.beam=f;let d=[];for(let g=0;g<4;g++){let _=new le(new Os(.04,12,8),new Rn({color:i.color,transparent:!0}));_.userData.off=g/4,this.root.add(_),d.push(_)}return o.userData.packets=d,o})}setActive(t){this.active=t,this.pulse=1}resize(t,e){this.dist=qs(this.camera,4.6,6.6)}update(t,e){let n=this.time;this.pulse=vn(this.pulse||0,0,2.5,e),this.spin+=e*.12;let i=.32;this.core.rotation.y=n*.3,this.core.rotation.x=n*.17,this.coreWire.rotation.y=-n*.12,this.heart.scale.setScalar(1+Math.sin(n*3)*.06+this.pulse*.4);let s=mp[this.active];this.heart.material.color.lerp(this._c.set(s.color),1-Math.exp(-e*3)),this.pt.color.copy(this.heart.material.color);for(let a=0;a<64;a++){let l=a/64*Math.PI*2+n*.4,c=1.45+Math.sin(a*3.1)*.05;this._v.set(Math.cos(l)*c,Math.sin(n*2+a)*.03,Math.sin(l)*c),this._q.setFromAxisAngle(this._v.clone().set(0,1,0),-l);let h=Math.max(0,Math.sin(n*2.2-a*.6))**12;this._s.set(1,1+h*3,1),this._m.compose(this._v,this._q,this._s),this.cache.setMatrixAt(a,this._m),this.cache.setColorAt(a,this._c.set("#ffffff").lerp(this._c.clone().set(s.color),h))}this.cache.instanceMatrix.needsUpdate=!0,this.cache.instanceColor.needsUpdate=!0,this.nodes.forEach((a,l)=>{let c=a.userData,h=c.a+this.spin,u=2.55;a.position.set(Math.cos(h)*u,Math.sin(h)*u*i*.5+Math.sin(n+l)*.08,Math.sin(h)*u*.6);let f=l===this.active?1:0;c.glow=vn(c.glow,f,4,e),c.body.rotation.y=n*(.6+c.glow),c.body.rotation.x=n*.3,c.body.scale.setScalar(1+c.glow*.35),c.body.material.emissiveIntensity=.12+c.glow*.9,c.halo.rotation.set(Math.PI/2+Math.sin(n+l)*.3,n*.5,0),c.halo.scale.setScalar(1+c.glow*.3+Math.sin(n*4)*.03*c.glow),c.halo.material.opacity=.2+c.glow*.6,c.label.material.opacity=.55+c.glow*.45;let d=c.beam.geometry.attributes.position;for(let g=0;g<32;g++)for(let _=0;_<2;_++){let m=(g+_)/32,p=Math.sin(m*Math.PI)*.35;d.setXYZ(g*2+_,a.position.x*m,a.position.y*m+p,a.position.z*m)}d.needsUpdate=!0,c.beam.material.uniforms.uTime.value=n,c.beam.material.uniforms.uOn.value=c.glow,c.packets.forEach(g=>{let _=(n*.45+g.userData.off)%1,p=Math.floor(n*.45+g.userData.off)%2===1?1-_:_;g.position.set(a.position.x*p,a.position.y*p+Math.sin(p*Math.PI)*.35,a.position.z*p),g.material.opacity=c.glow*Math.sin(_*Math.PI),g.scale.setScalar(.6+c.glow*.8)})}),this.root.rotation.y=we.sx*.25,this.root.rotation.x=.12+we.sy*.1;let o=this.camera;o.position.set(0,1.1,(this.dist||10)*(1.06-this.scrollP*.12)),o.lookAt(0,.1,0)}};var Cu=class extends Ri{constructor(t){super(t,{fov:28,margin:60}),this.progress=0;let e=this.scene;e.add(new zi("#a0a6ff",.35));let n=new mi("#ffffff",2.4);n.position.set(-3,5,4),e.add(n);let i=new mi("#ff8a4a",1.6);i.position.set(4,1,2),e.add(i),this.root=new ke,e.add(this.root);let s=new di({color:"#2a2d3e",metalness:.85,roughness:.32,clearcoat:.4,envMapIntensity:1.2}),o=3.2,a=2.15,l=new le(new ar(o,.1,a,4,.05),s);this.root.add(l);let c=new le(new Ai(o*.92,a*.88),new Wo({map:P_(),roughness:.7,metalness:.2}));c.rotation.x=-Math.PI/2,c.position.y=.052,this.root.add(c),this.hinge=new ke,this.hinge.position.set(0,.05,-a/2),this.root.add(this.hinge);let h=new le(new ar(o,a*.98,.07,4,.035),s);h.position.set(0,a*.98/2,-.035),this.hinge.add(h),this.screenMat=new Rn({map:R_(),color:"#000000",toneMapped:!1});let u=new le(new Ai(o*.94,a*.98*.9),this.screenMat);u.position.set(0,a*.98/2,.002),this.hinge.add(u);let f=new le(new fl(.22,3),new Rn({color:"#ff7a3a",transparent:!0,opacity:.9}));f.rotation.set(0,Math.PI,-Math.PI/2),f.position.set(0,a*.98/2,-.072),this.hinge.add(f);let d=document.createElement("canvas");d.width=d.height=128;let g=d.getContext("2d"),_=g.createRadialGradient(64,64,0,64,64,64);_.addColorStop(0,"rgba(120,140,255,0.9)"),_.addColorStop(1,"rgba(120,140,255,0)"),g.fillStyle=_,g.fillRect(0,0,128,128),this.floorGlow=new le(new Ai(5.2,3.4),new Rn({map:new rr(d),transparent:!0,depthWrite:!1,blending:In,opacity:0})),this.floorGlow.rotation.x=-Math.PI/2,this.floorGlow.position.y=-.06,this.root.add(this.floorGlow),this.files=["CSV","XLSX","XLSX","CSV","SQL"].map((m,p)=>{let v=document.createElement("canvas");v.width=200,v.height=256;let y=v.getContext("2d"),x=m==="XLSX"?"#2bd49a":m==="CSV"?"#7aa2ff":"#ff7a3a";y.fillStyle="#f3f4fb",y.beginPath(),y.moveTo(0,0),y.lineTo(150,0),y.lineTo(200,50),y.lineTo(200,256),y.lineTo(0,256),y.closePath(),y.fill(),y.fillStyle="#d6d9ea",y.beginPath(),y.moveTo(150,0),y.lineTo(150,50),y.lineTo(200,50),y.fill(),y.fillStyle=x,y.fillRect(0,150,200,64),y.fillStyle="#fff",y.font='700 40px "Geist", sans-serif',y.textAlign="center",y.fillText(m,100,196);for(let T=0;T<4;T++)y.fillStyle="#c3c7de",y.fillRect(24,40+T*24,100+T%2*30,10);let b=new rr(v);b.colorSpace=tn;let w=new le(new Ai(.42,.54),new Rn({map:b,transparent:!0,side:Pn,toneMapped:!1}));return w.userData={i:p,a:p/5*Math.PI*2,r:2.1+p%2*.35,y:.6+p%3*.45},this.root.add(w),w})}resize(){this.dist=qs(this.camera,3.6,5.2)}update(t,e){let n=this.time,i=this.progress,s=gi(Fe(i,.05,.5));this.hinge.rotation.x=Xn(Math.PI/2-.02,-.28,s);let o=ea(Fe(i,.35,.6));this.screenMat.color.setScalar(o),this.floorGlow.material.opacity=o*.55,this.root.rotation.y=Xn(-.9,-.25,gi(Fe(i,0,.7)))+we.sx*.15+Math.sin(n*.4)*.04,this.root.rotation.x=Xn(.35,.12,s)+we.sy*.05,this.root.position.y=-.55+Math.sin(n*.8)*.04;let a=Fe(i,.45,.8);this.files.forEach(c=>{let h=c.userData,u=h.a+n*.25,f=ea(Math.min(1,Math.max(0,a*1.4-h.i*.1)));c.position.set(Math.cos(u)*h.r*f,h.y*f+.4+Math.sin(n*1.3+h.i)*.08,Math.sin(u)*h.r*.6*f+.2),c.rotation.set(Math.sin(n+h.i)*.2,-this.root.rotation.y+Math.sin(n*.7+h.i)*.4,Math.sin(n*.5+h.i)*.15),c.scale.setScalar(Math.max(.001,f))});let l=this.camera;l.position.set(0,1.4,(this.dist||8)*Xn(1.15,.92,s)),l.lookAt(0,.35,0)}};var Ru=class extends Ri{constructor(t,e={}){super(t,{fov:35}),this.energy=0,this.energyTarget=0;let n=e.mobile?16:26;this.uniforms={uTime:{value:0},uEnergy:{value:0},uMouse:{value:new Kt}},this.root=new ke,this.scene.add(this.root);let i=360;for(let s=0;s<n;s++){let o=s/(n-1),a=new Float32Array(i*3);for(let u=0;u<i;u++){let f=u/i*Math.PI*2;a[u*3]=Math.cos(f),a[u*3+1]=0,a[u*3+2]=Math.sin(f)}let l=new Ie;l.setAttribute("position",new ze(a,3));let c=new Je({transparent:!0,depthWrite:!1,blending:In,uniforms:{...this.uniforms,uR:{value:.5+o*4.2},uF:{value:o}},vertexShader:`
          uniform float uTime; uniform float uEnergy; uniform float uR; uniform float uF; uniform vec2 uMouse;
          varying float vF; varying float vH;
          void main() {
            float a = atan(position.z, position.x);
            float amp = (0.08 + uEnergy * 0.35) * (0.4 + uF);
            float h = sin(a * 3.0 + uTime * 1.2 + uF * 6.0) * amp
                    + sin(a * 5.0 - uTime * 1.7 + uF * 9.0) * amp * 0.5
                    + sin(uF * 12.0 - uTime * 2.0) * 0.12;
            // \u0432\u043E\u043B\u043D\u0430 \u043E\u0442 \u043A\u0443\u0440\u0441\u043E\u0440\u0430
            h += cos(a - atan(uMouse.y, uMouse.x)) * length(uMouse) * 0.35 * uF;
            vec3 p = vec3(position.x * uR, h, position.z * uR);
            vF = uF; vH = h;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
          }`,fragmentShader:`
          uniform float uEnergy;
          varying float vF; varying float vH;
          void main() {
            vec3 c = mix(vec3(1.0, 0.5, 0.2), vec3(0.36, 0.42, 1.0), smoothstep(0.0, 0.7, vF));
            c = mix(c, vec3(0.75, 0.4, 1.0), smoothstep(0.7, 1.0, vF));
            float a = (0.35 + uEnergy * 0.4) * (1.0 - vF * 0.55) + abs(vH) * 0.6;
            gl_FragColor = vec4(c, a);
          }`}),h=new cl(l,c);h.frustumCulled=!1,this.root.add(h)}this.root.rotation.x=.42}update(t,e){this.energy=vn(this.energy,this.energyTarget,3,e),this.uniforms.uTime.value=this.time,this.uniforms.uEnergy.value=this.energy,this.uniforms.uMouse.value.set(vn(this.uniforms.uMouse.value.x,we.sx,3,e),vn(this.uniforms.uMouse.value.y,we.sy,3,e)),this.root.rotation.y=this.time*.05,this.root.rotation.x=.42+we.sy*.12;let n=this.camera;n.position.set(0,2.2,8.5/Math.min(1,Math.max(.55,n.aspect))),n.lookAt(0,0,0)}};var L_="1.3.26";function U_(r,t,e){return Math.max(r,Math.min(t,e))}function OT(r,t,e){return(1-e)*r+e*t}function BT(r,t,e,n){return OT(r,t,1-Math.exp(-e*n))}function kT(r,t){return(r%t+t)%t}var zT=class{constructor(){Lt(this,"isRunning",!1);Lt(this,"value",0);Lt(this,"from",0);Lt(this,"to",0);Lt(this,"currentTime",0);Lt(this,"lerp");Lt(this,"duration");Lt(this,"easing");Lt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=U_(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=BT(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function HT(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var VT=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Lt(this,"width",0);Lt(this,"height",0);Lt(this,"scrollHeight",0);Lt(this,"scrollWidth",0);Lt(this,"debouncedResize");Lt(this,"wrapperResizeObserver");Lt(this,"contentResizeObserver");Lt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Lt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Lt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=HT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},F_=class{constructor(){Lt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},GT=100/6,os={passive:!1};function D_(r,t){return r===1?GT:r===2?t:1}var WT=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Lt(this,"touchStart",{x:0,y:0});Lt(this,"lastDelta",{x:0,y:0});Lt(this,"window",{width:0,height:0});Lt(this,"emitter",new F_);Lt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Lt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Lt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Lt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=D_(n,this.window.width),s=D_(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Lt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,os),this.element.addEventListener("touchstart",this.onTouchStart,os),this.element.addEventListener("touchmove",this.onTouchMove,os),this.element.addEventListener("touchend",this.onTouchEnd,os)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,os),this.element.removeEventListener("touchstart",this.onTouchStart,os),this.element.removeEventListener("touchmove",this.onTouchMove,os),this.element.removeEventListener("touchend",this.onTouchEnd,os)}},N_=r=>Math.min(1,1.001-2**(-10*r)),O_=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:f=u==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:v=!0,autoRaf:y=!1,anchors:x=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:C=T,stopInertiaOnNavigate:M=!1,respectReducedMotion:S=!0}={}){Lt(this,"_isScrolling",!1);Lt(this,"_isStopped",!1);Lt(this,"_isLocked",!1);Lt(this,"_preventNextNativeScrollEvent",!1);Lt(this,"_resetVelocityTimeout",null);Lt(this,"_rafId",null);Lt(this,"_isDraggingSelection",!1);Lt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Lt(this,"isTouching");Lt(this,"isIos");Lt(this,"time",0);Lt(this,"userData",{});Lt(this,"lastVelocity",0);Lt(this,"velocity",0);Lt(this,"direction",0);Lt(this,"options");Lt(this,"targetScroll");Lt(this,"animatedScroll");Lt(this,"animate",new zT);Lt(this,"emitter",new F_);Lt(this,"dimensions");Lt(this,"virtualScroll");Lt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Lt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Lt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Lt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Lt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Lt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let f=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Lt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Lt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=L_,window.lenis||(window.lenis={}),window.lenis.version=L_,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=N_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:u,touchMultiplier:d,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:v,autoRaf:y,anchors:x,autoToggle:b,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:M,respectReducedMotion:S},this.dimensions=new VT(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new WT(e,{touchMultiplier:d,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(g=f),g){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?x.left:x.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),y=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(y)?0:y)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=U_(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=N_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,u,f,d,g;if(n-(i.time??0)>2e3){i.time=Date.now();let w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),h=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;u=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,g=r.clientHeight,a=u>d,l=f>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=f,i.clientWidth=d,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,f=i.scrollHeight,d=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,v,y,x,b;if(_==="horizontal")m=Math.round(r.scrollLeft),p=u-d,v=t,y=s,x=a,b=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=f-g,v=e,y=o,x=l,b=h;else return!1;return!b&&(m>=p||m<=0)?!0:(v>0?m<p:m>0)&&y&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?kT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var pe={reduced:window.matchMedia("(prefers-reduced-motion: reduce)").matches,fine:window.matchMedia("(pointer: fine)").matches,mobile:window.matchMedia("(max-width: 980px)").matches||window.matchMedia("(pointer: coarse)").matches},cr=null;function k_(r){pe.reduced||(cr=new O_({lerp:.085,smoothWheel:!0,wheelMultiplier:.95,syncTouch:!1}),cr.on("scroll",zt.update));let t=performance.now();return kt.ticker.add(e=>{let n=performance.now(),i=Math.min((n-t)/1e3,.1);t=n,cr&&cr.raf(n),r(e,i)}),kt.ticker.lagSmoothing(0),cr}function B_(r,t={}){if(cr)cr.scrollTo(r,{duration:1.6,easing:e=>1-Math.pow(1-e,4),...t});else{let e=typeof r=="number"?r:r.getBoundingClientRect().top+window.scrollY+(t.offset||0);window.scrollTo({top:e,behavior:pe.reduced?"auto":"smooth"})}}function z_(){document.addEventListener("click",r=>{let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href");if(e==="#"||e.length<2)return;let n=document.querySelector(e);if(!n)return;r.preventDefault();let i=n.parentElement&&n.parentElement.classList.contains("pin-spacer")?n.parentElement:n;B_(e==="#top"?0:i),document.dispatchEvent(new CustomEvent("menu:close"))}),document.querySelector("[data-to-top]")?.addEventListener("click",()=>B_(0,{duration:2.2}))}function H_(r=160){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),n=e.createImageData(r,r);for(let i=0;i<n.data.length;i+=4){let s=Math.random()*255;n.data[i]=n.data[i+1]=n.data[i+2]=s,n.data[i+3]=255}return e.putImageData(n,0,0),t.toDataURL("image/png")}var V_=r=>new Promise(t=>setTimeout(t,r));var G_="SELECT harmony FROM oracle_fusion;";function W_(){let r=document.getElementById("preloader");if(!r||pe.reduced)return{set(){},finish:async()=>r?.remove()};let t=r.querySelector("[data-preload-typed]"),e=r.querySelector("[data-preload-rows]"),n=r.querySelector("[data-preload-count]"),i=r.querySelector(".preloader__bar span"),s={shown:0,target:0,chars:0};kt.to(s,{chars:G_.length,duration:1.1,ease:"none",onUpdate:()=>t.textContent=G_.slice(0,Math.round(s.chars))});let o=()=>{s.shown+=(s.target-s.shown)*.08;let a=Math.min(1,s.shown);n.textContent=Math.round(a*100),e.textContent=Math.round(a*1024).toLocaleString("en-US"),i.style.setProperty("--p",a.toFixed(3))};return kt.ticker.add(o),{set(a){s.target=Math.max(s.target,a)},async finish(){s.target=1,await kt.to(s,{shown:1,duration:.5,ease:"power2.out"}),o(),kt.ticker.remove(o);let a=kt.timeline();a.to(r.querySelector(".preloader__inner"),{y:-30,opacity:0,duration:.6,ease:"power3.in"}),a.to(r.querySelectorAll(".preloader__shutter span"),{scaleX:1,duration:.01},"<"),a.add(()=>r.classList.add("is-leaving")),a.to(r.querySelector(".preloader__grid"),{opacity:0,duration:.4},"<"),a.to(r.querySelectorAll(".preloader__shutter span"),{scaleX:0,transformOrigin:"100% 50%",duration:.9,ease:"expo.inOut",stagger:{each:.05,from:"center"}}),await a,r.remove()}}}function X_(){if(!pe.fine||pe.reduced)return;let r=document.querySelector(".cursor");if(!r)return;document.documentElement.classList.add("has-cursor"),kt.set(r,{autoAlpha:0});let t=r.querySelector(".cursor__dot"),e=r.querySelector(".cursor__ring"),n=r.querySelector(".cursor__label"),i=kt.quickSetter(t,"x","px"),s=kt.quickSetter(t,"y","px"),o=kt.quickTo(e,"x",{duration:.45,ease:"power3"}),a=kt.quickTo(e,"y",{duration:.45,ease:"power3"}),l=document.querySelector(".spot"),c=l?kt.quickTo(l,"x",{duration:1.6,ease:"power3"}):null,h=l?kt.quickTo(l,"y",{duration:1.6,ease:"power3"}):null,u=!1;window.addEventListener("pointermove",f=>{f.pointerType==="mouse"&&(u||(u=!0,kt.to(r,{autoAlpha:1,duration:.3})),i(f.clientX),s(f.clientY),o(f.clientX),a(f.clientY),c?.(f.clientX),h?.(f.clientY))},{passive:!0}),window.addEventListener("pointerdown",()=>r.classList.add("is-down")),window.addEventListener("pointerup",()=>r.classList.remove("is-down")),document.addEventListener("mouseleave",()=>{u=!1,kt.to(r,{autoAlpha:0,duration:.3})}),document.addEventListener("pointerover",f=>{let d=f.target.closest("[data-cursor], a, button, summary, label, input");r.classList.remove("is-link","is-label"),d&&(d.dataset.cursor?(n.textContent=d.dataset.cursor,r.classList.add("is-label")):d.matches("input")||r.classList.add("is-link"))})}function q_(){!pe.fine||pe.reduced||document.querySelectorAll("[data-magnetic]").forEach(r=>{let t=r.querySelector(".btn__label"),e=kt.quickTo(r,"x",{duration:.6,ease:"power3"}),n=kt.quickTo(r,"y",{duration:.6,ease:"power3"}),i=t?kt.quickTo(t,"x",{duration:.6,ease:"power3"}):null,s=t?kt.quickTo(t,"y",{duration:.6,ease:"power3"}):null;r.addEventListener("pointermove",o=>{let a=r.getBoundingClientRect(),l=o.clientX-(a.left+a.width/2),c=o.clientY-(a.top+a.height/2);e(l*.28),n(c*.38),i?.(l*.12),s?.(c*.14),r.style.setProperty("--mx",`${(o.clientX-a.left)/a.width*100}%`),r.style.setProperty("--my",`${(o.clientY-a.top)/a.height*100}%`)}),r.addEventListener("pointerleave",()=>{kt.to(r,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"}),t&&kt.to(t,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"})})})}function Y_(){!pe.fine||pe.reduced||document.querySelectorAll("[data-tilt]").forEach(r=>{kt.set(r,{transformPerspective:900});let t=kt.quickTo(r,"rotationX",{duration:.8,ease:"power3"}),e=kt.quickTo(r,"rotationY",{duration:.8,ease:"power3"});r.addEventListener("pointermove",n=>{let i=r.getBoundingClientRect(),s=(n.clientX-i.left)/i.width-.5,o=(n.clientY-i.top)/i.height-.5;e(s*10),t(-o*8),r.style.setProperty("--gx",`${(s+.5)*100}%`),r.style.setProperty("--gy",`${(o+.5)*100}%`)}),r.addEventListener("pointerleave",()=>{t(0),e(0)})})}var XT=r=>{let t=parseInt(r.slice(1),16);return[t>>16&255,t>>8&255,t&255]},Z_=(r,t,e)=>r.map((n,i)=>n+(t[i]-n)*e),$_=r=>r*r*(3-2*r);function J_(r){let t=document.documentElement,e=document.querySelector("[data-header]"),n=document.querySelector(".progress__fill"),i=[...document.querySelectorAll("main > [data-bg], footer[data-bg]")],s=[...document.querySelectorAll(".nav a")],o=[],a=window.scrollY,l="",c=1;function h(){let m=window.scrollY;o=i.map(p=>{let v=p.getBoundingClientRect(),y=v.top+m;return{id:p.id,top:y,bottom:y+v.height,rgb:XT(p.dataset.bg)}}),c=Math.max(1,document.documentElement.scrollHeight-window.innerHeight)}h(),zt.addEventListener("refresh",h),window.addEventListener("resize",h);let u=m=>{for(let p=0;p<o.length;p++)if(m<o[p].bottom)return p;return o.length-1},f=document.querySelector("[data-burger]"),d=document.querySelector("[data-menu]"),g=!1,_=m=>{m!==g&&(g=m,t.classList.toggle("menu-open",m),f?.setAttribute("aria-expanded",String(m)),f?.setAttribute("aria-label",m?"Close menu":"Open menu"),d?.setAttribute("aria-hidden",String(!m)),m?cr?.stop():cr?.start())};return f?.addEventListener("click",()=>_(!g)),document.addEventListener("menu:close",()=>_(!1)),document.addEventListener("keydown",m=>m.key==="Escape"&&_(!1)),function(){let p=window.scrollY,v=window.innerHeight;if(!o.length)return;let y=p+v*.5,x=u(y),b=o[x],w=v*.3,T=b.rgb;o[x+1]&&y>b.bottom-w/2?T=Z_(b.rgb,o[x+1].rgb,$_((y-(b.bottom-w/2))/w)):o[x-1]&&y<b.top+w/2&&(T=Z_(o[x-1].rgb,b.rgb,$_((y-(b.top-w/2))/w)));let C=`rgb(${T[0]|0}, ${T[1]|0}, ${T[2]|0})`;C!==l&&(l=C,document.body.style.backgroundColor=C,r?.pageBg?.setRGB(T[0]/255,T[1]/255,T[2]/255,"srgb")),e&&!g&&(e.classList.toggle("is-scrolled",p>30),p>a+6&&p>v*.8?e.classList.add("is-hidden"):(p<a-6||p<v*.5)&&e.classList.remove("is-hidden")),a=p,n&&(n.style.transform=`scaleX(${Math.min(1,p/c).toFixed(4)})`);let M=o[u(p+v*.45)]?.id;for(let S of s)S.classList.toggle("is-current",S.getAttribute("href")==="#"+M)}}function K_(){zt.batch("[data-reveal]",{start:"top 90%",once:!0,onEnter:r=>kt.to(r,{opacity:1,y:0,duration:1.3,stagger:.08,ease:"expo.out",overwrite:"auto"})}),document.querySelectorAll("[data-split]").forEach(r=>{Xr.create(r,{type:"lines,words,chars",mask:"lines",linesClass:"split-line",charsClass:"ch",ignore:".serif",autoSplit:!0,onSplit(){return r.classList.add("is-split"),kt.from(r.querySelectorAll(".ch, .serif"),{yPercent:120,rotationX:-70,transformOrigin:"50% 100% -20px",opacity:0,duration:1.2,stagger:{each:.018},ease:"expo.out",scrollTrigger:{trigger:r,start:"top 88%",once:!0}})}})}),document.querySelectorAll("[data-words]").forEach(r=>{let t=Xr.create(r,{type:"words",wordsClass:"w"}),e=/^(copy-paste|retyping|yesterday's|calm,|fast|better|faster\.)$/i;t.words.forEach(n=>e.test(n.textContent.trim())&&n.classList.add("is-hot")),zt.create({trigger:r,start:"top 80%",end:"bottom 45%",scrub:!0,onUpdate:n=>{let i=Math.round(n.progress*t.words.length);t.words.forEach((s,o)=>{s.classList.toggle("on",o<i&&!s.classList.contains("is-hot")),s.classList.toggle("hot",o<i&&s.classList.contains("is-hot"))})}})}),document.querySelectorAll("[data-count]").forEach(r=>{let t=Number(r.dataset.count),e=Number(r.dataset.decimals||0),n=r.dataset.prefix||"",i={v:t===0?99:0},s=()=>r.textContent=n+i.v.toFixed(e);s(),kt.to(i,{v:t,duration:2,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 92%",once:!0},onUpdate:s})})}function gp(){document.querySelectorAll("[data-reveal], [data-reveal-hero], [data-split]").forEach(r=>{r.style.opacity=1,r.style.transform="none"}),document.querySelectorAll("[data-words]").forEach(r=>r.style.color="var(--ink)")}var Q_={links:{register:"https://sqlharmony.com/",login:"https://sqlharmony.com/",exe:"https://sqlharmony.com/desktop/dl/exe",zip:"https://sqlharmony.com/desktop/dl/zip",linkedin:"https://www.linkedin.com/in/alexeymatveev/"}};function tx(r){let t=[];if(document.querySelectorAll(".marquee__row").forEach(i=>{let s=i.querySelector(".marquee__track"),o=0;for(;i.scrollWidth<window.innerWidth*2.4&&o++<6;){let h=s.cloneNode(!0);h.setAttribute("aria-hidden","true"),i.appendChild(h)}let a=i.querySelectorAll(".marquee__track"),l=Number(i.dataset.marquee)||1,c=kt.fromTo(a,{xPercent:l>0?0:-100},{xPercent:l>0?-100:0,duration:l>0?30:38,ease:"none",repeat:-1});t.push({tween:c,skew:kt.quickTo(i,"skewX",{duration:.5,ease:"power3"})})}),pe.reduced){t.forEach(i=>i.tween.pause());return}let e=1,n=1;r?.on("scroll",({velocity:i,direction:s})=>{s&&(n=s),e=1+Math.min(Math.abs(i)*.2,7),t.forEach(o=>o.skew(kt.utils.clamp(-9,9,i*-.3)))}),kt.ticker.add(()=>{e+=(1-e)*.05,t.forEach(i=>i.tween.timeScale(n*e))})}var j_="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*_<>/";function ex(){pe.reduced||!pe.fine||document.querySelectorAll("[data-scramble]").forEach(r=>{let t=r.textContent,e=0;r.addEventListener("pointerenter",()=>{cancelAnimationFrame(e);let n=performance.now(),i=s=>{let o=Math.min(1,(s-n)/450),a=Math.floor(o*t.length);r.textContent=t.split("").map((l,c)=>c<a||l===" "?l:j_[Math.random()*j_.length|0]).join(""),o<1&&(e=requestAnimationFrame(i))};e=requestAnimationFrame(i)})})}function nx(){document.querySelectorAll("[data-link]").forEach(r=>{let t=Q_.links[r.dataset.link];t&&r.setAttribute("href",t)}),document.querySelectorAll("[data-year]").forEach(r=>r.textContent=new Date().getFullYear())}function ix(){document.querySelectorAll("[data-copy]").forEach(r=>{r.addEventListener("click",async()=>{let t=r.parentElement.querySelector("[data-hash]"),e=t.textContent.trim();try{await navigator.clipboard.writeText(e)}catch{let i=document.createRange();i.selectNodeContents(t);let s=getSelection();s.removeAllRanges(),s.addRange(i)}if(r.textContent="Copied",r.classList.add("is-done"),!pe.reduced){let n={p:0};kt.to(n,{p:1,duration:.6,ease:"none",onUpdate:()=>{let i=Math.floor(n.p*e.length);t.textContent=e.slice(0,i)+e.slice(i).replace(/./g,()=>"0123456789abcdef"[Math.random()*16|0])},onComplete:()=>t.textContent=e})}setTimeout(()=>{r.textContent="Copy",r.classList.remove("is-done")},1800)})})}function rx(){let r=document.querySelector("[data-video]");if(!r)return;let t=r.dataset.video;if(document.documentElement.classList.contains("is-artifact")){let i=document.createElement("a");i.className=r.className,i.href=`https://www.youtube.com/watch?v=${t}`,i.target="_blank",i.rel="noopener",i.dataset.cursor="YouTube",i.setAttribute("aria-label","Watch the SQL Harmony demo on YouTube"),i.append(...r.childNodes),r.replaceWith(i);return}let e=r.querySelector(".demo__thumb"),n=new Image;n.onload=()=>{n.naturalWidth>200&&(e.style.setProperty("--img",`url(${n.src})`),e.classList.add("has-img"))},n.src=`https://i.ytimg.com/vi/${t}/maxresdefault.jpg`,r.addEventListener("click",()=>{let i=r.parentElement,s=document.createElement("iframe");s.src=`https://www.youtube-nocookie.com/embed/${t}?autoplay=1&rel=0&modestbranding=1`,s.title="SQL Harmony \u2014 how it works",s.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",s.allowFullscreen=!0,kt.to(r,{opacity:0,scale:1.05,duration:.5,ease:"power2.in",onComplete:()=>{r.remove(),i.appendChild(s)}})})}function sx(r){let t=[...document.querySelectorAll("[data-inst]")],e=document.querySelector("[data-inst-name]"),n=["fusion-dev","fusion-test","fusion-uat","fusion-prod"],i=!pe.reduced,s=a=>{t.forEach((l,c)=>{l.classList.toggle("is-active",c===a),l.setAttribute("aria-selected",String(c===a))}),e&&(kt.fromTo(e,{opacity:0,y:6},{opacity:1,y:0,duration:.4}),e.textContent=n[a]),r?.setActive(a)};t.forEach((a,l)=>a.addEventListener("click",()=>{i=!1,s(l)}));let o=3;setInterval(()=>{if(!i||document.hidden)return;let a=document.querySelector(".instances")?.getBoundingClientRect();!a||a.bottom<0||a.top>window.innerHeight||(o=(o+1)%t.length,s(o))},3200)}function ox(r){let t=document.querySelector(".hero"),e=t.querySelector(".hero__content"),n=t.querySelector(".hero__outro"),i=t.querySelectorAll(".hero__ticker, .hero__scroll"),s=t.querySelector("[data-hero-title]"),o=null;pe.reduced||(Xr.create(s,{type:"lines,words,chars",linesClass:"split-line",charsClass:"ch",mask:"lines",ignore:".serif"}),o=s.querySelectorAll(".ch, .serif"),kt.set(o,{yPercent:120,rotationX:-80,opacity:0,transformOrigin:"50% 100% -30px"}),kt.set(i,{opacity:0})),document.querySelectorAll("[data-boost]").forEach(u=>{u.addEventListener("pointerenter",()=>r&&(r.boostTarget=1)),u.addEventListener("pointerleave",()=>r&&(r.boostTarget=0))});let a=document.querySelector("[data-header]"),l=e.querySelector(".hero__badge"),c=()=>{r&&(r.slot={top:(a?.offsetHeight||70)+6,bottom:e.offsetTop+l.offsetTop-10},r.width&&r.resize(r.width,r.height))};c(),window.addEventListener("resize",c),zt.addEventListener("refresh",c);let h=0;return!pe.reduced&&r&&zt.create({trigger:t,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:u=>h=u.progress}),{playIntro(){if(pe.reduced)return;let u=kt.timeline();r&&u.to(r,{intro:1,duration:2.6,ease:"expo.out"},0),u.to(o,{yPercent:0,rotationX:0,opacity:1,duration:1.5,stagger:.022,ease:"expo.out"},.15),u.fromTo("[data-reveal-hero]",{opacity:0,y:30},{opacity:1,y:0,duration:1.3,stagger:.1,ease:"expo.out"},.35),u.to(i,{opacity:1,duration:1.2},1)},showStatic(){r&&(r.intro=1)},frame(){if(!r||pe.reduced)return;r.progress=h;let u=Fe(h,.04,.3);e.style.opacity=String(1-u),e.style.transform=`translate3d(0, ${-u*80}px, 0)`,e.style.filter=u>.01?`blur(${u*8}px)`:"",e.style.pointerEvents=u>.5?"none":"",i.forEach(d=>d.style.visibility=u>.3?"hidden":"");let f=Fe(h,.62,.8)*(1-Fe(h,.95,1));n.style.opacity=String(f),n.style.transform=`translate3d(0, ${(1-Fe(h,.62,.85))*40}px, 0)`}}}var _p=`select e.first_name, e.last_name, d.department_name,
count(p.project_id) as project_count
from employees e join departments d on e.department_id = d.department_id
left join projects p on e.employee_id = p.employee_id
group by e.first_name, e.last_name, d.department_name
having count(p.project_id) > 5;`,qT=`SELECT
    e.first_name,
    e.last_name,
    d.department_name,
    COUNT(p.project_id) AS project_count
FROM employees e
JOIN departments d
    ON e.department_id = d.department_id
LEFT JOIN projects p
    ON e.employee_id = p.employee_id
GROUP BY
    e.first_name,
    e.last_name,
    d.department_name
HAVING COUNT(p.project_id) > 5`,xp=`
ORDER BY project_count DESC;`,YT=/^(select|from|join|left|on|group|by|having|as|order|desc|where|and)$/i,ZT=/^(count|sum|nvl|max|min)$/i,vp=r=>r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function ax(r){return r.replace(/([A-Za-z_][A-Za-z0-9_]*)|(\d+)|('[^']*')|([(),.;=>*])/g,(t,e,n,i,s)=>e?YT.test(e)?`<span class="k">${e}</span>`:ZT.test(e)?`<span class="f">${e}</span>`:e:n?`<span class="n">${n}</span>`:i?`<span class="s">${vp(i)}</span>`:`<span class="o">${vp(s)}</span>`)}function lx(){let r=document.querySelector(".editor"),t=r?.querySelector("[data-ide]");if(!t)return{frame(){}};let e=r.querySelector(".editor__scene"),n=t.querySelector("[data-ide-code]"),i=t.querySelector("[data-ide-gutter]"),s=t.querySelector("[data-ide-ac]"),o=t.querySelector("[data-ide-ln]"),a=t.querySelector("[data-ide-col]"),l=t.querySelector("[data-ide-status]"),c=t.querySelector("[data-ide-search]"),h=t.querySelector("[data-ide-ai-typed]"),u=t.querySelector("[data-ide-format]"),f=t.querySelector("[data-ide-run]"),d=t.querySelectorAll("[data-ide-export]"),g=t.querySelectorAll(".ide__fly"),_=[...r.querySelectorAll(".estep")],m=t.querySelector(".ide__pre"),p=r.querySelector("[data-now-title]"),v=r.querySelector("[data-now-text]"),y=-1,x=document.createElement("canvas").getContext("2d"),b=8.1,w=22,T=44,C=()=>{let k=getComputedStyle(m);x.font=`${k.fontSize} "Geist Mono", ui-monospace, monospace`,b=x.measureText("x".repeat(20)).width/20||8.1,w=parseFloat(k.lineHeight)||22,T=i.offsetWidth||44},M=()=>{let k=e.getBoundingClientRect(),W=Math.min(1,k.width*.98/t.offsetWidth,k.height*.92/t.offsetHeight);e.style.setProperty("--ide-scale",W.toFixed(3)),C(),P=""},S=_p.indexOf("on e.department_id")+3,D=0,P="";M(),window.addEventListener("resize",M),zt.addEventListener("refreshInit",M),pe.reduced?D=1:(zt.create({trigger:r,start:"top top",end:"bottom bottom",scrub:!0,onUpdate:k=>D=k.progress}),kt.from(t,{opacity:0,"--z":-500,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:r,start:"top 70%",once:!0}}));function F(){let k=Fe(D,.02,.22),W=Fe(D,.27,.47),V=Fe(D,.52,.72),X=Fe(D,.77,.95),H=D<.25?0:D<.5?1:D<.75?2:3,K=gi(Fe(D,0,.14)),L=pe.reduced?0:1;t.style.setProperty("--rx",`${Xn(20,3,K)+we.sy*-2*L}deg`),t.style.setProperty("--ry",`${Xn(-26,-4,K)+we.sx*3*L}deg`),t.style.setProperty("--rz",`${Xn(5,0,K)}deg`);let it=V>.12,ft,Ut;if(it)ft=qT+xp,Ut=ax(ft);else{let xt=Math.round(ea(k)*_p.length);if(ft=_p.slice(0,xt),Ut=ax(ft),W>0){Ut=Ut.replace(/(<span class="f">count<\/span><span class="o">\(<\/span>p<span class="o">\.<\/span>project_id<span class="o">\)<\/span>)/,'<span class="err">$1</span>');let Xt=Math.round(Fe(W,.35,.9)*xp.length);Xt&&(Ut+=`<span class="ghost">${vp(xp.slice(0,Xt))}</span>`)}}let Rt=!it&&k<1&&k>0,Pt=Ut+Rt;if(Pt!==P){P=Pt,n.innerHTML=Ut+(Rt||k>=1&&W===0?'<span class="cur"></span>':"");let xt=ft.split(`
`);i.textContent=xt.map((I,qt)=>String(qt+1)).join(`
`),o.textContent=xt.length,a.textContent=xt[xt.length-1].length+1;let Xt=!it&&ft.length>S&&ft.length<S+16;if(t.classList.toggle("ac-on",Xt),Xt){let I=xt.length-1,qt=Math.max(10,Math.floor((m.clientWidth-240)/b));s.style.left=`${T+Math.min(xt[I].length,qt)*b}px`,s.style.top=`${12+(I+1)*w+4}px`}}t.classList.toggle("ai-on",W>.05&&D<.5);let $="Explain the LEFT JOIN";h.textContent=$.slice(0,Math.round(Fe(W,.5,.95)*$.length)),u.classList.toggle("is-press",V>.06&&V<.16),f.classList.toggle("is-press",V>.3&&V<.4);let J=V>.38;t.classList.toggle("results-on",J),m.style.transform=i.style.transform=J?"translateY(-150px)":"",l.textContent=V>.3&&!J?"Running\u2026":J?"Fetched 50 rows \xB7 page 1":it?"Formatted":"Ready";let lt=Fe(V,.6,1);d.forEach((xt,Xt)=>xt.classList.toggle("is-press",lt>.05+Xt*.25&&lt<.2+Xt*.25)),g.forEach((xt,Xt)=>{let I=ea(Mu((lt-Xt*.2)/.7)),qt=1-Fe(D,.8,.86);xt.style.opacity=String(Math.min(1,I*3)*qt),xt.style.transform=`translate3d(${I*(90+Xt*70)}px, ${-I*(170+Xt*50)}px, ${I*160}px) rotate(${I*(12-Xt*22)}deg)`}),t.classList.toggle("tabs-on",X>.05),t.classList.toggle("folders-on",X>.3);let yt="project",vt=Math.round(Fe(X,.5,.85)*yt.length);c.textContent=yt.slice(0,vt),t.classList.toggle("search-on",vt>2),H!==y&&p&&(y=H,p.textContent=_[H].querySelector("h3").textContent,v.textContent=_[H].querySelector("p").textContent),_.forEach((xt,Xt)=>{xt.classList.toggle("is-active",Xt===H),xt.classList.toggle("is-done",Xt<H);let I=Xt<H?1:Xt>H?0:Mu((D-Xt*.25)/.25);xt.style.setProperty("--sp",I.toFixed(3))})}return F(),{frame:F}}function cx(){pe.reduced||(kt.from(".fcard",{rotationX:-35,rotationY:18,z:-200,transformOrigin:"50% 100%",duration:1.6,stagger:.12,ease:"expo.out",scrollTrigger:{trigger:".fgrid",start:"top 85%",once:!0}}),kt.from(".fact",{rotationY:-40,transformOrigin:"0% 50%",duration:1.4,stagger:.1,ease:"expo.out",scrollTrigger:{trigger:".facts",start:"top 88%",once:!0}}))}function hx(){pe.reduced||kt.fromTo("[data-demo]",{rotationX:32,scale:.82,y:60},{rotationX:0,scale:1,y:0,ease:"none",scrollTrigger:{trigger:".demo__frame-wrap",start:"top 95%",end:"top 25%",scrub:!0}})}function ux(r){if(!r)return;if(pe.reduced){r.progress=1;return}let t=window.matchMedia("(max-width: 980px)");zt.create({trigger:".desktop",start:()=>t.matches?"top 80%":"top 70%",end:()=>t.matches?"bottom 60%":"bottom bottom",scrub:!0,invalidateOnRefresh:!0,onUpdate:e=>r.progress=e.progress})}function fx(r,t){r&&document.querySelectorAll("[data-energy]").forEach(e=>{e.addEventListener("pointerenter",()=>r.energyTarget=1),e.addEventListener("pointerleave",()=>r.energyTarget=0)}),t&&!pe.reduced&&zt.create({trigger:".instances",start:"top bottom",end:"bottom top",onUpdate:e=>t.scrollP=e.progress}),pe.reduced||(kt.fromTo(".footer__word",{"--fill":"0%"},{"--fill":"100%",ease:"none",scrollTrigger:{trigger:".footer__word",start:"top bottom",end:"bottom 95%",scrub:!0}}),kt.from(".cta__title",{scale:.86,ease:"none",scrollTrigger:{trigger:".cta",start:"top bottom",end:"center center",scrub:!0}}))}kt.registerPlugin(zt,Xr);kt.config({nullTargetWarn:!1});var Ys=document.documentElement;"scrollRestoration"in history&&(history.scrollRestoration="manual");async function $T(){Ys.classList.remove("no-js"),Ys.classList.add("js",pe.reduced?"reduced":"anim"),window.scrollTo(0,0),nx();let r=W_(),t=document.querySelector(".grain");t&&(t.style.backgroundImage=`url(${H_()})`);try{await Promise.race([Promise.all([document.fonts.load('600 64px "Geist"'),document.fonts.load('500 40px "Geist Mono"'),document.fonts.load('650 120px "Bricolage Grotesque"')]),V_(3500)])}catch{}r.set(.25);let e=null,n={};try{e=new Su(document.getElementById("webgl")),e.failed&&(e=null)}catch{e=null}if(e){Ys.classList.add("webgl-on");let l=c=>document.querySelector(c);try{n.hero=e.add(new Tu(l('[data-stage="hero"]'),{mobile:e.isMobile})),document.querySelectorAll('[data-stage="mini"]').forEach(c=>e.add(new wu(c,c.dataset.model))),n.instances=e.add(new Au(l('[data-stage="instances"]'))),n.laptop=e.add(new Cu(l('[data-stage="laptop"]'))),n.rings=e.add(new Ru(l('[data-stage="rings"]'),{mobile:e.isMobile})),r.set(.4),await e.warmup(c=>r.set(.4+c*.5))}catch(c){console.warn("3D disabled:",c),e.stages.length=0;for(let h in n)n[h]=null;Ys.classList.replace("webgl-on","webgl-off")}}else Ys.classList.add("webgl-off");r.set(.95);let i=J_(e),s=ox(n.hero),o=lx();cx(),hx(),ux(n.laptop),fx(n.rings,n.instances),sx(n.instances),rx(),ix();let a=k_((l,c)=>{w_(c),s.frame(),o.frame(),i(),e?.render(l,c)});a?.stop(),tx(a),z_(),pe.reduced?(gp(),s.showStatic()):(K_(),X_(),q_(),Y_(),ex()),zt.refresh(),await r.finish(),Ys.classList.add("is-ready"),a?.start(),s.playIntro(),window.addEventListener("load",()=>zt.refresh())}$T().catch(r=>{console.error(r),document.getElementById("preloader")?.remove(),Ys.classList.remove("anim"),gp()});})();
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

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
