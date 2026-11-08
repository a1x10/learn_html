(()=>{var r0=Object.defineProperty;var s0=(r,t,e)=>t in r?r0(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Rt=(r,t,e)=>s0(r,typeof t!="symbol"?t+"":t,e);function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function tp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qo={duration:.5,overwrite:!1,delay:0},Mu,dn,Ne,mi=1e8,Se=1/mi,fu=Math.PI*2,o0=fu/4,a0=0,ep=Math.sqrt,l0=Math.cos,c0=Math.sin,nn=function(t){return typeof t=="string"},Ge=function(t){return typeof t=="function"},tr=function(t){return typeof t=="number"},Al=function(t){return typeof t>"u"},Ni=function(t){return typeof t=="object"},Wn=function(t){return t!==!1},Su=function(){return typeof window<"u"},gl=function(t){return Ge(t)||nn(t)},np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,h0=/random\([^)]+\)/g,u0=/,\s*/g,qf=/(?:-?\.?\d|\.)+/gi,bu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Tu=/[+-]=-?[.\d]+/,d0=/[^,'"\[\]\s]+/gi,f0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ke,Di,pu,wu,ei={},yl={},ip,rp=function(t){return(yl=zs(t,ei))&&vn},Cl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Yo=function(t,e){return!e&&console.warn(t)},sp=function(t,e){return t&&(ei[t]=e)&&yl&&(yl[t]=e)||ei},$o=function(){return 0},p0={suppressEvents:!0,isStart:!0,kill:!1},_l={suppressEvents:!0,kill:!1},m0={suppressEvents:!0},Eu={},Ar=[],mu={},op,Hn={},au={},Yf=30,xl=[],Au="",Cu=function(t){var e=t[0],n,i;if(Ni(e)||Ge(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=xl.length;i--&&!xl[i].targetTest(e););n=xl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Lu(t[i],n)))||t.splice(i,1);return t},Cr=function(t){return t._gsap||Cu(gi(t))[0]._gsap},Ru=function(t,e,n){return(n=t[e])&&Ge(n)?t[e]():Al(n)&&t.getAttribute&&t.getAttribute(e)||n},Ln=function(t,e){return(t=t.split(",")).forEach(e)||t},We=function(t){return Math.round(t*1e5)/1e5||0},Be=function(t){return Math.round(t*1e7)/1e7||0},ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},g0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ml=function(){var t=Ar.length,e=Ar.slice(0),n,i;for(mu={},Ar.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Pu=function(t){return!!(t._initted||t._startAt||t.add)},ap=function(t,e,n,i){Ar.length&&!dn&&Ml(),t.render(e,n,i||!!(dn&&e<0&&Pu(t))),Ar.length&&!dn&&Ml()},lp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(d0).length<2?e:nn(t)?t.trim():t},cp=function(t){return t},ni=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},_0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zs=function(t,e){for(var n in e)t[n]=e[n];return t},$f=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ni(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Sl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Go=function(t){var e=t.parent||ke,n=t.keyframes?_0(xn(t.keyframes)):ni;if(Wn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},x0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},hp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Rl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},es=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},v0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},gu=function(t,e,n,i){return t._startAt&&(dn?t._startAt.revert(_l):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},y0=function r(t){return!t||t._ts&&r(t.parent)},Zf=function(t){return t._repeat?Vs(t._tTime,t=t.duration()+t._rDelay)*t:0},Vs=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n},bl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Pl=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Il=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Pl(t),n._dirty||es(n,t)),t},up=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bl(t.rawTime(),e),(!e._dur||Qo(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),es(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Ui=function(t,e,n,i){return e.parent&&Rr(e),e._start=Be((tr(n)?n:!n&&Tl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==ke?pi(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),hp(t,e,"_first","_last",t._sort?"_start":0),Tl(e)||(t._recent=e),i||up(t,e),t._ts<0&&Il(t,t._tTime),t},dp=function(t,e){return(ei.ScrollTrigger||Cl("scrollTrigger",e))&&ei.ScrollTrigger.create(e,t)},fp=function(t,e,n,i,s){if(Nu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!dn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&op!==Gn.frame)return Ar.push(t),t._lazy=[s,i],1},M0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Tl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},S0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&M0(t)&&!(!t._initted&&Tl(t))||(t._ts<0||t._dp._ts<0)&&!Tl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=Qo(0,t._tDur,e),h=Vs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Vs(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||dn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&fp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&gu(t,e,n,!0),t._onUpdate&&!n&&ti(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ti(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Rr(t,1),!n&&!dn&&(ti(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},b0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Hs=function(t,e,n,i){var s=t._repeat,o=Be(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Be(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Il(t,t._tTime=t._tDur*a),t.parent&&Pl(t),n||es(t.parent,t),t},Jf=function(t){return t instanceof _n?es(t):Hs(t,t._dur)},T0={_start:0,endTime:$o,totalDuration:$o},pi=function r(t,e,n){var i=t.labels,s=t._recent||T0,o=t.duration()>=mi?s.endTime(!1):t._dur,a,l,c;return nn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Wo=function(t,e,n){var i=tr(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Wn(l.vars.inherit)&&l.parent;o.immediateRender=Wn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ke(e[0],o,e[s+1])},Pr=function(t,e){return t||t===0?e(t):e},Qo=function(t,e,n){return n<t?t:n>e?e:n},fn=function(t,e){return!nn(t)||!(e=f0.exec(t))?"":e[1]},w0=function(t,e,n){return Pr(n,function(i){return Qo(t,e,i)})},_u=[].slice,pp=function(t,e){return t&&Ni(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ni(t[0]))&&!t.nodeType&&t!==Di},E0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return nn(i)&&!e||pp(i,1)?(s=n).push.apply(s,gi(i)):n.push(i)})||n},gi=function(t,e,n){return Ne&&!e&&Ne.selector?Ne.selector(t):nn(t)&&!n&&(pu||!Gs())?_u.call((e||wu).querySelectorAll(t),0):xn(t)?E0(t,n):pp(t)?_u.call(t,0):t?[t]:[]},xu=function(t){return t=gi(t)[0]||Yo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gi(e,n.querySelectorAll?n:n===t?Yo("Invalid scope")||wu.createElement("div"):t)}},mp=function(t){return t.sort(function(){return .5-Math.random()})},gp=function(t){if(Ge(t))return t;var e=Ni(t)?t:{each:t},n=ns(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return nn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,M,S,x,T,A,w,C,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,mi])[1],!y){for(w=-mi;w<(w=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,M=y===mi?0:l?_*u/y-.5:i/y|0,w=0,C=mi,A=0;A<_;A++)S=A%y-p,x=M-(A/y|0),m[A]=T=c?Math.abs(c==="y"?x:S):ep(S*S+x*x),T>w&&(w=T),T<C&&(C=T);i==="random"&&mp(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=fn(e.amount||e.each)||0,n=n&&_<0?k0(n):n}return _=(m[d]-m.min)/m.max||0,Be(m.b+(n?n(_):_)*m.v)+m.u}},vu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(tr(n)?0:fn(n))}},_p=function(t,e){var n=xn(t),i,s;return!n&&Ni(t)&&(i=n=t.radius||mi,t.values?(t=gi(t.values),(s=!tr(t[0]))&&(i*=i)):t=vu(t.increment)),Pr(e,n?Ge(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mi,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||tr(o)?h:h+fn(o)}:vu(t))},xp=function(t,e,n,i){return Pr(xn(t)?!e:n===!0?!!(n=0):!i,function(){return xn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},A0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},C0=function(t,e){return function(n){return t(parseFloat(n))+(e||fn(n))}},R0=function(t,e,n){return yp(t,e,0,1,n)},vp=function(t,e,n){return Pr(n,function(i){return t[~~e(i)]})},P0=function r(t,e,n){var i=e-t;return xn(t)?vp(t,r(0,t.length),e):Pr(n,function(s){return(i+(s-t)%i)%i+t})},I0=function r(t,e,n){var i=e-t,s=i*2;return xn(t)?vp(t,r(0,t.length-1),e):Pr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Ws=function(t){return t.replace(h0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(u0);return xp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yp=function(t,e,n,i,s){var o=e-t,a=i-n;return Pr(s,function(l){return n+((l-t)/o*a||0)})},L0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=nn(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(xn(t)&&!xn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=zs(xn(t)?[]:{},t));if(!h){for(l in e)Du.call(a,t,l,"get",e[l]);s=function(g){return Bu(g,a)||(o?t.p:t)}}}return Pr(n,s)},Kf=function(t,e,n){var i=t.labels,s=mi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(t,e,n){var i=t.vars,s=i[e],o=Ne,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ar.length&&Ml(),a&&(Ne=a),h=l?s.apply(c,l):s.call(c),Ne=o,h},Vo=function(t){return Rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!dn),t.progress()<1&&ti(t,"onInterrupt"),t},ks,Mp=[],Sp=function(t){if(t)if(t=!t.name&&t.default||t,Su()||t.headless){var e=t.name,n=Ge(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:$o,render:Bu,add:Du,kill:Z0,modifier:$0,rawVars:0},o={targetTest:0,get:0,getSetter:Ll,aliases:{},register:0};if(Gs(),t!==i){if(Hn[e])return;ni(i,ni(Sl(t,s),o)),zs(i.prototype,zs(s,Sl(t,o))),Hn[i.prop=e]=i,t.targetTest&&(xl.push(i),Eu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}sp(e,i),t.register&&t.register(vn,i,Dn)}else Mp.push(t)},Ee=255,Ho={aqua:[0,Ee,Ee],lime:[0,Ee,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ee],navy:[0,0,128],white:[Ee,Ee,Ee],olive:[128,128,0],yellow:[Ee,Ee,0],orange:[Ee,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ee,0,0],pink:[Ee,192,203],cyan:[0,Ee,Ee],transparent:[Ee,Ee,Ee,0]},lu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ee+.5|0},bp=function(t,e,n){var i=t?tr(t)?[t>>16,t>>8&Ee,t&Ee]:0:Ho.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ho[t])i=Ho[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ee,i&Ee,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ee,t&Ee]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(qf),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=lu(l+1/3,s,o),i[1]=lu(l,s,o),i[2]=lu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(bu),n&&i.length<4&&(i[3]=1),i}else i=t.match(qf)||Ho.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Ee,o=i[1]/Ee,a=i[2]/Ee,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Tp=function(t){var e=[],n=[],i=-1;return t.split(ji).forEach(function(s){var o=s.match(rs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Qf=function(t,e,n){var i="",s=(t+i).match(ji),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=bp(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Tp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ji,"1").split(rs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(ji),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},ji=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ho)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),D0=/hsl[a]?\(/,Iu=function(t){var e=t.join(" "),n;if(ji.lastIndex=0,ji.test(e))return n=D0.test(e),t[1]=Qf(t[1],n),t[0]=Qf(t[0],n,Tp(t[1])),!0},Zo,Gn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,M=m===!0,S,x,T,A;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,S=T-o,(S>0||M)&&(A=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=S+(S>=s?0:s-S),x=1),M||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](T,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){ip&&(!pu&&Su()&&(Di=pu=window,wu=Di.document||{},ei.gsap=vn,(Di.gsapVersions||(Di.gsapVersions=[])).push(vn.version),rp(yl||Di.GreenSockGlobals||!Di.gsap&&Di||{}),Mp.forEach(Sp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Zo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Zo=0,c=$o},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,M){var S=p?function(x,T,A,w){m(x,T,A,w),u.remove(S)}:m;return u.remove(m),a[M?"unshift":"push"](S),Gs(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),Gs=function(){return!Zo&&Gn.wake()},ue={},U0=/^[\d.\-M][\d.\-,\s]/,N0=/["']/g,F0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(N0,"").trim():+c,i=l.substr(a+1).trim();return e},O0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},B0=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[F0(e[1])]:O0(t).split(",").map(lp)):ue._CE&&U0.test(t)?ue._CE("",t):n},k0=function(t){return function(e){return 1-t(1-e)}},ns=function(t,e){return t&&(Ge(t)?t:ue[t]||B0(t))||e},os=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Ln(t,function(a){ue[a]=ei[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},wp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},cu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/fu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*c0((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:wp(a);return s=fu/s,l.config=function(c,h){return r(t,c,h)},l},hu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:wp(n);return i.config=function(s){return r(t,s)},i};Ln("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;os(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;os("Elastic",cu("in"),cu("out"),cu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};os("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);os("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});os("Circ",function(r){return-(ep(1-r*r)-1)});os("Sine",function(r){return r===1?1:-l0(r*o0)+1});os("Back",hu("in"),hu("out"),hu());ue.SteppedEase=ue.steps=ei.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*Qo(0,o,a)|0)+s)*n}}};qo.ease=ue["quad.out"];Ln("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Au+=r+","+r+"Params,"});var Lu=function(t,e){this.id=a0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Ru,this.set=e?e.getSetter:Ll},Jo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Hs(this,+e.duration,1,1),this.data=e.data,Ne&&(this._ctx=Ne,Ne.data.push(this)),Zo||Gn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Hs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Gs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Il(this,n),!s._dp||s.parent||up(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ap(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Zf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Zf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime(Qo(-Math.abs(this._delay),a,s),i!==!1),Pl(this),v0(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Gs(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Se,o;if(s)for(this._tTime-=Se,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Se){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=m0);var i=dn;return dn=n,Pu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Jf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Jf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(pi(this,n),Wn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Wn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ge(n)?n:cp,l=function(){var h=i.then;i.then=null,s&&s(),Ge(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Vo(this)},r})();ni(Jo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var _n=(function(r){tp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Wn(n.sortChildren),ke&&Ui(n.parent||ke,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dp(Qi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return Wo(0,arguments,this),this},e.from=function(i,s,o){return Wo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return Wo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,Go(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ke(i,s,pi(this,o),1),this},e.call=function(i,s,o){return Ui(this,Ke.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ke(i,o,pi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Go(o).immediateRender=Wn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Go(a).immediateRender=Wn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Be(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,M,S,x,T,A,w;if(this!==ke&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,S=this._ts,p=!S,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Be(h%m),h===l?(_=this._repeat,d=c):(T=Be(h/m),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=Vs(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),A&&_&1&&(d=c-d,w=1),_!==T&&!this._lock){var C=A&&T&1,y=C===(A&&_&1);if(_<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Be(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=b0(this,Be(a),Be(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(ti(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-Se);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||dn&&Pu(f)),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=v?-Se:Se);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Se)._zTime=d>=a?1:-1,this._ts))return this._start=x,Pl(this),this.render(i,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Rr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(ti(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(tr(s)||(s=pi(this,s,i)),!(i instanceof Jo)){if(xn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ge(i))i=Ke.delayedCall(0,i);else return this}return this!==i?Ui(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ke?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return nn(i)?this.removeLabel(i):Ge(i)?this.killTweensOf(i):(i.parent===this&&Rl(this,i),i===this._recent&&(this._recent=this._last),es(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(Gn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ke.delayedCall(0,s||$o,o);return a.data="isPause",this._hasPause=1,Ui(this,a,pi(this,i))},e.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data==="isPause"&&Rr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Er!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=gi(i),l=this._first,c=tr(s),h;l;)l instanceof Ke?g0(l._targets,a)&&(c?(!Er||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=pi(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Ke.to(o,ni({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Hs(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ni({startAt:{time:pi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Kf(this,pi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Kf(this,pi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Be(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return es(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),es(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=mi,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Be(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Hs(o,o===ke&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(ke._ts&&(ap(ke,bl(i,ke)),op=Gn.frame),Gn.frame>=Yf){Yf+=Xn.autoSleep||120;var s=ke._first;if((!s||!s._ts)&&Xn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},t})(Jo);ni(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var z0=function(t,e,n,i,s,o,a){var l=new Dn(this._pt,t,e,0,1,Ou,null,s),c=0,h=0,u,d,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ws(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(ou)||[];u=ou.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ss(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=ou.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Tu.test(i)||p)&&(l.e=0),this._pt=l,l},Du=function(t,e,n,i,s,o,a,l,c,h){Ge(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ge(u)?c?t[e.indexOf("set")||!Ge(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ge(u)?c?X0:Ap:Fu,g;if(nn(i)&&(~i.indexOf("random(")&&(i=Ws(i)),i.charAt(1)==="="&&(g=ss(d,i)+(fn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||yu)return!isNaN(d*i)&&i!==""?(g=new Dn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?Y0:Cp,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Cl(e,i),z0.call(this,t,e,d,i,f,l||Xn.stringFilter,c))},V0=function(t,e,n,i,s){if(Ge(t)&&(t=Xo(t,s,e,n,i)),!Ni(t)||t.style&&t.nodeType||xn(t)||np(t))return nn(t)?Xo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Xo(t[a],s,e,n,i);return o},Uu=function(t,e,n,i,s,o){var a,l,c,h;if(Hn[t]&&(a=new Hn[t]).init(s,a.rawVars?e[t]:V0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Dn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==ks))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Er,yu,Nu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Mu,x=t.timeline,T=i.easeReverse||u,A,w,C,y,v,I,D,H,G,X,N,W,V;if(x&&(!d||!s)&&(s="none"),t._ease=ns(s,qo.ease),t._rEase=T&&(ns(T)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||d&&!i.stagger){if(H=m[0]?Cr(m[0]).harness:0,W=H&&i[H.prop],A=Sl(i,Eu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?_l:p0),_._lazy=0),o){if(Rr(t._startAt=Ke.set(m,ni({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Wn(l),startAt:null,delay:0,onUpdate:c&&function(){return ti(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn||!a&&!f)&&t._startAt.revert(_l),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),C=ni({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Wn(l),immediateRender:a,stagger:0,parent:p},A),W&&(C[H.prop]=W),Rr(t._startAt=Ke.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(dn?t._startAt.revert(_l):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Wn(l)||l&&!g,w=0;w<m.length;w++){if(v=m[w],D=v._gsap||Cu(m)[w]._gsap,t._ptLookup[w]=X={},mu[D.id]&&Ar.length&&Ml(),N=M===m?w:M.indexOf(v),H&&(G=new H).init(v,W||A,t,N,M)!==!1&&(t._pt=y=new Dn(t._pt,v,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(et){X[et]=y}),G.priority&&(I=1)),!H||W)for(C in A)Hn[C]&&(G=Uu(C,A,t,N,v,M))?G.priority&&(I=1):X[C]=y=Du.call(t,v,C,"get",A[C],N,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(v,t._op[w]),S&&t._pt&&(Er=t,ke.killTweensOf(v,X,t.globalTime(e)),V=!t.parent,Er=0),t._pt&&l&&(mu[D.id]=1)}I&&ku(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&x.render(mi,!0,!0)},H0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return yu=1,t.vars[e]="+=0",Nu(t,a),yu=0,l?Yo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=We(n)+fn(u.e)),u.b&&(u.b=h.s+fn(u.b))},G0=function(t,e){var n=t[0]?Cr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=zs({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},W0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(xn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Xo=function(t,e,n,i,s){return Ge(t)?t.call(e,n,i,s):nn(t)&&~t.indexOf("random(")?Ws(t):t},wl=Au+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Ep={};Ln(wl+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ep[r]=1});wl=wl.split(",");var Ke=(function(r){tp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Go(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||ke,M=(xn(n)||np(n)?tr(n[0]):"length"in i)?[n]:gi(n),S,x,T,A,w,C,y,v;if(a._targets=M.length?Cu(M):Yo("GSAP target "+n+" not found. https://gsap.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||gl(c)||gl(h)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(S=a.timeline=new _n({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Qi(a),S._start=0,d||gl(c)||gl(h)){if(A=M.length,y=d&&gp(d),Ni(d))for(w in d)~wl.indexOf(w)&&(v||(v={}),v[w]=d[w]);for(x=0;x<A;x++)T=Sl(i,Ep),T.stagger=0,I&&(T.easeReverse=I),v&&zs(T,v),C=M[x],T.duration=+Xo(c,Qi(a),x,C,M),T.delay=(+Xo(h,Qi(a),x,C,M)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(C,T,y?y(x,C,M):0),S._ease=ue.none;S.duration()?c=h=0:a.timeline=0}else if(g){Go(ni(S.vars.defaults,{ease:"none"})),S._ease=ns(g.ease||i.ease||"none");var D=0,H,G,X;if(xn(g))g.forEach(function(N){return S.to(M,N,">")}),S.duration();else{T={};for(w in g)w==="ease"||w==="easeEach"||W0(w,g[w],T,g.easeEach);for(w in T)for(H=T[w].sort(function(N,W){return N.t-W.t}),D=0,x=0;x<H.length;x++)G=H[x],X={ease:G.e,duration:(G.t-(x?H[x-1].t:0))/100*c},X[w]=G.v,S.to(M,X,D),D+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Mu&&(Er=Qi(a),ke.killTweensOf(M),Er=0),Ui(p,Qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Be(p._time)&&Wn(u)&&y0(Qi(a))&&p.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&dp(Qi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Se&&!h?l:i<Se?0:i,d,f,g,_,m,p,M,S;if(!c)S0(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=Be(u%_),u===l?(g=this._repeat,d=c):(m=Be(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Vs(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Be(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(fp(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=d<a;if(x!==this._inv){var T=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(x?-1:1)/T:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(ti(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&gu(this,i,s,o),ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&gu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Rr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(ti(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Zo||Gn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Nu(this,c),h=this._ease(c/this._dur),H0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Il(this,0),this.parent||hp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Er&&Er.vars.overwrite!==!0)._first||Vo(this),this.parent&&o!==this.timeline.totalDuration()&&Hs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gi(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&x0(a,l))return s==="all"&&(this._pt=0),Vo(this);for(u=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},Ln(s,function(M){return _[M]=1}),s=_),s=G0(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Rl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Vo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Wo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return Wo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return ke.killTweensOf(i,s,o)},t})(Jo);ni(Ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ln("staggerTo,staggerFrom,staggerFromTo",function(r){Ke[r]=function(){var t=new _n,e=_u.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Fu=function(t,e,n){return t[e]=n},Ap=function(t,e,n){return t[e](n)},X0=function(t,e,n,i){return t[e](i.fp,n)},q0=function(t,e,n){return t.setAttribute(e,n)},Ll=function(t,e){return Ge(t[e])?Ap:Al(t[e])&&t.setAttribute?q0:Fu},Cp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Y0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ou=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Bu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},$0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Z0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Rl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},J0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ku=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Dn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Cp,this.d=l||this,this.set=c||Fu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=J0,this.m=n,this.mt=s,this.tween=i},r})();Ln(Au+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Eu[r]=1});ei.TweenMax=ei.TweenLite=Ke;ei.TimelineLite=ei.TimelineMax=_n;ke=new _n({sortChildren:!1,defaults:qo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=Iu;var is=[],vl={},K0=[],jf=0,Q0=0,uu=function(t){return(vl[t]||K0).map(function(e){return e()})},Ko=function(){var t=Date.now(),e=[];t-jf>2&&(uu("matchMediaInit"),is.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Di.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),uu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),jf=t,uu("matchMedia"))},Rp=(function(){function r(e,n){this.selector=n&&xu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Q0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ge(n)&&(s=i,i=n,n=Ge);var o=this,a=function(){var c=Ne,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=xu(s)),Ne=o,u=i.apply(o,arguments),Ge(u)&&o._r.push(u),Ne=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ge?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ne;Ne=null,n(this),Ne=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof _n?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ke)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=is.length;o--;)is[o].id===this.id&&is.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Ko):a.removeEventListener("change",Ko)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),j0=(function(){function r(e){this.contexts=[],this.scope=e,Ne&&Ne.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ni(n)||(n={matches:n});var o=new Rp(0,s||this.scope),a=o.conditions={},l,c,h;Ne&&!o.selector&&(o.selector=Ne.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Di.matchMedia(n[c]),l&&(is.indexOf(o)<0&&is.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Ko):l.addEventListener("change",Ko),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),El={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sp(i)})},timeline:function(t){return new _n(t)},getTweensOf:function(t,e){return ke.getTweensOf(t,e)},getProperty:function(t,e,n,i){nn(t)&&(t=gi(t)[0]);var s=Cr(t||{}).get,o=n?cp:lp;return n==="native"&&(n=""),t&&(e?o((Hn[e]&&Hn[e].get||s)(t,e,n,i)):function(a,l,c){return o((Hn[a]&&Hn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=gi(t),t.length>1){var i=t.map(function(h){return vn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=Hn[e],a=Cr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;ks._pt=0,u.init(t,n?h+n:h,ks,0,[t]),u.render(1,u),ks._pt&&Bu(1,ks)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=vn.to(t,ni((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return ke.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ns(t.ease,qo.ease)),$f(qo,t||{})},config:function(t){return $f(Xn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Hn[a]&&!ei[a]&&Yo(e+" effect requires "+a+" plugin.")}),au[e]=function(a,l,c){return n(gi(a),ni(l||{},s),c)},o&&(_n.prototype[e]=function(a,l,c){return this.add(au[e](a,Ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=ns(e)},parseEase:function(t,e){return arguments.length?ns(t,e):ue},getById:function(t){return ke.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _n(t),i,s;for(n.smoothChildTiming=Wn(t.smoothChildTiming),ke.remove(n),n._dp=0,n._time=n._tTime=ke._time,i=ke._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ke&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=s;return Ui(ke,n,0),n},context:function(t,e){return t?new Rp(t,e):Ne},matchMedia:function(t){return new j0(t)},matchMediaRefresh:function(){return is.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ko()},addEventListener:function(t,e){var n=vl[t]||(vl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=vl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:P0,wrapYoyo:I0,distribute:gp,random:xp,snap:_p,normalize:R0,getUnit:fn,clamp:w0,splitColor:bp,toArray:gi,selector:xu,mapRange:yp,pipe:A0,unitize:C0,interpolate:L0,shuffle:mp},install:rp,effects:au,ticker:Gn,updateRoot:_n.updateRoot,plugins:Hn,globalTimeline:ke,core:{PropTween:Dn,globals:sp,Tween:Ke,Timeline:_n,Animation:Jo,getCache:Cr,_removeLinkedListItem:Rl,reverting:function(){return dn},context:function(t){return t&&Ne&&(Ne.data.push(t),t._ctx=Ne),Ne},suppressOverwrites:function(t){return Mu=t}}};Ln("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return El[r]=Ke[r]});Gn.add(_n.updateRoot);ks=El.to({},{duration:0});var tx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},ex=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=tx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},du=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(nn(s)&&(l={},Ln(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}ex(a,s)}}}},vn=El.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},du("roundProps",vu),du("modifiers"),du("snap",_p))||El;Ke.version=_n.version=vn.version="3.15.1";ip=1;Su()&&Gs();var nx=ue.Power0,ix=ue.Power1,rx=ue.Power2,sx=ue.Power3,ox=ue.Power4,ax=ue.Linear,lx=ue.Quad,cx=ue.Cubic,hx=ue.Quart,ux=ue.Quint,dx=ue.Strong,fx=ue.Elastic,px=ue.Back,mx=ue.SteppedEase,gx=ue.Bounce,_x=ue.Sine,xx=ue.Expo,vx=ue.Circ;var Pp,Ir,qs,Xu,hs,yx,Ip,qu,Mx=function(){return typeof window<"u"},nr={},cs=180/Math.PI,Ys=Math.PI/180,Xs=Math.atan2,Lp=1e8,Yu=/([A-Z])/g,Sx=/(left|right|width|margin|padding|x)/i,bx=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Tx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ex=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ax=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},zp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Vp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Cx=function(t,e,n){return t.style[e]=n},Rx=function(t,e,n){return t.style.setProperty(e,n)},Px=function(t,e,n){return t._gsap[e]=n},Ix=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Lx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Dx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",qn=ze+"Origin",Ux=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in nr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Fi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=er(i,a)}):this.tfm[t]=o.x?o[t]:er(i,t),t===qn&&(this.tfm.zOrigin=o.zOrigin);else return Fi.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(qn,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},Hp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Nx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Yu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=qu(),(!s||!s.isStart)&&!n[ze]&&(Hp(n),i.zOrigin&&n[qn]&&(n[qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Gp=function(t,e){var n={target:t,props:[],revert:Nx,save:Ux};return t._gsap||vn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Wp,Hu=function(t,e){var n=Ir.createElementNS?Ir.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ir.createElement(t);return n&&n.style?n:Ir.createElement(t)},ii=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Yu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,$s(e)||e,1)||""},Dp="O,Moz,ms,Ms,Webkit".split(","),$s=function(t,e,n){var i=e||hs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Dp[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Dp[o]:"")+t},Gu=function(){Mx()&&window.document&&(Pp=window,Ir=Pp.document,qs=Ir.documentElement,hs=Hu("div")||{style:{}},yx=Hu("div"),ze=$s(ze),qn=ze+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wp=!!$s("perspective"),qu=vn.core.reverting,Xu=1)},Up=function(t){var e=t.ownerSVGElement,n=Hu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),qs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),qs.removeChild(n),s},Np=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Xp=function(t){var e,n;try{e=t.getBBox()}catch{e=Up(t),n=1}return e&&(e.width||e.height)||n||(e=Up(t)),e&&!e.width&&!e.x&&!e.y?{x:+Np(t,["x","cx","x1"])||0,y:+Np(t,["y","cy","y1"])||0,width:0,height:0}:e},qp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Xp(t))},Dr=function(t,e){if(e){var n=t.style,i;e in nr&&e!==qn&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Yu,"-$1").toLowerCase())):n.removeAttribute(e)}},Lr=function(t,e,n,i,s,o){var a=new Dn(t._pt,e,n,0,1,o?Vp:zp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Fp={deg:1,rad:1,turn:1},Fx={grid:1,flex:1},Ur=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=hs.style,l=Sx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Fp[i]||Fp[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&qp(t),(f||o==="%")&&(nr[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],We(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Gn.time&&!m.uncache)return We(s/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:Dr(t,e)}else(f||o==="%")&&!Fx[ii(_,"display")]&&(a.position=ii(t,"position")),_===t&&(a.position="static"),_.appendChild(hs),g=hs[h],_.removeChild(hs),a.position="absolute";return l&&f&&(m=Cr(_),m.time=Gn.time,m.width=_[h]),We(d?g*s/u:g&&s?u/g*s:0)},er=function(t,e,n,i){var s;return Xu||Gu(),e in Fi&&e!=="transform"&&(e=Fi[e],~e.indexOf(",")&&(e=e.split(",")[0])),nr[e]&&e!=="transform"?(s=ea(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ul(ii(t,qn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Dl[e]&&Dl[e](t,e,n)||ii(t,e)||Ru(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ur(t,e,s,n)+n:s},Ox=function(t,e,n,i){if(!n||n==="none"){var s=$s(e,t,1),o=s&&ii(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ii(t,"borderTopColor"))}var a=new Dn(this._pt,t.style,e,0,1,Ou),l=0,c=0,h,u,d,f,g,_,m,p,M,S,x,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ii(t,e)||i,_?t.style[e]=_:Dr(t,e)),h=[n,i],Iu(h),n=h[0],i=h[1],d=n.match(rs)||[],T=i.match(rs)||[],T.length){for(;u=rs.exec(i);)m=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=ss(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=rs.lastIndex-S.length,S||(S=S||Xn.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(f=Ur(t,e,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Vp:zp;return Tu.test(i)&&(a.e=0),this._pt=a,a},Op={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Bx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Op[n]||n,e[1]=Op[i]||i,e.join(" ")},kx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],nr[a]&&(l=1,a=a==="transformOrigin"?qn:ze),Dr(n,a);l&&(Dr(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ea(n,1),o.uncache=1,Hp(i)))}},Dl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Dn(t._pt,e,n,0,0,kx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ta=[1,0,0,1,0,0],Yp={},$p=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Bp=function(t){var e=ii(t,ze);return $p(e)?ta:e.substr(7).match(bu).map(We)},$u=function(t,e){var n=t._gsap||Cr(t),i=t.style,s=Bp(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ta:s):(s===ta&&!t.offsetParent&&t!==qs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,qs.appendChild(t)),s=Bp(t),l?i.display=l:Dr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):qs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Wu=function(t,e,n,i,s,o){var a=t._gsap,l=s||$u(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,T=parseFloat(S[1])||0,A,w,C,y;n?l!==ta&&(w=f*m-g*_)&&(C=x*(m/w)+T*(-_/w)+(_*M-m*p)/w,y=x*(-g/w)+T*(f/w)-(f*M-g*p)/w,x=C,T=y):(A=Xp(t),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),T=A.y+(~(S[1]||S[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&a.smooth?(p=x-c,M=T-h,a.xOffset=u+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[qn]="0px 0px",o&&(Lr(o,a,"xOrigin",c,x),Lr(o,a,"yOrigin",h,T),Lr(o,a,"xOffset",u,a.xOffset),Lr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},ea=function(t,e){var n=t._gsap||new Lu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ii(t,qn)||"0",h,u,d,f,g,_,m,p,M,S,x,T,A,w,C,y,v,I,D,H,G,X,N,W,V,et,L,it,Ut,ae,Xt,Wt;return h=u=d=_=m=p=M=S=x=0,f=g=1,n.svg=!!(t.getCTM&&qp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),w=$u(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Wu(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,A=n.yOrigin||0,w!==ta&&(I=w[0],D=w[1],H=w[2],G=w[3],h=X=w[4],u=N=w[5],w.length===6?(f=Math.sqrt(I*I+D*D),g=Math.sqrt(G*G+H*H),_=I||D?Xs(D,I)*cs:0,M=H||G?Xs(H,G)*cs+_:0,M&&(g*=Math.abs(Math.cos(M*Ys))),n.svg&&(h-=T-(T*I+A*H),u-=A-(T*D+A*G))):(Wt=w[6],ae=w[7],L=w[8],it=w[9],Ut=w[10],Xt=w[11],h=w[12],u=w[13],d=w[14],C=Xs(Wt,Ut),m=C*cs,C&&(y=Math.cos(-C),v=Math.sin(-C),W=X*y+L*v,V=N*y+it*v,et=Wt*y+Ut*v,L=X*-v+L*y,it=N*-v+it*y,Ut=Wt*-v+Ut*y,Xt=ae*-v+Xt*y,X=W,N=V,Wt=et),C=Xs(-H,Ut),p=C*cs,C&&(y=Math.cos(-C),v=Math.sin(-C),W=I*y-L*v,V=D*y-it*v,et=H*y-Ut*v,Xt=G*v+Xt*y,I=W,D=V,H=et),C=Xs(D,I),_=C*cs,C&&(y=Math.cos(C),v=Math.sin(C),W=I*y+D*v,V=X*y+N*v,D=D*y-I*v,N=N*y-X*v,I=W,X=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=We(Math.sqrt(I*I+D*D+H*H)),g=We(Math.sqrt(N*N+Wt*Wt)),C=Xs(X,N),M=Math.abs(C)>2e-4?C*cs:0,x=Xt?1/(Xt<0?-Xt:Xt):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!$p(ii(t,ze)),W&&t.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=We(f),n.scaleY=We(g),n.rotation=We(_)+a,n.rotationX=We(m)+a,n.rotationY=We(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[qn]=Ul(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?Vx:Wp?Zp:zx,n.uncache=0,n},Ul=function(t){return(t=t.split(" "))[0]+" "+t[1]},zu=function(t,e,n){var i=fn(e);return We(parseFloat(e)+parseFloat(Ur(t,"x",n+"px",i)))+i},zx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Zp(t,e)},as="0deg",jo="0px",ls=") ",Zp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,x="",T=p==="auto"&&t&&t!==1||p===!0;if(S&&(u!==as||h!==as)){var A=parseFloat(h)*Ys,w=Math.sin(A),C=Math.cos(A),y;A=parseFloat(u)*Ys,y=Math.cos(A),o=zu(M,o,w*y*-S),a=zu(M,a,-Math.sin(A)*-S),l=zu(M,l,C*y*-S+S)}m!==jo&&(x+="perspective("+m+ls),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(T||o!==jo||a!==jo||l!==jo)&&(x+=l!==jo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ls),c!==as&&(x+="rotate("+c+ls),h!==as&&(x+="rotateY("+h+ls),u!==as&&(x+="rotateX("+u+ls),(d!==as||f!==as)&&(x+="skew("+d+", "+f+ls),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ls),M.style[ze]=x||"translate(0, 0)"},Vx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),T,A,w,C,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ys,c*=Ys,T=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Ys,y=Math.tan(c-h),y=Math.sqrt(1+y*y),w*=y,C*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),T*=y,A*=y)),T=We(T),A=We(A),w=We(w),C=We(C)):(T=u,C=d,A=w=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Ur(f,"x",o,"px"),x=Ur(f,"y",a,"px")),(g||_||m||p)&&(S=We(S+g-(g*T+_*w)+m),x=We(x+_-(g*A+_*C)+p)),(i||s)&&(y=f.getBBox(),S=We(S+i/100*y.width),x=We(x+s/100*y.height)),y="matrix("+T+","+A+","+w+","+C+","+S+","+x+")",f.setAttribute("transform",y),M&&(f.style[ze]=y)},Hx=function(t,e,n,i,s){var o=360,a=nn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?cs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Lp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Lp)%o-~~(c/o)*o)),t._pt=d=new Dn(t._pt,e,n,i,c,Tx),d.e=h,d.u="deg",t._props.push(n),d},kp=function(t,e){for(var n in e)t[n]=e[n];return t},Gx=function(t,e,n){var i=kp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=ea(n,1),Dr(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=ea(n,1),o[ze]=c);for(l in nr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=fn(c),g=fn(h),u=f!==g?Ur(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new Dn(t._pt,a,l,u,d-u,Vu),t._pt.u=g||0,t._props.push(l));kp(a,i)};Ln("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Dl[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return er(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var Zu={name:"css",register:Gu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,M,S,x,T,A,w,C,y;Xu||Gu(),this.styles=this.styles||Gp(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Hn[_]&&Uu(_,e,n,i,t,s)))){if(f=typeof h,g=Dl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ws(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ji.lastIndex=0,ji.test(c)||(m=fn(c),p=fn(h),p?m!==p&&(c=Ur(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],nn(c)&&~c.indexOf("random(")&&(c=Ws(c)),fn(c+"")||c==="auto"||(c+=Xn.units[_]||fn(er(t,_))||""),(c+"").charAt(1)==="="&&(c=er(t,_))):c=er(t,_),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Fi&&(_==="autoAlpha"&&(d===1&&er(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),Lr(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in nr,S){if(this.styles.save(_),y=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ii(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=h,h=ii(t,"perspective"),v?t.style.perspective=v:Dr(t,"perspective")}u=parseFloat(h)}if(x||(T=t._gsap,T.renderTransform&&!e.parseTransform||ea(t,e.parseTransform),A=e.smoothOrigin!==!1&&T.smooth,x=this._pt=new Dn(this._pt,a,ze,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new Dn(this._pt,T,"scaleY",T.scaleY,(M?ss(T.scaleY,M+u):u)-T.scaleY||0,Vu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(qn,0,a[qn]),h=Bx(h),T.svg?Wu(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Lr(this,T,"zOrigin",T.zOrigin,p),Lr(this,a,_,Ul(c),Ul(h)));continue}else if(_==="svgOrigin"){Wu(t,h,1,A,0,this);continue}else if(_ in Yp){Hx(this,T,_,d,M?ss(d,M+h):h);continue}else if(_==="smoothOrigin"){Lr(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Gx(this,h,t);continue}}else _ in a||(_=$s(_)||_);if(S||(u||u===0)&&(d||d===0)&&!bx.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),p=fn(h)||(_ in Xn.units?Xn.units[_]:m),m!==p&&(d=Ur(t,_,c,p)),this._pt=new Dn(this._pt,S?T:a,_,d,(M?ss(d,M+u):u)-d,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?Ax:Vu),this._pt.u=p||0,S&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=Ex):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=wx);else if(_ in a)Ox.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Cl(_,h);continue}S||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}w&&ku(this)},render:function(t,e){if(e.tween._time||!qu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:er,aliases:Fi,getSetter:function(t,e,n){var i=Fi[e];return i&&i.indexOf(",")<0&&(e=i),e in nr&&e!==qn&&(t._gsap.x||er(t,"x"))?n&&Ip===n?e==="scale"?Ix:Px:(Ip=n||{})&&(e==="scale"?Lx:Dx):t.style&&!Al(t.style[e])?Cx:~e.indexOf("-")?Rx:Ll(t,e)},core:{_removeProperty:Dr,_getMatrix:$u}};vn.utils.checkPrefix=$s;vn.core.getStyleSaver=Gp;(function(r,t,e,n){var i=Ln(r+","+t+","+e,function(s){nr[s]=1});Ln(t,function(s){Xn.units[s]="deg",Yp[s]=1}),Fi[i[13]]=r+","+t,Ln(n,function(s){var o=s.split(":");Fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ln("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Xn.units[r]="px"});vn.registerPlugin(Zu);var qt=vn.registerPlugin(Zu)||vn,QT=qt.core.Tween;function Jp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Wx(r,t,e){return t&&Jp(r.prototype,t),e&&Jp(r,e),r}var pn,Ol,Xx,Yn,Nr,Fr,Js,Qp,us,Ks,jp,ir,bi,tm,em=function(){return pn||typeof window<"u"&&(pn=window.gsap)&&pn.registerPlugin&&pn},nm=1,Zs=[],ne=[],Ti=[],ia=Date.now,Ju=function(t,e){return e},qx=function(){var t=Ks.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,Ti),ne=n,Ti=i,Ju=function(o,a){return e[o](a)}},sr=function(t,e){return~Ti.indexOf(t)&&Ti[Ti.indexOf(t)+1][e]},ra=function(t){return!!~jp.indexOf(t)},Nn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Un=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Nl="scrollLeft",Fl="scrollTop",Ku=function(){return ir&&ir.isPressed||ne.cache++},Bl=function(t,e){var n=function i(s){if(s||s===0){nm&&Yn.history.scrollRestoration!=="manual"&&(Yn.history.scrollRestoration="manual");var o=ir&&ir.isPressed;s=i.v=Math.round(s)||(ir&&ir.iOS?1:0),t(s),i.cacheID=ne.cache,o&&Ju("ss",s)}else(e||ne.cache!==i.cacheID||Ju("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},yn={s:Nl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Bl(function(r){return arguments.length?Yn.scrollTo(r,Qe.sc()):Yn.pageXOffset||Nr[Nl]||Fr[Nl]||Js[Nl]||0})},Qe={s:Fl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:Bl(function(r){return arguments.length?Yn.scrollTo(yn.sc(),r):Yn.pageYOffset||Nr[Fl]||Fr[Fl]||Js[Fl]||0})},Fn=function(t,e){return(e&&e._ctx&&e._ctx.selector||pn.utils.toArray)(t)[0]||(typeof t=="string"&&pn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Yx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},rr=function(t,e){var n=e.s,i=e.sc;ra(t)&&(t=Nr.scrollingElement||Fr);var s=ne.indexOf(t),o=i===Qe.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||Nn(t,"scroll",Ku);var a=ne[s+o],l=a||(ne[s+o]=Bl(sr(t,n),!0)||(ra(t)?i:Bl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=pn.getProperty(t,"scrollBehavior")==="smooth"),l},kl=function(t,e,n){var i=t,s=t,o=ia(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=ia();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=ia();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:u,getVelocity:d}},na=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Kp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},im=function(){Ks=pn.core.globals().ScrollTrigger,Ks&&Ks.core&&qx()},rm=function(t){return pn=t||em(),!Ol&&pn&&typeof document<"u"&&document.body&&(Yn=window,Nr=document,Fr=Nr.documentElement,Js=Nr.body,jp=[Yn,Nr,Fr,Js],Xx=pn.utils.clamp,tm=pn.core.context||function(){},us="onpointerenter"in Js?"pointer":"mouse",Qp=Xe.isTouch=Yn.matchMedia&&Yn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,bi=Xe.eventTypes=("ontouchstart"in Fr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Fr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return nm=0},500),Ol=1),Ks||im(),Ol};yn.op=Qe;ne.cache=0;var Xe=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ol||rm(pn)||console.warn("Please gsap.registerPlugin(Observer)"),Ks||im();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,T=n.onRight,A=n.onLeft,w=n.onUp,C=n.onDown,y=n.onChangeX,v=n.onChangeY,I=n.onChange,D=n.onToggleX,H=n.onToggleY,G=n.onHover,X=n.onHoverEnd,N=n.onMove,W=n.ignoreCheck,V=n.isNormalizer,et=n.onGestureStart,L=n.onGestureEnd,it=n.onWheel,Ut=n.onEnable,ae=n.onDisable,Xt=n.onClick,Wt=n.scrollSpeed,Z=n.capture,K=n.allowClicks,ft=n.lockAxis,At=n.onLockAxis;this.target=a=Fn(a)||Fr,this.vars=n,f&&(f=pn.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Wt=Wt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Yn.getComputedStyle(Js).lineHeight)||22);var Tt,kt,fe,P,Yt,Dt,Ct,F=this,le=0,xt=0,Ht=n.passive||!h&&n.passive!==!1,jt=rr(a,yn),ge=rr(a,Qe),R=jt(),b=ge(),z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&bi[0]==="pointerdown",J=ra(a),Q=a.ownerDocument||Nr,$=[0,0,0],vt=[0,0,0],ot=0,wt=function(){return ot=ia()},dt=function(Pt,Jt){return(F.event=Pt)&&f&&Yx(Pt.target,f)||Jt&&z&&Pt.pointerType!=="touch"||W&&W(Pt,Jt)},st=function(){F._vx.reset(),F._vy.reset(),kt.pause(),u&&u(F)},ht=function(){var Pt=F.deltaX=Kp($),Jt=F.deltaY=Kp(vt),pt=Math.abs(Pt)>=i,zt=Math.abs(Jt)>=i;I&&(pt||zt)&&I(F,Pt,Jt,$,vt),pt&&(T&&F.deltaX>0&&T(F),A&&F.deltaX<0&&A(F),y&&y(F),D&&F.deltaX<0!=le<0&&D(F),le=F.deltaX,$[0]=$[1]=$[2]=0),zt&&(C&&F.deltaY>0&&C(F),w&&F.deltaY<0&&w(F),v&&v(F),H&&F.deltaY<0!=xt<0&&H(F),xt=F.deltaY,vt[0]=vt[1]=vt[2]=0),(P||fe)&&(N&&N(F),fe&&(m&&fe===1&&m(F),M&&M(F),fe=0),P=!1),Dt&&!(Dt=!1)&&At&&At(F),Yt&&(it(F),Yt=!1),Tt=0},Ft=function(Pt,Jt,pt){$[pt]+=Pt,vt[pt]+=Jt,F._vx.update(Pt),F._vy.update(Jt),c?Tt||(Tt=requestAnimationFrame(ht)):ht()},Et=function(Pt,Jt){ft&&!Ct&&(F.axis=Ct=Math.abs(Pt)>Math.abs(Jt)?"x":"y",Dt=!0),Ct!=="y"&&($[2]+=Pt,F._vx.update(Pt,!0)),Ct!=="x"&&(vt[2]+=Jt,F._vy.update(Jt,!0)),c?Tt||(Tt=requestAnimationFrame(ht)):ht()},ct=function(Pt){if(!dt(Pt,1)){Pt=na(Pt,h);var Jt=Pt.clientX,pt=Pt.clientY,zt=Jt-F.x,Nt=pt-F.y,$t=F.isDragging;F.x=Jt,F.y=pt,($t||(zt||Nt)&&(Math.abs(F.startX-Jt)>=s||Math.abs(F.startY-pt)>=s))&&(fe||(fe=$t?2:1),$t||(F.isDragging=!0),Et(zt,Nt))}},Gt=F.onPress=function(_t){dt(_t,1)||_t&&_t.button||(F.axis=Ct=null,kt.pause(),F.isPressed=!0,_t=na(_t),le=xt=0,F.startX=F.x=_t.clientX,F.startY=F.y=_t.clientY,F._vx.reset(),F._vy.reset(),Nn(V?a:Q,bi[1],ct,Ht,!0),F.deltaX=F.deltaY=0,S&&S(F))},U=F.onRelease=function(_t){if(!dt(_t,1)){Un(V?a:Q,bi[1],ct,!0);var Pt=!isNaN(F.y-F.startY),Jt=F.isDragging,pt=Jt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),zt=na(_t);!pt&&Pt&&(F._vx.reset(),F._vy.reset(),h&&K&&pn.delayedCall(.08,function(){if(ia()-ot>300&&!_t.defaultPrevented){if(_t.target.click)_t.target.click();else if(Q.createEvent){var Nt=Q.createEvent("MouseEvents");Nt.initMouseEvent("click",!0,!0,Yn,1,zt.screenX,zt.screenY,zt.clientX,zt.clientY,!1,!1,!1,!1,0,null),_t.target.dispatchEvent(Nt)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,u&&Jt&&!V&&kt.restart(!0),fe&&ht(),p&&Jt&&p(F),x&&x(F,pt)}},rt=function(Pt){return Pt.touches&&Pt.touches.length>1&&(F.isGesturing=!0)&&et(Pt,F.isDragging)},at=function(){return(F.isGesturing=!1)||L(F)},mt=function(Pt){if(!dt(Pt)){var Jt=jt(),pt=ge();Ft((Jt-R)*Wt,(pt-b)*Wt,1),R=Jt,b=pt,u&&kt.restart(!0)}},nt=function(Pt){if(!dt(Pt)){Pt=na(Pt,h),it&&(Yt=!0);var Jt=(Pt.deltaMode===1?l:Pt.deltaMode===2?Yn.innerHeight:1)*g;Ft(Pt.deltaX*Jt,Pt.deltaY*Jt,0),u&&!V&&kt.restart(!0)}},j=function(Pt){if(!dt(Pt)){var Jt=Pt.clientX,pt=Pt.clientY,zt=Jt-F.x,Nt=pt-F.y;F.x=Jt,F.y=pt,P=!0,u&&kt.restart(!0),(zt||Nt)&&Et(zt,Nt)}},Mt=function(Pt){F.event=Pt,G(F)},Bt=function(Pt){F.event=Pt,X(F)},pe=function(Pt){return dt(Pt)||na(Pt,h)&&Xt(F)};kt=F._dc=pn.delayedCall(d||.25,st).pause(),F.deltaX=F.deltaY=0,F._vx=kl(0,50,!0),F._vy=kl(0,50,!0),F.scrollX=jt,F.scrollY=ge,F.isDragging=F.isGesturing=F.isPressed=!1,tm(this),F.enable=function(_t){return F.isEnabled||(Nn(J?Q:a,"scroll",Ku),o.indexOf("scroll")>=0&&Nn(J?Q:a,"scroll",mt,Ht,Z),o.indexOf("wheel")>=0&&Nn(a,"wheel",nt,Ht,Z),(o.indexOf("touch")>=0&&Qp||o.indexOf("pointer")>=0)&&(Nn(a,bi[0],Gt,Ht,Z),Nn(Q,bi[2],U),Nn(Q,bi[3],U),K&&Nn(a,"click",wt,!0,!0),Xt&&Nn(a,"click",pe),et&&Nn(Q,"gesturestart",rt),L&&Nn(Q,"gestureend",at),G&&Nn(a,us+"enter",Mt),X&&Nn(a,us+"leave",Bt),N&&Nn(a,us+"move",j)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=P=fe=!1,F._vx.reset(),F._vy.reset(),R=jt(),b=ge(),_t&&_t.type&&Gt(_t),Ut&&Ut(F)),F},F.disable=function(){F.isEnabled&&(Zs.filter(function(_t){return _t!==F&&ra(_t.target)}).length||Un(J?Q:a,"scroll",Ku),F.isPressed&&(F._vx.reset(),F._vy.reset(),Un(V?a:Q,bi[1],ct,!0)),Un(J?Q:a,"scroll",mt,Z),Un(a,"wheel",nt,Z),Un(a,bi[0],Gt,Z),Un(Q,bi[2],U),Un(Q,bi[3],U),Un(a,"click",wt,!0),Un(a,"click",pe),Un(Q,"gesturestart",rt),Un(Q,"gestureend",at),Un(a,us+"enter",Mt),Un(a,us+"leave",Bt),Un(a,us+"move",j),F.isEnabled=F.isPressed=F.isDragging=!1,ae&&ae(F))},F.kill=F.revert=function(){F.disable();var _t=Zs.indexOf(F);_t>=0&&Zs.splice(_t,1),ir===F&&(ir=0)},Zs.push(F),V&&ra(a)&&(ir=F),F.enable(_)},Wx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Xe.version="3.15.1";Xe.create=function(r){return new Xe(r)};Xe.register=rm;Xe.getAll=function(){return Zs.slice()};Xe.getById=function(r){return Zs.filter(function(t){return t.vars.id===r})[0]};em()&&pn.registerPlugin(Xe);var bt,eo,se,ve,oi,_e,ud,ec,_a,ua,oa,zl,Mn,rc,rd,Bn,sm,om,no,Sm,Qu,bm,On,sd,Tm,wm,Or,od,dd,io,fd,Br,ad,ju,Vl=1,Sn=Date.now,td=Sn(),vi=0,aa=0,am=function(t,e,n){var i=si(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},lm=function(t,e){return e&&(!si(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},$x=function r(){return aa&&requestAnimationFrame(r)},cm=function(){return rc=1},hm=function(){return rc=0},Oi=function(t){return t},la=function(t){return Math.round(t*1e5)/1e5||0},Em=function(){return typeof window<"u"},Am=function(){return bt||Em()&&(bt=window.gsap)&&bt.registerPlugin&&bt},_s=function(t){return!!~ud.indexOf(t)},Cm=function(t){return(t==="Height"?fd:se["inner"+t])||oi["client"+t]||_e["client"+t]},Rm=function(t){return sr(t,"getBoundingClientRect")||(_s(t)?function(){return tc.width=se.innerWidth,tc.height=fd,tc}:function(){return or(t)})},Zx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=sr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Cm(s):t["client"+s])||0}},Jx=function(t,e){return!e||~Ti.indexOf(t)?Rm(t):function(){return tc}},Bi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=sr(t,n))?o()-Rm(t)()[s]:_s(t)?(oi[n]||_e[n])-Cm(i):t[n]-t["offset"+i])},Hl=function(t,e){for(var n=0;n<no.length;n+=3)(!e||~e.indexOf(no[n+1]))&&t(no[n],no[n+1],no[n+2])},si=function(t){return typeof t=="string"},bn=function(t){return typeof t=="function"},ca=function(t){return typeof t=="number"},ds=function(t){return typeof t=="object"},sa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Qs=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},js=Math.abs,Pm="left",Im="top",pd="right",md="bottom",ps="width",ms="height",da="Right",fa="Left",pa="Top",ma="Bottom",je="padding",_i="margin",so="Width",gd="Height",rn="px",xi=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Kx=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},um=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},or=function(t,e){var n=e&&xi(t)[rd]!=="matrix(1, 0, 0, 1, 0, 0)"&&bt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Lm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Qx=function(t){return function(e){return bt.utils.snap(Lm(t),e)}},_d=function(t){var e=bt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},jx=function(t){return function(e,n){return _d(Lm(t))(e,n.direction)}},Gl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},ln=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},an=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Wl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},dm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Xl={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},Jl=function(t,e){if(si(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ic?ic[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ql=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,g=ve.createElement("div"),_=_s(n)||sr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,S=M?c:h,x="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===Qe?pd:md)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Kl(g,0,i,M),g},Kl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+so]=1,s["border"+a+so]=0,s[n.p]=e+"px",bt.set(t,s)},re=[],ld={},xa,fm=function(){return Sn()-vi>34&&(xa||(xa=requestAnimationFrame(ar)))},to=function(){(!On||!On.isPressed||On.startX>_e.clientWidth)&&(ne.cache++,On?xa||(xa=requestAnimationFrame(ar)):ar(),vi||vs("scrollStart"),vi=Sn())},ed=function(){wm=se.innerWidth,Tm=se.innerHeight},ha=function(t){ne.cache++,(t===!0||!Mn&&!bm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!sd||wm!==se.innerWidth||Math.abs(se.innerHeight-Tm)>se.innerHeight*.25))&&ec.restart(!0)},xs={},tv=[],Dm=function r(){return an(Zt,"scrollEnd",r)||fs(!0)},vs=function(t){return xs[t]&&xs[t].map(function(e){return e()})||tv},ri=[],Um=function(t){for(var e=0;e<ri.length;e+=5)(!t||ri[e+4]&&ri[e+4].query===t)&&(ri[e].style.cssText=ri[e+1],ri[e].getBBox&&ri[e].setAttribute("transform",ri[e+2]||""),ri[e+3].uncache=1)},Nm=function(){ne.cache++,ne.forEach(function(t){return bn(t)&&(t.rec=t())})},xd=function(t,e){var n;for(Bn=0;Bn<re.length;Bn++)n=re[Bn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Br=!0,e&&Um(e),e||vs("revert")},Fm=function(t,e){ne.cache++,(e||!kn)&&ne.forEach(function(n){return bn(n)&&n.cacheID++&&(n.rec=0)}),si(t)&&(dd=t,se.history.scrollRestoration!==t&&(se.history.scrollRestoration=t))},kn,gs=0,pm,ev=function(){if(pm!==gs){var t=pm=gs;requestAnimationFrame(function(){return t===gs&&fs(!0)})}},Om=function(){_e.appendChild(io),fd=!On&&io.offsetHeight||se.innerHeight,_e.removeChild(io)},mm=function(t){return _a(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},fs=function(t,e){if(oi=ve.documentElement,_e=ve.body,ud=[se,ve,oi,_e],vi&&!t&&!Br){ln(Zt,"scrollEnd",Dm);return}Om(),kn=Zt.isRefreshing=!0,Br||Nm();var n=vs("refreshInit");Sm&&Zt.sort(),e||xd(),ne.forEach(function(i){bn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),re.slice(0).forEach(function(i){return i.refresh()}),Br=!1,re.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ad=1,mm(!0),re.forEach(function(i){var s=Bi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),mm(!1),ad=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){bn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Fm(dd,1),ec.pause(),gs++,kn=2,ar(2),re.forEach(function(i){return bn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=Zt.isRefreshing=!1,vs("refresh")},cd=0,Ql=1,ga,ar=function(t){if(t===2||!kn&&!Br){Zt.isUpdating=!0,ga&&ga.update(0);var e=re.length,n=Sn(),i=n-td>=50,s=e&&re[0].scroll();if(Ql=cd>s?-1:1,kn||(cd=s),i&&(vi&&!rc&&n-vi>200&&(vi=0,vs("scrollEnd")),oa=td,td=n),Ql<0){for(Bn=e;Bn-- >0;)re[Bn]&&re[Bn].update(0,i);Ql=1}else for(Bn=0;Bn<e;Bn++)re[Bn]&&re[Bn].update(0,i);Zt.isUpdating=!1}xa=0},hd=[Pm,Im,md,pd,_i+ma,_i+da,_i+pa,_i+fa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jl=hd.concat([ps,ms,"boxSizing","max"+so,"max"+gd,"position",_i,je,je+pa,je+da,je+ma,je+fa]),nv=function(t,e,n){ro(n);var i=t._gsap;if(i.spacerIsNative)ro(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},nd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=hd.length,o=e.style,a=t.style,l;s--;)l=hd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[md]=a[pd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ps]=nc(t,yn)+rn,o[ms]=nc(t,Qe)+rn,o[je]=a[_i]=a[Im]=a[Pm]="0",ro(i),a[ps]=a["max"+so]=n[ps],a[ms]=a["max"+gd]=n[ms],a[je]=n[je],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},iv=/([A-Z])/g,ro=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||bt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(iv,"-$1").toLowerCase())}},Yl=function(t){for(var e=jl.length,n=t.style,i=[],s=0;s<e;s++)i.push(jl[s],n[jl[s]]);return i.t=t,i},rv=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},tc={left:0,top:0},gm=function(t,e,n,i,s,o,a,l,c,h,u,d,f,g){bn(t)&&(t=t(l)),si(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?Jl("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),ca(t))f&&(t=bt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&Kl(a,n,i,!0);else{bn(e)&&(e=e(l));var S=(t||"0").split(" "),x,T,A,w;M=Fn(e,l)||_e,x=or(M)||{},(!x||!x.left&&!x.top)&&xi(M).display==="none"&&(w=M.style.display,M.style.display="block",x=or(M),w?M.style.display=w:M.style.removeProperty("display")),T=Jl(S[0],x[i.d]),A=Jl(S[1]||"0",n),t=x[i.p]-c[i.p]-h+T+s-A,a&&Kl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+n,y=o._isStart;m="scroll"+i.d2,Kl(o,C,i,y&&C>20||!y&&(u?Math.max(_e[m],oi[m]):o.parentNode[m])<=C+1),u&&(c=or(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+rn))}return f&&M&&(m=or(M),f.seek(d),p=or(M),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(_),f?t:Math.round(t)},sv=/(webkit|moz|length|cssText|inset)/i,_m=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=xi(t);for(o in a)!+o&&!sv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;bt.core.getCache(t).uncache=1,e.appendChild(t)}},Bm=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},$l=function(t,e,n){var i={};i[e.p]="+="+n,bt.set(t,i)},xm=function(t,e){var n=rr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=Bm(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&ar()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=bt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(t,"wheel",n.wheelHandler),Zt.isTouch&&ln(t,"touchmove",n.wheelHandler),s},Zt=(function(){function r(e,n){eo||r.register(bt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),od(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!aa){this.update=this.refresh=this.kill=Oi;return}n=um(si(n)||ca(n)||n.nodeType?{trigger:n}:n,Xl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,x=s.snap,T=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Qe,I=!u&&u!==0,D=Fn(n.scroller||se),H=bt.core.getCache(D),G=_s(D),X=("pinType"in n?n.pinType:sr(D,"pinType")||G&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:Xl.markers,et=G?0:parseFloat(xi(D)["border"+v.p2+so])||0,L=this,it=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Ut=Zx(D,G,v),ae=Jx(D,G),Xt=0,Wt=0,Z=0,K=rr(D,v),ft,At,Tt,kt,fe,P,Yt,Dt,Ct,F,le,xt,Ht,jt,ge,R,b,z,J,Q,$,vt,ot,wt,dt,st,ht,Ft,Et,ct,Gt,U,rt,at,mt,nt,j,Mt,Bt;if(L._startClamp=L._endClamp=!1,L._dir=v,m*=45,L.scroller=D,L.scroll=w?w.time.bind(w):K,kt=K(),Br&&K.rec==null&&(K.rec=kt),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Sm=1,n.refreshPriority===-9999&&(ga=L)),H.tweenScroll=H.tweenScroll||{top:xm(D,Qe),left:xm(D,yn)},L.tweenTo=ft=H.tweenScroll[v.p],L.scrubDuration=function(pt){rt=ca(pt)&&pt,rt?U?U.duration(pt):U=bt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:rt,paused:!0,onComplete:function(){return p&&p(L)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(u),ct=0,l||(l=i.vars.id)),x&&((!ds(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in _e.style&&bt.set(G?[_e,oi]:D,{scrollBehavior:"auto"}),ne.forEach(function(pt){return bn(pt)&&pt.target===(G?ve.scrollingElement||oi:D)&&(pt.smooth=!1)}),Tt=bn(x.snapTo)?x.snapTo:x.snapTo==="labels"?Qx(i):x.snapTo==="labelsDirectional"?jx(i):x.directional!==!1?function(pt,zt){return _d(x.snapTo)(pt,Sn()-Wt<500?0:zt.direction)}:bt.utils.snap(x.snapTo),at=x.duration||{min:.1,max:2},at=ds(at)?ua(at.min,at.max):ua(at,at),mt=bt.delayedCall(x.delay||rt/2||.1,function(){var pt=K(),zt=Sn()-Wt<500,Nt=ft.tween;if((zt||Math.abs(L.getVelocity())<10)&&!Nt&&!rc&&Xt!==pt){var $t=(pt-P)/jt,Ze=i&&!I?i.totalProgress():$t,ee=zt?0:(Ze-Gt)/(Sn()-oa)*1e3||0,Ue=bt.utils.clamp(-$t,1-$t,js(ee/2)*ee/.185),Je=$t+(x.inertia===!1?0:Ue),Re,Te,xe=x,Kn=xe.onStart,Pe=xe.onInterrupt,Pn=xe.onComplete;if(Re=Tt(Je,L),ca(Re)||(Re=Je),Te=Math.max(0,Math.round(P+Re*jt)),pt<=Yt&&pt>=P&&Te!==pt){if(Nt&&!Nt._initted&&Nt.data<=js(Te-pt))return;x.inertia===!1&&(Ue=Re-$t),ft(Te,{duration:at(js(Math.max(js(Je-Ze),js(Re-Ze))*.185/ee/.05||0)),ease:x.ease||"power3",data:js(Te-pt),onInterrupt:function(){return mt.restart(!0)&&Pe&&Qs(L,Pe)},onComplete:function(){L.update(),Xt=K(),i&&!I&&(U?U.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),ct=Gt=i&&!I?i.totalProgress():L.progress,M&&M(L),Pn&&Qs(L,Pn)}},pt,Ue*jt,Te-pt-Ue*jt),Kn&&Qs(L,Kn,ft.tween)}}else L.isActive&&Xt!==pt&&mt.restart(!0)}).pause()),l&&(ld[l]=L),d=L.trigger=Fn(d||f!==!0&&f),Bt=d&&d._gsap&&d._gsap.stRevert,Bt&&(Bt=Bt(L)),f=f===!0?d:Fn(f),si(a)&&(a={targets:d,className:a}),f&&(g===!1||g===_i||(g=!g&&f.parentNode&&f.parentNode.style&&xi(f.parentNode).display==="flex"?!1:je),L.pin=f,At=bt.core.getCache(f),At.spacer?ge=At.pinState:(A&&(A=Fn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),At.spacerIsNative=!!A,A&&(At.spacerState=Yl(A))),At.spacer=z=A||ve.createElement("div"),z.classList.add("pin-spacer"),l&&z.classList.add("pin-spacer-"+l),At.pinState=ge=Yl(f)),n.force3D!==!1&&bt.set(f,{force3D:!0}),L.spacer=z=At.spacer,Et=xi(f),wt=Et[g+v.os2],Q=bt.getProperty(f),$=bt.quickSetter(f,v.a,rn),nd(f,z,Et),b=Yl(f)),V){xt=ds(V)?um(V,dm):dm,F=ql("scroller-start",l,D,v,xt,0),le=ql("scroller-end",l,D,v,xt,0,F),J=F["offset"+v.op.d2];var pe=Fn(sr(D,"content")||D);Dt=this.markerStart=ql("start",l,pe,v,xt,J,0,w),Ct=this.markerEnd=ql("end",l,pe,v,xt,J,0,w),w&&(Mt=bt.quickSetter([Dt,Ct],v.a,rn)),!X&&!(Ti.length&&sr(D,"fixedMarkers")===!0)&&(Kx(G?_e:D),bt.set([F,le],{force3D:!0}),st=bt.quickSetter(F,v.a,rn),Ft=bt.quickSetter(le,v.a,rn))}if(w){var _t=w.vars.onUpdate,Pt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){L.update(0,0,1),_t&&_t.apply(w,Pt||[])})}if(L.previous=function(){return re[re.indexOf(L)-1]},L.next=function(){return re[re.indexOf(L)+1]},L.revert=function(pt,zt){if(!zt)return L.kill(!0);var Nt=pt!==!1||!L.enabled,$t=Mn;Nt!==L.isReverted&&(Nt&&(nt=Math.max(K(),L.scroll.rec||0),Z=L.progress,j=i&&i.progress()),Dt&&[Dt,Ct,F,le].forEach(function(Ze){return Ze.style.display=Nt?"none":"block"}),Nt&&(Mn=L,L.update(Nt)),f&&(!T||!L.isActive)&&(Nt?nv(f,z,ge):nd(f,z,xi(f),dt)),Nt||L.update(Nt),Mn=$t,L.isReverted=Nt)},L.refresh=function(pt,zt,Nt,$t){if(!((Mn||!L.enabled)&&!zt)){if(f&&pt&&vi){ln(r,"scrollEnd",Dm);return}!kn&&it&&it(L),Mn=L,ft.tween&&!Nt&&(ft.tween.kill(),ft.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ce){return ce.vars.immediateRender&&ce.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ze=Ut(),ee=ae(),Ue=w?w.duration():Bi(D,v),Je=jt<=.01||!jt,Re=0,Te=$t||0,xe=ds(Nt)?Nt.end:n.end,Kn=n.endTrigger||d,Pe=ds(Nt)?Nt.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Pn=L.pinnedContainer=n.pinnedContainer&&Fn(n.pinnedContainer,L),ui=d&&Math.max(0,re.indexOf(L))||0,en=ui,E,O,q,Y,B,tt,lt,St,yt,Ot,Lt,It,te;for(V&&ds(Nt)&&(It=bt.getProperty(F,v.p),te=bt.getProperty(le,v.p));en-- >0;)tt=re[en],tt.end||tt.refresh(0,1)||(Mn=L),lt=tt.pin,lt&&(lt===d||lt===f||lt===Pn)&&!tt.isReverted&&(Ot||(Ot=[]),Ot.unshift(tt),tt.revert(!0,!0)),tt!==re[en]&&(ui--,en--);for(bn(Pe)&&(Pe=Pe(L)),Pe=am(Pe,"start",L),P=gm(Pe,d,Ze,v,K(),Dt,F,L,ee,et,X,Ue,w,L._startClamp&&"_startClamp")||(f?-.001:0),bn(xe)&&(xe=xe(L)),si(xe)&&!xe.indexOf("+=")&&(~xe.indexOf(" ")?xe=(si(Pe)?Pe.split(" ")[0]:"")+xe:(Re=Jl(xe.substr(2),Ze),xe=si(Pe)?Pe:(w?bt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,P):P)+Re,Kn=d)),xe=am(xe,"end",L),Yt=Math.max(P,gm(xe||(Kn?"100% 0":Ue),Kn,Ze,v,K()+Re,Ct,le,L,ee,et,X,Ue,w,L._endClamp&&"_endClamp"))||-.001,Re=0,en=ui;en--;)tt=re[en]||{},lt=tt.pin,lt&&tt.start-tt._pinPush<=P&&!w&&tt.end>0&&(E=tt.end-(L._startClamp?Math.max(0,tt.start):tt.start),(lt===d&&tt.start-tt._pinPush<P||lt===Pn)&&isNaN(Pe)&&(Re+=E*(1-tt.progress)),lt===f&&(Te+=E));if(P+=Re,Yt+=Re,L._startClamp&&(L._startClamp+=Re),L._endClamp&&!kn&&(L._endClamp=Yt||-.001,Yt=Math.min(Yt,Bi(D,v))),jt=Yt-P||(P-=.01)&&.001,Je&&(Z=bt.utils.clamp(0,1,bt.utils.normalize(P,Yt,nt))),L._pinPush=Te,Dt&&Re&&(E={},E[v.a]="+="+Re,Pn&&(E[v.p]="-="+K()),bt.set([Dt,Ct],E)),f&&!(ad&&L.end>=Bi(D,v)))E=xi(f),Y=v===Qe,q=K(),vt=parseFloat(Q(v.a))+Te,!Ue&&Yt>1&&(Lt=(G?ve.scrollingElement||oi:D).style,Lt={style:Lt,value:Lt["overflow"+v.a.toUpperCase()]},G&&xi(_e)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Lt.style["overflow"+v.a.toUpperCase()]="scroll")),nd(f,z,E),b=Yl(f),O=or(f,!0),St=X&&rr(D,Y?yn:Qe)(),g?(dt=[g+v.os2,jt+Te+rn],dt.t=z,en=g===je?nc(f,v)+jt+Te:0,en&&(dt.push(v.d,en+rn),z.style.flexBasis!=="auto"&&(z.style.flexBasis=en+rn)),ro(dt),Pn&&re.forEach(function(ce){ce.pin===Pn&&ce.vars.pinSpacing!==!1&&(ce._subPinOffset=!0)}),X&&K(nt)):(en=nc(f,v),en&&z.style.flexBasis!=="auto"&&(z.style.flexBasis=en+rn)),X&&(B={top:O.top+(Y?q-P:St)+rn,left:O.left+(Y?St:q-P)+rn,boxSizing:"border-box",position:"fixed"},B[ps]=B["max"+so]=Math.ceil(O.width)+rn,B[ms]=B["max"+gd]=Math.ceil(O.height)+rn,B[_i]=B[_i+pa]=B[_i+da]=B[_i+ma]=B[_i+fa]="0",B[je]=E[je],B[je+pa]=E[je+pa],B[je+da]=E[je+da],B[je+ma]=E[je+ma],B[je+fa]=E[je+fa],R=rv(ge,B,T),kn&&K(0)),i?(yt=i._initted,Qu(1),i.render(i.duration(),!0,!0),ot=Q(v.a)-vt+jt+Te,ht=Math.abs(jt-ot)>1,X&&ht&&R.splice(R.length-2,2),i.render(0,!0,!0),yt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qu(0)):ot=jt,Lt&&(Lt.value?Lt.style["overflow"+v.a.toUpperCase()]=Lt.value:Lt.style.removeProperty("overflow-"+v.a));else if(d&&K()&&!w)for(O=d.parentNode;O&&O!==_e;)O._pinOffset&&(P-=O._pinOffset,Yt-=O._pinOffset),O=O.parentNode;Ot&&Ot.forEach(function(ce){return ce.revert(!1,!0)}),L.start=P,L.end=Yt,kt=fe=kn?nt:K(),!w&&!kn&&!Br&&(kt<nt&&K(nt),L.scroll.rec=0),L.revert(!1,!0),Wt=Sn(),mt&&(Xt=-1,mt.restart(!0)),Mn=0,i&&I&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Je||Z!==L.progress||w||_||i&&!i._initted)&&(i&&!I&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(w&&P<-.001&&!Z?bt.utils.normalize(P,Yt,0):Z,!0),L.progress=Je||(kt-P)/jt===Z?0:Z),f&&g&&(z._pinOffset=Math.round(L.progress*ot)),U&&U.invalidate(),isNaN(It)||(It-=bt.getProperty(F,v.p),te-=bt.getProperty(le,v.p),$l(F,v,It),$l(Dt,v,It-($t||0)),$l(le,v,te),$l(Ct,v,te-($t||0))),Je&&!kn&&L.update(),h&&!kn&&!Ht&&(Ht=!0,h(L),Ht=!1)}},L.getVelocity=function(){return(K()-fe)/(Sn()-oa)*1e3||0},L.endAnimation=function(){sa(L.callbackAnimation),i&&(U?U.progress(1):i.paused()?I||sa(i,L.direction<0,1):sa(i,i.reversed()))},L.labelToScroll=function(pt){return i&&i.labels&&(P||L.refresh()||P)+i.labels[pt]/i.duration()*jt||0},L.getTrailing=function(pt){var zt=re.indexOf(L),Nt=L.direction>0?re.slice(0,zt).reverse():re.slice(zt+1);return(si(pt)?Nt.filter(function($t){return $t.vars.preventOverlaps===pt}):Nt).filter(function($t){return L.direction>0?$t.end<=P:$t.start>=Yt})},L.update=function(pt,zt,Nt){if(!(w&&!Nt&&!pt)){var $t=kn===!0?nt:L.scroll(),Ze=pt?0:($t-P)/jt,ee=Ze<0?0:Ze>1?1:Ze||0,Ue=L.progress,Je,Re,Te,xe,Kn,Pe,Pn,ui;if(zt&&(fe=kt,kt=w?K():$t,x&&(Gt=ct,ct=i&&!I?i.totalProgress():ee)),m&&f&&!Mn&&!Vl&&vi&&(!ee&&P<$t+($t-fe)/(Sn()-oa)*m?ee=1e-4:ee===1&&Yt>$t+($t-fe)/(Sn()-oa)*m&&(ee=.9999)),ee!==Ue&&L.enabled){if(Je=L.isActive=!!ee&&ee<1,Re=!!Ue&&Ue<1,Pe=Je!==Re,Kn=Pe||!!ee!=!!Ue,L.direction=ee>Ue?1:-1,L.progress=ee,Kn&&!Mn&&(Te=ee&&!Ue?0:ee===1?1:Ue===1?2:3,I&&(xe=!Pe&&W[Te+1]!=="none"&&W[Te+1]||W[Te],ui=i&&(xe==="complete"||xe==="reset"||xe in i))),y&&(Pe||ui)&&(ui||u||!i)&&(bn(y)?y(L):L.getTrailing(y).forEach(function(q){return q.endAnimation()})),I||(U&&!Mn&&!Vl?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",ee,i._tTime/i._tDur):(U.vars.totalProgress=ee,U.invalidate().restart())):i&&i.totalProgress(ee,!!(Mn&&(Wt||pt)))),f){if(pt&&g&&(z.style[g+v.os2]=wt),!X)$(la(vt+ot*ee));else if(Kn){if(Pn=!pt&&ee>Ue&&Yt+1>$t&&$t+1>=Bi(D,v),T)if(!pt&&(Je||Pn)){var en=or(f,!0),E=$t-P;_m(f,_e,en.top+(v===Qe?E:0)+rn,en.left+(v===Qe?0:E)+rn)}else _m(f,z);ro(Je||Pn?R:b),ht&&ee<1&&Je||$(vt+(ee===1&&!Pn?ot:0))}}x&&!ft.tween&&!Mn&&!Vl&&mt.restart(!0),a&&(Pe||S&&ee&&(ee<1||!ju))&&_a(a.targets).forEach(function(q){return q.classList[Je||S?"add":"remove"](a.className)}),o&&!I&&!pt&&o(L),Kn&&!Mn?(I&&(ui&&(xe==="complete"?i.pause().totalProgress(1):xe==="reset"?i.restart(!0).pause():xe==="restart"?i.restart(!0):i[xe]()),o&&o(L)),(Pe||!ju)&&(c&&Pe&&Qs(L,c),N[Te]&&Qs(L,N[Te]),S&&(ee===1?L.kill(!1,1):N[Te]=0),Pe||(Te=ee===1?1:3,N[Te]&&Qs(L,N[Te]))),C&&!Je&&Math.abs(L.getVelocity())>(ca(C)?C:2500)&&(sa(L.callbackAnimation),U?U.progress(1):sa(i,xe==="reverse"?1:!ee,1))):I&&o&&!Mn&&o(L)}if(Ft){var O=w?$t/w.duration()*(w._caScrollDist||0):$t;st(O+(F._isFlipped?1:0)),Ft(O)}Mt&&Mt(-$t/w.duration()*(w._caScrollDist||0))}},L.enable=function(pt,zt){L.enabled||(L.enabled=!0,ln(D,"resize",ha),G||ln(D,"scroll",to),it&&ln(r,"refreshInit",it),pt!==!1&&(L.progress=Z=0,kt=fe=Xt=K()),zt!==!1&&L.refresh())},L.getTween=function(pt){return pt&&ft?ft.tween:U},L.setPositions=function(pt,zt,Nt,$t){if(w){var Ze=w.scrollTrigger,ee=w.duration(),Ue=Ze.end-Ze.start;pt=Ze.start+Ue*pt/ee,zt=Ze.start+Ue*zt/ee}L.refresh(!1,!1,{start:lm(pt,Nt&&!!L._startClamp),end:lm(zt,Nt&&!!L._endClamp)},$t),L.update()},L.adjustPinSpacing=function(pt){if(dt&&pt){var zt=dt.indexOf(v.d)+1;dt[zt]=parseFloat(dt[zt])+pt+rn,dt[1]=parseFloat(dt[1])+pt+rn,ro(dt)}},L.disable=function(pt,zt){if(pt!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,zt||U&&U.pause(),nt=0,At&&(At.uncache=1),it&&an(r,"refreshInit",it),mt&&(mt.pause(),ft.tween&&ft.tween.kill()&&(ft.tween=0)),!G)){for(var Nt=re.length;Nt--;)if(re[Nt].scroller===D&&re[Nt]!==L)return;an(D,"resize",ha),G||an(D,"scroll",to)}},L.kill=function(pt,zt){L.disable(pt,zt),U&&!zt&&U.kill(),l&&delete ld[l];var Nt=re.indexOf(L);Nt>=0&&re.splice(Nt,1),Nt===Bn&&Ql>0&&Bn--,Nt=0,re.forEach(function($t){return $t.scroller===L.scroller&&(Nt=1)}),Nt||kn||Br||(L.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),zt||i.kill()),Dt&&[Dt,Ct,F,le].forEach(function($t){return $t.parentNode&&$t.parentNode.removeChild($t)}),ga===L&&(ga=0),f&&(At&&(At.uncache=1),Nt=0,re.forEach(function($t){return $t.pin===f&&Nt++}),Nt||(At.spacer=0)),n.onKill&&n.onKill(L)},re.push(L),L.enable(!1,!1),Bt&&Bt(L),i&&i.add&&!jt){var Jt=L.update;L.update=function(){L.update=Jt,ne.cache++,P||Yt||L.refresh()},bt.delayedCall(.01,L.update),jt=.01,P=Yt=0}else L.refresh();f&&ev()},r.register=function(n){return eo||(bt=n||Am(),Em()&&window.document&&r.enable(),eo=aa),eo},r.defaults=function(n){if(n)for(var i in n)Xl[i]=n[i];return Xl},r.disable=function(n,i){aa=0,re.forEach(function(o){return o[i?"kill":"disable"](n)}),an(se,"wheel",to),an(ve,"scroll",to),clearInterval(zl),an(ve,"touchcancel",Oi),an(_e,"touchstart",Oi),Gl(an,ve,"pointerdown,touchstart,mousedown",cm),Gl(an,ve,"pointerup,touchend,mouseup",hm),ec.kill(),Hl(an);for(var s=0;s<ne.length;s+=3)Wl(an,ne[s],ne[s+1]),Wl(an,ne[s],ne[s+2])},r.enable=function(){if(se=window,ve=document,oi=ve.documentElement,_e=ve.body,bt){if(_a=bt.utils.toArray,ua=bt.utils.clamp,od=bt.core.context||Oi,Qu=bt.core.suppressOverwrites||Oi,dd=se.history.scrollRestoration||"auto",cd=se.pageYOffset||0,bt.core.globals("ScrollTrigger",r),_e){aa=1,io=document.createElement("div"),io.style.height="100vh",io.style.position="absolute",Om(),$x(),Xe.register(bt),r.isTouch=Xe.isTouch,Or=Xe.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sd=Xe.isTouch===1,ln(se,"wheel",to),ud=[se,ve,oi,_e],bt.matchMedia?(r.matchMedia=function(h){var u=bt.matchMedia(),d;for(d in h)u.add(d,h[d]);return u},bt.addEventListener("matchMediaInit",function(){Nm(),xd()}),bt.addEventListener("matchMediaRevert",function(){return Um()}),bt.addEventListener("matchMedia",function(){fs(0,1),vs("matchMedia")}),bt.matchMedia().add("(orientation: portrait)",function(){return ed(),ed})):console.warn("Requires GSAP 3.11.0 or later"),ed(),ln(ve,"scroll",to);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=bt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=or(_e),Qe.m=Math.round(a.top+Qe.sc())||0,yn.m=Math.round(a.left+yn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),zl=setInterval(fm,250),bt.delayedCall(.5,function(){return Vl=0}),ln(ve,"touchcancel",Oi),ln(_e,"touchstart",Oi),Gl(ln,ve,"pointerdown,touchstart,mousedown",cm),Gl(ln,ve,"pointerup,touchend,mouseup",hm),rd=bt.utils.checkPrefix("transform"),jl.push(rd),eo=Sn(),ec=bt.delayedCall(.2,fs).pause(),no=[ve,"visibilitychange",function(){var h=se.innerWidth,u=se.innerHeight;ve.hidden?(sm=h,om=u):(sm!==h||om!==u)&&ha()},ve,"DOMContentLoaded",fs,se,"load",fs,se,"resize",ha],Hl(ln),re.forEach(function(h){return h.enable(0,1)}),l=0;l<ne.length;l+=3)Wl(an,ne[l],ne[l+1]),Wl(an,ne[l],ne[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ju=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(zl)||(zl=i)&&setInterval(fm,i),"ignoreMobileResize"in n&&(sd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Hl(an)||Hl(ln,n.autoRefreshEvents||"none"),bm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Fn(n),o=ne.indexOf(s),a=_s(s);~o&&ne.splice(o,a?6:2),i&&(a?Ti.unshift(se,i,_e,i,oi,i):Ti.unshift(s,i))},r.clearMatchMedia=function(n){re.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(si(n)?Fn(n):n).getBoundingClientRect(),a=o[s?ps:ms]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){si(n)&&(n=Fn(n));var o=n.getBoundingClientRect(),a=o[s?ps:ms],l=i==null?a/2:i in ic?ic[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(re.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=xs.killAll||[];xs={},i.forEach(function(s){return s()})}},r})();Zt.version="3.15.1";Zt.saveStyles=function(r){return r?_a(r).forEach(function(t){if(t&&t.style){var e=ri.indexOf(t);e>=0&&ri.splice(e,5),ri.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),bt.core.getCache(t),od())}}):ri};Zt.revert=function(r,t){return xd(!r,t)};Zt.create=function(r,t){return new Zt(r,t)};Zt.refresh=function(r){return r?ha(!0):(eo||Zt.register())&&fs(!0)};Zt.update=function(r){return++ne.cache&&ar(r===!0?2:0)};Zt.clearScrollMemory=Fm;Zt.maxScroll=function(r,t){return Bi(r,t?yn:Qe)};Zt.getScrollFunc=function(r,t){return rr(Fn(r),t?yn:Qe)};Zt.getById=function(r){return ld[r]};Zt.getAll=function(){return re.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Zt.isScrolling=function(){return!!vi};Zt.snapDirectional=_d;Zt.addEventListener=function(r,t){var e=xs[r]||(xs[r]=[]);~e.indexOf(t)||e.push(t)};Zt.removeEventListener=function(r,t){var e=xs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Zt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=bt.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(g){u.length||f.restart(!0),u.push(g.trigger),d.push(g),s<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&bn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return bn(s)&&(s=s(),ln(Zt,"refresh",function(){return s=t.batchMax()})),_a(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Zt.create(c))}),e};var vm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},id=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Xe.isTouch?" pinch-zoom":""):"none",t===oi&&r(_e,e)},Zl={auto:1,scroll:1},ov=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||bt.core.getCache(s),a=Sn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Zl[(l=xi(s)).overflowY]||Zl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!_s(s)&&(Zl[(l=xi(s)).overflowY]||Zl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},km=function(t,e,n,i){return Xe.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ov,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(ve,Xe.eventTypes[0],Mm,!1,!0)},onDisable:function(){return an(ve,Xe.eventTypes[0],Mm,!0)}})},av=/(input|label|select|textarea)/i,ym,Mm=function(t){var e=av.test(t.target.tagName);(e||ym)&&(t._gsapAllow=!0,ym=e)},lv=function(t){ds(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Fn(t.target)||oi,h=bt.core.globals().ScrollSmoother,u=h&&h.get(),d=Or&&(t.content&&Fn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=rr(c,Qe),g=rr(c,yn),_=1,m=(Xe.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,M=bn(i)?function(){return i(a)}:function(){return i||2.8},S,x,T=km(c,t.type,!0,s),A=function(){return x=!1},w=Oi,C=Oi,y=function(){l=Bi(c,Qe),C=ua(Or?1:0,l),n&&(w=ua(0,Bi(c,yn))),S=gs},v=function(){d._gsap.y=la(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(x){requestAnimationFrame(A);var V=la(a.deltaY/2),et=C(f.v-V);if(d&&et!==f.v+f.offset){f.offset=et-f.v;var L=la((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",d._gsap.y=L+"px",f.cacheID=ne.cache,ar()}return!0}f.offset&&v(),x=!0},D,H,G,X,N=function(){y(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return d&&bt.set(d,{y:"+=0"}),t.ignoreCheck=function(W){return Or&&W.type==="touchmove"&&I(W)||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},t.onPress=function(){x=!1;var W=_;_=la((se.visualViewport&&se.visualViewport.scale||1)/m),D.pause(),W!==_&&id(c,_>1.01?!0:n?!1:"x"),H=g(),G=f(),y(),S=gs},t.onRelease=t.onGestureStart=function(W,V){if(f.offset&&v(),!V)X.restart(!0);else{ne.cache++;var et=M(),L,it;n&&(L=g(),it=L+et*.05*-W.velocityX/.227,et*=vm(g,L,it,Bi(c,yn)),D.vars.scrollX=w(it)),L=f(),it=L+et*.05*-W.velocityY/.227,et*=vm(f,L,it,Bi(c,Qe)),D.vars.scrollY=C(it),D.invalidate().duration(et).play(.01),(Or&&D.vars.scrollY>=l||L>=l-1)&&bt.to({},{onUpdate:N,duration:et})}o&&o(W)},t.onWheel=function(){D._ts&&D.pause(),Sn()-p>1e3&&(S=0,p=Sn())},t.onChange=function(W,V,et,L,it){if(gs!==S&&y(),V&&n&&g(w(L[2]===V?H+(W.startX-W.x):g()+V-L[1])),et){f.offset&&v();var Ut=it[2]===et,ae=Ut?G+W.startY-W.y:f()+et-it[1],Xt=C(ae);Ut&&ae!==Xt&&(G+=Xt-ae),f(Xt)}(et||V)&&ar()},t.onEnable=function(){id(c,n?!1:"x"),Zt.addEventListener("refresh",N),ln(se,"resize",N),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),T.enable()},t.onDisable=function(){id(c,!0),an(se,"resize",N),Zt.removeEventListener("refresh",N),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Xe(t),a.iOS=Or,Or&&!f()&&f(1),Or&&bt.ticker.add(Oi),X=a._dc,D=bt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Bm(f,f(),function(){return D.pause()})},onUpdate:ar,onComplete:X.vars.onComplete}),a};Zt.sort=function(r){if(bn(r))return re.sort(r);var t=se.pageYOffset||0;return Zt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),re.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Zt.observe=function(r){return new Xe(r)};Zt.normalizeScroll=function(r){if(typeof r>"u")return On;if(r===!0&&On)return On.enable();if(r===!1){On&&On.kill(),On=r;return}var t=r instanceof Xe?r:lv(r);return On&&On.target===t.target&&On.kill(),_s(t.target)&&(On=t),t};Zt.core={_getVelocityProp:kl,_inputObserver:km,_scrollers:ne,_proxies:Ti,bridge:{ss:function(){vi||vs("scrollStart"),vi=Sn()},ref:function(){return Mn}}};Am()&&bt.registerPlugin(Zt);var zm="1.3.27";function Gm(r,t,e){return Math.max(r,Math.min(t,e))}function cv(r,t,e){return(1-e)*r+e*t}function hv(r,t,e,n){return cv(r,t,1-Math.exp(-e*n))}function uv(r,t){return(r%t+t)%t}var dv=class{constructor(){Rt(this,"isRunning",!1);Rt(this,"value",0);Rt(this,"from",0);Rt(this,"to",0);Rt(this,"currentTime",0);Rt(this,"lerp");Rt(this,"duration");Rt(this,"easing");Rt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Gm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=hv(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function fv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var pv=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Rt(this,"width",0);Rt(this,"height",0);Rt(this,"scrollHeight",0);Rt(this,"scrollWidth",0);Rt(this,"debouncedResize");Rt(this,"wrapperResizeObserver");Rt(this,"contentResizeObserver");Rt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Rt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Rt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=fv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Wm=class{constructor(){Rt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},mv=100/6,kr={passive:!1};function Vm(r,t){return r===1?mv:r===2?t:1}var gv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Rt(this,"touchStart",{x:0,y:0});Rt(this,"lastDelta",{x:0,y:0});Rt(this,"window",{width:0,height:0});Rt(this,"emitter",new Wm);Rt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Rt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Rt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Rt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Vm(n,this.window.width),s=Vm(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Rt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,kr),this.element.addEventListener("touchstart",this.onTouchStart,kr),this.element.addEventListener("touchmove",this.onTouchMove,kr),this.element.addEventListener("touchend",this.onTouchEnd,kr)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,kr),this.element.removeEventListener("touchstart",this.onTouchStart,kr),this.element.removeEventListener("touchmove",this.onTouchMove,kr),this.element.removeEventListener("touchend",this.onTouchEnd,kr)}},Hm=r=>Math.min(1,1.001-2**(-10*r)),Xm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:T=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:C=w,stopInertiaOnNavigate:y=!1,respectReducedMotion:v=!0}={}){Rt(this,"_isScrolling",!1);Rt(this,"_isStopped",!1);Rt(this,"_isLocked",!1);Rt(this,"_preventNextNativeScrollEvent",!1);Rt(this,"_resetVelocityTimeout",null);Rt(this,"_rafId",null);Rt(this,"_isDraggingSelection",!1);Rt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Rt(this,"isTouching");Rt(this,"isIos");Rt(this,"time",0);Rt(this,"userData",{});Rt(this,"lastVelocity",0);Rt(this,"velocity",0);Rt(this,"direction",0);Rt(this,"options");Rt(this,"targetScroll");Rt(this,"animatedScroll");Rt(this,"animate",new dv);Rt(this,"emitter",new Wm);Rt(this,"dimensions");Rt(this,"virtualScroll");Rt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Rt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Rt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Rt(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Rt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Rt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let d=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Rt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Rt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=zm,window.lenis||(window.lenis={}),window.lenis.version=zm,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Hm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:S,anchors:x,autoToggle:T,allowNestedScroll:A,naiveDimensions:C,stopInertiaOnNavigate:y,respectReducedMotion:v},this.dimensions=new pv(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new gv(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=r,f=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(g=d),g){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=Gm(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Hm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,u,d,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();let A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;u=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,a=u>f,l=d>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=d,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,M,S,x,T;if(_==="horizontal")m=Math.round(r.scrollLeft),p=u-f,M=t,S=s,x=a,T=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=d-g,M=e,S=o,x=l,T=h;else return!1;return!T&&(m>=p||m<=0)?!0:(M>0?m<p:m>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?uv(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var gg=0,jd=1,_g=2;var tf=1,xg=2,qi=3,mr=0,gn=1,Yi=2,vr=0,ws=1,ef=2,nf=3,rf=4,vg=5,$r=100,yg=101,Mg=102,Sg=103,bg=104,Tg=200,wg=201,Eg=202,Ag=203,Ac=204,Cc=205,Cg=206,Rg=207,Pg=208,Ig=209,Lg=210,Dg=211,Ug=212,Ng=213,Fg=214,Qc=0,jc=1,th=2,Es=3,eh=4,nh=5,ih=6,rh=7,sh=0,Og=1,Bg=2,yr=0,kg=1,zg=2,Vg=3,oh=4,Hg=5,Gg=6,Wg=7;var sf=300,Ps=301,Is=302,ah=303,lh=304,rl=306,Rc=1e3,Yr=1001,Pc=1002,Zn=1003,Xg=1004;var sl=1005;var Ri=1006,ch=1007;var Qr=1008;var Ii=1009,of=1010,af=1011,Ro=1012,hh=1013,jr=1014,Li=1015,Po=1016,uh=1017,dh=1018,Io=1020,lf=35902,cf=35899,hf=1021,uf=1022,Si=1023,Mo=1026,Lo=1027,fh=1028,ph=1029,df=1030,mh=1031;var gh=1033,ol=33776,al=33777,ll=33778,cl=33779,_h=35840,xh=35841,vh=35842,yh=35843,Mh=36196,Sh=37492,bh=37496,Th=37808,wh=37809,Eh=37810,Ah=37811,Ch=37812,Rh=37813,Ph=37814,Ih=37815,Lh=37816,Dh=37817,Uh=37818,Nh=37819,Fh=37820,Oh=37821,Bh=36492,kh=36494,zh=36495,Vh=36283,Hh=36284,Gh=36285,Wh=36286;var Aa=2300,Ic=2301,Ec=2302,Wd=2400,Xd=2401,qd=2402;var qg=3200,Yg=3201;var Xh=0,$g=1,Mr="",En="srgb",As="srgb-linear",Ca="linear",Me="srgb";var Ts=7680;var Yd=519,Zg=512,Jg=513,Kg=514,ff=515,Qg=516,jg=517,t_=518,e_=519,$d=35044;var pf="300 es",Ci=2e3,Ra=2001;var gr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var vd=Math.PI/180,Lc=180/Math.PI;function hl(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function _v(r,t){return(r%t+t)%t}function yd(r,t,e){return(1-e)*r+e*t}function va(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $n(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var oe=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_r=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let T=Math.sqrt(S),A=Math.atan2(T,p*M);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}let x=a*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},k=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(qm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(qm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Md.copy(this).projectOnVector(t),this.sub(Md)}reflect(t){return this.sub(Md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Md=new k,qm=new _r,Qt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],T=i[2],A=i[5],w=i[8];return s[0]=o*_+a*M+l*T,s[3]=o*m+a*S+l*A,s[6]=o*p+a*x+l*w,s[1]=c*_+h*M+u*T,s[4]=c*m+h*S+u*A,s[7]=c*p+h*x+u*w,s[2]=d*_+f*M+g*T,s[5]=d*m+f*S+g*A,s[8]=d*p+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sd.makeScale(t,e)),this}rotate(t){return this.premultiply(Sd.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Sd=new Qt;function mf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Pa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function n_(){let r=Pa("canvas");return r.style.display="block",r}var Ym={};function So(r){r in Ym||(Ym[r]=!0,console.warn(r))}function i_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var $m=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xv(){let r={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(i.r=pr(i.r),i.g=pr(i.g),i.b=pr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=yo(i.r),i.g=yo(i.g),i.b=yo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mr?Ca:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return So("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return So("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[As]:{primaries:t,whitePoint:n,transfer:Ca,toXYZ:$m,fromXYZ:Zm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:$m,fromXYZ:Zm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}var de=xv();function pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function yo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var oo,Dc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{oo===void 0&&(oo=Pa("canvas")),oo.width=t.width,oo.height=t.height;let i=oo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=oo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Pa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pr(e[n]/255)*255):e[n]=pr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vv=0,bo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vv++}),this.uuid=hl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(bd(i[o].image)):s.push(bd(i[o]))}else s=bd(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var yv=0,Td=new k,zn=class r extends gr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Yr,i=Yr,s=Ri,o=Qr,a=Si,l=Ii,c=r.DEFAULT_ANISOTROPY,h=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=hl(),this.name="",this.source=new bo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rc:t.x=t.x-Math.floor(t.x);break;case Yr:t.x=t.x<0?0:1;break;case Pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rc:t.y=t.y-Math.floor(t.y);break;case Yr:t.y=t.y<0?0:1;break;case Pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=sf;zn.DEFAULT_ANISOTROPY=1;var ye=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(f+1)/2,T=(p+1)/2,A=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return S>x&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=w/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Uc=class extends gr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new zn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ri,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new bo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zi=class extends Uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ia=class extends zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nc=class extends zn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Zn,this.minFilter=Zn,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vi=class{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wi):wi.fromBufferAttribute(s,o),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sc.copy(n.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ya),oc.subVectors(this.max,ya),ao.subVectors(t.a,ya),lo.subVectors(t.b,ya),co.subVectors(t.c,ya),zr.subVectors(lo,ao),Vr.subVectors(co,lo),ys.subVectors(ao,co);let e=[0,-zr.z,zr.y,0,-Vr.z,Vr.y,0,-ys.z,ys.y,zr.z,0,-zr.x,Vr.z,0,-Vr.x,ys.z,0,-ys.x,-zr.y,zr.x,0,-Vr.y,Vr.x,0,-ys.y,ys.x,0];return!wd(e,ao,lo,co,oc)||(e=[1,0,0,0,1,0,0,0,1],!wd(e,ao,lo,co,oc))?!1:(ac.crossVectors(zr,Vr),e=[ac.x,ac.y,ac.z],wd(e,ao,lo,co,oc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(lr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},lr=[new k,new k,new k,new k,new k,new k,new k,new k],wi=new k,sc=new Vi,ao=new k,lo=new k,co=new k,zr=new k,Vr=new k,ys=new k,ya=new k,oc=new k,ac=new k,Ms=new k;function wd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ms.fromArray(r,s);let a=i.x*Math.abs(Ms.x)+i.y*Math.abs(Ms.y)+i.z*Math.abs(Ms.z),l=t.dot(Ms),c=e.dot(Ms),h=n.dot(Ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Mv=new Vi,Ma=new k,Ed=new k,xr=class{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Mv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ma.subVectors(t,this.center);let e=Ma.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ma,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ma.copy(t.center).add(Ed)),this.expandByPoint(Ma.copy(t.center).sub(Ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cr=new k,Ad=new k,lc=new k,Hr=new k,Cd=new k,cc=new k,Rd=new k,La=class{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=cr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cr.copy(this.origin).addScaledVector(this.direction,e),cr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ad.copy(t).add(e).multiplyScalar(.5),lc.copy(e).sub(t).normalize(),Hr.copy(this.origin).sub(Ad);let s=t.distanceTo(e)*.5,o=-this.direction.dot(lc),a=Hr.dot(this.direction),l=-Hr.dot(lc),c=Hr.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ad).addScaledVector(lc,d),f}intersectSphere(t,e){cr.subVectors(t.center,this.origin);let n=cr.dot(this.direction),i=cr.dot(cr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,cr)!==null}intersectTriangle(t,e,n,i,s){Cd.subVectors(e,t),cc.subVectors(n,t),Rd.crossVectors(Cd,cc);let o=this.direction.dot(Rd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hr.subVectors(this.origin,t);let l=a*this.direction.dot(cc.crossVectors(Hr,cc));if(l<0)return null;let c=a*this.direction.dot(Cd.cross(Hr));if(c<0||l+c>o)return null;let h=-a*Hr.dot(Rd);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ho.setFromMatrixColumn(t,0).length(),s=1/ho.setFromMatrixColumn(t,1).length(),o=1/ho.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sv,t,bv)}lookAt(t,e,n){let i=this.elements;return ai.subVectors(t,e),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Gr.crossVectors(n,ai),Gr.lengthSq()===0&&(Math.abs(n.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Gr.crossVectors(n,ai)),Gr.normalize(),hc.crossVectors(ai,Gr),i[0]=Gr.x,i[4]=hc.x,i[8]=ai.x,i[1]=Gr.y,i[5]=hc.y,i[9]=ai.y,i[2]=Gr.z,i[6]=hc.z,i[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],T=n[15],A=i[0],w=i[4],C=i[8],y=i[12],v=i[1],I=i[5],D=i[9],H=i[13],G=i[2],X=i[6],N=i[10],W=i[14],V=i[3],et=i[7],L=i[11],it=i[15];return s[0]=o*A+a*v+l*G+c*V,s[4]=o*w+a*I+l*X+c*et,s[8]=o*C+a*D+l*N+c*L,s[12]=o*y+a*H+l*W+c*it,s[1]=h*A+u*v+d*G+f*V,s[5]=h*w+u*I+d*X+f*et,s[9]=h*C+u*D+d*N+f*L,s[13]=h*y+u*H+d*W+f*it,s[2]=g*A+_*v+m*G+p*V,s[6]=g*w+_*I+m*X+p*et,s[10]=g*C+_*D+m*N+p*L,s[14]=g*y+_*H+m*W+p*it,s[3]=M*A+S*v+x*G+T*V,s[7]=M*w+S*I+x*X+T*et,s[11]=M*C+S*D+x*N+T*L,s[15]=M*y+S*H+x*W+T*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*M+n*S+i*x+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=M*w,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=S*w,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*w,t[8]=x*w,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=T*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,M=l*c,S=l*h,x=l*u,T=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+x)*T,i[2]=(g-S)*T,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+S)*w,i[9]=(m-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ho.set(i[0],i[1],i[2]).length(),o=ho.set(i[4],i[5],i[6]).length(),a=ho.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ei.copy(this);let c=1/s,h=1/o,u=1/a;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=u,Ei.elements[9]*=u,Ei.elements[10]*=u,e.setFromRotationMatrix(Ei),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ci,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Ci)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ra)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ci,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Ci)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ra)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ho=new k,Ei=new Ce,Sv=new k(0,0,0),bv=new k(1,1,1),Gr=new k,hc=new k,ai=new k,Jm=new Ce,Km=new _r,Mi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Km.setFromEuler(this),this.setFromQuaternion(Km,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tv=0,Qm=new k,uo=new _r,hr=new Ce,uc=new k,Sa=new k,wv=new k,Ev=new _r,jm=new k(1,0,0),tg=new k(0,1,0),eg=new k(0,0,1),ng={type:"added"},Av={type:"removed"},fo={type:"childadded",child:null},Pd={type:"childremoved",child:null},hn=class r extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=hl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new k,e=new Mi,n=new _r,i=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Qt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return uo.setFromAxisAngle(t,e),this.quaternion.multiply(uo),this}rotateOnWorldAxis(t,e){return uo.setFromAxisAngle(t,e),this.quaternion.premultiply(uo),this}rotateX(t){return this.rotateOnAxis(jm,t)}rotateY(t){return this.rotateOnAxis(tg,t)}rotateZ(t){return this.rotateOnAxis(eg,t)}translateOnAxis(t,e){return Qm.copy(t).applyQuaternion(this.quaternion),this.position.add(Qm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(jm,t)}translateY(t){return this.translateOnAxis(tg,t)}translateZ(t){return this.translateOnAxis(eg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?uc.copy(t):uc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Sa,uc,this.up):hr.lookAt(uc,Sa,this.up),this.quaternion.setFromRotationMatrix(hr),i&&(hr.extractRotation(i.matrixWorld),uo.setFromRotationMatrix(hr),this.quaternion.premultiply(uo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ng),fo.child=t,this.dispatchEvent(fo),fo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Av),Pd.child=t,this.dispatchEvent(Pd),Pd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hr.multiply(t.parent.matrixWorld)),t.applyMatrix4(hr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ng),fo.child=t,this.dispatchEvent(fo),fo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,wv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,Ev,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};hn.DEFAULT_UP=new k(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ai=new k,ur=new k,Id=new k,dr=new k,po=new k,mo=new k,ig=new k,Ld=new k,Dd=new k,Ud=new k,Nd=new ye,Fd=new ye,Od=new ye,qr=class r{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ai.subVectors(t,e),i.cross(Ai);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ai.subVectors(i,e),ur.subVectors(n,e),Id.subVectors(t,e);let o=Ai.dot(Ai),a=Ai.dot(ur),l=Ai.dot(Id),c=ur.dot(ur),h=ur.dot(Id),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,dr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,dr.x),l.addScaledVector(o,dr.y),l.addScaledVector(a,dr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Nd.setScalar(0),Fd.setScalar(0),Od.setScalar(0),Nd.fromBufferAttribute(t,e),Fd.fromBufferAttribute(t,n),Od.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Nd,s.x),o.addScaledVector(Fd,s.y),o.addScaledVector(Od,s.z),o}static isFrontFacing(t,e,n,i){return Ai.subVectors(n,e),ur.subVectors(t,e),Ai.cross(ur).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ai.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;po.subVectors(i,n),mo.subVectors(s,n),Ld.subVectors(t,n);let l=po.dot(Ld),c=mo.dot(Ld);if(l<=0&&c<=0)return e.copy(n);Dd.subVectors(t,i);let h=po.dot(Dd),u=mo.dot(Dd);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(po,o);Ud.subVectors(t,s);let f=po.dot(Ud),g=mo.dot(Ud);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(mo,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return ig.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(ig,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(po,o).addScaledVector(mo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},r_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Bd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=En){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=_v(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Bd(o,s,t+1/3),this.g=Bd(o,s,t),this.b=Bd(o,s,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=En){let n=r_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pr(t.r),this.g=pr(t.g),this.b=pr(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=En){return de.workingToColorSpace(wn.copy(this),t),Math.round(he(wn.r*255,0,255))*65536+Math.round(he(wn.g*255,0,255))*256+Math.round(he(wn.b*255,0,255))}getHexString(t=En){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(wn.copy(this),e);let n=wn.r,i=wn.g,s=wn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=En){de.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,i=wn.b;return t!==En?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wr),this.setHSL(Wr.h+t,Wr.s+e,Wr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wr),t.getHSL(dc);let n=yd(Wr.h,dc.h,e),i=yd(Wr.s,dc.s,e),s=yd(Wr.l,dc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Kt;Kt.NAMES=r_;var Cv=0,Hi=class extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cv++}),this.uuid=hl(),this.name="",this.type="Material",this.blending=ws,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ac,this.blendDst=Cc,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ac&&(n.blendSrc=this.blendSrc),this.blendDst!==Cc&&(n.blendDst=this.blendDst),this.blendEquation!==$r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ua=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var tn=new k,fc=new oe,Rv=0,An=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$d,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fc.fromBufferAttribute(this,e),fc.applyMatrix3(t),this.setXY(e,fc.x,fc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=va(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$n(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=va(e,this.array)),e}setX(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=va(e,this.array)),e}setY(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=va(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=va(e,this.array)),e}setW(t,e){return this.normalized&&(e=$n(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=$n(e,this.array),n=$n(n,this.array),i=$n(i,this.array),s=$n(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$d&&(t.usage=this.usage),t}};var Na=class extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fa=class extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var De=class extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pv=0,yi=new Ce,kd=new hn,go=new k,li=new Vi,ba=new Vi,cn=new k,Cn=class r extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pv++}),this.uuid=hl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mf(t)?Fa:Na)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return yi.makeRotationFromQuaternion(t),this.applyMatrix4(yi),this}rotateX(t){return yi.makeRotationX(t),this.applyMatrix4(yi),this}rotateY(t){return yi.makeRotationY(t),this.applyMatrix4(yi),this}rotateZ(t){return yi.makeRotationZ(t),this.applyMatrix4(yi),this}translate(t,e,n){return yi.makeTranslation(t,e,n),this.applyMatrix4(yi),this}scale(t,e,n){return yi.makeScale(t,e,n),this.applyMatrix4(yi),this}lookAt(t){return kd.lookAt(t),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(go).negate(),this.translate(go.x,go.y,go.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];li.setFromBufferAttribute(s),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ba.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(li.min,ba.min),li.expandByPoint(cn),cn.addVectors(li.max,ba.max),li.expandByPoint(cn)):(li.expandByPoint(ba.min),li.expandByPoint(ba.max))}li.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)cn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(cn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)cn.fromBufferAttribute(a,c),l&&(go.fromBufferAttribute(t,c),cn.add(go)),i=Math.max(i,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new k,l[C]=new k;let c=new k,h=new k,u=new k,d=new oe,f=new oe,g=new oe,_=new k,m=new k;function p(C,y,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[y].add(_),a[v].add(_),l[C].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){let v=M[C],I=v.start,D=v.count;for(let H=I,G=I+D;H<G;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let S=new k,x=new k,T=new k,A=new k;function w(C){T.fromBufferAttribute(i,C),A.copy(T);let y=a[C];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(A,y);let I=x.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,I)}for(let C=0,y=M.length;C<y;++C){let v=M[C],I=v.start,D=v.count;for(let H=I,G=I+D;H<G;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,u=new k;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)cn.fromBufferAttribute(t,e),cn.normalize(),t.setXYZ(e,cn.x,cn.y,cn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new An(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rg=new Ce,Ss=new La,pc=new xr,sg=new k,mc=new k,gc=new k,_c=new k,zd=new k,xc=new k,og=new k,vc=new k,Ae=class extends hn{constructor(t=new Cn,e=new Ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){xc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(zd.fromBufferAttribute(u,t),o?xc.addScaledVector(zd,h):xc.addScaledVector(zd.sub(e),h))}e.add(xc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(s),Ss.copy(t.ray).recast(t.near),!(pc.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(pc,sg)===null||Ss.origin.distanceToSquared(sg)>(t.far-t.near)**2))&&(rg.copy(s).invert(),Ss.copy(t.ray).applyMatrix4(rg),!(n.boundingBox!==null&&Ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=S;x<T;x+=3){let A=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);i=yc(this,p,t,n,c,h,u,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=yc(this,o,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=S;x<T;x+=3){let A=x,w=x+1,C=x+2;i=yc(this,p,t,n,c,h,u,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,S=m+1,x=m+2;i=yc(this,o,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Iv(r,t,e,n,i,s,o,a){let l;if(t.side===gn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===mr,a),l===null)return null;vc.copy(a),vc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(vc);return c<e.near||c>e.far?null:{distance:c,point:vc.clone(),object:r}}function yc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,mc),r.getVertexPosition(l,gc),r.getVertexPosition(c,_c);let h=Iv(r,t,e,n,mc,gc,_c,og);if(h){let u=new k;qr.getBarycoord(og,mc,gc,_c,u),i&&(h.uv=qr.getInterpolatedAttribute(i,a,l,c,u,new oe)),s&&(h.uv1=qr.getInterpolatedAttribute(s,a,l,c,u,new oe)),o&&(h.normal=qr.getInterpolatedAttribute(o,a,l,c,u,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new k,materialIndex:0};qr.getNormal(mc,gc,_c,d.normal),h.face=d,h.barycoord=u}return h}var Gi=class r extends Cn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function g(_,m,p,M,S,x,T,A,w,C,y){let v=x/w,I=T/C,D=x/2,H=T/2,G=A/2,X=w+1,N=C+1,W=0,V=0,et=new k;for(let L=0;L<N;L++){let it=L*I-H;for(let Ut=0;Ut<X;Ut++){let ae=Ut*v-D;et[_]=ae*M,et[m]=it*S,et[p]=G,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=A>0?1:-1,h.push(et.x,et.y,et.z),u.push(Ut/w),u.push(1-L/C),W+=1}}for(let L=0;L<C;L++)for(let it=0;it<w;it++){let Ut=d+it+X*L,ae=d+it+X*(L+1),Xt=d+(it+1)+X*(L+1),Wt=d+(it+1)+X*L;l.push(Ut,ae,Wt),l.push(ae,Xt,Wt),V+=6}a.addGroup(f,V,y),f+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ls(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Rn(r){let t={};for(let e=0;e<r.length;e++){let n=Ls(r[e]);for(let i in n)t[i]=n[i]}return t}function Lv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function gf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var s_={clone:Ls,merge:Rn},Dv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dv,this.fragmentShader=Uv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ls(t.uniforms),this.uniformsGroups=Lv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Oa=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xr=new k,ag=new oe,lg=new oe,mn=class extends Oa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Lc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xr.x,Xr.y).multiplyScalar(-t/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xr.x,Xr.y).multiplyScalar(-t/Xr.z)}getViewSize(t,e){return this.getViewBounds(t,ag,lg),e.subVectors(lg,ag)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vd*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_o=-90,xo=1,Fc=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new mn(_o,xo,t,e);i.layers=this.layers,this.add(i);let s=new mn(_o,xo,t,e);s.layers=this.layers,this.add(s);let o=new mn(_o,xo,t,e);o.layers=this.layers,this.add(o);let a=new mn(_o,xo,t,e);a.layers=this.layers,this.add(a);let l=new mn(_o,xo,t,e);l.layers=this.layers,this.add(l);let c=new mn(_o,xo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ba=class extends zn{constructor(t=[],e=Ps,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oc=class extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ba(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gi(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:vr});s.uniforms.tEquirect.value=e;let o=new Ae(i,s),a=e.minFilter;return e.minFilter===Qr&&(e.minFilter=Ri),new Fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},fr=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nv={type:"move"},To=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Cs=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Bc=class extends zn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Zn,h=Zn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ka=class extends An{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},vo=new Ce,cg=new Ce,Mc=[],hg=new Vi,Fv=new Ce,Ta=new Ae,wa=new xr,za=class extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ka(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vo),hg.copy(t.boundingBox).applyMatrix4(vo),this.boundingBox.union(hg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,vo),wa.copy(t.boundingSphere).applyMatrix4(vo),this.boundingSphere.union(wa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(n),t.ray.intersectsSphere(wa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,vo),cg.multiplyMatrices(n,vo),Ta.matrixWorld=cg,Ta.raycast(t,Mc);for(let o=0,a=Mc.length;o<a;o++){let l=Mc[o];l.instanceId=s,l.object=this,e.push(l)}Mc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ka(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bc(new Float32Array(i*this.count),i,this.count,fh,Li));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vd=new k,Ov=new k,Bv=new Qt,ki=class{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Vd.subVectors(n,e).cross(Ov.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Vd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Bv.getNormalMatrix(t),i=this.coplanarPoint(Vd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},bs=new xr,kv=new oe(.5,.5),Sc=new k,wo=class{constructor(t=new ki,e=new ki,n=new ki,i=new ki,s=new ki,o=new ki){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ci,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],S=s[13],x=s[14],T=s[15];if(i[0].setComponents(c-o,f-h,p-g,T-M).normalize(),i[1].setComponents(c+o,f+h,p+g,T+M).normalize(),i[2].setComponents(c+a,f+u,p+_,T+S).normalize(),i[3].setComponents(c-a,f-u,p-_,T-S).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,T-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-x).normalize(),e===Ci)i[5].setComponents(c+l,f+d,p+m,T+x).normalize();else if(e===Ra)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=kv.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Sc.x=i.normal.x>0?t.max.x:t.min.x,Sc.y=i.normal.y>0?t.max.y:t.min.y,Sc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Eo=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ug=new Ce,Zd=new La,bc=new xr,Tc=new k,Va=class extends hn{constructor(t=new Cn,e=new Eo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),bc.copy(n.boundingSphere),bc.applyMatrix4(i),bc.radius+=s,t.ray.intersectsSphere(bc)===!1)return;ug.copy(i).invert(),Zd.copy(t.ray).applyMatrix4(ug);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);Tc.fromBufferAttribute(u,m),dg(Tc,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Tc.fromBufferAttribute(u,g),dg(Tc,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function dg(r,t,e,n,i,s,o){let a=Zd.distanceSqToPoint(r);if(a<e){let l=new k;Zd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ha=class extends zn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ga=class extends zn{constructor(t,e,n=jr,i,s,o,a=Zn,l=Zn,c,h=Mo,u=1){if(h!==Mo&&h!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Wa=class extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ao=class r extends Cn{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function M(){let x=new k,T=new k,A=0,w=(e-t)/n;for(let C=0;C<=s;C++){let y=[],v=C/s,I=v*(e-t)+t;for(let D=0;D<=i;D++){let H=D/i,G=H*l+a,X=Math.sin(G),N=Math.cos(G);T.x=I*X,T.y=-v*n+m,T.z=I*N,u.push(T.x,T.y,T.z),x.set(X,w,N).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-v),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){let v=_[y][C],I=_[y+1][C],D=_[y+1][C+1],H=_[y][C+1];(t>0||y!==0)&&(h.push(v,I,H),A+=3),(e>0||y!==s-1)&&(h.push(I,D,H),A+=3)}c.addGroup(p,A,0),p+=A}function S(x){let T=g,A=new oe,w=new k,C=0,y=x===!0?t:e,v=x===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let I=g;for(let D=0;D<=i;D++){let G=D/i*l+a,X=Math.cos(G),N=Math.sin(G);w.x=y*N,w.y=m*v,w.z=y*X,u.push(w.x,w.y,w.z),d.push(0,v,0),A.x=X*.5+.5,A.y=N*.5*v+.5,f.push(A.x,A.y),g++}for(let D=0;D<i;D++){let H=T+D,G=I+D;x===!0?h.push(G,G+1,H):h.push(G+1,G,H),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xa=class r extends Ao{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qa=class r extends Cn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new k,x=new k,T=new k;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],x),f(e[A+2],T),l(S,x,T,M)}function l(M,S,x,T){let A=T+1,w=[];for(let C=0;C<=A;C++){w[C]=[];let y=M.clone().lerp(x,C/A),v=S.clone().lerp(x,C/A),I=A-C;for(let D=0;D<=I;D++)D===0&&C===A?w[C][D]=y:w[C][D]=y.clone().lerp(v,D/I)}for(let C=0;C<A;C++)for(let y=0;y<2*(A-C)-1;y++){let v=Math.floor(y/2);y%2===0?(d(w[C][v+1]),d(w[C+1][v]),d(w[C][v])):(d(w[C][v+1]),d(w[C+1][v+1]),d(w[C+1][v]))}}function c(M){let S=new k;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(M),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){let M=new k;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];let x=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(x,1-T)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],x=o[M+2],T=o[M+4],A=Math.max(S,x,T),w=Math.min(S,x,T);A>.9&&w<.1&&(S<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,S){let x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){let M=new k,S=new k,x=new k,T=new k,A=new oe,w=new oe,C=new oe;for(let y=0,v=0;y<s.length;y+=9,v+=6){M.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),A.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),T.copy(M).add(S).add(x).divideScalar(3);let I=m(T);_(A,v+0,M,I),_(w,v+2,S,I),_(C,v+4,x,I)}}function _(M,S,x,T){T<0&&M.x===1&&(o[S]=M.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Ya=class r extends qa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var $a=class r extends qa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Za=class r extends Cn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let S=0;S<c;S++){let x=S*u-s;g.push(x,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let S=M+c*p,x=M+c*(p+1),T=M+1+c*(p+1),A=M+1+c*p;f.push(S,x,A),f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ja=class r extends Cn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new k,d=new k,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let A=T/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let S=h[p][M+1],x=h[p][M],T=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||l<Math.PI)&&f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Co=class r extends Cn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new k,u=new k,d=new k;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ka=class r extends Cn{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new k,d=new k,f=new k,g=new k,_=new k,m=new k,p=new k;for(let S=0;S<=n;++S){let x=S/n*s*Math.PI*2;M(x,s,o,t,f),M(x+.01,s,o,t,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let T=0;T<=i;++T){let A=T/i*Math.PI*2,w=-e*Math.cos(A),C=e*Math.sin(A);u.x=f.x+(w*p.x+C*_.x),u.y=f.y+(w*p.y+C*_.y),u.z=f.z+(w*p.z+C*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(S/n),h.push(T/i)}}for(let S=1;S<=n;S++)for(let x=1;x<=i;x++){let T=(i+1)*(S-1)+(x-1),A=(i+1)*S+(x-1),w=(i+1)*S+x,C=(i+1)*(S-1)+x;a.push(T,A,C),a.push(A,w,C)}this.setIndex(a),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2));function M(S,x,T,A,w){let C=Math.cos(S),y=Math.sin(S),v=T/x*S,I=Math.cos(v);w.x=A*(2+I)*.5*C,w.y=A*(2+I)*y*.5,w.z=A*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var Wi=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xi=class extends Wi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Qa=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},kc=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zc=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function wc(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function zv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Rs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Vc=class extends Rs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wd,endingEnd:Wd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Xd:s=t,a=2*e-n;break;case qd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Xd:o=t,l=2*n-e;break;case qd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+M*o[c+T]+S*o[l+T]+x*o[u+T];return s}},Hc=class extends Rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Gc=class extends Rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ci=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=wc(e,this.TimeBufferType),this.values=wc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:wc(t.times,Array),values:wc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Aa:e=this.InterpolantFactoryMethodDiscrete;break;case Ic:e=this.InterpolantFactoryMethodLinear;break;case Ec:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Aa;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return Ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&zv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ec,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=Ic;var Zr=class extends ci{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Aa;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};Wc.prototype.ValueTypeName="color";var Xc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};Xc.prototype.ValueTypeName="number";var qc=class extends Rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)_r.slerpFlat(s,0,o,c-a,o,c,l);return s}},ja=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}};ja.prototype.ValueTypeName="quaternion";ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends ci{constructor(t,e,n){super(t,e,n)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Aa;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Yc=class extends ci{constructor(t,e,n,i){super(t,e,n,i)}};Yc.prototype.ValueTypeName="vector";var $c=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},o_=new $c,Zc=class{constructor(t){this.manager=t!==void 0?t:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zc.DEFAULT_MATERIAL_NAME="__DEFAULT";var tl=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Hd=new Ce,fg=new k,pg=new k,Jc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;fg.setFromMatrixPosition(t.matrixWorld),e.position.copy(fg),pg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(pg),e.updateMatrixWorld(),Hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var mg=new Ce,Ea=new k,Gd=new k,Jd=class extends Jc{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ea.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ea),Gd.copy(n.position),Gd.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Gd),n.updateMatrixWorld(),i.makeTranslation(-Ea.x,-Ea.y,-Ea.z),mg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mg,n.coordinateSystem,n.reversedDepth)}},Kr=class extends tl{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},el=class extends Oa{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Kd=class extends Jc{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},nl=class extends tl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new Kd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kc=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},il=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var _f="\\[\\]\\.:\\/",Vv=new RegExp("["+_f+"]","g"),xf="[^"+_f+"]",Hv="[^"+_f.replace("\\.","")+"]",Gv=/((?:WC+[\/:])*)/.source.replace("WC",xf),Wv=/(WCOD+)?/.source.replace("WCOD",Hv),Xv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),Yv=new RegExp("^"+Gv+Wv+Xv+qv+"$"),$v=["material","materials","bones","map"],Qd=class{constructor(t,e,n){let i=n||Le.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Le=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Vv,"")}static parseTrackName(t){let e=Yv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);$v.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Le.Composite=Qd;Le.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Le.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Le.prototype.GetterByBindingType=[Le.prototype._getValue_direct,Le.prototype._getValue_array,Le.prototype._getValue_arrayElement,Le.prototype._getValue_toArray];Le.prototype.SetterByBindingTypeAndVersioning=[[Le.prototype._setValue_direct,Le.prototype._setValue_direct_setNeedsUpdate,Le.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_array,Le.prototype._setValue_array_setNeedsUpdate,Le.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_arrayElement,Le.prototype._setValue_arrayElement_setNeedsUpdate,Le.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Le.prototype._setValue_fromArray,Le.prototype._setValue_fromArray_setNeedsUpdate,Le.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hw=new Float32Array(1);function vf(r,t,e,n){let i=Zv(n);switch(e){case hf:return r*t;case fh:return r*t/i.components*i.byteLength;case ph:return r*t/i.components*i.byteLength;case df:return r*t*2/i.components*i.byteLength;case mh:return r*t*2/i.components*i.byteLength;case uf:return r*t*3/i.components*i.byteLength;case Si:return r*t*4/i.components*i.byteLength;case gh:return r*t*4/i.components*i.byteLength;case ol:case al:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ll:case cl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xh:case yh:return Math.max(r,16)*Math.max(t,8)/4;case _h:case vh:return Math.max(r,8)*Math.max(t,8)/2;case Mh:case Sh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Th:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Eh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ah:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ch:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ph:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ih:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Lh:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Fh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Bh:case kh:case zh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Vh:case Hh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Gh:case Wh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zv(r){switch(r){case Ii:case of:return{byteLength:1,components:1};case Ro:case af:case Po:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case jr:case hh:case Li:return{byteLength:4,components:1};case lf:case cf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function P_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Kv(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jv=`#ifdef USE_ALPHAHASH
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
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ey=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
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
#endif`,sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
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
#endif`,ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,uy=`#ifdef USE_IRIDESCENCE
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
#endif`,dy=`#ifdef USE_BUMPMAP
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_y=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,My=`#define PI 3.141592653589793
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
} // validated`,Sy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,by=`vec3 transformedNormal = objectNormal;
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
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ey=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ay=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ry=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Py=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ly=`#ifdef USE_ENVMAP
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
#endif`,Dy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Oy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ky=`#ifdef USE_GRADIENTMAP
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
}`,zy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gy=`uniform bool receiveShadow;
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
#endif`,Wy=`#ifdef USE_ENVMAP
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
#endif`,Xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$y=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zy=`PhysicalMaterial material;
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
#endif`,Jy=`struct PhysicalMaterial {
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
}`,Ky=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,jy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aM=`#if defined( USE_POINTS_UV )
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
#endif`,lM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,pM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yM=`#ifdef USE_NORMALMAP
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
#endif`,MM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,AM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,PM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,IM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FM=`float getShadowMask() {
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
}`,OM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BM=`#ifdef USE_SKINNING
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
#endif`,kM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zM=`#ifdef USE_SKINNING
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
#endif`,VM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,XM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#ifdef USE_TRANSMISSION
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
#endif`,YM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,KM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QM=`uniform sampler2D t2D;
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
}`,jM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`#include <common>
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
}`,rS=`#if DEPTH_PACKING == 3200
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
}`,sS=`#define DISTANCE
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
}`,oS=`#define DISTANCE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cS=`uniform float scale;
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
}`,hS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#define LAMBERT
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
}`,pS=`#define LAMBERT
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
}`,mS=`#define MATCAP
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
}`,gS=`#define MATCAP
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
}`,_S=`#define NORMAL
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
}`,xS=`#define NORMAL
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
}`,vS=`#define PHONG
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
}`,yS=`#define PHONG
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
}`,MS=`#define STANDARD
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
}`,SS=`#define STANDARD
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
}`,bS=`#define TOON
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
}`,TS=`#define TOON
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
}`,wS=`uniform float size;
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
}`,ES=`uniform vec3 diffuse;
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
}`,AS=`#include <common>
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
}`,CS=`uniform vec3 color;
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
}`,RS=`uniform float rotation;
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
}`,PS=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:Qv,alphahash_pars_fragment:jv,alphamap_fragment:ty,alphamap_pars_fragment:ey,alphatest_fragment:ny,alphatest_pars_fragment:iy,aomap_fragment:ry,aomap_pars_fragment:sy,batching_pars_vertex:oy,batching_vertex:ay,begin_vertex:ly,beginnormal_vertex:cy,bsdfs:hy,iridescence_fragment:uy,bumpmap_pars_fragment:dy,clipping_planes_fragment:fy,clipping_planes_pars_fragment:py,clipping_planes_pars_vertex:my,clipping_planes_vertex:gy,color_fragment:_y,color_pars_fragment:xy,color_pars_vertex:vy,color_vertex:yy,common:My,cube_uv_reflection_fragment:Sy,defaultnormal_vertex:by,displacementmap_pars_vertex:Ty,displacementmap_vertex:wy,emissivemap_fragment:Ey,emissivemap_pars_fragment:Ay,colorspace_fragment:Cy,colorspace_pars_fragment:Ry,envmap_fragment:Py,envmap_common_pars_fragment:Iy,envmap_pars_fragment:Ly,envmap_pars_vertex:Dy,envmap_physical_pars_fragment:Wy,envmap_vertex:Uy,fog_vertex:Ny,fog_pars_vertex:Fy,fog_fragment:Oy,fog_pars_fragment:By,gradientmap_pars_fragment:ky,lightmap_pars_fragment:zy,lights_lambert_fragment:Vy,lights_lambert_pars_fragment:Hy,lights_pars_begin:Gy,lights_toon_fragment:Xy,lights_toon_pars_fragment:qy,lights_phong_fragment:Yy,lights_phong_pars_fragment:$y,lights_physical_fragment:Zy,lights_physical_pars_fragment:Jy,lights_fragment_begin:Ky,lights_fragment_maps:Qy,lights_fragment_end:jy,logdepthbuf_fragment:tM,logdepthbuf_pars_fragment:eM,logdepthbuf_pars_vertex:nM,logdepthbuf_vertex:iM,map_fragment:rM,map_pars_fragment:sM,map_particle_fragment:oM,map_particle_pars_fragment:aM,metalnessmap_fragment:lM,metalnessmap_pars_fragment:cM,morphinstance_vertex:hM,morphcolor_vertex:uM,morphnormal_vertex:dM,morphtarget_pars_vertex:fM,morphtarget_vertex:pM,normal_fragment_begin:mM,normal_fragment_maps:gM,normal_pars_fragment:_M,normal_pars_vertex:xM,normal_vertex:vM,normalmap_pars_fragment:yM,clearcoat_normal_fragment_begin:MM,clearcoat_normal_fragment_maps:SM,clearcoat_pars_fragment:bM,iridescence_pars_fragment:TM,opaque_fragment:wM,packing:EM,premultiplied_alpha_fragment:AM,project_vertex:CM,dithering_fragment:RM,dithering_pars_fragment:PM,roughnessmap_fragment:IM,roughnessmap_pars_fragment:LM,shadowmap_pars_fragment:DM,shadowmap_pars_vertex:UM,shadowmap_vertex:NM,shadowmask_pars_fragment:FM,skinbase_vertex:OM,skinning_pars_vertex:BM,skinning_vertex:kM,skinnormal_vertex:zM,specularmap_fragment:VM,specularmap_pars_fragment:HM,tonemapping_fragment:GM,tonemapping_pars_fragment:WM,transmission_fragment:XM,transmission_pars_fragment:qM,uv_pars_fragment:YM,uv_pars_vertex:$M,uv_vertex:ZM,worldpos_vertex:JM,background_vert:KM,background_frag:QM,backgroundCube_vert:jM,backgroundCube_frag:tS,cube_vert:eS,cube_frag:nS,depth_vert:iS,depth_frag:rS,distanceRGBA_vert:sS,distanceRGBA_frag:oS,equirect_vert:aS,equirect_frag:lS,linedashed_vert:cS,linedashed_frag:hS,meshbasic_vert:uS,meshbasic_frag:dS,meshlambert_vert:fS,meshlambert_frag:pS,meshmatcap_vert:mS,meshmatcap_frag:gS,meshnormal_vert:_S,meshnormal_frag:xS,meshphong_vert:vS,meshphong_frag:yS,meshphysical_vert:MS,meshphysical_frag:SS,meshtoon_vert:bS,meshtoon_frag:TS,points_vert:wS,points_frag:ES,shadow_vert:AS,shadow_frag:CS,sprite_vert:RS,sprite_frag:PS},gt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},$i={basic:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Rn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Rn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Rn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Rn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Rn([gt.points,gt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Rn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Rn([gt.common,gt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Rn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Rn([gt.sprite,gt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:Rn([gt.common,gt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:Rn([gt.lights,gt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};$i.physical={uniforms:Rn([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var qh={r:0,b:0,g:0},Ds=new Mi,IS=new Ce;function LS(r,t,e,n,i,s,o){let a=new Kt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1,T=g(S);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){let T=g(x);T&&(T.isCubeTexture||T.mapping===rl)?(h===void 0&&(h=new Ae(new Gi(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Ls($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ds.copy(x.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(IS.makeRotationFromEuler(Ds)),h.material.toneMapped=de.getTransfer(T.colorSpace)!==Me,(u!==T||d!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ae(new Za(2,2),new Pi({name:"BackgroundMaterial",uniforms:Ls($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(T.colorSpace)!==Me,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(qh,gf(r)),n.buffers.color.setClear(qh.r,qh.g,qh.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:M}}function DS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(v,I,D,H,G){let X=!1,N=u(H,D,I);s!==N&&(s=N,c(s.object)),X=f(v,H,D,G),X&&g(v,H,D,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(v,I,D,H),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,I,D){let H=D.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let X=G[I.id];X===void 0&&(X={},G[I.id]=X);let N=X[H];return N===void 0&&(N=d(l()),X[H]=N),N}function d(v){let I=[],D=[],H=[];for(let G=0;G<e;G++)I[G]=0,D[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:D,attributeDivisors:H,object:v,attributes:{},index:null}}function f(v,I,D,H){let G=s.attributes,X=I.attributes,N=0,W=D.getAttributes();for(let V in W)if(W[V].location>=0){let L=G[V],it=X[V];if(it===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),L===void 0||L.attribute!==it||it&&L.data!==it.data)return!0;N++}return s.attributesNum!==N||s.index!==H}function g(v,I,D,H){let G={},X=I.attributes,N=0,W=D.getAttributes();for(let V in W)if(W[V].location>=0){let L=X[V];L===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(L=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(L=v.instanceColor));let it={};it.attribute=L,L&&L.data&&(it.data=L.data),G[V]=it,N++}s.attributes=G,s.attributesNum=N,s.index=H}function _(){let v=s.newAttributes;for(let I=0,D=v.length;I<D;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let D=s.newAttributes,H=s.enabledAttributes,G=s.attributeDivisors;D[v]=1,H[v]===0&&(r.enableVertexAttribArray(v),H[v]=1),G[v]!==I&&(r.vertexAttribDivisor(v,I),G[v]=I)}function M(){let v=s.newAttributes,I=s.enabledAttributes;for(let D=0,H=I.length;D<H;D++)I[D]!==v[D]&&(r.disableVertexAttribArray(D),I[D]=0)}function S(v,I,D,H,G,X,N){N===!0?r.vertexAttribIPointer(v,I,D,G,X):r.vertexAttribPointer(v,I,D,H,G,X)}function x(v,I,D,H){_();let G=H.attributes,X=D.getAttributes(),N=I.defaultAttributeValues;for(let W in X){let V=X[W];if(V.location>=0){let et=G[W];if(et===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let L=et.normalized,it=et.itemSize,Ut=t.get(et);if(Ut===void 0)continue;let ae=Ut.buffer,Xt=Ut.type,Wt=Ut.bytesPerElement,Z=Xt===r.INT||Xt===r.UNSIGNED_INT||et.gpuType===hh;if(et.isInterleavedBufferAttribute){let K=et.data,ft=K.stride,At=et.offset;if(K.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)p(V.location+Tt,K.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)m(V.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let Tt=0;Tt<V.locationSize;Tt++)S(V.location+Tt,it/V.locationSize,Xt,L,ft*Wt,(At+it/V.locationSize*Tt)*Wt,Z)}else{if(et.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,et.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let K=0;K<V.locationSize;K++)S(V.location+K,it/V.locationSize,Xt,L,it*Wt,it/V.locationSize*K*Wt,Z)}}else if(N!==void 0){let L=N[W];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(V.location,L);break;case 3:r.vertexAttrib3fv(V.location,L);break;case 4:r.vertexAttrib4fv(V.location,L);break;default:r.vertexAttrib1fv(V.location,L)}}}}M()}function T(){C();for(let v in n){let I=n[v];for(let D in I){let H=I[D];for(let G in H)h(H[G].object),delete H[G];delete I[D]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let D in I){let H=I[D];for(let G in H)h(H[G].object),delete H[G];delete I[D]}delete n[v.id]}function w(v){for(let I in n){let D=n[I];if(D[v.id]===void 0)continue;let H=D[v.id];for(let G in H)h(H[G].object),delete H[G];delete D[v.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function US(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function NS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Si&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Po&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ii&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Li&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function FS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new ki,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,S=M*4,x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let T=0;T!==S;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function OS(r){let t=new WeakMap;function e(o,a){return a===ah?o.mapping=Ps:a===lh&&(o.mapping=Is),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ah||a===lh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Oc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Uo=4,a_=[.125,.215,.35,.446,.526,.582],Fs=20,yf=new el,l_=new Kt,Mf=null,Sf=0,bf=0,Tf=!1,Ns=(1+Math.sqrt(5))/2,Do=1/Ns,c_=[new k(-Ns,Do,0),new k(Ns,Do,0),new k(-Do,0,Ns),new k(Do,0,Ns),new k(0,Ns,-Do),new k(0,Ns,Do),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],BS=new k,Fo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=BS}=s;Mf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=u_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mf,Sf,bf),this._renderer.xr.enabled=Tf,t.scissorTest=!1,Yh(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ps||t.mapping===Is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),Tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:Po,format:Si,colorSpace:As,depthBuffer:!1},i=h_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kS(s)),this._blurMaterial=zS(s,t,e)}return i}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,yf)}_sceneToCubeUV(t,e,n,i,s){let l=new mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(l_),u.toneMapping=yr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let _=new Ua({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),m=new Ae(new Gi,_),p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(l_),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let T=this._cubeSize;Yh(i,x*T,S>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Ps||t.mapping===Is;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=d_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=u_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Yh(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,yf)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=c_[(i-s-1)%c_.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Fs-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Fs;m>Fs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fs}`);let p=[],M=0;for(let w=0;w<Fs;++w){let C=w/_,y=Math.exp(-C*C/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let x=this._sizeLods[i],T=3*x*(i>S-Uo?i-S+Uo:0),A=4*(this._cubeSize-x);Yh(e,T,A,3*x,2*x),l.setRenderTarget(e),l.render(u,yf)}};function kS(r){let t=[],e=[],n=[],i=r,s=r-Uo+1+a_.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Uo?l=a_[o-r+Uo-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let w=A%3*2/3-1,C=A>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(y,_*g*A),S.set(d,m*g*A);let v=[A,A,A,A,A,A];x.set(v,p*g*A)}let T=new Cn;T.setAttribute("position",new An(M,_)),T.setAttribute("uv",new An(S,m)),T.setAttribute("faceIndex",new An(x,p)),t.push(T),i>Uo&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function h_(r,t,e){let n=new zi(r,t,e);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yh(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function zS(r,t,e){let n=new Float32Array(Fs),i=new k(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function u_(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function d_(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Uf(){return`

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
	`}function VS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ah||l===lh,h=l===Ps||l===Is;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Fo(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Fo(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function HS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&So("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function GS(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){let T=M[S+0],A=M[S+1],w=M[S+2];d.push(T,A,A,w,w,T)}}else if(g!==void 0){let M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){let T=S+0,A=S+1,w=S+2;d.push(T,A,A,w,w,T)}}else return;let m=new(mf(d)?Fa:Na)(d,1);m.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function WS(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function XS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function qS(r,t,e){let n=new WeakMap,i=new ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*T*4*u),w=new Ia(A,x,T,u);w.type=Li,w.needsUpdate=!0;let C=S*4;for(let v=0;v<u;v++){let I=m[v],D=p[v],H=M[v],G=x*T*4*v;for(let X=0;X<I.count;X++){let N=X*C;f===!0&&(i.fromBufferAttribute(I,X),A[G+N+0]=i.x,A[G+N+1]=i.y,A[G+N+2]=i.z,A[G+N+3]=0),g===!0&&(i.fromBufferAttribute(D,X),A[G+N+4]=i.x,A[G+N+5]=i.y,A[G+N+6]=i.z,A[G+N+7]=0),_===!0&&(i.fromBufferAttribute(H,X),A[G+N+8]=i.x,A[G+N+9]=i.y,A[G+N+10]=i.z,A[G+N+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new oe(x,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function YS(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var I_=new zn,f_=new Ga(1,1),L_=new Ia,D_=new Nc,U_=new Ba,p_=[],m_=[],g_=new Float32Array(16),__=new Float32Array(9),x_=new Float32Array(4);function Oo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=p_[i];if(s===void 0&&(s=new Float32Array(i),p_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function sn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function on(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Jh(r,t){let e=m_[t];e===void 0&&(e=new Int32Array(t),m_[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function $S(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ZS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2fv(this.addr,t),on(e,t)}}function JS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;r.uniform3fv(this.addr,t),on(e,t)}}function KS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4fv(this.addr,t),on(e,t)}}function QS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;x_.set(n),r.uniformMatrix2fv(this.addr,!1,x_),on(e,n)}}function jS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;__.set(n),r.uniformMatrix3fv(this.addr,!1,__),on(e,n)}}function tb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;g_.set(n),r.uniformMatrix4fv(this.addr,!1,g_),on(e,n)}}function eb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function nb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2iv(this.addr,t),on(e,t)}}function ib(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3iv(this.addr,t),on(e,t)}}function rb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4iv(this.addr,t),on(e,t)}}function sb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ob(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;r.uniform2uiv(this.addr,t),on(e,t)}}function ab(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;r.uniform3uiv(this.addr,t),on(e,t)}}function lb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;r.uniform4uiv(this.addr,t),on(e,t)}}function cb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(f_.compareFunction=ff,s=f_):s=I_,e.setTexture2D(t||s,i)}function hb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||D_,i)}function ub(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||U_,i)}function db(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||L_,i)}function fb(r){switch(r){case 5126:return $S;case 35664:return ZS;case 35665:return JS;case 35666:return KS;case 35674:return QS;case 35675:return jS;case 35676:return tb;case 5124:case 35670:return eb;case 35667:case 35671:return nb;case 35668:case 35672:return ib;case 35669:case 35673:return rb;case 5125:return sb;case 36294:return ob;case 36295:return ab;case 36296:return lb;case 35678:case 36198:case 36298:case 36306:case 35682:return cb;case 35679:case 36299:case 36307:return hb;case 35680:case 36300:case 36308:case 36293:return ub;case 36289:case 36303:case 36311:case 36292:return db}}function pb(r,t){r.uniform1fv(this.addr,t)}function mb(r,t){let e=Oo(t,this.size,2);r.uniform2fv(this.addr,e)}function gb(r,t){let e=Oo(t,this.size,3);r.uniform3fv(this.addr,e)}function _b(r,t){let e=Oo(t,this.size,4);r.uniform4fv(this.addr,e)}function xb(r,t){let e=Oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function vb(r,t){let e=Oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function yb(r,t){let e=Oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Mb(r,t){r.uniform1iv(this.addr,t)}function Sb(r,t){r.uniform2iv(this.addr,t)}function bb(r,t){r.uniform3iv(this.addr,t)}function Tb(r,t){r.uniform4iv(this.addr,t)}function wb(r,t){r.uniform1uiv(this.addr,t)}function Eb(r,t){r.uniform2uiv(this.addr,t)}function Ab(r,t){r.uniform3uiv(this.addr,t)}function Cb(r,t){r.uniform4uiv(this.addr,t)}function Rb(r,t,e){let n=this.cache,i=t.length,s=Jh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||I_,s[o])}function Pb(r,t,e){let n=this.cache,i=t.length,s=Jh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||D_,s[o])}function Ib(r,t,e){let n=this.cache,i=t.length,s=Jh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||U_,s[o])}function Lb(r,t,e){let n=this.cache,i=t.length,s=Jh(e,i);sn(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||L_,s[o])}function Db(r){switch(r){case 5126:return pb;case 35664:return mb;case 35665:return gb;case 35666:return _b;case 35674:return xb;case 35675:return vb;case 35676:return yb;case 5124:case 35670:return Mb;case 35667:case 35671:return Sb;case 35668:case 35672:return bb;case 35669:case 35673:return Tb;case 5125:return wb;case 36294:return Eb;case 36295:return Ab;case 36296:return Cb;case 35678:case 36198:case 36298:case 36306:case 35682:return Rb;case 35679:case 36299:case 36307:return Pb;case 35680:case 36300:case 36308:case 36293:return Ib;case 36289:case 36303:case 36311:case 36292:return Lb}}var Ef=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=fb(e.type)}},Af=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Db(e.type)}},Cf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},wf=/(\w+)(\])?(\[|\.)?/g;function v_(r,t){r.seq.push(t),r.map[t.id]=t}function Ub(r,t,e){let n=r.name,i=n.length;for(wf.lastIndex=0;;){let s=wf.exec(n),o=wf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){v_(e,c===void 0?new Ef(a,r,t):new Af(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Cf(a),v_(e,u)),e=u}}}var No=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ub(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function y_(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Nb=37297,Fb=0;function Ob(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var M_=new Qt;function Bb(r){de._getMatrix(M_,de.workingColorSpace,r);let t=`mat3( ${M_.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(r)){case Ca:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function S_(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Ob(r.getShaderSource(t),a)}else return s}function kb(r,t){let e=Bb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zb(r,t){let e;switch(t){case kg:e="Linear";break;case zg:e="Reinhard";break;case Vg:e="Cineon";break;case oh:e="ACESFilmic";break;case Gg:e="AgX";break;case Wg:e="Neutral";break;case Hg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $h=new k;function Vb(){de.getLuminanceCoefficients($h);let r=$h.x.toFixed(4),t=$h.y.toFixed(4),e=$h.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ul).join(`
`)}function Gb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Wb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function ul(r){return r!==""}function b_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function T_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(r){return r.replace(Xb,Yb)}var qb=new Map;function Yb(r,t){let e=ie[t];if(e===void 0){let n=qb.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rf(e)}var $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w_(r){return r.replace($b,Zb)}function Zb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function E_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Jb(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===xg?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===qi&&(t="SHADOWMAP_TYPE_VSM"),t}function Kb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ps:case Is:t="ENVMAP_TYPE_CUBE";break;case rl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Is:t="ENVMAP_MODE_REFRACTION";break}return t}function jb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case sh:t="ENVMAP_BLENDING_MULTIPLY";break;case Og:t="ENVMAP_BLENDING_MIX";break;case Bg:t="ENVMAP_BLENDING_ADD";break}return t}function tT(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function eT(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Jb(e),c=Kb(e),h=Qb(e),u=jb(e),d=tT(e),f=Hb(e),g=Gb(s),_=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ul).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ul).join(`
`),p.length>0&&(p+=`
`)):(m=[E_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ul).join(`
`),p=[E_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yr?"#define TONE_MAPPING":"",e.toneMapping!==yr?ie.tonemapping_pars_fragment:"",e.toneMapping!==yr?zb("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,kb("linearToOutputTexel",e.outputColorSpace),Vb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ul).join(`
`)),o=Rf(o),o=b_(o,e),o=T_(o,e),a=Rf(a),a=b_(a,e),a=T_(a,e),o=w_(o),a=w_(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+o,x=M+p+a,T=y_(i,i.VERTEX_SHADER,S),A=y_(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(A)||"",X=D.trim(),N=H.trim(),W=G.trim(),V=!0,et=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,A);else{let L=S_(i,T,"vertex"),it=S_(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+L+`
`+it)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||W==="")&&(et=!1);et&&(I.diagnostics={runnable:V,programLog:X,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(T),i.deleteShader(A),C=new No(i,_),y=Wb(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Nb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}var nT=0,Pf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new If(t),e.set(t,n)),n}},If=class{constructor(t){this.id=nT++,this.code=t,this.usedTimes=0}};function iT(r,t,e,n,i,s,o){let a=new Da,l=new Pf,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,I,D,H){let G=D.fog,X=H.geometry,N=y.isMeshStandardMaterial?D.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||N),V=W&&W.mapping===rl?W.image.height:null,et=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let L=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=L!==void 0?L.length:0,Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let ae,Xt,Wt,Z;if(et){let _t=$i[et];ae=_t.vertexShader,Xt=_t.fragmentShader}else ae=y.vertexShader,Xt=y.fragmentShader,l.update(y),Wt=l.getVertexShaderID(y),Z=l.getFragmentShaderID(y);let K=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),At=H.isInstancedMesh===!0,Tt=H.isBatchedMesh===!0,kt=!!y.map,fe=!!y.matcap,P=!!W,Yt=!!y.aoMap,Dt=!!y.lightMap,Ct=!!y.bumpMap,F=!!y.normalMap,le=!!y.displacementMap,xt=!!y.emissiveMap,Ht=!!y.metalnessMap,jt=!!y.roughnessMap,ge=y.anisotropy>0,R=y.clearcoat>0,b=y.dispersion>0,z=y.iridescence>0,J=y.sheen>0,Q=y.transmission>0,$=ge&&!!y.anisotropyMap,vt=R&&!!y.clearcoatMap,ot=R&&!!y.clearcoatNormalMap,wt=R&&!!y.clearcoatRoughnessMap,dt=z&&!!y.iridescenceMap,st=z&&!!y.iridescenceThicknessMap,ht=J&&!!y.sheenColorMap,Ft=J&&!!y.sheenRoughnessMap,Et=!!y.specularMap,ct=!!y.specularColorMap,Gt=!!y.specularIntensityMap,U=Q&&!!y.transmissionMap,rt=Q&&!!y.thicknessMap,at=!!y.gradientMap,mt=!!y.alphaMap,nt=y.alphaTest>0,j=!!y.alphaHash,Mt=!!y.extensions,Bt=yr;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=r.toneMapping);let pe={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:ae,fragmentShader:Xt,defines:y.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&H._colorsTexture!==null,instancing:At,instancingColor:At&&H.instanceColor!==null,instancingMorph:At&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:As,alphaToCoverage:!!y.alphaToCoverage,map:kt,matcap:fe,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:V,aoMap:Yt,lightMap:Dt,bumpMap:Ct,normalMap:F,displacementMap:d&&le,emissiveMap:xt,normalMapObjectSpace:F&&y.normalMapType===$g,normalMapTangentSpace:F&&y.normalMapType===Xh,metalnessMap:Ht,roughnessMap:jt,anisotropy:ge,anisotropyMap:$,clearcoat:R,clearcoatMap:vt,clearcoatNormalMap:ot,clearcoatRoughnessMap:wt,dispersion:b,iridescence:z,iridescenceMap:dt,iridescenceThicknessMap:st,sheen:J,sheenColorMap:ht,sheenRoughnessMap:Ft,specularMap:Et,specularColorMap:ct,specularIntensityMap:Gt,transmission:Q,transmissionMap:U,thicknessMap:rt,gradientMap:at,opaque:y.transparent===!1&&y.blending===ws&&y.alphaToCoverage===!1,alphaMap:mt,alphaTest:nt,alphaHash:j,combine:y.combine,mapUv:kt&&_(y.map.channel),aoMapUv:Yt&&_(y.aoMap.channel),lightMapUv:Dt&&_(y.lightMap.channel),bumpMapUv:Ct&&_(y.bumpMap.channel),normalMapUv:F&&_(y.normalMap.channel),displacementMapUv:le&&_(y.displacementMap.channel),emissiveMapUv:xt&&_(y.emissiveMap.channel),metalnessMapUv:Ht&&_(y.metalnessMap.channel),roughnessMapUv:jt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:vt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&_(y.sheenRoughnessMap.channel),specularMapUv:Et&&_(y.specularMap.channel),specularColorMapUv:ct&&_(y.specularColorMap.channel),specularIntensityMapUv:Gt&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:rt&&_(y.thicknessMap.channel),alphaMapUv:mt&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(F||ge),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(kt||mt),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ft,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Ut,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Bt,decodeVideoTexture:kt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:xt&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Yi,flipSided:y.side===gn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)v.push(I),v.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(M(v,y),S(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=g[y.type],I;if(v){let D=$i[v];I=s_.clone(D.uniforms)}else I=y.uniforms;return I}function T(y,v){let I;for(let D=0,H=h.length;D<H;D++){let G=h[D];if(G.cacheKey===v){I=G,++I.usedTimes;break}}return I===void 0&&(I=new eT(r,v,y,s),h.push(I)),I}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function rT(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function sT(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function A_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function C_(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||sT),n.length>1&&n.sort(d||A_),i.length>1&&i.sort(d||A_)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function oT(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new C_,r.set(n,[o])):i>=s.length?(o=new C_,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function aT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Kt};break;case"SpotLight":e={position:new k,direction:new k,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new k,halfWidth:new k,halfHeight:new k};break}return r[t.id]=e,e}}}function lT(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var cT=0;function hT(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function uT(r){let t=new aT,e=lT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);let i=new k,s=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,T=0,A=0,w=0;c.sort(hT);for(let y=0,v=c.length;y<v;y++){let I=c[y],D=I.color,H=I.intensity,G=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=D.r*H,u+=D.g*H,d+=D.b*H;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],H);w++}else if(I.isDirectionalLight){let N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,V=e.get(I);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=N,f++}else if(I.isSpotLight){let N=t.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(D).multiplyScalar(H),N.distance=G,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[_]=N;let W=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,W.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(I.isRectAreaLight){let N=t.get(I);N.color.copy(D).multiplyScalar(H),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=N,m++}else if(I.isPointLight){let N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){let W=I.shadow,V=e.get(I);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=N,g++}else if(I.isHemisphereLight){let N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(H),N.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=N,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=w,n.version=cT++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function R_(r){let t=new uT(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function dT(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new R_(r),t.set(i,[a])):s>=o.length?(a=new R_(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var fT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pT=`uniform sampler2D shadow_pass;
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
}`;function mT(r,t,e){let n=new wo,i=new oe,s=new oe,o=new ye,a=new kc({depthPacking:Yg}),l=new zc,c={},h=e.maxTextureSize,u={[mr]:gn,[gn]:mr,[Yi]:Yi},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:fT,fragmentShader:pT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Cn;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tf;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),D=r.state;D.setBlending(vr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let H=p!==qi&&this.type===qi,G=p===qi&&this.type!==qi;for(let X=0,N=A.length;X<N;X++){let W=A[X],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let et=V.getFrameExtents();if(i.multiply(et),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,V.mapSize.y=s.y)),V.map===null||H===!0||G===!0){let it=this.type!==qi?{minFilter:Zn,magFilter:Zn}:{};V.map!==null&&V.map.dispose(),V.map=new zi(i.x,i.y,it),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let L=V.getViewportCount();for(let it=0;it<L;it++){let Ut=V.getViewport(it);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),D.viewport(o),V.updateMatrices(W,it),n=V.getFrustum(),x(w,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===qi&&M(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,I)};function M(A,w){let C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new zi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,f,_,null)}function S(A,w,C,y){let v=null,I=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)v=I;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let D=v.uuid,H=w.uuid,G=c[D];G===void 0&&(G={},c[D]=G);let X=G[H];X===void 0&&(X=v.clone(),G[H]=X,w.addEventListener("dispose",T)),v=X}if(v.visible=w.visible,v.wireframe=w.wireframe,y===qi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let D=r.properties.get(v);D.light=C}return v}function x(A,w,C,y,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===qi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let H=t.update(A),G=A.material;if(Array.isArray(G)){let X=H.groups;for(let N=0,W=X.length;N<W;N++){let V=X[N],et=G[V.materialIndex];if(et&&et.visible){let L=S(A,et,y,v);A.onBeforeShadow(r,A,w,C,H,L,V),r.renderBufferDirect(C,null,H,L,A,V),A.onAfterShadow(r,A,w,C,H,L,V)}}}else if(G.visible){let X=S(A,G,y,v);A.onBeforeShadow(r,A,w,C,H,X,null),r.renderBufferDirect(C,null,H,X,A,null),A.onAfterShadow(r,A,w,C,H,X,null)}}let D=A.children;for(let H=0,G=D.length;H<G;H++)x(D[H],w,C,y,v)}function T(A){A.target.removeEventListener("dispose",T);for(let C in c){let y=c[C],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var gT={[Qc]:jc,[th]:ih,[eh]:rh,[Es]:nh,[jc]:Qc,[ih]:th,[rh]:eh,[nh]:Es};function _T(r,t){function e(){let U=!1,rt=new ye,at=null,mt=new ye(0,0,0,0);return{setMask:function(nt){at!==nt&&!U&&(r.colorMask(nt,nt,nt,nt),at=nt)},setLocked:function(nt){U=nt},setClear:function(nt,j,Mt,Bt,pe){pe===!0&&(nt*=Bt,j*=Bt,Mt*=Bt),rt.set(nt,j,Mt,Bt),mt.equals(rt)===!1&&(r.clearColor(nt,j,Mt,Bt),mt.copy(rt))},reset:function(){U=!1,at=null,mt.set(-1,0,0,0)}}}function n(){let U=!1,rt=!1,at=null,mt=null,nt=null;return{setReversed:function(j){if(rt!==j){let Mt=t.get("EXT_clip_control");j?Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.ZERO_TO_ONE_EXT):Mt.clipControlEXT(Mt.LOWER_LEFT_EXT,Mt.NEGATIVE_ONE_TO_ONE_EXT),rt=j;let Bt=nt;nt=null,this.setClear(Bt)}},getReversed:function(){return rt},setTest:function(j){j?K(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(j){at!==j&&!U&&(r.depthMask(j),at=j)},setFunc:function(j){if(rt&&(j=gT[j]),mt!==j){switch(j){case Qc:r.depthFunc(r.NEVER);break;case jc:r.depthFunc(r.ALWAYS);break;case th:r.depthFunc(r.LESS);break;case Es:r.depthFunc(r.LEQUAL);break;case eh:r.depthFunc(r.EQUAL);break;case nh:r.depthFunc(r.GEQUAL);break;case ih:r.depthFunc(r.GREATER);break;case rh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=j}},setLocked:function(j){U=j},setClear:function(j){nt!==j&&(rt&&(j=1-j),r.clearDepth(j),nt=j)},reset:function(){U=!1,at=null,mt=null,nt=null,rt=!1}}}function i(){let U=!1,rt=null,at=null,mt=null,nt=null,j=null,Mt=null,Bt=null,pe=null;return{setTest:function(_t){U||(_t?K(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(_t){rt!==_t&&!U&&(r.stencilMask(_t),rt=_t)},setFunc:function(_t,Pt,Jt){(at!==_t||mt!==Pt||nt!==Jt)&&(r.stencilFunc(_t,Pt,Jt),at=_t,mt=Pt,nt=Jt)},setOp:function(_t,Pt,Jt){(j!==_t||Mt!==Pt||Bt!==Jt)&&(r.stencilOp(_t,Pt,Jt),j=_t,Mt=Pt,Bt=Jt)},setLocked:function(_t){U=_t},setClear:function(_t){pe!==_t&&(r.clearStencil(_t),pe=_t)},reset:function(){U=!1,rt=null,at=null,mt=null,nt=null,j=null,Mt=null,Bt=null,pe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,T=null,A=null,w=new Kt(0,0,0),C=0,y=!1,v=null,I=null,D=null,H=null,G=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,W=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=W>=2);let et=null,L={},it=r.getParameter(r.SCISSOR_BOX),Ut=r.getParameter(r.VIEWPORT),ae=new ye().fromArray(it),Xt=new ye().fromArray(Ut);function Wt(U,rt,at,mt){let nt=new Uint8Array(4),j=r.createTexture();r.bindTexture(U,j),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Mt=0;Mt<at;Mt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(rt+Mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return j}let Z={};Z[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Es),Ct(!1),F(jd),K(r.CULL_FACE),Yt(vr);function K(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function ft(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function At(U,rt){return u[U]!==rt?(r.bindFramebuffer(U,rt),u[U]=rt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function Tt(U,rt){let at=f,mt=!1;if(U){at=d.get(rt),at===void 0&&(at=[],d.set(rt,at));let nt=U.textures;if(at.length!==nt.length||at[0]!==r.COLOR_ATTACHMENT0){for(let j=0,Mt=nt.length;j<Mt;j++)at[j]=r.COLOR_ATTACHMENT0+j;at.length=nt.length,mt=!0}}else at[0]!==r.BACK&&(at[0]=r.BACK,mt=!0);mt&&r.drawBuffers(at)}function kt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}let fe={[$r]:r.FUNC_ADD,[yg]:r.FUNC_SUBTRACT,[Mg]:r.FUNC_REVERSE_SUBTRACT};fe[Sg]=r.MIN,fe[bg]=r.MAX;let P={[Tg]:r.ZERO,[wg]:r.ONE,[Eg]:r.SRC_COLOR,[Ac]:r.SRC_ALPHA,[Lg]:r.SRC_ALPHA_SATURATE,[Pg]:r.DST_COLOR,[Cg]:r.DST_ALPHA,[Ag]:r.ONE_MINUS_SRC_COLOR,[Cc]:r.ONE_MINUS_SRC_ALPHA,[Ig]:r.ONE_MINUS_DST_COLOR,[Rg]:r.ONE_MINUS_DST_ALPHA,[Dg]:r.CONSTANT_COLOR,[Ug]:r.ONE_MINUS_CONSTANT_COLOR,[Ng]:r.CONSTANT_ALPHA,[Fg]:r.ONE_MINUS_CONSTANT_ALPHA};function Yt(U,rt,at,mt,nt,j,Mt,Bt,pe,_t){if(U===vr){_===!0&&(ft(r.BLEND),_=!1);return}if(_===!1&&(K(r.BLEND),_=!0),U!==vg){if(U!==m||_t!==y){if((p!==$r||x!==$r)&&(r.blendEquation(r.FUNC_ADD),p=$r,x=$r),_t)switch(U){case ws:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ef:r.blendFunc(r.ONE,r.ONE);break;case nf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ws:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ef:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,T=null,A=null,w.set(0,0,0),C=0,m=U,y=_t}return}nt=nt||rt,j=j||at,Mt=Mt||mt,(rt!==p||nt!==x)&&(r.blendEquationSeparate(fe[rt],fe[nt]),p=rt,x=nt),(at!==M||mt!==S||j!==T||Mt!==A)&&(r.blendFuncSeparate(P[at],P[mt],P[j],P[Mt]),M=at,S=mt,T=j,A=Mt),(Bt.equals(w)===!1||pe!==C)&&(r.blendColor(Bt.r,Bt.g,Bt.b,pe),w.copy(Bt),C=pe),m=U,y=!1}function Dt(U,rt){U.side===Yi?ft(r.CULL_FACE):K(r.CULL_FACE);let at=U.side===gn;rt&&(at=!at),Ct(at),U.blending===ws&&U.transparent===!1?Yt(vr):Yt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let mt=U.stencilWrite;a.setTest(mt),mt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),xt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function F(U){U!==gg?(K(r.CULL_FACE),U!==I&&(U===jd?r.cullFace(r.BACK):U===_g?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),I=U}function le(U){U!==D&&(N&&r.lineWidth(U),D=U)}function xt(U,rt,at){U?(K(r.POLYGON_OFFSET_FILL),(H!==rt||G!==at)&&(r.polygonOffset(rt,at),H=rt,G=at)):ft(r.POLYGON_OFFSET_FILL)}function Ht(U){U?K(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function jt(U){U===void 0&&(U=r.TEXTURE0+X-1),et!==U&&(r.activeTexture(U),et=U)}function ge(U,rt,at){at===void 0&&(et===null?at=r.TEXTURE0+X-1:at=et);let mt=L[at];mt===void 0&&(mt={type:void 0,texture:void 0},L[at]=mt),(mt.type!==U||mt.texture!==rt)&&(et!==at&&(r.activeTexture(at),et=at),r.bindTexture(U,rt||Z[U]),mt.type=U,mt.texture=rt)}function R(){let U=L[et];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(U){ae.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function Ft(U){Xt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Xt.copy(U))}function Et(U,rt){let at=c.get(rt);at===void 0&&(at=new WeakMap,c.set(rt,at));let mt=at.get(U);mt===void 0&&(mt=r.getUniformBlockIndex(rt,U.name),at.set(U,mt))}function ct(U,rt){let mt=c.get(rt).get(U);l.get(rt)!==mt&&(r.uniformBlockBinding(rt,mt,U.__bindingPointIndex),l.set(rt,mt))}function Gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,L={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,T=null,A=null,w=new Kt(0,0,0),C=0,y=!1,v=null,I=null,D=null,H=null,G=null,ae.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:ft,bindFramebuffer:At,drawBuffers:Tt,useProgram:kt,setBlending:Yt,setMaterial:Dt,setFlipSided:Ct,setCullFace:F,setLineWidth:le,setPolygonOffset:xt,setScissorTest:Ht,activeTexture:jt,bindTexture:ge,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:dt,texImage3D:st,updateUBOMapping:Et,uniformBlockBinding:ct,texStorage2D:ot,texStorage3D:wt,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:vt,scissor:ht,viewport:Ft,reset:Gt}}function xT(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):Pa("canvas")}function _(R,b,z){let J=1,Q=ge(R);if((Q.width>z||Q.height>z)&&(J=z/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(J*Q.width),vt=Math.floor(J*Q.height);u===void 0&&(u=g($,vt));let ot=b?g($,vt):u;return ot.width=$,ot.height=vt,ot.getContext("2d").drawImage(R,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+vt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,b,z,J,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===r.RED&&(z===r.FLOAT&&($=r.R32F),z===r.HALF_FLOAT&&($=r.R16F),z===r.UNSIGNED_BYTE&&($=r.R8)),b===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.R8UI),z===r.UNSIGNED_SHORT&&($=r.R16UI),z===r.UNSIGNED_INT&&($=r.R32UI),z===r.BYTE&&($=r.R8I),z===r.SHORT&&($=r.R16I),z===r.INT&&($=r.R32I)),b===r.RG&&(z===r.FLOAT&&($=r.RG32F),z===r.HALF_FLOAT&&($=r.RG16F),z===r.UNSIGNED_BYTE&&($=r.RG8)),b===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RG8UI),z===r.UNSIGNED_SHORT&&($=r.RG16UI),z===r.UNSIGNED_INT&&($=r.RG32UI),z===r.BYTE&&($=r.RG8I),z===r.SHORT&&($=r.RG16I),z===r.INT&&($=r.RG32I)),b===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGB8UI),z===r.UNSIGNED_SHORT&&($=r.RGB16UI),z===r.UNSIGNED_INT&&($=r.RGB32UI),z===r.BYTE&&($=r.RGB8I),z===r.SHORT&&($=r.RGB16I),z===r.INT&&($=r.RGB32I)),b===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&($=r.RGBA8UI),z===r.UNSIGNED_SHORT&&($=r.RGBA16UI),z===r.UNSIGNED_INT&&($=r.RGBA32UI),z===r.BYTE&&($=r.RGBA8I),z===r.SHORT&&($=r.RGBA16I),z===r.INT&&($=r.RGBA32I)),b===r.RGB&&(z===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),b===r.RGBA){let vt=Q?Ca:de.getTransfer(J);z===r.FLOAT&&($=r.RGBA32F),z===r.HALF_FLOAT&&($=r.RGBA16F),z===r.UNSIGNED_BYTE&&($=vt===Me?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(R,b){let z;return R?b===null||b===jr||b===Io?z=r.DEPTH24_STENCIL8:b===Li?z=r.DEPTH32F_STENCIL8:b===Ro&&(z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jr||b===Io?z=r.DEPTH_COMPONENT24:b===Li?z=r.DEPTH_COMPONENT32F:b===Ro&&(z=r.DEPTH_COMPONENT16),z}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Zn&&R.minFilter!==Ri?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),C(b),b.isVideoTexture&&h.delete(b)}function w(R){let b=R.target;b.removeEventListener("dispose",w),v(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let z=R.source,J=d.get(z);if(J){let Q=J[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(R),Object.keys(J).length===0&&d.delete(z)}n.remove(R)}function y(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let z=R.source,J=d.get(z);delete J[b.__cacheKey],o.memory.textures--}function v(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let Q=0;Q<b.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)r.deleteFramebuffer(b.__webglFramebuffer[J]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let z=R.textures;for(let J=0,Q=z.length;J<Q;J++){let $=n.get(z[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[J])}n.remove(R)}let I=0;function D(){I=0}function H(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function G(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function X(R,b){let z=n.get(R);if(R.isVideoTexture&&Ht(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+b)}function N(R,b){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Z(z,R,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+b)}function W(R,b){let z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){Z(z,R,b);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+b)}function V(R,b){let z=n.get(R);if(R.version>0&&z.__version!==R.version){K(z,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+b)}let et={[Rc]:r.REPEAT,[Yr]:r.CLAMP_TO_EDGE,[Pc]:r.MIRRORED_REPEAT},L={[Zn]:r.NEAREST,[Xg]:r.NEAREST_MIPMAP_NEAREST,[sl]:r.NEAREST_MIPMAP_LINEAR,[Ri]:r.LINEAR,[ch]:r.LINEAR_MIPMAP_NEAREST,[Qr]:r.LINEAR_MIPMAP_LINEAR},it={[Zg]:r.NEVER,[e_]:r.ALWAYS,[Jg]:r.LESS,[ff]:r.LEQUAL,[Kg]:r.EQUAL,[t_]:r.GEQUAL,[Qg]:r.GREATER,[jg]:r.NOTEQUAL};function Ut(R,b){if(b.type===Li&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ri||b.magFilter===ch||b.magFilter===sl||b.magFilter===Qr||b.minFilter===Ri||b.minFilter===ch||b.minFilter===sl||b.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,et[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,L[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,L[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zn||b.minFilter!==sl&&b.minFilter!==Qr||b.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let J=b.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let $=G(b);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[$].usedTimes++;let vt=Q[R.__cacheKey];vt!==void 0&&(Q[R.__cacheKey].usedTimes--,vt.usedTimes===0&&y(b)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return z}function Xt(R,b,z){return Math.floor(Math.floor(R/z)/b)}function Wt(R,b,z,J){let $=R.updateRanges;if($.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,z,J,b.data);else{$.sort((st,ht)=>st.start-ht.start);let vt=0;for(let st=1;st<$.length;st++){let ht=$[vt],Ft=$[st],Et=ht.start+ht.count,ct=Xt(Ft.start,b.width,4),Gt=Xt(ht.start,b.width,4);Ft.start<=Et+1&&ct===Gt&&Xt(Ft.start+Ft.count-1,b.width,4)===ct?ht.count=Math.max(ht.count,Ft.start+Ft.count-ht.start):(++vt,$[vt]=Ft)}$.length=vt+1;let ot=r.getParameter(r.UNPACK_ROW_LENGTH),wt=r.getParameter(r.UNPACK_SKIP_PIXELS),dt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let st=0,ht=$.length;st<ht;st++){let Ft=$[st],Et=Math.floor(Ft.start/4),ct=Math.ceil(Ft.count/4),Gt=Et%b.width,U=Math.floor(Et/b.width),rt=ct,at=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,Gt,U,rt,at,z,J,b.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,dt)}}function Z(R,b,z){let J=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=r.TEXTURE_3D);let Q=ae(R,b),$=b.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+z);let vt=n.get($);if($.version!==vt.__version||Q===!0){e.activeTexture(r.TEXTURE0+z);let ot=de.getPrimaries(de.workingColorSpace),wt=b.colorSpace===Mr?null:de.getPrimaries(b.colorSpace),dt=b.colorSpace===Mr||ot===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let st=_(b.image,!1,i.maxTextureSize);st=jt(b,st);let ht=s.convert(b.format,b.colorSpace),Ft=s.convert(b.type),Et=S(b.internalFormat,ht,Ft,b.colorSpace,b.isVideoTexture);Ut(J,b);let ct,Gt=b.mipmaps,U=b.isVideoTexture!==!0,rt=vt.__version===void 0||Q===!0,at=$.dataReady,mt=T(b,st);if(b.isDepthTexture)Et=x(b.format===Lo,b.type),rt&&(U?e.texStorage2D(r.TEXTURE_2D,1,Et,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,Et,st.width,st.height,0,ht,Ft,null));else if(b.isDataTexture)if(Gt.length>0){U&&rt&&e.texStorage2D(r.TEXTURE_2D,mt,Et,Gt[0].width,Gt[0].height);for(let nt=0,j=Gt.length;nt<j;nt++)ct=Gt[nt],U?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,ht,Ft,ct.data):e.texImage2D(r.TEXTURE_2D,nt,Et,ct.width,ct.height,0,ht,Ft,ct.data);b.generateMipmaps=!1}else U?(rt&&e.texStorage2D(r.TEXTURE_2D,mt,Et,st.width,st.height),at&&Wt(b,st,ht,Ft)):e.texImage2D(r.TEXTURE_2D,0,Et,st.width,st.height,0,ht,Ft,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Et,Gt[0].width,Gt[0].height,st.depth);for(let nt=0,j=Gt.length;nt<j;nt++)if(ct=Gt[nt],b.format!==Si)if(ht!==null)if(U){if(at)if(b.layerUpdates.size>0){let Mt=vf(ct.width,ct.height,b.format,b.type);for(let Bt of b.layerUpdates){let pe=ct.data.subarray(Bt*Mt/ct.data.BYTES_PER_ELEMENT,(Bt+1)*Mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Bt,ct.width,ct.height,1,ht,pe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,st.depth,ht,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,Et,ct.width,ct.height,st.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?at&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,st.depth,ht,Ft,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,Et,ct.width,ct.height,st.depth,0,ht,Ft,ct.data)}else{U&&rt&&e.texStorage2D(r.TEXTURE_2D,mt,Et,Gt[0].width,Gt[0].height);for(let nt=0,j=Gt.length;nt<j;nt++)ct=Gt[nt],b.format!==Si?ht!==null?U?at&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,Et,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,ht,Ft,ct.data):e.texImage2D(r.TEXTURE_2D,nt,Et,ct.width,ct.height,0,ht,Ft,ct.data)}else if(b.isDataArrayTexture)if(U){if(rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Et,st.width,st.height,st.depth),at)if(b.layerUpdates.size>0){let nt=vf(st.width,st.height,b.format,b.type);for(let j of b.layerUpdates){let Mt=st.data.subarray(j*nt/st.data.BYTES_PER_ELEMENT,(j+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,ht,Ft,Mt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ht,Ft,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Et,st.width,st.height,st.depth,0,ht,Ft,st.data);else if(b.isData3DTexture)U?(rt&&e.texStorage3D(r.TEXTURE_3D,mt,Et,st.width,st.height,st.depth),at&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ht,Ft,st.data)):e.texImage3D(r.TEXTURE_3D,0,Et,st.width,st.height,st.depth,0,ht,Ft,st.data);else if(b.isFramebufferTexture){if(rt)if(U)e.texStorage2D(r.TEXTURE_2D,mt,Et,st.width,st.height);else{let nt=st.width,j=st.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(r.TEXTURE_2D,Mt,Et,nt,j,0,ht,Ft,null),nt>>=1,j>>=1}}else if(Gt.length>0){if(U&&rt){let nt=ge(Gt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Et,nt.width,nt.height)}for(let nt=0,j=Gt.length;nt<j;nt++)ct=Gt[nt],U?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ht,Ft,ct):e.texImage2D(r.TEXTURE_2D,nt,Et,ht,Ft,ct);b.generateMipmaps=!1}else if(U){if(rt){let nt=ge(st);e.texStorage2D(r.TEXTURE_2D,mt,Et,nt.width,nt.height)}at&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,Ft,st)}else e.texImage2D(r.TEXTURE_2D,0,Et,ht,Ft,st);m(b)&&p(J),vt.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function K(R,b,z){if(b.image.length!==6)return;let J=ae(R,b),Q=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+z);let $=n.get(Q);if(Q.version!==$.__version||J===!0){e.activeTexture(r.TEXTURE0+z);let vt=de.getPrimaries(de.workingColorSpace),ot=b.colorSpace===Mr?null:de.getPrimaries(b.colorSpace),wt=b.colorSpace===Mr||vt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let dt=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!dt&&!st?ht[j]=_(b.image[j],!0,i.maxCubemapSize):ht[j]=st?b.image[j].image:b.image[j],ht[j]=jt(b,ht[j]);let Ft=ht[0],Et=s.convert(b.format,b.colorSpace),ct=s.convert(b.type),Gt=S(b.internalFormat,Et,ct,b.colorSpace),U=b.isVideoTexture!==!0,rt=$.__version===void 0||J===!0,at=Q.dataReady,mt=T(b,Ft);Ut(r.TEXTURE_CUBE_MAP,b);let nt;if(dt){U&&rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Gt,Ft.width,Ft.height);for(let j=0;j<6;j++){nt=ht[j].mipmaps;for(let Mt=0;Mt<nt.length;Mt++){let Bt=nt[Mt];b.format!==Si?Et!==null?U?at&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,Bt.width,Bt.height,Et,Bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,Gt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,0,0,Bt.width,Bt.height,Et,ct,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt,Gt,Bt.width,Bt.height,0,Et,ct,Bt.data)}}}else{if(nt=b.mipmaps,U&&rt){nt.length>0&&mt++;let j=ge(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(st){U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,Et,ct,ht[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,ht[j].width,ht[j].height,0,Et,ct,ht[j].data);for(let Mt=0;Mt<nt.length;Mt++){let pe=nt[Mt].image[j].image;U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,pe.width,pe.height,Et,ct,pe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,Gt,pe.width,pe.height,0,Et,ct,pe.data)}}else{U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Et,ct,ht[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,Et,ct,ht[j]);for(let Mt=0;Mt<nt.length;Mt++){let Bt=nt[Mt];U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,0,0,Et,ct,Bt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Mt+1,Gt,Et,ct,Bt.image[j])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ft(R,b,z,J,Q,$){let vt=s.convert(z.format,z.colorSpace),ot=s.convert(z.type),wt=S(z.internalFormat,vt,ot,z.colorSpace),dt=n.get(b),st=n.get(z);if(st.__renderTarget=b,!dt.__hasExternalTextures){let ht=Math.max(1,b.width>>$),Ft=Math.max(1,b.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,wt,ht,Ft,b.depth,0,vt,ot,null):e.texImage2D(Q,$,wt,ht,Ft,0,vt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),xt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,st.__webglTexture,0,le(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,st.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(R,b,z){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let J=b.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=x(b.stencilBuffer,Q),vt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=le(b);xt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,$,b.width,b.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,R)}else{let J=b.textures;for(let Q=0;Q<J.length;Q++){let $=J[Q],vt=s.convert($.format,$.colorSpace),ot=s.convert($.type),wt=S($.internalFormat,vt,ot,$.colorSpace),dt=le(b);z&&xt(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,dt,wt,b.width,b.height):xt(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,dt,wt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,wt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let Q=J.__webglTexture,$=le(b);if(b.depthTexture.format===Mo)xt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Lo)xt(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function kt(R){let b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?Tt(b.__webglFramebuffer[0],R):Tt(b.__webglFramebuffer,R)}else if(z){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=r.createRenderbuffer(),At(b.__webglDepthbuffer[J],R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),At(b.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(R,b,z){let J=n.get(R);b!==void 0&&ft(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&kt(R)}function P(R){let b=R.texture,z=n.get(R),J=n.get(b);R.addEventListener("dispose",w);let Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,vt=Q.length>1;if(vt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=b.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ot]=[];for(let wt=0;wt<b.mipmaps.length;wt++)z.__webglFramebuffer[ot][wt]=r.createFramebuffer()}else z.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)z.__webglFramebuffer[ot]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(vt)for(let ot=0,wt=Q.length;ot<wt;ot++){let dt=n.get(Q[ot]);dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&xt(R)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let wt=Q[ot];z.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[ot]);let dt=s.convert(wt.format,wt.colorSpace),st=s.convert(wt.type),ht=S(wt.internalFormat,dt,st,wt.colorSpace,R.isXRRenderTarget===!0),Ft=le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,ht,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,z.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),At(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ut(r.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)ft(z.__webglFramebuffer[ot][wt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,wt);else ft(z.__webglFramebuffer[ot],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ot=0,wt=Q.length;ot<wt;ot++){let dt=Q[ot],st=n.get(dt),ht=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,st.__webglTexture),Ut(ht,dt),ft(z.__webglFramebuffer,R,dt,r.COLOR_ATTACHMENT0+ot,ht,0),m(dt)&&p(ht)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),Ut(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let wt=0;wt<b.mipmaps.length;wt++)ft(z.__webglFramebuffer[wt],R,b,r.COLOR_ATTACHMENT0,ot,wt);else ft(z.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,ot,0);m(b)&&p(ot),e.unbindTexture()}R.depthBuffer&&kt(R)}function Yt(R){let b=R.textures;for(let z=0,J=b.length;z<J;z++){let Q=b[z];if(m(Q)){let $=M(R),vt=n.get(Q).__webglTexture;e.bindTexture($,vt),p($),e.unbindTexture()}}}let Dt=[],Ct=[];function F(R){if(R.samples>0){if(xt(R)===!1){let b=R.textures,z=R.width,J=R.height,Q=r.COLOR_BUFFER_BIT,$=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,vt=n.get(R),ot=b.length>1;if(ot)for(let dt=0;dt<b.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let wt=R.texture.mipmaps;wt&&wt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let dt=0;dt<b.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let st=n.get(b[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,z,J,0,0,z,J,Q,r.NEAREST),l===!0&&(Dt.length=0,Ct.length=0,Dt.push(r.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push($),Ct.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<b.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,vt.__webglColorRenderbuffer[dt]);let st=n.get(b[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,vt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,st,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function le(R){return Math.min(i.maxSamples,R.samples)}function xt(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function jt(R,b){let z=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==As&&z!==Mr&&(de.getTransfer(z)===Me?(J!==Si||Q!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),b}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=D,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=fe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=xt}function vT(r,t){function e(n,i=Mr){let s,o=de.getTransfer(i);if(n===Ii)return r.UNSIGNED_BYTE;if(n===uh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===lf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===cf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===of)return r.BYTE;if(n===af)return r.SHORT;if(n===Ro)return r.UNSIGNED_SHORT;if(n===hh)return r.INT;if(n===jr)return r.UNSIGNED_INT;if(n===Li)return r.FLOAT;if(n===Po)return r.HALF_FLOAT;if(n===hf)return r.ALPHA;if(n===uf)return r.RGB;if(n===Si)return r.RGBA;if(n===Mo)return r.DEPTH_COMPONENT;if(n===Lo)return r.DEPTH_STENCIL;if(n===fh)return r.RED;if(n===ph)return r.RED_INTEGER;if(n===df)return r.RG;if(n===mh)return r.RG_INTEGER;if(n===gh)return r.RGBA_INTEGER;if(n===ol||n===al||n===ll||n===cl)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_h||n===xh||n===vh||n===yh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mh||n===Sh||n===bh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mh||n===Sh)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Th||n===wh||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Lh||n===Dh||n===Uh||n===Nh||n===Fh||n===Oh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Th)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Eh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ah)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ch)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ph)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ih)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Dh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Bh||n===kh||n===zh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Bh)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vh||n===Hh||n===Gh||n===Wh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Io?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var yT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`,Lf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Wa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pi({vertexShader:yT,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Za(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Df=class extends gr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Lf,p={},M=e.getContextAttributes(),S=null,x=null,T=[],A=[],w=new oe,C=null,y=new mn;y.viewport=new ye;let v=new mn;v.viewport=new ye;let I=[y,v],D=new Kc,H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=T[Z];return K===void 0&&(K=new To,T[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=T[Z];return K===void 0&&(K=new To,T[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=T[Z];return K===void 0&&(K=new To,T[Z]=K),K.getHandSpace()};function X(Z){let K=A.indexOf(Z.inputSource);if(K===-1)return;let ft=T[K];ft!==void 0&&(ft.update(Z.inputSource,Z.frame,c||o),ft.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<T.length;Z++){let K=A[Z];K!==null&&(A[Z]=null,T[Z].disconnect(K))}H=null,G=null,m.reset();for(let Z in p)delete p[Z];t.setRenderTarget(S),f=null,d=null,u=null,i=null,x=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",N),i.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,At=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=M.stencil?Lo:Mo,At=M.stencil?Io:jr);let kt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(kt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new zi(d.textureWidth,d.textureHeight,{format:Si,type:Ii,depthTexture:new Ga(d.textureWidth,d.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ft={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ft),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new zi(f.framebufferWidth,f.framebufferHeight,{format:Si,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let K=0;K<Z.removed.length;K++){let ft=Z.removed[K],At=A.indexOf(ft);At>=0&&(A[At]=null,T[At].disconnect(ft))}for(let K=0;K<Z.added.length;K++){let ft=Z.added[K],At=A.indexOf(ft);if(At===-1){for(let kt=0;kt<T.length;kt++)if(kt>=A.length){A.push(ft),At=kt;break}else if(A[kt]===null){A[kt]=ft,At=kt;break}if(At===-1)break}let Tt=T[At];Tt&&Tt.connect(ft)}}let V=new k,et=new k;function L(Z,K,ft){V.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(ft.matrixWorld);let At=V.distanceTo(et),Tt=K.projectionMatrix.elements,kt=ft.projectionMatrix.elements,fe=Tt[14]/(Tt[10]-1),P=Tt[14]/(Tt[10]+1),Yt=(Tt[9]+1)/Tt[5],Dt=(Tt[9]-1)/Tt[5],Ct=(Tt[8]-1)/Tt[0],F=(kt[8]+1)/kt[0],le=fe*Ct,xt=fe*F,Ht=At/(-Ct+F),jt=Ht*-Ct;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(jt),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Tt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ge=fe+Ht,R=P+Ht,b=le-jt,z=xt+(At-jt),J=Yt*P/R*ge,Q=Dt*P/R*ge;Z.projectionMatrix.makePerspective(b,z,J,Q,ge,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let K=Z.near,ft=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),D.near=v.near=y.near=K,D.far=v.far=y.far=ft,(H!==D.near||G!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,G=D.far),D.layers.mask=Z.layers.mask|6,y.layers.mask=D.layers.mask&3,v.layers.mask=D.layers.mask&5;let At=Z.parent,Tt=D.cameras;it(D,At);for(let kt=0;kt<Tt.length;kt++)it(Tt[kt],At);Tt.length===2?L(D,y,v):D.projectionMatrix.copy(y.projectionMatrix),Ut(Z,D,At)};function Ut(Z,K,ft){ft===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(ft.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Lc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(Z){return p[Z]};let ae=null;function Xt(Z,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let At=!1;ft.length!==D.cameras.length&&(D.cameras.length=0,At=!0);for(let P=0;P<ft.length;P++){let Yt=ft[P],Dt=null;if(f!==null)Dt=f.getViewport(Yt);else{let F=u.getViewSubImage(d,Yt);Dt=F.viewport,P===0&&(t.setRenderTargetTextures(x,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(x))}let Ct=I[P];Ct===void 0&&(Ct=new mn,Ct.layers.enable(P),Ct.viewport=new ye,I[P]=Ct),Ct.matrix.fromArray(Yt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(Yt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),P===0&&(D.matrix.copy(Ct.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),At===!0&&D.cameras.push(Ct)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let P=u.getDepthInformation(ft[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<ft.length;P++){let Yt=ft[P].camera;if(Yt){let Dt=p[Yt];Dt||(Dt=new Wa,p[Yt]=Dt);let Ct=u.getCameraImage(Yt);Dt.sourceTexture=Ct}}}}for(let ft=0;ft<T.length;ft++){let At=A[ft],Tt=T[ft];At!==null&&Tt!==void 0&&Tt.update(At,K,c||o)}ae&&ae(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Wt=new P_;Wt.setAnimationLoop(Xt),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}},Us=new Mi,ST=new Ce;function bT(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,gf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===gn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===gn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Us.copy(x),Us.x*=-1,Us.y*=-1,Us.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.envMapRotation.value.setFromMatrix4(ST.makeRotationFromEuler(Us)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function TT(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(M,T);let A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function h(M){let S=u();M.__bindingPointIndex=S;let x=r.createBuffer(),T=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],x=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,w=x.length;A<w;A++){let C=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=C.length;y<v;y++){let I=C[y];if(f(I,A,y,T)===!0){let D=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],G=0;for(let X=0;X<H.length;X++){let N=H[X],W=_(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,D+G,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,x,T){let A=M.value,w=S+"_"+x;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{let C=T[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){let S=M.uniforms,x=0,T=16;for(let w=0,C=S.length;w<C;w++){let y=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,I=y.length;v<I;v++){let D=y[v],H=Array.isArray(D.value)?D.value:[D.value];for(let G=0,X=H.length;G<X;G++){let N=H[G],W=_(N),V=x%T,et=V%W.boundary,L=V+et;x+=et,L!==0&&T-L<W.storage&&(x+=T-L),D.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=x,x+=W.storage}}}let A=x%T;return A>0&&(x+=T-A),M.__size=x,M.__cache={},this}function _(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Zh=class{constructor(t={}){let{canvas:e=n_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=En;let A=0,w=0,C=null,y=-1,v=null,I=new ye,D=new ye,H=null,G=new Kt(0),X=0,N=e.width,W=e.height,V=1,et=null,L=null,it=new ye(0,0,N,W),Ut=new ye(0,0,N,W),ae=!1,Xt=new wo,Wt=!1,Z=!1,K=new Ce,ft=new k,At=new ye,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function fe(){return C===null?V:1}let P=n;function Yt(E,O){return e.getContext(E,O)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),P===null){let O="webgl2";if(P=Yt(O,E),P===null)throw Yt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Dt,Ct,F,le,xt,Ht,jt,ge,R,b,z,J,Q,$,vt,ot,wt,dt,st,ht,Ft,Et,ct,Gt;function U(){Dt=new HS(P),Dt.init(),Et=new vT(P,Dt),Ct=new NS(P,Dt,t,Et),F=new _T(P,Dt),Ct.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),le=new XS(P),xt=new rT,Ht=new xT(P,Dt,F,xt,Ct,Et,le),jt=new OS(x),ge=new VS(x),R=new Kv(P),ct=new DS(P,R),b=new GS(P,R,le,ct),z=new YS(P,b,R,le),st=new qS(P,Ct,Ht),ot=new FS(xt),J=new iT(x,jt,ge,Dt,Ct,ct,ot),Q=new bT(x,xt),$=new oT,vt=new dT(Dt),dt=new LS(x,jt,ge,F,z,f,l),wt=new mT(x,z,Ct),Gt=new TT(P,le,Ct,F),ht=new US(P,Dt,le),Ft=new WS(P,Dt,le),le.programs=J.programs,x.capabilities=Ct,x.extensions=Dt,x.properties=xt,x.renderLists=$,x.shadowMap=wt,x.state=F,x.info=le}U();let rt=new Df(x,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=Dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,W,!1))},this.getSize=function(E){return E.set(N,W)},this.setSize=function(E,O,q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,W=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*V,W*V).floor()},this.setDrawingBufferSize=function(E,O,q){N=E,W=O,V=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,O,q,Y){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,O,q,Y),F.viewport(I.copy(it).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Ut)},this.setScissor=function(E,O,q,Y){E.isVector4?Ut.set(E.x,E.y,E.z,E.w):Ut.set(E,O,q,Y),F.scissor(D.copy(Ut).multiplyScalar(V).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){F.setScissorTest(ae=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){L=E},this.getClearColor=function(E){return E.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let Y=0;if(E){let B=!1;if(C!==null){let tt=C.texture.format;B=tt===gh||tt===mh||tt===ph}if(B){let tt=C.texture.type,lt=tt===Ii||tt===jr||tt===Ro||tt===Io||tt===uh||tt===dh,St=dt.getClearColor(),yt=dt.getClearAlpha(),Ot=St.r,Lt=St.g,It=St.b;lt?(g[0]=Ot,g[1]=Lt,g[2]=It,g[3]=yt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ot,_[1]=Lt,_[2]=It,_[3]=yt,P.clearBufferiv(P.COLOR,0,_))}else Y|=P.COLOR_BUFFER_BIT}O&&(Y|=P.DEPTH_BUFFER_BIT),q&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),dt.dispose(),$.dispose(),vt.dispose(),xt.dispose(),jt.dispose(),ge.dispose(),z.dispose(),ct.dispose(),Gt.dispose(),J.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Jt),rt.removeEventListener("sessionend",pt),zt.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=le.autoReset,O=wt.enabled,q=wt.autoUpdate,Y=wt.needsUpdate,B=wt.type;U(),le.autoReset=E,wt.enabled=O,wt.autoUpdate=q,wt.needsUpdate=Y,wt.type=B}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let O=E.target;O.removeEventListener("dispose",j),Mt(O)}function Mt(E){Bt(E),xt.remove(E)}function Bt(E){let O=xt.get(E).programs;O!==void 0&&(O.forEach(function(q){J.releaseProgram(q)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,Y,B,tt){O===null&&(O=Tt);let lt=B.isMesh&&B.matrixWorld.determinant()<0,St=xe(E,O,q,Y,B);F.setMaterial(Y,lt);let yt=q.index,Ot=1;if(Y.wireframe===!0){if(yt=b.getWireframeAttribute(q),yt===void 0)return;Ot=2}let Lt=q.drawRange,It=q.attributes.position,te=Lt.start*Ot,ce=(Lt.start+Lt.count)*Ot;tt!==null&&(te=Math.max(te,tt.start*Ot),ce=Math.min(ce,(tt.start+tt.count)*Ot)),yt!==null?(te=Math.max(te,0),ce=Math.min(ce,yt.count)):It!=null&&(te=Math.max(te,0),ce=Math.min(ce,It.count));let He=ce-te;if(He<0||He===1/0)return;ct.setup(B,Y,St,q,yt);let Ie,we=ht;if(yt!==null&&(Ie=R.get(yt),we=Ft,we.setIndex(Ie)),B.isMesh)Y.wireframe===!0?(F.setLineWidth(Y.wireframeLinewidth*fe()),we.setMode(P.LINES)):we.setMode(P.TRIANGLES);else if(B.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),F.setLineWidth(Vt*fe()),B.isLineSegments?we.setMode(P.LINES):B.isLineLoop?we.setMode(P.LINE_LOOP):we.setMode(P.LINE_STRIP)}else B.isPoints?we.setMode(P.POINTS):B.isSprite&&we.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)So("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),we.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))we.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Vt=B._multiDrawStarts,Fe=B._multiDrawCounts,me=B._multiDrawCount,Qn=yt?R.get(yt).bytesPerElement:1,Bs=xt.get(Y).currentProgram.getUniforms();for(let jn=0;jn<me;jn++)Bs.setValue(P,"_gl_DrawID",jn),we.render(Vt[jn]/Qn,Fe[jn])}else if(B.isInstancedMesh)we.renderInstances(te,He,B.count);else if(q.isInstancedBufferGeometry){let Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Fe=Math.min(q.instanceCount,Vt);we.renderInstances(te,He,Fe)}else we.render(te,He)};function pe(E,O,q){E.transparent===!0&&E.side===Yi&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Je(E,O,q),E.side=mr,E.needsUpdate=!0,Je(E,O,q),E.side=Yi):Je(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),p=vt.get(q),p.init(O),S.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==q&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let tt=B.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let St=tt[lt];pe(St,q,B),Y.add(St)}else pe(tt,q,B),Y.add(tt)}),p=S.pop(),Y},this.compileAsync=function(E,O,q=null){let Y=this.compile(E,O,q);return new Promise(B=>{function tt(){if(Y.forEach(function(lt){xt.get(lt).currentProgram.isReady()&&Y.delete(lt)}),Y.size===0){B(E);return}setTimeout(tt,10)}Dt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let _t=null;function Pt(E){_t&&_t(E)}function Jt(){zt.stop()}function pt(){zt.start()}let zt=new P_;zt.setAnimationLoop(Pt),typeof self<"u"&&zt.setContext(self),this.setAnimationLoop=function(E){_t=E,rt.setAnimationLoop(E),E===null?zt.stop():zt.start()},rt.addEventListener("sessionstart",Jt),rt.addEventListener("sessionend",pt),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,C),p=vt.get(E,S.length),p.init(O),S.push(p),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Xt.setFromProjectionMatrix(K,Ci,O.reversedDepth),Z=this.localClippingEnabled,Wt=ot.init(this.clippingPlanes,Z),m=$.get(E,M.length),m.init(),M.push(m),rt.enabled===!0&&rt.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&Nt(tt,O,-1/0,x.sortObjects)}Nt(E,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(et,L),kt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,kt&&dt.addToRenderList(m,E),this.info.render.frame++,Wt===!0&&ot.beginShadows();let q=p.state.shadowsArray;wt.render(q,E,O),Wt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let tt=O.cameras;if(B.length>0)for(let lt=0,St=tt.length;lt<St;lt++){let yt=tt[lt];Ze(Y,B,E,yt)}kt&&dt.render(E);for(let lt=0,St=tt.length;lt<St;lt++){let yt=tt[lt];$t(m,E,yt,yt.viewport)}}else B.length>0&&Ze(Y,B,E,O),kt&&dt.render(E),$t(m,E,O);C!==null&&w===0&&(Ht.updateMultisampleRenderTarget(C),Ht.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,O),ct.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],Wt===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Nt(E,O,q,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xt.intersectsSprite(E)){Y&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);let lt=z.update(E),St=E.material;St.visible&&m.push(E,lt,St,q,At.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xt.intersectsObject(E))){let lt=z.update(E),St=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),At.copy(lt.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(St)){let yt=lt.groups;for(let Ot=0,Lt=yt.length;Ot<Lt;Ot++){let It=yt[Ot],te=St[It.materialIndex];te&&te.visible&&m.push(E,lt,te,q,At.z,It)}}else St.visible&&m.push(E,lt,St,q,At.z,null)}}let tt=E.children;for(let lt=0,St=tt.length;lt<St;lt++)Nt(tt[lt],O,q,Y)}function $t(E,O,q,Y){let B=E.opaque,tt=E.transmissive,lt=E.transparent;p.setupLightsView(q),Wt===!0&&ot.setGlobalState(x.clippingPlanes,q),Y&&F.viewport(I.copy(Y)),B.length>0&&ee(B,O,q),tt.length>0&&ee(tt,O,q),lt.length>0&&ee(lt,O,q),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ze(E,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new zi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Po:Ii,minFilter:Qr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let tt=p.state.transmissionRenderTarget[Y.id],lt=Y.viewport||I;tt.setSize(lt.z*x.transmissionResolutionScale,lt.w*x.transmissionResolutionScale);let St=x.getRenderTarget(),yt=x.getActiveCubeFace(),Ot=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(G),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),kt&&dt.render(q);let Lt=x.toneMapping;x.toneMapping=yr;let It=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Wt===!0&&ot.setGlobalState(x.clippingPlanes,Y),ee(E,q,Y),Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ce=0,He=O.length;ce<He;ce++){let Ie=O[ce],we=Ie.object,Vt=Ie.geometry,Fe=Ie.material,me=Ie.group;if(Fe.side===Yi&&we.layers.test(Y.layers)){let Qn=Fe.side;Fe.side=gn,Fe.needsUpdate=!0,Ue(we,q,Y,Vt,Fe,me),Fe.side=Qn,Fe.needsUpdate=!0,te=!0}}te===!0&&(Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt))}x.setRenderTarget(St,yt,Ot),x.setClearColor(G,X),It!==void 0&&(Y.viewport=It),x.toneMapping=Lt}function ee(E,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,tt=E.length;B<tt;B++){let lt=E[B],St=lt.object,yt=lt.geometry,Ot=lt.group,Lt=lt.material;Lt.allowOverride===!0&&Y!==null&&(Lt=Y),St.layers.test(q.layers)&&Ue(St,O,q,yt,Lt,Ot)}}function Ue(E,O,q,Y,B,tt){E.onBeforeRender(x,O,q,Y,B,tt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,O,q,Y,E,tt),B.transparent===!0&&B.side===Yi&&B.forceSinglePass===!1?(B.side=gn,B.needsUpdate=!0,x.renderBufferDirect(q,O,Y,B,E,tt),B.side=mr,B.needsUpdate=!0,x.renderBufferDirect(q,O,Y,B,E,tt),B.side=Yi):x.renderBufferDirect(q,O,Y,B,E,tt),E.onAfterRender(x,O,q,Y,B,tt)}function Je(E,O,q){O.isScene!==!0&&(O=Tt);let Y=xt.get(E),B=p.state.lights,tt=p.state.shadowsArray,lt=B.state.version,St=J.getParameters(E,B.state,tt,O,q),yt=J.getProgramCacheKey(St),Ot=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?ge:jt).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",j),Ot=new Map,Y.programs=Ot);let Lt=Ot.get(yt);if(Lt!==void 0){if(Y.currentProgram===Lt&&Y.lightsStateVersion===lt)return Te(E,St),Lt}else St.uniforms=J.getUniforms(E),E.onBeforeCompile(St,x),Lt=J.acquireProgram(St,yt),Ot.set(yt,Lt),Y.uniforms=St.uniforms;let It=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(It.clippingPlanes=ot.uniform),Te(E,St),Y.needsLights=Pe(E),Y.lightsStateVersion=lt,Y.needsLights&&(It.ambientLightColor.value=B.state.ambient,It.lightProbe.value=B.state.probe,It.directionalLights.value=B.state.directional,It.directionalLightShadows.value=B.state.directionalShadow,It.spotLights.value=B.state.spot,It.spotLightShadows.value=B.state.spotShadow,It.rectAreaLights.value=B.state.rectArea,It.ltc_1.value=B.state.rectAreaLTC1,It.ltc_2.value=B.state.rectAreaLTC2,It.pointLights.value=B.state.point,It.pointLightShadows.value=B.state.pointShadow,It.hemisphereLights.value=B.state.hemi,It.directionalShadowMap.value=B.state.directionalShadowMap,It.directionalShadowMatrix.value=B.state.directionalShadowMatrix,It.spotShadowMap.value=B.state.spotShadowMap,It.spotLightMatrix.value=B.state.spotLightMatrix,It.spotLightMap.value=B.state.spotLightMap,It.pointShadowMap.value=B.state.pointShadowMap,It.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Lt,Y.uniformsList=null,Lt}function Re(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=No.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Te(E,O){let q=xt.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function xe(E,O,q,Y,B){O.isScene!==!0&&(O=Tt),Ht.resetTextureUnits();let tt=O.fog,lt=Y.isMeshStandardMaterial?O.environment:null,St=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:As,yt=(Y.isMeshStandardMaterial?ge:jt).get(Y.envMap||lt),Ot=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Lt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),It=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color,He=yr;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(He=x.toneMapping);let Ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=Ie!==void 0?Ie.length:0,Vt=xt.get(Y),Fe=p.state.lights;if(Wt===!0&&(Z===!0||E!==v)){let In=E===v&&Y.id===y;ot.setState(Y,E,In)}let me=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Fe.state.version||Vt.outputColorSpace!==St||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isBatchedMesh&&Vt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Vt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Vt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Vt.instancingMorph===!1&&B.morphTexture!==null||Vt.envMap!==yt||Y.fog===!0&&Vt.fog!==tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ot.numPlanes||Vt.numIntersection!==ot.numIntersection)||Vt.vertexAlphas!==Ot||Vt.vertexTangents!==Lt||Vt.morphTargets!==It||Vt.morphNormals!==te||Vt.morphColors!==ce||Vt.toneMapping!==He||Vt.morphTargetsCount!==we)&&(me=!0):(me=!0,Vt.__version=Y.version);let Qn=Vt.currentProgram;me===!0&&(Qn=Je(Y,O,B));let Bs=!1,jn=!1,zo=!1,Oe=Qn.getUniforms(),di=Vt.uniforms;if(F.useProgram(Qn.program)&&(Bs=!0,jn=!0,zo=!0),Y.id!==y&&(y=Y.id,jn=!0),Bs||v!==E){F.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Oe.setValue(P,"projectionMatrix",E.projectionMatrix),Oe.setValue(P,"viewMatrix",E.matrixWorldInverse);let Vn=Oe.map.cameraPosition;Vn!==void 0&&Vn.setValue(P,ft.setFromMatrixPosition(E.matrixWorld)),Ct.logarithmicDepthBuffer&&Oe.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Oe.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,jn=!0,zo=!0)}if(B.isSkinnedMesh){Oe.setOptional(P,B,"bindMatrix"),Oe.setOptional(P,B,"bindMatrixInverse");let In=B.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),Oe.setValue(P,"boneTexture",In.boneTexture,Ht))}B.isBatchedMesh&&(Oe.setOptional(P,B,"batchingTexture"),Oe.setValue(P,"batchingTexture",B._matricesTexture,Ht),Oe.setOptional(P,B,"batchingIdTexture"),Oe.setValue(P,"batchingIdTexture",B._indirectTexture,Ht),Oe.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Oe.setValue(P,"batchingColorTexture",B._colorsTexture,Ht));let fi=q.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&st.update(B,q,Qn),(jn||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,Oe.setValue(P,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(di.envMap.value=yt,di.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(di.envMapIntensity.value=O.environmentIntensity),jn&&(Oe.setValue(P,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Kn(di,zo),tt&&Y.fog===!0&&Q.refreshFogUniforms(di,tt),Q.refreshMaterialUniforms(di,Y,V,W,p.state.transmissionRenderTarget[E.id]),No.upload(P,Re(Vt),di,Ht)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(No.upload(P,Re(Vt),di,Ht),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Oe.setValue(P,"center",B.center),Oe.setValue(P,"modelViewMatrix",B.modelViewMatrix),Oe.setValue(P,"normalMatrix",B.normalMatrix),Oe.setValue(P,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let In=Y.uniformsGroups;for(let Vn=0,su=In.length;Vn<su;Vn++){let ts=In[Vn];Gt.update(ts,Qn),Gt.bind(ts,Qn)}}return Qn}function Kn(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Pe(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,q){let Y=xt.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),xt.get(E.texture).__webglTexture=O,xt.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let q=xt.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};let Pn=P.createFramebuffer();this.setRenderTarget=function(E,O=0,q=0){C=E,A=O,w=q;let Y=!0,B=null,tt=!1,lt=!1;if(E){let yt=xt.get(E);if(yt.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(yt.__webglFramebuffer===void 0)Ht.setupRenderTarget(E);else if(yt.__hasExternalTextures)Ht.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let It=E.depthTexture;if(yt.__boundDepthTexture!==It){if(It!==null&&xt.has(It)&&(E.width!==It.image.width||E.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(E)}}let Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(lt=!0);let Lt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?B=Lt[O][q]:B=Lt[O],tt=!0):E.samples>0&&Ht.useMultisampledRTT(E)===!1?B=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Lt)?B=Lt[q]:B=Lt,I.copy(E.viewport),D.copy(E.scissor),H=E.scissorTest}else I.copy(it).multiplyScalar(V).floor(),D.copy(Ut).multiplyScalar(V).floor(),H=ae;if(q!==0&&(B=Pn),F.bindFramebuffer(P.FRAMEBUFFER,B)&&Y&&F.drawBuffers(E,B),F.viewport(I),F.scissor(D),F.setScissorTest(H),tt){let yt=xt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,q)}else if(lt){let yt=O;for(let Ot=0;Ot<E.textures.length;Ot++){let Lt=xt.get(E.textures[Ot]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ot,Lt.__webglTexture,q,yt)}}else if(E!==null&&q!==0){let yt=xt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,yt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(E,O,q,Y,B,tt,lt,St=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(yt=yt[lt]),yt){F.bindFramebuffer(P.FRAMEBUFFER,yt);try{let Ot=E.textures[St],Lt=Ot.format,It=Ot.type;if(!Ct.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St),P.readPixels(O,q,Y,B,Et.convert(Lt),Et.convert(It),tt))}finally{let Ot=C!==null?xt.get(C).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,Y,B,tt,lt,St=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(yt=yt[lt]),yt)if(O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B){F.bindFramebuffer(P.FRAMEBUFFER,yt);let Ot=E.textures[St],Lt=Ot.format,It=Ot.type;if(!Ct.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.bufferData(P.PIXEL_PACK_BUFFER,tt.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+St),P.readPixels(O,q,Y,B,Et.convert(Lt),Et.convert(It),0);let ce=C!==null?xt.get(C).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,ce);let He=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await i_(P,He,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,tt),P.deleteBuffer(te),P.deleteSync(He),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){let Y=Math.pow(2,-q),B=Math.floor(E.image.width*Y),tt=Math.floor(E.image.height*Y),lt=O!==null?O.x:0,St=O!==null?O.y:0;Ht.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,lt,St,B,tt),F.unbindTexture()};let ui=P.createFramebuffer(),en=P.createFramebuffer();this.copyTextureToTexture=function(E,O,q=null,Y=null,B=0,tt=null){tt===null&&(B!==0?(So("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=B,B=0):tt=0);let lt,St,yt,Ot,Lt,It,te,ce,He,Ie=E.isCompressedTexture?E.mipmaps[tt]:E.image;if(q!==null)lt=q.max.x-q.min.x,St=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,Lt=q.min.y,It=q.isBox3?q.min.z:0;else{let fi=Math.pow(2,-B);lt=Math.floor(Ie.width*fi),St=Math.floor(Ie.height*fi),E.isDataArrayTexture?yt=Ie.depth:E.isData3DTexture?yt=Math.floor(Ie.depth*fi):yt=1,Ot=0,Lt=0,It=0}Y!==null?(te=Y.x,ce=Y.y,He=Y.z):(te=0,ce=0,He=0);let we=Et.convert(O.format),Vt=Et.convert(O.type),Fe;O.isData3DTexture?(Ht.setTexture3D(O,0),Fe=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ht.setTexture2DArray(O,0),Fe=P.TEXTURE_2D_ARRAY):(Ht.setTexture2D(O,0),Fe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let me=P.getParameter(P.UNPACK_ROW_LENGTH),Qn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Bs=P.getParameter(P.UNPACK_SKIP_PIXELS),jn=P.getParameter(P.UNPACK_SKIP_ROWS),zo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ie.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ie.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,Lt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,It);let Oe=E.isDataArrayTexture||E.isData3DTexture,di=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let fi=xt.get(E),In=xt.get(O),Vn=xt.get(fi.__renderTarget),su=xt.get(In.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,Vn.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,su.__webglFramebuffer);for(let ts=0;ts<yt;ts++)Oe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.get(E).__webglTexture,B,It+ts),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.get(O).__webglTexture,tt,He+ts)),P.blitFramebuffer(Ot,Lt,lt,St,te,ce,lt,St,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||xt.has(E)){let fi=xt.get(E),In=xt.get(O);F.bindFramebuffer(P.READ_FRAMEBUFFER,ui),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,en);for(let Vn=0;Vn<yt;Vn++)Oe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fi.__webglTexture,B,It+Vn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fi.__webglTexture,B),di?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,In.__webglTexture,tt,He+Vn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,In.__webglTexture,tt),B!==0?P.blitFramebuffer(Ot,Lt,lt,St,te,ce,lt,St,P.COLOR_BUFFER_BIT,P.NEAREST):di?P.copyTexSubImage3D(Fe,tt,te,ce,He+Vn,Ot,Lt,lt,St):P.copyTexSubImage2D(Fe,tt,te,ce,Ot,Lt,lt,St);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else di?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Fe,tt,te,ce,He,lt,St,yt,we,Vt,Ie.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Fe,tt,te,ce,He,lt,St,yt,we,Ie.data):P.texSubImage3D(Fe,tt,te,ce,He,lt,St,yt,we,Vt,Ie):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,tt,te,ce,lt,St,we,Vt,Ie.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,tt,te,ce,Ie.width,Ie.height,we,Ie.data):P.texSubImage2D(P.TEXTURE_2D,tt,te,ce,lt,St,we,Vt,Ie);P.pixelStorei(P.UNPACK_ROW_LENGTH,me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Qn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Bs),P.pixelStorei(P.UNPACK_SKIP_ROWS,jn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,zo),tt===0&&O.generateMipmaps&&P.generateMipmap(Fe),F.unbindTexture()},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&Ht.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ht.setTextureCube(E,0):E.isData3DTexture?Ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ht.setTexture2DArray(E,0):Ht.setTexture2D(E,0),F.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,F.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Kh=class extends Cs{constructor(){super();let t=new Gi;t.deleteAttribute("uv");let e=new Wi({side:gn}),n=new Wi,i=new Kr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ae(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new za(t,n,6),a=new hn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ae(t,Bo(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ae(t,Bo(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ae(t,Bo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ae(t,Bo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ae(t,Bo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ae(t,Bo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Bo(r){return new Qa({color:0,emissive:16777215,emissiveIntensity:r})}var ut=(r,t=document)=>t.querySelector(r),Ve=(r,t=document)=>[...t.querySelectorAll(r)],qe=r=>String(r??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ye=matchMedia("(prefers-reduced-motion: reduce)").matches,Nf=matchMedia("(hover: hover) and (pointer: fine)").matches,un=r=>Number(r).toLocaleString("ru-RU")+" \u20BD";function dl(r){let t=Math.max(1,Math.round((Date.now()-r)/6e4));if(t<60)return`${t} \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434`;let e=Math.round(t/60);return e<24?`${e} \u0447 \u043D\u0430\u0437\u0430\u0434`:`${Math.round(e/24)} \u0434\u043D \u043D\u0430\u0437\u0430\u0434`}var N_;function hi(r){let t=ut("#toast");t.textContent=r,t.classList.add("is-on"),clearTimeout(N_),N_=setTimeout(()=>t.classList.remove("is-on"),2800)}var F_=null,fl={onOpen:()=>{},onClose:()=>{}};function Os(r){F_=document.activeElement,r.hidden=!1,document.documentElement.classList.add("modal-open"),fl.onOpen();let t=ut(".modal__panel",r);t.scrollTop=0,Ye||(qt.fromTo(ut(".modal__backdrop",r),{opacity:0},{opacity:1,duration:.35}),qt.fromTo(t,{y:60,opacity:0,rotateX:-12,scale:.96},{y:0,opacity:1,rotateX:0,scale:1,duration:.6,ease:"expo.out"})),setTimeout(()=>(ut("input:not([type=radio]):not([type=file]), button",t)||t).focus({preventScroll:!0}),50)}function Zi(r){if(r.hidden)return;let t=()=>{r.hidden=!0,Ve(".modal").some(e=>!e.hidden)||(document.documentElement.classList.remove("modal-open"),fl.onClose()),F_?.focus?.({preventScroll:!0})};if(Ye)return t();qt.to(ut(".modal__backdrop",r),{opacity:0,duration:.25}),qt.to(ut(".modal__panel",r),{y:40,opacity:0,scale:.97,duration:.3,ease:"power2.in",onComplete:t})}document.addEventListener("click",r=>{let t=r.target.closest("[data-close]");t&&Zi(t.closest(".modal"))});document.addEventListener("keydown",r=>{if(r.key==="Escape"){let t=Ve(".modal").filter(e=>!e.hidden).pop();t&&Zi(t)}});function Qh(r,t=8){if(!Nf||Ye||r._tilt)return;r._tilt=!0;let e=qt.quickTo(r,"rotationY",{duration:.6,ease:"power3"}),n=qt.quickTo(r,"rotationX",{duration:.6,ease:"power3"});r.addEventListener("pointermove",i=>{let s=r.getBoundingClientRect(),o=(i.clientX-s.left)/s.width,a=(i.clientY-s.top)/s.height;e((o-.5)*t*2),n(-(a-.5)*t*2),r.style.setProperty("--mx",o*100+"%"),r.style.setProperty("--my",a*100+"%")}),r.addEventListener("pointerleave",()=>{e(0),n(0)})}var Sr={dark:{core:8150271,a:13041469,b:16732120,c:3727871,d:16777215,coin:16764733,env:.9},light:{core:6966271,a:10215424,b:16727988,c:46054,d:1381660,coin:16757760,env:1.1}};function ET(){let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d");t.fillStyle="#ffcf3d",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=10,t.beginPath(),t.arc(128,128,108,0,Math.PI*2),t.stroke(),t.fillStyle="#3a2600",t.font="800 150px Unbounded, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u20BD",128,138);let e=new Ha(r);return e.colorSpace=En,e.anisotropy=4,e}function O_(r){let t;try{t=new Zh({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return r.remove(),{setTheme(){}}}t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.toneMapping=oh,t.outputColorSpace=En;let e=new Cs,n=new Fo(t);e.environment=n.fromScene(new Kh,.04).texture;let i=new mn(35,1,.1,100);i.position.set(0,0,14);let s=new fr;e.add(s);let o={uTime:{value:0},uAmp:{value:.32}},a=new Xi({color:Sr.dark.core,roughness:.12,metalness:.15,clearcoat:1,clearcoatRoughness:.08,iridescence:1,iridescenceIOR:1.6,iridescenceThicknessRange:[200,900],sheen:.6,sheenColor:new Kt(16732120)});a.onBeforeCompile=N=>{Object.assign(N.uniforms,o),N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
        uniform float uTime; uniform float uAmp;
        vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
        vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
        vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-.85373472095314*r;}
        float snoise(vec3 v){const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
          vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
          vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
          i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
          float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
          vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
          vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
          vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
          vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
          vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
          return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}
        float disp(vec3 p){return snoise(p*.75+vec3(0.,0.,uTime*.25))*uAmp;}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        vec3 tang=normalize(cross(objectNormal,vec3(0.,1.,.001)));vec3 bit=normalize(cross(objectNormal,tang));
        float e=.02;vec3 p0=position+objectNormal*disp(position);
        vec3 pa=position+tang*e;pa+=normalize(pa)*disp(pa);vec3 pb=position+bit*e;pb+=normalize(pb)*disp(pb);
        objectNormal=normalize(cross(pa-p0,pb-p0));`).replace("#include <begin_vertex>","vec3 transformed=position+normal*disp(position);")};let l=new Ae(new Ya(2.1,48),a);s.add(l);let c=new Xi({color:Sr.dark.a,metalness:.6,roughness:.2,clearcoat:1}),h=new Ae(new Co(3.1,.06,16,160),c);h.rotation.set(1.2,.3,0),s.add(h);let u=ET(),d={a:new Xi({color:Sr.dark.a,roughness:.25,metalness:.1,clearcoat:1}),b:new Xi({color:Sr.dark.b,roughness:.2,metalness:.2,clearcoat:1}),c:new Xi({color:Sr.dark.c,roughness:.05,transmission:.9,thickness:1.2,ior:1.4}),d:new Xi({color:Sr.dark.d,roughness:.35,metalness:.9}),coinSide:new Wi({color:Sr.dark.coin,metalness:1,roughness:.25}),coinFace:new Wi({map:u,metalness:.7,roughness:.3})},f={box:new Gi(1,1,1,4,4,4),torus:new Co(.55,.22,24,64),sphere:new Ja(.55,48,32),cone:new Xa(.55,1.1,4),knot:new Ka(.42,.14,128,16),coin:new Ao(.62,.62,.14,48),oct:new $a(.62)},_=[["coin","coin",[-5.2,2.2,.5],1.15],["torus","b",[5.1,2.4,-.5],1.1],["box","a",[-4.4,-2.6,1],.9],["sphere","c",[4.6,-2.2,1.6],1.2],["knot","d",[.2,3.6,-2.5],1],["coin","coin",[3.2,-3.8,-1],.85],["cone","b",[-2.6,-4,-2],.9],["oct","a",[6.6,.1,-3],.9],["sphere","b",[-6.8,-.2,-3],.7],["coin","coin",[-1.6,4.4,-4],.7],["torus","c",[1.8,-4.6,1.2],.6],["box","d",[6.2,4.2,-5],.6]].map(([N,W,V,et],L)=>{let it=N==="coin"?new Ae(f.coin,[d.coinSide,d.coinFace,d.coinFace]):new Ae(f[N],d[W]);return N==="coin"&&(it.rotation.x=Math.PI/2),it.position.set(...V),it.scale.setScalar(et),it.userData={base:new k(...V),sp:.4+L%5*.13,ph:L*1.7,rot:new k(L%3*.2+.15,L%4*.15+.1,.08)},s.add(it),it}),m=420,p=new Float32Array(m*3);for(let N=0;N<m;N++)p[N*3]=(Math.random()-.5)*30,p[N*3+1]=(Math.random()-.5)*18,p[N*3+2]=(Math.random()-.5)*14-4;let M=new Cn;M.setAttribute("position",new An(p,3));let S=new Eo({size:.04,color:16777215,transparent:!0,opacity:.6,depthWrite:!1}),x=new Va(M,S);e.add(x);let T=new nl(16777215,2.2);T.position.set(4,6,6),e.add(T);let A=new Kr(16732120,30,30);A.position.set(-6,-3,3),e.add(A);let w=new Kr(3727871,30,30);w.position.set(6,3,2),e.add(w);let C={x:0,y:0,tx:0,ty:0};addEventListener("pointermove",N=>{C.tx=N.clientX/innerWidth-.5,C.ty=N.clientY/innerHeight-.5},{passive:!0});let y=0;addEventListener("scroll",()=>{y=Math.min(1,scrollY/innerHeight)},{passive:!0});function v(){let N=r.clientWidth,W=r.clientHeight;t.setSize(N,W,!1),i.aspect=N/W,i.position.z=N<700?24:N<1100?16:15,s.position.x=N>=1100?3.2:N>=700?1.6:0,s.position.y=N<700?3.2:0,i.updateProjectionMatrix()}new ResizeObserver(v).observe(r),v();let I=!0;new IntersectionObserver(([N])=>{I=N.isIntersecting}).observe(r);let D=new il,H=0;function G(){if(requestAnimationFrame(G),!I||document.hidden)return;let N=Math.min(D.getDelta(),.05),W=D.elapsedTime,V=Ye?.15:1;H=Math.min(1,H+N*.6);let et=1-Math.pow(1-H,4);C.x+=(C.tx-C.x)*.05,C.y+=(C.ty-C.y)*.05,o.uTime.value=W*V,o.uAmp.value=.28+Math.sin(W*.7)*.06+y*.25,l.rotation.y=W*.15*V+C.x*.8,l.rotation.x=C.y*.5,l.scale.setScalar((.4+.6*et)*(1-y*.25)),h.rotation.z=W*.3*V,h.rotation.x=1.2+C.y*.4,_.forEach(L=>{let it=L.userData,Ut=1+(1-et)*1.6+y*.6;L.position.set(it.base.x*Ut+Math.cos(W*it.sp*V+it.ph)*.25,it.base.y*Ut+Math.sin(W*it.sp*V+it.ph)*.45,it.base.z+Math.sin(W*.3+it.ph)*.3),L.rotation.x+=it.rot.x*N*V,L.rotation.y+=it.rot.y*N*V,L.rotation.z+=it.rot.z*N*V}),x.rotation.y=W*.02,x.position.y=y*2,s.rotation.y=C.x*.35,s.rotation.x=C.y*.2,i.position.y=-y*2.5,i.lookAt(0,-y*1.2,0),t.render(e,i)}G();function X(N){let W=Sr[N]||Sr.dark;a.color.setHex(W.core),c.color.setHex(W.a),d.a.color.setHex(W.a),d.b.color.setHex(W.b),d.c.color.setHex(W.c),d.d.color.setHex(W.d),d.coinSide.color.setHex(W.coin),S.color.setHex(N==="light"?3877775:16777215),S.opacity=N==="light"?.35:.6,t.toneMappingExposure=W.env}return{setTheme:X}}var B_={pro:"299 \u20BD",boost:"99 \u20BD"},br=[{id:"design",name:"\u0414\u0438\u0437\u0430\u0439\u043D",ic:"\u{1F3A8}",hue:280},{id:"video",name:"\u041C\u043E\u043D\u0442\u0430\u0436",ic:"\u{1F3AC}",hue:340},{id:"code",name:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",ic:"\u{1F4BB}",hue:200},{id:"motion",name:"Motion / 3D",ic:"\u{1F9CA}",hue:160},{id:"text",name:"\u0422\u0435\u043A\u0441\u0442\u044B",ic:"\u270D\uFE0F",hue:40},{id:"smm",name:"SMM",ic:"\u{1F4C8}",hue:15},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430 \u0438 \u0437\u0432\u0443\u043A",ic:"\u{1F3A7}",hue:250}],ko=r=>br.find(t=>t.id===r)||br[0];function k_(r,t,e){let n=0;for(let l of String(r))n=n*31+l.charCodeAt(0)>>>0;let i=()=>(n=n*1664525+1013904223>>>0)/4294967296,s=(t+40+i()*60)%360,o=Array.from({length:5},()=>{let l=(i()*400).toFixed(0),c=(i()*260).toFixed(0),h=(30+i()*90).toFixed(0);return`<circle cx="${l}" cy="${c}" r="${h}" fill="hsl(${t+i()*80|0} 90% ${55+i()*15}%)" opacity="${(.25+i()*.45).toFixed(2)}"/>`}).join(""),a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${t} 80% 22%)"/><stop offset="1" stop-color="hsl(${s} 85% 45%)"/></linearGradient><filter id="b"><feGaussianBlur stdDeviation="22"/></filter></defs><rect width="400" height="260" fill="url(#g)"/><g filter="url(#b)">${o}</g><g fill="none" stroke="#fff" stroke-opacity=".14"><path d="M0 200 Q100 150 200 190 T400 170"/><path d="M0 225 Q120 175 220 215 T400 195"/></g><text x="200" y="150" font-size="84" text-anchor="middle">${e}</text></svg>`;return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a)}var AT=36e5,CT=Date.now(),z_=[{id:"s1",type:"order",cat:"video",title:"\u0421\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C 3 \u0440\u043E\u043B\u0438\u043A\u0430 \u0434\u043B\u044F TikTok",price:1500,deadline:"3 \u0434\u043D\u044F",author:"\u0414\u0438\u043C\u0430",desc:"\u0415\u0441\u0442\u044C \u0441\u044B\u0440\u044B\u0435 \u0432\u0438\u0434\u0435\u043E \u0441 \u043E\u0431\u0437\u043E\u0440\u043E\u043C \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043E\u043A. \u041D\u0443\u0436\u043D\u043E \u043D\u0430\u0440\u0435\u0437\u0430\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B \u0438 \u0442\u0440\u0435\u043D\u0434\u043E\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B. \u0414\u043B\u0438\u043D\u0430 \u2014 \u0434\u043E 40 \u0441\u0435\u043A\u0443\u043D\u0434 \u043A\u0430\u0436\u0434\u044B\u0439.",ago:2,resp:4},{id:"s2",type:"service",cat:"design",title:"\u0421\u0434\u0435\u043B\u0430\u044E \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0443 \u0438 \u0448\u0430\u043F\u043A\u0443 \u0434\u043B\u044F \u043A\u0430\u043D\u0430\u043B\u0430",price:700,deadline:"1 \u0434\u0435\u043D\u044C",author:"\u0410\u043B\u0438\u043D\u0430",desc:"\u0420\u0438\u0441\u0443\u044E \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438 \u0432 \u0441\u0442\u0438\u043B\u0435 \u0430\u043D\u0438\u043C\u0435 \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C, \u0434\u0435\u043B\u0430\u044E \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u0434\u043B\u044F YouTube \u0438 Telegram. \u0414\u0432\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E.",ago:5,resp:9,images:["assets/lots/avatar-design.webp"]},{id:"s3",type:"order",cat:"code",title:"Telegram-\u0431\u043E\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438",price:4e3,deadline:"\u041D\u0435\u0434\u0435\u043B\u044F",author:"\u041C\u0430\u0440\u0430\u0442",desc:"\u041D\u0443\u0436\u0435\u043D \u0431\u043E\u0442: \u0432\u044B\u0431\u043E\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0437\u0430\u043F\u0438\u0441\u044C, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u0437\u0430 \u0447\u0430\u0441. Python \u0438\u043B\u0438 Node \u2014 \u0431\u0435\u0437 \u0440\u0430\u0437\u043D\u0438\u0446\u044B. \u0425\u043E\u0441\u0442\u0438\u043D\u0433 \u043F\u043E\u043C\u043E\u0433\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C.",ago:8,resp:3,team:!0},{id:"s4",type:"service",cat:"motion",title:"3D-\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0441 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0435\u0439 \u0434\u043B\u044F \u0438\u043D\u0442\u0440\u043E",price:2500,deadline:"3 \u0434\u043D\u044F",author:"\u0422\u0438\u043C\u0443\u0440",desc:"\u0421\u0434\u0435\u043B\u0430\u044E \u043E\u0431\u044A\u0451\u043C\u043D\u044B\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0432 Blender \u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044E \u043D\u0430 5 \u0441\u0435\u043A\u0443\u043D\u0434. \u041E\u0442\u0434\u0430\u043C \u0432 MP4 \u0438 \u0441 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0444\u043E\u043D\u043E\u043C.",ago:12,resp:6,images:["assets/lots/3d-logo.webp"]},{id:"s5",type:"order",cat:"design",title:"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u043A\u043E\u0444\u0435\u0439\u043D\u0438 \u0443 \u043A\u043E\u043B\u043B\u0435\u0434\u0436\u0430",price:2e3,deadline:"2 \u043D\u0435\u0434\u0435\u043B\u0438",author:"\u0421\u043E\u043D\u044F",desc:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043A\u043E\u0444\u0435\u0439\u043D\u044F, \u0445\u043E\u0442\u0438\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043B\u044F \u0441\u0442\u0430\u043A\u0430\u043D\u043E\u0432. \u041F\u0440\u0438\u0448\u043B\u044E \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u044B.",ago:20,resp:11},{id:"s6",type:"service",cat:"text",title:"\u041D\u0430\u043F\u0438\u0448\u0443 \u043F\u043E\u0441\u0442\u044B \u0434\u043B\u044F Telegram-\u043A\u0430\u043D\u0430\u043B\u0430",price:300,deadline:"1 \u0434\u0435\u043D\u044C",author:"\u041B\u0435\u0440\u0430",desc:"\u041F\u0438\u0448\u0443 \u0436\u0438\u0432\u043E \u0438 \u0431\u0435\u0437 \u0432\u043E\u0434\u044B. \u0426\u0435\u043D\u0430 \u2014 \u0437\u0430 \u043E\u0434\u0438\u043D \u043F\u043E\u0441\u0442 \u0434\u043E 1500 \u0437\u043D\u0430\u043A\u043E\u0432. \u041C\u043E\u0433\u0443 \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442-\u043F\u043B\u0430\u043D \u043D\u0430 \u043C\u0435\u0441\u044F\u0446.",ago:26,resp:2,images:["assets/lots/telegram-texts.webp"]},{id:"s7",type:"order",cat:"smm",title:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C Instagram \u0434\u043B\u044F \u0431\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F\u0430",price:3500,deadline:"\u041D\u0435\u0434\u0435\u043B\u044F",author:"\u0420\u0443\u0441\u043B\u0430\u043D",desc:"\u041D\u0443\u0436\u043D\u044B \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0441\u0442\u043E\u0440\u0438\u0441, \u0445\u0430\u0439\u043B\u0430\u0439\u0442\u044B, 9 \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u043E\u0441\u0442\u043E\u0432. \u0424\u043E\u0442\u043E \u0435\u0441\u0442\u044C, \u043D\u0443\u0436\u043D\u043E \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0432 \u0435\u0434\u0438\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C.",ago:30,resp:5,team:!0},{id:"s8",type:"service",cat:"music",title:"\u0421\u0432\u0435\u0434\u0443 \u0442\u0440\u0435\u043A \u0438 \u0441\u0434\u0435\u043B\u0430\u044E \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433",price:1200,deadline:"3 \u0434\u043D\u044F",author:"\u0415\u0433\u043E\u0440",desc:"\u0421\u0432\u043E\u0436\u0443 \u0431\u0438\u0442\u044B \u0438 \u0432\u043E\u043A\u0430\u043B, \u0447\u0438\u0449\u0443 \u0448\u0443\u043C\u044B, \u0434\u0435\u043B\u0430\u044E \u0433\u0440\u043E\u043C\u043A\u0438\u0439 \u043C\u0430\u0441\u0442\u0435\u0440 \u043F\u043E\u0434 \u0441\u0442\u0440\u0438\u043C\u0438\u043D\u0433\u0438. \u041F\u0440\u0438\u043C\u0435\u0440 \u0434\u043E/\u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0438\u0448\u043B\u044E \u0432 \u043B\u0438\u0447\u043A\u0435.",ago:40,resp:7},{id:"s9",type:"order",cat:"code",title:"\u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u0430",price:5e3,deadline:"2 \u043D\u0435\u0434\u0435\u043B\u0438",author:"\u041A\u0430\u043C\u0438\u043B\u0430",desc:"\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0441 \u0444\u043E\u0440\u043C\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0438 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0439 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0435\u0439. \u0415\u0441\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u044B \u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u043D\u0443\u0436\u0435\u043D \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0432\u0451\u0440\u0441\u0442\u043A\u0430.",ago:52,resp:8,team:!0},{id:"s10",type:"service",cat:"code",title:"\u041D\u0430\u0443\u0447\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044E \u0441 \u043D\u0443\u043B\u044F \u0434\u043E \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432",price:1500,deadline:"\u041D\u0435\u0434\u0435\u043B\u044F",author:"\u0410\u0440\u0441\u0435\u043D\u0438\u0439",desc:"Python, JavaScript \u0438\u043B\u0438 C++ \u2014 \u043D\u0430 \u0432\u044B\u0431\u043E\u0440. \u041F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u044F, \u0432\u043C\u0435\u0441\u0442\u0435 \u0441\u0434\u0435\u043B\u0430\u0435\u043C \u0442\u0432\u043E\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043F\u0440\u043E\u0435\u043A\u0442. \u0426\u0435\u043D\u0430 \u2014 \u0437\u0430 4 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u043F\u043E \u0447\u0430\u0441\u0443.",ago:3,resp:5,images:["assets/lots/programming.webp"]}].map(r=>({...r,created:CT-r.ago*AT,images:r.images||[],seed:!0}));var RT="hustle",Bf="lots",Ff;function PT(){return Ff||(Ff=new Promise((r,t)=>{let e=indexedDB.open(RT,1);e.onupgradeneeded=()=>e.result.createObjectStore(Bf,{keyPath:"id"}),e.onsuccess=()=>r(e.result),e.onerror=()=>t(e.error)})),Ff}function Of(r,t){return PT().then(e=>new Promise((n,i)=>{let s=e.transaction(Bf,r),o=t(s.objectStore(Bf));s.oncomplete=()=>n(o&&"result"in o?o.result:void 0),s.onerror=()=>i(s.error),s.onabort=()=>i(s.error)}))}var jh={all:()=>Of("readonly",r=>r.getAll()).catch(()=>[]),put:r=>Of("readwrite",t=>t.put(r)),del:r=>Of("readwrite",t=>t.delete(r))},Ji={get(r,t){try{let e=localStorage.getItem(r);return e==null?t:JSON.parse(e)}catch{return t}},set(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}};function V_(r,t=1400,e=.85){return new Promise((n,i)=>{if(r.type==="image/gif"&&r.size<25e5){let a=new FileReader;a.onload=()=>n(a.result),a.onerror=i,a.readAsDataURL(r);return}let s=URL.createObjectURL(r),o=new Image;o.onload=()=>{let a=Math.min(1,t/Math.max(o.width,o.height)),l=document.createElement("canvas");l.width=Math.round(o.width*a),l.height=Math.round(o.height*a),l.getContext("2d").drawImage(o,0,0,l.width,l.height),URL.revokeObjectURL(s);let c=l.toDataURL("image/webp",e);n(c.startsWith("data:image/webp")?c:l.toDataURL("image/jpeg",e))},o.onerror=()=>{URL.revokeObjectURL(s),i(new Error("bad image"))},o.src=s})}var zf="hustle-account",tu=100,be=Ji.get(zf,null),kf=null,pl="in",G_=()=>Ji.set(zf,be),W_=()=>be,X_=r=>(r||"?").charCodeAt(0)*7%360;function eu(r){let t=ut("#acctBtn");if(!be){t.classList.remove("is-in"),t.innerHTML='<span class="acct__label">\u0412\u043E\u0439\u0442\u0438</span>',t.setAttribute("aria-label","\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");return}t.classList.add("is-in"),t.setAttribute("aria-label",`\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0438 \u0431\u0430\u043B\u0430\u043D\u0441: ${un(be.balance)}`),t.innerHTML=`<span class="ava" style="--h:${X_(be.name)}">${qe(be.name[0])}</span><span class="acct__bal">${un(be.balance)}</span>`,r&&!Ye&&qt.fromTo(t,{scale:1.15},{scale:1,duration:.6,ease:"elastic.out(1, 0.4)"})}function IT(){let r=ut("#authForm");ut("#skillPick").innerHTML=br.map(t=>`<label class="skill"><input type="checkbox" name="skills" value="${t.id}"><span>${t.ic} ${t.name}</span></label>`).join(""),r.addEventListener("submit",t=>{t.preventDefault();let e=ut("#authError");if(e.textContent="",!r.checkValidity()){let o=r.querySelector(":invalid");e.textContent=o.name==="agree"?"\u041D\u0443\u0436\u043D\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438":"\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0438\u043C\u044F \u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442",o.focus();return}let n=new FormData(r);be={name:n.get("name").trim(),contact:n.get("contact").trim(),skills:n.getAll("skills"),balance:0,history:[],created:Date.now()},G_(),Ji.set("hustle-name",be.name);let i=ut("#createForm [name=author]");i&&(i.value=be.name),eu(!0),Zi(ut("#authModal")),hi(`\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ${be.name}! \u{1F389}`);let s=kf;kf=null,s&&setTimeout(s,450)})}function Vf(r){return be?!0:(kf=r,Os(ut("#authModal")),!1)}function q_(){let r=ut("#walletPanel"),t=br.filter(e=>be.skills.includes(e.id));if(r.innerHTML=`
    <button class="modal__x" type="button" data-close aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">\u2715</button>
    <div class="prof">
      <span class="ava ava--xl" style="--h:${X_(be.name)}">${qe(be.name[0])}</span>
      <div><h2 class="modal__title" id="walletTitle">${qe(be.name)}</h2><p class="prof__contact">${qe(be.contact)}</p></div>
    </div>
    ${t.length?`<div class="prof__skills">${t.map(e=>`<span class="chip">${e.ic} ${e.name}</span>`).join("")}</div>`:""}
    <div class="wallet">
      <div class="wallet__glow" aria-hidden="true"></div>
      <p class="wallet__label mono">\u0411\u0430\u043B\u0430\u043D\u0441 <span class="wallet__demo">\u0434\u0435\u043C\u043E</span></p>
      <p class="wallet__sum" id="walletSum">${un(be.balance)}</p>
      <div class="wallet__btns">
        <button class="btn btn--primary" type="button" data-money="in"><span>\uFF0B \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C</span></button>
        <button class="btn btn--ghost" type="button" data-money="out"><span>\u2197 \u0412\u044B\u0432\u0435\u0441\u0442\u0438</span></button>
      </div>
    </div>
    <div class="hist">
      <p class="hist__h">\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</p>
      ${be.history.length?be.history.slice(0,20).map(e=>`
        <div class="hist__row">
          <span class="hist__ic hist__ic--${e.type}">${e.type==="in"?"\u2193":"\u2191"}</span>
          <div><b>${e.type==="in"?"\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435":"\u0412\u044B\u0432\u043E\u0434"}</b><small>${LT[e.method]} \xB7 ${dl(e.at)}</small></div>
          <span class="hist__sum hist__sum--${e.type}">${e.type==="in"?"+":"\u2212"}${un(e.amount)}</span>
        </div>`).join(""):'<p class="hist__empty">\u041E\u043F\u0435\u0440\u0430\u0446\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442</p>'}
    </div>
    <button class="btn btn--danger btn--block" type="button" id="logout"><span>\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F</span></button>`,!Ye){let e={v:0},n=ut("#walletSum",r);qt.to(e,{v:be.balance,duration:1.2,ease:"expo.out",onUpdate:()=>{n.textContent=un(Math.round(e.v))}}),qt.from(Ve(".hist__row",r),{x:-20,opacity:0,stagger:.05,duration:.5,delay:.2})}ut("#logout",r).addEventListener("click",()=>{confirm("\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F? \u0414\u0435\u043C\u043E-\u0431\u0430\u043B\u0430\u043D\u0441 \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.")&&(be=null,Ji.set(zf,null),eu(),Zi(ut("#walletModal")),hi("\u0422\u044B \u0432\u044B\u0448\u0435\u043B \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"))})}var LT={card:"\u041A\u0430\u0440\u0442\u0430",sbp:"\u0421\u0411\u041F",crypto:"\u041A\u0440\u0438\u043F\u0442\u0430"};function DT(r){pl=r,ut("#moneyForm").reset(),ut("#moneyError").textContent="",ut("#moneyTitle").textContent=r==="in"?"\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0431\u0430\u043B\u0430\u043D\u0441\u0430":"\u0412\u044B\u0432\u043E\u0434 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",ut("#moneySub").textContent=r==="in"?`\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u2014 ${un(tu)}.`:`\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u043A \u0432\u044B\u0432\u043E\u0434\u0443: ${un(be.balance)}. \u041C\u0438\u043D\u0438\u043C\u0443\u043C \u2014 ${un(tu)}.`,ut("#moneyBtn").textContent=r==="in"?"\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C":"\u0412\u044B\u0432\u0435\u0441\u0442\u0438";let e=r==="in"?[500,1e3,2500,5e3]:[500,1e3,"all"];ut("#quickSums").innerHTML=e.map(n=>`<button type="button" class="chip" data-sum="${n}">${n==="all"?"\u0412\u0441\u0451":un(n)}</button>`).join(""),Os(ut("#moneyModal"))}function UT(){ut("#acctBtn").addEventListener("click",()=>{if(!be)return Vf(()=>H_());H_()}),document.addEventListener("click",r=>{let t=r.target.closest("[data-money]");t&&DT(t.dataset.money);let e=r.target.closest("[data-sum]");if(e){let n=ut("#moneyForm");n.amount.value=e.dataset.sum==="all"?be.balance:e.dataset.sum,Ve("#quickSums .chip").forEach(i=>i.classList.toggle("is-active",i===e))}}),ut("#moneyForm").addEventListener("submit",r=>{r.preventDefault();let t=r.target,e=ut("#moneyError"),n=Math.floor(+t.amount.value);if(e.textContent="",!n||n<tu){e.textContent=`\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u2014 ${un(tu)}`;return}if(pl==="out"&&n>be.balance){e.textContent="\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u043D\u0430 \u0431\u0430\u043B\u0430\u043D\u0441\u0435";return}if(n>1e6){e.textContent="\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0441\u0443\u043C\u043C\u0430";return}be.balance+=pl==="in"?n:-n,be.history.unshift({type:pl,amount:n,method:t.method.value,at:Date.now()}),G_(),eu(!0),Zi(ut("#moneyModal")),hi(pl==="in"?`\u0411\u0430\u043B\u0430\u043D\u0441 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D \u043D\u0430 ${un(n)} (\u0434\u0435\u043C\u043E)`:`\u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0432\u044B\u0432\u043E\u0434 ${un(n)} \u0441\u043E\u0437\u0434\u0430\u043D\u0430 (\u0434\u0435\u043C\u043E)`),ut("#walletModal").hidden||q_()})}function H_(){q_(),Os(ut("#walletModal"))}function Y_(){IT(),UT(),eu()}var nu=6,$e={type:"all",cat:"all",q:"",sort:"new",mine:[]},Z_="hustle-responses",Gf=()=>Ji.get(Z_,{}),J_=()=>[...$e.mine,...z_],ru=r=>(r.resp||0)+(Gf()[r.id]?.length||0),K_=r=>r.images?.[0]||k_(r.id,ko(r.cat).hue,ko(r.cat).ic);function NT(){let r=$e.q.trim().toLowerCase(),t=J_().filter(n=>!($e.type==="mine"&&n.seed||($e.type==="order"||$e.type==="service")&&n.type!==$e.type||$e.cat!=="all"&&n.cat!==$e.cat||r&&!(n.title+" "+n.desc+" "+ko(n.cat).name).toLowerCase().includes(r))),e={new:(n,i)=>i.created-n.created,cheap:(n,i)=>n.price-i.price,expensive:(n,i)=>i.price-n.price,popular:(n,i)=>ru(i)-ru(n)}[$e.sort];return t.sort(e)}function FT(r){let t=ko(r.cat);return`<article class="lot" data-id="${qe(r.id)}" tabindex="0" role="button" aria-label="${qe(r.title)}, ${un(r.price)}" style="--h:${t.hue}">
    <div class="lot__media">
      <img src="${K_(r)}" alt="" loading="lazy" decoding="async">
      <span class="lot__type lot__type--${r.type}">${r.type==="order"?"\u0417\u0430\u043A\u0430\u0437":"\u0423\u0441\u043B\u0443\u0433\u0430"}</span>
      ${r.images?.length>1?`<span class="lot__count">\u{1F5BC} ${r.images.length}</span>`:""}
      ${r.seed?"":'<span class="lot__mine">\u041C\u043E\u0439</span>'}
    </div>
    <div class="lot__body">
      <p class="lot__cat">${t.ic} ${qe(t.name)}${r.team?" \xB7 <b>\u043A\u043E\u043C\u0430\u043D\u0434\u0430</b>":""}</p>
      <h3 class="lot__title">${qe(r.title)}</h3>
      <div class="lot__meta">
        <span class="ava" style="--h:${r.author.charCodeAt(0)*7%360}">${qe(r.author[0]||"?")}</span>
        <span>${qe(r.author)}</span><span class="dot">\xB7</span><span>${dl(r.created)}</span>
      </div>
      <div class="lot__foot">
        <b class="lot__price">${un(r.price)}</b>
        <span class="lot__resp">${ru(r)} \u043E\u0442\u043A\u043B. \xB7 ${qe(r.deadline)}</span>
      </div>
    </div>
    <span class="lot__shine" aria-hidden="true"></span>
  </article>`}function Tr(r=!0){let t=ut("#lotGrid"),e=NT();t.innerHTML=e.map(FT).join(""),ut("#emptyState").hidden=e.length>0;let n=Ve(".lot",t);n.forEach(i=>Qh(i,6)),r&&!Ye&&n.length&&qt.fromTo(n,{y:60,opacity:0,rotateX:-18,scale:.94},{y:0,opacity:1,rotateX:0,scale:1,duration:.8,ease:"expo.out",stagger:.05,clearProps:"transform,opacity"}),Zt.refresh()}function ml(){let r=ut("#typeTabs .tab.is-active"),t=ut("#typeTabs .tabs__pill");r&&(t.style.width=r.offsetWidth+"px",t.style.transform=`translateX(${r.offsetLeft}px)`)}function OT(){ut("#typeTabs").addEventListener("click",n=>{let i=n.target.closest(".tab");i&&(Ve("#typeTabs .tab").forEach(s=>{s.classList.toggle("is-active",s===i),s.setAttribute("aria-selected",s===i)}),$e.type=i.dataset.type,ml(),Tr())}),addEventListener("resize",ml),document.fonts?.ready.then(ml),ml();let r=ut("#catFilter");r.innerHTML='<button class="chip is-active" data-cat="all">\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</button>'+br.map(n=>`<button class="chip" data-cat="${n.id}" style="--h:${n.hue}">${n.ic} ${n.name}</button>`).join(""),r.addEventListener("click",n=>{let i=n.target.closest(".chip");i&&(Ve(".chip",r).forEach(s=>s.classList.toggle("is-active",s===i)),$e.cat=i.dataset.cat,Tr())});let t=ut("#heroChips");t.innerHTML=br.slice(0,5).map(n=>`<button type="button" class="chip chip--glass" data-cat="${n.id}">${n.ic} ${n.name}</button>`).join(""),t.addEventListener("click",n=>{let i=n.target.closest(".chip");i&&(ut(`#catFilter .chip[data-cat="${i.dataset.cat}"]`).click(),Wf())});let e;ut("#marketSearch").addEventListener("input",n=>{clearTimeout(e),e=setTimeout(()=>{$e.q=n.target.value,Tr()},180)}),ut("#sortSelect").addEventListener("change",n=>{$e.sort=n.target.value,Tr()}),ut("#heroSearch").addEventListener("submit",n=>{n.preventDefault();let i=new FormData(n.target).get("q")||"";ut("#marketSearch").value=i,$e.q=i,Tr(!1),Wf()})}function Wf(){let r=ut("#market");window.__lenis?window.__lenis.scrollTo(r,{offset:-70,duration:1.4}):r.scrollIntoView({behavior:Ye?"auto":"smooth"})}function $_(r){let t=J_().find(a=>a.id===r);if(!t)return;let e=ko(t.cat),n=t.images?.length?t.images:[K_(t)],i=Gf()[t.id]||[],s=ut("#lotPanel");s.innerHTML=`
    <button class="modal__x" type="button" data-close aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">\u2715</button>
    <div class="gallery">
      <div class="gallery__main"><div class="gallery__bg" style="background-image:url('${n[0]}')"></div><img id="galMain" src="${n[0]}" alt="${qe(t.title)}"></div>
      ${n.length>1?`<div class="gallery__thumbs">${n.map((a,l)=>`<button type="button" class="${l?"":"is-on"}" data-i="${l}"><img src="${a}" alt="\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ${l+1}"></button>`).join("")}</div>`:""}
    </div>
    <div class="lotv">
      <p class="lot__cat">${e.ic} ${qe(e.name)} \xB7 ${t.type==="order"?"\u0417\u0430\u043A\u0430\u0437":"\u0423\u0441\u043B\u0443\u0433\u0430"}${t.team?" \xB7 <b>\u0438\u0449\u0443\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0443</b>":""}</p>
      <h2 class="modal__title" id="lotTitle">${qe(t.title)}</h2>
      <div class="lotv__stats">
        <div><small>\u0426\u0435\u043D\u0430</small><b>${un(t.price)}</b></div>
        <div><small>\u0421\u0440\u043E\u043A</small><b>${qe(t.deadline)}</b></div>
        <div><small>\u041E\u0442\u043A\u043B\u0438\u043A\u0438</small><b id="lotResp">${ru(t)}</b></div>
      </div>
      <p class="lotv__desc">${qe(t.desc).replace(/\n/g,"<br>")}</p>
      <div class="lot__meta"><span class="ava" style="--h:${t.author.charCodeAt(0)*7%360}">${qe(t.author[0]||"?")}</span><span>${qe(t.author)}</span><span class="dot">\xB7</span><span>${dl(t.created)}</span></div>
      ${i.length?`<div class="resps"><p class="mono">\u041E\u0442\u043A\u043B\u0438\u043A\u0438 \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430</p>${i.map(a=>`<div class="resp"><b>${qe(a.name)}</b>${a.price?` \xB7 ${un(a.price)}`:""}<p>${qe(a.msg)}</p></div>`).join("")}</div>`:""}
      <form class="respond" id="respondForm">
        <p class="respond__h">${t.type==="order"?"\u041E\u0442\u043A\u043B\u0438\u043A\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0437\u0430\u043A\u0430\u0437":"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0443"}</p>
        <div class="field-row">
          <label class="field"><span>\u0418\u043C\u044F</span><input name="name" required maxlength="30" placeholder="\u0422\u0432\u043E\u0451 \u0438\u043C\u044F"></label>
          <label class="field"><span>\u0422\u0432\u043E\u044F \u0446\u0435\u043D\u0430, \u20BD</span><input name="price" type="number" min="0" step="50" placeholder="${t.price}"></label>
        </div>
        <label class="field"><span>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</span><textarea name="msg" rows="3" required maxlength="600" placeholder="${t.type==="order"?"\u041F\u043E\u0447\u0435\u043C\u0443 \u0442\u044B \u0441\u043F\u0440\u0430\u0432\u0438\u0448\u044C\u0441\u044F, \u043F\u0440\u0438\u043C\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442, \u0441\u0440\u043E\u043A\u0438":"\u0427\u0442\u043E \u043D\u0443\u0436\u043D\u043E \u0441\u0434\u0435\u043B\u0430\u0442\u044C"}"></textarea></label>
        <button class="btn btn--primary btn--block" type="submit"><span>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u043A\u043B\u0438\u043A</span></button>
      </form>
      ${t.seed?"":'<button class="btn btn--danger btn--block" type="button" id="delLot"><span>\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u043E\u0439 \u043B\u043E\u0442</span></button>'}
    </div>`,Os(ut("#lotModal"));let o=ut("#galMain",s);Ve(".gallery__thumbs button",s).forEach(a=>a.addEventListener("click",()=>{if(Ve(".gallery__thumbs button",s).forEach(l=>l.classList.toggle("is-on",l===a)),Ye){o.src=n[a.dataset.i];return}qt.to(o,{opacity:0,scale:1.04,duration:.18,onComplete:()=>{o.src=n[a.dataset.i],o.previousElementSibling.style.backgroundImage=`url('${n[a.dataset.i]}')`,qt.to(o,{opacity:1,scale:1,duration:.35})}})})),ut("#respondForm",s).addEventListener("submit",a=>{var u;a.preventDefault();let l=a.target;if(!l.reportValidity())return;let c=Object.fromEntries(new FormData(l)),h=Gf();(h[u=t.id]||(h[u]=[])).push({name:c.name.trim(),msg:c.msg.trim(),price:c.price?+c.price:0,at:Date.now()}),Ji.set(Z_,h),hi("\u041E\u0442\u043A\u043B\u0438\u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u{1F680}"),Zi(ut("#lotModal")),Tr(!1)}),ut("#delLot",s)?.addEventListener("click",async()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043B\u043E\u0442 \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F?")&&(await jh.del(t.id),$e.mine=$e.mine.filter(a=>a.id!==t.id),Zi(ut("#lotModal")),hi("\u041B\u043E\u0442 \u0443\u0434\u0430\u043B\u0451\u043D"),Tr())})}function BT(){let r=ut("#lotGrid");r.addEventListener("click",t=>{let e=t.target.closest(".lot");e&&$_(e.dataset.id)}),r.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&t.target.classList.contains("lot")&&(t.preventDefault(),$_(t.target.dataset.id))})}var wr=[];function iu(){let r=ut("#thumbs");r.innerHTML=wr.map((t,e)=>`<div class="thumb" draggable="false"><img src="${t}" alt="\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ${e+1}">${e===0?"<span>\u043E\u0431\u043B\u043E\u0436\u043A\u0430</span>":""}<button type="button" data-rm="${e}" aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435">\u2715</button>${e?`<button type="button" class="thumb__cover" data-cover="${e}" aria-label="\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u043E\u0439">\u2605</button>`:""}</div>`).join(""),ut("#drop").classList.toggle("is-full",wr.length>=nu),Ye||qt.from(Ve(".thumb",r).slice(-1),{scale:.6,opacity:0,duration:.5,ease:"back.out(2)"})}async function Hf(r){let t=[...r].filter(n=>n.type.startsWith("image/"));if(!t.length)return hi("\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");let e=nu-wr.length;if(e<=0)return hi(`\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ${nu} \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439`);t.length>e&&hi(`\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E ${e} \u0438\u0437 ${t.length} \u2014 \u043B\u0438\u043C\u0438\u0442 ${nu}`);for(let n of t.slice(0,e))try{wr.push(await V_(n)),iu()}catch{hi(`\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \xAB${n.name}\xBB`)}}function kT(){let r=ut("#createModal"),t=ut("#createForm"),e=ut("#drop"),n=ut("#fileInput");ut("#catSelect").innerHTML=br.map(s=>`<option value="${s.id}">${s.ic} ${s.name}</option>`).join(""),document.addEventListener("click",s=>{if(s.target.closest('[data-open="create"]')){s.preventDefault();let l=()=>{let c=W_();c&&!t.author.value&&(t.author.value=c.name),Os(r)};Vf(l)&&l()}let a=s.target.closest("[data-toast]");a&&hi(a.dataset.toast)}),n.addEventListener("change",()=>{Hf(n.files),n.value=""}),["dragenter","dragover"].forEach(s=>e.addEventListener(s,o=>{o.preventDefault(),e.classList.add("is-over")})),["dragleave","drop"].forEach(s=>e.addEventListener(s,o=>{o.preventDefault(),e.classList.remove("is-over")})),e.addEventListener("drop",s=>Hf(s.dataTransfer.files)),t.addEventListener("paste",s=>{let o=[...s.clipboardData?.files||[]];o.length&&Hf(o)}),ut("#thumbs").addEventListener("click",s=>{let o=s.target.closest("[data-rm]"),a=s.target.closest("[data-cover]");if(o&&(wr.splice(+o.dataset.rm,1),iu()),a){let[l]=wr.splice(+a.dataset.cover,1);wr.unshift(l),iu()}});let i=Ji.get("hustle-name","");i&&(t.author.value=i),t.addEventListener("submit",async s=>{s.preventDefault();let o=ut("#createError");if(o.textContent="",!t.checkValidity()){let c=t.querySelector(":invalid");o.textContent=c.name==="price"?"\u0423\u043A\u0430\u0436\u0438 \u0446\u0435\u043D\u0443 \u043E\u0442 100 \u20BD":"\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F",c.focus(),Ye||qt.fromTo(t,{x:-8},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"});return}let a=Object.fromEntries(new FormData(t)),l={id:"u"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),type:a.type,cat:a.cat,title:a.title.trim(),price:Math.round(+a.price),deadline:a.deadline,author:a.author.trim(),desc:a.desc.trim(),team:!!a.team,images:wr.slice(),created:Date.now(),resp:0};try{await jh.put(l)}catch{o.textContent="\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043C\u0435\u0441\u0442\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u2014 \u0443\u0431\u0435\u0440\u0438 \u0447\u0430\u0441\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A";return}Ji.set("hustle-name",l.author),$e.mine.unshift(l),wr=[],iu(),t.reset(),t.author.value=l.author,Zi(r),hi("\u041B\u043E\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u{1F389}"),$e.type="all",$e.cat="all",$e.q="",ut("#marketSearch").value="",Ve("#typeTabs .tab").forEach(c=>c.classList.toggle("is-active",c.dataset.type==="all")),Ve("#catFilter .chip").forEach(c=>c.classList.toggle("is-active",c.dataset.cat==="all")),ut("#sortSelect").value=$e.sort="new",ml(),Tr(),Wf(),setTimeout(()=>{ut(`.lot[data-id="${l.id}"]`)?.classList.add("is-new")},900)})}async function Q_(){OT(),BT(),kT(),$e.mine=(await jh.all()).sort((r,t)=>t.created-r.created),Tr(!1),Ye||(qt.set("#lotGrid .lot",{opacity:0}),Zt.create({trigger:"#lotGrid",start:"top 85%",once:!0,onEnter:()=>qt.fromTo("#lotGrid .lot",{y:80,opacity:0,rotateX:-25},{y:0,opacity:1,rotateX:0,duration:1,stagger:.07,ease:"expo.out",clearProps:"transform,opacity"})}))}qt.registerPlugin(Zt);var Jn=document.documentElement,Ki=null;Ye||(Ki=new Xm({lerp:.1,smoothWheel:!0}),window.__lenis=Ki,Ki.on("scroll",Zt.update),qt.ticker.add(r=>Ki.raf(r*1e3)),qt.ticker.lagSmoothing(0),fl.onOpen=()=>Ki.stop(),fl.onClose=()=>Ki.start());document.addEventListener("click",r=>{r.target.closest("[data-open]")&&j_();let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href"),n=e==="#top"?document.body:ut(e);n&&(r.preventDefault(),j_(),Ki?Ki.scrollTo(e==="#top"?0:n,{offset:-70,duration:1.4}):n.scrollIntoView({behavior:Ye?"auto":"smooth"}))});var zT=O_(ut("#scene"));function i0(r,t){let e=()=>{Jn.setAttribute("data-theme",r);try{localStorage.setItem("hustle-theme",r)}catch{}ut("meta[name=theme-color]").content=r==="light"?"#f4f2ee":"#08080c",zT.setTheme(r)};if(t&&document.startViewTransition&&!Ye){let n=ut("#themeToggle").getBoundingClientRect(),i=n.left+n.width/2,s=n.top+n.height/2,o=Math.hypot(Math.max(i,innerWidth-i),Math.max(s,innerHeight-s));document.startViewTransition(e).ready.then(()=>{Jn.animate({clipPath:[`circle(0 at ${i}px ${s}px)`,`circle(${o}px at ${i}px ${s}px)`]},{duration:700,easing:"cubic-bezier(.7,0,.2,1)",pseudoElement:"::view-transition-new(root)"})})}else e()}i0(Jn.getAttribute("data-theme")||"dark",!1);ut("#themeToggle").addEventListener("click",()=>i0(Jn.getAttribute("data-theme")==="dark"?"light":"dark",!0));var Xf=ut("#burger");function j_(){Jn.classList.remove("menu-open"),Xf.setAttribute("aria-expanded","false")}Xf.addEventListener("click",()=>{let r=Jn.classList.toggle("menu-open");Xf.setAttribute("aria-expanded",r)});var t0=0,e0=ut("#header");function n0(r){e0.classList.toggle("is-scrolled",r>30),e0.classList.toggle("is-hidden",r>400&&r>t0&&!Jn.classList.contains("menu-open")),t0=r}Ki?Ki.on("scroll",r=>n0(r.scroll)):addEventListener("scroll",()=>n0(scrollY),{passive:!0});Ve("[data-price]").forEach(r=>{r.textContent=B_[r.dataset.price]});ut("#year").textContent=new Date().getFullYear();function VT(r){let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s)){i.append(" ");return}let o=document.createElement("span");o.className="sw",[...s].forEach(a=>{let l=document.createElement("span");l.className="sc",l.textContent=a,o.append(l)}),i.append(o)}),n.replaceWith(i)}else n.nodeType===1&&n.tagName!=="BR"&&t(n)})};return t(r),Ve(".sc",r)}if(Nf&&!Ye){Jn.classList.add("has-cursor");let r=ut(".cursor__dot"),t=ut(".cursor__ring"),e=qt.quickTo(r,"x",{duration:.1}),n=qt.quickTo(r,"y",{duration:.1}),i=qt.quickTo(t,"x",{duration:.45,ease:"power3"}),s=qt.quickTo(t,"y",{duration:.45,ease:"power3"});addEventListener("pointermove",a=>{e(a.clientX),n(a.clientY),i(a.clientX),s(a.clientY)},{passive:!0}),document.addEventListener("pointerover",a=>{let l=a.target.closest("a, button, .lot, label.drop, summary, select, .chip");Jn.classList.toggle("cursor-hot",!!l),Jn.classList.toggle("cursor-text",!l&&!!a.target.closest("input, textarea"))}),document.addEventListener("pointerdown",()=>Jn.classList.add("cursor-down")),document.addEventListener("pointerup",()=>Jn.classList.remove("cursor-down")),Ve(".magnetic").forEach(a=>{let l=qt.quickTo(a,"x",{duration:.6,ease:"elastic.out(1, 0.4)"}),c=qt.quickTo(a,"y",{duration:.6,ease:"elastic.out(1, 0.4)"});a.addEventListener("pointermove",h=>{let u=a.getBoundingClientRect();l((h.clientX-u.left-u.width/2)*.35),c((h.clientY-u.top-u.height/2)*.35)}),a.addEventListener("pointerleave",()=>{l(0),c(0)})});let o=Ve(".float-card");addEventListener("pointermove",a=>{let l=a.clientX/innerWidth-.5,c=a.clientY/innerHeight-.5;o.forEach(h=>qt.to(h,{x:l*60*h.dataset.depth,y:c*40*h.dataset.depth,rotateY:l*20,rotateX:-c*20,duration:1,overwrite:"auto"}))},{passive:!0})}Ve(".tilt").forEach(r=>Qh(r,7));function HT(){if(Ye)return;Ve(".split").forEach(n=>{let i=VT(n);qt.from(i,{yPercent:110,rotateX:-80,opacity:0,transformOrigin:"50% 100%",duration:1,ease:"expo.out",stagger:.018,scrollTrigger:{trigger:n,start:"top 85%"}})}),Ve(".reveal").forEach(n=>{qt.from(n,{y:50,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 90%"}})});let r=ut(".marquee__track"),t=qt.to(r,{xPercent:-50,repeat:-1,duration:26,ease:"none"});Zt.create({onUpdate:n=>{let i=n.getVelocity();qt.to(t,{timeScale:1+Math.min(Math.abs(i)/300,6)*(i<0?-1:1),duration:.3,overwrite:!0}),qt.to(".marquee",{skewY:qt.utils.clamp(-4,4,i/-400),duration:.4,overwrite:!0})}}),Zt.addEventListener("scrollEnd",()=>qt.to(t,{timeScale:1,duration:.8}));let e=qt.matchMedia();e.add("(min-width: 900px)",()=>{let n=ut("#howTrack"),i=()=>n.scrollWidth-n.parentElement.clientWidth;qt.to(n,{x:()=>-i(),ease:"none",scrollTrigger:{trigger:".how__wrap",start:"center center",end:()=>"+="+i(),pin:"#how",scrub:1,invalidateOnRefresh:!0,anticipatePin:1}})}),e.add("(max-width: 899px)",()=>{Ve(".step").forEach(n=>qt.from(n,{y:60,opacity:0,rotateX:-20,duration:1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 88%"}}))}),qt.from(".orbit",{scale:.5,rotate:-90,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".orbit",start:"top 80%"}}),qt.from(".plan",{y:120,rotateY:n=>(n-1)*-25,rotateX:20,opacity:0,duration:1.3,ease:"expo.out",stagger:.12,scrollTrigger:{trigger:".plans",start:"top 80%"}}),qt.fromTo(".footer__big",{yPercent:60,scale:.9},{yPercent:0,scale:1,ease:"none",scrollTrigger:{trigger:".footer",start:"top bottom",end:"bottom bottom",scrub:!0}}),qt.to(".cta__orb",{rotate:180,ease:"none",scrollTrigger:{trigger:".cta",start:"top bottom",end:"bottom top",scrub:!0}}),qt.to(".hero__inner",{yPercent:-18,opacity:.2,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}})}function GT(){let r=ut("#preloader");if(Ye){r.remove(),Jn.classList.add("is-ready");return}let t=ut("#preloadNum"),e={v:0};qt.timeline().from(".preloader__word span",{yPercent:120,rotateX:-90,opacity:0,stagger:.06,duration:.8,ease:"expo.out"}).to(e,{v:100,duration:1.1,ease:"power2.inOut",onUpdate:()=>{t.textContent=Math.round(e.v)}},0).to(".preloader__bar i",{scaleX:1,duration:1.1,ease:"power2.inOut"},0).to(".preloader__word span",{yPercent:-120,opacity:0,stagger:.04,duration:.5,ease:"power3.in"},"+=0.1").to(r,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"expo.inOut"},"-=0.2").add(()=>{r.remove(),Jn.classList.add("is-ready")}).from(".hero__title .word",{yPercent:120,rotateX:-70,opacity:0,duration:1.2,ease:"expo.out",stagger:.07},"-=0.5").from(".hero__eyebrow, .hero__lead, .search, .hero__chips .chip, .hero__cta > *",{y:30,opacity:0,duration:.9,ease:"expo.out",stagger:.05,clearProps:"transform,opacity"},"-=0.9").from(".float-card",{scale:.5,opacity:0,duration:1,ease:"back.out(1.8)",stagger:.12},"-=0.8").from(".header",{yPercent:-100,opacity:0,duration:.8,ease:"expo.out",clearProps:"transform,opacity"},"-=1")}Y_();Q_().then(()=>Zt.refresh());HT();GT();addEventListener("load",()=>Zt.refresh());})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
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
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
