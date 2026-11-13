(()=>{var X_=Object.defineProperty;var q_=(r,t,e)=>t in r?X_(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ct=(r,t,e)=>q_(r,typeof t!="symbol"?t+"":t,e);function Yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Yf(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},mu,cn,Ue,di=1e8,Se=1/di,au=Math.PI*2,Y_=au/4,$_=0,$f=Math.sqrt,Z_=Math.cos,J_=Math.sin,je=function(t){return typeof t=="string"},Ve=function(t){return typeof t=="function"},Zi=function(t){return typeof t=="number"},bl=function(t){return typeof t>"u"},Di=function(t){return typeof t=="object"},Hn=function(t){return t!==!1},gu=function(){return typeof window<"u"},dl=function(t){return Ve(t)||je(t)},Zf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,K_=/random\([^)]+\)/g,Q_=/,\s*/g,zf=/(?:-?\.?\d|\.)+/gi,_u=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,xu=/[+-]=-?[.\d]+/,j_=/[^,'"\[\]\s]+/gi,t0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Be,Pi,lu,vu,jn={},gl={},Jf,Kf=function(t){return(gl=Us(t,jn))&&_n},Tl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Go=function(t,e){return!e&&console.warn(t)},Qf=function(t,e){return t&&(jn[t]=e)&&gl&&(gl[t]=e)||jn},Wo=function(){return 0},e0={suppressEvents:!0,isStart:!0,kill:!1},fl={suppressEvents:!0,kill:!1},n0={suppressEvents:!0},yu={},Sr=[],cu={},jf,kn={},eu={},kf=30,pl=[],Mu="",Su=function(t){var e=t[0],n,i;if(Di(e)||Ve(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=pl.length;i--&&!pl[i].targetTest(e););n=pl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Eu(t[i],n)))||t.splice(i,1);return t},br=function(t){return t._gsap||Su(fi(t))[0]._gsap},bu=function(t,e,n){return(n=t[e])&&Ve(n)?t[e]():bl(n)&&t.getAttribute&&t.getAttribute(e)||n},Pn=function(t,e){return(t=t.split(",")).forEach(e)||t},He=function(t){return Math.round(t*1e5)/1e5||0},Oe=function(t){return Math.round(t*1e7)/1e7||0},ts=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},i0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},_l=function(){var t=Sr.length,e=Sr.slice(0),n,i;for(cu={},Sr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Tu=function(t){return!!(t._initted||t._startAt||t.add)},tp=function(t,e,n,i){Sr.length&&!cn&&_l(),t.render(e,n,i||!!(cn&&e<0&&Tu(t))),Sr.length&&!cn&&_l()},ep=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(j_).length<2?e:je(t)?t.trim():t},np=function(t){return t},ti=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},r0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Us=function(t,e){for(var n in e)t[n]=e[n];return t},Vf=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Di(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},xl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zo=function(t){var e=t.parent||Be,n=t.keyframes?r0(gn(t.keyframes)):ti;if(Hn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},s0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ip=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},wl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Tr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Jr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},o0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},hu=function(t,e,n,i){return t._startAt&&(cn?t._startAt.revert(fl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},a0=function r(t){return!t||t._ts&&r(t.parent)},Hf=function(t){return t._repeat?Ns(t._tTime,t=t.duration()+t._rDelay)*t:0},Ns=function(t,e){var n=Math.floor(t=Oe(t/e));return t&&n===t?n-1:n},vl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},El=function(t){return t._end=Oe(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Oe(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),El(t),n._dirty||Jr(n,t)),t},rp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=vl(t.rawTime(),e),(!e._dur||$o(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),Jr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Ii=function(t,e,n,i){return e.parent&&Tr(e),e._start=Oe((Zi(n)?n:!n&&yl(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Be?ui(t,n,e):t._time)+e._delay),e._end=Oe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ip(t,e,"_first","_last",t._sort?"_start":0),yl(e)||(t._recent=e),i||rp(t,e),t._ts<0&&Al(t,t._tTime),t},sp=function(t,e){return(jn.ScrollTrigger||Tl("scrollTrigger",e))&&jn.ScrollTrigger.create(e,t)},op=function(t,e,n,i,s){if(Ru(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&jf!==Vn.frame)return Sr.push(t),t._lazy=[s,i],1},l0=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},yl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},c0=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&l0(t)&&!(!t._initted&&yl(t))||(t._ts<0||t._dp._ts<0)&&!yl(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=$o(0,t._tDur,e),h=Ns(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ns(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||cn||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&op(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&hu(t,e,n,!0),t._onUpdate&&!n&&Qn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Qn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Tr(t,1),!n&&!cn&&(Qn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},h0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Fs=function(t,e,n,i){var s=t._repeat,o=Oe(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Oe(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Al(t,t._tTime=t._tDur*a),t.parent&&El(t),n||Jr(t.parent,t),t},Gf=function(t){return t instanceof mn?Jr(t):Fs(t,t._dur)},u0={_start:0,endTime:Wo,totalDuration:Wo},ui=function r(t,e,n){var i=t.labels,s=t._recent||u0,o=t.duration()>=di?s.endTime(!1):t._dur,a,l,c;return je(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(gn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ko=function(t,e,n){var i=Zi(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;o.immediateRender=Hn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Ye(e[0],o,e[s+1])},wr=function(t,e){return t||t===0?e(t):e},$o=function(t,e,n){return n<t?t:n>e?e:n},hn=function(t,e){return!je(t)||!(e=t0.exec(t))?"":e[1]},d0=function(t,e,n){return wr(n,function(i){return $o(t,e,i)})},uu=[].slice,ap=function(t,e){return t&&Di(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Di(t[0]))&&!t.nodeType&&t!==Pi},f0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return je(i)&&!e||ap(i,1)?(s=n).push.apply(s,fi(i)):n.push(i)})||n},fi=function(t,e,n){return Ue&&!e&&Ue.selector?Ue.selector(t):je(t)&&!n&&(lu||!Os())?uu.call((e||vu).querySelectorAll(t),0):gn(t)?f0(t,n):ap(t)?uu.call(t,0):t?[t]:[]},du=function(t){return t=fi(t)[0]||Go("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return fi(e,n.querySelectorAll?n:n===t?Go("Invalid scope")||vu.createElement("div"):t)}},lp=function(t){return t.sort(function(){return .5-Math.random()})},cp=function(t){if(Ve(t))return t;var e=Di(t)?t:{each:t},n=Kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return je(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var _=(g||e).length,m=o[_],p,M,S,x,T,A,w,C,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,di])[1],!y){for(w=-di;w<(w=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(m=o[_]=[],p=l?Math.min(y,_)*h-.5:i%y,M=y===di?0:l?_*u/y-.5:i/y|0,w=0,C=di,A=0;A<_;A++)S=A%y-p,x=M-(A/y|0),m[A]=T=c?Math.abs(c==="y"?x:S):$f(S*S+x*x),T>w&&(w=T),T<C&&(C=T);i==="random"&&lp(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=hn(e.amount||e.each)||0,n=n&&_<0?E0(n):n}return _=(m[d]-m.min)/m.max||0,Oe(m.b+(n?n(_):_)*m.v)+m.u}},fu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Oe(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Zi(n)?0:hn(n))}},hp=function(t,e){var n=gn(t),i,s;return!n&&Di(t)&&(i=n=t.radius||di,t.values?(t=fi(t.values),(s=!Zi(t[0]))&&(i*=i)):t=fu(t.increment)),wr(e,n?Ve(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=di,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||Zi(o)?h:h+hn(o)}:fu(t))},up=function(t,e,n,i){return wr(gn(t)?!e:n===!0?!!(n=0):!i,function(){return gn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},p0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},m0=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}},g0=function(t,e,n){return fp(t,e,0,1,n)},dp=function(t,e,n){return wr(n,function(i){return t[~~e(i)]})},_0=function r(t,e,n){var i=e-t;return gn(t)?dp(t,r(0,t.length),e):wr(n,function(s){return(i+(s-t)%i)%i+t})},x0=function r(t,e,n){var i=e-t,s=i*2;return gn(t)?dp(t,r(0,t.length-1),e):wr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Bs=function(t){return t.replace(K_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Q_);return up(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},fp=function(t,e,n,i,s){var o=e-t,a=i-n;return wr(s,function(l){return n+((l-t)/o*a||0)})},v0=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=je(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(gn(t)&&!gn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(d,~~g);return h[_](g-_)},n=e}else i||(t=Us(gn(t)?[]:{},t));if(!h){for(l in e)Au.call(a,t,l,"get",e[l]);s=function(g){return Du(g,a)||(o?t.p:t)}}}return wr(n,s)},Wf=function(t,e,n){var i=t.labels,s=di,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qn=function(t,e,n){var i=t.vars,s=i[e],o=Ue,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Sr.length&&_l(),a&&(Ue=a),h=l?s.apply(c,l):s.call(c),Ue=o,h},Oo=function(t){return Tr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&Qn(t,"onInterrupt"),t},Ls,pp=[],mp=function(t){if(t)if(t=!t.name&&t.default||t,gu()||t.headless){var e=t.name,n=Ve(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Wo,render:Du,add:Au,kill:F0,modifier:N0,rawVars:0},o={targetTest:0,get:0,getSetter:Cl,aliases:{},register:0};if(Os(),t!==i){if(kn[e])return;ti(i,ti(xl(t,s),o)),Us(i.prototype,Us(s,xl(t,o))),kn[i.prop=e]=i,t.targetTest&&(pl.push(i),yu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qf(e,i),t.register&&t.register(_n,i,In)}else pp.push(t)},we=255,Bo={aqua:[0,we,we],lime:[0,we,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,we],navy:[0,0,128],white:[we,we,we],olive:[128,128,0],yellow:[we,we,0],orange:[we,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[we,0,0],pink:[we,192,203],cyan:[0,we,we],transparent:[we,we,we,0]},nu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*we+.5|0},gp=function(t,e,n){var i=t?Zi(t)?[t>>16,t>>8&we,t&we]:0:Bo.black,s,o,a,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Bo[t])i=Bo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&we,i&we,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&we,t&we]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(zf),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=nu(l+1/3,s,o),i[1]=nu(l,s,o),i[2]=nu(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(_u),n&&i.length<4&&(i[3]=1),i}else i=t.match(zf)||Bo.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/we,o=i[1]/we,a=i[2]/we,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},_p=function(t){var e=[],n=[],i=-1;return t.split($i).forEach(function(s){var o=s.match(jr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Xf=function(t,e,n){var i="",s=(t+i).match($i),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=gp(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=_p(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace($i,"1").split(jr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split($i),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},$i=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Bo)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),y0=/hsl[a]?\(/,wu=function(t){var e=t.join(" "),n;if($i.lastIndex=0,$i.test(e))return n=y0.test(e),t[1]=Xf(t[1],n),t[0]=Xf(t[0],n,_p(t[1])),!0},Xo,Vn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,g=function _(m){var p=r()-i,M=m===!0,S,x,T,A;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,S=T-o,(S>0||M)&&(A=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=S+(S>=s?0:s-S),x=1),M||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](T,d,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Jf&&(!lu&&gu()&&(Pi=lu=window,vu=Pi.document||{},jn.gsap=_n,(Pi.gsapVersions||(Pi.gsapVersions=[])).push(_n.version),Kf(gl||Pi.GreenSockGlobals||!Pi.gsap&&Pi||{}),pp.forEach(mp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Xo=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Xo=0,c=Wo},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=u.time*1e3+s},add:function(m,p,M){var S=p?function(x,T,A,w){m(x,T,A,w),u.remove(S)}:m;return u.remove(m),a[M?"unshift":"push"](S),Os(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),Os=function(){return!Xo&&Vn.wake()},ue={},M0=/^[\d.\-M][\d.\-,\s]/,S0=/["']/g,b0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(S0,"").trim():+c,i=l.substr(a+1).trim();return e},T0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},w0=function(t){var e=(t+"").split("("),n=ue[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[b0(e[1])]:T0(t).split(",").map(ep)):ue._CE&&M0.test(t)?ue._CE("",t):n},E0=function(t){return function(e){return 1-t(1-e)}},Kr=function(t,e){return t&&(Ve(t)?t:ue[t]||w0(t))||e},es=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Pn(t,function(a){ue[a]=jn[a]=s,ue[o=a.toLowerCase()]=n;for(var l in s)ue[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ue[a+"."+l]=s[l]}),s},xp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},iu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/au*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*J_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:xp(a);return s=au/s,l.config=function(c,h){return r(t,c,h)},l},ru=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:xp(n);return i.config=function(s){return r(t,s)},i};Pn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;es(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ue.Linear.easeNone=ue.none=ue.Linear.easeIn;es("Elastic",iu("in"),iu("out"),iu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};es("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});es("Circ",function(r){return-($f(1-r*r)-1)});es("Sine",function(r){return r===1?1:-Z_(r*Y_)+1});es("Back",ru("in"),ru("out"),ru());ue.SteppedEase=ue.steps=jn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*$o(0,o,a)|0)+s)*n}}};Ho.ease=ue["quad.out"];Pn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mu+=r+","+r+"Params,"});var Eu=function(t,e){this.id=$_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:bu,this.set=e?e.getSetter:Cl},qo=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Fs(this,+e.duration,1,1),this.data=e.data,Ue&&(this._ctx=Ue,Ue.data.push(this)),Xo||Vn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Al(this,n),!s._dp||s.parent||rp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ns(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||s>0&&s<a)&&this.totalTime($o(-Math.abs(this._delay),a,s),i!==!1),El(this),o0(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Os(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,s=this.progress()===1&&Math.abs(this._zTime)!==Se,o;if(s)for(this._tTime-=Se,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Se){s=!1;break}o=o._next}this.totalTime(i,s)}return this},t.startTime=function(n){if(arguments.length){this._start=Oe(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ii(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=n0);var i=cn;return cn=n,Tu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ui(this,n),Hn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i)),this._dur||(this._zTime=-Se),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ve(n)?n:np,l=function(){var h=i.then;i.then=null,s&&s(),Ve(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Oo(this)},r})();ti(qo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var mn=(function(r){Yf(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Be&&Ii(n.parent||Be,Yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sp(Yi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ko(0,arguments,this),this},e.from=function(i,s,o){return ko(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ko(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,zo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,ui(this,o),1),this},e.call=function(i,s,o){return Ii(this,Ye.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ye(i,o,ui(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,zo(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,zo(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Oe(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,_,m,p,M,S,x,T,A,w;if(this!==Be&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,x=this._start,S=this._ts,p=!S,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Oe(h%m),h===l?(_=this._repeat,d=c):(T=Oe(h/m),_=~~T,_&&_===T&&(d=c,_--),d>c&&(d=c)),T=Ns(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),A&&_&1&&(d=c-d,w=1),_!==T&&!this._lock){var C=A&&T&1,y=C===(A&&_&1);if(_<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Oe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Qn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=h0(this,Oe(a),Oe(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(Qn(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=-Se);break}}f=g}else{f=this._last;for(var v=i<0?i:d;f;){if(g=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||cn&&Tu(f)),d!==this._time||!this._ts&&!p){M=0,g&&(h+=this._zTime=v?-Se:Se);break}}f=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Se)._zTime=d>=a?1:-1,this._ts))return this._start=x,El(this),this.render(i,s,o);this._onUpdate&&!s&&Qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Tr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Zi(s)||(s=ui(this,s,i)),!(i instanceof qo)){if(gn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(je(i))return this.addLabel(i,s);if(Ve(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Ii(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ye?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return je(i)?this.removeLabel(i):Ve(i)?this.killTweensOf(i):(i.parent===this&&wl(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Oe(Vn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ui(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Ye.delayedCall(0,s||Wo,o);return a.data="isPause",this._hasPause=1,Ii(this,a,ui(this,i))},e.removePause=function(i){var s=this._first;for(i=ui(this,i);s;)s._start===i&&s.data==="isPause"&&Tr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Mr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=fi(i),l=this._first,c=Zi(s),h;l;)l instanceof Ye?i0(l._targets,a)&&(c?(!Mr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ui(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Ye.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Fs(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,ti({startAt:{time:ui(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wf(this,ui(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wf(this,ui(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Oe(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Jr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=di,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ii(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Oe(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Fs(o,o===Be&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Be._ts&&(tp(Be,vl(i,Be)),jf=Vn.frame),Vn.frame>=kf){kf+=Gn.autoSleep||120;var s=Be._first;if((!s||!s._ts)&&Gn.autoSleep&&Vn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Vn.sleep()}}},t})(qo);ti(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var A0=function(t,e,n,i,s,o,a){var l=new In(this._pt,t,e,0,1,Iu,null,s),c=0,h=0,u,d,f,g,_,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Bs(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(tu)||[];u=tu.exec(i);)g=u[0],_=i.substring(c,u.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?ts(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=tu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(xu.test(i)||p)&&(l.e=0),this._pt=l,l},Au=function(t,e,n,i,s,o,a,l,c,h){Ve(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ve(u)?c?t[e.indexOf("set")||!Ve(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ve(u)?c?D0:yp:Pu,g;if(je(i)&&(~i.indexOf("random(")&&(i=Bs(i)),i.charAt(1)==="="&&(g=ts(d,i)+(hn(d)||0),(g||g===0)&&(i=g))),!h||d!==i||pu)return!isNaN(d*i)&&i!==""?(g=new In(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?U0:Mp,0,f),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!u&&!(e in t)&&Tl(e,i),A0.call(this,t,e,d,i,f,l||Gn.stringFilter,c))},C0=function(t,e,n,i,s){if(Ve(t)&&(t=Vo(t,s,e,n,i)),!Di(t)||t.style&&t.nodeType||gn(t)||Zf(t))return je(t)?Vo(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=Vo(t[a],s,e,n,i);return o},Cu=function(t,e,n,i,s,o){var a,l,c,h;if(kn[t]&&(a=new kn[t]).init(s,a.rawVars?e[t]:C0(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new In(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Ls))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Mr,pu,Ru=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!mu,x=t.timeline,T=i.easeReverse||u,A,w,C,y,v,I,L,H,G,X,N,W,V;if(x&&(!d||!s)&&(s="none"),t._ease=Kr(s,Ho.ease),t._rEase=T&&(Kr(T)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||d&&!i.stagger){if(H=m[0]?br(m[0]).harness:0,W=H&&i[H.prop],A=xl(i,yu),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&g?fl:e0),_._lazy=0),o){if(Tr(t._startAt=Ye.set(m,ti({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return Qn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!a&&!f)&&t._startAt.revert(fl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),C=ti({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Hn(l),immediateRender:a,stagger:0,parent:p},A),W&&(C[H.prop]=W),Tr(t._startAt=Ye.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(fl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Hn(l)||l&&!g,w=0;w<m.length;w++){if(v=m[w],L=v._gsap||Su(m)[w]._gsap,t._ptLookup[w]=X={},cu[L.id]&&Sr.length&&_l(),N=M===m?w:M.indexOf(v),H&&(G=new H).init(v,W||A,t,N,M)!==!1&&(t._pt=y=new In(t._pt,v,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(et){X[et]=y}),G.priority&&(I=1)),!H||W)for(C in A)kn[C]&&(G=Cu(C,A,t,N,v,M))?G.priority&&(I=1):X[C]=y=Au.call(t,v,C,"get",A[C],N,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(v,t._op[w]),S&&t._pt&&(Mr=t,Be.killTweensOf(v,X,t.globalTime(e)),V=!t.parent,Mr=0),t._pt&&l&&(cu[L.id]=1)}I&&Lu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!V,d&&e<=0&&x.render(di,!0,!0)},R0=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return pu=1,t.vars[e]="+=0",Ru(t,a),pu=0,l?Go(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=He(n)+hn(u.e)),u.b&&(u.b=h.s+hn(u.b))},P0=function(t,e){var n=t[0]?br(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Us({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},I0=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(gn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Vo=function(t,e,n,i,s){return Ve(t)?t.call(e,n,i,s):je(t)&&~t.indexOf("random(")?Bs(t):t},Ml=Mu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",vp={};Pn(Ml+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vp[r]=1});Ml=Ml.split(",");var Ye=(function(r){Yf(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:zo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=i.parent||Be,M=(gn(n)||Zf(n)?Zi(n[0]):"length"in i)?[n]:fi(n),S,x,T,A,w,C,y,v;if(a._targets=M.length?Su(M):Go("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||dl(c)||dl(h)){i=a.vars;var I=i.easeReverse||i.yoyoEase;if(S=a.timeline=new mn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Yi(a),S._start=0,d||dl(c)||dl(h)){if(A=M.length,y=d&&cp(d),Di(d))for(w in d)~Ml.indexOf(w)&&(v||(v={}),v[w]=d[w]);for(x=0;x<A;x++)T=xl(i,vp),T.stagger=0,I&&(T.easeReverse=I),v&&Us(T,v),C=M[x],T.duration=+Vo(c,Yi(a),x,C,M),T.delay=(+Vo(h,Yi(a),x,C,M)||0)-a._delay,!d&&A===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(C,T,y?y(x,C,M):0),S._ease=ue.none;S.duration()?c=h=0:a.timeline=0}else if(g){zo(ti(S.vars.defaults,{ease:"none"})),S._ease=Kr(g.ease||i.ease||"none");var L=0,H,G,X;if(gn(g))g.forEach(function(N){return S.to(M,N,">")}),S.duration();else{T={};for(w in g)w==="ease"||w==="easeEach"||I0(w,g[w],T,g.easeEach);for(w in T)for(H=T[w].sort(function(N,W){return N.t-W.t}),L=0,x=0;x<H.length;x++)G=H[x],X={ease:G.e,duration:(G.t-(x?H[x-1].t:0))/100*c},X[w]=G.v,S.to(M,X,L),L+=X.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!mu&&(Mr=Yi(a),Be.killTweensOf(M),Mr=0),Ii(p,Yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Oe(p._time)&&Hn(u)&&a0(Yi(a))&&p.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&sp(Yi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Se&&!h?l:i<Se?0:i,d,f,g,_,m,p,M,S;if(!c)c0(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,s,o);if(d=Oe(u%_),u===l?(g=this._repeat,d=c):(m=Oe(u/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(d=c-d),m=Ns(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=u,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(Oe(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(op(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var x=d<a;if(x!==this._inv){var T=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(x?-1:1)/T:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(d/c);if(this._from&&(this.ratio=M=1-M),this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&u&&!s&&!m&&(Qn(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&hu(this,i,s,o),Qn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Qn(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&hu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Tr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(Qn(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Xo||Vn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ru(this,c),h=this._ease(c/this._dur),R0(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Al(this,0),this.parent||ip(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Oo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Mr&&Mr.vars.overwrite!==!0)._first||Oo(this),this.parent&&o!==this.timeline.totalDuration()&&Fs(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?fi(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,_,m,p;if((!s||s==="all")&&s0(a,l))return s==="all"&&(this._pt=0),Oo(this);for(u=this._op=this._op||[],s!=="all"&&(je(s)&&(_={},Pn(s,function(M){return _[M]=1}),s=_),s=P0(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,g=d,f={}):(f=u[p]=u[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&wl(this,m,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Oo(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ko(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ko(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Be.killTweensOf(i,s,o)},t})(qo);ti(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pn("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new mn,e=uu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Pu=function(t,e,n){return t[e]=n},yp=function(t,e,n){return t[e](n)},D0=function(t,e,n,i){return t[e](i.fp,n)},L0=function(t,e,n){return t.setAttribute(e,n)},Cl=function(t,e){return Ve(t[e])?yp:bl(t[e])&&t.setAttribute?L0:Pu},Mp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},U0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Iu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Du=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},N0=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},F0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?wl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},O0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Lu=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},In=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Mp,this.d=l||this,this.set=c||Pu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=O0,this.m=n,this.mt=s,this.tween=i},r})();Pn(Mu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return yu[r]=1});jn.TweenMax=jn.TweenLite=Ye;jn.TimelineLite=jn.TimelineMax=mn;Be=new mn({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=wu;var Qr=[],ml={},B0=[],qf=0,z0=0,su=function(t){return(ml[t]||B0).map(function(e){return e()})},Yo=function(){var t=Date.now(),e=[];t-qf>2&&(su("matchMediaInit"),Qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Pi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),su("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),qf=t,su("matchMedia"))},Sp=(function(){function r(e,n){this.selector=n&&du(n),this.data=[],this._r=[],this.isReverted=!1,this.id=z0++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ve(n)&&(s=i,i=n,n=Ve);var o=this,a=function(){var c=Ue,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=du(s)),Ue=o,u=i.apply(o,arguments),Ve(u)&&o._r.push(u),Ue=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ve?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ue;Ue=null,n(this),Ue=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(Yo):a.removeEventListener("change",Yo)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},r})(),k0=(function(){function r(e){this.contexts=[],this.scope=e,Ue&&Ue.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Di(n)||(n={matches:n});var o=new Sp(0,s||this.scope),a=o.conditions={},l,c,h;Ue&&!o.selector&&(o.selector=Ue.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Pi.matchMedia(n[c]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Yo):l.addEventListener("change",Yo),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Sl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return mp(i)})},timeline:function(t){return new mn(t)},getTweensOf:function(t,e){return Be.getTweensOf(t,e)},getProperty:function(t,e,n,i){je(t)&&(t=fi(t)[0]);var s=br(t||{}).get,o=n?np:ep;return n==="native"&&(n=""),t&&(e?o((kn[e]&&kn[e].get||s)(t,e,n,i)):function(a,l,c){return o((kn[a]&&kn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=fi(t),t.length>1){var i=t.map(function(h){return _n.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=kn[e],a=br(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;Ls._pt=0,u.init(t,n?h+n:h,Ls,0,[t]),u.render(1,u),Ls._pt&&Du(1,Ls)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=_n.to(t,ti((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Be.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Kr(t.ease,Ho.ease)),Vf(Ho,t||{})},config:function(t){return Vf(Gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!kn[a]&&!jn[a]&&Go(e+" effect requires "+a+" plugin.")}),eu[e]=function(a,l,c){return n(fi(a),ti(l||{},s),c)},o&&(mn.prototype[e]=function(a,l,c){return this.add(eu[e](a,Di(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ue[t]=Kr(e)},parseEase:function(t,e){return arguments.length?Kr(t,e):ue},getById:function(t){return Be.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new mn(t),i,s;for(n.smoothChildTiming=Hn(t.smoothChildTiming),Be.remove(n),n._dp=0,n._time=n._tTime=Be._time,i=Be._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Ii(n,i,i._start-i._delay),i=s;return Ii(Be,n,0),n},context:function(t,e){return t?new Sp(t,e):Ue},matchMedia:function(t){return new k0(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Yo()},addEventListener:function(t,e){var n=ml[t]||(ml[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=ml[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:_0,wrapYoyo:x0,distribute:cp,random:up,snap:hp,normalize:g0,getUnit:hn,clamp:d0,splitColor:gp,toArray:fi,selector:du,mapRange:fp,pipe:p0,unitize:m0,interpolate:v0,shuffle:lp},install:Kf,effects:eu,ticker:Vn,updateRoot:mn.updateRoot,plugins:kn,globalTimeline:Be,core:{PropTween:In,globals:Qf,Tween:Ye,Timeline:mn,Animation:qo,getCache:br,_removeLinkedListItem:wl,reverting:function(){return cn},context:function(t){return t&&Ue&&(Ue.data.push(t),t._ctx=Ue),Ue},suppressOverwrites:function(t){return mu=t}}};Pn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Sl[r]=Ye[r]});Vn.add(mn.updateRoot);Ls=Sl.to({},{duration:0});var V0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},H0=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=V0(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},ou=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(je(s)&&(l={},Pn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}H0(a,s)}}}},_n=Sl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},ou("roundProps",fu),ou("modifiers"),ou("snap",hp))||Sl;Ye.version=mn.version=_n.version="3.15.1";Jf=1;gu()&&Os();var G0=ue.Power0,W0=ue.Power1,X0=ue.Power2,q0=ue.Power3,Y0=ue.Power4,$0=ue.Linear,Z0=ue.Quad,J0=ue.Cubic,K0=ue.Quart,Q0=ue.Quint,j0=ue.Strong,tx=ue.Elastic,ex=ue.Back,nx=ue.SteppedEase,ix=ue.Bounce,rx=ue.Sine,sx=ue.Expo,ox=ue.Circ;var bp,Er,ks,zu,ss,ax,Tp,ku,lx=function(){return typeof window<"u"},Ki={},rs=180/Math.PI,Vs=Math.PI/180,zs=Math.atan2,wp=1e8,Vu=/([A-Z])/g,cx=/(left|right|width|margin|padding|x)/i,hx=/[\s,\(]\S/,Li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ux=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},px=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Lp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Up=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},mx=function(t,e,n){return t.style[e]=n},gx=function(t,e,n){return t.style.setProperty(e,n)},_x=function(t,e,n){return t._gsap[e]=n},xx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},vx=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},yx=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ze="transform",Wn=ze+"Origin",Mx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Li[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ji(i,a)}):this.tfm[t]=o.x?o[t]:Ji(i,t),t===Wn&&(this.tfm.zOrigin=o.zOrigin);else return Li.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(ze)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,e,"")),t=ze}(s||e)&&this.props.push(t,e,s[t])},Np=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Sx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Vu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ku(),(!s||!s.isStart)&&!n[ze]&&(Np(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Fp=function(t,e){var n={target:t,props:[],revert:Sx,save:Mx};return t._gsap||_n.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Op,Fu=function(t,e){var n=Er.createElementNS?Er.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Er.createElement(t);return n&&n.style?n:Er.createElement(t)},ei=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Vu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Hs(e)||e,1)||""},Ep="O,Moz,ms,Ms,Webkit".split(","),Hs=function(t,e,n){var i=e||ss,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Ep[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Ep[o]:"")+t},Ou=function(){lx()&&window.document&&(bp=window,Er=bp.document,ks=Er.documentElement,ss=Fu("div")||{style:{}},ax=Fu("div"),ze=Hs(ze),Wn=ze+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Op=!!Hs("perspective"),ku=_n.core.reverting,zu=1)},Ap=function(t){var e=t.ownerSVGElement,n=Fu("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ks.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ks.removeChild(n),s},Cp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Bp=function(t){var e,n;try{e=t.getBBox()}catch{e=Ap(t),n=1}return e&&(e.width||e.height)||n||(e=Ap(t)),e&&!e.width&&!e.x&&!e.y?{x:+Cp(t,["x","cx","x1"])||0,y:+Cp(t,["y","cy","y1"])||0,width:0,height:0}:e},zp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Bp(t))},Cr=function(t,e){if(e){var n=t.style,i;e in Ki&&e!==Wn&&(e=ze),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Vu,"-$1").toLowerCase())):n.removeAttribute(e)}},Ar=function(t,e,n,i,s,o){var a=new In(t._pt,e,n,0,1,o?Up:Lp);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Rp={deg:1,rad:1,turn:1},bx={grid:1,flex:1},Rr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ss.style,l=cx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,_,m,p;if(i===o||!s||Rp[i]||Rp[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&zp(t),(f||o==="%")&&(Ki[e]||~e.indexOf("adius")))return g=p?t.getBBox()[l?"width":"height"]:t[h],He(f?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Er||!_.appendChild)&&(_=Er.body),m=_._gsap,m&&f&&m.width&&l&&m.time===Vn.time&&!m.uncache)return He(s/m.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,g=t[h],M?t.style[e]=M:Cr(t,e)}else(f||o==="%")&&!bx[ei(_,"display")]&&(a.position=ei(t,"position")),_===t&&(a.position="static"),_.appendChild(ss),g=ss[h],_.removeChild(ss),a.position="absolute";return l&&f&&(m=br(_),m.time=Vn.time,m.width=_[h]),He(d?g*s/u:g&&s?u/g*s:0)},Ji=function(t,e,n,i){var s;return zu||Ou(),e in Li&&e!=="transform"&&(e=Li[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=Ko(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Pl(ei(t,Wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Rl[e]&&Rl[e](t,e,n)||ei(t,e)||bu(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Rr(t,e,s,n)+n:s},Tx=function(t,e,n,i){if(!n||n==="none"){var s=Hs(e,t,1),o=s&&ei(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=ei(t,"borderTopColor"))}var a=new In(this._pt,t.style,e,0,1,Iu),l=0,c=0,h,u,d,f,g,_,m,p,M,S,x,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ei(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=ei(t,e)||i,_?t.style[e]=_:Cr(t,e)),h=[n,i],wu(h),n=h[0],i=h[1],d=n.match(jr)||[],T=i.match(jr)||[],T.length){for(;u=jr.exec(i);)m=u[0],M=i.substring(l,u.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),m.charAt(1)==="="&&(m=ts(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=jr.lastIndex-S.length,S||(S=S||Gn.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(f=Rr(t,e,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Up:Lp;return xu.test(i)&&(a.e=0),this._pt=a,a},Pp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Pp[n]||n,e[1]=Pp[i]||i,e.join(" ")},Ex=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?Wn:ze),Cr(n,a);l&&(Cr(n,ze),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ko(n,1),o.uncache=1,Np(i)))}},Rl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new In(t._pt,e,n,0,0,Ex);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},Jo=[1,0,0,1,0,0],kp={},Vp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ip=function(t){var e=ei(t,ze);return Vp(e)?Jo:e.substr(7).match(_u).map(He)},Hu=function(t,e){var n=t._gsap||br(t),i=t.style,s=Ip(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Jo:s):(s===Jo&&!t.offsetParent&&t!==ks&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ks.appendChild(t)),s=Ip(t),l?i.display=l:Cr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ks.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Bu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Hu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,T=parseFloat(S[1])||0,A,w,C,y;n?l!==Jo&&(w=f*m-g*_)&&(C=x*(m/w)+T*(-_/w)+(_*M-m*p)/w,y=x*(-g/w)+T*(f/w)-(f*M-g*p)/w,x=C,T=y):(A=Bp(t),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),T=A.y+(~(S[1]||S[0]).indexOf("%")?T/100*A.height:T)),i||i!==!1&&a.smooth?(p=x-c,M=T-h,a.xOffset=u+(p*f+M*_)-p,a.yOffset=d+(p*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Wn]="0px 0px",o&&(Ar(o,a,"xOrigin",c,x),Ar(o,a,"yOrigin",h,T),Ar(o,a,"xOffset",u,a.xOffset),Ar(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+T)},Ko=function(t,e){var n=t._gsap||new Eu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=ei(t,Wn)||"0",h,u,d,f,g,_,m,p,M,S,x,T,A,w,C,y,v,I,L,H,G,X,N,W,V,et,D,it,Lt,ae,Xt,Wt;return h=u=d=_=m=p=M=S=x=0,f=g=1,n.svg=!!(t.getCTM&&zp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[ze]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ze]!=="none"?l[ze]:"")),i.scale=i.rotate=i.translate="none"),w=Hu(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Bu(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,A=n.yOrigin||0,w!==Jo&&(I=w[0],L=w[1],H=w[2],G=w[3],h=X=w[4],u=N=w[5],w.length===6?(f=Math.sqrt(I*I+L*L),g=Math.sqrt(G*G+H*H),_=I||L?zs(L,I)*rs:0,M=H||G?zs(H,G)*rs+_:0,M&&(g*=Math.abs(Math.cos(M*Vs))),n.svg&&(h-=T-(T*I+A*H),u-=A-(T*L+A*G))):(Wt=w[6],ae=w[7],D=w[8],it=w[9],Lt=w[10],Xt=w[11],h=w[12],u=w[13],d=w[14],C=zs(Wt,Lt),m=C*rs,C&&(y=Math.cos(-C),v=Math.sin(-C),W=X*y+D*v,V=N*y+it*v,et=Wt*y+Lt*v,D=X*-v+D*y,it=N*-v+it*y,Lt=Wt*-v+Lt*y,Xt=ae*-v+Xt*y,X=W,N=V,Wt=et),C=zs(-H,Lt),p=C*rs,C&&(y=Math.cos(-C),v=Math.sin(-C),W=I*y-D*v,V=L*y-it*v,et=H*y-Lt*v,Xt=G*v+Xt*y,I=W,L=V,H=et),C=zs(L,I),_=C*rs,C&&(y=Math.cos(C),v=Math.sin(C),W=I*y+L*v,V=X*y+N*v,L=L*y-I*v,N=N*y-X*v,I=W,X=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=He(Math.sqrt(I*I+L*L+H*H)),g=He(Math.sqrt(N*N+Wt*Wt)),C=zs(X,N),M=Math.abs(C)>2e-4?C*rs:0,x=Xt?1/(Xt<0?-Xt:Xt):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Vp(ei(t,ze)),W&&t.setAttribute("transform",W))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=He(f),n.scaleY=He(g),n.rotation=He(_)+a,n.rotationX=He(m)+a,n.rotationY=He(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Wn]=Pl(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?Cx:Op?Hp:Ax,n.uncache=0,n},Pl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Uu=function(t,e,n){var i=hn(e);return He(parseFloat(e)+parseFloat(Rr(t,"x",n+"px",i)))+i},Ax=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hp(t,e)},ns="0deg",Zo="0px",is=") ",Hp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,x="",T=p==="auto"&&t&&t!==1||p===!0;if(S&&(u!==ns||h!==ns)){var A=parseFloat(h)*Vs,w=Math.sin(A),C=Math.cos(A),y;A=parseFloat(u)*Vs,y=Math.cos(A),o=Uu(M,o,w*y*-S),a=Uu(M,a,-Math.sin(A)*-S),l=Uu(M,l,C*y*-S+S)}m!==Zo&&(x+="perspective("+m+is),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(T||o!==Zo||a!==Zo||l!==Zo)&&(x+=l!==Zo||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+is),c!==ns&&(x+="rotate("+c+is),h!==ns&&(x+="rotateY("+h+is),u!==ns&&(x+="rotateX("+u+is),(d!==ns||f!==ns)&&(x+="skew("+d+", "+f+is),(g!==1||_!==1)&&(x+="scale("+g+", "+_+is),M.style[ze]=x||"translate(0, 0)"},Cx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),T,A,w,C,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Vs,c*=Vs,T=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=Vs,y=Math.tan(c-h),y=Math.sqrt(1+y*y),w*=y,C*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),T*=y,A*=y)),T=He(T),A=He(A),w=He(w),C=He(C)):(T=u,C=d,A=w=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Rr(f,"x",o,"px"),x=Rr(f,"y",a,"px")),(g||_||m||p)&&(S=He(S+g-(g*T+_*w)+m),x=He(x+_-(g*A+_*C)+p)),(i||s)&&(y=f.getBBox(),S=He(S+i/100*y.width),x=He(x+s/100*y.height)),y="matrix("+T+","+A+","+w+","+C+","+S+","+x+")",f.setAttribute("transform",y),M&&(f.style[ze]=y)},Rx=function(t,e,n,i,s){var o=360,a=je(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?rs:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*wp)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*wp)%o-~~(c/o)*o)),t._pt=d=new In(t._pt,e,n,i,c,ux),d.e=h,d.u="deg",t._props.push(n),d},Dp=function(t,e){for(var n in e)t[n]=e[n];return t},Px=function(t,e,n){var i=Dp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=Ko(n,1),Cr(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=Ko(n,1),o[ze]=c);for(l in Ki)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=hn(c),g=hn(h),u=f!==g?Rr(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new In(t._pt,a,l,u,d-u,Nu),t._pt.u=g||0,t._props.push(l));Dp(a,i)};Pn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Rl[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return Ji(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,_){return f[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,f,u)}});var Gu={name:"css",register:Ou,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,g,_,m,p,M,S,x,T,A,w,C,y;zu||Ou(),this.styles=this.styles||Fp(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(kn[_]&&Cu(_,e,n,i,t,s)))){if(f=typeof h,g=Rl[_],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Bs(h)),g)g(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",$i.lastIndex=0,$i.test(c)||(m=hn(c),p=hn(h),p?m!==p&&(c=Rr(t,_,c,p)+p):m&&(h+=m)),this.add(a,"setProperty",c,h,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],je(c)&&~c.indexOf("random(")&&(c=Bs(c)),hn(c+"")||c==="auto"||(c+=Gn.units[_]||hn(Ji(t,_))||""),(c+"").charAt(1)==="="&&(c=Ji(t,_))):c=Ji(t,_),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),_ in Li&&(_==="autoAlpha"&&(d===1&&Ji(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),Ar(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Li[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Ki,S){if(this.styles.save(_),y=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ei(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=h,h=ei(t,"perspective"),v?t.style.perspective=v:Cr(t,"perspective")}u=parseFloat(h)}if(x||(T=t._gsap,T.renderTransform&&!e.parseTransform||Ko(t,e.parseTransform),A=e.smoothOrigin!==!1&&T.smooth,x=this._pt=new In(this._pt,a,ze,0,1,T.renderTransform,T,0,-1),x.dep=1),_==="scale")this._pt=new In(this._pt,T,"scaleY",T.scaleY,(M?ts(T.scaleY,M+u):u)-T.scaleY||0,Nu),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Wn,0,a[Wn]),h=wx(h),T.svg?Bu(t,h,0,A,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Ar(this,T,"zOrigin",T.zOrigin,p),Ar(this,a,_,Pl(c),Pl(h)));continue}else if(_==="svgOrigin"){Bu(t,h,1,A,0,this);continue}else if(_ in kp){Rx(this,T,_,d,M?ts(d,M+h):h);continue}else if(_==="smoothOrigin"){Ar(this,T,"smooth",T.smooth,h);continue}else if(_==="force3D"){T[_]=h;continue}else if(_==="transform"){Px(this,h,t);continue}}else _ in a||(_=Hs(_)||_);if(S||(u||u===0)&&(d||d===0)&&!hx.test(h)&&_ in a)m=(c+"").substr((d+"").length),u||(u=0),p=hn(h)||(_ in Gn.units?Gn.units[_]:m),m!==p&&(d=Rr(t,_,c,p)),this._pt=new In(this._pt,S?T:a,_,d,(M?ts(d,M+u):u)-d,!S&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?px:Nu),this._pt.u=p||0,S&&y!==h?(this._pt.b=c,this._pt.e=y,this._pt.r=fx):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=dx);else if(_ in a)Tx.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,s);else if(_!=="parseTransform"){Tl(_,h);continue}S||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}w&&Lu(this)},render:function(t,e){if(e.tween._time||!ku())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ji,aliases:Li,getSetter:function(t,e,n){var i=Li[e];return i&&i.indexOf(",")<0&&(e=i),e in Ki&&e!==Wn&&(t._gsap.x||Ji(t,"x"))?n&&Tp===n?e==="scale"?xx:_x:(Tp=n||{})&&(e==="scale"?vx:yx):t.style&&!bl(t.style[e])?mx:~e.indexOf("-")?gx:Cl(t,e)},core:{_removeProperty:Cr,_getMatrix:Hu}};_n.utils.checkPrefix=Hs;_n.core.getStyleSaver=Fp;(function(r,t,e,n){var i=Pn(r+","+t+","+e,function(s){Ki[s]=1});Pn(t,function(s){Gn.units[s]="deg",kp[s]=1}),Li[i[13]]=r+","+t,Pn(n,function(s){var o=s.split(":");Li[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"});_n.registerPlugin(Gu);var Zt=_n.registerPlugin(Gu)||_n,NT=Zt.core.Tween;function Gp(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ix(r,t,e){return t&&Gp(r.prototype,t),e&&Gp(r,e),r}var un,Ll,Dx,Xn,Pr,Ir,Ws,Xp,os,Xs,qp,Qi,yi,Yp,$p=function(){return un||typeof window<"u"&&(un=window.gsap)&&un.registerPlugin&&un},Zp=1,Gs=[],ne=[],Mi=[],jo=Date.now,Wu=function(t,e){return e},Lx=function(){var t=Xs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,Mi),ne=n,Mi=i,Wu=function(o,a){return e[o](a)}},tr=function(t,e){return~Mi.indexOf(t)&&Mi[Mi.indexOf(t)+1][e]},ta=function(t){return!!~qp.indexOf(t)},Ln=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Dn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Il="scrollLeft",Dl="scrollTop",Xu=function(){return Qi&&Qi.isPressed||ne.cache++},Ul=function(t,e){var n=function i(s){if(s||s===0){Zp&&Xn.history.scrollRestoration!=="manual"&&(Xn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),t(s),i.cacheID=ne.cache,o&&Wu("ss",s)}else(e||ne.cache!==i.cacheID||Wu("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},xn={s:Il,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ul(function(r){return arguments.length?Xn.scrollTo(r,$e.sc()):Xn.pageXOffset||Pr[Il]||Ir[Il]||Ws[Il]||0})},$e={s:Dl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:Ul(function(r){return arguments.length?Xn.scrollTo(xn.sc(),r):Xn.pageYOffset||Pr[Dl]||Ir[Dl]||Ws[Dl]||0})},Un=function(t,e){return(e&&e._ctx&&e._ctx.selector||un.utils.toArray)(t)[0]||(typeof t=="string"&&un.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ux=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ji=function(t,e){var n=e.s,i=e.sc;ta(t)&&(t=Pr.scrollingElement||Ir);var s=ne.indexOf(t),o=i===$e.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||Ln(t,"scroll",Xu);var a=ne[s+o],l=a||(ne[s+o]=Ul(tr(t,n),!0)||(ta(t)?i:Ul(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=un.getProperty(t,"scrollBehavior")==="smooth"),l},Nl=function(t,e,n){var i=t,s=t,o=jo(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var m=jo();_||m-o>l?(s=i,i=g,a=o,o=m):n?i+=g:i=s+(g-s)/(m-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(g){var _=a,m=s,p=jo();return(g||g===0)&&g!==i&&h(g),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-_)*1e3};return{update:h,reset:u,getVelocity:d}},Qo=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Wp=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Jp=function(){Xs=un.core.globals().ScrollTrigger,Xs&&Xs.core&&Lx()},Kp=function(t){return un=t||$p(),!Ll&&un&&typeof document<"u"&&document.body&&(Xn=window,Pr=document,Ir=Pr.documentElement,Ws=Pr.body,qp=[Xn,Pr,Ir,Ws],Dx=un.utils.clamp,Yp=un.core.context||function(){},os="onpointerenter"in Ws?"pointer":"mouse",Xp=Ge.isTouch=Xn.matchMedia&&Xn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Xn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,yi=Ge.eventTypes=("ontouchstart"in Ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Zp=0},500),Ll=1),Xs||Jp(),Ll};xn.op=$e;ne.cache=0;var Ge=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Ll||Kp(un)||console.warn("Please gsap.registerPlugin(Observer)"),Xs||Jp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,T=n.onRight,A=n.onLeft,w=n.onUp,C=n.onDown,y=n.onChangeX,v=n.onChangeY,I=n.onChange,L=n.onToggleX,H=n.onToggleY,G=n.onHover,X=n.onHoverEnd,N=n.onMove,W=n.ignoreCheck,V=n.isNormalizer,et=n.onGestureStart,D=n.onGestureEnd,it=n.onWheel,Lt=n.onEnable,ae=n.onDisable,Xt=n.onClick,Wt=n.scrollSpeed,Z=n.capture,K=n.allowClicks,dt=n.lockAxis,Et=n.onLockAxis;this.target=a=Un(a)||Ir,this.vars=n,f&&(f=un.utils.toArray(f)),i=i||1e-9,s=s||0,g=g||1,Wt=Wt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Xn.getComputedStyle(Ws).lineHeight)||22);var bt,zt,fe,P,qt,Dt,At,F=this,le=0,_t=0,Ht=n.passive||!h&&n.passive!==!1,jt=ji(a,xn),ge=ji(a,$e),R=jt(),b=ge(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&yi[0]==="pointerdown",J=ta(a),Q=a.ownerDocument||Pr,$=[0,0,0],xt=[0,0,0],ot=0,Tt=function(){return ot=jo()},ut=function(Rt,Jt){return(F.event=Rt)&&f&&Ux(Rt.target,f)||Jt&&k&&Rt.pointerType!=="touch"||W&&W(Rt,Jt)},st=function(){F._vx.reset(),F._vy.reset(),zt.pause(),u&&u(F)},ht=function(){var Rt=F.deltaX=Wp($),Jt=F.deltaY=Wp(xt),ft=Math.abs(Rt)>=i,kt=Math.abs(Jt)>=i;I&&(ft||kt)&&I(F,Rt,Jt,$,xt),ft&&(T&&F.deltaX>0&&T(F),A&&F.deltaX<0&&A(F),y&&y(F),L&&F.deltaX<0!=le<0&&L(F),le=F.deltaX,$[0]=$[1]=$[2]=0),kt&&(C&&F.deltaY>0&&C(F),w&&F.deltaY<0&&w(F),v&&v(F),H&&F.deltaY<0!=_t<0&&H(F),_t=F.deltaY,xt[0]=xt[1]=xt[2]=0),(P||fe)&&(N&&N(F),fe&&(m&&fe===1&&m(F),M&&M(F),fe=0),P=!1),Dt&&!(Dt=!1)&&Et&&Et(F),qt&&(it(F),qt=!1),bt=0},Nt=function(Rt,Jt,ft){$[ft]+=Rt,xt[ft]+=Jt,F._vx.update(Rt),F._vy.update(Jt),c?bt||(bt=requestAnimationFrame(ht)):ht()},wt=function(Rt,Jt){dt&&!At&&(F.axis=At=Math.abs(Rt)>Math.abs(Jt)?"x":"y",Dt=!0),At!=="y"&&($[2]+=Rt,F._vx.update(Rt,!0)),At!=="x"&&(xt[2]+=Jt,F._vy.update(Jt,!0)),c?bt||(bt=requestAnimationFrame(ht)):ht()},ct=function(Rt){if(!ut(Rt,1)){Rt=Qo(Rt,h);var Jt=Rt.clientX,ft=Rt.clientY,kt=Jt-F.x,Ut=ft-F.y,Yt=F.isDragging;F.x=Jt,F.y=ft,(Yt||(kt||Ut)&&(Math.abs(F.startX-Jt)>=s||Math.abs(F.startY-ft)>=s))&&(fe||(fe=Yt?2:1),Yt||(F.isDragging=!0),wt(kt,Ut))}},Gt=F.onPress=function(gt){ut(gt,1)||gt&&gt.button||(F.axis=At=null,zt.pause(),F.isPressed=!0,gt=Qo(gt),le=_t=0,F.startX=F.x=gt.clientX,F.startY=F.y=gt.clientY,F._vx.reset(),F._vy.reset(),Ln(V?a:Q,yi[1],ct,Ht,!0),F.deltaX=F.deltaY=0,S&&S(F))},U=F.onRelease=function(gt){if(!ut(gt,1)){Dn(V?a:Q,yi[1],ct,!0);var Rt=!isNaN(F.y-F.startY),Jt=F.isDragging,ft=Jt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),kt=Qo(gt);!ft&&Rt&&(F._vx.reset(),F._vy.reset(),h&&K&&un.delayedCall(.08,function(){if(jo()-ot>300&&!gt.defaultPrevented){if(gt.target.click)gt.target.click();else if(Q.createEvent){var Ut=Q.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,Xn,1,kt.screenX,kt.screenY,kt.clientX,kt.clientY,!1,!1,!1,!1,0,null),gt.target.dispatchEvent(Ut)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,u&&Jt&&!V&&zt.restart(!0),fe&&ht(),p&&Jt&&p(F),x&&x(F,ft)}},rt=function(Rt){return Rt.touches&&Rt.touches.length>1&&(F.isGesturing=!0)&&et(Rt,F.isDragging)},at=function(){return(F.isGesturing=!1)||D(F)},pt=function(Rt){if(!ut(Rt)){var Jt=jt(),ft=ge();Nt((Jt-R)*Wt,(ft-b)*Wt,1),R=Jt,b=ft,u&&zt.restart(!0)}},nt=function(Rt){if(!ut(Rt)){Rt=Qo(Rt,h),it&&(qt=!0);var Jt=(Rt.deltaMode===1?l:Rt.deltaMode===2?Xn.innerHeight:1)*g;Nt(Rt.deltaX*Jt,Rt.deltaY*Jt,0),u&&!V&&zt.restart(!0)}},j=function(Rt){if(!ut(Rt)){var Jt=Rt.clientX,ft=Rt.clientY,kt=Jt-F.x,Ut=ft-F.y;F.x=Jt,F.y=ft,P=!0,u&&zt.restart(!0),(kt||Ut)&&wt(kt,Ut)}},yt=function(Rt){F.event=Rt,G(F)},Bt=function(Rt){F.event=Rt,X(F)},pe=function(Rt){return ut(Rt)||Qo(Rt,h)&&Xt(F)};zt=F._dc=un.delayedCall(d||.25,st).pause(),F.deltaX=F.deltaY=0,F._vx=Nl(0,50,!0),F._vy=Nl(0,50,!0),F.scrollX=jt,F.scrollY=ge,F.isDragging=F.isGesturing=F.isPressed=!1,Yp(this),F.enable=function(gt){return F.isEnabled||(Ln(J?Q:a,"scroll",Xu),o.indexOf("scroll")>=0&&Ln(J?Q:a,"scroll",pt,Ht,Z),o.indexOf("wheel")>=0&&Ln(a,"wheel",nt,Ht,Z),(o.indexOf("touch")>=0&&Xp||o.indexOf("pointer")>=0)&&(Ln(a,yi[0],Gt,Ht,Z),Ln(Q,yi[2],U),Ln(Q,yi[3],U),K&&Ln(a,"click",Tt,!0,!0),Xt&&Ln(a,"click",pe),et&&Ln(Q,"gesturestart",rt),D&&Ln(Q,"gestureend",at),G&&Ln(a,os+"enter",yt),X&&Ln(a,os+"leave",Bt),N&&Ln(a,os+"move",j)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=P=fe=!1,F._vx.reset(),F._vy.reset(),R=jt(),b=ge(),gt&&gt.type&&Gt(gt),Lt&&Lt(F)),F},F.disable=function(){F.isEnabled&&(Gs.filter(function(gt){return gt!==F&&ta(gt.target)}).length||Dn(J?Q:a,"scroll",Xu),F.isPressed&&(F._vx.reset(),F._vy.reset(),Dn(V?a:Q,yi[1],ct,!0)),Dn(J?Q:a,"scroll",pt,Z),Dn(a,"wheel",nt,Z),Dn(a,yi[0],Gt,Z),Dn(Q,yi[2],U),Dn(Q,yi[3],U),Dn(a,"click",Tt,!0),Dn(a,"click",pe),Dn(Q,"gesturestart",rt),Dn(Q,"gestureend",at),Dn(a,os+"enter",yt),Dn(a,os+"leave",Bt),Dn(a,os+"move",j),F.isEnabled=F.isPressed=F.isDragging=!1,ae&&ae(F))},F.kill=F.revert=function(){F.disable();var gt=Gs.indexOf(F);gt>=0&&Gs.splice(gt,1),Qi===F&&(Qi=0)},Gs.push(F),V&&ta(a)&&(Qi=F),F.enable(_)},Ix(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ge.version="3.15.1";Ge.create=function(r){return new Ge(r)};Ge.register=Kp;Ge.getAll=function(){return Gs.slice()};Ge.getById=function(r){return Gs.filter(function(t){return t.vars.id===r})[0]};$p()&&un.registerPlugin(Ge);var St,Zs,se,ve,ri,_e,sd,Kl,fa,aa,na,Fl,vn,tc,Qu,Fn,Qp,jp,Js,mm,qu,gm,Nn,ju,_m,xm,Dr,td,od,Ks,ad,Lr,ed,Yu,Ol=1,yn=Date.now,$u=yn(),gi=0,ia=0,tm=function(t,e,n){var i=ii(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},em=function(t,e){return e&&(!ii(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Nx=function r(){return ia&&requestAnimationFrame(r)},nm=function(){return tc=1},im=function(){return tc=0},Ui=function(t){return t},ra=function(t){return Math.round(t*1e5)/1e5||0},vm=function(){return typeof window<"u"},ym=function(){return St||vm()&&(St=window.gsap)&&St.registerPlugin&&St},ds=function(t){return!!~sd.indexOf(t)},Mm=function(t){return(t==="Height"?ad:se["inner"+t])||ri["client"+t]||_e["client"+t]},Sm=function(t){return tr(t,"getBoundingClientRect")||(ds(t)?function(){return Jl.width=se.innerWidth,Jl.height=ad,Jl}:function(){return er(t)})},Fx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Mm(s):t["client"+s])||0}},Ox=function(t,e){return!e||~Mi.indexOf(t)?Sm(t):function(){return Jl}},Ni=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=tr(t,n))?o()-Sm(t)()[s]:ds(t)?(ri[n]||_e[n])-Mm(i):t[n]-t["offset"+i])},Bl=function(t,e){for(var n=0;n<Js.length;n+=3)(!e||~e.indexOf(Js[n+1]))&&t(Js[n],Js[n+1],Js[n+2])},ii=function(t){return typeof t=="string"},Mn=function(t){return typeof t=="function"},sa=function(t){return typeof t=="number"},as=function(t){return typeof t=="object"},ea=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},qs=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Ys=Math.abs,bm="left",Tm="top",ld="right",cd="bottom",cs="width",hs="height",la="Right",ca="Left",ha="Top",ua="Bottom",Ze="padding",pi="margin",js="Width",hd="Height",tn="px",mi=function(t){return se.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Bx=function(t){var e=mi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},rm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},er=function(t,e){var n=e&&mi(t)[Qu]!=="matrix(1, 0, 0, 1, 0, 0)"&&St.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ql=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},wm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},zx=function(t){return function(e){return St.utils.snap(wm(t),e)}},ud=function(t){var e=St.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},kx=function(t){return function(e,n){return ud(wm(t))(e,n.direction)}},zl=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},on=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},sn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},kl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},sm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Vl={toggleActions:"play",anticipatePin:0},jl={top:0,left:0,center:.5,bottom:1,right:1},ql=function(t,e){if(ii(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in jl?jl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Hl=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,g=ve.createElement("div"),_=ds(n)||tr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=_?_e:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,S=M?c:h,x="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(i===$e?ld:cd)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Yl(g,0,i,M),g},Yl=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+js]=1,s["border"+a+js]=0,s[n.p]=e+"px",St.set(t,s)},re=[],nd={},pa,om=function(){return yn()-gi>34&&(pa||(pa=requestAnimationFrame(nr)))},$s=function(){(!Nn||!Nn.isPressed||Nn.startX>_e.clientWidth)&&(ne.cache++,Nn?pa||(pa=requestAnimationFrame(nr)):nr(),gi||ps("scrollStart"),gi=yn())},Zu=function(){xm=se.innerWidth,_m=se.innerHeight},oa=function(t){ne.cache++,(t===!0||!vn&&!gm&&!ve.fullscreenElement&&!ve.webkitFullscreenElement&&(!ju||xm!==se.innerWidth||Math.abs(se.innerHeight-_m)>se.innerHeight*.25))&&Kl.restart(!0)},fs={},Vx=[],Em=function r(){return sn($t,"scrollEnd",r)||ls(!0)},ps=function(t){return fs[t]&&fs[t].map(function(e){return e()})||Vx},ni=[],Am=function(t){for(var e=0;e<ni.length;e+=5)(!t||ni[e+4]&&ni[e+4].query===t)&&(ni[e].style.cssText=ni[e+1],ni[e].getBBox&&ni[e].setAttribute("transform",ni[e+2]||""),ni[e+3].uncache=1)},Cm=function(){ne.cache++,ne.forEach(function(t){return Mn(t)&&(t.rec=t())})},dd=function(t,e){var n;for(Fn=0;Fn<re.length;Fn++)n=re[Fn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Lr=!0,e&&Am(e),e||ps("revert")},Rm=function(t,e){ne.cache++,(e||!On)&&ne.forEach(function(n){return Mn(n)&&n.cacheID++&&(n.rec=0)}),ii(t)&&(od=t,se.history.scrollRestoration!==t&&(se.history.scrollRestoration=t))},On,us=0,am,Hx=function(){if(am!==us){var t=am=us;requestAnimationFrame(function(){return t===us&&ls(!0)})}},Pm=function(){_e.appendChild(Ks),ad=!Nn&&Ks.offsetHeight||se.innerHeight,_e.removeChild(Ks)},lm=function(t){return fa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ls=function(t,e){if(ri=ve.documentElement,_e=ve.body,sd=[se,ve,ri,_e],gi&&!t&&!Lr){on($t,"scrollEnd",Em);return}Pm(),On=$t.isRefreshing=!0,Lr||Cm();var n=ps("refreshInit");mm&&$t.sort(),e||dd(),ne.forEach(function(i){Mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),re.slice(0).forEach(function(i){return i.refresh()}),Lr=!1,re.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ed=1,lm(!0),re.forEach(function(i){var s=Ni(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),lm(!1),ed=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){Mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Rm(od,1),Kl.pause(),us++,On=2,nr(2),re.forEach(function(i){return Mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),On=$t.isRefreshing=!1,ps("refresh")},id=0,$l=1,da,nr=function(t){if(t===2||!On&&!Lr){$t.isUpdating=!0,da&&da.update(0);var e=re.length,n=yn(),i=n-$u>=50,s=e&&re[0].scroll();if($l=id>s?-1:1,On||(id=s),i&&(gi&&!tc&&n-gi>200&&(gi=0,ps("scrollEnd")),na=$u,$u=n),$l<0){for(Fn=e;Fn-- >0;)re[Fn]&&re[Fn].update(0,i);$l=1}else for(Fn=0;Fn<e;Fn++)re[Fn]&&re[Fn].update(0,i);$t.isUpdating=!1}pa=0},rd=[bm,Tm,cd,ld,pi+ua,pi+la,pi+ha,pi+ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zl=rd.concat([cs,hs,"boxSizing","max"+js,"max"+hd,"position",pi,Ze,Ze+ha,Ze+la,Ze+ua,Ze+ca]),Gx=function(t,e,n){Qs(n);var i=t._gsap;if(i.spacerIsNative)Qs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ju=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=rd.length,o=e.style,a=t.style,l;s--;)l=rd[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[cd]=a[ld]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[cs]=Ql(t,xn)+tn,o[hs]=Ql(t,$e)+tn,o[Ze]=a[pi]=a[Tm]=a[bm]="0",Qs(i),a[cs]=a["max"+js]=n[cs],a[hs]=a["max"+hd]=n[hs],a[Ze]=n[Ze],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Wx=/([A-Z])/g,Qs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||St.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Wx,"-$1").toLowerCase())}},Gl=function(t){for(var e=Zl.length,n=t.style,i=[],s=0;s<e;s++)i.push(Zl[s],n[Zl[s]]);return i.t=t,i},Xx=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Jl={left:0,top:0},cm=function(t,e,n,i,s,o,a,l,c,h,u,d,f,g){Mn(t)&&(t=t(l)),ii(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?ql("0"+t.substr(3),n):0));var _=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),sa(t))f&&(t=St.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&Yl(a,n,i,!0);else{Mn(e)&&(e=e(l));var S=(t||"0").split(" "),x,T,A,w;M=Un(e,l)||_e,x=er(M)||{},(!x||!x.left&&!x.top)&&mi(M).display==="none"&&(w=M.style.display,M.style.display="block",x=er(M),w?M.style.display=w:M.style.removeProperty("display")),T=ql(S[0],x[i.d]),A=ql(S[1]||"0",n),t=x[i.p]-c[i.p]-h+T+s-A,a&&Yl(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+n,y=o._isStart;m="scroll"+i.d2,Yl(o,C,i,y&&C>20||!y&&(u?Math.max(_e[m],ri[m]):o.parentNode[m])<=C+1),u&&(c=er(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+tn))}return f&&M&&(m=er(M),f.seek(d),p=er(M),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(_),f?t:Math.round(t)},qx=/(webkit|moz|length|cssText|inset)/i,hm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=mi(t);for(o in a)!+o&&!qx.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;St.core.getCache(t).uncache=1,e.appendChild(t)}},Im=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Wl=function(t,e,n){var i={};i[e.p]="+="+n,St.set(t,i)},um=function(t,e){var n=ji(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,g={};c=c||n();var _=Im(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&nr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=St.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},on(t,"wheel",n.wheelHandler),$t.isTouch&&on(t,"touchmove",n.wheelHandler),s},$t=(function(){function r(e,n){Zs||r.register(St)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),td(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ia){this.update=this.refresh=this.kill=Ui;return}n=rm(ii(n)||sa(n)||n.nodeType?{trigger:n}:n,Vl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,x=s.snap,T=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:$e,I=!u&&u!==0,L=Un(n.scroller||se),H=St.core.getCache(L),G=ds(L),X=("pinType"in n?n.pinType:tr(L,"pinType")||G&&"fixed")==="fixed",N=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],W=I&&n.toggleActions.split(" "),V="markers"in n?n.markers:Vl.markers,et=G?0:parseFloat(mi(L)["border"+v.p2+js])||0,D=this,it=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Lt=Fx(L,G,v),ae=Ox(L,G),Xt=0,Wt=0,Z=0,K=ji(L,v),dt,Et,bt,zt,fe,P,qt,Dt,At,F,le,_t,Ht,jt,ge,R,b,k,J,Q,$,xt,ot,Tt,ut,st,ht,Nt,wt,ct,Gt,U,rt,at,pt,nt,j,yt,Bt;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=L,D.scroll=w?w.time.bind(w):K,zt=K(),Lr&&K.rec==null&&(K.rec=zt),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(mm=1,n.refreshPriority===-9999&&(da=D)),H.tweenScroll=H.tweenScroll||{top:um(L,$e),left:um(L,xn)},D.tweenTo=dt=H.tweenScroll[v.p],D.scrubDuration=function(ft){rt=sa(ft)&&ft,rt?U?U.duration(ft):U=St.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:rt,paused:!0,onComplete:function(){return p&&p(D)}}):(U&&U.progress(1).kill(),U=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(u),ct=0,l||(l=i.vars.id)),x&&((!as(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in _e.style&&St.set(G?[_e,ri]:L,{scrollBehavior:"auto"}),ne.forEach(function(ft){return Mn(ft)&&ft.target===(G?ve.scrollingElement||ri:L)&&(ft.smooth=!1)}),bt=Mn(x.snapTo)?x.snapTo:x.snapTo==="labels"?zx(i):x.snapTo==="labelsDirectional"?kx(i):x.directional!==!1?function(ft,kt){return ud(x.snapTo)(ft,yn()-Wt<500?0:kt.direction)}:St.utils.snap(x.snapTo),at=x.duration||{min:.1,max:2},at=as(at)?aa(at.min,at.max):aa(at,at),pt=St.delayedCall(x.delay||rt/2||.1,function(){var ft=K(),kt=yn()-Wt<500,Ut=dt.tween;if((kt||Math.abs(D.getVelocity())<10)&&!Ut&&!tc&&Xt!==ft){var Yt=(ft-P)/jt,Xe=i&&!I?i.totalProgress():Yt,ee=kt?0:(Xe-Gt)/(yn()-na)*1e3||0,Le=St.utils.clamp(-Yt,1-Yt,Ys(ee/2)*ee/.185),qe=Yt+(x.inertia===!1?0:Le),Ce,be,xe=x,Zn=xe.onStart,Re=xe.onInterrupt,Cn=xe.onComplete;if(Ce=bt(qe,D),sa(Ce)||(Ce=qe),be=Math.max(0,Math.round(P+Ce*jt)),ft<=qt&&ft>=P&&be!==ft){if(Ut&&!Ut._initted&&Ut.data<=Ys(be-ft))return;x.inertia===!1&&(Le=Ce-Yt),dt(be,{duration:at(Ys(Math.max(Ys(qe-Xe),Ys(Ce-Xe))*.185/ee/.05||0)),ease:x.ease||"power3",data:Ys(be-ft),onInterrupt:function(){return pt.restart(!0)&&Re&&qs(D,Re)},onComplete:function(){D.update(),Xt=K(),i&&!I&&(U?U.resetTo("totalProgress",Ce,i._tTime/i._tDur):i.progress(Ce)),ct=Gt=i&&!I?i.totalProgress():D.progress,M&&M(D),Cn&&qs(D,Cn)}},ft,Le*jt,be-ft-Le*jt),Zn&&qs(D,Zn,dt.tween)}}else D.isActive&&Xt!==ft&&pt.restart(!0)}).pause()),l&&(nd[l]=D),d=D.trigger=Un(d||f!==!0&&f),Bt=d&&d._gsap&&d._gsap.stRevert,Bt&&(Bt=Bt(D)),f=f===!0?d:Un(f),ii(a)&&(a={targets:d,className:a}),f&&(g===!1||g===pi||(g=!g&&f.parentNode&&f.parentNode.style&&mi(f.parentNode).display==="flex"?!1:Ze),D.pin=f,Et=St.core.getCache(f),Et.spacer?ge=Et.pinState:(A&&(A=Un(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),Et.spacerIsNative=!!A,A&&(Et.spacerState=Gl(A))),Et.spacer=k=A||ve.createElement("div"),k.classList.add("pin-spacer"),l&&k.classList.add("pin-spacer-"+l),Et.pinState=ge=Gl(f)),n.force3D!==!1&&St.set(f,{force3D:!0}),D.spacer=k=Et.spacer,wt=mi(f),Tt=wt[g+v.os2],Q=St.getProperty(f),$=St.quickSetter(f,v.a,tn),Ju(f,k,wt),b=Gl(f)),V){_t=as(V)?rm(V,sm):sm,F=Hl("scroller-start",l,L,v,_t,0),le=Hl("scroller-end",l,L,v,_t,0,F),J=F["offset"+v.op.d2];var pe=Un(tr(L,"content")||L);Dt=this.markerStart=Hl("start",l,pe,v,_t,J,0,w),At=this.markerEnd=Hl("end",l,pe,v,_t,J,0,w),w&&(yt=St.quickSetter([Dt,At],v.a,tn)),!X&&!(Mi.length&&tr(L,"fixedMarkers")===!0)&&(Bx(G?_e:L),St.set([F,le],{force3D:!0}),st=St.quickSetter(F,v.a,tn),Nt=St.quickSetter(le,v.a,tn))}if(w){var gt=w.vars.onUpdate,Rt=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){D.update(0,0,1),gt&&gt.apply(w,Rt||[])})}if(D.previous=function(){return re[re.indexOf(D)-1]},D.next=function(){return re[re.indexOf(D)+1]},D.revert=function(ft,kt){if(!kt)return D.kill(!0);var Ut=ft!==!1||!D.enabled,Yt=vn;Ut!==D.isReverted&&(Ut&&(nt=Math.max(K(),D.scroll.rec||0),Z=D.progress,j=i&&i.progress()),Dt&&[Dt,At,F,le].forEach(function(Xe){return Xe.style.display=Ut?"none":"block"}),Ut&&(vn=D,D.update(Ut)),f&&(!T||!D.isActive)&&(Ut?Gx(f,k,ge):Ju(f,k,mi(f),ut)),Ut||D.update(Ut),vn=Yt,D.isReverted=Ut)},D.refresh=function(ft,kt,Ut,Yt){if(!((vn||!D.enabled)&&!kt)){if(f&&ft&&gi){on(r,"scrollEnd",Em);return}!On&&it&&it(D),vn=D,dt.tween&&!Ut&&(dt.tween.kill(),dt.tween=0),U&&U.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ce){return ce.vars.immediateRender&&ce.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Xe=Lt(),ee=ae(),Le=w?w.duration():Ni(L,v),qe=jt<=.01||!jt,Ce=0,be=Yt||0,xe=as(Ut)?Ut.end:n.end,Zn=n.endTrigger||d,Re=as(Ut)?Ut.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Cn=D.pinnedContainer=n.pinnedContainer&&Un(n.pinnedContainer,D),li=d&&Math.max(0,re.indexOf(D))||0,Qe=li,E,O,q,Y,B,tt,lt,Mt,vt,Ft,It,Pt,te;for(V&&as(Ut)&&(Pt=St.getProperty(F,v.p),te=St.getProperty(le,v.p));Qe-- >0;)tt=re[Qe],tt.end||tt.refresh(0,1)||(vn=D),lt=tt.pin,lt&&(lt===d||lt===f||lt===Cn)&&!tt.isReverted&&(Ft||(Ft=[]),Ft.unshift(tt),tt.revert(!0,!0)),tt!==re[Qe]&&(li--,Qe--);for(Mn(Re)&&(Re=Re(D)),Re=tm(Re,"start",D),P=cm(Re,d,Xe,v,K(),Dt,F,D,ee,et,X,Le,w,D._startClamp&&"_startClamp")||(f?-.001:0),Mn(xe)&&(xe=xe(D)),ii(xe)&&!xe.indexOf("+=")&&(~xe.indexOf(" ")?xe=(ii(Re)?Re.split(" ")[0]:"")+xe:(Ce=ql(xe.substr(2),Xe),xe=ii(Re)?Re:(w?St.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,P):P)+Ce,Zn=d)),xe=tm(xe,"end",D),qt=Math.max(P,cm(xe||(Zn?"100% 0":Le),Zn,Xe,v,K()+Ce,At,le,D,ee,et,X,Le,w,D._endClamp&&"_endClamp"))||-.001,Ce=0,Qe=li;Qe--;)tt=re[Qe]||{},lt=tt.pin,lt&&tt.start-tt._pinPush<=P&&!w&&tt.end>0&&(E=tt.end-(D._startClamp?Math.max(0,tt.start):tt.start),(lt===d&&tt.start-tt._pinPush<P||lt===Cn)&&isNaN(Re)&&(Ce+=E*(1-tt.progress)),lt===f&&(be+=E));if(P+=Ce,qt+=Ce,D._startClamp&&(D._startClamp+=Ce),D._endClamp&&!On&&(D._endClamp=qt||-.001,qt=Math.min(qt,Ni(L,v))),jt=qt-P||(P-=.01)&&.001,qe&&(Z=St.utils.clamp(0,1,St.utils.normalize(P,qt,nt))),D._pinPush=be,Dt&&Ce&&(E={},E[v.a]="+="+Ce,Cn&&(E[v.p]="-="+K()),St.set([Dt,At],E)),f&&!(ed&&D.end>=Ni(L,v)))E=mi(f),Y=v===$e,q=K(),xt=parseFloat(Q(v.a))+be,!Le&&qt>1&&(It=(G?ve.scrollingElement||ri:L).style,It={style:It,value:It["overflow"+v.a.toUpperCase()]},G&&mi(_e)["overflow"+v.a.toUpperCase()]!=="scroll"&&(It.style["overflow"+v.a.toUpperCase()]="scroll")),Ju(f,k,E),b=Gl(f),O=er(f,!0),Mt=X&&ji(L,Y?xn:$e)(),g?(ut=[g+v.os2,jt+be+tn],ut.t=k,Qe=g===Ze?Ql(f,v)+jt+be:0,Qe&&(ut.push(v.d,Qe+tn),k.style.flexBasis!=="auto"&&(k.style.flexBasis=Qe+tn)),Qs(ut),Cn&&re.forEach(function(ce){ce.pin===Cn&&ce.vars.pinSpacing!==!1&&(ce._subPinOffset=!0)}),X&&K(nt)):(Qe=Ql(f,v),Qe&&k.style.flexBasis!=="auto"&&(k.style.flexBasis=Qe+tn)),X&&(B={top:O.top+(Y?q-P:Mt)+tn,left:O.left+(Y?Mt:q-P)+tn,boxSizing:"border-box",position:"fixed"},B[cs]=B["max"+js]=Math.ceil(O.width)+tn,B[hs]=B["max"+hd]=Math.ceil(O.height)+tn,B[pi]=B[pi+ha]=B[pi+la]=B[pi+ua]=B[pi+ca]="0",B[Ze]=E[Ze],B[Ze+ha]=E[Ze+ha],B[Ze+la]=E[Ze+la],B[Ze+ua]=E[Ze+ua],B[Ze+ca]=E[Ze+ca],R=Xx(ge,B,T),On&&K(0)),i?(vt=i._initted,qu(1),i.render(i.duration(),!0,!0),ot=Q(v.a)-xt+jt+be,ht=Math.abs(jt-ot)>1,X&&ht&&R.splice(R.length-2,2),i.render(0,!0,!0),vt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),qu(0)):ot=jt,It&&(It.value?It.style["overflow"+v.a.toUpperCase()]=It.value:It.style.removeProperty("overflow-"+v.a));else if(d&&K()&&!w)for(O=d.parentNode;O&&O!==_e;)O._pinOffset&&(P-=O._pinOffset,qt-=O._pinOffset),O=O.parentNode;Ft&&Ft.forEach(function(ce){return ce.revert(!1,!0)}),D.start=P,D.end=qt,zt=fe=On?nt:K(),!w&&!On&&!Lr&&(zt<nt&&K(nt),D.scroll.rec=0),D.revert(!1,!0),Wt=yn(),pt&&(Xt=-1,pt.restart(!0)),vn=0,i&&I&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(qe||Z!==D.progress||w||_||i&&!i._initted)&&(i&&!I&&(i._initted||Z||i.vars.immediateRender!==!1)&&i.totalProgress(w&&P<-.001&&!Z?St.utils.normalize(P,qt,0):Z,!0),D.progress=qe||(zt-P)/jt===Z?0:Z),f&&g&&(k._pinOffset=Math.round(D.progress*ot)),U&&U.invalidate(),isNaN(Pt)||(Pt-=St.getProperty(F,v.p),te-=St.getProperty(le,v.p),Wl(F,v,Pt),Wl(Dt,v,Pt-(Yt||0)),Wl(le,v,te),Wl(At,v,te-(Yt||0))),qe&&!On&&D.update(),h&&!On&&!Ht&&(Ht=!0,h(D),Ht=!1)}},D.getVelocity=function(){return(K()-fe)/(yn()-na)*1e3||0},D.endAnimation=function(){ea(D.callbackAnimation),i&&(U?U.progress(1):i.paused()?I||ea(i,D.direction<0,1):ea(i,i.reversed()))},D.labelToScroll=function(ft){return i&&i.labels&&(P||D.refresh()||P)+i.labels[ft]/i.duration()*jt||0},D.getTrailing=function(ft){var kt=re.indexOf(D),Ut=D.direction>0?re.slice(0,kt).reverse():re.slice(kt+1);return(ii(ft)?Ut.filter(function(Yt){return Yt.vars.preventOverlaps===ft}):Ut).filter(function(Yt){return D.direction>0?Yt.end<=P:Yt.start>=qt})},D.update=function(ft,kt,Ut){if(!(w&&!Ut&&!ft)){var Yt=On===!0?nt:D.scroll(),Xe=ft?0:(Yt-P)/jt,ee=Xe<0?0:Xe>1?1:Xe||0,Le=D.progress,qe,Ce,be,xe,Zn,Re,Cn,li;if(kt&&(fe=zt,zt=w?K():Yt,x&&(Gt=ct,ct=i&&!I?i.totalProgress():ee)),m&&f&&!vn&&!Ol&&gi&&(!ee&&P<Yt+(Yt-fe)/(yn()-na)*m?ee=1e-4:ee===1&&qt>Yt+(Yt-fe)/(yn()-na)*m&&(ee=.9999)),ee!==Le&&D.enabled){if(qe=D.isActive=!!ee&&ee<1,Ce=!!Le&&Le<1,Re=qe!==Ce,Zn=Re||!!ee!=!!Le,D.direction=ee>Le?1:-1,D.progress=ee,Zn&&!vn&&(be=ee&&!Le?0:ee===1?1:Le===1?2:3,I&&(xe=!Re&&W[be+1]!=="none"&&W[be+1]||W[be],li=i&&(xe==="complete"||xe==="reset"||xe in i))),y&&(Re||li)&&(li||u||!i)&&(Mn(y)?y(D):D.getTrailing(y).forEach(function(q){return q.endAnimation()})),I||(U&&!vn&&!Ol?(U._dp._time-U._start!==U._time&&U.render(U._dp._time-U._start),U.resetTo?U.resetTo("totalProgress",ee,i._tTime/i._tDur):(U.vars.totalProgress=ee,U.invalidate().restart())):i&&i.totalProgress(ee,!!(vn&&(Wt||ft)))),f){if(ft&&g&&(k.style[g+v.os2]=Tt),!X)$(ra(xt+ot*ee));else if(Zn){if(Cn=!ft&&ee>Le&&qt+1>Yt&&Yt+1>=Ni(L,v),T)if(!ft&&(qe||Cn)){var Qe=er(f,!0),E=Yt-P;hm(f,_e,Qe.top+(v===$e?E:0)+tn,Qe.left+(v===$e?0:E)+tn)}else hm(f,k);Qs(qe||Cn?R:b),ht&&ee<1&&qe||$(xt+(ee===1&&!Cn?ot:0))}}x&&!dt.tween&&!vn&&!Ol&&pt.restart(!0),a&&(Re||S&&ee&&(ee<1||!Yu))&&fa(a.targets).forEach(function(q){return q.classList[qe||S?"add":"remove"](a.className)}),o&&!I&&!ft&&o(D),Zn&&!vn?(I&&(li&&(xe==="complete"?i.pause().totalProgress(1):xe==="reset"?i.restart(!0).pause():xe==="restart"?i.restart(!0):i[xe]()),o&&o(D)),(Re||!Yu)&&(c&&Re&&qs(D,c),N[be]&&qs(D,N[be]),S&&(ee===1?D.kill(!1,1):N[be]=0),Re||(be=ee===1?1:3,N[be]&&qs(D,N[be]))),C&&!qe&&Math.abs(D.getVelocity())>(sa(C)?C:2500)&&(ea(D.callbackAnimation),U?U.progress(1):ea(i,xe==="reverse"?1:!ee,1))):I&&o&&!vn&&o(D)}if(Nt){var O=w?Yt/w.duration()*(w._caScrollDist||0):Yt;st(O+(F._isFlipped?1:0)),Nt(O)}yt&&yt(-Yt/w.duration()*(w._caScrollDist||0))}},D.enable=function(ft,kt){D.enabled||(D.enabled=!0,on(L,"resize",oa),G||on(L,"scroll",$s),it&&on(r,"refreshInit",it),ft!==!1&&(D.progress=Z=0,zt=fe=Xt=K()),kt!==!1&&D.refresh())},D.getTween=function(ft){return ft&&dt?dt.tween:U},D.setPositions=function(ft,kt,Ut,Yt){if(w){var Xe=w.scrollTrigger,ee=w.duration(),Le=Xe.end-Xe.start;ft=Xe.start+Le*ft/ee,kt=Xe.start+Le*kt/ee}D.refresh(!1,!1,{start:em(ft,Ut&&!!D._startClamp),end:em(kt,Ut&&!!D._endClamp)},Yt),D.update()},D.adjustPinSpacing=function(ft){if(ut&&ft){var kt=ut.indexOf(v.d)+1;ut[kt]=parseFloat(ut[kt])+ft+tn,ut[1]=parseFloat(ut[1])+ft+tn,Qs(ut)}},D.disable=function(ft,kt){if(ft!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,kt||U&&U.pause(),nt=0,Et&&(Et.uncache=1),it&&sn(r,"refreshInit",it),pt&&(pt.pause(),dt.tween&&dt.tween.kill()&&(dt.tween=0)),!G)){for(var Ut=re.length;Ut--;)if(re[Ut].scroller===L&&re[Ut]!==D)return;sn(L,"resize",oa),G||sn(L,"scroll",$s)}},D.kill=function(ft,kt){D.disable(ft,kt),U&&!kt&&U.kill(),l&&delete nd[l];var Ut=re.indexOf(D);Ut>=0&&re.splice(Ut,1),Ut===Fn&&$l>0&&Fn--,Ut=0,re.forEach(function(Yt){return Yt.scroller===D.scroller&&(Ut=1)}),Ut||On||Lr||(D.scroll.rec=0),i&&(i.scrollTrigger=null,ft&&i.revert({kill:!1}),kt||i.kill()),Dt&&[Dt,At,F,le].forEach(function(Yt){return Yt.parentNode&&Yt.parentNode.removeChild(Yt)}),da===D&&(da=0),f&&(Et&&(Et.uncache=1),Ut=0,re.forEach(function(Yt){return Yt.pin===f&&Ut++}),Ut||(Et.spacer=0)),n.onKill&&n.onKill(D)},re.push(D),D.enable(!1,!1),Bt&&Bt(D),i&&i.add&&!jt){var Jt=D.update;D.update=function(){D.update=Jt,ne.cache++,P||qt||D.refresh()},St.delayedCall(.01,D.update),jt=.01,P=qt=0}else D.refresh();f&&Hx()},r.register=function(n){return Zs||(St=n||ym(),vm()&&window.document&&r.enable(),Zs=ia),Zs},r.defaults=function(n){if(n)for(var i in n)Vl[i]=n[i];return Vl},r.disable=function(n,i){ia=0,re.forEach(function(o){return o[i?"kill":"disable"](n)}),sn(se,"wheel",$s),sn(ve,"scroll",$s),clearInterval(Fl),sn(ve,"touchcancel",Ui),sn(_e,"touchstart",Ui),zl(sn,ve,"pointerdown,touchstart,mousedown",nm),zl(sn,ve,"pointerup,touchend,mouseup",im),Kl.kill(),Bl(sn);for(var s=0;s<ne.length;s+=3)kl(sn,ne[s],ne[s+1]),kl(sn,ne[s],ne[s+2])},r.enable=function(){if(se=window,ve=document,ri=ve.documentElement,_e=ve.body,St){if(fa=St.utils.toArray,aa=St.utils.clamp,td=St.core.context||Ui,qu=St.core.suppressOverwrites||Ui,od=se.history.scrollRestoration||"auto",id=se.pageYOffset||0,St.core.globals("ScrollTrigger",r),_e){ia=1,Ks=document.createElement("div"),Ks.style.height="100vh",Ks.style.position="absolute",Pm(),Nx(),Ge.register(St),r.isTouch=Ge.isTouch,Dr=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ju=Ge.isTouch===1,on(se,"wheel",$s),sd=[se,ve,ri,_e],St.matchMedia?(r.matchMedia=function(h){var u=St.matchMedia(),d;for(d in h)u.add(d,h[d]);return u},St.addEventListener("matchMediaInit",function(){Cm(),dd()}),St.addEventListener("matchMediaRevert",function(){return Am()}),St.addEventListener("matchMedia",function(){ls(0,1),ps("matchMedia")}),St.matchMedia().add("(orientation: portrait)",function(){return Zu(),Zu})):console.warn("Requires GSAP 3.11.0 or later"),Zu(),on(ve,"scroll",$s);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,o=St.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=er(_e),$e.m=Math.round(a.top+$e.sc())||0,xn.m=Math.round(a.left+xn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Fl=setInterval(om,250),St.delayedCall(.5,function(){return Ol=0}),on(ve,"touchcancel",Ui),on(_e,"touchstart",Ui),zl(on,ve,"pointerdown,touchstart,mousedown",nm),zl(on,ve,"pointerup,touchend,mouseup",im),Qu=St.utils.checkPrefix("transform"),Zl.push(Qu),Zs=yn(),Kl=St.delayedCall(.2,ls).pause(),Js=[ve,"visibilitychange",function(){var h=se.innerWidth,u=se.innerHeight;ve.hidden?(Qp=h,jp=u):(Qp!==h||jp!==u)&&oa()},ve,"DOMContentLoaded",ls,se,"load",ls,se,"resize",oa],Bl(on),re.forEach(function(h){return h.enable(0,1)}),l=0;l<ne.length;l+=3)kl(sn,ne[l],ne[l+1]),kl(sn,ne[l],ne[l+2])}else if(ve){var c=function h(){r.enable(),ve.removeEventListener("DOMContentLoaded",h)};ve.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Yu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Fl)||(Fl=i)&&setInterval(om,i),"ignoreMobileResize"in n&&(ju=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Bl(sn)||Bl(on,n.autoRefreshEvents||"none"),gm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Un(n),o=ne.indexOf(s),a=ds(s);~o&&ne.splice(o,a?6:2),i&&(a?Mi.unshift(se,i,_e,i,ri,i):Mi.unshift(s,i))},r.clearMatchMedia=function(n){re.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(ii(n)?Un(n):n).getBoundingClientRect(),a=o[s?cs:hs]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){ii(n)&&(n=Un(n));var o=n.getBoundingClientRect(),a=o[s?cs:hs],l=i==null?a/2:i in jl?jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(re.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=fs.killAll||[];fs={},i.forEach(function(s){return s()})}},r})();$t.version="3.15.1";$t.saveStyles=function(r){return r?fa(r).forEach(function(t){if(t&&t.style){var e=ni.indexOf(t);e>=0&&ni.splice(e,5),ni.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),St.core.getCache(t),td())}}):ni};$t.revert=function(r,t){return dd(!r,t)};$t.create=function(r,t){return new $t(r,t)};$t.refresh=function(r){return r?oa(!0):(Zs||$t.register())&&ls(!0)};$t.update=function(r){return++ne.cache&&nr(r===!0?2:0)};$t.clearScrollMemory=Rm;$t.maxScroll=function(r,t){return Ni(r,t?xn:$e)};$t.getScrollFunc=function(r,t){return ji(Un(r),t?xn:$e)};$t.getById=function(r){return nd[r]};$t.getAll=function(){return re.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$t.isScrolling=function(){return!!gi};$t.snapDirectional=ud;$t.addEventListener=function(r,t){var e=fs[r]||(fs[r]=[]);~e.indexOf(t)||e.push(t)};$t.removeEventListener=function(r,t){var e=fs[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};$t.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=St.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(g){u.length||f.restart(!0),u.push(g.trigger),d.push(g),s<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Mn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Mn(s)&&(s=s(),on($t,"refresh",function(){return s=t.batchMax()})),fa(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push($t.create(c))}),e};var dm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ku=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===ri&&r(_e,e)},Xl={auto:1,scroll:1},Yx=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||St.core.getCache(s),a=yn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Xl[(l=mi(s)).overflowY]||Xl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ds(s)&&(Xl[(l=mi(s)).overflowY]||Xl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Dm=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Yx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&on(ve,Ge.eventTypes[0],pm,!1,!0)},onDisable:function(){return sn(ve,Ge.eventTypes[0],pm,!0)}})},$x=/(input|label|select|textarea)/i,fm,pm=function(t){var e=$x.test(t.target.tagName);(e||fm)&&(t._gsapAllow=!0,fm=e)},Zx=function(t){as(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Un(t.target)||ri,h=St.core.globals().ScrollSmoother,u=h&&h.get(),d=Dr&&(t.content&&Un(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=ji(c,$e),g=ji(c,xn),_=1,m=(Ge.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,M=Mn(i)?function(){return i(a)}:function(){return i||2.8},S,x,T=Dm(c,t.type,!0,s),A=function(){return x=!1},w=Ui,C=Ui,y=function(){l=Ni(c,$e),C=aa(Dr?1:0,l),n&&(w=aa(0,Ni(c,xn))),S=us},v=function(){d._gsap.y=ra(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},I=function(){if(x){requestAnimationFrame(A);var V=ra(a.deltaY/2),et=C(f.v-V);if(d&&et!==f.v+f.offset){f.offset=et-f.v;var D=ra((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",f.cacheID=ne.cache,nr()}return!0}f.offset&&v(),x=!0},L,H,G,X,N=function(){y(),L.isActive()&&L.vars.scrollY>l&&(f()>l?L.progress(1)&&f(l):L.resetTo("scrollY",l))};return d&&St.set(d,{y:"+=0"}),t.ignoreCheck=function(W){return Dr&&W.type==="touchmove"&&I(W)||_>1.05&&W.type!=="touchstart"||a.isGesturing||W.touches&&W.touches.length>1},t.onPress=function(){x=!1;var W=_;_=ra((se.visualViewport&&se.visualViewport.scale||1)/m),L.pause(),W!==_&&Ku(c,_>1.01?!0:n?!1:"x"),H=g(),G=f(),y(),S=us},t.onRelease=t.onGestureStart=function(W,V){if(f.offset&&v(),!V)X.restart(!0);else{ne.cache++;var et=M(),D,it;n&&(D=g(),it=D+et*.05*-W.velocityX/.227,et*=dm(g,D,it,Ni(c,xn)),L.vars.scrollX=w(it)),D=f(),it=D+et*.05*-W.velocityY/.227,et*=dm(f,D,it,Ni(c,$e)),L.vars.scrollY=C(it),L.invalidate().duration(et).play(.01),(Dr&&L.vars.scrollY>=l||D>=l-1)&&St.to({},{onUpdate:N,duration:et})}o&&o(W)},t.onWheel=function(){L._ts&&L.pause(),yn()-p>1e3&&(S=0,p=yn())},t.onChange=function(W,V,et,D,it){if(us!==S&&y(),V&&n&&g(w(D[2]===V?H+(W.startX-W.x):g()+V-D[1])),et){f.offset&&v();var Lt=it[2]===et,ae=Lt?G+W.startY-W.y:f()+et-it[1],Xt=C(ae);Lt&&ae!==Xt&&(G+=Xt-ae),f(Xt)}(et||V)&&nr()},t.onEnable=function(){Ku(c,n?!1:"x"),$t.addEventListener("refresh",N),on(se,"resize",N),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),T.enable()},t.onDisable=function(){Ku(c,!0),sn(se,"resize",N),$t.removeEventListener("refresh",N),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=Dr,Dr&&!f()&&f(1),Dr&&St.ticker.add(Ui),X=a._dc,L=St.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Im(f,f(),function(){return L.pause()})},onUpdate:nr,onComplete:X.vars.onComplete}),a};$t.sort=function(r){if(Mn(r))return re.sort(r);var t=se.pageYOffset||0;return $t.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+se.innerHeight}),re.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$t.observe=function(r){return new Ge(r)};$t.normalizeScroll=function(r){if(typeof r>"u")return Nn;if(r===!0&&Nn)return Nn.enable();if(r===!1){Nn&&Nn.kill(),Nn=r;return}var t=r instanceof Ge?r:Zx(r);return Nn&&Nn.target===t.target&&Nn.kill(),ds(t.target)&&(Nn=t),t};$t.core={_getVelocityProp:Nl,_inputObserver:Dm,_scrollers:ne,_proxies:Mi,bridge:{ss:function(){gi||ps("scrollStart"),gi=yn()},ref:function(){return vn}}};ym()&&St.registerPlugin($t);var Lm="1.3.27";function Fm(r,t,e){return Math.max(r,Math.min(t,e))}function Jx(r,t,e){return(1-e)*r+e*t}function Kx(r,t,e,n){return Jx(r,t,1-Math.exp(-e*n))}function Qx(r,t){return(r%t+t)%t}var jx=class{constructor(){Ct(this,"isRunning",!1);Ct(this,"value",0);Ct(this,"from",0);Ct(this,"to",0);Ct(this,"currentTime",0);Ct(this,"lerp");Ct(this,"duration");Ct(this,"easing");Ct(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Fm(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Kx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function tv(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var ev=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ct(this,"width",0);Ct(this,"height",0);Ct(this,"scrollHeight",0);Ct(this,"scrollWidth",0);Ct(this,"debouncedResize");Ct(this,"wrapperResizeObserver");Ct(this,"contentResizeObserver");Ct(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ct(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ct(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=tv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Om=class{constructor(){Ct(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},nv=100/6,Ur={passive:!1};function Um(r,t){return r===1?nv:r===2?t:1}var iv=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ct(this,"touchStart",{x:0,y:0});Ct(this,"lastDelta",{x:0,y:0});Ct(this,"window",{width:0,height:0});Ct(this,"emitter",new Om);Ct(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ct(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ct(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ct(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=Um(n,this.window.width),s=Um(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ct(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ur),this.element.addEventListener("touchstart",this.onTouchStart,Ur),this.element.addEventListener("touchmove",this.onTouchMove,Ur),this.element.addEventListener("touchend",this.onTouchEnd,Ur)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ur),this.element.removeEventListener("touchstart",this.onTouchStart,Ur),this.element.removeEventListener("touchmove",this.onTouchMove,Ur),this.element.removeEventListener("touchend",this.onTouchEnd,Ur)}},Nm=r=>Math.min(1,1.001-2**(-10*r)),Bm=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:T=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1,naiveDimensions:C=w,stopInertiaOnNavigate:y=!1,respectReducedMotion:v=!0}={}){Ct(this,"_isScrolling",!1);Ct(this,"_isStopped",!1);Ct(this,"_isLocked",!1);Ct(this,"_preventNextNativeScrollEvent",!1);Ct(this,"_resetVelocityTimeout",null);Ct(this,"_rafId",null);Ct(this,"_isDraggingSelection",!1);Ct(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ct(this,"isTouching");Ct(this,"isIos");Ct(this,"time",0);Ct(this,"userData",{});Ct(this,"lastVelocity",0);Ct(this,"velocity",0);Ct(this,"direction",0);Ct(this,"options");Ct(this,"targetScroll");Ct(this,"animatedScroll");Ct(this,"animate",new jx);Ct(this,"emitter",new Om);Ct(this,"dimensions");Ct(this,"virtualScroll");Ct(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ct(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ct(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ct(this,"onClick",r=>{let t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ct(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ct(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(g=>g instanceof HTMLElement&&(typeof c=="function"&&c?.(g)||g.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&g.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&g.hasAttribute?.("data-lenis-prevent-horizontal")||i&&g.hasAttribute?.("data-lenis-prevent-touch")||s&&g.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let d=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(u=Math.sign(u)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+u,{programmatic:!1,...d?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ct(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ct(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Lm,window.lenis||(window.lenis={}),window.lenis.version=Lm,u==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=Nm:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:M,autoRaf:S,anchors:x,autoToggle:T,allowNestedScroll:A,naiveDimensions:C,stopInertiaOnNavigate:y,respectReducedMotion:v},this.dimensions=new ev(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new iv(e,{touchMultiplier:f,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=r,f=t;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof Element&&(g=d),g){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=g.getBoundingClientRect(),m=getComputedStyle(g),p=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),M=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);d=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(p)?0:p)-(Number.isNaN(S)?0:S)}}if(typeof d=="number"){if(d+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=Fm(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},e){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=Nm:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),i&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let n=Date.now();r._lenis||(r._lenis={});let i=r._lenis,s,o,a,l,c,h,u,d,f,g;if(n-(i.time??0)>2e3){i.time=Date.now();let A=window.getComputedStyle(r);if(i.computedStyle=A,s=["auto","overlay","scroll"].includes(A.overflowX),o=["auto","overlay","scroll"].includes(A.overflowY),c=["auto"].includes(A.overscrollBehaviorX),h=["auto"].includes(A.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;u=r.scrollWidth,d=r.scrollHeight,f=r.clientWidth,g=r.clientHeight,a=u>f,l=d>g,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=u,i.scrollHeight=d,i.clientWidth=f,i.clientHeight=g,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,u=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,g=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,p,M,S,x,T;if(_==="horizontal")m=Math.round(r.scrollLeft),p=u-f,M=t,S=s,x=a,T=c;else if(_==="vertical")m=Math.round(r.scrollTop),p=d-g,M=e,S=o,x=l,T=h;else return!1;return!T&&(m>=p||m<=0)?!0:(M>0?m<p:m>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Qx(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var cg=0,Yd=1,hg=2;var $d=1,ug=2,Gi=3,hr=0,fn=1,Wi=2,pr=0,ys=1,Zd=2,Jd=3,Kd=4,dg=5,Gr=100,fg=101,pg=102,mg=103,gg=104,_g=200,xg=201,vg=202,yg=203,bc=204,Tc=205,Mg=206,Sg=207,bg=208,Tg=209,wg=210,Eg=211,Ag=212,Cg=213,Rg=214,$c=0,Zc=1,Jc=2,Ms=3,Kc=4,Qc=5,jc=6,th=7,eh=0,Pg=1,Ig=2,mr=0,Dg=1,Lg=2,Ug=3,nh=4,Ng=5,Fg=6,Og=7;var Qd=300,ws=301,Es=302,ih=303,rh=304,tl=306,wc=1e3,Hr=1001,Ec=1002,Yn=1003,Bg=1004;var el=1005;var Ei=1006,sh=1007;var Yr=1008;var Ci=1009,jd=1010,tf=1011,bo=1012,oh=1013,$r=1014,Ri=1015,To=1016,ah=1017,lh=1018,wo=1020,ef=35902,nf=35899,rf=1021,sf=1022,vi=1023,mo=1026,Eo=1027,ch=1028,hh=1029,of=1030,uh=1031;var dh=1033,nl=33776,il=33777,rl=33778,sl=33779,fh=35840,ph=35841,mh=35842,gh=35843,_h=36196,xh=37492,vh=37496,yh=37808,Mh=37809,Sh=37810,bh=37811,Th=37812,wh=37813,Eh=37814,Ah=37815,Ch=37816,Rh=37817,Ph=37818,Ih=37819,Dh=37820,Lh=37821,Uh=36492,Nh=36494,Fh=36495,Oh=36283,Bh=36284,zh=36285,kh=36286;var ba=2300,Ac=2301,Sc=2302,Bd=2400,zd=2401,kd=2402;var zg=3200,kg=3201;var Vh=0,Vg=1,gr="",Tn="srgb",Ss="srgb-linear",Ta="linear",Me="srgb";var vs=7680;var Vd=519,Hg=512,Gg=513,Wg=514,af=515,Xg=516,qg=517,Yg=518,$g=519,Hd=35044;var lf="300 es",wi=2e3,wa=2001;var ur=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fd=Math.PI/180,Cc=180/Math.PI;function ol(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function rv(r,t){return(r%t+t)%t}function pd(r,t,e){return(1-e)*r+e*t}function ma(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function qn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var oe=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a,p=l*d+c*f+h*g+u*_,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let T=Math.sqrt(S),A=Math.atan2(T,p*M);m=Math.sin(m*A)/T,a=Math.sin(a*A)/T}let x=a*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zm.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zm.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return md.copy(this).projectOnVector(t),this.sub(md)}reflect(t){return this.sub(md.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},md=new z,zm=new dr,Qt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],T=i[2],A=i[5],w=i[8];return s[0]=o*_+a*M+l*T,s[3]=o*m+a*S+l*A,s[6]=o*p+a*x+l*w,s[1]=c*_+h*M+u*T,s[4]=c*m+h*S+u*A,s[7]=c*p+h*x+u*w,s[2]=d*_+f*M+g*T,s[5]=d*m+f*S+g*A,s[8]=d*p+f*x+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*s-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(gd.makeScale(t,e)),this}rotate(t){return this.premultiply(gd.makeRotation(-t)),this}translate(t,e){return this.premultiply(gd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},gd=new Qt;function cf(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ea(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zg(){let r=Ea("canvas");return r.style.display="block",r}var km={};function go(r){r in km||(km[r]=!0,console.warn(r))}function Jg(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Vm=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sv(){let r={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Me&&(i.r=cr(i.r),i.g=cr(i.g),i.b=cr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=po(i.r),i.g=po(i.g),i.b=po(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===gr?Ta:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return go("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return go("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ss]:{primaries:t,whitePoint:n,transfer:Ta,toXYZ:Vm,fromXYZ:Hm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:Vm,fromXYZ:Hm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}var de=sv();function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function po(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var to,Rc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{to===void 0&&(to=Ea("canvas")),to.width=t.width,to.height=t.height;let i=to.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=to}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ea("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cr(e[n]/255)*255):e[n]=cr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ov=0,_o=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ov++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(_d(i[o].image)):s.push(_d(i[o]))}else s=_d(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function _d(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var av=0,xd=new z,Bn=class r extends ur{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Hr,i=Hr,s=Ei,o=Yr,a=vi,l=Ci,c=r.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:av++}),this.uuid=ol(),this.name="",this.source=new _o(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xd).x}get height(){return this.source.getSize(xd).y}get depth(){return this.source.getSize(xd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wc:t.x=t.x-Math.floor(t.x);break;case Hr:t.x=t.x<0?0:1;break;case Ec:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wc:t.y=t.y-Math.floor(t.y);break;case Hr:t.y=t.y<0?0:1;break;case Ec:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Qd;Bn.DEFAULT_ANISOTROPY=1;var ye=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(f+1)/2,T=(p+1)/2,A=(h+d)/4,w=(u+_)/4,C=(g+m)/4;return S>x&&S>T?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=w/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-_)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pc=class extends ur{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new Bn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Ei,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new _o(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Oi=class extends Pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Aa=class extends Bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ic=class extends Bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ec.copy(n.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ga),nc.subVectors(this.max,ga),eo.subVectors(t.a,ga),no.subVectors(t.b,ga),io.subVectors(t.c,ga),Nr.subVectors(no,eo),Fr.subVectors(io,no),ms.subVectors(eo,io);let e=[0,-Nr.z,Nr.y,0,-Fr.z,Fr.y,0,-ms.z,ms.y,Nr.z,0,-Nr.x,Fr.z,0,-Fr.x,ms.z,0,-ms.x,-Nr.y,Nr.x,0,-Fr.y,Fr.x,0,-ms.y,ms.x,0];return!vd(e,eo,no,io,nc)||(e=[1,0,0,0,1,0,0,0,1],!vd(e,eo,no,io,nc))?!1:(ic.crossVectors(Nr,Fr),e=[ic.x,ic.y,ic.z],vd(e,eo,no,io,nc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ir),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ir=[new z,new z,new z,new z,new z,new z,new z,new z],Si=new z,ec=new Bi,eo=new z,no=new z,io=new z,Nr=new z,Fr=new z,ms=new z,ga=new z,nc=new z,ic=new z,gs=new z;function vd(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gs.fromArray(r,s);let a=i.x*Math.abs(gs.x)+i.y*Math.abs(gs.y)+i.z*Math.abs(gs.z),l=t.dot(gs),c=e.dot(gs),h=n.dot(gs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var lv=new Bi,_a=new z,yd=new z,fr=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):lv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_a.subVectors(t,this.center);let e=_a.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(_a,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_a.copy(t.center).add(yd)),this.expandByPoint(_a.copy(t.center).sub(yd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rr=new z,Md=new z,rc=new z,Or=new z,Sd=new z,sc=new z,bd=new z,Ca=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rr.copy(this.origin).addScaledVector(this.direction,e),rr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Md.copy(t).add(e).multiplyScalar(.5),rc.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(Md);let s=t.distanceTo(e)*.5,o=-this.direction.dot(rc),a=Or.dot(this.direction),l=-Or.dot(rc),c=Or.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Md).addScaledVector(rc,d),f}intersectSphere(t,e){rr.subVectors(t.center,this.origin);let n=rr.dot(this.direction),i=rr.dot(rr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,rr)!==null}intersectTriangle(t,e,n,i,s){Sd.subVectors(e,t),sc.subVectors(n,t),bd.crossVectors(Sd,sc);let o=this.direction.dot(bd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,t);let l=a*this.direction.dot(sc.crossVectors(Or,sc));if(l<0)return null;let c=a*this.direction.dot(Sd.cross(Or));if(c<0||l+c>o)return null;let h=-a*Or.dot(bd);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ro.setFromMatrixColumn(t,0).length(),s=1/ro.setFromMatrixColumn(t,1).length(),o=1/ro.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cv,t,hv)}lookAt(t,e,n){let i=this.elements;return si.subVectors(t,e),si.lengthSq()===0&&(si.z=1),si.normalize(),Br.crossVectors(n,si),Br.lengthSq()===0&&(Math.abs(n.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Br.crossVectors(n,si)),Br.normalize(),oc.crossVectors(si,Br),i[0]=Br.x,i[4]=oc.x,i[8]=si.x,i[1]=Br.y,i[5]=oc.y,i[9]=si.y,i[2]=Br.z,i[6]=oc.z,i[10]=si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],T=n[15],A=i[0],w=i[4],C=i[8],y=i[12],v=i[1],I=i[5],L=i[9],H=i[13],G=i[2],X=i[6],N=i[10],W=i[14],V=i[3],et=i[7],D=i[11],it=i[15];return s[0]=o*A+a*v+l*G+c*V,s[4]=o*w+a*I+l*X+c*et,s[8]=o*C+a*L+l*N+c*D,s[12]=o*y+a*H+l*W+c*it,s[1]=h*A+u*v+d*G+f*V,s[5]=h*w+u*I+d*X+f*et,s[9]=h*C+u*L+d*N+f*D,s[13]=h*y+u*H+d*W+f*it,s[2]=g*A+_*v+m*G+p*V,s[6]=g*w+_*I+m*X+p*et,s[10]=g*C+_*L+m*N+p*D,s[14]=g*y+_*H+m*W+p*it,s[3]=M*A+S*v+x*G+T*V,s[7]=M*w+S*I+x*X+T*et,s[11]=M*C+S*L+x*N+T*D,s[15]=M*y+S*H+x*W+T*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+_*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],M=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*_*c-g*u*c+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=e*M+n*S+i*x+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/A;return t[0]=M*w,t[1]=(_*d*s-u*m*s-_*i*f+n*m*f+u*i*p-n*d*p)*w,t[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*w,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*w,t[4]=S*w,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*w,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*w,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*w,t[8]=x*w,t[9]=(g*u*s-h*_*s-g*n*f+e*_*f+h*n*p-e*u*p)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*p+e*a*p)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*w,t[12]=T*w,t[13]=(h*_*i-g*u*i+g*n*d-e*_*d-h*n*m+e*u*m)*w,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,_=o*h,m=o*u,p=a*u,M=l*c,S=l*h,x=l*u,T=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*T,i[1]=(f+x)*T,i[2]=(g-S)*T,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+S)*w,i[9]=(m-M)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ro.set(i[0],i[1],i[2]).length(),o=ro.set(i[4],i[5],i[6]).length(),a=ro.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],bi.copy(this);let c=1/s,h=1/o,u=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=h,bi.elements[5]*=h,bi.elements[6]*=h,bi.elements[8]*=u,bi.elements[9]*=u,bi.elements[10]*=u,e.setFromRotationMatrix(bi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=wi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===wi)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===wa)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=wi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===wi)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===wa)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ro=new z,bi=new Ae,cv=new z(0,0,0),hv=new z(1,1,1),Br=new z,oc=new z,si=new z,Gm=new Ae,Wm=new dr,xi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gm,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xi.DEFAULT_ORDER="XYZ";var Ra=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},uv=0,Xm=new z,so=new dr,sr=new Ae,ac=new z,xa=new z,dv=new z,fv=new dr,qm=new z(1,0,0),Ym=new z(0,1,0),$m=new z(0,0,1),Zm={type:"added"},pv={type:"removed"},oo={type:"childadded",child:null},Td={type:"childremoved",child:null},ln=class r extends ur{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new z,e=new xi,n=new dr,i=new z(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Qt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.multiply(so),this}rotateOnWorldAxis(t,e){return so.setFromAxisAngle(t,e),this.quaternion.premultiply(so),this}rotateX(t){return this.rotateOnAxis(qm,t)}rotateY(t){return this.rotateOnAxis(Ym,t)}rotateZ(t){return this.rotateOnAxis($m,t)}translateOnAxis(t,e){return Xm.copy(t).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qm,t)}translateY(t){return this.translateOnAxis(Ym,t)}translateZ(t){return this.translateOnAxis($m,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ac.copy(t):ac.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(xa,ac,this.up):sr.lookAt(ac,xa,this.up),this.quaternion.setFromRotationMatrix(sr),i&&(sr.extractRotation(i.matrixWorld),so.setFromRotationMatrix(sr),this.quaternion.premultiply(so.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zm),oo.child=t,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pv),Td.child=t,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sr.multiply(t.parent.matrixWorld)),t.applyMatrix4(sr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zm),oo.child=t,this.dispatchEvent(oo),oo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,t,dv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,fv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ln.DEFAULT_UP=new z(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=new z,or=new z,wd=new z,ar=new z,ao=new z,lo=new z,Jm=new z,Ed=new z,Ad=new z,Cd=new z,Rd=new ye,Pd=new ye,Id=new ye,Vr=class r{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ti.subVectors(t,e),i.cross(Ti);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ti.subVectors(i,e),or.subVectors(n,e),wd.subVectors(t,e);let o=Ti.dot(Ti),a=Ti.dot(or),l=Ti.dot(wd),c=or.dot(or),h=or.dot(wd),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(o,ar.y),l.addScaledVector(a,ar.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Rd.setScalar(0),Pd.setScalar(0),Id.setScalar(0),Rd.fromBufferAttribute(t,e),Pd.fromBufferAttribute(t,n),Id.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Rd,s.x),o.addScaledVector(Pd,s.y),o.addScaledVector(Id,s.z),o}static isFrontFacing(t,e,n,i){return Ti.subVectors(n,e),or.subVectors(t,e),Ti.cross(or).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Ti.cross(or).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ao.subVectors(i,n),lo.subVectors(s,n),Ed.subVectors(t,n);let l=ao.dot(Ed),c=lo.dot(Ed);if(l<=0&&c<=0)return e.copy(n);Ad.subVectors(t,i);let h=ao.dot(Ad),u=lo.dot(Ad);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ao,o);Cd.subVectors(t,s);let f=ao.dot(Cd),g=lo.dot(Cd);if(g>=0&&f<=g)return e.copy(s);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(lo,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Jm.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Jm,a);let p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ao,o).addScaledVector(lo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zr={h:0,s:0,l:0},lc={h:0,s:0,l:0};function Dd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=rv(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Dd(o,s,t+1/3),this.g=Dd(o,s,t),this.b=Dd(o,s,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Tn){let n=Kg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=po(t.r),this.g=po(t.g),this.b=po(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Tn){return de.workingToColorSpace(bn.copy(this),t),Math.round(he(bn.r*255,0,255))*65536+Math.round(he(bn.g*255,0,255))*256+Math.round(he(bn.b*255,0,255))}getHexString(t=Tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(bn.copy(this),e);let n=bn.r,i=bn.g,s=bn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Tn){de.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,i=bn.b;return t!==Tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(zr),this.setHSL(zr.h+t,zr.s+e,zr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(zr),t.getHSL(lc);let n=pd(zr.h,lc.h,e),i=pd(zr.s,lc.s,e),s=pd(zr.l,lc.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new Kt;Kt.NAMES=Kg;var mv=0,zi=class extends ur{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mv++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=ys,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bc,this.blendDst=Tc,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(n.blending=this.blending),this.side!==hr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bc&&(n.blendSrc=this.blendSrc),this.blendDst!==Tc&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Pa=class extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Je=new z,cc=new oe,gv=0,wn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Hd,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cc.fromBufferAttribute(this,e),cc.applyMatrix3(t),this.setXY(e,cc.x,cc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix3(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ma(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=qn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ma(e,this.array)),e}setX(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ma(e,this.array)),e}setY(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ma(e,this.array)),e}setZ(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ma(e,this.array)),e}setW(t,e){return this.normalized&&(e=qn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=qn(e,this.array),n=qn(n,this.array),i=qn(i,this.array),s=qn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hd&&(t.usage=this.usage),t}};var Ia=class extends wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Da=class extends wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var De=class extends wn{constructor(t,e,n){super(new Float32Array(t),e,n)}},_v=0,_i=new Ae,Ld=new ln,co=new z,oi=new Bi,va=new Bi,an=new z,En=class r extends ur{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cf(t)?Da:Ia)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,e,n){return _i.makeTranslation(t,e,n),this.applyMatrix4(_i),this}scale(t,e,n){return _i.makeScale(t,e,n),this.applyMatrix4(_i),this}lookAt(t){return Ld.lookAt(t),Ld.updateMatrix(),this.applyMatrix4(Ld.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(co).negate(),this.translate(co.x,co.y,co.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];oi.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];va.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(oi.min,va.min),oi.expandByPoint(an),an.addVectors(oi.max,va.max),oi.expandByPoint(an)):(oi.expandByPoint(va.min),oi.expandByPoint(va.max))}oi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)an.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(an));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(co.fromBufferAttribute(t,c),an.add(co)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new z,l[C]=new z;let c=new z,h=new z,u=new z,d=new oe,f=new oe,g=new oe,_=new z,m=new z;function p(C,y,v){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),a[C].add(_),a[y].add(_),a[v].add(_),l[C].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){let v=M[C],I=v.start,L=v.count;for(let H=I,G=I+L;H<G;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let S=new z,x=new z,T=new z,A=new z;function w(C){T.fromBufferAttribute(i,C),A.copy(T);let y=a[C];S.copy(y),S.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(A,y);let I=x.dot(l[C])<0?-1:1;o.setXYZW(C,S.x,S.y,S.z,I)}for(let C=0,y=M.length;C<y;++C){let v=M[C],I=v.start,L=v.count;for(let H=I,G=I+L;H<G;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Km=new Ae,_s=new Ca,hc=new fr,Qm=new z,uc=new z,dc=new z,fc=new z,Ud=new z,pc=new z,jm=new z,mc=new z,Ee=class extends ln{constructor(t=new En,e=new Pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Ud.fromBufferAttribute(u,t),o?pc.addScaledVector(Ud,h):pc.addScaledVector(Ud.sub(e),h))}e.add(pc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hc.copy(n.boundingSphere),hc.applyMatrix4(s),_s.copy(t.ray).recast(t.near),!(hc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(hc,Qm)===null||_s.origin.distanceToSquared(Qm)>(t.far-t.near)**2))&&(Km.copy(s).invert(),_s.copy(t.ray).applyMatrix4(Km),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=S;x<T;x+=3){let A=a.getX(x),w=a.getX(x+1),C=a.getX(x+2);i=gc(this,p,t,n,c,h,u,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=gc(this,o,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,T=S;x<T;x+=3){let A=x,w=x+1,C=x+2;i=gc(this,p,t,n,c,h,u,A,w,C),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let M=m,S=m+1,x=m+2;i=gc(this,o,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function xv(r,t,e,n,i,s,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===hr,a),l===null)return null;mc.copy(a),mc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(mc);return c<e.near||c>e.far?null:{distance:c,point:mc.clone(),object:r}}function gc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,uc),r.getVertexPosition(l,dc),r.getVertexPosition(c,fc);let h=xv(r,t,e,n,uc,dc,fc,jm);if(h){let u=new z;Vr.getBarycoord(jm,uc,dc,fc,u),i&&(h.uv=Vr.getInterpolatedAttribute(i,a,l,c,u,new oe)),s&&(h.uv1=Vr.getInterpolatedAttribute(s,a,l,c,u,new oe)),o&&(h.normal=Vr.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new z,materialIndex:0};Vr.getNormal(uc,dc,fc,d.normal),h.face=d,h.barycoord=u}return h}var ki=class r extends En{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(u,2));function g(_,m,p,M,S,x,T,A,w,C,y){let v=x/w,I=T/C,L=x/2,H=T/2,G=A/2,X=w+1,N=C+1,W=0,V=0,et=new z;for(let D=0;D<N;D++){let it=D*I-H;for(let Lt=0;Lt<X;Lt++){let ae=Lt*v-L;et[_]=ae*M,et[m]=it*S,et[p]=G,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[p]=A>0?1:-1,h.push(et.x,et.y,et.z),u.push(Lt/w),u.push(1-D/C),W+=1}}for(let D=0;D<C;D++)for(let it=0;it<w;it++){let Lt=d+it+X*D,ae=d+it+X*(D+1),Xt=d+(it+1)+X*(D+1),Wt=d+(it+1)+X*D;l.push(Lt,ae,Wt),l.push(ae,Xt,Wt),V+=6}a.addGroup(f,V,y),f+=V,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function As(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function An(r){let t={};for(let e=0;e<r.length;e++){let n=As(r[e]);for(let i in n)t[i]=n[i]}return t}function vv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function hf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Qg={clone:As,merge:An},yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ai=class extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=Mv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=vv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},La=class extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},kr=new z,tg=new oe,eg=new oe,dn=class extends La{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cc*2*Math.atan(Math.tan(fd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kr.x,kr.y).multiplyScalar(-t/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kr.x,kr.y).multiplyScalar(-t/kr.z)}getViewSize(t,e){return this.getViewBounds(t,tg,eg),e.subVectors(eg,tg)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fd*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ho=-90,uo=1,Dc=class extends ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new dn(ho,uo,t,e);i.layers=this.layers,this.add(i);let s=new dn(ho,uo,t,e);s.layers=this.layers,this.add(s);let o=new dn(ho,uo,t,e);o.layers=this.layers,this.add(o);let a=new dn(ho,uo,t,e);a.layers=this.layers,this.add(a);let l=new dn(ho,uo,t,e);l.layers=this.layers,this.add(l);let c=new dn(ho,uo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wa)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends Bn{constructor(t=[],e=ws,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Lc=class extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ua(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ki(5,5,5),s=new Ai({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:pr});s.uniforms.tEquirect.value=e;let o=new Ee(i,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=Ei),new Dc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},lr=class extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},Sv={type:"move"},xo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Sv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var bs=class extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Uc=class extends Bn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Yn,h=Yn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Na=class extends wn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},fo=new Ae,ng=new Ae,_c=[],ig=new Bi,bv=new Ae,ya=new Ee,Ma=new fr,Fa=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Na(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,bv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fo),ig.copy(t.boundingBox).applyMatrix4(fo),this.boundingBox.union(ig)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,fo),Ma.copy(t.boundingSphere).applyMatrix4(fo),this.boundingSphere.union(Ma)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ya.geometry=this.geometry,ya.material=this.material,ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(n),t.ray.intersectsSphere(Ma)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,fo),ng.multiplyMatrices(n,fo),ya.matrixWorld=ng,ya.raycast(t,_c);for(let o=0,a=_c.length;o<a;o++){let l=_c[o];l.instanceId=s,l.object=this,e.push(l)}_c.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Na(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Uc(new Float32Array(i*this.count),i,this.count,ch,Ri));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nd=new z,Tv=new z,wv=new Qt,Fi=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Nd.subVectors(n,e).cross(Tv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Nd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wv.getNormalMatrix(t),i=this.coplanarPoint(Nd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new fr,Ev=new oe(.5,.5),xc=new z,vo=class{constructor(t=new Fi,e=new Fi,n=new Fi,i=new Fi,s=new Fi,o=new Fi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],S=s[13],x=s[14],T=s[15];if(i[0].setComponents(c-o,f-h,p-g,T-M).normalize(),i[1].setComponents(c+o,f+h,p+g,T+M).normalize(),i[2].setComponents(c+a,f+u,p+_,T+S).normalize(),i[3].setComponents(c-a,f-u,p-_,T-S).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,f-d,p-m,T-x).normalize();else if(i[4].setComponents(c-l,f-d,p-m,T-x).normalize(),e===wi)i[5].setComponents(c+l,f+d,p+m,T+x).normalize();else if(e===wa)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(t){xs.center.set(0,0,0);let e=Ev.distanceTo(t.center);return xs.radius=.7071067811865476+e,xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(xc.x=i.normal.x>0?t.max.x:t.min.x,xc.y=i.normal.y>0?t.max.y:t.min.y,xc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var yo=class extends zi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},rg=new Ae,Gd=new Ca,vc=new fr,yc=new z,Oa=class extends ln{constructor(t=new En,e=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vc.copy(n.boundingSphere),vc.applyMatrix4(i),vc.radius+=s,t.ray.intersectsSphere(vc)===!1)return;rg.copy(i).invert(),Gd.copy(t.ray).applyMatrix4(rg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);yc.fromBufferAttribute(u,m),sg(yc,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)yc.fromBufferAttribute(u,g),sg(yc,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function sg(r,t,e,n,i,s,o){let a=Gd.distanceSqToPoint(r);if(a<e){let l=new z;Gd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ba=class extends Bn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},za=class extends Bn{constructor(t,e,n=$r,i,s,o,a=Yn,l=Yn,c,h=mo,u=1){if(h!==mo&&h!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _o(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ka=class extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Mo=class r extends En{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new De(u,3)),this.setAttribute("normal",new De(d,3)),this.setAttribute("uv",new De(f,2));function M(){let x=new z,T=new z,A=0,w=(e-t)/n;for(let C=0;C<=s;C++){let y=[],v=C/s,I=v*(e-t)+t;for(let L=0;L<=i;L++){let H=L/i,G=H*l+a,X=Math.sin(G),N=Math.cos(G);T.x=I*X,T.y=-v*n+m,T.z=I*N,u.push(T.x,T.y,T.z),x.set(X,w,N).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-v),y.push(g++)}_.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){let v=_[y][C],I=_[y+1][C],L=_[y+1][C+1],H=_[y][C+1];(t>0||y!==0)&&(h.push(v,I,H),A+=3),(e>0||y!==s-1)&&(h.push(I,L,H),A+=3)}c.addGroup(p,A,0),p+=A}function S(x){let T=g,A=new oe,w=new z,C=0,y=x===!0?t:e,v=x===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let I=g;for(let L=0;L<=i;L++){let G=L/i*l+a,X=Math.cos(G),N=Math.sin(G);w.x=y*N,w.y=m*v,w.z=y*X,u.push(w.x,w.y,w.z),d.push(0,v,0),A.x=X*.5+.5,A.y=N*.5*v+.5,f.push(A.x,A.y),g++}for(let L=0;L<i;L++){let H=T+L,G=I+L;x===!0?h.push(G,G+1,H):h.push(G+1,G,H),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Va=class r extends Mo{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ha=class r extends En{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new De(s,3)),this.setAttribute("normal",new De(s.slice(),3)),this.setAttribute("uv",new De(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new z,x=new z,T=new z;for(let A=0;A<e.length;A+=3)f(e[A+0],S),f(e[A+1],x),f(e[A+2],T),l(S,x,T,M)}function l(M,S,x,T){let A=T+1,w=[];for(let C=0;C<=A;C++){w[C]=[];let y=M.clone().lerp(x,C/A),v=S.clone().lerp(x,C/A),I=A-C;for(let L=0;L<=I;L++)L===0&&C===A?w[C][L]=y:w[C][L]=y.clone().lerp(v,L/I)}for(let C=0;C<A;C++)for(let y=0;y<2*(A-C)-1;y++){let v=Math.floor(y/2);y%2===0?(d(w[C][v+1]),d(w[C+1][v]),d(w[C][v])):(d(w[C][v+1]),d(w[C+1][v+1]),d(w[C+1][v]))}}function c(M){let S=new z;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(M),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){let M=new z;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];let x=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(x,1-T)}g(),u()}function u(){for(let M=0;M<o.length;M+=6){let S=o[M+0],x=o[M+2],T=o[M+4],A=Math.max(S,x,T),w=Math.min(S,x,T);A>.9&&w<.1&&(S<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,S){let x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){let M=new z,S=new z,x=new z,T=new z,A=new oe,w=new oe,C=new oe;for(let y=0,v=0;y<s.length;y+=9,v+=6){M.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),A.set(o[v+0],o[v+1]),w.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),T.copy(M).add(S).add(x).divideScalar(3);let I=m(T);_(A,v+0,M,I),_(w,v+2,S,I),_(C,v+4,x,I)}}function _(M,S,x,T){T<0&&M.x===1&&(o[S]=M.x-1),x.x===0&&x.z===0&&(o[S]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var Ga=class r extends Ha{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Wa=class r extends Ha{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Xa=class r extends En{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let M=p*d-o;for(let S=0;S<c;S++){let x=S*u-s;g.push(x,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let S=M+c*p,x=M+c*(p+1),T=M+1+c*(p+1),A=M+1+c*p;f.push(S,x,A),f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var qa=class r extends En{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new z,d=new z,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let M=[],S=p/n,x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let T=0;T<=e;T++){let A=T/e;u.x=-t*Math.cos(i+A*s)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(i+A*s)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(A+x,1-S),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let S=h[p][M+1],x=h[p][M],T=h[p+1][M],A=h[p+1][M+1];(p!==0||o>0)&&f.push(S,x,A),(p!==n-1||l<Math.PI)&&f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new De(g,3)),this.setAttribute("normal",new De(_,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var So=class r extends En{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new z,u=new z,d=new z;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let _=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(_,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new De(a,3)),this.setAttribute("normal",new De(l,3)),this.setAttribute("uv",new De(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Ya=class r extends En{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new z,d=new z,f=new z,g=new z,_=new z,m=new z,p=new z;for(let S=0;S<=n;++S){let x=S/n*s*Math.PI*2;M(x,s,o,t,f),M(x+.01,s,o,t,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let T=0;T<=i;++T){let A=T/i*Math.PI*2,w=-e*Math.cos(A),C=e*Math.sin(A);u.x=f.x+(w*p.x+C*_.x),u.y=f.y+(w*p.y+C*_.y),u.z=f.z+(w*p.z+C*_.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(S/n),h.push(T/i)}}for(let S=1;S<=n;S++)for(let x=1;x<=i;x++){let T=(i+1)*(S-1)+(x-1),A=(i+1)*S+(x-1),w=(i+1)*S+x,C=(i+1)*(S-1)+x;a.push(T,A,C),a.push(A,w,C)}this.setIndex(a),this.setAttribute("position",new De(l,3)),this.setAttribute("normal",new De(c,3)),this.setAttribute("uv",new De(h,2));function M(S,x,T,A,w){let C=Math.cos(S),y=Math.sin(S),v=T/x*S,I=Math.cos(v);w.x=A*(2+I)*.5*C,w.y=A*(2+I)*y*.5,w.z=A*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}};var Vi=class extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hi=class extends Vi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var $a=class extends zi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=eh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Nc=class extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Fc=class extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Mc(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Av(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Oc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bd,endingEnd:Bd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zd:s=t,a=2*e-n;break;case kd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zd:o=t,l=2*n-e;break;case kd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+M*o[c+T]+S*o[l+T]+x*o[u+T];return s}},Bc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},zc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},ai=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Mc(e,this.TimeBufferType),this.values=Mc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Mc(t.times,Array),values:Mc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ba:e=this.InterpolantFactoryMethodDiscrete;break;case Ac:e=this.InterpolantFactoryMethodLinear;break;case Sc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ba;case this.InterpolantFactoryMethodLinear:return Ac;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Av(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=e[u+g];if(_!==e[d+g]||_!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Ac;var Wr=class extends ai{constructor(t,e,n){super(t,e,n)}};Wr.prototype.ValueTypeName="bool";Wr.prototype.ValueBufferType=Array;Wr.prototype.DefaultInterpolation=ba;Wr.prototype.InterpolantFactoryMethodLinear=void 0;Wr.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};kc.prototype.ValueTypeName="color";var Vc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};Vc.prototype.ValueTypeName="number";var Hc=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)dr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Za=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}};Za.prototype.ValueTypeName="quaternion";Za.prototype.InterpolantFactoryMethodSmooth=void 0;var Xr=class extends ai{constructor(t,e,n){super(t,e,n)}};Xr.prototype.ValueTypeName="string";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=ba;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gc=class extends ai{constructor(t,e,n,i){super(t,e,n,i)}};Gc.prototype.ValueTypeName="vector";var Wc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},jg=new Wc,Xc=class{constructor(t){this.manager=t!==void 0?t:jg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Xc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ja=class extends ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Fd=new Ae,og=new z,ag=new z,qc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;og.setFromMatrixPosition(t.matrixWorld),e.position.copy(og),ag.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ag),e.updateMatrixWorld(),Fd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var lg=new Ae,Sa=new z,Od=new z,Wd=class extends qc{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Sa.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sa),Od.copy(n.position),Od.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Od),n.updateMatrixWorld(),i.makeTranslation(-Sa.x,-Sa.y,-Sa.z),lg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lg,n.coordinateSystem,n.reversedDepth)}},qr=class extends Ja{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Ka=class extends La{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xd=class extends qc{constructor(){super(new Ka(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qa=class extends Ja{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Xd}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Yc=class extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},ja=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var uf="\\[\\]\\.:\\/",Cv=new RegExp("["+uf+"]","g"),df="[^"+uf+"]",Rv="[^"+uf.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",df),Iv=/(WCOD+)?/.source.replace("WCOD",Rv),Dv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",df),Lv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",df),Uv=new RegExp("^"+Pv+Iv+Dv+Lv+"$"),Nv=["material","materials","bones","map"],qd=class{constructor(t,e,n){let i=n||Ie.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ie=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cv,"")}static parseTrackName(t){let e=Uv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Nv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ie.Composite=qd;Ie.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ie.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ie.prototype.GetterByBindingType=[Ie.prototype._getValue_direct,Ie.prototype._getValue_array,Ie.prototype._getValue_arrayElement,Ie.prototype._getValue_toArray];Ie.prototype.SetterByBindingTypeAndVersioning=[[Ie.prototype._setValue_direct,Ie.prototype._setValue_direct_setNeedsUpdate,Ie.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_array,Ie.prototype._setValue_array_setNeedsUpdate,Ie.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_arrayElement,Ie.prototype._setValue_arrayElement_setNeedsUpdate,Ie.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ie.prototype._setValue_fromArray,Ie.prototype._setValue_fromArray_setNeedsUpdate,Ie.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YT=new Float32Array(1);function ff(r,t,e,n){let i=Fv(n);switch(e){case rf:return r*t;case ch:return r*t/i.components*i.byteLength;case hh:return r*t/i.components*i.byteLength;case of:return r*t*2/i.components*i.byteLength;case uh:return r*t*2/i.components*i.byteLength;case sf:return r*t*3/i.components*i.byteLength;case vi:return r*t*4/i.components*i.byteLength;case dh:return r*t*4/i.components*i.byteLength;case nl:case il:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ph:case gh:return Math.max(r,16)*Math.max(t,8)/4;case fh:case mh:return Math.max(r,8)*Math.max(t,8)/2;case _h:case xh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case bh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Uh:case Nh:case Fh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Oh:case Bh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zh:case kh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fv(r){switch(r){case Ci:case jd:return{byteLength:1,components:1};case bo:case tf:case To:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case $r:case oh:case Ri:return{byteLength:4,components:1};case ef:case nf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function b_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Bv(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var zv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Vv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
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
#endif`,qv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yv=`#ifdef USE_BATCHING
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
#endif`,$v=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,jv=`#ifdef USE_BUMPMAP
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
#endif`,ty=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ey=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ny=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ry=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ay=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ly=`#define PI 3.141592653589793
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
} // validated`,cy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hy=`vec3 transformedNormal = objectNormal;
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
#endif`,uy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,py=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,my="gl_FragColor = linearToOutputTexel( gl_FragColor );",gy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_y=`#ifdef USE_ENVMAP
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
#endif`,xy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vy=`#ifdef USE_ENVMAP
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
#endif`,yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,My=`#ifdef USE_ENVMAP
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
#endif`,Sy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,by=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ty=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ey=`#ifdef USE_GRADIENTMAP
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
}`,Ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Py=`uniform bool receiveShadow;
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
#endif`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Dy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ly=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ny=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fy=`PhysicalMaterial material;
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
#endif`,Oy=`struct PhysicalMaterial {
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
}`,By=`
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
#endif`,zy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ky=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$y=`#if defined( USE_POINTS_UV )
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
#endif`,Zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,eM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aM=`#ifdef USE_NORMALMAP
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
#endif`,lM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_M=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bM=`float getShadowMask() {
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
}`,TM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AM=`#ifdef USE_SKINNING
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
#endif`,CM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,RM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#ifdef USE_TRANSMISSION
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WM=`#include <common>
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
}`,XM=`#if DEPTH_PACKING == 3200
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
}`,qM=`#define DISTANCE
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
}`,YM=`#define DISTANCE
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JM=`uniform float scale;
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
}`,KM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,jM=`uniform vec3 diffuse;
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
}`,tS=`#define LAMBERT
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
}`,eS=`#define LAMBERT
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
}`,nS=`#define MATCAP
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
}`,iS=`#define MATCAP
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
}`,rS=`#define NORMAL
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
}`,sS=`#define NORMAL
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
}`,oS=`#define PHONG
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
}`,aS=`#define PHONG
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
}`,lS=`#define STANDARD
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
}`,cS=`#define STANDARD
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
}`,hS=`#define TOON
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
}`,uS=`#define TOON
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
}`,dS=`uniform float size;
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
}`,fS=`uniform vec3 diffuse;
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
}`,pS=`#include <common>
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
}`,mS=`uniform vec3 color;
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
}`,gS=`uniform float rotation;
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
}`,_S=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:zv,alphahash_pars_fragment:kv,alphamap_fragment:Vv,alphamap_pars_fragment:Hv,alphatest_fragment:Gv,alphatest_pars_fragment:Wv,aomap_fragment:Xv,aomap_pars_fragment:qv,batching_pars_vertex:Yv,batching_vertex:$v,begin_vertex:Zv,beginnormal_vertex:Jv,bsdfs:Kv,iridescence_fragment:Qv,bumpmap_pars_fragment:jv,clipping_planes_fragment:ty,clipping_planes_pars_fragment:ey,clipping_planes_pars_vertex:ny,clipping_planes_vertex:iy,color_fragment:ry,color_pars_fragment:sy,color_pars_vertex:oy,color_vertex:ay,common:ly,cube_uv_reflection_fragment:cy,defaultnormal_vertex:hy,displacementmap_pars_vertex:uy,displacementmap_vertex:dy,emissivemap_fragment:fy,emissivemap_pars_fragment:py,colorspace_fragment:my,colorspace_pars_fragment:gy,envmap_fragment:_y,envmap_common_pars_fragment:xy,envmap_pars_fragment:vy,envmap_pars_vertex:yy,envmap_physical_pars_fragment:Iy,envmap_vertex:My,fog_vertex:Sy,fog_pars_vertex:by,fog_fragment:Ty,fog_pars_fragment:wy,gradientmap_pars_fragment:Ey,lightmap_pars_fragment:Ay,lights_lambert_fragment:Cy,lights_lambert_pars_fragment:Ry,lights_pars_begin:Py,lights_toon_fragment:Dy,lights_toon_pars_fragment:Ly,lights_phong_fragment:Uy,lights_phong_pars_fragment:Ny,lights_physical_fragment:Fy,lights_physical_pars_fragment:Oy,lights_fragment_begin:By,lights_fragment_maps:zy,lights_fragment_end:ky,logdepthbuf_fragment:Vy,logdepthbuf_pars_fragment:Hy,logdepthbuf_pars_vertex:Gy,logdepthbuf_vertex:Wy,map_fragment:Xy,map_pars_fragment:qy,map_particle_fragment:Yy,map_particle_pars_fragment:$y,metalnessmap_fragment:Zy,metalnessmap_pars_fragment:Jy,morphinstance_vertex:Ky,morphcolor_vertex:Qy,morphnormal_vertex:jy,morphtarget_pars_vertex:tM,morphtarget_vertex:eM,normal_fragment_begin:nM,normal_fragment_maps:iM,normal_pars_fragment:rM,normal_pars_vertex:sM,normal_vertex:oM,normalmap_pars_fragment:aM,clearcoat_normal_fragment_begin:lM,clearcoat_normal_fragment_maps:cM,clearcoat_pars_fragment:hM,iridescence_pars_fragment:uM,opaque_fragment:dM,packing:fM,premultiplied_alpha_fragment:pM,project_vertex:mM,dithering_fragment:gM,dithering_pars_fragment:_M,roughnessmap_fragment:xM,roughnessmap_pars_fragment:vM,shadowmap_pars_fragment:yM,shadowmap_pars_vertex:MM,shadowmap_vertex:SM,shadowmask_pars_fragment:bM,skinbase_vertex:TM,skinning_pars_vertex:wM,skinning_vertex:EM,skinnormal_vertex:AM,specularmap_fragment:CM,specularmap_pars_fragment:RM,tonemapping_fragment:PM,tonemapping_pars_fragment:IM,transmission_fragment:DM,transmission_pars_fragment:LM,uv_pars_fragment:UM,uv_pars_vertex:NM,uv_vertex:FM,worldpos_vertex:OM,background_vert:BM,background_frag:zM,backgroundCube_vert:kM,backgroundCube_frag:VM,cube_vert:HM,cube_frag:GM,depth_vert:WM,depth_frag:XM,distanceRGBA_vert:qM,distanceRGBA_frag:YM,equirect_vert:$M,equirect_frag:ZM,linedashed_vert:JM,linedashed_frag:KM,meshbasic_vert:QM,meshbasic_frag:jM,meshlambert_vert:tS,meshlambert_frag:eS,meshmatcap_vert:nS,meshmatcap_frag:iS,meshnormal_vert:rS,meshnormal_frag:sS,meshphong_vert:oS,meshphong_frag:aS,meshphysical_vert:lS,meshphysical_frag:cS,meshtoon_vert:hS,meshtoon_frag:uS,points_vert:dS,points_frag:fS,shadow_vert:pS,shadow_frag:mS,sprite_vert:gS,sprite_frag:_S},mt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Xi={basic:{uniforms:An([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:An([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:An([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:An([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:An([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:An([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:An([mt.points,mt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:An([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:An([mt.common,mt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:An([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:An([mt.sprite,mt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:An([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:An([mt.lights,mt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Xi.physical={uniforms:An([Xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Hh={r:0,b:0,g:0},Cs=new xi,xS=new Ae;function vS(r,t,e,n,i,s,o){let a=new Kt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function _(S){let x=!1,T=g(S);T===null?p(a,l):T&&T.isColor&&(p(T,1),x=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(S,x){let T=g(x);T&&(T.isCubeTexture||T.mapping===tl)?(h===void 0&&(h=new Ee(new ki(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:As(Xi.backgroundCube.uniforms),vertexShader:Xi.backgroundCube.vertexShader,fragmentShader:Xi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Cs.copy(x.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xS.makeRotationFromEuler(Cs)),h.material.toneMapped=de.getTransfer(T.colorSpace)!==Me,(u!==T||d!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ee(new Xa(2,2),new Ai({name:"BackgroundMaterial",uniforms:As(Xi.background.uniforms),vertexShader:Xi.background.vertexShader,fragmentShader:Xi.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=de.getTransfer(T.colorSpace)!==Me,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Hh,hf(r)),n.buffers.color.setClear(Hh.r,Hh.g,Hh.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:M}}function yS(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(v,I,L,H,G){let X=!1,N=u(H,L,I);s!==N&&(s=N,c(s.object)),X=f(v,H,L,G),X&&g(v,H,L,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(v,I,L,H),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function u(v,I,L){let H=L.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let X=G[I.id];X===void 0&&(X={},G[I.id]=X);let N=X[H];return N===void 0&&(N=d(l()),X[H]=N),N}function d(v){let I=[],L=[],H=[];for(let G=0;G<e;G++)I[G]=0,L[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:L,attributeDivisors:H,object:v,attributes:{},index:null}}function f(v,I,L,H){let G=s.attributes,X=I.attributes,N=0,W=L.getAttributes();for(let V in W)if(W[V].location>=0){let D=G[V],it=X[V];if(it===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),D===void 0||D.attribute!==it||it&&D.data!==it.data)return!0;N++}return s.attributesNum!==N||s.index!==H}function g(v,I,L,H){let G={},X=I.attributes,N=0,W=L.getAttributes();for(let V in W)if(W[V].location>=0){let D=X[V];D===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));let it={};it.attribute=D,D&&D.data&&(it.data=D.data),G[V]=it,N++}s.attributes=G,s.attributesNum=N,s.index=H}function _(){let v=s.newAttributes;for(let I=0,L=v.length;I<L;I++)v[I]=0}function m(v){p(v,0)}function p(v,I){let L=s.newAttributes,H=s.enabledAttributes,G=s.attributeDivisors;L[v]=1,H[v]===0&&(r.enableVertexAttribArray(v),H[v]=1),G[v]!==I&&(r.vertexAttribDivisor(v,I),G[v]=I)}function M(){let v=s.newAttributes,I=s.enabledAttributes;for(let L=0,H=I.length;L<H;L++)I[L]!==v[L]&&(r.disableVertexAttribArray(L),I[L]=0)}function S(v,I,L,H,G,X,N){N===!0?r.vertexAttribIPointer(v,I,L,G,X):r.vertexAttribPointer(v,I,L,H,G,X)}function x(v,I,L,H){_();let G=H.attributes,X=L.getAttributes(),N=I.defaultAttributeValues;for(let W in X){let V=X[W];if(V.location>=0){let et=G[W];if(et===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let D=et.normalized,it=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;let ae=Lt.buffer,Xt=Lt.type,Wt=Lt.bytesPerElement,Z=Xt===r.INT||Xt===r.UNSIGNED_INT||et.gpuType===oh;if(et.isInterleavedBufferAttribute){let K=et.data,dt=K.stride,Et=et.offset;if(K.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)p(V.location+bt,K.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let bt=0;bt<V.locationSize;bt++)m(V.location+bt);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let bt=0;bt<V.locationSize;bt++)S(V.location+bt,it/V.locationSize,Xt,D,dt*Wt,(Et+it/V.locationSize*bt)*Wt,Z)}else{if(et.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)p(V.location+K,et.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);r.bindBuffer(r.ARRAY_BUFFER,ae);for(let K=0;K<V.locationSize;K++)S(V.location+K,it/V.locationSize,Xt,D,it*Wt,it/V.locationSize*K*Wt,Z)}}else if(N!==void 0){let D=N[W];if(D!==void 0)switch(D.length){case 2:r.vertexAttrib2fv(V.location,D);break;case 3:r.vertexAttrib3fv(V.location,D);break;case 4:r.vertexAttrib4fv(V.location,D);break;default:r.vertexAttrib1fv(V.location,D)}}}}M()}function T(){C();for(let v in n){let I=n[v];for(let L in I){let H=I[L];for(let G in H)h(H[G].object),delete H[G];delete I[L]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let I=n[v.id];for(let L in I){let H=I[L];for(let G in H)h(H[G].object),delete H[G];delete I[L]}delete n[v.id]}function w(v){for(let I in n){let L=n[I];if(L[v.id]===void 0)continue;let H=L[v.id];for(let G in H)h(H[G].object),delete H[G];delete L[v.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function MS(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function SS(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==vi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===To&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ci&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function bS(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Fi,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,S=M*4,x=p.clippingState||null;l.value=x,x=h(g,d,S,f);for(let T=0;T!==S;++T)x[T]=e[T];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function TS(r){let t=new WeakMap;function e(o,a){return a===ih?o.mapping=ws:a===rh&&(o.mapping=Es),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ih||a===rh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Co=4,t_=[.125,.215,.35,.446,.526,.582],Is=20,pf=new Ka,e_=new Kt,mf=null,gf=0,_f=0,xf=!1,Ps=(1+Math.sqrt(5))/2,Ao=1/Ps,n_=[new z(-Ps,Ao,0),new z(Ps,Ao,0),new z(-Ao,0,Ps),new z(Ao,0,Ps),new z(0,Ps,-Ao),new z(0,Ps,Ao),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],wS=new z,Po=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=wS}=s;mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mf,gf,_f),this._renderer.xr.enabled=xf,t.scissorTest=!1,Gh(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ws||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mf=this._renderer.getRenderTarget(),gf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:To,format:vi,colorSpace:Ss,depthBuffer:!1},i=i_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i_(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ES(s)),this._blurMaterial=AS(s,t,e)}return i}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,pf)}_sceneToCubeUV(t,e,n,i,s){let l=new dn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(e_),u.toneMapping=mr,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let _=new Pa({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new Ee(new ki,_),p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(e_),p=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let T=this._cubeSize;Gh(i,x*T,S>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ws||t.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=s_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Gh(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pf)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=n_[(i-s-1)%n_.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ee(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Is-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Is;m>Is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Is}`);let p=[],M=0;for(let w=0;w<Is;++w){let C=w/_,y=Math.exp(-C*C/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;let x=this._sizeLods[i],T=3*x*(i>S-Co?i-S+Co:0),A=4*(this._cubeSize-x);Gh(e,T,A,3*x,2*x),l.setRenderTarget(e),l.render(u,pf)}};function ES(r){let t=[],e=[],n=[],i=r,s=r-Co+1+t_.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Co?l=t_[o-r+Co-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),S=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){let w=A%3*2/3-1,C=A>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(y,_*g*A),S.set(d,m*g*A);let v=[A,A,A,A,A,A];x.set(v,p*g*A)}let T=new En;T.setAttribute("position",new wn(M,_)),T.setAttribute("uv",new wn(S,m)),T.setAttribute("faceIndex",new wn(x,p)),t.push(T),i>Co&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function i_(r,t,e){let n=new Oi(r,t,e);return n.texture.mapping=tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gh(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function AS(r,t,e){let n=new Float32Array(Is),i=new z(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function r_(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cf(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function s_(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Cf(){return`

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
	`}function CS(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ih||l===rh,h=l===ws||l===Es;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Po(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Po(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function RS(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&go("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function PS(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){let T=M[S+0],A=M[S+1],w=M[S+2];d.push(T,A,A,w,w,T)}}else if(g!==void 0){let M=g.array;_=g.version;for(let S=0,x=M.length/3-1;S<x;S+=3){let T=S+0,A=S+1,w=S+2;d.push(T,A,A,w,w,T)}}else return;let m=new(cf(d)?Da:Ia)(d,1);m.version=_;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function IS(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M]*_[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function DS(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function LS(r,t,e){let n=new WeakMap,i=new ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let A=new Float32Array(x*T*4*u),w=new Aa(A,x,T,u);w.type=Ri,w.needsUpdate=!0;let C=S*4;for(let v=0;v<u;v++){let I=m[v],L=p[v],H=M[v],G=x*T*4*v;for(let X=0;X<I.count;X++){let N=X*C;f===!0&&(i.fromBufferAttribute(I,X),A[G+N+0]=i.x,A[G+N+1]=i.y,A[G+N+2]=i.z,A[G+N+3]=0),g===!0&&(i.fromBufferAttribute(L,X),A[G+N+4]=i.x,A[G+N+5]=i.y,A[G+N+6]=i.z,A[G+N+7]=0),_===!0&&(i.fromBufferAttribute(H,X),A[G+N+8]=i.x,A[G+N+9]=i.y,A[G+N+10]=i.z,A[G+N+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:w,size:new oe(x,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function US(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var T_=new Bn,o_=new za(1,1),w_=new Aa,E_=new Ic,A_=new Ua,a_=[],l_=[],c_=new Float32Array(16),h_=new Float32Array(9),u_=new Float32Array(4);function Io(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=a_[i];if(s===void 0&&(s=new Float32Array(i),a_[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function en(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function nn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function qh(r,t){let e=l_[t];e===void 0&&(e=new Int32Array(t),l_[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function NS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function FS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2fv(this.addr,t),nn(e,t)}}function OS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;r.uniform3fv(this.addr,t),nn(e,t)}}function BS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4fv(this.addr,t),nn(e,t)}}function zS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;u_.set(n),r.uniformMatrix2fv(this.addr,!1,u_),nn(e,n)}}function kS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;h_.set(n),r.uniformMatrix3fv(this.addr,!1,h_),nn(e,n)}}function VS(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;c_.set(n),r.uniformMatrix4fv(this.addr,!1,c_),nn(e,n)}}function HS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function GS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2iv(this.addr,t),nn(e,t)}}function WS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3iv(this.addr,t),nn(e,t)}}function XS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4iv(this.addr,t),nn(e,t)}}function qS(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function YS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2uiv(this.addr,t),nn(e,t)}}function $S(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3uiv(this.addr,t),nn(e,t)}}function ZS(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4uiv(this.addr,t),nn(e,t)}}function JS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(o_.compareFunction=af,s=o_):s=T_,e.setTexture2D(t||s,i)}function KS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||E_,i)}function QS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||A_,i)}function jS(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||w_,i)}function tb(r){switch(r){case 5126:return NS;case 35664:return FS;case 35665:return OS;case 35666:return BS;case 35674:return zS;case 35675:return kS;case 35676:return VS;case 5124:case 35670:return HS;case 35667:case 35671:return GS;case 35668:case 35672:return WS;case 35669:case 35673:return XS;case 5125:return qS;case 36294:return YS;case 36295:return $S;case 36296:return ZS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return jS}}function eb(r,t){r.uniform1fv(this.addr,t)}function nb(r,t){let e=Io(t,this.size,2);r.uniform2fv(this.addr,e)}function ib(r,t){let e=Io(t,this.size,3);r.uniform3fv(this.addr,e)}function rb(r,t){let e=Io(t,this.size,4);r.uniform4fv(this.addr,e)}function sb(r,t){let e=Io(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ob(r,t){let e=Io(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function ab(r,t){let e=Io(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lb(r,t){r.uniform1iv(this.addr,t)}function cb(r,t){r.uniform2iv(this.addr,t)}function hb(r,t){r.uniform3iv(this.addr,t)}function ub(r,t){r.uniform4iv(this.addr,t)}function db(r,t){r.uniform1uiv(this.addr,t)}function fb(r,t){r.uniform2uiv(this.addr,t)}function pb(r,t){r.uniform3uiv(this.addr,t)}function mb(r,t){r.uniform4uiv(this.addr,t)}function gb(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||T_,s[o])}function _b(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||E_,s[o])}function xb(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||A_,s[o])}function vb(r,t,e){let n=this.cache,i=t.length,s=qh(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||w_,s[o])}function yb(r){switch(r){case 5126:return eb;case 35664:return nb;case 35665:return ib;case 35666:return rb;case 35674:return sb;case 35675:return ob;case 35676:return ab;case 5124:case 35670:return lb;case 35667:case 35671:return cb;case 35668:case 35672:return hb;case 35669:case 35673:return ub;case 5125:return db;case 36294:return fb;case 36295:return pb;case 36296:return mb;case 35678:case 36198:case 36298:case 36306:case 35682:return gb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return xb;case 36289:case 36303:case 36311:case 36292:return vb}}var yf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tb(e.type)}},Mf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=yb(e.type)}},Sf=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},vf=/(\w+)(\])?(\[|\.)?/g;function d_(r,t){r.seq.push(t),r.map[t.id]=t}function Mb(r,t,e){let n=r.name,i=n.length;for(vf.lastIndex=0;;){let s=vf.exec(n),o=vf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){d_(e,c===void 0?new yf(a,r,t):new Mf(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Sf(a),d_(e,u)),e=u}}}var Ro=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Mb(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function f_(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Sb=37297,bb=0;function Tb(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var p_=new Qt;function wb(r){de._getMatrix(p_,de.workingColorSpace,r);let t=`mat3( ${p_.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(r)){case Ta:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function m_(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Tb(r.getShaderSource(t),a)}else return s}function Eb(r,t){let e=wb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ab(r,t){let e;switch(t){case Dg:e="Linear";break;case Lg:e="Reinhard";break;case Ug:e="Cineon";break;case nh:e="ACESFilmic";break;case Fg:e="AgX";break;case Og:e="Neutral";break;case Ng:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wh=new z;function Cb(){de.getLuminanceCoefficients(Wh);let r=Wh.x.toFixed(4),t=Wh.y.toFixed(4),e=Wh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function Pb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ib(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function al(r){return r!==""}function g_(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function __(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function bf(r){return r.replace(Db,Ub)}var Lb=new Map;function Ub(r,t){let e=ie[t];if(e===void 0){let n=Lb.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return bf(e)}var Nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x_(r){return r.replace(Nb,Fb)}function Fb(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function v_(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Ob(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===$d?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===ug?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Gi&&(t="SHADOWMAP_TYPE_VSM"),t}function Bb(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ws:case Es:t="ENVMAP_TYPE_CUBE";break;case tl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function zb(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function kb(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case eh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pg:t="ENVMAP_BLENDING_MIX";break;case Ig:t="ENVMAP_BLENDING_ADD";break}return t}function Vb(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hb(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ob(e),c=Bb(e),h=zb(e),u=kb(e),d=Vb(e),f=Rb(e),g=Pb(s),_=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(al).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(al).join(`
`),p.length>0&&(p+=`
`)):(m=[v_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),p=[v_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mr?"#define TONE_MAPPING":"",e.toneMapping!==mr?ie.tonemapping_pars_fragment:"",e.toneMapping!==mr?Ab("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Eb("linearToOutputTexel",e.outputColorSpace),Cb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(al).join(`
`)),o=bf(o),o=g_(o,e),o=__(o,e),a=bf(a),a=g_(a,e),a=__(a,e),o=x_(o),a=x_(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+o,x=M+p+a,T=f_(i,i.VERTEX_SHADER,S),A=f_(i,i.FRAGMENT_SHADER,x);i.attachShader(_,T),i.attachShader(_,A),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",H=i.getShaderInfoLog(T)||"",G=i.getShaderInfoLog(A)||"",X=L.trim(),N=H.trim(),W=G.trim(),V=!0,et=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,T,A);else{let D=m_(i,T,"vertex"),it=m_(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+X+`
`+D+`
`+it)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(N===""||W==="")&&(et=!1);et&&(I.diagnostics={runnable:V,programLog:X,vertexShader:{log:N,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(T),i.deleteShader(A),C=new Ro(i,_),y=Ib(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Sb)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=bb++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}var Gb=0,Tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wf(t),e.set(t,n)),n}},wf=class{constructor(t){this.id=Gb++,this.code=t,this.usedTimes=0}};function Wb(r,t,e,n,i,s,o){let a=new Ra,l=new Tf,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,I,L,H){let G=L.fog,X=H.geometry,N=y.isMeshStandardMaterial?L.environment:null,W=(y.isMeshStandardMaterial?e:t).get(y.envMap||N),V=W&&W.mapping===tl?W.image.height:null,et=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let D=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,it=D!==void 0?D.length:0,Lt=0;X.morphAttributes.position!==void 0&&(Lt=1),X.morphAttributes.normal!==void 0&&(Lt=2),X.morphAttributes.color!==void 0&&(Lt=3);let ae,Xt,Wt,Z;if(et){let gt=Xi[et];ae=gt.vertexShader,Xt=gt.fragmentShader}else ae=y.vertexShader,Xt=y.fragmentShader,l.update(y),Wt=l.getVertexShaderID(y),Z=l.getFragmentShaderID(y);let K=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),Et=H.isInstancedMesh===!0,bt=H.isBatchedMesh===!0,zt=!!y.map,fe=!!y.matcap,P=!!W,qt=!!y.aoMap,Dt=!!y.lightMap,At=!!y.bumpMap,F=!!y.normalMap,le=!!y.displacementMap,_t=!!y.emissiveMap,Ht=!!y.metalnessMap,jt=!!y.roughnessMap,ge=y.anisotropy>0,R=y.clearcoat>0,b=y.dispersion>0,k=y.iridescence>0,J=y.sheen>0,Q=y.transmission>0,$=ge&&!!y.anisotropyMap,xt=R&&!!y.clearcoatMap,ot=R&&!!y.clearcoatNormalMap,Tt=R&&!!y.clearcoatRoughnessMap,ut=k&&!!y.iridescenceMap,st=k&&!!y.iridescenceThicknessMap,ht=J&&!!y.sheenColorMap,Nt=J&&!!y.sheenRoughnessMap,wt=!!y.specularMap,ct=!!y.specularColorMap,Gt=!!y.specularIntensityMap,U=Q&&!!y.transmissionMap,rt=Q&&!!y.thicknessMap,at=!!y.gradientMap,pt=!!y.alphaMap,nt=y.alphaTest>0,j=!!y.alphaHash,yt=!!y.extensions,Bt=mr;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Bt=r.toneMapping);let pe={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:ae,fragmentShader:Xt,defines:y.defines,customVertexShaderID:Wt,customFragmentShaderID:Z,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:bt,batchingColor:bt&&H._colorsTexture!==null,instancing:Et,instancingColor:Et&&H.instanceColor!==null,instancingMorph:Et&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ss,alphaToCoverage:!!y.alphaToCoverage,map:zt,matcap:fe,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:V,aoMap:qt,lightMap:Dt,bumpMap:At,normalMap:F,displacementMap:d&&le,emissiveMap:_t,normalMapObjectSpace:F&&y.normalMapType===Vg,normalMapTangentSpace:F&&y.normalMapType===Vh,metalnessMap:Ht,roughnessMap:jt,anisotropy:ge,anisotropyMap:$,clearcoat:R,clearcoatMap:xt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Tt,dispersion:b,iridescence:k,iridescenceMap:ut,iridescenceThicknessMap:st,sheen:J,sheenColorMap:ht,sheenRoughnessMap:Nt,specularMap:wt,specularColorMap:ct,specularIntensityMap:Gt,transmission:Q,transmissionMap:U,thicknessMap:rt,gradientMap:at,opaque:y.transparent===!1&&y.blending===ys&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:nt,alphaHash:j,combine:y.combine,mapUv:zt&&_(y.map.channel),aoMapUv:qt&&_(y.aoMap.channel),lightMapUv:Dt&&_(y.lightMap.channel),bumpMapUv:At&&_(y.bumpMap.channel),normalMapUv:F&&_(y.normalMap.channel),displacementMapUv:le&&_(y.displacementMap.channel),emissiveMapUv:_t&&_(y.emissiveMap.channel),metalnessMapUv:Ht&&_(y.metalnessMap.channel),roughnessMapUv:jt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:xt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:st&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(y.sheenRoughnessMap.channel),specularMapUv:wt&&_(y.specularMap.channel),specularColorMapUv:ct&&_(y.specularColorMap.channel),specularIntensityMapUv:Gt&&_(y.specularIntensityMap.channel),transmissionMapUv:U&&_(y.transmissionMap.channel),thicknessMapUv:rt&&_(y.thicknessMap.channel),alphaMapUv:pt&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(F||ge),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(zt||pt),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:dt,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:Lt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Bt,decodeVideoTexture:zt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:_t&&y.emissiveMap.isVideoTexture===!0&&de.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Wi,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(yt&&y.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pe.vertexUv1s=c.has(1),pe.vertexUv2s=c.has(2),pe.vertexUv3s=c.has(3),c.clear(),pe}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)v.push(I),v.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(M(v,y),S(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),v.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=g[y.type],I;if(v){let L=Xi[v];I=Qg.clone(L.uniforms)}else I=y.uniforms;return I}function T(y,v){let I;for(let L=0,H=h.length;L<H;L++){let G=h[L];if(G.cacheKey===v){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Hb(r,v,y,s),h.push(I)),I}function A(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:C}}function Xb(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function qb(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function y_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function M_(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,_,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,_,m){let p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||qb),n.length>1&&n.sort(d||y_),i.length>1&&i.sort(d||y_)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Yb(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new M_,r.set(n,[o])):i>=s.length?(o=new M_,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function $b(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new Kt};break;case"SpotLight":e={position:new z,direction:new z,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new z,halfWidth:new z,halfHeight:new z};break}return r[t.id]=e,e}}}function Zb(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Jb=0;function Kb(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qb(r){let t=new $b,e=Zb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);let i=new z,s=new Ae,o=new Ae;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,S=0,x=0,T=0,A=0,w=0;c.sort(Kb);for(let y=0,v=c.length;y<v;y++){let I=c[y],L=I.color,H=I.intensity,G=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=L.r*H,u+=L.g*H,d+=L.b*H;else if(I.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(I.sh.coefficients[N],H);w++}else if(I.isDirectionalLight){let N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let W=I.shadow,V=e.get(I);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=I.shadow.matrix,M++}n.directional[f]=N,f++}else if(I.isSpotLight){let N=t.get(I);N.position.setFromMatrixPosition(I.matrixWorld),N.color.copy(L).multiplyScalar(H),N.distance=G,N.coneCos=Math.cos(I.angle),N.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),N.decay=I.decay,n.spot[_]=N;let W=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,W.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=W.matrix,I.castShadow){let V=e.get(I);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,x++}_++}else if(I.isRectAreaLight){let N=t.get(I);N.color.copy(L).multiplyScalar(H),N.halfWidth.set(I.width*.5,0,0),N.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=N,m++}else if(I.isPointLight){let N=t.get(I);if(N.color.copy(I.color).multiplyScalar(I.intensity),N.distance=I.distance,N.decay=I.decay,I.castShadow){let W=I.shadow,V=e.get(I);V.shadowIntensity=W.intensity,V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=I.shadow.matrix,S++}n.point[g]=N,g++}else if(I.isHemisphereLight){let N=t.get(I);N.skyColor.copy(I.color).multiplyScalar(H),N.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[p]=N,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==x||C.numSpotMaps!==T||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=x,C.numSpotMaps=T,C.numLightProbes=w,n.version=Jb++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function S_(r){let t=new Qb(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jb(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new S_(r),t.set(i,[a])):s>=o.length?(a=new S_(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var tT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eT=`uniform sampler2D shadow_pass;
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
}`;function nT(r,t,e){let n=new vo,i=new oe,s=new oe,o=new ye,a=new Nc({depthPacking:kg}),l=new Fc,c={},h=e.maxTextureSize,u={[hr]:fn,[fn]:hr,[Wi]:Wi},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:tT,fragmentShader:eT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new En;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$d;let p=this.type;this.render=function(A,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let y=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),L=r.state;L.setBlending(pr),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let H=p!==Gi&&this.type===Gi,G=p===Gi&&this.type!==Gi;for(let X=0,N=A.length;X<N;X++){let W=A[X],V=W.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let et=V.getFrameExtents();if(i.multiply(et),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,V.mapSize.y=s.y)),V.map===null||H===!0||G===!0){let it=this.type!==Gi?{minFilter:Yn,magFilter:Yn}:{};V.map!==null&&V.map.dispose(),V.map=new Oi(i.x,i.y,it),V.map.texture.name=W.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let D=V.getViewportCount();for(let it=0;it<D;it++){let Lt=V.getViewport(it);o.set(s.x*Lt.x,s.y*Lt.y,s.x*Lt.z,s.y*Lt.w),L.viewport(o),V.updateMatrices(W,it),n=V.getFrustum(),x(w,C,V.camera,W,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&M(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,I)};function M(A,w){let C=t.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Oi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,C,f,_,null)}function S(A,w,C,y){let v=null,I=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)v=I;else if(v=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let L=v.uuid,H=w.uuid,G=c[L];G===void 0&&(G={},c[L]=G);let X=G[H];X===void 0&&(X=v.clone(),G[H]=X,w.addEventListener("dispose",T)),v=X}if(v.visible=w.visible,v.wireframe=w.wireframe,y===Gi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let L=r.properties.get(v);L.light=C}return v}function x(A,w,C,y,v){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Gi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let H=t.update(A),G=A.material;if(Array.isArray(G)){let X=H.groups;for(let N=0,W=X.length;N<W;N++){let V=X[N],et=G[V.materialIndex];if(et&&et.visible){let D=S(A,et,y,v);A.onBeforeShadow(r,A,w,C,H,D,V),r.renderBufferDirect(C,null,H,D,A,V),A.onAfterShadow(r,A,w,C,H,D,V)}}}else if(G.visible){let X=S(A,G,y,v);A.onBeforeShadow(r,A,w,C,H,X,null),r.renderBufferDirect(C,null,H,X,A,null),A.onAfterShadow(r,A,w,C,H,X,null)}}let L=A.children;for(let H=0,G=L.length;H<G;H++)x(L[H],w,C,y,v)}function T(A){A.target.removeEventListener("dispose",T);for(let C in c){let y=c[C],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var iT={[$c]:Zc,[Jc]:jc,[Kc]:th,[Ms]:Qc,[Zc]:$c,[jc]:Jc,[th]:Kc,[Qc]:Ms};function rT(r,t){function e(){let U=!1,rt=new ye,at=null,pt=new ye(0,0,0,0);return{setMask:function(nt){at!==nt&&!U&&(r.colorMask(nt,nt,nt,nt),at=nt)},setLocked:function(nt){U=nt},setClear:function(nt,j,yt,Bt,pe){pe===!0&&(nt*=Bt,j*=Bt,yt*=Bt),rt.set(nt,j,yt,Bt),pt.equals(rt)===!1&&(r.clearColor(nt,j,yt,Bt),pt.copy(rt))},reset:function(){U=!1,at=null,pt.set(-1,0,0,0)}}}function n(){let U=!1,rt=!1,at=null,pt=null,nt=null;return{setReversed:function(j){if(rt!==j){let yt=t.get("EXT_clip_control");j?yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.ZERO_TO_ONE_EXT):yt.clipControlEXT(yt.LOWER_LEFT_EXT,yt.NEGATIVE_ONE_TO_ONE_EXT),rt=j;let Bt=nt;nt=null,this.setClear(Bt)}},getReversed:function(){return rt},setTest:function(j){j?K(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(j){at!==j&&!U&&(r.depthMask(j),at=j)},setFunc:function(j){if(rt&&(j=iT[j]),pt!==j){switch(j){case $c:r.depthFunc(r.NEVER);break;case Zc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case Ms:r.depthFunc(r.LEQUAL);break;case Kc:r.depthFunc(r.EQUAL);break;case Qc:r.depthFunc(r.GEQUAL);break;case jc:r.depthFunc(r.GREATER);break;case th:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}pt=j}},setLocked:function(j){U=j},setClear:function(j){nt!==j&&(rt&&(j=1-j),r.clearDepth(j),nt=j)},reset:function(){U=!1,at=null,pt=null,nt=null,rt=!1}}}function i(){let U=!1,rt=null,at=null,pt=null,nt=null,j=null,yt=null,Bt=null,pe=null;return{setTest:function(gt){U||(gt?K(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(gt){rt!==gt&&!U&&(r.stencilMask(gt),rt=gt)},setFunc:function(gt,Rt,Jt){(at!==gt||pt!==Rt||nt!==Jt)&&(r.stencilFunc(gt,Rt,Jt),at=gt,pt=Rt,nt=Jt)},setOp:function(gt,Rt,Jt){(j!==gt||yt!==Rt||Bt!==Jt)&&(r.stencilOp(gt,Rt,Jt),j=gt,yt=Rt,Bt=Jt)},setLocked:function(gt){U=gt},setClear:function(gt){pe!==gt&&(r.clearStencil(gt),pe=gt)},reset:function(){U=!1,rt=null,at=null,pt=null,nt=null,j=null,yt=null,Bt=null,pe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,T=null,A=null,w=new Kt(0,0,0),C=0,y=!1,v=null,I=null,L=null,H=null,G=null,X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,W=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(V)[1]),N=W>=1):V.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),N=W>=2);let et=null,D={},it=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),ae=new ye().fromArray(it),Xt=new ye().fromArray(Lt);function Wt(U,rt,at,pt){let nt=new Uint8Array(4),j=r.createTexture();r.bindTexture(U,j),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let yt=0;yt<at;yt++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(rt,0,r.RGBA,1,1,pt,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(rt+yt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return j}let Z={};Z[r.TEXTURE_2D]=Wt(r.TEXTURE_2D,r.TEXTURE_2D,1),Z[r.TEXTURE_CUBE_MAP]=Wt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[r.TEXTURE_2D_ARRAY]=Wt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Z[r.TEXTURE_3D]=Wt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Ms),At(!1),F(Yd),K(r.CULL_FACE),qt(pr);function K(U){h[U]!==!0&&(r.enable(U),h[U]=!0)}function dt(U){h[U]!==!1&&(r.disable(U),h[U]=!1)}function Et(U,rt){return u[U]!==rt?(r.bindFramebuffer(U,rt),u[U]=rt,U===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=rt),U===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=rt),!0):!1}function bt(U,rt){let at=f,pt=!1;if(U){at=d.get(rt),at===void 0&&(at=[],d.set(rt,at));let nt=U.textures;if(at.length!==nt.length||at[0]!==r.COLOR_ATTACHMENT0){for(let j=0,yt=nt.length;j<yt;j++)at[j]=r.COLOR_ATTACHMENT0+j;at.length=nt.length,pt=!0}}else at[0]!==r.BACK&&(at[0]=r.BACK,pt=!0);pt&&r.drawBuffers(at)}function zt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}let fe={[Gr]:r.FUNC_ADD,[fg]:r.FUNC_SUBTRACT,[pg]:r.FUNC_REVERSE_SUBTRACT};fe[mg]=r.MIN,fe[gg]=r.MAX;let P={[_g]:r.ZERO,[xg]:r.ONE,[vg]:r.SRC_COLOR,[bc]:r.SRC_ALPHA,[wg]:r.SRC_ALPHA_SATURATE,[bg]:r.DST_COLOR,[Mg]:r.DST_ALPHA,[yg]:r.ONE_MINUS_SRC_COLOR,[Tc]:r.ONE_MINUS_SRC_ALPHA,[Tg]:r.ONE_MINUS_DST_COLOR,[Sg]:r.ONE_MINUS_DST_ALPHA,[Eg]:r.CONSTANT_COLOR,[Ag]:r.ONE_MINUS_CONSTANT_COLOR,[Cg]:r.CONSTANT_ALPHA,[Rg]:r.ONE_MINUS_CONSTANT_ALPHA};function qt(U,rt,at,pt,nt,j,yt,Bt,pe,gt){if(U===pr){_===!0&&(dt(r.BLEND),_=!1);return}if(_===!1&&(K(r.BLEND),_=!0),U!==dg){if(U!==m||gt!==y){if((p!==Gr||x!==Gr)&&(r.blendEquation(r.FUNC_ADD),p=Gr,x=Gr),gt)switch(U){case ys:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zd:r.blendFunc(r.ONE,r.ONE);break;case Jd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ys:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Jd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,S=null,T=null,A=null,w.set(0,0,0),C=0,m=U,y=gt}return}nt=nt||rt,j=j||at,yt=yt||pt,(rt!==p||nt!==x)&&(r.blendEquationSeparate(fe[rt],fe[nt]),p=rt,x=nt),(at!==M||pt!==S||j!==T||yt!==A)&&(r.blendFuncSeparate(P[at],P[pt],P[j],P[yt]),M=at,S=pt,T=j,A=yt),(Bt.equals(w)===!1||pe!==C)&&(r.blendColor(Bt.r,Bt.g,Bt.b,pe),w.copy(Bt),C=pe),m=U,y=!1}function Dt(U,rt){U.side===Wi?dt(r.CULL_FACE):K(r.CULL_FACE);let at=U.side===fn;rt&&(at=!at),At(at),U.blending===ys&&U.transparent===!1?qt(pr):qt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);let pt=U.stencilWrite;a.setTest(pt),pt&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),_t(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(U){v!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),v=U)}function F(U){U!==cg?(K(r.CULL_FACE),U!==I&&(U===Yd?r.cullFace(r.BACK):U===hg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),I=U}function le(U){U!==L&&(N&&r.lineWidth(U),L=U)}function _t(U,rt,at){U?(K(r.POLYGON_OFFSET_FILL),(H!==rt||G!==at)&&(r.polygonOffset(rt,at),H=rt,G=at)):dt(r.POLYGON_OFFSET_FILL)}function Ht(U){U?K(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function jt(U){U===void 0&&(U=r.TEXTURE0+X-1),et!==U&&(r.activeTexture(U),et=U)}function ge(U,rt,at){at===void 0&&(et===null?at=r.TEXTURE0+X-1:at=et);let pt=D[at];pt===void 0&&(pt={type:void 0,texture:void 0},D[at]=pt),(pt.type!==U||pt.texture!==rt)&&(et!==at&&(r.activeTexture(at),et=at),r.bindTexture(U,rt||Z[U]),pt.type=U,pt.texture=rt)}function R(){let U=D[et];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{r.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{r.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{r.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{r.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{r.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ut(){try{r.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{r.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ht(U){ae.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),ae.copy(U))}function Nt(U){Xt.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),Xt.copy(U))}function wt(U,rt){let at=c.get(rt);at===void 0&&(at=new WeakMap,c.set(rt,at));let pt=at.get(U);pt===void 0&&(pt=r.getUniformBlockIndex(rt,U.name),at.set(U,pt))}function ct(U,rt){let pt=c.get(rt).get(U);l.get(rt)!==pt&&(r.uniformBlockBinding(rt,pt,U.__bindingPointIndex),l.set(rt,pt))}function Gt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,D={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,M=null,S=null,x=null,T=null,A=null,w=new Kt(0,0,0),C=0,y=!1,v=null,I=null,L=null,H=null,G=null,ae.set(0,0,r.canvas.width,r.canvas.height),Xt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:dt,bindFramebuffer:Et,drawBuffers:bt,useProgram:zt,setBlending:qt,setMaterial:Dt,setFlipSided:At,setCullFace:F,setLineWidth:le,setPolygonOffset:_t,setScissorTest:Ht,activeTexture:jt,bindTexture:ge,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:k,texImage2D:ut,texImage3D:st,updateUBOMapping:wt,uniformBlockBinding:ct,texStorage2D:ot,texStorage3D:Tt,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:$,compressedTexSubImage3D:xt,scissor:ht,viewport:Nt,reset:Gt}}function sT(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,b){return f?new OffscreenCanvas(R,b):Ea("canvas")}function _(R,b,k){let J=1,Q=ge(R);if((Q.width>k||Q.height>k)&&(J=k/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let $=Math.floor(J*Q.width),xt=Math.floor(J*Q.height);u===void 0&&(u=g($,xt));let ot=b?g($,xt):u;return ot.width=$,ot.height=xt,ot.getContext("2d").drawImage(R,0,0,$,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+xt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,b,k,J,Q=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=b;if(b===r.RED&&(k===r.FLOAT&&($=r.R32F),k===r.HALF_FLOAT&&($=r.R16F),k===r.UNSIGNED_BYTE&&($=r.R8)),b===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.R8UI),k===r.UNSIGNED_SHORT&&($=r.R16UI),k===r.UNSIGNED_INT&&($=r.R32UI),k===r.BYTE&&($=r.R8I),k===r.SHORT&&($=r.R16I),k===r.INT&&($=r.R32I)),b===r.RG&&(k===r.FLOAT&&($=r.RG32F),k===r.HALF_FLOAT&&($=r.RG16F),k===r.UNSIGNED_BYTE&&($=r.RG8)),b===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RG8UI),k===r.UNSIGNED_SHORT&&($=r.RG16UI),k===r.UNSIGNED_INT&&($=r.RG32UI),k===r.BYTE&&($=r.RG8I),k===r.SHORT&&($=r.RG16I),k===r.INT&&($=r.RG32I)),b===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGB8UI),k===r.UNSIGNED_SHORT&&($=r.RGB16UI),k===r.UNSIGNED_INT&&($=r.RGB32UI),k===r.BYTE&&($=r.RGB8I),k===r.SHORT&&($=r.RGB16I),k===r.INT&&($=r.RGB32I)),b===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&($=r.RGBA8UI),k===r.UNSIGNED_SHORT&&($=r.RGBA16UI),k===r.UNSIGNED_INT&&($=r.RGBA32UI),k===r.BYTE&&($=r.RGBA8I),k===r.SHORT&&($=r.RGBA16I),k===r.INT&&($=r.RGBA32I)),b===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),b===r.RGBA){let xt=Q?Ta:de.getTransfer(J);k===r.FLOAT&&($=r.RGBA32F),k===r.HALF_FLOAT&&($=r.RGBA16F),k===r.UNSIGNED_BYTE&&($=xt===Me?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(R,b){let k;return R?b===null||b===$r||b===wo?k=r.DEPTH24_STENCIL8:b===Ri?k=r.DEPTH32F_STENCIL8:b===bo&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===$r||b===wo?k=r.DEPTH_COMPONENT24:b===Ri?k=r.DEPTH_COMPONENT32F:b===bo&&(k=r.DEPTH_COMPONENT16),k}function T(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yn&&R.minFilter!==Ei?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function A(R){let b=R.target;b.removeEventListener("dispose",A),C(b),b.isVideoTexture&&h.delete(b)}function w(R){let b=R.target;b.removeEventListener("dispose",w),v(b)}function C(R){let b=n.get(R);if(b.__webglInit===void 0)return;let k=R.source,J=d.get(k);if(J){let Q=J[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(R),Object.keys(J).length===0&&d.delete(k)}n.remove(R)}function y(R){let b=n.get(R);r.deleteTexture(b.__webglTexture);let k=R.source,J=d.get(k);delete J[b.__cacheKey],o.memory.textures--}function v(R){let b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let Q=0;Q<b.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)r.deleteFramebuffer(b.__webglFramebuffer[J]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let k=R.textures;for(let J=0,Q=k.length;J<Q;J++){let $=n.get(k[J]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(k[J])}n.remove(R)}let I=0;function L(){I=0}function H(){let R=I;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),I+=1,R}function G(R){let b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function X(R,b){let k=n.get(R);if(R.isVideoTexture&&Ht(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(k,R,b);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+b)}function N(R,b){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Z(k,R,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+b)}function W(R,b){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){Z(k,R,b);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+b)}function V(R,b){let k=n.get(R);if(R.version>0&&k.__version!==R.version){K(k,R,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+b)}let et={[wc]:r.REPEAT,[Hr]:r.CLAMP_TO_EDGE,[Ec]:r.MIRRORED_REPEAT},D={[Yn]:r.NEAREST,[Bg]:r.NEAREST_MIPMAP_NEAREST,[el]:r.NEAREST_MIPMAP_LINEAR,[Ei]:r.LINEAR,[sh]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},it={[Hg]:r.NEVER,[$g]:r.ALWAYS,[Gg]:r.LESS,[af]:r.LEQUAL,[Wg]:r.EQUAL,[Yg]:r.GEQUAL,[Xg]:r.GREATER,[qg]:r.NOTEQUAL};function Lt(R,b){if(b.type===Ri&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ei||b.magFilter===sh||b.magFilter===el||b.magFilter===Yr||b.minFilter===Ei||b.minFilter===sh||b.minFilter===el||b.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,et[b.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,D[b.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,D[b.minFilter]),b.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,it[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Yn||b.minFilter!==el&&b.minFilter!==Yr||b.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ae(R,b){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",A));let J=b.source,Q=d.get(J);Q===void 0&&(Q={},d.set(J,Q));let $=G(b);if($!==R.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),Q[$].usedTimes++;let xt=Q[R.__cacheKey];xt!==void 0&&(Q[R.__cacheKey].usedTimes--,xt.usedTimes===0&&y(b)),R.__cacheKey=$,R.__webglTexture=Q[$].texture}return k}function Xt(R,b,k){return Math.floor(Math.floor(R/k)/b)}function Wt(R,b,k,J){let $=R.updateRanges;if($.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,k,J,b.data);else{$.sort((st,ht)=>st.start-ht.start);let xt=0;for(let st=1;st<$.length;st++){let ht=$[xt],Nt=$[st],wt=ht.start+ht.count,ct=Xt(Nt.start,b.width,4),Gt=Xt(ht.start,b.width,4);Nt.start<=wt+1&&ct===Gt&&Xt(Nt.start+Nt.count-1,b.width,4)===ct?ht.count=Math.max(ht.count,Nt.start+Nt.count-ht.start):(++xt,$[xt]=Nt)}$.length=xt+1;let ot=r.getParameter(r.UNPACK_ROW_LENGTH),Tt=r.getParameter(r.UNPACK_SKIP_PIXELS),ut=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let st=0,ht=$.length;st<ht;st++){let Nt=$[st],wt=Math.floor(Nt.start/4),ct=Math.ceil(Nt.count/4),Gt=wt%b.width,U=Math.floor(wt/b.width),rt=ct,at=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Gt),r.pixelStorei(r.UNPACK_SKIP_ROWS,U),e.texSubImage2D(r.TEXTURE_2D,0,Gt,U,rt,at,k,J,b.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Tt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ut)}}function Z(R,b,k){let J=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=r.TEXTURE_3D);let Q=ae(R,b),$=b.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+k);let xt=n.get($);if($.version!==xt.__version||Q===!0){e.activeTexture(r.TEXTURE0+k);let ot=de.getPrimaries(de.workingColorSpace),Tt=b.colorSpace===gr?null:de.getPrimaries(b.colorSpace),ut=b.colorSpace===gr||ot===Tt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let st=_(b.image,!1,i.maxTextureSize);st=jt(b,st);let ht=s.convert(b.format,b.colorSpace),Nt=s.convert(b.type),wt=S(b.internalFormat,ht,Nt,b.colorSpace,b.isVideoTexture);Lt(J,b);let ct,Gt=b.mipmaps,U=b.isVideoTexture!==!0,rt=xt.__version===void 0||Q===!0,at=$.dataReady,pt=T(b,st);if(b.isDepthTexture)wt=x(b.format===Eo,b.type),rt&&(U?e.texStorage2D(r.TEXTURE_2D,1,wt,st.width,st.height):e.texImage2D(r.TEXTURE_2D,0,wt,st.width,st.height,0,ht,Nt,null));else if(b.isDataTexture)if(Gt.length>0){U&&rt&&e.texStorage2D(r.TEXTURE_2D,pt,wt,Gt[0].width,Gt[0].height);for(let nt=0,j=Gt.length;nt<j;nt++)ct=Gt[nt],U?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,ht,Nt,ct.data):e.texImage2D(r.TEXTURE_2D,nt,wt,ct.width,ct.height,0,ht,Nt,ct.data);b.generateMipmaps=!1}else U?(rt&&e.texStorage2D(r.TEXTURE_2D,pt,wt,st.width,st.height),at&&Wt(b,st,ht,Nt)):e.texImage2D(r.TEXTURE_2D,0,wt,st.width,st.height,0,ht,Nt,st.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,wt,Gt[0].width,Gt[0].height,st.depth);for(let nt=0,j=Gt.length;nt<j;nt++)if(ct=Gt[nt],b.format!==vi)if(ht!==null)if(U){if(at)if(b.layerUpdates.size>0){let yt=ff(ct.width,ct.height,b.format,b.type);for(let Bt of b.layerUpdates){let pe=ct.data.subarray(Bt*yt/ct.data.BYTES_PER_ELEMENT,(Bt+1)*yt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Bt,ct.width,ct.height,1,ht,pe)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,st.depth,ht,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,wt,ct.width,ct.height,st.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?at&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,st.depth,ht,Nt,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,wt,ct.width,ct.height,st.depth,0,ht,Nt,ct.data)}else{U&&rt&&e.texStorage2D(r.TEXTURE_2D,pt,wt,Gt[0].width,Gt[0].height);for(let nt=0,j=Gt.length;nt<j;nt++)ct=Gt[nt],b.format!==vi?ht!==null?U?at&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ct.width,ct.height,ht,Nt,ct.data):e.texImage2D(r.TEXTURE_2D,nt,wt,ct.width,ct.height,0,ht,Nt,ct.data)}else if(b.isDataArrayTexture)if(U){if(rt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,wt,st.width,st.height,st.depth),at)if(b.layerUpdates.size>0){let nt=ff(st.width,st.height,b.format,b.type);for(let j of b.layerUpdates){let yt=st.data.subarray(j*nt/st.data.BYTES_PER_ELEMENT,(j+1)*nt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,st.width,st.height,1,ht,Nt,yt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,ht,Nt,st.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,wt,st.width,st.height,st.depth,0,ht,Nt,st.data);else if(b.isData3DTexture)U?(rt&&e.texStorage3D(r.TEXTURE_3D,pt,wt,st.width,st.height,st.depth),at&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,ht,Nt,st.data)):e.texImage3D(r.TEXTURE_3D,0,wt,st.width,st.height,st.depth,0,ht,Nt,st.data);else if(b.isFramebufferTexture){if(rt)if(U)e.texStorage2D(r.TEXTURE_2D,pt,wt,st.width,st.height);else{let nt=st.width,j=st.height;for(let yt=0;yt<pt;yt++)e.texImage2D(r.TEXTURE_2D,yt,wt,nt,j,0,ht,Nt,null),nt>>=1,j>>=1}}else if(Gt.length>0){if(U&&rt){let nt=ge(Gt[0]);e.texStorage2D(r.TEXTURE_2D,pt,wt,nt.width,nt.height)}for(let nt=0,j=Gt.length;nt<j;nt++)ct=Gt[nt],U?at&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ht,Nt,ct):e.texImage2D(r.TEXTURE_2D,nt,wt,ht,Nt,ct);b.generateMipmaps=!1}else if(U){if(rt){let nt=ge(st);e.texStorage2D(r.TEXTURE_2D,pt,wt,nt.width,nt.height)}at&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ht,Nt,st)}else e.texImage2D(r.TEXTURE_2D,0,wt,ht,Nt,st);m(b)&&p(J),xt.__version=$.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function K(R,b,k){if(b.image.length!==6)return;let J=ae(R,b),Q=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+k);let $=n.get(Q);if(Q.version!==$.__version||J===!0){e.activeTexture(r.TEXTURE0+k);let xt=de.getPrimaries(de.workingColorSpace),ot=b.colorSpace===gr?null:de.getPrimaries(b.colorSpace),Tt=b.colorSpace===gr||xt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let ut=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,ht=[];for(let j=0;j<6;j++)!ut&&!st?ht[j]=_(b.image[j],!0,i.maxCubemapSize):ht[j]=st?b.image[j].image:b.image[j],ht[j]=jt(b,ht[j]);let Nt=ht[0],wt=s.convert(b.format,b.colorSpace),ct=s.convert(b.type),Gt=S(b.internalFormat,wt,ct,b.colorSpace),U=b.isVideoTexture!==!0,rt=$.__version===void 0||J===!0,at=Q.dataReady,pt=T(b,Nt);Lt(r.TEXTURE_CUBE_MAP,b);let nt;if(ut){U&&rt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Gt,Nt.width,Nt.height);for(let j=0;j<6;j++){nt=ht[j].mipmaps;for(let yt=0;yt<nt.length;yt++){let Bt=nt[yt];b.format!==vi?wt!==null?U?at&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,Bt.width,Bt.height,wt,Bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,Gt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,0,0,Bt.width,Bt.height,wt,ct,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt,Gt,Bt.width,Bt.height,0,wt,ct,Bt.data)}}}else{if(nt=b.mipmaps,U&&rt){nt.length>0&&pt++;let j=ge(ht[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,pt,Gt,j.width,j.height)}for(let j=0;j<6;j++)if(st){U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ht[j].width,ht[j].height,wt,ct,ht[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,ht[j].width,ht[j].height,0,wt,ct,ht[j].data);for(let yt=0;yt<nt.length;yt++){let pe=nt[yt].image[j].image;U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,pe.width,pe.height,wt,ct,pe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,Gt,pe.width,pe.height,0,wt,ct,pe.data)}}else{U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,wt,ct,ht[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Gt,wt,ct,ht[j]);for(let yt=0;yt<nt.length;yt++){let Bt=nt[yt];U?at&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,0,0,wt,ct,Bt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,yt+1,Gt,wt,ct,Bt.image[j])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function dt(R,b,k,J,Q,$){let xt=s.convert(k.format,k.colorSpace),ot=s.convert(k.type),Tt=S(k.internalFormat,xt,ot,k.colorSpace),ut=n.get(b),st=n.get(k);if(st.__renderTarget=b,!ut.__hasExternalTextures){let ht=Math.max(1,b.width>>$),Nt=Math.max(1,b.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,Tt,ht,Nt,b.depth,0,xt,ot,null):e.texImage2D(Q,$,Tt,ht,Nt,0,xt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),_t(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,st.__webglTexture,0,le(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,st.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Et(R,b,k){if(r.bindRenderbuffer(r.RENDERBUFFER,R),b.depthBuffer){let J=b.depthTexture,Q=J&&J.isDepthTexture?J.type:null,$=x(b.stencilBuffer,Q),xt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=le(b);_t(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,$,b.width,b.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xt,r.RENDERBUFFER,R)}else{let J=b.textures;for(let Q=0;Q<J.length;Q++){let $=J[Q],xt=s.convert($.format,$.colorSpace),ot=s.convert($.type),Tt=S($.internalFormat,xt,ot,$.colorSpace),ut=le(b);k&&_t(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,Tt,b.width,b.height):_t(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,Tt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),X(b.depthTexture,0);let Q=J.__webglTexture,$=le(b);if(b.depthTexture.format===mo)_t(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Eo)_t(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function zt(R){let b=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=J}if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let J=R.texture.mipmaps;J&&J.length>0?bt(b.__webglFramebuffer[0],R):bt(b.__webglFramebuffer,R)}else if(k){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=r.createRenderbuffer(),Et(b.__webglDepthbuffer[J],R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Et(b.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(R,b,k){let J=n.get(R);b!==void 0&&dt(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&zt(R)}function P(R){let b=R.texture,k=n.get(R),J=n.get(b);R.addEventListener("dispose",w);let Q=R.textures,$=R.isWebGLCubeRenderTarget===!0,xt=Q.length>1;if(xt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=b.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer[ot]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)k.__webglFramebuffer[ot][Tt]=r.createFramebuffer()}else k.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){k.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)k.__webglFramebuffer[ot]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(xt)for(let ot=0,Tt=Q.length;ot<Tt;ot++){let ut=n.get(Q[ot]);ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&_t(R)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ot=0;ot<Q.length;ot++){let Tt=Q[ot];k.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[ot]);let ut=s.convert(Tt.format,Tt.colorSpace),st=s.convert(Tt.type),ht=S(Tt.internalFormat,ut,st,Tt.colorSpace,R.isXRRenderTarget===!0),Nt=le(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Nt,ht,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,k.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Et(k.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,b);for(let ot=0;ot<6;ot++)if(b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)dt(k.__webglFramebuffer[ot][Tt],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Tt);else dt(k.__webglFramebuffer[ot],R,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let ot=0,Tt=Q.length;ot<Tt;ot++){let ut=Q[ot],st=n.get(ut),ht=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ht,st.__webglTexture),Lt(ht,ut),dt(k.__webglFramebuffer,R,ut,r.COLOR_ATTACHMENT0+ot,ht,0),m(ut)&&p(ht)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),Lt(ot,b),b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)dt(k.__webglFramebuffer[Tt],R,b,r.COLOR_ATTACHMENT0,ot,Tt);else dt(k.__webglFramebuffer,R,b,r.COLOR_ATTACHMENT0,ot,0);m(b)&&p(ot),e.unbindTexture()}R.depthBuffer&&zt(R)}function qt(R){let b=R.textures;for(let k=0,J=b.length;k<J;k++){let Q=b[k];if(m(Q)){let $=M(R),xt=n.get(Q).__webglTexture;e.bindTexture($,xt),p($),e.unbindTexture()}}}let Dt=[],At=[];function F(R){if(R.samples>0){if(_t(R)===!1){let b=R.textures,k=R.width,J=R.height,Q=r.COLOR_BUFFER_BIT,$=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=n.get(R),ot=b.length>1;if(ot)for(let ut=0;ut<b.length;ut++)e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let Tt=R.texture.mipmaps;Tt&&Tt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ut=0;ut<b.length;ut++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let st=n.get(b[ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,st,0)}r.blitFramebuffer(0,0,k,J,0,0,k,J,Q,r.NEAREST),l===!0&&(Dt.length=0,At.length=0,Dt.push(r.COLOR_ATTACHMENT0+ut),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Dt.push($),At.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let ut=0;ut<b.length;ut++){e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,xt.__webglColorRenderbuffer[ut]);let st=n.get(b[ut]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,xt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,st,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let b=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function le(R){return Math.min(i.maxSamples,R.samples)}function _t(R){let b=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ht(R){let b=o.render.frame;h.get(R)!==b&&(h.set(R,b),R.update())}function jt(R,b){let k=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Ss&&k!==gr&&(de.getTransfer(k)===Me?(J!==vi||Q!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),b}function ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=V,this.rebindTextures=fe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=qt,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=_t}function oT(r,t){function e(n,i=gr){let s,o=de.getTransfer(i);if(n===Ci)return r.UNSIGNED_BYTE;if(n===ah)return r.UNSIGNED_SHORT_4_4_4_4;if(n===lh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===nf)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===jd)return r.BYTE;if(n===tf)return r.SHORT;if(n===bo)return r.UNSIGNED_SHORT;if(n===oh)return r.INT;if(n===$r)return r.UNSIGNED_INT;if(n===Ri)return r.FLOAT;if(n===To)return r.HALF_FLOAT;if(n===rf)return r.ALPHA;if(n===sf)return r.RGB;if(n===vi)return r.RGBA;if(n===mo)return r.DEPTH_COMPONENT;if(n===Eo)return r.DEPTH_STENCIL;if(n===ch)return r.RED;if(n===hh)return r.RED_INTEGER;if(n===of)return r.RG;if(n===uh)return r.RG_INTEGER;if(n===dh)return r.RGBA_INTEGER;if(n===nl||n===il||n===rl||n===sl)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===nl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===nl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===il)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fh||n===ph||n===mh||n===gh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_h||n===xh||n===vh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_h||n===xh)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===vh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yh||n===Mh||n===Sh||n===bh||n===Th||n===wh||n===Eh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Dh||n===Lh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Eh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ah)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ch)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ph)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uh||n===Nh||n===Fh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Uh)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Bh||n===zh||n===kh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var aT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lT=`
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

}`,Ef=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ka(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ai({vertexShader:aT,fragmentShader:lT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Xa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Af=class extends ur{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Ef,p={},M=e.getContextAttributes(),S=null,x=null,T=[],A=[],w=new oe,C=null,y=new dn;y.viewport=new ye;let v=new dn;v.viewport=new ye;let I=[y,v],L=new Yc,H=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let K=T[Z];return K===void 0&&(K=new xo,T[Z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Z){let K=T[Z];return K===void 0&&(K=new xo,T[Z]=K),K.getGripSpace()},this.getHand=function(Z){let K=T[Z];return K===void 0&&(K=new xo,T[Z]=K),K.getHandSpace()};function X(Z){let K=A.indexOf(Z.inputSource);if(K===-1)return;let dt=T[K];dt!==void 0&&(dt.update(Z.inputSource,Z.frame,c||o),dt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function N(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",W);for(let Z=0;Z<T.length;Z++){let K=A[Z];K!==null&&(A[Z]=null,T[Z].disconnect(K))}H=null,G=null,m.reset();for(let Z in p)delete p[Z];t.setRenderTarget(S),f=null,d=null,u=null,i=null,x=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",N),i.addEventListener("inputsourceschange",W),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Et=null,bt=null;M.depth&&(bt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=M.stencil?Eo:mo,Et=M.stencil?wo:$r);let zt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(zt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Oi(d.textureWidth,d.textureHeight,{format:vi,type:Ci,depthTexture:new za(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let dt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Oi(f.framebufferWidth,f.framebufferHeight,{format:vi,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W(Z){for(let K=0;K<Z.removed.length;K++){let dt=Z.removed[K],Et=A.indexOf(dt);Et>=0&&(A[Et]=null,T[Et].disconnect(dt))}for(let K=0;K<Z.added.length;K++){let dt=Z.added[K],Et=A.indexOf(dt);if(Et===-1){for(let zt=0;zt<T.length;zt++)if(zt>=A.length){A.push(dt),Et=zt;break}else if(A[zt]===null){A[zt]=dt,Et=zt;break}if(Et===-1)break}let bt=T[Et];bt&&bt.connect(dt)}}let V=new z,et=new z;function D(Z,K,dt){V.setFromMatrixPosition(K.matrixWorld),et.setFromMatrixPosition(dt.matrixWorld);let Et=V.distanceTo(et),bt=K.projectionMatrix.elements,zt=dt.projectionMatrix.elements,fe=bt[14]/(bt[10]-1),P=bt[14]/(bt[10]+1),qt=(bt[9]+1)/bt[5],Dt=(bt[9]-1)/bt[5],At=(bt[8]-1)/bt[0],F=(zt[8]+1)/zt[0],le=fe*At,_t=fe*F,Ht=Et/(-At+F),jt=Ht*-At;if(K.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(jt),Z.translateZ(Ht),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),bt[10]===-1)Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let ge=fe+Ht,R=P+Ht,b=le-jt,k=_t+(Et-jt),J=qt*P/R*ge,Q=Dt*P/R*ge;Z.projectionMatrix.makePerspective(b,k,J,Q,ge,R),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function it(Z,K){K===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(K.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let K=Z.near,dt=Z.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),L.near=v.near=y.near=K,L.far=v.far=y.far=dt,(H!==L.near||G!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,G=L.far),L.layers.mask=Z.layers.mask|6,y.layers.mask=L.layers.mask&3,v.layers.mask=L.layers.mask&5;let Et=Z.parent,bt=L.cameras;it(L,Et);for(let zt=0;zt<bt.length;zt++)it(bt[zt],Et);bt.length===2?D(L,y,v):L.projectionMatrix.copy(y.projectionMatrix),Lt(Z,L,Et)};function Lt(Z,K,dt){dt===null?Z.matrix.copy(K.matrixWorld):(Z.matrix.copy(dt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(K.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(K.projectionMatrix),Z.projectionMatrixInverse.copy(K.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Cc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Z){return p[Z]};let ae=null;function Xt(Z,K){if(h=K.getViewerPose(c||o),g=K,h!==null){let dt=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Et=!1;dt.length!==L.cameras.length&&(L.cameras.length=0,Et=!0);for(let P=0;P<dt.length;P++){let qt=dt[P],Dt=null;if(f!==null)Dt=f.getViewport(qt);else{let F=u.getViewSubImage(d,qt);Dt=F.viewport,P===0&&(t.setRenderTargetTextures(x,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(x))}let At=I[P];At===void 0&&(At=new dn,At.layers.enable(P),At.viewport=new ye,I[P]=At),At.matrix.fromArray(qt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(qt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),P===0&&(L.matrix.copy(At.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Et===!0&&L.cameras.push(At)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let P=u.getDepthInformation(dt[0]);P&&P.isValid&&P.texture&&m.init(P,i.renderState)}if(bt&&bt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<dt.length;P++){let qt=dt[P].camera;if(qt){let Dt=p[qt];Dt||(Dt=new ka,p[qt]=Dt);let At=u.getCameraImage(qt);Dt.sourceTexture=At}}}}for(let dt=0;dt<T.length;dt++){let Et=A[dt],bt=T[dt];Et!==null&&bt!==void 0&&bt.update(Et,K,c||o)}ae&&ae(Z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Wt=new b_;Wt.setAnimationLoop(Xt),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}},Rs=new xi,cT=new Ae;function hT(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,hf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Rs.copy(x),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(Rs)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uT(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(g(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(M,T);let A=t.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function h(M){let S=u();M.__bindingPointIndex=S;let x=r.createBuffer(),T=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],x=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let A=0,w=x.length;A<w;A++){let C=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,v=C.length;y<v;y++){let I=C[y];if(f(I,A,y,T)===!0){let L=I.__offset,H=Array.isArray(I.value)?I.value:[I.value],G=0;for(let X=0;X<H.length;X++){let N=H[X],W=_(N);typeof N=="number"||typeof N=="boolean"?(I.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,L+G,I.__data)):N.isMatrix3?(I.__data[0]=N.elements[0],I.__data[1]=N.elements[1],I.__data[2]=N.elements[2],I.__data[3]=0,I.__data[4]=N.elements[3],I.__data[5]=N.elements[4],I.__data[6]=N.elements[5],I.__data[7]=0,I.__data[8]=N.elements[6],I.__data[9]=N.elements[7],I.__data[10]=N.elements[8],I.__data[11]=0):(N.toArray(I.__data,G),G+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,x,T){let A=M.value,w=S+"_"+x;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{let C=T[w];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return T[w]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(M){let S=M.uniforms,x=0,T=16;for(let w=0,C=S.length;w<C;w++){let y=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,I=y.length;v<I;v++){let L=y[v],H=Array.isArray(L.value)?L.value:[L.value];for(let G=0,X=H.length;G<X;G++){let N=H[G],W=_(N),V=x%T,et=V%W.boundary,D=V+et;x+=et,D!==0&&T-D<W.storage&&(x+=T-D),L.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=W.storage}}}let A=x%T;return A>0&&(x+=T-A),M.__size=x,M.__cache={},this}function _(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Xh=class{constructor(t={}){let{canvas:e=Zg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,T=!1;this._outputColorSpace=Tn;let A=0,w=0,C=null,y=-1,v=null,I=new ye,L=new ye,H=null,G=new Kt(0),X=0,N=e.width,W=e.height,V=1,et=null,D=null,it=new ye(0,0,N,W),Lt=new ye(0,0,N,W),ae=!1,Xt=new vo,Wt=!1,Z=!1,K=new Ae,dt=new z,Et=new ye,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},zt=!1;function fe(){return C===null?V:1}let P=n;function qt(E,O){return e.getContext(E,O)}try{let E={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",nt,!1),P===null){let O="webgl2";if(P=qt(O,E),P===null)throw qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Dt,At,F,le,_t,Ht,jt,ge,R,b,k,J,Q,$,xt,ot,Tt,ut,st,ht,Nt,wt,ct,Gt;function U(){Dt=new RS(P),Dt.init(),wt=new oT(P,Dt),At=new SS(P,Dt,t,wt),F=new rT(P,Dt),At.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),le=new DS(P),_t=new Xb,Ht=new sT(P,Dt,F,_t,At,wt,le),jt=new TS(x),ge=new CS(x),R=new Bv(P),ct=new yS(P,R),b=new PS(P,R,le,ct),k=new US(P,b,R,le),st=new LS(P,At,Ht),ot=new bS(_t),J=new Wb(x,jt,ge,Dt,At,ct,ot),Q=new hT(x,_t),$=new Yb,xt=new jb(Dt),ut=new vS(x,jt,ge,F,k,f,l),Tt=new nT(x,k,At),Gt=new uT(P,le,At,F),ht=new MS(P,Dt,le),Nt=new IS(P,Dt,le),le.programs=J.programs,x.capabilities=At,x.extensions=Dt,x.properties=_t,x.renderLists=$,x.shadowMap=Tt,x.state=F,x.info=le}U();let rt=new Af(x,P);this.xr=rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=Dt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Dt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(N,W,!1))},this.getSize=function(E){return E.set(N,W)},this.setSize=function(E,O,q=!0){if(rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,W=O,e.width=Math.floor(E*V),e.height=Math.floor(O*V),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*V,W*V).floor()},this.setDrawingBufferSize=function(E,O,q){N=E,W=O,V=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(I)},this.getViewport=function(E){return E.copy(it)},this.setViewport=function(E,O,q,Y){E.isVector4?it.set(E.x,E.y,E.z,E.w):it.set(E,O,q,Y),F.viewport(I.copy(it).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Lt)},this.setScissor=function(E,O,q,Y){E.isVector4?Lt.set(E.x,E.y,E.z,E.w):Lt.set(E,O,q,Y),F.scissor(L.copy(Lt).multiplyScalar(V).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(E){F.setScissorTest(ae=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,q=!0){let Y=0;if(E){let B=!1;if(C!==null){let tt=C.texture.format;B=tt===dh||tt===uh||tt===hh}if(B){let tt=C.texture.type,lt=tt===Ci||tt===$r||tt===bo||tt===wo||tt===ah||tt===lh,Mt=ut.getClearColor(),vt=ut.getClearAlpha(),Ft=Mt.r,It=Mt.g,Pt=Mt.b;lt?(g[0]=Ft,g[1]=It,g[2]=Pt,g[3]=vt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Ft,_[1]=It,_[2]=Pt,_[3]=vt,P.clearBufferiv(P.COLOR,0,_))}else Y|=P.COLOR_BUFFER_BIT}O&&(Y|=P.DEPTH_BUFFER_BIT),q&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),ut.dispose(),$.dispose(),xt.dispose(),_t.dispose(),jt.dispose(),ge.dispose(),k.dispose(),ct.dispose(),Gt.dispose(),J.dispose(),rt.dispose(),rt.removeEventListener("sessionstart",Jt),rt.removeEventListener("sessionend",ft),kt.stop()};function at(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let E=le.autoReset,O=Tt.enabled,q=Tt.autoUpdate,Y=Tt.needsUpdate,B=Tt.type;U(),le.autoReset=E,Tt.enabled=O,Tt.autoUpdate=q,Tt.needsUpdate=Y,Tt.type=B}function nt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function j(E){let O=E.target;O.removeEventListener("dispose",j),yt(O)}function yt(E){Bt(E),_t.remove(E)}function Bt(E){let O=_t.get(E).programs;O!==void 0&&(O.forEach(function(q){J.releaseProgram(q)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,Y,B,tt){O===null&&(O=bt);let lt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=xe(E,O,q,Y,B);F.setMaterial(Y,lt);let vt=q.index,Ft=1;if(Y.wireframe===!0){if(vt=b.getWireframeAttribute(q),vt===void 0)return;Ft=2}let It=q.drawRange,Pt=q.attributes.position,te=It.start*Ft,ce=(It.start+It.count)*Ft;tt!==null&&(te=Math.max(te,tt.start*Ft),ce=Math.min(ce,(tt.start+tt.count)*Ft)),vt!==null?(te=Math.max(te,0),ce=Math.min(ce,vt.count)):Pt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Pt.count));let ke=ce-te;if(ke<0||ke===1/0)return;ct.setup(B,Y,Mt,q,vt);let Pe,Te=ht;if(vt!==null&&(Pe=R.get(vt),Te=Nt,Te.setIndex(Pe)),B.isMesh)Y.wireframe===!0?(F.setLineWidth(Y.wireframeLinewidth*fe()),Te.setMode(P.LINES)):Te.setMode(P.TRIANGLES);else if(B.isLine){let Vt=Y.linewidth;Vt===void 0&&(Vt=1),F.setLineWidth(Vt*fe()),B.isLineSegments?Te.setMode(P.LINES):B.isLineLoop?Te.setMode(P.LINE_LOOP):Te.setMode(P.LINE_STRIP)}else B.isPoints?Te.setMode(P.POINTS):B.isSprite&&Te.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)go("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Vt=B._multiDrawStarts,Ne=B._multiDrawCounts,me=B._multiDrawCount,Jn=vt?R.get(vt).bytesPerElement:1,Ds=_t.get(Y).currentProgram.getUniforms();for(let Kn=0;Kn<me;Kn++)Ds.setValue(P,"_gl_DrawID",Kn),Te.render(Vt[Kn]/Jn,Ne[Kn])}else if(B.isInstancedMesh)Te.renderInstances(te,ke,B.count);else if(q.isInstancedBufferGeometry){let Vt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ne=Math.min(q.instanceCount,Vt);Te.renderInstances(te,ke,Ne)}else Te.render(te,ke)};function pe(E,O,q){E.transparent===!0&&E.side===Wi&&E.forceSinglePass===!1?(E.side=fn,E.needsUpdate=!0,qe(E,O,q),E.side=hr,E.needsUpdate=!0,qe(E,O,q),E.side=Wi):qe(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),p=xt.get(q),p.init(O),S.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==q&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let tt=B.material;if(tt)if(Array.isArray(tt))for(let lt=0;lt<tt.length;lt++){let Mt=tt[lt];pe(Mt,q,B),Y.add(Mt)}else pe(tt,q,B),Y.add(tt)}),p=S.pop(),Y},this.compileAsync=function(E,O,q=null){let Y=this.compile(E,O,q);return new Promise(B=>{function tt(){if(Y.forEach(function(lt){_t.get(lt).currentProgram.isReady()&&Y.delete(lt)}),Y.size===0){B(E);return}setTimeout(tt,10)}Dt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let gt=null;function Rt(E){gt&&gt(E)}function Jt(){kt.stop()}function ft(){kt.start()}let kt=new b_;kt.setAnimationLoop(Rt),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(E){gt=E,rt.setAnimationLoop(E),E===null?kt.stop():kt.start()},rt.addEventListener("sessionstart",Jt),rt.addEventListener("sessionend",ft),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),rt.enabled===!0&&rt.isPresenting===!0&&(rt.cameraAutoUpdate===!0&&rt.updateCamera(O),O=rt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,C),p=xt.get(E,S.length),p.init(O),S.push(p),K.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Xt.setFromProjectionMatrix(K,wi,O.reversedDepth),Z=this.localClippingEnabled,Wt=ot.init(this.clippingPlanes,Z),m=$.get(E,M.length),m.init(),M.push(m),rt.enabled===!0&&rt.isPresenting===!0){let tt=x.xr.getDepthSensingMesh();tt!==null&&Ut(tt,O,-1/0,x.sortObjects)}Ut(E,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(et,D),zt=rt.enabled===!1||rt.isPresenting===!1||rt.hasDepthSensing()===!1,zt&&ut.addToRenderList(m,E),this.info.render.frame++,Wt===!0&&ot.beginShadows();let q=p.state.shadowsArray;Tt.render(q,E,O),Wt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let tt=O.cameras;if(B.length>0)for(let lt=0,Mt=tt.length;lt<Mt;lt++){let vt=tt[lt];Xe(Y,B,E,vt)}zt&&ut.render(E);for(let lt=0,Mt=tt.length;lt<Mt;lt++){let vt=tt[lt];Yt(m,E,vt,vt.viewport)}}else B.length>0&&Xe(Y,B,E,O),zt&&ut.render(E),Yt(m,E,O);C!==null&&w===0&&(Ht.updateMultisampleRenderTarget(C),Ht.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(x,E,O),ct.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],Wt===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ut(E,O,q,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Xt.intersectsSprite(E)){Y&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);let lt=k.update(E),Mt=E.material;Mt.visible&&m.push(E,lt,Mt,q,Et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Xt.intersectsObject(E))){let lt=k.update(E),Mt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Et.copy(lt.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(Mt)){let vt=lt.groups;for(let Ft=0,It=vt.length;Ft<It;Ft++){let Pt=vt[Ft],te=Mt[Pt.materialIndex];te&&te.visible&&m.push(E,lt,te,q,Et.z,Pt)}}else Mt.visible&&m.push(E,lt,Mt,q,Et.z,null)}}let tt=E.children;for(let lt=0,Mt=tt.length;lt<Mt;lt++)Ut(tt[lt],O,q,Y)}function Yt(E,O,q,Y){let B=E.opaque,tt=E.transmissive,lt=E.transparent;p.setupLightsView(q),Wt===!0&&ot.setGlobalState(x.clippingPlanes,q),Y&&F.viewport(I.copy(Y)),B.length>0&&ee(B,O,q),tt.length>0&&ee(tt,O,q),lt.length>0&&ee(lt,O,q),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Xe(E,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Oi(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?To:Ci,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:de.workingColorSpace}));let tt=p.state.transmissionRenderTarget[Y.id],lt=Y.viewport||I;tt.setSize(lt.z*x.transmissionResolutionScale,lt.w*x.transmissionResolutionScale);let Mt=x.getRenderTarget(),vt=x.getActiveCubeFace(),Ft=x.getActiveMipmapLevel();x.setRenderTarget(tt),x.getClearColor(G),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),zt&&ut.render(q);let It=x.toneMapping;x.toneMapping=mr;let Pt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Wt===!0&&ot.setGlobalState(x.clippingPlanes,Y),ee(E,q,Y),Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ce=0,ke=O.length;ce<ke;ce++){let Pe=O[ce],Te=Pe.object,Vt=Pe.geometry,Ne=Pe.material,me=Pe.group;if(Ne.side===Wi&&Te.layers.test(Y.layers)){let Jn=Ne.side;Ne.side=fn,Ne.needsUpdate=!0,Le(Te,q,Y,Vt,Ne,me),Ne.side=Jn,Ne.needsUpdate=!0,te=!0}}te===!0&&(Ht.updateMultisampleRenderTarget(tt),Ht.updateRenderTargetMipmap(tt))}x.setRenderTarget(Mt,vt,Ft),x.setClearColor(G,X),Pt!==void 0&&(Y.viewport=Pt),x.toneMapping=It}function ee(E,O,q){let Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,tt=E.length;B<tt;B++){let lt=E[B],Mt=lt.object,vt=lt.geometry,Ft=lt.group,It=lt.material;It.allowOverride===!0&&Y!==null&&(It=Y),Mt.layers.test(q.layers)&&Le(Mt,O,q,vt,It,Ft)}}function Le(E,O,q,Y,B,tt){E.onBeforeRender(x,O,q,Y,B,tt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,O,q,Y,E,tt),B.transparent===!0&&B.side===Wi&&B.forceSinglePass===!1?(B.side=fn,B.needsUpdate=!0,x.renderBufferDirect(q,O,Y,B,E,tt),B.side=hr,B.needsUpdate=!0,x.renderBufferDirect(q,O,Y,B,E,tt),B.side=Wi):x.renderBufferDirect(q,O,Y,B,E,tt),E.onAfterRender(x,O,q,Y,B,tt)}function qe(E,O,q){O.isScene!==!0&&(O=bt);let Y=_t.get(E),B=p.state.lights,tt=p.state.shadowsArray,lt=B.state.version,Mt=J.getParameters(E,B.state,tt,O,q),vt=J.getProgramCacheKey(Mt),Ft=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?ge:jt).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",j),Ft=new Map,Y.programs=Ft);let It=Ft.get(vt);if(It!==void 0){if(Y.currentProgram===It&&Y.lightsStateVersion===lt)return be(E,Mt),It}else Mt.uniforms=J.getUniforms(E),E.onBeforeCompile(Mt,x),It=J.acquireProgram(Mt,vt),Ft.set(vt,It),Y.uniforms=Mt.uniforms;let Pt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=ot.uniform),be(E,Mt),Y.needsLights=Re(E),Y.lightsStateVersion=lt,Y.needsLights&&(Pt.ambientLightColor.value=B.state.ambient,Pt.lightProbe.value=B.state.probe,Pt.directionalLights.value=B.state.directional,Pt.directionalLightShadows.value=B.state.directionalShadow,Pt.spotLights.value=B.state.spot,Pt.spotLightShadows.value=B.state.spotShadow,Pt.rectAreaLights.value=B.state.rectArea,Pt.ltc_1.value=B.state.rectAreaLTC1,Pt.ltc_2.value=B.state.rectAreaLTC2,Pt.pointLights.value=B.state.point,Pt.pointLightShadows.value=B.state.pointShadow,Pt.hemisphereLights.value=B.state.hemi,Pt.directionalShadowMap.value=B.state.directionalShadowMap,Pt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Pt.spotShadowMap.value=B.state.spotShadowMap,Pt.spotLightMatrix.value=B.state.spotLightMatrix,Pt.spotLightMap.value=B.state.spotLightMap,Pt.pointShadowMap.value=B.state.pointShadowMap,Pt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=It,Y.uniformsList=null,It}function Ce(E){if(E.uniformsList===null){let O=E.currentProgram.getUniforms();E.uniformsList=Ro.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function be(E,O){let q=_t.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function xe(E,O,q,Y,B){O.isScene!==!0&&(O=bt),Ht.resetTextureUnits();let tt=O.fog,lt=Y.isMeshStandardMaterial?O.environment:null,Mt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ss,vt=(Y.isMeshStandardMaterial?ge:jt).get(Y.envMap||lt),Ft=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,It=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!q.morphAttributes.position,te=!!q.morphAttributes.normal,ce=!!q.morphAttributes.color,ke=mr;Y.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=x.toneMapping);let Pe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=Pe!==void 0?Pe.length:0,Vt=_t.get(Y),Ne=p.state.lights;if(Wt===!0&&(Z===!0||E!==v)){let Rn=E===v&&Y.id===y;ot.setState(Y,E,Rn)}let me=!1;Y.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ne.state.version||Vt.outputColorSpace!==Mt||B.isBatchedMesh&&Vt.batching===!1||!B.isBatchedMesh&&Vt.batching===!0||B.isBatchedMesh&&Vt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Vt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Vt.instancing===!1||!B.isInstancedMesh&&Vt.instancing===!0||B.isSkinnedMesh&&Vt.skinning===!1||!B.isSkinnedMesh&&Vt.skinning===!0||B.isInstancedMesh&&Vt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Vt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Vt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Vt.instancingMorph===!1&&B.morphTexture!==null||Vt.envMap!==vt||Y.fog===!0&&Vt.fog!==tt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==ot.numPlanes||Vt.numIntersection!==ot.numIntersection)||Vt.vertexAlphas!==Ft||Vt.vertexTangents!==It||Vt.morphTargets!==Pt||Vt.morphNormals!==te||Vt.morphColors!==ce||Vt.toneMapping!==ke||Vt.morphTargetsCount!==Te)&&(me=!0):(me=!0,Vt.__version=Y.version);let Jn=Vt.currentProgram;me===!0&&(Jn=qe(Y,O,B));let Ds=!1,Kn=!1,Fo=!1,Fe=Jn.getUniforms(),ci=Vt.uniforms;if(F.useProgram(Jn.program)&&(Ds=!0,Kn=!0,Fo=!0),Y.id!==y&&(y=Y.id,Kn=!0),Ds||v!==E){F.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Fe.setValue(P,"projectionMatrix",E.projectionMatrix),Fe.setValue(P,"viewMatrix",E.matrixWorldInverse);let zn=Fe.map.cameraPosition;zn!==void 0&&zn.setValue(P,dt.setFromMatrixPosition(E.matrixWorld)),At.logarithmicDepthBuffer&&Fe.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Fe.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Kn=!0,Fo=!0)}if(B.isSkinnedMesh){Fe.setOptional(P,B,"bindMatrix"),Fe.setOptional(P,B,"bindMatrixInverse");let Rn=B.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Fe.setValue(P,"boneTexture",Rn.boneTexture,Ht))}B.isBatchedMesh&&(Fe.setOptional(P,B,"batchingTexture"),Fe.setValue(P,"batchingTexture",B._matricesTexture,Ht),Fe.setOptional(P,B,"batchingIdTexture"),Fe.setValue(P,"batchingIdTexture",B._indirectTexture,Ht),Fe.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Fe.setValue(P,"batchingColorTexture",B._colorsTexture,Ht));let hi=q.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&st.update(B,q,Jn),(Kn||Vt.receiveShadow!==B.receiveShadow)&&(Vt.receiveShadow=B.receiveShadow,Fe.setValue(P,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(ci.envMap.value=vt,ci.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(ci.envMapIntensity.value=O.environmentIntensity),Kn&&(Fe.setValue(P,"toneMappingExposure",x.toneMappingExposure),Vt.needsLights&&Zn(ci,Fo),tt&&Y.fog===!0&&Q.refreshFogUniforms(ci,tt),Q.refreshMaterialUniforms(ci,Y,V,W,p.state.transmissionRenderTarget[E.id]),Ro.upload(P,Ce(Vt),ci,Ht)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ro.upload(P,Ce(Vt),ci,Ht),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Fe.setValue(P,"center",B.center),Fe.setValue(P,"modelViewMatrix",B.modelViewMatrix),Fe.setValue(P,"normalMatrix",B.normalMatrix),Fe.setValue(P,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Rn=Y.uniformsGroups;for(let zn=0,jh=Rn.length;zn<jh;zn++){let Zr=Rn[zn];Gt.update(Zr,Jn),Gt.bind(Zr,Jn)}}return Jn}function Zn(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Re(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,q){let Y=_t.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),_t.get(E.texture).__webglTexture=O,_t.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){let q=_t.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};let Cn=P.createFramebuffer();this.setRenderTarget=function(E,O=0,q=0){C=E,A=O,w=q;let Y=!0,B=null,tt=!1,lt=!1;if(E){let vt=_t.get(E);if(vt.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1;else if(vt.__webglFramebuffer===void 0)Ht.setupRenderTarget(E);else if(vt.__hasExternalTextures)Ht.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Pt=E.depthTexture;if(vt.__boundDepthTexture!==Pt){if(Pt!==null&&_t.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(E)}}let Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(lt=!0);let It=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[O])?B=It[O][q]:B=It[O],tt=!0):E.samples>0&&Ht.useMultisampledRTT(E)===!1?B=_t.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?B=It[q]:B=It,I.copy(E.viewport),L.copy(E.scissor),H=E.scissorTest}else I.copy(it).multiplyScalar(V).floor(),L.copy(Lt).multiplyScalar(V).floor(),H=ae;if(q!==0&&(B=Cn),F.bindFramebuffer(P.FRAMEBUFFER,B)&&Y&&F.drawBuffers(E,B),F.viewport(I),F.scissor(L),F.setScissorTest(H),tt){let vt=_t.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,vt.__webglTexture,q)}else if(lt){let vt=O;for(let Ft=0;Ft<E.textures.length;Ft++){let It=_t.get(E.textures[Ft]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ft,It.__webglTexture,q,vt)}}else if(E!==null&&q!==0){let vt=_t.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(E,O,q,Y,B,tt,lt,Mt=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt){F.bindFramebuffer(P.FRAMEBUFFER,vt);try{let Ft=E.textures[Mt],It=Ft.format,Pt=Ft.type;if(!At.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B&&(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt),P.readPixels(O,q,Y,B,wt.convert(It),wt.convert(Pt),tt))}finally{let Ft=C!==null?_t.get(C).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,Y,B,tt,lt,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&lt!==void 0&&(vt=vt[lt]),vt)if(O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B){F.bindFramebuffer(P.FRAMEBUFFER,vt);let Ft=E.textures[Mt],It=Ft.format,Pt=Ft.type;if(!At.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.bufferData(P.PIXEL_PACK_BUFFER,tt.byteLength,P.STREAM_READ),E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Mt),P.readPixels(O,q,Y,B,wt.convert(It),wt.convert(Pt),0);let ce=C!==null?_t.get(C).__webglFramebuffer:null;F.bindFramebuffer(P.FRAMEBUFFER,ce);let ke=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Jg(P,ke,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,tt),P.deleteBuffer(te),P.deleteSync(ke),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,q=0){let Y=Math.pow(2,-q),B=Math.floor(E.image.width*Y),tt=Math.floor(E.image.height*Y),lt=O!==null?O.x:0,Mt=O!==null?O.y:0;Ht.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,q,0,0,lt,Mt,B,tt),F.unbindTexture()};let li=P.createFramebuffer(),Qe=P.createFramebuffer();this.copyTextureToTexture=function(E,O,q=null,Y=null,B=0,tt=null){tt===null&&(B!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=B,B=0):tt=0);let lt,Mt,vt,Ft,It,Pt,te,ce,ke,Pe=E.isCompressedTexture?E.mipmaps[tt]:E.image;if(q!==null)lt=q.max.x-q.min.x,Mt=q.max.y-q.min.y,vt=q.isBox3?q.max.z-q.min.z:1,Ft=q.min.x,It=q.min.y,Pt=q.isBox3?q.min.z:0;else{let hi=Math.pow(2,-B);lt=Math.floor(Pe.width*hi),Mt=Math.floor(Pe.height*hi),E.isDataArrayTexture?vt=Pe.depth:E.isData3DTexture?vt=Math.floor(Pe.depth*hi):vt=1,Ft=0,It=0,Pt=0}Y!==null?(te=Y.x,ce=Y.y,ke=Y.z):(te=0,ce=0,ke=0);let Te=wt.convert(O.format),Vt=wt.convert(O.type),Ne;O.isData3DTexture?(Ht.setTexture3D(O,0),Ne=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ht.setTexture2DArray(O,0),Ne=P.TEXTURE_2D_ARRAY):(Ht.setTexture2D(O,0),Ne=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let me=P.getParameter(P.UNPACK_ROW_LENGTH),Jn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ds=P.getParameter(P.UNPACK_SKIP_PIXELS),Kn=P.getParameter(P.UNPACK_SKIP_ROWS),Fo=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Pe.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Pe.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ft),P.pixelStorei(P.UNPACK_SKIP_ROWS,It),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pt);let Fe=E.isDataArrayTexture||E.isData3DTexture,ci=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){let hi=_t.get(E),Rn=_t.get(O),zn=_t.get(hi.__renderTarget),jh=_t.get(Rn.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,zn.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,jh.__webglFramebuffer);for(let Zr=0;Zr<vt;Zr++)Fe&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,B,Pt+Zr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(O).__webglTexture,tt,ke+Zr)),P.blitFramebuffer(Ft,It,lt,Mt,te,ce,lt,Mt,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||_t.has(E)){let hi=_t.get(E),Rn=_t.get(O);F.bindFramebuffer(P.READ_FRAMEBUFFER,li),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qe);for(let zn=0;zn<vt;zn++)Fe?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,hi.__webglTexture,B,Pt+zn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,hi.__webglTexture,B),ci?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Rn.__webglTexture,tt,ke+zn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rn.__webglTexture,tt),B!==0?P.blitFramebuffer(Ft,It,lt,Mt,te,ce,lt,Mt,P.COLOR_BUFFER_BIT,P.NEAREST):ci?P.copyTexSubImage3D(Ne,tt,te,ce,ke+zn,Ft,It,lt,Mt):P.copyTexSubImage2D(Ne,tt,te,ce,Ft,It,lt,Mt);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ci?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ne,tt,te,ce,ke,lt,Mt,vt,Te,Vt,Pe.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ne,tt,te,ce,ke,lt,Mt,vt,Te,Pe.data):P.texSubImage3D(Ne,tt,te,ce,ke,lt,Mt,vt,Te,Vt,Pe):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,tt,te,ce,lt,Mt,Te,Vt,Pe.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,tt,te,ce,Pe.width,Pe.height,Te,Pe.data):P.texSubImage2D(P.TEXTURE_2D,tt,te,ce,lt,Mt,Te,Vt,Pe);P.pixelStorei(P.UNPACK_ROW_LENGTH,me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ds),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Fo),tt===0&&O.generateMipmaps&&P.generateMipmap(Ne),F.unbindTexture()},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&Ht.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ht.setTextureCube(E,0):E.isData3DTexture?Ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ht.setTexture2DArray(E,0):Ht.setTexture2D(E,0),F.unbindTexture()},this.resetState=function(){A=0,w=0,C=null,F.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};var Yh=class extends bs{constructor(){super();let t=new ki;t.deleteAttribute("uv");let e=new Vi({side:fn}),n=new Vi,i=new qr(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ee(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Fa(t,n,6),a=new ln;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ee(t,Do(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ee(t,Do(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ee(t,Do(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ee(t,Do(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ee(t,Do(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ee(t,Do(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Do(r){return new $a({color:0,emissive:16777215,emissiveIntensity:r})}var Ot=(r,t=document)=>t.querySelector(r),Ke=(r,t=document)=>[...t.querySelectorAll(r)],pn=r=>String(r??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),rn=matchMedia("(prefers-reduced-motion: reduce)").matches,Rf=matchMedia("(hover: hover) and (pointer: fine)").matches,ll=r=>Number(r).toLocaleString("ru-RU")+" \u20BD";function Pf(r){let t=Math.max(1,Math.round((Date.now()-r)/6e4));if(t<60)return`${t} \u043C\u0438\u043D \u043D\u0430\u0437\u0430\u0434`;let e=Math.round(t/60);return e<24?`${e} \u0447 \u043D\u0430\u0437\u0430\u0434`:`${Math.round(e/24)} \u0434\u043D \u043D\u0430\u0437\u0430\u0434`}var C_;function _r(r){let t=Ot("#toast");t.textContent=r,t.classList.add("is-on"),clearTimeout(C_),C_=setTimeout(()=>t.classList.remove("is-on"),2800)}var R_=null,cl={onOpen:()=>{},onClose:()=>{}};function If(r){R_=document.activeElement,r.hidden=!1,document.documentElement.classList.add("modal-open"),cl.onOpen();let t=Ot(".modal__panel",r);t.scrollTop=0,rn||(Zt.fromTo(Ot(".modal__backdrop",r),{opacity:0},{opacity:1,duration:.35}),Zt.fromTo(t,{y:60,opacity:0,rotateX:-12,scale:.96},{y:0,opacity:1,rotateX:0,scale:1,duration:.6,ease:"expo.out"})),setTimeout(()=>(Ot("input:not([type=radio]):not([type=file]), button",t)||t).focus({preventScroll:!0}),50)}function Lo(r){if(r.hidden)return;let t=()=>{r.hidden=!0,Ke(".modal").some(e=>!e.hidden)||(document.documentElement.classList.remove("modal-open"),cl.onClose()),R_?.focus?.({preventScroll:!0})};if(rn)return t();Zt.to(Ot(".modal__backdrop",r),{opacity:0,duration:.25}),Zt.to(Ot(".modal__panel",r),{y:40,opacity:0,scale:.97,duration:.3,ease:"power2.in",onComplete:t})}document.addEventListener("click",r=>{let t=r.target.closest("[data-close]");t&&Lo(t.closest(".modal"))});document.addEventListener("keydown",r=>{if(r.key==="Escape"){let t=Ke(".modal").filter(e=>!e.hidden).pop();t&&Lo(t)}});function $h(r,t=8){if(!Rf||rn||r._tilt)return;r._tilt=!0;let e=Zt.quickTo(r,"rotationY",{duration:.6,ease:"power3"}),n=Zt.quickTo(r,"rotationX",{duration:.6,ease:"power3"});r.addEventListener("pointermove",i=>{let s=r.getBoundingClientRect(),o=(i.clientX-s.left)/s.width,a=(i.clientY-s.top)/s.height;e((o-.5)*t*2),n(-(a-.5)*t*2),r.style.setProperty("--mx",o*100+"%"),r.style.setProperty("--my",a*100+"%")}),r.addEventListener("pointerleave",()=>{e(0),n(0)})}var xr={dark:{core:8150271,a:13041469,b:16732120,c:3727871,d:16777215,coin:16764733,env:.9},light:{core:6966271,a:10215424,b:16727988,c:46054,d:1381660,coin:16757760,env:1.1}};function fT(){let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d");t.fillStyle="#ffcf3d",t.fillRect(0,0,256,256),t.strokeStyle="rgba(0,0,0,.18)",t.lineWidth=10,t.beginPath(),t.arc(128,128,108,0,Math.PI*2),t.stroke(),t.fillStyle="#3a2600",t.font="800 150px Unbounded, Arial, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("\u20BD",128,138);let e=new Ba(r);return e.colorSpace=Tn,e.anisotropy=4,e}function P_(r){let t;try{t=new Xh({canvas:r,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return r.remove(),{setTheme(){}}}t.setPixelRatio(Math.min(devicePixelRatio,1.75)),t.toneMapping=nh,t.outputColorSpace=Tn;let e=new bs,n=new Po(t);e.environment=n.fromScene(new Yh,.04).texture;let i=new dn(35,1,.1,100);i.position.set(0,0,14);let s=new lr;e.add(s);let o={uTime:{value:0},uAmp:{value:.32}},a=new Hi({color:xr.dark.core,roughness:.12,metalness:.15,clearcoat:1,clearcoatRoughness:.08,iridescence:1,iridescenceIOR:1.6,iridescenceThicknessRange:[200,900],sheen:.6,sheenColor:new Kt(16732120)});a.onBeforeCompile=N=>{Object.assign(N.uniforms,o),N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
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
        objectNormal=normalize(cross(pa-p0,pb-p0));`).replace("#include <begin_vertex>","vec3 transformed=position+normal*disp(position);")};let l=new Ee(new Ga(2.1,48),a);s.add(l);let c=new Hi({color:xr.dark.a,metalness:.6,roughness:.2,clearcoat:1}),h=new Ee(new So(3.1,.06,16,160),c);h.rotation.set(1.2,.3,0),s.add(h);let u=fT(),d={a:new Hi({color:xr.dark.a,roughness:.25,metalness:.1,clearcoat:1}),b:new Hi({color:xr.dark.b,roughness:.2,metalness:.2,clearcoat:1}),c:new Hi({color:xr.dark.c,roughness:.05,transmission:.9,thickness:1.2,ior:1.4}),d:new Hi({color:xr.dark.d,roughness:.35,metalness:.9}),coinSide:new Vi({color:xr.dark.coin,metalness:1,roughness:.25}),coinFace:new Vi({map:u,metalness:.7,roughness:.3})},f={box:new ki(1,1,1,4,4,4),torus:new So(.55,.22,24,64),sphere:new qa(.55,48,32),cone:new Va(.55,1.1,4),knot:new Ya(.42,.14,128,16),coin:new Mo(.62,.62,.14,48),oct:new Wa(.62)},_=[["coin","coin",[-5.2,2.2,.5],1.15],["torus","b",[5.1,2.4,-.5],1.1],["box","a",[-4.4,-2.6,1],.9],["sphere","c",[4.6,-2.2,1.6],1.2],["knot","d",[.2,3.6,-2.5],1],["coin","coin",[3.2,-3.8,-1],.85],["cone","b",[-2.6,-4,-2],.9],["oct","a",[6.6,.1,-3],.9],["sphere","b",[-6.8,-.2,-3],.7],["coin","coin",[-1.6,4.4,-4],.7],["torus","c",[1.8,-4.6,1.2],.6],["box","d",[6.2,4.2,-5],.6]].map(([N,W,V,et],D)=>{let it=N==="coin"?new Ee(f.coin,[d.coinSide,d.coinFace,d.coinFace]):new Ee(f[N],d[W]);return N==="coin"&&(it.rotation.x=Math.PI/2),it.position.set(...V),it.scale.setScalar(et),it.userData={base:new z(...V),sp:.4+D%5*.13,ph:D*1.7,rot:new z(D%3*.2+.15,D%4*.15+.1,.08)},s.add(it),it}),m=420,p=new Float32Array(m*3);for(let N=0;N<m;N++)p[N*3]=(Math.random()-.5)*30,p[N*3+1]=(Math.random()-.5)*18,p[N*3+2]=(Math.random()-.5)*14-4;let M=new En;M.setAttribute("position",new wn(p,3));let S=new yo({size:.04,color:16777215,transparent:!0,opacity:.6,depthWrite:!1}),x=new Oa(M,S);e.add(x);let T=new Qa(16777215,2.2);T.position.set(4,6,6),e.add(T);let A=new qr(16732120,30,30);A.position.set(-6,-3,3),e.add(A);let w=new qr(3727871,30,30);w.position.set(6,3,2),e.add(w);let C={x:0,y:0,tx:0,ty:0};addEventListener("pointermove",N=>{C.tx=N.clientX/innerWidth-.5,C.ty=N.clientY/innerHeight-.5},{passive:!0});let y=0;addEventListener("scroll",()=>{y=Math.min(1,scrollY/innerHeight)},{passive:!0});function v(){let N=r.clientWidth,W=r.clientHeight;t.setSize(N,W,!1),i.aspect=N/W,i.position.z=N<700?24:N<1100?16:15,s.position.x=N>=1100?3.2:N>=700?1.6:0,s.position.y=N<700?3.2:0,i.updateProjectionMatrix()}new ResizeObserver(v).observe(r),v();let I=!0;new IntersectionObserver(([N])=>{I=N.isIntersecting}).observe(r);let L=new ja,H=0;function G(){if(requestAnimationFrame(G),!I||document.hidden)return;let N=Math.min(L.getDelta(),.05),W=L.elapsedTime,V=rn?.15:1;H=Math.min(1,H+N*.6);let et=1-Math.pow(1-H,4);C.x+=(C.tx-C.x)*.05,C.y+=(C.ty-C.y)*.05,o.uTime.value=W*V,o.uAmp.value=.28+Math.sin(W*.7)*.06+y*.25,l.rotation.y=W*.15*V+C.x*.8,l.rotation.x=C.y*.5,l.scale.setScalar((.4+.6*et)*(1-y*.25)),h.rotation.z=W*.3*V,h.rotation.x=1.2+C.y*.4,_.forEach(D=>{let it=D.userData,Lt=1+(1-et)*1.6+y*.6;D.position.set(it.base.x*Lt+Math.cos(W*it.sp*V+it.ph)*.25,it.base.y*Lt+Math.sin(W*it.sp*V+it.ph)*.45,it.base.z+Math.sin(W*.3+it.ph)*.3),D.rotation.x+=it.rot.x*N*V,D.rotation.y+=it.rot.y*N*V,D.rotation.z+=it.rot.z*N*V}),x.rotation.y=W*.02,x.position.y=y*2,s.rotation.y=C.x*.35,s.rotation.x=C.y*.2,i.position.y=-y*2.5,i.lookAt(0,-y*1.2,0),t.render(e,i)}G();function X(N){let W=xr[N]||xr.dark;a.color.setHex(W.core),c.color.setHex(W.a),d.a.color.setHex(W.a),d.b.color.setHex(W.b),d.c.color.setHex(W.c),d.d.color.setHex(W.d),d.coinSide.color.setHex(W.coin),S.color.setHex(N==="light"?3877775:16777215),S.opacity=N==="light"?.35:.6,t.toneMappingExposure=W.env}return{setTheme:X}}var I_={pro:"299 \u20BD",boost:"99 \u20BD"},Uo=[{id:"design",name:"\u0414\u0438\u0437\u0430\u0439\u043D",ic:"\u{1F3A8}",hue:280},{id:"video",name:"\u041C\u043E\u043D\u0442\u0430\u0436",ic:"\u{1F3AC}",hue:340},{id:"code",name:"\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",ic:"\u{1F4BB}",hue:200},{id:"motion",name:"Motion / 3D",ic:"\u{1F9CA}",hue:160},{id:"text",name:"\u0422\u0435\u043A\u0441\u0442\u044B",ic:"\u270D\uFE0F",hue:40},{id:"smm",name:"SMM",ic:"\u{1F4C8}",hue:15},{id:"music",name:"\u041C\u0443\u0437\u044B\u043A\u0430 \u0438 \u0437\u0432\u0443\u043A",ic:"\u{1F3A7}",hue:250}],No=r=>Uo.find(t=>t.id===r)||Uo[0];function D_(r,t,e){let n=0;for(let l of String(r))n=n*31+l.charCodeAt(0)>>>0;let i=()=>(n=n*1664525+1013904223>>>0)/4294967296,s=(t+40+i()*60)%360,o=Array.from({length:5},()=>{let l=(i()*400).toFixed(0),c=(i()*260).toFixed(0),h=(30+i()*90).toFixed(0);return`<circle cx="${l}" cy="${c}" r="${h}" fill="hsl(${t+i()*80|0} 90% ${55+i()*15}%)" opacity="${(.25+i()*.45).toFixed(2)}"/>`}).join(""),a=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl(${t} 80% 22%)"/><stop offset="1" stop-color="hsl(${s} 85% 45%)"/></linearGradient><filter id="b"><feGaussianBlur stdDeviation="22"/></filter></defs><rect width="400" height="260" fill="url(#g)"/><g filter="url(#b)">${o}</g><g fill="none" stroke="#fff" stroke-opacity=".14"><path d="M0 200 Q100 150 200 190 T400 170"/><path d="M0 225 Q120 175 220 215 T400 195"/></g><text x="200" y="150" font-size="84" text-anchor="middle">${e}</text></svg>`;return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(a)}var pT=36e5,mT=Date.now(),L_=[{id:"s1",type:"order",cat:"video",title:"\u0421\u043C\u043E\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C 3 \u0440\u043E\u043B\u0438\u043A\u0430 \u0434\u043B\u044F TikTok",price:1500,deadline:"3 \u0434\u043D\u044F",author:"\u0414\u0438\u043C\u0430",desc:"\u0415\u0441\u0442\u044C \u0441\u044B\u0440\u044B\u0435 \u0432\u0438\u0434\u0435\u043E \u0441 \u043E\u0431\u0437\u043E\u0440\u043E\u043C \u043A\u0440\u043E\u0441\u0441\u043E\u0432\u043E\u043A. \u041D\u0443\u0436\u043D\u043E \u043D\u0430\u0440\u0435\u0437\u0430\u0442\u044C \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u043D\u043E, \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0441\u0443\u0431\u0442\u0438\u0442\u0440\u044B \u0438 \u0442\u0440\u0435\u043D\u0434\u043E\u0432\u044B\u0435 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u044B. \u0414\u043B\u0438\u043D\u0430 \u2014 \u0434\u043E 40 \u0441\u0435\u043A\u0443\u043D\u0434 \u043A\u0430\u0436\u0434\u044B\u0439.",ago:2,resp:4},{id:"s2",type:"service",cat:"design",title:"\u0421\u0434\u0435\u043B\u0430\u044E \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0443 \u0438 \u0448\u0430\u043F\u043A\u0443 \u0434\u043B\u044F \u043A\u0430\u043D\u0430\u043B\u0430",price:700,deadline:"1 \u0434\u0435\u043D\u044C",author:"\u0410\u043B\u0438\u043D\u0430",desc:"\u0420\u0438\u0441\u0443\u044E \u0430\u0432\u0430\u0442\u0430\u0440\u043A\u0438 \u0432 \u0441\u0442\u0438\u043B\u0435 \u0430\u043D\u0438\u043C\u0435 \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C, \u0434\u0435\u043B\u0430\u044E \u043E\u0431\u043B\u043E\u0436\u043A\u0438 \u0434\u043B\u044F YouTube \u0438 Telegram. \u0414\u0432\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E.",ago:5,resp:9},{id:"s3",type:"order",cat:"code",title:"Telegram-\u0431\u043E\u0442 \u0434\u043B\u044F \u0437\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u0442\u0440\u0435\u043D\u0438\u0440\u043E\u0432\u043A\u0438",price:4e3,deadline:"\u041D\u0435\u0434\u0435\u043B\u044F",author:"\u041C\u0430\u0440\u0430\u0442",desc:"\u041D\u0443\u0436\u0435\u043D \u0431\u043E\u0442: \u0432\u044B\u0431\u043E\u0440 \u0432\u0440\u0435\u043C\u0435\u043D\u0438, \u0437\u0430\u043F\u0438\u0441\u044C, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u0437\u0430 \u0447\u0430\u0441. Python \u0438\u043B\u0438 Node \u2014 \u0431\u0435\u0437 \u0440\u0430\u0437\u043D\u0438\u0446\u044B. \u0425\u043E\u0441\u0442\u0438\u043D\u0433 \u043F\u043E\u043C\u043E\u0433\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u0442\u044C.",ago:8,resp:3,team:!0},{id:"s4",type:"service",cat:"motion",title:"3D-\u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0441 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0435\u0439 \u0434\u043B\u044F \u0438\u043D\u0442\u0440\u043E",price:2500,deadline:"3 \u0434\u043D\u044F",author:"\u0422\u0438\u043C\u0443\u0440",desc:"\u0421\u0434\u0435\u043B\u0430\u044E \u043E\u0431\u044A\u0451\u043C\u043D\u044B\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0432 Blender \u0438 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u044E \u043D\u0430 5 \u0441\u0435\u043A\u0443\u043D\u0434. \u041E\u0442\u0434\u0430\u043C \u0432 MP4 \u0438 \u0441 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C \u0444\u043E\u043D\u043E\u043C.",ago:12,resp:6},{id:"s5",type:"order",cat:"design",title:"\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u0434\u043B\u044F \u043A\u043E\u0444\u0435\u0439\u043D\u0438 \u0443 \u043A\u043E\u043B\u043B\u0435\u0434\u0436\u0430",price:2e3,deadline:"2 \u043D\u0435\u0434\u0435\u043B\u0438",author:"\u0421\u043E\u043D\u044F",desc:"\u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u043A\u043E\u0444\u0435\u0439\u043D\u044F, \u0445\u043E\u0442\u0438\u043C \u0441\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u0442\u043E\u0439 \u043B\u043E\u0433\u043E\u0442\u0438\u043F \u0438 \u0432\u0430\u0440\u0438\u0430\u043D\u0442 \u0434\u043B\u044F \u0441\u0442\u0430\u043A\u0430\u043D\u043E\u0432. \u041F\u0440\u0438\u0448\u043B\u044E \u0440\u0435\u0444\u0435\u0440\u0435\u043D\u0441\u044B.",ago:20,resp:11},{id:"s6",type:"service",cat:"text",title:"\u041D\u0430\u043F\u0438\u0448\u0443 \u043F\u043E\u0441\u0442\u044B \u0434\u043B\u044F Telegram-\u043A\u0430\u043D\u0430\u043B\u0430",price:300,deadline:"1 \u0434\u0435\u043D\u044C",author:"\u041B\u0435\u0440\u0430",desc:"\u041F\u0438\u0448\u0443 \u0436\u0438\u0432\u043E \u0438 \u0431\u0435\u0437 \u0432\u043E\u0434\u044B. \u0426\u0435\u043D\u0430 \u2014 \u0437\u0430 \u043E\u0434\u0438\u043D \u043F\u043E\u0441\u0442 \u0434\u043E 1500 \u0437\u043D\u0430\u043A\u043E\u0432. \u041C\u043E\u0433\u0443 \u043F\u0440\u0438\u0434\u0443\u043C\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442-\u043F\u043B\u0430\u043D \u043D\u0430 \u043C\u0435\u0441\u044F\u0446.",ago:26,resp:2},{id:"s7",type:"order",cat:"smm",title:"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C Instagram \u0434\u043B\u044F \u0431\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F\u0430",price:3500,deadline:"\u041D\u0435\u0434\u0435\u043B\u044F",author:"\u0420\u0443\u0441\u043B\u0430\u043D",desc:"\u041D\u0443\u0436\u043D\u044B \u0448\u0430\u0431\u043B\u043E\u043D\u044B \u0441\u0442\u043E\u0440\u0438\u0441, \u0445\u0430\u0439\u043B\u0430\u0439\u0442\u044B, 9 \u043F\u0435\u0440\u0432\u044B\u0445 \u043F\u043E\u0441\u0442\u043E\u0432. \u0424\u043E\u0442\u043E \u0435\u0441\u0442\u044C, \u043D\u0443\u0436\u043D\u043E \u043A\u0440\u0430\u0441\u0438\u0432\u043E \u0441\u043E\u0431\u0440\u0430\u0442\u044C \u0432 \u0435\u0434\u0438\u043D\u044B\u0439 \u0441\u0442\u0438\u043B\u044C.",ago:30,resp:5,team:!0},{id:"s8",type:"service",cat:"music",title:"\u0421\u0432\u0435\u0434\u0443 \u0442\u0440\u0435\u043A \u0438 \u0441\u0434\u0435\u043B\u0430\u044E \u043C\u0430\u0441\u0442\u0435\u0440\u0438\u043D\u0433",price:1200,deadline:"3 \u0434\u043D\u044F",author:"\u0415\u0433\u043E\u0440",desc:"\u0421\u0432\u043E\u0436\u0443 \u0431\u0438\u0442\u044B \u0438 \u0432\u043E\u043A\u0430\u043B, \u0447\u0438\u0449\u0443 \u0448\u0443\u043C\u044B, \u0434\u0435\u043B\u0430\u044E \u0433\u0440\u043E\u043C\u043A\u0438\u0439 \u043C\u0430\u0441\u0442\u0435\u0440 \u043F\u043E\u0434 \u0441\u0442\u0440\u0438\u043C\u0438\u043D\u0433\u0438. \u041F\u0440\u0438\u043C\u0435\u0440 \u0434\u043E/\u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u0438\u0448\u043B\u044E \u0432 \u043B\u0438\u0447\u043A\u0435.",ago:40,resp:7},{id:"s9",type:"order",cat:"code",title:"\u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u0434\u043B\u044F \u0448\u043A\u043E\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u0440\u0442\u0430\u043F\u0430",price:5e3,deadline:"2 \u043D\u0435\u0434\u0435\u043B\u0438",author:"\u041A\u0430\u043C\u0438\u043B\u0430",desc:"\u041E\u0434\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u0438\u0447\u043D\u044B\u0439 \u0441\u0430\u0439\u0442 \u0441 \u0444\u043E\u0440\u043C\u043E\u0439 \u0437\u0430\u044F\u0432\u043A\u0438 \u0438 \u043A\u0440\u0430\u0441\u0438\u0432\u043E\u0439 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u0435\u0439. \u0415\u0441\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u044B \u0438 \u043B\u043E\u0433\u043E\u0442\u0438\u043F, \u043D\u0443\u0436\u0435\u043D \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u0432\u0451\u0440\u0441\u0442\u043A\u0430.",ago:52,resp:8,team:!0}].map(r=>({...r,created:mT-r.ago*pT,images:[],seed:!0}));var gT="hustle",Uf="lots",Df;function _T(){return Df||(Df=new Promise((r,t)=>{let e=indexedDB.open(gT,1);e.onupgradeneeded=()=>e.result.createObjectStore(Uf,{keyPath:"id"}),e.onsuccess=()=>r(e.result),e.onerror=()=>t(e.error)})),Df}function Lf(r,t){return _T().then(e=>new Promise((n,i)=>{let s=e.transaction(Uf,r),o=t(s.objectStore(Uf));s.oncomplete=()=>n(o&&"result"in o?o.result:void 0),s.onerror=()=>i(s.error),s.onabort=()=>i(s.error)}))}var Zh={all:()=>Lf("readonly",r=>r.getAll()).catch(()=>[]),put:r=>Lf("readwrite",t=>t.put(r)),del:r=>Lf("readwrite",t=>t.delete(r))},hl={get(r,t){try{let e=localStorage.getItem(r);return e==null?t:JSON.parse(e)}catch{return t}},set(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}};function U_(r,t=1400,e=.85){return new Promise((n,i)=>{if(r.type==="image/gif"&&r.size<25e5){let a=new FileReader;a.onload=()=>n(a.result),a.onerror=i,a.readAsDataURL(r);return}let s=URL.createObjectURL(r),o=new Image;o.onload=()=>{let a=Math.min(1,t/Math.max(o.width,o.height)),l=document.createElement("canvas");l.width=Math.round(o.width*a),l.height=Math.round(o.height*a),l.getContext("2d").drawImage(o,0,0,l.width,l.height),URL.revokeObjectURL(s);let c=l.toDataURL("image/webp",e);n(c.startsWith("data:image/webp")?c:l.toDataURL("image/jpeg",e))},o.onerror=()=>{URL.revokeObjectURL(s),i(new Error("bad image"))},o.src=s})}var Jh=6,We={type:"all",cat:"all",q:"",sort:"new",mine:[]},F_="hustle-responses",Ff=()=>hl.get(F_,{}),O_=()=>[...We.mine,...L_],Qh=r=>(r.resp||0)+(Ff()[r.id]?.length||0),B_=r=>r.images?.[0]||D_(r.id,No(r.cat).hue,No(r.cat).ic);function xT(){let r=We.q.trim().toLowerCase(),t=O_().filter(n=>!(We.type==="mine"&&n.seed||(We.type==="order"||We.type==="service")&&n.type!==We.type||We.cat!=="all"&&n.cat!==We.cat||r&&!(n.title+" "+n.desc+" "+No(n.cat).name).toLowerCase().includes(r))),e={new:(n,i)=>i.created-n.created,cheap:(n,i)=>n.price-i.price,expensive:(n,i)=>i.price-n.price,popular:(n,i)=>Qh(i)-Qh(n)}[We.sort];return t.sort(e)}function vT(r){let t=No(r.cat);return`<article class="lot" data-id="${pn(r.id)}" tabindex="0" role="button" aria-label="${pn(r.title)}, ${ll(r.price)}" style="--h:${t.hue}">
    <div class="lot__media">
      <img src="${B_(r)}" alt="" loading="lazy" decoding="async">
      <span class="lot__type lot__type--${r.type}">${r.type==="order"?"\u0417\u0430\u043A\u0430\u0437":"\u0423\u0441\u043B\u0443\u0433\u0430"}</span>
      ${r.images?.length>1?`<span class="lot__count">\u{1F5BC} ${r.images.length}</span>`:""}
      ${r.seed?"":'<span class="lot__mine">\u041C\u043E\u0439</span>'}
    </div>
    <div class="lot__body">
      <p class="lot__cat">${t.ic} ${pn(t.name)}${r.team?" \xB7 <b>\u043A\u043E\u043C\u0430\u043D\u0434\u0430</b>":""}</p>
      <h3 class="lot__title">${pn(r.title)}</h3>
      <div class="lot__meta">
        <span class="ava" style="--h:${r.author.charCodeAt(0)*7%360}">${pn(r.author[0]||"?")}</span>
        <span>${pn(r.author)}</span><span class="dot">\xB7</span><span>${Pf(r.created)}</span>
      </div>
      <div class="lot__foot">
        <b class="lot__price">${ll(r.price)}</b>
        <span class="lot__resp">${Qh(r)} \u043E\u0442\u043A\u043B. \xB7 ${pn(r.deadline)}</span>
      </div>
    </div>
    <span class="lot__shine" aria-hidden="true"></span>
  </article>`}function vr(r=!0){let t=Ot("#lotGrid"),e=xT();t.innerHTML=e.map(vT).join(""),Ot("#emptyState").hidden=e.length>0;let n=Ke(".lot",t);n.forEach(i=>$h(i,6)),r&&!rn&&n.length&&Zt.fromTo(n,{y:60,opacity:0,rotateX:-18,scale:.94},{y:0,opacity:1,rotateX:0,scale:1,duration:.8,ease:"expo.out",stagger:.05,clearProps:"transform,opacity"}),$t.refresh()}function ul(){let r=Ot("#typeTabs .tab.is-active"),t=Ot("#typeTabs .tabs__pill");r&&(t.style.width=r.offsetWidth+"px",t.style.transform=`translateX(${r.offsetLeft}px)`)}function yT(){Ot("#typeTabs").addEventListener("click",n=>{let i=n.target.closest(".tab");i&&(Ke("#typeTabs .tab").forEach(s=>{s.classList.toggle("is-active",s===i),s.setAttribute("aria-selected",s===i)}),We.type=i.dataset.type,ul(),vr())}),addEventListener("resize",ul),document.fonts?.ready.then(ul),ul();let r=Ot("#catFilter");r.innerHTML='<button class="chip is-active" data-cat="all">\u0412\u0441\u0435 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</button>'+Uo.map(n=>`<button class="chip" data-cat="${n.id}" style="--h:${n.hue}">${n.ic} ${n.name}</button>`).join(""),r.addEventListener("click",n=>{let i=n.target.closest(".chip");i&&(Ke(".chip",r).forEach(s=>s.classList.toggle("is-active",s===i)),We.cat=i.dataset.cat,vr())});let t=Ot("#heroChips");t.innerHTML=Uo.slice(0,5).map(n=>`<button type="button" class="chip chip--glass" data-cat="${n.id}">${n.ic} ${n.name}</button>`).join(""),t.addEventListener("click",n=>{let i=n.target.closest(".chip");i&&(Ot(`#catFilter .chip[data-cat="${i.dataset.cat}"]`).click(),Of())});let e;Ot("#marketSearch").addEventListener("input",n=>{clearTimeout(e),e=setTimeout(()=>{We.q=n.target.value,vr()},180)}),Ot("#sortSelect").addEventListener("change",n=>{We.sort=n.target.value,vr()}),Ot("#heroSearch").addEventListener("submit",n=>{n.preventDefault();let i=new FormData(n.target).get("q")||"";Ot("#marketSearch").value=i,We.q=i,vr(!1),Of()})}function Of(){let r=Ot("#market");window.__lenis?window.__lenis.scrollTo(r,{offset:-70,duration:1.4}):r.scrollIntoView({behavior:rn?"auto":"smooth"})}function N_(r){let t=O_().find(a=>a.id===r);if(!t)return;let e=No(t.cat),n=t.images?.length?t.images:[B_(t)],i=Ff()[t.id]||[],s=Ot("#lotPanel");s.innerHTML=`
    <button class="modal__x" type="button" data-close aria-label="\u0417\u0430\u043A\u0440\u044B\u0442\u044C">\u2715</button>
    <div class="gallery">
      <div class="gallery__main"><img id="galMain" src="${n[0]}" alt="${pn(t.title)}"></div>
      ${n.length>1?`<div class="gallery__thumbs">${n.map((a,l)=>`<button type="button" class="${l?"":"is-on"}" data-i="${l}"><img src="${a}" alt="\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ${l+1}"></button>`).join("")}</div>`:""}
    </div>
    <div class="lotv">
      <p class="lot__cat">${e.ic} ${pn(e.name)} \xB7 ${t.type==="order"?"\u0417\u0430\u043A\u0430\u0437":"\u0423\u0441\u043B\u0443\u0433\u0430"}${t.team?" \xB7 <b>\u0438\u0449\u0443\u0442 \u043A\u043E\u043C\u0430\u043D\u0434\u0443</b>":""}</p>
      <h2 class="modal__title" id="lotTitle">${pn(t.title)}</h2>
      <div class="lotv__stats">
        <div><small>\u0426\u0435\u043D\u0430</small><b>${ll(t.price)}</b></div>
        <div><small>\u0421\u0440\u043E\u043A</small><b>${pn(t.deadline)}</b></div>
        <div><small>\u041E\u0442\u043A\u043B\u0438\u043A\u0438</small><b id="lotResp">${Qh(t)}</b></div>
      </div>
      <p class="lotv__desc">${pn(t.desc).replace(/\n/g,"<br>")}</p>
      <div class="lot__meta"><span class="ava" style="--h:${t.author.charCodeAt(0)*7%360}">${pn(t.author[0]||"?")}</span><span>${pn(t.author)}</span><span class="dot">\xB7</span><span>${Pf(t.created)}</span></div>
      ${i.length?`<div class="resps"><p class="mono">\u041E\u0442\u043A\u043B\u0438\u043A\u0438 \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430</p>${i.map(a=>`<div class="resp"><b>${pn(a.name)}</b>${a.price?` \xB7 ${ll(a.price)}`:""}<p>${pn(a.msg)}</p></div>`).join("")}</div>`:""}
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
    </div>`,If(Ot("#lotModal"));let o=Ot("#galMain",s);Ke(".gallery__thumbs button",s).forEach(a=>a.addEventListener("click",()=>{if(Ke(".gallery__thumbs button",s).forEach(l=>l.classList.toggle("is-on",l===a)),rn){o.src=n[a.dataset.i];return}Zt.to(o,{opacity:0,scale:1.04,duration:.18,onComplete:()=>{o.src=n[a.dataset.i],Zt.to(o,{opacity:1,scale:1,duration:.35})}})})),Ot("#respondForm",s).addEventListener("submit",a=>{var u;a.preventDefault();let l=a.target;if(!l.reportValidity())return;let c=Object.fromEntries(new FormData(l)),h=Ff();(h[u=t.id]||(h[u]=[])).push({name:c.name.trim(),msg:c.msg.trim(),price:c.price?+c.price:0,at:Date.now()}),hl.set(F_,h),_r("\u041E\u0442\u043A\u043B\u0438\u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D \u{1F680}"),Lo(Ot("#lotModal")),vr(!1)}),Ot("#delLot",s)?.addEventListener("click",async()=>{confirm("\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043B\u043E\u0442 \u0431\u0435\u0437 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F?")&&(await Zh.del(t.id),We.mine=We.mine.filter(a=>a.id!==t.id),Lo(Ot("#lotModal")),_r("\u041B\u043E\u0442 \u0443\u0434\u0430\u043B\u0451\u043D"),vr())})}function MT(){let r=Ot("#lotGrid");r.addEventListener("click",t=>{let e=t.target.closest(".lot");e&&N_(e.dataset.id)}),r.addEventListener("keydown",t=>{(t.key==="Enter"||t.key===" ")&&t.target.classList.contains("lot")&&(t.preventDefault(),N_(t.target.dataset.id))})}var yr=[];function Kh(){let r=Ot("#thumbs");r.innerHTML=yr.map((t,e)=>`<div class="thumb" draggable="false"><img src="${t}" alt="\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 ${e+1}">${e===0?"<span>\u043E\u0431\u043B\u043E\u0436\u043A\u0430</span>":""}<button type="button" data-rm="${e}" aria-label="\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435">\u2715</button>${e?`<button type="button" class="thumb__cover" data-cover="${e}" aria-label="\u0421\u0434\u0435\u043B\u0430\u0442\u044C \u043E\u0431\u043B\u043E\u0436\u043A\u043E\u0439">\u2605</button>`:""}</div>`).join(""),Ot("#drop").classList.toggle("is-full",yr.length>=Jh),rn||Zt.from(Ke(".thumb",r).slice(-1),{scale:.6,opacity:0,duration:.5,ease:"back.out(2)"})}async function Nf(r){let t=[...r].filter(n=>n.type.startsWith("image/"));if(!t.length)return _r("\u041C\u043E\u0436\u043D\u043E \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");let e=Jh-yr.length;if(e<=0)return _r(`\u041D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 ${Jh} \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439`);t.length>e&&_r(`\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E ${e} \u0438\u0437 ${t.length} \u2014 \u043B\u0438\u043C\u0438\u0442 ${Jh}`);for(let n of t.slice(0,e))try{yr.push(await U_(n)),Kh()}catch{_r(`\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u0440\u043E\u0447\u0438\u0442\u0430\u0442\u044C \xAB${n.name}\xBB`)}}function ST(){let r=Ot("#createModal"),t=Ot("#createForm"),e=Ot("#drop"),n=Ot("#fileInput");Ot("#catSelect").innerHTML=Uo.map(s=>`<option value="${s.id}">${s.ic} ${s.name}</option>`).join(""),document.addEventListener("click",s=>{s.target.closest('[data-open="create"]')&&(s.preventDefault(),If(r));let a=s.target.closest("[data-toast]");a&&_r(a.dataset.toast)}),n.addEventListener("change",()=>{Nf(n.files),n.value=""}),["dragenter","dragover"].forEach(s=>e.addEventListener(s,o=>{o.preventDefault(),e.classList.add("is-over")})),["dragleave","drop"].forEach(s=>e.addEventListener(s,o=>{o.preventDefault(),e.classList.remove("is-over")})),e.addEventListener("drop",s=>Nf(s.dataTransfer.files)),t.addEventListener("paste",s=>{let o=[...s.clipboardData?.files||[]];o.length&&Nf(o)}),Ot("#thumbs").addEventListener("click",s=>{let o=s.target.closest("[data-rm]"),a=s.target.closest("[data-cover]");if(o&&(yr.splice(+o.dataset.rm,1),Kh()),a){let[l]=yr.splice(+a.dataset.cover,1);yr.unshift(l),Kh()}});let i=hl.get("hustle-name","");i&&(t.author.value=i),t.addEventListener("submit",async s=>{s.preventDefault();let o=Ot("#createError");if(o.textContent="",!t.checkValidity()){let c=t.querySelector(":invalid");o.textContent=c.name==="price"?"\u0423\u043A\u0430\u0436\u0438 \u0446\u0435\u043D\u0443 \u043E\u0442 100 \u20BD":"\u0417\u0430\u043F\u043E\u043B\u043D\u0438 \u0432\u0441\u0435 \u043F\u043E\u043B\u044F",c.focus(),rn||Zt.fromTo(t,{x:-8},{x:0,duration:.5,ease:"elastic.out(1, 0.3)"});return}let a=Object.fromEntries(new FormData(t)),l={id:"u"+Date.now().toString(36)+Math.random().toString(36).slice(2,6),type:a.type,cat:a.cat,title:a.title.trim(),price:Math.round(+a.price),deadline:a.deadline,author:a.author.trim(),desc:a.desc.trim(),team:!!a.team,images:yr.slice(),created:Date.now(),resp:0};try{await Zh.put(l)}catch{o.textContent="\u041D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u043C\u0435\u0441\u0442\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u2014 \u0443\u0431\u0435\u0440\u0438 \u0447\u0430\u0441\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043E\u043A";return}hl.set("hustle-name",l.author),We.mine.unshift(l),yr=[],Kh(),t.reset(),t.author.value=l.author,Lo(r),_r("\u041B\u043E\u0442 \u043E\u043F\u0443\u0431\u043B\u0438\u043A\u043E\u0432\u0430\u043D \u{1F389}"),We.type="all",We.cat="all",We.q="",Ot("#marketSearch").value="",Ke("#typeTabs .tab").forEach(c=>c.classList.toggle("is-active",c.dataset.type==="all")),Ke("#catFilter .chip").forEach(c=>c.classList.toggle("is-active",c.dataset.cat==="all")),Ot("#sortSelect").value=We.sort="new",ul(),vr(),Of(),setTimeout(()=>{Ot(`.lot[data-id="${l.id}"]`)?.classList.add("is-new")},900)})}async function z_(){yT(),MT(),ST(),We.mine=(await Zh.all()).sort((r,t)=>t.created-r.created),vr(!1),rn||(Zt.set("#lotGrid .lot",{opacity:0}),$t.create({trigger:"#lotGrid",start:"top 85%",once:!0,onEnter:()=>Zt.fromTo("#lotGrid .lot",{y:80,opacity:0,rotateX:-25},{y:0,opacity:1,rotateX:0,duration:1,stagger:.07,ease:"expo.out",clearProps:"transform,opacity"})}))}Zt.registerPlugin($t);var $n=document.documentElement,qi=null;rn||(qi=new Bm({lerp:.1,smoothWheel:!0}),window.__lenis=qi,qi.on("scroll",$t.update),Zt.ticker.add(r=>qi.raf(r*1e3)),Zt.ticker.lagSmoothing(0),cl.onOpen=()=>qi.stop(),cl.onClose=()=>qi.start());document.addEventListener("click",r=>{r.target.closest("[data-open]")&&k_();let t=r.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href"),n=e==="#top"?document.body:Ot(e);n&&(r.preventDefault(),k_(),qi?qi.scrollTo(e==="#top"?0:n,{offset:-70,duration:1.4}):n.scrollIntoView({behavior:rn?"auto":"smooth"}))});var bT=P_(Ot("#scene"));function W_(r,t){let e=()=>{$n.setAttribute("data-theme",r);try{localStorage.setItem("hustle-theme",r)}catch{}Ot("meta[name=theme-color]").content=r==="light"?"#f4f2ee":"#08080c",bT.setTheme(r)};if(t&&document.startViewTransition&&!rn){let n=Ot("#themeToggle").getBoundingClientRect(),i=n.left+n.width/2,s=n.top+n.height/2,o=Math.hypot(Math.max(i,innerWidth-i),Math.max(s,innerHeight-s));document.startViewTransition(e).ready.then(()=>{$n.animate({clipPath:[`circle(0 at ${i}px ${s}px)`,`circle(${o}px at ${i}px ${s}px)`]},{duration:700,easing:"cubic-bezier(.7,0,.2,1)",pseudoElement:"::view-transition-new(root)"})})}else e()}W_($n.getAttribute("data-theme")||"dark",!1);Ot("#themeToggle").addEventListener("click",()=>W_($n.getAttribute("data-theme")==="dark"?"light":"dark",!0));var Bf=Ot("#burger");function k_(){$n.classList.remove("menu-open"),Bf.setAttribute("aria-expanded","false")}Bf.addEventListener("click",()=>{let r=$n.classList.toggle("menu-open");Bf.setAttribute("aria-expanded",r)});var V_=0,H_=Ot("#header");function G_(r){H_.classList.toggle("is-scrolled",r>30),H_.classList.toggle("is-hidden",r>400&&r>V_&&!$n.classList.contains("menu-open")),V_=r}qi?qi.on("scroll",r=>G_(r.scroll)):addEventListener("scroll",()=>G_(scrollY),{passive:!0});Ke("[data-price]").forEach(r=>{r.textContent=I_[r.dataset.price]});Ot("#year").textContent=new Date().getFullYear();function TT(r){let t=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(s=>{if(!s)return;if(/^\s+$/.test(s)){i.append(" ");return}let o=document.createElement("span");o.className="sw",[...s].forEach(a=>{let l=document.createElement("span");l.className="sc",l.textContent=a,o.append(l)}),i.append(o)}),n.replaceWith(i)}else n.nodeType===1&&n.tagName!=="BR"&&t(n)})};return t(r),Ke(".sc",r)}if(Rf&&!rn){$n.classList.add("has-cursor");let r=Ot(".cursor__dot"),t=Ot(".cursor__ring"),e=Zt.quickTo(r,"x",{duration:.1}),n=Zt.quickTo(r,"y",{duration:.1}),i=Zt.quickTo(t,"x",{duration:.45,ease:"power3"}),s=Zt.quickTo(t,"y",{duration:.45,ease:"power3"});addEventListener("pointermove",a=>{e(a.clientX),n(a.clientY),i(a.clientX),s(a.clientY)},{passive:!0}),document.addEventListener("pointerover",a=>{let l=a.target.closest("a, button, .lot, label.drop, summary, select, .chip");$n.classList.toggle("cursor-hot",!!l),$n.classList.toggle("cursor-text",!l&&!!a.target.closest("input, textarea"))}),document.addEventListener("pointerdown",()=>$n.classList.add("cursor-down")),document.addEventListener("pointerup",()=>$n.classList.remove("cursor-down")),Ke(".magnetic").forEach(a=>{let l=Zt.quickTo(a,"x",{duration:.6,ease:"elastic.out(1, 0.4)"}),c=Zt.quickTo(a,"y",{duration:.6,ease:"elastic.out(1, 0.4)"});a.addEventListener("pointermove",h=>{let u=a.getBoundingClientRect();l((h.clientX-u.left-u.width/2)*.35),c((h.clientY-u.top-u.height/2)*.35)}),a.addEventListener("pointerleave",()=>{l(0),c(0)})});let o=Ke(".float-card");addEventListener("pointermove",a=>{let l=a.clientX/innerWidth-.5,c=a.clientY/innerHeight-.5;o.forEach(h=>Zt.to(h,{x:l*60*h.dataset.depth,y:c*40*h.dataset.depth,rotateY:l*20,rotateX:-c*20,duration:1,overwrite:"auto"}))},{passive:!0})}Ke(".tilt").forEach(r=>$h(r,7));function wT(){if(rn)return;Ke(".split").forEach(n=>{let i=TT(n);Zt.from(i,{yPercent:110,rotateX:-80,opacity:0,transformOrigin:"50% 100%",duration:1,ease:"expo.out",stagger:.018,scrollTrigger:{trigger:n,start:"top 85%"}})}),Ke(".reveal").forEach(n=>{Zt.from(n,{y:50,opacity:0,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 90%"}})});let r=Ot(".marquee__track"),t=Zt.to(r,{xPercent:-50,repeat:-1,duration:26,ease:"none"});$t.create({onUpdate:n=>{let i=n.getVelocity();Zt.to(t,{timeScale:1+Math.min(Math.abs(i)/300,6)*(i<0?-1:1),duration:.3,overwrite:!0}),Zt.to(".marquee",{skewY:Zt.utils.clamp(-4,4,i/-400),duration:.4,overwrite:!0})}}),$t.addEventListener("scrollEnd",()=>Zt.to(t,{timeScale:1,duration:.8}));let e=Zt.matchMedia();e.add("(min-width: 900px)",()=>{let n=Ot("#howTrack"),i=()=>n.scrollWidth-n.parentElement.clientWidth;Zt.to(n,{x:()=>-i(),ease:"none",scrollTrigger:{trigger:".how__wrap",start:"center center",end:()=>"+="+i(),pin:"#how",scrub:1,invalidateOnRefresh:!0,anticipatePin:1}})}),e.add("(max-width: 899px)",()=>{Ke(".step").forEach(n=>Zt.from(n,{y:60,opacity:0,rotateX:-20,duration:1,ease:"expo.out",scrollTrigger:{trigger:n,start:"top 88%"}}))}),Zt.from(".orbit",{scale:.5,rotate:-90,opacity:0,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".orbit",start:"top 80%"}}),Zt.from(".plan",{y:120,rotateY:n=>(n-1)*-25,rotateX:20,opacity:0,duration:1.3,ease:"expo.out",stagger:.12,scrollTrigger:{trigger:".plans",start:"top 80%"}}),Zt.fromTo(".footer__big",{yPercent:60,scale:.9},{yPercent:0,scale:1,ease:"none",scrollTrigger:{trigger:".footer",start:"top bottom",end:"bottom bottom",scrub:!0}}),Zt.to(".cta__orb",{rotate:180,ease:"none",scrollTrigger:{trigger:".cta",start:"top bottom",end:"bottom top",scrub:!0}}),Zt.to(".hero__inner",{yPercent:-18,opacity:.2,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:!0}})}function ET(){let r=Ot("#preloader");if(rn){r.remove(),$n.classList.add("is-ready");return}let t=Ot("#preloadNum"),e={v:0};Zt.timeline().from(".preloader__word span",{yPercent:120,rotateX:-90,opacity:0,stagger:.06,duration:.8,ease:"expo.out"}).to(e,{v:100,duration:1.1,ease:"power2.inOut",onUpdate:()=>{t.textContent=Math.round(e.v)}},0).to(".preloader__bar i",{scaleX:1,duration:1.1,ease:"power2.inOut"},0).to(".preloader__word span",{yPercent:-120,opacity:0,stagger:.04,duration:.5,ease:"power3.in"},"+=0.1").to(r,{clipPath:"inset(0 0 100% 0)",duration:.9,ease:"expo.inOut"},"-=0.2").add(()=>{r.remove(),$n.classList.add("is-ready")}).from(".hero__title .word",{yPercent:120,rotateX:-70,opacity:0,duration:1.2,ease:"expo.out",stagger:.07},"-=0.5").from(".hero__eyebrow, .hero__lead, .search, .hero__chips .chip, .hero__cta > *",{y:30,opacity:0,duration:.9,ease:"expo.out",stagger:.05,clearProps:"transform,opacity"},"-=0.9").from(".float-card",{scale:.5,opacity:0,duration:1,ease:"back.out(1.8)",stagger:.12},"-=0.8").from(".header",{yPercent:-100,opacity:0,duration:.8,ease:"expo.out",clearProps:"transform,opacity"},"-=1")}z_().then(()=>$t.refresh());wT();ET();addEventListener("load",()=>$t.refresh());})();
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
