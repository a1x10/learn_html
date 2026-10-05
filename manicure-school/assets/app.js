(()=>{var Iy=Object.defineProperty;var Dy=(s,t,e)=>t in s?Iy(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Vt=(s,t,e)=>Dy(s,typeof t!="symbol"?t+"":t,e);function ws(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function wm(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wo={duration:.5,overwrite:!1,delay:0},Dd,wn,ke,Fi=1e8,Ie=1/Fi,Md=Math.PI*2,Ly=Md/4,Ny=0,Em=Math.sqrt,Uy=Math.cos,Fy=Math.sin,un=function(t){return typeof t=="string"},Ke=function(t){return typeof t=="function"},Ts=function(t){return typeof t=="number"},gc=function(t){return typeof t>"u"},as=function(t){return typeof t=="object"},ii=function(t){return t!==!1},Ld=function(){return typeof window<"u"},ac=function(t){return Ke(t)||un(t)},Tm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Cn=Array.isArray,Sd=/(?:-?\.?\d|\.)+/gi,Nd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ud=/[+-]=-?[.\d]+/,Am=/[^,'"\[\]\s]+/gi,Oy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ge,rs,bd,Fd,gi={},uc={},Rm,Cm=function(t){return(uc=Eo(t,gi))&&Pn},_c=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Da=function(t,e){return!e&&console.warn(t)},Pm=function(t,e){return t&&(gi[t]=e)&&uc&&(uc[t]=e)||gi},La=function(){return 0},By={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},ky={suppressEvents:!0},Od={},ir=[],wd={},Im,ei={},md={},_m=30,cc=[],Bd="",kd=function(t){var e=t[0],n,i;if(as(e)||Ke(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=cc.length;i--&&!cc[i].targetTest(e););n=cc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Gd(t[i],n)))||t.splice(i,1);return t},sr=function(t){return t._gsap||kd(Oi(t))[0]._gsap},zd=function(t,e,n){return(n=t[e])&&Ke(n)?t[e]():gc(n)&&t.getAttribute&&t.getAttribute(e)||n},Vn=function(t,e){return(t=t.split(",")).forEach(e)||t},Qe=function(t){return Math.round(t*1e5)/1e5||0},on=function(t){return Math.round(t*1e7)/1e7||0},Or=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},zy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},dc=function(){var t=ir.length,e=ir.slice(0),n,i;for(wd={},ir.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Hd=function(t){return!!(t._initted||t._startAt||t.add)},Dm=function(t,e,n,i){ir.length&&!wn&&dc(),t.render(e,n,i||!!(wn&&e<0&&Hd(t))),ir.length&&!wn&&dc()},Lm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Am).length<2?e:un(t)?t.trim():t},Nm=function(t){return t},_i=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Hy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Eo=function(t,e){for(var n in e)t[n]=e[n];return t},xm=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=as(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},fc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ca=function(t){var e=t.parent||Ge,n=t.keyframes?Hy(Cn(t.keyframes)):_i;if(ii(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Vy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Um=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},xc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Lr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Gy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ed=function(t,e,n,i){return t._startAt&&(wn?t._startAt.revert(lc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Wy=function s(t){return!t||t._ts&&s(t.parent)},ym=function(t){return t._repeat?To(t._tTime,t=t.duration()+t._rDelay)*t:0},To=function(t,e){var n=Math.floor(t=on(t/e));return t&&n===t?n-1:n},pc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},yc=function(t){return t._end=on(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ie)||0))},vc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=on(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),yc(t),n._dirty||Lr(n,t)),t},Fm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=pc(t.rawTime(),e),(!e._dur||Fa(0,e.totalDuration(),n)-e._tTime>Ie)&&e.render(n,!0)),Lr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ie}},os=function(t,e,n,i){return e.parent&&rr(e),e._start=on((Ts(n)?n:n||t!==Ge?Ui(t,n,e):t._time)+e._delay),e._end=on(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Um(t,e,"_first","_last",t._sort?"_start":0),Td(e)||(t._recent=e),i||Fm(t,e),t._ts<0&&vc(t,t._tTime),t},Om=function(t,e){return(gi.ScrollTrigger||_c("scrollTrigger",e))&&gi.ScrollTrigger.create(e,t)},Bm=function(t,e,n,i,r){if(qd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!wn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Im!==ni.frame)return ir.push(t),t._lazy=[r,i],1},Xy=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Td=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qy=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Xy(t)&&!(!t._initted&&Td(t))||(t._ts<0||t._dp._ts<0)&&!Td(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Fa(0,t._tDur,e),h=To(l,a),t._yoyo&&h&1&&(o=1-o),h!==To(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||wn||i||t._zTime===Ie||!e&&t._zTime){if(!t._initted&&Bm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ie:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Ed(t,e,n,!0),t._onUpdate&&!n&&mi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&mi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rr(t,1),!n&&!wn&&(mi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Yy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ao=function(t,e,n,i){var r=t._repeat,o=on(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:on(o*(r+1)+t._rDelay*r):o,a>0&&!i&&vc(t,t._tTime=t._tDur*a),t.parent&&yc(t),n||Lr(t.parent,t),t},vm=function(t){return t instanceof bn?Lr(t):Ao(t,t._dur)},Zy={_start:0,endTime:La,totalDuration:La},Ui=function s(t,e,n){var i=t.labels,r=t._recent||Zy,o=t.duration()>=Fi?r.endTime(!1):t._dur,a,l,c;return un(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Cn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Pa=function(t,e,n){var i=Ts(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;o.immediateRender=ii(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new sn(e[0],o,e[r+1])},or=function(t,e){return t||t===0?e(t):e},Fa=function(t,e,n){return n<t?t:n>e?e:n},En=function(t,e){return!un(t)||!(e=Oy.exec(t))?"":e[1]},$y=function(t,e,n){return or(n,function(i){return Fa(t,e,i)})},Ad=[].slice,km=function(t,e){return t&&as(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&as(t[0]))&&!t.nodeType&&t!==rs},Jy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return un(i)&&!e||km(i,1)?(r=n).push.apply(r,Oi(i)):n.push(i)})||n},Oi=function(t,e,n){return ke&&!e&&ke.selector?ke.selector(t):un(t)&&!n&&(bd||!Ro())?Ad.call((e||Fd).querySelectorAll(t),0):Cn(t)?Jy(t,n):km(t)?Ad.call(t,0):t?[t]:[]},Rd=function(t){return t=Oi(t)[0]||Da("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Oi(e,n.querySelectorAll?n:n===t?Da("Invalid scope")||Fd.createElement("div"):t)}},zm=function(t){return t.sort(function(){return .5-Math.random()})},Hm=function(t){if(Ke(t))return t;var e=as(t)?t:{each:t},n=Nr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return un(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(f,u,g){var _=(g||e).length,p=o[_],m,v,M,x,b,w,T,R,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,Fi])[1],!y){for(T=-Fi;T<(T=g[y++].getBoundingClientRect().left)&&y<_;);y<_&&y--}for(p=o[_]=[],m=l?Math.min(y,_)*h-.5:i%y,v=y===Fi?0:l?_*d/y-.5:i/y|0,T=0,R=Fi,w=0;w<_;w++)M=w%y-m,x=v-(w/y|0),p[w]=b=c?Math.abs(c==="y"?x:M):Em(M*M+x*x),b>T&&(T=b),b<R&&(R=b);i==="random"&&zm(p),p.max=T-R,p.min=R,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(y>_?_-1:c?c==="y"?_/y:y:Math.max(y,_/y))||0)*(i==="edges"?-1:1),p.b=_<0?r-_:r,p.u=En(e.amount||e.each)||0,n=n&&_<0?Jm(n):n}return _=(p[f]-p.min)/p.max||0,on(p.b+(n?n(_):_)*p.v)+p.u}},Cd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=on(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ts(n)?0:En(n))}},Vm=function(t,e){var n=Cn(t),i,r;return!n&&as(t)&&(i=n=t.radius||Fi,t.values?(t=Oi(t.values),(r=!Ts(t[0]))&&(i*=i)):t=Cd(t.increment)),or(e,n?Ke(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Fi,h=0,d=t.length,f,u;d--;)r?(f=t[d].x-a,u=t[d].y-l,f=f*f+u*u):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Ts(o)?h:h+En(o)}:Cd(t))},Gm=function(t,e,n,i){return or(Cn(t)?!e:n===!0?!!(n=0):!i,function(){return Cn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ky=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Qy=function(t,e){return function(n){return t(parseFloat(n))+(e||En(n))}},jy=function(t,e,n){return Xm(t,e,0,1,n)},Wm=function(t,e,n){return or(n,function(i){return t[~~e(i)]})},tv=function s(t,e,n){var i=e-t;return Cn(t)?Wm(t,s(0,t.length),e):or(n,function(r){return(i+(r-t)%i)%i+t})},ev=function s(t,e,n){var i=e-t,r=i*2;return Cn(t)?Wm(t,s(0,t.length-1),e):or(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Co=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Am:Sd),n+=t.substr(e,i-e)+Gm(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},Xm=function(t,e,n,i,r){var o=e-t,a=i-n;return or(r,function(l){return n+((l-t)/o*a||0)})},nv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(u){return(1-u)*t+u*e};if(!r){var o=un(t),a={},l,c,h,d,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Cn(t)&&!Cn(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(g){g*=d;var _=Math.min(f,~~g);return h[_](g-_)},n=e}else i||(t=Eo(Cn(t)?[]:{},t));if(!h){for(l in e)Wd.call(a,t,l,"get",e[l]);r=function(g){return $d(g,a)||(o?t.p:t)}}}return or(n,r)},Mm=function(t,e,n){var i=t.labels,r=Fi,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},mi=function(t,e,n){var i=t.vars,r=i[e],o=ke,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ir.length&&dc(),a&&(ke=a),h=l?r.apply(c,l):r.call(c),ke=o,h},Aa=function(t){return rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!wn),t.progress()<1&&mi(t,"onInterrupt"),t},bo,qm=[],Ym=function(t){if(t)if(t=!t.name&&t.default||t,Ld()||t.headless){var e=t.name,n=Ke(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:La,render:$d,add:Wd,kill:xv,modifier:_v,rawVars:0},o={targetTest:0,get:0,getSetter:Mc,aliases:{},register:0};if(Ro(),t!==i){if(ei[e])return;_i(i,_i(fc(t,r),o)),Eo(i.prototype,Eo(r,fc(t,o))),ei[i.prop=e]=i,t.targetTest&&(cc.push(i),Od[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Pm(e,i),t.register&&t.register(Pn,i,Gn)}else qm.push(t)},Pe=255,Ra={aqua:[0,Pe,Pe],lime:[0,Pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pe],navy:[0,0,128],white:[Pe,Pe,Pe],olive:[128,128,0],yellow:[Pe,Pe,0],orange:[Pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pe,0,0],pink:[Pe,192,203],cyan:[0,Pe,Pe],transparent:[Pe,Pe,Pe,0]},gd=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Pe+.5|0},Zm=function(t,e,n){var i=t?Ts(t)?[t>>16,t>>8&Pe,t&Pe]:0:Ra.black,r,o,a,l,c,h,d,f,u,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ra[t])i=Ra[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Pe,i&Pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Pe,t&Pe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Sd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=gd(l+1/3,r,o),i[1]=gd(l,r,o),i[2]=gd(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(Nd),n&&i.length<4&&(i[3]=1),i}else i=t.match(Sd)||Ra.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Pe,o=i[1]/Pe,a=i[2]/Pe,d=Math.max(r,o,a),f=Math.min(r,o,a),h=(d+f)/2,d===f?l=c=0:(u=d-f,c=h>.5?u/(2-d-f):u/(d+f),l=d===r?(o-a)/u+(o<a?6:0):d===o?(a-r)/u+2:(r-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},$m=function(t){var e=[],n=[],i=-1;return t.split(Es).forEach(function(r){var o=r.match(Fr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Sm=function(t,e,n){var i="",r=(t+i).match(Es),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(f){return(f=Zm(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=$m(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Es,"1").split(Fr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Es),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},Es=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ra)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),iv=/hsl[a]?\(/,Vd=function(t){var e=t.join(" "),n;if(Es.lastIndex=0,Es.test(e))return n=iv.test(e),t[1]=Sm(t[1],n),t[0]=Sm(t[0],n,$m(t[1])),!0},Na,ni=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,f,u,g=function _(p){var m=s()-i,v=p===!0,M,x,b,w;if((m>t||m<0)&&(n+=m-e),i+=m,b=i-n,M=b-o,(M>0||v)&&(w=++d.frame,f=b-d.time*1e3,d.time=b=b/1e3,o+=M+(M>=r?4:r-M),x=1),v||(l=c(_)),x)for(u=0;u<a.length;u++)a[u](b,f,w,p)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Rm&&(!bd&&Ld()&&(rs=bd=window,Fd=rs.document||{},gi.gsap=Pn,(rs.gsapVersions||(rs.gsapVersions=[])).push(Pn.version),Cm(uc||rs.GreenSockGlobals||!rs.gsap&&rs||{}),qm.forEach(Ym)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Na=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Na=0,c=La},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){r=1e3/(p||240),o=d.time*1e3+r},add:function(p,m,v){var M=m?function(x,b,w,T){p(x,b,w,T),d.remove(M)}:p;return d.remove(p),a[v?"unshift":"push"](M),Ro(),M},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&u>=m&&u--},_listeners:a},d})(),Ro=function(){return!Na&&ni.wake()},me={},sv=/^[\d.\-M][\d.\-,\s]/,rv=/["']/g,ov=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(rv,"").trim():+c,i=l.substr(a+1).trim();return e},av=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lv=function(t){var e=(t+"").split("("),n=me[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ov(e[1])]:av(t).split(",").map(Lm)):me._CE&&sv.test(t)?me._CE("",t):n},Jm=function(t){return function(e){return 1-t(1-e)}},Km=function s(t,e){for(var n=t._first,i;n;)n instanceof bn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Nr=function(t,e){return t&&(Ke(t)?t:me[t]||lv(t))||e},Br=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Vn(t,function(a){me[a]=gi[a]=r,me[o=a.toLowerCase()]=n;for(var l in r)me[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=me[a+"."+l]=r[l]}),r},Qm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},_d=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Md*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Fy((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Qm(a);return r=Md/r,l.config=function(c,h){return s(t,c,h)},l},xd=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Qm(n);return i.config=function(r){return s(t,r)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Br(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});me.Linear.easeNone=me.none=me.Linear.easeIn;Br("Elastic",_d("in"),_d("out"),_d());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Br("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Br("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Br("Circ",function(s){return-(Em(1-s*s)-1)});Br("Sine",function(s){return s===1?1:-Uy(s*Ly)+1});Br("Back",xd("in"),xd("out"),xd());me.SteppedEase=me.steps=gi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ie;return function(a){return((i*Fa(0,o,a)|0)+r)*n}}};wo.ease=me["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Bd+=s+","+s+"Params,"});var Gd=function(t,e){this.id=Ny++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zd,this.set=e?e.getSetter:Mc},Ua=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ao(this,+e.duration,1,1),this.data=e.data,ke&&(this._ctx=ke,ke.data.push(this)),Na||ni.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ao(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ro(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(vc(this,n),!r._dp||r.parent||Fm(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&os(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ie||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ym(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ym(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?To(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ie?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?pc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ie?0:this._rts,this.totalTime(Fa(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),yc(this),Gy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ie&&(this._tTime-=Ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&os(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?pc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=ky);var i=wn;return wn=n,Hd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),wn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vm(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vm(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ui(this,n),ii(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ii(i)),this._dur||(this._zTime=-Ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ie)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Ke(n)?n:Nm,a=function(){var c=i.then;i.then=null,Ke(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){Aa(this)},s})();_i(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ie,_prom:0,_ps:!1,_rts:1});var bn=(function(s){wm(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ii(n.sortChildren),Ge&&os(n.parent||Ge,ws(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Om(ws(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return Pa(0,arguments,this),this},e.from=function(i,r,o){return Pa(1,arguments,this),this},e.fromTo=function(i,r,o,a){return Pa(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Ca(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new sn(i,r,Ui(this,o),1),this},e.call=function(i,r,o){return os(this,sn.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new sn(i,o,Ui(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Ca(o).immediateRender=ii(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Ca(a).immediateRender=ii(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:on(i),d=this._zTime<0!=i<0&&(this._initted||!c),f,u,g,_,p,m,v,M,x,b,w,T;if(this!==Ge&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,x=this._start,M=this._ts,m=!M,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,o);if(f=on(h%p),h===l?(_=this._repeat,f=c):(b=on(h/p),_=~~b,_&&_===b&&(f=c,_--),f>c&&(f=c)),b=To(this._tTime,p),!a&&this._tTime&&b!==_&&this._tTime-b*p-this._dur<=0&&(b=_),w&&_&1&&(f=c-f,T=1),_!==b&&!this._lock){var R=w&&b&1,y=R===(w&&_&1);if(_<b&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(T?0:on(_*p)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&mi(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Km(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Yy(this,on(a),on(f)),v&&(h-=f-(f=v._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!r&&!b&&(mi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||f>=u._start)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(f-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(f-u._start)*u._ts,r,o),f!==this._time||!this._ts&&!m){v=0,g&&(h+=this._zTime=-Ie);break}}u=g}else{u=this._last;for(var S=i<0?i:f;u;){if(g=u._prev,(u._act||S<=u._end)&&u._ts&&v!==u){if(u.parent!==this)return this.render(i,r,o);if(u.render(u._ts>0?(S-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(S-u._start)*u._ts,r,o||wn&&Hd(u)),f!==this._time||!this._ts&&!m){v=0,g&&(h+=this._zTime=S?-Ie:Ie);break}}u=g}}if(v&&!r&&(this.pause(),v.render(f>=a?0:-Ie)._zTime=f>=a?1:-1,this._ts))return this._start=x,yc(this),this.render(i,r,o);this._onUpdate&&!r&&mi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&rr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(mi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ts(r)||(r=Ui(this,r,i)),!(i instanceof Ua)){if(Cn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(un(i))return this.addLabel(i,r);if(Ke(i))i=sn.delayedCall(0,i);else return this}return this!==i?os(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Fi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof sn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return un(i)?this.removeLabel(i):Ke(i)?this.killTweensOf(i):(i.parent===this&&xc(this,i),i===this._recent&&(this._recent=this._last),Lr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=on(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ui(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=sn.delayedCall(0,r||La,o);return a.data="isPause",this._hasPause=1,os(this,a,Ui(this,i))},e.removePause=function(i){var r=this._first;for(i=Ui(this,i);r;)r._start===i&&r.data==="isPause"&&rr(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)nr!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Oi(i),l=this._first,c=Ts(r),h;l;)l instanceof sn?zy(l._targets,a)&&(c?(!nr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Ui(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,u,g=sn.to(o,_i({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ie,onStart:function(){if(o.pause(),!u){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&Ao(g,p,0,1).render(g._time,!0,!0),u=1}h&&h.apply(g,d||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,_i({startAt:{time:Ui(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Mm(this,Ui(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Mm(this,Ui(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ie)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Lr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Lr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Fi,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,os(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ao(o,o===Ge&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Ge._ts&&(Dm(Ge,pc(i,Ge)),Im=ni.frame),ni.frame>=_m){_m+=si.autoSleep||120;var r=Ge._first;if((!r||!r._ts)&&si.autoSleep&&ni._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ni.sleep()}}},t})(Ua);_i(bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cv=function(t,e,n,i,r,o,a){var l=new Gn(this._pt,t,e,0,1,Zd,null,r),c=0,h=0,d,f,u,g,_,p,m,v;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Co(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),f=n.match(pd)||[];d=pd.exec(i);)g=d[0],_=i.substring(c,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==f[h++]&&(p=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:p,c:g.charAt(1)==="="?Or(p,g)-p:parseFloat(g)-p,m:u&&u<4?Math.round:0},c=pd.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Ud.test(i)||m)&&(l.e=0),this._pt=l,l},Wd=function(t,e,n,i,r,o,a,l,c,h){Ke(i)&&(i=i(r||0,t,o));var d=t[e],f=n!=="get"?n:Ke(d)?c?t[e.indexOf("set")||!Ke(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,u=Ke(d)?c?pv:e0:Yd,g;if(un(i)&&(~i.indexOf("random(")&&(i=Co(i)),i.charAt(1)==="="&&(g=Or(f,i)+(En(f)||0),(g||g===0)&&(i=g))),!h||f!==i||Pd)return!isNaN(f*i)&&i!==""?(g=new Gn(this._pt,t,e,+f||0,i-(f||0),typeof d=="boolean"?gv:n0,0,u),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!d&&!(e in t)&&_c(e,i),cv.call(this,t,e,f,i,u,l||si.stringFilter,c))},hv=function(t,e,n,i,r){if(Ke(t)&&(t=Ia(t,r,e,n,i)),!as(t)||t.style&&t.nodeType||Cn(t)||Tm(t))return un(t)?Ia(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ia(t[a],r,e,n,i);return o},Xd=function(t,e,n,i,r,o){var a,l,c,h;if(ei[t]&&(a=new ei[t]).init(r,a.rawVars?e[t]:hv(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Gn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==bo))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},nr,Pd,qd=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,f=i.keyframes,u=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,m=t.parent,v=m&&m.data==="nested"?m.vars.targets:p,M=t._overwrite==="auto"&&!Dd,x=t.timeline,b,w,T,R,y,S,P,L,O,z,H,V,X;if(x&&(!f||!r)&&(r="none"),t._ease=Nr(r,wo.ease),t._yEase=d?Jm(Nr(d===!0?r:d,wo.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!x&&!!i.runBackwards,!x||f&&!i.stagger){if(L=p[0]?sr(p[0]).harness:0,V=L&&i[L.prop],b=fc(i,Od),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!u?_.render(-1,!0):_.revert(h&&g?lc:By),_._lazy=0),o){if(rr(t._startAt=sn.set(p,_i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ii(l),startAt:null,delay:0,onUpdate:c&&function(){return mi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn||!a&&!u)&&t._startAt.revert(lc),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(a=!1),T=_i({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ii(l),immediateRender:a,stagger:0,parent:m},b),V&&(T[L.prop]=V),rr(t._startAt=sn.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(wn?t._startAt.revert(lc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ie,Ie);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ii(l)||l&&!g,w=0;w<p.length;w++){if(y=p[w],P=y._gsap||kd(p)[w]._gsap,t._ptLookup[w]=z={},wd[P.id]&&ir.length&&dc(),H=v===p?w:v.indexOf(y),L&&(O=new L).init(y,V||b,t,H,v)!==!1&&(t._pt=R=new Gn(t._pt,y,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(W){z[W]=R}),O.priority&&(S=1)),!L||V)for(T in b)ei[T]&&(O=Xd(T,b,t,H,y,v))?O.priority&&(S=1):z[T]=R=Wd.call(t,y,T,"get",b[T],H,v,0,i.stringFilter);t._op&&t._op[w]&&t.kill(y,t._op[w]),M&&t._pt&&(nr=t,Ge.killTweensOf(y,z,t.globalTime(e)),X=!t.parent,nr=0),t._pt&&l&&(wd[P.id]=1)}S&&Jd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,f&&e<=0&&x.render(Fi,!0,!0)},uv=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,u;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,u=t._targets.length;u--;){if(h=f[u][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Pd=1,t.vars[e]="+=0",qd(t,a),Pd=0,l?Da(e+" not eligible for reset"):1;c.push(h)}for(u=c.length;u--;)d=c[u],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Qe(n)+En(d.e)),d.b&&(d.b=h.s+En(d.b))},dv=function(t,e){var n=t[0]?sr(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Eo({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},fv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Cn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ia=function(t,e,n,i,r){return Ke(t)?t.call(e,n,i,r):un(t)&&~t.indexOf("random(")?Co(t):t},jm=Bd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",t0={};Vn(jm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return t0[s]=1});var sn=(function(s){wm(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Ca(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,v=i.parent||Ge,M=(Cn(n)||Tm(n)?Ts(n[0]):"length"in i)?[n]:Oi(n),x,b,w,T,R,y,S,P;if(a._targets=M.length?kd(M):Da("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||f||ac(c)||ac(h)){if(i=a.vars,x=a.timeline=new bn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:M}),x.kill(),x.parent=x._dp=ws(a),x._start=0,f||ac(c)||ac(h)){if(T=M.length,S=f&&Hm(f),as(f))for(R in f)~jm.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(b=0;b<T;b++)w=fc(i,t0),w.stagger=0,m&&(w.yoyoEase=m),P&&Eo(w,P),y=M[b],w.duration=+Ia(c,ws(a),b,y,M),w.delay=(+Ia(h,ws(a),b,y,M)||0)-a._delay,!f&&T===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),x.to(y,w,S?S(b,y,M):0),x._ease=me.none;x.duration()?c=h=0:a.timeline=0}else if(g){Ca(_i(x.vars.defaults,{ease:"none"})),x._ease=Nr(g.ease||i.ease||"none");var L=0,O,z,H;if(Cn(g))g.forEach(function(V){return x.to(M,V,">")}),x.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||fv(R,g[R],w,g.easeEach);for(R in w)for(O=w[R].sort(function(V,X){return V.t-X.t}),L=0,b=0;b<O.length;b++)z=O[b],H={ease:z.e,duration:(z.t-(b?O[b-1].t:0))/100*c},H[R]=z.v,x.to(M,H,L),L+=H.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return u===!0&&!Dd&&(nr=ws(a),Ge.killTweensOf(M),nr=0),os(v,ws(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!g&&a._start===on(v._time)&&ii(d)&&Wy(ws(a))&&v.data!=="nested")&&(a._tTime=-Ie,a.render(Math.max(0,-h)||0)),p&&Om(ws(a),p),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ie&&!h?l:i<Ie?0:i,f,u,g,_,p,m,v,M,x;if(!c)qy(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(f=on(d%_),d===l?(g=this._repeat,f=c):(p=on(d/_),g=~~p,g&&g===p?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(x=this._yEase,f=c-f),p=To(this._tTime,_),f===a&&!o&&this._initted&&g===p)return this._tTime=d,this;g!==p&&(M&&this._yEase&&Km(M,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(on(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Bm(this,h?i:f,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(f/c),this._from&&(this.ratio=v=1-v),!a&&d&&!r&&!p&&(mi(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(v,u.d),u=u._next;M&&M.render(i<0?i:M._dur*M._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Ed(this,i,r,o),mi(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&mi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Ed(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&rr(this,1),!r&&!(h&&!a)&&(d||a||m)&&(mi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Na||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||qd(this,c),h=this._ease(c/this._dur),uv(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(vc(this,0),this.parent||Um(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Aa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!wn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,nr&&nr.vars.overwrite!==!0)._first||Aa(this),this.parent&&o!==this.timeline.totalDuration()&&Ao(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Oi(i):a,c=this._ptLookup,h=this._pt,d,f,u,g,_,p,m;if((!r||r==="all")&&Vy(a,l))return r==="all"&&(this._pt=0),Aa(this);for(d=this._op=this._op||[],r!=="all"&&(un(r)&&(_={},Vn(r,function(v){return _[v]=1}),r=_),r=dv(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],r==="all"?(d[m]=r,g=f,u={}):(u=d[m]=d[m]||{},g=r);for(_ in g)p=f&&f[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&xc(this,p,"_pt"),delete f[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&h&&Aa(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Pa(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return Pa(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Ge.killTweensOf(i,r,o)},t})(Ua);_i(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(s){sn[s]=function(){var t=new bn,e=Ad.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Yd=function(t,e,n){return t[e]=n},e0=function(t,e,n){return t[e](n)},pv=function(t,e,n,i){return t[e](i.fp,n)},mv=function(t,e,n){return t.setAttribute(e,n)},Mc=function(t,e){return Ke(t[e])?e0:gc(t[e])&&t.setAttribute?mv:Yd},n0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Zd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},$d=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},_v=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},xv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?xc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},yv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Jd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Gn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||n0,this.d=l||this,this.set=c||Yd,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=yv,this.m=n,this.mt=r,this.tween=i},s})();Vn(Bd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Od[s]=1});gi.TweenMax=gi.TweenLite=sn;gi.TimelineLite=gi.TimelineMax=bn;Ge=new bn({sortChildren:!1,defaults:wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Vd;var Ur=[],hc={},vv=[],bm=0,Mv=0,yd=function(t){return(hc[t]||vv).map(function(e){return e()})},Id=function(){var t=Date.now(),e=[];t-bm>2&&(yd("matchMediaInit"),Ur.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=rs.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),yd("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),bm=t,yd("matchMedia"))},i0=(function(){function s(e,n){this.selector=n&&Rd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Mv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ke(n)&&(r=i,i=n,n=Ke);var o=this,a=function(){var c=ke,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Rd(r)),ke=o,d=i.apply(o,arguments),Ke(d)&&o._r.push(d),ke=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ke?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=ke;ke=null,n(this),ke=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof bn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Ur.length;o--;)Ur[o].id===this.id&&Ur.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),Sv=(function(){function s(e){this.contexts=[],this.scope=e,ke&&ke.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){as(n)||(n={matches:n});var o=new i0(0,r||this.scope),a=o.conditions={},l,c,h;ke&&!o.selector&&(o.selector=ke.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=rs.matchMedia(n[c]),l&&(Ur.indexOf(o)<0&&Ur.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Id):l.addEventListener("change",Id)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),mc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ym(i)})},timeline:function(t){return new bn(t)},getTweensOf:function(t,e){return Ge.getTweensOf(t,e)},getProperty:function(t,e,n,i){un(t)&&(t=Oi(t)[0]);var r=sr(t||{}).get,o=n?Nm:Lm;return n==="native"&&(n=""),t&&(e?o((ei[e]&&ei[e].get||r)(t,e,n,i)):function(a,l,c){return o((ei[a]&&ei[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Oi(t),t.length>1){var i=t.map(function(h){return Pn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=ei[e],a=sr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;bo._pt=0,d.init(t,n?h+n:h,bo,0,[t]),d.render(1,d),bo._pt&&$d(1,bo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Pn.to(t,_i((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Ge.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Nr(t.ease,wo.ease)),xm(wo,t||{})},config:function(t){return xm(si,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ei[a]&&!gi[a]&&Da(e+" effect requires "+a+" plugin.")}),md[e]=function(a,l,c){return n(Oi(a),_i(l||{},r),c)},o&&(bn.prototype[e]=function(a,l,c){return this.add(md[e](a,as(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){me[t]=Nr(e)},parseEase:function(t,e){return arguments.length?Nr(t,e):me},getById:function(t){return Ge.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new bn(t),i,r;for(n.smoothChildTiming=ii(t.smoothChildTiming),Ge.remove(n),n._dp=0,n._time=n._tTime=Ge._time,i=Ge._first;i;)r=i._next,(e||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&os(n,i,i._start-i._delay),i=r;return os(Ge,n,0),n},context:function(t,e){return t?new i0(t,e):ke},matchMedia:function(t){return new Sv(t)},matchMediaRefresh:function(){return Ur.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Id()},addEventListener:function(t,e){var n=hc[t]||(hc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=hc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tv,wrapYoyo:ev,distribute:Hm,random:Gm,snap:Vm,normalize:jy,getUnit:En,clamp:$y,splitColor:Zm,toArray:Oi,selector:Rd,mapRange:Xm,pipe:Ky,unitize:Qy,interpolate:nv,shuffle:zm},install:Cm,effects:md,ticker:ni,updateRoot:bn.updateRoot,plugins:ei,globalTimeline:Ge,core:{PropTween:Gn,globals:Pm,Tween:sn,Timeline:bn,Animation:Ua,getCache:sr,_removeLinkedListItem:xc,reverting:function(){return wn},context:function(t){return t&&ke&&(ke.data.push(t),t._ctx=ke),ke},suppressOverwrites:function(t){return Dd=t}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return mc[s]=sn[s]});ni.add(bn.updateRoot);bo=mc.to({},{duration:0});var bv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},wv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=bv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},vd=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(un(r)&&(l={},Vn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}wv(a,r)}}}},Pn=mc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)wn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},vd("roundProps",Cd),vd("modifiers"),vd("snap",Vm))||mc;sn.version=bn.version=Pn.version="3.13.0";Rm=1;Ld()&&Ro();var Ev=me.Power0,Tv=me.Power1,Av=me.Power2,Rv=me.Power3,Cv=me.Power4,Pv=me.Linear,Iv=me.Quad,Dv=me.Cubic,Lv=me.Quart,Nv=me.Quint,Uv=me.Strong,Fv=me.Elastic,Ov=me.Back,Bv=me.SteppedEase,kv=me.Bounce,zv=me.Sine,Hv=me.Expo,Vv=me.Circ;var s0,ar,Io,nf,Vr,Gv,r0,sf,Wv=function(){return typeof window<"u"},Rs={},Hr=180/Math.PI,Do=Math.PI/180,Po=Math.atan2,o0=1e8,rf=/([A-Z])/g,Xv=/(left|right|width|margin|padding|x)/i,qv=/[\s,\(]\S/,ls={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Yv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Zv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},$v=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},p0=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},m0=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Jv=function(t,e,n){return t.style[e]=n},Kv=function(t,e,n){return t.style.setProperty(e,n)},Qv=function(t,e,n){return t._gsap[e]=n},jv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},tM=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},eM=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},We="transform",ri=We+"Origin",nM=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Rs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ls[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=As(i,a)}):this.tfm[t]=o.x?o[t]:As(i,t),t===ri&&(this.tfm.zOrigin=o.zOrigin);else return ls.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(We)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ri,e,"")),t=We}(r||e)&&this.props.push(t,e,r[t])},g0=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},iM=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(rf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=sf(),(!r||!r.isStart)&&!n[We]&&(g0(n),i.zOrigin&&n[ri]&&(n[ri]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},_0=function(t,e){var n={target:t,props:[],revert:iM,save:nM};return t._gsap||Pn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},x0,jd=function(t,e){var n=ar.createElementNS?ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ar.createElement(t);return n&&n.style?n:ar.createElement(t)},Bi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(rf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Lo(e)||e,1)||""},a0="O,Moz,ms,Ms,Webkit".split(","),Lo=function(t,e,n){var i=e||Vr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(a0[o]+t in r););return o<0?null:(o===3?"ms":o>=0?a0[o]:"")+t},tf=function(){Wv()&&window.document&&(s0=window,ar=s0.document,Io=ar.documentElement,Vr=jd("div")||{style:{}},Gv=jd("div"),We=Lo(We),ri=We+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",x0=!!Lo("perspective"),sf=Pn.core.reverting,nf=1)},l0=function(t){var e=t.ownerSVGElement,n=jd("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Io.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Io.removeChild(n),r},c0=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},y0=function(t){var e,n;try{e=t.getBBox()}catch{e=l0(t),n=1}return e&&(e.width||e.height)||n||(e=l0(t)),e&&!e.width&&!e.x&&!e.y?{x:+c0(t,["x","cx","x1"])||0,y:+c0(t,["y","cy","y1"])||0,width:0,height:0}:e},v0=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&y0(t))},Gr=function(t,e){if(e){var n=t.style,i;e in Rs&&e!==ri&&(e=We),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(rf,"-$1").toLowerCase())):n.removeAttribute(e)}},lr=function(t,e,n,i,r,o){var a=new Gn(t._pt,e,n,0,1,o?m0:p0);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},h0={deg:1,rad:1,turn:1},sM={grid:1,flex:1},cr=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Vr.style,l=Xv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=i==="px",u=i==="%",g,_,p,m;if(i===o||!r||h0[i]||h0[o])return r;if(o!=="px"&&!f&&(r=s(t,e,n,"px")),m=t.getCTM&&v0(t),(u||o==="%")&&(Rs[e]||~e.indexOf("adius")))return g=m?t.getBBox()[l?"width":"height"]:t[h],Qe(u?r/g*d:r/100*g);if(a[l?"width":"height"]=d+(f?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===ar||!_.appendChild)&&(_=ar.body),p=_._gsap,p&&u&&p.width&&l&&p.time===ni.time&&!p.uncache)return Qe(r/p.width*d);if(u&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,g=t[h],v?t.style[e]=v:Gr(t,e)}else(u||o==="%")&&!sM[Bi(_,"display")]&&(a.position=Bi(t,"position")),_===t&&(a.position="static"),_.appendChild(Vr),g=Vr[h],_.removeChild(Vr),a.position="absolute";return l&&u&&(p=sr(_),p.time=ni.time,p.width=_[h]),Qe(f?g*r/d:g&&r?d/g*r:0)},As=function(t,e,n,i){var r;return nf||tf(),e in ls&&e!=="transform"&&(e=ls[e],~e.indexOf(",")&&(e=e.split(",")[0])),Rs[e]&&e!=="transform"?(r=ka(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:bc(Bi(t,ri))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Sc[e]&&Sc[e](t,e,n)||Bi(t,e)||zd(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?cr(t,e,r,n)+n:r},rM=function(t,e,n,i){if(!n||n==="none"){var r=Lo(e,t,1),o=r&&Bi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Bi(t,"borderTopColor"))}var a=new Gn(this._pt,t.style,e,0,1,Zd),l=0,c=0,h,d,f,u,g,_,p,m,v,M,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Bi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Bi(t,e)||i,_?t.style[e]=_:Gr(t,e)),h=[n,i],Vd(h),n=h[0],i=h[1],f=n.match(Fr)||[],b=i.match(Fr)||[],b.length){for(;d=Fr.exec(i);)p=d[0],v=i.substring(l,d.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),p!==(_=f[c++]||"")&&(u=parseFloat(_)||0,x=_.substr((u+"").length),p.charAt(1)==="="&&(p=Or(u,p)+x),m=parseFloat(p),M=p.substr((m+"").length),l=Fr.lastIndex-M.length,M||(M=M||si.units[e]||x,l===i.length&&(i+=M,a.e+=M)),x!==M&&(u=cr(t,e,_,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:u,c:m-u,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?m0:p0;return Ud.test(i)&&(a.e=0),this._pt=a,a},u0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=u0[n]||n,e[1]=u0[i]||i,e.join(" ")},aM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Rs[a]&&(l=1,a=a==="transformOrigin"?ri:We),Gr(n,a);l&&(Gr(n,We),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ka(n,1),o.uncache=1,g0(i)))}},Sc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Gn(t._pt,e,n,0,0,aM);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ba=[1,0,0,1,0,0],M0={},S0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},d0=function(t){var e=Bi(t,We);return S0(e)?Ba:e.substr(7).match(Nd).map(Qe)},of=function(t,e){var n=t._gsap||sr(t),i=t.style,r=d0(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ba:r):(r===Ba&&!t.offsetParent&&t!==Io&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Io.appendChild(t)),r=d0(t),l?i.display=l:Gr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Io.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ef=function(t,e,n,i,r,o){var a=t._gsap,l=r||of(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,u=l[0],g=l[1],_=l[2],p=l[3],m=l[4],v=l[5],M=e.split(" "),x=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,T,R,y;n?l!==Ba&&(T=u*p-g*_)&&(R=x*(p/T)+b*(-_/T)+(_*v-p*m)/T,y=x*(-g/T)+b*(u/T)-(u*v-g*m)/T,x=R,b=y):(w=y0(t),x=w.x+(~M[0].indexOf("%")?x/100*w.width:x),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&a.smooth?(m=x-c,v=b-h,a.xOffset=d+(m*u+v*_)-m,a.yOffset=f+(m*g+v*p)-v):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[ri]="0px 0px",o&&(lr(o,a,"xOrigin",c,x),lr(o,a,"yOrigin",h,b),lr(o,a,"xOffset",d,a.xOffset),lr(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},ka=function(t,e){var n=t._gsap||new Gd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Bi(t,ri)||"0",h,d,f,u,g,_,p,m,v,M,x,b,w,T,R,y,S,P,L,O,z,H,V,X,W,K,I,at,Mt,Zt,Wt,Kt;return h=d=f=_=p=m=v=M=x=0,u=g=1,n.svg=!!(t.getCTM&&v0(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[We]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[We]!=="none"?l[We]:"")),i.scale=i.rotate=i.translate="none"),T=of(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),ef(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,T)),b=n.xOrigin||0,w=n.yOrigin||0,T!==Ba&&(P=T[0],L=T[1],O=T[2],z=T[3],h=H=T[4],d=V=T[5],T.length===6?(u=Math.sqrt(P*P+L*L),g=Math.sqrt(z*z+O*O),_=P||L?Po(L,P)*Hr:0,v=O||z?Po(O,z)*Hr+_:0,v&&(g*=Math.abs(Math.cos(v*Do))),n.svg&&(h-=b-(b*P+w*O),d-=w-(b*L+w*z))):(Kt=T[6],Zt=T[7],I=T[8],at=T[9],Mt=T[10],Wt=T[11],h=T[12],d=T[13],f=T[14],R=Po(Kt,Mt),p=R*Hr,R&&(y=Math.cos(-R),S=Math.sin(-R),X=H*y+I*S,W=V*y+at*S,K=Kt*y+Mt*S,I=H*-S+I*y,at=V*-S+at*y,Mt=Kt*-S+Mt*y,Wt=Zt*-S+Wt*y,H=X,V=W,Kt=K),R=Po(-O,Mt),m=R*Hr,R&&(y=Math.cos(-R),S=Math.sin(-R),X=P*y-I*S,W=L*y-at*S,K=O*y-Mt*S,Wt=z*S+Wt*y,P=X,L=W,O=K),R=Po(L,P),_=R*Hr,R&&(y=Math.cos(R),S=Math.sin(R),X=P*y+L*S,W=H*y+V*S,L=L*y-P*S,V=V*y-H*S,P=X,H=W),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),u=Qe(Math.sqrt(P*P+L*L+O*O)),g=Qe(Math.sqrt(V*V+Kt*Kt)),R=Po(H,V),v=Math.abs(R)>2e-4?R*Hr:0,x=Wt?1/(Wt<0?-Wt:Wt):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!S0(Bi(t,We)),X&&t.setAttribute("transform",X))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(u*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Qe(u),n.scaleY=Qe(g),n.rotation=Qe(_)+a,n.rotationX=Qe(p)+a,n.rotationY=Qe(m)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ri]=bc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?cM:x0?b0:lM,n.uncache=0,n},bc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Kd=function(t,e,n){var i=En(e);return Qe(parseFloat(e)+parseFloat(cr(t,"x",n+"px",i)))+i},lM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,b0(t,e)},kr="0deg",Oa="0px",zr=") ",b0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,v=n.target,M=n.zOrigin,x="",b=m==="auto"&&t&&t!==1||m===!0;if(M&&(d!==kr||h!==kr)){var w=parseFloat(h)*Do,T=Math.sin(w),R=Math.cos(w),y;w=parseFloat(d)*Do,y=Math.cos(w),o=Kd(v,o,T*y*-M),a=Kd(v,a,-Math.sin(w)*-M),l=Kd(v,l,R*y*-M+M)}p!==Oa&&(x+="perspective("+p+zr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(b||o!==Oa||a!==Oa||l!==Oa)&&(x+=l!==Oa||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+zr),c!==kr&&(x+="rotate("+c+zr),h!==kr&&(x+="rotateY("+h+zr),d!==kr&&(x+="rotateX("+d+zr),(f!==kr||u!==kr)&&(x+="skew("+f+", "+u+zr),(g!==1||_!==1)&&(x+="scale("+g+", "+_+zr),v.style[We]=x||"translate(0, 0)"},cM=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,v=n.forceCSS,M=parseFloat(o),x=parseFloat(a),b,w,T,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Do,c*=Do,b=Math.cos(l)*d,w=Math.sin(l)*d,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Do,y=Math.tan(c-h),y=Math.sqrt(1+y*y),T*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),b*=y,w*=y)),b=Qe(b),w=Qe(w),T=Qe(T),R=Qe(R)):(b=d,R=f,w=T=0),(M&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(M=cr(u,"x",o,"px"),x=cr(u,"y",a,"px")),(g||_||p||m)&&(M=Qe(M+g-(g*b+_*T)+p),x=Qe(x+_-(g*w+_*R)+m)),(i||r)&&(y=u.getBBox(),M=Qe(M+i/100*y.width),x=Qe(x+r/100*y.height)),y="matrix("+b+","+w+","+T+","+R+","+M+","+x+")",u.setAttribute("transform",y),v&&(u.style[We]=y)},hM=function(t,e,n,i,r){var o=360,a=un(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Hr:1),c=l-i,h=i+c+"deg",d,f;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*o0)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*o0)%o-~~(c/o)*o)),t._pt=f=new Gn(t._pt,e,n,i,c,Yv),f.e=h,f.u="deg",t._props.push(n),f},f0=function(t,e){for(var n in e)t[n]=e[n];return t},uM=function(t,e,n){var i=f0({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[We]=e,a=ka(n,1),Gr(n,We),n.setAttribute("transform",c)):(c=getComputedStyle(n)[We],o[We]=e,a=ka(n,1),o[We]=c);for(l in Rs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(u=En(c),g=En(h),d=u!==g?cr(n,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Gn(t._pt,a,l,d,f-d,Qd),t._pt.u=g||0,t._props.push(l));f0(a,i)};Vn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Sc[t>1?"border"+s:s]=function(a,l,c,h,d){var f,u;if(arguments.length<4)return f=o.map(function(g){return As(a,g,c)}),u=f.join(" "),u.split(f[0]).length===5?f[0]:u;f=(h+"").split(" "),u={},o.forEach(function(g,_){return u[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,u,d)}});var af={name:"css",register:tf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,u,g,_,p,m,v,M,x,b,w,T,R;nf||tf(),this.styles=this.styles||_0(t),R=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(ei[_]&&Xd(_,e,n,i,t,r)))){if(u=typeof h,g=Sc[_],u==="function"&&(h=h.call(n,i,t,r),u=typeof h),u==="string"&&~h.indexOf("random(")&&(h=Co(h)),g)g(this,t,_,h,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Es.lastIndex=0,Es.test(c)||(p=En(c),m=En(h)),m?p!==m&&(c=cr(t,_,c,m)+m):p&&(h+=p),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),R.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],un(c)&&~c.indexOf("random(")&&(c=Co(c)),En(c+"")||c==="auto"||(c+=si.units[_]||En(As(t,_))||""),(c+"").charAt(1)==="="&&(c=As(t,_))):c=As(t,_),f=parseFloat(c),v=u==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),_ in ls&&(_==="autoAlpha"&&(f===1&&As(t,"visibility")==="hidden"&&d&&(f=0),R.push("visibility",0,a.visibility),lr(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ls[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in Rs,M){if(this.styles.save(_),u==="string"&&h.substring(0,6)==="var(--"&&(h=Bi(t,h.substring(4,h.indexOf(")"))),d=parseFloat(h)),x||(b=t._gsap,b.renderTransform&&!e.parseTransform||ka(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new Gn(this._pt,a,We,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new Gn(this._pt,b,"scaleY",b.scaleY,(v?Or(b.scaleY,v+d):d)-b.scaleY||0,Qd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ri,0,a[ri]),h=oM(h),b.svg?ef(t,h,0,w,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==b.zOrigin&&lr(this,b,"zOrigin",b.zOrigin,m),lr(this,a,_,bc(c),bc(h)));continue}else if(_==="svgOrigin"){ef(t,h,1,w,0,this);continue}else if(_ in M0){hM(this,b,_,f,v?Or(f,v+h):h);continue}else if(_==="smoothOrigin"){lr(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){uM(this,h,t);continue}}else _ in a||(_=Lo(_)||_);if(M||(d||d===0)&&(f||f===0)&&!qv.test(h)&&_ in a)p=(c+"").substr((f+"").length),d||(d=0),m=En(h)||(_ in si.units?si.units[_]:p),p!==m&&(f=cr(t,_,c,m)),this._pt=new Gn(this._pt,M?b:a,_,f,(v?Or(f,v+d):d)-f,!M&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?$v:Qd),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Zv);else if(_ in a)rM.call(this,t,_,c,v?v+h:h);else if(_ in t)this.add(t,_,c||t[_],v?v+h:h,i,r);else if(_!=="parseTransform"){_c(_,h);continue}M||(_ in a?R.push(_,0,a[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),o.push(_)}}T&&Jd(this)},render:function(t,e){if(e.tween._time||!sf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:As,aliases:ls,getSetter:function(t,e,n){var i=ls[e];return i&&i.indexOf(",")<0&&(e=i),e in Rs&&e!==ri&&(t._gsap.x||As(t,"x"))?n&&r0===n?e==="scale"?jv:Qv:(r0=n||{})&&(e==="scale"?tM:eM):t.style&&!gc(t.style[e])?Jv:~e.indexOf("-")?Kv:Mc(t,e)},core:{_removeProperty:Gr,_getMatrix:of}};Pn.utils.checkPrefix=Lo;Pn.core.getStyleSaver=_0;(function(s,t,e,n){var i=Vn(s+","+t+","+e,function(r){Rs[r]=1});Vn(t,function(r){si.units[r]="deg",M0[r]=1}),ls[i[13]]=s+","+t,Vn(n,function(r){var o=r.split(":");ls[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){si.units[s]="px"});Pn.registerPlugin(af);var vt=Pn.registerPlugin(af)||Pn,cA=vt.core.Tween;function w0(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function dM(s,t,e){return t&&w0(s.prototype,t),e&&w0(s,e),s}var Tn,Tc,fM,xi,hr,ur,Uo,T0,Wr,Ha,A0,Cs,Yi,R0,C0=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},P0=1,No=[],ce=[],Zi=[],Va=Date.now,lf=function(t,e){return e},pM=function(){var t=Ha.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ce),i.push.apply(i,Zi),ce=n,Zi=i,lf=function(o,a){return e[o](a)}},Is=function(t,e){return~Zi.indexOf(t)&&Zi[Zi.indexOf(t)+1][e]},Ga=function(t){return!!~A0.indexOf(t)},Xn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Wn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},wc="scrollLeft",Ec="scrollTop",cf=function(){return Cs&&Cs.isPressed||ce.cache++},Ac=function(t,e){var n=function i(r){if(r||r===0){P0&&(xi.history.scrollRestoration="manual");var o=Cs&&Cs.isPressed;r=i.v=Math.round(r)||(Cs&&Cs.iOS?1:0),t(r),i.cacheID=ce.cache,o&&lf("ss",r)}else(e||ce.cache!==i.cacheID||lf("ref"))&&(i.cacheID=ce.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},In={s:wc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ac(function(s){return arguments.length?xi.scrollTo(s,an.sc()):xi.pageXOffset||hr[wc]||ur[wc]||Uo[wc]||0})},an={s:Ec,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:In,sc:Ac(function(s){return arguments.length?xi.scrollTo(In.sc(),s):xi.pageYOffset||hr[Ec]||ur[Ec]||Uo[Ec]||0})},qn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Tn.utils.toArray)(t)[0]||(typeof t=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},mM=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ps=function(t,e){var n=e.s,i=e.sc;Ga(t)&&(t=hr.scrollingElement||ur);var r=ce.indexOf(t),o=i===an.sc?1:2;!~r&&(r=ce.push(t)-1),ce[r+o]||Xn(t,"scroll",cf);var a=ce[r+o],l=a||(ce[r+o]=Ac(Is(t,n),!0)||(Ga(t)?i:Ac(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Tn.getProperty(t,"scrollBehavior")==="smooth"),l},Rc=function(t,e,n){var i=t,r=t,o=Va(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,_){var p=Va();_||p-o>l?(r=i,i=g,a=o,o=p):n?i+=g:i=r+(g-r)/(p-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},f=function(g){var _=a,p=r,m=Va();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-_)*1e3};return{update:h,reset:d,getVelocity:f}},za=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},E0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},I0=function(){Ha=Tn.core.globals().ScrollTrigger,Ha&&Ha.core&&pM()},D0=function(t){return Tn=t||C0(),!Tc&&Tn&&typeof document<"u"&&document.body&&(xi=window,hr=document,ur=hr.documentElement,Uo=hr.body,A0=[xi,hr,ur,Uo],fM=Tn.utils.clamp,R0=Tn.core.context||function(){},Wr="onpointerenter"in Uo?"pointer":"mouse",T0=je.isTouch=xi.matchMedia&&xi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in xi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yi=je.eventTypes=("ontouchstart"in ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return P0=0},500),I0(),Tc=1),Tc};In.op=an;ce.cache=0;var je=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Tc||D0(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),Ha||I0();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,f=n.onStopDelay,u=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,v=n.onDrag,M=n.onPress,x=n.onRelease,b=n.onRight,w=n.onLeft,T=n.onUp,R=n.onDown,y=n.onChangeX,S=n.onChangeY,P=n.onChange,L=n.onToggleX,O=n.onToggleY,z=n.onHover,H=n.onHoverEnd,V=n.onMove,X=n.ignoreCheck,W=n.isNormalizer,K=n.onGestureStart,I=n.onGestureEnd,at=n.onWheel,Mt=n.onEnable,Zt=n.onDisable,Wt=n.onClick,Kt=n.scrollSpeed,J=n.capture,nt=n.allowClicks,yt=n.lockAxis,At=n.onLockAxis;this.target=a=qn(a)||ur,this.vars=n,u&&(u=Tn.utils.toArray(u)),i=i||1e-9,r=r||0,g=g||1,Kt=Kt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(xi.getComputedStyle(Uo).lineHeight)||22);var Ct,Jt,re,D,et,j,Q,N=this,ut=0,ot=0,pt=n.passive||!h&&n.passive!==!1,Dt=Ps(a,In),Xt=Ps(a,an),C=Dt(),E=Xt(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Yi[0]==="pointerdown",Z=Ga(a),tt=a.ownerDocument||hr,$=[0,0,0],Rt=[0,0,0],dt=0,Lt=function(){return dt=Va()},_t=function(kt,ne){return(N.event=kt)&&u&&mM(kt.target,u)||ne&&G&&kt.pointerType!=="touch"||X&&X(kt,ne)},ct=function(){N._vx.reset(),N._vy.reset(),Jt.pause(),d&&d(N)},xt=function(){var kt=N.deltaX=E0($),ne=N.deltaY=E0(Rt),St=Math.abs(kt)>=i,Qt=Math.abs(ne)>=i;P&&(St||Qt)&&P(N,kt,ne,$,Rt),St&&(b&&N.deltaX>0&&b(N),w&&N.deltaX<0&&w(N),y&&y(N),L&&N.deltaX<0!=ut<0&&L(N),ut=N.deltaX,$[0]=$[1]=$[2]=0),Qt&&(R&&N.deltaY>0&&R(N),T&&N.deltaY<0&&T(N),S&&S(N),O&&N.deltaY<0!=ot<0&&O(N),ot=N.deltaY,Rt[0]=Rt[1]=Rt[2]=0),(D||re)&&(V&&V(N),re&&(p&&re===1&&p(N),v&&v(N),re=0),D=!1),j&&!(j=!1)&&At&&At(N),et&&(at(N),et=!1),Ct=0},qt=function(kt,ne,St){$[St]+=kt,Rt[St]+=ne,N._vx.update(kt),N._vy.update(ne),c?Ct||(Ct=requestAnimationFrame(xt)):xt()},Ft=function(kt,ne){yt&&!Q&&(N.axis=Q=Math.abs(kt)>Math.abs(ne)?"x":"y",j=!0),Q!=="y"&&($[2]+=kt,N._vx.update(kt,!0)),Q!=="x"&&(Rt[2]+=ne,N._vy.update(ne,!0)),c?Ct||(Ct=requestAnimationFrame(xt)):xt()},gt=function(kt){if(!_t(kt,1)){kt=za(kt,h);var ne=kt.clientX,St=kt.clientY,Qt=ne-N.x,Gt=St-N.y,ee=N.isDragging;N.x=ne,N.y=St,(ee||(Qt||Gt)&&(Math.abs(N.startX-ne)>=r||Math.abs(N.startY-St)>=r))&&(re=ee?2:1,ee||(N.isDragging=!0),Ft(Qt,Gt))}},te=N.onPress=function(Et){_t(Et,1)||Et&&Et.button||(N.axis=Q=null,Jt.pause(),N.isPressed=!0,Et=za(Et),ut=ot=0,N.startX=N.x=Et.clientX,N.startY=N.y=Et.clientY,N._vx.reset(),N._vy.reset(),Xn(W?a:tt,Yi[1],gt,pt,!0),N.deltaX=N.deltaY=0,M&&M(N))},F=N.onRelease=function(Et){if(!_t(Et,1)){Wn(W?a:tt,Yi[1],gt,!0);var kt=!isNaN(N.y-N.startY),ne=N.isDragging,St=ne&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Qt=za(Et);!St&&kt&&(N._vx.reset(),N._vy.reset(),h&&nt&&Tn.delayedCall(.08,function(){if(Va()-dt>300&&!Et.defaultPrevented){if(Et.target.click)Et.target.click();else if(tt.createEvent){var Gt=tt.createEvent("MouseEvents");Gt.initMouseEvent("click",!0,!0,xi,1,Qt.screenX,Qt.screenY,Qt.clientX,Qt.clientY,!1,!1,!1,!1,0,null),Et.target.dispatchEvent(Gt)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&ne&&!W&&Jt.restart(!0),re&&xt(),m&&ne&&m(N),x&&x(N,St)}},ht=function(kt){return kt.touches&&kt.touches.length>1&&(N.isGesturing=!0)&&K(kt,N.isDragging)},ft=function(){return(N.isGesturing=!1)||I(N)},bt=function(kt){if(!_t(kt)){var ne=Dt(),St=Xt();qt((ne-C)*Kt,(St-E)*Kt,1),C=ne,E=St,d&&Jt.restart(!0)}},rt=function(kt){if(!_t(kt)){kt=za(kt,h),at&&(et=!0);var ne=(kt.deltaMode===1?l:kt.deltaMode===2?xi.innerHeight:1)*g;qt(kt.deltaX*ne,kt.deltaY*ne,0),d&&!W&&Jt.restart(!0)}},it=function(kt){if(!_t(kt)){var ne=kt.clientX,St=kt.clientY,Qt=ne-N.x,Gt=St-N.y;N.x=ne,N.y=St,D=!0,d&&Jt.restart(!0),(Qt||Gt)&&Ft(Qt,Gt)}},It=function(kt){N.event=kt,z(N)},$t=function(kt){N.event=kt,H(N)},ve=function(kt){return _t(kt)||za(kt,h)&&Wt(N)};Jt=N._dc=Tn.delayedCall(f||.25,ct).pause(),N.deltaX=N.deltaY=0,N._vx=Rc(0,50,!0),N._vy=Rc(0,50,!0),N.scrollX=Dt,N.scrollY=Xt,N.isDragging=N.isGesturing=N.isPressed=!1,R0(this),N.enable=function(Et){return N.isEnabled||(Xn(Z?tt:a,"scroll",cf),o.indexOf("scroll")>=0&&Xn(Z?tt:a,"scroll",bt,pt,J),o.indexOf("wheel")>=0&&Xn(a,"wheel",rt,pt,J),(o.indexOf("touch")>=0&&T0||o.indexOf("pointer")>=0)&&(Xn(a,Yi[0],te,pt,J),Xn(tt,Yi[2],F),Xn(tt,Yi[3],F),nt&&Xn(a,"click",Lt,!0,!0),Wt&&Xn(a,"click",ve),K&&Xn(tt,"gesturestart",ht),I&&Xn(tt,"gestureend",ft),z&&Xn(a,Wr+"enter",It),H&&Xn(a,Wr+"leave",$t),V&&Xn(a,Wr+"move",it)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=D=re=!1,N._vx.reset(),N._vy.reset(),C=Dt(),E=Xt(),Et&&Et.type&&te(Et),Mt&&Mt(N)),N},N.disable=function(){N.isEnabled&&(No.filter(function(Et){return Et!==N&&Ga(Et.target)}).length||Wn(Z?tt:a,"scroll",cf),N.isPressed&&(N._vx.reset(),N._vy.reset(),Wn(W?a:tt,Yi[1],gt,!0)),Wn(Z?tt:a,"scroll",bt,J),Wn(a,"wheel",rt,J),Wn(a,Yi[0],te,J),Wn(tt,Yi[2],F),Wn(tt,Yi[3],F),Wn(a,"click",Lt,!0),Wn(a,"click",ve),Wn(tt,"gesturestart",ht),Wn(tt,"gestureend",ft),Wn(a,Wr+"enter",It),Wn(a,Wr+"leave",$t),Wn(a,Wr+"move",it),N.isEnabled=N.isPressed=N.isDragging=!1,Zt&&Zt(N))},N.kill=N.revert=function(){N.disable();var Et=No.indexOf(N);Et>=0&&No.splice(Et,1),Cs===N&&(Cs=0)},No.push(N),W&&Ga(a)&&(Cs=N),N.enable(_)},dM(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();je.version="3.13.0";je.create=function(s){return new je(s)};je.register=D0;je.getAll=function(){return No.slice()};je.getById=function(s){return No.filter(function(t){return t.vars.id===s})[0]};C0()&&Tn.registerPlugin(je);var Ut,Bo,de,De,Mi,be,wf,Wc,nl,Ja,Xa,Cc,Dn,Zc,_f,Zn,L0,N0,ko,J0,hf,K0,Yn,xf,Q0,j0,dr,yf,Ef,zo,Tf,Xc,vf,uf,Pc=1,Ln=Date.now,df=Ln(),Hi=0,qa=0,U0=function(t,e,n){var i=vi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},F0=function(t,e){return e&&(!vi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},gM=function s(){return qa&&requestAnimationFrame(s)},O0=function(){return Zc=1},B0=function(){return Zc=0},cs=function(t){return t},Ya=function(t){return Math.round(t*1e5)/1e5||0},tg=function(){return typeof window<"u"},eg=function(){return Ut||tg()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},Jr=function(t){return!!~wf.indexOf(t)},ng=function(t){return(t==="Height"?Tf:de["inner"+t])||Mi["client"+t]||be["client"+t]},ig=function(t){return Is(t,"getBoundingClientRect")||(Jr(t)?function(){return Gc.width=de.innerWidth,Gc.height=Tf,Gc}:function(){return Ds(t)})},_M=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=Is(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?ng(r):t["client"+r])||0}},xM=function(t,e){return!e||~Zi.indexOf(t)?ig(t):function(){return Gc}},hs=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Is(t,n))?o()-ig(t)()[r]:Jr(t)?(Mi[n]||be[n])-ng(i):t[n]-t["offset"+i])},Ic=function(t,e){for(var n=0;n<ko.length;n+=3)(!e||~e.indexOf(ko[n+1]))&&t(ko[n],ko[n+1],ko[n+2])},vi=function(t){return typeof t=="string"},Nn=function(t){return typeof t=="function"},Za=function(t){return typeof t=="number"},Xr=function(t){return typeof t=="object"},Wa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ff=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Fo=Math.abs,sg="left",rg="top",Af="right",Rf="bottom",Yr="width",Zr="height",Ka="Right",Qa="Left",ja="Top",tl="Bottom",ln="padding",ki="margin",Vo="Width",Cf="Height",dn="px",zi=function(t){return de.getComputedStyle(t)},yM=function(t){var e=zi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},k0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ds=function(t,e){var n=e&&zi(t)[_f]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},qc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},og=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},vM=function(t){return function(e){return Ut.utils.snap(og(t),e)}},Pf=function(t){var e=Ut.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},MM=function(t){return function(e,n){return Pf(og(t))(e,n.direction)}},Dc=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},yn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},xn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Lc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},z0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Nc={toggleActions:"play",anticipatePin:0},Yc={top:0,left:0,center:.5,bottom:1,right:1},kc=function(t,e){if(vi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Yc?Yc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Uc=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,f=r.indent,u=r.fontWeight,g=De.createElement("div"),_=Jr(n)||Is(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=_?be:n,v=t.indexOf("start")!==-1,M=v?c:h,x="border-color:"+M+";font-size:"+d+";color:"+M+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(x+=(i===an?Af:Rf)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],zc(g,0,i,v),g},zc=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Vo]=1,r["border"+a+Vo]=0,r[n.p]=e+"px",Ut.set(t,r)},he=[],Mf={},il,H0=function(){return Ln()-Hi>34&&(il||(il=requestAnimationFrame(Ls)))},Oo=function(){(!Yn||!Yn.isPressed||Yn.startX>be.clientWidth)&&(ce.cache++,Yn?il||(il=requestAnimationFrame(Ls)):Ls(),Hi||Qr("scrollStart"),Hi=Ln())},pf=function(){j0=de.innerWidth,Q0=de.innerHeight},$a=function(t){ce.cache++,(t===!0||!Dn&&!K0&&!De.fullscreenElement&&!De.webkitFullscreenElement&&(!xf||j0!==de.innerWidth||Math.abs(de.innerHeight-Q0)>de.innerHeight*.25))&&Wc.restart(!0)},Kr={},SM=[],ag=function s(){return xn(Ot,"scrollEnd",s)||qr(!0)},Qr=function(t){return Kr[t]&&Kr[t].map(function(e){return e()})||SM},yi=[],lg=function(t){for(var e=0;e<yi.length;e+=5)(!t||yi[e+4]&&yi[e+4].query===t)&&(yi[e].style.cssText=yi[e+1],yi[e].getBBox&&yi[e].setAttribute("transform",yi[e+2]||""),yi[e+3].uncache=1)},If=function(t,e){var n;for(Zn=0;Zn<he.length;Zn++)n=he[Zn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Xc=!0,e&&lg(e),e||Qr("revert")},cg=function(t,e){ce.cache++,(e||!$n)&&ce.forEach(function(n){return Nn(n)&&n.cacheID++&&(n.rec=0)}),vi(t)&&(de.history.scrollRestoration=Ef=t)},$n,$r=0,V0,bM=function(){if(V0!==$r){var t=V0=$r;requestAnimationFrame(function(){return t===$r&&qr(!0)})}},hg=function(){be.appendChild(zo),Tf=!Yn&&zo.offsetHeight||de.innerHeight,be.removeChild(zo)},G0=function(t){return nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},qr=function(t,e){if(Mi=De.documentElement,be=De.body,wf=[de,De,Mi,be],Hi&&!t&&!Xc){yn(Ot,"scrollEnd",ag);return}hg(),$n=Ot.isRefreshing=!0,ce.forEach(function(i){return Nn(i)&&++i.cacheID&&(i.rec=i())});var n=Qr("refreshInit");J0&&Ot.sort(),e||If(),ce.forEach(function(i){Nn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),he.slice(0).forEach(function(i){return i.refresh()}),Xc=!1,he.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),vf=1,G0(!0),he.forEach(function(i){var r=hs(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),G0(!1),vf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ce.forEach(function(i){Nn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),cg(Ef,1),Wc.pause(),$r++,$n=2,Ls(2),he.forEach(function(i){return Nn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),$n=Ot.isRefreshing=!1,Qr("refresh")},Sf=0,Hc=1,el,Ls=function(t){if(t===2||!$n&&!Xc){Ot.isUpdating=!0,el&&el.update(0);var e=he.length,n=Ln(),i=n-df>=50,r=e&&he[0].scroll();if(Hc=Sf>r?-1:1,$n||(Sf=r),i&&(Hi&&!Zc&&n-Hi>200&&(Hi=0,Qr("scrollEnd")),Xa=df,df=n),Hc<0){for(Zn=e;Zn-- >0;)he[Zn]&&he[Zn].update(0,i);Hc=1}else for(Zn=0;Zn<e;Zn++)he[Zn]&&he[Zn].update(0,i);Ot.isUpdating=!1}il=0},bf=[sg,rg,Rf,Af,ki+tl,ki+Ka,ki+ja,ki+Qa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Vc=bf.concat([Yr,Zr,"boxSizing","max"+Vo,"max"+Cf,"position",ki,ln,ln+ja,ln+Ka,ln+tl,ln+Qa]),wM=function(t,e,n){Ho(n);var i=t._gsap;if(i.spacerIsNative)Ho(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},mf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=bf.length,o=e.style,a=t.style,l;r--;)l=bf[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Rf]=a[Af]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Yr]=qc(t,In)+dn,o[Zr]=qc(t,an)+dn,o[ln]=a[ki]=a[rg]=a[sg]="0",Ho(i),a[Yr]=a["max"+Vo]=n[Yr],a[Zr]=a["max"+Cf]=n[Zr],a[ln]=n[ln],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},EM=/([A-Z])/g,Ho=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(EM,"-$1").toLowerCase())}},Fc=function(t){for(var e=Vc.length,n=t.style,i=[],r=0;r<e;r++)i.push(Vc[r],n[Vc[r]]);return i.t=t,i},TM=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Gc={left:0,top:0},W0=function(t,e,n,i,r,o,a,l,c,h,d,f,u,g){Nn(t)&&(t=t(l)),vi(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?kc("0"+t.substr(3),n):0));var _=u?u.time():0,p,m,v;if(u&&u.seek(0),isNaN(t)||(t=+t),Za(t))u&&(t=Ut.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,f,t)),a&&zc(a,n,i,!0);else{Nn(e)&&(e=e(l));var M=(t||"0").split(" "),x,b,w,T;v=qn(e,l)||be,x=Ds(v)||{},(!x||!x.left&&!x.top)&&zi(v).display==="none"&&(T=v.style.display,v.style.display="block",x=Ds(v),T?v.style.display=T:v.style.removeProperty("display")),b=kc(M[0],x[i.d]),w=kc(M[1]||"0",n),t=x[i.p]-c[i.p]-h+b+r-w,a&&zc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;p="scroll"+i.d2,zc(o,R,i,y&&R>20||!y&&(d?Math.max(be[p],Mi[p]):o.parentNode[p])<=R+1),d&&(c=Ds(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+dn))}return u&&v&&(p=Ds(v),u.seek(f),m=Ds(v),u._caScrollDist=p[i.p]-m[i.p],t=t/u._caScrollDist*f),u&&u.seek(_),u?t:Math.round(t)},AM=/(webkit|moz|length|cssText|inset)/i,X0=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===be){t._stOrig=r.cssText,a=zi(t);for(o in a)!+o&&!AM.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},ug=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},Oc=function(t,e,n){var i={};i[e.p]="+="+n,Ut.set(t,i)},q0=function(t,e){var n=Ps(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var f=o.tween,u=l.onComplete,g={};c=c||n();var _=ug(n,c,function(){f.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+h*f.ratio+d*f.ratio*f.ratio)},l.onUpdate=function(){ce.cache++,o.tween&&Ls()},l.onComplete=function(){o.tween=0,u&&u.call(f)},f=o.tween=Ut.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},yn(t,"wheel",n.wheelHandler),Ot.isTouch&&yn(t,"touchmove",n.wheelHandler),r},Ot=(function(){function s(e,n){Bo||s.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),yf(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!qa){this.update=this.refresh=this.kill=cs;return}n=k0(vi(n)||Za(n)||n.nodeType?{trigger:n}:n,Nc);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,f=r.trigger,u=r.pin,g=r.pinSpacing,_=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,v=r.onSnapComplete,M=r.once,x=r.snap,b=r.pinReparent,w=r.pinSpacer,T=r.containerAnimation,R=r.fastScrollEnd,y=r.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?In:an,P=!d&&d!==0,L=qn(n.scroller||de),O=Ut.core.getCache(L),z=Jr(L),H=("pinType"in n?n.pinType:Is(L,"pinType")||z&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=P&&n.toggleActions.split(" "),W="markers"in n?n.markers:Nc.markers,K=z?0:parseFloat(zi(L)["border"+S.p2+Vo])||0,I=this,at=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Mt=_M(L,z,S),Zt=xM(L,z),Wt=0,Kt=0,J=0,nt=Ps(L,S),yt,At,Ct,Jt,re,D,et,j,Q,N,ut,ot,pt,Dt,Xt,C,E,G,Z,tt,$,Rt,dt,Lt,_t,ct,xt,qt,Ft,gt,te,F,ht,ft,bt,rt,it,It,$t;if(I._startClamp=I._endClamp=!1,I._dir=S,p*=45,I.scroller=L,I.scroll=T?T.time.bind(T):nt,Jt=nt(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(J0=1,n.refreshPriority===-9999&&(el=I)),O.tweenScroll=O.tweenScroll||{top:q0(L,an),left:q0(L,In)},I.tweenTo=yt=O.tweenScroll[S.p],I.scrubDuration=function(St){ht=Za(St)&&St,ht?F?F.duration(St):F=Ut.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return m&&m(I)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),gt=0,l||(l=i.vars.id)),x&&((!Xr(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in be.style&&Ut.set(z?[be,Mi]:L,{scrollBehavior:"auto"}),ce.forEach(function(St){return Nn(St)&&St.target===(z?De.scrollingElement||Mi:L)&&(St.smooth=!1)}),Ct=Nn(x.snapTo)?x.snapTo:x.snapTo==="labels"?vM(i):x.snapTo==="labelsDirectional"?MM(i):x.directional!==!1?function(St,Qt){return Pf(x.snapTo)(St,Ln()-Kt<500?0:Qt.direction)}:Ut.utils.snap(x.snapTo),ft=x.duration||{min:.1,max:2},ft=Xr(ft)?Ja(ft.min,ft.max):Ja(ft,ft),bt=Ut.delayedCall(x.delay||ht/2||.1,function(){var St=nt(),Qt=Ln()-Kt<500,Gt=yt.tween;if((Qt||Math.abs(I.getVelocity())<10)&&!Gt&&!Zc&&Wt!==St){var ee=(St-D)/Dt,en=i&&!P?i.totalProgress():ee,ae=Qt?0:(en-te)/(Ln()-Xa)*1e3||0,Be=Ut.utils.clamp(-ee,1-ee,Fo(ae/2)*ae/.185),nn=ee+(x.inertia===!1?0:Be),Le,Re,Ee=x,di=Ee.onStart,Ne=Ee.onInterrupt,zn=Ee.onComplete;if(Le=Ct(nn,I),Za(Le)||(Le=nn),Re=Math.max(0,Math.round(D+Le*Dt)),St<=et&&St>=D&&Re!==St){if(Gt&&!Gt._initted&&Gt.data<=Fo(Re-St))return;x.inertia===!1&&(Be=Le-ee),yt(Re,{duration:ft(Fo(Math.max(Fo(nn-en),Fo(Le-en))*.185/ae/.05||0)),ease:x.ease||"power3",data:Fo(Re-St),onInterrupt:function(){return bt.restart(!0)&&Ne&&Ne(I)},onComplete:function(){I.update(),Wt=nt(),i&&!P&&(F?F.resetTo("totalProgress",Le,i._tTime/i._tDur):i.progress(Le)),gt=te=i&&!P?i.totalProgress():I.progress,v&&v(I),zn&&zn(I)}},St,Be*Dt,Re-St-Be*Dt),di&&di(I,yt.tween)}}else I.isActive&&Wt!==St&&bt.restart(!0)}).pause()),l&&(Mf[l]=I),f=I.trigger=qn(f||u!==!0&&u),$t=f&&f._gsap&&f._gsap.stRevert,$t&&($t=$t(I)),u=u===!0?f:qn(u),vi(a)&&(a={targets:f,className:a}),u&&(g===!1||g===ki||(g=!g&&u.parentNode&&u.parentNode.style&&zi(u.parentNode).display==="flex"?!1:ln),I.pin=u,At=Ut.core.getCache(u),At.spacer?Xt=At.pinState:(w&&(w=qn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),At.spacerIsNative=!!w,w&&(At.spacerState=Fc(w))),At.spacer=G=w||De.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),At.pinState=Xt=Fc(u)),n.force3D!==!1&&Ut.set(u,{force3D:!0}),I.spacer=G=At.spacer,Ft=zi(u),Lt=Ft[g+S.os2],tt=Ut.getProperty(u),$=Ut.quickSetter(u,S.a,dn),mf(u,G,Ft),E=Fc(u)),W){ot=Xr(W)?k0(W,z0):z0,N=Uc("scroller-start",l,L,S,ot,0),ut=Uc("scroller-end",l,L,S,ot,0,N),Z=N["offset"+S.op.d2];var ve=qn(Is(L,"content")||L);j=this.markerStart=Uc("start",l,ve,S,ot,Z,0,T),Q=this.markerEnd=Uc("end",l,ve,S,ot,Z,0,T),T&&(It=Ut.quickSetter([j,Q],S.a,dn)),!H&&!(Zi.length&&Is(L,"fixedMarkers")===!0)&&(yM(z?be:L),Ut.set([N,ut],{force3D:!0}),ct=Ut.quickSetter(N,S.a,dn),qt=Ut.quickSetter(ut,S.a,dn))}if(T){var Et=T.vars.onUpdate,kt=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),Et&&Et.apply(T,kt||[])})}if(I.previous=function(){return he[he.indexOf(I)-1]},I.next=function(){return he[he.indexOf(I)+1]},I.revert=function(St,Qt){if(!Qt)return I.kill(!0);var Gt=St!==!1||!I.enabled,ee=Dn;Gt!==I.isReverted&&(Gt&&(rt=Math.max(nt(),I.scroll.rec||0),J=I.progress,it=i&&i.progress()),j&&[j,Q,N,ut].forEach(function(en){return en.style.display=Gt?"none":"block"}),Gt&&(Dn=I,I.update(Gt)),u&&(!b||!I.isActive)&&(Gt?wM(u,G,Xt):mf(u,G,zi(u),_t)),Gt||I.update(Gt),Dn=ee,I.isReverted=Gt)},I.refresh=function(St,Qt,Gt,ee){if(!((Dn||!I.enabled)&&!Qt)){if(u&&St&&Hi){yn(s,"scrollEnd",ag);return}!$n&&at&&at(I),Dn=I,yt.tween&&!Gt&&(yt.tween.kill(),yt.tween=0),F&&F.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren&&i.getChildren(!0,!0,!1).forEach(function(fe){return fe.vars.immediateRender&&fe.render(0,!0,!0)})),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var en=Mt(),ae=Zt(),Be=T?T.duration():hs(L,S),nn=Dt<=.01||!Dt,Le=0,Re=ee||0,Ee=Xr(Gt)?Gt.end:n.end,di=n.endTrigger||f,Ne=Xr(Gt)?Gt.start:n.start||(n.start===0||!f?0:u?"0 0":"0 100%"),zn=I.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,I),Di=f&&Math.max(0,he.indexOf(I))||0,hn=Di,A,B,q,Y,k,st,mt,Nt,Pt,Yt,Ht,zt,oe;for(W&&Xr(Gt)&&(zt=Ut.getProperty(N,S.p),oe=Ut.getProperty(ut,S.p));hn-- >0;)st=he[hn],st.end||st.refresh(0,1)||(Dn=I),mt=st.pin,mt&&(mt===f||mt===u||mt===zn)&&!st.isReverted&&(Yt||(Yt=[]),Yt.unshift(st),st.revert(!0,!0)),st!==he[hn]&&(Di--,hn--);for(Nn(Ne)&&(Ne=Ne(I)),Ne=U0(Ne,"start",I),D=W0(Ne,f,en,S,nt(),j,N,I,ae,K,H,Be,T,I._startClamp&&"_startClamp")||(u?-.001:0),Nn(Ee)&&(Ee=Ee(I)),vi(Ee)&&!Ee.indexOf("+=")&&(~Ee.indexOf(" ")?Ee=(vi(Ne)?Ne.split(" ")[0]:"")+Ee:(Le=kc(Ee.substr(2),en),Ee=vi(Ne)?Ne:(T?Ut.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,D):D)+Le,di=f)),Ee=U0(Ee,"end",I),et=Math.max(D,W0(Ee||(di?"100% 0":Be),di,en,S,nt()+Le,Q,ut,I,ae,K,H,Be,T,I._endClamp&&"_endClamp"))||-.001,Le=0,hn=Di;hn--;)st=he[hn],mt=st.pin,mt&&st.start-st._pinPush<=D&&!T&&st.end>0&&(A=st.end-(I._startClamp?Math.max(0,st.start):st.start),(mt===f&&st.start-st._pinPush<D||mt===zn)&&isNaN(Ne)&&(Le+=A*(1-st.progress)),mt===u&&(Re+=A));if(D+=Le,et+=Le,I._startClamp&&(I._startClamp+=Le),I._endClamp&&!$n&&(I._endClamp=et||-.001,et=Math.min(et,hs(L,S))),Dt=et-D||(D-=.01)&&.001,nn&&(J=Ut.utils.clamp(0,1,Ut.utils.normalize(D,et,rt))),I._pinPush=Re,j&&Le&&(A={},A[S.a]="+="+Le,zn&&(A[S.p]="-="+nt()),Ut.set([j,Q],A)),u&&!(vf&&I.end>=hs(L,S)))A=zi(u),Y=S===an,q=nt(),Rt=parseFloat(tt(S.a))+Re,!Be&&et>1&&(Ht=(z?De.scrollingElement||Mi:L).style,Ht={style:Ht,value:Ht["overflow"+S.a.toUpperCase()]},z&&zi(be)["overflow"+S.a.toUpperCase()]!=="scroll"&&(Ht.style["overflow"+S.a.toUpperCase()]="scroll")),mf(u,G,A),E=Fc(u),B=Ds(u,!0),Nt=H&&Ps(L,Y?In:an)(),g?(_t=[g+S.os2,Dt+Re+dn],_t.t=G,hn=g===ln?qc(u,S)+Dt+Re:0,hn&&(_t.push(S.d,hn+dn),G.style.flexBasis!=="auto"&&(G.style.flexBasis=hn+dn)),Ho(_t),zn&&he.forEach(function(fe){fe.pin===zn&&fe.vars.pinSpacing!==!1&&(fe._subPinOffset=!0)}),H&&nt(rt)):(hn=qc(u,S),hn&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=hn+dn)),H&&(k={top:B.top+(Y?q-D:Nt)+dn,left:B.left+(Y?Nt:q-D)+dn,boxSizing:"border-box",position:"fixed"},k[Yr]=k["max"+Vo]=Math.ceil(B.width)+dn,k[Zr]=k["max"+Cf]=Math.ceil(B.height)+dn,k[ki]=k[ki+ja]=k[ki+Ka]=k[ki+tl]=k[ki+Qa]="0",k[ln]=A[ln],k[ln+ja]=A[ln+ja],k[ln+Ka]=A[ln+Ka],k[ln+tl]=A[ln+tl],k[ln+Qa]=A[ln+Qa],C=TM(Xt,k,b),$n&&nt(0)),i?(Pt=i._initted,hf(1),i.render(i.duration(),!0,!0),dt=tt(S.a)-Rt+Dt+Re,xt=Math.abs(Dt-dt)>1,H&&xt&&C.splice(C.length-2,2),i.render(0,!0,!0),Pt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),hf(0)):dt=Dt,Ht&&(Ht.value?Ht.style["overflow"+S.a.toUpperCase()]=Ht.value:Ht.style.removeProperty("overflow-"+S.a));else if(f&&nt()&&!T)for(B=f.parentNode;B&&B!==be;)B._pinOffset&&(D-=B._pinOffset,et-=B._pinOffset),B=B.parentNode;Yt&&Yt.forEach(function(fe){return fe.revert(!1,!0)}),I.start=D,I.end=et,Jt=re=$n?rt:nt(),!T&&!$n&&(Jt<rt&&nt(rt),I.scroll.rec=0),I.revert(!1,!0),Kt=Ln(),bt&&(Wt=-1,bt.restart(!0)),Dn=0,i&&P&&(i._initted||it)&&i.progress()!==it&&i.progress(it||0,!0).render(i.time(),!0,!0),(nn||J!==I.progress||T||_||i&&!i._initted)&&(i&&!P&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(T&&D<-.001&&!J?Ut.utils.normalize(D,et,0):J,!0),I.progress=nn||(Jt-D)/Dt===J?0:J),u&&g&&(G._pinOffset=Math.round(I.progress*dt)),F&&F.invalidate(),isNaN(zt)||(zt-=Ut.getProperty(N,S.p),oe-=Ut.getProperty(ut,S.p),Oc(N,S,zt),Oc(j,S,zt-(ee||0)),Oc(ut,S,oe),Oc(Q,S,oe-(ee||0))),nn&&!$n&&I.update(),h&&!$n&&!pt&&(pt=!0,h(I),pt=!1)}},I.getVelocity=function(){return(nt()-re)/(Ln()-Xa)*1e3||0},I.endAnimation=function(){Wa(I.callbackAnimation),i&&(F?F.progress(1):i.paused()?P||Wa(i,I.direction<0,1):Wa(i,i.reversed()))},I.labelToScroll=function(St){return i&&i.labels&&(D||I.refresh()||D)+i.labels[St]/i.duration()*Dt||0},I.getTrailing=function(St){var Qt=he.indexOf(I),Gt=I.direction>0?he.slice(0,Qt).reverse():he.slice(Qt+1);return(vi(St)?Gt.filter(function(ee){return ee.vars.preventOverlaps===St}):Gt).filter(function(ee){return I.direction>0?ee.end<=D:ee.start>=et})},I.update=function(St,Qt,Gt){if(!(T&&!Gt&&!St)){var ee=$n===!0?rt:I.scroll(),en=St?0:(ee-D)/Dt,ae=en<0?0:en>1?1:en||0,Be=I.progress,nn,Le,Re,Ee,di,Ne,zn,Di;if(Qt&&(re=Jt,Jt=T?nt():ee,x&&(te=gt,gt=i&&!P?i.totalProgress():ae)),p&&u&&!Dn&&!Pc&&Hi&&(!ae&&D<ee+(ee-re)/(Ln()-Xa)*p?ae=1e-4:ae===1&&et>ee+(ee-re)/(Ln()-Xa)*p&&(ae=.9999)),ae!==Be&&I.enabled){if(nn=I.isActive=!!ae&&ae<1,Le=!!Be&&Be<1,Ne=nn!==Le,di=Ne||!!ae!=!!Be,I.direction=ae>Be?1:-1,I.progress=ae,di&&!Dn&&(Re=ae&&!Be?0:ae===1?1:Be===1?2:3,P&&(Ee=!Ne&&X[Re+1]!=="none"&&X[Re+1]||X[Re],Di=i&&(Ee==="complete"||Ee==="reset"||Ee in i))),y&&(Ne||Di)&&(Di||d||!i)&&(Nn(y)?y(I):I.getTrailing(y).forEach(function(q){return q.endAnimation()})),P||(F&&!Dn&&!Pc?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",ae,i._tTime/i._tDur):(F.vars.totalProgress=ae,F.invalidate().restart())):i&&i.totalProgress(ae,!!(Dn&&(Kt||St)))),u){if(St&&g&&(G.style[g+S.os2]=Lt),!H)$(Ya(Rt+dt*ae));else if(di){if(zn=!St&&ae>Be&&et+1>ee&&ee+1>=hs(L,S),b)if(!St&&(nn||zn)){var hn=Ds(u,!0),A=ee-D;X0(u,be,hn.top+(S===an?A:0)+dn,hn.left+(S===an?0:A)+dn)}else X0(u,G);Ho(nn||zn?C:E),xt&&ae<1&&nn||$(Rt+(ae===1&&!zn?dt:0))}}x&&!yt.tween&&!Dn&&!Pc&&bt.restart(!0),a&&(Ne||M&&ae&&(ae<1||!uf))&&nl(a.targets).forEach(function(q){return q.classList[nn||M?"add":"remove"](a.className)}),o&&!P&&!St&&o(I),di&&!Dn?(P&&(Di&&(Ee==="complete"?i.pause().totalProgress(1):Ee==="reset"?i.restart(!0).pause():Ee==="restart"?i.restart(!0):i[Ee]()),o&&o(I)),(Ne||!uf)&&(c&&Ne&&ff(I,c),V[Re]&&ff(I,V[Re]),M&&(ae===1?I.kill(!1,1):V[Re]=0),Ne||(Re=ae===1?1:3,V[Re]&&ff(I,V[Re]))),R&&!nn&&Math.abs(I.getVelocity())>(Za(R)?R:2500)&&(Wa(I.callbackAnimation),F?F.progress(1):Wa(i,Ee==="reverse"?1:!ae,1))):P&&o&&!Dn&&o(I)}if(qt){var B=T?ee/T.duration()*(T._caScrollDist||0):ee;ct(B+(N._isFlipped?1:0)),qt(B)}It&&It(-ee/T.duration()*(T._caScrollDist||0))}},I.enable=function(St,Qt){I.enabled||(I.enabled=!0,yn(L,"resize",$a),z||yn(L,"scroll",Oo),at&&yn(s,"refreshInit",at),St!==!1&&(I.progress=J=0,Jt=re=Wt=nt()),Qt!==!1&&I.refresh())},I.getTween=function(St){return St&&yt?yt.tween:F},I.setPositions=function(St,Qt,Gt,ee){if(T){var en=T.scrollTrigger,ae=T.duration(),Be=en.end-en.start;St=en.start+Be*St/ae,Qt=en.start+Be*Qt/ae}I.refresh(!1,!1,{start:F0(St,Gt&&!!I._startClamp),end:F0(Qt,Gt&&!!I._endClamp)},ee),I.update()},I.adjustPinSpacing=function(St){if(_t&&St){var Qt=_t.indexOf(S.d)+1;_t[Qt]=parseFloat(_t[Qt])+St+dn,_t[1]=parseFloat(_t[1])+St+dn,Ho(_t)}},I.disable=function(St,Qt){if(I.enabled&&(St!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Qt||F&&F.pause(),rt=0,At&&(At.uncache=1),at&&xn(s,"refreshInit",at),bt&&(bt.pause(),yt.tween&&yt.tween.kill()&&(yt.tween=0)),!z)){for(var Gt=he.length;Gt--;)if(he[Gt].scroller===L&&he[Gt]!==I)return;xn(L,"resize",$a),z||xn(L,"scroll",Oo)}},I.kill=function(St,Qt){I.disable(St,Qt),F&&!Qt&&F.kill(),l&&delete Mf[l];var Gt=he.indexOf(I);Gt>=0&&he.splice(Gt,1),Gt===Zn&&Hc>0&&Zn--,Gt=0,he.forEach(function(ee){return ee.scroller===I.scroller&&(Gt=1)}),Gt||$n||(I.scroll.rec=0),i&&(i.scrollTrigger=null,St&&i.revert({kill:!1}),Qt||i.kill()),j&&[j,Q,N,ut].forEach(function(ee){return ee.parentNode&&ee.parentNode.removeChild(ee)}),el===I&&(el=0),u&&(At&&(At.uncache=1),Gt=0,he.forEach(function(ee){return ee.pin===u&&Gt++}),Gt||(At.spacer=0)),n.onKill&&n.onKill(I)},he.push(I),I.enable(!1,!1),$t&&$t(I),i&&i.add&&!Dt){var ne=I.update;I.update=function(){I.update=ne,ce.cache++,D||et||I.refresh()},Ut.delayedCall(.01,I.update),Dt=.01,D=et=0}else I.refresh();u&&bM()},s.register=function(n){return Bo||(Ut=n||eg(),tg()&&window.document&&s.enable(),Bo=qa),Bo},s.defaults=function(n){if(n)for(var i in n)Nc[i]=n[i];return Nc},s.disable=function(n,i){qa=0,he.forEach(function(o){return o[i?"kill":"disable"](n)}),xn(de,"wheel",Oo),xn(De,"scroll",Oo),clearInterval(Cc),xn(De,"touchcancel",cs),xn(be,"touchstart",cs),Dc(xn,De,"pointerdown,touchstart,mousedown",O0),Dc(xn,De,"pointerup,touchend,mouseup",B0),Wc.kill(),Ic(xn);for(var r=0;r<ce.length;r+=3)Lc(xn,ce[r],ce[r+1]),Lc(xn,ce[r],ce[r+2])},s.enable=function(){if(de=window,De=document,Mi=De.documentElement,be=De.body,Ut&&(nl=Ut.utils.toArray,Ja=Ut.utils.clamp,yf=Ut.core.context||cs,hf=Ut.core.suppressOverwrites||cs,Ef=de.history.scrollRestoration||"auto",Sf=de.pageYOffset||0,Ut.core.globals("ScrollTrigger",s),be)){qa=1,zo=document.createElement("div"),zo.style.height="100vh",zo.style.position="absolute",hg(),gM(),je.register(Ut),s.isTouch=je.isTouch,dr=je.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),xf=je.isTouch===1,yn(de,"wheel",Oo),wf=[de,De,Mi,be],Ut.matchMedia?(s.matchMedia=function(c){var h=Ut.matchMedia(),d;for(d in c)h.add(d,c[d]);return h},Ut.addEventListener("matchMediaInit",function(){return If()}),Ut.addEventListener("matchMediaRevert",function(){return lg()}),Ut.addEventListener("matchMedia",function(){qr(0,1),Qr("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return pf(),pf})):console.warn("Requires GSAP 3.11.0 or later"),pf(),yn(De,"scroll",Oo);var n=be.hasAttribute("style"),i=be.style,r=i.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ds(be),an.m=Math.round(a.top+an.sc())||0,In.m=Math.round(a.left+In.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(be.setAttribute("style",""),be.removeAttribute("style")),Cc=setInterval(H0,250),Ut.delayedCall(.5,function(){return Pc=0}),yn(De,"touchcancel",cs),yn(be,"touchstart",cs),Dc(yn,De,"pointerdown,touchstart,mousedown",O0),Dc(yn,De,"pointerup,touchend,mouseup",B0),_f=Ut.utils.checkPrefix("transform"),Vc.push(_f),Bo=Ln(),Wc=Ut.delayedCall(.2,qr).pause(),ko=[De,"visibilitychange",function(){var c=de.innerWidth,h=de.innerHeight;De.hidden?(L0=c,N0=h):(L0!==c||N0!==h)&&$a()},De,"DOMContentLoaded",qr,de,"load",qr,de,"resize",$a],Ic(yn),he.forEach(function(c){return c.enable(0,1)}),l=0;l<ce.length;l+=3)Lc(xn,ce[l],ce[l+1]),Lc(xn,ce[l],ce[l+2])}},s.config=function(n){"limitCallbacks"in n&&(uf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Cc)||(Cc=i)&&setInterval(H0,i),"ignoreMobileResize"in n&&(xf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ic(xn)||Ic(yn,n.autoRefreshEvents||"none"),K0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=qn(n),o=ce.indexOf(r),a=Jr(r);~o&&ce.splice(o,a?6:2),i&&(a?Zi.unshift(de,i,be,i,Mi,i):Zi.unshift(r,i))},s.clearMatchMedia=function(n){he.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(vi(n)?qn(n):n).getBoundingClientRect(),a=o[r?Yr:Zr]*i||0;return r?o.right-a>0&&o.left+a<de.innerWidth:o.bottom-a>0&&o.top+a<de.innerHeight},s.positionInViewport=function(n,i,r){vi(n)&&(n=qn(n));var o=n.getBoundingClientRect(),a=o[r?Yr:Zr],l=i==null?a/2:i in Yc?Yc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/de.innerWidth:(o.top+l)/de.innerHeight},s.killAll=function(n){if(he.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Kr.killAll||[];Kr={},i.forEach(function(r){return r()})}},s})();Ot.version="3.13.0";Ot.saveStyles=function(s){return s?nl(s).forEach(function(t){if(t&&t.style){var e=yi.indexOf(t);e>=0&&yi.splice(e,5),yi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),yf())}}):yi};Ot.revert=function(s,t){return If(!s,t)};Ot.create=function(s,t){return new Ot(s,t)};Ot.refresh=function(s){return s?$a(!0):(Bo||Ot.register())&&qr(!0)};Ot.update=function(s){return++ce.cache&&Ls(s===!0?2:0)};Ot.clearScrollMemory=cg;Ot.maxScroll=function(s,t){return hs(s,t?In:an)};Ot.getScrollFunc=function(s,t){return Ps(qn(s),t?In:an)};Ot.getById=function(s){return Mf[s]};Ot.getAll=function(){return he.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ot.isScrolling=function(){return!!Hi};Ot.snapDirectional=Pf;Ot.addEventListener=function(s,t){var e=Kr[s]||(Kr[s]=[]);~e.indexOf(t)||e.push(t)};Ot.removeEventListener=function(s,t){var e=Kr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Ot.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],f=[],u=Ut.delayedCall(i,function(){h(d,f),d=[],f=[]}).pause();return function(g){d.length||u.restart(!0),d.push(g.trigger),f.push(g),r<=d.length&&u.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Nn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Nn(r)&&(r=r(),yn(Ot,"refresh",function(){return r=t.batchMax()})),nl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Ot.create(c))}),e};var Y0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},gf=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(je.isTouch?" pinch-zoom":""):"none",t===Mi&&s(be,e)},Bc={auto:1,scroll:1},RM=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ut.core.getCache(r),a=Ln(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==be&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Bc[(l=zi(r)).overflowY]||Bc[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Jr(r)&&(Bc[(l=zi(r)).overflowY]||Bc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},dg=function(t,e,n,i){return je.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&RM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&yn(De,je.eventTypes[0],$0,!1,!0)},onDisable:function(){return xn(De,je.eventTypes[0],$0,!0)}})},CM=/(input|label|select|textarea)/i,Z0,$0=function(t){var e=CM.test(t.target.tagName);(e||Z0)&&(t._gsapAllow=!0,Z0=e)},PM=function(t){Xr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=qn(t.target)||Mi,h=Ut.core.globals().ScrollSmoother,d=h&&h.get(),f=dr&&(t.content&&qn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),u=Ps(c,an),g=Ps(c,In),_=1,p=(je.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,m=0,v=Nn(i)?function(){return i(a)}:function(){return i||2.8},M,x,b=dg(c,t.type,!0,r),w=function(){return x=!1},T=cs,R=cs,y=function(){l=hs(c,an),R=Ja(dr?1:0,l),n&&(T=Ja(0,hs(c,In))),M=$r},S=function(){f._gsap.y=Ya(parseFloat(f._gsap.y)+u.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},P=function(){if(x){requestAnimationFrame(w);var W=Ya(a.deltaY/2),K=R(u.v-W);if(f&&K!==u.v+u.offset){u.offset=K-u.v;var I=Ya((parseFloat(f&&f._gsap.y)||0)-u.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",f._gsap.y=I+"px",u.cacheID=ce.cache,Ls()}return!0}u.offset&&S(),x=!0},L,O,z,H,V=function(){y(),L.isActive()&&L.vars.scrollY>l&&(u()>l?L.progress(1)&&u(l):L.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(X){return dr&&X.type==="touchmove"&&P(X)||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){x=!1;var X=_;_=Ya((de.visualViewport&&de.visualViewport.scale||1)/p),L.pause(),X!==_&&gf(c,_>1.01?!0:n?!1:"x"),O=g(),z=u(),y(),M=$r},t.onRelease=t.onGestureStart=function(X,W){if(u.offset&&S(),!W)H.restart(!0);else{ce.cache++;var K=v(),I,at;n&&(I=g(),at=I+K*.05*-X.velocityX/.227,K*=Y0(g,I,at,hs(c,In)),L.vars.scrollX=T(at)),I=u(),at=I+K*.05*-X.velocityY/.227,K*=Y0(u,I,at,hs(c,an)),L.vars.scrollY=R(at),L.invalidate().duration(K).play(.01),(dr&&L.vars.scrollY>=l||I>=l-1)&&Ut.to({},{onUpdate:V,duration:K})}o&&o(X)},t.onWheel=function(){L._ts&&L.pause(),Ln()-m>1e3&&(M=0,m=Ln())},t.onChange=function(X,W,K,I,at){if($r!==M&&y(),W&&n&&g(T(I[2]===W?O+(X.startX-X.x):g()+W-I[1])),K){u.offset&&S();var Mt=at[2]===K,Zt=Mt?z+X.startY-X.y:u()+K-at[1],Wt=R(Zt);Mt&&Zt!==Wt&&(z+=Wt-Zt),u(Wt)}(K||W)&&Ls()},t.onEnable=function(){gf(c,n?!1:"x"),Ot.addEventListener("refresh",V),yn(de,"resize",V),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),b.enable()},t.onDisable=function(){gf(c,!0),xn(de,"resize",V),Ot.removeEventListener("refresh",V),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new je(t),a.iOS=dr,dr&&!u()&&u(1),dr&&Ut.ticker.add(cs),H=a._dc,L=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ug(u,u(),function(){return L.pause()})},onUpdate:Ls,onComplete:H.vars.onComplete}),a};Ot.sort=function(s){if(Nn(s))return he.sort(s);var t=de.pageYOffset||0;return Ot.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),he.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ot.observe=function(s){return new je(s)};Ot.normalizeScroll=function(s){if(typeof s>"u")return Yn;if(s===!0&&Yn)return Yn.enable();if(s===!1){Yn&&Yn.kill(),Yn=s;return}var t=s instanceof je?s:PM(s);return Yn&&Yn.target===t.target&&Yn.kill(),Jr(t.target)&&(Yn=t),t};Ot.core={_getVelocityProp:Rc,_inputObserver:dg,_scrollers:ce,_proxies:Zi,bridge:{ss:function(){Hi||Qr("scrollStart"),Hi=Ln()},ref:function(){return Dn}}};eg()&&Ut.registerPlugin(Ot);var sl,Go,Lf,IM=()=>Lf||Xo.register(window.gsap),fg=typeof Intl<"u"?new Intl.Segmenter:0,$c=s=>typeof s=="string"?$c(document.querySelectorAll(s)):"length"in s?Array.from(s):[s],pg=s=>$c(s).filter(t=>t instanceof HTMLElement),Nf=[],Df=function(){},DM=/\s+/g,mg=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),gg={left:0,top:0,width:0,height:0},_g=(s,t)=>{if(t){let e=new Set(s.join("").match(t)||Nf),n=s.length,i,r,o,a;if(e.size)for(;--n>-1;){r=s[n];for(o of e)if(o.startsWith(r)&&o.length>r.length){for(i=0,a=r;o.startsWith(a+=s[n+ ++i])&&a.length<o.length;);if(i&&a.length===o.length){s[n]=o,s.splice(n+1,i);break}}}}return s},xg=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),Wo=(s,t,e)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,e),Uf=(s,t,e)=>{let n=t[s+"sClass"]||"",{tag:i="div",aria:r="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=h=>{let d=document.createElement(i),f=e.length+1;return n&&(d.className=n+(l?" "+n+f:"")),o&&d.style.setProperty("--"+s,f+""),r!=="none"&&d.setAttribute("aria-hidden","true"),i!=="span"&&(d.style.position="relative",d.style.display=a),d.textContent=h,e.push(d),d};return l&&(n=n.replace("++","")),c.collection=e,c},LM=(s,t,e,n)=>{let i=Uf("line",e,n),r=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=i("");for(l.style.textAlign=r,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},yg=(s,t,e,n,i,r,o,a,l,c)=>{var h;let d=Array.from(s.childNodes),f=0,{wordDelimiter:u,reduceWhiteSpace:g=!0,prepareText:_}=t,p=s.getBoundingClientRect(),m=p,v=!g&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",M=0,x=e.collection,b,w,T,R,y,S,P,L,O,z,H,V,X,W,K,I,at,Mt;for(typeof u=="object"?(T=u.delimiter||u,w=u.replaceWith||""):w=u===""?"":u||" ",b=w!==" ";f<d.length;f++)if(R=d[f],R.nodeType===3){for(K=R.textContent||"",g?K=K.replace(DM," "):v&&(K=K.replace(/\n/g,w+`
`)),_&&(K=_(K,s)),R.textContent=K,y=w||T?K.split(T||w):K.match(a)||Nf,at=y[y.length-1],L=b?at.slice(-1)===" ":!at,at||y.pop(),m=p,P=b?y[0].charAt(0)===" ":!y[0],P&&Wo(" ",s,R),y[0]||y.shift(),_g(y,l),r&&c||(R.textContent=""),O=1;O<=y.length;O++)if(I=y[O-1],!g&&v&&I.charAt(0)===`
`&&((h=R.previousSibling)==null||h.remove(),Wo(document.createElement("br"),s,R),I=I.slice(1)),!g&&I==="")Wo(w,s,R);else if(I===" ")s.insertBefore(document.createTextNode(" "),R);else{if(b&&I.charAt(0)===" "&&Wo(" ",s,R),M&&O===1&&!P&&x.indexOf(M.parentNode)>-1?(S=x[x.length-1],S.appendChild(document.createTextNode(n?"":I))):(S=e(n?"":I),Wo(S,s,R),M&&O===1&&!P&&S.insertBefore(M,S.firstChild)),n)for(H=fg?_g([...fg.segment(I)].map(Zt=>Zt.segment),l):I.match(a)||Nf,Mt=0;Mt<H.length;Mt++)S.appendChild(H[Mt]===" "?document.createTextNode(" "):n(H[Mt]));if(r&&c){if(K=R.textContent=K.substring(I.length+1,K.length),z=S.getBoundingClientRect(),z.top>m.top&&z.left<=m.left){for(V=s.cloneNode(),X=s.childNodes[0];X&&X!==S;)W=X,X=X.nextSibling,V.appendChild(W);s.parentNode.insertBefore(V,s),i&&xg(V)}m=z}(O<y.length||L)&&Wo(O>=y.length?" ":b&&I.slice(-1)===" "?" "+w:w,s,R)}s.removeChild(R),M=0}else R.nodeType===1&&(o&&o.indexOf(R)>-1?(x.indexOf(R.previousSibling)>-1&&x[x.length-1].appendChild(R),M=R):(yg(R,t,e,n,i,r,o,a,l,!0),M=0),i&&xg(R))},vg=class Mg{constructor(t,e){this.isSplit=!1,IM(),this.elements=pg(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,r=()=>{let o=n.length,a;for(;o--;){a=n[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(r,200)})},Df(this),this.split(e)}split(t){this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:r,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,h=e.indexOf("lines")>-1,d=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,u=d&&!f&&!h,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+mg.source,"gu"):mg,p=!!t.ignore&&pg(t.ignore),{orig:m,animTime:v,obs:M}=this._data,x;return(d||f||h)&&(this.elements.forEach((b,w)=>{m[w]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},n==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):n==="hidden"&&b.setAttribute("aria-hidden","true");let T=[],R=[],y=[],S=d?Uf("char",t,T):null,P=Uf("word",t,R),L,O,z,H;if(yg(b,t,P,S,u,i&&(h||u),p,_,g,!1),h){let V=$c(b.childNodes),X=LM(b,V,t,y),W,K=[],I=0,at=V.map(Zt=>Zt.nodeType===1?Zt.getBoundingClientRect():gg),Mt=gg;for(L=0;L<V.length;L++)W=V[L],W.nodeType===1&&(W.nodeName==="BR"?(K.push(W),X(I,L+1),I=L+1,Mt=at[I]):(L&&at[L].top>Mt.top&&at[L].left<=Mt.left&&(X(I,L),I=L),Mt=at[L]));I<L&&X(I,L),K.forEach(Zt=>{var Wt;return(Wt=Zt.parentNode)==null?void 0:Wt.removeChild(Zt)})}if(!f){for(L=0;L<R.length;L++)if(O=R[L],d||!O.nextSibling||O.nextSibling.nodeType!==3)if(r&&!h){for(z=document.createElement("span"),z.style.whiteSpace="nowrap";O.firstChild;)z.appendChild(O.firstChild);O.replaceWith(z)}else O.replaceWith(...O.childNodes);else H=O.nextSibling,H&&H.nodeType===3&&(H.textContent=(O.textContent||"")+(H.textContent||""),O.remove());R.length=0,b.normalize()}this.lines.push(...y),this.words.push(...R),this.chars.push(...T)}),c&&this[c]&&this.masks.push(...this[c].map(b=>{let w=b.cloneNode();return b.replaceWith(w),w.appendChild(b),b.className&&(w.className=b.className.replace(/(\b\w+\b)/g,"$1-mask")),w.style.overflow="clip",w}))),this.isSplit=!0,Go&&(a?Go.addEventListener("loadingdone",this._split):Go.status==="loading"&&console.warn("SplitText called before fonts loaded")),(x=o&&o(this))&&x.totalTime&&(this._data.anim=v?x.totalTime(v):x),h&&a&&this.elements.forEach((b,w)=>{m[w].width=b.offsetWidth,M&&M.observe(b)}),this}revert(){var t,e;let{orig:n,anim:i,obs:r}=this._data;return r&&r.disconnect(),n.forEach(({element:o,html:a,ariaL:l,ariaH:c})=>{o.innerHTML=a,l?o.setAttribute("aria-label",l):o.removeAttribute("aria-label"),c?o.setAttribute("aria-hidden",c):o.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,Go?.removeEventListener("loadingdone",this._split),i&&(this._data.animTime=i.totalTime(),i.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this),this}static create(t,e){return new Mg(t,e)}static register(t){sl=sl||t||window.gsap,sl&&($c=sl.utils.toArray,Df=sl.core.context||Df),!Lf&&window.innerWidth>0&&(Go=document.fonts,Lf=!0)}};vg.version="3.13.0";var Xo=vg;var $g=0,Mp=1,Jg=2;var Sp=1,Kg=2,_s=3,zs=0,Rn=1,pn=2,Xs=0,so=1,co=2,bp=3,wp=4,Qg=5,Mr=100,jg=101,t_=102,e_=103,n_=104,i_=200,s_=201,r_=202,o_=203,Mh=204,Sh=205,a_=206,l_=207,c_=208,h_=209,u_=210,d_=211,f_=212,p_=213,m_=214,Jh=0,Kh=1,Qh=2,ro=3,jh=4,tu=5,eu=6,nu=7,Ep=0,g_=1,__=2,qs=0,x_=1,y_=2,v_=3,M_=4,S_=5,b_=6,iu=7;var Tp=300,ho=301,uo=302,su=303,ru=304,Zl=306,oa=1e3,vr=1001,bh=1002,ai=1003,w_=1004;var $l=1005;var ji=1006,ou=1007;var xs=1008;var ns=1009,Ap=1010,Rp=1011,ga=1012,au=1013,Er=1014,is=1015,_a=1016,lu=1017,cu=1018,xa=1020,Cp=35902,Pp=35899,Ip=1021,Dp=1022,Wi=1023,aa=1026,ya=1027,hu=1028,uu=1029,Lp=1030,du=1031;var fu=1033,Jl=33776,Kl=33777,Ql=33778,jl=33779,pu=35840,mu=35841,gu=35842,_u=35843,xu=36196,yu=37492,vu=37496,Mu=37808,Su=37809,bu=37810,wu=37811,Eu=37812,Tu=37813,Au=37814,Ru=37815,Cu=37816,Pu=37817,Iu=37818,Du=37819,Lu=37820,Nu=37821,Uu=36492,Fu=36494,Ou=36495,Bu=36283,ku=36284,zu=36285,Hu=36286;var ml=2300,wh=2301,vh=2302,cp=2400,hp=2401,up=2402;var E_=3200,T_=3201;var Np=0,A_=1,Ys="",An="srgb",oo="srgb-linear",gl="linear",Te="srgb";var io=7680;var dp=519,R_=512,C_=513,P_=514,Up=515,I_=516,D_=517,L_=518,N_=519,fp=35044;var Fp="300 es",Qi=2e3,_l=2001;var Hs=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ff=Math.PI/180,Eh=180/Math.PI;function va(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function ue(s,t,e){return Math.max(t,Math.min(e,s))}function NM(s,t){return(s%t+t)%t}function Of(s,t,e){return(1-e)*s+e*t}function rl(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var lt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},li=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],f=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==u||h!==g){let p=1-a,m=l*f+c*u+h*g+d*_,v=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let b=Math.sqrt(M),w=Math.atan2(b,m*v);p=Math.sin(p*w)/b,a=Math.sin(a*w)/b}let x=a*v;if(l=l*p+f*x,c=c*p+u*x,h=h*p+g*x,d=d*p+_*x,p===1-a){let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*u-c*f,t[e+1]=l*g+h*f+c*d-a*u,t[e+2]=c*g+h*u+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),f=l(n/2),u=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-i)*u}else if(n>a&&n>d){let u=2*Math.sqrt(1+n-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-n-d);this._w=(r-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-a);this._w=(o-i)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bf.copy(this).projectOnVector(t),this.sub(Bf)}reflect(t){return this.sub(Bf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bf=new U,Sg=new li,se=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],_=i[0],p=i[3],m=i[6],v=i[1],M=i[4],x=i[7],b=i[2],w=i[5],T=i[8];return r[0]=o*_+a*v+l*b,r[3]=o*p+a*M+l*w,r[6]=o*m+a*x+l*T,r[1]=c*_+h*v+d*b,r[4]=c*p+h*M+d*w,r[7]=c*m+h*x+d*T,r[2]=f*_+u*v+g*b,r[5]=f*p+u*M+g*w,r[8]=f*m+u*x+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=e*d+n*f+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=f*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kf.makeScale(t,e)),this}rotate(t){return this.premultiply(kf.makeRotation(-t)),this}translate(t,e){return this.premultiply(kf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},kf=new se;function Op(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function U_(){let s=xl("canvas");return s.style.display="block",s}var bg={};function la(s){s in bg||(bg[s]=!0,console.warn(s))}function F_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wg=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eg=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UM(){let s={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(i.r=ra(i.r),i.g=ra(i.g),i.b=ra(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ys?gl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return la("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return la("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[oo]:{primaries:t,whitePoint:n,transfer:gl,toXYZ:wg,fromXYZ:Eg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:wg,fromXYZ:Eg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),s}var _e=UM();function ks(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ra(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var qo,Th=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qo===void 0&&(qo=xl("canvas")),qo.width=t.width,qo.height=t.height;let i=qo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=qo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ks(e[n]/255)*255):e[n]=ks(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},FM=0,ca=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zf(i[o].image)):r.push(zf(i[o]))}else r=zf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function zf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Th.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var OM=0,Hf=new U,Jn=class s extends Hs{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=vr,i=vr,r=ji,o=xs,a=Wi,l=ns,c=s.DEFAULT_ANISOTROPY,h=Ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=va(),this.name="",this.source=new ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hf).x}get height(){return this.source.getSize(Hf).y}get depth(){return this.source.getSize(Hf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oa:t.x=t.x-Math.floor(t.x);break;case vr:t.x=t.x<0?0:1;break;case bh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oa:t.y=t.y-Math.floor(t.y);break;case vr:t.y=t.y<0?0:1;break;case bh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Tp;Jn.DEFAULT_ANISOTROPY=1;var qe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,x=(u+1)/2,b=(m+1)/2,w=(h+f)/4,T=(d+_)/4,R=(g+p)/4;return M>x&&M>b?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=w/n,r=T/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=R/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=T/r,i=R/r),this.set(n,i,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ah=class extends Hs{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new Jn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:ji,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new ca(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fs=class extends Ah{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yl=class extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Rh=class extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ai,this.minFilter=ai,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ps=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($i.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($i.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=$i.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$i):$i.fromBufferAttribute(r,o),$i.applyMatrix4(t.matrixWorld),this.expandByPoint($i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jc.copy(n.boundingBox)),Jc.applyMatrix4(t.matrixWorld),this.union(Jc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$i),$i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ol),Kc.subVectors(this.max,ol),Yo.subVectors(t.a,ol),Zo.subVectors(t.b,ol),$o.subVectors(t.c,ol),fr.subVectors(Zo,Yo),pr.subVectors($o,Zo),jr.subVectors(Yo,$o);let e=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-jr.z,jr.y,fr.z,0,-fr.x,pr.z,0,-pr.x,jr.z,0,-jr.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-jr.y,jr.x,0];return!Vf(e,Yo,Zo,$o,Kc)||(e=[1,0,0,0,1,0,0,0,1],!Vf(e,Yo,Zo,$o,Kc))?!1:(Qc.crossVectors(fr,pr),e=[Qc.x,Qc.y,Qc.z],Vf(e,Yo,Zo,$o,Kc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ns),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ns=[new U,new U,new U,new U,new U,new U,new U,new U],$i=new U,Jc=new ps,Yo=new U,Zo=new U,$o=new U,fr=new U,pr=new U,jr=new U,ol=new U,Kc=new U,Qc=new U,to=new U;function Vf(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){to.fromArray(s,r);let a=i.x*Math.abs(to.x)+i.y*Math.abs(to.y)+i.z*Math.abs(to.z),l=t.dot(to),c=e.dot(to),h=n.dot(to);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var BM=new ps,al=new U,Gf=new U,Vs=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):BM.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;al.subVectors(t,this.center);let e=al.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(al,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(al.copy(t.center).add(Gf)),this.expandByPoint(al.copy(t.center).sub(Gf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Us=new U,Wf=new U,jc=new U,mr=new U,Xf=new U,th=new U,qf=new U,vl=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Us)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Us.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Us.copy(this.origin).addScaledVector(this.direction,e),Us.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wf.copy(t).add(e).multiplyScalar(.5),jc.copy(e).sub(t).normalize(),mr.copy(this.origin).sub(Wf);let r=t.distanceTo(e)*.5,o=-this.direction.dot(jc),a=mr.dot(this.direction),l=-mr.dot(jc),c=mr.lengthSq(),h=Math.abs(1-o*o),d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Wf).addScaledVector(jc,f),u}intersectSphere(t,e){Us.subVectors(t.center,this.origin);let n=Us.dot(this.direction),i=Us.dot(Us)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Us)!==null}intersectTriangle(t,e,n,i,r){Xf.subVectors(e,t),th.subVectors(n,t),qf.crossVectors(Xf,th);let o=this.direction.dot(qf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mr.subVectors(this.origin,t);let l=a*this.direction.dot(th.crossVectors(mr,th));if(l<0)return null;let c=a*this.direction.dot(Xf.cross(mr));if(c<0||l+c>o)return null;let h=-a*mr.dot(qf);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class s{constructor(t,e,n,i,r,o,a,l,c,h,d,f,u,g,_,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,f,u,g,_,p)}set(t,e,n,i,r,o,a,l,c,h,d,f,u,g,_,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Jo.setFromMatrixColumn(t,0).length(),r=1/Jo.setFromMatrixColumn(t,1).length(),o=1/Jo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=u+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+u*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,u=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-u,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=u*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,u=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,u=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-u,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=u*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+u,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=u*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,u=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=u*d-g,e[2]=g*d-u,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kM,t,zM)}lookAt(t,e,n){let i=this.elements;return Si.subVectors(t,e),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),gr.crossVectors(n,Si),gr.lengthSq()===0&&(Math.abs(n.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),gr.crossVectors(n,Si)),gr.normalize(),eh.crossVectors(Si,gr),i[0]=gr.x,i[4]=eh.x,i[8]=Si.x,i[1]=gr.y,i[5]=eh.y,i[9]=Si.y,i[2]=gr.z,i[6]=eh.z,i[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],M=n[7],x=n[11],b=n[15],w=i[0],T=i[4],R=i[8],y=i[12],S=i[1],P=i[5],L=i[9],O=i[13],z=i[2],H=i[6],V=i[10],X=i[14],W=i[3],K=i[7],I=i[11],at=i[15];return r[0]=o*w+a*S+l*z+c*W,r[4]=o*T+a*P+l*H+c*K,r[8]=o*R+a*L+l*V+c*I,r[12]=o*y+a*O+l*X+c*at,r[1]=h*w+d*S+f*z+u*W,r[5]=h*T+d*P+f*H+u*K,r[9]=h*R+d*L+f*V+u*I,r[13]=h*y+d*O+f*X+u*at,r[2]=g*w+_*S+p*z+m*W,r[6]=g*T+_*P+p*H+m*K,r[10]=g*R+_*L+p*V+m*I,r[14]=g*y+_*O+p*X+m*at,r[3]=v*w+M*S+x*z+b*W,r[7]=v*T+M*P+x*H+b*K,r[11]=v*R+M*L+x*V+b*I,r[15]=v*y+M*O+x*X+b*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*d-i*c*d-r*a*f+n*c*f+i*a*u-n*l*u)+_*(+e*l*u-e*c*f+r*o*f-i*o*u+i*c*h-r*l*h)+p*(+e*c*d-e*a*u-r*o*d+n*o*u+r*a*h-n*c*h)+m*(-i*a*h-e*l*d+e*a*f+i*o*d-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=d*p*c-_*f*c+_*l*u-a*p*u-d*l*m+a*f*m,M=g*f*c-h*p*c-g*l*u+o*p*u+h*l*m-o*f*m,x=h*_*c-g*d*c+g*a*u-o*_*u-h*a*m+o*d*m,b=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,w=e*v+n*M+i*x+r*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=v*T,t[1]=(_*f*r-d*p*r-_*i*u+n*p*u+d*i*m-n*f*m)*T,t[2]=(a*p*r-_*l*r+_*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(d*l*r-a*f*r-d*i*c+n*f*c+a*i*u-n*l*u)*T,t[4]=M*T,t[5]=(h*p*r-g*f*r+g*i*u-e*p*u-h*i*m+e*f*m)*T,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*u+e*l*u)*T,t[8]=x*T,t[9]=(g*d*r-h*_*r-g*n*u+e*_*u+h*n*m-e*d*m)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*m+e*a*m)*T,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*u-e*a*u)*T,t[12]=b*T,t[13]=(h*_*i-g*d*i+g*n*f-e*_*f-h*n*p+e*d*p)*T,t[14]=(g*a*i-o*_*i-g*n*l+e*_*l+o*n*p-e*a*p)*T,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,_=o*h,p=o*d,m=a*d,v=l*c,M=l*h,x=l*d,b=n.x,w=n.y,T=n.z;return i[0]=(1-(_+m))*b,i[1]=(u+x)*b,i[2]=(g-M)*b,i[3]=0,i[4]=(u-x)*w,i[5]=(1-(f+m))*w,i[6]=(p+v)*w,i[7]=0,i[8]=(g+M)*T,i[9]=(p-v)*T,i[10]=(1-(f+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Jo.set(i[0],i[1],i[2]).length(),o=Jo.set(i[4],i[5],i[6]).length(),a=Jo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ji.copy(this);let c=1/r,h=1/o,d=1/a;return Ji.elements[0]*=c,Ji.elements[1]*=c,Ji.elements[2]*=c,Ji.elements[4]*=h,Ji.elements[5]*=h,Ji.elements[6]*=h,Ji.elements[8]*=d,Ji.elements[9]*=d,Ji.elements[10]*=d,e.setFromRotationMatrix(Ji),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Qi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Qi)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_l)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Qi,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Qi)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===_l)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Jo=new U,Ji=new Ae,kM=new U(0,0,0),zM=new U(1,1,1),gr=new U,eh=new U,Si=new U,Tg=new Ae,Ag=new li,ci=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Tg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ag.setFromEuler(this),this.setFromQuaternion(Ag,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Ml=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},HM=0,Rg=new U,Ko=new li,Fs=new Ae,nh=new U,ll=new U,VM=new U,GM=new li,Cg=new U(1,0,0),Pg=new U(0,1,0),Ig=new U(0,0,1),Dg={type:"added"},WM={type:"removed"},Qo={type:"childadded",child:null},Yf={type:"childremoved",child:null},fn=class s extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new U,e=new ci,n=new li,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new se}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ko.setFromAxisAngle(t,e),this.quaternion.multiply(Ko),this}rotateOnWorldAxis(t,e){return Ko.setFromAxisAngle(t,e),this.quaternion.premultiply(Ko),this}rotateX(t){return this.rotateOnAxis(Cg,t)}rotateY(t){return this.rotateOnAxis(Pg,t)}rotateZ(t){return this.rotateOnAxis(Ig,t)}translateOnAxis(t,e){return Rg.copy(t).applyQuaternion(this.quaternion),this.position.add(Rg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cg,t)}translateY(t){return this.translateOnAxis(Pg,t)}translateZ(t){return this.translateOnAxis(Ig,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nh.copy(t):nh.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fs.lookAt(ll,nh,this.up):Fs.lookAt(nh,ll,this.up),this.quaternion.setFromRotationMatrix(Fs),i&&(Fs.extractRotation(i.matrixWorld),Ko.setFromRotationMatrix(Fs),this.quaternion.premultiply(Ko.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Dg),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(WM),Yf.child=t,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Dg),Qo.child=t,this.dispatchEvent(Qo),Qo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,t,VM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ll,GM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};fn.DEFAULT_UP=new U(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ki=new U,Os=new U,Zf=new U,Bs=new U,jo=new U,ta=new U,Lg=new U,$f=new U,Jf=new U,Kf=new U,Qf=new qe,jf=new qe,tp=new qe,yr=class s{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ki.subVectors(t,e),i.cross(Ki);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ki.subVectors(i,e),Os.subVectors(n,e),Zf.subVectors(t,e);let o=Ki.dot(Ki),a=Ki.dot(Os),l=Ki.dot(Zf),c=Os.dot(Os),h=Os.dot(Zf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bs)===null?!1:Bs.x>=0&&Bs.y>=0&&Bs.x+Bs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bs.x),l.addScaledVector(o,Bs.y),l.addScaledVector(a,Bs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Qf.setScalar(0),jf.setScalar(0),tp.setScalar(0),Qf.fromBufferAttribute(t,e),jf.fromBufferAttribute(t,n),tp.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Qf,r.x),o.addScaledVector(jf,r.y),o.addScaledVector(tp,r.z),o}static isFrontFacing(t,e,n,i){return Ki.subVectors(n,e),Os.subVectors(t,e),Ki.cross(Os).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ki.subVectors(this.c,this.b),Os.subVectors(this.a,this.b),Ki.cross(Os).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;jo.subVectors(i,n),ta.subVectors(r,n),$f.subVectors(t,n);let l=jo.dot($f),c=ta.dot($f);if(l<=0&&c<=0)return e.copy(n);Jf.subVectors(t,i);let h=jo.dot(Jf),d=ta.dot(Jf);if(h>=0&&d<=h)return e.copy(i);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(jo,o);Kf.subVectors(t,r);let u=jo.dot(Kf),g=ta.dot(Kf);if(g>=0&&u<=g)return e.copy(r);let _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ta,a);let p=h*g-u*d;if(p<=0&&d-h>=0&&u-g>=0)return Lg.subVectors(r,i),a=(d-h)/(d-h+(u-g)),e.copy(i).addScaledVector(Lg,a);let m=1/(p+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(jo,o).addScaledVector(ta,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},O_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_r={h:0,s:0,l:0},ih={h:0,s:0,l:0};function ep(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=_e.workingColorSpace){if(t=NM(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ep(o,r,t+1/3),this.g=ep(o,r,t),this.b=ep(o,r,t-1/3)}return _e.colorSpaceToWorking(this,i),this}setStyle(t,e=An){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let n=O_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return _e.workingToColorSpace(Fn.copy(this),t),Math.round(ue(Fn.r*255,0,255))*65536+Math.round(ue(Fn.g*255,0,255))*256+Math.round(ue(Fn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace(Fn.copy(this),e);let n=Fn.r,i=Fn.g,r=Fn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=An){_e.workingToColorSpace(Fn.copy(this),t);let e=Fn.r,n=Fn.g,i=Fn.b;return t!==An?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_r),this.setHSL(_r.h+t,_r.s+e,_r.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_r),t.getHSL(ih);let n=Of(_r.h,ih.h,e),i=Of(_r.s,ih.s,e),r=Of(_r.l,ih.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Bt;Bt.NAMES=O_;var XM=0,Gs=class extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=va(),this.name="",this.type="Material",this.blending=so,this.side=zs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mh,this.blendDst=Sh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==so&&(n.blending=this.blending),this.side!==zs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mh&&(n.blendSrc=this.blendSrc),this.blendDst!==Sh&&(n.blendDst=this.blendDst),this.blendEquation!==Mr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==io&&(n.stencilFail=this.stencilFail),this.stencilZFail!==io&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==io&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},tn=class extends Gs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var cn=new U,sh=new lt,qM=0,Oe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fp,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sh.fromBufferAttribute(this,e),sh.applyMatrix3(t),this.setXY(e,sh.x,sh.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix3(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=rl(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rl(e,this.array)),e}setX(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rl(e,this.array)),e}setY(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rl(e,this.array)),e}setZ(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rl(e,this.array)),e}setW(t,e){return this.normalized&&(e=oi(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),i=oi(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=oi(e,this.array),n=oi(n,this.array),i=oi(i,this.array),r=oi(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fp&&(t.usage=this.usage),t}};var Sl=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var bl=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},YM=0,Vi=new Ae,np=new fn,ea=new U,bi=new ps,cl=new ps,vn=new U,Ye=class s extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Op(t)?bl:Sl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vi.makeRotationFromQuaternion(t),this.applyMatrix4(Vi),this}rotateX(t){return Vi.makeRotationX(t),this.applyMatrix4(Vi),this}rotateY(t){return Vi.makeRotationY(t),this.applyMatrix4(Vi),this}rotateZ(t){return Vi.makeRotationZ(t),this.applyMatrix4(Vi),this}translate(t,e,n){return Vi.makeTranslation(t,e,n),this.applyMatrix4(Vi),this}scale(t,e,n){return Vi.makeScale(t,e,n),this.applyMatrix4(Vi),this}lookAt(t){return np.lookAt(t),np.updateMatrix(),this.applyMatrix4(np.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];cl.setFromBufferAttribute(a),this.morphTargetsRelative?(vn.addVectors(bi.min,cl.min),bi.expandByPoint(vn),vn.addVectors(bi.max,cl.max),bi.expandByPoint(vn)):(bi.expandByPoint(cl.min),bi.expandByPoint(cl.max))}bi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)vn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(vn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)vn.fromBufferAttribute(a,c),l&&(ea.fromBufferAttribute(t,c),vn.add(ea)),i=Math.max(i,n.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let c=new U,h=new U,d=new U,f=new lt,u=new lt,g=new lt,_=new U,p=new U;function m(R,y,S){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,S),f.fromBufferAttribute(r,R),u.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),h.sub(c),d.sub(c),u.sub(f),g.sub(f);let P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(P),p.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(P),a[R].add(_),a[y].add(_),a[S].add(_),l[R].add(p),l[y].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,y=v.length;R<y;++R){let S=v[R],P=S.start,L=S.count;for(let O=P,z=P+L;O<z;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let M=new U,x=new U,b=new U,w=new U;function T(R){b.fromBufferAttribute(i,R),w.copy(b);let y=a[R];M.copy(y),M.sub(b.multiplyScalar(b.dot(y))).normalize(),x.crossVectors(w,y);let P=x.dot(l[R])<0?-1:1;o.setXYZW(R,M.x,M.y,M.z,P)}for(let R=0,y=v.length;R<y;++R){let S=v[R],P=S.start,L=S.count;for(let O=P,z=P+L;O<z;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let f=0,u=t.count;f<u;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)vn.fromBufferAttribute(t,e),vn.normalize(),t.setXYZ(e,vn.x,vn.y,vn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let m=0;m<h;m++)f[g++]=c[u++]}return new Oe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=t(f,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ng=new Ae,eo=new vl,rh=new Vs,Ug=new U,oh=new U,ah=new U,lh=new U,ip=new U,ch=new U,Fg=new U,hh=new U,Tt=class extends fn{constructor(t=new Ye,e=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){ch.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ip.fromBufferAttribute(d,t),o?ch.addScaledVector(ip,h):ch.addScaledVector(ip.sub(e),h))}e.add(ch)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rh.copy(n.boundingSphere),rh.applyMatrix4(r),eo.copy(t.ray).recast(t.near),!(rh.containsPoint(eo.origin)===!1&&(eo.intersectSphere(rh,Ug)===null||eo.origin.distanceToSquared(Ug)>(t.far-t.near)**2))&&(Ng.copy(r).invert(),eo.copy(t.ray).applyMatrix4(Ng),!(n.boundingBox!==null&&eo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,eo)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,u.start),M=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let x=v,b=M;x<b;x+=3){let w=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=uh(this,m,t,n,c,h,d,w,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){let v=a.getX(p),M=a.getX(p+1),x=a.getX(p+2);i=uh(this,o,t,n,c,h,d,v,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],m=o[p.materialIndex],v=Math.max(p.start,u.start),M=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let x=v,b=M;x<b;x+=3){let w=x,T=x+1,R=x+2;i=uh(this,m,t,n,c,h,d,w,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{let g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,m=_;p<m;p+=3){let v=p,M=p+1,x=p+2;i=uh(this,o,t,n,c,h,d,v,M,x),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function ZM(s,t,e,n,i,r,o,a){let l;if(t.side===Rn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===zs,a),l===null)return null;hh.copy(a),hh.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(hh);return c<e.near||c>e.far?null:{distance:c,point:hh.clone(),object:s}}function uh(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,oh),s.getVertexPosition(l,ah),s.getVertexPosition(c,lh);let h=ZM(s,t,e,n,oh,ah,lh,Fg);if(h){let d=new U;yr.getBarycoord(Fg,oh,ah,lh,d),i&&(h.uv=yr.getInterpolatedAttribute(i,a,l,c,d,new lt)),r&&(h.uv1=yr.getInterpolatedAttribute(r,a,l,c,d,new lt)),o&&(h.normal=yr.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};yr.getNormal(oh,ah,lh,f.normal),h.face=f,h.barycoord=d}return h}var Sr=class s extends Ye{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function g(_,p,m,v,M,x,b,w,T,R,y){let S=x/T,P=b/R,L=x/2,O=b/2,z=w/2,H=T+1,V=R+1,X=0,W=0,K=new U;for(let I=0;I<V;I++){let at=I*P-O;for(let Mt=0;Mt<H;Mt++){let Zt=Mt*S-L;K[_]=Zt*v,K[p]=at*M,K[m]=z,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=w>0?1:-1,h.push(K.x,K.y,K.z),d.push(Mt/T),d.push(1-I/R),X+=1}}for(let I=0;I<R;I++)for(let at=0;at<T;at++){let Mt=f+at+H*I,Zt=f+at+H*(I+1),Wt=f+(at+1)+H*(I+1),Kt=f+(at+1)+H*I;l.push(Mt,Zt,Kt),l.push(Zt,Wt,Kt),W+=6}a.addGroup(u,W,y),u+=W,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fo(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function On(s){let t={};for(let e=0;e<s.length;e++){let n=fo(s[e]);for(let i in n)t[i]=n[i]}return t}function $M(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bp(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var B_={clone:fo,merge:On},JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kn=class extends Gs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=KM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fo(t.uniforms),this.uniformsGroups=$M(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},wl=class extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xr=new U,Og=new lt,Bg=new lt,Mn=class extends wl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Eh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Eh*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xr.x,xr.y).multiplyScalar(-t/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-t/xr.z)}getViewSize(t,e){return this.getViewBounds(t,Og,Bg),e.subVectors(Bg,Og)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ff*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},na=-90,ia=1,Ch=class extends fn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Mn(na,ia,t,e);i.layers=this.layers,this.add(i);let r=new Mn(na,ia,t,e);r.layers=this.layers,this.add(r);let o=new Mn(na,ia,t,e);o.layers=this.layers,this.add(o);let a=new Mn(na,ia,t,e);a.layers=this.layers,this.add(a);let l=new Mn(na,ia,t,e);l.layers=this.layers,this.add(l);let c=new Mn(na,ia,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_l)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},El=class extends Jn{constructor(t=[],e=ho,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ph=class extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Sr(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:fo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:Xs});r.uniforms.tEquirect.value=e;let o=new Tt(i,r),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=ji),new Ch(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ie=class extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}},QM={type:"move"},ha=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ms=class extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ih=class extends Jn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=ai,h=ai,d,f){super(null,o,a,l,c,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tl=class extends Oe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},sa=new Ae,kg=new Ae,dh=[],zg=new ps,jM=new Ae,hl=new Tt,ul=new Vs,Al=class extends Tt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,jM)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sa),zg.copy(t.boundingBox).applyMatrix4(sa),this.boundingBox.union(zg)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,sa),ul.copy(t.boundingSphere).applyMatrix4(sa),this.boundingSphere.union(ul)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(hl.geometry=this.geometry,hl.material=this.material,hl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ul.copy(this.boundingSphere),ul.applyMatrix4(n),t.ray.intersectsSphere(ul)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,sa),kg.multiplyMatrices(n,sa),hl.matrixWorld=kg,hl.raycast(t,dh);for(let o=0,a=dh.length;o<a;o++){let l=dh[o];l.instanceId=r,l.object=this,e.push(l)}dh.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ih(new Float32Array(i*this.count),i,this.count,hu,is));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},sp=new U,tS=new U,eS=new se,us=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=sp.subVectors(n,e).cross(tS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(sp),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||eS.getNormalMatrix(t),i=this.coplanarPoint(sp).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},no=new Vs,nS=new lt(.5,.5),fh=new U,ua=class{constructor(t=new us,e=new us,n=new us,i=new us,r=new us,o=new us){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qi,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],_=r[9],p=r[10],m=r[11],v=r[12],M=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,u-h,m-g,b-v).normalize(),i[1].setComponents(c+o,u+h,m+g,b+v).normalize(),i[2].setComponents(c+a,u+d,m+_,b+M).normalize(),i[3].setComponents(c-a,u-d,m-_,b-M).normalize(),n)i[4].setComponents(l,f,p,x).normalize(),i[5].setComponents(c-l,u-f,m-p,b-x).normalize();else if(i[4].setComponents(c-l,u-f,m-p,b-x).normalize(),e===Qi)i[5].setComponents(c+l,u+f,m+p,b+x).normalize();else if(e===_l)i[5].setComponents(l,f,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),no.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),no.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(no)}intersectsSprite(t){no.center.set(0,0,0);let e=nS.distanceTo(t.center);return no.radius=.7071067811865476+e,no.applyMatrix4(t.matrixWorld),this.intersectsSphere(no)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(fh.x=i.normal.x>0?t.max.x:t.min.x,fh.y=i.normal.y>0?t.max.y:t.min.y,fh.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(fh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Dh=class extends Gs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hg=new Ae,pp=new vl,ph=new Vs,mh=new U,Rl=class extends fn{constructor(t=new Ye,e=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ph.copy(n.boundingSphere),ph.applyMatrix4(i),ph.radius+=r,t.ray.intersectsSphere(ph)===!1)return;Hg.copy(i).invert(),pp.copy(t.ray).applyMatrix4(Hg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let g=f,_=u;g<_;g++){let p=c.getX(g);mh.fromBufferAttribute(d,p),Vg(mh,p,l,i,t,e,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let g=f,_=u;g<_;g++)mh.fromBufferAttribute(d,g),Vg(mh,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vg(s,t,e,n,i,r,o){let a=pp.distanceSqToPoint(s);if(a<e){let l=new U;pp.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Cl=class extends Jn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pl=class extends Jn{constructor(t,e,n=Er,i,r,o,a=ai,l=ai,c,h=aa,d=1){if(h!==aa&&h!==ya)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ca(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Il=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Dl=class s extends Ye{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new U,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=n+d/e*i;c.x=t*Math.cos(u),c.y=t*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("normal",new pe(a,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Gi=class s extends Ye{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,_=[],p=n/2,m=0;v(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(u,2));function v(){let x=new U,b=new U,w=0,T=(e-t)/n;for(let R=0;R<=r;R++){let y=[],S=R/r,P=S*(e-t)+t;for(let L=0;L<=i;L++){let O=L/i,z=O*l+a,H=Math.sin(z),V=Math.cos(z);b.x=P*H,b.y=-S*n+p,b.z=P*V,d.push(b.x,b.y,b.z),x.set(H,T,V).normalize(),f.push(x.x,x.y,x.z),u.push(O,1-S),y.push(g++)}_.push(y)}for(let R=0;R<i;R++)for(let y=0;y<r;y++){let S=_[y][R],P=_[y+1][R],L=_[y+1][R+1],O=_[y][R+1];(t>0||y!==0)&&(h.push(S,P,O),w+=3),(e>0||y!==r-1)&&(h.push(P,L,O),w+=3)}c.addGroup(m,w,0),m+=w}function M(x){let b=g,w=new lt,T=new U,R=0,y=x===!0?t:e,S=x===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,p*S,0),f.push(0,S,0),u.push(.5,.5),g++;let P=g;for(let L=0;L<=i;L++){let z=L/i*l+a,H=Math.cos(z),V=Math.sin(z);T.x=y*V,T.y=p*S,T.z=y*H,d.push(T.x,T.y,T.z),f.push(0,S,0),w.x=H*.5+.5,w.y=V*.5*S+.5,u.push(w.x,w.y),g++}for(let L=0;L<i;L++){let O=b+L,z=P+L;x===!0?h.push(z,z+1,O):h.push(z+1,z,O),R+=3}c.addGroup(m,R,x===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(o-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new lt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],r=[],o=[],a=new U,l=new Ae;for(let u=0;u<=t;u++){let g=u/t;i[u]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ue(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(ue(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],u*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},da=class extends wi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Lh=class extends da{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kp(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,i(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var gh=new U,rp=new kp,op=new kp,ap=new kp,fa=class extends wi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(gh.subVectors(i[0],i[1]).add(i[0]),c=gh);let d=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(gh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=gh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),p=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),rp.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,_,p),op.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,_,p),ap.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(rp.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),op.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ap.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(rp.calc(l),op.calc(l),ap.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Gg(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function iS(s,t){let e=1-s;return e*e*t}function sS(s,t){return 2*(1-s)*s*t}function rS(s,t){return s*s*t}function fl(s,t,e,n){return iS(s,t)+sS(s,e)+rS(s,n)}function oS(s,t){let e=1-s;return e*e*e*t}function aS(s,t){let e=1-s;return 3*e*e*s*t}function lS(s,t){return 3*(1-s)*s*s*t}function cS(s,t){return s*s*s*t}function pl(s,t,e,n,i){return oS(s,t)+aS(s,e)+lS(s,n)+cS(s,i)}var Ll=class extends wi{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pl(t,i.x,r.x,o.x,a.x),pl(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nh=class extends wi{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(pl(t,i.x,r.x,o.x,a.x),pl(t,i.y,r.y,o.y,a.y),pl(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Nl=class extends wi{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Uh=class extends wi{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends wi{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(fl(t,i.x,r.x,o.x),fl(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fl=class extends wi{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(fl(t,i.x,r.x,o.x),fl(t,i.y,r.y,o.y),fl(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ol=class extends wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Gg(a,l.x,c.x,h.x,d.x),Gg(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new lt().fromArray(i))}return this}},Fh=Object.freeze({__proto__:null,ArcCurve:Lh,CatmullRomCurve3:fa,CubicBezierCurve:Ll,CubicBezierCurve3:Nh,EllipseCurve:da,LineCurve:Nl,LineCurve3:Uh,QuadraticBezierCurve:Ul,QuadraticBezierCurve3:Fl,SplineCurve:Ol}),Oh=class extends wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fh[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Fh[i.type]().fromJSON(i))}return this}},Bl=class extends Oh{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Nl(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Ul(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Ll(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ol(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new da(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ws=class extends Bl{constructor(t){super(t),this.uuid=va(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Bl().fromJSON(i))}return this}};function hS(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=k_(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=mS(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=e;f<i;f+=e){let u=s[f],g=s[f+1];u<a&&(a=u),g<l&&(l=g),u>h&&(h=u),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return kl(r,o,e,a,l,c,0),o}function k_(s,t,e,n,i){let r;if(i===TS(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wg(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wg(o/n|0,s[o],s[o+1],r);return r&&pa(r,r.next)&&(Hl(r),r=r.next),r}function ao(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(pa(e,e.next)||Xe(e.prev,e,e.next)===0)){if(Hl(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&vS(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?dS(s,n,i,r):uS(s)){t.push(l.i,s.i,c.i),Hl(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=fS(ao(s),t),kl(s,t,e,n,i,r,2)):o===2&&pS(s,t,e,n,i,r):kl(ao(s),t,e,n,i,r,1);break}}}function uS(s){let t=s.prev,e=s,n=s.next;if(Xe(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),f=Math.max(i,r,o),u=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=u&&dl(i,a,r,l,o,c,g.x,g.y)&&Xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dS(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Xe(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,f=o.y,u=Math.min(a,l,c),g=Math.min(h,d,f),_=Math.max(a,l,c),p=Math.max(h,d,f),m=mp(u,g,t,e,n),v=mp(_,p,t,e,n),M=s.prevZ,x=s.nextZ;for(;M&&M.z>=m&&x&&x.z<=v;){if(M.x>=u&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&dl(a,h,l,d,c,f,M.x,M.y)&&Xe(M.prev,M,M.next)>=0||(M=M.prevZ,x.x>=u&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&dl(a,h,l,d,c,f,x.x,x.y)&&Xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;M&&M.z>=m;){if(M.x>=u&&M.x<=_&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&dl(a,h,l,d,c,f,M.x,M.y)&&Xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;x&&x.z<=v;){if(x.x>=u&&x.x<=_&&x.y>=g&&x.y<=p&&x!==i&&x!==o&&dl(a,h,l,d,c,f,x.x,x.y)&&Xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function fS(s,t){let e=s;do{let n=e.prev,i=e.next.next;!pa(n,i)&&H_(n,e,e.next,i)&&zl(n,i)&&zl(i,n)&&(t.push(n.i,e.i,i.i),Hl(e),Hl(e.next),e=s=i),e=e.next}while(e!==s);return ao(e)}function pS(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&bS(o,a)){let l=V_(o,a);o=ao(o,o.next),l=ao(l,l.next),kl(o,t,e,n,i,r,0),kl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function mS(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=k_(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(SS(c))}i.sort(gS);for(let r=0;r<i.length;r++)e=_S(i[r],e);return e}function gS(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function _S(s,t){let e=xS(s,t);if(!e)return t;let n=V_(e,s);return ao(n,n.next),ao(e,e.next)}function xS(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(pa(s,e))return e;do{if(pa(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&z_(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);zl(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&yS(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function yS(s,t){return Xe(s.prev,s,t.prev)<0&&Xe(t.next,s,s.next)<0}function vS(s,t,e,n){let i=s;do i.z===0&&(i.z=mp(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,MS(i)}function MS(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function mp(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function SS(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function z_(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function dl(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&z_(s,t,e,n,i,r,o,a)}function bS(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!wS(s,t)&&(zl(s,t)&&zl(t,s)&&ES(s,t)&&(Xe(s.prev,s,t.prev)||Xe(s,t.prev,t))||pa(s,t)&&Xe(s.prev,s,s.next)>0&&Xe(t.prev,t,t.next)>0)}function Xe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function pa(s,t){return s.x===t.x&&s.y===t.y}function H_(s,t,e,n){let i=xh(Xe(s,t,e)),r=xh(Xe(s,t,n)),o=xh(Xe(e,n,s)),a=xh(Xe(e,n,t));return!!(i!==r&&o!==a||i===0&&_h(s,e,t)||r===0&&_h(s,n,t)||o===0&&_h(e,s,n)||a===0&&_h(e,t,n))}function _h(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function xh(s){return s>0?1:s<0?-1:0}function wS(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&H_(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function zl(s,t){return Xe(s.prev,s,s.next)<0?Xe(s,t,s.next)>=0&&Xe(s,s.prev,t)>=0:Xe(s,t,s.prev)<0||Xe(s,s.next,t)<0}function ES(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function V_(s,t){let e=gp(s.i,s.x,s.y),n=gp(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wg(s,t,e,n){let i=gp(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Hl(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function gp(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function TS(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var _p=class{static triangulate(t,e,n=2){return hS(t,e,n)}},ds=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Xg(t),qg(n,t);let o=t.length;e.forEach(Xg);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,qg(n,e[l]);let a=_p.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Xg(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function qg(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var ma=class s extends Ye{constructor(t=new Ws([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:AS,M,x=!1,b,w,T,R;m&&(M=m.getSpacedPoints(h),x=!0,f=!1,b=m.computeFrenetFrames(h,!1),w=new U,T=new U,R=new U),f||(p=0,u=0,g=0,_=0);let y=a.extractPoints(c),S=y.shape,P=y.holes;if(!ds.isClockWise(S)){S=S.reverse();for(let et=0,j=P.length;et<j;et++){let Q=P[et];ds.isClockWise(Q)&&(P[et]=Q.reverse())}}function O(et){let Q=10000000000000001e-36,N=et[0];for(let ut=1;ut<=et.length;ut++){let ot=ut%et.length,pt=et[ot],Dt=pt.x-N.x,Xt=pt.y-N.y,C=Dt*Dt+Xt*Xt,E=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(N.x),Math.abs(N.y)),G=Q*E*E;if(C<=G){et.splice(ot,1),ut--;continue}N=pt}}O(S),P.forEach(O);let z=P.length,H=S;for(let et=0;et<z;et++){let j=P[et];S=S.concat(j)}function V(et,j,Q){return j||console.error("THREE.ExtrudeGeometry: vec does not exist"),et.clone().addScaledVector(j,Q)}let X=S.length;function W(et,j,Q){let N,ut,ot,pt=et.x-j.x,Dt=et.y-j.y,Xt=Q.x-et.x,C=Q.y-et.y,E=pt*pt+Dt*Dt,G=pt*C-Dt*Xt;if(Math.abs(G)>Number.EPSILON){let Z=Math.sqrt(E),tt=Math.sqrt(Xt*Xt+C*C),$=j.x-Dt/Z,Rt=j.y+pt/Z,dt=Q.x-C/tt,Lt=Q.y+Xt/tt,_t=((dt-$)*C-(Lt-Rt)*Xt)/(pt*C-Dt*Xt);N=$+pt*_t-et.x,ut=Rt+Dt*_t-et.y;let ct=N*N+ut*ut;if(ct<=2)return new lt(N,ut);ot=Math.sqrt(ct/2)}else{let Z=!1;pt>Number.EPSILON?Xt>Number.EPSILON&&(Z=!0):pt<-Number.EPSILON?Xt<-Number.EPSILON&&(Z=!0):Math.sign(Dt)===Math.sign(C)&&(Z=!0),Z?(N=-Dt,ut=pt,ot=Math.sqrt(E)):(N=pt,ut=Dt,ot=Math.sqrt(E/2))}return new lt(N/ot,ut/ot)}let K=[];for(let et=0,j=H.length,Q=j-1,N=et+1;et<j;et++,Q++,N++)Q===j&&(Q=0),N===j&&(N=0),K[et]=W(H[et],H[Q],H[N]);let I=[],at,Mt=K.concat();for(let et=0,j=z;et<j;et++){let Q=P[et];at=[];for(let N=0,ut=Q.length,ot=ut-1,pt=N+1;N<ut;N++,ot++,pt++)ot===ut&&(ot=0),pt===ut&&(pt=0),at[N]=W(Q[N],Q[ot],Q[pt]);I.push(at),Mt=Mt.concat(at)}let Zt;if(p===0)Zt=ds.triangulateShape(H,P);else{let et=[],j=[];for(let Q=0;Q<p;Q++){let N=Q/p,ut=u*Math.cos(N*Math.PI/2),ot=g*Math.sin(N*Math.PI/2)+_;for(let pt=0,Dt=H.length;pt<Dt;pt++){let Xt=V(H[pt],K[pt],ot);At(Xt.x,Xt.y,-ut),N===0&&et.push(Xt)}for(let pt=0,Dt=z;pt<Dt;pt++){let Xt=P[pt];at=I[pt];let C=[];for(let E=0,G=Xt.length;E<G;E++){let Z=V(Xt[E],at[E],ot);At(Z.x,Z.y,-ut),N===0&&C.push(Z)}N===0&&j.push(C)}}Zt=ds.triangulateShape(et,j)}let Wt=Zt.length,Kt=g+_;for(let et=0;et<X;et++){let j=f?V(S[et],Mt[et],Kt):S[et];x?(T.copy(b.normals[0]).multiplyScalar(j.x),w.copy(b.binormals[0]).multiplyScalar(j.y),R.copy(M[0]).add(T).add(w),At(R.x,R.y,R.z)):At(j.x,j.y,0)}for(let et=1;et<=h;et++)for(let j=0;j<X;j++){let Q=f?V(S[j],Mt[j],Kt):S[j];x?(T.copy(b.normals[et]).multiplyScalar(Q.x),w.copy(b.binormals[et]).multiplyScalar(Q.y),R.copy(M[et]).add(T).add(w),At(R.x,R.y,R.z)):At(Q.x,Q.y,d/h*et)}for(let et=p-1;et>=0;et--){let j=et/p,Q=u*Math.cos(j*Math.PI/2),N=g*Math.sin(j*Math.PI/2)+_;for(let ut=0,ot=H.length;ut<ot;ut++){let pt=V(H[ut],K[ut],N);At(pt.x,pt.y,d+Q)}for(let ut=0,ot=P.length;ut<ot;ut++){let pt=P[ut];at=I[ut];for(let Dt=0,Xt=pt.length;Dt<Xt;Dt++){let C=V(pt[Dt],at[Dt],N);x?At(C.x,C.y+M[h-1].y,M[h-1].x+Q):At(C.x,C.y,d+Q)}}}J(),nt();function J(){let et=i.length/3;if(f){let j=0,Q=X*j;for(let N=0;N<Wt;N++){let ut=Zt[N];Ct(ut[2]+Q,ut[1]+Q,ut[0]+Q)}j=h+p*2,Q=X*j;for(let N=0;N<Wt;N++){let ut=Zt[N];Ct(ut[0]+Q,ut[1]+Q,ut[2]+Q)}}else{for(let j=0;j<Wt;j++){let Q=Zt[j];Ct(Q[2],Q[1],Q[0])}for(let j=0;j<Wt;j++){let Q=Zt[j];Ct(Q[0]+X*h,Q[1]+X*h,Q[2]+X*h)}}n.addGroup(et,i.length/3-et,0)}function nt(){let et=i.length/3,j=0;yt(H,j),j+=H.length;for(let Q=0,N=P.length;Q<N;Q++){let ut=P[Q];yt(ut,j),j+=ut.length}n.addGroup(et,i.length/3-et,1)}function yt(et,j){let Q=et.length;for(;--Q>=0;){let N=Q,ut=Q-1;ut<0&&(ut=et.length-1);for(let ot=0,pt=h+p*2;ot<pt;ot++){let Dt=X*ot,Xt=X*(ot+1),C=j+N+Dt,E=j+ut+Dt,G=j+ut+Xt,Z=j+N+Xt;Jt(C,E,G,Z)}}}function At(et,j,Q){l.push(et),l.push(j),l.push(Q)}function Ct(et,j,Q){re(et),re(j),re(Q);let N=i.length/3,ut=v.generateTopUV(n,i,N-3,N-2,N-1);D(ut[0]),D(ut[1]),D(ut[2])}function Jt(et,j,Q,N){re(et),re(j),re(N),re(j),re(Q),re(N);let ut=i.length/3,ot=v.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);D(ot[0]),D(ot[1]),D(ot[3]),D(ot[1]),D(ot[2]),D(ot[3])}function re(et){i.push(l[et*3+0]),i.push(l[et*3+1]),i.push(l[et*3+2])}function D(et){r.push(et.x),r.push(et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return RS(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Fh[i.type]().fromJSON(i)),new s(n,t.options)}},AS={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],g=t[i*3+2],_=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-d),new lt(f,1-g),new lt(_,1-m)]:[new lt(a,1-l),new lt(h,1-d),new lt(u,1-g),new lt(p,1-m)]}};function RS(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ts=class s extends Ye{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ue(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new U,f=new lt,u=new U,g=new U,_=new U,p=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,u.x=m*1,u.y=-p,u.z=m*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:p=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,u.x=m*1,u.y=-p,u.z=m*0,g.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(g)}for(let v=0;v<=e;v++){let M=n+v*h*i,x=Math.sin(M),b=Math.cos(M);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*x,d.y=t[w].y,d.z=t[w].x*b,o.push(d.x,d.y,d.z),f.x=v/e,f.y=w/(t.length-1),a.push(f.x,f.y);let T=l[3*w+0]*x,R=l[3*w+1],y=l[3*w+0]*b;c.push(T,R,y)}}for(let v=0;v<e;v++)for(let M=0;M<t.length-1;M++){let x=M+v*t.length,b=x,w=x+t.length,T=x+t.length+1,R=x+1;r.push(b,w,R),r.push(T,R,w)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Ze=class s extends Ye{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,f=e/l,u=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*f-o;for(let M=0;M<c;M++){let x=M*d-r;g.push(x,-v,0),_.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<a;v++){let M=v+c*m,x=v+c*(m+1),b=v+1+c*(m+1),w=v+1+c*m;u.push(M,x,w),u.push(x,b,w)}this.setIndex(u),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Vl=class s extends Ye{constructor(t=new Ws([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],i=[],r=[],o=[],a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new pe(i,3)),this.setAttribute("normal",new pe(r,3)),this.setAttribute("uv",new pe(o,2));function c(h){let d=i.length/3,f=h.extractPoints(e),u=f.shape,g=f.holes;ds.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){let v=g[p];ds.isClockWise(v)===!0&&(g[p]=v.reverse())}let _=ds.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){let v=g[p];u=u.concat(v)}for(let p=0,m=u.length;p<m;p++){let v=u[p];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let p=0,m=_.length;p<m;p++){let v=_[p],M=v[0]+d,x=v[1]+d,b=v[2]+d;n.push(M,x,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return CS(e,t)}static fromJSON(t,e){let n=[];for(let i=0,r=t.shapes.length;i<r;i++){let o=e[t.shapes[i]];n.push(o)}return new s(n,t.curveSegments)}};function CS(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){let i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}var gs=class s extends Ye{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new U,f=new U,u=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let v=[],M=m/n,x=0;m===0&&o===0?x=.5/e:m===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let w=b/e;d.x=-t*Math.cos(i+w*r)*Math.sin(o+M*a),d.y=t*Math.cos(o+M*a),d.z=t*Math.sin(i+w*r)*Math.sin(o+M*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(w+x,1-M),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let M=h[m][v+1],x=h[m][v],b=h[m+1][v],w=h[m+1][v+1];(m!==0||o>0)&&u.push(M,x,w),(m!==n-1||l<Math.PI)&&u.push(x,b,w)}this.setIndex(u),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gl=class s extends Ye{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new U,d=new U,f=new U;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){let _=g/i*r,p=u/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){let _=(i+1)*u+g-1,p=(i+1)*(u-1)+g-1,m=(i+1)*(u-1)+g,v=(i+1)*u+g;o.push(_,p,v),o.push(p,m,v)}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(l,3)),this.setAttribute("uv",new pe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wl=class s extends Ye{constructor(t=new Fl(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new lt,h=new U,d=[],f=[],u=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(f,3)),this.setAttribute("uv",new pe(u,2));function _(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),v(),m()}function p(M){h=t.getPointAt(M/e,h);let x=o.normals[M],b=o.binormals[M];for(let w=0;w<=i;w++){let T=w/i*Math.PI*2,R=Math.sin(T),y=-Math.cos(T);l.x=y*x.x+R*b.x,l.y=y*x.y+R*b.y,l.z=y*x.z+R*b.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let M=1;M<=e;M++)for(let x=1;x<=i;x++){let b=(i+1)*(M-1)+(x-1),w=(i+1)*M+(x-1),T=(i+1)*M+x,R=(i+1)*(M-1)+x;g.push(b,w,R),g.push(w,T,R)}}function v(){for(let M=0;M<=e;M++)for(let x=0;x<=i;x++)c.x=M/e,c.y=x/i,u.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new s(new Fh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var es=class extends Gs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Np,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Qn=class extends es{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Bh=class extends Gs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kh=class extends Gs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function yh(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function PS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var lo=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zh=class extends lo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cp,endingEnd:cp}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hp:r=t,a=2*e-n;break;case up:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hp:o=t,l=2*n-e;break;case up:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-e)/(i-e),_=g*g,p=_*g,m=-f*p+2*f*_-f*g,v=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-u)*p+(1.5+u)*_+.5*g,x=u*p-u*_;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+v*o[c+b]+M*o[l+b]+x*o[d+b];return r}},Hh=class extends lo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Vh=class extends lo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Ei=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yh(e,this.TimeBufferType),this.values=yh(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yh(t.times,Array),values:yh(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Vh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ml:e=this.InterpolantFactoryMethodDiscrete;break;case wh:e=this.InterpolantFactoryMethodLinear;break;case vh:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ml;case this.InterpolantFactoryMethodLinear:return wh;case this.InterpolantFactoryMethodSmooth:return vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&PS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===vh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,f=d-n,u=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[u+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=wh;var br=class extends Ei{constructor(t,e,n){super(t,e,n)}};br.prototype.ValueTypeName="bool";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=ml;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Gh=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}};Gh.prototype.ValueTypeName="color";var Wh=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}};Wh.prototype.ValueTypeName="number";var Xh=class extends lo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)li.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xl=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Xh(this.times,this.values,this.getValueSize(),t)}};Xl.prototype.ValueTypeName="quaternion";Xl.prototype.InterpolantFactoryMethodSmooth=void 0;var wr=class extends Ei{constructor(t,e,n){super(t,e,n)}};wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=ml;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var qh=class extends Ei{constructor(t,e,n,i){super(t,e,n,i)}};qh.prototype.ValueTypeName="vector";var Yh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},G_=new Yh,Zh=class{constructor(t){this.manager=t!==void 0?t:G_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zh.DEFAULT_MATERIAL_NAME="__DEFAULT";var ql=class extends fn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},jn=class extends ql{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},lp=new Ae,Yg=new U,Zg=new U,xp=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=ns,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yg.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yg),Zg.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zg),e.updateMatrixWorld(),lp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lp,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Yl=class extends wl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yp=class extends xp{constructor(){super(new Yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$e=class extends ql{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new yp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var $h=class extends Mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zp="\\[\\]\\.:\\/",IS=new RegExp("["+zp+"]","g"),Hp="[^"+zp+"]",DS="[^"+zp.replace("\\.","")+"]",LS=/((?:WC+[\/:])*)/.source.replace("WC",Hp),NS=/(WCOD+)?/.source.replace("WCOD",DS),US=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hp),FS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hp),OS=new RegExp("^"+LS+NS+US+FS+"$"),BS=["material","materials","bones","map"],vp=class{constructor(t,e,n){let i=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(IS,"")}static parseTrackName(t){let e=OS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);BS.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=vp;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mA=new Float32Array(1);function Vp(s,t,e,n){let i=kS(n);switch(e){case Ip:return s*t;case hu:return s*t/i.components*i.byteLength;case uu:return s*t/i.components*i.byteLength;case Lp:return s*t*2/i.components*i.byteLength;case du:return s*t*2/i.components*i.byteLength;case Dp:return s*t*3/i.components*i.byteLength;case Wi:return s*t*4/i.components*i.byteLength;case fu:return s*t*4/i.components*i.byteLength;case Jl:case Kl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ql:case jl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case mu:case _u:return Math.max(s,16)*Math.max(t,8)/4;case pu:case gu:return Math.max(s,8)*Math.max(t,8)/2;case xu:case yu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case vu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Su:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bu:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case wu:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Eu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Tu:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Au:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ru:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Cu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Iu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Du:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Lu:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Nu:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Uu:case Fu:case Ou:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Bu:case ku:return Math.ceil(s/4)*Math.ceil(t/4)*8;case zu:case Hu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kS(s){switch(s){case ns:case Ap:return{byteLength:1,components:1};case ga:case Rp:case _a:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case Er:case au:case is:return{byteLength:4,components:1};case Cp:case Pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function fx(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function HS(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=s.SHORT;else if(c instanceof Uint32Array)u=s.UNSIGNED_INT;else if(c instanceof Int32Array)u=s.INT;else if(c instanceof Int8Array)u=s.BYTE;else if(c instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let _=d[u];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,GS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZS=`#ifdef USE_AOMAP
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
#endif`,$S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JS=`#ifdef USE_BATCHING
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
#endif`,KS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eb=`#ifdef USE_IRIDESCENCE
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
#endif`,nb=`#ifdef USE_BUMPMAP
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
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ub=`#define PI 3.141592653589793
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
} // validated`,db=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fb=`vec3 transformedNormal = objectNormal;
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
#endif`,pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xb="gl_FragColor = linearToOutputTexel( gl_FragColor );",yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cb=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ib=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lb=`uniform bool receiveShadow;
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
#endif`,Nb=`#ifdef USE_ENVMAP
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
#endif`,Ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ob=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kb=`PhysicalMaterial material;
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
#endif`,zb=`struct PhysicalMaterial {
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
}`,Hb=`
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
#endif`,Vb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kb=`#if defined( USE_POINTS_UV )
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
#endif`,Qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,n1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,i1=`#ifdef USE_MORPHTARGETS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,a1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
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
#endif`,u1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,p1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,m1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,w1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,T1=`float getShadowMask() {
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
}`,A1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,C1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,L1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,G1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,Z1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,J1=`#define DISTANCE
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
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
}`,tw=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#define LAMBERT
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
}`,sw=`#define LAMBERT
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
}`,rw=`#define MATCAP
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
}`,ow=`#define MATCAP
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
}`,aw=`#define NORMAL
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
}`,lw=`#define NORMAL
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
}`,cw=`#define PHONG
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
}`,hw=`#define PHONG
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
}`,uw=`#define STANDARD
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
}`,dw=`#define STANDARD
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
}`,fw=`#define TOON
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
}`,pw=`#define TOON
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
}`,mw=`uniform float size;
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
}`,gw=`uniform vec3 diffuse;
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
}`,_w=`#include <common>
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
}`,xw=`uniform vec3 color;
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
}`,yw=`uniform float rotation;
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
}`,vw=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:VS,alphahash_pars_fragment:GS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:qS,alphatest_pars_fragment:YS,aomap_fragment:ZS,aomap_pars_fragment:$S,batching_pars_vertex:JS,batching_vertex:KS,begin_vertex:QS,beginnormal_vertex:jS,bsdfs:tb,iridescence_fragment:eb,bumpmap_pars_fragment:nb,clipping_planes_fragment:ib,clipping_planes_pars_fragment:sb,clipping_planes_pars_vertex:rb,clipping_planes_vertex:ob,color_fragment:ab,color_pars_fragment:lb,color_pars_vertex:cb,color_vertex:hb,common:ub,cube_uv_reflection_fragment:db,defaultnormal_vertex:fb,displacementmap_pars_vertex:pb,displacementmap_vertex:mb,emissivemap_fragment:gb,emissivemap_pars_fragment:_b,colorspace_fragment:xb,colorspace_pars_fragment:yb,envmap_fragment:vb,envmap_common_pars_fragment:Mb,envmap_pars_fragment:Sb,envmap_pars_vertex:bb,envmap_physical_pars_fragment:Nb,envmap_vertex:wb,fog_vertex:Eb,fog_pars_vertex:Tb,fog_fragment:Ab,fog_pars_fragment:Rb,gradientmap_pars_fragment:Cb,lightmap_pars_fragment:Pb,lights_lambert_fragment:Ib,lights_lambert_pars_fragment:Db,lights_pars_begin:Lb,lights_toon_fragment:Ub,lights_toon_pars_fragment:Fb,lights_phong_fragment:Ob,lights_phong_pars_fragment:Bb,lights_physical_fragment:kb,lights_physical_pars_fragment:zb,lights_fragment_begin:Hb,lights_fragment_maps:Vb,lights_fragment_end:Gb,logdepthbuf_fragment:Wb,logdepthbuf_pars_fragment:Xb,logdepthbuf_pars_vertex:qb,logdepthbuf_vertex:Yb,map_fragment:Zb,map_pars_fragment:$b,map_particle_fragment:Jb,map_particle_pars_fragment:Kb,metalnessmap_fragment:Qb,metalnessmap_pars_fragment:jb,morphinstance_vertex:t1,morphcolor_vertex:e1,morphnormal_vertex:n1,morphtarget_pars_vertex:i1,morphtarget_vertex:s1,normal_fragment_begin:r1,normal_fragment_maps:o1,normal_pars_fragment:a1,normal_pars_vertex:l1,normal_vertex:c1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:u1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:f1,iridescence_pars_fragment:p1,opaque_fragment:m1,packing:g1,premultiplied_alpha_fragment:_1,project_vertex:x1,dithering_fragment:y1,dithering_pars_fragment:v1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:b1,shadowmap_pars_vertex:w1,shadowmap_vertex:E1,shadowmask_pars_fragment:T1,skinbase_vertex:A1,skinning_pars_vertex:R1,skinning_vertex:C1,skinnormal_vertex:P1,specularmap_fragment:I1,specularmap_pars_fragment:D1,tonemapping_fragment:L1,tonemapping_pars_fragment:N1,transmission_fragment:U1,transmission_pars_fragment:F1,uv_pars_fragment:O1,uv_pars_vertex:B1,uv_vertex:k1,worldpos_vertex:z1,background_vert:H1,background_frag:V1,backgroundCube_vert:G1,backgroundCube_frag:W1,cube_vert:X1,cube_frag:q1,depth_vert:Y1,depth_frag:Z1,distanceRGBA_vert:$1,distanceRGBA_frag:J1,equirect_vert:K1,equirect_frag:Q1,linedashed_vert:j1,linedashed_frag:tw,meshbasic_vert:ew,meshbasic_frag:nw,meshlambert_vert:iw,meshlambert_frag:sw,meshmatcap_vert:rw,meshmatcap_frag:ow,meshnormal_vert:aw,meshnormal_frag:lw,meshphong_vert:cw,meshphong_frag:hw,meshphysical_vert:uw,meshphysical_frag:dw,meshtoon_vert:fw,meshtoon_frag:pw,points_vert:mw,points_frag:gw,shadow_vert:_w,shadow_frag:xw,sprite_vert:yw,sprite_frag:vw},wt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ys={basic:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:On([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:On([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:On([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:On([wt.points,wt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:On([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:On([wt.common,wt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:On([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:On([wt.sprite,wt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:On([wt.common,wt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:On([wt.lights,wt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ys.physical={uniforms:On([ys.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var Vu={r:0,b:0,g:0},po=new ci,Mw=new Ae;function Sw(s,t,e,n,i,r,o){let a=new Bt(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?e:t).get(x)),x}function _(M){let x=!1,b=g(M);b===null?m(a,l):b&&b.isColor&&(m(b,1),x=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,x){let b=g(x);b&&(b.isCubeTexture||b.mapping===Zl)?(h===void 0&&(h=new Tt(new Sr(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:fo(ys.backgroundCube.uniforms),vertexShader:ys.backgroundCube.vertexShader,fragmentShader:ys.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),po.copy(x.backgroundRotation),po.x*=-1,po.y*=-1,po.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(po.y*=-1,po.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(po)),h.material.toneMapped=_e.getTransfer(b.colorSpace)!==Te,(d!==b||f!==b.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,d=b,f=b.version,u=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new Ze(2,2),new Kn({name:"BackgroundMaterial",uniforms:fo(ys.background.uniforms),vertexShader:ys.background.vertexShader,fragmentShader:ys.background.fragmentShader,side:zs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_e.getTransfer(b.colorSpace)!==Te,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,x){M.getRGB(Vu,Bp(s)),n.buffers.color.setClear(Vu.r,Vu.g,Vu.b,x,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,x=1){a.set(M),l=x,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:_,addToRenderList:p,dispose:v}}function bw(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,o=!1;function a(S,P,L,O,z){let H=!1,V=d(O,L,P);r!==V&&(r=V,c(r.object)),H=u(S,O,L,z),H&&g(S,O,L,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,P,L,O),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,P,L){let O=L.wireframe===!0,z=n[S.id];z===void 0&&(z={},n[S.id]=z);let H=z[P.id];H===void 0&&(H={},z[P.id]=H);let V=H[O];return V===void 0&&(V=f(l()),H[O]=V),V}function f(S){let P=[],L=[],O=[];for(let z=0;z<e;z++)P[z]=0,L[z]=0,O[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:O,object:S,attributes:{},index:null}}function u(S,P,L,O){let z=r.attributes,H=P.attributes,V=0,X=L.getAttributes();for(let W in X)if(X[W].location>=0){let I=z[W],at=H[W];if(at===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(at=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(at=S.instanceColor)),I===void 0||I.attribute!==at||at&&I.data!==at.data)return!0;V++}return r.attributesNum!==V||r.index!==O}function g(S,P,L,O){let z={},H=P.attributes,V=0,X=L.getAttributes();for(let W in X)if(X[W].location>=0){let I=H[W];I===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(I=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(I=S.instanceColor));let at={};at.attribute=I,I&&I.data&&(at.data=I.data),z[W]=at,V++}r.attributes=z,r.attributesNum=V,r.index=O}function _(){let S=r.newAttributes;for(let P=0,L=S.length;P<L;P++)S[P]=0}function p(S){m(S,0)}function m(S,P){let L=r.newAttributes,O=r.enabledAttributes,z=r.attributeDivisors;L[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),z[S]!==P&&(s.vertexAttribDivisor(S,P),z[S]=P)}function v(){let S=r.newAttributes,P=r.enabledAttributes;for(let L=0,O=P.length;L<O;L++)P[L]!==S[L]&&(s.disableVertexAttribArray(L),P[L]=0)}function M(S,P,L,O,z,H,V){V===!0?s.vertexAttribIPointer(S,P,L,z,H):s.vertexAttribPointer(S,P,L,O,z,H)}function x(S,P,L,O){_();let z=O.attributes,H=L.getAttributes(),V=P.defaultAttributeValues;for(let X in H){let W=H[X];if(W.location>=0){let K=z[X];if(K===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){let I=K.normalized,at=K.itemSize,Mt=t.get(K);if(Mt===void 0)continue;let Zt=Mt.buffer,Wt=Mt.type,Kt=Mt.bytesPerElement,J=Wt===s.INT||Wt===s.UNSIGNED_INT||K.gpuType===au;if(K.isInterleavedBufferAttribute){let nt=K.data,yt=nt.stride,At=K.offset;if(nt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<W.locationSize;Ct++)m(W.location+Ct,nt.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Ct=0;Ct<W.locationSize;Ct++)p(W.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let Ct=0;Ct<W.locationSize;Ct++)M(W.location+Ct,at/W.locationSize,Wt,I,yt*Kt,(At+at/W.locationSize*Ct)*Kt,J)}else{if(K.isInstancedBufferAttribute){for(let nt=0;nt<W.locationSize;nt++)m(W.location+nt,K.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let nt=0;nt<W.locationSize;nt++)p(W.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Zt);for(let nt=0;nt<W.locationSize;nt++)M(W.location+nt,at/W.locationSize,Wt,I,at*Kt,at/W.locationSize*nt*Kt,J)}}else if(V!==void 0){let I=V[X];if(I!==void 0)switch(I.length){case 2:s.vertexAttrib2fv(W.location,I);break;case 3:s.vertexAttrib3fv(W.location,I);break;case 4:s.vertexAttrib4fv(W.location,I);break;default:s.vertexAttrib1fv(W.location,I)}}}}v()}function b(){R();for(let S in n){let P=n[S];for(let L in P){let O=P[L];for(let z in O)h(O[z].object),delete O[z];delete P[L]}delete n[S]}}function w(S){if(n[S.id]===void 0)return;let P=n[S.id];for(let L in P){let O=P[L];for(let z in O)h(O[z].object),delete O[z];delete P[L]}delete n[S.id]}function T(S){for(let P in n){let L=n[P];if(L[S.id]===void 0)continue;let O=L[S.id];for(let z in O)h(O[z].object),delete O[z];delete L[S.id]}}function R(){y(),o=!0,r!==i&&(r=i,c(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function ww(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];e.update(u,n,1)}function l(c,h,d,f){if(d===0)return;let u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Ew(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==Wi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let R=T===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ns&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==is&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:b,maxSamples:w}}function Tw(s){let t=this,e=null,n=0,i=!1,r=!1,o=new us,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,M=v*4,x=m.clippingState||null;l.value=x,x=h(g,f,M,u);for(let b=0;b!==M;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,x=u;M!==_;++M,x+=4)o.copy(d[M]).applyMatrix4(v,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Aw(s){let t=new WeakMap;function e(o,a){return a===su?o.mapping=ho:a===ru&&(o.mapping=uo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===su||a===ru)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ph(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Sa=4,W_=[.125,.215,.35,.446,.526,.582],_o=20,Gp=new Yl,X_=new Bt,Wp=null,Xp=0,qp=0,Yp=!1,go=(1+Math.sqrt(5))/2,Ma=1/go,q_=[new U(-go,Ma,0),new U(go,Ma,0),new U(-Ma,0,go),new U(Ma,0,go),new U(0,go,-Ma),new U(0,go,Ma),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Rw=new U,xo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=Rw}=r;Wp=this._renderer.getRenderTarget(),Xp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wp,Xp,qp),this._renderer.xr.enabled=Yp,t.scissorTest=!1,Gu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ho||t.mapping===uo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wp=this._renderer.getRenderTarget(),Xp=this._renderer.getActiveCubeFace(),qp=this._renderer.getActiveMipmapLevel(),Yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:_a,format:Wi,colorSpace:oo,depthBuffer:!1},i=Y_(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y_(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cw(r)),this._blurMaterial=Pw(r,t,e)}return i}_compileMaterial(t){let e=new Tt(this._lodPlanes[0],t);this._renderer.compile(e,Gp)}_sceneToCubeUV(t,e,n,i,r){let l=new Mn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(X_),d.toneMapping=qs,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));let _=new tn({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),p=new Tt(new Sr,_),m=!1,v=t.background;v?v.isColor&&(_.color.copy(v),t.background=null,m=!0):(_.color.copy(X_),m=!0);for(let M=0;M<6;M++){let x=M%3;x===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):x===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let b=this._cubeSize;Gu(i,x*b,M>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(p,l),d.render(t,l)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=u,d.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ho||t.mapping===uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Z_());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gu(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Gp)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=q_[(i-r-1)%q_.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Tt(this._lodPlanes[i],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*_o-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):_o;p>_o&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_o}`);let m=[],v=0;for(let T=0;T<_o;++T){let R=T/_,y=Math.exp(-R*R/2);m.push(y),T===0?v+=y:T<p&&(v+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/v;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let x=this._sizeLods[i],b=3*x*(i>M-Sa?i-M+Sa:0),w=4*(this._cubeSize-x);Gu(e,b,w,3*x,2*x),l.setRenderTarget(e),l.render(d,Gp)}};function Cw(s){let t=[],e=[],n=[],i=s,r=s-Sa+1+W_.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Sa?l=W_[o-s+Sa-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*u),M=new Float32Array(p*g*u),x=new Float32Array(m*g*u);for(let w=0;w<u;w++){let T=w%3*2/3-1,R=w>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(y,_*g*w),M.set(f,p*g*w);let S=[w,w,w,w,w,w];x.set(S,m*g*w)}let b=new Ye;b.setAttribute("position",new Oe(v,_)),b.setAttribute("uv",new Oe(M,p)),b.setAttribute("faceIndex",new Oe(x,m)),t.push(b),i>Sa&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Y_(s,t,e){let n=new fs(s,t,e);return n.texture.mapping=Zl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gu(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Pw(s,t,e){let n=new Float32Array(_o),i=new U(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:_o,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:im(),fragmentShader:`

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
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function Z_(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function $_(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xs,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function Iw(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===su||l===ru,h=l===ho||l===uo;if(c||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new xo(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&i(u)?(e===null&&(e=new xo(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Dw(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lw(s,t,e,n){let i={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let u=r.get(f);u&&(t.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)t.update(f[u],s.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,g=d.attributes.position,_=0;if(u!==null){let v=u.array;_=u.version;for(let M=0,x=v.length;M<x;M+=3){let b=v[M+0],w=v[M+1],T=v[M+2];f.push(b,w,w,T,T,b)}}else if(g!==void 0){let v=g.array;_=g.version;for(let M=0,x=v.length/3-1;M<x;M+=3){let b=M+0,w=M+1,T=M+2;f.push(b,w,w,T,T,b)}}else return;let p=new(Op(f)?bl:Sl)(f,1);p.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Nw(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){s.drawElements(n,u,r,f*o),e.update(u,n,1)}function c(f,u,g){g!==0&&(s.drawElementsInstanced(n,u,r,f*o,g),e.update(u,n,g))}function h(f,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=u[m];e.update(p,n,1)}function d(f,u,g,_){if(g===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,u[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=u[v]*_[v];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Uw(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fw(s,t,e){let n=new WeakMap,i=new qe;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let y=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let x=a.attributes.position.count*M,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*b*4*d),T=new yl(w,x,b,d);T.type=is,T.needsUpdate=!0;let R=M*4;for(let S=0;S<d;S++){let P=p[S],L=m[S],O=v[S],z=x*b*4*S;for(let H=0;H<P.count;H++){let V=H*R;u===!0&&(i.fromBufferAttribute(P,H),w[z+V+0]=i.x,w[z+V+1]=i.y,w[z+V+2]=i.z,w[z+V+3]=0),g===!0&&(i.fromBufferAttribute(L,H),w[z+V+4]=i.x,w[z+V+5]=i.y,w[z+V+6]=i.z,w[z+V+7]=0),_===!0&&(i.fromBufferAttribute(O,H),w[z+V+8]=i.x,w[z+V+9]=i.y,w[z+V+10]=i.z,w[z+V+11]=O.itemSize===4?i.w:1)}}f={count:d,texture:T,size:new lt(x,b)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Ow(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var px=new Jn,J_=new Pl(1,1),mx=new yl,gx=new Rh,_x=new El,K_=[],Q_=[],j_=new Float32Array(16),tx=new Float32Array(9),ex=new Float32Array(4);function wa(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=K_[i];if(r===void 0&&(r=new Float32Array(i),K_[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function mn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function gn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qu(s,t){let e=Q_[t];e===void 0&&(e=new Int32Array(t),Q_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Bw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function kw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;s.uniform2fv(this.addr,t),gn(e,t)}}function zw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(mn(e,t))return;s.uniform3fv(this.addr,t),gn(e,t)}}function Hw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;s.uniform4fv(this.addr,t),gn(e,t)}}function Vw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;ex.set(n),s.uniformMatrix2fv(this.addr,!1,ex),gn(e,n)}}function Gw(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;tx.set(n),s.uniformMatrix3fv(this.addr,!1,tx),gn(e,n)}}function Ww(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(mn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),gn(e,t)}else{if(mn(e,n))return;j_.set(n),s.uniformMatrix4fv(this.addr,!1,j_),gn(e,n)}}function Xw(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function qw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;s.uniform2iv(this.addr,t),gn(e,t)}}function Yw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;s.uniform3iv(this.addr,t),gn(e,t)}}function Zw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;s.uniform4iv(this.addr,t),gn(e,t)}}function $w(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Jw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(mn(e,t))return;s.uniform2uiv(this.addr,t),gn(e,t)}}function Kw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(mn(e,t))return;s.uniform3uiv(this.addr,t),gn(e,t)}}function Qw(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(mn(e,t))return;s.uniform4uiv(this.addr,t),gn(e,t)}}function jw(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(J_.compareFunction=Up,r=J_):r=px,e.setTexture2D(t||r,i)}function tE(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gx,i)}function eE(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_x,i)}function nE(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mx,i)}function iE(s){switch(s){case 5126:return Bw;case 35664:return kw;case 35665:return zw;case 35666:return Hw;case 35674:return Vw;case 35675:return Gw;case 35676:return Ww;case 5124:case 35670:return Xw;case 35667:case 35671:return qw;case 35668:case 35672:return Yw;case 35669:case 35673:return Zw;case 5125:return $w;case 36294:return Jw;case 36295:return Kw;case 36296:return Qw;case 35678:case 36198:case 36298:case 36306:case 35682:return jw;case 35679:case 36299:case 36307:return tE;case 35680:case 36300:case 36308:case 36293:return eE;case 36289:case 36303:case 36311:case 36292:return nE}}function sE(s,t){s.uniform1fv(this.addr,t)}function rE(s,t){let e=wa(t,this.size,2);s.uniform2fv(this.addr,e)}function oE(s,t){let e=wa(t,this.size,3);s.uniform3fv(this.addr,e)}function aE(s,t){let e=wa(t,this.size,4);s.uniform4fv(this.addr,e)}function lE(s,t){let e=wa(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function cE(s,t){let e=wa(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hE(s,t){let e=wa(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function uE(s,t){s.uniform1iv(this.addr,t)}function dE(s,t){s.uniform2iv(this.addr,t)}function fE(s,t){s.uniform3iv(this.addr,t)}function pE(s,t){s.uniform4iv(this.addr,t)}function mE(s,t){s.uniform1uiv(this.addr,t)}function gE(s,t){s.uniform2uiv(this.addr,t)}function _E(s,t){s.uniform3uiv(this.addr,t)}function xE(s,t){s.uniform4uiv(this.addr,t)}function yE(s,t,e){let n=this.cache,i=t.length,r=qu(e,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||px,r[o])}function vE(s,t,e){let n=this.cache,i=t.length,r=qu(e,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||gx,r[o])}function ME(s,t,e){let n=this.cache,i=t.length,r=qu(e,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_x,r[o])}function SE(s,t,e){let n=this.cache,i=t.length,r=qu(e,i);mn(n,r)||(s.uniform1iv(this.addr,r),gn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||mx,r[o])}function bE(s){switch(s){case 5126:return sE;case 35664:return rE;case 35665:return oE;case 35666:return aE;case 35674:return lE;case 35675:return cE;case 35676:return hE;case 5124:case 35670:return uE;case 35667:case 35671:return dE;case 35668:case 35672:return fE;case 35669:case 35673:return pE;case 5125:return mE;case 36294:return gE;case 36295:return _E;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return vE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return SE}}var $p=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=iE(e.type)}},Jp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bE(e.type)}},Kp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Zp=/(\w+)(\])?(\[|\.)?/g;function nx(s,t){s.seq.push(t),s.map[t.id]=t}function wE(s,t,e){let n=s.name,i=n.length;for(Zp.lastIndex=0;;){let r=Zp.exec(n),o=Zp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){nx(e,c===void 0?new $p(a,s,t):new Jp(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Kp(a),nx(e,d)),e=d}}}var ba=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);wE(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function ix(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var EE=37297,TE=0;function AE(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var sx=new se;function RE(s){_e._getMatrix(sx,_e.workingColorSpace,s);let t=`mat3( ${sx.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(s)){case gl:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function rx(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+AE(s.getShaderSource(t),a)}else return r}function CE(s,t){let e=RE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function PE(s,t){let e;switch(t){case x_:e="Linear";break;case y_:e="Reinhard";break;case v_:e="Cineon";break;case M_:e="ACESFilmic";break;case b_:e="AgX";break;case iu:e="Neutral";break;case S_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wu=new U;function IE(){_e.getLuminanceCoefficients(Wu);let s=Wu.x.toFixed(4),t=Wu.y.toFixed(4),e=Wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function DE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tc).join(`
`)}function LE(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function NE(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function tc(s){return s!==""}function ox(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ax(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var UE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qp(s){return s.replace(UE,OE)}var FE=new Map;function OE(s,t){let e=le[t];if(e===void 0){let n=FE.get(t);if(n!==void 0)e=le[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Qp(e)}var BE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(s){return s.replace(BE,kE)}function kE(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cx(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zE(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sp?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kg?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_s&&(t="SHADOWMAP_TYPE_VSM"),t}function HE(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ho:case uo:t="ENVMAP_TYPE_CUBE";break;case Zl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function VE(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case uo:t="ENVMAP_MODE_REFRACTION";break}return t}function GE(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ep:t="ENVMAP_BLENDING_MULTIPLY";break;case g_:t="ENVMAP_BLENDING_MIX";break;case __:t="ENVMAP_BLENDING_ADD";break}return t}function WE(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function XE(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zE(e),c=HE(e),h=VE(e),d=GE(e),f=WE(e),u=DE(e),g=LE(r),_=i.createProgram(),p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(tc).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(tc).join(`
`),m.length>0&&(m+=`
`)):(p=[cx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tc).join(`
`),m=[cx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qs?"#define TONE_MAPPING":"",e.toneMapping!==qs?le.tonemapping_pars_fragment:"",e.toneMapping!==qs?PE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,CE("linearToOutputTexel",e.outputColorSpace),IE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(tc).join(`
`)),o=Qp(o),o=ox(o,e),o=ax(o,e),a=Qp(a),a=ox(a,e),a=ax(a,e),o=lx(o),a=lx(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=v+p+o,x=v+m+a,b=ix(i,i.VERTEX_SHADER,M),w=ix(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(P){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||"",O=i.getShaderInfoLog(b)||"",z=i.getShaderInfoLog(w)||"",H=L.trim(),V=O.trim(),X=z.trim(),W=!0,K=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,w);else{let I=rx(i,b,"vertex"),at=rx(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+I+`
`+at)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||X==="")&&(K=!1);K&&(P.diagnostics={runnable:W,programLog:H,vertexShader:{log:V,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(b),i.deleteShader(w),R=new ba(i,_),y=NE(i,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,EE)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=TE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=w,this}var qE=0,jp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tm(t),e.set(t,n)),n}},tm=class{constructor(t){this.id=qE++,this.code=t,this.usedTimes=0}};function YE(s,t,e,n,i,r,o){let a=new Ml,l=new jp,c=new Set,h=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,u=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,S,P,L,O){let z=L.fog,H=O.geometry,V=y.isMeshStandardMaterial?L.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),W=X&&X.mapping===Zl?X.image.height:null,K=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let I=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=I!==void 0?I.length:0,Mt=0;H.morphAttributes.position!==void 0&&(Mt=1),H.morphAttributes.normal!==void 0&&(Mt=2),H.morphAttributes.color!==void 0&&(Mt=3);let Zt,Wt,Kt,J;if(K){let Et=ys[K];Zt=Et.vertexShader,Wt=Et.fragmentShader}else Zt=y.vertexShader,Wt=y.fragmentShader,l.update(y),Kt=l.getVertexShaderID(y),J=l.getFragmentShaderID(y);let nt=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),At=O.isInstancedMesh===!0,Ct=O.isBatchedMesh===!0,Jt=!!y.map,re=!!y.matcap,D=!!X,et=!!y.aoMap,j=!!y.lightMap,Q=!!y.bumpMap,N=!!y.normalMap,ut=!!y.displacementMap,ot=!!y.emissiveMap,pt=!!y.metalnessMap,Dt=!!y.roughnessMap,Xt=y.anisotropy>0,C=y.clearcoat>0,E=y.dispersion>0,G=y.iridescence>0,Z=y.sheen>0,tt=y.transmission>0,$=Xt&&!!y.anisotropyMap,Rt=C&&!!y.clearcoatMap,dt=C&&!!y.clearcoatNormalMap,Lt=C&&!!y.clearcoatRoughnessMap,_t=G&&!!y.iridescenceMap,ct=G&&!!y.iridescenceThicknessMap,xt=Z&&!!y.sheenColorMap,qt=Z&&!!y.sheenRoughnessMap,Ft=!!y.specularMap,gt=!!y.specularColorMap,te=!!y.specularIntensityMap,F=tt&&!!y.transmissionMap,ht=tt&&!!y.thicknessMap,ft=!!y.gradientMap,bt=!!y.alphaMap,rt=y.alphaTest>0,it=!!y.alphaHash,It=!!y.extensions,$t=qs;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&($t=s.toneMapping);let ve={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:Zt,fragmentShader:Wt,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ct,batchingColor:Ct&&O._colorsTexture!==null,instancing:At,instancingColor:At&&O.instanceColor!==null,instancingMorph:At&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:oo,alphaToCoverage:!!y.alphaToCoverage,map:Jt,matcap:re,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:W,aoMap:et,lightMap:j,bumpMap:Q,normalMap:N,displacementMap:f&&ut,emissiveMap:ot,normalMapObjectSpace:N&&y.normalMapType===A_,normalMapTangentSpace:N&&y.normalMapType===Np,metalnessMap:pt,roughnessMap:Dt,anisotropy:Xt,anisotropyMap:$,clearcoat:C,clearcoatMap:Rt,clearcoatNormalMap:dt,clearcoatRoughnessMap:Lt,dispersion:E,iridescence:G,iridescenceMap:_t,iridescenceThicknessMap:ct,sheen:Z,sheenColorMap:xt,sheenRoughnessMap:qt,specularMap:Ft,specularColorMap:gt,specularIntensityMap:te,transmission:tt,transmissionMap:F,thicknessMap:ht,gradientMap:ft,opaque:y.transparent===!1&&y.blending===so&&y.alphaToCoverage===!1,alphaMap:bt,alphaTest:rt,alphaHash:it,combine:y.combine,mapUv:Jt&&_(y.map.channel),aoMapUv:et&&_(y.aoMap.channel),lightMapUv:j&&_(y.lightMap.channel),bumpMapUv:Q&&_(y.bumpMap.channel),normalMapUv:N&&_(y.normalMap.channel),displacementMapUv:ut&&_(y.displacementMap.channel),emissiveMapUv:ot&&_(y.emissiveMap.channel),metalnessMapUv:pt&&_(y.metalnessMap.channel),roughnessMapUv:Dt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:Rt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:dt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:qt&&_(y.sheenRoughnessMap.channel),specularMapUv:Ft&&_(y.specularMap.channel),specularColorMapUv:gt&&_(y.specularColorMap.channel),specularIntensityMapUv:te&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:ht&&_(y.thicknessMap.channel),alphaMapUv:bt&&_(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(N||Xt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Jt||bt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Mt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:$t,decodeVideoTexture:Jt&&y.map.isVideoTexture===!0&&_e.getTransfer(y.map.colorSpace)===Te,decodeVideoTextureEmissive:ot&&y.emissiveMap.isVideoTexture===!0&&_e.getTransfer(y.emissiveMap.colorSpace)===Te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===Rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:It&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&y.extensions.multiDraw===!0||Ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(S,y),M(S,y),S.push(s.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function M(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let S=g[y.type],P;if(S){let L=ys[S];P=B_.clone(L.uniforms)}else P=y.uniforms;return P}function b(y,S){let P;for(let L=0,O=h.length;L<O;L++){let z=h[L];if(z.cacheKey===S){P=z,++P.usedTimes;break}}return P===void 0&&(P=new XE(s,S,y,r),h.push(P)),P}function w(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:x,acquireProgram:b,releaseProgram:w,releaseShaderCache:T,programs:h,dispose:R}}function ZE(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function $E(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function hx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ux(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,f,u,g,_,p){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=u,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),t++,m}function a(d,f,u,g,_,p){let m=o(d,f,u,g,_,p);u.transmission>0?n.push(m):u.transparent===!0?i.push(m):e.push(m)}function l(d,f,u,g,_,p){let m=o(d,f,u,g,_,p);u.transmission>0?n.unshift(m):u.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||$E),n.length>1&&n.sort(f||hx),i.length>1&&i.sort(f||hx)}function h(){for(let d=t,f=s.length;d<f;d++){let u=s[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function JE(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new ux,s.set(n,[o])):i>=r.length?(o=new ux,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function KE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Bt};break;case"SpotLight":e={position:new U,direction:new U,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function QE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var jE=0;function tT(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function eT(s){let t=new KE,e=QE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,r=new Ae,o=new Ae;function a(c){let h=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,_=0,p=0,m=0,v=0,M=0,x=0,b=0,w=0,T=0;c.sort(tT);for(let y=0,S=c.length;y<S;y++){let P=c[y],L=P.color,O=P.intensity,z=P.distance,H=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=L.r*O,d+=L.g*O,f+=L.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);T++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,W=e.get(P);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.directionalShadow[u]=W,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=P.shadow.matrix,v++}n.directional[u]=V,u++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(L).multiplyScalar(O),V.distance=z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[_]=V;let X=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,X.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[_]=X.matrix,P.castShadow){let W=e.get(P);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=H,x++}_++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(L).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=V,p++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let X=P.shadow,W=e.get(P);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=V,g++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[m]=V,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==u||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==v||R.numPointShadows!==M||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=u,R.pointLength=g,R.spotLength=_,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=v,R.numPointShadows=M,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=T,n.version=jE++)}function l(c,h){let d=0,f=0,u=0,g=0,_=0,p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){let M=c[m];if(M.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),d++}else if(M.isSpotLight){let x=n.spot[u];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(p),u++}else if(M.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let x=n.point[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function dx(s){let t=new eT(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nT(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new dx(s),t.set(i,[a])):r>=o.length?(a=new dx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var iT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`;function rT(s,t,e){let n=new ua,i=new lt,r=new lt,o=new qe,a=new Bh({depthPacking:T_}),l=new kh,c={},h=e.maxTextureSize,d={[zs]:Rn,[Rn]:zs,[pn]:pn},f=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:iT,fragmentShader:sT}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new Ye;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sp;let m=this.type;this.render=function(w,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let y=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Xs),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let O=m!==_s&&this.type===_s,z=m===_s&&this.type!==_s;for(let H=0,V=w.length;H<V;H++){let X=w[H],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let K=W.getFrameExtents();if(i.multiply(K),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/K.x),i.x=r.x*K.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/K.y),i.y=r.y*K.y,W.mapSize.y=r.y)),W.map===null||O===!0||z===!0){let at=this.type!==_s?{minFilter:ai,magFilter:ai}:{};W.map!==null&&W.map.dispose(),W.map=new fs(i.x,i.y,at),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();let I=W.getViewportCount();for(let at=0;at<I;at++){let Mt=W.getViewport(at);o.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),L.viewport(o),W.updateMatrices(X,at),n=W.getFrustum(),x(T,R,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===_s&&v(W,R),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(y,S,P)};function v(w,T){let R=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fs(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(T,null,R,u,_,null)}function M(w,T,R,y){let S=null,P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=S.uuid,O=T.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let H=z[O];H===void 0&&(H=S.clone(),z[O]=H,T.addEventListener("dispose",b)),S=H}if(S.visible=T.visible,S.wireframe=T.wireframe,y===_s?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:d[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=s.properties.get(S);L.light=R}return S}function x(w,T,R,y,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===_s)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let O=t.update(w),z=w.material;if(Array.isArray(z)){let H=O.groups;for(let V=0,X=H.length;V<X;V++){let W=H[V],K=z[W.materialIndex];if(K&&K.visible){let I=M(w,K,y,S);w.onBeforeShadow(s,w,T,R,O,I,W),s.renderBufferDirect(R,null,O,I,w,W),w.onAfterShadow(s,w,T,R,O,I,W)}}}else if(z.visible){let H=M(w,z,y,S);w.onBeforeShadow(s,w,T,R,O,H,null),s.renderBufferDirect(R,null,O,H,w,null),w.onAfterShadow(s,w,T,R,O,H,null)}}let L=w.children;for(let O=0,z=L.length;O<z;O++)x(L[O],T,R,y,S)}function b(w){w.target.removeEventListener("dispose",b);for(let R in c){let y=c[R],S=w.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}var oT={[Jh]:Kh,[Qh]:eu,[jh]:nu,[ro]:tu,[Kh]:Jh,[eu]:Qh,[nu]:jh,[tu]:ro};function aT(s,t){function e(){let F=!1,ht=new qe,ft=null,bt=new qe(0,0,0,0);return{setMask:function(rt){ft!==rt&&!F&&(s.colorMask(rt,rt,rt,rt),ft=rt)},setLocked:function(rt){F=rt},setClear:function(rt,it,It,$t,ve){ve===!0&&(rt*=$t,it*=$t,It*=$t),ht.set(rt,it,It,$t),bt.equals(ht)===!1&&(s.clearColor(rt,it,It,$t),bt.copy(ht))},reset:function(){F=!1,ft=null,bt.set(-1,0,0,0)}}}function n(){let F=!1,ht=!1,ft=null,bt=null,rt=null;return{setReversed:function(it){if(ht!==it){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let $t=rt;rt=null,this.setClear($t)}},getReversed:function(){return ht},setTest:function(it){it?nt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(it){ft!==it&&!F&&(s.depthMask(it),ft=it)},setFunc:function(it){if(ht&&(it=oT[it]),bt!==it){switch(it){case Jh:s.depthFunc(s.NEVER);break;case Kh:s.depthFunc(s.ALWAYS);break;case Qh:s.depthFunc(s.LESS);break;case ro:s.depthFunc(s.LEQUAL);break;case jh:s.depthFunc(s.EQUAL);break;case tu:s.depthFunc(s.GEQUAL);break;case eu:s.depthFunc(s.GREATER);break;case nu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}bt=it}},setLocked:function(it){F=it},setClear:function(it){rt!==it&&(ht&&(it=1-it),s.clearDepth(it),rt=it)},reset:function(){F=!1,ft=null,bt=null,rt=null,ht=!1}}}function i(){let F=!1,ht=null,ft=null,bt=null,rt=null,it=null,It=null,$t=null,ve=null;return{setTest:function(Et){F||(Et?nt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(Et){ht!==Et&&!F&&(s.stencilMask(Et),ht=Et)},setFunc:function(Et,kt,ne){(ft!==Et||bt!==kt||rt!==ne)&&(s.stencilFunc(Et,kt,ne),ft=Et,bt=kt,rt=ne)},setOp:function(Et,kt,ne){(it!==Et||It!==kt||$t!==ne)&&(s.stencilOp(Et,kt,ne),it=Et,It=kt,$t=ne)},setLocked:function(Et){F=Et},setClear:function(Et){ve!==Et&&(s.clearStencil(Et),ve=Et)},reset:function(){F=!1,ht=null,ft=null,bt=null,rt=null,it=null,It=null,$t=null,ve=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,u=[],g=null,_=!1,p=null,m=null,v=null,M=null,x=null,b=null,w=null,T=new Bt(0,0,0),R=0,y=!1,S=null,P=null,L=null,O=null,z=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,X=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=X>=2);let K=null,I={},at=s.getParameter(s.SCISSOR_BOX),Mt=s.getParameter(s.VIEWPORT),Zt=new qe().fromArray(at),Wt=new qe().fromArray(Mt);function Kt(F,ht,ft,bt){let rt=new Uint8Array(4),it=s.createTexture();s.bindTexture(F,it),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<ft;It++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(ht+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return it}let J={};J[s.TEXTURE_2D]=Kt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Kt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Kt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Kt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(ro),Q(!1),N(Mp),nt(s.CULL_FACE),et(Xs);function nt(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function yt(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function At(F,ht){return d[F]!==ht?(s.bindFramebuffer(F,ht),d[F]=ht,F===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ht),F===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function Ct(F,ht){let ft=u,bt=!1;if(F){ft=f.get(ht),ft===void 0&&(ft=[],f.set(ht,ft));let rt=F.textures;if(ft.length!==rt.length||ft[0]!==s.COLOR_ATTACHMENT0){for(let it=0,It=rt.length;it<It;it++)ft[it]=s.COLOR_ATTACHMENT0+it;ft.length=rt.length,bt=!0}}else ft[0]!==s.BACK&&(ft[0]=s.BACK,bt=!0);bt&&s.drawBuffers(ft)}function Jt(F){return g!==F?(s.useProgram(F),g=F,!0):!1}let re={[Mr]:s.FUNC_ADD,[jg]:s.FUNC_SUBTRACT,[t_]:s.FUNC_REVERSE_SUBTRACT};re[e_]=s.MIN,re[n_]=s.MAX;let D={[i_]:s.ZERO,[s_]:s.ONE,[r_]:s.SRC_COLOR,[Mh]:s.SRC_ALPHA,[u_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[a_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[Sh]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[d_]:s.CONSTANT_COLOR,[f_]:s.ONE_MINUS_CONSTANT_COLOR,[p_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function et(F,ht,ft,bt,rt,it,It,$t,ve,Et){if(F===Xs){_===!0&&(yt(s.BLEND),_=!1);return}if(_===!1&&(nt(s.BLEND),_=!0),F!==Qg){if(F!==p||Et!==y){if((m!==Mr||x!==Mr)&&(s.blendEquation(s.FUNC_ADD),m=Mr,x=Mr),Et)switch(F){case so:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case co:s.blendFunc(s.ONE,s.ONE);break;case bp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case wp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case so:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bp:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wp:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,b=null,w=null,T.set(0,0,0),R=0,p=F,y=Et}return}rt=rt||ht,it=it||ft,It=It||bt,(ht!==m||rt!==x)&&(s.blendEquationSeparate(re[ht],re[rt]),m=ht,x=rt),(ft!==v||bt!==M||it!==b||It!==w)&&(s.blendFuncSeparate(D[ft],D[bt],D[it],D[It]),v=ft,M=bt,b=it,w=It),($t.equals(T)===!1||ve!==R)&&(s.blendColor($t.r,$t.g,$t.b,ve),T.copy($t),R=ve),p=F,y=!1}function j(F,ht){F.side===pn?yt(s.CULL_FACE):nt(s.CULL_FACE);let ft=F.side===Rn;ht&&(ft=!ft),Q(ft),F.blending===so&&F.transparent===!1?et(Xs):et(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let bt=F.stencilWrite;a.setTest(bt),bt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Q(F){S!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),S=F)}function N(F){F!==$g?(nt(s.CULL_FACE),F!==P&&(F===Mp?s.cullFace(s.BACK):F===Jg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),P=F}function ut(F){F!==L&&(V&&s.lineWidth(F),L=F)}function ot(F,ht,ft){F?(nt(s.POLYGON_OFFSET_FILL),(O!==ht||z!==ft)&&(s.polygonOffset(ht,ft),O=ht,z=ft)):yt(s.POLYGON_OFFSET_FILL)}function pt(F){F?nt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function Dt(F){F===void 0&&(F=s.TEXTURE0+H-1),K!==F&&(s.activeTexture(F),K=F)}function Xt(F,ht,ft){ft===void 0&&(K===null?ft=s.TEXTURE0+H-1:ft=K);let bt=I[ft];bt===void 0&&(bt={type:void 0,texture:void 0},I[ft]=bt),(bt.type!==F||bt.texture!==ht)&&(K!==ft&&(s.activeTexture(ft),K=ft),s.bindTexture(F,ht||J[F]),bt.type=F,bt.texture=ht)}function C(){let F=I[K];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{s.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{s.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{s.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(F){Zt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Zt.copy(F))}function qt(F){Wt.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),Wt.copy(F))}function Ft(F,ht){let ft=c.get(ht);ft===void 0&&(ft=new WeakMap,c.set(ht,ft));let bt=ft.get(F);bt===void 0&&(bt=s.getUniformBlockIndex(ht,F.name),ft.set(F,bt))}function gt(F,ht){let bt=c.get(ht).get(F);l.get(ht)!==bt&&(s.uniformBlockBinding(ht,bt,F.__bindingPointIndex),l.set(ht,bt))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},K=null,I={},d={},f=new WeakMap,u=[],g=null,_=!1,p=null,m=null,v=null,M=null,x=null,b=null,w=null,T=new Bt(0,0,0),R=0,y=!1,S=null,P=null,L=null,O=null,z=null,Zt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:yt,bindFramebuffer:At,drawBuffers:Ct,useProgram:Jt,setBlending:et,setMaterial:j,setFlipSided:Q,setCullFace:N,setLineWidth:ut,setPolygonOffset:ot,setScissorTest:pt,activeTexture:Dt,bindTexture:Xt,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:_t,texImage3D:ct,updateUBOMapping:Ft,uniformBlockBinding:gt,texStorage2D:dt,texStorage3D:Lt,texSubImage2D:Z,texSubImage3D:tt,compressedTexSubImage2D:$,compressedTexSubImage3D:Rt,scissor:xt,viewport:qt,reset:te}}function lT(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return u?new OffscreenCanvas(C,E):xl("canvas")}function _(C,E,G){let Z=1,tt=Xt(C);if((tt.width>G||tt.height>G)&&(Z=G/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(Z*tt.width),Rt=Math.floor(Z*tt.height);d===void 0&&(d=g($,Rt));let dt=E?g($,Rt):d;return dt.width=$,dt.height=Rt,dt.getContext("2d").drawImage(C,0,0,$,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+Rt+")."),dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),C;return C}function p(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,E,G,Z,tt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=E;if(E===s.RED&&(G===s.FLOAT&&($=s.R32F),G===s.HALF_FLOAT&&($=s.R16F),G===s.UNSIGNED_BYTE&&($=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.R8UI),G===s.UNSIGNED_SHORT&&($=s.R16UI),G===s.UNSIGNED_INT&&($=s.R32UI),G===s.BYTE&&($=s.R8I),G===s.SHORT&&($=s.R16I),G===s.INT&&($=s.R32I)),E===s.RG&&(G===s.FLOAT&&($=s.RG32F),G===s.HALF_FLOAT&&($=s.RG16F),G===s.UNSIGNED_BYTE&&($=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RG8UI),G===s.UNSIGNED_SHORT&&($=s.RG16UI),G===s.UNSIGNED_INT&&($=s.RG32UI),G===s.BYTE&&($=s.RG8I),G===s.SHORT&&($=s.RG16I),G===s.INT&&($=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGB8UI),G===s.UNSIGNED_SHORT&&($=s.RGB16UI),G===s.UNSIGNED_INT&&($=s.RGB32UI),G===s.BYTE&&($=s.RGB8I),G===s.SHORT&&($=s.RGB16I),G===s.INT&&($=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&($=s.RGBA8UI),G===s.UNSIGNED_SHORT&&($=s.RGBA16UI),G===s.UNSIGNED_INT&&($=s.RGBA32UI),G===s.BYTE&&($=s.RGBA8I),G===s.SHORT&&($=s.RGBA16I),G===s.INT&&($=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),E===s.RGBA){let Rt=tt?gl:_e.getTransfer(Z);G===s.FLOAT&&($=s.RGBA32F),G===s.HALF_FLOAT&&($=s.RGBA16F),G===s.UNSIGNED_BYTE&&($=Rt===Te?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(C,E){let G;return C?E===null||E===Er||E===xa?G=s.DEPTH24_STENCIL8:E===is?G=s.DEPTH32F_STENCIL8:E===ga&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Er||E===xa?G=s.DEPTH_COMPONENT24:E===is?G=s.DEPTH_COMPONENT32F:E===ga&&(G=s.DEPTH_COMPONENT16),G}function b(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==ai&&C.minFilter!==ji?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){let E=C.target;E.removeEventListener("dispose",w),R(E),E.isVideoTexture&&h.delete(E)}function T(C){let E=C.target;E.removeEventListener("dispose",T),S(E)}function R(C){let E=n.get(C);if(E.__webglInit===void 0)return;let G=C.source,Z=f.get(G);if(Z){let tt=Z[E.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(C),Object.keys(Z).length===0&&f.delete(G)}n.remove(C)}function y(C){let E=n.get(C);s.deleteTexture(E.__webglTexture);let G=C.source,Z=f.get(G);delete Z[E.__cacheKey],o.memory.textures--}function S(C){let E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let tt=0;tt<E.__webglFramebuffer[Z].length;tt++)s.deleteFramebuffer(E.__webglFramebuffer[Z][tt]);else s.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)s.deleteFramebuffer(E.__webglFramebuffer[Z]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let G=C.textures;for(let Z=0,tt=G.length;Z<tt;Z++){let $=n.get(G[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(C)}let P=0;function L(){P=0}function O(){let C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function z(C){let E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function H(C,E){let G=n.get(C);if(C.isVideoTexture&&pt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(G,C,E);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function V(C,E){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){J(G,C,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function X(C,E){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){J(G,C,E);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function W(C,E){let G=n.get(C);if(C.version>0&&G.__version!==C.version){nt(G,C,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}let K={[oa]:s.REPEAT,[vr]:s.CLAMP_TO_EDGE,[bh]:s.MIRRORED_REPEAT},I={[ai]:s.NEAREST,[w_]:s.NEAREST_MIPMAP_NEAREST,[$l]:s.NEAREST_MIPMAP_LINEAR,[ji]:s.LINEAR,[ou]:s.LINEAR_MIPMAP_NEAREST,[xs]:s.LINEAR_MIPMAP_LINEAR},at={[R_]:s.NEVER,[N_]:s.ALWAYS,[C_]:s.LESS,[Up]:s.LEQUAL,[P_]:s.EQUAL,[L_]:s.GEQUAL,[I_]:s.GREATER,[D_]:s.NOTEQUAL};function Mt(C,E){if(E.type===is&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ji||E.magFilter===ou||E.magFilter===$l||E.magFilter===xs||E.minFilter===ji||E.minFilter===ou||E.minFilter===$l||E.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,K[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,I[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,I[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ai||E.minFilter!==$l&&E.minFilter!==xs||E.type===is&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Zt(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));let Z=E.source,tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));let $=z(E);if($!==C.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),tt[$].usedTimes++;let Rt=tt[C.__cacheKey];Rt!==void 0&&(tt[C.__cacheKey].usedTimes--,Rt.usedTimes===0&&y(E)),C.__cacheKey=$,C.__webglTexture=tt[$].texture}return G}function Wt(C,E,G){return Math.floor(Math.floor(C/G)/E)}function Kt(C,E,G,Z){let $=C.updateRanges;if($.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,Z,E.data);else{$.sort((ct,xt)=>ct.start-xt.start);let Rt=0;for(let ct=1;ct<$.length;ct++){let xt=$[Rt],qt=$[ct],Ft=xt.start+xt.count,gt=Wt(qt.start,E.width,4),te=Wt(xt.start,E.width,4);qt.start<=Ft+1&&gt===te&&Wt(qt.start+qt.count-1,E.width,4)===gt?xt.count=Math.max(xt.count,qt.start+qt.count-xt.start):(++Rt,$[Rt]=qt)}$.length=Rt+1;let dt=s.getParameter(s.UNPACK_ROW_LENGTH),Lt=s.getParameter(s.UNPACK_SKIP_PIXELS),_t=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ct=0,xt=$.length;ct<xt;ct++){let qt=$[ct],Ft=Math.floor(qt.start/4),gt=Math.ceil(qt.count/4),te=Ft%E.width,F=Math.floor(Ft/E.width),ht=gt,ft=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,te),s.pixelStorei(s.UNPACK_SKIP_ROWS,F),e.texSubImage2D(s.TEXTURE_2D,0,te,F,ht,ft,G,Z,E.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,dt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,_t)}}function J(C,E,G){let Z=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=s.TEXTURE_3D);let tt=Zt(C,E),$=E.source;e.bindTexture(Z,C.__webglTexture,s.TEXTURE0+G);let Rt=n.get($);if($.version!==Rt.__version||tt===!0){e.activeTexture(s.TEXTURE0+G);let dt=_e.getPrimaries(_e.workingColorSpace),Lt=E.colorSpace===Ys?null:_e.getPrimaries(E.colorSpace),_t=E.colorSpace===Ys||dt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let ct=_(E.image,!1,i.maxTextureSize);ct=Dt(E,ct);let xt=r.convert(E.format,E.colorSpace),qt=r.convert(E.type),Ft=M(E.internalFormat,xt,qt,E.colorSpace,E.isVideoTexture);Mt(Z,E);let gt,te=E.mipmaps,F=E.isVideoTexture!==!0,ht=Rt.__version===void 0||tt===!0,ft=$.dataReady,bt=b(E,ct);if(E.isDepthTexture)Ft=x(E.format===ya,E.type),ht&&(F?e.texStorage2D(s.TEXTURE_2D,1,Ft,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,xt,qt,null));else if(E.isDataTexture)if(te.length>0){F&&ht&&e.texStorage2D(s.TEXTURE_2D,bt,Ft,te[0].width,te[0].height);for(let rt=0,it=te.length;rt<it;rt++)gt=te[rt],F?ft&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,gt.width,gt.height,xt,qt,gt.data):e.texImage2D(s.TEXTURE_2D,rt,Ft,gt.width,gt.height,0,xt,qt,gt.data);E.generateMipmaps=!1}else F?(ht&&e.texStorage2D(s.TEXTURE_2D,bt,Ft,ct.width,ct.height),ft&&Kt(E,ct,xt,qt)):e.texImage2D(s.TEXTURE_2D,0,Ft,ct.width,ct.height,0,xt,qt,ct.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Ft,te[0].width,te[0].height,ct.depth);for(let rt=0,it=te.length;rt<it;rt++)if(gt=te[rt],E.format!==Wi)if(xt!==null)if(F){if(ft)if(E.layerUpdates.size>0){let It=Vp(gt.width,gt.height,E.format,E.type);for(let $t of E.layerUpdates){let ve=gt.data.subarray($t*It/gt.data.BYTES_PER_ELEMENT,($t+1)*It/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,$t,gt.width,gt.height,1,xt,ve)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,ct.depth,xt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,rt,Ft,gt.width,gt.height,ct.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ft&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,ct.depth,xt,qt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,rt,Ft,gt.width,gt.height,ct.depth,0,xt,qt,gt.data)}else{F&&ht&&e.texStorage2D(s.TEXTURE_2D,bt,Ft,te[0].width,te[0].height);for(let rt=0,it=te.length;rt<it;rt++)gt=te[rt],E.format!==Wi?xt!==null?F?ft&&e.compressedTexSubImage2D(s.TEXTURE_2D,rt,0,0,gt.width,gt.height,xt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,rt,Ft,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ft&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,gt.width,gt.height,xt,qt,gt.data):e.texImage2D(s.TEXTURE_2D,rt,Ft,gt.width,gt.height,0,xt,qt,gt.data)}else if(E.isDataArrayTexture)if(F){if(ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Ft,ct.width,ct.height,ct.depth),ft)if(E.layerUpdates.size>0){let rt=Vp(ct.width,ct.height,E.format,E.type);for(let it of E.layerUpdates){let It=ct.data.subarray(it*rt/ct.data.BYTES_PER_ELEMENT,(it+1)*rt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,xt,qt,It)}E.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,qt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,ct.width,ct.height,ct.depth,0,xt,qt,ct.data);else if(E.isData3DTexture)F?(ht&&e.texStorage3D(s.TEXTURE_3D,bt,Ft,ct.width,ct.height,ct.depth),ft&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,qt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,ct.width,ct.height,ct.depth,0,xt,qt,ct.data);else if(E.isFramebufferTexture){if(ht)if(F)e.texStorage2D(s.TEXTURE_2D,bt,Ft,ct.width,ct.height);else{let rt=ct.width,it=ct.height;for(let It=0;It<bt;It++)e.texImage2D(s.TEXTURE_2D,It,Ft,rt,it,0,xt,qt,null),rt>>=1,it>>=1}}else if(te.length>0){if(F&&ht){let rt=Xt(te[0]);e.texStorage2D(s.TEXTURE_2D,bt,Ft,rt.width,rt.height)}for(let rt=0,it=te.length;rt<it;rt++)gt=te[rt],F?ft&&e.texSubImage2D(s.TEXTURE_2D,rt,0,0,xt,qt,gt):e.texImage2D(s.TEXTURE_2D,rt,Ft,xt,qt,gt);E.generateMipmaps=!1}else if(F){if(ht){let rt=Xt(ct);e.texStorage2D(s.TEXTURE_2D,bt,Ft,rt.width,rt.height)}ft&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,qt,ct)}else e.texImage2D(s.TEXTURE_2D,0,Ft,xt,qt,ct);p(E)&&m(Z),Rt.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function nt(C,E,G){if(E.image.length!==6)return;let Z=Zt(C,E),tt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+G);let $=n.get(tt);if(tt.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+G);let Rt=_e.getPrimaries(_e.workingColorSpace),dt=E.colorSpace===Ys?null:_e.getPrimaries(E.colorSpace),Lt=E.colorSpace===Ys||Rt===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let _t=E.isCompressedTexture||E.image[0].isCompressedTexture,ct=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let it=0;it<6;it++)!_t&&!ct?xt[it]=_(E.image[it],!0,i.maxCubemapSize):xt[it]=ct?E.image[it].image:E.image[it],xt[it]=Dt(E,xt[it]);let qt=xt[0],Ft=r.convert(E.format,E.colorSpace),gt=r.convert(E.type),te=M(E.internalFormat,Ft,gt,E.colorSpace),F=E.isVideoTexture!==!0,ht=$.__version===void 0||Z===!0,ft=tt.dataReady,bt=b(E,qt);Mt(s.TEXTURE_CUBE_MAP,E);let rt;if(_t){F&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,te,qt.width,qt.height);for(let it=0;it<6;it++){rt=xt[it].mipmaps;for(let It=0;It<rt.length;It++){let $t=rt[It];E.format!==Wi?Ft!==null?F?ft&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,$t.width,$t.height,Ft,$t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,te,$t.width,$t.height,0,$t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,$t.width,$t.height,Ft,gt,$t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,te,$t.width,$t.height,0,Ft,gt,$t.data)}}}else{if(rt=E.mipmaps,F&&ht){rt.length>0&&bt++;let it=Xt(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,bt,te,it.width,it.height)}for(let it=0;it<6;it++)if(ct){F?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,xt[it].width,xt[it].height,Ft,gt,xt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,xt[it].width,xt[it].height,0,Ft,gt,xt[it].data);for(let It=0;It<rt.length;It++){let ve=rt[It].image[it].image;F?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,ve.width,ve.height,Ft,gt,ve.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,te,ve.width,ve.height,0,Ft,gt,ve.data)}}else{F?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,gt,xt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,te,Ft,gt,xt[it]);for(let It=0;It<rt.length;It++){let $t=rt[It];F?ft&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Ft,gt,$t.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,te,Ft,gt,$t.image[it])}}}p(E)&&m(s.TEXTURE_CUBE_MAP),$.__version=tt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function yt(C,E,G,Z,tt,$){let Rt=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),Lt=M(G.internalFormat,Rt,dt,G.colorSpace),_t=n.get(E),ct=n.get(G);if(ct.__renderTarget=E,!_t.__hasExternalTextures){let xt=Math.max(1,E.width>>$),qt=Math.max(1,E.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,Lt,xt,qt,E.depth,0,Rt,dt,null):e.texImage2D(tt,$,Lt,xt,qt,0,Rt,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),ot(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,tt,ct.__webglTexture,0,ut(E)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,tt,ct.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(C,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){let Z=E.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,$=x(E.stencilBuffer,tt),Rt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=ut(E);ot(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,$,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,$,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,$,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,C)}else{let Z=E.textures;for(let tt=0;tt<Z.length;tt++){let $=Z[tt],Rt=r.convert($.format,$.colorSpace),dt=r.convert($.type),Lt=M($.internalFormat,Rt,dt,$.colorSpace),_t=ut(E);G&&ot(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,_t,Lt,E.width,E.height):ot(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_t,Lt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Lt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(E.depthTexture);Z.__renderTarget=E,(!Z.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);let tt=Z.__webglTexture,$=ut(E);if(E.depthTexture.format===aa)ot(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(E.depthTexture.format===ya)ot(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Jt(C){let E=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){let tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),E.__depthDisposeCallback=tt}E.__boundDepthTexture=Z}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let Z=C.texture.mipmaps;Z&&Z.length>0?Ct(E.__webglFramebuffer[0],C):Ct(E.__webglFramebuffer,C)}else if(G){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=s.createRenderbuffer(),At(E.__webglDepthbuffer[Z],C,!1);else{let tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),At(E.__webglDepthbuffer,C,!1);else{let tt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(C,E,G){let Z=n.get(C);E!==void 0&&yt(Z.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Jt(C)}function D(C){let E=C.texture,G=n.get(C),Z=n.get(E);C.addEventListener("dispose",T);let tt=C.textures,$=C.isWebGLCubeRenderTarget===!0,Rt=tt.length>1;if(Rt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=E.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)G.__webglFramebuffer[dt][Lt]=s.createFramebuffer()}else G.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<E.mipmaps.length;dt++)G.__webglFramebuffer[dt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let dt=0,Lt=tt.length;dt<Lt;dt++){let _t=n.get(tt[dt]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&ot(C)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<tt.length;dt++){let Lt=tt[dt];G.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);let _t=r.convert(Lt.format,Lt.colorSpace),ct=r.convert(Lt.type),xt=M(Lt.internalFormat,_t,ct,Lt.colorSpace,C.isXRRenderTarget===!0),qt=ut(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,xt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),At(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Mt(s.TEXTURE_CUBE_MAP,E);for(let dt=0;dt<6;dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)yt(G.__webglFramebuffer[dt][Lt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Lt);else yt(G.__webglFramebuffer[dt],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);p(E)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,Lt=tt.length;dt<Lt;dt++){let _t=tt[dt],ct=n.get(_t),xt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(xt,ct.__webglTexture),Mt(xt,_t),yt(G.__webglFramebuffer,C,_t,s.COLOR_ATTACHMENT0+dt,xt,0),p(_t)&&m(xt)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Z.__webglTexture),Mt(dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Lt=0;Lt<E.mipmaps.length;Lt++)yt(G.__webglFramebuffer[Lt],C,E,s.COLOR_ATTACHMENT0,dt,Lt);else yt(G.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,dt,0);p(E)&&m(dt),e.unbindTexture()}C.depthBuffer&&Jt(C)}function et(C){let E=C.textures;for(let G=0,Z=E.length;G<Z;G++){let tt=E[G];if(p(tt)){let $=v(C),Rt=n.get(tt).__webglTexture;e.bindTexture($,Rt),m($),e.unbindTexture()}}}let j=[],Q=[];function N(C){if(C.samples>0){if(ot(C)===!1){let E=C.textures,G=C.width,Z=C.height,tt=s.COLOR_BUFFER_BIT,$=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(C),dt=E.length>1;if(dt)for(let _t=0;_t<E.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer);let Lt=C.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let _t=0;_t<E.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);let ct=n.get(E[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,G,Z,0,0,G,Z,tt,s.NEAREST),l===!0&&(j.length=0,Q.length=0,j.push(s.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.resolveDepthBuffer===!1&&(j.push($),Q.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Q)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<E.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);let ct=n.get(E[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ut(C){return Math.min(i.maxSamples,C.samples)}function ot(C){let E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function pt(C){let E=o.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function Dt(C,E){let G=C.colorSpace,Z=C.format,tt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==oo&&G!==Ys&&(_e.getTransfer(G)===Te?(Z!==Wi||tt!==ns)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=L,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=re,this.setupRenderTarget=D,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Jt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ot}function cT(s,t){function e(n,i=Ys){let r,o=_e.getTransfer(i);if(n===ns)return s.UNSIGNED_BYTE;if(n===lu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===cu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Cp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Pp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ap)return s.BYTE;if(n===Rp)return s.SHORT;if(n===ga)return s.UNSIGNED_SHORT;if(n===au)return s.INT;if(n===Er)return s.UNSIGNED_INT;if(n===is)return s.FLOAT;if(n===_a)return s.HALF_FLOAT;if(n===Ip)return s.ALPHA;if(n===Dp)return s.RGB;if(n===Wi)return s.RGBA;if(n===aa)return s.DEPTH_COMPONENT;if(n===ya)return s.DEPTH_STENCIL;if(n===hu)return s.RED;if(n===uu)return s.RED_INTEGER;if(n===Lp)return s.RG;if(n===du)return s.RG_INTEGER;if(n===fu)return s.RGBA_INTEGER;if(n===Jl||n===Kl||n===Ql||n===jl)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Jl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ql)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Kl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ql)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pu||n===mu||n===gu||n===_u)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xu||n===yu||n===vu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xu||n===yu)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mu||n===Su||n===bu||n===wu||n===Eu||n===Tu||n===Au||n===Ru||n===Cu||n===Pu||n===Iu||n===Du||n===Lu||n===Nu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Mu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Su)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Eu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Au)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ru)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Iu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Du)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Lu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nu)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uu||n===Fu||n===Ou)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Uu)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ou)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bu||n===ku||n===zu||n===Hu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Bu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===xa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var hT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uT=`
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

}`,em=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Il(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Kn({vertexShader:hT,fragmentShader:uT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tt(new Ze(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nm=class extends Hs{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,_=typeof XRWebGLBinding<"u",p=new em,m={},v=e.getContextAttributes(),M=null,x=null,b=[],w=[],T=new lt,R=null,y=new Mn;y.viewport=new qe;let S=new Mn;S.viewport=new qe;let P=[y,S],L=new $h,O=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=b[J];return nt===void 0&&(nt=new ha,b[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=b[J];return nt===void 0&&(nt=new ha,b[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=b[J];return nt===void 0&&(nt=new ha,b[J]=nt),nt.getHandSpace()};function H(J){let nt=w.indexOf(J.inputSource);if(nt===-1)return;let yt=b[nt];yt!==void 0&&(yt.update(J.inputSource,J.frame,c||o),yt.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let J=0;J<b.length;J++){let nt=w[J];nt!==null&&(w[J]=null,b[J].disconnect(nt))}O=null,z=null,p.reset();for(let J in m)delete m[J];t.setRenderTarget(M),u=null,f=null,d=null,i=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),v.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,At=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,yt=v.stencil?ya:aa,At=v.stencil?xa:Er);let Jt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Jt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),x=new fs(f.textureWidth,f.textureHeight,{format:Wi,type:ns,depthTexture:new Pl(f.textureWidth,f.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let yt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,yt),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new fs(u.framebufferWidth,u.framebufferHeight,{format:Wi,type:ns,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(J){for(let nt=0;nt<J.removed.length;nt++){let yt=J.removed[nt],At=w.indexOf(yt);At>=0&&(w[At]=null,b[At].disconnect(yt))}for(let nt=0;nt<J.added.length;nt++){let yt=J.added[nt],At=w.indexOf(yt);if(At===-1){for(let Jt=0;Jt<b.length;Jt++)if(Jt>=w.length){w.push(yt),At=Jt;break}else if(w[Jt]===null){w[Jt]=yt,At=Jt;break}if(At===-1)break}let Ct=b[At];Ct&&Ct.connect(yt)}}let W=new U,K=new U;function I(J,nt,yt){W.setFromMatrixPosition(nt.matrixWorld),K.setFromMatrixPosition(yt.matrixWorld);let At=W.distanceTo(K),Ct=nt.projectionMatrix.elements,Jt=yt.projectionMatrix.elements,re=Ct[14]/(Ct[10]-1),D=Ct[14]/(Ct[10]+1),et=(Ct[9]+1)/Ct[5],j=(Ct[9]-1)/Ct[5],Q=(Ct[8]-1)/Ct[0],N=(Jt[8]+1)/Jt[0],ut=re*Q,ot=re*N,pt=At/(-Q+N),Dt=pt*-Q;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Dt),J.translateZ(pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ct[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{let Xt=re+pt,C=D+pt,E=ut-Dt,G=ot+(At-Dt),Z=et*D/C*Xt,tt=j*D/C*Xt;J.projectionMatrix.makePerspective(E,G,Z,tt,Xt,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,yt=J.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(yt=p.depthFar)),L.near=S.near=y.near=nt,L.far=S.far=y.far=yt,(O!==L.near||z!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),O=L.near,z=L.far),L.layers.mask=J.layers.mask|6,y.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;let At=J.parent,Ct=L.cameras;at(L,At);for(let Jt=0;Jt<Ct.length;Jt++)at(Ct[Jt],At);Ct.length===2?I(L,y,S):L.projectionMatrix.copy(y.projectionMatrix),Mt(J,L,At)};function Mt(J,nt,yt){yt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(yt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Eh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(J){return m[J]};let Zt=null;function Wt(J,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){let yt=h.views;u!==null&&(t.setRenderTargetFramebuffer(x,u.framebuffer),t.setRenderTarget(x));let At=!1;yt.length!==L.cameras.length&&(L.cameras.length=0,At=!0);for(let D=0;D<yt.length;D++){let et=yt[D],j=null;if(u!==null)j=u.getViewport(et);else{let N=d.getViewSubImage(f,et);j=N.viewport,D===0&&(t.setRenderTargetTextures(x,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(x))}let Q=P[D];Q===void 0&&(Q=new Mn,Q.layers.enable(D),Q.viewport=new qe,P[D]=Q),Q.matrix.fromArray(et.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(et.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(j.x,j.y,j.width,j.height),D===0&&(L.matrix.copy(Q.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),At===!0&&L.cameras.push(Q)}let Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let D=d.getDepthInformation(yt[0]);D&&D.isValid&&D.texture&&p.init(D,i.renderState)}if(Ct&&Ct.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let D=0;D<yt.length;D++){let et=yt[D].camera;if(et){let j=m[et];j||(j=new Il,m[et]=j);let Q=d.getCameraImage(et);j.sourceTexture=Q}}}}for(let yt=0;yt<b.length;yt++){let At=w[yt],Ct=b[yt];At!==null&&Ct!==void 0&&Ct.update(At,nt,c||o)}Zt&&Zt(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}let Kt=new fx;Kt.setAnimationLoop(Wt),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}},mo=new ci,dT=new Ae;function fT(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Bp(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,v,M,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&u(p,m,x)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,v,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=t.get(m),M=v.envMap,x=v.envMapRotation;M&&(p.envMap.value=M,mo.copy(x),mo.x*=-1,mo.y*=-1,mo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mo.y*=-1,mo.z*=-1),p.envMapRotation.value.setFromMatrix4(dT.makeRotationFromEuler(mo)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function pT(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let x=M.program;n.uniformBlockBinding(v,x)}function c(v,M){let x=i[v.id];x===void 0&&(g(v),x=h(v),i[v.id]=x,v.addEventListener("dispose",p));let b=M.program;n.updateUBOMapping(v,b);let w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){let M=d();v.__bindingPointIndex=M;let x=s.createBuffer(),b=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,b,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,x),x}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=i[v.id],x=v.uniforms,b=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,T=x.length;w<T;w++){let R=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,S=R.length;y<S;y++){let P=R[y];if(u(P,w,y,b)===!0){let L=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],z=0;for(let H=0;H<O.length;H++){let V=O[H],X=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,L+z,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,z),z+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,M,x,b){let w=v.value,T=M+"_"+x;if(b[T]===void 0)return typeof w=="number"||typeof w=="boolean"?b[T]=w:b[T]=w.clone(),!0;{let R=b[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return b[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){let M=v.uniforms,x=0,b=16;for(let T=0,R=M.length;T<R;T++){let y=Array.isArray(M[T])?M[T]:[M[T]];for(let S=0,P=y.length;S<P;S++){let L=y[S],O=Array.isArray(L.value)?L.value:[L.value];for(let z=0,H=O.length;z<H;z++){let V=O[z],X=_(V),W=x%b,K=W%X.boundary,I=W+K;x+=K,I!==0&&b-I<X.storage&&(x+=b-I),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=X.storage}}}let w=x%b;return w>0&&(x+=b-w),v.__size=x,v.__cache={},this}function _(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function p(v){let M=v.target;M.removeEventListener("dispose",p);let x=o.indexOf(M.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}var Xu=class{constructor(t={}){let{canvas:e=U_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;let g=new Uint32Array(4),_=new Int32Array(4),p=null,m=null,v=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=An;let w=0,T=0,R=null,y=-1,S=null,P=new qe,L=new qe,O=null,z=new Bt(0),H=0,V=e.width,X=e.height,W=1,K=null,I=null,at=new qe(0,0,V,X),Mt=new qe(0,0,V,X),Zt=!1,Wt=new ua,Kt=!1,J=!1,nt=new Ae,yt=new U,At=new qe,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function re(){return R===null?W:1}let D=n;function et(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",rt,!1),D===null){let B="webgl2";if(D=et(B,A),D===null)throw et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let j,Q,N,ut,ot,pt,Dt,Xt,C,E,G,Z,tt,$,Rt,dt,Lt,_t,ct,xt,qt,Ft,gt,te;function F(){j=new Dw(D),j.init(),Ft=new cT(D,j),Q=new Ew(D,j,t,Ft),N=new aT(D,j),Q.reversedDepthBuffer&&f&&N.buffers.depth.setReversed(!0),ut=new Uw(D),ot=new ZE,pt=new lT(D,j,N,ot,Q,Ft,ut),Dt=new Aw(x),Xt=new Iw(x),C=new HS(D),gt=new bw(D,C),E=new Lw(D,C,ut,gt),G=new Ow(D,E,C,ut),ct=new Fw(D,Q,pt),dt=new Tw(ot),Z=new YE(x,Dt,Xt,j,Q,gt,dt),tt=new fT(x,ot),$=new JE,Rt=new nT(j),_t=new Sw(x,Dt,Xt,N,G,u,l),Lt=new rT(x,G,Q),te=new pT(D,ut,Q,N),xt=new ww(D,j,ut),qt=new Nw(D,j,ut),ut.programs=Z.programs,x.capabilities=Q,x.extensions=j,x.properties=ot,x.renderLists=$,x.shadowMap=Lt,x.state=N,x.info=ut}F();let ht=new nm(x,D);this.xr=ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let A=j.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=j.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(V,X,!1))},this.getSize=function(A){return A.set(V,X)},this.setSize=function(A,B,q=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,X=B,e.width=Math.floor(A*W),e.height=Math.floor(B*W),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(V*W,X*W).floor()},this.setDrawingBufferSize=function(A,B,q){V=A,X=B,W=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(at)},this.setViewport=function(A,B,q,Y){A.isVector4?at.set(A.x,A.y,A.z,A.w):at.set(A,B,q,Y),N.viewport(P.copy(at).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Mt)},this.setScissor=function(A,B,q,Y){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,B,q,Y),N.scissor(L.copy(Mt).multiplyScalar(W).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(A){N.setScissorTest(Zt=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){I=A},this.getClearColor=function(A){return A.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,q=!0){let Y=0;if(A){let k=!1;if(R!==null){let st=R.texture.format;k=st===fu||st===du||st===uu}if(k){let st=R.texture.type,mt=st===ns||st===Er||st===ga||st===xa||st===lu||st===cu,Nt=_t.getClearColor(),Pt=_t.getClearAlpha(),Yt=Nt.r,Ht=Nt.g,zt=Nt.b;mt?(g[0]=Yt,g[1]=Ht,g[2]=zt,g[3]=Pt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Yt,_[1]=Ht,_[2]=zt,_[3]=Pt,D.clearBufferiv(D.COLOR,0,_))}else Y|=D.COLOR_BUFFER_BIT}B&&(Y|=D.DEPTH_BUFFER_BIT),q&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",rt,!1),_t.dispose(),$.dispose(),Rt.dispose(),ot.dispose(),Dt.dispose(),Xt.dispose(),G.dispose(),gt.dispose(),te.dispose(),Z.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",ne),ht.removeEventListener("sessionend",St),Qt.stop()};function ft(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let A=ut.autoReset,B=Lt.enabled,q=Lt.autoUpdate,Y=Lt.needsUpdate,k=Lt.type;F(),ut.autoReset=A,Lt.enabled=B,Lt.autoUpdate=q,Lt.needsUpdate=Y,Lt.type=k}function rt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){let B=A.target;B.removeEventListener("dispose",it),It(B)}function It(A){$t(A),ot.remove(A)}function $t(A){let B=ot.get(A).programs;B!==void 0&&(B.forEach(function(q){Z.releaseProgram(q)}),A.isShaderMaterial&&Z.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,Y,k,st){B===null&&(B=Ct);let mt=k.isMesh&&k.matrixWorld.determinant()<0,Nt=Ee(A,B,q,Y,k);N.setMaterial(Y,mt);let Pt=q.index,Yt=1;if(Y.wireframe===!0){if(Pt=E.getWireframeAttribute(q),Pt===void 0)return;Yt=2}let Ht=q.drawRange,zt=q.attributes.position,oe=Ht.start*Yt,fe=(Ht.start+Ht.count)*Yt;st!==null&&(oe=Math.max(oe,st.start*Yt),fe=Math.min(fe,(st.start+st.count)*Yt)),Pt!==null?(oe=Math.max(oe,0),fe=Math.min(fe,Pt.count)):zt!=null&&(oe=Math.max(oe,0),fe=Math.min(fe,zt.count));let Je=fe-oe;if(Je<0||Je===1/0)return;gt.setup(k,Y,Nt,q,Pt);let Ue,Ce=xt;if(Pt!==null&&(Ue=C.get(Pt),Ce=qt,Ce.setIndex(Ue)),k.isMesh)Y.wireframe===!0?(N.setLineWidth(Y.wireframeLinewidth*re()),Ce.setMode(D.LINES)):Ce.setMode(D.TRIANGLES);else if(k.isLine){let jt=Y.linewidth;jt===void 0&&(jt=1),N.setLineWidth(jt*re()),k.isLineSegments?Ce.setMode(D.LINES):k.isLineLoop?Ce.setMode(D.LINE_LOOP):Ce.setMode(D.LINE_STRIP)}else k.isPoints?Ce.setMode(D.POINTS):k.isSprite&&Ce.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)la("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(j.get("WEBGL_multi_draw"))Ce.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let jt=k._multiDrawStarts,He=k._multiDrawCounts,Me=k._multiDrawCount,fi=Pt?C.get(Pt).bytesPerElement:1,So=ot.get(Y).currentProgram.getUniforms();for(let pi=0;pi<Me;pi++)So.setValue(D,"_gl_DrawID",pi),Ce.render(jt[pi]/fi,He[pi])}else if(k.isInstancedMesh)Ce.renderInstances(oe,Je,k.count);else if(q.isInstancedBufferGeometry){let jt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,He=Math.min(q.instanceCount,jt);Ce.renderInstances(oe,Je,He)}else Ce.render(oe,Je)};function ve(A,B,q){A.transparent===!0&&A.side===pn&&A.forceSinglePass===!1?(A.side=Rn,A.needsUpdate=!0,nn(A,B,q),A.side=zs,A.needsUpdate=!0,nn(A,B,q),A.side=pn):nn(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),m=Rt.get(q),m.init(B),M.push(m),q.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),A!==q&&A.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();let Y=new Set;return A.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let st=k.material;if(st)if(Array.isArray(st))for(let mt=0;mt<st.length;mt++){let Nt=st[mt];ve(Nt,q,k),Y.add(Nt)}else ve(st,q,k),Y.add(st)}),m=M.pop(),Y},this.compileAsync=function(A,B,q=null){let Y=this.compile(A,B,q);return new Promise(k=>{function st(){if(Y.forEach(function(mt){ot.get(mt).currentProgram.isReady()&&Y.delete(mt)}),Y.size===0){k(A);return}setTimeout(st,10)}j.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Et=null;function kt(A){Et&&Et(A)}function ne(){Qt.stop()}function St(){Qt.start()}let Qt=new fx;Qt.setAnimationLoop(kt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(A){Et=A,ht.setAnimationLoop(A),A===null?Qt.stop():Qt.start()},ht.addEventListener("sessionstart",ne),ht.addEventListener("sessionend",St),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(B),B=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,R),m=Rt.get(A,M.length),m.init(B),M.push(m),nt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Wt.setFromProjectionMatrix(nt,Qi,B.reversedDepth),J=this.localClippingEnabled,Kt=dt.init(this.clippingPlanes,J),p=$.get(A,v.length),p.init(),v.push(p),ht.enabled===!0&&ht.isPresenting===!0){let st=x.xr.getDepthSensingMesh();st!==null&&Gt(st,B,-1/0,x.sortObjects)}Gt(A,B,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(K,I),Jt=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Jt&&_t.addToRenderList(p,A),this.info.render.frame++,Kt===!0&&dt.beginShadows();let q=m.state.shadowsArray;Lt.render(q,A,B),Kt===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=p.opaque,k=p.transmissive;if(m.setupLights(),B.isArrayCamera){let st=B.cameras;if(k.length>0)for(let mt=0,Nt=st.length;mt<Nt;mt++){let Pt=st[mt];en(Y,k,A,Pt)}Jt&&_t.render(A);for(let mt=0,Nt=st.length;mt<Nt;mt++){let Pt=st[mt];ee(p,A,Pt,Pt.viewport)}}else k.length>0&&en(Y,k,A,B),Jt&&_t.render(A),ee(p,A,B);R!==null&&T===0&&(pt.updateMultisampleRenderTarget(R),pt.updateRenderTargetMipmap(R)),A.isScene===!0&&A.onAfterRender(x,A,B),gt.resetDefaultState(),y=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],Kt===!0&&dt.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function Gt(A,B,q,Y){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Wt.intersectsSprite(A)){Y&&At.setFromMatrixPosition(A.matrixWorld).applyMatrix4(nt);let mt=G.update(A),Nt=A.material;Nt.visible&&p.push(A,mt,Nt,q,At.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Wt.intersectsObject(A))){let mt=G.update(A),Nt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),At.copy(A.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),At.copy(mt.boundingSphere.center)),At.applyMatrix4(A.matrixWorld).applyMatrix4(nt)),Array.isArray(Nt)){let Pt=mt.groups;for(let Yt=0,Ht=Pt.length;Yt<Ht;Yt++){let zt=Pt[Yt],oe=Nt[zt.materialIndex];oe&&oe.visible&&p.push(A,mt,oe,q,At.z,zt)}}else Nt.visible&&p.push(A,mt,Nt,q,At.z,null)}}let st=A.children;for(let mt=0,Nt=st.length;mt<Nt;mt++)Gt(st[mt],B,q,Y)}function ee(A,B,q,Y){let k=A.opaque,st=A.transmissive,mt=A.transparent;m.setupLightsView(q),Kt===!0&&dt.setGlobalState(x.clippingPlanes,q),Y&&N.viewport(P.copy(Y)),k.length>0&&ae(k,B,q),st.length>0&&ae(st,B,q),mt.length>0&&ae(mt,B,q),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function en(A,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new fs(1,1,{generateMipmaps:!0,type:j.has("EXT_color_buffer_half_float")||j.has("EXT_color_buffer_float")?_a:ns,minFilter:xs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));let st=m.state.transmissionRenderTarget[Y.id],mt=Y.viewport||P;st.setSize(mt.z*x.transmissionResolutionScale,mt.w*x.transmissionResolutionScale);let Nt=x.getRenderTarget(),Pt=x.getActiveCubeFace(),Yt=x.getActiveMipmapLevel();x.setRenderTarget(st),x.getClearColor(z),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&_t.render(q);let Ht=x.toneMapping;x.toneMapping=qs;let zt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Kt===!0&&dt.setGlobalState(x.clippingPlanes,Y),ae(A,q,Y),pt.updateMultisampleRenderTarget(st),pt.updateRenderTargetMipmap(st),j.has("WEBGL_multisampled_render_to_texture")===!1){let oe=!1;for(let fe=0,Je=B.length;fe<Je;fe++){let Ue=B[fe],Ce=Ue.object,jt=Ue.geometry,He=Ue.material,Me=Ue.group;if(He.side===pn&&Ce.layers.test(Y.layers)){let fi=He.side;He.side=Rn,He.needsUpdate=!0,Be(Ce,q,Y,jt,He,Me),He.side=fi,He.needsUpdate=!0,oe=!0}}oe===!0&&(pt.updateMultisampleRenderTarget(st),pt.updateRenderTargetMipmap(st))}x.setRenderTarget(Nt,Pt,Yt),x.setClearColor(z,H),zt!==void 0&&(Y.viewport=zt),x.toneMapping=Ht}function ae(A,B,q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let k=0,st=A.length;k<st;k++){let mt=A[k],Nt=mt.object,Pt=mt.geometry,Yt=mt.group,Ht=mt.material;Ht.allowOverride===!0&&Y!==null&&(Ht=Y),Nt.layers.test(q.layers)&&Be(Nt,B,q,Pt,Ht,Yt)}}function Be(A,B,q,Y,k,st){A.onBeforeRender(x,B,q,Y,k,st),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),k.onBeforeRender(x,B,q,Y,A,st),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=Rn,k.needsUpdate=!0,x.renderBufferDirect(q,B,Y,k,A,st),k.side=zs,k.needsUpdate=!0,x.renderBufferDirect(q,B,Y,k,A,st),k.side=pn):x.renderBufferDirect(q,B,Y,k,A,st),A.onAfterRender(x,B,q,Y,k,st)}function nn(A,B,q){B.isScene!==!0&&(B=Ct);let Y=ot.get(A),k=m.state.lights,st=m.state.shadowsArray,mt=k.state.version,Nt=Z.getParameters(A,k.state,st,B,q),Pt=Z.getProgramCacheKey(Nt),Yt=Y.programs;Y.environment=A.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(A.isMeshStandardMaterial?Xt:Dt).get(A.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Yt===void 0&&(A.addEventListener("dispose",it),Yt=new Map,Y.programs=Yt);let Ht=Yt.get(Pt);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===mt)return Re(A,Nt),Ht}else Nt.uniforms=Z.getUniforms(A),A.onBeforeCompile(Nt,x),Ht=Z.acquireProgram(Nt,Pt),Yt.set(Pt,Ht),Y.uniforms=Nt.uniforms;let zt=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=dt.uniform),Re(A,Nt),Y.needsLights=Ne(A),Y.lightsStateVersion=mt,Y.needsLights&&(zt.ambientLightColor.value=k.state.ambient,zt.lightProbe.value=k.state.probe,zt.directionalLights.value=k.state.directional,zt.directionalLightShadows.value=k.state.directionalShadow,zt.spotLights.value=k.state.spot,zt.spotLightShadows.value=k.state.spotShadow,zt.rectAreaLights.value=k.state.rectArea,zt.ltc_1.value=k.state.rectAreaLTC1,zt.ltc_2.value=k.state.rectAreaLTC2,zt.pointLights.value=k.state.point,zt.pointLightShadows.value=k.state.pointShadow,zt.hemisphereLights.value=k.state.hemi,zt.directionalShadowMap.value=k.state.directionalShadowMap,zt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,zt.spotShadowMap.value=k.state.spotShadowMap,zt.spotLightMatrix.value=k.state.spotLightMatrix,zt.spotLightMap.value=k.state.spotLightMap,zt.pointShadowMap.value=k.state.pointShadowMap,zt.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function Le(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=ba.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function Re(A,B){let q=ot.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Ee(A,B,q,Y,k){B.isScene!==!0&&(B=Ct),pt.resetTextureUnits();let st=B.fog,mt=Y.isMeshStandardMaterial?B.environment:null,Nt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:oo,Pt=(Y.isMeshStandardMaterial?Xt:Dt).get(Y.envMap||mt),Yt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!q.morphAttributes.position,oe=!!q.morphAttributes.normal,fe=!!q.morphAttributes.color,Je=qs;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Je=x.toneMapping);let Ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ce=Ue!==void 0?Ue.length:0,jt=ot.get(Y),He=m.state.lights;if(Kt===!0&&(J===!0||A!==S)){let Hn=A===S&&Y.id===y;dt.setState(Y,A,Hn)}let Me=!1;Y.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==He.state.version||jt.outputColorSpace!==Nt||k.isBatchedMesh&&jt.batching===!1||!k.isBatchedMesh&&jt.batching===!0||k.isBatchedMesh&&jt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&jt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&jt.instancing===!1||!k.isInstancedMesh&&jt.instancing===!0||k.isSkinnedMesh&&jt.skinning===!1||!k.isSkinnedMesh&&jt.skinning===!0||k.isInstancedMesh&&jt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&jt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&jt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&jt.instancingMorph===!1&&k.morphTexture!==null||jt.envMap!==Pt||Y.fog===!0&&jt.fog!==st||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==dt.numPlanes||jt.numIntersection!==dt.numIntersection)||jt.vertexAlphas!==Yt||jt.vertexTangents!==Ht||jt.morphTargets!==zt||jt.morphNormals!==oe||jt.morphColors!==fe||jt.toneMapping!==Je||jt.morphTargetsCount!==Ce)&&(Me=!0):(Me=!0,jt.__version=Y.version);let fi=jt.currentProgram;Me===!0&&(fi=nn(Y,B,k));let So=!1,pi=!1,Ta=!1,Ve=fi.getUniforms(),Li=jt.uniforms;if(N.useProgram(fi.program)&&(So=!0,pi=!0,Ta=!0),Y.id!==y&&(y=Y.id,pi=!0),So||S!==A){N.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ve.setValue(D,"projectionMatrix",A.projectionMatrix),Ve.setValue(D,"viewMatrix",A.matrixWorldInverse);let ti=Ve.map.cameraPosition;ti!==void 0&&ti.setValue(D,yt.setFromMatrixPosition(A.matrixWorld)),Q.logarithmicDepthBuffer&&Ve.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ve.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,pi=!0,Ta=!0)}if(k.isSkinnedMesh){Ve.setOptional(D,k,"bindMatrix"),Ve.setOptional(D,k,"bindMatrixInverse");let Hn=k.skeleton;Hn&&(Hn.boneTexture===null&&Hn.computeBoneTexture(),Ve.setValue(D,"boneTexture",Hn.boneTexture,pt))}k.isBatchedMesh&&(Ve.setOptional(D,k,"batchingTexture"),Ve.setValue(D,"batchingTexture",k._matricesTexture,pt),Ve.setOptional(D,k,"batchingIdTexture"),Ve.setValue(D,"batchingIdTexture",k._indirectTexture,pt),Ve.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&Ve.setValue(D,"batchingColorTexture",k._colorsTexture,pt));let Ni=q.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&ct.update(k,q,fi),(pi||jt.receiveShadow!==k.receiveShadow)&&(jt.receiveShadow=k.receiveShadow,Ve.setValue(D,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Li.envMap.value=Pt,Li.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Li.envMapIntensity.value=B.environmentIntensity),pi&&(Ve.setValue(D,"toneMappingExposure",x.toneMappingExposure),jt.needsLights&&di(Li,Ta),st&&Y.fog===!0&&tt.refreshFogUniforms(Li,st),tt.refreshMaterialUniforms(Li,Y,W,X,m.state.transmissionRenderTarget[A.id]),ba.upload(D,Le(jt),Li,pt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ba.upload(D,Le(jt),Li,pt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ve.setValue(D,"center",k.center),Ve.setValue(D,"modelViewMatrix",k.modelViewMatrix),Ve.setValue(D,"normalMatrix",k.normalMatrix),Ve.setValue(D,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Hn=Y.uniformsGroups;for(let ti=0,fd=Hn.length;ti<fd;ti++){let Dr=Hn[ti];te.update(Dr,fi),te.bind(Dr,fi)}}return fi}function di(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Ne(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(A,B,q){let Y=ot.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ot.get(A.texture).__webglTexture=B,ot.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let q=ot.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let zn=D.createFramebuffer();this.setRenderTarget=function(A,B=0,q=0){R=A,w=B,T=q;let Y=!0,k=null,st=!1,mt=!1;if(A){let Pt=ot.get(A);if(Pt.__useDefaultFramebuffer!==void 0)N.bindFramebuffer(D.FRAMEBUFFER,null),Y=!1;else if(Pt.__webglFramebuffer===void 0)pt.setupRenderTarget(A);else if(Pt.__hasExternalTextures)pt.rebindTextures(A,ot.get(A.texture).__webglTexture,ot.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let zt=A.depthTexture;if(Pt.__boundDepthTexture!==zt){if(zt!==null&&ot.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");pt.setupDepthRenderbuffer(A)}}let Yt=A.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(mt=!0);let Ht=ot.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ht[B])?k=Ht[B][q]:k=Ht[B],st=!0):A.samples>0&&pt.useMultisampledRTT(A)===!1?k=ot.get(A).__webglMultisampledFramebuffer:Array.isArray(Ht)?k=Ht[q]:k=Ht,P.copy(A.viewport),L.copy(A.scissor),O=A.scissorTest}else P.copy(at).multiplyScalar(W).floor(),L.copy(Mt).multiplyScalar(W).floor(),O=Zt;if(q!==0&&(k=zn),N.bindFramebuffer(D.FRAMEBUFFER,k)&&Y&&N.drawBuffers(A,k),N.viewport(P),N.scissor(L),N.setScissorTest(O),st){let Pt=ot.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,q)}else if(mt){let Pt=B;for(let Yt=0;Yt<A.textures.length;Yt++){let Ht=ot.get(A.textures[Yt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Yt,Ht.__webglTexture,q,Pt)}}else if(A!==null&&q!==0){let Pt=ot.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,q)}y=-1},this.readRenderTargetPixels=function(A,B,q,Y,k,st,mt,Nt=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(Pt=Pt[mt]),Pt){N.bindFramebuffer(D.FRAMEBUFFER,Pt);try{let Yt=A.textures[Nt],Ht=Yt.format,zt=Yt.type;if(!Q.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-k&&(A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Nt),D.readPixels(B,q,Y,k,Ft.convert(Ht),Ft.convert(zt),st))}finally{let Yt=R!==null?ot.get(R).__webglFramebuffer:null;N.bindFramebuffer(D.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,Y,k,st,mt,Nt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=ot.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&mt!==void 0&&(Pt=Pt[mt]),Pt)if(B>=0&&B<=A.width-Y&&q>=0&&q<=A.height-k){N.bindFramebuffer(D.FRAMEBUFFER,Pt);let Yt=A.textures[Nt],Ht=Yt.format,zt=Yt.type;if(!Q.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),A.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Nt),D.readPixels(B,q,Y,k,Ft.convert(Ht),Ft.convert(zt),0);let fe=R!==null?ot.get(R).__webglFramebuffer:null;N.bindFramebuffer(D.FRAMEBUFFER,fe);let Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await F_(D,Je,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,oe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(oe),D.deleteSync(Je),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,q=0){let Y=Math.pow(2,-q),k=Math.floor(A.image.width*Y),st=Math.floor(A.image.height*Y),mt=B!==null?B.x:0,Nt=B!==null?B.y:0;pt.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,mt,Nt,k,st),N.unbindTexture()};let Di=D.createFramebuffer(),hn=D.createFramebuffer();this.copyTextureToTexture=function(A,B,q=null,Y=null,k=0,st=null){st===null&&(k!==0?(la("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),st=k,k=0):st=0);let mt,Nt,Pt,Yt,Ht,zt,oe,fe,Je,Ue=A.isCompressedTexture?A.mipmaps[st]:A.image;if(q!==null)mt=q.max.x-q.min.x,Nt=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Yt=q.min.x,Ht=q.min.y,zt=q.isBox3?q.min.z:0;else{let Ni=Math.pow(2,-k);mt=Math.floor(Ue.width*Ni),Nt=Math.floor(Ue.height*Ni),A.isDataArrayTexture?Pt=Ue.depth:A.isData3DTexture?Pt=Math.floor(Ue.depth*Ni):Pt=1,Yt=0,Ht=0,zt=0}Y!==null?(oe=Y.x,fe=Y.y,Je=Y.z):(oe=0,fe=0,Je=0);let Ce=Ft.convert(B.format),jt=Ft.convert(B.type),He;B.isData3DTexture?(pt.setTexture3D(B,0),He=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(pt.setTexture2DArray(B,0),He=D.TEXTURE_2D_ARRAY):(pt.setTexture2D(B,0),He=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Me=D.getParameter(D.UNPACK_ROW_LENGTH),fi=D.getParameter(D.UNPACK_IMAGE_HEIGHT),So=D.getParameter(D.UNPACK_SKIP_PIXELS),pi=D.getParameter(D.UNPACK_SKIP_ROWS),Ta=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ue.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ue.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ht),D.pixelStorei(D.UNPACK_SKIP_IMAGES,zt);let Ve=A.isDataArrayTexture||A.isData3DTexture,Li=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Ni=ot.get(A),Hn=ot.get(B),ti=ot.get(Ni.__renderTarget),fd=ot.get(Hn.__renderTarget);N.bindFramebuffer(D.READ_FRAMEBUFFER,ti.__webglFramebuffer),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,fd.__webglFramebuffer);for(let Dr=0;Dr<Pt;Dr++)Ve&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ot.get(A).__webglTexture,k,zt+Dr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ot.get(B).__webglTexture,st,Je+Dr)),D.blitFramebuffer(Yt,Ht,mt,Nt,oe,fe,mt,Nt,D.DEPTH_BUFFER_BIT,D.NEAREST);N.bindFramebuffer(D.READ_FRAMEBUFFER,null),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||A.isRenderTargetTexture||ot.has(A)){let Ni=ot.get(A),Hn=ot.get(B);N.bindFramebuffer(D.READ_FRAMEBUFFER,Di),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,hn);for(let ti=0;ti<Pt;ti++)Ve?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ni.__webglTexture,k,zt+ti):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ni.__webglTexture,k),Li?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,st,Je+ti):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,st),k!==0?D.blitFramebuffer(Yt,Ht,mt,Nt,oe,fe,mt,Nt,D.COLOR_BUFFER_BIT,D.NEAREST):Li?D.copyTexSubImage3D(He,st,oe,fe,Je+ti,Yt,Ht,mt,Nt):D.copyTexSubImage2D(He,st,oe,fe,Yt,Ht,mt,Nt);N.bindFramebuffer(D.READ_FRAMEBUFFER,null),N.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Li?A.isDataTexture||A.isData3DTexture?D.texSubImage3D(He,st,oe,fe,Je,mt,Nt,Pt,Ce,jt,Ue.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(He,st,oe,fe,Je,mt,Nt,Pt,Ce,Ue.data):D.texSubImage3D(He,st,oe,fe,Je,mt,Nt,Pt,Ce,jt,Ue):A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,st,oe,fe,mt,Nt,Ce,jt,Ue.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,st,oe,fe,Ue.width,Ue.height,Ce,Ue.data):D.texSubImage2D(D.TEXTURE_2D,st,oe,fe,mt,Nt,Ce,jt,Ue);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fi),D.pixelStorei(D.UNPACK_SKIP_PIXELS,So),D.pixelStorei(D.UNPACK_SKIP_ROWS,pi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ta),st===0&&B.generateMipmaps&&D.generateMipmap(He),N.unbindTexture()},this.initRenderTarget=function(A){ot.get(A).__webglFramebuffer===void 0&&pt.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?pt.setTextureCube(A,0):A.isData3DTexture?pt.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?pt.setTexture2DArray(A,0):pt.setTexture2D(A,0),N.unbindTexture()},this.resetState=function(){w=0,T=0,R=null,N.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};function xx(s){let t=new ms,e=new Tt(new gs(40,48,24),new Kn({side:Rn,depthWrite:!1,uniforms:{top:{value:new Bt("#3a2a30")},horizon:{value:new Bt("#24161a")},bottom:{value:new Bt("#0a0507")}},vertexShader:`
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
        }`}));t.add(e);let n=new U(0,0,0),i=(a,l,c,h,d,f,u)=>{let g=new Tt(new Ze(a,l),new tn({color:new Bt(c).multiplyScalar(h),side:pn}));return g.position.set(d,f,u),g.lookAt(n),t.add(g),g};i(10,6,"#fff3ee",2.6,1.5,11,6),i(.34,14,"#ffffff",9,-9,1.5,.4),i(.3,14,"#ffeae6",7,9,1,-.2),i(3,10,"#ffe6e2",.6,-10,0,-2),i(3,10,"#ffe6e2",.5,10,0,-3),i(7,.7,"#ffffff",5,0,5,10),i(8,4,"#ff8f80",1.6,0,4,-11),i(10,2.2,"#ffd8d0",.35,0,-6,9),i(18,18,"#7a0c24",.45,0,-10,0);let r=new xo(s),o=r.fromScene(t,.03);return r.dispose(),t.traverse(a=>{a.isMesh&&(a.geometry.dispose(),a.material.dispose())}),o.texture}function yx(s){let t=new ms;t.background=new Bt("#8f878a");let e=77,n=()=>(e=e*16807%2147483647,e/2147483647),i=new Ze(1,1),r=(l,c,h,d)=>{let f=new U(n()*2-1,n()*2-1,n()*2-1).normalize(),u=new tn({color:new Bt(l).multiplyScalar(c),side:pn}),g=new Tt(i,u);g.position.copy(f.multiplyScalar(10)),g.lookAt(0,0,0),g.rotateZ(n()*Math.PI),g.scale.set(h+n()*(d-h),h+n()*(d-h)*.6,1),t.add(g)};for(let l=0;l<46;l++)r("#050304",1,1.5,5.5);for(let l=0;l<70;l++)r("#ffffff",2+n()*6,.4,2.2);for(let l=0;l<24;l++)r(new Bt().setHSL(n(),.85,.6),2+n()*4,.3,1.2);let o=new xo(s),a=o.fromScene(t,0);return o.dispose(),a.texture}var vx=null,Mx=[];function Sx(s){vx=s;for(let t of Mx)t.envMap=s,t.needsUpdate=!0}function yo(s,t={}){return new Qn({color:s,roughness:.14,metalness:0,clearcoat:1,clearcoatRoughness:.03,specularIntensity:.9,envMapIntensity:1.15,...t})}function bx(s={}){return new Qn({color:"#ffffff",metalness:0,roughness:.025,transmission:1,thickness:.55,ior:1.5,dispersion:.35,attenuationColor:new Bt("#fff4f5"),attenuationDistance:5,specularIntensity:1,envMapIntensity:1.35,...s})}function Yu(s={}){return new Qn({color:"#ffffff",metalness:0,roughness:.04,transparent:!0,opacity:.22,depthWrite:!1,specularIntensity:1,envMapIntensity:1.6,clearcoat:1,clearcoatRoughness:.02,...s})}function Ti(s="#dcb67f",t={}){return new Qn({color:s,metalness:1,roughness:.2,clearcoat:.6,clearcoatRoughness:.08,envMapIntensity:1.3,...t})}function Tr(s={}){return new Qn({color:"#ece7ea",metalness:1,roughness:.09,envMapIntensity:1.35,...s})}function wx(s={}){return new Qn({color:"#f6eee8",roughness:.2,metalness:.04,clearcoat:1,clearcoatRoughness:.12,iridescence:1,iridescenceIOR:1.7,iridescenceThicknessRange:[260,720],sheen:.7,sheenColor:new Bt("#ffd5df"),sheenRoughness:.35,envMapIntensity:1.2,...s})}function ec(s=null,t={}){let e=new Qn({color:s||"#ffffff",metalness:1,roughness:.015,envMap:vx,envMapIntensity:1.7,flatShading:!0,iridescence:.45,iridescenceIOR:2.1,iridescenceThicknessRange:[200,900],clearcoat:1,clearcoatRoughness:0,...t});return Mx.push(e),e}function Zu(s="#ffffff",t={}){return ec(s,t)}function Ex(s={}){return new Qn({color:"#f0c6b5",roughness:.5,metalness:0,sheen:.8,sheenColor:new Bt("#ffcabb"),sheenRoughness:.5,clearcoat:.1,clearcoatRoughness:.45,envMapIntensity:.95,...s})}function Ai(s,t={}){return new Qn({color:s,roughness:.32,metalness:0,clearcoat:.5,clearcoatRoughness:.15,envMapIntensity:1,...t})}var Ri=class{constructor(t,e={}){this.el=t,this.scene=new ms,this.camera=new Mn(e.fov??30,1,e.near??.1,e.far??100),this.width=0,this.height=0,this.enabled=!0,this.visible=!1,this.transmissive=!!e.transmissive,this.bgColor=e.bgColor?new Bt(e.bgColor):null,this.margin=e.margin??0,this.time=0}resize(){}update(){}},Ju=class{constructor(t,e={}){this.canvas=t,this.stages=[],this.failed=!1;let n=window.matchMedia("(pointer: coarse)").matches;this.isMobile=n||window.innerWidth<760,this.maxDpr=e.maxDpr??(this.isMobile?1.5:1.75),this.dpr=Math.min(window.devicePixelRatio||1,this.maxDpr);try{this.renderer=new Xu({canvas:t,antialias:!0,alpha:!0,stencil:!1,powerPreference:"high-performance"})}catch{this.failed=!0;return}let i=this.renderer;i.outputColorSpace=An,i.toneMapping=iu,i.toneMappingExposure=1,i.autoClear=!1,i.setClearColor(0,0),this.pageBg=new Bt("#130B0E"),this.env=xx(i),this.gemEnv=yx(i),Sx(this.gemEnv),this.cw=0,this.ch=0,this.resize(),this._ro=new ResizeObserver(()=>this.resize()),this._ro.observe(t),this._frames=[],this._last=performance.now(),this._quietFrames=0,this.jobs=[]}add(t){return t.engine=this,t.scene.environment===null&&(t.scene.environment=this.env),this.stages.push(t),t}resize(){if(this.failed)return;let t=this.canvas.clientWidth||window.innerWidth,e=this.canvas.clientHeight||window.innerHeight;t===this.cw&&e===this.ch&&this.renderer.getPixelRatio()===this.dpr||(this.cw=t,this.ch=e,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1))}async warmup(t){if(this.failed)return;let e=this.renderer,n=this.stages.length;for(let i=0;i<n;i++){let r=this.stages[i];r.camera.aspect=1,r.camera.updateProjectionMatrix();let o=[];r.scene.traverse(a=>{a.visible||(o.push(a),a.visible=!0)});try{await e.compileAsync(r.scene,r.camera)}catch{}e.setScissorTest(!0),e.setViewport(0,0,8,8),e.setScissor(0,0,8,8),e.setClearColor(this.pageBg,1),e.render(r.scene,r.camera);for(let a of o)a.visible=!1;t?.((i+1)/n),await new Promise(a=>requestAnimationFrame(a))}e.setScissorTest(!1),e.setClearColor(0,0),e.clear()}render(t,e){if(this.failed)return;let n=this.renderer,i=this.cw,r=this.ch,o=!1,a=!1;if(this.jobs.length){let l=this.jobs.shift();try{l()}catch(c){console.warn(c)}a=!0}for(let l of this.stages){if(!l.enabled){l.visible&&(l.visible=!1,l.onVisibility?.(!1));continue}let c=l.el.getBoundingClientRect(),h=l.margin,d=c.left-h,f=c.top-h,u=c.width+h*2,g=c.height+h*2,_=u>2&&g>2&&f<r&&f+g>0&&d<i&&d+u>0;_!==l.visible&&(l.visible=_,l.onVisibility?.(_)),l._rect=_?{left:d,top:f,w:u,h:g}:null,_&&(o=!0)}if(!o){a&&(this._quietFrames=0),this._quietFrames++<2&&(n.setScissorTest(!1),n.setClearColor(0,0),n.clear());return}this._quietFrames=0,n.setScissorTest(!1),n.setClearColor(0,0),n.clear();for(let l of this.stages){if(!l.visible||!l._rect)continue;let{left:c,top:h,w:d,h:f}=l._rect;(Math.abs(l.width-d)>.5||Math.abs(l.height-f)>.5)&&(l.width=d,l.height=f,l.camera.aspect=d/f,l.camera.updateProjectionMatrix(),l.resize(d,f)),l.time+=e,l.update(t,e);let u=r-(h+f);n.setViewport(c,u,d,f);let g=Math.max(0,c),_=Math.max(0,u),p=Math.min(i,c+d)-g,m=Math.min(r,u+f)-_;p<=0||m<=0||(n.setScissor(g,_,p,m),n.setScissorTest(!0),n.clearDepth(),l.transmissive?n.setClearColor(l.bgColor||this.pageBg,1):n.setClearColor(0,0),n.render(l.scene,l.camera))}n.setScissorTest(!1),n.setClearColor(0,0),this._adapt()}_adapt(){let t=performance.now(),e=t-this._last;if(this._last=t,e>200||(this._frames.push(e),this._frames.length<90))return;let n=this._frames.reduce((i,r)=>i+r,0)/this._frames.length;this._frames.length=0,n>26&&this.dpr>1&&(this.dpr=Math.max(1,this.dpr-.25),this.resize())}};var nc=new U;function Xi(s,t,e,n,i,r){let o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;nc.copy(t),nc[n]=0,nc.normalize();let c=.5*o/(o+a),h=1-nc.angleTo(s)/l;return Math.sign(nc[e])===1?h*c:a/(o+a)+c+c*(1-h)}var Zs=class s extends Sr{constructor(t=1,e=1,n=1,i=2,r=.1){let o=i*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,h=new U(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,g=d.length/6,_=new U,p=.5/o;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),u[v+0]=Xi(_,c,"z","y",r,n),u[v+1]=1-Xi(_,c,"y","z",r,e);break;case 1:_.set(-1,0,0),u[v+0]=1-Xi(_,c,"z","y",r,n),u[v+1]=1-Xi(_,c,"y","z",r,e);break;case 2:_.set(0,1,0),u[v+0]=1-Xi(_,c,"x","z",r,t),u[v+1]=Xi(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),u[v+0]=1-Xi(_,c,"x","z",r,t),u[v+1]=1-Xi(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),u[v+0]=1-Xi(_,c,"x","y",r,t),u[v+1]=1-Xi(_,c,"y","x",r,e);break;case 5:_.set(0,0,-1),u[v+0]=Xi(_,c,"x","y",r,t),u[v+1]=1-Xi(_,c,"y","x",r,e);break}}static fromJSON(t){return new s(t.width,t.height,t.depth,t.segments,t.radius)}};var Ar={display:"'Prata', 'Playfair Display', Georgia, serif",accent:"'Cormorant Garamond', Georgia, serif",body:"'Onest', system-ui, sans-serif",mono:"'Martian Mono', ui-monospace, monospace"};function rn(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function _n(s,{srgb:t=!0,repeat:e=!1,aniso:n=8}={}){let i=new Cl(s);return t&&(i.colorSpace=An),i.anisotropy=n,e&&(i.wrapS=i.wrapT=oa),i.needsUpdate=!0,i}function Tx({brand:s="LAQU\xC9",shade:t="N\xBA 01 \xB7 CHERRY JAM",sub:e="GEL POLISH \xB7 12 ML",color:n="#ffffff",res:i=.5}={}){let a=rn(1024*i,640*i),l=a.getContext("2d");return l.scale(i,i),l.clearRect(0,0,1024,640),l.fillStyle=n,l.textAlign="center",l.textBaseline="alphabetic",l.font=`400 210px ${Ar.display}`,"letterSpacing"in l&&(l.letterSpacing="6px"),l.fillText(s,1024/2,300),"letterSpacing"in l&&(l.letterSpacing="10px"),l.font=`500 44px ${Ar.mono}`,l.fillText(t,1024/2,420),l.globalAlpha=.75,l.font=`400 34px ${Ar.mono}`,l.fillText(e,1024/2,500),l.globalAlpha=1,l.fillRect(1024/2-70,345,140,3),_n(a)}function Ax(s,{font:t=Ar.display,px:e=420,color:n="#F4EAE8",weight:i=400}={}){let r=rn(8,8).getContext("2d");r.font=`${i} ${e}px ${t}`;let o=r.measureText(s),a=o.actualBoundingBoxAscent||e*.75,l=o.actualBoundingBoxDescent||e*.05,c=o.actualBoundingBoxLeft||0,h=o.actualBoundingBoxRight||o.width,d=Math.round(e*.06),f=Math.ceil(c+h+d*2),u=Math.ceil(a+l+d*2),g=rn(f,u),_=g.getContext("2d");_.font=`${i} ${e}px ${t}`,_.fillStyle=n,_.textBaseline="alphabetic",_.fillText(s,d+c,d+a);let p=_n(g);return p.generateMipmaps=!0,p.minFilter=xs,{texture:p,w:f,h:u,advance:o.width,ascent:(a+d)/e,descent:(l+d)/e,left:(c+d)/e}}function Rx({size:s=1024,inner:t="#5a0a1d",outer:e="#130B0E",mid:n="#2b0b14",cx:i=.5,cy:r=.46}={}){let o=rn(s,s),a=o.getContext("2d");a.fillStyle=e,a.fillRect(0,0,s,s);let l=a.createRadialGradient(s*i,s*r,0,s*i,s*r,s*.62);return l.addColorStop(0,t),l.addColorStop(.38,n),l.addColorStop(1,e),a.fillStyle=l,a.fillRect(0,0,s,s),mT(a,s,s,3),_n(o)}function mT(s,t,e,n=3){let i=s.getImageData(0,0,t,e),r=i.data;for(let o=0;o<r.length;o+=4){let a=(Math.random()-.5)*n;r[o]+=a,r[o+1]+=a,r[o+2]+=a}s.putImageData(i,0,0)}function Cx(s=1){let e=rn(256,256),n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,256,256),n.fillStyle="#fff";let i=Bn(s);n.beginPath();let r=9+Math.floor(i()*5);for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=256*(.22+i()*.24),c=256/2+Math.cos(a)*l,h=256/2+Math.sin(a)*l;o===0?n.moveTo(c,h):n.lineTo(c,h)}return n.closePath(),n.fill(),_n(e,{srgb:!1})}function Px(s="#f3d9d6",t="#e9c4c0",e=3){let r=rn(512,64),o=r.getContext("2d");o.fillStyle=s,o.fillRect(0,0,512/2,64),o.fillStyle=t,o.fillRect(512/2,0,512/2,64);let a=Bn(e);for(let l=0;l<9e3;l++){let c=a()*512,h=a()*64;o.fillStyle=a()>.5?"rgba(255,255,255,.35)":"rgba(90,40,40,.18)",o.fillRect(c,h,1.2,1.2)}return o.fillStyle="rgba(60,20,30,.55)",o.font=`500 22px ${Ar.mono}`,o.textAlign="center",o.textBaseline="middle",o.fillText("180",512*.25,64/2),o.fillText("240",512*.75,64/2),_n(r)}function Bn(s){let t=s>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var kn={};function Rr(s,t=1e-4){let e=s.attributes.position,n=s.attributes.normal,i=new Map,r=o=>`${Math.round(e.getX(o)/t)},${Math.round(e.getY(o)/t)},${Math.round(e.getZ(o)/t)}`;for(let o=0;o<e.count;o++){let a=r(o),l=i.get(a);l||i.set(a,l={n:new U,ids:[]}),l.n.x+=n.getX(o),l.n.y+=n.getY(o),l.n.z+=n.getZ(o),l.ids.push(o)}for(let o of i.values())if(!(o.ids.length<2)){o.n.normalize();for(let a of o.ids)n.setXYZ(a,o.n.x,o.n.y,o.n.z)}return n.needsUpdate=!0,s}function Ix(s=!0){let i=[new lt(5e-4,0),new lt(.305,0),new lt(.33,.03)];for(let o=1;o<=12;o++)i.push(new lt(.33,.03+(1.3-.075-.03)*o/12));for(let o=1;o<=10;o++){let a=o/10*Math.PI*.5;i.push(new lt(.33-.075+.075*Math.cos(a),1.3-.075+.075*Math.sin(a)))}i.push(new lt(5e-4,1.3));let r=new ts(i,s?288:96);if(s){let o=r.attributes.position,a=new U;for(let l=0;l<o.count;l++)if(a.fromBufferAttribute(o,l),Math.hypot(a.x,a.z)>.33-.002&&a.y>.09&&a.y<1.3-.075-.02){let h=Math.atan2(a.z,a.x),f=1-.028*(1-Math.pow(.5+.5*Math.cos(h*36),2.2));o.setXYZ(l,a.x*f,a.y,a.z*f)}}return r.computeVertexNormals(),Rr(r),r}function gT(){let s=[[5e-4,.02],[.036,.012],[.05,-.03],[.072,-.1],[.088,-.17],[.088,-.22],[.072,-.275],[.042,-.312],[5e-4,-.326]].map(([e,n])=>new lt(e,n)),t=new ts(s,40);return t.scale(1,1,.36),t.computeVertexNormals(),Rr(t),t}function _T(){let s=[];for(let n=0;n<=18;n++){let i=n/18,r=-.18*i,o=.056*Math.pow(Math.sin(Math.PI*Math.pow(i,.62)),.9);s.push(new lt(Math.max(o,5e-4),r))}let e=new ts(s,32);return e.computeVertexNormals(),Rr(e),e}function xT(){let t=rn(256,256),e=t.getContext("2d"),n=e.createRadialGradient(256/2,256/2,0,256/2,256/2,256/2);return n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(.45,"rgba(0,0,0,0.22)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,256,256),_n(t,{srgb:!1})}function yT(s=7){let e=rn(256,256),n=e.getContext("2d"),i=n.createImageData(256,256),r=Bn(s),o=3;for(let l=0;l<256;l+=o)for(let c=0;c<256;c+=o){let h=r()>.55,d=h?r()*2-1:0,f=h?r()*2-1:0,u=Math.sqrt(Math.max(.05,1-d*d*.6-f*f*.6));for(let g=0;g<o;g++)for(let _=0;_<o;_++){let p=((l+g)*256+(c+_))*4;i.data[p]=(d*.5+.5)*255,i.data[p+1]=(f*.5+.5)*255,i.data[p+2]=u*255,i.data[p+3]=255}}n.putImageData(i,0,0);let a=_n(e,{srgb:!1,repeat:!0});return a.repeat.set(3,3),a}function vT(){return kn.body||(kn.body=new Zs(1.5,1.72,1.06,7,.27),kn.liquid=new Zs(1.28,1.14,.84,6,.17),kn.neck=new Gi(.235,.25,.22,48,1,!1),kn.hole=new Dl(.17,40),kn.capRibbed=Ix(!0),kn.capSmooth=Ix(!1),kn.band=new Gi(.338,.338,.07,96,1,!0),kn.stem=new Gi(.03,.034,1.42,16),kn.brush=gT(),kn.drop=_T(),kn.label=new Ze(.96,.6),kn.shadow=new Ze(2.8,1.5),kn.shadowTex=xT()),kn}var Dx=null,Ci=class extends ie{constructor({color:t="#7E0B24",cap:e="gold",ribbed:n=!0,label:i=null,labelColor:r="#ffffff",transmissive:o=!0,glitter:a=!1,shadow:l=!0}={}){super();let c=vT();this.glassMat=o?bx():Yu(),this.liquidMat=yo(t),a&&(Dx||(Dx=yT()),this.liquidMat.metalness=.55,this.liquidMat.roughness=.3,this.liquidMat.normalMap=Dx,this.liquidMat.normalScale.set(.9,.9));let h=e==="black"?Ai("#120c0e",{roughness:.18,clearcoat:1,clearcoatRoughness:.05}):e==="rose"?Ti("#e3ac9b"):e==="silver"?Tr():Ti(),d=e==="black"?Ti():Ai("#130b0e",{roughness:.25});this.body=new Tt(c.body,this.glassMat),this.body.position.y=.86,this.add(this.body),this.liquid=new Tt(c.liquid,this.liquidMat),this.liquid.position.y=.81,this.add(this.liquid),this.neck=new Tt(c.neck,this.glassMat),this.neck.position.y=1.8,this.add(this.neck);let f=new Tt(c.hole,new tn({color:"#050203"}));if(f.rotation.x=-Math.PI/2,f.position.y=1.912,this.add(f),i!==!1){let g=Tx({...i||{},color:r}),_=new es({map:g,transparent:!0,depthWrite:!1,roughness:.35,metalness:r==="#ffffff"?0:.6,polygonOffset:!0,polygonOffsetFactor:-2});this.label=new Tt(c.label,_),this.label.position.set(0,.86,.532),this.add(this.label)}this.capPivot=new ie,this.capPivot.position.y=1.76+.62,this.add(this.capPivot),this.capInner=new ie,this.capInner.position.y=-.62,this.capPivot.add(this.capInner),this.cap=new Tt(n?c.capRibbed:c.capSmooth,h),this.capInner.add(this.cap);let u=new Tt(c.band,d);u.position.y=.035,this.capInner.add(u),this.stem=new Tt(c.stem,Ai("#1a1114",{roughness:.2})),this.stem.position.y=-.71,this.capInner.add(this.stem),this.brush=new Tt(c.brush,this.liquidMat),this.brush.position.y=-1.41,this.capInner.add(this.brush),this.brushTip=new fn,this.brushTip.position.y=-1.73,this.capInner.add(this.brushTip),this.drop=new Tt(c.drop,this.liquidMat),this.drop.visible=!1,this.add(this.drop),l&&(this.shadow=new Tt(c.shadow,new tn({map:c.shadowTex,transparent:!0,depthWrite:!1,opacity:.9,toneMapped:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=-.02,this.add(this.shadow)),this._open=0}setColor(t){this.liquidMat.color.set(t)}setOpen(t){this._open=t;let e=Math.min(t/.5,1),n=Math.max((t-.5)/.5,0),i=n*n*(3-2*n);this.capPivot.rotation.y=-e*Math.PI*3,this.capPivot.position.y=1.76+.62+e*.16+i*1.78}};var $s={};function rm(s=16){let t="brilliant"+s;if($s[t])return $s[t];let e=[[5e-4,-.52],[.22,-.27],[.5,0],[.5,.035],[.41,.13],[.29,.205],[5e-4,.205]].map(([i,r])=>new lt(i,r)),n=new ts(e,s);return n.computeVertexNormals(),$s[t]=n,n}function MT(){return $s.pearl||($s.pearl=new gs(.5,48,32))}function ST(s=1){let t="flake"+s;if($s[t])return $s[t];let e=new Ze(1,1,10,10),n=e.attributes.position,i=Bn(s*13+5),r=2+i()*3,o=2+i()*3;for(let a=0;a<n.count;a++){let l=n.getX(a),c=n.getY(a),h=Math.sin(l*r*3.1+i()*.6)*.035+Math.cos(c*o*3.1)*.03+(i()-.5)*.03;n.setZ(a,h)}return e.computeVertexNormals(),$s[t]=e,e}var sm=[];function bT(s=0){return sm[s%4]||(sm[s%4]=Ti(s%2?"#e8c48c":"#dcb06e",{side:pn,emissive:new Bt("#3b2408"),alphaMap:Cx(s+1),alphaTest:.5,roughness:.28,clearcoat:0})),sm[s%4]}function Js({tint:s=null,size:t=1,cheap:e=!1,segments:n=16}={}){let i=e?Zu(s||"#ffffff"):ec(s),r=new Tt(rm(n),i);return r.scale.setScalar(t),r}function ui({size:s=1,color:t}={}){let e=wx(t?{color:t}:{}),n=new Tt(MT(),e);return n.scale.setScalar(s),n}function Lx(s=1,t=.3){let e=new Tt(ST(s%6),bT(s));return e.scale.setScalar(t),e}function Ks({count:s=160,spread:t=[8,5,4],center:e=[0,1.5,0],size:n=26,color:i="#ffe7e3",seed:r=11}={}){let o=Bn(r),a=new Float32Array(s*3),l=new Float32Array(s),c=new Float32Array(s);for(let u=0;u<s;u++)a[u*3]=e[0]+(o()-.5)*t[0],a[u*3+1]=e[1]+(o()-.5)*t[1],a[u*3+2]=e[2]+(o()-.5)*t[2],l[u]=o()*Math.PI*2,c[u]=.35+Math.pow(o(),3)*1.4;let h=new Ye;h.setAttribute("position",new Oe(a,3)),h.setAttribute("aPhase",new Oe(l,1)),h.setAttribute("aScale",new Oe(c,1));let d=new Kn({transparent:!0,depthWrite:!1,blending:co,uniforms:{uTime:{value:0},uSize:{value:n},uOpacity:{value:1},uColor:{value:new Bt(i)},uPixelRatio:{value:Math.min(window.devicePixelRatio||1,2)}},vertexShader:`
      uniform float uTime; uniform float uSize; uniform float uPixelRatio;
      attribute float aPhase; attribute float aScale;
      varying float vTw;
      void main() {
        vec3 p = position;
        p.y += sin(uTime * 0.35 + aPhase) * 0.08;
        p.x += cos(uTime * 0.27 + aPhase * 1.3) * 0.06;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        vTw = 0.5 + 0.5 * sin(uTime * (1.2 + aScale) + aPhase * 5.0);
        gl_PointSize = uSize * aScale * uPixelRatio * (0.4 + vTw * 0.8) / -mv.z;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uOpacity;
      varying float vTw;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        // \u0447\u0435\u0442\u044B\u0440\u0451\u0445\u043B\u0443\u0447\u0435\u0432\u0430\u044F \u0437\u0432\u0451\u0437\u0434\u043E\u0447\u043A\u0430 + \u043C\u044F\u0433\u043A\u043E\u0435 \u044F\u0434\u0440\u043E
        float cross = max(0.0, 1.0 - abs(uv.x) * 14.0) * max(0.0, 1.0 - abs(uv.y) * 2.2)
                    + max(0.0, 1.0 - abs(uv.y) * 14.0) * max(0.0, 1.0 - abs(uv.x) * 2.2);
        float core = smoothstep(0.22, 0.0, d);
        float a = (core + cross * 0.75) * vTw * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, min(a, 1.0));
      }`}),f=new Rl(h,d);return f.frustumCulled=!1,f}var Cr=(s,t=0,e=1)=>Math.min(Math.max(s,t),e),vs=(s,t,e)=>s+(t-s)*e,Ms=(s,t,e)=>Cr((s-t)/(e-t)),ic=s=>s*s*(3-2*s),Qs=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2,Ku=s=>1-Math.pow(1-s,3);var Sn=(s,t,e,n)=>vs(s,t,1-Math.exp(-e*n)),ze={x:0,y:0,sx:0,sy:0,active:!1};typeof window<"u"&&window.addEventListener("pointermove",s=>{ze.x=s.clientX/window.innerWidth*2-1,ze.y=s.clientY/window.innerHeight*2-1,ze.active=!0},{passive:!0});function Nx(s){ze.sx=Sn(ze.sx,ze.x,3.2,s),ze.sy=Sn(ze.sy,ze.y,3.2,s)}function Pi(s,t,e){let n=Math.tan(s.fov*Math.PI/360),i=t/2/n,r=e/s.aspect/2/n;return Math.max(i,r)}var xe={brand:"LAQU\xC9",brandLine:"\u0448\u043A\u043E\u043B\u0430 \u043C\u0430\u043D\u0438\u043A\u044E\u0440\u0430",startDate:"2026-11-09T12:00:00+03:00",earlyBirdUntil:"2026-10-25T23:59:00+03:00",formEndpoint:"",telegram:"",whatsapp:"",shades:[{id:"cherry",name:"Cherry Jam",ru:"\u0412\u0438\u0448\u043D\u0451\u0432\u044B\u0439 \u0434\u0436\u0435\u043C",color:"#7E0B24"},{id:"milk",name:"Milky Rose",ru:"\u041C\u043E\u043B\u043E\u0447\u043D\u0430\u044F \u0440\u043E\u0437\u0430",color:"#E9C6C3"},{id:"latte",name:"Nude Latte",ru:"\u041D\u044E\u0434\u043E\u0432\u044B\u0439 \u043B\u0430\u0442\u0442\u0435",color:"#C38F7A"},{id:"wine",name:"Berry Wine",ru:"\u042F\u0433\u043E\u0434\u043D\u043E\u0435 \u0432\u0438\u043D\u043E",color:"#4A0D27"},{id:"pearl",name:"Pearl",ru:"\u0416\u0435\u043C\u0447\u0443\u0433",color:"#EFE6E2"},{id:"coral",name:"Coral Kiss",ru:"\u041A\u043E\u0440\u0430\u043B\u043B",color:"#D9483F"},{id:"noir",name:"Noir",ru:"\u0427\u0451\u0440\u043D\u044B\u0439 \u043B\u0430\u043A",color:"#1A1216"}]};var qi=new U,Qu=new U,ju=class extends Ri{constructor(t,{word:e="\u041C\u0430\u043D\u0438\u043A\u044E\u0440"}={}){super(t,{fov:30,near:.1,far:80,transmissive:!0}),this.progress=0,this.p=0,this.intro={t:0},this.anchors={},this.dropScreen={x:0,y:0,visible:!1};let n=this.scene;n.add(new jn("#ffe9e6","#1a0a10",.55));let i=new $e("#fff1ec",2.2);i.position.set(4,6,7),n.add(i);let r=new $e("#ff8fa0",2.6);r.position.set(-6,4,-6),n.add(r);let o=new $e("#ffd9c9",1.2);o.position.set(6,-2,-5),n.add(o),this.backdrop=new Tt(new Ze(1,1),new tn({map:Rx({inner:"#4d0a1b",mid:"#26090f",outer:"#130B0E"}),toneMapped:!1})),this.backdrop.position.z=-7,n.add(this.backdrop),this.word=new ie,this.word.position.z=-2.4,n.add(this.word),this.letters=[],this.wordText=e,this.bottleRig=new ie,n.add(this.bottleRig),this.bottle=new Ci({color:xe.shades[0].color,cap:"gold",label:{brand:xe.brand,shade:"N\xBA 01 \xB7 "+xe.shades[0].name.toUpperCase(),sub:"GEL POLISH \xB7 12 ML",res:1},shadow:!1}),this.bottle.position.y=-1.55,this.bottleRig.add(this.bottle),this.decor=[];let a=(l,c,h,d)=>{l.position.set(...c),l.userData.base=new U(...c),l.userData.spin=h,l.userData.depth=d,l.userData.phase=Math.random()*Math.PI*2,n.add(l),this.decor.push(l)};a(Js({size:.62}),[-2.75,1,.6],[.4,.6,.1],1.2),a(Js({size:.4,tint:"#ffd1dc"}),[2.45,1.05,1],[.3,-.7,.2],1.6),a(Js({size:.28}),[1.15,2.35,-1.1],[.6,.4,.3],.7),a(ui({size:.5}),[3.1,.3,-.6],[0,.2,0],.8),a(ui({size:.3}),[-1.3,.3,1.5],[0,.2,0],1.5),a(ui({size:.2}),[-.85,2.45,-1.4],[0,.2,0],.6);for(let l=0;l<7;l++){let c=l/7*Math.PI*2+.4,h=2.3+l%3*.55;a(Lx(l+1,.22+l%3*.08),[Math.cos(c)*h*1.15,Math.sin(c)*h*.75,-.8+l%4*.6],[.9,1.3,.6],1+l%3*.3)}this.sparkles=Ks({count:140,spread:[9,6,5],center:[0,.2,0],size:30}),n.add(this.sparkles),this.brushSparkles=Ks({count:40,spread:[1.2,1.2,1.2],center:[0,0,0],size:22,color:"#ffd4dc",seed:5}),this.brushSparkles.material.uniforms.uOpacity.value=0,n.add(this.brushSparkles),this.camTarget=new U,this.camDist=9}buildWord(){for(let i of this.letters)this.word.remove(i),i.geometry.dispose(),i.material.map.dispose(),i.material.dispose();this.letters=[];let t=[...this.wordText].map(i=>({ch:i,...Ax(i,{px:360})})),e=new Ze(1,1),n=0;for(let i of t){let r=new tn({map:i.texture,alphaTest:.5,alphaToCoverage:!0,toneMapped:!1,side:pn}),o=new Tt(e,r);o.userData.g=i,o.userData.pen=n,n+=i.advance/360,this.word.add(o),this.letters.push(o)}this.wordAdvance=n,this.layoutWord()}layoutWord(){if(!this.letters.length||!this.width)return;let t=this.camera,e=t.aspect<.85,i=2*(this.baseDist+Math.abs(this.word.position.z))*Math.tan(t.fov*Math.PI/360),o=i*t.aspect*(e?.92:.9)/this.wordAdvance,a=o,l;if(e)l=i*.245;else{let g=(Math.max(.47,(this.safeBottom??.68)-.025)-.25)*i;a=Math.min(o,g/.98);let _=Math.max(0,g-a*.98);l=(.5-.25)*i-_*.35}this.wordScale=a;let c=-this.wordAdvance*a/2,h=.72*a,d=l-h;for(let f of this.letters){let u=f.userData.g,g=u.w/360*a,_=u.h/360*a,p=c+f.userData.pen*a-u.left*a,m=d+u.ascent*a;f.scale.set(g,_,1),f.userData.home=new U(p+g/2,m-_/2,0)}}setSafeBottom(t){Math.abs((this.safeBottom??0)-t)<.002||(this.safeBottom=t,this.layoutWord())}resize(t,e){let n=t/e<.85;this.portrait=n,this.baseDist=Pi(this.camera,n?7.4:4.7,n?3.6:3.2),this.openDist=Pi(this.camera,n?9.6:6.6,n?5.4:5.6),this.lift=n?.075:0;let i=n?Math.max(.42,this.camera.aspect/1.3):1;for(let r of this.decor)r.userData.sx=i,r.userData.sy=n?.62:1,r.userData.ss=n?.7:1;this.layoutWord()}setProgress(t){this.progress=t}update(t,e){var R;let n=this.camera;this.p=Sn(this.p,this.progress,7,e);let i=this.p,r=this.intro.t,o=Ms(i,0,.36),a=Ms(i,.3,.6),l=Ms(i,.58,.7),c=Ms(i,.69,.82),h=Ms(i,.82,1),d=vs(this.baseDist,this.openDist,Qs(a))+h*2;this.camDist=d;let f=ze.sx,u=ze.sy,g=2*d*Math.tan(n.fov*Math.PI/360);this.camTarget.set(0,vs(0,.95,Qs(a))+h*.6-(this.lift||0)*g,0),n.position.set(f*.45+this.camTarget.x,this.camTarget.y-u*.3+.25,d),n.lookAt(this.camTarget);let p=2*(d+Math.abs(this.backdrop.position.z))*Math.tan(n.fov*Math.PI/360)*1.3;this.backdrop.scale.set(p*n.aspect*1.2,p,1),this.backdrop.position.x=n.position.x*.5,this.backdrop.position.y=this.camTarget.y;let m=Ku(Cr(r*1.35)),v=Math.sin(t*.8)*.06;this.bottleRig.position.y=v+(1-m)*5.5-h*1.2,this.bottleRig.rotation.y=-.55+(1-m)*-2.4+Qs(o)*Math.PI*2+a*.5+f*.25+Math.sin(t*.35)*.06,this.bottleRig.rotation.x=-.05+u*.06+Math.sin(t*.6)*.02,this.bottleRig.rotation.z=Math.sin(t*.5)*.025-o*(1-o)*.35;let M=1-h*.25;this.bottleRig.scale.setScalar(M);let x=this.bottle;x.setOpen(Qs(a));let b=ic(l);if(x.capPivot.rotation.z=-b*.55,x.capPivot.rotation.x=b*.25,x.capPivot.position.x=b*1.05,x.capPivot.position.y+=b*.15,x.capPivot.rotation.y+=Math.sin(t*.9)*.05*a,x.updateMatrixWorld(!0),x.brushTip.getWorldPosition(Qu),x.worldToLocal(qi.copy(Qu)),l>.15&&c<1){let y=ic(Ms(l,.15,1));x.drop.visible=!0;let S=c*c*7.5;x.drop.position.set(qi.x,qi.y-.02-y*.03-S,qi.z);let P=1+c*.7;x.drop.scale.set(y/Math.sqrt(P),y*P,y/Math.sqrt(P))}else x.drop.visible=!1;this.brushSparkles.position.copy(Qu),this.brushSparkles.material.uniforms.uOpacity.value=a*(1-c)*.9,this.brushSparkles.material.uniforms.uTime.value=t,this.sparkles.material.uniforms.uTime.value=t,this.sparkles.material.uniforms.uOpacity.value=m*(1-h);let w=this.letters.length,T=this.wordScale||1;for(let y=0;y<w;y++){let S=this.letters[y],P=S.userData.home;if(!P)continue;let L=Ku(Cr(r*1.8-y*.09)),O=y-(w-1)/2,z=Math.sign(O)||(y%2?1:-1),H=Qs(Cr(o*1.25-Math.abs(O)*.03));S.position.set(P.x+z*H*T*(.9+Math.abs(O)*.35),P.y-(1-L)*T*1.1-H*T*.25*(1+Math.abs(O)*.2),-H*(2.5+Math.abs(O)*.9)),S.rotation.x=(1-L)*.9,S.rotation.y=z*H*.9,S.visible=L>.001&&H<.999}for(let y of this.decor){let S=y.userData,P=S.depth,L=1+Qs(o)*.35*P+h*.8,O=S.sx??1;y.position.set(S.base.x*L*O+f*.18*P,S.base.y*L*(S.sy??1)+Math.sin(t*.7+S.phase)*.12-u*.12*P+(1-m)*-3-(this.lift||0)*1.2,S.base.z),y.rotation.x+=S.spin[0]*e,y.rotation.y+=S.spin[1]*e,y.rotation.z+=S.spin[2]*e;let z=Ku(Cr(r*1.5-.3));y.scale.setScalar(((R=y.userData).s0??(R.s0=y.scale.x))*z*(S.ss??1))}this.project("brush",Qu),x.localToWorld(qi.set(-.74,1.4,.35)),this.project("edge",qi),x.localToWorld(qi.set(.5,.55,.53)),this.project("liquid",qi),x.capInner.localToWorld(qi.set(-.2,1.05,.25)),this.project("cap",qi),x.drop.visible&&(x.drop.getWorldPosition(qi),this.project("drop",qi))}project(t,e){var r;let n=e.clone().project(this.camera),i=(r=this.anchors)[t]||(r[t]={x:0,y:0});i.x=(n.x*.5+.5)*this.width,i.y=(-n.y*.5+.5)*this.height,i.z=n.z}};var ye=1024,Pr=new Map,we=s=>s*ye,ge=s=>(1-s)*ye,am=(s,t,e)=>t+e*(1-Math.pow(2*s-1,2));function td(s,t){s.fillStyle=t,s.fillRect(0,0,ye,ye)}function js(s,t){let e=s.createLinearGradient(0,ge(0),0,ge(1));for(let[n,i]of t)e.addColorStop(n,i);s.fillStyle=e,s.fillRect(0,0,ye,ye)}function om(s,t,e,n=!0){s.beginPath(),s.moveTo(we(-.05),ge(n?1.2:-.2));for(let i=0;i<=64;i++){let r=-.05+1.1*i/64;s.lineTo(we(r),ge(am(Math.min(Math.max(r,0),1),t,e)))}s.lineTo(we(1.05),ge(n?1.2:-.2)),s.closePath()}function wT(s,t=.05,e=2){let n=Bn(e);for(let i=0;i<46;i++){let r=n();s.strokeStyle=n()>.5?`rgba(255,255,255,${t})`:`rgba(150,70,70,${t*.8})`,s.lineWidth=2+n()*5,s.beginPath(),s.moveTo(we(r),ge(.05)),s.bezierCurveTo(we(r+.01),ge(.3),we(r-.01),ge(.6),we(r+.005),ge(.98)),s.stroke()}}function ET(s,t=.55){let e=s.createRadialGradient(we(.5),ge(0),0,we(.5),ge(0),ye*.3);e.addColorStop(0,`rgba(255,244,240,${t})`),e.addColorStop(.62,`rgba(255,240,236,${t*.85})`),e.addColorStop(1,"rgba(255,240,236,0)"),s.fillStyle=e,s.save(),s.scale(1,.62),s.fillRect(0,ge(.32)/.62,ye,ye/.62),s.restore()}function sc(s,{overgrown:t=!1}={}){js(s,[[0,"#efc0b8"],[.25,"#eaaaa3"],[.6,"#e6a19b"],[1,"#e39b96"]]),ET(s,t?.35:.5),wT(s,t?.07:.04);let e=t?.6:.7;om(s,e,t?.07:.1);let n=s.createLinearGradient(0,ge(e),0,ge(1));n.addColorStop(0,t?"#efe1cf":"#f4e9dd"),n.addColorStop(1,t?"#e4d2bb":"#efe2d2"),s.fillStyle=n,s.fill(),s.save(),s.globalAlpha=.35,s.lineWidth=10,s.strokeStyle="#f7d3cc",s.beginPath();for(let i=0;i<=64;i++){let r=i/64,o=ge(am(r,e,t?.07:.1))+4;i===0?s.moveTo(we(r),o):s.lineTo(we(r),o)}if(s.stroke(),s.restore(),t){let i=Bn(9);s.fillStyle="rgba(250,236,230,0.6)",s.beginPath(),s.moveTo(we(-.05),ge(-.05));for(let r=0;r<=40;r++){let o=-.05+1.1*r/40,a=.1+.05*Math.sin(o*13+1)+i()*.035+.06*(1-Math.pow(2*o-1,2));s.lineTo(we(o),ge(a))}s.lineTo(we(1.05),ge(-.05)),s.closePath(),s.fill();for(let r=0;r<700;r++)s.fillStyle=`rgba(255,255,255,${.05+i()*.1})`,s.fillRect(i()*ye,ge(i()*.22),2+i()*3,1+i()*2)}}function Ux(s,t){s.fillStyle=t,s.fillRect(0,0,ye,ye)}function ed(s,t=.22,e="0,0,0"){let n=s.createLinearGradient(0,0,ye,0);n.addColorStop(0,`rgba(${e},${t})`),n.addColorStop(.18,`rgba(${e},0)`),n.addColorStop(.82,`rgba(${e},0)`),n.addColorStop(1,`rgba(${e},${t})`),s.fillStyle=n,s.fillRect(0,0,ye,ye)}var Ea={overgrown(s){sc(s,{overgrown:!0})},natural(s){sc(s)},clean(s){sc(s),Ux(s,"rgba(240,170,165,0.12)")},base(s){sc(s),js(s,[[0,"rgba(246,216,212,0.86)"],[1,"rgba(244,214,210,0.8)"]])},cherry(s){js(s,[[0,"#6c0719"],[.5,"#7e0b24"],[1,"#740a20"]]),ed(s,.28)},french(s){sc(s),Ux(s,"rgba(245,214,210,0.9)"),om(s,.71,.13),s.fillStyle="#fcf8f5",s.fill()},foil(s){js(s,[[0,"#efd0ca"],[1,"#ead0cb"]]),ed(s,.08,"120,60,60")},final(s){Ea.cherry(s)},"milky-french"(s){Ea.french(s)},"baby-boomer"(s){js(s,[[0,"#f1cfc8"],[.35,"#f3d7d1"],[.75,"#faf1ec"],[1,"#fdf9f6"]])},"pearl-chrome"(s){let t=s.createLinearGradient(0,ye,ye,0);t.addColorStop(0,"#f2e4ea"),t.addColorStop(.35,"#ecdff0"),t.addColorStop(.65,"#f6ead9"),t.addColorStop(1,"#f4e1e6"),s.fillStyle=t,s.fillRect(0,0,ye,ye)},"cat-eye"(s){td(s,"#2a0a16");let t=s.createLinearGradient(we(.1),ge(.2),we(.9),ge(.9));t.addColorStop(.3,"rgba(120,40,70,0)"),t.addColorStop(.47,"rgba(255,190,210,0.75)"),t.addColorStop(.53,"rgba(255,220,230,0.9)"),t.addColorStop(.7,"rgba(120,40,70,0)"),s.fillStyle=t,s.fillRect(0,0,ye,ye)},aura(s){td(s,"#e9d2df");let t=s.createRadialGradient(we(.5),ge(.5),0,we(.5),ge(.5),ye*.42);t.addColorStop(0,"#d8366b"),t.addColorStop(.35,"rgba(226,96,140,0.8)"),t.addColorStop(1,"rgba(233,210,223,0)"),s.fillStyle=t,s.fillRect(0,0,ye,ye)},"line-art"(s){td(s,"#f3e5df"),s.strokeStyle="#1b1215",s.lineCap="round",s.lineWidth=9,s.beginPath(),s.moveTo(we(.2),ge(.15)),s.bezierCurveTo(we(.9),ge(.3),we(.1),ge(.55),we(.65),ge(.75)),s.bezierCurveTo(we(.85),ge(.82),we(.6),ge(.95),we(.45),ge(1.05)),s.stroke(),s.lineWidth=6,s.beginPath(),s.arc(we(.66),ge(.42),ye*.06,0,Math.PI*2),s.stroke()},"red-french"(s){js(s,[[0,"#f0cbc3"],[1,"#efd2cb"]]),om(s,.72,.12),s.fillStyle="#9a0c26",s.fill()},tortoise(s){td(s,"#c9883a");let t=Bn(21);for(let e=0;e<26;e++){let n=we(t()),i=ge(t()),r=ye*(.03+t()*.08),o=s.createRadialGradient(n,i,0,n,i,r);o.addColorStop(0,"rgba(60,24,8,0.95)"),o.addColorStop(.6,"rgba(90,40,10,0.6)"),o.addColorStop(1,"rgba(120,60,20,0)"),s.fillStyle=o,s.beginPath(),s.ellipse(n,i,r*1.3,r,t()*3,0,Math.PI*2),s.fill()}ed(s,.2)},"silver-chrome"(s){js(s,[[0,"#cfd0d6"],[.5,"#f4f4f7"],[1,"#c6c7cd"]])},crystals(s){Ea.foil(s)},"gold-foil"(s){Ea.foil(s)},"wine-chrome"(s){js(s,[[0,"#3c0a1c"],[.5,"#5a1230"],[1,"#3a0918"]])},"nude-gloss"(s){js(s,[[0,"#d9a08b"],[1,"#d39985"]]),ed(s,.12)}},TT={foil(s){let t=Bn(5);s.fillStyle="#fff";for(let e=0;e<34;e++){let n=t(),i=we(.15+n*.75+(t()-.5)*.3),r=ge(.3+n*.55+(t()-.5)*.25),o=ye*(.012+Math.pow(t(),2)*.06);s.beginPath();let a=6+Math.floor(t()*4);for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=o*(.55+t()*.6),d=i+Math.cos(c)*h,f=r+Math.sin(c)*h;l===0?s.moveTo(d,f):s.lineTo(d,f)}s.closePath(),s.fill()}},line(s){s.strokeStyle="#fff",s.lineWidth=14,s.lineCap="round",s.beginPath();for(let t=0;t<=64;t++){let e=t/64,n=ge(am(e,.72,.13));t===0?s.moveTo(we(e),n):s.lineTo(we(e),n)}s.stroke()}};function lm(s){let t="d:"+s;if(Pr.has(t))return Pr.get(t);let e=rn(ye,ye),n=e.getContext("2d");(Ea[s]||Ea.natural)(n);let i=_n(e);return Pr.set(t,i),i}function Fx(s){let t=Pr.get("d:"+s);t&&(t.dispose(),Pr.delete("d:"+s))}function cm(s){if(!s)return null;let t="a:"+s;if(Pr.has(t))return Pr.get(t);let e=rn(ye,ye),n=e.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,ye,ye),TT[s](n);let i=_n(e,{srgb:!1});return Pr.set(t,i),i}var Ox={overgrown:{roughness:.55,clearcoat:.1,metalness:0,iridescence:0,shape:0,length:1.58},natural:{roughness:.42,clearcoat:.25,metalness:0,iridescence:0,shape:1,length:1.76},clean:{roughness:.32,clearcoat:.4,metalness:0,iridescence:0,shape:1,length:1.76},base:{roughness:.08,clearcoat:1,metalness:0,iridescence:0,shape:1,length:1.76},cherry:{roughness:.07,clearcoat:1,metalness:0,iridescence:0,shape:1,length:1.76},french:{roughness:.07,clearcoat:1,metalness:0,iridescence:0,shape:1,length:1.76},foil:{roughness:.08,clearcoat:1,metalness:0,iridescence:0,shape:1,length:1.76,decal:"foil",gems:3},final:{roughness:.05,clearcoat:1,metalness:0,iridescence:0,shape:1,length:1.76,decal:"line"},"milky-french":{roughness:.06,clearcoat:1,shape:.35,length:1.5},"baby-boomer":{roughness:.06,clearcoat:1,shape:0,length:1.55},"pearl-chrome":{roughness:.12,clearcoat:1,metalness:.75,iridescence:1,shape:1,length:1.76},"cat-eye":{roughness:.18,clearcoat:1,metalness:.35,iridescence:.4,shape:1,length:1.7},aura:{roughness:.07,clearcoat:1,shape:.6,length:1.55},"line-art":{roughness:.4,clearcoat:.2,shape:.2,length:1.45},"red-french":{roughness:.06,clearcoat:1,shape:1,length:1.65},tortoise:{roughness:.06,clearcoat:1,shape:.5,length:1.55},"silver-chrome":{roughness:.04,clearcoat:1,metalness:1,shape:1,length:1.7},crystals:{roughness:.06,clearcoat:1,shape:.3,length:1.5,gems:5},"gold-foil":{roughness:.07,clearcoat:1,shape:.8,length:1.6,decal:"foil"},"wine-chrome":{roughness:.1,clearcoat:1,metalness:.6,iridescence:.6,shape:1,length:1.76},"nude-gloss":{roughness:.06,clearcoat:1,shape:.15,length:1.5}},k2=Object.keys(Ox);function rc(s){return{roughness:.1,clearcoat:1,metalness:0,iridescence:0,shape:1,length:1.76,decal:null,gems:0,...Ox[s]||{}}}var Ii=36,tr=64,Bx=.84,AT=.62,um=.6,kx=.8,vo=-1.04,oc=(s,t,e)=>{let n=Math.min(Math.max((e-s)/(t-s),0),1);return n*n*(3-2*n)},RT=s=>.04*Math.sin(s*9.3+1.2)+.022*Math.sin(s*23+.4)-.02;function zx(s,t,e){let n=Bx/2*(1+.035*Math.min(s/t,1)),i=.21;if(s<i){let c=(i-s)/i;n*=Math.sqrt(Math.max(0,1-Math.pow(c,2.2)))}let r=.11,o=n;if(s>t-r){let c=Math.min((s-(t-r))/r,1);o=n-r+r*Math.sqrt(Math.max(0,1-c*c))}let a=Math.max(t*.5,.98),l=n;if(s>a){let c=Math.min((s-a)/(t-a),1);l=n*Math.pow(Math.max(0,1-c*c),.6)}return o+(l-o)*e}function Ss(s,t,e,n){let i=e.length+RT(s)*e.irregular,r=t*i,o=zx(r,i,e.shape),a=(s-.5)*2*o,l=-AT*a*a,c=.035*Math.sin(Math.PI*Math.min(r/1.15,1))-(r>1.05?.11*(r-1.05)**2:0),h=Math.abs(2*s-1),d=-.05*(1-oc(0,.3,r))-.1*oc(.7,1,h)*(1-oc(1,1.3,r)),f=.012+.028*oc(0,.42,r);return n.x=a,n.y=r,n.zb=l+c+d,n.zt=n.zb+f,n.u=a/(Bx*1.04)+.5,n.v=t,n}var id=.004,dm=class extends Ye{constructor(){super();let t=(Ii+1)*(tr+1),e=(tr+1)*2,n=(tr+1)*2,i=(Ii+1)*2;this.n={nTop:t,nL:e,nR:n,nT:i};let r=t*2+e+n+i;this.setAttribute("position",new Oe(new Float32Array(r*3),3)),this.setAttribute("normal",new Oe(new Float32Array(r*3),3)),this.setAttribute("uv",new Oe(new Float32Array(r*2),2));let o=[],a=(f,u)=>u*(Ii+1)+f,l=(f,u)=>t+u*(Ii+1)+f;for(let f=0;f<tr;f++)for(let u=0;u<Ii;u++)o.push(a(u,f),a(u+1,f),a(u,f+1),a(u+1,f),a(u+1,f+1),a(u,f+1)),o.push(l(u,f),l(u,f+1),l(u+1,f),l(u+1,f),l(u,f+1),l(u+1,f+1));let c=t*2,h=c+e,d=h+n;for(let f=0;f<tr;f++){let u=c+f*2,g=u+1,_=u+2,p=u+3;o.push(g,u,_,g,_,p);let m=h+f*2,v=m+1,M=m+2,x=m+3;o.push(v,M,m,v,x,M)}for(let f=0;f<Ii;f++){let u=d+f*2,g=u+1,_=u+2,p=u+3;o.push(g,_,p,g,u,_)}this.setIndex(o),this.topIndexCount=Ii*tr*6}update(t){let e=this.attributes.position.array,n=this.attributes.uv.array,{nTop:i,nL:r,nR:o}=this.n,a={},l=(c,h,d,f,u,g)=>{e[c*3]=h,e[c*3+1]=d,e[c*3+2]=f,n[c*2]=u,n[c*2+1]=g};for(let c=0;c<=tr;c++){let h=id+(1-id)*(c/tr);for(let d=0;d<=Ii;d++){Ss(d/Ii,h,t,a);let f=c*(Ii+1)+d;l(f,a.x,a.y,a.zt,a.u,a.v),l(i+f,a.x,a.y,a.zb,a.u,a.v)}Ss(0,h,t,a),l(i*2+c*2,a.x,a.y,a.zt,a.u,a.v),l(i*2+c*2+1,a.x,a.y,a.zb,a.u,a.v),Ss(1,h,t,a),l(i*2+r+c*2,a.x,a.y,a.zt,a.u,a.v),l(i*2+r+c*2+1,a.x,a.y,a.zb,a.u,a.v)}for(let c=0;c<=Ii;c++){Ss(c/Ii,1,t,a);let h=i*2+r+o+c*2;l(h,a.x,a.y,a.zt,a.u,a.v),l(h+1,a.x,a.y,a.zb,a.u,a.v)}this.attributes.position.needsUpdate=!0,this.attributes.uv.needsUpdate=!0,this.computeVertexNormals(),this.computeBoundingSphere()}},fm=class extends Ye{constructor(t){super();let e=t.n.nTop;this.setAttribute("position",new Oe(new Float32Array(e*3),3)),this.setAttribute("normal",new Oe(new Float32Array(e*3),3)),this.setAttribute("uv",new Oe(new Float32Array(e*2),2));let n=t.index.array,i=[];for(let r=0;r<Ii*tr;r++)for(let o=0;o<6;o++)i.push(n[r*12+o]);this.setIndex(i),this.plate=t}update(){let t=this.plate.n.nTop,e=this.plate.attributes.position.array,n=this.plate.attributes.normal.array,i=this.plate.attributes.uv.array,r=this.attributes.position.array,o=this.attributes.normal.array,a=this.attributes.uv.array;for(let l=0;l<t;l++)r[l*3]=e[l*3]+n[l*3]*.0028,r[l*3+1]=e[l*3+1]+n[l*3+1]*.0028,r[l*3+2]=e[l*3+2]+n[l*3+2]*.0028,o[l*3]=n[l*3],o[l*3+1]=n[l*3+1],o[l*3+2]=n[l*3+2],a[l*2]=i[l*2],a[l*2+1]=i[l*2+1];this.attributes.position.needsUpdate=!0,this.attributes.normal.needsUpdate=!0,this.attributes.uv.needsUpdate=!0,this.computeBoundingSphere()}};function CT(s){if(s<=-.1){let e=.05*Math.exp(-(((s+2.75)/.5)**2)),n=1+Math.max(0,-s-1)*.016;return um*n+e}let t=Math.min((s+.1)/.66,1);return um*Math.sqrt(Math.max(0,1-t*t))}var nd=null;function PT(){if(nd)return nd;let s={shape:1,length:1.76,irregular:0},t={},e=[],n=1.12,i=40;for(let r=i;r>=0;r--)Ss(0,id+n/s.length*Math.pow(r/i,1.4),s,t),e.push([t.x,t.y+vo]);for(let r=1;r<=i;r++)Ss(1,id+n/s.length*Math.pow(r/i,1.4),s,t),e.push([t.x,t.y+vo]);return nd={pts:e,yTop:vo+n},nd}function IT(s,t){let{pts:e,yTop:n}=PT(),i=1/0;for(let a=0;a<e.length-1;a++){let[l,c]=e[a],[h,d]=e[a+1],f=h-l,u=d-c,g=Math.max(0,Math.min(1,((s-l)*f+(t-c)*u)/(f*f+u*u||1))),_=Math.hypot(s-l-f*g,t-c-u*g);_<i&&(i=_)}let r=t-vo;return r>0&&t<n&&Math.abs(s)<zx(r,1.76,1)?-i:i}var hm=null;function DT(){if(hm)return hm;let s=[];for(let a=-6.4;a<-1.6;a+=.2)s.push(a);for(let a=-1.6;a<-.1;a+=.018)s.push(a);for(let a=0;a<=44;a++){let l=a/44*Math.PI*.5;s.push(-.1+.66*Math.sin(l))}let t=144,e=[],n=[];for(let a=0;a<s.length;a++){let l=s[a],c=Math.max(CT(l),4e-4);for(let h=0;h<=t;h++){let d=h/t*Math.PI*2,f=c*Math.sin(d),u=-kx*c*Math.cos(d),g=0;if(u>.05&&l>vo-.5&&l<vo+1.3){let m=IT(f,l),v=.03*Math.exp(-(((m-.035)/.05)**2)),M=m<0?-.025*Math.min(1,-m/.06):0,x=v+M;f+=Math.sin(d)*x*.4,u+=x,g=Math.exp(-(((m-.05)/.12)**2))}e.push(f,l,u);let _=oc(-1.8,.55,l),p=u<0?.025:0;n.push(1-_*.02+p,1-_*.1-g*.06+p*.5,1-_*.08-g*.05)}}let i=[],r=t+1;for(let a=0;a<s.length-1;a++)for(let l=0;l<t;l++){let c=a*r+l,h=c+1,d=c+r,f=d+1;i.push(c,d,h,h,d,f)}let o=new Ye;return o.setAttribute("position",new pe(e,3)),o.setAttribute("color",new pe(n,3)),o.setIndex(i),o.computeVertexNormals(),Rr(o),hm=o,o}function LT(){let s=yo("#ffffff",{roughness:.4,clearcoat:.3,iridescenceIOR:1.8,iridescenceThicknessRange:[300,800]});return s.userData.uMapB={value:null},s.userData.uMix={value:0},s.onBeforeCompile=t=>{t.uniforms.uMapB=s.userData.uMapB,t.uniforms.uMix=s.userData.uMix,t.fragmentShader=t.fragmentShader.replace("#include <map_pars_fragment>",`#include <map_pars_fragment>
uniform sampler2D uMapB;
uniform float uMix;`).replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec4 cA = texture2D(map, vMapUv);
          vec4 cB = texture2D(uMapB, vMapUv);
          float wave = sin(vMapUv.x * 31.0) * 0.012 + sin(vMapUv.x * 11.0 + 1.7) * 0.018;
          float edge = uMix * 1.3 - 0.15;
          float m = smoothstep(edge + 0.05, edge - 0.03, vMapUv.y + wave);
          vec4 sampledDiffuseColor = mix(cA, cB, m);
          // \u0441\u0432\u0435\u0436\u0438\u0439 \u043C\u0430\u0437\u043E\u043A \u0447\u0443\u0442\u044C \u0441\u0432\u0435\u0442\u043B\u0435\u0435 \u043F\u043E \u0444\u0440\u043E\u043D\u0442\u0443
          float front = smoothstep(0.05, 0.0, abs(vMapUv.y + wave - edge)) * step(0.001, uMix) * step(uMix, 0.999);
          sampledDiffuseColor.rgb += front * 0.08;
          diffuseColor *= sampledDiffuseColor;
        #endif`)},s.customProgramCacheKey=()=>"nail-wipe",s}var NT={3:[[.5,.185,.13],[.33,.23,.1],[.67,.23,.1]],5:[[.5,.17,.12],[.35,.21,.1],[.65,.21,.1],[.23,.29,.08],[.77,.29,.08]]},er=class extends ie{constructor({finger:t=!0,design:e="overgrown",cheapGems:n=!1,skinColor:i}={}){if(super(),this.params={shape:0,length:1.5,irregular:1},this.plateGeo=new dm,this.mat=LT(),this.plate=new Tt(this.plateGeo,this.mat),this.decalGeo=new fm(this.plateGeo),this.decalMat=Ti("#e2bd84",{transparent:!0,depthWrite:!1,roughness:.22,clearcoat:.6,polygonOffset:!0,polygonOffsetFactor:-1,opacity:0}),this.decal=new Tt(this.decalGeo,this.decalMat),this.decal.visible=!1,this.nail=new ie,this.nail.position.set(0,vo,kx*um),this.nail.add(this.plate,this.decal),this.add(this.nail),t){let o=Ex({vertexColors:!0});i&&o.color.set(i),this.finger=new Tt(DT(),o),this.add(this.finger)}this.gems=[];let r=n?Zu("#ffffff"):ec();for(let o=0;o<5;o++){let a=new Tt(rm(16),r);a.visible=!1,a.userData.s=0,this.nail.add(a),this.gems.push(a)}this.gemLayout=0,this.gemAmount=0,this.design=null,this.applyDesign(e)}rebuild(){this.plateGeo.update(this.params),this.decalGeo.update(),this.placeGems()}setShape(t,e=this.params.length,n=this.params.irregular){this.params.shape=t,this.params.length=e,this.params.irregular=n,this.rebuild()}placeGems(){let t=NT[this.gemLayout]||[],e={},n=new U(0,1,0),i=new U,r=new li;this.gems.forEach((o,a)=>{let l=t[a];if(!l||this.gemAmount<=.001){o.visible=!1;return}let[c,h,d]=l;Ss(c,h,this.params,e);let f=Ss(c-.02,h,this.params,{}),u=Ss(c+.02,h,this.params,{}),g=Ss(c,h+.02,this.params,{}),_=new U(u.x-f.x,u.y-f.y,u.zt-f.zt),p=new U(g.x-e.x,g.y-e.y,g.zt-e.zt);i.crossVectors(_,p).normalize(),r.setFromUnitVectors(n,i),o.quaternion.copy(r),o.rotateY(a*.7);let m=Math.min(1,Math.max(0,this.gemAmount*1.6-a*.12)),v=m<1?1+Math.sin(m*Math.PI)*.25:1;o.scale.setScalar(d*m*v),o.position.set(e.x,e.y,e.zt+.012).addScaledVector(i,d*.18*m),o.visible=m>.001})}setGems(t,e){this.gemLayout=t,this.gemAmount=e,this.placeGems()}applyDesign(t){let e=rc(t);this.design=t,this.mat.map=lm(t),this.mat.userData.uMapB.value=this.mat.map,this.mat.userData.uMix.value=0,this.mat.roughness=e.roughness,this.mat.clearcoat=Math.max(e.clearcoat,.02),this.mat.metalness=e.metalness,this.mat.iridescence=Math.max(e.iridescence,.001),this.mat.needsUpdate=!0;let n=cm(e.decal);return n?(this.decalMat.alphaMap=n,this.decalMat.opacity=1,this.decalMat.needsUpdate=!0,this.decal.visible=!0):(this.decalMat.opacity=0,this.decal.visible=!1),this.params.shape=e.shape,this.params.length=e.length,this.params.irregular=t==="overgrown"?1:0,this.gemLayout=e.gems||0,this.gemAmount=e.gems?1:0,this.rebuild(),e}beginDesign(t){this.mat.userData.uMix.value>=.5&&this.mat.userData.uMapB.value&&(this.mat.map=this.mat.userData.uMapB.value),this.mat.userData.uMapB.value=lm(t),this.mat.userData.uMix.value=0,this.design=t;let e=rc(t),n=cm(e.decal);return n&&(this.decalMat.alphaMap=n,this.decalMat.needsUpdate=!0),e}get mix(){return this.mat.userData.uMix.value}set mix(t){this.mat.userData.uMix.value=t}endDesign(){this.mat.map=this.mat.userData.uMapB.value,this.mat.userData.uMix.value=0}set decalOpacity(t){this.decalMat.opacity=t,this.decal.visible=t>.002}get decalOpacity(){return this.decalMat.opacity}};var Hx=[{ry:.3,rx:-.3,zoom:1,y:0},{ry:-.25,rx:-.55,zoom:1,y:.15},{ry:.15,rx:-.2,zoom:1.28,y:-.35},{ry:.72,rx:-.3,zoom:1.05,y:0},{ry:-.4,rx:-.35,zoom:1.02,y:0},{ry:.35,rx:-.4,zoom:1.05,y:.05},{ry:-.12,rx:-.3,zoom:1.32,y:-.15},{ry:.45,rx:-.35,zoom:1,y:0},{ry:0,rx:-.3,zoom:.9,y:0}],sd=class extends Ri{constructor(t){super(t,{fov:28});let e=this.scene;e.add(new jn("#fff1ee","#2a1218",.7));let n=new $e("#ffffff",1.9);n.position.set(3,5,6),e.add(n);let i=new $e("#ffb3bf",2.4);i.position.set(-4,3,-5),e.add(i);let r=new $e("#ffe2d8",.6);r.position.set(-5,-1,4),e.add(r),this.pivot=new ie,e.add(this.pivot),this.model=new er({design:"overgrown"}),this.model.position.y=.45,this.pivot.add(this.model),this.pearls=[ui({size:.34}),ui({size:.2}),ui({size:.14})];let o=[[-1.9,1.3,-1.6],[1.7,-.6,-1.2],[1.3,1.9,-2.2]];this.pearls.forEach((a,l)=>{a.position.set(...o[l]),a.userData.base=a.position.clone(),e.add(a)}),this.sparkles=Ks({count:70,spread:[3.2,3.6,2.4],center:[0,.9,.4],size:26}),this.sparkles.material.uniforms.uOpacity.value=0,e.add(this.sparkles),this.view={...Hx[0]},this.index=-1,this.state={shape:0,length:1.58,irregular:1,gems:0,layout:0,spin:0},this.showcase=0,this.tl=null,this.target=new U(0,.25,0)}resize(t,e){this.dist=Pi(this.camera,3.9,2.9)}goTo(t,e,n=!1){if(t===this.index)return;let i=this.index<0;this.index=t;let r=rc(e),o=this.model,a=this.state;if(this.tl&&this.tl.kill(),vt.killTweensOf(this.view),vt.to(this.view,{...Hx[t],duration:1.6,ease:"expo.inOut"}),vt.to(this,{showcase:n?1:0,duration:1.2,ease:"power2.inOut"}),i){o.applyDesign(e),Object.assign(a,{shape:r.shape,length:r.length,irregular:e==="overgrown"?1:0});return}let l=o.design===e,c=vt.timeline();this.tl=c,l||(o.beginDesign(e),o.mix=0,c.to(o,{mix:1,duration:1.25,ease:"power2.inOut",onComplete:()=>o.endDesign()},0)),c.to(o.mat,{roughness:r.roughness,clearcoat:Math.max(r.clearcoat,.02),metalness:r.metalness,iridescence:Math.max(r.iridescence,.001),duration:1.1,ease:"power2.inOut"},.1),c.to(a,{shape:r.shape,length:r.length,irregular:e==="overgrown"?1:0,duration:1.2,ease:"power3.inOut",onUpdate:()=>o.setShape(a.shape,a.length,a.irregular)},0),c.to(o,{decalOpacity:r.decal?1:0,duration:.7,ease:"power1.out"},r.decal?.75:0),r.gems?(a.layout=r.gems,c.fromTo(a,{gems:0},{gems:1,duration:1,ease:"power2.out",onUpdate:()=>o.setGems(a.layout,a.gems)},.9)):o.gemAmount>0&&c.to(a,{gems:0,duration:.45,ease:"power2.in",onUpdate:()=>o.setGems(a.layout,a.gems)},0)}update(t,e){let n=this.view,i=ze.sx,r=ze.sy,o=this.showcase;o>.02?this.state.spin+=e*o*.6:this.state.spin=Sn(this.state.spin,Math.round(this.state.spin/(Math.PI*2))*Math.PI*2,2.5,e),this.pivot.rotation.y=n.ry+i*.35+Math.sin(t*.5)*.06+this.state.spin,this.pivot.rotation.x=n.rx+r*.12+Math.sin(t*.4)*.03,this.pivot.rotation.z=Math.sin(t*.33)*.03,this.pivot.position.y=n.y+Math.sin(t*.7)*.04;let a=(this.dist||9)/n.zoom;this.camera.position.set(i*.25,.35-r*.2,a),this.camera.lookAt(this.target),this.pearls.forEach((c,h)=>{let d=c.userData.base;c.position.set(d.x+i*.15*(h+1),d.y+Math.sin(t*.6+h*2)*.1,d.z)});let l=this.sparkles.material.uniforms;l.uTime.value=t,l.uOpacity.value=Sn(l.uOpacity.value,.25+o*.75,3,e)}};var ss=(s,t=48)=>{let e=new ts(s.map(([n,i])=>new lt(Math.max(n,5e-4),i)),t);return e.computeVertexNormals(),Rr(e)};function UT(s,t,e){let n=new Ws,i=s/2,r=i-e;return n.moveTo(-i,0),n.lineTo(-i,t*.42),n.bezierCurveTo(-i,t*.92,-i*.55,t,0,t),n.bezierCurveTo(i*.55,t,i,t*.92,i,t*.42),n.lineTo(i,0),n.lineTo(r,0),n.lineTo(r,t*.42),n.bezierCurveTo(r,(t-e)*.9,r*.55,t-e,0,t-e),n.bezierCurveTo(-r*.55,t-e,-r,(t-e)*.9,-r,t*.42),n.lineTo(-r,0),n.closePath(),n}function FT(){let s=rn(256,128),t=s.getContext("2d");return t.fillStyle="#0d0a0c",t.fillRect(0,0,256,128),t.fillStyle="#ffffff",t.font=`500 64px ${Ar.mono}`,t.textAlign="center",t.textBaseline="middle",t.fillText("60",128,66),t.font=`400 18px ${Ar.mono}`,t.fillStyle="#c9b8ff",t.fillText("SEC",210,70),_n(s)}function Gx(){let s=new ie,t=Ai("#f6f0ef",{roughness:.22,clearcoat:.9,clearcoatRoughness:.08}),e=2.5,n=1.25,i=1.9,r=new ma(UT(e,n,.13),{depth:i,bevelEnabled:!0,bevelThickness:.05,bevelSize:.045,bevelSegments:5,curveSegments:40});r.translate(0,0,-i/2);let o=new Tt(r,t);s.add(o);let a=new Ws;a.moveTo(-e/2+.1,0),a.lineTo(-e/2+.1,n*.42),a.bezierCurveTo(-e/2+.1,n*.88,-e*.27,n-.1,0,n-.1),a.bezierCurveTo(e*.27,n-.1,e/2-.1,n*.88,e/2-.1,n*.42),a.lineTo(e/2-.1,0),a.closePath();let l=new Tt(new Vl(a,24),Ai("#e9e1e0",{roughness:.4,side:pn}));l.position.z=-i/2+.1,s.add(l);let c=new tn({color:new Bt("#e4d8ff").multiplyScalar(2.2),toneMapped:!1}),h=new gs(.035,12,8),d=new Al(h,c,27),f=new Ae,u=0;for(let b=0;b<3;b++)for(let w=0;w<9;w++){let T=Math.PI*(.12+.76*w/8),R=Math.cos(T)*(e/2-.26),y=.2+Math.sin(T)*(n-.5);f.makeTranslation(R,y,-.55+b*.55),d.setMatrixAt(u++,f)}s.add(d);let g=rn(128,128),_=g.getContext("2d"),p=_.createRadialGradient(64,40,0,64,64,64);p.addColorStop(0,"rgba(190,160,255,0.9)"),p.addColorStop(1,"rgba(120,80,255,0)"),_.fillStyle=p,_.fillRect(0,0,128,128);let m=new Tt(new Ze(e*.9,n*.95),new tn({map:_n(g),transparent:!0,blending:co,depthWrite:!1,toneMapped:!1,opacity:.55}));m.position.set(0,n*.48,-.2),s.add(m);let v=new Tt(new Zs(.62,.04,.32,3,.015),new es({color:"#111",roughness:.2}));v.position.set(0,n+.03,.3),s.add(v);let M=new Tt(new Ze(.5,.24),new tn({map:FT(),toneMapped:!1}));M.rotation.x=-Math.PI/2,M.position.set(0,n+.052,.3),s.add(M);let x=new Tt(new Zs(e+.12,.08,i+.12,3,.03),Ai("#efe6e5",{roughness:.35}));return x.position.y=-.04,s.add(x),s.userData.size=2.6,s}function Wx(s="flame"){let t=new ie,e=new Tt(new Gi(.0235,.0235,.36,16),Tr());e.position.y=-.18,t.add(e);let n;if(s==="flame")n=new Tt(ss([[0,0],[.03,.01],[.055,.06],[.05,.12],[.028,.18],[0,.205]],32),Ti("#d7b06e",{roughness:.55,clearcoat:0}));else if(s==="ball")n=new Tt(new gs(.06,32,20),yo("#b0122f",{roughness:.45,clearcoat:.2})),n.position.y=.055;else{let i=ss([[0,0],[.05,0],[.05,.2],[.035,.225],[0,.23]],48);n=new Tt(i,Tr({roughness:.3}))}return t.add(n),t}function Xx(){let s=new ie,t=Ti("#e5b8a6",{roughness:.32,clearcoat:.8,clearcoatRoughness:.1}),e=new Tt(ss([[0,0],[.08,.005],[.115,.04],[.13,.12],[.135,.5],[.13,1.25],[.118,1.42],[.112,1.8],[.09,1.95],[.06,2.02],[0,2.03]],64),t);s.add(e);let n=Ai("#2a1a20",{roughness:.4});for(let l=0;l<6;l++){let c=new Tt(new Gl(.116,.012,10,48),n);c.rotation.x=Math.PI/2,c.position.y=1.48+l*.055,s.add(c)}let i=new Tt(new Gi(.045,.055,.1,32),Tr());i.position.y=2.07,s.add(i);let r=Wx("flame");r.position.y=2.3,s.add(r);let o=new fa([new U(0,0,0),new U(0,-.4,.05),new U(.25,-.9,.1),new U(.7,-1.2,0),new U(1.4,-1.25,-.1)]),a=new Tt(new Wl(o,48,.028,10),Ai("#1b1215",{roughness:.35}));return s.add(a),s.userData.size=2.4,s}function qx(){let s=new ie;return["flame","ball","cyl"].forEach((t,e)=>{let n=Wx(t);n.position.x=(e-1)*.28,n.scale.setScalar(1.6),s.add(n)}),s}function OT(s,t,e){let n=new Ws;return n.moveTo(-s/2+e,-t/2),n.lineTo(s/2-e,-t/2),n.absarc(s/2-e,0,e,-Math.PI/2,Math.PI/2,!1),n.lineTo(-s/2+e,t/2),n.absarc(-s/2+e,0,e,Math.PI/2,Math.PI*1.5,!1),n}function BT(s,t,e){let n=s.attributes.position,i=s.attributes.uv;for(let r=0;r<n.count;r++)i.setXY(r,(n.getX(r)+t/2)/t,(n.getY(r)+e/2)/e);i.needsUpdate=!0}function Yx(){let e=new ma(OT(2.1,.3,.13),{depth:.03,bevelEnabled:!0,bevelThickness:.008,bevelSize:.008,bevelSegments:2,curveSegments:24});BT(e,2.1,.3),e.translate(0,0,-.015);let n=new es({map:Px("#f6dcd8","#ead0e8"),roughness:.95,metalness:0}),i=new Tt(e,n),r=new ie;return r.add(i),r.userData.size=2.1,r}function Zx(){let s=rn(256,128),t=s.getContext("2d");t.fillStyle="#f2c9cf",t.fillRect(0,0,256,128);let e=Bn(4);for(let r=0;r<3e3;r++)t.fillStyle=e()>.5?"rgba(255,255,255,.25)":"rgba(150,80,90,.12)",t.fillRect(e()*256,e()*128,1.5,1.5);let n=new Tt(new Zs(1.05,.3,.32,4,.09),new es({map:_n(s),roughness:1})),i=new ie;return i.add(n),i}function $x(){let s=ss([[0,-1.08],[.02,-1.06],[.03,-1],[.022,-.9],[.028,-.8],[.055,-.62],[.06,-.5],[.06,.5],[.055,.62],[.028,.8],[.022,.9],[.03,1],[.02,1.06],[0,1.08]],40),t=s.attributes.position;for(let r=0;r<t.count;r++){let o=t.getY(r);if(o>.86){let a=(o-.86)/.22;t.setX(r,t.getX(r)*(1+2.6*a)),t.setZ(r,t.getZ(r)*(1-.75*a))}else if(o<-.86){let a=(-.86-o)/.22;t.setZ(r,t.getZ(r)*(1+2.2*a)),t.setX(r,t.getX(r)*(1-.7*a))}}s.computeVertexNormals(),Rr(s);let e=new Tt(s,Tr({roughness:.14})),n=new Tt(new Gi(.064,.064,.7,40,1,!0),Tr({roughness:.55})),i=new ie;return i.add(e,n),i.userData.size=2.2,i}function Vx(s="liner"){let t=new ie,e=new Tt(ss([[0,0],[.04,.01],[.055,.2],[.06,.9],[.05,1.25],[0,1.27]],32),Ai(s==="liner"?"#160e11":"#7e0b24",{roughness:.15,clearcoat:1,clearcoatRoughness:.03}));e.position.y=-1.27,t.add(e);let n=new Tt(new Gi(.038,.045,.24,32),Ti());n.position.y=.11,t.add(n);let i;if(s==="liner")i=new Tt(ss([[.034,0],[.03,.08],[.016,.32],[.002,.46],[0,.47]],20),Ai("#2a1d22",{roughness:.6}));else{let r=ss([[.038,0],[.05,.08],[.058,.18],[.05,.26],[0,.28]],24);r.scale(1.3,1,.3),i=new Tt(r,Ai("#d8c3b3",{roughness:.55}))}return i.position.y=.23,t.add(i),t}function Jx(){let s=new ie,t=Vx("liner"),e=Vx("flat");return t.position.x=-.16,e.position.x=.16,e.rotation.z=-.05,s.add(t,e),s}function Kx(){let s=new ie,t=Yu({opacity:.25}),e=[[0,0],[.26,0],[.3,.04],[.31,.5],[.27,.62],[.13,.7],[.12,.78]],n=new Tt(ss(e,48),t),i=new Tt(ss([[0,.03],[.26,.03],[.28,.06],[.285,.44],[0,.44]],40),yo("#d58b2c",{roughness:.05})),r=new Tt(ss([[0,0],[.15,0],[.155,.4],[.14,.44],[0,.45]],48),Ti());return r.position.y=.74,s.add(i,n,r),s}function Qx(){let s=new ie,t=ss([[0,-.035],[.38,-.035],[.42,-.015],[.425,0],[.42,.015],[.38,.035],[0,.035]],48),e=new Qn({color:"#fbf7f4",roughness:1,sheen:1,sheenColor:new Bt("#ffffff"),sheenRoughness:.8});for(let n=0;n<3;n++){let i=new Tt(t,e);i.position.set(n*.05,n*.072,n*.03),i.rotation.y=n,s.add(i)}return s}var rd=null;function zT(){if(rd)return rd;let s=128,t=rn(s,s),e=t.getContext("2d"),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);return n.addColorStop(0,"rgba(0,0,0,0.55)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,s,s),rd=_n(t,{srgb:!1}),rd}var HT=(s,t,e)=>new li().setFromEuler(new ci(s,t,e)),od=class extends Ri{constructor(t,{mobile:e=!1}={}){super(t,{fov:32,transmissive:!1});let n=this.scene;n.add(new jn("#fff3f0","#1d0c12",.75));let i=new $e("#ffffff",2.1);i.position.set(-3,9,5),n.add(i);let r=new $e("#ff9fb0",1.8);r.position.set(5,3,-6),n.add(r),this.progress=0,this.p=0,this.items=[],this.root=new ie,n.add(this.root);let o=Bn(31),a=(R,{key:y,label:S,x:P,z:L,rot:O=0,lie:z=[0,0,0],y:H=0,scale:V=1,shadow:X=1})=>{let W=new ie;W.add(R),this.root.add(W);let K=new U((o()-.5)*11,1.5+(o()-.2)*6,(o()-.5)*6-1),I=HT(o()*6,o()*6,o()*6),at=new li().setFromEuler(new ci(z[0],O,z[2],"YXZ")),Mt=null;X&&(Mt=new Tt(new Ze(1,1),new tn({map:zT(),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0})),Mt.rotation.x=-Math.PI/2,Mt.scale.set(X*V,X*V*.7,1),Mt.position.set(P,.005,L),this.root.add(Mt)),this.items.push({key:y,label:S,holder:W,start:K,startQ:I,end:new U(P,H,L),endQ:at,scale:V,shadow:Mt,delay:this.items.length*.035,spin:new U(o()-.5,o()-.5,o()-.5).multiplyScalar(.6)})},l=Gx();a(l,{key:"lamp",x:2.75,z:-1.75,rot:-.35,scale:1,shadow:3.2});let c=Xx();a(c,{key:"efile",x:.35,z:1.3,rot:.25,lie:[0,0,-Math.PI/2],y:.14,shadow:2.4});let h=qx();a(h,{key:"bits",x:2.35,z:1.95,rot:.4,lie:[Math.PI/2,0,0],y:.06,scale:1,shadow:.9});let d=Yx();a(d,{key:"file",x:-1.45,z:-.55,rot:.55,lie:[-Math.PI/2,0,0],y:.03,shadow:2.2});let f=Zx();a(f,{key:"buffer",x:-1.75,z:.95,rot:-.3,y:.15,shadow:1.3});let u=$x();a(u,{key:"pusher",x:1.05,z:-.3,rot:-.9,lie:[0,0,Math.PI/2],y:.07,shadow:2.2});let g=Jx();a(g,{key:"brushes",x:4.25,z:1.1,rot:.95,lie:[0,0,Math.PI/2],y:.07,shadow:2});let _=["#ecd2ce",xe.shades[0].color,"#f3efe9"],p=["silver","gold","black"],m=["BASE","COLOR","TOP"];_.forEach((R,y)=>{let S=new Ci({color:R,cap:p[y],transmissive:!1,ribbed:!1,shadow:!1,label:{brand:xe.brand,shade:m[y],sub:"12 ML"},glitter:y===2});S.scale.setScalar(.5),a(S,{key:y===1?"bottles":"bottle"+y,x:-.55+y*.85,z:-2.35+(y===1?-.25:0),rot:-.15+y*.12,shadow:1.1})});let v=Kx();a(v,{key:"oil",x:4.7,z:-.55,rot:.2,scale:1,shadow:1});let M=Qx();a(M,{key:"cotton",x:-1.85,z:-2.15,rot:.3,y:.04,shadow:1.2});let x=Js({size:.32});a(x,{key:"gem1",x:1.9,z:.6,lie:[.2,0,.1],y:.12,shadow:.4});let b=Js({size:.22,tint:"#ffc2d2"});a(b,{key:"gem2",x:-.6,z:.4,lie:[.3,0,-.2],y:.09,shadow:.3});let w=ui({size:.26});a(w,{key:"pearl1",x:3.3,z:.5,y:.13,shadow:.35});let T=ui({size:.18});a(T,{key:"pearl2",x:-.2,z:-1.1,y:.09,shadow:.25}),this.labelAnchors={lamp:new U(2.75,1.45,-1.75),efile:new U(-.45,.35,1.35),bits:new U(2.35,.3,1.95),file:new U(-1.45,.15,-.55),bottles:new U(.3,1.7,-2.6),pusher:new U(1.05,.2,-.3),brushes:new U(4.25,.2,1.1),oil:new U(4.7,1.4,-.55)},this.labels={},this.mobile=e,this.camTarget=new U}resize(t,e){this.wide=t/e;let n=this.wide<.9;this.distEnd=n?Pi(this.camera,6.4,7.6):Pi(this.camera,6.2,13.2)}setProgress(t){this.progress=t}update(t,e){this.p=Sn(this.p,this.progress,6,e);let n=this.p,i=Ms(n,.02,.62),r=this.camera,o=this.wide<.9,a=o?1.45:-1.05,l=Qs(Ms(n,0,.7)),c=(this.distEnd||14)*vs(1.15,1,l),h=vs(.35,.95,l);this.camTarget.set(a*vs(.6,1,l),vs(1.6,o?-.6:.1,l),vs(0,.3,l));let d=ze.sx,f=ze.sy;r.position.set(this.camTarget.x+d*.6+Math.sin(t*.2)*.15,this.camTarget.y+Math.sin(h)*c-f*.3,this.camTarget.z+Math.cos(h)*c),r.lookAt(this.camTarget);for(let u of this.items){let g=ic(Cr((i-u.delay)/.4)),_=u.holder,p=1-g;_.position.lerpVectors(u.start,u.end,g),_.position.y+=Math.sin(t*.8+u.delay*40)*.18*p,_.quaternion.slerpQuaternions(u.startQ,u.endQ,g),p>.001&&(_.rotateX(Math.sin(t*.5+u.delay*9)*.25*p),_.rotateY(t*u.spin.y*p)),_.scale.setScalar(u.scale*(.75+.25*g)),u.shadow&&(u.shadow.material.opacity=g*g*.9)}this.assembled=i}labelPositions(){let t=[];for(let[e,n]of Object.entries(this.labelAnchors)){let i=n.clone().project(this.camera);t.push({key:e,x:(i.x*.5+.5)*this.width,y:(-i.y*.5+.5)*this.height,z:i.z})}return t}};function ty(s,t="#ffd2da"){s.add(new jn("#fff4f1","#3a1c24",.9));let e=new $e("#ffffff",2);e.position.set(3,5,6),s.add(e);let n=new $e(t,1.6);n.position.set(-4,2,-4),s.add(n)}var ad=class extends Ri{constructor(t,e){super(t,{fov:30}),ty(this.scene),this.rig=new ie,this.scene.add(this.rig),this.kind=e,this.hover=0,this.hoverTarget=0,this.appear=0;let n=t.closest(".acard");this.card=n,n&&(n.addEventListener("pointerenter",()=>this.hoverTarget=1),n.addEventListener("pointerleave",()=>this.hoverTarget=0));let i=2.4;if(e==="tip"){let r=new er({finger:!1,design:"milky-french",cheapGems:!0});r.setShape(.85,1.7,0),r.position.set(0,-.15,0),r.nail.position.set(0,-.85,0),this.rig.add(r),this.rig.rotation.x=-.5,i=2}else if(e==="bottle"){let r=new Ci({color:xe.shades[1].color,cap:"rose",transmissive:!1,ribbed:!0,shadow:!1,label:{brand:xe.brand,shade:"N\xBA 02 \xB7 MILKY ROSE",sub:"GEL POLISH"}});r.position.y=-1.5,r.scale.setScalar(1),this.rig.add(r),i=3.4}else if(e==="brush"){let r=new Ci({color:xe.shades[0].color,cap:"gold",transmissive:!1,shadow:!1,label:!1});r.setOpen(1),r.body.visible=!1,r.liquid.visible=!1,r.neck.visible=!1,r.children.forEach(a=>{a.geometry&&a.geometry.type==="CircleGeometry"&&(a.visible=!1)}),r.capPivot.position.y=.4,r.updateMatrixWorld(!0);let o=new U;r.brushTip.getWorldPosition(o),r.drop.visible=!0,r.drop.position.copy(r.worldToLocal(o)).add(new U(0,-.05,0)),r.rotation.z=-.5,r.position.set(-.2,-.5,0),this.rig.add(r),this.brushBottle=r,i=3.6}else{let r=Js({size:1.25});r.rotation.x=.35,this.rig.add(r);let o=ui({size:.32});o.position.set(1,.45,-.3);let a=ui({size:.22});a.position.set(-.95,-.4,.4),this.rig.add(o,a),this.orbit=[o,a],i=2.6}this.size=i}resize(){this.dist=Pi(this.camera,this.size,this.size)}update(t,e){this.hover=Sn(this.hover,this.hoverTarget,5,e);let n=this.hover,i=!this.card||this.card.classList.contains("is-revealed")||!document.documentElement.classList.contains("anim");this.appear=Sn(this.appear,i?1:0,3.5,e);let r=this.appear;if(this.rig.rotation.y+=e*(.35+n*1.6+(1-r)*4),this.rig.position.y=Math.sin(t*1.1+this.size)*.06+n*.08-(1-r)*.8,this.rig.scale.setScalar(.4+.6*r),this.kind==="brush"&&this.brushBottle){let o=this.brushBottle.drop,a=t*.6%1;o.scale.setScalar(.6+Math.sin(a*Math.PI)*.5)}this.orbit&&this.orbit.forEach((o,a)=>{let l=t*(.6+a*.3)+a*3;o.position.set(Math.cos(l)*(1.05-a*.1),Math.sin(l*1.3)*.35,Math.sin(l)*.6)}),this.camera.position.set(ze.sx*.3,.2,this.dist||8),this.camera.lookAt(0,0,0)}},jx={base:{color:"#ecd2ce",cap:"silver",shade:"BASE \xB7 N\xBA 00",glitter:!1},color:{color:null,cap:"gold",shade:"COLOR \xB7 N\xBA 01",glitter:!1},top:{color:"#d7b98a",cap:"black",shade:"TOP \xB7 GOLD",glitter:!0}},ld=class extends Ri{constructor(t,e,{transmissive:n=!0}={}){super(t,{fov:26,transmissive:n}),ty(this.scene,e==="top"?"#ffe0a8":"#ffc0cc");let i=jx[e]||jx.color;this.bottle=new Ci({color:i.color||xe.shades[0].color,cap:i.cap,transmissive:n,glitter:i.glitter,label:{brand:xe.brand,shade:i.shade,sub:"GEL POLISH \xB7 12 ML"}}),this.bottle.position.y=-1.5,this.rig=new ie,this.rig.add(this.bottle),this.scene.add(this.rig),this.variant=e,e==="top"&&(this.sparkles=Ks({count:50,spread:[3.2,3.4,2],center:[0,.2,0],size:22,color:"#ffe6b8"}),this.scene.add(this.sparkles)),this.hover=0,this.hoverTarget=0,this.appear=0;let r=t.closest(".plan");this.card=r,r&&(r.addEventListener("pointerenter",()=>this.hoverTarget=1),r.addEventListener("pointerleave",()=>this.hoverTarget=0)),this.spin=e==="base"?.6:e==="top"?-.6:0}resize(){this.dist=Pi(this.camera,3.9,2.4)}update(t,e){this.hover=Sn(this.hover,this.hoverTarget,4,e);let n=this.hover,i=!this.card||this.card.classList.contains("is-revealed")||!document.documentElement.classList.contains("anim");this.appear=Sn(this.appear,i?1:0,3,e);let r=this.appear;this.spin+=e*(.25+n*2.2+(1-r)*5),this.rig.rotation.y=this.spin,this.rig.position.y=.3+Math.sin(t*.9+this.spin*.2)*.05+n*.2-(1-r)*1.4,this.rig.scale.setScalar(.5+.5*r),this.bottle.setOpen(n*.18),this.sparkles&&(this.sparkles.material.uniforms.uTime.value=t,this.sparkles.material.uniforms.uOpacity.value=.5+n*.5),this.camera.position.set(ze.sx*.4,.5,this.dist||9),this.camera.lookAt(0,.05,0)}};var cd=class extends Ri{constructor(t,{transmissive:e=!0}={}){super(t,{fov:30,transmissive:e});let n=this.scene;n.add(new jn("#fff4f1","#2a1018",.7));let i=new $e("#ffffff",2.1);i.position.set(3,6,7),n.add(i);let r=new $e("#ff9fb0",2.2);r.position.set(-5,3,-6),n.add(r),this.ring=new ie,n.add(this.ring),this.bottles=[];let o=xe.shades;this.R=2.9,o.forEach((a,l)=>{let c=new Ci({color:a.color,cap:l%3===0?"gold":l%3===1?"rose":"black",ribbed:!0,transmissive:e,label:{brand:xe.brand,shade:`N\xBA ${String(l+1).padStart(2,"0")} \xB7 ${a.name.toUpperCase()}`,sub:"GEL POLISH \xB7 12 ML"},labelColor:["milk","pearl"].includes(a.id)?"#7e0b24":"#ffffff"}),h=l/o.length*Math.PI*2,d=new ie;d.position.set(Math.sin(h)*this.R,0,Math.cos(h)*this.R),d.rotation.y=h,c.position.y=-1.55,c.scale.setScalar(.7),d.add(c),this.ring.add(d),this.bottles.push({b:c,holder:d,a:h,lift:0})}),this.sparkles=Ks({count:90,spread:[7,4,7],center:[0,.4,0],size:26}),n.add(this.sparkles),this.selected=0,this.angle=0,this.targetAngle=0,this.idle=0,this.scrollP=0}select(t){let e=this.bottles.length;this.selected=t;let i=-(t/e)*Math.PI*2-this.targetAngle%(Math.PI*2);i=(i+Math.PI*3)%(Math.PI*2)-Math.PI,this.targetAngle+=i,this.idle=0}celebrate(){this.burst=1,this.targetAngle+=Math.PI*2}resize(){this.dist=Pi(this.camera,3.9,7)}update(t,e){this.idle+=e,this.angle=Sn(this.angle,this.targetAngle,3.2,e),this.ring.rotation.y=this.angle+Math.sin(t*.25)*.08+this.scrollP*.6,this.bottles.forEach((i,r)=>{let o=r===this.selected?1:0;i.lift=Sn(i.lift,o,4,e),i.holder.position.y=i.lift*.45+Math.sin(t*.9+r)*.05,i.b.rotation.y=i.lift*Math.sin(t*.6)*.5,i.b.setOpen(i.lift*.12)}),this.burst=Sn(this.burst||0,0,1.2,e);let n=this.sparkles.material.uniforms;n.uTime.value=t,n.uOpacity.value=1+this.burst*2,n.uSize.value=26*(1+this.burst*1.5),this.camera.position.set(ze.sx*.5,1.5-ze.sy*.3,this.dist||10),this.camera.lookAt(0,.1,0)}};var ey={"milky-french":["#f2e2de","#d8bcb6"],cherry:["#3a131c","#140a0d"],"baby-boomer":["#f4e8e5","#dcc5c1"],"pearl-chrome":["#ebe4ee","#cdc1d6"],"cat-eye":["#2a1019","#0e0709"],"gold-foil":["#f1e3d8","#d6bfac"],aura:["#f4dfe9","#dab6c9"],"line-art":["#f5eee9","#dccfc5"],"red-french":["#eedbd6","#cfb1aa"],tortoise:["#40291a","#1a0f09"],"silver-chrome":["#e0e1e6","#b4b5be"],crystals:["#2b161c","#100a0c"]};function VT([s,t]){let e=rn(512,640),n=e.getContext("2d"),i=n.createRadialGradient(256,250,10,256,320,460);return i.addColorStop(0,s),i.addColorStop(1,t),n.fillStyle=i,n.fillRect(0,0,512,640),_n(e)}var hd=class{constructor(t){this.engine=t;let e=this.scene=new ms;e.environment=t.env,e.add(new jn("#fff4f1","#3a1c24",.8));let n=new $e("#ffffff",2.2);n.position.set(3,6,6),e.add(n);let i=new $e("#ffc0cc",2);i.position.set(-4,3,-5),e.add(i),this.camera=new Mn(24,4/5,.1,60),this.pivot=new ie,e.add(this.pivot),this.model=new er({design:"natural"}),this.model.position.y=.4,this.pivot.add(this.model),this.bg=new Tt(new Ze(1,1),new tn({toneMapped:!1})),e.add(this.bg),this.out=rn(8,8),this.ctx=this.out.getContext("2d")}shot({design:t,angle:e=0,tilt:n=-.32,roll:i=0,w:r=600,h:o=750,bg:a}){return new Promise(l=>{this.engine.jobs.push(()=>{let c=this.engine.renderer,h=c.getPixelRatio(),d=c.domElement.width,f=c.domElement.height,u=Math.min(1,d/r,f/o),g=Math.floor(r*u),_=Math.floor(o*u);this.model.applyDesign(t),this.pivot.rotation.set(n,e,i);let p=this.camera;p.aspect=r/o,p.fov=r>o?22:24,p.updateProjectionMatrix();let m=r>o?9.5:8.6;p.position.set(0,.5,m),p.lookAt(0,r>o?.25:.05,0);let v=VT(a||ey[t]||["#f1e3e0","#d9c0bb"]);this.bg.material.map=v,this.bg.material.needsUpdate=!0;let x=2*(m+6)*Math.tan(p.fov*Math.PI/360)*1.1;this.bg.scale.set(x*p.aspect,x,1),this.bg.position.set(0,0,-6),this.bg.lookAt(p.position),c.setScissorTest(!0),c.setViewport(0,0,g/h,_/h),c.setScissor(0,0,g/h,_/h),c.setClearColor(0,1),c.clear(),c.render(this.scene,p),this.out.width=g,this.out.height=_,this.ctx.drawImage(c.domElement,0,f-_,g,_,0,0,g,_),c.setScissorTest(!1),c.setClearColor(0,0),v.dispose(),this.out.toBlob(b=>l(b),"image/jpeg",.9)})})}dispose(t=[]){for(let e of Object.keys(ey))t.includes(e)||Fx(e)}};var GT="1.3.11";function sy(s,t,e){return Math.max(s,Math.min(t,e))}function WT(s,t,e){return(1-e)*s+e*t}function XT(s,t,e,n){return WT(s,t,1-Math.exp(-e*n))}function qT(s,t){return(s%t+t)%t}var YT=class{constructor(){Vt(this,"isRunning",!1);Vt(this,"value",0);Vt(this,"from",0);Vt(this,"to",0);Vt(this,"currentTime",0);Vt(this,"lerp");Vt(this,"duration");Vt(this,"easing");Vt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=sy(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=XT(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function ZT(s,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(i,n)},t)}}var $T=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Vt(this,"width",0);Vt(this,"height",0);Vt(this,"scrollHeight",0);Vt(this,"scrollWidth",0);Vt(this,"debouncedResize");Vt(this,"wrapperResizeObserver");Vt(this,"contentResizeObserver");Vt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Vt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Vt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=ZT(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},ry=class{constructor(){Vt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?.push(t)||(this.events[s]=[t]),()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},ny=100/6,Ir={passive:!1},JT=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Vt(this,"touchStart",{x:0,y:0});Vt(this,"lastDelta",{x:0,y:0});Vt(this,"window",{width:0,height:0});Vt(this,"emitter",new ry);Vt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Vt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Vt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Vt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=n===1?ny:n===2?this.window.width:1,r=n===1?ny:n===2?this.window.height:1;t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Vt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ir),this.element.addEventListener("touchstart",this.onTouchStart,Ir),this.element.addEventListener("touchmove",this.onTouchMove,Ir),this.element.addEventListener("touchend",this.onTouchEnd,Ir)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Ir),this.element.removeEventListener("touchstart",this.onTouchStart,Ir),this.element.removeEventListener("touchmove",this.onTouchMove,Ir),this.element.removeEventListener("touchend",this.onTouchEnd,Ir)}},iy=s=>Math.min(1,1.001-Math.pow(2,-10*s)),oy=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:f=d==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:p,virtualScroll:m,overscroll:v=!0,autoRaf:M=!1,anchors:x=!1,autoToggle:b=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1}={}){Vt(this,"_isScrolling",!1);Vt(this,"_isStopped",!1);Vt(this,"_isLocked",!1);Vt(this,"_preventNextNativeScrollEvent",!1);Vt(this,"_resetVelocityTimeout",null);Vt(this,"__rafID",null);Vt(this,"isTouching");Vt(this,"time",0);Vt(this,"userData",{});Vt(this,"lastVelocity",0);Vt(this,"velocity",0);Vt(this,"direction",0);Vt(this,"options");Vt(this,"targetScroll");Vt(this,"animatedScroll");Vt(this,"animate",new YT);Vt(this,"emitter",new ry);Vt(this,"dimensions");Vt(this,"virtualScroll");Vt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Vt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Vt(this,"onTransitionEnd",s=>{if(s.propertyName.includes("overflow")){let t=this.isHorizontal?"overflow-x":"overflow-y",e=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(e)?this.internalStop():this.internalStart()}});Vt(this,"onClick",s=>{let e=s.composedPath().find(n=>n instanceof HTMLAnchorElement&&(n.getAttribute("href")?.startsWith("#")||n.getAttribute("href")?.startsWith("/#")||n.getAttribute("href")?.startsWith("./#")));if(e){let n=e.getAttribute("href");if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=`#${n.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(n)&&(r=0),this.scrollTo(r,i)}}});Vt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Vt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(p=>p instanceof HTMLElement&&(typeof h=="function"&&h?.(p)||p.hasAttribute?.("data-lenis-prevent")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=e;this.options.gestureOrientation==="both"?f=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(f=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(f=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+f,{programmatic:!1,...u?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Vt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Vt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=GT,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=iy:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:f,orientation:d,touchMultiplier:u,wheelMultiplier:g,autoResize:_,prevent:p,virtualScroll:m,overscroll:v,autoRaf:M,anchors:x,autoToggle:b,allowNestedScroll:w,__experimental__naiveDimensions:T},this.dimensions=new $T(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new JT(e,{touchMultiplier:u,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:r=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof s=="string"&&["top","left","start"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let f;if(typeof s=="string"?f=document.querySelector(s):s instanceof HTMLElement&&s?.nodeType&&(f=s),f){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}let u=f.getBoundingClientRect();s=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=t,s=Math.round(s),this.options.infinite){if(h){this.targetScroll=this.animatedScroll=this.scroll;let f=s-this.animatedScroll;f>this.limit/2?s=s-this.limit:f<-this.limit/2&&(s=s+this.limit)}}else s=sy(0,s,this.limit);if(s===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}h||(this.targetScroll=s),typeof i=="number"&&typeof r!="function"?r=iy:typeof r=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,s,{duration:i,easing:r,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(f,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),h&&(this.targetScroll=f),u||this.emit(),u&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now(),i=s._lenis??(s._lenis={}),r,o,a,l,c,h,d,f,u=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();let b=window.getComputedStyle(s);i.computedStyle=b;let w=b.overflowX,T=b.overflowY;if(r=["auto","overlay","scroll"].includes(w),o=["auto","overlay","scroll"].includes(T),i.hasOverflowX=r,i.hasOverflowY=o,!r&&!o||u==="vertical"&&!o||u==="horizontal"&&!r)return!1;c=s.scrollWidth,h=s.scrollHeight,d=s.clientWidth,f=s.clientHeight,a=c>d,l=h>f,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=f}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,c=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,f=i.clientHeight;if(!r&&!o||!a&&!l||u==="vertical"&&(!o||!l)||u==="horizontal"&&(!r||!a))return!1;let g;if(u==="horizontal")g="x";else if(u==="vertical")g="y";else{let b=t!==0,w=e!==0;b&&r&&a&&(g="x"),w&&o&&l&&(g="y")}if(!g)return!1;let _,p,m,v,M;if(g==="x")_=s.scrollLeft,p=c-d,m=t,v=r,M=a;else if(g==="y")_=s.scrollTop,p=h-f,m=e,v=o,M=l;else return!1;return(m>0?_<p:_>0)&&v&&M}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?qT(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};var Se={reduced:window.matchMedia("(prefers-reduced-motion: reduce)").matches,fine:window.matchMedia("(pointer: fine)").matches,mobile:window.matchMedia("(max-width: 980px)").matches||window.matchMedia("(pointer: coarse)").matches},bs=null;function ay(s){Se.reduced||(bs=new oy({lerp:.085,smoothWheel:!0,wheelMultiplier:.95,syncTouch:!1}),bs.on("scroll",Ot.update));let t=performance.now();return vt.ticker.add(e=>{let n=performance.now(),i=Math.min((n-t)/1e3,.1);t=n,bs&&bs.raf(n),s(e,i)}),vt.ticker.lagSmoothing(0),bs}function ud(s,t={}){if(bs)bs.scrollTo(s,{duration:1.6,easing:e=>1-Math.pow(1-e,4),...t});else{let e=typeof s=="number"?s:s.getBoundingClientRect().top+window.scrollY+(t.offset||0);window.scrollTo({top:e,behavior:Se.reduced?"auto":"smooth"})}}function ly(){document.addEventListener("click",s=>{let t=s.target.closest('a[href^="#"]');if(!t)return;let e=t.getAttribute("href");if(e==="#"||e.length<2)return;let n=document.querySelector(e);if(!n)return;s.preventDefault();let i=n.parentElement&&n.parentElement.classList.contains("pin-spacer")?n.parentElement:n;ud(e==="#top"?0:i),document.dispatchEvent(new CustomEvent("menu:close"))}),document.querySelector("[data-to-top]")?.addEventListener("click",()=>ud(0,{duration:2.2}))}function cy(s=160){let t=document.createElement("canvas");t.width=t.height=s;let e=t.getContext("2d"),n=e.createImageData(s,s);for(let i=0;i<n.data.length;i+=4){let r=Math.random()*255;n.data[i]=n.data[i+1]=n.data[i+2]=r,n.data[i+3]=255}return e.putImageData(n,0,0),t.toDataURL("image/png")}var pm=s=>new Promise(t=>setTimeout(t,s));function hy(){let s=document.getElementById("preloader");if(!s)return{set(){},finish:async()=>{}};let t=s.querySelector("[data-preload-count]"),e=s.querySelector(".preloader__note"),n=["\u041D\u0430\u043D\u043E\u0441\u0438\u043C \u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u043B\u043E\u0439","\u0421\u0443\u0448\u0438\u043C \u0432 \u043B\u0430\u043C\u043F\u0435","\u0417\u0430\u043F\u0435\u0447\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u0442\u043E\u0440\u0435\u0446","\u0424\u0438\u043D\u0438\u0448\u043D\u044B\u0439 \u0433\u043B\u044F\u043D\u0435\u0446"],i=.04,r=0,o=0,a=0,l=()=>{r+=(i-r)*.09,Math.abs(i-r)<.001&&(r=i),s.style.setProperty("--p",r.toFixed(4)),t.textContent=Math.round(r*100);let c=Math.min(n.length-1,Math.floor(r*n.length));c!==a&&(a=c,e.textContent=n[c]),o=requestAnimationFrame(l)};return l(),{set(c){i=Math.max(i,Math.min(c,1))},finish(){return i=1,new Promise(c=>{let h=()=>{if(r>.995){cancelAnimationFrame(o),s.style.setProperty("--p",1),t.textContent="100";let d=s.querySelector(".preloader__inner"),f=s.querySelector(".preloader__curtain");vt.timeline({onComplete:()=>{s.remove(),c()}}).to(d,{y:-24,opacity:0,duration:.6,ease:"power3.in"},.15).to(f,{scaleY:1,duration:.7,ease:"expo.inOut"},.35).set(s,{backgroundColor:"transparent"}).set(f,{transformOrigin:"50% 0%"}).to(f,{scaleY:0,duration:.9,ease:"expo.inOut"}).add(()=>c(),"-=0.55")}else requestAnimationFrame(h)};h()})}}}function uy(){if(!Se.fine||Se.reduced)return;let s=document.querySelector(".cursor");if(!s)return;document.documentElement.classList.add("has-cursor"),vt.set(s,{autoAlpha:0});let t=s.querySelector(".cursor__dot"),e=s.querySelector(".cursor__ring"),n=s.querySelector(".cursor__label"),i=vt.quickSetter(t,"x","px"),r=vt.quickSetter(t,"y","px"),o=vt.quickTo(e,"x",{duration:.45,ease:"power3"}),a=vt.quickTo(e,"y",{duration:.45,ease:"power3"}),l=!1;window.addEventListener("pointermove",c=>{c.pointerType==="mouse"&&(l||(l=!0,vt.to(s,{autoAlpha:1,duration:.3})),i(c.clientX),r(c.clientY),o(c.clientX),a(c.clientY))},{passive:!0}),document.addEventListener("mouseleave",()=>{l=!1,vt.to(s,{autoAlpha:0,duration:.3})}),document.addEventListener("pointerover",c=>{let h=c.target.closest("[data-cursor], a, button, summary, label, input, .swatch");s.classList.remove("is-link","is-label"),h&&(h.dataset.cursor?(n.textContent=h.dataset.cursor,s.classList.add("is-label")):h.matches("input")||s.classList.add("is-link"))})}function dy(){!Se.fine||Se.reduced||document.querySelectorAll("[data-magnetic]").forEach(s=>{let t=s.querySelector(".btn__label"),e=vt.quickTo(s,"x",{duration:.6,ease:"power3"}),n=vt.quickTo(s,"y",{duration:.6,ease:"power3"}),i=t?vt.quickTo(t,"x",{duration:.6,ease:"power3"}):null,r=t?vt.quickTo(t,"y",{duration:.6,ease:"power3"}):null;s.addEventListener("pointermove",o=>{let a=s.getBoundingClientRect(),l=o.clientX-(a.left+a.width/2),c=o.clientY-(a.top+a.height/2);e(l*.28),n(c*.38),i?.(l*.12),r?.(c*.14),s.style.setProperty("--mx",`${(o.clientX-a.left)/a.width*100}%`),s.style.setProperty("--my",`${(o.clientY-a.top)/a.height*100}%`)}),s.addEventListener("pointerleave",()=>{vt.to(s,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"}),t&&vt.to(t,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"})})})}function fy(){!Se.fine||Se.reduced||document.querySelectorAll("[data-tilt]").forEach(s=>{vt.set(s,{transformPerspective:900});let t=vt.quickTo(s,"rotationX",{duration:.8,ease:"power3"}),e=vt.quickTo(s,"rotationY",{duration:.8,ease:"power3"});s.addEventListener("pointermove",n=>{let i=s.getBoundingClientRect(),r=(n.clientX-i.left)/i.width-.5,o=(n.clientY-i.top)/i.height-.5;e(r*8),t(-o*6)}),s.addEventListener("pointerleave",()=>{t(0),e(0)})})}var KT=s=>{let t=parseInt(s.slice(1),16);return[t>>16&255,t>>8&255,t&255]},py=(s,t,e)=>[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e,s[2]+(t[2]-s[2])*e],my=s=>s*s*(3-2*s);function gy(s){let t=document.getElementById("header"),e=document.querySelector(".progress__fill"),n=[...document.querySelectorAll("main > [data-bg], footer[data-bg]")],i=[...document.querySelectorAll(".nav a")],r=[],o=window.scrollY,a="",l=1;function c(){let _=window.scrollY;r=n.map(p=>{let m=p.getBoundingClientRect(),v=m.top+_;return{id:p.id,top:v,bottom:v+m.height,rgb:KT(p.dataset.bg),theme:p.dataset.theme}}),l=document.documentElement.scrollHeight-window.innerHeight}c(),Ot.addEventListener("refresh",c),window.addEventListener("resize",c);let h=_=>{for(let p=0;p<r.length;p++)if(_<r[p].bottom)return p;return r.length-1},d=document.querySelector(".burger"),f=document.getElementById("menu"),u=!1,g=_=>{_===u||!f||(u=_,d.setAttribute("aria-expanded",String(_)),d.setAttribute("aria-label",_?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E":"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043C\u0435\u043D\u044E"),t.classList.remove("is-hidden"),_?(f.hidden=!1,bs?.stop(),vt.fromTo(f,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.8,ease:"expo.inOut"}),vt.fromTo(f.querySelectorAll(".menu__nav a, .menu__cta"),{y:40,opacity:0},{y:0,opacity:1,stagger:.05,duration:.8,delay:.25,ease:"expo.out"}),t.classList.remove("is-light")):(bs?.start(),vt.to(f,{clipPath:"inset(0 0 100% 0)",duration:.6,ease:"expo.inOut",onComplete:()=>f.hidden=!0})))};return d?.addEventListener("click",()=>g(!u)),document.addEventListener("menu:close",()=>g(!1)),document.addEventListener("keydown",_=>_.key==="Escape"&&g(!1)),function(){let p=window.scrollY,m=window.innerHeight;if(!r.length)return;let v=p+m*.55,M=h(v),x=r[M],b=m*.16,w=x.rgb;r[M+1]&&v>x.bottom-b/2?w=py(x.rgb,r[M+1].rgb,my((v-(x.bottom-b/2))/b)):r[M-1]&&v<x.top+b/2&&(w=py(r[M-1].rgb,x.rgb,my((v-(x.top-b/2))/b)));let T=`rgb(${w[0]|0}, ${w[1]|0}, ${w[2]|0})`;if(T!==a&&(a=T,document.body.style.backgroundColor=T,s?.pageBg?.setRGB(w[0]/255,w[1]/255,w[2]/255,"srgb")),!u){let y=r[h(p+40)];t.classList.toggle("is-light",y.theme==="light")}u||(p>o+6&&p>m*.9?t.classList.add("is-hidden"):(p<o-6||p<m*.5)&&t.classList.remove("is-hidden")),o=p,e&&(e.style.transform=`scaleY(${Math.min(1,p/l).toFixed(4)})`);let R=r[h(p+m*.4)]?.id;for(let y of i)y.classList.toggle("is-active",y.getAttribute("href")==="#"+R)}}function _y(){Ot.batch('[data-reveal]:not([data-reveal="clip"])',{start:"top 88%",once:!0,onEnter:s=>{s.forEach(t=>t.classList.add("is-revealed")),vt.to(s,{opacity:1,y:0,duration:1.2,stagger:.09,ease:"expo.out",overwrite:!0})}}),document.querySelectorAll('[data-reveal="clip"]').forEach(s=>{vt.to(s,{clipPath:"inset(0% 0 0 0 round 40px)",duration:1.6,ease:"expo.inOut",scrollTrigger:{trigger:s,start:"top 80%",once:!0},onComplete:()=>s.style.clipPath="none"})}),document.querySelectorAll("[data-split]").forEach(s=>{Xo.create(s,{type:"lines",mask:"lines",autoSplit:!0,onSplit(t){return vt.from(t.lines,{yPercent:115,rotate:2,duration:1.3,stagger:.09,ease:"expo.out",scrollTrigger:{trigger:s,start:"top 86%",once:!0}})}})}),document.querySelectorAll("[data-words]").forEach(s=>{let t=Xo.create(s,{type:"words",wordsClass:"w"});vt.to(t.words,{opacity:1,stagger:.12,ease:"none",scrollTrigger:{trigger:s,start:"top 78%",end:"bottom 42%",scrub:!0}})}),document.querySelectorAll("[data-count]").forEach(s=>{let t=Number(s.dataset.count),e={v:0};s.textContent="0",vt.to(e,{v:t,duration:1.8,ease:"power3.out",scrollTrigger:{trigger:s,start:"top 90%",once:!0},onUpdate:()=>s.textContent=Math.round(e.v)})})}function mm(){document.querySelectorAll("[data-reveal]").forEach(s=>{s.style.opacity=1,s.style.transform="none",s.style.clipPath="none",s.classList.add("is-revealed")})}var QT=s=>Math.round(s).toLocaleString("ru-RU"),xy=s=>new Intl.DateTimeFormat("ru-RU",{day:"numeric",month:"long",timeZone:"Europe/Moscow"}).format(new Date(s));function yy(s){let t=[];if(document.querySelectorAll(".marquee__row").forEach(i=>{let r=i.querySelector(".marquee__track"),o=0;for(;i.scrollWidth<window.innerWidth*2.4&&o++<6;){let h=r.cloneNode(!0);h.setAttribute("aria-hidden","true"),i.appendChild(h)}let a=i.querySelectorAll(".marquee__track"),l=Number(i.dataset.marquee)||1,c=vt.fromTo(a,{xPercent:l>0?0:-100},{xPercent:l>0?-100:0,duration:l>0?26:34,ease:"none",repeat:-1});t.push({row:i,tween:c,skew:vt.quickTo(i,"skewX",{duration:.5,ease:"power3"})})}),Se.reduced){t.forEach(i=>i.tween.pause());return}let e=1,n=1;s?.on("scroll",({velocity:i,direction:r})=>{r&&(n=r),e=1+Math.min(Math.abs(i)*.18,6),t.forEach(o=>o.skew(vt.utils.clamp(-7,7,i*-.25)))}),vt.ticker.add(()=>{e+=(1-e)*.05,t.forEach(i=>i.tween.timeScale(n*e))})}function vy(){document.querySelectorAll(".qa").forEach(s=>{let t=s.querySelector("summary"),e=s.querySelector(".qa__body");t.addEventListener("click",n=>{Se.reduced||(n.preventDefault(),vt.killTweensOf(e),s.open?vt.fromTo(e,{height:e.offsetHeight},{height:0,duration:.5,ease:"power3.inOut",onComplete:()=>{s.open=!1,e.style.height="",Ot.refresh()}}):(s.open=!0,vt.fromTo(e,{height:0},{height:"auto",duration:.65,ease:"power3.out",onComplete:()=>{e.style.height="",Ot.refresh()}}),vt.fromTo(e.querySelector("p"),{y:14,opacity:0},{y:0,opacity:1,duration:.6,delay:.1,ease:"power2.out"})))})})}function My(){let s=document.querySelector(".toggle");if(!s)return;let t=[...s.querySelectorAll("[data-pay]")],e=c=>{t.forEach(h=>{let d=h.dataset.pay===c;h.classList.toggle("is-active",d),h.setAttribute("aria-pressed",String(d))}),s.classList.toggle("is-month",c==="month"),document.querySelectorAll(".plan").forEach(h=>{let d=h.querySelector(".price"),f=h.querySelector(".plan__unit"),u=h.querySelector(".plan__hint"),g=h.querySelector(".plan__old"),_=Number(d.dataset[c]),p=Number(d.dataset.current||d.dataset.full);d.dataset.current=_;let m={v:p};vt.to(m,{v:_,duration:Se.reduced?0:.9,ease:"power3.out",onUpdate:()=>d.textContent=QT(m.v)}),f.textContent=c==="month"?"\u20BD/\u043C\u0435\u0441":"\u20BD",u.textContent=c==="month"?u.dataset.monthHint:u.dataset.fullHint,vt.to(g,{opacity:c==="month"?0:1,duration:.4})})};t.forEach(c=>c.addEventListener("click",()=>e(c.dataset.pay)));let n=document.querySelector("[data-countdown]"),i=new Date(xe.earlyBirdUntil).getTime(),r={};n?.querySelectorAll("[data-cd]").forEach(c=>r[c.dataset.cd]=c);let o=c=>String(c).padStart(2,"0"),a=()=>{let c=i-Date.now();if(n){if(c<=0){n.querySelector(".pricing__timer-label").textContent="\u0421\u0442\u0430\u0440\u0442 \u043F\u043E\u0442\u043E\u043A\u0430",n.querySelector(".pricing__timer-value").textContent=xy(xe.startDate),clearInterval(l);return}r.d.textContent=o(Math.floor(c/864e5)),r.h.textContent=o(Math.floor(c/36e5%24)),r.m.textContent=o(Math.floor(c/6e4%60)),r.s.textContent=o(Math.floor(c/1e3%60))}},l=setInterval(a,1e3);a()}function Sy(){let s=xy(xe.startDate);if(document.querySelectorAll("[data-start-date]").forEach(t=>{t.textContent=s,t.setAttribute("datetime",xe.startDate.slice(0,10))}),xe.telegram){document.querySelectorAll("[data-tg-link]").forEach(e=>{e.href=`https://t.me/${xe.telegram}`,e.textContent=`Telegram: @${xe.telegram}`,e.hidden=!1});let t=document.querySelector("[data-contacts-note]");t&&(t.textContent="\u041F\u043E\u0447\u0442\u0430 \u0438 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043F\u043E\u044F\u0432\u044F\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C")}document.querySelectorAll("[data-policy]").forEach(t=>t.addEventListener("click",e=>e.preventDefault()))}function by(s){let t=document.getElementById("apply-form"),e=document.querySelector(".form-done");if(!t)return;let n=t.querySelector(".form__error"),i=document.querySelector("[data-palette]"),r=document.querySelector("[data-shade-name]"),o=0;xe.shades.forEach((c,h)=>{let d=document.createElement("button");d.type="button",d.className="swatch",d.style.setProperty("--c",c.color),d.setAttribute("aria-label",`${c.name}, ${c.ru}`),d.setAttribute("aria-pressed",String(h===0)),d.addEventListener("click",()=>{o=h,i.querySelectorAll(".swatch").forEach((f,u)=>f.setAttribute("aria-pressed",String(u===h))),r.textContent=c.name,vt.fromTo(r,{y:10,opacity:0},{y:0,opacity:1,duration:.5,ease:"power3.out"}),s?.select(h)}),i?.appendChild(d)}),document.querySelectorAll("a[data-plan]").forEach(c=>c.addEventListener("click",()=>{let h=t.querySelector(`input[name="plan"][value="${c.dataset.plan}"]`);h&&(h.checked=!0)}));let a=t.elements,l=(c,h)=>{n.textContent=c,n.hidden=!1,h.forEach(d=>d.classList.add("is-invalid")),Se.reduced||vt.fromTo(t,{x:-8},{x:0,duration:.6,ease:"elastic.out(1, 0.3)"})};t.addEventListener("input",c=>{c.target.classList?.remove("is-invalid"),c.target.closest(".check")?.classList.remove("is-invalid"),n.hidden=!0}),t.addEventListener("submit",async c=>{c.preventDefault();let h=a.name.value.trim(),d=a.contact.value.trim(),f=t.querySelector('input[name="plan"]:checked')?.value||"\u0415\u0449\u0451 \u043D\u0435 \u0440\u0435\u0448\u0438\u043B\u0430",u=a.agree.checked,_=d.replace(/\D/g,"").length>=10||/^@?[a-zA-Z0-9_]{4,}$/.test(d.replace("https://t.me/","")),p=[];if(h.length<2&&p.push(a.name),_||p.push(a.contact),u||p.push(t.querySelector(".check")),p.length){l(h.length<2?"\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435, \u043A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F.":_?"\u041F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0433\u0430\u043B\u043E\u0447\u043A\u0443 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u044F, \u0447\u0442\u043E\u0431\u044B \u043C\u044B \u043C\u043E\u0433\u043B\u0438 \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438.":"\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D (10+ \u0446\u0438\u0444\u0440) \u0438\u043B\u0438 \u043D\u0438\u043A \u0432 Telegram.",p);return}let m=xe.shades[o],v=`\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u0425\u043E\u0447\u0443 \u043D\u0430 \u043A\u0443\u0440\u0441 ${xe.brand}.
\u0418\u043C\u044F: ${h}
\u041A\u043E\u043D\u0442\u0430\u043A\u0442: ${d}
\u0422\u0430\u0440\u0438\u0444: ${f}
\u041B\u044E\u0431\u0438\u043C\u044B\u0439 \u043E\u0442\u0442\u0435\u043D\u043E\u043A: ${m.name}`,M=!1;if(xe.formEndpoint)try{M=(await fetch(xe.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:h,contact:d,plan:f,shade:m.name})})).ok}catch{M=!1}let x=e.querySelector("[data-done-link]"),b=e.querySelector("[data-done-msg]"),w=e.querySelector("[data-done-copy]");e.querySelector("[data-done-name]").textContent=h;let T=e.querySelector("[data-done-text]");b.hidden=!0,w.hidden=!0,x.hidden=!0,M?T.textContent="\u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u043D\u0430\u043F\u0438\u0448\u0435\u043C \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F.":xe.telegram?(T.textContent="\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0435\u0451 \u043D\u0430\u043C \u0432 Telegram \u043E\u0434\u043D\u0438\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C: \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E.",x.href=`https://t.me/${xe.telegram}?text=${encodeURIComponent(v)}`,x.hidden=!1):xe.whatsapp?(T.textContent="\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0435\u0451 \u043D\u0430\u043C \u0432 WhatsApp \u043E\u0434\u043D\u0438\u043C \u043D\u0430\u0436\u0430\u0442\u0438\u0435\u043C: \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0443\u0436\u0435 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043E.",x.href=`https://wa.me/${xe.whatsapp}?text=${encodeURIComponent(v)}`,x.querySelector(".btn__label").textContent="\u041E\u0442\u043A\u0440\u044B\u0442\u044C WhatsApp",x.hidden=!1):(T.textContent="\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0437\u0430\u044F\u0432\u043E\u043A \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u0442\u0441\u044F \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0430\u0439\u0442\u0430. \u041F\u043E\u043A\u0430 \u0442\u0435\u043A\u0441\u0442 \u0437\u0430\u044F\u0432\u043A\u0438 \u043C\u043E\u0436\u043D\u043E \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C:",b.textContent=v,b.hidden=!1,w.hidden=!1,w.onclick=async()=>{let R=w.querySelector(".btn__label");try{await navigator.clipboard.writeText(v),R.textContent="\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E"}catch{let S=document.createRange();S.selectNodeContents(b);let P=window.getSelection();P.removeAllRanges(),P.addRange(S),R.textContent="\u0422\u0435\u043A\u0441\u0442 \u0432\u044B\u0434\u0435\u043B\u0435\u043D, \u0441\u043A\u043E\u043F\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E"}}),t.hidden=!0,e.hidden=!1,Se.reduced||vt.fromTo(e,{y:30,opacity:0},{y:0,opacity:1,duration:.9,ease:"expo.out"}),s?.celebrate?.(),Ot.refresh()}),e?.querySelector("[data-done-again]")?.addEventListener("click",()=>{e.hidden=!0,t.hidden=!1,Ot.refresh()})}function wy(){document.querySelectorAll(".reviews__col").forEach(s=>{let t=s.querySelector(".reviews__stack");[...t.children].forEach(e=>{let n=e.cloneNode(!0);n.setAttribute("aria-hidden","true"),t.appendChild(n)}),t.style.setProperty("--dur",(s.dataset.speed||40)+"s")})}function Ey(){let s=document.querySelector(".author__stamp");if(!s)return;let t=s.textContent.trim()+" ";s.setAttribute("aria-hidden","true"),s.textContent="";let e=[...t];e.forEach((n,i)=>{let r=document.createElement("span");r.textContent=n,r.style.transform=`rotate(${i/e.length*360}deg)`,s.appendChild(r)})}var gm="http://www.w3.org/2000/svg",dd=(s,t,e)=>Math.min(Math.max((s-t)/(e-t),0),1);function Ty(s){let t=document.querySelector(".hero"),e=t.querySelector(".hero__pin"),n=e.querySelector(".hero__flood"),i=e.querySelector(".hero__lines"),r=[...e.querySelectorAll(".callout")],o=[...e.querySelectorAll("[data-hero-in]")],a=o.map(()=>({v:Se.reduced?1:0})),l=r.map(()=>{let p=document.createElementNS(gm,"line"),m=document.createElementNS(gm,"circle");m.setAttribute("r","3.5");let v=document.createElementNS(gm,"circle");return v.setAttribute("r","2"),i.append(p,m,v),{l:p,a:m,b:v}}),c=0,h=window.innerWidth/2,d=e.querySelector(".hero__tagline"),f=e.querySelector(".hero__bottom"),u=()=>{let p=e.clientHeight||window.innerHeight,m=Math.min(d.offsetTop||p,f.offsetTop||p);s?.setSafeBottom?.(m/p)};u(),window.addEventListener("resize",u),document.fonts?.ready?.then(u);let g=null;Se.reduced||(g=Ot.create({trigger:t,start:"top top",end:()=>"+="+Math.round(window.innerHeight*2.8),pin:e,anticipatePin:1,onUpdate:p=>{c=p.progress,s?.setProgress(c)}}));function _(){let p=s?s.p:c,m=e.clientWidth,v=e.clientHeight,M=1-dd(p,.015,.14);o.forEach((w,T)=>{let R=a[T].v*M;w.style.opacity=R.toFixed(3),w.style.transform=`translateY(${((1-a[T].v)*26+(1-M)*-36).toFixed(1)}px)`,w.style.visibility=R<.01?"hidden":""}),r.forEach((w,T)=>{let R=l[T],y=s?.anchors[w.dataset.anchor],S=dd(p,.4+T*.035,.46+T*.035)*(1-dd(p,.64,.69));if(!y||S<=.001||m<700){w.style.visibility="hidden",R.l.style.opacity=R.a.style.opacity=R.b.style.opacity=0;return}let P=w.offsetWidth,L=w.offsetHeight,O=w.dataset.side==="left"?-1:1,z=Math.min(210,m*.13),H=O>0?y.x+z:y.x-z-P,V=y.y-L/2+(T%2?26:-26);H=Math.min(Math.max(H,16),m-P-16),V=Math.min(Math.max(V,90),v-L-24),w.style.visibility="visible",w.style.opacity=S.toFixed(3),w.style.transform=`translate(${H.toFixed(1)}px, ${(V+(1-S)*16).toFixed(1)}px)`;let X=O>0?H:H+P,W=V+L/2,K=y.x+(X-y.x)*S,I=y.y+(W-y.y)*S;R.l.setAttribute("x1",y.x.toFixed(1)),R.l.setAttribute("y1",y.y.toFixed(1)),R.l.setAttribute("x2",K.toFixed(1)),R.l.setAttribute("y2",I.toFixed(1)),R.a.setAttribute("cx",y.x.toFixed(1)),R.a.setAttribute("cy",y.y.toFixed(1)),R.b.setAttribute("cx",K.toFixed(1)),R.b.setAttribute("cy",I.toFixed(1)),R.l.style.opacity=R.a.style.opacity=R.b.style.opacity=S.toFixed(3)});let x=s?.anchors.drop;x&&s.bottle.drop.visible&&x.y<v*1.1?h=x.x:s?.anchors.brush&&p<.75&&(h=s.anchors.brush.x);let b=dd(p,.79,.95);if(b>0){let w=Math.hypot(Math.max(h,m-h),v)*1.05*vt.parseEase("power2.in")(b);n.style.clipPath=`circle(${w.toFixed(1)}px at ${h.toFixed(1)}px ${(v+30).toFixed(1)}px)`}else n.style.clipPath="circle(0px at 50% 100%)";s&&(s.enabled=b<.999)}return{frame:_,st:g,playIntro(){Se.reduced||(a.forEach((p,m)=>vt.to(p,{v:1,duration:1.4,delay:.55+m*.08,ease:"expo.out"})),s&&vt.to(s.intro,{t:1,duration:2.6,ease:"power2.out"}))},showStatic(){a.forEach(p=>p.v=1),s&&(s.intro.t=1)}}}function Ay(s){let t=document.querySelector(".program"),e=t.querySelector(".program__pin"),n=[...e.querySelectorAll(".module")],i=[...e.querySelectorAll(".program__nav button")],r=e.querySelector(".program__progress span"),o=e.querySelector(".program__caption-num"),a=e.querySelector(".program__caption-text"),l=n.length,c=-1,h=u=>String(u).padStart(2,"0");function d(u,g=1,_=!1){if(u===c)return;let p=c;c=u;let m=n[p],v=n[u];m&&(vt.killTweensOf(m),vt.to(m,{autoAlpha:0,y:g*-36,duration:_?0:.45,ease:"power2.in",onComplete:()=>m.classList.remove("is-active")})),v.classList.add("is-active"),vt.killTweensOf(v),_||Se.reduced?vt.set(v,{autoAlpha:1,y:0}):(vt.fromTo(v,{autoAlpha:0,y:g*46},{autoAlpha:1,y:0,duration:.9,delay:m?.18:0,ease:"expo.out"}),vt.fromTo(v.querySelectorAll(".module__lessons li, .module__result"),{opacity:0,x:26},{opacity:1,x:0,stagger:.045,duration:.8,delay:.3,ease:"expo.out"})),i.forEach((M,x)=>{M.classList.toggle("is-active",x===u),M.classList.toggle("is-done",x<u),x===u?M.setAttribute("aria-current","step"):M.removeAttribute("aria-current")}),o.textContent="N\xBA "+h(u+1),_||Se.reduced?a.textContent=v.dataset.caption:vt.to(a,{opacity:0,y:-10,duration:.25,onComplete:()=>{a.textContent=v.dataset.caption,vt.fromTo(a,{opacity:0,y:12},{opacity:1,y:0,duration:.6,ease:"expo.out"})}}),s?.goTo(u,v.dataset.design,v.hasAttribute("data-showcase"))}if(d(0,1,!0),Se.reduced)return t.classList.add("is-static"),{st:null};let f=Ot.create({trigger:t,start:"top top",end:()=>"+="+Math.round(window.innerHeight*l*.72),pin:e,anticipatePin:1,onUpdate:u=>{let g=Math.min(l-1,Math.floor(u.progress*l*.9999));d(g,u.direction),r.style.transform=`scaleX(${u.progress.toFixed(4)})`}});return i.forEach((u,g)=>u.addEventListener("click",()=>{let _=f.start+(g+.5)/l*(f.end-f.start);ud(_,{duration:1.2})})),{st:f}}var jT=(s,t,e)=>Math.min(Math.max((s-t)/(e-t),0),1);function Ry(s){let t=document.querySelector(".kit"),e=t.querySelector(".kit__pin"),n=[...e.querySelectorAll(".kit__label")],i=e.querySelector(".kit__content"),r=null;Se.reduced?s?.setProgress(1):(r=Ot.create({trigger:t,start:"top top",end:()=>"+="+Math.round(window.innerHeight*1.7),pin:e,anticipatePin:1,onUpdate:a=>s?.setProgress(a.progress)}),vt.from(i.children,{opacity:0,x:-30,stagger:.07,duration:1.1,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 60%",once:!0}}));function o(){if(!s||!s.visible)return;let a=s.labelPositions(),c=e.clientWidth<980;n.forEach((h,d)=>{let f=a.find(p=>p.key===h.dataset.item);if(!f)return;let u=jT(s.p,.6+d*.025,.7+d*.025),_=c&&["bits","pusher","oil","file"].includes(h.dataset.item)?0:u;h.style.opacity=_.toFixed(3),h.style.transform=`translate(${(f.x-10).toFixed(1)}px, ${(f.y-14+(1-u)*12).toFixed(1)}px)`})}return{frame:o,st:r}}function Cy(s){let t=document.querySelector(".works"),e=t.querySelector(".works__pin"),n=t.querySelector(".works__track"),i=t.querySelector(".works__viewport"),r=t.querySelector(".works__bar span"),o=[...t.querySelectorAll(".work")],a=vt.matchMedia();if(a.add("(min-width: 981px) and (prefers-reduced-motion: no-preference)",()=>{t.classList.remove("is-native");let d=()=>Math.max(0,n.scrollWidth-i.clientWidth),f=vt.quickTo(o,"skewX",{duration:.6,ease:"power3"}),u=vt.to(n,{x:()=>-d(),ease:"none",scrollTrigger:{trigger:t,start:"top top",end:()=>"+="+Math.round(d()*1.05),pin:e,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0,onUpdate:_=>{r.style.transform=`scaleX(${(.08+_.progress*.92).toFixed(4)})`;let p=vt.utils.clamp(-4,4,_.getVelocity()/-400);f(p)}}}),g=()=>f(0);return Ot.addEventListener("scrollEnd",g),vt.from(o,{y:_=>90+_%3*36,opacity:0,duration:1.3,stagger:.07,ease:"expo.out",scrollTrigger:{trigger:t,start:"top 65%",once:!0}}),()=>{Ot.removeEventListener("scrollEnd",g),vt.set(n,{x:0}),vt.set(o,{skewX:0})}}),a.add("(max-width: 980px), (prefers-reduced-motion: reduce)",()=>{t.classList.add("is-native")}),!s){o.forEach(d=>{let f=d.querySelector(".work__img");f.classList.add("is-loaded"),d.querySelector("img").getAttribute("src")||f.classList.add("is-fallback")});return}let l=!1,c=async()=>{if(l)return;l=!0;let d=document.querySelector("[data-render]");if(d){let f=await s.shot({design:"cherry",w:960,h:540,angle:-.2,tilt:-.15,roll:-1.2,bg:["#3d1420","#120a0d"]});d.src=URL.createObjectURL(f),d.onload=()=>d.classList.add("is-loaded")}for(let f of o){let u=f.querySelector("img");if(u.getAttribute("src")||!f.dataset.design){let _=()=>f.querySelector(".work__img").classList.add("is-loaded");u.complete?_():u.addEventListener("load",_,{once:!0});continue}let g=await s.shot({design:f.dataset.design,angle:Number(f.dataset.angle)||0});u.src=URL.createObjectURL(g),u.onload=()=>f.querySelector(".work__img").classList.add("is-loaded"),await new Promise(_=>setTimeout(_,40))}s.dispose(["cherry","final","french","foil","base","clean","natural","overgrown"])},h=new IntersectionObserver(d=>{d.some(f=>f.isIntersecting)&&(h.disconnect(),c())},{rootMargin:"250% 0px"});h.observe(t),h.observe(document.querySelector(".format")),setTimeout(c,6e3)}function Py(){let s=document.querySelector("[data-platform]");if(!s||Se.reduced)return;vt.fromTo(s,{rotationX:18,rotationY:-12,y:90,transformPerspective:1600},{rotationX:0,rotationY:0,y:0,ease:"none",scrollTrigger:{trigger:".format__layout",start:"top 95%",end:"top 25%",scrub:1}});let t=vt.timeline({scrollTrigger:{trigger:s,start:"top 70%",once:!0}});t.from(s.querySelector(".platform__progress em"),{scaleX:0,duration:1.4,ease:"expo.out"}).from(s.querySelector(".platform__track span"),{scaleX:0,duration:1.6,ease:"power2.out"},0).from(s.querySelectorAll(".platform__list li"),{opacity:0,x:20,stagger:.08,duration:.7,ease:"expo.out"},.2).from(s.querySelectorAll(".platform__msg"),{opacity:0,y:18,scale:.94,stagger:.6,duration:.7,ease:"back.out(1.6)"},.8);let e=s.querySelector(".platform__progress b"),n={v:0};t.to(n,{v:62,duration:1.4,ease:"expo.out",onUpdate:()=>e.textContent=Math.round(n.v)+"%"},0)}vt.registerPlugin(Ot,Xo);vt.config({nullTargetWarn:!1});var Mo=document.documentElement;"scrollRestoration"in history&&(history.scrollRestoration="manual");async function tA(){Mo.classList.remove("no-js"),Mo.classList.add("js"),window.scrollTo(0,0);let s=hy(),t=document.querySelector(".grain");t&&(t.style.backgroundImage=`url(${cy()})`),Mo.classList.add(Se.reduced?"reduced":"anim");try{await Promise.race([Promise.all([document.fonts.load('400 120px "Prata"'),document.fonts.load('500 40px "Martian Mono"')]),pm(3500)])}catch{}s.set(.2),await Promise.race([document.fonts.ready,pm(2500)]),s.set(.28);let e=null,n=null,i=null,r=null,o=null,a=null;try{e=new Ju(document.getElementById("webgl")),e.failed&&(e=null)}catch{e=null}if(e){Mo.classList.add("webgl-on");let f=u=>document.querySelector(u);try{n=e.add(new ju(f('[data-stage="hero"]'))),n.buildWord(),i=e.add(new sd(f('[data-stage="nail"]'))),r=e.add(new od(f('[data-stage="kit"]'),{mobile:e.isMobile})),document.querySelectorAll('[data-stage="mini"]').forEach(u=>e.add(new ad(u,u.dataset.model))),document.querySelectorAll('[data-stage="plan"]').forEach(u=>e.add(new ld(u,u.dataset.variant,{transmissive:!0}))),o=e.add(new cd(f('[data-stage="palette"]'),{transmissive:!0})),s.set(.42),await e.warmup(u=>s.set(.42+u*.5)),a=new hd(e)}catch(u){console.warn("3D \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u043E:",u),e.stages.length=0}}else Mo.classList.add("webgl-off");s.set(.95);let l=gy(e),c=Ty(n);Ay(i);let h=Ry(r);Py(),Cy(a),Sy(),My(),vy(),by(o),wy(),Ey(),Se.reduced||vt.fromTo(".footer__word",{"--fill":"0%"},{"--fill":"100%",ease:"none",scrollTrigger:{trigger:".footer__word",start:"top bottom",end:"bottom 85%",scrub:!0}}),o&&!Se.reduced&&Ot.create({trigger:".cta",start:"top bottom",end:"bottom top",onUpdate:f=>o.scrollP=f.progress});let d=ay((f,u)=>{Nx(u),c.frame(),h.frame(),l(),e?.render(f,u)});d?.stop(),yy(d),ly(),Se.reduced?(mm(),c.showStatic()):(_y(),uy(),dy(),fy()),Ot.refresh(),await s.finish(),Mo.classList.add("is-ready"),d?.start(),c.playIntro(),window.addEventListener("load",()=>Ot.refresh())}tA().catch(s=>{console.error(s),document.getElementById("preloader")?.remove(),Mo.classList.remove("anim"),mm()});})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.13.0
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/SplitText.js:
  (*!
   * SplitText 3.13.0
   * https://gsap.com
   *
   * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
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
