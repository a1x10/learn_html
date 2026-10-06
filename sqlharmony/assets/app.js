(()=>{var f1=Object.defineProperty;var d1=(r,t,e)=>t in r?f1(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Gt=(r,t,e)=>d1(r,typeof t!="symbol"?t+"":t,e);function Rr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function H0(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},Ud,Ri,Ze,Hn=1e8,Be=1/Hn,Td=Math.PI*2,p1=Td/4,m1=0,V0=Math.sqrt,g1=Math.cos,_1=Math.sin,_i=function(t){return typeof t=="string"},ei=function(t){return typeof t=="function"},Ir=function(t){return typeof t=="number"},jc=function(t){return typeof t>"u"},mr=function(t){return typeof t=="object"},mn=function(t){return t!==!1},Od=function(){return typeof window<"u"},Gc=function(t){return ei(t)||_i(t)},G0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hi=Array.isArray,x1=/random\([^)]+\)/g,v1=/,\s*/g,F0=/(?:-?\.?\d|\.)+/gi,Bd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kd=/[+-]=-?[.\d]+/,y1=/[^,'"\[\]\s]+/gi,S1=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,je,dr,Ad,zd,En={},qc={},W0,X0=function(t){return(qc=Io(t,En))&&Vi},Qc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},rl=function(t,e){return!e&&console.warn(t)},Y0=function(t,e){return t&&(En[t]=e)&&qc&&(qc[t]=e)||En},sl=function(){return 0},M1={suppressEvents:!0,isStart:!0,kill:!1},Wc={suppressEvents:!0,kill:!1},b1={suppressEvents:!0},Hd={},ss=[],Cd={},q0,dn={},yd={},L0=30,Xc=[],Vd="",Gd=function(t){var e=t[0],i,n;if(mr(e)||ei(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Xc.length;n--&&!Xc[n].targetTest(e););i=Xc[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new qd(t[n],i)))||t.splice(n,1);return t},os=function(t){return t._gsap||Gd(Vn(t))[0]._gsap},Wd=function(t,e,i){return(i=t[e])&&ei(i)?t[e]():jc(i)&&t.getAttribute&&t.getAttribute(e)||i},nn=function(t,e){return(t=t.split(",")).forEach(e)||t},ii=function(t){return Math.round(t*1e5)/1e5||0},Ke=function(t){return Math.round(t*1e7)/1e7||0},Gs=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},w1=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},$c=function(){var t=ss.length,e=ss.slice(0),i,n;for(Cd={},ss.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Xd=function(t){return!!(t._initted||t._startAt||t.add)},$0=function(t,e,i,n){ss.length&&!Ri&&$c(),t.render(e,i,n||!!(Ri&&e<0&&Xd(t))),ss.length&&!Ri&&$c()},Z0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(y1).length<2?e:_i(t)?t.trim():t},J0=function(t){return t},Tn=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},E1=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},Io=function(t,e){for(var i in e)t[i]=e[i];return t},N0=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=mr(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Zc=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},tl=function(t){var e=t.parent||je,i=t.keyframes?E1(Hi(t.keyframes)):Tn;if(mn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},T1=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},K0=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},tu=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},as=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ks=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},A1=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Dd=function(t,e,i,n){return t._startAt&&(Ri?t._startAt.revert(Wc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},C1=function r(t){return!t||t._ts&&r(t.parent)},U0=function(t){return t._repeat?Fo(t._tTime,t=t.duration()+t._rDelay)*t:0},Fo=function(t,e){var i=Math.floor(t=Ke(t/e));return t&&i===t?i-1:i},Jc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},eu=function(t){return t._end=Ke(t._start+(t._tDur/Math.abs(t._ts||t._rts||Be)||0))},iu=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Ke(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),eu(t),i._dirty||ks(i,t)),t},j0=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Jc(t.rawTime(),e),(!e._dur||ll(0,e.totalDuration(),i)-e._tTime>Be)&&e.render(i,!0)),ks(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-Be}},pr=function(t,e,i,n){return e.parent&&as(e),e._start=Ke((Ir(i)?i:i||t!==je?zn(t,i,e):t._time)+e._delay),e._end=Ke(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),K0(t,e,"_first","_last",t._sort?"_start":0),Rd(e)||(t._recent=e),n||j0(t,e),t._ts<0&&iu(t,t._tTime),t},Q0=function(t,e){return(En.ScrollTrigger||Qc("scrollTrigger",e))&&En.ScrollTrigger.create(e,t)},tg=function(t,e,i,n,s){if(Jd(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Ri&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&q0!==pn.frame)return ss.push(t),t._lazy=[s,n],1},D1=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Rd=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},R1=function(t,e,i,n){var s=t.ratio,o=e<0||!e&&(!t._start&&D1(t)&&!(!t._initted&&Rd(t))||(t._ts<0||t._dp._ts<0)&&!Rd(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=ll(0,t._tDur,e),u=Fo(l,a),t._yoyo&&u&1&&(o=1-o),u!==Fo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Ri||n||t._zTime===Be||!e&&t._zTime){if(!t._initted&&tg(t,e,n,i,l))return;for(h=t._zTime,t._zTime=e||(i?Be:0),i||(i=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Dd(t,e,i,!0),t._onUpdate&&!i&&wn(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&wn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&as(t,1),!i&&!Ri&&(wn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},P1=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},Lo=function(t,e,i,n){var s=t._repeat,o=Ke(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ke(o*(s+1)+t._rDelay*s):o,a>0&&!n&&iu(t,t._tTime=t._tDur*a),t.parent&&eu(t),i||ks(t.parent,t),t},O0=function(t){return t instanceof zi?ks(t):Lo(t,t._dur)},I1={_start:0,endTime:sl,totalDuration:sl},zn=function r(t,e,i){var n=t.labels,s=t._recent||I1,o=t.duration()>=Hn?s.endTime(!1):t._dur,a,l,c;return _i(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&i&&(l=l/100*(Hi(i)?i[0]:i).totalDuration()),a>1?r(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},el=function(t,e,i){var n=Ir(e[1]),s=(n?2:1)+(t<2?0:1),o=e[s],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;o.immediateRender=mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new li(e[0],o,e[s+1])},ls=function(t,e){return t||t===0?e(t):e},ll=function(t,e,i){return i<t?t:i>e?e:i},Pi=function(t,e){return!_i(t)||!(e=S1.exec(t))?"":e[1]},F1=function(t,e,i){return ls(i,function(n){return ll(t,e,n)})},Pd=[].slice,eg=function(t,e){return t&&mr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mr(t[0]))&&!t.nodeType&&t!==dr},L1=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return _i(n)&&!e||eg(n,1)?(s=i).push.apply(s,Vn(n)):i.push(n)})||i},Vn=function(t,e,i){return Ze&&!e&&Ze.selector?Ze.selector(t):_i(t)&&!i&&(Ad||!No())?Pd.call((e||zd).querySelectorAll(t),0):Hi(t)?L1(t,i):eg(t)?Pd.call(t,0):t?[t]:[]},Id=function(t){return t=Vn(t)[0]||rl("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Vn(e,i.querySelectorAll?i:i===t?rl("Invalid scope")||zd.createElement("div"):t)}},ig=function(t){return t.sort(function(){return .5-Math.random()})},ng=function(t){if(ei(t))return t;var e=mr(t)?t:{each:t},i=zs(e.ease),n=e.from||0,s=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,c=e.axis,u=n,h=n;return _i(n)?u=h={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],h=n[1]),function(f,d,p){var _=(p||e).length,m=o[_],g,y,b,v,S,M,E,x,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,Hn])[1],!w){for(E=-Hn;E<(E=p[w++].getBoundingClientRect().left)&&w<_;);w<_&&w--}for(m=o[_]=[],g=l?Math.min(w,_)*u-.5:n%w,y=w===Hn?0:l?_*h/w-.5:n/w|0,E=0,x=Hn,M=0;M<_;M++)b=M%w-g,v=y-(M/w|0),m[M]=S=c?Math.abs(c==="y"?v:b):V0(b*b+v*v),S>E&&(E=S),S<x&&(x=S);n==="random"&&ig(m),m.max=E-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(n==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pi(e.amount||e.each)||0,i=i&&_<0?q1(i):i}return _=(m[f]-m.min)/m.max||0,Ke(m.b+(i?i(_):_)*m.v)+m.u}},Fd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=Ke(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Ir(i)?0:Pi(i))}},rg=function(t,e){var i=Hi(t),n,s;return!i&&mr(t)&&(n=i=t.radius||Hn,t.values?(t=Vn(t.values),(s=!Ir(t[0]))&&(n*=n)):t=Fd(t.increment)),ls(e,i?ei(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Hn,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!n||c<=n?t[u]:o,s||u===o||Ir(o)?u:u+Pi(o)}:Fd(t))},sg=function(t,e,i,n){return ls(Hi(t)?!e:i===!0?!!(i=0):!n,function(){return Hi(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},N1=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,o){return o(s)},n)}},U1=function(t,e){return function(i){return t(parseFloat(i))+(e||Pi(i))}},O1=function(t,e,i){return ag(t,e,0,1,i)},og=function(t,e,i){return ls(i,function(n){return t[~~e(n)]})},B1=function r(t,e,i){var n=e-t;return Hi(t)?og(t,r(0,t.length),e):ls(i,function(s){return(n+(s-t)%n)%n+t})},k1=function r(t,e,i){var n=e-t,s=n*2;return Hi(t)?og(t,r(0,t.length-1),e):ls(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},Uo=function(t){return t.replace(x1,function(e){var i=e.indexOf("[")+1,n=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(v1);return sg(i?n:+n[0],i?0:+n[1],+n[2]||1e-5)})},ag=function(t,e,i,n,s){var o=e-t,a=n-i;return ls(s,function(l){return i+((l-t)/o*a||0)})},z1=function r(t,e,i,n){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=_i(t),a={},l,c,u,h,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(Hi(t)&&!Hi(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(p){p*=h;var _=Math.min(f,~~p);return u[_](p-_)},i=e}else n||(t=Io(Hi(t)?[]:{},t));if(!u){for(l in e)$d.call(a,t,l,"get",e[l]);s=function(p){return Qd(p,a)||(o?t.p:t)}}}return ls(i,s)},B0=function(t,e,i){var n=t.labels,s=Hn,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},wn=function(t,e,i){var n=t.vars,s=n[e],o=Ze,a=t._ctx,l,c,u;if(s)return l=n[e+"Params"],c=n.callbackScope||t,i&&ss.length&&$c(),a&&(Ze=a),u=l?s.apply(c,l):s.call(c),Ze=o,u},ja=function(t){return as(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ri),t.progress()<1&&wn(t,"onInterrupt"),t},Po,lg=[],cg=function(t){if(t)if(t=!t.name&&t.default||t,Od()||t.headless){var e=t.name,i=ei(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:sl,render:Qd,add:$d,kill:nS,modifier:iS,rawVars:0},o={targetTest:0,get:0,getSetter:nu,aliases:{},register:0};if(No(),t!==n){if(dn[e])return;Tn(n,Tn(Zc(t,s),o)),Io(n.prototype,Io(s,Zc(t,o))),dn[n.prop=e]=n,t.targetTest&&(Xc.push(n),Hd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Y0(e,n),t.register&&t.register(Vi,n,rn)}else lg.push(t)},Oe=255,Qa={aqua:[0,Oe,Oe],lime:[0,Oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Oe],navy:[0,0,128],white:[Oe,Oe,Oe],olive:[128,128,0],yellow:[Oe,Oe,0],orange:[Oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Oe,0,0],pink:[Oe,192,203],cyan:[0,Oe,Oe],transparent:[Oe,Oe,Oe,0]},Sd=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Oe+.5|0},ug=function(t,e,i){var n=t?Ir(t)?[t>>16,t>>8&Oe,t&Oe]:0:Qa.black,s,o,a,l,c,u,h,f,d,p;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qa[t])n=Qa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Oe,n&Oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Oe,t&Oe]}else if(t.substr(0,3)==="hsl"){if(n=p=t.match(F0),!e)l=+n[0]%360/360,c=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=Sd(l+1/3,s,o),n[1]=Sd(l,s,o),n[2]=Sd(l-1/3,s,o);else if(~t.indexOf("="))return n=t.match(Bd),i&&n.length<4&&(n[3]=1),n}else n=t.match(F0)||Qa.transparent;n=n.map(Number)}return e&&!p&&(s=n[0]/Oe,o=n[1]/Oe,a=n[2]/Oe,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},hg=function(t){var e=[],i=[],n=-1;return t.split(Pr).forEach(function(s){var o=s.match(Vs)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},k0=function(t,e,i){var n="",s=(t+n).match(Pr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=ug(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(u=hg(t),l=i.c,l.join(n)!==u.c.join(n)))for(c=t.replace(Pr,"1").split(Vs),h=c.length-1;a<h;a++)n+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=t.split(Pr),h=c.length-1;a<h;a++)n+=c[a]+s[a];return n+c[h]},Pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),H1=/hsl[a]?\(/,Yd=function(t){var e=t.join(" "),i;if(Pr.lastIndex=0,Pr.test(e))return i=H1.test(e),t[1]=k0(t[1],i),t[0]=k0(t[0],i,hg(t[1])),!0},ol,pn=(function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,c,u,h,f,d,p=function _(m){var g=r()-n,y=m===!0,b,v,S,M;if((g>t||g<0)&&(i+=g-e),n+=g,S=n-i,b=S-o,(b>0||y)&&(M=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=b+(b>=s?4:s-b),v=1),y||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](S,f,M,m)};return h={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){W0&&(!Ad&&Od()&&(dr=Ad=window,zd=dr.document||{},En.gsap=Vi,(dr.gsapVersions||(dr.gsapVersions=[])).push(Vi.version),X0(qc||dr.GreenSockGlobals||!dr.gsap&&dr||{}),lg.forEach(cg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},ol=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ol=0,c=sl},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,g,y){var b=g?function(v,S,M,E){m(v,S,M,E),h.remove(b)}:m;return h.remove(m),a[y?"unshift":"push"](b),No(),b},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},h})(),No=function(){return!ol&&pn.wake()},Se={},V1=/^[\d.\-M][\d.\-,\s]/,G1=/["']/g,W1=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,c;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[n]=isNaN(c)?c.replace(G1,"").trim():+c,n=l.substr(a+1).trim();return e},X1=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Y1=function(t){var e=(t+"").split("("),i=Se[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[W1(e[1])]:X1(t).split(",").map(Z0)):Se._CE&&V1.test(t)?Se._CE("",t):i},q1=function(t){return function(e){return 1-t(1-e)}},zs=function(t,e){return t&&(ei(t)?t:Se[t]||Y1(t))||e},Ws=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},o;return nn(t,function(a){Se[a]=En[a]=s,Se[o=a.toLowerCase()]=i;for(var l in s)Se[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Se[a+"."+l]=s[l]}),s},fg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Md=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Td*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*_1((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:fg(a);return s=Td/s,l.config=function(c,u){return r(t,c,u)},l},bd=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:fg(i);return n.config=function(s){return r(t,s)},n};nn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Ws(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Se.Linear.easeNone=Se.none=Se.Linear.easeIn;Ws("Elastic",Md("in"),Md("out"),Md());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(a){return a<e?r*a*a:a<i?r*Math.pow(a-1.5/t,2)+.75:a<n?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ws("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ws("Circ",function(r){return-(V0(1-r*r)-1)});Ws("Sine",function(r){return r===1?1:-g1(r*p1)+1});Ws("Back",bd("in"),bd("out"),bd());Se.SteppedEase=Se.steps=En.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,o=1-Be;return function(a){return((n*ll(0,o,a)|0)+s)*i}}};nl.ease=Se["quad.out"];nn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Vd+=r+","+r+"Params,"});var qd=function(t,e){this.id=m1++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Wd,this.set=e?e.getSetter:nu},al=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Lo(this,+e.duration,1,1),this.data=e.data,Ze&&(this._ctx=Ze,Ze.data.push(this)),ol||pn.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Lo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(No(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(iu(this,i),!s._dp||s.parent||j0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&pr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Be||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),$0(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+U0(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+U0(this),n):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Fo(this._tTime,s)+1:1},t.timeScale=function(i,n){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Jc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Be?0:this._rts,this.totalTime(ll(-Math.abs(this._delay),this.totalDuration(),s),n!==!1),eu(this),A1(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(No(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Ke(i);var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&pr(n,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Jc(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=b1);var n=Ri;return Ri=i,Xd(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ri=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(Math.abs(n._ts)||1),n=n._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,O0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,O0(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(zn(this,i),mn(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,mn(n)),this._dur||(this._zTime=-Be),this},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Be:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Be)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this,s=n._prom;return new Promise(function(o){var a=ei(i)?i:J0,l=function(){var u=n.then;n.then=null,s&&s(),ei(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=u),o(a),n.then=u};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},t.kill=function(){ja(this)},r})();Tn(al.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var zi=(function(r){H0(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=mn(i.sortChildren),je&&pr(i.parent||je,Rr(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Q0(Rr(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,o){return el(0,arguments,this),this},e.from=function(n,s,o){return el(1,arguments,this),this},e.fromTo=function(n,s,o,a){return el(2,arguments,this),this},e.set=function(n,s,o){return s.duration=0,s.parent=this,tl(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new li(n,s,zn(this,o),1),this},e.call=function(n,s,o){return pr(this,li.delayedCall(0,n,s),o)},e.staggerTo=function(n,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new li(n,o,zn(this,l)),this},e.staggerFrom=function(n,s,o,a,l,c,u){return o.runBackwards=1,tl(o).immediateRender=mn(o.immediateRender),this.staggerTo(n,s,o,a,l,c,u)},e.staggerFromTo=function(n,s,o,a,l,c,u,h){return a.startAt=o,tl(a).immediateRender=mn(a.immediateRender),this.staggerTo(n,s,a,l,c,u,h)},e.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=n<=0?0:Ke(n),h=this._zTime<0!=n<0&&(this._initted||!c),f,d,p,_,m,g,y,b,v,S,M,E;if(this!==je&&u>l&&n>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,n+=this._time-a),f=u,v=this._start,b=this._ts,g=!b,h&&(c||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(M=this._yoyo,m=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(m*100+n,s,o);if(f=Ke(u%m),u===l?(_=this._repeat,f=c):(S=Ke(u/m),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=Fo(this._tTime,m),!a&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),M&&_&1&&(f=c-f,E=1),_!==S&&!this._lock){var x=M&&S&1,w=x===(M&&_&1);if(_<S&&(x=!x),a=x?0:u%c?c:u,this._lock=1,this.render(a||(E?0:Ke(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&wn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=P1(this,Ke(a),Ke(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&u&&c&&!s&&!S&&(wn(this,"onStart"),this._tTime!==u))return this;if(f>=a&&n>=0)for(d=this._first;d;){if(p=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=-Be);break}}d=p}else{d=this._last;for(var A=n<0?n:f;d;){if(p=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,s,o);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,s,o||Ri&&Xd(d)),f!==this._time||!this._ts&&!g){y=0,p&&(u+=this._zTime=A?-Be:Be);break}}d=p}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Be)._zTime=f>=a?1:-1,this._ts))return this._start=v,eu(this),this.render(n,s,o);this._onUpdate&&!s&&wn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(n<0&&!a)&&(u||a||!l)&&(wn(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var o=this;if(Ir(s)||(s=zn(this,s,n)),!(n instanceof al)){if(Hi(n))return n.forEach(function(a){return o.add(a,s)}),this;if(_i(n))return this.addLabel(n,s);if(ei(n))n=li.delayedCall(0,n);else return this}return this!==n?pr(this,n,s):this},e.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Hn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof li?s&&l.push(c):(o&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},e.remove=function(n){return _i(n)?this.removeLabel(n):ei(n)?this.killTweensOf(n):(n.parent===this&&tu(this,n),n===this._recent&&(this._recent=this._last),ks(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ke(pn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=zn(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,o){var a=li.delayedCall(0,s||sl,o);return a.data="isPause",this._hasPause=1,pr(this,a,zn(this,n))},e.removePause=function(n){var s=this._first;for(n=zn(this,n);s;)s._start===n&&s.data==="isPause"&&as(s),s=s._next},e.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)rs!==a[l]&&a[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var o=[],a=Vn(n),l=this._first,c=Ir(s),u;l;)l instanceof li?w1(l._targets,a)&&(c?(!rs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(n,s){s=s||{};var o=this,a=zn(o,n),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,p=li.to(o,Tn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Be,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&Lo(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,h||[])}},s));return f?p.render(0):p},e.tweenFromTo=function(n,s,o){return this.tweenTo(s,Tn({startAt:{time:zn(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),B0(this,zn(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),B0(this,zn(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Be)},e.shiftChildren=function(n,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(n=Ke(n);a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=n);return ks(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ks(this)},e.totalDuration=function(n){var s=0,o=this,a=o._last,l=Hn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,pr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Ke(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Lo(o,o===je&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(je._ts&&($0(je,Jc(n,je)),q0=pn.frame),pn.frame>=L0){L0+=gn.autoSleep||120;var s=je._first;if((!s||!s._ts)&&gn.autoSleep&&pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||pn.sleep()}}},t})(al);Tn(zi.prototype,{_lock:0,_hasPause:0,_forcing:0});var $1=function(t,e,i,n,s,o,a){var l=new rn(this._pt,t,e,0,1,jd,null,s),c=0,u=0,h,f,d,p,_,m,g,y;for(l.b=i,l.e=n,i+="",n+="",(g=~n.indexOf("random("))&&(n=Uo(n)),o&&(y=[i,n],o(y,t,e),i=y[0],n=y[1]),f=i.match(vd)||[];h=vd.exec(n);)p=h[0],_=n.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),p!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:p.charAt(1)==="="?Gs(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=vd.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=a,(kd.test(n)||g)&&(l.e=0),this._pt=l,l},$d=function(t,e,i,n,s,o,a,l,c,u){ei(n)&&(n=n(s||0,t,o));var h=t[e],f=i!=="get"?i:ei(h)?c?t[e.indexOf("set")||!ei(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=ei(h)?c?Q1:mg:Kd,p;if(_i(n)&&(~n.indexOf("random(")&&(n=Uo(n)),n.charAt(1)==="="&&(p=Gs(f,n)+(Pi(f)||0),(p||p===0)&&(n=p))),!u||f!==n||Ld)return!isNaN(f*n)&&n!==""?(p=new rn(this._pt,t,e,+f||0,n-(f||0),typeof h=="boolean"?eS:gg,0,d),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!h&&!(e in t)&&Qc(e,n),$1.call(this,t,e,f,n,d,l||gn.stringFilter,c))},Z1=function(t,e,i,n,s){if(ei(t)&&(t=il(t,s,e,i,n)),!mr(t)||t.style&&t.nodeType||Hi(t)||G0(t))return _i(t)?il(t,s,e,i,n):t;var o={},a;for(a in t)o[a]=il(t[a],s,e,i,n);return o},Zd=function(t,e,i,n,s,o){var a,l,c,u;if(dn[t]&&(a=new dn[t]).init(s,a.rawVars?e[t]:Z1(e[t],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new rn(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==Po))for(c=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},rs,Ld,Jd=function r(t,e,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,c=n.onUpdate,u=n.runBackwards,h=n.yoyoEase,f=n.keyframes,d=n.autoRevert,p=t._dur,_=t._startAt,m=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:m,b=t._overwrite==="auto"&&!Ud,v=t.timeline,S=n.easeReverse||h,M,E,x,w,A,R,D,N,I,F,H,B,Y;if(v&&(!f||!s)&&(s="none"),t._ease=zs(s,nl.ease),t._rEase=S&&(zs(S)||t._ease),t._from=!v&&!!n.runBackwards,t._from&&(t.ratio=1),!v||f&&!n.stagger){if(N=m[0]?os(m[0]).harness:0,B=N&&n[N.prop],M=Zc(n,Hd),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&p?Wc:M1),_._lazy=0),o){if(as(t._startAt=li.set(m,Tn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&mn(l),startAt:null,delay:0,onUpdate:c&&function(){return wn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ri||!a&&!d)&&t._startAt.revert(Wc),a&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(u&&p&&!_){if(e&&(a=!1),x=Tn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&mn(l),immediateRender:a,stagger:0,parent:g},M),B&&(x[N.prop]=B),as(t._startAt=li.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ri?t._startAt.revert(Wc):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Be,Be);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&mn(l)||l&&!p,E=0;E<m.length;E++){if(A=m[E],D=A._gsap||Gd(m)[E]._gsap,t._ptLookup[E]=F={},Cd[D.id]&&ss.length&&$c(),H=y===m?E:y.indexOf(A),N&&(I=new N).init(A,B||M,t,H,y)!==!1&&(t._pt=w=new rn(t._pt,A,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){F[W]=w}),I.priority&&(R=1)),!N||B)for(x in M)dn[x]&&(I=Zd(x,M,t,H,A,y))?I.priority&&(R=1):F[x]=w=$d.call(t,A,x,"get",M[x],H,y,0,n.stringFilter);t._op&&t._op[E]&&t.kill(A,t._op[E]),b&&t._pt&&(rs=t,je.killTweensOf(A,F,t.globalTime(e)),Y=!t.parent,rs=0),t._pt&&l&&(Cd[D.id]=1)}R&&tp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,f&&e<=0&&v.render(Hn,!0,!0)},J1=function(t,e,i,n,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Ld=1,t.vars[e]="+=0",Jd(t,a),Ld=0,l?rl(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(n||n===0)&&!s?n:u.s+(n||0)+o*u.c,u.c=i-u.s,h.e&&(h.e=ii(i)+Pi(h.e)),h.b&&(h.b=u.s+Pi(h.b))},K1=function(t,e){var i=t[0]?os(t[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return e;s=Io({},e);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},j1=function(t,e,i,n){var s=e.ease||n||"power1.inOut",o,a;if(Hi(e))a=i[t]||(i[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},il=function(t,e,i,n,s){return ei(t)?t.call(e,i,n,s):_i(t)&&~t.indexOf("random(")?Uo(t):t},dg=Vd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",pg={};nn(dg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pg[r]=1});var li=(function(r){H0(t,r);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:tl(n))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,p=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=n.parent||je,y=(Hi(i)||G0(i)?Ir(i[0]):"length"in n)?[i]:Vn(i),b,v,S,M,E,x,w,A;if(a._targets=y.length?Gd(y):rl("GSAP target "+i+" not found. https://gsap.com",!gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,p||f||Gc(c)||Gc(u)){n=a.vars;var R=n.easeReverse||n.yoyoEase;if(b=a.timeline=new zi({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:y}),b.kill(),b.parent=b._dp=Rr(a),b._start=0,f||Gc(c)||Gc(u)){if(M=y.length,w=f&&ng(f),mr(f))for(E in f)~dg.indexOf(E)&&(A||(A={}),A[E]=f[E]);for(v=0;v<M;v++)S=Zc(n,pg),S.stagger=0,R&&(S.easeReverse=R),A&&Io(S,A),x=y[v],S.duration=+il(c,Rr(a),v,x,y),S.delay=(+il(u,Rr(a),v,x,y)||0)-a._delay,!f&&M===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),b.to(x,S,w?w(v,x,y):0),b._ease=Se.none;b.duration()?c=u=0:a.timeline=0}else if(p){tl(Tn(b.vars.defaults,{ease:"none"})),b._ease=zs(p.ease||n.ease||"none");var D=0,N,I,F;if(Hi(p))p.forEach(function(H){return b.to(y,H,">")}),b.duration();else{S={};for(E in p)E==="ease"||E==="easeEach"||j1(E,p[E],S,p.easeEach);for(E in S)for(N=S[E].sort(function(H,B){return H.t-B.t}),D=0,v=0;v<N.length;v++)I=N[v],F={ease:I.e,duration:(I.t-(v?N[v-1].t:0))/100*c},F[E]=I.v,b.to(y,F,D),D+=F.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return d===!0&&!Ud&&(rs=Rr(a),je.killTweensOf(y),rs=0),pr(g,Rr(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(h||!c&&!p&&a._start===Ke(g._time)&&mn(h)&&C1(Rr(a))&&g.data!=="nested")&&(a._tTime=-Be,a.render(Math.max(0,-u)||0)),m&&Q0(Rr(a),m),a}var e=t.prototype;return e.render=function(n,s,o){var a=this._time,l=this._tDur,c=this._dur,u=n<0,h=n>l-Be&&!u?l:n<Be?0:n,f,d,p,_,m,g,y,b;if(!c)R1(this,n,s,o);else if(h!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,s,o);if(f=Ke(h%_),h===l?(p=this._repeat,f=c):(m=Ke(h/_),p=~~m,p&&p===m?(f=c,p--):f>c&&(f=c)),g=this._yoyo&&p&1,g&&(f=c-f),m=Fo(this._tTime,_),f===a&&!o&&this._initted&&p===m)return this._tTime=h,this;p!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Ke(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(tg(this,u?n:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(n,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(f/c);if(this._from&&(this.ratio=y=1-y),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!m&&(wn(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;b&&b.render(n<0?n:b._dur*b._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&Dd(this,n,s,o),wn(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&wn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Dd(this,n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&as(this,1),!s&&!(u&&!a)&&(h||a||g)&&(wn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,o,a,l){ol||pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Jd(this,c),u=this._ease(c/this._dur),J1(this,n,s,o,a,u,c,l)?this.resetTo(n,s,o,a,1):(iu(this,0),this.parent||K0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ri),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,rs&&rs.vars.overwrite!==!0)._first||ja(this),this.parent&&o!==this.timeline.totalDuration()&&Lo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Vn(n):a,c=this._ptLookup,u=this._pt,h,f,d,p,_,m,g;if((!s||s==="all")&&T1(a,l))return s==="all"&&(this._pt=0),ja(this);for(h=this._op=this._op||[],s!=="all"&&(_i(s)&&(_={},nn(s,function(y){return _[y]=1}),s=_),s=K1(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(h[g]=s,p=f,d={}):(d=h[g]=h[g]||{},p=s);for(_ in p)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&tu(this,m,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ja(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return el(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return el(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return je.killTweensOf(n,s,o)},t})(al);Tn(li.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});nn("staggerTo,staggerFrom,staggerFromTo",function(r){li[r]=function(){var t=new zi,e=Pd.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Kd=function(t,e,i){return t[e]=i},mg=function(t,e,i){return t[e](i)},Q1=function(t,e,i,n){return t[e](n.fp,i)},tS=function(t,e,i){return t.setAttribute(e,i)},nu=function(t,e){return ei(t[e])?mg:jc(t[e])&&t.setAttribute?tS:Kd},gg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},eS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jd=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Qd=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},iS=function(t,e,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,e,i),s=o},nS=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?tu(this,e,"_pt"):e.dep||(i=1),e=n;return!i},rS=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},tp=function(t){for(var e=t._pt,i,n,s,o;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=s},rn=(function(){function r(e,i,n,s,o,a,l,c,u){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||gg,this.d=l||this,this.set=c||Kd,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=rS,this.m=i,this.mt=s,this.tween=n},r})();nn(Vd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Hd[r]=1});En.TweenMax=En.TweenLite=li;En.TimelineLite=En.TimelineMax=zi;je=new zi({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gn.stringFilter=Yd;var Hs=[],Yc={},sS=[],z0=0,oS=0,wd=function(t){return(Yc[t]||sS).map(function(e){return e()})},Nd=function(){var t=Date.now(),e=[];t-z0>2&&(wd("matchMediaInit"),Hs.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,c;for(a in n)o=dr.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(i.revert(),l&&e.push(i))}),wd("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(n){return i.add(null,n)})}),z0=t,wd("matchMedia"))},_g=(function(){function r(e,i){this.selector=i&&Id(i),this.data=[],this._r=[],this.isReverted=!1,this.id=oS++,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){ei(i)&&(s=n,n=i,i=ei);var o=this,a=function(){var c=Ze,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Id(s)),Ze=o,h=n.apply(o,arguments),ei(h)&&o._r.push(h),Ze=c,o.selector=u,o.isReverted=!1,h};return o.last=a,i===ei?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},t.ignore=function(i){var n=Ze;Ze=null,i(this),Ze=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof li&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof zi?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof li)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),n)for(var o=Hs.length;o--;)Hs[o].id===this.id&&Hs.splice(o,1)},t.revert=function(i){this.kill(i||{})},r})(),aS=(function(){function r(e){this.contexts=[],this.scope=e,Ze&&Ze.data.push(this)}var t=r.prototype;return t.add=function(i,n,s){mr(i)||(i={matches:i});var o=new _g(0,s||this.scope),a=o.conditions={},l,c,u;Ze&&!o.selector&&(o.selector=Ze.selector),this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(c in i)c==="all"?u=1:(l=dr.matchMedia(i[c]),l&&(Hs.indexOf(o)<0&&Hs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Nd):l.addEventListener("change",Nd)));return u&&n(o,function(h){return o.add(null,h)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r})(),Kc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return cg(n)})},timeline:function(t){return new zi(t)},getTweensOf:function(t,e){return je.getTweensOf(t,e)},getProperty:function(t,e,i,n){_i(t)&&(t=Vn(t)[0]);var s=os(t||{}).get,o=i?J0:Z0;return i==="native"&&(i=""),t&&(e?o((dn[e]&&dn[e].get||s)(t,e,i,n)):function(a,l,c){return o((dn[a]&&dn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,i){if(t=Vn(t),t.length>1){var n=t.map(function(u){return Vi.quickSetter(u,e,i)}),s=n.length;return function(u){for(var h=s;h--;)n[h](u)}}t=t[0]||{};var o=dn[e],a=os(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Po._pt=0,h.init(t,i?u+i:u,Po,0,[t]),h.render(1,h),Po._pt&&Qd(1,Po)}:a.set(t,l);return o?c:function(u){return c(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var n,s=Vi.to(t,Tn((n={},n[e]="+=0.1",n.paused=!0,n.stagger=0,n),i||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=zs(t.ease,nl.ease)),N0(nl,t||{})},config:function(t){return N0(gn,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!dn[a]&&!En[a]&&rl(e+" effect requires "+a+" plugin.")}),yd[e]=function(a,l,c){return i(Vn(a),Tn(l||{},s),c)},o&&(zi.prototype[e]=function(a,l,c){return this.add(yd[e](a,mr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Se[t]=zs(e)},parseEase:function(t,e){return arguments.length?zs(t,e):Se},getById:function(t){return je.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new zi(t),n,s;for(i.smoothChildTiming=mn(t.smoothChildTiming),je.remove(i),i._dp=0,i._time=i._tTime=je._time,n=je._first;n;)s=n._next,(e||!(!n._dur&&n instanceof li&&n.vars.onComplete===n._targets[0]))&&pr(i,n,n._start-n._delay),n=s;return pr(je,i,0),i},context:function(t,e){return t?new _g(t,e):Ze},matchMedia:function(t){return new aS(t)},matchMediaRefresh:function(){return Hs.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||Nd()},addEventListener:function(t,e){var i=Yc[t]||(Yc[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Yc[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:B1,wrapYoyo:k1,distribute:ng,random:sg,snap:rg,normalize:O1,getUnit:Pi,clamp:F1,splitColor:ug,toArray:Vn,selector:Id,mapRange:ag,pipe:N1,unitize:U1,interpolate:z1,shuffle:ig},install:X0,effects:yd,ticker:pn,updateRoot:zi.updateRoot,plugins:dn,globalTimeline:je,core:{PropTween:rn,globals:Y0,Tween:li,Timeline:zi,Animation:al,getCache:os,_removeLinkedListItem:tu,reverting:function(){return Ri},context:function(t){return t&&Ze&&(Ze.data.push(t),t._ctx=Ze),Ze},suppressOverwrites:function(t){return Ud=t}}};nn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Kc[r]=li[r]});pn.add(zi.updateRoot);Po=Kc.to({},{duration:0});var lS=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},cS=function(t,e){var i=t._targets,n,s,o;for(n in e)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=lS(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[s],n))},Ed=function(t,e){return{name:t,headless:1,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,c;if(_i(s)&&(l={},nn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}cS(a,s)}}}},Vi=Kc.registerPlugin({name:"attr",init:function(t,e,i,n,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Ri?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ed("roundProps",Fd),Ed("modifiers"),Ed("snap",rg))||Kc;li.version=zi.version=Vi.version="3.15.0";W0=1;Od()&&No();var uS=Se.Power0,hS=Se.Power1,fS=Se.Power2,dS=Se.Power3,pS=Se.Power4,mS=Se.Linear,gS=Se.Quad,_S=Se.Cubic,xS=Se.Quart,vS=Se.Quint,yS=Se.Strong,SS=Se.Elastic,MS=Se.Back,bS=Se.SteppedEase,wS=Se.Bounce,ES=Se.Sine,TS=Se.Expo,AS=Se.Circ;var xg,cs,Bo,op,$s,CS,vg,ap,DS=function(){return typeof window<"u"},Lr={},qs=180/Math.PI,ko=Math.PI/180,Oo=Math.atan2,yg=1e8,lp=/([A-Z])/g,RS=/(left|right|width|margin|padding|x)/i,PS=/[\s,\(]\S/,gr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ip=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},IS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},FS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},LS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},NS=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Cg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Dg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},US=function(t,e,i){return t.style[e]=i},OS=function(t,e,i){return t.style.setProperty(e,i)},BS=function(t,e,i){return t._gsap[e]=i},kS=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},zS=function(t,e,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},HS=function(t,e,i,n,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Qe="transform",_n=Qe+"Origin",VS=function r(t,e){var i=this,n=this.target,s=n.style,o=n._gsap;if(t in Lr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=gr[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=Fr(n,a)}):this.tfm[t]=o.x?o[t]:Fr(n,t),t===_n&&(this.tfm.zOrigin=o.zOrigin);else return gr.transform.split(",").forEach(function(a){return r.call(i,a,e)});if(this.props.indexOf(Qe)>=0)return;o.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(_n,e,"")),t=Qe}(s||e)&&this.props.push(t,e,s[t])},Rg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},GS=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(lp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=ap(),(!s||!s.isStart)&&!i[Qe]&&(Rg(i),n.zOrigin&&i[_n]&&(i[_n]+=" "+n.zOrigin+"px",n.zOrigin=0,n.renderTransform()),n.uncache=1)}},Pg=function(t,e){var i={target:t,props:[],revert:GS,save:VS};return t._gsap||Vi.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(n){return i.save(n)}),i},Ig,np=function(t,e){var i=cs.createElementNS?cs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):cs.createElement(t);return i&&i.style?i:cs.createElement(t)},An=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(lp,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,zo(e)||e,1)||""},Sg="O,Moz,ms,Ms,Webkit".split(","),zo=function(t,e,i){var n=e||$s,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Sg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Sg[o]:"")+t},rp=function(){DS()&&window.document&&(xg=window,cs=xg.document,Bo=cs.documentElement,$s=np("div")||{style:{}},CS=np("div"),Qe=zo(Qe),_n=Qe+"Origin",$s.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ig=!!zo("perspective"),ap=Vi.core.reverting,op=1)},Mg=function(t){var e=t.ownerSVGElement,i=np("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=t.cloneNode(!0),s;n.style.display="block",i.appendChild(n),Bo.appendChild(i);try{s=n.getBBox()}catch{}return i.removeChild(n),Bo.removeChild(i),s},bg=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Fg=function(t){var e,i;try{e=t.getBBox()}catch{e=Mg(t),i=1}return e&&(e.width||e.height)||i||(e=Mg(t)),e&&!e.width&&!e.x&&!e.y?{x:+bg(t,["x","cx","x1"])||0,y:+bg(t,["y","cy","y1"])||0,width:0,height:0}:e},Lg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Fg(t))},hs=function(t,e){if(e){var i=t.style,n;e in Lr&&e!==_n&&(e=Qe),i.removeProperty?(n=e.substr(0,2),(n==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(n==="--"?e:e.replace(lp,"-$1").toLowerCase())):i.removeAttribute(e)}},us=function(t,e,i,n,s,o){var a=new rn(t._pt,e,i,0,1,o?Dg:Cg);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},wg={deg:1,rad:1,turn:1},WS={grid:1,flex:1},fs=function r(t,e,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=$s.style,l=RS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=n==="px",d=n==="%",p,_,m,g;if(n===o||!s||wg[n]||wg[o])return s;if(o!=="px"&&!f&&(s=r(t,e,i,"px")),g=t.getCTM&&Lg(t),(d||o==="%")&&(Lr[e]||~e.indexOf("adius")))return p=g?t.getBBox()[l?"width":"height"]:t[u],ii(d?s/p*h:s/100*p);if(a[l?"width":"height"]=h+(f?o:n),_=n!=="rem"&&~e.indexOf("adius")||n==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===cs||!_.appendChild)&&(_=cs.body),m=_._gsap,m&&d&&m.width&&l&&m.time===pn.time&&!m.uncache)return ii(s/m.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+n,p=t[u],y?t.style[e]=y:hs(t,e)}else(d||o==="%")&&!WS[An(_,"display")]&&(a.position=An(t,"position")),_===t&&(a.position="static"),_.appendChild($s),p=$s[u],_.removeChild($s),a.position="absolute";return l&&d&&(m=os(_),m.time=pn.time,m.width=_[u]),ii(f?p*s/h:p&&s?h/p*s:0)},Fr=function(t,e,i,n){var s;return op||rp(),e in gr&&e!=="transform"&&(e=gr[e],~e.indexOf(",")&&(e=e.split(",")[0])),Lr[e]&&e!=="transform"?(s=hl(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:su(An(t,_n))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=ru[e]&&ru[e](t,e,i)||An(t,e)||Wd(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?fs(t,e,s,i)+i:s},XS=function(t,e,i,n){if(!i||i==="none"){var s=zo(e,t,1),o=s&&An(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=An(t,"borderTopColor"))}var a=new rn(this._pt,t.style,e,0,1,jd),l=0,c=0,u,h,f,d,p,_,m,g,y,b,v,S;if(a.b=i,a.e=n,i+="",n+="",n.substring(0,6)==="var(--"&&(n=An(t,n.substring(4,n.indexOf(")")))),n==="auto"&&(_=t.style[e],t.style[e]=n,n=An(t,e)||n,_?t.style[e]=_:hs(t,e)),u=[i,n],Yd(u),i=u[0],n=u[1],f=i.match(Vs)||[],S=n.match(Vs)||[],S.length){for(;h=Vs.exec(n);)m=h[0],y=n.substring(l,h.index),p?p=(p+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(p=1),m!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),m.charAt(1)==="="&&(m=Gs(d,m)+v),g=parseFloat(m),b=m.substr((g+"").length),l=Vs.lastIndex-b.length,b||(b=b||gn.units[e]||v,l===n.length&&(n+=b,a.e+=b)),v!==b&&(d=fs(t,e,_,b)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?Dg:Cg;return kd.test(n)&&(a.e=0),this._pt=a,a},Eg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},YS=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Eg[i]||i,e[1]=Eg[n]||n,e.join(" ")},qS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,o=i._gsap,a,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Lr[a]&&(l=1,a=a==="transformOrigin"?_n:Qe),hs(i,a);l&&(hs(i,Qe),o&&(o.svg&&i.removeAttribute("transform"),n.scale=n.rotate=n.translate="none",hl(i,1),o.uncache=1,Rg(n)))}},ru={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new rn(t._pt,e,i,0,0,qS);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},ul=[1,0,0,1,0,0],Ng={},Ug=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Tg=function(t){var e=An(t,Qe);return Ug(e)?ul:e.substr(7).match(Bd).map(ii)},cp=function(t,e){var i=t._gsap||os(t),n=t.style,s=Tg(t),o,a,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ul:s):(s===ul&&!t.offsetParent&&t!==Bo&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Bo.appendChild(t)),s=Tg(t),l?n.display=l:hs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Bo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sp=function(t,e,i,n,s,o){var a=t._gsap,l=s||cp(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],p=l[1],_=l[2],m=l[3],g=l[4],y=l[5],b=e.split(" "),v=parseFloat(b[0])||0,S=parseFloat(b[1])||0,M,E,x,w;i?l!==ul&&(E=d*m-p*_)&&(x=v*(m/E)+S*(-_/E)+(_*y-m*g)/E,w=v*(-p/E)+S*(d/E)-(d*y-p*g)/E,v=x,S=w):(M=Fg(t),v=M.x+(~b[0].indexOf("%")?v/100*M.width:v),S=M.y+(~(b[1]||b[0]).indexOf("%")?S/100*M.height:S)),n||n!==!1&&a.smooth?(g=v-c,y=S-u,a.xOffset=h+(g*d+y*_)-g,a.yOffset=f+(g*p+y*m)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[_n]="0px 0px",o&&(us(o,a,"xOrigin",c,v),us(o,a,"yOrigin",u,S),us(o,a,"xOffset",h,a.xOffset),us(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},hl=function(t,e){var i=t._gsap||new qd(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=An(t,_n)||"0",u,h,f,d,p,_,m,g,y,b,v,S,M,E,x,w,A,R,D,N,I,F,H,B,Y,W,P,O,tt,rt,gt,ht;return u=h=f=_=m=g=y=b=v=0,d=p=1,i.svg=!!(t.getCTM&&Lg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Qe]!=="none"?l[Qe]:"")),n.scale=n.rotate=n.translate="none"),E=cp(t,i.svg),i.svg&&(i.uncache?(Y=t.getBBox(),c=i.xOrigin-Y.x+"px "+(i.yOrigin-Y.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),sp(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,E)),S=i.xOrigin||0,M=i.yOrigin||0,E!==ul&&(R=E[0],D=E[1],N=E[2],I=E[3],u=F=E[4],h=H=E[5],E.length===6?(d=Math.sqrt(R*R+D*D),p=Math.sqrt(I*I+N*N),_=R||D?Oo(D,R)*qs:0,y=N||I?Oo(N,I)*qs+_:0,y&&(p*=Math.abs(Math.cos(y*ko))),i.svg&&(u-=S-(S*R+M*N),h-=M-(S*D+M*I))):(ht=E[6],rt=E[7],P=E[8],O=E[9],tt=E[10],gt=E[11],u=E[12],h=E[13],f=E[14],x=Oo(ht,tt),m=x*qs,x&&(w=Math.cos(-x),A=Math.sin(-x),B=F*w+P*A,Y=H*w+O*A,W=ht*w+tt*A,P=F*-A+P*w,O=H*-A+O*w,tt=ht*-A+tt*w,gt=rt*-A+gt*w,F=B,H=Y,ht=W),x=Oo(-N,tt),g=x*qs,x&&(w=Math.cos(-x),A=Math.sin(-x),B=R*w-P*A,Y=D*w-O*A,W=N*w-tt*A,gt=I*A+gt*w,R=B,D=Y,N=W),x=Oo(D,R),_=x*qs,x&&(w=Math.cos(x),A=Math.sin(x),B=R*w+D*A,Y=F*w+H*A,D=D*w-R*A,H=H*w-F*A,R=B,F=Y),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),d=ii(Math.sqrt(R*R+D*D+N*N)),p=ii(Math.sqrt(H*H+ht*ht)),x=Oo(F,H),y=Math.abs(x)>2e-4?x*qs:0,v=gt?1/(gt<0?-gt:gt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Ug(An(t,Qe)),B&&t.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=ii(d),i.scaleY=ii(p),i.rotation=ii(_)+a,i.rotationX=ii(m)+a,i.rotationY=ii(g)+a,i.skewX=y+a,i.skewY=b+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(n[_n]=su(c)),i.xOffset=i.yOffset=0,i.force3D=gn.force3D,i.renderTransform=i.svg?ZS:Ig?Og:$S,i.uncache=0,i},su=function(t){return(t=t.split(" "))[0]+" "+t[1]},ep=function(t,e,i){var n=Pi(e);return ii(parseFloat(e)+parseFloat(fs(t,"x",i+"px",n)))+n},$S=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Og(t,e)},Xs="0deg",cl="0px",Ys=") ",Og=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,c=i.rotation,u=i.rotationY,h=i.rotationX,f=i.skewX,d=i.skewY,p=i.scaleX,_=i.scaleY,m=i.transformPerspective,g=i.force3D,y=i.target,b=i.zOrigin,v="",S=g==="auto"&&t&&t!==1||g===!0;if(b&&(h!==Xs||u!==Xs)){var M=parseFloat(u)*ko,E=Math.sin(M),x=Math.cos(M),w;M=parseFloat(h)*ko,w=Math.cos(M),o=ep(y,o,E*w*-b),a=ep(y,a,-Math.sin(M)*-b),l=ep(y,l,x*w*-b+b)}m!==cl&&(v+="perspective("+m+Ys),(n||s)&&(v+="translate("+n+"%, "+s+"%) "),(S||o!==cl||a!==cl||l!==cl)&&(v+=l!==cl||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ys),c!==Xs&&(v+="rotate("+c+Ys),u!==Xs&&(v+="rotateY("+u+Ys),h!==Xs&&(v+="rotateX("+h+Ys),(f!==Xs||d!==Xs)&&(v+="skew("+f+", "+d+Ys),(p!==1||_!==1)&&(v+="scale("+p+", "+_+Ys),y.style[Qe]=v||"translate(0, 0)"},ZS=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,c=i.skewX,u=i.skewY,h=i.scaleX,f=i.scaleY,d=i.target,p=i.xOrigin,_=i.yOrigin,m=i.xOffset,g=i.yOffset,y=i.forceCSS,b=parseFloat(o),v=parseFloat(a),S,M,E,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ko,c*=ko,S=Math.cos(l)*h,M=Math.sin(l)*h,E=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=ko,w=Math.tan(c-u),w=Math.sqrt(1+w*w),E*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),S*=w,M*=w)),S=ii(S),M=ii(M),E=ii(E),x=ii(x)):(S=h,x=f,M=E=0),(b&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(b=fs(d,"x",o,"px"),v=fs(d,"y",a,"px")),(p||_||m||g)&&(b=ii(b+p-(p*S+_*E)+m),v=ii(v+_-(p*M+_*x)+g)),(n||s)&&(w=d.getBBox(),b=ii(b+n/100*w.width),v=ii(v+s/100*w.height)),w="matrix("+S+","+M+","+E+","+x+","+b+","+v+")",d.setAttribute("transform",w),y&&(d.style[Qe]=w)},JS=function(t,e,i,n,s){var o=360,a=_i(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?qs:1),c=l-n,u=n+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*yg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*yg)%o-~~(c/o)*o)),t._pt=f=new rn(t._pt,e,i,n,c,IS),f.e=u,f.u="deg",t._props.push(i),f},Ag=function(t,e){for(var i in e)t[i]=e[i];return t},KS=function(t,e,i){var n=Ag({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,c,u,h,f,d,p;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),o[Qe]=e,a=hl(i,1),hs(i,Qe),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Qe],o[Qe]=e,a=hl(i,1),o[Qe]=c);for(l in Lr)c=n[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Pi(c),p=Pi(u),h=d!==p?fs(i,l,c,p):parseFloat(c),f=parseFloat(u),t._pt=new rn(t._pt,a,l,h,f-h,ip),t._pt.u=p||0,t._props.push(l));Ag(a,n)};nn("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",o=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(a){return t<2?r+a:"border"+a+r});ru[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(p){return Fr(a,p,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(p,_){return d[p]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var up={name:"css",register:rp,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var o=this._props,a=t.style,l=i.vars.startAt,c,u,h,f,d,p,_,m,g,y,b,v,S,M,E,x,w;op||rp(),this.styles=this.styles||Pg(t),x=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(dn[_]&&Zd(_,e,i,n,t,s)))){if(d=typeof u,p=ru[_],d==="function"&&(u=u.call(i,n,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Uo(u)),p)p(this,t,_,u,i)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Pr.lastIndex=0,Pr.test(c)||(m=Pi(c),g=Pi(u),g?m!==g&&(c=fs(t,_,c,g)+g):m&&(u+=m)),this.add(a,"setProperty",c,u,n,s,0,0,_),o.push(_),x.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,n,t,s):l[_],_i(c)&&~c.indexOf("random(")&&(c=Uo(c)),Pi(c+"")||c==="auto"||(c+=gn.units[_]||Pi(Fr(t,_))||""),(c+"").charAt(1)==="="&&(c=Fr(t,_))):c=Fr(t,_),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),_ in gr&&(_==="autoAlpha"&&(f===1&&Fr(t,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,a.visibility),us(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=gr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Lr,b){if(this.styles.save(_),w=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=An(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var A=t.style.perspective;t.style.perspective=u,u=An(t,"perspective"),A?t.style.perspective=A:hs(t,"perspective")}h=parseFloat(u)}if(v||(S=t._gsap,S.renderTransform&&!e.parseTransform||hl(t,e.parseTransform),M=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new rn(this._pt,a,Qe,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new rn(this._pt,S,"scaleY",S.scaleY,(y?Gs(S.scaleY,y+h):h)-S.scaleY||0,ip),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(_n,0,a[_n]),u=YS(u),S.svg?sp(t,u,0,M,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==S.zOrigin&&us(this,S,"zOrigin",S.zOrigin,g),us(this,a,_,su(c),su(u)));continue}else if(_==="svgOrigin"){sp(t,u,1,M,0,this);continue}else if(_ in Ng){JS(this,S,_,f,y?Gs(f,y+u):u);continue}else if(_==="smoothOrigin"){us(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){KS(this,u,t);continue}}else _ in a||(_=zo(_)||_);if(b||(h||h===0)&&(f||f===0)&&!PS.test(u)&&_ in a)m=(c+"").substr((f+"").length),h||(h=0),g=Pi(u)||(_ in gn.units?gn.units[_]:m),m!==g&&(f=fs(t,_,c,g)),this._pt=new rn(this._pt,b?S:a,_,f,(y?Gs(f,y+h):h)-f,!b&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?NS:ip),this._pt.u=g||0,b&&w!==u?(this._pt.b=c,this._pt.e=w,this._pt.r=LS):m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=FS);else if(_ in a)XS.call(this,t,_,c,y?y+u:u);else if(_ in t)this.add(t,_,c||t[_],y?y+u:u,n,s);else if(_!=="parseTransform"){Qc(_,u);continue}b||(_ in a?x.push(_,0,a[_]):typeof t[_]=="function"?x.push(_,2,t[_]()):x.push(_,1,c||t[_])),o.push(_)}}E&&tp(this)},render:function(t,e){if(e.tween._time||!ap())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:Fr,aliases:gr,getSetter:function(t,e,i){var n=gr[e];return n&&n.indexOf(",")<0&&(e=n),e in Lr&&e!==_n&&(t._gsap.x||Fr(t,"x"))?i&&vg===i?e==="scale"?kS:BS:(vg=i||{})&&(e==="scale"?zS:HS):t.style&&!jc(t.style[e])?US:~e.indexOf("-")?OS:nu(t,e)},core:{_removeProperty:hs,_getMatrix:cp}};Vi.utils.checkPrefix=zo;Vi.core.getStyleSaver=Pg;(function(r,t,e,i){var n=nn(r+","+t+","+e,function(s){Lr[s]=1});nn(t,function(s){gn.units[s]="deg",Ng[s]=1}),gr[n[13]]=r+","+t,nn(i,function(s){var o=s.split(":");gr[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");nn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){gn.units[r]="px"});Vi.registerPlugin(up);var wt=Vi.registerPlugin(up)||Vi,k2=wt.core.Tween;function Bg(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function jS(r,t,e){return t&&Bg(r.prototype,t),e&&Bg(r,e),r}var Ii,lu,QS,Cn,ds,ps,Vo,zg,Zs,Go,Hg,Nr,jn,Vg,Gg=function(){return Ii||typeof window<"u"&&(Ii=window.gsap)&&Ii.registerPlugin&&Ii},Wg=1,Ho=[],fe=[],Qn=[],dl=Date.now,hp=function(t,e){return e},tM=function(){var t=Go.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,fe),n.push.apply(n,Qn),fe=i,Qn=n,hp=function(o,a){return e[o](a)}},Or=function(t,e){return~Qn.indexOf(t)&&Qn[Qn.indexOf(t)+1][e]},pl=function(t){return!!~Hg.indexOf(t)},on=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:n!==!1,capture:!!s})},sn=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},ou="scrollLeft",au="scrollTop",fp=function(){return Nr&&Nr.isPressed||fe.cache++},cu=function(t,e){var i=function n(s){if(s||s===0){Wg&&(Cn.history.scrollRestoration="manual");var o=Nr&&Nr.isPressed;s=n.v=Math.round(s)||(Nr&&Nr.iOS?1:0),t(s),n.cacheID=fe.cache,o&&hp("ss",s)}else(e||fe.cache!==n.cacheID||hp("ref"))&&(n.cacheID=fe.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},Gi={s:ou,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cu(function(r){return arguments.length?Cn.scrollTo(r,di.sc()):Cn.pageXOffset||ds[ou]||ps[ou]||Vo[ou]||0})},di={s:au,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gi,sc:cu(function(r){return arguments.length?Cn.scrollTo(Gi.sc(),r):Cn.pageYOffset||ds[au]||ps[au]||Vo[au]||0})},an=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ii.utils.toArray)(t)[0]||(typeof t=="string"&&Ii.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},eM=function(t,e){for(var i=e.length;i--;)if(e[i]===t||e[i].contains(t))return!0;return!1},Ur=function(t,e){var i=e.s,n=e.sc;pl(t)&&(t=ds.scrollingElement||ps);var s=fe.indexOf(t),o=n===di.sc?1:2;!~s&&(s=fe.push(t)-1),fe[s+o]||on(t,"scroll",fp);var a=fe[s+o],l=a||(fe[s+o]=cu(Or(t,i),!0)||(pl(t)?n:cu(function(c){return arguments.length?t[i]=c:t[i]})));return l.target=t,a||(l.smooth=Ii.getProperty(t,"scrollBehavior")==="smooth"),l},uu=function(t,e,i){var n=t,s=t,o=dl(),a=o,l=e||50,c=Math.max(500,l*3),u=function(p,_){var m=dl();_||m-o>l?(s=n,n=p,a=o,o=m):i?n+=p:n=s+(p-s)/(m-a)*(o-a)},h=function(){s=n=i?0:n,a=o=0},f=function(p){var _=a,m=s,g=dl();return(p||p===0)&&p!==n&&u(p),o===a||g-a>c?0:(n+(i?m:-m))/((i?g:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},fl=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},kg=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Xg=function(){Go=Ii.core.globals().ScrollTrigger,Go&&Go.core&&tM()},Yg=function(t){return Ii=t||Gg(),!lu&&Ii&&typeof document<"u"&&document.body&&(Cn=window,ds=document,ps=ds.documentElement,Vo=ds.body,Hg=[Cn,ds,ps,Vo],QS=Ii.utils.clamp,Vg=Ii.core.context||function(){},Zs="onpointerenter"in Vo?"pointer":"mouse",zg=ni.isTouch=Cn.matchMedia&&Cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,jn=ni.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Wg=0},500),lu=1),Go||Xg(),lu};Gi.op=di;fe.cache=0;var ni=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(i){lu||Yg(Ii)||console.warn("Please gsap.registerPlugin(Observer)"),Go||Xg();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,c=i.debounce,u=i.preventDefault,h=i.onStop,f=i.onStopDelay,d=i.ignore,p=i.wheelSpeed,_=i.event,m=i.onDragStart,g=i.onDragEnd,y=i.onDrag,b=i.onPress,v=i.onRelease,S=i.onRight,M=i.onLeft,E=i.onUp,x=i.onDown,w=i.onChangeX,A=i.onChangeY,R=i.onChange,D=i.onToggleX,N=i.onToggleY,I=i.onHover,F=i.onHoverEnd,H=i.onMove,B=i.ignoreCheck,Y=i.isNormalizer,W=i.onGestureStart,P=i.onGestureEnd,O=i.onWheel,tt=i.onEnable,rt=i.onDisable,gt=i.onClick,ht=i.scrollSpeed,vt=i.capture,$=i.allowClicks,j=i.lockAxis,pt=i.onLockAxis;this.target=a=an(a)||ps,this.vars=i,d&&(d=Ii.utils.toArray(d)),n=n||1e-9,s=s||0,p=p||1,ht=ht||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Cn.getComputedStyle(Vo).lineHeight)||22);var Dt,dt,Vt,Tt,At,Qt,ne,G=this,Kt=0,he=0,De=i.passive||!u&&i.passive!==!1,Zt=Ur(a,Gi),It=Ur(a,di),V=Zt(),$e=It(),re=~o.indexOf("touch")&&!~o.indexOf("pointer")&&jn[0]==="pointerdown",L=pl(a),T=a.ownerDocument||ds,X=[0,0,0],Z=[0,0,0],Q=0,mt=function(){return Q=dl()},ct=function(ot,Yt){return(G.event=ot)&&d&&eM(ot.target,d)||Yt&&re&&ot.pointerType!=="touch"||B&&B(ot,Yt)},et=function(){G._vx.reset(),G._vy.reset(),dt.pause(),h&&h(G)},nt=function(){var ot=G.deltaX=kg(X),Yt=G.deltaY=kg(Z),lt=Math.abs(ot)>=n,Jt=Math.abs(Yt)>=n;R&&(lt||Jt)&&R(G,ot,Yt,X,Z),lt&&(S&&G.deltaX>0&&S(G),M&&G.deltaX<0&&M(G),w&&w(G),D&&G.deltaX<0!=Kt<0&&D(G),Kt=G.deltaX,X[0]=X[1]=X[2]=0),Jt&&(x&&G.deltaY>0&&x(G),E&&G.deltaY<0&&E(G),A&&A(G),N&&G.deltaY<0!=he<0&&N(G),he=G.deltaY,Z[0]=Z[1]=Z[2]=0),(Tt||Vt)&&(H&&H(G),Vt&&(m&&Vt===1&&m(G),y&&y(G),Vt=0),Tt=!1),Qt&&!(Qt=!1)&&pt&&pt(G),At&&(O(G),At=!1),Dt=0},St=function(ot,Yt,lt){X[lt]+=ot,Z[lt]+=Yt,G._vx.update(ot),G._vy.update(Yt),c?Dt||(Dt=requestAnimationFrame(nt)):nt()},Ot=function(ot,Yt){j&&!ne&&(G.axis=ne=Math.abs(ot)>Math.abs(Yt)?"x":"y",Qt=!0),ne!=="y"&&(X[2]+=ot,G._vx.update(ot,!0)),ne!=="x"&&(Z[2]+=Yt,G._vy.update(Yt,!0)),c?Dt||(Dt=requestAnimationFrame(nt)):nt()},Mt=function(ot){if(!ct(ot,1)){ot=fl(ot,u);var Yt=ot.clientX,lt=ot.clientY,Jt=Yt-G.x,kt=lt-G.y,oe=G.isDragging;G.x=Yt,G.y=lt,(oe||(Jt||kt)&&(Math.abs(G.startX-Yt)>=s||Math.abs(G.startY-lt)>=s))&&(Vt||(Vt=oe?2:1),oe||(G.isDragging=!0),Ot(Jt,kt))}},yt=G.onPress=function(ut){ct(ut,1)||ut&&ut.button||(G.axis=ne=null,dt.pause(),G.isPressed=!0,ut=fl(ut),Kt=he=0,G.startX=G.x=ut.clientX,G.startY=G.y=ut.clientY,G._vx.reset(),G._vy.reset(),on(Y?a:T,jn[1],Mt,De,!0),G.deltaX=G.deltaY=0,b&&b(G))},ft=G.onRelease=function(ut){if(!ct(ut,1)){sn(Y?a:T,jn[1],Mt,!0);var ot=!isNaN(G.y-G.startY),Yt=G.isDragging,lt=Yt&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Jt=fl(ut);!lt&&ot&&(G._vx.reset(),G._vy.reset(),u&&$&&Ii.delayedCall(.08,function(){if(dl()-Q>300&&!ut.defaultPrevented){if(ut.target.click)ut.target.click();else if(T.createEvent){var kt=T.createEvent("MouseEvents");kt.initMouseEvent("click",!0,!0,Cn,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),ut.target.dispatchEvent(kt)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&Yt&&!Y&&dt.restart(!0),Vt&&nt(),g&&Yt&&g(G),v&&v(G,lt)}},Wt=function(ot){return ot.touches&&ot.touches.length>1&&(G.isGesturing=!0)&&W(ot,G.isDragging)},jt=function(){return(G.isGesturing=!1)||P(G)},k=function(ot){if(!ct(ot)){var Yt=Zt(),lt=It();St((Yt-V)*ht,(lt-$e)*ht,1),V=Yt,$e=lt,h&&dt.restart(!0)}},_t=function(ot){if(!ct(ot)){ot=fl(ot,u),O&&(At=!0);var Yt=(ot.deltaMode===1?l:ot.deltaMode===2?Cn.innerHeight:1)*p;St(ot.deltaX*Yt,ot.deltaY*Yt,0),h&&!Y&&dt.restart(!0)}},it=function(ot){if(!ct(ot)){var Yt=ot.clientX,lt=ot.clientY,Jt=Yt-G.x,kt=lt-G.y;G.x=Yt,G.y=lt,Tt=!0,h&&dt.restart(!0),(Jt||kt)&&Ot(Jt,kt)}},bt=function(ot){G.event=ot,I(G)},Ct=function(ot){G.event=ot,F(G)},st=function(ot){return ct(ot)||fl(ot,u)&&gt(G)};dt=G._dc=Ii.delayedCall(f||.25,et).pause(),G.deltaX=G.deltaY=0,G._vx=uu(0,50,!0),G._vy=uu(0,50,!0),G.scrollX=Zt,G.scrollY=It,G.isDragging=G.isGesturing=G.isPressed=!1,Vg(this),G.enable=function(ut){return G.isEnabled||(on(L?T:a,"scroll",fp),o.indexOf("scroll")>=0&&on(L?T:a,"scroll",k,De,vt),o.indexOf("wheel")>=0&&on(a,"wheel",_t,De,vt),(o.indexOf("touch")>=0&&zg||o.indexOf("pointer")>=0)&&(on(a,jn[0],yt,De,vt),on(T,jn[2],ft),on(T,jn[3],ft),$&&on(a,"click",mt,!0,!0),gt&&on(a,"click",st),W&&on(T,"gesturestart",Wt),P&&on(T,"gestureend",jt),I&&on(a,Zs+"enter",bt),F&&on(a,Zs+"leave",Ct),H&&on(a,Zs+"move",it)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Tt=Vt=!1,G._vx.reset(),G._vy.reset(),V=Zt(),$e=It(),ut&&ut.type&&yt(ut),tt&&tt(G)),G},G.disable=function(){G.isEnabled&&(Ho.filter(function(ut){return ut!==G&&pl(ut.target)}).length||sn(L?T:a,"scroll",fp),G.isPressed&&(G._vx.reset(),G._vy.reset(),sn(Y?a:T,jn[1],Mt,!0)),sn(L?T:a,"scroll",k,vt),sn(a,"wheel",_t,vt),sn(a,jn[0],yt,vt),sn(T,jn[2],ft),sn(T,jn[3],ft),sn(a,"click",mt,!0),sn(a,"click",st),sn(T,"gesturestart",Wt),sn(T,"gestureend",jt),sn(a,Zs+"enter",bt),sn(a,Zs+"leave",Ct),sn(a,Zs+"move",it),G.isEnabled=G.isPressed=G.isDragging=!1,rt&&rt(G))},G.kill=G.revert=function(){G.disable();var ut=Ho.indexOf(G);ut>=0&&Ho.splice(ut,1),Nr===G&&(Nr=0)},Ho.push(G),Y&&pl(a)&&(Nr=G),G.enable(_)},jS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();ni.version="3.15.0";ni.create=function(r){return new ni(r)};ni.register=Yg;ni.getAll=function(){return Ho.slice()};ni.getById=function(r){return Ho.filter(function(t){return t.vars.id===r})[0]};Gg()&&Ii.registerPlugin(ni);var Ut,qo,ge,Ce,Pn,Ee,Tp,Tu,Cl,Sl,gl,hu,Wi,Du,vp,cn,qg,$g,$o,u_,dp,h_,ln,yp,f_,d_,ms,Sp,Ap,Zo,Cp,Ml,Mp,pp,fu=1,Xi=Date.now,mp=Xi(),Xn=0,_l=0,Zg=function(t,e,i){var n=Rn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return i["_"+e+"Clamp"]=n,n?t.substr(6,t.length-7):t},Jg=function(t,e){return e&&(!Rn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},iM=function r(){return _l&&requestAnimationFrame(r)},Kg=function(){return Du=1},jg=function(){return Du=0},_r=function(t){return t},xl=function(t){return Math.round(t*1e5)/1e5||0},p_=function(){return typeof window<"u"},m_=function(){return Ut||p_()&&(Ut=window.gsap)&&Ut.registerPlugin&&Ut},eo=function(t){return!!~Tp.indexOf(t)},g_=function(t){return(t==="Height"?Cp:ge["inner"+t])||Pn["client"+t]||Ee["client"+t]},__=function(t){return Or(t,"getBoundingClientRect")||(eo(t)?function(){return Eu.width=ge.innerWidth,Eu.height=Cp,Eu}:function(){return Br(t)})},nM=function(t,e,i){var n=i.d,s=i.d2,o=i.a;return(o=Or(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?g_(s):t["client"+s])||0}},rM=function(t,e){return!e||~Qn.indexOf(t)?__(t):function(){return Eu}},xr=function(t,e){var i=e.s,n=e.d2,s=e.d,o=e.a;return Math.max(0,(i="scroll"+n)&&(o=Or(t,i))?o()-__(t)()[s]:eo(t)?(Pn[i]||Ee[i])-g_(n):t[i]-t["offset"+n])},du=function(t,e){for(var i=0;i<$o.length;i+=3)(!e||~e.indexOf($o[i+1]))&&t($o[i],$o[i+1],$o[i+2])},Rn=function(t){return typeof t=="string"},Yi=function(t){return typeof t=="function"},vl=function(t){return typeof t=="number"},Js=function(t){return typeof t=="object"},ml=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Wo=function(t,e,i){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t,i)}):e(t,i);n&&n.totalTime&&(t.callbackAnimation=n)}},Xo=Math.abs,x_="left",v_="top",Dp="right",Rp="bottom",js="width",Qs="height",bl="Right",wl="Left",El="Top",Tl="Bottom",pi="padding",Gn="margin",Ko="Width",Pp="Height",xi="px",Wn=function(t){return ge.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},sM=function(t){var e=Wn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Qg=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Br=function(t,e){var i=e&&Wn(t)[vp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ut.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),n},Au=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},y_=function(t){var e=[],i=t.labels,n=t.duration(),s;for(s in i)e.push(i[s]/n);return e},oM=function(t){return function(e){return Ut.utils.snap(y_(t),e)}},Ip=function(t){var e=Ut.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return e(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=e(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:e(s<0?n-t:n+t)}},aM=function(t){return function(e,i){return Ip(y_(t))(e,i.direction)}},pu=function(t,e,i,n){return i.split(",").forEach(function(s){return t(e,s,n)})},Ti=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},Ei=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},mu=function(t,e,i){i=i&&i.wheelHandler,i&&(t(e,"wheel",i),t(e,"touchmove",i))},t_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},gu={toggleActions:"play",anticipatePin:0},Cu={top:0,left:0,center:.5,bottom:1,right:1},Su=function(t,e){if(Rn(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in Cu?Cu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},_u=function(t,e,i,n,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,p=Ce.createElement("div"),_=eo(i)||Or(i,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,g=_?Ee:i.tagName==="IFRAME"?i.contentDocument.body:i,y=t.indexOf("start")!==-1,b=y?c:u,v="border-color:"+b+";font-size:"+h+";color:"+b+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(v+=(n===di?Dp:Rp)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=y,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=v,p.innerText=e||e===0?t+"-"+e:t,g.children[0]?g.insertBefore(p,g.children[0]):g.appendChild(p),p._offset=p["offset"+n.op.d2],Mu(p,0,n,y),p},Mu=function(t,e,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+Ko]=1,s["border"+a+Ko]=0,s[i.p]=e+"px",Ut.set(t,s)},de=[],bp={},Dl,e_=function(){return Xi()-Xn>34&&(Dl||(Dl=requestAnimationFrame(kr)))},Yo=function(){(!ln||!ln.isPressed||ln.startX>Ee.clientWidth)&&(fe.cache++,ln?Dl||(Dl=requestAnimationFrame(kr)):kr(),Xn||no("scrollStart"),Xn=Xi())},gp=function(){d_=ge.innerWidth,f_=ge.innerHeight},yl=function(t){fe.cache++,(t===!0||!Wi&&!h_&&!Ce.fullscreenElement&&!Ce.webkitFullscreenElement&&(!yp||d_!==ge.innerWidth||Math.abs(ge.innerHeight-f_)>ge.innerHeight*.25))&&Tu.restart(!0)},io={},lM=[],S_=function r(){return Ei(Bt,"scrollEnd",r)||Ks(!0)},no=function(t){return io[t]&&io[t].map(function(e){return e()})||lM},Dn=[],M_=function(t){for(var e=0;e<Dn.length;e+=5)(!t||Dn[e+4]&&Dn[e+4].query===t)&&(Dn[e].style.cssText=Dn[e+1],Dn[e].getBBox&&Dn[e].setAttribute("transform",Dn[e+2]||""),Dn[e+3].uncache=1)},b_=function(){return fe.forEach(function(t){return Yi(t)&&++t.cacheID&&(t.rec=t())})},Fp=function(t,e){var i;for(cn=0;cn<de.length;cn++)i=de[cn],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));Ml=!0,e&&M_(e),e||no("revert")},w_=function(t,e){fe.cache++,(e||!un)&&fe.forEach(function(i){return Yi(i)&&i.cacheID++&&(i.rec=0)}),Rn(t)&&(ge.history.scrollRestoration=Ap=t)},un,to=0,i_,cM=function(){if(i_!==to){var t=i_=to;requestAnimationFrame(function(){return t===to&&Ks(!0)})}},E_=function(){Ee.appendChild(Zo),Cp=!ln&&Zo.offsetHeight||ge.innerHeight,Ee.removeChild(Zo)},n_=function(t){return Cl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ks=function(t,e){if(Pn=Ce.documentElement,Ee=Ce.body,Tp=[ge,Ce,Pn,Ee],Xn&&!t&&!Ml){Ti(Bt,"scrollEnd",S_);return}E_(),un=Bt.isRefreshing=!0,Ml||b_();var i=no("refreshInit");u_&&Bt.sort(),e||Fp(),fe.forEach(function(n){Yi(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),de.slice(0).forEach(function(n){return n.refresh()}),Ml=!1,de.forEach(function(n){if(n._subPinOffset&&n.pin){var s=n.vars.horizontal?"offsetWidth":"offsetHeight",o=n.pin[s];n.revert(!0,1),n.adjustPinSpacing(n.pin[s]-o),n.refresh()}}),Mp=1,n_(!0),de.forEach(function(n){var s=xr(n.scroller,n._dir),o=n.vars.end==="max"||n._endClamp&&n.end>s,a=n._startClamp&&n.start>=s;(o||a)&&n.setPositions(a?s-1:n.start,o?Math.max(a?s:n.start+1,s):n.end,!0)}),n_(!1),Mp=0,i.forEach(function(n){return n&&n.render&&n.render(-1)}),fe.forEach(function(n){Yi(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),w_(Ap,1),Tu.pause(),to++,un=2,kr(2),de.forEach(function(n){return Yi(n.vars.onRefresh)&&n.vars.onRefresh(n)}),un=Bt.isRefreshing=!1,no("refresh")},wp=0,bu=1,Al,kr=function(t){if(t===2||!un&&!Ml){Bt.isUpdating=!0,Al&&Al.update(0);var e=de.length,i=Xi(),n=i-mp>=50,s=e&&de[0].scroll();if(bu=wp>s?-1:1,un||(wp=s),n&&(Xn&&!Du&&i-Xn>200&&(Xn=0,no("scrollEnd")),gl=mp,mp=i),bu<0){for(cn=e;cn-- >0;)de[cn]&&de[cn].update(0,n);bu=1}else for(cn=0;cn<e;cn++)de[cn]&&de[cn].update(0,n);Bt.isUpdating=!1}Dl=0},Ep=[x_,v_,Rp,Dp,Gn+Tl,Gn+bl,Gn+El,Gn+wl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],wu=Ep.concat([js,Qs,"boxSizing","max"+Ko,"max"+Pp,"position",Gn,pi,pi+El,pi+bl,pi+Tl,pi+wl]),uM=function(t,e,i){Jo(i);var n=t._gsap;if(n.spacerIsNative)Jo(n.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},_p=function(t,e,i,n){if(!t._gsap.swappedIn){for(var s=Ep.length,o=e.style,a=t.style,l;s--;)l=Ep[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Rp]=a[Dp]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[js]=Au(t,Gi)+xi,o[Qs]=Au(t,di)+xi,o[pi]=a[Gn]=a[v_]=a[x_]="0",Jo(n),a[js]=a["max"+Ko]=i[js],a[Qs]=a["max"+Pp]=i[Qs],a[pi]=i[pi],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},hM=/([A-Z])/g,Jo=function(t){if(t){var e=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||Ut.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?e[s]=o:e[s]&&e.removeProperty(s.replace(hM,"-$1").toLowerCase())}},xu=function(t){for(var e=wu.length,i=t.style,n=[],s=0;s<e;s++)n.push(wu[s],i[wu[s]]);return n.t=t,n},fM=function(t,e,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Eu={left:0,top:0},r_=function(t,e,i,n,s,o,a,l,c,u,h,f,d,p){Yi(t)&&(t=t(l)),Rn(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Su("0"+t.substr(3),i):0));var _=d?d.time():0,m,g,y;if(d&&d.seek(0),isNaN(t)||(t=+t),vl(t))d&&(t=Ut.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&Mu(a,i,n,!0);else{Yi(e)&&(e=e(l));var b=(t||"0").split(" "),v,S,M,E;y=an(e,l)||Ee,v=Br(y)||{},(!v||!v.left&&!v.top)&&Wn(y).display==="none"&&(E=y.style.display,y.style.display="block",v=Br(y),E?y.style.display=E:y.style.removeProperty("display")),S=Su(b[0],v[n.d]),M=Su(b[1]||"0",i),t=v[n.p]-c[n.p]-u+S+s-M,a&&Mu(a,M,n,i-M<20||a._isStart&&M>20),i-=i-M}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var x=t+i,w=o._isStart;m="scroll"+n.d2,Mu(o,x,n,w&&x>20||!w&&(h?Math.max(Ee[m],Pn[m]):o.parentNode[m])<=x+1),h&&(c=Br(a),h&&(o.style[n.op.p]=c[n.op.p]-n.op.m-o._offset+xi))}return d&&y&&(m=Br(y),d.seek(f),g=Br(y),d._caScrollDist=m[n.p]-g[n.p],t=t/d._caScrollDist*f),d&&d.seek(_),d?t:Math.round(t)},dM=/(webkit|moz|length|cssText|inset)/i,s_=function(t,e,i,n){if(t.parentNode!==e){var s=t.style,o,a;if(e===Ee){t._stOrig=s.cssText,a=Wn(t);for(o in a)!+o&&!dM.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;Ut.core.getCache(t).uncache=1,e.appendChild(t)}},T_=function(t,e,i){var n=e,s=n;return function(o){var a=Math.round(t());return a!==n&&a!==s&&Math.abs(a-n)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=n,n=Math.round(o),n}},vu=function(t,e,i){var n={};n[e.p]="+="+i,Ut.set(t,n)},o_=function(t,e){var i=Ur(t,e),n="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,p={};c=c||i();var _=T_(i,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[n]=a,l.inherit=!1,l.modifiers=p,p[n]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){fe.cache++,o.tween&&kr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ut.to(t,l),f};return t[n]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ti(t,"wheel",i.wheelHandler),Bt.isTouch&&Ti(t,"touchmove",i.wheelHandler),s},Bt=(function(){function r(e,i){qo||r.register(Ut)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Sp(this),this.init(e,i)}var t=r.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_l){this.update=this.refresh=this.kill=_r;return}i=Qg(Rn(i)||vl(i)||i.nodeType?{trigger:i}:i,gu);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,p=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,b=s.once,v=s.snap,S=s.pinReparent,M=s.pinSpacer,E=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,A=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gi:di,R=!h&&h!==0,D=an(i.scroller||ge),N=Ut.core.getCache(D),I=eo(D),F=("pinType"in i?i.pinType:Or(D,"pinType")||I&&"fixed")==="fixed",H=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],B=R&&i.toggleActions.split(" "),Y="markers"in i?i.markers:gu.markers,W=I?0:parseFloat(Wn(D)["border"+A.p2+Ko])||0,P=this,O=i.onRefreshInit&&function(){return i.onRefreshInit(P)},tt=nM(D,I,A),rt=rM(D,I),gt=0,ht=0,vt=0,$=Ur(D,A),j,pt,Dt,dt,Vt,Tt,At,Qt,ne,G,Kt,he,De,Zt,It,V,$e,re,L,T,X,Z,Q,mt,ct,et,nt,St,Ot,Mt,yt,ft,Wt,jt,k,_t,it,bt,Ct;if(P._startClamp=P._endClamp=!1,P._dir=A,m*=45,P.scroller=D,P.scroll=E?E.time.bind(E):$,dt=$(),P.vars=i,n=n||i.animation,"refreshPriority"in i&&(u_=1,i.refreshPriority===-9999&&(Al=P)),N.tweenScroll=N.tweenScroll||{top:o_(D,di),left:o_(D,Gi)},P.tweenTo=j=N.tweenScroll[A.p],P.scrubDuration=function(lt){Wt=vl(lt)&&lt,Wt?ft?ft.duration(lt):ft=Ut.to(n,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Wt,paused:!0,onComplete:function(){return g&&g(P)}}):(ft&&ft.progress(1).kill(),ft=0)},n&&(n.vars.lazy=!1,n._initted&&!P.isReverted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),P.animation=n.pause(),n.scrollTrigger=P,P.scrubDuration(h),Mt=0,l||(l=n.vars.id)),v&&((!Js(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Ee.style&&Ut.set(I?[Ee,Pn]:D,{scrollBehavior:"auto"}),fe.forEach(function(lt){return Yi(lt)&&lt.target===(I?Ce.scrollingElement||Pn:D)&&(lt.smooth=!1)}),Dt=Yi(v.snapTo)?v.snapTo:v.snapTo==="labels"?oM(n):v.snapTo==="labelsDirectional"?aM(n):v.directional!==!1?function(lt,Jt){return Ip(v.snapTo)(lt,Xi()-ht<500?0:Jt.direction)}:Ut.utils.snap(v.snapTo),jt=v.duration||{min:.1,max:2},jt=Js(jt)?Sl(jt.min,jt.max):Sl(jt,jt),k=Ut.delayedCall(v.delay||Wt/2||.1,function(){var lt=$(),Jt=Xi()-ht<500,kt=j.tween;if((Jt||Math.abs(P.getVelocity())<10)&&!kt&&!Du&&gt!==lt){var oe=(lt-Tt)/Zt,ui=n&&!R?n.totalProgress():oe,me=Jt?0:(ui-yt)/(Xi()-gl)*1e3||0,Ve=Ut.utils.clamp(-oe,1-oe,Xo(me/2)*me/.185),bi=oe+(v.inertia===!1?0:Ve),Ge,Ne,ye=v,Qi=ye.onStart,ke=ye.onInterrupt,Bi=ye.onComplete;if(Ge=Dt(bi,P),vl(Ge)||(Ge=bi),Ne=Math.max(0,Math.round(Tt+Ge*Zt)),lt<=At&&lt>=Tt&&Ne!==lt){if(kt&&!kt._initted&&kt.data<=Xo(Ne-lt))return;v.inertia===!1&&(Ve=Ge-oe),j(Ne,{duration:jt(Xo(Math.max(Xo(bi-ui),Xo(Ge-ui))*.185/me/.05||0)),ease:v.ease||"power3",data:Xo(Ne-lt),onInterrupt:function(){return k.restart(!0)&&ke&&Wo(P,ke)},onComplete:function(){P.update(),gt=$(),n&&!R&&(ft?ft.resetTo("totalProgress",Ge,n._tTime/n._tDur):n.progress(Ge)),Mt=yt=n&&!R?n.totalProgress():P.progress,y&&y(P),Bi&&Wo(P,Bi)}},lt,Ve*Zt,Ne-lt-Ve*Zt),Qi&&Wo(P,Qi,j.tween)}}else P.isActive&&gt!==lt&&k.restart(!0)}).pause()),l&&(bp[l]=P),f=P.trigger=an(f||d!==!0&&d),Ct=f&&f._gsap&&f._gsap.stRevert,Ct&&(Ct=Ct(P)),d=d===!0?f:an(d),Rn(a)&&(a={targets:f,className:a}),d&&(p===!1||p===Gn||(p=!p&&d.parentNode&&d.parentNode.style&&Wn(d.parentNode).display==="flex"?!1:pi),P.pin=d,pt=Ut.core.getCache(d),pt.spacer?It=pt.pinState:(M&&(M=an(M),M&&!M.nodeType&&(M=M.current||M.nativeElement),pt.spacerIsNative=!!M,M&&(pt.spacerState=xu(M))),pt.spacer=re=M||Ce.createElement("div"),re.classList.add("pin-spacer"),l&&re.classList.add("pin-spacer-"+l),pt.pinState=It=xu(d)),i.force3D!==!1&&Ut.set(d,{force3D:!0}),P.spacer=re=pt.spacer,Ot=Wn(d),mt=Ot[p+A.os2],T=Ut.getProperty(d),X=Ut.quickSetter(d,A.a,xi),_p(d,re,Ot),$e=xu(d)),Y){he=Js(Y)?Qg(Y,t_):t_,G=_u("scroller-start",l,D,A,he,0),Kt=_u("scroller-end",l,D,A,he,0,G),L=G["offset"+A.op.d2];var st=an(Or(D,"content")||D);Qt=this.markerStart=_u("start",l,st,A,he,L,0,E),ne=this.markerEnd=_u("end",l,st,A,he,L,0,E),E&&(bt=Ut.quickSetter([Qt,ne],A.a,xi)),!F&&!(Qn.length&&Or(D,"fixedMarkers")===!0)&&(sM(I?Ee:D),Ut.set([G,Kt],{force3D:!0}),et=Ut.quickSetter(G,A.a,xi),St=Ut.quickSetter(Kt,A.a,xi))}if(E){var ut=E.vars.onUpdate,ot=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){P.update(0,0,1),ut&&ut.apply(E,ot||[])})}if(P.previous=function(){return de[de.indexOf(P)-1]},P.next=function(){return de[de.indexOf(P)+1]},P.revert=function(lt,Jt){if(!Jt)return P.kill(!0);var kt=lt!==!1||!P.enabled,oe=Wi;kt!==P.isReverted&&(kt&&(_t=Math.max($(),P.scroll.rec||0),vt=P.progress,it=n&&n.progress()),Qt&&[Qt,ne,G,Kt].forEach(function(ui){return ui.style.display=kt?"none":"block"}),kt&&(Wi=P,P.update(kt)),d&&(!S||!P.isActive)&&(kt?uM(d,re,It):_p(d,re,Wn(d),ct)),kt||P.update(kt),Wi=oe,P.isReverted=kt)},P.refresh=function(lt,Jt,kt,oe){if(!((Wi||!P.enabled)&&!Jt)){if(d&&lt&&Xn){Ti(r,"scrollEnd",S_);return}!un&&O&&O(P),Wi=P,j.tween&&!kt&&(j.tween.kill(),j.tween=0),ft&&ft.pause(),_&&n&&(n.revert({kill:!1}).invalidate(),n.getChildren?n.getChildren(!0,!0,!1).forEach(function(Et){return Et.vars.immediateRender&&Et.render(0,!0,!0)}):n.vars.immediateRender&&n.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var ui=tt(),me=rt(),Ve=E?E.duration():xr(D,A),bi=Zt<=.01||!Zt,Ge=0,Ne=oe||0,ye=Js(kt)?kt.end:i.end,Qi=i.endTrigger||f,ke=Js(kt)?kt.start:i.start||(i.start===0||!f?0:d?"0 0":"0 100%"),Bi=P.pinnedContainer=i.pinnedContainer&&an(i.pinnedContainer,P),tn=f&&Math.max(0,de.indexOf(P))||0,hi=tn,ti,gi,hr,Ao,wi,oi,Bn,Co,C,z,K,q,J;for(Y&&Js(kt)&&(q=Ut.getProperty(G,A.p),J=Ut.getProperty(Kt,A.p));hi-- >0;)oi=de[hi],oi.end||oi.refresh(0,1)||(Wi=P),Bn=oi.pin,Bn&&(Bn===f||Bn===d||Bn===Bi)&&!oi.isReverted&&(z||(z=[]),z.unshift(oi),oi.revert(!0,!0)),oi!==de[hi]&&(tn--,hi--);for(Yi(ke)&&(ke=ke(P)),ke=Zg(ke,"start",P),Tt=r_(ke,f,ui,A,$(),Qt,G,P,me,W,F,Ve,E,P._startClamp&&"_startClamp")||(d?-.001:0),Yi(ye)&&(ye=ye(P)),Rn(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(Rn(ke)?ke.split(" ")[0]:"")+ye:(Ge=Su(ye.substr(2),ui),ye=Rn(ke)?ke:(E?Ut.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Tt):Tt)+Ge,Qi=f)),ye=Zg(ye,"end",P),At=Math.max(Tt,r_(ye||(Qi?"100% 0":Ve),Qi,ui,A,$()+Ge,ne,Kt,P,me,W,F,Ve,E,P._endClamp&&"_endClamp"))||-.001,Ge=0,hi=tn;hi--;)oi=de[hi]||{},Bn=oi.pin,Bn&&oi.start-oi._pinPush<=Tt&&!E&&oi.end>0&&(ti=oi.end-(P._startClamp?Math.max(0,oi.start):oi.start),(Bn===f&&oi.start-oi._pinPush<Tt||Bn===Bi)&&isNaN(ke)&&(Ge+=ti*(1-oi.progress)),Bn===d&&(Ne+=ti));if(Tt+=Ge,At+=Ge,P._startClamp&&(P._startClamp+=Ge),P._endClamp&&!un&&(P._endClamp=At||-.001,At=Math.min(At,xr(D,A))),Zt=At-Tt||(Tt-=.01)&&.001,bi&&(vt=Ut.utils.clamp(0,1,Ut.utils.normalize(Tt,At,_t))),P._pinPush=Ne,Qt&&Ge&&(ti={},ti[A.a]="+="+Ge,Bi&&(ti[A.p]="-="+$()),Ut.set([Qt,ne],ti)),d&&!(Mp&&P.end>=xr(D,A)))ti=Wn(d),Ao=A===di,hr=$(),Z=parseFloat(T(A.a))+Ne,!Ve&&At>1&&(K=(I?Ce.scrollingElement||Pn:D).style,K={style:K,value:K["overflow"+A.a.toUpperCase()]},I&&Wn(Ee)["overflow"+A.a.toUpperCase()]!=="scroll"&&(K.style["overflow"+A.a.toUpperCase()]="scroll")),_p(d,re,ti),$e=xu(d),gi=Br(d,!0),Co=F&&Ur(D,Ao?Gi:di)(),p?(ct=[p+A.os2,Zt+Ne+xi],ct.t=re,hi=p===pi?Au(d,A)+Zt+Ne:0,hi&&(ct.push(A.d,hi+xi),re.style.flexBasis!=="auto"&&(re.style.flexBasis=hi+xi)),Jo(ct),Bi&&de.forEach(function(Et){Et.pin===Bi&&Et.vars.pinSpacing!==!1&&(Et._subPinOffset=!0)}),F&&$(_t)):(hi=Au(d,A),hi&&re.style.flexBasis!=="auto"&&(re.style.flexBasis=hi+xi)),F&&(wi={top:gi.top+(Ao?hr-Tt:Co)+xi,left:gi.left+(Ao?Co:hr-Tt)+xi,boxSizing:"border-box",position:"fixed"},wi[js]=wi["max"+Ko]=Math.ceil(gi.width)+xi,wi[Qs]=wi["max"+Pp]=Math.ceil(gi.height)+xi,wi[Gn]=wi[Gn+El]=wi[Gn+bl]=wi[Gn+Tl]=wi[Gn+wl]="0",wi[pi]=ti[pi],wi[pi+El]=ti[pi+El],wi[pi+bl]=ti[pi+bl],wi[pi+Tl]=ti[pi+Tl],wi[pi+wl]=ti[pi+wl],V=fM(It,wi,S),un&&$(0)),n?(C=n._initted,dp(1),n.render(n.duration(),!0,!0),Q=T(A.a)-Z+Zt+Ne,nt=Math.abs(Zt-Q)>1,F&&nt&&V.splice(V.length-2,2),n.render(0,!0,!0),C||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),dp(0)):Q=Zt,K&&(K.value?K.style["overflow"+A.a.toUpperCase()]=K.value:K.style.removeProperty("overflow-"+A.a));else if(f&&$()&&!E)for(gi=f.parentNode;gi&&gi!==Ee;)gi._pinOffset&&(Tt-=gi._pinOffset,At-=gi._pinOffset),gi=gi.parentNode;z&&z.forEach(function(Et){return Et.revert(!1,!0)}),P.start=Tt,P.end=At,dt=Vt=un?_t:$(),!E&&!un&&(dt<_t&&$(_t),P.scroll.rec=0),P.revert(!1,!0),ht=Xi(),k&&(gt=-1,k.restart(!0)),Wi=0,n&&R&&(n._initted||it)&&n.progress()!==it&&n.progress(it||0,!0).render(n.time(),!0,!0),(bi||vt!==P.progress||E||_||n&&!n._initted)&&(n&&!R&&(n._initted||vt||n.vars.immediateRender!==!1)&&n.totalProgress(E&&Tt<-.001&&!vt?Ut.utils.normalize(Tt,At,0):vt,!0),P.progress=bi||(dt-Tt)/Zt===vt?0:vt),d&&p&&(re._pinOffset=Math.round(P.progress*Q)),ft&&ft.invalidate(),isNaN(q)||(q-=Ut.getProperty(G,A.p),J-=Ut.getProperty(Kt,A.p),vu(G,A,q),vu(Qt,A,q-(oe||0)),vu(Kt,A,J),vu(ne,A,J-(oe||0))),bi&&!un&&P.update(),u&&!un&&!De&&(De=!0,u(P),De=!1)}},P.getVelocity=function(){return($()-Vt)/(Xi()-gl)*1e3||0},P.endAnimation=function(){ml(P.callbackAnimation),n&&(ft?ft.progress(1):n.paused()?R||ml(n,P.direction<0,1):ml(n,n.reversed()))},P.labelToScroll=function(lt){return n&&n.labels&&(Tt||P.refresh()||Tt)+n.labels[lt]/n.duration()*Zt||0},P.getTrailing=function(lt){var Jt=de.indexOf(P),kt=P.direction>0?de.slice(0,Jt).reverse():de.slice(Jt+1);return(Rn(lt)?kt.filter(function(oe){return oe.vars.preventOverlaps===lt}):kt).filter(function(oe){return P.direction>0?oe.end<=Tt:oe.start>=At})},P.update=function(lt,Jt,kt){if(!(E&&!kt&&!lt)){var oe=un===!0?_t:P.scroll(),ui=lt?0:(oe-Tt)/Zt,me=ui<0?0:ui>1?1:ui||0,Ve=P.progress,bi,Ge,Ne,ye,Qi,ke,Bi,tn;if(Jt&&(Vt=dt,dt=E?$():oe,v&&(yt=Mt,Mt=n&&!R?n.totalProgress():me)),m&&d&&!Wi&&!fu&&Xn&&(!me&&Tt<oe+(oe-Vt)/(Xi()-gl)*m?me=1e-4:me===1&&At>oe+(oe-Vt)/(Xi()-gl)*m&&(me=.9999)),me!==Ve&&P.enabled){if(bi=P.isActive=!!me&&me<1,Ge=!!Ve&&Ve<1,ke=bi!==Ge,Qi=ke||!!me!=!!Ve,P.direction=me>Ve?1:-1,P.progress=me,Qi&&!Wi&&(Ne=me&&!Ve?0:me===1?1:Ve===1?2:3,R&&(ye=!ke&&B[Ne+1]!=="none"&&B[Ne+1]||B[Ne],tn=n&&(ye==="complete"||ye==="reset"||ye in n))),w&&(ke||tn)&&(tn||h||!n)&&(Yi(w)?w(P):P.getTrailing(w).forEach(function(hr){return hr.endAnimation()})),R||(ft&&!Wi&&!fu?(ft._dp._time-ft._start!==ft._time&&ft.render(ft._dp._time-ft._start),ft.resetTo?ft.resetTo("totalProgress",me,n._tTime/n._tDur):(ft.vars.totalProgress=me,ft.invalidate().restart())):n&&n.totalProgress(me,!!(Wi&&(ht||lt)))),d){if(lt&&p&&(re.style[p+A.os2]=mt),!F)X(xl(Z+Q*me));else if(Qi){if(Bi=!lt&&me>Ve&&At+1>oe&&oe+1>=xr(D,A),S)if(!lt&&(bi||Bi)){var hi=Br(d,!0),ti=oe-Tt;s_(d,Ee,hi.top+(A===di?ti:0)+xi,hi.left+(A===di?0:ti)+xi)}else s_(d,re);Jo(bi||Bi?V:$e),nt&&me<1&&bi||X(Z+(me===1&&!Bi?Q:0))}}v&&!j.tween&&!Wi&&!fu&&k.restart(!0),a&&(ke||b&&me&&(me<1||!pp))&&Cl(a.targets).forEach(function(hr){return hr.classList[bi||b?"add":"remove"](a.className)}),o&&!R&&!lt&&o(P),Qi&&!Wi?(R&&(tn&&(ye==="complete"?n.pause().totalProgress(1):ye==="reset"?n.restart(!0).pause():ye==="restart"?n.restart(!0):n[ye]()),o&&o(P)),(ke||!pp)&&(c&&ke&&Wo(P,c),H[Ne]&&Wo(P,H[Ne]),b&&(me===1?P.kill(!1,1):H[Ne]=0),ke||(Ne=me===1?1:3,H[Ne]&&Wo(P,H[Ne]))),x&&!bi&&Math.abs(P.getVelocity())>(vl(x)?x:2500)&&(ml(P.callbackAnimation),ft?ft.progress(1):ml(n,ye==="reverse"?1:!me,1))):R&&o&&!Wi&&o(P)}if(St){var gi=E?oe/E.duration()*(E._caScrollDist||0):oe;et(gi+(G._isFlipped?1:0)),St(gi)}bt&&bt(-oe/E.duration()*(E._caScrollDist||0))}},P.enable=function(lt,Jt){P.enabled||(P.enabled=!0,Ti(D,"resize",yl),I||Ti(D,"scroll",Yo),O&&Ti(r,"refreshInit",O),lt!==!1&&(P.progress=vt=0,dt=Vt=gt=$()),Jt!==!1&&P.refresh())},P.getTween=function(lt){return lt&&j?j.tween:ft},P.setPositions=function(lt,Jt,kt,oe){if(E){var ui=E.scrollTrigger,me=E.duration(),Ve=ui.end-ui.start;lt=ui.start+Ve*lt/me,Jt=ui.start+Ve*Jt/me}P.refresh(!1,!1,{start:Jg(lt,kt&&!!P._startClamp),end:Jg(Jt,kt&&!!P._endClamp)},oe),P.update()},P.adjustPinSpacing=function(lt){if(ct&&lt){var Jt=ct.indexOf(A.d)+1;ct[Jt]=parseFloat(ct[Jt])+lt+xi,ct[1]=parseFloat(ct[1])+lt+xi,Jo(ct)}},P.disable=function(lt,Jt){if(lt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Jt||ft&&ft.pause(),_t=0,pt&&(pt.uncache=1),O&&Ei(r,"refreshInit",O),k&&(k.pause(),j.tween&&j.tween.kill()&&(j.tween=0)),!I)){for(var kt=de.length;kt--;)if(de[kt].scroller===D&&de[kt]!==P)return;Ei(D,"resize",yl),I||Ei(D,"scroll",Yo)}},P.kill=function(lt,Jt){P.disable(lt,Jt),ft&&!Jt&&ft.kill(),l&&delete bp[l];var kt=de.indexOf(P);kt>=0&&de.splice(kt,1),kt===cn&&bu>0&&cn--,kt=0,de.forEach(function(oe){return oe.scroller===P.scroller&&(kt=1)}),kt||un||(P.scroll.rec=0),n&&(n.scrollTrigger=null,lt&&n.revert({kill:!1}),Jt||n.kill()),Qt&&[Qt,ne,G,Kt].forEach(function(oe){return oe.parentNode&&oe.parentNode.removeChild(oe)}),Al===P&&(Al=0),d&&(pt&&(pt.uncache=1),kt=0,de.forEach(function(oe){return oe.pin===d&&kt++}),kt||(pt.spacer=0)),i.onKill&&i.onKill(P)},de.push(P),P.enable(!1,!1),Ct&&Ct(P),n&&n.add&&!Zt){var Yt=P.update;P.update=function(){P.update=Yt,fe.cache++,Tt||At||P.refresh()},Ut.delayedCall(.01,P.update),Zt=.01,Tt=At=0}else P.refresh();d&&cM()},r.register=function(i){return qo||(Ut=i||m_(),p_()&&window.document&&r.enable(),qo=_l),qo},r.defaults=function(i){if(i)for(var n in i)gu[n]=i[n];return gu},r.disable=function(i,n){_l=0,de.forEach(function(o){return o[n?"kill":"disable"](i)}),Ei(ge,"wheel",Yo),Ei(Ce,"scroll",Yo),clearInterval(hu),Ei(Ce,"touchcancel",_r),Ei(Ee,"touchstart",_r),pu(Ei,Ce,"pointerdown,touchstart,mousedown",Kg),pu(Ei,Ce,"pointerup,touchend,mouseup",jg),Tu.kill(),du(Ei);for(var s=0;s<fe.length;s+=3)mu(Ei,fe[s],fe[s+1]),mu(Ei,fe[s],fe[s+2])},r.enable=function(){if(ge=window,Ce=document,Pn=Ce.documentElement,Ee=Ce.body,Ut){if(Cl=Ut.utils.toArray,Sl=Ut.utils.clamp,Sp=Ut.core.context||_r,dp=Ut.core.suppressOverwrites||_r,Ap=ge.history.scrollRestoration||"auto",wp=ge.pageYOffset||0,Ut.core.globals("ScrollTrigger",r),Ee){_l=1,Zo=document.createElement("div"),Zo.style.height="100vh",Zo.style.position="absolute",E_(),iM(),ni.register(Ut),r.isTouch=ni.isTouch,ms=ni.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),yp=ni.isTouch===1,Ti(ge,"wheel",Yo),Tp=[ge,Ce,Pn,Ee],Ut.matchMedia?(r.matchMedia=function(u){var h=Ut.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Ut.addEventListener("matchMediaInit",function(){b_(),Fp()}),Ut.addEventListener("matchMediaRevert",function(){return M_()}),Ut.addEventListener("matchMedia",function(){Ks(0,1),no("matchMedia")}),Ut.matchMedia().add("(orientation: portrait)",function(){return gp(),gp})):console.warn("Requires GSAP 3.11.0 or later"),gp(),Ti(Ce,"scroll",Yo);var i=Ee.hasAttribute("style"),n=Ee.style,s=n.borderTopStyle,o=Ut.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Br(Ee),di.m=Math.round(a.top+di.sc())||0,Gi.m=Math.round(a.left+Gi.sc())||0,s?n.borderTopStyle=s:n.removeProperty("border-top-style"),i||(Ee.setAttribute("style",""),Ee.removeAttribute("style")),hu=setInterval(e_,250),Ut.delayedCall(.5,function(){return fu=0}),Ti(Ce,"touchcancel",_r),Ti(Ee,"touchstart",_r),pu(Ti,Ce,"pointerdown,touchstart,mousedown",Kg),pu(Ti,Ce,"pointerup,touchend,mouseup",jg),vp=Ut.utils.checkPrefix("transform"),wu.push(vp),qo=Xi(),Tu=Ut.delayedCall(.2,Ks).pause(),$o=[Ce,"visibilitychange",function(){var u=ge.innerWidth,h=ge.innerHeight;Ce.hidden?(qg=u,$g=h):(qg!==u||$g!==h)&&yl()},Ce,"DOMContentLoaded",Ks,ge,"load",Ks,ge,"resize",yl],du(Ti),de.forEach(function(u){return u.enable(0,1)}),l=0;l<fe.length;l+=3)mu(Ei,fe[l],fe[l+1]),mu(Ei,fe[l],fe[l+2])}else if(Ce){var c=function u(){r.enable(),Ce.removeEventListener("DOMContentLoaded",u)};Ce.addEventListener("DOMContentLoaded",c)}}},r.config=function(i){"limitCallbacks"in i&&(pp=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(hu)||(hu=n)&&setInterval(e_,n),"ignoreMobileResize"in i&&(yp=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(du(Ei)||du(Ti,i.autoRefreshEvents||"none"),h_=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=an(i),o=fe.indexOf(s),a=eo(s);~o&&fe.splice(o,a?6:2),n&&(a?Qn.unshift(ge,n,Ee,n,Pn,n):Qn.unshift(s,n))},r.clearMatchMedia=function(i){de.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(Rn(i)?an(i):i).getBoundingClientRect(),a=o[s?js:Qs]*n||0;return s?o.right-a>0&&o.left+a<ge.innerWidth:o.bottom-a>0&&o.top+a<ge.innerHeight},r.positionInViewport=function(i,n,s){Rn(i)&&(i=an(i));var o=i.getBoundingClientRect(),a=o[s?js:Qs],l=n==null?a/2:n in Cu?Cu[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/ge.innerWidth:(o.top+l)/ge.innerHeight},r.killAll=function(i){if(de.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=io.killAll||[];io={},n.forEach(function(s){return s()})}},r})();Bt.version="3.15.0";Bt.saveStyles=function(r){return r?Cl(r).forEach(function(t){if(t&&t.style){var e=Dn.indexOf(t);e>=0&&Dn.splice(e,5),Dn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ut.core.getCache(t),Sp())}}):Dn};Bt.revert=function(r,t){return Fp(!r,t)};Bt.create=function(r,t){return new Bt(r,t)};Bt.refresh=function(r){return r?yl(!0):(qo||Bt.register())&&Ks(!0)};Bt.update=function(r){return++fe.cache&&kr(r===!0?2:0)};Bt.clearScrollMemory=w_;Bt.maxScroll=function(r,t){return xr(r,t?Gi:di)};Bt.getScrollFunc=function(r,t){return Ur(an(r),t?Gi:di)};Bt.getById=function(r){return bp[r]};Bt.getAll=function(){return de.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Bt.isScrolling=function(){return!!Xn};Bt.snapDirectional=Ip;Bt.addEventListener=function(r,t){var e=io[r]||(io[r]=[]);~e.indexOf(t)||e.push(t)};Bt.removeEventListener=function(r,t){var e=io[r],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};Bt.batch=function(r,t){var e=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Ut.delayedCall(n,function(){u(h,f),h=[],f=[]}).pause();return function(p){h.length||d.restart(!0),h.push(p.trigger),f.push(p),s<=h.length&&d.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Yi(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Yi(s)&&(s=s(),Ti(Bt,"refresh",function(){return s=t.batchMax()})),Cl(r).forEach(function(l){var c={};for(a in i)c[a]=i[a];c.trigger=l,e.push(Bt.create(c))}),e};var a_=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},xp=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ni.isTouch?" pinch-zoom":""):"none",t===Pn&&r(Ee,e)},yu={auto:1,scroll:1},pM=function(t){var e=t.event,i=t.target,n=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ut.core.getCache(s),a=Xi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Ee&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(yu[(l=Wn(s)).overflowY]||yu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!eo(s)&&(yu[(l=Wn(s)).overflowY]||yu[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},A_=function(t,e,i,n){return ni.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&pM,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&Ti(Ce,ni.eventTypes[0],c_,!1,!0)},onDisable:function(){return Ei(Ce,ni.eventTypes[0],c_,!0)}})},mM=/(input|label|select|textarea)/i,l_,c_=function(t){var e=mM.test(t.target.tagName);(e||l_)&&(t._gsapAllow=!0,l_=e)},gM=function(t){Js(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=an(t.target)||Pn,u=Ut.core.globals().ScrollSmoother,h=u&&u.get(),f=ms&&(t.content&&an(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Ur(c,di),p=Ur(c,Gi),_=1,m=(ni.isTouch&&ge.visualViewport?ge.visualViewport.scale*ge.visualViewport.width:ge.outerWidth)/ge.innerWidth,g=0,y=Yi(n)?function(){return n(a)}:function(){return n||2.8},b,v,S=A_(c,t.type,!0,s),M=function(){return v=!1},E=_r,x=_r,w=function(){l=xr(c,di),x=Sl(ms?1:0,l),i&&(E=Sl(0,xr(c,Gi))),b=to},A=function(){f._gsap.y=xl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(v){requestAnimationFrame(M);var Y=xl(a.deltaY/2),W=x(d.v-Y);if(f&&W!==d.v+d.offset){d.offset=W-d.v;var P=xl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",f._gsap.y=P+"px",d.cacheID=fe.cache,kr()}return!0}d.offset&&A(),v=!0},D,N,I,F,H=function(){w(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&Ut.set(f,{y:"+=0"}),t.ignoreCheck=function(B){return ms&&B.type==="touchmove"&&R(B)||_>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},t.onPress=function(){v=!1;var B=_;_=xl((ge.visualViewport&&ge.visualViewport.scale||1)/m),D.pause(),B!==_&&xp(c,_>1.01?!0:i?!1:"x"),N=p(),I=d(),w(),b=to},t.onRelease=t.onGestureStart=function(B,Y){if(d.offset&&A(),!Y)F.restart(!0);else{fe.cache++;var W=y(),P,O;i&&(P=p(),O=P+W*.05*-B.velocityX/.227,W*=a_(p,P,O,xr(c,Gi)),D.vars.scrollX=E(O)),P=d(),O=P+W*.05*-B.velocityY/.227,W*=a_(d,P,O,xr(c,di)),D.vars.scrollY=x(O),D.invalidate().duration(W).play(.01),(ms&&D.vars.scrollY>=l||P>=l-1)&&Ut.to({},{onUpdate:H,duration:W})}o&&o(B)},t.onWheel=function(){D._ts&&D.pause(),Xi()-g>1e3&&(b=0,g=Xi())},t.onChange=function(B,Y,W,P,O){if(to!==b&&w(),Y&&i&&p(E(P[2]===Y?N+(B.startX-B.x):p()+Y-P[1])),W){d.offset&&A();var tt=O[2]===W,rt=tt?I+B.startY-B.y:d()+W-O[1],gt=x(rt);tt&&rt!==gt&&(I+=gt-rt),d(gt)}(W||Y)&&kr()},t.onEnable=function(){xp(c,i?!1:"x"),Bt.addEventListener("refresh",H),Ti(ge,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),S.enable()},t.onDisable=function(){xp(c,!0),Ei(ge,"resize",H),Bt.removeEventListener("refresh",H),S.kill()},t.lockAxis=t.lockAxis!==!1,a=new ni(t),a.iOS=ms,ms&&!d()&&d(1),ms&&Ut.ticker.add(_r),F=a._dc,D=Ut.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:T_(d,d(),function(){return D.pause()})},onUpdate:kr,onComplete:F.vars.onComplete}),a};Bt.sort=function(r){if(Yi(r))return de.sort(r);var t=ge.pageYOffset||0;return Bt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ge.innerHeight}),de.sort(r||function(e,i){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};Bt.observe=function(r){return new ni(r)};Bt.normalizeScroll=function(r){if(typeof r>"u")return ln;if(r===!0&&ln)return ln.enable();if(r===!1){ln&&ln.kill(),ln=r;return}var t=r instanceof ni?r:gM(r);return ln&&ln.target===t.target&&ln.kill(),eo(t.target)&&(ln=t),t};Bt.core={_getVelocityProp:uu,_inputObserver:A_,_scrollers:fe,_proxies:Qn,bridge:{ss:function(){Xn||no("scrollStart"),Xn=Xi()},ref:function(){return Wi}}};m_()&&Ut.registerPlugin(Bt);var Rl,Pl,C_=typeof Symbol=="function"?Symbol():"_split",Np,_M=()=>Np||Qo.register(window.gsap),D_=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Il=r=>r?typeof r=="string"?Il(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((t,e)=>(typeof e=="string"?t.push(...Il(e)):t.push(e),t),[]):[r]:[],R_=r=>Il(r).filter(t=>t&&t.nodeType===1),Up=[],Lp=function(){},xM={add:r=>r()},vM=/\s+/g,P_=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),Ru={left:0,top:0,width:0,height:0},yM=(r,t)=>{for(;++t<r.length&&r[t]===Ru;);return r[t]||Ru},I_=({element:r,html:t,ariaL:e,ariaH:i})=>{r.innerHTML=t,e?r.setAttribute("aria-label",e):r.removeAttribute("aria-label"),i?r.setAttribute("aria-hidden",i):r.removeAttribute("aria-hidden")},F_=(r,t)=>{if(t){let e=new Set(r.join("").match(t)||Up),i=r.length,n,s,o,a;if(e.size)for(;--i>-1;){s=r[i];for(o of e)if(o.startsWith(s)&&o.length>s.length){for(n=0,a=s;o.startsWith(a+=r[i+ ++n])&&a.length<o.length;);if(n&&a.length===o.length){r[i]=o,r.splice(i+1,n);break}}}}return r},L_=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),jo=(r,t,e)=>t.insertBefore(typeof r=="string"?document.createTextNode(r):r,e),Op=(r,t,e)=>{let i=t[r+"sClass"]||"",{tag:n="div",aria:s="auto",propIndex:o=!1}=t,a=r==="line"?"block":"inline-block",l=i.indexOf("++")>-1,c=u=>{let h=document.createElement(n),f=e.length+1;return i&&(h.className=i+(l?" "+i+f:"")),o&&h.style.setProperty("--"+r,f+""),s!=="none"&&h.setAttribute("aria-hidden","true"),n!=="span"&&(h.style.position="relative",h.style.display=a),h.textContent=u,e.push(h),h};return l&&(i=i.replace("++","")),c.collection=e,c},SM=(r,t,e,i)=>{let n=Op("line",e,i),s=window.getComputedStyle(r).textAlign||"left";return(o,a)=>{let l=n("");for(l.style.textAlign=s,r.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},N_=(r,t,e,i,n,s,o,a,l,c)=>{var u;let h=Array.from(r.childNodes),f=0,{wordDelimiter:d,reduceWhiteSpace:p=!0,prepareText:_}=t,m=r.getBoundingClientRect(),g=m,y=!p&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",b=0,v=e.collection,S,M,E,x,w,A,R,D,N,I,F,H,B,Y,W,P,O,tt;for(typeof d=="object"?(E=d.delimiter||d,M=d.replaceWith||""):M=d===""?"":d||" ",S=M!==" ";f<h.length;f++)if(x=h[f],x.nodeType===3){for(W=x.textContent||"",p?W=W.replace(vM," "):y&&(W=W.replace(/\n/g,M+`
`)),_&&(W=_(W,r)),x.textContent=W,w=M||E?W.split(E||M):W.match(a)||Up,O=w[w.length-1],D=S?O.slice(-1)===" ":!O,O||w.pop(),g=m,R=S?w[0].charAt(0)===" ":!w[0],R&&jo(" ",r,x),w[0]||w.shift(),F_(w,l),s&&c||(x.textContent=""),N=1;N<=w.length;N++)if(P=w[N-1],!p&&y&&P.charAt(0)===`
`&&((u=x.previousSibling)==null||u.remove(),jo(document.createElement("br"),r,x),P=P.slice(1)),!p&&P==="")jo(M,r,x);else if(P===" ")r.insertBefore(document.createTextNode(" "),x);else{if(S&&P.charAt(0)===" "&&jo(" ",r,x),b&&N===1&&!R&&v.indexOf(b.parentNode)>-1?(A=v[v.length-1],A.appendChild(document.createTextNode(i?"":P))):(A=e(i?"":P),jo(A,r,x),b&&N===1&&!R&&A.insertBefore(b,A.firstChild)),i)for(F=D_?F_([...D_.segment(P)].map(rt=>rt.segment),l):P.match(a)||Up,tt=0;tt<F.length;tt++)A.appendChild(F[tt]===" "?document.createTextNode(" "):i(F[tt]));if(s&&c){if(W=x.textContent=W.substring(P.length+1,W.length),I=A.getBoundingClientRect(),I.top>g.top&&I.left<=g.left){for(H=r.cloneNode(),B=r.childNodes[0];B&&B!==A;)Y=B,B=B.nextSibling,H.appendChild(Y);r.parentNode.insertBefore(H,r),n&&L_(H)}g=I}(N<w.length||D)&&jo(N>=w.length?" ":S&&P.slice(-1)===" "?" "+M:M,r,x)}r.removeChild(x),b=0}else x.nodeType===1&&(o&&o.indexOf(x)>-1?(v.indexOf(x.previousSibling)>-1&&v[v.length-1].appendChild(x),b=x):(N_(x,t,e,i,n,s,o,a,l,!0),b=0),n&&L_(x))},U_=class O_{constructor(t,e){this.isSplit=!1,_M(),this.elements=R_(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=e,this.elements.forEach(o=>{var a;e.overwrite!==!1&&((a=o[C_])==null||a._data.orig.filter(({element:l})=>l===o).forEach(I_)),o[C_]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let i=[],n,s=()=>{let o=i.length,a;for(;o--;){a=i[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:i,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(n),n=setTimeout(s,200)})},Lp(this),this.split(e)}split(t){return(this._ctx||xM).add(()=>{this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:e="chars,words,lines",aria:i="auto",deepSlice:n=!0,smartWrap:s,onSplit:o,autoSplit:a=!1,specialChars:l,mask:c}=this.vars,u=e.indexOf("lines")>-1,h=e.indexOf("chars")>-1,f=e.indexOf("words")>-1,d=h&&!f&&!u,p=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=p?new RegExp(p.source+"|"+P_.source,"gu"):P_,m=!!t.ignore&&R_(t.ignore),{orig:g,animTime:y,obs:b}=this._data,v;(h||f||u)&&(this.elements.forEach((S,M)=>{g[M]={element:S,html:S.innerHTML,ariaL:S.getAttribute("aria-label"),ariaH:S.getAttribute("aria-hidden")},i==="auto"?S.setAttribute("aria-label",(S.textContent||"").trim()):i==="hidden"&&S.setAttribute("aria-hidden","true");let E=[],x=[],w=[],A=h?Op("char",t,E):null,R=Op("word",t,x),D,N,I,F;if(N_(S,t,R,A,d,n&&(u||d),m,_,p,!1),u){let H=Il(S.childNodes),B=SM(S,H,t,w),Y,W=[],P=0,O=H.map(gt=>gt.nodeType===1?gt.getBoundingClientRect():Ru),tt=Ru,rt;for(D=0;D<H.length;D++)Y=H[D],Y.nodeType===1&&(Y.nodeName==="BR"?((!D||H[D-1].nodeName!=="BR")&&(W.push(Y),B(P,D+1)),P=D+1,tt=yM(O,D)):(rt=O[D],D&&rt.top>tt.top&&rt.left<tt.left+tt.width-1&&(B(P,D),P=D),tt=rt));P<D&&B(P,D),W.forEach(gt=>{var ht;return(ht=gt.parentNode)==null?void 0:ht.removeChild(gt)})}if(!f){for(D=0;D<x.length;D++)if(N=x[D],h||!N.nextSibling||N.nextSibling.nodeType!==3)if(s&&!u){for(I=document.createElement("span"),I.style.whiteSpace="nowrap";N.firstChild;)I.appendChild(N.firstChild);N.replaceWith(I)}else N.replaceWith(...N.childNodes);else F=N.nextSibling,F&&F.nodeType===3&&(F.textContent=(N.textContent||"")+(F.textContent||""),N.remove());x.length=0,S.normalize()}this.lines.push(...w),this.words.push(...x),this.chars.push(...E)}),c&&this[c]&&this.masks.push(...this[c].map(S=>{let M=S.cloneNode();return S.replaceWith(M),M.appendChild(S),S.className&&(M.className=S.className.trim().split(" ").map(E=>E+"-mask").join(" ")),M.style.overflow="clip",M}))),this.isSplit=!0,Pl&&u&&a&&Pl.addEventListener("loadingdone",this._split),(v=o&&o(this))&&v.totalTime&&(this._data.anim=y?v.totalTime(y):v),u&&a&&this.elements.forEach((S,M)=>{g[M].width=S.offsetWidth,b&&b.observe(S)})}),this}kill(){let{obs:t}=this._data;t&&t.disconnect(),Pl?.removeEventListener("loadingdone",this._split)}revert(){var t,e;if(this.isSplit){let{orig:i,anim:n}=this._data;this.kill(),i.forEach(I_),this.chars.length=this.words.length=this.lines.length=i.length=this.masks.length=0,this.isSplit=!1,n&&(this._data.animTime=n.totalTime(),n.revert()),(e=(t=this.vars).onRevert)==null||e.call(t,this)}return this}static create(t,e){return new O_(t,e)}static register(t){Rl=Rl||t||window.gsap,Rl&&(Il=Rl.utils.toArray,Lp=Rl.core.context||Lp),!Np&&window.innerWidth>0&&(Pl=document.fonts,Np=!0)}};U_.version="3.15.0";var Qo=U_;var MM=/(?:^\s+|\s+$)/g,bM=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function ta(r){var t=r.nodeType,e="";if(t===1||t===9||t===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)e+=ta(r)}else if(t===3||t===4)return r.nodeValue;return e}function Pu(r,t,e,i,n){for(var s=r.firstChild,o=[],a;s;)s.nodeType===3?(a=(s.nodeValue+"").replace(/^\n+/g,""),i||(a=a.replace(/\s+/g," ")),o.push.apply(o,xn(a,t,e,i,n))):(s.nodeName+"").toLowerCase()==="br"?o[o.length-1]+="<br>":o.push(s.outerHTML),s=s.nextSibling;if(!n)for(a=o.length;a--;)o[a]==="&"&&o.splice(a,1,"&amp;");return o}function xn(r,t,e,i,n){if(r+="",e&&(r=r.trim?r.trim():r.replace(MM,"")),t&&t!=="")return r.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var s=[],o=r.length,a=0,l,c;a<o;a++)c=r.charAt(a),(c.charCodeAt(0)>=55296&&c.charCodeAt(0)<=56319||r.charCodeAt(a+1)>=65024&&r.charCodeAt(a+1)<=65039)&&(l=((r.substr(a,12).split(bM)||[])[1]||"").length||2,c=r.substr(a,l),s.emoji=1,a+=l-1),s.push(n?c:c===">"?"&gt;":c==="<"?"&lt;":i&&c===" "&&(r.charAt(a-1)===" "||r.charAt(a+1)===" ")?"&nbsp;":c);return s}var Iu=(function(){function r(e){this.chars=xn(e),this.sets=[],this.length=50;for(var i=0;i<20;i++)this.sets[i]=k_(80,this.chars)}var t=r.prototype;return t.grow=function(i){for(var n=0;n<20;n++)this.sets[n]+=k_(i-this.length,this.chars);this.length=i},r})(),ro,V_,G_=function(){return ro||typeof window<"u"&&(ro=window.gsap)&&ro.registerPlugin&&ro},wM=1,B_=/\s+/g,k_=function(t,e){for(var i=e.length,n="";--t>-1;)n+=e[~~(Math.random()*i)];return n},Bp="ABCDEFGHIJKLMNOPQRSTUVWXYZ",z_=Bp.toLowerCase(),EM={upperCase:new Iu(Bp),lowerCase:new Iu(z_),upperAndLowerCase:new Iu(Bp+z_)},H_=function(){V_=ro=G_()},Fl={version:"3.15.0",name:"scrambleText",register:function(t,e,i){ro=t,H_()},init:function(t,e,i,n,s){if(V_||H_(),this.prop="innerHTML"in t?"innerHTML":"textContent"in t?"textContent":0,!!this.prop){this.target=t,typeof e!="object"&&(e={text:e});var o=e.text||e.value||"",a=e.trim!==!1,l=this,c,u,h,f;return l.delimiter=c=e.delimiter||"",l.original=xn(ta(t).replace(B_," ").split("&nbsp;").join(""),c,a),(o==="{original}"||o===!0||o==null)&&(o=l.original.join(c)),l.text=xn((o||"").replace(B_," "),c,a),l.hasClass=!!(e.newClass||e.oldClass),l.newClass=e.newClass,l.oldClass=e.oldClass,f=c==="",l.textHasEmoji=f&&!!l.text.emoji,l.charsHaveEmoji=!!e.chars&&!!xn(e.chars).emoji,l.length=f?l.original.length:l.original.join(c).length,l.lengthDif=(f?l.text.length:l.text.join(c).length)-l.length,l.fillChar=e.fillChar||e.chars&&~e.chars.indexOf(" ")?"&nbsp;":"",l.charSet=h=EM[e.chars||"upperCase"]||new Iu(e.chars),l.speed=.05/(e.speed||1),l.prevScrambleTime=0,l.setIndex=Math.random()*20|0,u=l.length+Math.max(l.lengthDif,0),u>h.length&&h.grow(u),l.chars=h.sets[l.setIndex],l.revealDelay=e.revealDelay||0,l.tweenLength=e.tweenLength!==!1,l.tween=i,l.rightToLeft=!!e.rightToLeft,l._props.push("scrambleText","text"),wM}},render:function(t,e){var i=e.target,n=e.prop,s=e.text,o=e.delimiter,a=e.tween,l=e.prevScrambleTime,c=e.revealDelay,u=e.setIndex,h=e.chars,f=e.charSet,d=e.length,p=e.textHasEmoji,_=e.charsHaveEmoji,m=e.lengthDif,g=e.tweenLength,y=e.oldClass,b=e.newClass,v=e.rightToLeft,S=e.fillChar,M=e.speed,E=e.original,x=e.hasClass,w=s.length,A=a._time,R=A-l,D,N,I,F,H,B,Y,W,P,O,tt;c&&(a._from&&(A=a._dur-A),t=A===0?0:A<c?1e-6:A===a._dur?1:a._ease((A-c)/(a._dur-c))),t<0?t=0:t>1&&(t=1),v&&(t=1-t),D=~~(t*w+.5),t?((R>M||R<-M)&&(e.setIndex=u=(u+(Math.random()*19|0))%20,e.chars=f.sets[u],e.prevScrambleTime+=R),F=h):F=E.join(o),tt=a._from?t:1-t,O=d+(g?a._from?tt*tt*tt:1-tt*tt*tt:1)*m,v?t===1&&(a._from||a.data==="isFromStart")?(I="",F=E.join(o)):(Y=s.slice(D).join(o),_?I=xn(F).slice(0,O-(p?xn(Y):Y).length+.5|0).join(""):I=F.substr(0,O-(p?xn(Y):Y).length+.5|0),F=Y):(I=s.slice(0,D).join(o),N=(p?xn(I):I).length,_?F=xn(F).slice(N,O+.5|0).join(""):F=F.substr(N,O-N+.5|0)),x?(W=v?y:b,P=v?b:y,H=W&&D!==0,B=P&&D!==w,Y=(H?"<span class='"+W+"'>":"")+I+(H?"</span>":"")+(B?"<span class='"+P+"'>":"")+o+F+(B?"</span>":"")):Y=I+o+F,i[n]=S==="&nbsp;"&&~Y.indexOf("  ")?Y.split("  ").join("&nbsp;&nbsp;"):Y}};Fl.emojiSafeSplit=xn;Fl.getText=ta;G_()&&ro.registerPlugin(Fl);var TM=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig;var AM=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig;var CM=Math.PI/180,$2=180/Math.PI,Fu=Math.sin,Lu=Math.cos,Nl=Math.abs,Ll=Math.sqrt;var DM=function(t){return typeof t=="number"};var W_=1e5;var gs=function(t){return Math.round(t*W_)/W_||0};var X_=function(t){return t.closed=Math.abs(t[0]-t[t.length-2])<.001&&Math.abs(t[1]-t[t.length-1])<.001};function Y_(r,t,e,i,n,s,o){for(var a=r.length,l,c,u,h,f;--a>-1;)for(l=r[a],c=l.length,u=0;u<c;u+=2)h=l[u],f=l[u+1],l[u]=h*t+f*i+s,l[u+1]=h*e+f*n+o;return r._dirty=1,r}function RM(r,t,e,i,n,s,o,a,l){if(!(r===a&&t===l)){e=Nl(e),i=Nl(i);var c=n%360*CM,u=Lu(c),h=Fu(c),f=Math.PI,d=f*2,p=(r-a)/2,_=(t-l)/2,m=u*p+h*_,g=-h*p+u*_,y=m*m,b=g*g,v=y/(e*e)+b/(i*i);v>1&&(e=Ll(v)*e,i=Ll(v)*i);var S=e*e,M=i*i,E=(S*M-S*b-M*y)/(S*b+M*y);E<0&&(E=0);var x=(s===o?-1:1)*Ll(E),w=x*(e*g/i),A=x*-(i*m/e),R=(r+a)/2,D=(t+l)/2,N=R+(u*w-h*A),I=D+(h*w+u*A),F=(m-w)/e,H=(g-A)/i,B=(-m-w)/e,Y=(-g-A)/i,W=F*F+H*H,P=(H<0?-1:1)*Math.acos(F/Ll(W)),O=(F*Y-H*B<0?-1:1)*Math.acos((F*B+H*Y)/Ll(W*(B*B+Y*Y)));isNaN(O)&&(O=f),!o&&O>0?O-=d:o&&O<0&&(O+=d),P%=d,O%=d;var tt=Math.ceil(Nl(O)/(d/4)),rt=[],gt=O/tt,ht=4/3*Fu(gt/2)/(1+Lu(gt/2)),vt=u*e,$=h*e,j=h*-i,pt=u*i,Dt;for(Dt=0;Dt<tt;Dt++)n=P+Dt*gt,m=Lu(n),g=Fu(n),F=Lu(n+=gt),H=Fu(n),rt.push(m-ht*g,g+ht*m,F+ht*H,H-ht*F,F,H);for(Dt=0;Dt<rt.length;Dt+=2)m=rt[Dt],g=rt[Dt+1],rt[Dt]=m*vt+g*j+N,rt[Dt+1]=m*$+g*pt+I;return rt[Dt-2]=a,rt[Dt-1]=l,rt}}function q_(r){var t=(r+"").replace(AM,function(w){var A=+w;return A<1e-4&&A>-1e-4?0:A}).match(TM)||[],e=[],i=0,n=0,s=2/3,o=t.length,a=0,l="ERROR: malformed path: "+r,c,u,h,f,d,p,_,m,g,y,b,v,S,M,E,x=function(A,R,D,N){y=(D-A)/3,b=(N-R)/3,_.push(A+y,R+b,D-y,N-b,D,N)};if(!r||!isNaN(t[0])||isNaN(t[1]))return console.log(l),e;for(c=0;c<o;c++)if(S=d,isNaN(t[c])?(d=t[c].toUpperCase(),p=d!==t[c]):c--,h=+t[c+1],f=+t[c+2],p&&(h+=i,f+=n),c||(m=h,g=f),d==="M")_&&(_.length<8?e.length-=1:a+=_.length,X_(_)),i=m=h,n=g=f,_=[h,f],e.push(_),c+=2,d="L";else if(d==="C")_||(_=[0,0]),p||(i=n=0),_.push(h,f,i+t[c+3]*1,n+t[c+4]*1,i+=t[c+5]*1,n+=t[c+6]*1),c+=6;else if(d==="S")y=i,b=n,(S==="C"||S==="S")&&(y+=i-_[_.length-4],b+=n-_[_.length-3]),p||(i=n=0),_.push(y,b,h,f,i+=t[c+3]*1,n+=t[c+4]*1),c+=4;else if(d==="Q")y=i+(h-i)*s,b=n+(f-n)*s,p||(i=n=0),i+=t[c+3]*1,n+=t[c+4]*1,_.push(y,b,i+(h-i)*s,n+(f-n)*s,i,n),c+=4;else if(d==="T")y=i-_[_.length-4],b=n-_[_.length-3],_.push(i+y,n+b,h+(i+y*1.5-h)*s,f+(n+b*1.5-f)*s,i=h,n=f),c+=2;else if(d==="H")x(i,n,i=h,n),c+=1;else if(d==="V")x(i,n,i,n=h+(p?n-i:0)),c+=1;else if(d==="L"||d==="Z")d==="Z"&&(h=m,f=g,_.closed=!0),(d==="L"||Nl(i-h)>.5||Nl(n-f)>.5)&&(x(i,n,h,f),d==="L"&&(c+=2)),i=h,n=f;else if(d==="A"){if(M=t[c+4],E=t[c+5],y=t[c+6],b=t[c+7],u=7,M.length>1&&(M.length<3?(b=y,y=E,u--):(b=E,y=M.substr(2),u-=2),E=M.charAt(1),M=M.charAt(0)),v=RM(i,n,+t[c+1],+t[c+2],+t[c+3],+M,+E,(p?i:0)+y*1,(p?n:0)+b*1),c+=u,v)for(u=0;u<v.length;u++)_.push(v[u]);i=_[_.length-2],n=_[_.length-1]}else console.log(l);return c=_.length,c<6?(e.pop(),c=0):X_(_),e.totalPoints=a+c,e}function $_(r){DM(r[0])&&(r=[r]);var t="",e=r.length,i,n,s,o;for(n=0;n<e;n++){for(o=r[n],t+="M"+gs(o[0])+","+gs(o[1])+" C",i=o.length,s=2;s<i;s++)t+=gs(o[s++])+","+gs(o[s++])+" "+gs(o[s++])+","+gs(o[s++])+" "+gs(o[s++])+","+gs(o[s])+" ";o.closed&&(t+="z")}return t}var vn,J_,K_=function(){return vn||typeof window<"u"&&(vn=window.gsap)&&vn.registerPlugin&&vn},Z_=function(){vn=K_(),vn?(vn.registerEase("_CE",so.create),J_=1):console.warn("Please gsap.registerPlugin(CustomEase)")},PM=1e20,Nu=function(t){return~~(t*1e3+(t<0?-.5:.5))/1e3},IM=1,FM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,LM=/[cLlsSaAhHvVtTqQ]/g,NM=function(t){var e=t.length,i=PM,n;for(n=1;n<e;n+=6)+t[n]<i&&(i=+t[n]);return i},UM=function(t,e,i){!i&&i!==0&&(i=Math.max(+t[t.length-1],+t[1]));var n=+t[0]*-1,s=-i,o=t.length,a=1/(+t[o-2]+n),l=-e||(Math.abs(+t[o-1]-+t[1])<.01*(+t[o-2]-+t[0])?NM(t)+s:+t[o-1]+s),c;for(l?l=1/l:l=-a,c=0;c<o;c+=2)t[c]=(+t[c]+n)*a,t[c+1]=(+t[c+1]+s)*l},OM=function r(t,e,i,n,s,o,a,l,c,u,h){var f=(t+i)/2,d=(e+n)/2,p=(i+s)/2,_=(n+o)/2,m=(s+a)/2,g=(o+l)/2,y=(f+p)/2,b=(d+_)/2,v=(p+m)/2,S=(_+g)/2,M=(y+v)/2,E=(b+S)/2,x=a-t,w=l-e,A=Math.abs((i-a)*w-(n-l)*x),R=Math.abs((s-a)*w-(o-l)*x),D;return u||(u=[{x:t,y:e},{x:a,y:l}],h=1),u.splice(h||u.length-1,0,{x:M,y:E}),(A+R)*(A+R)>c*(x*x+w*w)&&(D=u.length,r(t,e,f,d,y,b,M,E,c,u,h),r(M,E,v,S,m,g,a,l,c,u,h+1+(u.length-D))),u},so=(function(){function r(e,i,n){J_||Z_(),this.id=e,IM&&this.setData(i,n)}var t=r.prototype;return t.setData=function(i,n){n=n||{},i=i||"0,0,1,1";var s=i.match(FM),o=1,a=[],l=[],c=n.precision||1,u=c<=1,h,f,d,p,_,m,g,y,b;if(this.data=i,(LM.test(i)||~i.indexOf("M")&&i.indexOf("C")<0)&&(s=q_(i)[0]),h=s.length,h===4)s.unshift(0,0),s.push(1,1),h=8;else if((h-2)%6)throw"Invalid CustomEase";for((+s[0]!=0||+s[h-2]!=1)&&UM(s,n.height,n.originY),this.segment=s,p=2;p<h;p+=6)f={x:+s[p-2],y:+s[p-1]},d={x:+s[p+4],y:+s[p+5]},a.push(f,d),OM(f.x,f.y,+s[p],+s[p+1],+s[p+2],+s[p+3],d.x,d.y,1/(c*2e5),a,a.length-1);for(h=a.length,p=0;p<h;p++)g=a[p],y=a[p-1]||g,(g.x>y.x||y.y!==g.y&&y.x===g.x||g===y)&&g.x<=1?(y.cx=g.x-y.x,y.cy=g.y-y.y,y.n=g,y.nx=g.x,u&&p>1&&Math.abs(y.cy/y.cx-a[p-2].cy/a[p-2].cx)>2&&(u=0),y.cx<o&&(y.cx?o=y.cx:(y.cx=.001,p===h-1&&(y.x-=.001,o=Math.min(o,.001),u=0)))):(a.splice(p--,1),h--);if(h=1/o+1|0,_=1/h,m=0,g=a[0],u){for(p=0;p<h;p++)b=p*_,g.nx<b&&(g=a[++m]),f=g.y+(b-g.x)/g.cx*g.cy,l[p]={x:b,cx:_,y:f,cy:0,nx:9},p&&(l[p-1].cy=f-l[p-1].y);m=a[a.length-1],l[h-1].cy=m.y-f,l[h-1].cx=m.x-l[l.length-1].x}else{for(p=0;p<h;p++)g.nx<p*_&&(g=a[++m]),l[p]=g;m<a.length-1&&(l[p-1]=a[a.length-2])}return this.ease=function(v){var S=l[v*h|0]||l[h-1];return S.nx<v&&(S=S.n),S.y+(v-S.x)/S.cx*S.cy},this.ease.custom=this,this.id&&vn&&vn.registerEase(this.id,this.ease),this},t.getSVGData=function(i){return r.getSVGData(this,i)},r.create=function(i,n,s){return new r(i,n,s).ease},r.register=function(i){vn=i,Z_()},r.get=function(i){return vn.parseEase(i)},r.getSVGData=function(i,n){n=n||{};var s=n.width||100,o=n.height||100,a=n.x||0,l=(n.y||0)+o,c=vn.utils.toArray(n.path)[0],u,h,f,d,p,_,m,g,y,b;if(n.invert&&(o=-o,l=0),typeof i=="string"&&(i=vn.parseEase(i)),i.custom&&(i=i.custom),i instanceof r)u=$_(Y_([i.segment.slice(0)],s,0,0,-o,a,l));else{for(u=[a,l],m=Math.max(5,(n.precision||1)*200),d=1/m,m+=2,g=5/m,y=Nu(a+d*s),b=Nu(l+i(d)*-o),h=(b-l)/(y-a),f=2;f<m;f++)p=Nu(a+f*d*s),_=Nu(l+i(f*d)*-o),(Math.abs((_-b)/(p-y)-h)>g||f===m-1)&&(u.push(y,b),h=(_-b)/(p-y)),y=p,b=_;u="M"+u.join(",")}return c&&c.setAttribute("d",u),u},r})();so.version="3.15.0";so.headless=!0;K_()&&vn.registerPlugin(so);var zr,oo,Vp,Bu,Ul,Uu,Ou,Ol,tr="transform",Hp=tr+"Origin",j_,ku=function(t){var e=t.ownerDocument||t;for(!(tr in t.style)&&("msTransform"in t.style)&&(tr="msTransform",Hp=tr+"Origin");e.parentNode&&(e=e.parentNode););if(oo=window,Ou=new _s,e){zr=e,Vp=e.documentElement,Bu=e.body,Ol=zr.createElementNS("http://www.w3.org/2000/svg","g"),Ol.style.transform="none";var i=e.createElement("div"),n=e.createElement("div"),s=e&&(e.body||e.firstElementChild);s&&s.appendChild&&(s.appendChild(i),i.appendChild(n),i.style.position="static",i.style.transform="translate3d(0,0,1px)",j_=n.offsetParent!==i,s.removeChild(i))}return e},BM=function(t){for(var e,i;t&&t!==Bu;)i=t._gsap,i&&i.uncache&&i.get(t,"x"),i&&!i.scaleX&&!i.scaleY&&i.renderTransform&&(i.scaleX=i.scaleY=1e-4,i.renderTransform(1,i),e?e.push(i):e=[i]),t=t.parentNode;return e},Q_=[],tx=[],zu=function(){return oo.pageYOffset||zr.scrollTop||Vp.scrollTop||Bu.scrollTop||0},Hu=function(){return oo.pageXOffset||zr.scrollLeft||Vp.scrollLeft||Bu.scrollLeft||0},Gp=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},kM=function r(t){if(oo.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return r(t)},kp=function r(t,e){if(t.parentNode&&(zr||ku(t))){var i=Gp(t),n=i?i.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=i?e?"rect":"g":"div",o=e!==2?0:100,a=e===3?100:0,l={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},c=zr.createElementNS?zr.createElementNS(n.replace(/^https/,"http"),s):zr.createElement(s);return e&&(i?(Uu||(Uu=r(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),c.setAttribute("fill","transparent"),Uu.appendChild(c)):(Ul||(Ul=r(t),Object.assign(Ul.style,l)),Object.assign(c.style,l,{width:"0.1px",height:"0.1px",top:a+"px",left:o+"px"}),Ul.appendChild(c))),c}throw"Need document and parent."},zM=function(t){for(var e=new _s,i=0;i<t.numberOfItems;i++)e.multiply(t.getItem(i).matrix);return e},Wp=function(t){var e=t.getCTM(),i;return e||(i=t.style[tr],t.style[tr]="none",t.appendChild(Ol),e=Ol.getCTM(),t.removeChild(Ol),i?t.style[tr]=i:t.style.removeProperty(tr.replace(/([A-Z])/g,"-$1").toLowerCase())),e||Ou.clone()},HM=function(t,e){var i=Gp(t),n=t===i,s=i?Q_:tx,o=t.parentNode,a=o&&!i&&o.shadowRoot&&o.shadowRoot.appendChild?o.shadowRoot:o,l,c,u,h,f,d;if(t===oo)return t;if(s.length||s.push(kp(t,1),kp(t,2),kp(t,3)),l=i?Uu:Ul,i)n?(u=Wp(t),h=-u.e/u.a,f=-u.f/u.d,c=Ou):t.getBBox?(u=t.getBBox(),c=t.transform?t.transform.baseVal:{},c=c.numberOfItems?c.numberOfItems>1?zM(c):c.getItem(0).matrix:Ou,h=c.a*u.x+c.c*u.y,f=c.b*u.x+c.d*u.y):(c=new _s,h=f=0),e&&t.tagName.toLowerCase()==="g"&&(h=f=0),(n||!t.getBoundingClientRect().width?i:o).appendChild(l),l.setAttribute("transform","matrix("+c.a+","+c.b+","+c.c+","+c.d+","+(c.e+h)+","+(c.f+f)+")");else{if(h=f=0,j_)for(c=t.offsetParent,u=t;u&&(u=u.parentNode)&&u!==c&&u.parentNode;)(oo.getComputedStyle(u)[tr]+"").length>4&&(h=u.offsetLeft,f=u.offsetTop,u=0);if(d=oo.getComputedStyle(t),d.position!=="absolute"&&d.position!=="fixed")for(c=t.offsetParent;o&&o!==c;)h+=o.scrollLeft||0,f+=o.scrollTop||0,o=o.parentNode;u=l.style,u.top=t.offsetTop-f+"px",u.left=t.offsetLeft-h+"px",u[tr]=d[tr],u[Hp]=d[Hp],u.position=d.position==="fixed"?"fixed":"absolute",a.appendChild(l)}return l},zp=function(t,e,i,n,s,o,a){return t.a=e,t.b=i,t.c=n,t.d=s,t.e=o,t.f=a,t},_s=(function(){function r(e,i,n,s,o,a){e===void 0&&(e=1),i===void 0&&(i=0),n===void 0&&(n=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),zp(this,e,i,n,s,o,a)}var t=r.prototype;return t.inverse=function(){var i=this.a,n=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=i*o-n*s||1e-10;return zp(this,o/c,-n/c,-s/c,i/c,(s*l-o*a)/c,-(i*l-n*a)/c)},t.multiply=function(i){var n=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,u=i.a,h=i.c,f=i.b,d=i.d,p=i.e,_=i.f;return zp(this,u*n+f*o,u*s+f*a,h*n+d*o,h*s+d*a,l+p*n+_*o,c+p*s+_*a)},t.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(i){var n=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return n===i.a&&s===i.b&&o===i.c&&a===i.d&&l===i.e&&c===i.f},t.apply=function(i,n){n===void 0&&(n={});var s=i.x,o=i.y,a=this.a,l=this.b,c=this.c,u=this.d,h=this.e,f=this.f;return n.x=s*a+o*c+h||0,n.y=s*l+o*u+f||0,n},r})();function er(r,t,e,i){if(!r||!r.parentNode||(zr||ku(r)).documentElement===r)return new _s;var n=BM(r),s=Gp(r),o=s?Q_:tx,a=HM(r,e),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),u=o[2].getBoundingClientRect(),h=a.parentNode,f=!i&&kM(r),d=new _s((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(f?0:Hu()),l.top+(f?0:zu()));if(h.removeChild(a),n)for(l=n.length;l--;)c=n[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return t?d.inverse():d}var VM=1,ra,Fi,Xe,Bl,xs,Hr,Kp,ex=function(t,e){return t.actions.forEach(function(i){return i.vars[e]&&i.vars[e](i)})},jp={},ix=180/Math.PI,GM=Math.PI/180,Wu={},nx={},qu={},tm=function(t){return typeof t=="string"?t.split(" ").join("").split(","):t},WM=tm("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),$u=tm("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),kl=function(t){return ra(t)[0]||console.warn("Element not found:",t)},ea=function(t){return Math.round(t*1e4)/1e4||0},Xp=function(t,e,i){return t.forEach(function(n){return n.classList[i](e)})},rx={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},ux={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},hx=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},ia=function(t,e){var i={},n;for(n in t)e[n]||(i[n]=t[n]);return i},em={},fx=function(t){var e=em[t]=tm(t);return qu[t]=e.concat($u),e},XM=function(t){var e=t._gsap||Fi.core.getCache(t);return e.gmCache===Fi.ticker.frame?e.gMatrix:(e.gmCache=Fi.ticker.frame,e.gMatrix=er(t,!0,!1,!0))},YM=function r(t,e,i){i===void 0&&(i=0);for(var n=t.parentNode,s=1e3*Math.pow(10,i)*(e?-1:1),o=e?-s*900:0;t;)o+=s,t=t.previousSibling;return n?o+r(n,e,i+1):o},Xu=function(t,e,i){return t.forEach(function(n){return n.d=YM(i?n.element:n.t,e)}),t.sort(function(n,s){return n.d-s.d}),t},zl=function(t,e){for(var i=t.element.style,n=t.css=t.css||[],s=e.length,o,a;s--;)o=e[s],a=i[o]||i.getPropertyValue(o),n.push(a?o:nx[o]||(nx[o]=hx(o)),a);return i},Yu=function(t){var e=t.css,i=t.element.style,n=0;for(t.cache.uncache=1;n<e.length;n+=2)e[n+1]?i[e[n]]=e[n+1]:i.removeProperty(e[n]);!e[e.indexOf("transform")+1]&&i.translate&&(i.removeProperty("translate"),i.removeProperty("scale"),i.removeProperty("rotate"))},sx=function(t,e){t.forEach(function(i){return i.a.cache.uncache=1}),e||t.finalStates.forEach(Yu)},Yp="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),im=function(t,e,i){var n=t.element,s=t.width,o=t.height,a=t.uncache,l=t.getProp,c=n.style,u=4,h,f,d;if(typeof e!="object"&&(e=t),Xe&&i!==1)return Xe._abs.push({t:n,b:t,a:t,sd:0}),Xe._final.push(function(){return(t.cache.uncache=1)&&Yu(t)}),n;for(f=l("display")==="none",(!t.isVisible||f)&&(f&&(zl(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=s=t.width||e.width,t.height=o=t.height||e.height),zl(t,Yp),d=window.getComputedStyle(n);u--;)c[Yp[u]]=d[Yp[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=o+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),a)h=new ao(n);else if(h=ia(t,Wu),h.position="absolute",t.simple){var p=n.getBoundingClientRect();h.matrix=new _s(1,0,0,1,p.left+Hu(),p.top+zu())}else h.matrix=er(n,!1,!1,!0);return h=na(h,t,!0),t.x=Hr(h.x,.01),t.y=Hr(h.y,.01),n},ox=function(t,e){return e!==!0&&(e=ra(e),t=t.filter(function(i){if(e.indexOf((i.sd<0?i.b:i.a).element)!==-1)return!0;i.t._gsap.renderTransform(1),i.b.isVisible&&(i.t.style.width=i.b.width+"px",i.t.style.height=i.b.height+"px")})),t},dx=function(t){return Xu(t,!0).forEach(function(e){return(e.a.isVisible||e.b.isVisible)&&im(e.sd<0?e.b:e.a,e.b,1)})},qM=function(t,e){return e&&t.idLookup[Qp(e).id]||t.elementStates[0]},Qp=function(t,e,i,n){return t instanceof ao?t:t instanceof ir?qM(t,n):new ao(typeof t=="string"?kl(t)||console.warn(t+" not found"):t,e,i)},$M=function(t,e){for(var i=Fi.getProperty(t.element,null,"native"),n=t.props={},s=e.length;s--;)n[e[s]]=(i(e[s])+"").trim();return n.zIndex&&(n.zIndex=parseFloat(n.zIndex)||0),t},px=function(t,e){var i=t.style||t,n;for(n in e)i[n]=e[n]},ZM=function(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+VM++),e},mx=function(t){return t.map(function(e){return e.element})},ax=function(t,e,i){return t&&e.length&&i.add(t(mx(e),i,new ir(e,0,!0)),0)},na=function(t,e,i,n,s,o){var a=t.element,l=t.cache,c=t.parent,u=t.x,h=t.y,f=e.width,d=e.height,p=e.scaleX,_=e.scaleY,m=e.rotation,g=e.bounds,y=o&&Kp&&Kp(a,"transform,width,height"),b=t,v=e.matrix,S=v.e,M=v.f,E=t.bounds.width!==g.width||t.bounds.height!==g.height||t.scaleX!==p||t.scaleY!==_||t.rotation!==m,x=!E&&t.simple&&e.simple&&!s,w,A,R,D,N,I,F;return x||!c?(p=_=1,m=w=0):(N=XM(c),I=N.clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),m=ea(Math.atan2(I.b,I.a)*ix),w=ea(Math.atan2(I.c,I.d)*ix+m)%360,p=Math.sqrt(Math.pow(I.a,2)+Math.pow(I.b,2)),_=Math.sqrt(Math.pow(I.c,2)+Math.pow(I.d,2))*Math.cos(w*GM),s&&(s=ra(s)[0],D=Fi.getProperty(s),F=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),b={scaleX:D("scaleX"),scaleY:D("scaleY"),width:F?F.width:Math.ceil(parseFloat(D("width","px"))),height:F?F.height:parseFloat(D("height","px"))}),l.rotation=m+"deg",l.skewX=w+"deg"),i?(p*=f===b.width||!b.width?1:f/b.width,_*=d===b.height||!b.height?1:d/b.height,l.scaleX=p,l.scaleY=_):(f=Hr(f*p/b.scaleX,0),d=Hr(d*_/b.scaleY,0),a.style.width=f+"px",a.style.height=d+"px"),n&&px(a,e.props),x||!c?(u+=S-t.matrix.e,h+=M-t.matrix.f):E||c!==e.parent?(l.x=u+"px",l.y=h+"px",l.renderTransform(1,l),I=er(s||a,!1,!1,!0),A=N.apply({x:I.e,y:I.f}),R=N.apply({x:S,y:M}),u+=R.x-A.x,h+=R.y-A.y):(N.e=N.f=0,R=N.apply({x:S-t.matrix.e,y:M-t.matrix.f}),u+=R.x,h+=R.y),u=Hr(u,.02),h=Hr(h,.02),o&&!(o instanceof ao)?y&&y.revert():(l.x=u+"px",l.y=h+"px",l.renderTransform(1,l)),o&&(o.x=u,o.y=h,o.rotation=m,o.skewX=w,i?(o.scaleX=p,o.scaleY=_):(o.width=f,o.height=d)),o||l},qp=function(t,e){return t instanceof ir?t:new ir(t,e)},gx=function(t,e,i){var n=t.idLookup[i],s=t.alt[i];return s.isVisible&&(!(e.getElementState(s.element)||s).isVisible||!n.isVisible)?s:n},$p=[],Zp="width,height,overflowX,overflowY".split(","),Vu,lx=function(t){if(t!==Vu){var e=xs.style,i=xs.clientWidth===window.outerWidth,n=xs.clientHeight===window.outerHeight,s=4;if(t&&(i||n)){for(;s--;)$p[s]=e[Zp[s]];i&&(e.width=xs.clientWidth+"px",e.overflowY="hidden"),n&&(e.height=xs.clientHeight+"px",e.overflowX="hidden"),Vu=t}else if(Vu){for(;s--;)$p[s]?e[Zp[s]]=$p[s]:e.removeProperty(hx(Zp[s]));Vu=t}}},cx=function(t,e){for(var i=0;i<t.length;i+=3)Fi.set(t[i],{clearProps:!0}),t[i].setAttribute("style",t[i+e]),t[i]._gsap.gmCache=-1},Jp=function(t,e,i,n){t instanceof ir&&e instanceof ir||console.warn("Not a valid state object."),i=i||{};var s=i,o=s.clearProps,a=s.onEnter,l=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,h=s.custom,f=s.delay,d=s.paused,p=s.repeat,_=s.repeatDelay,m=s.yoyo,g=s.toggleClass,y=s.nested,b=s.zIndex,v=s.scale,S=s.fade,M=s.stagger,E=s.spin,x=s.prune,w=("props"in i?i:t).props,A=ia(i,rx),R=Fi.timeline({delay:f,paused:d,repeat:p,repeatDelay:_,yoyo:m,data:"isFlip"}),D=A,N=[],I=[],F=[],H=[],B=E===!0?1:E||0,Y=typeof E=="function"?E:function(){return B},W=t.interrupted||e.interrupted,P=R[n!==1?"to":"from"],O,tt,rt,gt,ht,vt,$,j,pt,Dt,dt,Vt,Tt,At;for(tt in e.idLookup)dt=e.alt[tt]?gx(e,t,tt):e.idLookup[tt],ht=dt.element,Dt=t.idLookup[tt],t.alt[tt]&&ht===Dt.element&&(t.alt[tt].isVisible||!dt.isVisible)&&(Dt=t.alt[tt]),Dt?(vt={t:ht,b:Dt,a:dt,sd:Dt.element===ht?0:dt.isVisible?1:-1},F.push(vt),vt.sd&&(vt.sd<0&&(vt.b=dt,vt.a=Dt),W&&zl(vt.b,w?qu[w]:$u),S&&F.push(vt.swap={t:Dt.element,b:vt.b,a:vt.a,sd:-vt.sd,swap:vt})),ht._flip=Dt.element._flip=Xe?Xe.timeline:R):dt.isVisible&&(F.push({t:ht,b:ia(dt,{isVisible:1}),a:dt,sd:0,entering:1}),ht._flip=Xe?Xe.timeline:R);if(w&&(em[w]||fx(w)).forEach(function(G){return A[G]=function(Kt){return F[Kt].a.props[G]}}),F.finalStates=pt=[],Vt=function(){Xu(F),lx(!0);var Kt=[];for(gt=0;gt<F.length;gt++)vt=F[gt],Tt=vt.a,At=vt.b,x&&!Tt.isDifferent(At)&&!vt.entering?F.splice(gt--,1):(ht=vt.t,y&&!(vt.sd<0)&&gt&&(Tt=vt.a=Tt.clone({matrix:er(ht,!1,!1,!0)})),At.isVisible&&Tt.isVisible?(vt.sd<0?(y&&cx(Kt,1),$=new ao(ht,w,t.simple),na($,Tt,v,0,0,$),$.matrix=er(ht,!1,!1,!0),$.bounds=ht.getBoundingClientRect(),$.css=vt.b.css,vt.a=Tt=$,S&&(ht.style.opacity=W?At.opacity:Tt.opacity),M&&H.push(ht),y&&(cx(Kt,2),Kt.push(ht,ht.getAttribute("style")))):vt.sd>0&&S&&(ht.style.opacity=W?Tt.opacity-At.opacity:"0"),na(Tt,At,v,w),y&&vt.sd<0&&Kt.push(ht.getAttribute("style"))):At.isVisible!==Tt.isVisible&&(At.isVisible?Tt.isVisible||(At.css=Tt.css,I.push(At),F.splice(gt--,1),c&&y&&na(Tt,At,v,w)):(Tt.isVisible&&N.push(Tt),F.splice(gt--,1))),v||(ht.style.maxWidth=Math.max(Tt.width,At.width)+"px",ht.style.maxHeight=Math.max(Tt.height,At.height)+"px",ht.style.minWidth=Math.min(Tt.width,At.width)+"px",ht.style.minHeight=Math.min(Tt.height,At.height)+"px"),y&&g&&ht.classList.add(g)),pt.push(Tt);var he;if(g&&(he=pt.map(function(It){return It.element}),y&&he.forEach(function(It){return It.classList.remove(g)})),lx(!1),v?(A.scaleX=function(It){return F[It].a.scaleX},A.scaleY=function(It){return F[It].a.scaleY}):(A.width=function(It){return F[It].a.width+"px"},A.height=function(It){return F[It].a.height+"px"},A.autoRound=i.autoRound||!1),A.x=function(It){return F[It].a.x+"px"},A.y=function(It){return F[It].a.y+"px"},A.rotation=function(It){return F[It].a.rotation+(E?Y(It,j[It],j)*360:0)},A.skewX=function(It){return F[It].a.skewX},j=F.map(function(It){return It.t}),(b||b===0)&&(A.modifiers={zIndex:function(){return b}},A.zIndex=b,A.immediateRender=i.immediateRender!==!1),S&&(A.opacity=function(It){return F[It].sd<0?0:F[It].sd>0?F[It].a.opacity:"+=0"}),H.length){M=Fi.utils.distribute(M);var De=j.slice(H.length);A.stagger=function(It,V){return M(~H.indexOf(V)?j.indexOf(F[It].swap.t):It,V,De)}}if(WM.forEach(function(It){return i[It]&&R.eventCallback(It,i[It],i[It+"Params"])}),h&&j.length){D=ia(A,rx),"scale"in h&&(h.scaleX=h.scaleY=h.scale,delete h.scale);for(tt in h)O=ia(h[tt],ux),O[tt]=A[tt],!("duration"in O)&&"duration"in A&&(O.duration=A.duration),O.stagger=A.stagger,P.call(R,j,O,0),delete D[tt]}(j.length||I.length||N.length)&&(g&&R.add(function(){return Xp(he,g,R._zTime<0?"remove":"add")},0)&&!d&&Xp(he,g,"add"),j.length&&P.call(R,j,D,0)),ax(a,N,R),ax(l,I,R);var Zt=Xe&&Xe.timeline;Zt&&(Zt.add(R,0),Xe._final.push(function(){return sx(F,!o)})),rt=R.duration(),R.call(function(){var It=R.time()>=rt;It&&!Zt&&sx(F,!o),g&&Xp(he,g,It?"remove":"add")})},u&&(c=F.filter(function(G){return!G.sd&&!G.a.isVisible&&G.b.isVisible}).map(function(G){return G.a.element})),Xe){var Qt;c&&(Qt=Xe._abs).push.apply(Qt,ox(F,c)),Xe._run.push(Vt)}else c&&dx(ox(F,c)),Vt();var ne=Xe?Xe.timeline:R;return ne.revert=function(){return nm(ne,1,1)},ne},JM=function r(t){t.vars.onInterrupt&&t.vars.onInterrupt.apply(t,t.vars.onInterruptParams||[]),t.getChildren(!0,!1,!0).forEach(r)},nm=function(t,e,i){if(t&&t.progress()<1&&(!t.paused()||i))return e&&(JM(t),e<2&&t.progress(1),t.kill()),!0},Gu=function(t){for(var e=t.idLookup={},i=t.alt={},n=t.elementStates,s=n.length,o;s--;)o=n[s],e[o.id]?i[o.id]=o:e[o.id]=o},ir=(function(){function r(e,i,n){if(this.props=i&&i.props,this.simple=!!(i&&i.simple),n)this.targets=mx(e),this.elementStates=e,Gu(this);else{this.targets=ra(e);var s=i&&(i.kill===!1||i.batch&&!i.kill);Xe&&!s&&Xe._kill.push(this),this.update(s||!!Xe)}}var t=r.prototype;return t.update=function(i){var n=this;return this.elementStates=this.targets.map(function(s){return new ao(s,n.props,n.simple)}),Gu(this),this.interrupt(i),this.recordInlineStyles(),this},t.clear=function(){return this.targets.length=this.elementStates.length=0,Gu(this),this},t.fit=function(i,n,s){for(var o=Xu(this.elementStates.slice(0),!1,!0),a=(i||this).idLookup,l=0,c,u;l<o.length;l++)c=o[l],s&&(c.matrix=er(c.element,!1,!1,!0)),u=a[c.id],u&&na(c,u,n,!0,0,c),c.matrix=er(c.element,!1,!1,!0);return this},t.getProperty=function(i,n){var s=this.getElementState(i)||Wu;return(n in s?s:s.props||Wu)[n]},t.add=function(i){for(var n=i.targets.length,s=this.idLookup,o=this.alt,a,l,c;n--;)l=i.elementStates[n],c=s[l.id],c&&(l.element===c.element||o[l.id]&&o[l.id].element===l.element)?(a=this.elementStates.indexOf(l.element===c.element?c:o[l.id]),this.targets.splice(a,1,i.targets[n]),this.elementStates.splice(a,1,l)):(this.targets.push(i.targets[n]),this.elementStates.push(l));return i.interrupted&&(this.interrupted=!0),i.simple||(this.simple=!1),Gu(this),this},t.compare=function(i){var n=i.idLookup,s=this.idLookup,o=[],a=[],l=[],c=[],u=[],h=i.alt,f=this.alt,d=function(x,w,A){return(x.isVisible!==w.isVisible?x.isVisible?l:c:x.isVisible?a:o).push(A)&&u.push(A)},p=function(x,w,A){return u.indexOf(A)<0&&d(x,w,A)},_,m,g,y,b,v,S,M;for(g in n)b=h[g],v=f[g],_=b?gx(i,this,g):n[g],y=_.element,m=s[g],v?(M=m.isVisible||!v.isVisible&&y===m.element?m:v,S=b&&!_.isVisible&&!b.isVisible&&M.element===b.element?b:_,S.isVisible&&M.isVisible&&S.element!==M.element?((S.isDifferent(M)?a:o).push(S.element,M.element),u.push(S.element,M.element)):d(S,M,S.element),b&&S.element===b.element&&(b=n[g]),p(S.element!==m.element&&b?b:S,m,m.element),p(b&&b.element===v.element?b:S,v,v.element),b&&p(b,v.element===b.element?v:m,b.element)):(m?m.isDifferent(_)?d(_,m,y):o.push(y):l.push(y),b&&p(b,m,b.element));for(g in s)n[g]||(c.push(s[g].element),f[g]&&c.push(f[g].element));return{changed:a,unchanged:o,enter:l,leave:c}},t.recordInlineStyles=function(){for(var i=qu[this.props]||$u,n=this.elementStates.length;n--;)zl(this.elementStates[n],i)},t.interrupt=function(i){var n=this,s=[];this.targets.forEach(function(o){var a=o._flip,l=nm(a,i?0:1);i&&l&&s.indexOf(a)<0&&a.add(function(){return n.updateVisibility()}),l&&s.push(a)}),!i&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},t.updateVisibility=function(){this.elementStates.forEach(function(i){var n=i.element.getBoundingClientRect();i.isVisible=!!(n.width||n.height||n.top||n.left),i.uncache=1})},t.getElementState=function(i){return this.elementStates[this.targets.indexOf(kl(i))]},t.makeAbsolute=function(){return Xu(this.elementStates.slice(0),!0,!0).map(im)},r})(),ao=(function(){function r(e,i,n){e instanceof r?Object.assign(this,e,i||{}):(this.element=e,this.update(i,n))}var t=r.prototype;return t.isDifferent=function(i){var n=this.bounds,s=i.bounds;return n.top!==s.top||n.left!==s.left||n.width!==s.width||n.height!==s.height||!this.matrix.equals(i.matrix)||this.opacity!==i.opacity||this.props&&i.props&&JSON.stringify(this.props)!==JSON.stringify(i.props)},t.clone=function(i){return new r(this,i)},t.update=function(i,n){var s=this,o=s.element,a=Fi.getProperty(o),l=Fi.core.getCache(o),c=o.getBoundingClientRect(),u=o.getBBox&&typeof o.getBBox=="function"&&o.nodeName.toLowerCase()!=="svg"&&o.getBBox(),h=n?new _s(1,0,0,1,c.left+Hu(),c.top+zu()):er(o,!1,!1,!0);l.uncache=1,s.getProp=a,s.element=o,s.id=ZM(o),s.matrix=h,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=a("display"),s.position=a("position"),s.parent=o.parentNode,s.x=a("x","px"),s.y=a("y","px"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=a("rotation"),s.skewX=a("skewX"),s.opacity=a("opacity"),s.width=u?u.width:Hr(a("width","px"),.04),s.height=u?u.height:Hr(a("height","px"),.04),i&&$M(s,em[i]||fx(i)),s.ctm=o.getCTM&&o.nodeName.toLowerCase()==="svg"&&Wp(o).inverse(),s.simple=n||ea(h.a)===1&&!ea(h.b)&&!ea(h.c)&&ea(h.d)===1,s.uncache=0},r})(),KM=(function(){function r(e,i){this.vars=e,this.batch=i,this.states=[],this.timeline=i.timeline}var t=r.prototype;return t.getStateById=function(i){for(var n=this.states.length;n--;)if(this.states[n].idLookup[i])return this.states[n]},t.kill=function(){this.batch.remove(this)},r})(),jM=(function(){function r(e){this.id=e,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new ir,this.timeline=Fi.timeline()}var t=r.prototype;return t.add=function(i){var n=this.actions.filter(function(s){return s.vars===i});return n.length?n[0]:(n=new KM(typeof i=="function"?{animate:i}:i,this),this.actions.push(n),n)},t.remove=function(i){var n=this.actions.indexOf(i);return n>=0&&this.actions.splice(n,1),this},t.getState=function(i){var n=this,s=Xe,o=Bl;return Xe=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(a){a.vars.getState&&(a.states.length=0,Bl=a,a.state=a.vars.getState(a)),i&&a.states.forEach(function(l){return n.state.add(l)})}),Bl=o,Xe=s,this.killConflicts(),this},t.animate=function(){var i=this,n=Xe,s=this.timeline,o=this.actions.length,a,l;for(Xe=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,h=c.vars.onLeave,f=c.targets,d,p;f&&f.length&&(u||h)&&(d=new ir,c.states.forEach(function(_){return d.add(_)}),p=d.compare(vs.getState(f)),p.enter.length&&u&&u(p.enter),p.leave.length&&h&&h(p.leave))}),dx(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),a=this._final.slice(0),s.add(function(){l<=s.time()&&(a.forEach(function(c){return c()}),ex(i,"onComplete"))}),Xe=n;o--;)this.actions[o].vars.once&&this.actions[o].kill();return ex(this,"onStart"),s.restart(),this},t.loadState=function(i){i||(i=function(){return 0});var n=[];return this.actions.forEach(function(s){if(s.vars.loadState){var o,a=function l(c){c&&(s.targets=c),o=n.indexOf(l),~o&&(n.splice(o,1),n.length||i())};n.push(a),s.vars.loadState(a)}}),n.length||i(),this},t.setState=function(){return this.actions.forEach(function(i){return i.targets=i.vars.setState&&i.vars.setState(i)}),this},t.killConflicts=function(i){return this.state.interrupt(i),this._kill.forEach(function(n){return n.interrupt(i)}),this},t.run=function(i,n){var s=this;return this!==Xe&&(i||this.getState(n),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},t.clear=function(i){this.state.clear(),i||(this.actions.length=0)},t.getStateById=function(i){for(var n=this.actions.length,s;n--;)if(s=this.actions[n].getStateById(i),s)return s;return this.state.idLookup[i]&&this.state},t.kill=function(){this._killed=1,this.clear(),delete jp[this.id]},r})(),vs=(function(){function r(){}return r.getState=function(e,i){var n=qp(e,i);return Bl&&Bl.states.push(n),i&&i.batch&&r.batch(i.batch).state.add(n),n},r.from=function(e,i){return i=i||{},"clearProps"in i||(i.clearProps=!0),Jp(e,qp(i.targets||e.targets,{props:i.props||e.props,simple:i.simple,kill:!!i.kill}),i,-1)},r.to=function(e,i){return Jp(e,qp(i.targets||e.targets,{props:i.props||e.props,simple:i.simple,kill:!!i.kill}),i,1)},r.fromTo=function(e,i,n){return Jp(e,i,n)},r.fit=function(e,i,n){var s=n?ia(n,ux):{},o=n||s,a=o.absolute,l=o.scale,c=o.getVars,u=o.props,h=o.runBackwards,f=o.onComplete,d=o.simple,p=n&&n.fitChild&&kl(n.fitChild),_=Qp(i,u,d,e),m=Qp(e,0,d,_),g=u?qu[u]:$u,y=Fi.context();return u&&px(s,_.props),zl(m,g),h&&("immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){Yu(m),f&&f.apply(this,arguments)}),a&&im(m,_),s=na(m,_,l||p,!s.duration&&u,p,s.duration||c?s:0),typeof n=="object"&&"zIndex"in n&&(s.zIndex=n.zIndex),y&&!c&&y.add(function(){return function(){return Yu(m)}}),c?s:s.duration?Fi.to(m.element,s):null},r.makeAbsolute=function(e,i){return(e instanceof ir?e:new ir(e,i)).makeAbsolute()},r.batch=function(e){return e||(e="default"),jp[e]||(jp[e]=new jM(e))},r.killFlipsOf=function(e,i){(e instanceof ir?e.targets:ra(e)).forEach(function(n){return n&&nm(n._flip,i!==!1?1:2)})},r.isFlipping=function(e){var i=r.getByTarget(e);return!!i&&i.isActive()},r.getByTarget=function(e){return(kl(e)||Wu)._flip},r.getElementState=function(e,i){return new ao(kl(e),i)},r.convertCoordinates=function(e,i,n){var s=er(i,!0,!0).multiply(er(e));return n?s.apply(n):s},r.register=function(e){if(xs=typeof document<"u"&&document.body,xs){Fi=e,ku(xs),ra=Fi.utils.toArray,Kp=Fi.core.getStyleSaver;var i=Fi.utils.snap(.1);Hr=function(s,o){return i(parseFloat(s)+o)}}},r})();vs.version="3.15.0";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(vs);var Hl,Zu,QM=function(){return Hl||typeof window<"u"&&(Hl=window.gsap)&&Hl.registerPlugin&&Hl},sa={version:"3.15.0",name:"text",init:function(t,e,i){typeof e!="object"&&(e={value:e});var n=t.nodeName.toUpperCase(),s=this,o=e,a=o.newClass,l=o.oldClass,c=o.preserveSpaces,u=o.rtl,h=s.delimiter=e.delimiter||"",f=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),d,p,_,m,g,y,b,v;if(s.svg=t.getBBox&&(n==="TEXT"||n==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(_=Pu(t,h,!1,c,s.svg),Zu||(Zu=document.createElement("div")),Zu.innerHTML=e.value,p=Pu(Zu,h,!1,c,s.svg),s.from=i._from,(s.from||u)&&!(u&&s.from)&&(n=_,_=p,p=n),s.hasClass=!!(a||l),s.newClass=u?l:a,s.oldClass=u?a:l,n=_.length-p.length,d=n<0?_:p,n<0&&(n=-n);--n>-1;)d.push(f);if(e.type==="diff"){for(m=0,g=[],y=[],b="",n=0;n<p.length;n++)v=p[n],v===_[n]?b+=v:(g[m]=b+v,y[m++]=b+_[n],b="");p=g,_=y,b&&(p.push(b),_.push(b))}e.speed&&i.duration(Math.min(.05/e.speed*d.length,e.maxDuration||9999)),s.rtl=u,s.original=_,s.text=p,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var i=e.text,n=e.hasClass,s=e.newClass,o=e.oldClass,a=e.delimiter,l=e.target,c=e.fillChar,u=e.original,h=e.rtl,f=i.length,d=(h?1-t:t)*f+.5|0,p,_,m;n&&t?(p=s&&d,_=o&&d!==f,m=(p?"<span class='"+s+"'>":"")+i.slice(0,d).join(a)+(p?"</span>":"")+(_?"<span class='"+o+"'>":"")+a+u.slice(d).join(a)+(_?"</span>":"")):m=i.slice(0,d).join(a)+a+u.slice(d).join(a),e.svg?l.textContent=m:l.innerHTML=c==="&nbsp;"&&~m.indexOf("  ")?m.split("  ").join("&nbsp;&nbsp;"):m}};sa.splitInnerHTML=Pu;sa.emojiSafeSplit=xn;sa.getText=ta;QM()&&Hl.registerPlugin(sa);var Vl=r=>window.matchMedia(r).matches,$t={reduced:Vl("(prefers-reduced-motion: reduce)"),fine:Vl("(pointer: fine)")&&Vl("(hover: hover)"),mobile:Vl("(max-width: 760px)")||Vl("(pointer: coarse)")&&Math.min(screen.width,screen.height)<820,artifact:document.documentElement.classList.contains("is-artifact")},vr=(r,t=0,e=1)=>Math.min(e,Math.max(t,r)),lo=(r,t,e)=>r+(t-r)*e,Yn=(r,t,e)=>{let i=vr((e-r)/(t-r));return i*i*(3-2*i)},_x=r=>new Promise(t=>setTimeout(t,r)),at=(r,t=document)=>t.querySelector(r),le=(r,t=document)=>Array.from(t.querySelectorAll(r));var xx="1.3.26";function Sx(r,t,e){return Math.max(r,Math.min(t,e))}function tb(r,t,e){return(1-e)*r+e*t}function eb(r,t,e,i){return tb(r,t,1-Math.exp(-e*i))}function ib(r,t){return(r%t+t)%t}var nb=class{constructor(){Gt(this,"isRunning",!1);Gt(this,"value",0);Gt(this,"from",0);Gt(this,"to",0);Gt(this,"currentTime",0);Gt(this,"lerp");Gt(this,"duration");Gt(this,"easing");Gt(this,"onUpdate")}advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Sx(0,this.currentTime/this.duration,1);t=e>=1;let i=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=eb(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:i,easing:n,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=i,this.easing=n,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function rb(r,t){let e;return function(...i){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,i)},t)}}var sb=class{constructor(r,t,{autoResize:e=!0,debounce:i=250}={}){Gt(this,"width",0);Gt(this,"height",0);Gt(this,"scrollHeight",0);Gt(this,"scrollWidth",0);Gt(this,"debouncedResize");Gt(this,"wrapperResizeObserver");Gt(this,"contentResizeObserver");Gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=rb(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Mx=class{constructor(){Gt(this,"events",{})}emit(r,...t){let e=this.events[r]||[];for(let i=0,n=e.length;i<n;i++)e[i]?.(...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},ob=100/6,ys={passive:!1};function vx(r,t){return r===1?ob:r===2?t:1}var ab=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Gt(this,"touchStart",{x:0,y:0});Gt(this,"lastDelta",{x:0,y:0});Gt(this,"window",{width:0,height:0});Gt(this,"emitter",new Mx);Gt(this,"onTouchStart",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Gt(this,"onTouchMove",r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,i=-(t-this.touchStart.x)*this.options.touchMultiplier,n=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:i,y:n},this.emitter.emit("scroll",{deltaX:i,deltaY:n,event:r})});Gt(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Gt(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:i}=r,n=vx(i,this.window.width),s=vx(i,this.window.height);t*=n,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ys),this.element.addEventListener("touchstart",this.onTouchStart,ys),this.element.addEventListener("touchmove",this.onTouchMove,ys),this.element.addEventListener("touchend",this.onTouchEnd,ys)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ys),this.element.removeEventListener("touchstart",this.onTouchStart,ys),this.element.removeEventListener("touchmove",this.onTouchMove,ys),this.element.removeEventListener("touchend",this.onTouchEnd,ys)}},yx=r=>Math.min(1,1.001-2**(-10*r)),bx=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:i=!0,syncTouch:n=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:m,virtualScroll:g,overscroll:y=!0,autoRaf:b=!1,anchors:v=!1,autoToggle:S=!1,allowNestedScroll:M=!1,__experimental__naiveDimensions:E=!1,naiveDimensions:x=E,stopInertiaOnNavigate:w=!1,respectReducedMotion:A=!0}={}){Gt(this,"_isScrolling",!1);Gt(this,"_isStopped",!1);Gt(this,"_isLocked",!1);Gt(this,"_preventNextNativeScrollEvent",!1);Gt(this,"_resetVelocityTimeout",null);Gt(this,"_rafId",null);Gt(this,"_isDraggingSelection",!1);Gt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Gt(this,"isTouching");Gt(this,"isIos");Gt(this,"time",0);Gt(this,"userData",{});Gt(this,"lastVelocity",0);Gt(this,"velocity",0);Gt(this,"direction",0);Gt(this,"options");Gt(this,"targetScroll");Gt(this,"animatedScroll");Gt(this,"animate",new nb);Gt(this,"emitter",new Mx);Gt(this,"dimensions");Gt(this,"virtualScroll");Gt(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gt(this,"onTransitionEnd",r=>{r.propertyName?.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Gt(this,"onClick",r=>{let t=r.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),e=new URL(window.location.href);if(this.options.anchors){let i=t.find(n=>e.host===n.host&&e.pathname===n.pathname&&n.hash);if(i){let n=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,n);return}}if(this.options.stopInertiaOnNavigate&&t.some(i=>e.host===i.host&&e.pathname!==i.pathname)){this.reset();return}});Gt(this,"onPointerDown",r=>{r.button===1&&this.reset()});Gt(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:i}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:i}),i.ctrlKey||i.lenisStopPropagation)return;let n=i.type.includes("touch"),s=i.type.includes("wheel");if(n&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&n&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||n&&p.hasAttribute?.("data-lenis-prevent-touch")||s&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&n||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=e;this.options.gestureOrientation==="both"?h=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(h=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();let f=n&&this.options.syncTouch,d=n&&i.type==="touchend";d&&(h=Math.sign(h)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gt(this,"raf",r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=xx,window.lenis||(window.lenis={}),window.lenis.version=xx,h==="horizontal"&&(window.lenis.horizontal=!0),n===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=yx:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:i,syncTouch:n,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:f,orientation:h,touchMultiplier:d,wheelMultiplier:p,autoResize:_,prevent:m,virtualScroll:g,overscroll:y,autoRaf:b,anchors:v,autoToggle:S,allowNestedScroll:M,naiveDimensions:x,stopInertiaOnNavigate:w,respectReducedMotion:A},this.dimensions=new sb(r,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new ab(e,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){let r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;let i=t.getRangeAt(0).getClientRects();if(i.length===0)return!1;let n=i[0],s=i[i.length-1],o=40,a=Math.hypot(e.clientX-n.left,e.clientY-n.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:i=!1,programmatic:n=!0,lerp:s=n?this.options.lerp:void 0,duration:o=n?this.options.duration:void 0,easing:a=n?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:h}={}){if(this.prefersReducedMotion&&(n?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let f=r,d=t;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let p=null;if(typeof f=="string"?(p=f.startsWith("#")?document.getElementById(f.slice(1)):document.querySelector(f),p||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&f?.nodeType&&(p=f),p){if(this.options.wrapper!==window){let v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}let _=p.getBoundingClientRect(),m=getComputedStyle(p),g=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),y=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(y.scrollPaddingLeft):Number.parseFloat(y.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(g)?0:g)-(Number.isNaN(b)?0:b)}}if(typeof f=="number"){if(f+=d,this.options.infinite){if(n){this.targetScroll=this.animatedScroll=this.scroll;let p=f-this.animatedScroll;p>this.limit/2?f-=this.limit:p<-this.limit/2&&(f+=this.limit)}}else f=Sx(0,f,this.limit);if(f===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=h??{},e){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}n||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=yx:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),n&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){let i=Date.now();r._lenis||(r._lenis={});let n=r._lenis,s,o,a,l,c,u,h,f,d,p;if(i-(n.time??0)>2e3){n.time=Date.now();let M=window.getComputedStyle(r);if(n.computedStyle=M,s=["auto","overlay","scroll"].includes(M.overflowX),o=["auto","overlay","scroll"].includes(M.overflowY),c=["auto"].includes(M.overscrollBehaviorX),u=["auto"].includes(M.overscrollBehaviorY),n.hasOverflowX=s,n.hasOverflowY=o,!(s||o))return!1;h=r.scrollWidth,f=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,a=h>d,l=f>p,n.isScrollableX=a,n.isScrollableY=l,n.scrollWidth=h,n.scrollHeight=f,n.clientWidth=d,n.clientHeight=p,n.hasOverscrollBehaviorX=c,n.hasOverscrollBehaviorY=u}else a=n.isScrollableX,l=n.isScrollableY,s=n.hasOverflowX,o=n.hasOverflowY,h=n.scrollWidth,f=n.scrollHeight,d=n.clientWidth,p=n.clientHeight,c=n.hasOverscrollBehaviorX,u=n.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,g,y,b,v,S;if(_==="horizontal")m=Math.round(r.scrollLeft),g=h-d,y=t,b=s,v=a,S=c;else if(_==="vertical")m=Math.round(r.scrollTop),g=f-p,y=e,b=o,v=l,S=u;else return!1;return!S&&(m>=g||m<=0)?!0:(y>0?m<g:m>0)&&b&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?ib(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(let r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};var Li=null,rm=new Set;function Ex(){$t.reduced||(Li=new bx({lerp:.09,smoothWheel:!0,wheelMultiplier:.9,touchMultiplier:1.4,syncTouch:!1}),Li.on("scroll",Bt.update));let r=performance.now(),t=/[?&]dtcap=1/.test(location.search)?1:.1;return wt.ticker.add(()=>{let e=performance.now(),i=Math.min((e-r)/1e3,t);r=e,Li&&Li.raf(e);for(let n of rm)n(i,e/1e3)}),wt.ticker.lagSmoothing(0),Li}function Tx(r){return rm.add(r),()=>rm.delete(r)}function Ax(){return Li?Li.velocity*60:0}function wx(r,t={}){if(Li)Li.scrollTo(r,{duration:1.8,easing:e=>1-Math.pow(1-e,4),...t});else{let e=typeof r=="number"?r:r.getBoundingClientRect().top+window.scrollY+(t.offset||0);window.scrollTo({top:e,behavior:$t.reduced?"auto":"smooth"})}}function Cx(r){document.addEventListener("click",t=>{let e=t.target.closest('a[href^="#"]');if(!e)return;let i=e.getAttribute("href");if(i==="#"||i.length<2)return;let n=document.querySelector(i);if(!n)return;t.preventDefault();let s=n.parentElement&&n.parentElement.classList.contains("pin-spacer")?n.parentElement:n;wx(i==="#top"?0:s),r?.(i)}),document.querySelectorAll("[data-to-top]").forEach(t=>t.addEventListener("click",()=>wx(0,{duration:2.6})))}var Ai={noseTop:[0,-.88,1.52],noseBot:[0,-1.04,1.44],lip:[0,-1.12,1.2],chin:[0,-1.18,.82],throat:[0,-1.02,-.1],bridge:[0,-.5,1.2],stop:[0,-.06,.86],fore:[0,.36,.66],crownF:[0,.58,.36],crownB:[0,.66,-.2],backT:[0,.4,-.7],backB:[0,-.32,-.76],noseS:[.15,-.97,1.4],snoutS:[.2,-.66,1.16],lipS:[.24,-1.08,1.08],mouth:[.4,-1.04,.8],jaw:[.46,-1.08,.4],snoutM:[.4,-.56,.94],eyeI:[.19,-.08,.86],eyeB:[.38,-.2,.78],eyeO:[.6,.06,.6],eyeT:[.38,.1,.76],brow:[.6,.3,.5],cheek:[.7,-.36,.6],fluffU:[.96,-.06,.28],fluff:[1.28,-.5,.12],fluffL:[.84,-.86,.3],earFI:[.22,.6,.44],earFO:[.86,.36,.26],earT:[1.02,1.6,0],earB:[.56,.56,-.18],temple:[.94,.16,-.12],sideB:[.68,-.12,-.56],sideL:[.58,-.74,-.36]};(()=>{let r=Ai.earFI,t=Ai.earFO,e=Ai.earT,i=[(r[0]+t[0]+e[0])/3,(r[1]+t[1]+e[1])/3,(r[2]+t[2]+e[2])/3],n=(o,a,l)=>[o[0]+(i[0]-o[0])*a,o[1]+(i[1]-o[1])*a,o[2]+(i[2]-o[2])*a+l];Ai.earIA=n(r,.36,-.07),Ai.earIB=n(t,.36,-.07),Ai.earIT=n(e,.3,-.05);let s=(o,a,l)=>[o[0]+(a[0]-o[0])*l,o[1]+(a[1]-o[1])*l,o[2]+(a[2]-o[2])*l];Ai.tipI=s(Ai.earFI,Ai.earT,.8),Ai.tipO=s(Ai.earFO,Ai.earT,.8),Ai.tipB=s(Ai.earB,Ai.earT,.8)})();var Pe="fur",qn="furDark",Ni="cream",Ju="ink",Dx="eye",lb="inner",cb=[["noseTop","noseS","noseBot",Ju],["noseTop","snoutS","noseS",Ju],["bridge","snoutS","noseTop",Pe],["bridge","snoutM","snoutS",Pe],["bridge","stop","eyeI",Pe],["bridge","eyeI","snoutM",Pe],["eyeI","eyeB","snoutM",Pe],["snoutM","eyeB","cheek",Pe],["eyeB","eyeO","cheek",Pe],["eyeI","eyeT","eyeB",Dx],["eyeT","eyeO","eyeB",Dx],["stop","eyeT","eyeI",Pe],["stop","fore","eyeT",Pe],["fore","brow","eyeT",Pe],["eyeT","brow","eyeO",Pe],["fore","crownF","earFI",Pe],["fore","earFI","brow",Pe],["earFI","earFO","brow",Pe],["brow","earFO","fluffU",Pe],["brow","fluffU","eyeO",Pe],["eyeO","fluffU","cheek",Pe],["cheek","fluffU","fluff",Ni],["cheek","fluff","fluffL",Ni],["snoutM","cheek","mouth",Ni],["cheek","fluffL","mouth",Ni],["mouth","fluffL","jaw",Ni],["noseS","snoutS","lipS",Ni],["snoutS","snoutM","lipS",Ni],["snoutM","mouth","lipS",Ni],["noseBot","noseS","lipS",Ni],["noseBot","lipS","lip",Ni],["lip","lipS","mouth",Ni],["lip","mouth","chin",Ni],["chin","mouth","jaw",Ni],["earFI","earFO","earIB",Pe],["earFI","earIB","earIA",Pe],["earFO","earT","earIT",Pe],["earFO","earIT","earIB",Pe],["earT","earFI","earIA",Pe],["earT","earIA","earIT",Pe],["earIA","earIB","earIT",lb],["earFO","earB","tipB",qn],["earFO","tipB","tipO",qn],["tipO","tipB","earT",Ju],["earB","earFI","tipI",qn],["earB","tipI","tipB",qn],["tipB","tipI","earT",Ju],["crownF","earFI","earB",Pe],["crownF","earB","crownB",Pe],["crownB","earB","backT",qn],["backT","earB","sideB",qn],["earB","temple","sideB",qn],["earB","earFO","temple",Pe],["earFO","fluffU","temple",Pe],["temple","fluffU","fluff",Pe],["temple","fluff","sideB",qn],["sideB","fluff","sideL",qn],["fluff","fluffL","sideL",Ni],["fluffL","jaw","sideL",Ni],["backT","sideB","backB",qn],["backB","sideB","sideL",qn],["backB","sideL","throat",qn],["sideL","jaw","throat",Ni],["jaw","chin","throat",Ni]],Gl={fur:"#F26B1D",furDark:"#B8410F",cream:"#FFF0E0",ink:"#17131C",eye:"#0B0A10",inner:"#3A1D17"};function ub(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function hb(r){let t=parseInt(r.slice(1),16);return[(t>>16&255)/255,(t>>8&255)/255,(t&255)/255]}function fb(r){return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)}function sm({height:r=2,palette:t=Gl,seed:e=7}={}){let i=ub(e),n=[],s=p=>[-p[0],p[1],p[2]];for(let[p,_,m,g]of cb){let y=Ai[p],b=Ai[_],v=Ai[m];n.push({a:y,b,c:v,role:g}),n.push({a:s(y),b:s(v),c:s(b),role:g})}let o=1/0,a=-1/0,l=1/0,c=-1/0;for(let p of n)for(let _ of[p.a,p.b,p.c])o=Math.min(o,_[1]),a=Math.max(a,_[1]),l=Math.min(l,_[2]),c=Math.max(c,_[2]);let u=r/(a-o),h=(o+a)/2,f=(l+c)/2,d=p=>[p[0]*u,(p[1]-h)*u,(p[2]-f)*u];return n.map(p=>{let _=hb(t[p.role]),m=p.role==="fur"||p.role==="furDark"?.07:p.role==="cream"?.035:.02,g=1+(i()*2-1)*m,y=_.map(b=>fb(Math.min(1,b*g)));return{a:d(p.a),b:d(p.b),c:d(p.c),role:p.role,color:y}})}function Rx(r,t=1){let e=r;for(let i=0;i<t;i++){let n=[];for(let s of e){let o=(u,h)=>[(u[0]+h[0])/2,(u[1]+h[1])/2,(u[2]+h[2])/2],a=o(s.a,s.b),l=o(s.b,s.c),c=o(s.c,s.a);n.push({...s,a:s.a,b:a,c}),n.push({...s,a,b:s.b,c:l}),n.push({...s,a:c,b:l,c:s.c}),n.push({...s,a,b:l,c})}e=n}return e}function Wl({ry:r=-16,rx:t=8,height:e=2}={}){let i=sm({height:e}),n=Math.cos(r*Math.PI/180),s=Math.sin(r*Math.PI/180),o=Math.cos(t*Math.PI/180),a=Math.sin(t*Math.PI/180),l=([u,h,f])=>{let d=u*n+f*s,p=-u*s+f*n;return[d,h*o-p*a,h*a+p*o]},c=[];for(let u of i){let h=l(u.a),f=l(u.b),d=l(u.c),p=[f[0]-h[0],f[1]-h[1],f[2]-h[2]],_=[d[0]-h[0],d[1]-h[1],d[2]-h[2]],m=[p[1]*_[2]-p[2]*_[1],p[2]*_[0]-p[0]*_[2],p[0]*_[1]-p[1]*_[0]],g=Math.hypot(m[0],m[1],m[2])||1;m=m.map(y=>y/g),m[2]<0&&(m=m.map(y=>-y)),!(m[2]<.04)&&c.push({pts:[h,f,d].map(y=>[y[0],-y[1]]),z:(h[2]+f[2]+d[2])/3,n:m,role:u.role})}return c.sort((u,h)=>u.z-h.z),c}function Px(){let r=at("#preloader");if(!r)return{set(){},finish:async()=>{}};let t=at(".preloader__fox",r),e=at(".preloader__bar span",r),i=at(".preloader__count",r),n=at(".preloader__typed",r),s=at(".preloader__status",r),o=n?.dataset.text||"",a="http://www.w3.org/2000/svg",l=Wl({ry:-16,rx:8}),c=1/0,u=-1/0,h=1/0,f=-1/0;for(let x of l)for(let[w,A]of x.pts)c=Math.min(c,w),u=Math.max(u,w),h=Math.min(h,A),f=Math.max(f,A);let d=.08;t.setAttribute("viewBox",`${c-d} ${h-d} ${u-c+d*2} ${f-h+d*2}`);let p=[],_=[-.45,.65,.7],m=Math.hypot(..._);for(let x of l){let w=document.createElementNS(a,"path");w.setAttribute("d",`M${x.pts.map(([D,N])=>`${D.toFixed(4)} ${N.toFixed(4)}`).join("L")}Z`);let A=Math.max(0,(x.n[0]*_[0]+x.n[1]*_[1]+x.n[2]*_[2])/m),R=x.role==="ink"||x.role==="eye"||x.role==="inner";w.setAttribute("class","fill"),w.style.fill=db(Gl[x.role],R?.85+A*.3:.62+A*.48),t.appendChild(w),p.push(w)}let g=new Set,y=[];for(let x of l)for(let w=0;w<3;w++){let A=x.pts[w],R=x.pts[(w+1)%3],D=`${A[0].toFixed(3)},${A[1].toFixed(3)}|${R[0].toFixed(3)},${R[1].toFixed(3)}`,N=`${R[0].toFixed(3)},${R[1].toFixed(3)}|${A[0].toFixed(3)},${A[1].toFixed(3)}`;g.has(D)||g.has(N)||(g.add(D),y.push([A,R]))}y.sort((x,w)=>Math.hypot(x[0][0],x[0][1]-.7)-Math.hypot(w[0][0],w[0][1]-.7));let b=y.map(([x,w])=>{let A=document.createElementNS(a,"path");A.setAttribute("d",`M${x[0].toFixed(4)} ${x[1].toFixed(4)}L${w[0].toFixed(4)} ${w[1].toFixed(4)}`);let R=Math.hypot(w[0]-x[0],w[1]-x[1]);return A.style.strokeDasharray=`${R}`,A.style.strokeDashoffset=`${R}`,A._len=R,t.appendChild(A),A}),v={p:0,shown:0},S=["Connecting to workbench","Loading fonts","Compiling shaders","Warming the cache","Ready"],M=()=>{let x=v.shown;e.style.transform=`scaleX(${x})`,i.textContent=String(Math.round(x*100)).padStart(3,"0");let w=Math.floor(x*b.length);for(let A=0;A<b.length;A++){let R=b[A],D=A<w?1:A===w?x*b.length%1:0;R.style.strokeDashoffset=`${R._len*(1-D)}`}n.textContent=o.slice(0,Math.round(x*o.length)),s.textContent=S[Math.min(S.length-1,Math.floor(x*(S.length-1)+1e-4))]},E=()=>{v.shown+=(v.p-v.shown)*.08+.0015,v.shown=Math.min(v.shown,v.p),M()};return wt.ticker.add(E),{set(x){v.p=Math.max(v.p,Math.min(1,x))},async finish(){if(v.p=1,await new Promise(w=>{let A=()=>v.shown>.995?w():requestAnimationFrame(A);A()}),v.shown=1,M(),wt.ticker.remove(E),$t.reduced){r.classList.add("is-done");return}let x=wt.timeline();x.to(p,{opacity:1,duration:.5,stagger:{each:.004,from:"random"},ease:"power2.out"},0),x.to(b,{opacity:0,duration:.4},.25),x.to(t,{scale:1.08,duration:.9,ease:"power3.inOut"},.1),x.to(".preloader__inner",{opacity:0,y:-20,duration:.5,ease:"power2.in"},.75),x.set(r,{background:"transparent"},1.05),x.to(".preloader__shutter--top",{yPercent:-100,duration:1.1,ease:"expo.inOut"},1.05),x.to(".preloader__shutter--bottom",{yPercent:100,duration:1.1,ease:"expo.inOut"},1.05),await new Promise(w=>x.call(w,null,1.25)),x.call(()=>r.classList.add("is-done"),null,2.2)}}}function db(r,t){let e=parseInt(r.slice(1),16);return`rgb(${[e>>16&255,e>>8&255,e&255].map(n=>Math.min(255,Math.round(n*t))).join(",")})`}var uv=0,km=1,hv=2;var Sc=1,fv=2,Ba=3,Ls=0,Oi=1,Ki=2,Jn=0,ka=1,qe=2,zm=3,Hm=4,dv=5;var So=100,pv=101,mv=102,gv=103,_v=104,xv=200,vv=201,yv=202,Sv=203,Vm=204,Gm=205,Mv=206,bv=207,wv=208,Ev=209,Tv=210,Av=211,Cv=212,Dv=213,Rv=214,Th=0,Ah=1,Ch=2,ba=3,Dh=4,Rh=5,Ph=6,Ih=7,Wm=0,Pv=1,Iv=2,cr=0,Mc=1,bc=2,wc=3,Ec=4,Tc=5,Ac=6,Mo=7;var Xm=300,Ns=301,bo=302,of=303,af=304,Cc=306,wa=1e3,Sr=1001,Fh=1002,ci=1003,Fv=1004;var Dc=1005;var vi=1006,lf=1007;var Tr=1008;var Sn=1009,Ym=1010,qm=1011,za=1012,cf=1013,ur=1014,Mn=1015,yi=1016,uf=1017,hf=1018,Ha=1020,$m=35902,Zm=35899,Jm=1021,Km=1022,bn=1023,Mr=1026,Us=1027,ff=1028,df=1029,Os=1030,pf=1031;var mf=1033,Rc=33776,Pc=33777,Ic=33778,Fc=33779,gf=35840,_f=35841,xf=35842,vf=35843,yf=36196,Sf=37492,Mf=37496,bf=37488,wf=37489,Lc=37490,Ef=37491,Tf=37808,Af=37809,Cf=37810,Df=37811,Rf=37812,Pf=37813,If=37814,Ff=37815,Lf=37816,Nf=37817,Uf=37818,Of=37819,Bf=37820,kf=37821,zf=36492,Hf=36494,Vf=36495,Gf=36283,Wf=36284,Nc=36285,Xf=36286;var Ql=2300,Lh=2301,wh=2302,Rm=2303,Pm=2400,Im=2401,Fm=2402;var Lv=3200;var Yf=0,Nv=1,Jr="",Ui="srgb",tc="srgb-linear",ec="linear",be="srgb";var Eh=7680;var Uv=519,Ov=512,Bv=513,kv=514,qf=515,zv=516,Hv=517,$f=518,Vv=519,Gv=35044;var jm="300 es",ar=2e3,Ea=2001;function pb(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function mb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ic(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wv(){let r=ic("canvas");return r.style.display="block",r}var Ix={},Ta=null;function Qm(...r){let t="THREE."+r.shift();Ta?Ta("log",t,...r):console.log(t,...r)}function Xv(r){let t=r[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=r[1];e&&e.isStackTrace?r[0]+=" "+e.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function te(...r){r=Xv(r);let t="THREE."+r.shift();if(Ta)Ta("warn",t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function ee(...r){r=Xv(r);let t="THREE."+r.shift();if(Ta)Ta("error",t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function po(...r){let t=r.join(" ");t in Ix||(Ix[t]=!0,te(...r))}function Yv(r,t,e){return new Promise(function(i,n){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var qv={[Th]:Ah,[Ch]:Ph,[Dh]:Ih,[ba]:Rh,[Ah]:Th,[Ph]:Ch,[Ih]:Dh,[Rh]:ba},br=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let s=n.indexOf(e);s!==-1&&n.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,t);t.target=null}}},qi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fx=1234567,Sa=Math.PI/180,Aa=180/Math.PI;function Va(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qi[r&255]+qi[r>>8&255]+qi[r>>16&255]+qi[r>>24&255]+"-"+qi[t&255]+qi[t>>8&255]+"-"+qi[t>>16&15|64]+qi[t>>24&255]+"-"+qi[e&63|128]+qi[e>>8&255]+"-"+qi[e>>16&255]+qi[e>>24&255]+qi[i&255]+qi[i>>8&255]+qi[i>>16&255]+qi[i>>24&255]).toLowerCase()}function pe(r,t,e){return Math.max(t,Math.min(e,r))}function t0(r,t){return(r%t+t)%t}function gb(r,t,e,i,n){return i+(r-t)*(n-i)/(e-t)}function _b(r,t,e){return r!==t?(e-r)/(t-r):0}function jl(r,t,e){return(1-e)*r+e*t}function xb(r,t,e,i){return jl(r,t,1-Math.exp(-e*i))}function vb(r,t=1){return t-Math.abs(t0(r,t*2)-t)}function yb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Sb(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Mb(r,t){return r+Math.floor(Math.random()*(t-r+1))}function bb(r,t){return r+Math.random()*(t-r)}function wb(r){return r*(.5-Math.random())}function Eb(r){r!==void 0&&(Fx=r);let t=Fx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Tb(r){return r*Sa}function Ab(r){return r*Aa}function Cb(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function Db(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Rb(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Pb(r,t,e,i,n){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+i)/2),u=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),p=o((i-t)/2);switch(n){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*p,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*p,a*c);break;case"ZYZ":r.set(l*p,l*d,a*u,a*c);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ya(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Kr={DEG2RAD:Sa,RAD2DEG:Aa,generateUUID:Va,clamp:pe,euclideanModulo:t0,mapLinear:gb,inverseLerp:_b,lerp:jl,damp:xb,pingpong:vb,smoothstep:yb,smootherstep:Sb,randInt:Mb,randFloat:bb,randFloatSpread:wb,seededRandom:Eb,degToRad:Tb,radToDeg:Ab,isPowerOfTwo:Cb,ceilPowerOfTwo:Db,floorPowerOfTwo:Rb,setQuaternionFromProperEuler:Pb,normalize:hn,denormalize:ya},s0=class s0{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*n+t.x,this.y=s*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};s0.prototype.isVector2=!0;var Ft=s0,Ji=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,s,o,a){let l=i[n+0],c=i[n+1],u=i[n+2],h=i[n+3],f=s[o+0],d=s[o+1],p=s[o+2],_=s[o+3];if(h!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);g=Math.sin(g*y)/b,a=Math.sin(a*y)/b,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,s,o){let a=i[n],l=i[n+1],c=i[n+2],u=i[n+3],h=s[o],f=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+u*h+l*d-c*f,t[e+1]=l*p+u*f+c*h-a*d,t[e+2]=c*p+u*d+a*f-l*h,t[e+3]=u*p-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(n/2),h=a(s/2),f=l(i/2),d=l(n/2),p=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=i+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-n)*d}else if(i>a&&i>h){let d=2*Math.sqrt(1+i-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(n+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-i-h);this._w=(s-c)/d,this._x=(n+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-i-a);this._w=(o-n)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+n*c-s*l,this._y=n*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-n*a,this._w=o*u-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},o0=class o0{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lx.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lx.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*n,this.y=s[1]*e+s[4]*i+s[7]*n,this.z=s[2]*e+s[5]*i+s[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),u=2*(a*e-s*n),h=2*(s*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=n+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*n,this.y=s[1]*e+s[5]*i+s[9]*n,this.z=s[2]*e+s[6]*i+s[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-s*a,this.y=s*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return om.copy(this).projectOnVector(t),this.sub(om)}reflect(t){return this.sub(om.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(pe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};o0.prototype.isVector3=!0;var U=o0,om=new U,Lx=new Ji,a0=class a0{constructor(t,e,i,n,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c)}set(t,e,i,n,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=n,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],d=i[5],p=i[8],_=n[0],m=n[3],g=n[6],y=n[1],b=n[4],v=n[7],S=n[2],M=n[5],E=n[8];return s[0]=o*_+a*y+l*S,s[3]=o*m+a*b+l*M,s[6]=o*g+a*v+l*E,s[1]=c*_+u*y+h*S,s[4]=c*m+u*b+h*M,s[7]=c*g+u*v+h*E,s[2]=f*_+d*y+p*S,s[5]=f*m+d*b+p*M,s[8]=f*g+d*v+p*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*s*u+i*a*l+n*s*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,p=e*h+i*f+n*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=h*_,t[1]=(n*c-u*i)*_,t[2]=(a*i-n*o)*_,t[3]=f*_,t[4]=(u*e-n*l)*_,t[5]=(n*s-a*e)*_,t[6]=d*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(am.makeScale(t,e)),this}rotate(t){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(am.makeRotation(-t)),this}translate(t,e){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(am.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};a0.prototype.isMatrix3=!0;var se=a0,am=new se,Nx=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ux=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ib(){let r={enabled:!0,workingColorSpace:tc,spaces:{},convert:function(n,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===be&&(n.r=$r(n.r),n.g=$r(n.g),n.b=$r(n.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(n.r=Ma(n.r),n.g=Ma(n.g),n.b=Ma(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Jr?ec:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,o){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(n,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[tc]:{primaries:t,whitePoint:i,transfer:ec,toXYZ:Nx,fromXYZ:Ux,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:t,whitePoint:i,transfer:be,toXYZ:Nx,fromXYZ:Ux,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),r}var _e=Ib();function $r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ma(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var oa,Nh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{oa===void 0&&(oa=ic("canvas")),oa.width=t.width,oa.height=t.height;let n=oa.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=oa}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ic("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=$r(s[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($r(e[i]/255)*255):e[i]=$r(e[i]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fb=0,Ca=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Fb++}),this.uuid=Va(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?s.push(lm(n[o].image)):s.push(lm(n[o]))}else s=lm(n);i.url=s}return e||(t.images[this.uuid]=i),i}};function lm(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nh.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var Lb=0,cm=new U,fn=class r extends br{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,i=Sr,n=Sr,s=vi,o=Tr,a=bn,l=Sn,c=r.DEFAULT_ANISOTROPY,u=Jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=Va(),this.name="",this.source=new Ca(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cm).x}get height(){return this.source.getSize(cm).y}get depth(){return this.source.getSize(cm).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case Fh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case Fh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Xm;fn.DEFAULT_ANISOTROPY=1;var l0=class l0{constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(d+1)/2,S=(g+1)/2,M=(u+f)/4,E=(h+_)/4,x=(p+m)/4;return b>v&&b>S?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=M/i,s=E/i):v>S?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=M/n,s=x/n):S<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(S),i=E/s,n=x/s),this.set(i,n,s,e),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(pe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};l0.prototype.isVector4=!0;var Je=l0,Uh=class extends br{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Je(0,0,t,e),this.scissorTest=!1,this.viewport=new Je(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},s=new fn(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:vi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ca(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ri=class extends Uh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},nc=class extends fn{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ci,this.minFilter=ci,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oh=class extends fn{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ci,this.minFilter=ci,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var sf=class sf{constructor(t,e,i,n,s,o,a,l,c,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,s,o,a,l,c,u,h,f,d,p,_,m)}set(t,e,i,n,s,o,a,l,c,u,h,f,d,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=n,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sf().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/aa.setFromMatrixColumn(t,0).length(),s=1/aa.setFromMatrixColumn(t,1).length(),o=1/aa.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f+_*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-p,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,p=c*u,_=c*h;e[0]=f-_*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;e[0]=l*u,e[4]=p*c-d,e[8]=f*c+_,e[1]=l*h,e[5]=_*c+f,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=_-f*h,e[8]=p*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+p,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nb,t,Ub)}lookAt(t,e,i){let n=this.elements;return In.subVectors(t,e),In.lengthSq()===0&&(In.z=1),In.normalize(),Ss.crossVectors(i,In),Ss.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ss.crossVectors(i,In)),Ss.normalize(),Ku.crossVectors(In,Ss),n[0]=Ss.x,n[4]=Ku.x,n[8]=In.x,n[1]=Ss.y,n[5]=Ku.y,n[9]=In.y,n[2]=Ss.z,n[6]=Ku.z,n[10]=In.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],d=i[13],p=i[2],_=i[6],m=i[10],g=i[14],y=i[3],b=i[7],v=i[11],S=i[15],M=n[0],E=n[4],x=n[8],w=n[12],A=n[1],R=n[5],D=n[9],N=n[13],I=n[2],F=n[6],H=n[10],B=n[14],Y=n[3],W=n[7],P=n[11],O=n[15];return s[0]=o*M+a*A+l*I+c*Y,s[4]=o*E+a*R+l*F+c*W,s[8]=o*x+a*D+l*H+c*P,s[12]=o*w+a*N+l*B+c*O,s[1]=u*M+h*A+f*I+d*Y,s[5]=u*E+h*R+f*F+d*W,s[9]=u*x+h*D+f*H+d*P,s[13]=u*w+h*N+f*B+d*O,s[2]=p*M+_*A+m*I+g*Y,s[6]=p*E+_*R+m*F+g*W,s[10]=p*x+_*D+m*H+g*P,s[14]=p*w+_*N+m*B+g*O,s[3]=y*M+b*A+v*I+S*Y,s[7]=y*E+b*R+v*F+S*W,s[11]=y*x+b*D+v*H+S*P,s[15]=y*w+b*N+v*B+S*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],p=t[3],_=t[7],m=t[11],g=t[15],y=l*d-c*f,b=a*d-c*h,v=a*f-l*h,S=o*d-c*u,M=o*f-l*u,E=o*h-a*u;return e*(_*y-m*b+g*v)-i*(p*y-m*S+g*M)+n*(p*b-_*S+g*E)-s*(p*v-_*M+m*E)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-i*(s*u-a*l)+n*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],p=t[12],_=t[13],m=t[14],g=t[15],y=e*a-i*o,b=e*l-n*o,v=e*c-s*o,S=i*l-n*a,M=i*c-s*a,E=n*c-s*l,x=u*_-h*p,w=u*m-f*p,A=u*g-d*p,R=h*m-f*_,D=h*g-d*_,N=f*g-d*m,I=y*N-b*D+v*R+S*A-M*w+E*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/I;return t[0]=(a*N-l*D+c*R)*F,t[1]=(n*D-i*N-s*R)*F,t[2]=(_*E-m*M+g*S)*F,t[3]=(f*M-h*E-d*S)*F,t[4]=(l*A-o*N-c*w)*F,t[5]=(e*N-n*A+s*w)*F,t[6]=(m*v-p*E-g*b)*F,t[7]=(u*E-f*v+d*b)*F,t[8]=(o*D-a*A+c*x)*F,t[9]=(i*A-e*D-s*x)*F,t[10]=(p*M-_*v+g*y)*F,t[11]=(h*v-u*M-d*y)*F,t[12]=(a*w-o*R-l*x)*F,t[13]=(e*R-i*w+n*x)*F,t[14]=(_*b-p*S-m*y)*F,t[15]=(u*S-h*b+f*y)*F,this}scale(t){let e=this.elements,i=t.x,n=t.y,s=t.z;return e[0]*=i,e[4]*=n,e[8]*=s,e[1]*=i,e[5]*=n,e[9]*=s,e[2]*=i,e[6]*=n,e[10]*=s,e[3]*=i,e[7]*=n,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),s=1-i,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,u*a+i,u*l-n*o,0,c*l-n*a,u*l+n*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,s,o){return this.set(1,i,s,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,p=s*h,_=o*u,m=o*h,g=a*h,y=l*c,b=l*u,v=l*h,S=i.x,M=i.y,E=i.z;return n[0]=(1-(_+g))*S,n[1]=(d+v)*S,n[2]=(p-b)*S,n[3]=0,n[4]=(d-v)*M,n[5]=(1-(f+g))*M,n[6]=(m+y)*M,n[7]=0,n[8]=(p+b)*E,n[9]=(m-y)*E,n[10]=(1-(f+_))*E,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let o=aa.set(n[0],n[1],n[2]).length(),a=aa.set(n[4],n[5],n[6]).length(),l=aa.set(n[8],n[9],n[10]).length();s<0&&(o=-o),nr.copy(this);let c=1/o,u=1/a,h=1/l;return nr.elements[0]*=c,nr.elements[1]*=c,nr.elements[2]*=c,nr.elements[4]*=u,nr.elements[5]*=u,nr.elements[6]*=u,nr.elements[8]*=h,nr.elements[9]*=h,nr.elements[10]*=h,e.setFromRotationMatrix(nr),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,s,o,a=ar,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(i-n),f=(e+t)/(e-t),d=(i+n)/(i-n),p,_;if(l)p=s/(o-s),_=o*s/(o-s);else if(a===ar)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ea)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,s,o,a=ar,l=!1){let c=this.elements,u=2/(e-t),h=2/(i-n),f=-(e+t)/(e-t),d=-(i+n)/(i-n),p,_;if(l)p=1/(o-s),_=o/(o-s);else if(a===ar)p=-2/(o-s),_=-(o+s)/(o-s);else if(a===Ea)p=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};sf.prototype.isMatrix4=!0;var xe=sf,aa=new U,nr=new xe,Nb=new U(0,0,0),Ub=new U(1,1,1),Ss=new U,Ku=new U,In=new U,Ox=new xe,Bx=new Ji,lr=class r{constructor(t=0,e=0,i=0,n=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,s=n[0],o=n[4],a=n[8],l=n[1],c=n[5],u=n[9],h=n[2],f=n[6],d=n[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ox.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ox,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bx.setFromEuler(this),this.setFromQuaternion(Bx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};lr.DEFAULT_ORDER="XYZ";var Da=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ob=0,kx=new U,la=new Ji,Vr=new xe,ju=new U,Xl=new U,Bb=new U,kb=new Ji,zx=new U(1,0,0),Hx=new U(0,1,0),Vx=new U(0,0,1),Gx={type:"added"},zb={type:"removed"},ca={type:"childadded",child:null},um={type:"childremoved",child:null},Di=class r extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new U,e=new lr,i=new Ji,n=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new xe},normalMatrix:{value:new se}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Da,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return la.setFromAxisAngle(t,e),this.quaternion.multiply(la),this}rotateOnWorldAxis(t,e){return la.setFromAxisAngle(t,e),this.quaternion.premultiply(la),this}rotateX(t){return this.rotateOnAxis(zx,t)}rotateY(t){return this.rotateOnAxis(Hx,t)}rotateZ(t){return this.rotateOnAxis(Vx,t)}translateOnAxis(t,e){return kx.copy(t).applyQuaternion(this.quaternion),this.position.add(kx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zx,t)}translateY(t){return this.translateOnAxis(Hx,t)}translateZ(t){return this.translateOnAxis(Vx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ju.copy(t):ju.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(Xl,ju,this.up):Vr.lookAt(ju,Xl,this.up),this.quaternion.setFromRotationMatrix(Vr),n&&(Vr.extractRotation(n.matrixWorld),la.setFromRotationMatrix(Vr),this.quaternion.premultiply(la.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gx),ca.child=t,this.dispatchEvent(ca),ca.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zb),um.child=t,this.dispatchEvent(um),um.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gx),ca.child=t,this.dispatchEvent(ca),ca.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,t,Bb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xl,kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*n,s[13]+=i-s[1]*e-s[5]*i-s[9]*n,s[14]+=n-s[2]*e-s[6]*i-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));n.material=a}else n.material=s(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=n,i;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Di.DEFAULT_UP=new U(0,1,0);Di.DEFAULT_MATRIX_AUTO_UPDATE=!0;Di.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var He=class extends Di{constructor(){super(),this.isGroup=!0,this.type="Group"}},Hb={type:"move"},Ra=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new He,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new He,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new He,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hb)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new He;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},$v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ms={h:0,s:0,l:0},Qu={h:0,s:0,l:0};function hm(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var xt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=_e.workingColorSpace){return this.r=t,this.g=e,this.b=i,_e.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=_e.workingColorSpace){if(t=t0(t,1),e=pe(e,0,1),i=pe(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=hm(o,s,t+1/3),this.g=hm(o,s,t),this.b=hm(o,s,t-1/3)}return _e.colorSpaceToWorking(this,n),this}setStyle(t,e=Ui){function i(s){s!==void 0&&parseFloat(s)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=n[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ui){let i=$v[t.toLowerCase()];return i!==void 0?this.setHex(i,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}copyLinearToSRGB(t){return this.r=Ma(t.r),this.g=Ma(t.g),this.b=Ma(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ui){return _e.workingToColorSpace($i.copy(this),t),Math.round(pe($i.r*255,0,255))*65536+Math.round(pe($i.g*255,0,255))*256+Math.round(pe($i.b*255,0,255))}getHexString(t=Ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.workingToColorSpace($i.copy(this),e);let i=$i.r,n=$i.g,s=$i.b,o=Math.max(i,n,s),a=Math.min(i,n,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(n-s)/h+(n<s?6:0);break;case n:l=(s-i)/h+2;break;case s:l=(i-n)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=_e.workingColorSpace){return _e.workingToColorSpace($i.copy(this),e),t.r=$i.r,t.g=$i.g,t.b=$i.b,t}getStyle(t=Ui){_e.workingToColorSpace($i.copy(this),t);let e=$i.r,i=$i.g,n=$i.b;return t!==Ui?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Ms),this.setHSL(Ms.h+t,Ms.s+e,Ms.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ms),t.getHSL(Qu);let i=jl(Ms.h,Qu.h,e),n=jl(Ms.s,Qu.s,e),s=jl(Ms.l,Qu.l,e);return this.setHSL(i,n,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*n,this.g=s[1]*e+s[4]*i+s[7]*n,this.b=s[2]*e+s[5]*i+s[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$i=new xt;xt.NAMES=$v;var mo=class extends Di{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new lr,this.environmentIntensity=1,this.environmentRotation=new lr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},rr=new U,Gr=new U,fm=new U,Wr=new U,ua=new U,ha=new U,Wx=new U,dm=new U,pm=new U,mm=new U,gm=new Je,_m=new Je,xm=new Je,qr=class r{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),rr.subVectors(t,e),n.cross(rr);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(t,e,i,n,s){rr.subVectors(n,e),Gr.subVectors(i,e),fm.subVectors(t,e);let o=rr.dot(rr),a=rr.dot(Gr),l=rr.dot(fm),c=Gr.dot(Gr),u=Gr.dot(fm),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return s.set(1-d-p,p,d)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,Wr)===null?!1:Wr.x>=0&&Wr.y>=0&&Wr.x+Wr.y<=1}static getInterpolation(t,e,i,n,s,o,a,l){return this.getBarycoord(t,e,i,n,Wr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wr.x),l.addScaledVector(o,Wr.y),l.addScaledVector(a,Wr.z),l)}static getInterpolatedAttribute(t,e,i,n,s,o){return gm.setScalar(0),_m.setScalar(0),xm.setScalar(0),gm.fromBufferAttribute(t,e),_m.fromBufferAttribute(t,i),xm.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(gm,s.x),o.addScaledVector(_m,s.y),o.addScaledVector(xm,s.z),o}static isFrontFacing(t,e,i,n){return rr.subVectors(i,e),Gr.subVectors(t,e),rr.cross(Gr).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return rr.subVectors(this.c,this.b),Gr.subVectors(this.a,this.b),rr.cross(Gr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,s){return r.getInterpolation(t,this.a,this.b,this.c,e,i,n,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,s=this.c,o,a;ua.subVectors(n,i),ha.subVectors(s,i),dm.subVectors(t,i);let l=ua.dot(dm),c=ha.dot(dm);if(l<=0&&c<=0)return e.copy(i);pm.subVectors(t,n);let u=ua.dot(pm),h=ha.dot(pm);if(u>=0&&h<=u)return e.copy(n);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(ua,o);mm.subVectors(t,s);let d=ua.dot(mm),p=ha.dot(mm);if(p>=0&&d<=p)return e.copy(s);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(i).addScaledVector(ha,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Wx.subVectors(s,n),a=(h-u)/(h-u+(d-p)),e.copy(n).addScaledVector(Wx,a);let g=1/(m+_+f);return o=_*g,a=f*g,e.copy(i).addScaledVector(ua,o).addScaledVector(ha,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},wr=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(sr.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(sr.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=sr.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sr):sr.fromBufferAttribute(s,o),sr.applyMatrix4(t.matrixWorld),this.expandByPoint(sr);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),th.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),th.copy(i.boundingBox)),th.applyMatrix4(t.matrixWorld),this.union(th)}let n=t.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sr),sr.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yl),eh.subVectors(this.max,Yl),fa.subVectors(t.a,Yl),da.subVectors(t.b,Yl),pa.subVectors(t.c,Yl),bs.subVectors(da,fa),ws.subVectors(pa,da),co.subVectors(fa,pa);let e=[0,-bs.z,bs.y,0,-ws.z,ws.y,0,-co.z,co.y,bs.z,0,-bs.x,ws.z,0,-ws.x,co.z,0,-co.x,-bs.y,bs.x,0,-ws.y,ws.x,0,-co.y,co.x,0];return!vm(e,fa,da,pa,eh)||(e=[1,0,0,0,1,0,0,0,1],!vm(e,fa,da,pa,eh))?!1:(ih.crossVectors(bs,ws),e=[ih.x,ih.y,ih.z],vm(e,fa,da,pa,eh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sr).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sr).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Xr=[new U,new U,new U,new U,new U,new U,new U,new U],sr=new U,th=new wr,fa=new U,da=new U,pa=new U,bs=new U,ws=new U,co=new U,Yl=new U,eh=new U,ih=new U,uo=new U;function vm(r,t,e,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){uo.fromArray(r,s);let a=n.x*Math.abs(uo.x)+n.y*Math.abs(uo.y)+n.z*Math.abs(uo.z),l=t.dot(uo),c=e.dot(uo),u=i.dot(uo);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var mi=new U,nh=new Ft,Vb=0,Te=class extends br{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Gv,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)nh.fromBufferAttribute(this,e),nh.applyMatrix3(t),this.setXY(e,nh.x,nh.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix3(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyMatrix4(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.applyNormalMatrix(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)mi.fromBufferAttribute(this,e),mi.transformDirection(t),this.setXYZ(e,mi.x,mi.y,mi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ya(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=hn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ya(e,this.array)),e}setX(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ya(e,this.array)),e}setY(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ya(e,this.array)),e}setZ(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ya(e,this.array)),e}setW(t,e){return this.normalized&&(e=hn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array),n=hn(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,s){return t*=this.itemSize,this.normalized&&(e=hn(e,this.array),i=hn(i,this.array),n=hn(n,this.array),s=hn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var rc=class extends Te{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var sc=class extends Te{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ae=class extends Te{constructor(t,e,i){super(new Float32Array(t),e,i)}},Gb=new wr,ql=new U,ym=new U,Zn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Gb.setFromPoints(t).getCenter(i);let n=0;for(let s=0,o=t.length;s<o;s++)n=Math.max(n,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ql.subVectors(t,this.center);let e=ql.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(ql,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ym.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ql.copy(t.center).add(ym)),this.expandByPoint(ql.copy(t.center).sub(ym))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Wb=0,$n=new xe,Sm=new Di,ma=new U,Fn=new wr,$l=new wr,Ci=new U,Ie=class r extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wb++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pb(t)?sc:rc)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new se().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return $n.makeRotationFromQuaternion(t),this.applyMatrix4($n),this}rotateX(t){return $n.makeRotationX(t),this.applyMatrix4($n),this}rotateY(t){return $n.makeRotationY(t),this.applyMatrix4($n),this}rotateZ(t){return $n.makeRotationZ(t),this.applyMatrix4($n),this}translate(t,e,i){return $n.makeTranslation(t,e,i),this.applyMatrix4($n),this}scale(t,e,i){return $n.makeScale(t,e,i),this.applyMatrix4($n),this}lookAt(t){return Sm.lookAt(t),Sm.updateMatrix(),this.applyMatrix4(Sm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,s=t.length;n<s;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ae(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let s=e[i];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ci.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Ci),Ci.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Ci)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let i=this.boundingSphere.center;if(Fn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];$l.setFromBufferAttribute(a),this.morphTargetsRelative?(Ci.addVectors(Fn.min,$l.min),Fn.expandByPoint(Ci),Ci.addVectors(Fn.max,$l.max),Fn.expandByPoint(Ci)):(Fn.expandByPoint($l.min),Fn.expandByPoint($l.max))}Fn.getCenter(i);let n=0;for(let s=0,o=t.count;s<o;s++)Ci.fromBufferAttribute(t,s),n=Math.max(n,i.distanceToSquared(Ci));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ci.fromBufferAttribute(a,c),l&&(ma.fromBufferAttribute(t,c),Ci.add(ma)),n=Math.max(n,i.distanceToSquared(Ci))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Te(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new U,l[x]=new U;let c=new U,u=new U,h=new U,f=new Ft,d=new Ft,p=new Ft,_=new U,m=new U;function g(x,w,A){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,A),f.fromBufferAttribute(s,x),d.fromBufferAttribute(s,w),p.fromBufferAttribute(s,A),u.sub(c),h.sub(c),d.sub(f),p.sub(f);let R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(R),a[x].add(_),a[w].add(_),a[A].add(_),l[x].add(m),l[w].add(m),l[A].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let x=0,w=y.length;x<w;++x){let A=y[x],R=A.start,D=A.count;for(let N=R,I=R+D;N<I;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let b=new U,v=new U,S=new U,M=new U;function E(x){S.fromBufferAttribute(n,x),M.copy(S);let w=a[x];b.copy(w),b.sub(S.multiplyScalar(S.dot(w))).normalize(),v.crossVectors(M,w);let R=v.dot(l[x])<0?-1:1;o.setXYZW(x,b.x,b.y,b.z,R)}for(let x=0,w=y.length;x<w;++x){let A=y[x],R=A.start,D=A.count;for(let N=R,I=R+D;N<I;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Te(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);let n=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);n.fromBufferAttribute(e,p),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(n,s),u.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)n.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(n,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ci.fromBufferAttribute(t,e),Ci.normalize(),t.setXYZ(e,Ci.x,Ci.y,Ci.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Te(f,u,h)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,i);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(n[l]=u,s=!0)}s&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let u=n[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Mm=new U,Xb=new U,Yb=new se,or=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Mm.subVectors(i,e).cross(Xb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Mm),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yb.getNormalMatrix(t),n=this.coplanarPoint(Mm).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},qb=0,Er=class extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=ka,this.side=Ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vm,this.blendDst=Gm,this.blendEquation=So,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eh,this.stencilZFail=Eh,this.stencilZPass=Eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=n(t.textures),o=n(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new or().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ft().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ft().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Yr=new U,bm=new U,rh=new U,sh=new U,go=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Yr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yr.copy(this.origin).addScaledVector(this.direction,e),Yr.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){bm.copy(t).add(e).multiplyScalar(.5),rh.copy(e).sub(t).normalize(),sh.copy(this.origin).sub(bm);let s=t.distanceTo(e)*.5,o=-this.direction.dot(rh),a=sh.dot(this.direction),l=-sh.dot(rh),c=sh.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=s*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),n&&n.copy(bm).addScaledVector(rh,f),d}intersectSphere(t,e){if(t.radius<0)return null;Yr.subVectors(t.center,this.origin);let i=Yr.dot(this.direction),n=Yr.dot(Yr)-i*i,s=t.radius*t.radius;if(n>s)return null;let o=Math.sqrt(s-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,n=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,n=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,Yr)!==null}intersectTriangle(t,e,i,n,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=t.x-o.x,f=t.y-o.y,d=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=i.x-o.x,y=i.y-o.y,b=i.z-o.z,v=Math.abs(l),S=Math.abs(c),M=Math.abs(u),E,x,w,A,R,D,N,I,F,H,B,Y;if(v>=S&&v>=M?(w=l,D=h,F=p,Y=g,l>=0?(E=c,x=u,A=f,R=d,N=_,I=m,H=y,B=b):(E=u,x=c,A=d,R=f,N=m,I=_,H=b,B=y)):S>=M?(w=c,D=f,F=_,Y=y,c>=0?(E=u,x=l,A=d,R=h,N=m,I=p,H=b,B=g):(E=l,x=u,A=h,R=d,N=p,I=m,H=g,B=b)):(w=u,D=d,F=m,Y=b,u>=0?(E=l,x=c,A=h,R=f,N=p,I=_,H=g,B=y):(E=c,x=l,A=f,R=h,N=_,I=p,H=y,B=g)),w===0)return null;let W=E/w,P=x/w,O=1/w,tt=A-W*D,rt=R-P*D,gt=N-W*F,ht=I-P*F,vt=H-W*Y,$=B-P*Y,j=vt*ht-$*gt,pt=tt*$-rt*vt,Dt=gt*rt-ht*tt;if(n){if(j<0||pt<0||Dt<0)return null}else if((j<0||pt<0||Dt<0)&&(j>0||pt>0||Dt>0))return null;let dt=j+pt+Dt;if(dt===0)return null;let Vt=O*(j*D+pt*F+Dt*Y);return(dt>0?Vt<0:Vt>0)?null:this.at(Vt/dt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends Er{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.combine=Wm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Xx=new xe,ho=new go,oh=new Zn,Yx=new U,ah=new U,lh=new U,ch=new U,wm=new U,uh=new U,qx=new U,hh=new U,qt=class extends Di{constructor(t=new Ie,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(s&&a){uh.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(wm.fromBufferAttribute(h,t),o?uh.addScaledVector(wm,u):uh.addScaledVector(wm.sub(e),u))}e.add(uh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oh.copy(i.boundingSphere),oh.applyMatrix4(s),ho.copy(t.ray).recast(t.near),!(oh.containsPoint(ho.origin)===!1&&(ho.intersectSphere(oh,Yx)===null||ho.origin.distanceToSquared(Yx)>(t.far-t.near)**2))&&(Xx.copy(s).invert(),ho.copy(t.ray).applyMatrix4(Xx),!(i.boundingBox!==null&&ho.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ho)))}_computeIntersections(t,e,i){let n,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=b;v<S;v+=3){let M=a.getX(v),E=a.getX(v+1),x=a.getX(v+2);n=fh(this,g,t,i,c,u,h,M,E,x),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),b=a.getX(m+1),v=a.getX(m+2);n=fh(this,o,t,i,c,u,h,y,b,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=y,S=b;v<S;v+=3){let M=v,E=v+1,x=v+2;n=fh(this,g,t,i,c,u,h,M,E,x),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,b=m+1,v=m+2;n=fh(this,o,t,i,c,u,h,y,b,v),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function $b(r,t,e,i,n,s,o,a){let l;if(t.side===Oi?l=i.intersectTriangle(o,s,n,!0,a):l=i.intersectTriangle(n,s,o,t.side===Ls,a),l===null)return null;hh.copy(a),hh.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(hh);return c<e.near||c>e.far?null:{distance:c,point:hh.clone(),object:r}}function fh(r,t,e,i,n,s,o,a,l,c){r.getVertexPosition(a,ah),r.getVertexPosition(l,lh),r.getVertexPosition(c,ch);let u=$b(r,t,e,i,ah,lh,ch,qx);if(u){let h=new U;qr.getBarycoord(qx,ah,lh,ch,h),n&&(u.uv=qr.getInterpolatedAttribute(n,a,l,c,h,new Ft)),s&&(u.uv1=qr.getInterpolatedAttribute(s,a,l,c,h,new Ft)),o&&(u.normal=qr.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};qr.getNormal(ah,lh,ch,f.normal),u.face=f,u.barycoord=h}return u}var _o=class extends fn{constructor(t=null,e=1,i=1,n,s,o,a,l,c=ci,u=ci,h,f){super(null,o,a,l,c,u,n,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oc=class extends Te{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ga=new xe,$x=new xe,dh=[],Zx=new wr,Zb=new xe,Zl=new qt,Jl=new Zn,ac=class extends qt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new oc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Zb)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new wr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ga),Zx.copy(t.boundingBox).applyMatrix4(ga),this.boundingBox.union(Zx)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ga),Jl.copy(t.boundingSphere).applyMatrix4(ga),this.boundingSphere.union(Jl)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,o=t*s+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Zl.geometry=this.geometry,Zl.material=this.material,Zl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jl.copy(this.boundingSphere),Jl.applyMatrix4(i),t.ray.intersectsSphere(Jl)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,ga),$x.multiplyMatrices(i,ga),Zl.matrixWorld=$x,Zl.raycast(t,dh);for(let o=0,a=dh.length;o<a;o++){let l=dh[o];l.instanceId=s,l.object=this,e.push(l)}dh.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new oc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new _o(new Float32Array(n*this.count),n,this.count,ff,Mn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fo=new Zn,Jb=new Ft(.5,.5),ph=new U,Pa=class{constructor(t=new or,e=new or,i=new or,n=new or,s=new or,o=new or){this.planes=[t,e,i,n,s,o]}set(t,e,i,n,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ar,i=!1){let n=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],p=s[8],_=s[9],m=s[10],g=s[11],y=s[12],b=s[13],v=s[14],S=s[15];if(n[0].setComponents(c-o,d-u,g-p,S-y).normalize(),n[1].setComponents(c+o,d+u,g+p,S+y).normalize(),n[2].setComponents(c+a,d+h,g+_,S+b).normalize(),n[3].setComponents(c-a,d-h,g-_,S-b).normalize(),i)n[4].setComponents(l,f,m,v).normalize(),n[5].setComponents(c-l,d-f,g-m,S-v).normalize();else if(n[4].setComponents(c-l,d-f,g-m,S-v).normalize(),e===ar)n[5].setComponents(c+l,d+f,g+m,S+v).normalize();else if(e===Ea)n[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(t){fo.center.set(0,0,0);let e=Jb.distanceTo(t.center);return fo.radius=.7071067811865476+e,fo.applyMatrix4(t.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(ph.x=n.normal.x>0?t.max.x:t.min.x,ph.y=n.normal.y>0?t.max.y:t.min.y,ph.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(ph)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ia=class extends Er{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Bh=new U,kh=new U,Jx=new xe,Kl=new go,mh=new Zn,Em=new U,Kx=new U,xo=class extends Di{constructor(t=new Ie,e=new Ia){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,s=e.count;n<s;n++)Bh.fromBufferAttribute(e,n-1),kh.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Bh.distanceTo(kh);t.setAttribute("lineDistance",new Ae(i,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mh.copy(i.boundingSphere),mh.applyMatrix4(n),mh.radius+=s,t.ray.intersectsSphere(mh)===!1)return;Jx.copy(n).invert(),Kl.copy(t.ray).applyMatrix4(Jx);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),b=gh(this,t,Kl,l,g,y,_);b&&e.push(b)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=gh(this,t,Kl,l,_,m,p-1);g&&e.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=gh(this,t,Kl,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=gh(this,t,Kl,l,p-1,d,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function gh(r,t,e,i,n,s,o){let a=r.geometry.attributes.position;if(Bh.fromBufferAttribute(a,n),kh.fromBufferAttribute(a,s),e.distanceSqToSegment(Bh,kh,Em,Kx)>i)return;Em.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Em);if(!(c<t.near||c>t.far))return{distance:c,point:Kx.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var jx=new U,Qx=new U,vo=class extends xo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,s=e.count;n<s;n+=2)jx.fromBufferAttribute(e,n),Qx.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+jx.distanceTo(Qx);t.setAttribute("lineDistance",new Ae(i,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var zh=class extends Er{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},tv=new xe,Lm=new go,_h=new Zn,xh=new U,lc=class extends Di{constructor(t=new Ie,e=new zh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_h.copy(i.boundingSphere),_h.applyMatrix4(n),_h.radius+=s,t.ray.intersectsSphere(_h)===!1)return;tv.copy(n).invert(),Lm.copy(t.ray).applyMatrix4(tv);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);xh.fromBufferAttribute(h,m),ev(xh,m,l,n,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)xh.fromBufferAttribute(h,p),ev(xh,p,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){let a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ev(r,t,e,i,n,s,o){let a=Lm.distanceSqToPoint(r);if(a<e){let l=new U;Lm.closestPointToPoint(r,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var cc=class extends fn{constructor(t=[],e=Ns,i,n,s,o,a,l,c,u){super(t,e,i,n,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uc=class extends fn{constructor(t,e,i,n,s,o,a,l,c){super(t,e,i,n,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ts=class extends fn{constructor(t,e,i=ur,n,s,o,a=ci,l=ci,c,u=Mr,h=1){if(u!==Mr&&u!==Us)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,n,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ca(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Hh=class extends Ts{constructor(t,e=ur,i=Ns,n,s,o=ci,a=ci,l,c=Mr){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,i,n,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},hc=class extends fn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},As=class r extends Ie{constructor(t=1,e=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};let a=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,i,e,t,o,s,0),p("z","y","x",1,-1,i,e,-t,o,s,1),p("x","z","y",1,1,t,i,e,n,o,2),p("x","z","y",1,-1,t,i,-e,n,o,3),p("x","y","z",1,-1,t,e,i,n,s,4),p("x","y","z",-1,-1,t,e,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2));function p(_,m,g,y,b,v,S,M,E,x,w){let A=v/E,R=S/x,D=v/2,N=S/2,I=M/2,F=E+1,H=x+1,B=0,Y=0,W=new U;for(let P=0;P<H;P++){let O=P*R-N;for(let tt=0;tt<F;tt++){let rt=tt*A-D;W[_]=rt*y,W[m]=O*b,W[g]=I,c.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[g]=M>0?1:-1,u.push(W.x,W.y,W.z),h.push(tt/E),h.push(1-P/x),B+=1}}for(let P=0;P<x;P++)for(let O=0;O<E;O++){let tt=f+O+F*P,rt=f+O+F*(P+1),gt=f+(O+1)+F*(P+1),ht=f+(O+1)+F*P;l.push(tt,rt,ht),l.push(rt,gt,ht),Y+=6}a.addGroup(d,Y,w),d+=Y,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fa=class r extends Ie{constructor(t=1,e=1,i=1,n=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),s=Math.floor(s);let u=[],h=[],f=[],d=[],p=0,_=[],m=i/2,g=0;y(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(d,2));function y(){let v=new U,S=new U,M=0,E=(e-t)/i;for(let x=0;x<=s;x++){let w=[],A=x/s,R=A*(e-t)+t;for(let D=0;D<=n;D++){let N=D/n,I=N*l+a,F=Math.sin(I),H=Math.cos(I);S.x=R*F,S.y=-A*i+m,S.z=R*H,h.push(S.x,S.y,S.z),v.set(F,E,H).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-A),w.push(p++)}_.push(w)}for(let x=0;x<n;x++)for(let w=0;w<s;w++){let A=_[w][x],R=_[w+1][x],D=_[w+1][x+1],N=_[w][x+1];(t>0||w!==0)&&(u.push(A,R,N),M+=3),(e>0||w!==s-1)&&(u.push(R,D,N),M+=3)}c.addGroup(g,M,0),g+=M}function b(v){let S=p,M=new Ft,E=new U,x=0,w=v===!0?t:e,A=v===!0?1:-1;for(let D=1;D<=n;D++)h.push(0,m*A,0),f.push(0,A,0),d.push(.5,.5),p++;let R=p;for(let D=0;D<=n;D++){let I=D/n*l+a,F=Math.cos(I),H=Math.sin(I);E.x=w*H,E.y=m*A,E.z=w*F,h.push(E.x,E.y,E.z),f.push(0,A,0),M.x=F*.5+.5,M.y=H*.5*A+.5,d.push(M.x,M.y),p++}for(let D=0;D<n;D++){let N=S+D,I=R+D;v===!0?u.push(I,I+1,N):u.push(I+1,I,N),x+=3}c.addGroup(g,x,v===!0?1:2),g+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fc=class r extends Ie{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let s=[],o=[];a(n),c(i),u(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let b=new U,v=new U,S=new U;for(let M=0;M<e.length;M+=3)d(e[M+0],b),d(e[M+1],v),d(e[M+2],S),l(b,v,S,y)}function l(y,b,v,S){let M=S+1,E=[];for(let x=0;x<=M;x++){E[x]=[];let w=y.clone().lerp(v,x/M),A=b.clone().lerp(v,x/M),R=M-x;for(let D=0;D<=R;D++)D===0&&x===M?E[x][D]=w:E[x][D]=w.clone().lerp(A,D/R)}for(let x=0;x<M;x++)for(let w=0;w<2*(M-x)-1;w++){let A=Math.floor(w/2);w%2===0?(f(E[x][A+1]),f(E[x+1][A]),f(E[x][A])):(f(E[x][A+1]),f(E[x+1][A+1]),f(E[x+1][A]))}}function c(y){let b=new U;for(let v=0;v<s.length;v+=3)b.x=s[v+0],b.y=s[v+1],b.z=s[v+2],b.normalize().multiplyScalar(y),s[v+0]=b.x,s[v+1]=b.y,s[v+2]=b.z}function u(){let y=new U;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];let v=m(y)/2/Math.PI+.5,S=g(y)/Math.PI+.5;o.push(v,1-S)}p(),h()}function h(){for(let y=0;y<o.length;y+=6){let b=o[y+0],v=o[y+2],S=o[y+4],M=Math.max(b,v,S),E=Math.min(b,v,S);M>.9&&E<.1&&(b<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),S<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,b){let v=y*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function p(){let y=new U,b=new U,v=new U,S=new U,M=new Ft,E=new Ft,x=new Ft;for(let w=0,A=0;w<s.length;w+=9,A+=6){y.set(s[w+0],s[w+1],s[w+2]),b.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),M.set(o[A+0],o[A+1]),E.set(o[A+2],o[A+3]),x.set(o[A+4],o[A+5]),S.copy(y).add(b).add(v).divideScalar(3);let R=m(S);_(M,A+0,y,R),_(E,A+2,b,R),_(x,A+4,v,R)}}function _(y,b,v,S){S<0&&y.x===1&&(o[b]=y.x-1),v.x===0&&v.z===0&&(o[b]=S/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var vh=new U,yh=new U,Tm=new U,Sh=new qr,dc=class extends Ie{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let n=Math.pow(10,4),s=Math.cos(Sa*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:_,b:m,c:g}=Sh;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Sh.getNormal(Tm),h[0]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,h[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,h[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){let b=(y+1)%3,v=h[y],S=h[b],M=Sh[u[y]],E=Sh[u[b]],x=`${v}_${S}`,w=`${S}_${v}`;w in f&&f[w]?(Tm.dot(f[w].normal)<=s&&(d.push(M.x,M.y,M.z),d.push(E.x,E.y,E.z)),f[w]=null):x in f||(f[x]={index0:c[y],index1:c[b],normal:Tm.clone()})}}for(let p in f)if(f[p]){let{index0:_,index1:m}=f[p];vh.fromBufferAttribute(a,_),yh.fromBufferAttribute(a,m),d.push(vh.x,vh.y,vh.z),d.push(yh.x,yh.y,yh.z)}this.setAttribute("position",new Ae(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Vh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,n=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(n),e.push(s),n=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),n=0,s=i.length,o;e?o=e:o=t*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(n=Math.floor(a+(l-a)/2),c=i[n]-o,c<0)a=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===o)return n/(s-1);let u=i[n],f=i[n+1]-u,d=(o-u)/f;return(n+d)/(s-1)}getTangent(t,e){let n=t-1e-4,s=t+1e-4;n<0&&(n=0),s>1&&(s=1);let o=this.getPoint(n),a=this.getPoint(s),l=e||(o.isVector2?new Ft:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new U,n=[],s=[],o=[],a=new U,l=new xe;for(let d=0;d<=t;d++){let p=d/t;n[d]=this.getTangentAt(p,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(n[0].x),h=Math.abs(n[0].y),f=Math.abs(n[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],a),o[0].crossVectors(n[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(n[d-1],n[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pe(n[d-1].dot(n[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(n[d],s[d])}if(e===!0){let d=Math.acos(pe(s[0].dot(s[t]),-1,1));d/=t,n[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let p=1;p<=t;p++)s[p].applyMatrix4(l.makeRotationAxis(n[p],d*p)),o[p].crossVectors(n[p],s[p])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function Kb(r,t){let e=1-r;return e*e*t}function jb(r,t){return 2*(1-r)*r*t}function Qb(r,t){return r*r*t}function Am(r,t,e,i){return Kb(r,t)+jb(r,e)+Qb(r,i)}var pc=class extends Vh{constructor(t=new U,e=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new U){let i=e,n=this.v0,s=this.v1,o=this.v2;return i.set(Am(t,n.x,s.x,o.x),Am(t,n.y,s.y,o.y),Am(t,n.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}};var La=class r extends fc{constructor(t=1,e=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var mc=class r extends fc{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Fe=class r extends Ie{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let s=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,u=l+1,h=t/a,f=e/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let b=0;b<c;b++){let v=b*h-s;p.push(v,-y,0),_.push(0,0,1),m.push(b/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let b=y+c*g,v=y+c*(g+1),S=y+1+c*(g+1),M=y+1+c*g;d.push(b,v,M),d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Cs=class r extends Ie{constructor(t=1,e=32,i=16,n=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new U,f=new U,d=[],p=[],_=[],m=[];for(let g=0;g<=i;g++){let y=[],b=g/i,v=o+b*a,S=t*Math.cos(v),M=Math.sqrt(t*t-S*S),E=0;g===0&&o===0?E=.5/e:g===i&&l===Math.PI&&(E=-.5/e);for(let x=0;x<=e;x++){let w=x/e,A=n+w*s;h.x=-M*Math.cos(A),h.y=S,h.z=M*Math.sin(A),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+E,1-b),y.push(c++)}u.push(y)}for(let g=0;g<i;g++)for(let y=0;y<e;y++){let b=u[g][y+1],v=u[g][y],S=u[g+1][y],M=u[g+1][y+1];(g!==0||o>0)&&d.push(b,v,M),(g!==i-1||l<Math.PI)&&d.push(v,S,M)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(_,3)),this.setAttribute("uv",new Ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ds=class r extends Ie{constructor(t=1,e=.4,i=12,n=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],u=[],h=[],f=new U,d=new U,p=new U;for(let _=0;_<=i;_++){let m=o+_/i*a;for(let g=0;g<=n;g++){let y=g/n*s;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(g/n),h.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=n;m++){let g=(n+1)*_+m-1,y=(n+1)*(_-1)+m-1,b=(n+1)*(_-1)+m,v=(n+1)*_+m;l.push(g,y,v),l.push(y,b,v)}this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function wo(r){let t={};for(let e in r){t[e]={};for(let i in r[e]){let n=r[e][i];if(iv(n))n.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(iv(n[0])){let s=[];for(let o=0,a=n.length;o<a;o++)s[o]=n[o].clone();t[e][i]=s}else t[e][i]=n.slice();else t[e][i]=n}}return t}function ji(r){let t={};for(let e=0;e<r.length;e++){let i=wo(r[e]);for(let n in i)t[n]=i[n]}return t}function iv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function tw(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function e0(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}var jr={clone:wo,merge:ji},ew=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ae=class extends Er{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ew,this.fragmentShader=iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wo(t.uniforms),this.uniformsGroups=tw(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new xt().setHex(n.value);break;case"v2":this.uniforms[i].value=new Ft().fromArray(n.value);break;case"v3":this.uniforms[i].value=new U().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Je().fromArray(n.value);break;case"m3":this.uniforms[i].value=new se().fromArray(n.value);break;case"m4":this.uniforms[i].value=new xe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Na=class extends ae{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},yo=class extends Er{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yf,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new lr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},yn=class extends yo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Gh=class extends Er{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Wh=class extends Er{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function _a(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Cm(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var Rs=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],s=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<s)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=e[--i-1],t>=s)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=t*n;for(let o=0;o!==n;++o)e[o]=i[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pm,endingEnd:Pm}}intervalChanged_(t,e,i){let n=this.parameterPositions,s=t-2,o=t+1,a=n[s],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Im:s=t,a=2*e-i;break;case Fm:s=n.length-2,a=e+n[s]-n[s+1];break;default:s=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Im:o=t,l=2*i-e;break;case Fm:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-e)/(n-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,b=(-1-d)*m+(1.5+d)*_+.5*p,v=d*m-d*_;for(let S=0;S!==a;++S)s[S]=g*o[u+S]+y*o[c+S]+b*o[l+S]+v*o[h+S];return s}},Yh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(i-e)/(n-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},qh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},$h=class extends Rs{interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(i-e)/(n-e),_=1-p;for(let m=0;m!==a;++m)s[m]=o[c+m]*_+o[l+m]*p;return s}let f=a*2,d=t-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,y=h[g],b=h[g+1],v=t*f+p*2,S=u[v],M=u[v+1],E=rw(i,e,y,S,n);s[p]=Zv(E,_,b,M,m)}return s}};function Zv(r,t,e,i,n){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*i+r*r*r*n}function nw(r,t,e,i,n){let s=1-r;return 3*s*s*(e-t)+6*s*r*(i-e)+3*r*r*(n-i)}function rw(r,t,e,i,n){let s=(r-t)/(n-t);for(let o=0;o<8;o++){let a=Zv(s,t,e,i,n)-r;if(Math.abs(a)<1e-10)break;let l=nw(s,t,e,i,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var Ln=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_a(e,this.TimeBufferType),this.values=_a(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_a(t.times,Array),values:_a(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Cm(t.settings)&&(i.settings={inTangents:_a(t.settings.inTangents,Array),outTangents:_a(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Yh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new $h(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ql:e=this.InterpolantFactoryMethodDiscrete;break;case Lh:e=this.InterpolantFactoryMethodLinear;break;case wh:e=this.InterpolantFactoryMethodSmooth;break;case Rm:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return te("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ql;case this.InterpolantFactoryMethodLinear:return Lh;case this.InterpolantFactoryMethodSmooth:return wh;case this.InterpolantFactoryMethodBezier:return Rm}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Cm(this.settings)&&(nv(this.settings.inTangents,t),nv(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,s=0,o=n-1;for(;s!==n&&i[s]<t;)++s;for(;o!==-1&&i[o]>e;)--o;if(++o,s!==0||o!==n){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,s=i.length;s===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&mb(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===wh,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(n)l=!0;else{let h=a*i,f=h-i,d=h+i;for(let p=0;p!==i;++p){let _=e[h+p];if(_!==e[f+p]||_!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*i,f=o*i;for(let d=0;d!==i;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Cm(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function nv(r,t){for(let e=0,i=r.length;e!==i;e+=2)r[e]*=t}Ln.prototype.ValueTypeName="";Ln.prototype.TimeBufferType=Float32Array;Ln.prototype.ValueBufferType=Float32Array;Ln.prototype.DefaultInterpolation=Lh;var Ps=class extends Ln{constructor(t,e,i){super(t,e,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ql;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var Zh=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}};Zh.prototype.ValueTypeName="color";var Jh=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}};Jh.prototype.ValueTypeName="number";var Kh=class extends Rs{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let u=c+a;c!==u;c+=4)Ji.slerpFlat(s,0,o,c-a,o,c,l);return s}},gc=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Kh(this.times,this.values,this.getValueSize(),t)}};gc.prototype.ValueTypeName="quaternion";gc.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Ln{constructor(t,e,i){super(t,e,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=Ql;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var jh=class extends Ln{constructor(t,e,i,n){super(t,e,i,n)}};jh.prototype.ValueTypeName="vector";var Qh=class{constructor(t,e,i){let n=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,s===!1&&n.onStart!==void 0&&n.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,n.onProgress!==void 0&&n.onProgress(u,o,a),o===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jv=new Qh,tf=class{constructor(t){this.manager=t!==void 0?t:Jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,s){i.load(t,n,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ua=class extends Di{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_c=class extends Ua{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Di.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Dm=new xe,rv=new U,sv=new U,ef=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pa,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;rv.setFromMatrixPosition(t.matrixWorld),e.position.copy(rv),sv.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sv),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Dm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Dm,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,o=n?n.z/s.x:1,a=n?n.w/s.y:1,l=n?n.x/s.x:0,c=n?n.y/s.y:0;t.coordinateSystem===Ea||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Dm)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Mh=new U,bh=new Ji,yr=new U,xc=class extends Di{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Mh,bh,yr),yr.x===1&&yr.y===1&&yr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mh,bh,yr.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Mh,bh,yr),yr.x===1&&yr.y===1&&yr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mh,bh,yr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Es=new U,ov=new Ft,av=new Ft,Zi=class extends xc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Aa*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Es.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Es.x,Es.y).multiplyScalar(-t/Es.z),Es.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Es.x,Es.y).multiplyScalar(-t/Es.z)}getViewSize(t,e){return this.getViewBounds(t,ov,av),e.subVectors(av,ov)}setViewOffset(t,e,i,n,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Sa*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,s=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Fs=class extends xc{constructor(t=-1,e=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,s=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Nm=class extends ef{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oa=class extends Ua{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Di.DEFAULT_UP),this.updateMatrix(),this.target=new Di,this.shadow=new Nm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},vc=class extends Ua{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var xa=-90,va=1,nf=class extends Di{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Zi(xa,va,t,e);n.layers=this.layers,this.add(n);let s=new Zi(xa,va,t,e);s.layers=this.layers,this.add(s);let o=new Zi(xa,va,t,e);o.layers=this.layers,this.add(o);let a=new Zi(xa,va,t,e);a.layers=this.layers,this.add(a);let l=new Zi(xa,va,t,e);l.layers=this.layers,this.add(l);let c=new Zi(xa,va,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===ar)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},rf=class extends Zi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},yc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=sw.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sw(){this._document.hidden===!1&&this.reset()}var i0="\\[\\]\\.:\\/",ow=new RegExp("["+i0+"]","g"),n0="[^"+i0+"]",aw="[^"+i0.replace("\\.","")+"]",lw=/((?:WC+[\/:])*)/.source.replace("WC",n0),cw=/(WCOD+)?/.source.replace("WCOD",aw),uw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",n0),hw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",n0),fw=new RegExp("^"+lw+cw+uw+hw+"$"),dw=["material","materials","bones","map"],Um=class{constructor(t,e,i){let n=i||Ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ye=class r{constructor(t,e,i){this.path=e,this.parsedPath=i||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,i):new r(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ow,"")}static parseTrackName(t){let e=fw.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=i.nodeName.substring(n+1);dw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ye.Composite=Um;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SD=new Float32Array(1);var lv=new xe,Zr=class{constructor(t,e,i=0,n=1/0){this.ray=new go(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new Da,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ee("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lv.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lv),this}intersectObject(t,e=!0,i=[]){return Om(t,this,i,e),i.sort(cv),i}intersectObjects(t,e=!0,i=[]){for(let n=0,s=t.length;n<s;n++)Om(t[n],this,i,e);return i.sort(cv),i}};function cv(r,t){return r.distance-t.distance}function Om(r,t,e,i){let n=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let s=r.children;for(let o=0,a=s.length;o<a;o++)Om(s[o],t,e,!0)}}var c0=class c0{constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=n,this}};c0.prototype.isMatrix2=!0;var Bm=c0;function r0(r,t,e,i){let n=pw(i);switch(e){case Jm:return r*t;case ff:return r*t/n.components*n.byteLength;case df:return r*t/n.components*n.byteLength;case Os:return r*t*2/n.components*n.byteLength;case pf:return r*t*2/n.components*n.byteLength;case Km:return r*t*3/n.components*n.byteLength;case bn:return r*t*4/n.components*n.byteLength;case mf:return r*t*4/n.components*n.byteLength;case Rc:case Pc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _f:case vf:return Math.max(r,16)*Math.max(t,8)/4;case gf:case xf:return Math.max(r,8)*Math.max(t,8)/2;case yf:case Sf:case bf:case wf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Mf:case Lc:case Ef:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Tf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Af:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Cf:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Df:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Rf:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pf:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case If:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ff:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Lf:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Nf:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Uf:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Of:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Bf:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kf:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case zf:case Hf:case Vf:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Gf:case Wf:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Nc:case Xf:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pw(r){switch(r){case Sn:case Ym:return{byteLength:1,components:1};case za:case qm:case yi:return{byteLength:2,components:1};case uf:case hf:return{byteLength:2,components:4};case ur:case cf:case Mn:return{byteLength:4,components:1};case $m:case Zm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function xy(){let r=null,t=!1,e=null,i=null;function n(s,o){i=r.requestAnimationFrame(n),e(s,o)}return{start:function(){t!==!0&&e!==null&&r!==null&&(i=r.requestAnimationFrame(n),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gw(r){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:o}}var _w=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xw=`#ifdef USE_ALPHAHASH
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
#endif`,vw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bw=`#ifdef USE_AOMAP
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
#endif`,ww=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ew=`#ifdef USE_BATCHING
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
#endif`,Tw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Aw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rw=`#ifdef USE_IRIDESCENCE
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
#endif`,Pw=`#ifdef USE_BUMPMAP
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
#endif`,Iw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Fw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,zw=`#define PI 3.141592653589793
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
} // validated`,Hw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vw=`vec3 transformedNormal = objectNormal;
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
#endif`,Gw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ww=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qw="gl_FragColor = linearToOutputTexel( gl_FragColor );",$w=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zw=`#ifdef USE_ENVMAP
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
#endif`,Jw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kw=`#ifdef USE_ENVMAP
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
#endif`,jw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qw=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rE=`#ifdef USE_GRADIENTMAP
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
}`,sE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cE=`#ifdef USE_ENVMAP
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
#endif`,uE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pE=`PhysicalMaterial material;
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
#endif`,mE=`uniform sampler2D dfgLUT;
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
}`,gE=`
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
#endif`,_E=`#if defined( RE_IndirectDiffuse )
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,SE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ME=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AE=`#if defined( USE_POINTS_UV )
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
#endif`,CE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,DE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,RE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
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
#endif`,LE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,OE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zE=`#ifdef USE_NORMALMAP
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
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,VE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,GE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iT=`float getShadowMask() {
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
}`,nT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rT=`#ifdef USE_SKINNING
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
#endif`,sT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oT=`#ifdef USE_SKINNING
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
#endif`,aT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hT=`#ifdef USE_TRANSMISSION
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
#endif`,fT=`#ifdef USE_TRANSMISSION
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xT=`uniform sampler2D t2D;
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
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
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
}`,wT=`#if DEPTH_PACKING == 3200
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
}`,ET=`#define DISTANCE
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
}`,TT=`#define DISTANCE
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DT=`uniform float scale;
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#include <common>
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
}`,IT=`uniform vec3 diffuse;
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
}`,FT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,UT=`#define MATCAP
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
}`,OT=`#define NORMAL
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
}`,BT=`#define NORMAL
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
}`,kT=`#define PHONG
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
}`,zT=`#define PHONG
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
}`,HT=`#define STANDARD
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
}`,VT=`#define STANDARD
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
}`,GT=`#define TOON
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
}`,WT=`#define TOON
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
}`,XT=`uniform float size;
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
}`,YT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,$T=`uniform vec3 color;
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
}`,ZT=`uniform float rotation;
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
}`,JT=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:_w,alphahash_pars_fragment:xw,alphamap_fragment:vw,alphamap_pars_fragment:yw,alphatest_fragment:Sw,alphatest_pars_fragment:Mw,aomap_fragment:bw,aomap_pars_fragment:ww,batching_pars_vertex:Ew,batching_vertex:Tw,begin_vertex:Aw,beginnormal_vertex:Cw,bsdfs:Dw,iridescence_fragment:Rw,bumpmap_pars_fragment:Pw,clipping_planes_fragment:Iw,clipping_planes_pars_fragment:Fw,clipping_planes_pars_vertex:Lw,clipping_planes_vertex:Nw,color_fragment:Uw,color_pars_fragment:Ow,color_pars_vertex:Bw,color_vertex:kw,common:zw,cube_uv_reflection_fragment:Hw,defaultnormal_vertex:Vw,displacementmap_pars_vertex:Gw,displacementmap_vertex:Ww,emissivemap_fragment:Xw,emissivemap_pars_fragment:Yw,colorspace_fragment:qw,colorspace_pars_fragment:$w,envmap_fragment:Zw,envmap_common_pars_fragment:Jw,envmap_pars_fragment:Kw,envmap_pars_vertex:jw,envmap_physical_pars_fragment:cE,envmap_vertex:Qw,fog_vertex:tE,fog_pars_vertex:eE,fog_fragment:iE,fog_pars_fragment:nE,gradientmap_pars_fragment:rE,lightmap_pars_fragment:sE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:aE,lights_pars_begin:lE,lights_toon_fragment:uE,lights_toon_pars_fragment:hE,lights_phong_fragment:fE,lights_phong_pars_fragment:dE,lights_physical_fragment:pE,lights_physical_pars_fragment:mE,lights_fragment_begin:gE,lights_fragment_maps:_E,lights_fragment_end:xE,lightprobes_pars_fragment:vE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:SE,logdepthbuf_pars_vertex:ME,logdepthbuf_vertex:bE,map_fragment:wE,map_pars_fragment:EE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:CE,metalnessmap_pars_fragment:DE,morphinstance_vertex:RE,morphcolor_vertex:PE,morphnormal_vertex:IE,morphtarget_pars_vertex:FE,morphtarget_vertex:LE,normal_fragment_begin:NE,normal_fragment_maps:UE,normal_pars_fragment:OE,normal_pars_vertex:BE,normal_vertex:kE,normalmap_pars_fragment:zE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:VE,clearcoat_pars_fragment:GE,iridescence_pars_fragment:WE,opaque_fragment:XE,packing:YE,premultiplied_alpha_fragment:qE,project_vertex:$E,dithering_fragment:ZE,dithering_pars_fragment:JE,roughnessmap_fragment:KE,roughnessmap_pars_fragment:jE,shadowmap_pars_fragment:QE,shadowmap_pars_vertex:tT,shadowmap_vertex:eT,shadowmask_pars_fragment:iT,skinbase_vertex:nT,skinning_pars_vertex:rT,skinning_vertex:sT,skinnormal_vertex:oT,specularmap_fragment:aT,specularmap_pars_fragment:lT,tonemapping_fragment:cT,tonemapping_pars_fragment:uT,transmission_fragment:hT,transmission_pars_fragment:fT,uv_pars_fragment:dT,uv_pars_vertex:pT,uv_vertex:mT,worldpos_vertex:gT,background_vert:_T,background_frag:xT,backgroundCube_vert:vT,backgroundCube_frag:yT,cube_vert:ST,cube_frag:MT,depth_vert:bT,depth_frag:wT,distance_vert:ET,distance_frag:TT,equirect_vert:AT,equirect_frag:CT,linedashed_vert:DT,linedashed_frag:RT,meshbasic_vert:PT,meshbasic_frag:IT,meshlambert_vert:FT,meshlambert_frag:LT,meshmatcap_vert:NT,meshmatcap_frag:UT,meshnormal_vert:OT,meshnormal_frag:BT,meshphong_vert:kT,meshphong_frag:zT,meshphysical_vert:HT,meshphysical_frag:VT,meshtoon_vert:GT,meshtoon_frag:WT,points_vert:XT,points_frag:YT,shadow_vert:qT,shadow_frag:$T,sprite_vert:ZT,sprite_frag:JT},Rt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Cr={basic:{uniforms:ji([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:ji([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:ji([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:ji([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:ji([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new xt(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:ji([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:ji([Rt.points,Rt.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:ji([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:ji([Rt.common,Rt.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:ji([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:ji([Rt.sprite,Rt.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:ji([Rt.common,Rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:ji([Rt.lights,Rt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Cr.physical={uniforms:ji([Cr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var Zf={r:0,b:0,g:0},KT=new xe,vy=new se;vy.set(-1,0,0,0,1,0,0,0,1);function jT(r,t,e,i,n,s){let o=new xt(0),a=n===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let v=y.backgroundBlurriness>0;b=t.get(b,v)}return b}function p(y){let b=!1,v=d(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),b=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(y,b){let v=d(b);v&&(v.isCubeTexture||v.mapping===Cc)?(c===void 0&&(c=new qt(new As(1,1,1),new ae({name:"BackgroundCubeMaterial",uniforms:wo(Cr.backgroundCube.uniforms),vertexShader:Cr.backgroundCube.vertexShader,fragmentShader:Cr.backgroundCube.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(KT.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vy),c.material.toneMapped=_e.getTransfer(v.colorSpace)!==be,(u!==v||h!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new qt(new Fe(2,2),new ae({name:"BackgroundMaterial",uniforms:wo(Cr.background.uniforms),vertexShader:Cr.background.vertexShader,fragmentShader:Cr.background.fragmentShader,side:Ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=_e.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,f=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(Zf,e0(r)),e.buffers.color.setClear(Zf.r,Zf.g,Zf.b,b,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),a=b,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function QT(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=f(null),s=n,o=!1;function a(R,D,N,I,F){let H=!1,B=h(R,I,N,D);s!==B&&(s=B,c(s.object)),H=d(R,I,N,F),H&&p(R,I,N,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(R,D,N,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(R){return r.bindVertexArray(R)}function u(R){return r.deleteVertexArray(R)}function h(R,D,N,I){let F=I.wireframe===!0,H=i[D.id];H===void 0&&(H={},i[D.id]=H);let B=R.isInstancedMesh===!0?R.id:0,Y=H[B];Y===void 0&&(Y={},H[B]=Y);let W=Y[N.id];W===void 0&&(W={},Y[N.id]=W);let P=W[F];return P===void 0&&(P=f(l()),W[F]=P),P}function f(R){let D=[],N=[],I=[];for(let F=0;F<e;F++)D[F]=0,N[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:N,attributeDivisors:I,object:R,attributes:{},index:null}}function d(R,D,N,I){let F=s.attributes,H=D.attributes,B=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let O=F[W],tt=H[W];if(tt===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(tt=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(tt=R.instanceColor)),O===void 0||O.attribute!==tt||tt&&O.data!==tt.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function p(R,D,N,I){let F={},H=D.attributes,B=0,Y=N.getAttributes();for(let W in Y)if(Y[W].location>=0){let O=H[W];O===void 0&&(W==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),W==="instanceColor"&&R.instanceColor&&(O=R.instanceColor));let tt={};tt.attribute=O,O&&O.data&&(tt.data=O.data),F[W]=tt,B++}s.attributes=F,s.attributesNum=B,s.index=I}function _(){let R=s.newAttributes;for(let D=0,N=R.length;D<N;D++)R[D]=0}function m(R){g(R,0)}function g(R,D){let N=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;N[R]=1,I[R]===0&&(r.enableVertexAttribArray(R),I[R]=1),F[R]!==D&&(r.vertexAttribDivisor(R,D),F[R]=D)}function y(){let R=s.newAttributes,D=s.enabledAttributes;for(let N=0,I=D.length;N<I;N++)D[N]!==R[N]&&(r.disableVertexAttribArray(N),D[N]=0)}function b(R,D,N,I,F,H,B){B===!0?r.vertexAttribIPointer(R,D,N,F,H):r.vertexAttribPointer(R,D,N,I,F,H)}function v(R,D,N,I){_();let F=I.attributes,H=N.getAttributes(),B=D.defaultAttributeValues;for(let Y in H){let W=H[Y];if(W.location>=0){let P=F[Y];if(P===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(P=R.instanceColor)),P!==void 0){let O=P.normalized,tt=P.itemSize,rt=t.get(P);if(rt===void 0)continue;let gt=rt.buffer,ht=rt.type,vt=rt.bytesPerElement,$=ht===r.INT||ht===r.UNSIGNED_INT||P.gpuType===cf;if(P.isInterleavedBufferAttribute){let j=P.data,pt=j.stride,Dt=P.offset;if(j.isInstancedInterleavedBuffer){for(let dt=0;dt<W.locationSize;dt++)g(W.location+dt,j.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let dt=0;dt<W.locationSize;dt++)b(W.location+dt,tt/W.locationSize,ht,O,pt*vt,(Dt+tt/W.locationSize*dt)*vt,$)}else{if(P.isInstancedBufferAttribute){for(let j=0;j<W.locationSize;j++)g(W.location+j,P.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let j=0;j<W.locationSize;j++)m(W.location+j);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let j=0;j<W.locationSize;j++)b(W.location+j,tt/W.locationSize,ht,O,tt*vt,tt/W.locationSize*j*vt,$)}}else if(B!==void 0){let O=B[Y];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(W.location,O);break;case 3:r.vertexAttrib3fv(W.location,O);break;case 4:r.vertexAttrib4fv(W.location,O);break;default:r.vertexAttrib1fv(W.location,O)}}}}y()}function S(){w();for(let R in i){let D=i[R];for(let N in D){let I=D[N];for(let F in I){let H=I[F];for(let B in H)u(H[B].object),delete H[B];delete I[F]}}delete i[R]}}function M(R){if(i[R.id]===void 0)return;let D=i[R.id];for(let N in D){let I=D[N];for(let F in I){let H=I[F];for(let B in H)u(H[B].object),delete H[B];delete I[F]}}delete i[R.id]}function E(R){for(let D in i){let N=i[D];for(let I in N){let F=N[I];if(F[R.id]===void 0)continue;let H=F[R.id];for(let B in H)u(H[B].object),delete H[B];delete F[R.id]}}}function x(R){for(let D in i){let N=i[D],I=R.isInstancedMesh===!0?R.id:0,F=N[I];if(F!==void 0){for(let H in F){let B=F[H];for(let Y in B)u(B[Y].object),delete B[Y];delete F[H]}delete N[I],Object.keys(N).length===0&&delete i[D]}}}function w(){A(),o=!0,s!==n&&(s=n,c(s.object))}function A(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:w,resetDefaultState:A,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function tA(r,t,e){let i;function n(l){i=l}function s(l,c){r.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,u){u!==0&&(r.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];e.update(f,i,1)}this.setMode=n,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function eA(r,t,e,i){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(E){return!(E!==bn&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let x=E===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Sn&&E!==Mn&&!x&&i.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(te("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),b=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),M=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:S,samples:M}}function iA(r){let t=this,e=null,i=0,n=!1,s=!1,o=new or,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||i!==0||n;return n=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=r.get(h);if(!n||p===null||p.length===0||s&&!m)s?u(null):c();else{let y=s?0:i,b=y*4,v=g.clippingState||null;l.value=v,v=u(p,f,b,d);for(let S=0;S!==b;++S)v[S]=e[S];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let b=0,v=d;b!==_;++b,v+=4)o.copy(h[b]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Wa=4,nA=6,rA=20,sA=256,Uc=new Fs,Kv=new xt,u0=null,h0=0,f0=0,d0=!1,oA=new U,Eo=new U,Ya=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,s={}){let{size:o=256,position:a=oA}=s;u0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),f0=this._renderer.getActiveMipmapLevel(),d0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(u0,h0,f0),this._renderer.xr.enabled=d0,t.scissorTest=!1,Ga(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ns||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),u0=this._renderer.getRenderTarget(),h0=this._renderer.getActiveCubeFace(),f0=this._renderer.getActiveMipmapLevel(),d0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:yi,format:bn,colorSpace:tc,depthBuffer:!1},n=jv(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jv(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=aA(s)),this._blurMaterial=cA(s,t,e),this._ggxMaterial=lA(s,t,e)}return n}_compileMaterial(t){let e=new qt(new Ie,t);this._renderer.compile(e,Uc)}_sceneToCubeUV(t,e,i,n,s){let l=new Zi(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Kv),h.toneMapping=cr,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(n),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new As,new si({name:"PMREM.Background",side:Oi,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,g=!1,y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,g=!0):(m.color.copy(Kv),g=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));let S=this._cubeSize;Ga(n,v*S,b>2?S:0,S,S),h.setRenderTarget(n),g&&h.render(_,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Ns||t.mapping===bo;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ty()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());let s=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Ga(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Uc)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let s=1;s<n;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=c*1.25,d=h*f,{_lodMax:p}=this,_=this._sizeLods[i],m=3*_*(i>p-Wa?i-p+Wa:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,Ga(s,m,g,3*_,2*_),n.setRenderTarget(s),n.render(a,Uc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-i,Ga(t,m,g,3*_,2*_),n.setRenderTarget(t),n.render(a,Uc)}_blur(t,e,i,n){let s=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,o),this._blurPass(s,t,i,i,o)}_blurPass(t,e,i,n,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[n],h=3*u*(n>this._lodMax-Wa?n-this._lodMax+Wa:0),f=4*(this._cubeSize-u);Ga(e,h,f,3*u,2*u),o.setRenderTarget(e),o.render(l,Uc)}};function aA(r){let t=[],e=[],i=r,n=r-Wa+1+nA;for(let s=0;s<n;s++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,f=6,d=3,p=new Float32Array(d*f*h),_=new Float32Array(d*f*h);for(let g=0;g<h;g++){let y=g%3*2/3-1,b=g>2?0:-1,v=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];p.set(v,d*f*g);for(let S=0;S<f;S++){let M=u[S*2]*2-1,E=u[S*2+1]*2-1;g===0?Eo.set(1,E,M):g===1?Eo.set(-M,1,-E):g===2?Eo.set(-M,E,1):g===3?Eo.set(-1,E,-M):g===4?Eo.set(-M,-1,E):Eo.set(M,E,-1),Eo.toArray(_,(g*f+S)*d)}}let m=new Ie;m.setAttribute("position",new Te(p,d)),m.setAttribute("outputDirection",new Te(_,d)),e.push(new qt(m,null)),i>Wa&&i--}return{lodMeshes:e,sizeLods:t}}function jv(r,t,e){let i=new ri(r,t,e);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ga(r,t,e,i,n){r.viewport.set(t,e,i,n),r.scissor.set(t,e,i,n)}function lA(r,t,e){return new ae({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function cA(r,t,e){return new ae({name:"SphericalGaussianBlur",defines:{SAMPLES:rA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qv(){return new ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qf(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function ty(){return new ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Qf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Kf=class extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new cc(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new As(5,5,5),s=new ae({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oi,blending:Jn});s.uniforms.tEquirect.value=e;let o=new qt(n,s),a=e.minFilter;return e.minFilter===Tr&&(e.minFilter=vi),new nf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(s)}};function uA(r){let t=new WeakMap,e=new WeakMap,i=null;function n(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===of||d===af)if(t.has(f)){let p=t.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Kf(p.height);return _.fromEquirectangularTexture(r,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,p=d===of||d===af,_=d===Ns||d===bo;if(p||_){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return i===null&&(i=new Ya(r)),m=p?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Ya(r)),m=p?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===of?f.mapping=Ns:d===af&&(f.mapping=bo),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:h}}function hA(r){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=r.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&po("WebGLRenderer: "+i+" extension not supported."),n}}}function fA(r,t,e,i){let n={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",o),delete n[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return n[f.id]===!0||(f.addEventListener("dispose",o),n[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,p=h.attributes.position,_=0;if(p===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let b=0,v=y.length;b<v;b+=3){let S=y[b+0],M=y[b+1],E=y[b+2];f.push(S,M,M,E,E,S)}}else{let y=p.array;_=p.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let S=b+0,M=b+1,E=b+2;f.push(S,M,M,E,E,S)}}let m=new(p.count>=65535?sc:rc)(f,1);m.version=_;let g=s.get(h);g&&t.remove(g),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function dA(r,t,e){let i;function n(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(i,f,s,h*o),e.update(f,i,1)}function c(h,f,d){d!==0&&(r.drawElementsInstanced(i,f,s,h*o,d),e.update(f,i,d))}function u(h,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];e.update(_,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function pA(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function mA(r,t,e){let i=new WeakMap,n=new Je;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==h){let w=function(){E.dispose(),i.delete(a),a.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let v=a.attributes.position.count*b,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let M=new Float32Array(v*S*4*h),E=new nc(M,v,S,h);E.type=Mn,E.needsUpdate=!0;let x=b*4;for(let A=0;A<h;A++){let R=m[A],D=g[A],N=y[A],I=v*S*4*A;for(let F=0;F<R.count;F++){let H=F*x;d===!0&&(n.fromBufferAttribute(R,F),M[I+H+0]=n.x,M[I+H+1]=n.y,M[I+H+2]=n.z,M[I+H+3]=0),p===!0&&(n.fromBufferAttribute(D,F),M[I+H+4]=n.x,M[I+H+5]=n.y,M[I+H+6]=n.z,M[I+H+7]=0),_===!0&&(n.fromBufferAttribute(N,F),M[I+H+8]=n.x,M[I+H+9]=n.y,M[I+H+10]=n.z,M[I+H+11]=N.itemSize===4?n.w:1)}}f={count:h,texture:E,size:new Ft(v,S)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",p),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function gA(r,t,e,i,n){let s=new WeakMap;function o(c){let u=n.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function a(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var _A={[Mc]:"LINEAR_TONE_MAPPING",[bc]:"REINHARD_TONE_MAPPING",[wc]:"CINEON_TONE_MAPPING",[Ec]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Mo]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function xA(r,t,e,i,n,s){let o=new ri(t,e,{type:r,depthBuffer:n,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ie;c.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ae([0,2,0,0,2,0],2));let u=new Na({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new qt(c,u),f=new Fs(-1,1,1,-1,0,1),d=null,p=null,_=!1,m,g=null,y=[],b=!1;this.setSize=function(v,S){o.setSize(v,S),a!==null&&a.setSize(v,S),l!==null&&l.setSize(v,S);for(let M=0;M<y.length;M++){let E=y[M];E.setSize&&E.setSize(v,S)}},this.setEffects=function(v){y=v,b=y.length>0&&y[0].isRenderPass===!0;let S=o.width,M=o.height;y.length>0&&a===null&&(a=new ri(S,M,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new ri(S,M,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<y.length;E++){let x=y[E];x.setSize&&x.setSize(S,M)}},this.begin=function(v,S){if(_||v.toneMapping===cr&&y.length===0)return!1;if(g=S,S!==null){let M=S.width,E=S.height;(o.width!==M||o.height!==E)&&this.setSize(M,E)}return b===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=cr,!0},this.hasRenderPass=function(){return b},this.end=function(v,S){v.toneMapping=m,_=!0;let M=o,E=a;for(let x=0;x<y.length;x++){let w=y[x];w.enabled!==!1&&(w.render(v,E,M,S),w.needsSwap!==!1&&(M=E,E=E===a?l:a))}if(d!==v.outputColorSpace||p!==v.toneMapping){d=v.outputColorSpace,p=v.toneMapping,u.defines={},_e.getTransfer(d)===be&&(u.defines.SRGB_TRANSFER="");let x=_A[p];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(g),v.render(h,f),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var yy=new fn,g0=new Ts(1,1),Sy=new nc,My=new Oh,by=new cc,ey=[],iy=[],ny=new Float32Array(16),ry=new Float32Array(9),sy=new Float32Array(4);function qa(r,t,e){let i=r[0];if(i<=0||i>0)return r;let n=t*e,s=ey[n];if(s===void 0&&(s=new Float32Array(n),ey[n]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Si(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Mi(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function td(r,t){let e=iy[t];e===void 0&&(e=new Int32Array(t),iy[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function vA(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function yA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Si(e,t))return;r.uniform2fv(this.addr,t),Mi(e,t)}}function SA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Si(e,t))return;r.uniform3fv(this.addr,t),Mi(e,t)}}function MA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Si(e,t))return;r.uniform4fv(this.addr,t),Mi(e,t)}}function bA(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Si(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Mi(e,t)}else{if(Si(e,i))return;sy.set(i),r.uniformMatrix2fv(this.addr,!1,sy),Mi(e,i)}}function wA(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Si(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Mi(e,t)}else{if(Si(e,i))return;ry.set(i),r.uniformMatrix3fv(this.addr,!1,ry),Mi(e,i)}}function EA(r,t){let e=this.cache,i=t.elements;if(i===void 0){if(Si(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Mi(e,t)}else{if(Si(e,i))return;ny.set(i),r.uniformMatrix4fv(this.addr,!1,ny),Mi(e,i)}}function TA(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function AA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Si(e,t))return;r.uniform2iv(this.addr,t),Mi(e,t)}}function CA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Si(e,t))return;r.uniform3iv(this.addr,t),Mi(e,t)}}function DA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Si(e,t))return;r.uniform4iv(this.addr,t),Mi(e,t)}}function RA(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function PA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Si(e,t))return;r.uniform2uiv(this.addr,t),Mi(e,t)}}function IA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Si(e,t))return;r.uniform3uiv(this.addr,t),Mi(e,t)}}function FA(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Si(e,t))return;r.uniform4uiv(this.addr,t),Mi(e,t)}}function LA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let s;this.type===r.SAMPLER_2D_SHADOW?(g0.compareFunction=e.isReversedDepthBuffer()?$f:qf,s=g0):s=yy,e.setTexture2D(t||s,n)}function NA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||My,n)}function UA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||by,n)}function OA(r,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||Sy,n)}function BA(r){switch(r){case 5126:return vA;case 35664:return yA;case 35665:return SA;case 35666:return MA;case 35674:return bA;case 35675:return wA;case 35676:return EA;case 5124:case 35670:return TA;case 35667:case 35671:return AA;case 35668:case 35672:return CA;case 35669:case 35673:return DA;case 5125:return RA;case 36294:return PA;case 36295:return IA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return LA;case 35679:case 36299:case 36307:return NA;case 35680:case 36300:case 36308:case 36293:return UA;case 36289:case 36303:case 36311:case 36292:return OA}}function kA(r,t){r.uniform1fv(this.addr,t)}function zA(r,t){let e=qa(t,this.size,2);r.uniform2fv(this.addr,e)}function HA(r,t){let e=qa(t,this.size,3);r.uniform3fv(this.addr,e)}function VA(r,t){let e=qa(t,this.size,4);r.uniform4fv(this.addr,e)}function GA(r,t){let e=qa(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function WA(r,t){let e=qa(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function XA(r,t){let e=qa(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function YA(r,t){r.uniform1iv(this.addr,t)}function qA(r,t){r.uniform2iv(this.addr,t)}function $A(r,t){r.uniform3iv(this.addr,t)}function ZA(r,t){r.uniform4iv(this.addr,t)}function JA(r,t){r.uniform1uiv(this.addr,t)}function KA(r,t){r.uniform2uiv(this.addr,t)}function jA(r,t){r.uniform3uiv(this.addr,t)}function QA(r,t){r.uniform4uiv(this.addr,t)}function tC(r,t,e){let i=this.cache,n=t.length,s=td(e,n);Si(i,s)||(r.uniform1iv(this.addr,s),Mi(i,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=g0:o=yy;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,s[a])}function eC(r,t,e){let i=this.cache,n=t.length,s=td(e,n);Si(i,s)||(r.uniform1iv(this.addr,s),Mi(i,s));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||My,s[o])}function iC(r,t,e){let i=this.cache,n=t.length,s=td(e,n);Si(i,s)||(r.uniform1iv(this.addr,s),Mi(i,s));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||by,s[o])}function nC(r,t,e){let i=this.cache,n=t.length,s=td(e,n);Si(i,s)||(r.uniform1iv(this.addr,s),Mi(i,s));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||Sy,s[o])}function rC(r){switch(r){case 5126:return kA;case 35664:return zA;case 35665:return HA;case 35666:return VA;case 35674:return GA;case 35675:return WA;case 35676:return XA;case 5124:case 35670:return YA;case 35667:case 35671:return qA;case 35668:case 35672:return $A;case 35669:case 35673:return ZA;case 5125:return JA;case 36294:return KA;case 36295:return jA;case 36296:return QA;case 35678:case 36198:case 36298:case 36306:case 35682:return tC;case 35679:case 36299:case 36307:return eC;case 35680:case 36300:case 36308:case 36293:return iC;case 36289:case 36303:case 36311:case 36292:return nC}}var _0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=BA(e.type)}},x0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=rC(e.type)}},v0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let s=0,o=n.length;s!==o;++s){let a=n[s];a.setValue(t,e[a.id],i)}}},p0=/(\w+)(\])?(\[|\.)?/g;function oy(r,t){r.seq.push(t),r.map[t.id]=t}function sC(r,t,e){let i=r.name,n=i.length;for(p0.lastIndex=0;;){let s=p0.exec(i),o=p0.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){oy(e,c===void 0?new _0(a,r,t):new x0(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new v0(a),oy(e,h)),e=h}}}var Xa=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);sC(a,l,this)}let n=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):s.push(o);n.length>0&&(this.seq=n.concat(s))}setValue(t,e,i,n){let s=this.map[e];s!==void 0&&s.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,s=t.length;n!==s;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function ay(r,t,e){let i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}var oC=37297,aC=0;function lC(r,t){let e=r.split(`
`),i=[],n=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=n;o<s;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ly=new se;function cC(r){_e._getMatrix(ly,_e.workingColorSpace,r);let t=`mat3( ${ly.elements.map(e=>e.toFixed(4))} )`;switch(_e.getTransfer(r)){case ec:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function cy(r,t,e){let i=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+lC(r.getShaderSource(t),a)}else return s}function uC(r,t){let e=cC(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var hC={[Mc]:"Linear",[bc]:"Reinhard",[wc]:"Cineon",[Ec]:"ACESFilmic",[Ac]:"AgX",[Mo]:"Neutral",[Tc]:"Custom"};function fC(r,t){let e=hC[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jf=new U;function dC(){_e.getLuminanceCoefficients(Jf);let r=Jf.x.toFixed(4),t=Jf.y.toFixed(4),e=Jf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bc).join(`
`)}function mC(r){let t=[];for(let e in r){let i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function gC(r,t){let e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let s=r.getActiveAttrib(t,n),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Bc(r){return r!==""}function uy(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hy(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _C=/^[ \t]*#include +<([\w\d./]+)>/gm;function y0(r){return r.replace(_C,vC)}var xC=new Map;function vC(r,t){let e=ue[t];if(e===void 0){let i=xC.get(t);if(i!==void 0)e=ue[i],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return y0(e)}var yC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fy(r){return r.replace(yC,SC)}function SC(r,t,e,i){let n="";for(let s=parseInt(t);s<parseInt(e);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function dy(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var MC={[Sc]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function bC(r){return MC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var wC={[Ns]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[Cc]:"ENVMAP_TYPE_CUBE_UV"};function EC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var TC={[bo]:"ENVMAP_MODE_REFRACTION"};function AC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":TC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var CC={[Wm]:"ENVMAP_BLENDING_MULTIPLY",[Pv]:"ENVMAP_BLENDING_MIX",[Iv]:"ENVMAP_BLENDING_ADD"};function DC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":CC[r.combine]||"ENVMAP_BLENDING_NONE"}function RC(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function PC(r,t,e,i){let n=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=bC(e),c=EC(e),u=AC(e),h=DC(e),f=RC(e),d=pC(e),p=mC(s),_=n.createProgram(),m,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Bc).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Bc).join(`
`),g.length>0&&(g+=`
`)):(m=[dy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bc).join(`
`),g=[dy(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cr?"#define TONE_MAPPING":"",e.toneMapping!==cr?ue.tonemapping_pars_fragment:"",e.toneMapping!==cr?fC("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,uC("linearToOutputTexel",e.outputColorSpace),dC(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bc).join(`
`)),o=y0(o),o=uy(o,e),o=hy(o,e),a=y0(a),a=uy(a,e),a=hy(a,e),o=fy(o),a=fy(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=y+m+o,v=y+g+a,S=ay(n,n.VERTEX_SHADER,b),M=ay(n,n.FRAGMENT_SHADER,v);n.attachShader(_,S),n.attachShader(_,M),e.index0AttributeName!==void 0?n.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function E(R){if(r.debug.checkShaderErrors){let D=n.getProgramInfoLog(_)||"",N=n.getShaderInfoLog(S)||"",I=n.getShaderInfoLog(M)||"",F=D.trim(),H=N.trim(),B=I.trim(),Y=!0,W=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,S,M);else{let P=cy(n,S,"vertex"),O=cy(n,M,"fragment");ee("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+P+`
`+O)}else F!==""?te("WebGLProgram: Program Info Log:",F):(H===""||B==="")&&(W=!1);W&&(R.diagnostics={runnable:Y,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:B,prefix:g}})}n.deleteShader(S),n.deleteShader(M),x=new Xa(n,_),w=gC(n,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=n.getProgramParameter(_,oC)),A},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=aC++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=M,this}var IC=0,S0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new M0(t),e.set(t,i)),i}},M0=class{constructor(t){this.id=IC++,this.code=t,this.usedTimes=0}};function FC(r){return r===Os||r===Lc||r===Nc}function LC(r,t,e,i,n,s){let o=new Da,a=new S0,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,f=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,w,A,R,D,N){let I=R.fog,F=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,B=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,Y=t.get(x.envMap||H,B),W=Y&&Y.mapping===Cc?Y.image.height:null,P=d[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&te("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let O=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,tt=O!==void 0?O.length:0,rt=0;F.morphAttributes.position!==void 0&&(rt=1),F.morphAttributes.normal!==void 0&&(rt=2),F.morphAttributes.color!==void 0&&(rt=3);let gt,ht,vt,$;if(P){let Yt=Cr[P];gt=Yt.vertexShader,ht=Yt.fragmentShader}else{gt=x.vertexShader,ht=x.fragmentShader;let Yt=a.getVertexShaderStage(x),lt=a.getFragmentShaderStage(x);a.update(x,Yt,lt),vt=Yt.id,$=lt.id}let j=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Dt=D.isInstancedMesh===!0,dt=D.isBatchedMesh===!0,Vt=!!x.map,Tt=!!x.matcap,At=!!Y,Qt=!!x.aoMap,ne=!!x.lightMap,G=!!x.bumpMap&&x.wireframe===!1,Kt=!!x.normalMap,he=!!x.displacementMap,De=!!x.emissiveMap,Zt=!!x.metalnessMap,It=!!x.roughnessMap,V=x.anisotropy>0,$e=x.clearcoat>0,re=x.dispersion>0,L=x.retroreflectivity>0,T=x.iridescence>0,X=x.sheen>0,Z=x.transmission>0,Q=V&&!!x.anisotropyMap,mt=$e&&!!x.clearcoatMap,ct=$e&&!!x.clearcoatNormalMap,et=$e&&!!x.clearcoatRoughnessMap,nt=T&&!!x.iridescenceMap,St=T&&!!x.iridescenceThicknessMap,Ot=X&&!!x.sheenColorMap,Mt=X&&!!x.sheenRoughnessMap,yt=!!x.specularMap,ft=!!x.specularColorMap,Wt=!!x.specularIntensityMap,jt=Z&&!!x.transmissionMap,k=Z&&!!x.thicknessMap,_t=!!x.gradientMap,it=!!x.alphaMap,bt=x.alphaTest>0,Ct=!!x.alphaHash,st=!!x.extensions,ut=cr;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ut=r.toneMapping);let ot={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:gt,fragmentShader:ht,defines:x.defines,customVertexShaderID:vt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:dt,batchingColor:dt&&D._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&D.instanceColor!==null,instancingMorph:Dt&&D.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Vt,matcap:Tt,envMap:At,envMapMode:At&&Y.mapping,envMapCubeUVHeight:W,aoMap:Qt,lightMap:ne,bumpMap:G,normalMap:Kt,displacementMap:he,emissiveMap:De,normalMapObjectSpace:Kt&&x.normalMapType===Nv,normalMapTangentSpace:Kt&&x.normalMapType===Yf,packedNormalMap:Kt&&x.normalMapType===Yf&&FC(x.normalMap.format),metalnessMap:Zt,roughnessMap:It,anisotropy:V,anisotropyMap:Q,clearcoat:$e,clearcoatMap:mt,clearcoatNormalMap:ct,clearcoatRoughnessMap:et,dispersion:re,retroreflection:L,iridescence:T,iridescenceMap:nt,iridescenceThicknessMap:St,sheen:X,sheenColorMap:Ot,sheenRoughnessMap:Mt,specularMap:yt,specularColorMap:ft,specularIntensityMap:Wt,transmission:Z,transmissionMap:jt,thicknessMap:k,gradientMap:_t,opaque:x.transparent===!1&&x.blending===ka&&x.alphaToCoverage===!1,alphaMap:it,alphaTest:bt,alphaHash:Ct,combine:x.combine,mapUv:Vt&&p(x.map.channel),aoMapUv:Qt&&p(x.aoMap.channel),lightMapUv:ne&&p(x.lightMap.channel),bumpMapUv:G&&p(x.bumpMap.channel),normalMapUv:Kt&&p(x.normalMap.channel),displacementMapUv:he&&p(x.displacementMap.channel),emissiveMapUv:De&&p(x.emissiveMap.channel),metalnessMapUv:Zt&&p(x.metalnessMap.channel),roughnessMapUv:It&&p(x.roughnessMap.channel),anisotropyMapUv:Q&&p(x.anisotropyMap.channel),clearcoatMapUv:mt&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:St&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(x.sheenRoughnessMap.channel),specularMapUv:yt&&p(x.specularMap.channel),specularColorMapUv:ft&&p(x.specularColorMap.channel),specularIntensityMapUv:Wt&&p(x.specularIntensityMap.channel),transmissionMapUv:jt&&p(x.transmissionMap.channel),thicknessMapUv:k&&p(x.thicknessMap.channel),alphaMapUv:it&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Kt||V),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Vt||it),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&Kt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:rt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:ut,decodeVideoTexture:Vt&&x.map.isVideoTexture===!0&&_e.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&_e.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ki,flipSided:x.side===Oi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let A in x.defines)w.push(A),w.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(g(w,x),y(w,x),w.push(r.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function g(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.retroreflection&&o.enable(24),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),w.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function b(x){let w=d[x.type],A;if(w){let R=Cr[w];A=jr.clone(R.uniforms)}else A=x.uniforms;return A}function v(x,w){let A=u.get(w);return A!==void 0?++A.usedTimes:(A=new PC(r,w,x,n),c.push(A),u.set(w,A)),A}function S(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function M(x){a.remove(x)}function E(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:c,dispose:E}}function NC(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function i(o){r.delete(o)}function n(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:s}}function UC(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function py(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function my(){let r=[],t=0,e=[],i=[],n=[];function s(){t=0,e.length=0,i.length=0,n.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let y=r[t];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},r[t]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=g),t++,y}function l(f,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let b=a(f,d,p,_,m,g);p.transmission>0?i.push(b):p.transparent===!0?n.push(b):e.push(b)}function c(f,d,p,_,m,g){let y=a(f,d,p,_,m,g);p.transmission>0?i.unshift(y):p.transparent===!0?n.unshift(y):e.unshift(y)}function u(f,d){e.length>1&&e.sort(f||UC),i.length>1&&i.sort(d||py),n.length>1&&n.sort(d||py)}function h(){for(let f=t,d=r.length;f<d;f++){let p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:s,push:l,unshift:c,finish:h,sort:u}}function OC(){let r=new WeakMap;function t(i,n){let s=r.get(i),o;return s===void 0?(o=new my,r.set(i,[o])):n>=s.length?(o=new my,s.push(o)):o=s[n],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function BC(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new xt};break;case"SpotLight":e={position:new U,direction:new U,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function kC(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var zC=0;function HC(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function VC(r){let t=new BC,e=kC(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let n=new U,s=new xe,o=new xe;function a(c){let u=0,h=0,f=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,b=0,v=0,S=0,M=0,E=0,x=0,w=0,A=0;c.sort(HC);for(let D=0,N=c.length;D<N;D++){let I=c[D],F=I.color,H=I.intensity,B=I.distance,Y=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Os?Y=I.shadow.map.texture:Y=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*H,h+=F.g*H,f+=F.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(I.sh.coefficients[W],H);A++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,O=e.get(I);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[p]=O,i.sunShadowMap[p]=Y;let tt=P.getViewportCount();for(let rt=0;rt<tt;rt++)i.sunShadowMatrix[_+rt]=P.getMatrix(rt),i.sunShadowCascade[_+rt]=P._cascadeData[rt];_+=tt,p++}i.sun[d]=W,d++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let P=I.shadow,O=e.get(I);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,i.directionalShadow[m]=O,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=I.shadow.matrix,S++}i.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(F).multiplyScalar(H),W.distance=B,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,i.spot[y]=W;let P=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,P.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[y]=P.matrix,I.castShadow){let O=e.get(I);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,i.spotShadow[y]=O,i.spotShadowMap[y]=Y,E++}y++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(F).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),i.rectArea[b]=W,b++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let P=I.shadow,O=e.get(I);O.shadowIntensity=P.intensity,O.shadowBias=P.bias,O.shadowNormalBias=P.normalBias,O.shadowRadius=P.radius,O.shadowMapSize=P.mapSize,O.shadowCameraNear=P.camera.near,O.shadowCameraFar=P.camera.far,i.pointShadow[g]=O,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=I.shadow.matrix,M++}i.point[g]=W,g++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),i.hemi[v]=W,v++}}b>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;let R=i.hash;(R.sunLength!==d||R.directionalLength!==m||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==b||R.hemiLength!==v||R.numSunShadows!==p||R.numDirectionalShadows!==S||R.numPointShadows!==M||R.numSpotShadows!==E||R.numSpotMaps!==x||R.numLightProbes!==A)&&(i.sun.length=d,i.directional.length=m,i.spot.length=y,i.rectArea.length=b,i.point.length=g,i.hemi.length=v,i.sunShadow.length=p,i.sunShadowMap.length=p,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=M,i.pointShadowMap.length=M,i.pointShadowMatrix.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.spotLightMatrix.length=E+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,R.sunLength=d,R.directionalLength=m,R.pointLength=g,R.spotLength=y,R.rectAreaLength=b,R.hemiLength=v,R.numSunShadows=p,R.numDirectionalShadows=S,R.numPointShadows=M,R.numSpotShadows=E,R.numSpotMaps=x,R.numLightProbes=A,i.version=zC++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,b=c.length;y<b;y++){let v=c[y];if(v.isSunLight){let S=i.sun[h];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),h++}else if(v.isDirectionalLight){let S=i.directional[f];S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),f++}else if(v.isSpotLight){let S=i.spot[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),p++}else if(v.isRectAreaLight){let S=i.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:i}}function gy(r){let t=new VC(r),e=[],i=[],n=[];function s(f){h.camera=f,e.length=0,i.length=0,n.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(f){n.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function GC(r){let t=new WeakMap;function e(n,s=0){let o=t.get(n),a;return o===void 0?(a=new gy(r),t.set(n,[a])):s>=o.length?(a=new gy(r),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var WC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XC=`uniform sampler2D shadow_pass;
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
}`,YC=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],qC=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],_y=new xe,Oc=new U,m0=new U;function $C(r,t,e){let i=new Pa,n=new Ft,s=new Ft,o=new Je,a=new Gh,l=new Wh,c={},u=e.maxTextureSize,h={[Ls]:Oi,[Oi]:Ls,[Ki]:Ki},f=new ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:WC,fragmentShader:XC}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Ie;p.setAttribute("position",new Te(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let g=this.type;this.render=function(M,E,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;this.type===fv&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Sc);let w=r.getRenderTarget(),A=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Jn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=g!==this.type;N&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=M.length;I<F;I++){let H=M[I],B=H.shadow;if(B===void 0){te("WebGLShadowMap:",H,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;n.copy(B.mapSize);let Y=B.getFrameExtents();n.multiply(Y),s.copy(B.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/Y.x),n.x=s.x*Y.x,B.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/Y.y),n.y=s.y*Y.y,B.mapSize.y=s.y));let W=r.state.buffers.depth.getReversed();if(B.camera._reversedDepth=W,B.map===null||N===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ba){if(H.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ri(n.x,n.y,{format:Os,type:yi,minFilter:vi,magFilter:vi,generateMipmaps:!1}),B.map.texture.name=H.name+".shadowMap",B.map.depthTexture=new Ts(n.x,n.y,Mn),B.map.depthTexture.name=H.name+".shadowMapDepth",B.map.depthTexture.format=Mr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ci,B.map.depthTexture.magFilter=ci}else H.isPointLight?(B.map=new Kf(n.x),B.map.depthTexture=new Hh(n.x,ur)):(B.map=new ri(n.x,n.y),B.map.depthTexture=new Ts(n.x,n.y,ur)),B.map.depthTexture.name=H.name+".shadowMap",B.map.depthTexture.format=Mr,this.type===Sc?(B.map.depthTexture.compareFunction=W?$f:qf,B.map.depthTexture.minFilter=vi,B.map.depthTexture.magFilter=vi):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ci,B.map.depthTexture.magFilter=ci);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==n.x||B.map.height!==n.y)&&B.map.setSize(n.x,n.y);let P=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();H.isPointLight!==!0&&B.updateMatrices(H,x);for(let O=0;O<P;O++){let tt=B.getCamera(O);if(H.isPointLight){let rt=B.camera,gt=B.matrix,ht=H.distance||rt.far;ht!==rt.far&&(rt.far=ht,rt.updateProjectionMatrix()),Oc.setFromMatrixPosition(H.matrixWorld),rt.position.copy(Oc),m0.copy(rt.position),m0.add(YC[O]),rt.up.copy(qC[O]),rt.lookAt(m0),rt.updateMatrixWorld(),gt.makeTranslation(-Oc.x,-Oc.y,-Oc.z),_y.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_y,rt.coordinateSystem,rt.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,O),r.clear();else{O===0&&(r.setRenderTarget(B.map),r.clear());let rt=B.getViewport(O);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),D.viewport(o)}i=B.getFrustum(O),v(E,x,tt,H,this.type)}B.isPointLightShadow!==!0&&this.type===Ba&&y(B,x),B.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(w,A,R)};function y(M,E){let x=t.update(_);f.defines.VSM_SAMPLES!==M.blurSamples&&(f.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new ri(n.x,n.y,{format:Os,type:yi}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),f.uniforms.shadow_pass.value=M.map.depthTexture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(E,null,x,f,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(E,null,x,d,_,null)}function b(M,E,x,w){let A=null,R=x.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(R!==void 0)A=R;else if(A=x.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=A.uuid,N=E.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let F=I[N];F===void 0&&(F=A.clone(),I[N]=F,E.addEventListener("dispose",S)),A=F}if(A.visible=E.visible,A.wireframe=E.wireframe,w===Ba?A.side=E.shadowSide!==null?E.shadowSide:E.side:A.side=E.shadowSide!==null?E.shadowSide:h[E.side],A.alphaMap=E.alphaMap,A.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,A.map=E.map,A.clipShadows=E.clipShadows,A.clippingPlanes=E.clippingPlanes,A.clipIntersection=E.clipIntersection,A.displacementMap=E.displacementMap,A.displacementScale=E.displacementScale,A.displacementBias=E.displacementBias,A.wireframeLinewidth=E.wireframeLinewidth,A.linewidth=E.linewidth,x.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let D=r.properties.get(A);D.light=x}return A}function v(M,E,x,w,A){if(M.visible===!1)return;if(M.layers.test(E.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===Ba)&&(!M.frustumCulled||M.intersectsFrustum(i))){M.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,M.matrixWorld);let N=t.update(M),I=M.material;if(Array.isArray(I)){let F=N.groups;for(let H=0,B=F.length;H<B;H++){let Y=F[H],W=I[Y.materialIndex];if(W&&W.visible){let P=b(M,W,w,A);M.onBeforeShadow(r,M,E,x,N,P,Y),r.renderBufferDirect(x,null,N,P,M,Y),M.onAfterShadow(r,M,E,x,N,P,Y)}}}else if(I.visible){let F=b(M,I,w,A);M.onBeforeShadow(r,M,E,x,N,F,null),r.renderBufferDirect(x,null,N,F,M,null),M.onAfterShadow(r,M,E,x,N,F,null)}}let D=M.children;for(let N=0,I=D.length;N<I;N++)v(D[N],E,x,w,A)}function S(M){M.target.removeEventListener("dispose",S);for(let x in c){let w=c[x],A=M.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}function ZC(r,t){function e(){let k=!1,_t=new Je,it=null,bt=new Je(0,0,0,0);return{setMask:function(Ct){it!==Ct&&!k&&(r.colorMask(Ct,Ct,Ct,Ct),it=Ct)},setLocked:function(Ct){k=Ct},setClear:function(Ct,st,ut,ot,Yt){Yt===!0&&(Ct*=ot,st*=ot,ut*=ot),_t.set(Ct,st,ut,ot),bt.equals(_t)===!1&&(r.clearColor(Ct,st,ut,ot),bt.copy(_t))},reset:function(){k=!1,it=null,bt.set(-1,0,0,0)}}}function i(){let k=!1,_t=!1,it=null,bt=null,Ct=null;return{setReversed:function(st){if(_t!==st){let ut=t.get("EXT_clip_control");st?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),_t=st;let ot=Ct;Ct=null,this.setClear(ot)}},getReversed:function(){return _t},setTest:function(st){st?j(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(st){it!==st&&!k&&(r.depthMask(st),it=st)},setFunc:function(st){if(_t&&(st=qv[st]),bt!==st){switch(st){case Th:r.depthFunc(r.NEVER);break;case Ah:r.depthFunc(r.ALWAYS);break;case Ch:r.depthFunc(r.LESS);break;case ba:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Rh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}bt=st}},setLocked:function(st){k=st},setClear:function(st){Ct!==st&&(Ct=st,_t&&(st=1-st),r.clearDepth(st))},reset:function(){k=!1,it=null,bt=null,Ct=null,_t=!1}}}function n(){let k=!1,_t=null,it=null,bt=null,Ct=null,st=null,ut=null,ot=null,Yt=null;return{setTest:function(lt){k||(lt?j(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(lt){_t!==lt&&!k&&(r.stencilMask(lt),_t=lt)},setFunc:function(lt,Jt,kt){(it!==lt||bt!==Jt||Ct!==kt)&&(r.stencilFunc(lt,Jt,kt),it=lt,bt=Jt,Ct=kt)},setOp:function(lt,Jt,kt){(st!==lt||ut!==Jt||ot!==kt)&&(r.stencilOp(lt,Jt,kt),st=lt,ut=Jt,ot=kt)},setLocked:function(lt){k=lt},setClear:function(lt){Yt!==lt&&(r.clearStencil(lt),Yt=lt)},reset:function(){k=!1,_t=null,it=null,bt=null,Ct=null,st=null,ut=null,ot=null,Yt=null}}}let s=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,b=null,v=null,S=null,M=null,E=null,x=new xt(0,0,0),w=0,A=!1,R=null,D=null,N=null,I=null,F=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Y=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Y>=1):W.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Y>=2);let P=null,O={},tt=r.getParameter(r.SCISSOR_BOX),rt=r.getParameter(r.VIEWPORT),gt=new Je().fromArray(tt),ht=new Je().fromArray(rt);function vt(k,_t,it,bt){let Ct=new Uint8Array(4),st=r.createTexture();r.bindTexture(k,st),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<it;ut++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(_t,0,r.RGBA,1,1,bt,0,r.RGBA,r.UNSIGNED_BYTE,Ct):r.texImage2D(_t+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ct);return st}let $={};$[r.TEXTURE_2D]=vt(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(ba),G(!1),Kt(km),j(r.CULL_FACE),Qt(Jn);function j(k){u[k]!==!0&&(r.enable(k),u[k]=!0)}function pt(k){u[k]!==!1&&(r.disable(k),u[k]=!1)}function Dt(k,_t){return f[k]!==_t?(r.bindFramebuffer(k,_t),f[k]=_t,k===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=_t),k===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=_t),!0):!1}function dt(k,_t){let it=p,bt=!1;if(k){it=d.get(_t),it===void 0&&(it=[],d.set(_t,it));let Ct=k.textures;if(it.length!==Ct.length||it[0]!==r.COLOR_ATTACHMENT0){for(let st=0,ut=Ct.length;st<ut;st++)it[st]=r.COLOR_ATTACHMENT0+st;it.length=Ct.length,bt=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,bt=!0);bt&&r.drawBuffers(it)}function Vt(k){return _!==k?(r.useProgram(k),_=k,!0):!1}let Tt={[So]:r.FUNC_ADD,[pv]:r.FUNC_SUBTRACT,[mv]:r.FUNC_REVERSE_SUBTRACT};Tt[gv]=r.MIN,Tt[_v]=r.MAX;let At={[xv]:r.ZERO,[vv]:r.ONE,[yv]:r.SRC_COLOR,[Vm]:r.SRC_ALPHA,[Tv]:r.SRC_ALPHA_SATURATE,[wv]:r.DST_COLOR,[Mv]:r.DST_ALPHA,[Sv]:r.ONE_MINUS_SRC_COLOR,[Gm]:r.ONE_MINUS_SRC_ALPHA,[Ev]:r.ONE_MINUS_DST_COLOR,[bv]:r.ONE_MINUS_DST_ALPHA,[Av]:r.CONSTANT_COLOR,[Cv]:r.ONE_MINUS_CONSTANT_COLOR,[Dv]:r.CONSTANT_ALPHA,[Rv]:r.ONE_MINUS_CONSTANT_ALPHA};function Qt(k,_t,it,bt,Ct,st,ut,ot,Yt,lt){if(k===Jn){m===!0&&(pt(r.BLEND),m=!1);return}if(m===!1&&(j(r.BLEND),m=!0),k!==dv){if(k!==g||lt!==A){if((y!==So||S!==So)&&(r.blendEquation(r.FUNC_ADD),y=So,S=So),lt)switch(k){case ka:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.ONE,r.ONE);break;case zm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ee("WebGLState: Invalid blending: ",k);break}else switch(k){case ka:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case zm:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hm:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",k);break}b=null,v=null,M=null,E=null,x.set(0,0,0),w=0,g=k,A=lt}return}Ct=Ct||_t,st=st||it,ut=ut||bt,(_t!==y||Ct!==S)&&(r.blendEquationSeparate(Tt[_t],Tt[Ct]),y=_t,S=Ct),(it!==b||bt!==v||st!==M||ut!==E)&&(r.blendFuncSeparate(At[it],At[bt],At[st],At[ut]),b=it,v=bt,M=st,E=ut),(ot.equals(x)===!1||Yt!==w)&&(r.blendColor(ot.r,ot.g,ot.b,Yt),x.copy(ot),w=Yt),g=k,A=!1}function ne(k,_t){k.side===Ki?pt(r.CULL_FACE):j(r.CULL_FACE);let it=k.side===Oi;_t&&(it=!it),G(it),k.blending===ka&&k.transparent===!1?Qt(Jn):Qt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let bt=k.stencilWrite;a.setTest(bt),bt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function G(k){R!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),R=k)}function Kt(k){k!==uv?(j(r.CULL_FACE),k!==D&&(k===km?r.cullFace(r.BACK):k===hv?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),D=k}function he(k){k!==N&&(B&&r.lineWidth(k),N=k)}function De(k,_t,it){k?(j(r.POLYGON_OFFSET_FILL),(I!==_t||F!==it)&&(I=_t,F=it,o.getReversed()&&(_t=-_t),r.polygonOffset(_t,it))):pt(r.POLYGON_OFFSET_FILL)}function Zt(k){k?j(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function It(k){k===void 0&&(k=r.TEXTURE0+H-1),P!==k&&(r.activeTexture(k),P=k)}function V(k,_t,it){it===void 0&&(P===null?it=r.TEXTURE0+H-1:it=P);let bt=O[it];bt===void 0&&(bt={type:void 0,texture:void 0},O[it]=bt),(bt.type!==k||bt.texture!==_t)&&(P!==it&&(r.activeTexture(it),P=it),r.bindTexture(k,_t||$[k]),bt.type=k,bt.texture=_t)}function $e(){let k=O[P];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{r.compressedTexImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function T(){try{r.texSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function X(){try{r.texSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function Q(){try{r.compressedTexSubImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function mt(){try{r.texStorage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function ct(){try{r.texStorage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function et(){try{r.texImage2D(...arguments)}catch(k){ee("WebGLState:",k)}}function nt(){try{r.texImage3D(...arguments)}catch(k){ee("WebGLState:",k)}}function St(k){return h[k]!==void 0?h[k]:r.getParameter(k)}function Ot(k,_t){h[k]!==_t&&(r.pixelStorei(k,_t),h[k]=_t)}function Mt(k){gt.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),gt.copy(k))}function yt(k){ht.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),ht.copy(k))}function ft(k,_t){let it=c.get(_t);it===void 0&&(it=new WeakMap,c.set(_t,it));let bt=it.get(k);bt===void 0&&(bt=r.getUniformBlockIndex(_t,k.name),it.set(k,bt))}function Wt(k,_t){let bt=c.get(_t).get(k);l.get(_t)!==bt&&(r.uniformBlockBinding(_t,bt,k.__bindingPointIndex),l.set(_t,bt))}function jt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},h={},P=null,O={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,b=null,v=null,S=null,M=null,E=null,x=new xt(0,0,0),w=0,A=!1,R=null,D=null,N=null,I=null,F=null,gt.set(0,0,r.canvas.width,r.canvas.height),ht.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:pt,bindFramebuffer:Dt,drawBuffers:dt,useProgram:Vt,setBlending:Qt,setMaterial:ne,setFlipSided:G,setCullFace:Kt,setLineWidth:he,setPolygonOffset:De,setScissorTest:Zt,activeTexture:It,bindTexture:V,unbindTexture:$e,compressedTexImage2D:re,compressedTexImage3D:L,texImage2D:et,texImage3D:nt,pixelStorei:Ot,getParameter:St,updateUBOMapping:ft,uniformBlockBinding:Wt,texStorage2D:mt,texStorage3D:ct,texSubImage2D:T,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:Q,scissor:Mt,viewport:yt,reset:jt}}function JC(r,t,e,i,n,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ft,u=new WeakMap,h=new Set,f,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,T){return p?new OffscreenCanvas(L,T):ic("canvas")}function m(L,T,X){let Z=1,Q=re(L);if((Q.width>X||Q.height>X)&&(Z=X/Math.max(Q.width,Q.height)),Z<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let mt=Math.floor(Z*Q.width),ct=Math.floor(Z*Q.height);f===void 0&&(f=_(mt,ct));let et=T?_(mt,ct):f;return et.width=mt,et.height=ct,et.getContext("2d").drawImage(L,0,0,mt,ct),te("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+mt+"x"+ct+")."),et}else return"data"in L&&te("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),L;return L}function g(L){return L.generateMipmaps}function y(L){r.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(L,T,X,Z,Q,mt=!1){if(L!==null){if(r[L]!==void 0)return r[L];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct;Z&&(ct=t.get("EXT_texture_norm16"),ct||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let et=T;if(T===r.RED&&(X===r.FLOAT&&(et=r.R32F),X===r.HALF_FLOAT&&(et=r.R16F),X===r.UNSIGNED_BYTE&&(et=r.R8),X===r.UNSIGNED_SHORT&&ct&&(et=ct.R16_EXT),X===r.SHORT&&ct&&(et=ct.R16_SNORM_EXT)),T===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.R8UI),X===r.UNSIGNED_SHORT&&(et=r.R16UI),X===r.UNSIGNED_INT&&(et=r.R32UI),X===r.BYTE&&(et=r.R8I),X===r.SHORT&&(et=r.R16I),X===r.INT&&(et=r.R32I)),T===r.RG&&(X===r.FLOAT&&(et=r.RG32F),X===r.HALF_FLOAT&&(et=r.RG16F),X===r.UNSIGNED_BYTE&&(et=r.RG8),X===r.UNSIGNED_SHORT&&ct&&(et=ct.RG16_EXT),X===r.SHORT&&ct&&(et=ct.RG16_SNORM_EXT)),T===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RG8UI),X===r.UNSIGNED_SHORT&&(et=r.RG16UI),X===r.UNSIGNED_INT&&(et=r.RG32UI),X===r.BYTE&&(et=r.RG8I),X===r.SHORT&&(et=r.RG16I),X===r.INT&&(et=r.RG32I)),T===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RGB8UI),X===r.UNSIGNED_SHORT&&(et=r.RGB16UI),X===r.UNSIGNED_INT&&(et=r.RGB32UI),X===r.BYTE&&(et=r.RGB8I),X===r.SHORT&&(et=r.RGB16I),X===r.INT&&(et=r.RGB32I)),T===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),X===r.UNSIGNED_INT&&(et=r.RGBA32UI),X===r.BYTE&&(et=r.RGBA8I),X===r.SHORT&&(et=r.RGBA16I),X===r.INT&&(et=r.RGBA32I)),T===r.RGB&&(X===r.UNSIGNED_SHORT&&ct&&(et=ct.RGB16_EXT),X===r.SHORT&&ct&&(et=ct.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(et=r.R11F_G11F_B10F)),T===r.RGBA){let nt=mt?ec:_e.getTransfer(Q);X===r.FLOAT&&(et=r.RGBA32F),X===r.HALF_FLOAT&&(et=r.RGBA16F),X===r.UNSIGNED_BYTE&&(et=nt===be?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&ct&&(et=ct.RGBA16_EXT),X===r.SHORT&&ct&&(et=ct.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function S(L,T){let X;return L?T===null||T===ur||T===Ha?X=r.DEPTH24_STENCIL8:T===Mn?X=r.DEPTH32F_STENCIL8:T===za&&(X=r.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ur||T===Ha?X=r.DEPTH_COMPONENT24:T===Mn?X=r.DEPTH_COMPONENT32F:T===za&&(X=r.DEPTH_COMPONENT16),X}function M(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==ci&&L.minFilter!==vi?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){let T=L.target;T.removeEventListener("dispose",E),w(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&h.delete(T)}function x(L){let T=L.target;T.removeEventListener("dispose",x),R(T)}function w(L){let T=i.get(L);if(T.__webglInit===void 0)return;let X=L.source,Z=d.get(X);if(Z){let Q=Z[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&A(L),Object.keys(Z).length===0&&d.delete(X)}i.remove(L)}function A(L){let T=i.get(L);r.deleteTexture(T.__webglTexture);let X=L.source,Z=d.get(X);delete Z[T.__cacheKey],o.memory.textures--}function R(L){let T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let Q=0;Q<T.__webglFramebuffer[Z].length;Q++)r.deleteFramebuffer(T.__webglFramebuffer[Z][Q]);else r.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)r.deleteFramebuffer(T.__webglFramebuffer[Z]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let X=L.textures;for(let Z=0,Q=X.length;Z<Q;Z++){let mt=i.get(X[Z]);mt.__webglTexture&&(r.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(X[Z])}i.remove(L)}let D=0;function N(){D=0}function I(){return D}function F(L){D=L}function H(){let L=D;return L>=n.maxTextures&&te("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+n.maxTextures),D+=1,L}function B(L){let T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function Y(L,T){let X=i.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&X.__version!==L.version){let Z=L.image;if(Z===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{pt(X,L,T);return}}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+T)}function W(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){pt(X,L,T);return}else L.isExternalTexture&&(X.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+T)}function P(L,T){let X=i.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&X.__version!==L.version){pt(X,L,T);return}e.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+T)}function O(L,T){let X=i.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&X.__version!==L.version){Dt(X,L,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+T)}let tt={[wa]:r.REPEAT,[Sr]:r.CLAMP_TO_EDGE,[Fh]:r.MIRRORED_REPEAT},rt={[ci]:r.NEAREST,[Fv]:r.NEAREST_MIPMAP_NEAREST,[Dc]:r.NEAREST_MIPMAP_LINEAR,[vi]:r.LINEAR,[lf]:r.LINEAR_MIPMAP_NEAREST,[Tr]:r.LINEAR_MIPMAP_LINEAR},gt={[Ov]:r.NEVER,[Vv]:r.ALWAYS,[Bv]:r.LESS,[qf]:r.LEQUAL,[kv]:r.EQUAL,[$f]:r.GEQUAL,[zv]:r.GREATER,[Hv]:r.NOTEQUAL};function ht(L,T){if(T.type===Mn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===vi||T.magFilter===lf||T.magFilter===Dc||T.magFilter===Tr||T.minFilter===vi||T.minFilter===lf||T.minFilter===Dc||T.minFilter===Tr)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,tt[T.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,tt[T.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,tt[T.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,rt[T.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,rt[T.minFilter]),T.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,gt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ci||T.minFilter!==Dc&&T.minFilter!==Tr||T.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let X=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function vt(L,T){let X=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));let Z=T.source,Q=d.get(Z);Q===void 0&&(Q={},d.set(Z,Q));let mt=B(T);if(mt!==L.__cacheKey){Q[mt]===void 0&&(Q[mt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),Q[mt].usedTimes++;let ct=Q[L.__cacheKey];ct!==void 0&&(Q[L.__cacheKey].usedTimes--,ct.usedTimes===0&&A(T)),L.__cacheKey=mt,L.__webglTexture=Q[mt].texture}return X}function $(L,T,X){return Math.floor(Math.floor(L/X)/T)}function j(L,T,X,Z){let mt=L.updateRanges;if(mt.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,X,Z,T.data);else{mt.sort((Ot,Mt)=>Ot.start-Mt.start);let ct=0;for(let Ot=1;Ot<mt.length;Ot++){let Mt=mt[ct],yt=mt[Ot],ft=Mt.start+Mt.count,Wt=$(yt.start,T.width,4),jt=$(Mt.start,T.width,4);yt.start<=ft+1&&Wt===jt&&$(yt.start+yt.count-1,T.width,4)===Wt?Mt.count=Math.max(Mt.count,yt.start+yt.count-Mt.start):(++ct,mt[ct]=yt)}mt.length=ct+1;let et=e.getParameter(r.UNPACK_ROW_LENGTH),nt=e.getParameter(r.UNPACK_SKIP_PIXELS),St=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let Ot=0,Mt=mt.length;Ot<Mt;Ot++){let yt=mt[Ot],ft=Math.floor(yt.start/4),Wt=Math.ceil(yt.count/4),jt=ft%T.width,k=Math.floor(ft/T.width),_t=Wt,it=1;e.pixelStorei(r.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(r.UNPACK_SKIP_ROWS,k),e.texSubImage2D(r.TEXTURE_2D,0,jt,k,_t,it,X,Z,T.data)}L.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,et),e.pixelStorei(r.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(r.UNPACK_SKIP_ROWS,St)}}function pt(L,T,X){let Z=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=r.TEXTURE_3D);let Q=vt(L,T),mt=T.source;e.bindTexture(Z,L.__webglTexture,r.TEXTURE0+X);let ct=i.get(mt);if(mt.version!==ct.__version||Q===!0){if(e.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let it=_e.getPrimaries(_e.workingColorSpace),bt=T.colorSpace===Jr?null:_e.getPrimaries(T.colorSpace),Ct=T.colorSpace===Jr||it===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct)}e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment);let nt=m(T.image,!1,n.maxTextureSize);nt=$e(T,nt);let St=s.convert(T.format,T.colorSpace),Ot=s.convert(T.type),Mt=v(T.internalFormat,St,Ot,T.normalized,T.colorSpace,T.isVideoTexture);ht(Z,T);let yt,ft=T.mipmaps,Wt=T.isVideoTexture!==!0,jt=ct.__version===void 0||Q===!0,k=mt.dataReady,_t=M(T,nt);if(T.isDepthTexture)Mt=S(T.format===Us,T.type),jt&&(Wt?e.texStorage2D(r.TEXTURE_2D,1,Mt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Mt,nt.width,nt.height,0,St,Ot,null));else if(T.isDataTexture)if(ft.length>0){Wt&&jt&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,ft[0].width,ft[0].height);for(let it=0,bt=ft.length;it<bt;it++)yt=ft[it],Wt?k&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,yt.width,yt.height,St,Ot,yt.data):e.texImage2D(r.TEXTURE_2D,it,Mt,yt.width,yt.height,0,St,Ot,yt.data);T.generateMipmaps=!1}else Wt?(jt&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,nt.width,nt.height),k&&j(T,nt,St,Ot)):e.texImage2D(r.TEXTURE_2D,0,Mt,nt.width,nt.height,0,St,Ot,nt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Wt&&jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Mt,ft[0].width,ft[0].height,nt.depth);for(let it=0,bt=ft.length;it<bt;it++)if(yt=ft[it],T.format!==bn)if(St!==null)if(Wt){if(k)if(T.layerUpdates.size>0){let Ct=r0(yt.width,yt.height,T.format,T.type);for(let st of T.layerUpdates){let ut=yt.data.subarray(st*Ct/yt.data.BYTES_PER_ELEMENT,(st+1)*Ct/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,st,yt.width,yt.height,1,St,ut)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,nt.depth,St,yt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,it,Mt,yt.width,yt.height,nt.depth,0,yt.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?k&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,nt.depth,St,Ot,yt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,it,Mt,yt.width,yt.height,nt.depth,0,St,Ot,yt.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Wt&&jt&&e.texStorage2D(r.TEXTURE_2D,_t,Mt,ft[0].width,ft[0].height);for(let it=0,bt=ft.length;it<bt;it++)yt=ft[it],T.format!==bn?St!==null?Wt?k&&e.compressedTexSubImage2D(r.TEXTURE_2D,it,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(r.TEXTURE_2D,it,Mt,yt.width,yt.height,0,yt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?k&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,yt.width,yt.height,St,Ot,yt.data):e.texImage2D(r.TEXTURE_2D,it,Mt,yt.width,yt.height,0,St,Ot,yt.data)}else if(T.isDataArrayTexture)if(Wt){if(jt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,_t,Mt,nt.width,nt.height,nt.depth),k)if(T.layerUpdates.size>0){let it=r0(nt.width,nt.height,T.format,T.type);for(let bt of T.layerUpdates){let Ct=nt.data.subarray(bt*it/nt.data.BYTES_PER_ELEMENT,(bt+1)*it/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,bt,nt.width,nt.height,1,St,Ot,Ct)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,St,Ot,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Mt,nt.width,nt.height,nt.depth,0,St,Ot,nt.data);else if(T.isData3DTexture)Wt?(jt&&e.texStorage3D(r.TEXTURE_3D,_t,Mt,nt.width,nt.height,nt.depth),k&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,St,Ot,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Mt,nt.width,nt.height,nt.depth,0,St,Ot,nt.data);else if(T.isFramebufferTexture){if(jt)if(Wt)e.texStorage2D(r.TEXTURE_2D,_t,Mt,nt.width,nt.height);else{let it=nt.width,bt=nt.height;for(let Ct=0;Ct<_t;Ct++)e.texImage2D(r.TEXTURE_2D,Ct,Mt,it,bt,0,St,Ot,null),it>>=1,bt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in r){let it=r.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),nt.parentNode!==it){it.appendChild(nt),h.add(T),it.onpaint=bt=>{let Ct=bt.changedElements;for(let st of h)Ct.includes(st.image)&&(st.needsUpdate=!0)},it.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,nt);else{let Ct=r.RGBA,st=r.RGBA,ut=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ct,st,ut,nt)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ft.length>0){if(Wt&&jt){let it=re(ft[0]);e.texStorage2D(r.TEXTURE_2D,_t,Mt,it.width,it.height)}for(let it=0,bt=ft.length;it<bt;it++)yt=ft[it],Wt?k&&e.texSubImage2D(r.TEXTURE_2D,it,0,0,St,Ot,yt):e.texImage2D(r.TEXTURE_2D,it,Mt,St,Ot,yt);T.generateMipmaps=!1}else if(Wt){if(jt){let it=re(nt);e.texStorage2D(r.TEXTURE_2D,_t,Mt,it.width,it.height)}k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St,Ot,nt)}else e.texImage2D(r.TEXTURE_2D,0,Mt,St,Ot,nt);g(T)&&y(Z),ct.__version=mt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Dt(L,T,X){if(T.image.length!==6)return;let Z=vt(L,T),Q=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+X);let mt=i.get(Q);if(Q.version!==mt.__version||Z===!0){e.activeTexture(r.TEXTURE0+X);let ct=_e.getPrimaries(_e.workingColorSpace),et=T.colorSpace===Jr?null:_e.getPrimaries(T.colorSpace),nt=T.colorSpace===Jr||ct===et?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let St=T.isCompressedTexture||T.image[0].isCompressedTexture,Ot=T.image[0]&&T.image[0].isDataTexture,Mt=[];for(let st=0;st<6;st++)!St&&!Ot?Mt[st]=m(T.image[st],!0,n.maxCubemapSize):Mt[st]=Ot?T.image[st].image:T.image[st],Mt[st]=$e(T,Mt[st]);let yt=Mt[0],ft=s.convert(T.format,T.colorSpace),Wt=s.convert(T.type),jt=v(T.internalFormat,ft,Wt,T.normalized,T.colorSpace),k=T.isVideoTexture!==!0,_t=mt.__version===void 0||Z===!0,it=Q.dataReady,bt=M(T,yt);ht(r.TEXTURE_CUBE_MAP,T);let Ct;if(St){k&&_t&&e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,jt,yt.width,yt.height);for(let st=0;st<6;st++){Ct=Mt[st].mipmaps;for(let ut=0;ut<Ct.length;ut++){let ot=Ct[ut];T.format!==bn?ft!==null?k?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,ot.width,ot.height,ft,ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,jt,ot.width,ot.height,0,ot.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,0,0,ot.width,ot.height,ft,Wt,ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut,jt,ot.width,ot.height,0,ft,Wt,ot.data)}}}else{if(Ct=T.mipmaps,k&&_t){Ct.length>0&&bt++;let st=re(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,bt,jt,st.width,st.height)}for(let st=0;st<6;st++)if(Ot){k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt[st].width,Mt[st].height,ft,Wt,Mt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,jt,Mt[st].width,Mt[st].height,0,ft,Wt,Mt[st].data);for(let ut=0;ut<Ct.length;ut++){let Yt=Ct[ut].image[st].image;k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,Yt.width,Yt.height,ft,Wt,Yt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,jt,Yt.width,Yt.height,0,ft,Wt,Yt.data)}}else{k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ft,Wt,Mt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,jt,ft,Wt,Mt[st]);for(let ut=0;ut<Ct.length;ut++){let ot=Ct[ut];k?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,0,0,ft,Wt,ot.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,ut+1,jt,ft,Wt,ot.image[st])}}}g(T)&&y(r.TEXTURE_CUBE_MAP),mt.__version=Q.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,X,Z,Q,mt){let ct=s.convert(X.format,X.colorSpace),et=s.convert(X.type),nt=v(X.internalFormat,ct,et,X.normalized,X.colorSpace),St=i.get(T),Ot=i.get(X);if(Ot.__renderTarget=T,!St.__hasExternalTextures){let Mt=Math.max(1,T.width>>mt),yt=Math.max(1,T.height>>mt);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,mt,nt,Mt,yt,T.depth,0,ct,et,null):e.texImage2D(Q,mt,nt,Mt,yt,0,ct,et,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),It(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,Q,Ot.__webglTexture,0,Zt(T)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,Q,Ot.__webglTexture,mt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(L,T,X){if(r.bindRenderbuffer(r.RENDERBUFFER,L),T.depthBuffer){let Z=T.depthTexture,Q=Z&&Z.isDepthTexture?Z.type:null,mt=S(T.stencilBuffer,Q),ct=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;It(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(T),mt,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(T),mt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,mt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,L)}else{let Z=T.textures;for(let Q=0;Q<Z.length;Q++){let mt=Z[Q],ct=s.convert(mt.format,mt.colorSpace),et=s.convert(mt.type),nt=v(mt.internalFormat,ct,et,mt.normalized,mt.colorSpace);It(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Zt(T),nt,T.width,T.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,Zt(T),nt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,nt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(L,T,X){let Z=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(T.depthTexture);if(Q.__renderTarget=T,(!Q.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,T.depthTexture.addEventListener("dispose",E)),Q.__webglTexture===void 0){Q.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),ht(r.TEXTURE_CUBE_MAP,T.depthTexture);let St=s.convert(T.depthTexture.format),Ot=s.convert(T.depthTexture.type),Mt;T.depthTexture.format===Mr?Mt=r.DEPTH_COMPONENT24:T.depthTexture.format===Us&&(Mt=r.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,Mt,T.width,T.height,0,St,Ot,null)}}else Y(T.depthTexture,0);let mt=Q.__webglTexture,ct=Zt(T),et=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,nt=T.depthTexture.format===Us?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Mr)It(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,et,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,nt,et,mt,0);else if(T.depthTexture.format===Us)It(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,et,mt,0,ct):r.framebufferTexture2D(r.FRAMEBUFFER,nt,et,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(L){let T=i.get(L),X=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){let Z=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let Q=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",Q)};Z.addEventListener("dispose",Q),T.__depthDisposeCallback=Q}T.__boundDepthTexture=Z}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)Tt(T.__webglFramebuffer[Z],L,Z);else{let Z=L.texture.mipmaps;Z&&Z.length>0?Tt(T.__webglFramebuffer[0],L,0):Tt(T.__webglFramebuffer,L,0)}else if(X){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=r.createRenderbuffer(),Vt(T.__webglDepthbuffer[Z],L,!1);else{let Q=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,mt)}}else{let Z=L.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Vt(T.__webglDepthbuffer,L,!1);else{let Q=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,mt=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,mt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,mt)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Qt(L,T,X){let Z=i.get(L);T!==void 0&&dt(Z.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&At(L)}function ne(L){let T=L.texture,X=i.get(L),Z=i.get(T);L.addEventListener("dispose",x);let Q=L.textures,mt=L.isWebGLCubeRenderTarget===!0,ct=Q.length>1;if(ct||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=T.version,o.memory.textures++),mt){X.__webglFramebuffer=[];for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[et]=[];for(let nt=0;nt<T.mipmaps.length;nt++)X.__webglFramebuffer[et][nt]=r.createFramebuffer()}else X.__webglFramebuffer[et]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let et=0;et<T.mipmaps.length;et++)X.__webglFramebuffer[et]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(ct)for(let et=0,nt=Q.length;et<nt;et++){let St=i.get(Q[et]);St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&It(L)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let et=0;et<Q.length;et++){let nt=Q[et];X.__webglColorRenderbuffer[et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[et]);let St=s.convert(nt.format,nt.colorSpace),Ot=s.convert(nt.type),Mt=v(nt.internalFormat,St,Ot,nt.normalized,nt.colorSpace,L.isXRRenderTarget===!0),yt=Zt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,Mt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+et,r.RENDERBUFFER,X.__webglColorRenderbuffer[et])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(X.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(mt){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ht(r.TEXTURE_CUBE_MAP,T);for(let et=0;et<6;et++)if(T.mipmaps&&T.mipmaps.length>0)for(let nt=0;nt<T.mipmaps.length;nt++)dt(X.__webglFramebuffer[et][nt],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,nt);else dt(X.__webglFramebuffer[et],L,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);g(T)&&y(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let et=0,nt=Q.length;et<nt;et++){let St=Q[et],Ot=i.get(St),Mt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ot.__webglTexture),ht(Mt,St),dt(X.__webglFramebuffer,L,St,r.COLOR_ATTACHMENT0+et,Mt,0),g(St)&&y(Mt)}e.unbindTexture()}else{let et=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(et=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(et,Z.__webglTexture),ht(et,T),T.mipmaps&&T.mipmaps.length>0)for(let nt=0;nt<T.mipmaps.length;nt++)dt(X.__webglFramebuffer[nt],L,T,r.COLOR_ATTACHMENT0,et,nt);else dt(X.__webglFramebuffer,L,T,r.COLOR_ATTACHMENT0,et,0);g(T)&&y(et),e.unbindTexture()}L.depthBuffer&&At(L)}function G(L){let T=L.textures;for(let X=0,Z=T.length;X<Z;X++){let Q=T[X];if(g(Q)){let mt=b(L),ct=i.get(Q).__webglTexture;e.bindTexture(mt,ct),y(mt),e.unbindTexture()}}}let Kt=[],he=[];function De(L){if(L.samples>0){if(It(L)===!1){let T=L.textures,X=L.width,Z=L.height,Q=r.COLOR_BUFFER_BIT,mt=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=i.get(L),et=T.length>1;if(et)for(let St=0;St<T.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let nt=L.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let St=0;St<T.length;St++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);let Ot=i.get(T[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,X,Z,0,0,X,Z,Q,r.NEAREST),l===!0&&(Kt.length=0,he.length=0,Kt.push(r.COLOR_ATTACHMENT0+St),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Kt.push(mt),he.push(mt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,he)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),et)for(let St=0;St<T.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,ct.__webglColorRenderbuffer[St]);let Ot=i.get(T[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ct.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Ot,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let T=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function Zt(L){return Math.min(n.maxSamples,L.samples)}function It(L){let T=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function V(L){let T=o.render.frame;u.get(L)!==T&&(u.set(L,T),L.update())}function $e(L,T){let X=L.colorSpace,Z=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||X!==tc&&X!==Jr&&(_e.getTransfer(X)===be?(Z!==bn||Q!==Sn)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",X)),T}function re(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=P,this.setTextureCube=O,this.rebindTextures=Qt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function KC(r,t){function e(i,n=Jr){let s,o=_e.getTransfer(n);if(i===Sn)return r.UNSIGNED_BYTE;if(i===uf)return r.UNSIGNED_SHORT_4_4_4_4;if(i===hf)return r.UNSIGNED_SHORT_5_5_5_1;if(i===$m)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Zm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ym)return r.BYTE;if(i===qm)return r.SHORT;if(i===za)return r.UNSIGNED_SHORT;if(i===cf)return r.INT;if(i===ur)return r.UNSIGNED_INT;if(i===Mn)return r.FLOAT;if(i===yi)return r.HALF_FLOAT;if(i===Jm)return r.ALPHA;if(i===Km)return r.RGB;if(i===bn)return r.RGBA;if(i===Mr)return r.DEPTH_COMPONENT;if(i===Us)return r.DEPTH_STENCIL;if(i===ff)return r.RED;if(i===df)return r.RED_INTEGER;if(i===Os)return r.RG;if(i===pf)return r.RG_INTEGER;if(i===mf)return r.RGBA_INTEGER;if(i===Rc||i===Pc||i===Ic||i===Fc)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ic)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gf||i===_f||i===xf||i===vf)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===gf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===xf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yf||i===Sf||i===Mf||i===bf||i===wf||i===Lc||i===Ef)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===yf||i===Sf)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===bf)return s.COMPRESSED_R11_EAC;if(i===wf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Lc)return s.COMPRESSED_RG11_EAC;if(i===Ef)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tf||i===Af||i===Cf||i===Df||i===Rf||i===Pf||i===If||i===Ff||i===Lf||i===Nf||i===Uf||i===Of||i===Bf||i===kf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Tf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Df)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ff)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Of)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zf||i===Hf||i===Vf)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===zf)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gf||i===Wf||i===Nc||i===Xf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Wf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ha?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}var jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QC=`
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

}`,b0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new hc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ae({vertexShader:jC,fragmentShader:QC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new Fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},w0=class extends br{constructor(t,e){super();let i=this,n=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new b0,g={},y=e.getContextAttributes(),b=null,v=null,S=[],M=[],E=new Ft,x=null,w=null,A=new Zi;A.viewport=new Je;let R=new Zi;R.viewport=new Je;let D=[A,R],N=new rf,I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let j=S[$];return j===void 0&&(j=new Ra,S[$]=j),j.getTargetRaySpace()},this.getControllerGrip=function($){let j=S[$];return j===void 0&&(j=new Ra,S[$]=j),j.getGripSpace()},this.getHand=function($){let j=S[$];return j===void 0&&(j=new Ra,S[$]=j),j.getHandSpace()};function H($){let j=M.indexOf($.inputSource);if(j===-1)return;let pt=S[j];pt!==void 0&&(pt.update($.inputSource,$.frame,c||o),pt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){n.removeEventListener("select",H),n.removeEventListener("selectstart",H),n.removeEventListener("selectend",H),n.removeEventListener("squeeze",H),n.removeEventListener("squeezestart",H),n.removeEventListener("squeezeend",H),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",Y);for(let $=0;$<S.length;$++){let j=M[$];j!==null&&(M[$]=null,S[$].disconnect(j))}I=null,F=null,m.reset();for(let $ in g)delete g[$];if(t.setRenderTarget(b),d=null,f=null,h=null,n=null,v=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(E.width,E.height,!1),w!==null){let $=w.camera;$.fov=w.fov,$.zoom=w.zoom,$.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(n,e)),h},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(b=t.getRenderTarget(),n.addEventListener("select",H),n.addEventListener("selectstart",H),n.addEventListener("selectend",H),n.addEventListener("squeeze",H),n.addEventListener("squeezestart",H),n.addEventListener("squeezeend",H),n.addEventListener("end",B),n.addEventListener("inputsourceschange",Y),y.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Dt=null,dt=null;y.depth&&(dt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=y.stencil?Us:Mr,Dt=y.stencil?Ha:ur);let Vt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Vt),n.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new ri(f.textureWidth,f.textureHeight,{format:bn,type:Sn,depthTexture:new Ts(f.textureWidth,f.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let pt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,e,pt),n.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new ri(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),vt.setContext(n),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Y($){for(let j=0;j<$.removed.length;j++){let pt=$.removed[j],Dt=M.indexOf(pt);Dt>=0&&(M[Dt]=null,S[Dt].disconnect(pt))}for(let j=0;j<$.added.length;j++){let pt=$.added[j],Dt=M.indexOf(pt);if(Dt===-1){for(let Vt=0;Vt<S.length;Vt++)if(Vt>=M.length){M.push(pt),Dt=Vt;break}else if(M[Vt]===null){M[Vt]=pt,Dt=Vt;break}if(Dt===-1)break}let dt=S[Dt];dt&&dt.connect(pt)}}let W=new U,P=new U;function O($,j,pt){W.setFromMatrixPosition(j.matrixWorld),P.setFromMatrixPosition(pt.matrixWorld);let Dt=W.distanceTo(P),dt=j.projectionMatrix.elements,Vt=pt.projectionMatrix.elements,Tt=dt[14]/(dt[10]-1),At=dt[14]/(dt[10]+1),Qt=(dt[9]+1)/dt[5],ne=(dt[9]-1)/dt[5],G=(dt[8]-1)/dt[0],Kt=(Vt[8]+1)/Vt[0],he=Tt*G,De=Tt*Kt,Zt=Dt/(-G+Kt),It=Zt*-G;if(j.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(Zt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),dt[10]===-1)$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let V=Tt+Zt,$e=At+Zt,re=he-It,L=De+(Dt-It),T=Qt*At/$e*V,X=ne*At/$e*V;$.projectionMatrix.makePerspective(re,L,T,X,V,$e),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,j){j===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(j.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let j=$.near,pt=$.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(pt=m.depthFar)),N.near=R.near=A.near=j,N.far=R.far=A.far=pt,(I!==N.near||F!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),I=N.near,F=N.far),N.layers.mask=$.layers.mask|6,A.layers.mask=N.layers.mask&-5,R.layers.mask=N.layers.mask&-3;let Dt=$.parent,dt=N.cameras;tt(N,Dt);for(let Vt=0;Vt<dt.length;Vt++)tt(dt[Vt],Dt);dt.length===2?O(N,A,R):N.projectionMatrix.copy(A.projectionMatrix),w===null&&$.isPerspectiveCamera&&(w={camera:$,fov:$.fov,zoom:$.zoom}),rt($,N,Dt)};function rt($,j,pt){pt===null?$.matrix.copy(j.matrixWorld):($.matrix.copy(pt.matrixWorld),$.matrix.invert(),$.matrix.multiply(j.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(j.projectionMatrix),$.projectionMatrixInverse.copy(j.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Aa*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function($){return g[$]};let gt=null;function ht($,j){if(u=j.getViewerPose(c||o),p=j,u!==null){let pt=u.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Dt=!1;pt.length!==N.cameras.length&&(N.cameras.length=0,Dt=!0);for(let At=0;At<pt.length;At++){let Qt=pt[At],ne=null;if(d!==null)ne=d.getViewport(Qt);else{let Kt=h.getViewSubImage(f,Qt);ne=Kt.viewport,At===0&&(t.setRenderTargetTextures(v,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(v))}let G=D[At];G===void 0&&(G=new Zi,G.layers.enable(At),G.viewport=new Je,D[At]=G),G.matrix.fromArray(Qt.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(Qt.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(ne.x,ne.y,ne.width,ne.height),At===0&&(N.matrix.copy(G.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Dt===!0&&N.cameras.push(G)}let dt=n.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&_){h=i.getBinding();let At=h.getDepthInformation(pt[0]);At&&At.isValid&&At.texture&&m.init(At,n.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),h=i.getBinding();for(let At=0;At<pt.length;At++){let Qt=pt[At].camera;if(Qt){let ne=g[Qt];ne||(ne=new hc,g[Qt]=ne);let G=h.getCameraImage(Qt);ne.sourceTexture=G}}}}for(let pt=0;pt<S.length;pt++){let Dt=M[pt],dt=S[pt];Dt!==null&&dt!==void 0&&dt.update(Dt,j,c||o)}gt&&gt($,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),p=null}let vt=new xy;vt.setAnimationLoop(ht),this.setAnimationLoop=function($){gt=$},this.dispose=function(){}}},t2=new xe,wy=new se;wy.set(-1,0,0,0,1,0,0,0,1);function e2(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,e0(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,b,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?s(m,g):g.isMeshLambertMaterial?(s(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(m,g),h(m,g)):g.isMeshPhongMaterial?(s(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),p(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,b):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Oi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Oi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=t.get(g),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(t2.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(wy),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,b){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=b*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Oi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function i2(r,t,e,i){let n={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let M=S.program;i.uniformBlockBinding(v,M)}function c(v,S){let M=n[v.id];M===void 0&&(m(v),M=u(v),n[v.id]=M,v.addEventListener("dispose",y));let E=S.program;i.updateUBOMapping(v,E);let x=t.render.frame;s[v.id]!==x&&(f(v),s[v.id]=x)}function u(v){let S=h();v.__bindingPointIndex=S;let M=r.createBuffer(),E=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,E,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let S=n[v.id],M=v.uniforms,E=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let x=0,w=M.length;x<w;x++){let A=M[x];if(Array.isArray(A))for(let R=0,D=A.length;R<D;R++)d(A[R],x,R,E);else d(A,x,0,E)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,S,M,E){if(_(v,S,M,E)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let A=0;for(let R=0;R<w.length;R++){let D=w[R],N=g(D);p(D,v.__data,A),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(A+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(w,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function p(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function _(v,S,M,E){let x=v.value,w=S+"_"+M;if(E[w]===void 0)return typeof x=="number"||typeof x=="boolean"?E[w]=x:ArrayBuffer.isView(x)?E[w]=x.slice():E[w]=x.clone(),!0;{let A=E[w];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return E[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function m(v){let S=v.uniforms,M=0,E=16;for(let w=0,A=S.length;w<A;w++){let R=Array.isArray(S[w])?S[w]:[S[w]];for(let D=0,N=R.length;D<N;D++){let I=R[D],F=Array.isArray(I.value)?I.value:[I.value];for(let H=0,B=F.length;H<B;H++){let Y=F[H],W=g(Y),P=M%E,O=P%W.boundary,tt=P+O;M+=O,tt!==0&&E-tt<W.storage&&(M+=E-tt),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=W.storage}}}let x=M%E;return x>0&&(M+=E-x),v.__size=M,v.__cache={},this}function g(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):te("WebGLRenderer: Unsupported uniform value type.",v),S}function y(v){let S=v.target;S.removeEventListener("dispose",y);let M=o.indexOf(S.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(n[S.id]),delete n[S.id],delete s[S.id]}function b(){for(let v in n)r.deleteBuffer(n[v]);o=[],n={},s={}}return{bind:l,update:c,dispose:b}}var n2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ar=null;function r2(){return Ar===null&&(Ar=new _o(n2,16,16,Os,yi),Ar.name="DFG_LUT",Ar.minFilter=vi,Ar.magFilter=vi,Ar.wrapS=Sr,Ar.wrapT=Sr,Ar.generateMipmaps=!1,Ar.needsUpdate=!0),Ar}var jf=class{constructor(t={}){let{canvas:e=Wv(),context:i=null,depth:n=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Sn}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;let _=d,m=new Set([mf,pf,df]),g=new Set([Sn,ur,za,Ha,uf,hf]),y=new Uint32Array(4),b=new Int32Array(4),v=new U,S=null,M=null,E=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,R=!1,D=null,N=null,I=null,F=null;this._outputColorSpace=Ui;let H=0,B=0,Y=null,W=-1,P=null,O=new Je,tt=new Je,rt=null,gt=new xt(0),ht=0,vt=e.width,$=e.height,j=1,pt=null,Dt=null,dt=new Je(0,0,vt,$),Vt=new Je(0,0,vt,$),Tt=!1,At=new Pa,Qt=!1,ne=!1,G=new xe,Kt=new U,he=new Je,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function It(){return Y===null?j:1}let V=i;function $e(C,z){return e.getContext(C,z)}let re,L,T,X,Z,Q,mt,ct,et,nt,St,Ot,Mt,yt,ft,Wt,jt,k,_t,it,bt,Ct,st;try{let C={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",Jt,!1),V===null){let z="webgl2";if(V=$e(z,C),V===null)throw $e(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(C){throw e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Jt,!1),ee("WebGLRenderer: "+C.message),C}function ut(){re=new hA(V),re.init(),bt=new KC(V,re),L=new eA(V,re,t,bt),T=new ZC(V,re),L.reversedDepthBuffer&&f&&T.buffers.depth.setReversed(!0),N=V.createFramebuffer(),I=V.createFramebuffer(),F=V.createFramebuffer(),X=new pA(V),Z=new NC,Q=new JC(V,re,T,Z,L,bt,X),mt=new uA(A),ct=new gw(V),Ct=new QT(V,ct),et=new fA(V,ct,X,Ct),nt=new gA(V,et,ct,Ct,X),k=new mA(V,L,Q),ft=new iA(Z),St=new LC(A,mt,re,L,Ct,ft),Ot=new e2(A,Z),Mt=new OC,yt=new GC(re),jt=new jT(A,mt,T,nt,p,l),Wt=new $C(A,nt,L),st=new i2(V,X,L,T),_t=new tA(V,re,X),it=new dA(V,re,X),X.programs=St.programs,A.capabilities=L,A.extensions=re,A.properties=Z,A.renderLists=Mt,A.shadowMap=Wt,A.state=T,A.info=X}_!==Sn&&(w=new xA(_,e.width,e.height,a,n,s));let ot=new w0(A,V);this.xr=ot,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let C=re.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=re.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(vt,$,!1))},this.getSize=function(C){return C.set(vt,$)},this.setSize=function(C,z,K=!0){if(ot.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=C,$=z,e.width=Math.floor(C*j),e.height=Math.floor(z*j),K===!0&&(e.style.width=C+"px",e.style.height=z+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,C,z)},this.getDrawingBufferSize=function(C){return C.set(vt*j,$*j).floor()},this.setDrawingBufferSize=function(C,z,K){vt=C,$=z,j=K,e.width=Math.floor(C*K),e.height=Math.floor(z*K),this.setViewport(0,0,C,z)},this.setEffects=function(C){if(_===Sn){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let z=0;z<C.length;z++)if(C[z].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(dt)},this.setViewport=function(C,z,K,q){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,z,K,q),T.viewport(O.copy(dt).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(Vt)},this.setScissor=function(C,z,K,q){C.isVector4?Vt.set(C.x,C.y,C.z,C.w):Vt.set(C,z,K,q),T.scissor(tt.copy(Vt).multiplyScalar(j).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(C){T.setScissorTest(Tt=C)},this.setOpaqueSort=function(C){pt=C},this.setTransparentSort=function(C){Dt=C},this.getClearColor=function(C){return C.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(C=!0,z=!0,K=!0){let q=0;if(C){let J=!1;if(Y!==null){let Et=Y.texture.format;J=m.has(Et)}if(J){let Et=Y.texture.type,Nt=g.has(Et),Pt=jt.getClearColor(),zt=jt.getClearAlpha(),Xt=Pt.r,ce=Pt.g,ve=Pt.b;Nt?(y[0]=Xt,y[1]=ce,y[2]=ve,y[3]=zt,V.clearBufferuiv(V.COLOR,0,y)):(b[0]=Xt,b[1]=ce,b[2]=ve,b[3]=zt,V.clearBufferiv(V.COLOR,0,b))}else q|=V.COLOR_BUFFER_BIT}z&&(q|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),D=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",Jt,!1),jt.dispose(),Mt.dispose(),yt.dispose(),Z.dispose(),mt.dispose(),nt.dispose(),Ct.dispose(),st.dispose(),St.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Ge),ot.removeEventListener("sessionend",Ne),ye.stop()};function Yt(C){C.preventDefault(),Qm("WebGLRenderer: Context Lost."),R=!0}function lt(){Qm("WebGLRenderer: Context Restored."),R=!1;let C=X.autoReset,z=Wt.enabled,K=Wt.autoUpdate,q=Wt.needsUpdate,J=Wt.type;ut(),X.autoReset=C,Wt.enabled=z,Wt.autoUpdate=K,Wt.needsUpdate=q,Wt.type=J}function Jt(C){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function kt(C){let z=C.target;z.removeEventListener("dispose",kt),oe(z)}function oe(C){ui(C),Z.remove(C)}function ui(C){let z=Z.get(C).programs;z!==void 0&&(z.forEach(function(K){St.releaseProgram(K)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,z,K,q,J,Et){z===null&&(z=De);let Nt=J.isMesh&&J.matrixWorld.determinantAffine()<0,Pt=wi(C,z,K,q,J);T.setMaterial(q,Nt);let zt=K.index,Xt=1;if(q.wireframe===!0){if(zt=et.getWireframeAttribute(K),zt===void 0)return;Xt=2}let ce=K.drawRange,ve=K.attributes.position,Ht=ce.start*Xt,we=(ce.start+ce.count)*Xt;Et!==null&&(Ht=Math.max(Ht,Et.start*Xt),we=Math.min(we,(Et.start+Et.count)*Xt)),zt!==null?(Ht=Math.max(Ht,0),we=Math.min(we,zt.count)):ve!=null&&(Ht=Math.max(Ht,0),we=Math.min(we,ve.count));let fi=we-Ht;if(fi<0||fi===1/0)return;Ct.setup(J,q,Pt,K,zt);let We,Ue=_t;if(zt!==null&&(We=ct.get(zt),Ue=it,Ue.setIndex(We)),J.isMesh)q.wireframe===!0?(T.setLineWidth(q.wireframeLinewidth*It()),Ue.setMode(V.LINES)):Ue.setMode(V.TRIANGLES);else if(J.isLine){let ki=q.linewidth;ki===void 0&&(ki=1),T.setLineWidth(ki*It()),J.isLineSegments?Ue.setMode(V.LINES):J.isLineLoop?Ue.setMode(V.LINE_LOOP):Ue.setMode(V.LINE_STRIP)}else J.isPoints?Ue.setMode(V.POINTS):J.isSprite&&Ue.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(re.get("WEBGL_multi_draw"))Ue.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let ki=J._multiDrawStarts,Lt=J._multiDrawCounts,en=J._multiDrawCount,Me=zt?ct.get(zt).bytesPerElement:1,kn=Z.get(q).currentProgram.getUniforms();for(let fr=0;fr<en;fr++)kn.setValue(V,"_gl_DrawID",fr),Ue.render(ki[fr]/Me,Lt[fr])}else if(J.isInstancedMesh)Ue.renderInstances(Ht,fi,J.count);else if(K.isInstancedBufferGeometry){let ki=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Lt=Math.min(K.instanceCount,ki);Ue.renderInstances(Ht,fi,Lt)}else Ue.render(Ht,fi)};function me(C,z,K,q){D!==null&&C.isNodeMaterial&&D.setObject(q,C),Qt===!0&&ft.setState(C,K,!1),C.transparent===!0&&C.side===Ki&&C.forceSinglePass===!1?(C.side=Oi,C.needsUpdate=!0,ti(C,z,q),C.side=Ls,C.needsUpdate=!0,ti(C,z,q),C.side=Ki):ti(C,z,q)}this.compile=function(C,z,K=null){K===null&&(K=C),D!==null&&D.renderStart(C,z,K),M=yt.get(K),M.init(z),x.push(M),K.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),C!==K&&C.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(M.pushLight(J),J.castShadow&&M.pushShadow(J))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),ne=this.localClippingEnabled,Qt=ft.init(this.clippingPlanes,ne),Qt===!0&&ft.setGlobalState(this.clippingPlanes,z),D!==null&&Wt.render(M.state.shadowsArray,K,z);let q=new Set;return C.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Et=J.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){let Pt=Et[Nt];me(Pt,K,z,J),q.add(Pt)}else me(Et,K,z,J),q.add(Et)}),M=x.pop(),D!==null&&D.renderEnd(),q},this.compileAsync=function(C,z,K=null){let q=this.compile(C,z,K);return new Promise(J=>{function Et(){if(q.forEach(function(Nt){let zt=Z.get(Nt).currentProgram;(zt===void 0||zt.isReady())&&q.delete(Nt)}),q.size===0){J(C);return}setTimeout(Et,10)}re.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Ve=null;function bi(C){Ve&&Ve(C)}function Ge(){ye.stop()}function Ne(){ye.start()}let ye=new xy;ye.setAnimationLoop(bi),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(C){Ve=C,ot.setAnimationLoop(C),C===null?ye.stop():ye.start()},ot.addEventListener("sessionstart",Ge),ot.addEventListener("sessionend",Ne),this.render=function(C,z){if(z!==void 0&&z.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;D!==null&&D.renderStart(C,z);let K=ot.enabled===!0&&ot.isPresenting===!0,q=w!==null&&(Y===null||K)&&w.begin(A,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(z),z=ot.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,z,Y),M=yt.get(C,x.length),M.init(z),M.state.textureUnits=Q.getTextureUnits(),x.push(M),G.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),At.setFromProjectionMatrix(G,ar,z.reversedDepth),ne=this.localClippingEnabled,Qt=ft.init(this.clippingPlanes,ne),S=Mt.get(C,E.length),S.init(),E.push(S),ot.enabled===!0&&ot.isPresenting===!0){let Nt=A.xr.getDepthSensingMesh();Nt!==null&&Qi(Nt,z,-1/0,A.sortObjects)}Qi(C,z,0,A.sortObjects),S.finish(),D!==null&&D.updateLights(M.state.lightsArray),A.sortObjects===!0&&S.sort(pt,Dt),Zt=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Zt&&jt.addToRenderList(S,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qt===!0&&ft.beginShadows();let J=M.state.shadowsArray;if(Wt.render(J,C,z),Qt===!0&&ft.endShadows(),(q&&w.hasRenderPass())===!1){let Nt=S.opaque,Pt=S.transmissive;if(M.setupLights(),z.isArrayCamera){let zt=z.cameras;if(Pt.length>0)for(let Xt=0,ce=zt.length;Xt<ce;Xt++){let ve=zt[Xt];Bi(Nt,Pt,C,ve)}Zt&&jt.render(C);for(let Xt=0,ce=zt.length;Xt<ce;Xt++){let ve=zt[Xt];ke(S,C,ve,ve.viewport)}}else Pt.length>0&&Bi(Nt,Pt,C,z),Zt&&jt.render(C),ke(S,C,z)}Y!==null&&B===0&&(Q.updateMultisampleRenderTarget(Y),Q.updateRenderTargetMipmap(Y)),q&&w.end(A),C.isScene===!0&&C.onAfterRender(A,C,z),Ct.resetDefaultState(),W=-1,P=null,x.pop(),x.length>0?(M=x[x.length-1],Q.setTextureUnits(M.state.textureUnits),Qt===!0&&ft.setGlobalState(A.clippingPlanes,M.state.camera)):M=null,E.pop(),E.length>0?S=E[E.length-1]:S=null,D!==null&&D.renderEnd()};function Qi(C,z,K,q){if(C.visible===!1)return;if(C.layers.test(z.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(z);else if(C.isLightProbeGrid)M.pushLightProbeGrid(C);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(At)){q&&he.setFromMatrixPosition(C.matrixWorld).applyMatrix4(G);let Nt=nt.update(C),Pt=C.material;Pt.visible&&S.push(C,Nt,Pt,K,he.z,null,z)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(At))){let Nt=nt.update(C),Pt=C.material;if(q&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),he.copy(C.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),he.copy(Nt.boundingSphere.center)),he.applyMatrix4(C.matrixWorld).applyMatrix4(G)),Array.isArray(Pt)){let zt=Nt.groups;for(let Xt=0,ce=zt.length;Xt<ce;Xt++){let ve=zt[Xt],Ht=Pt[ve.materialIndex];Ht&&Ht.visible&&S.push(C,Nt,Ht,K,he.z,ve,z)}}else Pt.visible&&S.push(C,Nt,Pt,K,he.z,null,z)}}let Et=C.children;for(let Nt=0,Pt=Et.length;Nt<Pt;Nt++)Qi(Et[Nt],z,K,q)}function ke(C,z,K,q){let{opaque:J,transmissive:Et,transparent:Nt}=C;M.setupLightsView(K),Qt===!0&&ft.setGlobalState(A.clippingPlanes,K),q&&T.viewport(O.copy(q)),J.length>0&&tn(J,z,K),Et.length>0&&tn(Et,z,K),Nt.length>0&&tn(Nt,z,K),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Bi(C,z,K,q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[q.id]===void 0){let Ht=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[q.id]=new ri(1,1,{generateMipmaps:!0,type:Ht?yi:Sn,minFilter:Tr,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_e.workingColorSpace})}let Et=M.state.transmissionRenderTarget[q.id],Nt=q.viewport||O;Et.setSize(Nt.z*A.transmissionResolutionScale,Nt.w*A.transmissionResolutionScale);let Pt=A.getRenderTarget(),zt=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(Et),A.getClearColor(gt),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),Zt&&jt.render(K);let ce=A.toneMapping;A.toneMapping=cr;let ve=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),M.setupLightsView(q),Qt===!0&&ft.setGlobalState(A.clippingPlanes,q),tn(C,K,q),Q.updateMultisampleRenderTarget(Et),Q.updateRenderTargetMipmap(Et),re.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let we=0,fi=z.length;we<fi;we++){let We=z[we],{object:Ue,geometry:ki,material:Lt,group:en}=We;if(Lt.side===Ki&&Ue.layers.test(q.layers)){let Me=Lt.side;Lt.side=Oi,Lt.needsUpdate=!0,hi(Ue,K,q,ki,Lt,en),Lt.side=Me,Lt.needsUpdate=!0,Ht=!0}}Ht===!0&&(Q.updateMultisampleRenderTarget(Et),Q.updateRenderTargetMipmap(Et))}A.setRenderTarget(Pt,zt,Xt),A.setClearColor(gt,ht),ve!==void 0&&(q.viewport=ve),A.toneMapping=ce}function tn(C,z,K){let q=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Et=C.length;J<Et;J++){let Nt=C[J],{object:Pt,geometry:zt,group:Xt}=Nt,ce=Nt.material;ce.allowOverride===!0&&q!==null&&(ce=q),Pt.layers.test(K.layers)&&hi(Pt,z,K,zt,ce,Xt)}}function hi(C,z,K,q,J,Et){D!==null&&J.isNodeMaterial&&D.setObject(C,J),C.onBeforeRender(A,z,K,q,J,Et),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),J.onBeforeRender(A,z,K,q,C,Et),J.transparent===!0&&J.side===Ki&&J.forceSinglePass===!1?(J.side=Oi,J.needsUpdate=!0,A.renderBufferDirect(K,z,q,J,C,Et),J.side=Ls,J.needsUpdate=!0,A.renderBufferDirect(K,z,q,J,C,Et),J.side=Ki):A.renderBufferDirect(K,z,q,J,C,Et),C.onAfterRender(A,z,K,q,J,Et)}function ti(C,z,K){z.isScene!==!0&&(z=De);let q=Z.get(C),J=M.state.lights,Et=M.state.shadowsArray,Nt=J.state.version,Pt=St.getParameters(C,J.state,Et,z,K,M.state.lightProbeGridArray),zt=St.getProgramCacheKey(Pt),Xt=q.programs;q.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;let ce=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;q.envMap=mt.get(C.envMap||q.environment,ce),q.envMapRotation=q.environment!==null&&C.envMap===null?z.environmentRotation:C.envMapRotation,Xt===void 0&&(C.addEventListener("dispose",kt),Xt=new Map,q.programs=Xt);let ve=Xt.get(zt);if(ve!==void 0){if(q.currentProgram===ve&&q.lightsStateVersion===Nt)return hr(C,Pt),ve}else Pt.uniforms=St.getUniforms(C),D!==null&&C.isNodeMaterial&&D.build(C,K,Pt),C.onBeforeCompile(Pt,A),ve=St.acquireProgram(Pt,zt),Xt.set(zt,ve),q.uniforms=Pt.uniforms;let Ht=q.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ht.clippingPlanes=ft.uniform),hr(C,Pt),q.needsLights=Bn(C),q.lightsStateVersion=Nt,q.needsLights&&(Ht.ambientLightColor.value=J.state.ambient,Ht.lightProbe.value=J.state.probe,Ht.sunLights.value=J.state.sun,Ht.sunLightShadows.value=J.state.sunShadow,Ht.directionalLights.value=J.state.directional,Ht.directionalLightShadows.value=J.state.directionalShadow,Ht.spotLights.value=J.state.spot,Ht.spotLightShadows.value=J.state.spotShadow,Ht.rectAreaLights.value=J.state.rectArea,Ht.ltc_1.value=J.state.rectAreaLTC1,Ht.ltc_2.value=J.state.rectAreaLTC2,Ht.pointLights.value=J.state.point,Ht.pointLightShadows.value=J.state.pointShadow,Ht.hemisphereLights.value=J.state.hemi,Ht.sunShadowMatrix.value=J.state.sunShadowMatrix,Ht.sunShadowCascade.value=J.state.sunShadowCascade,Ht.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ht.spotLightMatrix.value=J.state.spotLightMatrix,Ht.spotLightMap.value=J.state.spotLightMap,Ht.pointShadowMatrix.value=J.state.pointShadowMatrix),q.lightProbeGrid=M.state.lightProbeGridArray.length>0,q.currentProgram=ve,q.uniformsList=null,ve}function gi(C){if(C.uniformsList===null){let z=C.currentProgram.getUniforms();C.uniformsList=Xa.seqWithValue(z.seq,C.uniforms)}return C.uniformsList}function hr(C,z){let K=Z.get(C);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function Ao(C,z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let K=0,q=C.length;K<q;K++){let J=C[K];if(J.texture!==null&&J.boundingBox.containsPoint(v))return J}return null}function wi(C,z,K,q,J){z.isScene!==!0&&(z=De),Q.resetTextureUnits();let Et=z.fog,Nt=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,Pt=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:_e.workingColorSpace,zt=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Xt=mt.get(q.envMap||Nt,zt),ce=q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ve=!!K.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ht=!!K.morphAttributes.position,we=!!K.morphAttributes.normal,fi=!!K.morphAttributes.color,We=cr;q.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(We=A.toneMapping);let Ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ki=Ue!==void 0?Ue.length:0,Lt=Z.get(q),en=M.state.lights;if(Qt===!0&&(ne===!0||C!==P)){let ze=C===P&&q.id===W;ft.setState(q,C,ze)}let Me=!1;q.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==en.state.version||Lt.outputColorSpace!==Pt||J.isBatchedMesh&&Lt.batching===!1||!J.isBatchedMesh&&Lt.batching===!0||J.isBatchedMesh&&Lt.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Lt.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Lt.instancing===!1||!J.isInstancedMesh&&Lt.instancing===!0||J.isSkinnedMesh&&Lt.skinning===!1||!J.isSkinnedMesh&&Lt.skinning===!0||J.isInstancedMesh&&Lt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Lt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Lt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Lt.instancingMorph===!1&&J.morphTexture!==null||Lt.envMap!==Xt||q.fog===!0&&Lt.fog!==Et||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ft.numPlanes||Lt.numIntersection!==ft.numIntersection)||Lt.vertexAlphas!==ce||Lt.vertexTangents!==ve||Lt.morphTargets!==Ht||Lt.morphNormals!==we||Lt.morphColors!==fi||Lt.toneMapping!==We||Lt.morphTargetsCount!==ki||!!Lt.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Me=!0):(Me=!0,Lt.__version=q.version);let kn=Lt.currentProgram;Me===!0&&(kn=ti(q,z,J),D&&q.isNodeMaterial&&D.onUpdateProgram(q,kn,Lt));let fr=!1,es=!1,Do=!1,Re=kn.getUniforms(),ai=Lt.uniforms;if(T.useProgram(kn.program)&&(fr=!0,es=!0,Do=!0),q.id!==W&&(W=q.id,es=!0),Lt.needsLights){let ze=Ao(M.state.lightProbeGridArray,J);Lt.lightProbeGrid!==ze&&(Lt.lightProbeGrid=ze,es=!0)}if(fr||P!==C){T.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Re.setValue(V,"projectionMatrix",C.projectionMatrix),Re.setValue(V,"viewMatrix",C.matrixWorldInverse);let ns=Re.map.cameraPosition;ns!==void 0&&ns.setValue(V,Kt.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&Re.setValue(V,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Re.setValue(V,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,es=!0,Do=!0)}if(Lt.needsLights&&(en.state.sunShadowMap.length>0&&Re.setValue(V,"sunShadowMap",en.state.sunShadowMap,Q),en.state.directionalShadowMap.length>0&&Re.setValue(V,"directionalShadowMap",en.state.directionalShadowMap,Q),en.state.spotShadowMap.length>0&&Re.setValue(V,"spotShadowMap",en.state.spotShadowMap,Q),en.state.pointShadowMap.length>0&&Re.setValue(V,"pointShadowMap",en.state.pointShadowMap,Q)),J.isSkinnedMesh){Re.setOptional(V,J,"bindMatrix"),Re.setOptional(V,J,"bindMatrixInverse");let ze=J.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Re.setValue(V,"boneTexture",ze.boneTexture,Q))}J.isBatchedMesh&&(Re.setOptional(V,J,"batchingTexture"),Re.setValue(V,"batchingTexture",J._matricesTexture,Q),Re.setOptional(V,J,"batchingIdTexture"),Re.setValue(V,"batchingIdTexture",J._indirectTexture,Q),Re.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Re.setValue(V,"batchingColorTexture",J._colorsTexture,Q));let is=K.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&k.update(J,K,kn),(es||Lt.receiveShadow!==J.receiveShadow)&&(Lt.receiveShadow=J.receiveShadow,Re.setValue(V,"receiveShadow",J.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(ai.envMapIntensity.value=z.environmentIntensity),ai.dfgLUT!==void 0&&(ai.dfgLUT.value=r2()),es){if(Re.setValue(V,"toneMappingExposure",A.toneMappingExposure),Lt.needsLights&&oi(ai,Do),Et&&q.fog===!0&&Ot.refreshFogUniforms(ai,Et),Ot.refreshMaterialUniforms(ai,q,j,$,M.state.transmissionRenderTarget[C.id]),Lt.needsLights&&Lt.lightProbeGrid){let ze=Lt.lightProbeGrid;ai.probesSH.value=ze.texture,ai.probesMin.value.copy(ze.boundingBox.min),ai.probesMax.value.copy(ze.boundingBox.max),ai.probesResolution.value.copy(ze.resolution)}Xa.upload(V,gi(Lt),ai,Q)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Xa.upload(V,gi(Lt),ai,Q),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Re.setValue(V,"center",J.center),Re.setValue(V,"modelViewMatrix",J.modelViewMatrix),Re.setValue(V,"normalMatrix",J.normalMatrix),Re.setValue(V,"modelMatrix",J.matrixWorld),q.uniformsGroups!==void 0){let ze=q.uniformsGroups;for(let ns=0,Ro=ze.length;ns<Ro;ns++){let I0=ze[ns];st.update(I0,kn),st.bind(I0,kn)}}return kn}function oi(C,z){C.ambientLightColor.needsUpdate=z,C.lightProbe.needsUpdate=z,C.sunLights.needsUpdate=z,C.sunLightShadows.needsUpdate=z,C.directionalLights.needsUpdate=z,C.directionalLightShadows.needsUpdate=z,C.pointLights.needsUpdate=z,C.pointLightShadows.needsUpdate=z,C.spotLights.needsUpdate=z,C.spotLightShadows.needsUpdate=z,C.rectAreaLights.needsUpdate=z,C.hemisphereLights.needsUpdate=z}function Bn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,z,K){let q=Z.get(C);q.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(C.texture).__webglTexture=z,Z.get(C.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:K,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,z){let K=Z.get(C);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(C,z=0,K=0){Y=C,H=z,B=K;let q=null,J=!1,Et=!1;if(C){let Pt=Z.get(C);if(Pt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(V.FRAMEBUFFER,Pt.__webglFramebuffer),O.copy(C.viewport),tt.copy(C.scissor),rt=C.scissorTest,T.viewport(O),T.scissor(tt),T.setScissorTest(rt),W=-1;return}else if(Pt.__webglFramebuffer===void 0)Q.setupRenderTarget(C);else if(Pt.__hasExternalTextures)Q.rebindTextures(C,Z.get(C.texture).__webglTexture,Z.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ce=C.depthTexture;if(Pt.__boundDepthTexture!==ce){if(ce!==null&&Z.has(ce)&&(C.width!==ce.image.width||C.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(C)}}let zt=C.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Et=!0);let Xt=Z.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[z])?q=Xt[z][K]:q=Xt[z],J=!0):C.samples>0&&Q.useMultisampledRTT(C)===!1?q=Z.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?q=Xt[K]:q=Xt,O.copy(C.viewport),tt.copy(C.scissor),rt=C.scissorTest}else O.copy(dt).multiplyScalar(j).floor(),tt.copy(Vt).multiplyScalar(j).floor(),rt=Tt;if(K!==0&&(q=N),T.bindFramebuffer(V.FRAMEBUFFER,q)&&T.drawBuffers(C,q),T.viewport(O),T.scissor(tt),T.setScissorTest(rt),J){let Pt=Z.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,K)}else if(Et){let Pt=z;for(let zt=0;zt<C.textures.length;zt++){let Xt=Z.get(C.textures[zt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+zt,Xt.__webglTexture,K,Pt)}}else if(C!==null&&K!==0){let Pt=Z.get(C.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pt.__webglTexture,K)}W=-1};function Co(C){let z=Z.get(C);return(z.__readFormat!==C.format||z.__readType!==C.type)&&(z.__readFormat=C.format,z.__readType=C.type,z.__formatReadable=L.textureFormatReadable(C.format),z.__typeReadable=L.textureTypeReadable(C.type)),z}this.readRenderTargetPixels=function(C,z,K,q,J,Et,Nt,Pt=0){if(!(C&&C.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){T.bindFramebuffer(V.FRAMEBUFFER,zt);try{let Xt=C.textures[Pt],ce=Xt.format,ve=Xt.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt);let Ht=Co(Xt);if(Ht.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=C.width-q&&K>=0&&K<=C.height-J&&V.readPixels(z,K,q,J,bt.convert(ce),bt.convert(ve),Et)}finally{let Xt=Y!==null?Z.get(Y).__webglFramebuffer:null;T.bindFramebuffer(V.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(C,z,K,q,J,Et,Nt,Pt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Z.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt)if(z>=0&&z<=C.width-q&&K>=0&&K<=C.height-J){T.bindFramebuffer(V.FRAMEBUFFER,zt);let Xt=C.textures[Pt],ce=Xt.format,ve=Xt.type;C.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pt);let Ht=Co(Xt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let we=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,we),V.bufferData(V.PIXEL_PACK_BUFFER,Et.byteLength,V.STREAM_READ),V.readPixels(z,K,q,J,bt.convert(ce),bt.convert(ve),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let fi=Y!==null?Z.get(Y).__webglFramebuffer:null;T.bindFramebuffer(V.FRAMEBUFFER,fi);let We=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Yv(V,We,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,we),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Et),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(we),V.deleteSync(We),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,z=null,K=0){let q=Math.pow(2,-K),J=Math.floor(C.image.width*q),Et=Math.floor(C.image.height*q),Nt=z!==null?z.x:0,Pt=z!==null?z.y:0;Q.setTexture2D(C,0),V.copyTexSubImage2D(V.TEXTURE_2D,K,0,0,Nt,Pt,J,Et),T.unbindTexture()},this.copyTextureToTexture=function(C,z,K=null,q=null,J=0,Et=0){let Nt,Pt,zt,Xt,ce,ve,Ht,we,fi,We=C.isCompressedTexture?C.mipmaps[Et]:C.image;if(K!==null)Nt=K.max.x-K.min.x,Pt=K.max.y-K.min.y,zt=K.isBox3?K.max.z-K.min.z:1,Xt=K.min.x,ce=K.min.y,ve=K.isBox3?K.min.z:0;else{let ai=Math.pow(2,-J);Nt=Math.floor(We.width*ai),Pt=Math.floor(We.height*ai),C.isDataArrayTexture?zt=We.depth:C.isData3DTexture?zt=Math.floor(We.depth*ai):zt=1,Xt=0,ce=0,ve=0}q!==null?(Ht=q.x,we=q.y,fi=q.z):(Ht=0,we=0,fi=0);let Ue=bt.convert(z.format),ki=bt.convert(z.type),Lt;z.isData3DTexture?(Q.setTexture3D(z,0),Lt=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Q.setTexture2DArray(z,0),Lt=V.TEXTURE_2D_ARRAY):(Q.setTexture2D(z,0),Lt=V.TEXTURE_2D),T.activeTexture(V.TEXTURE0),T.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),T.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),T.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);let en=T.getParameter(V.UNPACK_ROW_LENGTH),Me=T.getParameter(V.UNPACK_IMAGE_HEIGHT),kn=T.getParameter(V.UNPACK_SKIP_PIXELS),fr=T.getParameter(V.UNPACK_SKIP_ROWS),es=T.getParameter(V.UNPACK_SKIP_IMAGES);T.pixelStorei(V.UNPACK_ROW_LENGTH,We.width),T.pixelStorei(V.UNPACK_IMAGE_HEIGHT,We.height),T.pixelStorei(V.UNPACK_SKIP_PIXELS,Xt),T.pixelStorei(V.UNPACK_SKIP_ROWS,ce),T.pixelStorei(V.UNPACK_SKIP_IMAGES,ve);let Do=C.isDataArrayTexture||C.isData3DTexture,Re=z.isDataArrayTexture||z.isData3DTexture;if(C.isDepthTexture){let ai=Z.get(C),is=Z.get(z),ze=Z.get(ai.__renderTarget),ns=Z.get(is.__renderTarget);T.bindFramebuffer(V.READ_FRAMEBUFFER,ze.__webglFramebuffer),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let Ro=0;Ro<zt;Ro++)Do&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(C).__webglTexture,J,ve+Ro),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,Et,fi+Ro)),V.blitFramebuffer(Xt,ce,Nt,Pt,Ht,we,Nt,Pt,V.DEPTH_BUFFER_BIT,V.NEAREST);T.bindFramebuffer(V.READ_FRAMEBUFFER,null),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||C.isRenderTargetTexture||Z.has(C)){let ai=Z.get(C),is=Z.get(z);T.bindFramebuffer(V.READ_FRAMEBUFFER,I),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let ze=0;ze<zt;ze++)Do?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ai.__webglTexture,J,ve+ze):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ai.__webglTexture,J),Re?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,is.__webglTexture,Et,fi+ze):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,is.__webglTexture,Et),J!==0?V.blitFramebuffer(Xt,ce,Nt,Pt,Ht,we,Nt,Pt,V.COLOR_BUFFER_BIT,V.NEAREST):Re?V.copyTexSubImage3D(Lt,Et,Ht,we,fi+ze,Xt,ce,Nt,Pt):V.copyTexSubImage2D(Lt,Et,Ht,we,Xt,ce,Nt,Pt);T.bindFramebuffer(V.READ_FRAMEBUFFER,null),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Re?C.isDataTexture||C.isData3DTexture?V.texSubImage3D(Lt,Et,Ht,we,fi,Nt,Pt,zt,Ue,ki,We.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Lt,Et,Ht,we,fi,Nt,Pt,zt,Ue,We.data):V.texSubImage3D(Lt,Et,Ht,we,fi,Nt,Pt,zt,Ue,ki,We):C.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Et,Ht,we,Nt,Pt,Ue,ki,We.data):C.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Et,Ht,we,We.width,We.height,Ue,We.data):V.texSubImage2D(V.TEXTURE_2D,Et,Ht,we,Nt,Pt,Ue,ki,We);T.pixelStorei(V.UNPACK_ROW_LENGTH,en),T.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Me),T.pixelStorei(V.UNPACK_SKIP_PIXELS,kn),T.pixelStorei(V.UNPACK_SKIP_ROWS,fr),T.pixelStorei(V.UNPACK_SKIP_IMAGES,es),Et===0&&z.generateMipmaps&&V.generateMipmap(Lt),T.unbindTexture()},this.initRenderTarget=function(C){Z.get(C).__webglFramebuffer===void 0&&Q.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Q.setTextureCube(C,0):C.isData3DTexture?Q.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Q.setTexture2DArray(C,0):Q.setTexture2D(C,0),T.unbindTexture()},this.resetState=function(){H=0,B=0,Y=null,T.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),e.unpackColorSpace=_e._getUnpackColorSpace()}};var $a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},s2=new Fs(-1,1,1,-1,0,1),E0=class extends Ie{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}},o2=new E0,Bs=class{constructor(t){this._mesh=new qt(o2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,s2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Za=class extends Un{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=jr.clone(t.uniforms),this.material=new ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Bs(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var kc=class extends Un{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},ed=class extends Un{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var id=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Ft);this._width=i.width,this._height=i.height,e=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Za($a),this.copyPass.material.blending=Jn,this.timer=new yc}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,s=this.passes.length;n<s;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}kc!==void 0&&(o instanceof kc?i=!0:o instanceof ed&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var nd=class extends Un{constructor(t,e,i=null,n=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new xt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Ey={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ja=class r extends Un{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(s,o,{type:yi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new ri(s,o,{type:yi,depthBuffer:!1});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let f=new ri(s,o,{type:yi,depthBuffer:!1});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Ey;this.highPassUniforms=jr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ft(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=jr.clone($a.uniforms),this.blendMaterial=new ae({uniforms:this.copyUniforms,vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader,premultipliedAlpha:!0,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new xt,this._oldClearAlpha=1,this._basic=new si,this._fsQuad=new Bs(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ft(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],s=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),s.push(c)}return new ae({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}};Ja.BlurDirectionX=new Ft(1,0);Ja.BlurDirectionY=new Ft(0,1);var zc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var rd=class extends Un{constructor(){super(),this.isOutputPass=!0,this.uniforms=jr.clone(zc.uniforms),this.material=new Na({name:zc.name,uniforms:this.uniforms,vertexShader:zc.vertexShader,fragmentShader:zc.fragmentShader}),this._fsQuad=new Bs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},_e.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Tc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function Ty(r){let t=new mo,e=new qt(new Cs(40,48,24),new ae({side:Oi,depthWrite:!1,uniforms:{top:{value:new xt("#1b2340")},horizon:{value:new xt("#0d1124")},bottom:{value:new xt("#05060c")}},vertexShader:`
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
        }`}));t.add(e);let i=new U,n=(a,l,c,u,h,f,d)=>{let p=new qt(new Fe(a,l),new si({color:new xt(c).multiplyScalar(u),side:Ki}));p.position.set(h,f,d),p.lookAt(i),t.add(p)};n(9,6,"#ffe2c4",3.2,-6,9,7),n(14,4,"#ffd9bd",1.1,2,0,12),n(12,3,"#fff0e0",.8,0,-6,9),n(10,5,"#4f7dff",2,5,3,-10),n(6,8,"#3d5cff",.6,-8,1,-8),n(.35,16,"#ffffff",6,-10,1,1),n(.3,16,"#ffd2a6",7,10,0,2),n(9,.45,"#ffffff",3.5,0,7,9),n(20,20,"#ff6a1a",.22,0,-12,0);let s=new Ya(r),o=s.fromScene(t,.035);return s.dispose(),t.traverse(a=>{a.isMesh&&(a.geometry.dispose(),a.material.dispose())}),o.texture}var Hc=12,Ay=30,a2={uniforms:{tDiffuse:{value:null},uTime:{value:0},uShift:{value:0},uVignette:{value:.9},uRes:{value:new Ft(1,1)}},vertexShader:`
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
    }`},sd=class{constructor(t,{mobile:e=!1,reduced:i=!1}={}){this.canvas=t,this.mobile=e,this.reduced=i,this.things=[],this.anchors=new Set,this.failed=!1,this.time=0,this.pointer=new Ft(0,0),this.pointerRaw=new Ft(0,0),this.scrollVel=0;try{if(this.renderer=new jf({canvas:t,antialias:!1,alpha:!1,stencil:!1,powerPreference:"high-performance"}),!this.renderer.capabilities.isWebGL2)throw new Error("WebGL2 required")}catch{this.failed=!0;return}let n=this.renderer;n.outputColorSpace=Ui,n.toneMapping=Mo,n.toneMappingExposure=1,n.setClearColor("#05070e",1),this.maxDpr=e?1.5:1.75,this.dpr=Math.min(window.devicePixelRatio||1,this.maxDpr),this.useBloom=!e,this.scene=new mo,this.env=Ty(n),this.scene.environment=this.env,this.camera=new Zi(Ay,1,.1,220),this.camera.position.set(0,0,Hc),this.camBase=new U(0,0,Hc),this.lookAt=new U(0,0,0);let s=new Oa("#fff0e0",1.9);s.position.set(-3,4,5);let o=new Oa("#5b8cff",.9);o.position.set(3,2.5,-8);let a=new vc("#3b4670",.2),l=new _c("#b9c6ff","#ffb27a",.75);this.scene.add(s,o,a,l),this.lights={key:s,rim:o,amb:a,hemi:l},this.w=0,this.h=0,this._buildPost(),this.resize(),window.addEventListener("resize",()=>this.resize()),this._frames=[],this._last=performance.now(),this._slowStrikes=0,window.addEventListener("pointermove",c=>{this.pointerRaw.set(c.clientX/window.innerWidth*2-1,-(c.clientY/window.innerHeight*2-1))},{passive:!0})}_buildPost(){let t=this.renderer,e=new ri(4,4,{type:yi,samples:this.mobile?0:4});this.composer=new id(t,e),this.composer.addPass(new nd(this.scene,this.camera)),this.bloom=new Ja(new Ft(256,256),.45,.6,.9),this.bloom.enabled=this.useBloom,this.composer.addPass(this.bloom),this.composer.addPass(new rd),this.final=new Za(a2),this.composer.addPass(this.final)}resize(){if(this.failed)return;let t=window.innerWidth,e=window.innerHeight;if(this.mobile&&t===this.w&&e<this.h&&(e=this.h),!(t===this.w&&e===this.h&&this.renderer.getPixelRatio()===this.dpr)){this.w=t,this.h=e,this.renderer.setPixelRatio(this.dpr),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(t,e),this.bloom.resolution.set(t*.5,e*.5),this.final.uniforms.uRes.value.set(t*this.dpr,e*this.dpr),this.camera.aspect=t/e,this.camera.updateProjectionMatrix();for(let i of this.things)i.resize?.(t,e)}}add(t){return t.world=this,this.things.push(t),t.object&&this.scene.add(t.object),t}unitsPerPx(t=0){return 2*(this.camBase.z-t)*Math.tan(Kr.degToRad(Ay/2))/this.h}viewSize(t=0){let e=this.unitsPerPx(t);return{w:this.w*e,h:this.h*e}}anchor(t,{z:e=0,margin:i=.25}={}){let n={el:t,z:e,margin:i,x:0,y:0,w:1,h:1,px:{left:0,top:0,width:0,height:0},visible:!1,progress:0};return this.anchors.add(n),n}_updateAnchors(){let t=this.w,e=this.h;for(let i of this.anchors){if(!i.el)continue;let n=i.el.getBoundingClientRect(),s=i.margin*e;i.px.left=n.left,i.px.top=n.top,i.px.width=n.width,i.px.height=n.height,i.visible=n.width>0&&n.bottom>-s&&n.top<e+s;let o=this.unitsPerPx(i.z);i.x=(n.left+n.width/2-t/2)*o,i.y=-(n.top+n.height/2-e/2)*o,i.w=n.width*o,i.h=n.height*o,i.progress=Kr.clamp((e-n.top)/(e+n.height),0,1)}}async warmup(){if(this.failed)return;let t=[];this.scene.traverse(e=>{e.visible||(t.push(e),e.visible=!0)});try{await this.renderer.compileAsync(this.scene,this.camera)}catch{}this.composer.render(.016);for(let e of t)e.visible=!1}render(t){if(this.failed)return;this.time+=t;let e=this.time,i=1-Math.pow(.0015,t);this.pointer.lerp(this.pointerRaw,i),this._updateAnchors();for(let o of this.things)o.enabled!==!1&&o.update?.(e,t);let n=this.camera;n.position.x=this.camBase.x+this.pointer.x*.35,n.position.y=this.camBase.y+this.pointer.y*.22,n.position.z=this.camBase.z,n.lookAt(this.lookAt),(window.innerWidth!==this.w||!this.mobile&&window.innerHeight!==this.h)&&this.resize(),this.final.uniforms.uTime.value=e;let s=Math.min(Math.abs(this.scrollVel)/4e3,1);this.final.uniforms.uShift.value+=(s*.012-this.final.uniforms.uShift.value)*Math.min(1,t*6),this.composer.render(t),this._adapt()}_adapt(){let t=performance.now(),e=t-this._last;if(this._last=t,e>250||(this._frames.push(e),this._frames.length<60))return;this._frames.sort((n,s)=>n-s);let i=this._frames[30];this._frames.length=0,i>24&&(this.dpr>1?(this.dpr=Math.max(1,this.dpr-.25),this.resize()):this.bloom.enabled&&++this._slowStrikes>1&&(this.bloom.enabled=!1))}};var od=class{constructor(){this.uniforms={uTime:{value:0},uAspect:{value:1},uTop:{value:new xt("#050812")},uBottom:{value:new xt("#020308")},uWarm:{value:new xt("#ff8f3d")},uCold:{value:new xt("#3d63ff")},uWarmPos:{value:new Ft(-.55,-.6)},uColdPos:{value:new Ft(.75,.55)},uWarmAmt:{value:.16},uColdAmt:{value:.14},uScroll:{value:0},uPointer:{value:new Ft(0,0)}};let t=new ae({uniforms:this.uniforms,depthTest:!1,depthWrite:!1,vertexShader:`
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
        }`}),e=new Ie;e.setAttribute("position",new Te(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3)),e.setAttribute("uv",new Te(new Float32Array([0,0,2,0,0,2]),2)),this.mesh=new qt(e,t),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,this.object=this.mesh}resize(t,e){this.uniforms.uAspect.value=t/e}update(t){this.uniforms.uTime.value=t,this.world&&this.uniforms.uPointer.value.copy(this.world.pointer)}},ad=class{constructor({count:t=1400}={}){let e=new Float32Array(t*3),i=new Float32Array(t*4);for(let o=0;o<t;o++)e[o*3]=(Math.random()-.5)*30,e[o*3+1]=(Math.random()-.5)*20,e[o*3+2]=-28+Math.random()*34,i[o*4]=Math.random(),i[o*4+1]=Math.random(),i[o*4+2]=Math.random(),i[o*4+3]=Math.random();let n=new Ie;n.setAttribute("position",new Te(e,3)),n.setAttribute("aRand",new Te(i,4)),this.uniforms={uTime:{value:0},uScroll:{value:0},uPx:{value:1},uOpacity:{value:1},uWarm:{value:new xt("#ffae6b")},uCold:{value:new xt("#9fb8ff")}};let s=new ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:qe,vertexShader:`
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
        }`});this.points=new lc(n,s),this.points.frustumCulled=!1,this.object=this.points}resize(t,e){this.uniforms.uPx.value=Math.min(window.devicePixelRatio||1,1.75)*(e/900)*1.4}update(t){this.uniforms.uTime.value=t,this.uniforms.uScroll.value=window.scrollY}};var ie={FOX:0,CLOUD:1,HALO:2,COPY:3,HISTORY:4,FORMAT:5,GRID:6,SPHERE:7,GALAXY:8,SCATTER:9,SNAP:10},A0=11;function l2(r){return()=>{r|=0,r=r+1831565813|0;let t=Math.imul(r^r>>>15,1|r);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var On=(r,t)=>({pts:[r,t],closed:!1});function Cy(r,t,e,i=0,n=Math.PI*2,s=64){let o=[];for(let a=0;a<=s;a++){let l=i+(n-i)*a/s;o.push([r+Math.cos(l)*e,t+Math.sin(l)*e])}return{pts:o,closed:!1}}function T0(r,t,e,i,n){let s=[],o=[[r+e/2-n,t+i/2-n,0],[r-e/2+n,t+i/2-n,Math.PI/2],[r-e/2+n,t-i/2+n,Math.PI],[r+e/2-n,t-i/2+n,Math.PI*3/2]];for(let[a,l,c]of o)for(let u=0;u<=6;u++){let h=c+Math.PI/2*(u/6);s.push([a+Math.cos(h)*n,l+Math.sin(h)*n])}return{pts:s,closed:!0}}function Dy(r){let t=0,e=r.pts.length;for(let i=1;i<e+(r.closed?1:0);i++){let n=r.pts[(i-1)%e],s=r.pts[i%e];t+=Math.hypot(s[0]-n[0],s[1]-n[1])}return t}function c2(r,t){let e=r.pts.length;for(let i=1;i<e+(r.closed?1:0);i++){let n=r.pts[(i-1)%e],s=r.pts[i%e],o=Math.hypot(s[0]-n[0],s[1]-n[1]);if(t<=o||i===e-(r.closed?0:1)){let a=o>0?Math.min(1,t/o):0;return[n[0]+(s[0]-n[0])*a,n[1]+(s[1]-n[1])*a]}t-=o}return r.pts[e-1]}function u2(r,t,e,{jitter:i=.03,zJitter:n=.05}={}){let s=r.map(c=>(c.path?Dy(c.path):c.box[2]*c.box[3]*6)*(c.weight??1)),o=s.reduce((c,u)=>c+u,0),a=[],l=0;return r.forEach((c,u)=>{let h=u===r.length-1?t-a.length:Math.round(s[u]/o*t);l+=h;for(let f=0;f<h;f++){let d,p;if(c.path){let _=Dy(c.path);[d,p]=c2(c.path,(f+e()*.6)/h*_)}else{let[_,m,g,y]=c.box;d=_+(e()-.5)*g,p=m+(e()-.5)*y}a.push([d+(e()-.5)*i,p+(e()-.5)*i,(c.z??0)+(e()-.5)*n])}}),a.slice(0,t)}function Ry(r,t){for(let e=r.length-1;e>0;e--){let i=Math.floor(t()*(e+1));[r[e],r[i]]=[r[i],r[e]]}return r}function Py(r,t){let e=[],i=l2(1234),n=(a,l)=>{let c=new Float32Array(t*4);for(let u=0;u<t;u++){let h=a[u];c[u*4]=h[0],c[u*4+1]=h[1],c[u*4+2]=h[2],c[u*4+3]=l(u)}return c};{let a=[];for(let l=0;l<t;l++)a.push([r[l*3],r[l*3+1],r[l*3+2]]);e[ie.FOX]=n(a,()=>-1)}{let a=[];for(let l=0;l<t;l++){let c=r[l*3],u=r[l*3+1],h=r[l*3+2],f=c+(i()-.5)*1.2,d=u+(i()-.5)*1.2,p=h+(i()-.2)*1.6,_=Math.hypot(f,d,p)||1;f/=_,d/=_,p/=_;let m=3.2+Math.pow(i(),.8)*9;a.push([f*m*1.45,d*m*.85,Math.max(-16,Math.min(Hc-5,p*m*.8-4))])}e[ie.CLOUD]=n(a,()=>.04+Math.pow(i(),2.5)*.17)}{let a=[];for(let l=0;l<t;l++){let c=i()*Math.PI*2,u=(i()-.5)*.9+(i()-.5)*.5,h=7.2+u,f=3.9+u*.6;a.push([Math.cos(c)*h,Math.sin(c)*f,-3.5+(i()-.5)*1.2+Math.sin(c*2)*.6])}e[ie.HALO]=n(a,()=>.05+i()*.1)}let s=(a,l)=>Ry(u2(a,t,i,l),i),o=()=>.05+i()*.035;e[ie.COPY]=n(s([{path:T0(-.32,.3,1.45,1.85,.18),z:-.35},{path:T0(.3,-.28,1.45,1.85,.18),z:.3,weight:1.15},{path:On([-.1,.22],[.72,.22]),z:.3},{path:On([-.1,-.08],[.72,-.08]),z:.3},{path:On([-.1,-.38],[.5,-.38]),z:.3},{path:On([-.1,-.68],[.62,-.68]),z:.3}]),o);{let a=Cy(0,0,1.25,Math.PI*.62,Math.PI*2.42,90),l=a.pts[0],c=[l[0]-.02,l[1]],u=[{path:a,z:0},{path:On(c,[c[0]-.36,c[1]+.05]),z:0},{path:On(c,[c[0]+.06,c[1]+.36]),z:0},{path:Cy(0,0,.88,0,Math.PI*2,64),z:.12,weight:.8},{path:On([0,0],[0,.6]),z:.25,weight:1.6},{path:On([0,0],[.45,-.22]),z:.25,weight:1.6}];for(let h=0;h<12;h++){let f=h/12*Math.PI*2;u.push({path:On([Math.cos(f)*.7,Math.sin(f)*.7],[Math.cos(f)*.8,Math.sin(f)*.8]),z:.12,weight:1.4})}e[ie.HISTORY]=n(s(u),o)}{let a=[[0,1.3],[1,1],[1,1.25],[0,.7],[1,1.1],[2,.75],[0,.95]],l=[];a.forEach(([c,u],h)=>{let f=.95-h*.32,d=-1.15+c*.32;l.push({box:[d+u/2,f,u,.1],z:.1*(c-1)})}),l.push({path:On([-1.02,.7],[-1.02,-.85]),z:-.1,weight:.5}),l.push({path:On([-.7,.05],[-.7,-.45]),z:-.1,weight:.5}),e[ie.FORMAT]=n(s(l,{jitter:.02}),o)}{let a=[];a.push({path:T0(0,0,2.6,1.9,.08),z:0});for(let f=1;f<4;f++){let d=-1.3+.65*f;a.push({path:On([d,1.9/2],[d,-1.9/2]),z:0,weight:.8})}for(let f=1;f<5;f++){let d=.95-.38*f;a.push({path:On([-2.6/2,d],[2.6/2,d]),z:0,weight:.8})}a.push({box:[0,1.9/2-1.9/5/2,2.6,1.9/5*.7],z:.05,weight:.5}),a.push({box:[-2.6/2+2.6/4*1.5,1.9/2-1.9/5*2.5,2.6/4*.7,1.9/5*.55],z:.35,weight:.6}),a.push({box:[-2.6/2+2.6/4*2.5,1.9/2-1.9/5*3.5,2.6/4*.7,1.9/5*.55],z:.55,weight:.6}),e[ie.GRID]=n(s(a,{jitter:.02}),o)}{let a=[],l=Math.PI*(3-Math.sqrt(5));for(let c=0;c<t;c++){let u=1-c/(t-1)*2,h=Math.sqrt(1-u*u),f=l*c,d=c%3===0?1.55+i()*.25:1.12+i()*.06;a.push([Math.cos(f)*h*d,u*d,Math.sin(f)*h*d])}e[ie.SPHERE]=n(Ry(a,i),()=>.035+i()*.04)}{let a=[];for(let l=0;l<t;l++){let c=l%3,u=.45+Math.pow(i(),.7)*1.55,h=u*2.6+c*Math.PI*2/3+(i()-.5)*.5,f=(i()-.5)*.08*(2.2-u);a.push([Math.cos(h)*u,f,Math.sin(h)*u*.9])}e[ie.GALAXY]=n(a,()=>.018+i()*.03)}{let a=[];for(let l=0;l<t;l++){let c=i()*Math.PI*2,u=1.5+i()*7;a.push([Math.cos(c)*u*1.5,Math.sin(c)*u,Hc+1.5+i()*10])}e[ie.SCATTER]=n(a,()=>.12+i()*.2)}return e[ie.SNAP]=new Float32Array(t*4),e}var Ka=64,h2=`
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
  varying float vFree;
  varying float vHot;

  vec4 shardForm(float f) {
    float row = floor(aIndex / ${Ka}.0) + f * uRows;
    float col = mod(aIndex, ${Ka}.0);
    return texelFetch(uForms, ivec2(int(col), int(row)), 0);
  }
  vec3 rotAxis(vec3 v, vec3 k, float a) {
    float c = cos(a); float s = sin(a);
    return v * c + cross(k, v) * s + k * dot(k, v) * (1.0 - c);
  }
`,f2=`
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

  float wFox = uFoxA * (1.0 - t) + uFoxB * t;

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

  float ang = (uTime * (0.2 + aRand.w * 0.9) * uSpin + aRand.w * 40.0) * (1.0 - wFox);
  vec3 axis = normalize(aRand.zxy - 0.5 + 0.0001);
  vec3 local = uRefRot * (position - aCenter) * (s / max(aSize, 0.0001));
  local = rotAxis(local, axis, ang);

  vec3 transformed = c + local + breath;
  vFree = 1.0 - wFox;
`,ld=class{constructor({levels:t=2}={}){let e=Rx(sm({height:2}),t),i=e.length;this.N=i;let n=new Float32Array(i*9),s=new Float32Array(i*9),o=new Float32Array(i*9),a=new Float32Array(i*3),l=new Float32Array(i*12),c=new Float32Array(i*3),u=new Float32Array(i*6),h=new Float32Array(i*3);this.sizes=new Float32Array(i),this.rnd=new Float32Array(i*4),this.ord=new Float32Array(i*2),this.roles=[];let f=1/0,d=-1/0,p=0;e.forEach((v,S)=>{let M=(v.a[0]+v.b[0]+v.c[0])/3,E=(v.a[1]+v.b[1]+v.c[1])/3,x=(v.a[2]+v.b[2]+v.c[2])/3;h.set([M,E,x],S*3),f=Math.min(f,E),d=Math.max(d,E),p=Math.max(p,Math.hypot(M,E))});let _=99,m=()=>(_=_*16807%2147483647,_/2147483647);e.forEach((v,S)=>{let M=h[S*3],E=h[S*3+1],x=h[S*3+2],w=Math.max(...[v.a,v.b,v.c].map(N=>Math.hypot(N[0]-M,N[1]-E,N[2]-x)));this.sizes[S]=w;let A=[m(),m(),m(),m()];this.rnd.set(A,S*4);let R=(E-f)/(d-f),D=Math.hypot(M,E)/p;this.ord.set([R,D],S*2),this.roles.push(v.role),[v.a,v.b,v.c].forEach((N,I)=>{let F=S*3+I;n.set(N,F*3),s.set([M,E,x],F*3),o.set(v.color,F*3),a[F]=S,l.set(A,F*4),c[F]=w,u.set([R,D],F*2)})});let g=new Ie;g.setAttribute("position",new Te(n,3)),g.setAttribute("aCenter",new Te(s,3)),g.setAttribute("color",new Te(o,3)),g.setAttribute("aIndex",new Te(a,1)),g.setAttribute("aRand",new Te(l,4)),g.setAttribute("aSize",new Te(c,1)),g.setAttribute("aOrder",new Te(u,2)),g.boundingSphere=new Zn(new U,1e4),this.forms=Py(h,i),this.rows=Math.ceil(i/Ka);let y=new Float32Array(Ka*this.rows*A0*4);this.forms.forEach((v,S)=>this._writeForm(y,S,v)),this.texData=y,this.tex=new _o(y,Ka,this.rows*A0,bn,Mn),this.tex.minFilter=ci,this.tex.magFilter=ci,this.tex.needsUpdate=!0,this.uniforms={uForms:{value:this.tex},uRows:{value:this.rows},uFormA:{value:ie.SCATTER},uFormB:{value:ie.FOX},uMix:{value:0},uMatA:{value:new xe},uMatB:{value:new xe},uScaleA:{value:1},uScaleB:{value:1},uFoxA:{value:0},uFoxB:{value:1},uRefRot:{value:new se},uTime:{value:0},uStagger:{value:.6},uOrderW:{value:new U(1,0,0)},uSwirl:{value:.6},uSpin:{value:1},uPointer:{value:new U(999,999,0)},uHover:{value:0},uHoverR:{value:.9},uFoxCenter:{value:new U},uBreath:{value:.012},uGlow:{value:.55},uSelfLit:{value:.1},uFlash:{value:0}};let b=new yn({vertexColors:!0,flatShading:!0,roughness:.36,metalness:0,clearcoat:1,clearcoatRoughness:.14,side:Ki,envMapIntensity:1.15});b.onBeforeCompile=v=>{Object.assign(v.uniforms,this.uniforms),v.vertexShader=v.vertexShader.replace("#include <common>",`#include <common>
`+h2).replace("#include <begin_vertex>",f2),v.fragmentShader=v.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGlow;
uniform float uSelfLit;
uniform float uFlash;
varying float vFree;
varying float vHot;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance += vColor.rgb * (uSelfLit + vFree * uGlow + uFlash + vHot * 0.6);`)},b.customProgramCacheKey=()=>"fox-shards",this.material=b,this.mesh=new qt(g,b),this.mesh.frustumCulled=!1,this.object=this.mesh,this.places={identity:()=>{}},this.A={form:ie.SCATTER,place:"identity"},this.B={form:ie.FOX,place:"identity"},this.mix=0,this.tween=null,this.mode="tween",this._p={pos:new U,quat:new Ji,scale:1},this._matA=new xe,this._matB=new xe,this._refRot=new se,this._m4=new xe}_writeForm(t,e,i){let n=e*this.rows*Ka*4;t.set(i,n)}place(t,e){this.places[t]=e}_placement(t,e){let i=this._p;i.pos.set(0,0,0),i.quat.identity(),i.scale=1;let n=this.places[t.place];return n&&n(i),e.compose(i.pos,i.quat,new U(i.scale,i.scale,i.scale)),i.scale}get settled(){return!this.tween&&this.mix>=1}get target(){return this.B}go(t,e,i={}){if(this.B.form===t&&this.B.place===e&&this.mode==="tween"&&(this.tween||this.mix>=1))return;this.mode="tween",this.mix>0&&this.mix<1?this._snapshot():this.mix>=1&&(this.A=this.B),this.B={form:t,place:e},this.mix=0;let n=this.uniforms;n.uStagger.value=i.stagger??.55,n.uOrderW.value.set(...i.order||[1,0,0]),n.uSwirl.value=i.swirl??.8,this.tween={t:0,dur:i.duration??1.8,ease:i.ease||(s=>s)}}scrub(t,e,i,n,s,o={}){(this.mode!=="scrub"||this.A.form!==t||this.B.form!==i||this.A.place!==e||this.B.place!==n)&&(this.mode="scrub",this.tween=null,this.A={form:t,place:e},this.B={form:i,place:n},o.from!=null&&(this.mix=o.from));let a=this.uniforms;a.uStagger.value=o.stagger??.7,a.uOrderW.value.set(...o.order||[.35,0,.65]),a.uSwirl.value=o.swirl??1.2,this._scrubTarget=s}_snapshot(){let t=this.N,e=this.uniforms,i=this.forms[this.A.form],n=this.forms[this.B.form],s=this._placement(this.A,this._matA),o=this._placement(this.B,this._matB),a=this.forms[ie.SNAP],l=e.uOrderW.value,c=e.uStagger.value,u=e.uSwirl.value,h=new U,f=new U;for(let d=0;d<t;d++){let p=this.rnd[d*4+3],_=p*l.x+this.ord[d*2]*l.y+this.ord[d*2+1]*l.z,m=Math.min(1,Math.max(0,this.mix*(1+c)-_*c));m=m*m*(3-2*m),h.set(i[d*4],i[d*4+1],i[d*4+2]).applyMatrix4(this._matA),f.set(n[d*4],n[d*4+1],n[d*4+2]).applyMatrix4(this._matB),h.lerp(f,m);let g=this.rnd[d*4]-.5,y=this.rnd[d*4+1]-.5,b=this.rnd[d*4+2]-.5,v=Math.hypot(g,y,b)||1,S=Math.sin(Math.PI*m)*u*(.35+p);h.x+=g/v*S,h.y+=y/v*S,h.z+=b/v*S;let M=(i[d*4+3]<0?this.sizes[d]:i[d*4+3])*s,E=(n[d*4+3]<0?this.sizes[d]:n[d*4+3])*o;a[d*4]=h.x,a[d*4+1]=h.y,a[d*4+2]=h.z,a[d*4+3]=M+(E-M)*m}this._writeForm(this.texData,ie.SNAP,a),this.tex.needsUpdate=!0,this.A={form:ie.SNAP,place:"identity"},this.mix=0}update(t,e){let i=this.uniforms;if(i.uTime.value=t,this.mode==="tween"&&this.tween){let u=this.tween;u.t=Math.min(1,u.t+e/u.dur),this.mix=u.ease(u.t),u.t>=1&&(this.tween=null,this.mix=1,u.onDone?.())}else if(this.mode==="scrub"){let u=1-Math.pow(.002,e);this.mix+=(this._scrubTarget-this.mix)*u}i.uFormA.value=this.A.form,i.uFormB.value=this.B.form,i.uMix.value=this.mix,i.uScaleA.value=this._placement(this.A,i.uMatA.value);let n=this._p.quat.clone(),s=this._p.pos.clone();i.uScaleB.value=this._placement(this.B,i.uMatB.value);let o=this._p.quat.clone(),a=this._p.pos.clone(),l=this.A.form===ie.FOX?1:0,c=this.B.form===ie.FOX?1:0;if(i.uFoxA.value=l,i.uFoxB.value=c,l||c){let u=l&&c?n.slerp(o,this.mix):l?n:o;this._m4.makeRotationFromQuaternion(u),i.uRefRot.value.setFromMatrix4(this._m4),i.uFoxCenter.value.copy(l&&c?s.lerp(a,this.mix):l?s:a)}}};var Le={display:'"Bricolage Grotesque", "Arial Narrow", system-ui, sans-serif',body:'Geist, "Segoe UI", system-ui, sans-serif',mono:'"JetBrains Mono", ui-monospace, Consolas, monospace',serif:'"Instrument Serif", Georgia, serif'};function Qr(r,{srgb:t=!0,mips:e=!0,aniso:i=4}={}){let n=new uc(r);return t&&(n.colorSpace=Ui),n.generateMipmaps=e,n.minFilter=e?Tr:vi,n.anisotropy=i,n.needsUpdate=!0,n}function To(r,t,e,i,n,s){r.beginPath(),r.moveTo(t+s,e),r.arcTo(t+i,e,t+i,e+n,s),r.arcTo(t+i,e+n,t,e+n,s),r.arcTo(t,e+n,t,e,s),r.arcTo(t,e,t+i,e,s),r.closePath()}function Iy(r,{width:t=4096,height:e=1024}={}){let i=document.createElement("canvas");i.width=t,i.height=e;let n=i.getContext("2d");n.fillStyle="#000",n.fillRect(0,0,t,e);let s=e*.86;n.font=`800 ${s}px ${Le.display}`;let o=n.measureText(r),a=t*.96/o.width;s*=Math.min(1,a),n.font=`800 ${s}px ${Le.display}`,n.textAlign="center",n.textBaseline="middle",n.globalCompositeOperation="lighter",n.fillStyle="#00ff00",n.fillText(r,t/2,e*.54),n.lineWidth=Math.max(2,s*.006),n.strokeStyle="#ff0000",n.strokeText(r,t/2,e*.54);let l=n.measureText(r);return{canvas:i,texture:Qr(i,{srgb:!1}),textWidth:l.width/t}}function Fy(r,{accent:t=!1}={}){let i=document.createElement("canvas"),n=i.getContext("2d");n.font=`500 ${96*.4}px ${Le.mono}`;let s=n.measureText(r).width,o=Math.ceil(s+96*.9+(t?96*.32:0));i.width=o+8,i.height=104,n.translate(4,4),To(n,0,0,o,96,96/2);let a=n.createLinearGradient(0,0,0,96);a.addColorStop(0,t?"rgba(255,128,48,0.32)":"rgba(120,140,220,0.24)"),a.addColorStop(1,t?"rgba(255,90,20,0.14)":"rgba(40,52,100,0.22)"),n.fillStyle=a,n.fill(),n.lineWidth=2.5,n.strokeStyle=t?"rgba(255,170,110,0.75)":"rgba(170,190,255,0.45)",n.stroke();let l=96*.45;return t&&(n.fillStyle="#ff8a3d",n.beginPath(),n.arc(l+96*.08,96/2,96*.09,0,Math.PI*2),n.fill(),l+=96*.32),n.font=`500 ${96*.4}px ${Le.mono}`,n.textBaseline="middle",n.fillStyle=t?"#ffe2c8":"#dfe6ff",n.fillText(r,l,96/2+2),{texture:Qr(i),aspect:i.width/i.height}}function C0(r,{height:t=256,sep:e="\u2726",font:i=Le.display,weight:n=700,color:s="#ffffff",sepColor:o="#ff7a2a"}={}){let a=document.createElement("canvas"),l=a.getContext("2d"),c=t*.62;l.font=`${n} ${c}px ${i}`;let u=c*.55,h=l.measureText(e).width,f=0;for(let m of r)f+=l.measureText(m).width+u*2+h;let d=Math.min(16384,Math.ceil(f));a.width=d,a.height=t,l.font=`${n} ${c}px ${i}`,l.textBaseline="middle";let p=0;for(let m of r)l.fillStyle=s,l.fillText(m,p,t*.54),p+=l.measureText(m).width+u,l.fillStyle=o,l.fillText(e,p,t*.52),p+=h+u;let _=Qr(a);return _.wrapS=wa,{texture:_,aspect:d/t}}function Ly(r,{size:t=64,color:e="#e8edff",font:i=Le.mono,weight:n=600,pad:s=.6,bg:o=null,border:a=null}={}){let l=document.createElement("canvas"),c=l.getContext("2d");c.font=`${n} ${t}px ${i}`;let u=c.measureText(r).width,h=Math.ceil(u+t*s*2),f=Math.ceil(t*1.7);return l.width=h+6,l.height=f+6,c.translate(3,3),o&&(To(c,0,0,h,f,f*.3),c.fillStyle=o,c.fill(),a&&(c.lineWidth=2,c.strokeStyle=a,c.stroke())),c.font=`${n} ${t}px ${i}`,c.textBaseline="middle",c.textAlign="center",c.fillStyle=e,c.fillText(r,h/2,f/2+t*.04),{texture:Qr(l),aspect:l.width/l.height}}var cd=class{constructor(t,e,{word:i="HARMONY",mobile:n=!1}={}){this.world=t,this.getFox=e;let{texture:s}=Iy(i,n?{width:2048,height:512}:{});this.aspect=4,this.uniforms={uTex:{value:s},uTime:{value:0},uMouse:{value:new Ft(.5,.5)},uLight:{value:0},uReveal:{value:0},uOut:{value:0},uAspect:{value:this.aspect}};let o=new ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:qe,vertexShader:`
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
        }`});this.mesh=new qt(new Fe(1,1),o),this.mesh.renderOrder=-10,this.object=this.mesh,this._ray=new Zr,this._hit=[],this.z=-5}update(t){let e=this.getFox(),i=this.uniforms;if(this.mesh.visible=e.visible&&i.uOut.value<.999&&i.uReveal.value>.001,!this.mesh.visible)return;i.uTime.value=t;let n=this.world.viewSize(this.z),s=n.h/this.world.viewSize(0).h,o=n.w*.96,a=o/this.aspect;this.mesh.position.set(0,(e.pos.y+e.scale*.12)*s,this.z),this.mesh.scale.set(o*(1+i.uOut.value*.35),a*(1+i.uOut.value*.35),1),this._ray.setFromCamera(this.world.pointer,this.world.camera),this._hit.length=0,this._ray.intersectObject(this.mesh,!1,this._hit),this._hit.length&&i.uMouse.value.lerp(this._hit[0].uv,.2)}},Ny=[["SELECT",!0],["JOIN",!1],["WHERE",!1],["GROUP BY",!1],["PL/SQL",!0],["HAVING",!1],[".xlsx",!1],["ChatGPT",!0],["COUNT(*)",!1],["ORDER BY",!1]],ud=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.getCenter=e,this.group=new He,this.object=this.group,this.items=[],this.out=0,this.reveal=0;let n=i?Ny.slice(0,6):Ny;n.forEach(([s,o],a)=>{let{texture:l,aspect:c}=Fy(s,{accent:o}),u=new si({map:l,transparent:!0,depthWrite:!1,opacity:1,toneMapped:!1}),h=new qt(new Fe(c,1),u);h.renderOrder=5;let f=a%3;this.items.push({mesh:h,phase:a/n.length*Math.PI*2+f*.5,speed:(.11+f*.035)*(a%2?1:-1)*.9,rx:1.45+f*.38,ry:.5+f*.22,tilt:-.35+f*.28,bob:Math.random()*6,size:.13+(o?.025:0)}),this.group.add(h)}),this._v=new U}update(t){let e=this.getCenter();if(this.group.visible=e.visible&&this.out<.999,!this.group.visible)return;let i=e.scale;for(let n of this.items){let s=n.phase+t*n.speed,o=Math.cos(s)*n.rx,a=Math.sin(s)*n.rx*.8,l=Math.sin(s)*n.ry*.35+Math.sin(t*.7+n.bob)*.06;l+=o*Math.sin(n.tilt)*.3;let c=1+this.out*2.4;this._v.set(o*c,l*c+this.out*.6,a*c+this.out*2),n.mesh.position.copy(this._v).multiplyScalar(i).add(e.pos),n.mesh.quaternion.copy(this.world.camera.quaternion);let u=(a/(n.rx*.8)+1)/2,h=n.size*i*(.75+u*.4)*(.6+.4*this.reveal);n.mesh.scale.set(h,h,h),n.mesh.material.opacity=(.35+u*.65)*this.reveal*(1-this.out)}}},hd=class{constructor(t,e,{rows:i=46,cols:n=150,mobile:s=!1}={}){this.world=t,this.getFox=e,s&&(i=30,n=90);let o=i*(n-1),a=new Float32Array(o*2*3),l=0;for(let h=0;h<i;h++){let f=-h/(i-1);for(let d=0;d<n-1;d++){let p=d/(n-1)-.5,_=(d+1)/(n-1)-.5;a.set([p,0,f,_,0,f],l),l+=6}}let c=new Ie;c.setAttribute("position",new Te(a,3)),this.uniforms={uTime:{value:0},uAmp:{value:1},uMouse:{value:new Ft(0,0)},uFade:{value:1},uFade2:{value:1},uWarm:{value:new xt("#ff8a3d")},uCold:{value:new xt("#3d5cff")},uPulse:{value:0}};let u=new ae({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:qe,vertexShader:`
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
        }`});this.mesh=new vo(c,u),this.mesh.frustumCulled=!1,this.object=this.mesh,this._mouse=new Ft}update(t){let e=this.getFox();if(this.mesh.visible=e.visible&&this.uniforms.uFade.value*this.uniforms.uFade2.value>.001,!this.mesh.visible)return;let i=this.uniforms;i.uTime.value=t,this.mesh.position.set(0,e.pos.y-e.scale*1.55,3),this._mouse.set(this.world.pointer.x*12,(this.world.pointer.y+1)*-8),i.uMouse.value.lerp(this._mouse,.05)}};var d2=[ie.COPY,ie.HISTORY,ie.FORMAT,ie.GRID],Uy={Why:[ie.CLOUD,"cloud",{duration:1.6,stagger:.5,glow:.22}],Workbench:[ie.HALO,"halo",{duration:2,stagger:.6,swirl:1.2,glow:.4}],Dialect:[ie.SCATTER,"identity",{duration:1.6,stagger:.45,swirl:.4}],"AI help":[ie.SPHERE,"ai",{duration:1.9,stagger:.6,swirl:1.4,glow:.45}],Instances:[ie.GALAXY,"inst",{duration:2,stagger:.6,swirl:1.2,glow:.3}],Editor:[ie.SCATTER,"identity",{duration:1.5,stagger:.4,swirl:.4}],Desktop:[ie.SCATTER,"identity",{duration:1.5}],Demo:[ie.SCATTER,"identity",{duration:1.5}],Specs:[ie.SCATTER,"identity",{duration:1.5}],FAQ:[ie.SCATTER,"identity",{duration:1.5}],Start:[ie.FOX,"cta",{duration:2.6,stagger:.75,order:[.25,.75,0],swirl:1.4}],Contact:[ie.FOX,"cta",{duration:2.6,stagger:.75,order:[.25,.75,0],swirl:1.4}]},p2={hero:{warm:.12,cold:.14,wp:[-.1,-.9],cp:[.85,.75]},cloud:{warm:.12,cold:.12,wp:[-.8,.2],cp:[.8,-.4]},halo:{warm:.1,cold:.16,wp:[0,-.9],cp:[0,.8]},ring:{warm:.14,cold:.08,wp:[0,0],cp:[.9,.9]},features:{warm:.12,cold:.12,wp:[-.7,0],cp:[.9,-.6]},ai:{warm:.12,cold:.2,wp:[.6,-.6],cp:[.5,.3]},instances:{warm:.06,cold:.22,wp:[-.8,-.8],cp:[0,0]},studio:{warm:.12,cold:.1,wp:[-.6,0],cp:[.8,.6]},desktop:{warm:.16,cold:.12,wp:[.5,-.3],cp:[-.7,.7]},video:{warm:.08,cold:.16,wp:[-.8,-.8],cp:[0,.2]},specs:{warm:.08,cold:.08,wp:[-.5,0],cp:[.5,0]},faq:{warm:.06,cold:.1,wp:[-.9,.9],cp:[.9,-.9]},cta:{warm:.26,cold:.1,wp:[0,.25],cp:[0,-.9]},footer:{warm:.18,cold:.08,wp:[0,-.4],cp:[.8,.8]}};function Oy(r,t,{backdrop:e,mobile:i}){let n=at(".hero"),s=r.anchor(at('[data-anchor="hero"]'),{margin:2}),o=r.anchor(at('[data-anchor="cta"]'),{margin:1}),a=r.anchor(at('[data-anchor="orb"]'),{margin:1}),l=r.anchor(at('[data-anchor="constellation"]'),{margin:1}),c=le(".feature__icon").map(M=>r.anchor(M,{margin:1})),u=r.pointer,h=new lr,f=new Ji,d={intro:!0,section:"Intro",feature:0,heroP:0,fox:{pos:new U,scale:1,visible:!0},spin:0,spinVel:0,dragging:!1},p=le('[data-anchor="hero"], [data-anchor="cta"]'),_=0;p.forEach(M=>{M.addEventListener("pointerdown",x=>{d.dragging=!0,_=x.clientX,M.setPointerCapture?.(x.pointerId),t.uniforms.uFlash.value=.12,wt.to(t.uniforms.uFlash,{value:0,duration:.8,ease:"power2.out",overwrite:!0}),document.dispatchEvent(new CustomEvent("fox-poke"))}),M.addEventListener("pointermove",x=>{if(!d.dragging)return;let w=x.clientX-_;_=x.clientX,d.spin+=w*.012,d.spinVel=w*.012*60});let E=()=>d.dragging=!1;M.addEventListener("pointerup",E),M.addEventListener("pointercancel",E)});let m=(M,E,x)=>{let w=r.unitsPerPx(0);return x.set((M-r.w/2)*w,-(E-r.h/2)*w,0),x};t.place("hero",M=>{let E=s,w=E.px.top+window.scrollY+E.px.height*.5-window.scrollY*.32;m(E.px.left+E.px.width/2,w,M.pos),M.scale=E.px.height*r.unitsPerPx(0)/2.25;let A=r.time;h.set(.1-u.y*.22+Math.sin(A*.6)*.03+d.heroP*.5,-.3+u.x*.55+Math.sin(A*.37)*.06+d.heroP*1.4+d.spin,u.x*-.06,"YXZ"),M.quat.setFromEuler(h),d.fox.pos.copy(M.pos),d.fox.scale=M.scale});let g=()=>r.w<r.h;t.place("cloud",M=>{h.set(0,r.time*.018,g()?Math.PI/2:0,"ZYX"),M.quat.setFromEuler(h),M.pos.set(0,0,0)}),t.place("halo",M=>{let E=r.viewSize(-3.5);h.set(-.2,0,r.time*.03+(g()?Math.PI/2:0),"XYZ"),M.quat.setFromEuler(h),M.scale=Math.min(1,(g()?E.h:E.w)/16)}),c.forEach((M,E)=>{t.place("feat"+E,x=>{x.pos.set(M.x,M.y,0),x.scale=Math.min(M.w/3.4,M.h/3),h.set(.18+u.y*-.12,-.32+Math.sin(r.time*.4+E)*.22+u.x*.2,0,"XYZ"),x.quat.setFromEuler(h)})}),t.place("ai",M=>{M.pos.set(a.x,a.y,0),M.scale=Math.min(a.w,a.h)/3.9,h.set(.3,r.time*.12,.1,"XYZ"),M.quat.setFromEuler(h)}),t.place("inst",M=>{M.pos.set(l.x,l.y-l.h*.04,0),M.scale=Math.min(l.w/6.4,l.h/3.4)*.95,h.set(.42-u.y*.1,r.time*.05+u.x*.25,0,"XYZ"),M.quat.setFromEuler(h)}),t.place("cta",M=>{M.pos.set(o.x,o.y,0),M.scale=o.h*1/2.3;let E=r.time;h.set(.08-u.y*.2+Math.sin(E*.5)*.04,-.15+u.x*.5+Math.sin(E*.3)*.08+d.spin,0,"YXZ"),M.quat.setFromEuler(h)});let y=M=>{let E=p2[M];if(!E||!e)return;let x=e.uniforms;wt.to(x.uWarmAmt,{value:E.warm,duration:1.6,ease:"power2.inOut",overwrite:!0}),wt.to(x.uColdAmt,{value:E.cold,duration:1.6,ease:"power2.inOut",overwrite:!0}),wt.to(x.uWarmPos.value,{x:E.wp[0],y:E.wp[1],duration:2.4,ease:"power2.inOut",overwrite:!0}),wt.to(x.uColdPos.value,{x:E.cp[0],y:E.cp[1],duration:2.4,ease:"power2.inOut",overwrite:!0})};le("[data-section]").forEach((M,E)=>{Bt.create({trigger:M,start:"top 55%",end:"bottom 55%",refreshPriority:-10,onToggle:x=>{x.isActive&&(d.section=M.dataset.section,y(M.dataset.tone),document.dispatchEvent(new CustomEvent("section",{detail:{name:M.dataset.section,index:E,el:M}})))}})}),y("hero");let v=()=>n.offsetHeight,S=!1;return window.addEventListener("pointermove",()=>S=!0,{once:!0,passive:!0}),{state:d,setFeature(M){d.feature=M},intro(){d.intro=!0,t.A={form:ie.SCATTER,place:"identity"},t.B={form:ie.SCATTER,place:"identity"},t.mix=1,t.go(ie.FOX,"hero",{duration:2.8,stagger:.75,order:[.3,.7,0],swirl:1.6}),t.tween.onDone=()=>{d.intro=!1},wt.fromTo(t.uniforms.uFlash,{value:0},{value:.5,duration:.5,delay:2.4,yoyo:!0,repeat:1,ease:"sine.inOut"})},frame(){let M=.016666666666666666;if(!d.dragging){d.spin+=d.spinVel*M,d.spinVel*=.94;let H=Math.round(d.spin/(Math.PI*2))*Math.PI*2;Math.abs(d.spinVel)<.6&&(d.spin+=(H-d.spin)*.04)}let E=t.uniforms;E.uBreath.value=.012+Math.min(.05,Math.abs(d.spinVel)*.004);let x=t.B.form===ie.FOX||t.A.form===ie.FOX&&t.mix<.5;m((u.x+1)/2*r.w,(1-u.y)/2*r.h,E.uPointer.value);let w=x&&S?i?.15:.32:0;E.uHover.value+=(w-E.uHover.value)*.08,E.uHoverR.value=d.fox.scale*.55;let A=v(),R=window.scrollY;if(d.heroP=vr(R/(A*.85)),d.fox.visible=R<A*1.2,d.intro)return;if(R<A*.98){let H=t.B.form===ie.CLOUD&&t.B.place==="cloud",B=t.B.form===ie.FOX&&t.B.place==="hero";t.mode==="scrub"||(H||B)&&t.settled?(t.scrub(ie.FOX,"hero",ie.CLOUD,"cloud",d.heroP,{from:B?0:1,stagger:.7,order:[.4,0,.6],swirl:1.3}),t.uniforms.uGlow.value=.55-d.heroP*.33):H||t.go(ie.CLOUD,"cloud",{duration:1.3,stagger:.4});return}let D=Uy[d.section];if(d.section==="Features"&&(D=[d2[d.feature]??ie.COPY,"feat"+d.feature,{duration:1.5,stagger:.55,swirl:1.1}]),d.section==="Intro"&&(D=Uy.Why),!D)return;let[N,I,F]=D;(t.B.form!==N||t.B.place!==I||t.mode==="scrub")&&(t.go(N,I,F),wt.to(t.uniforms.uGlow,{value:F.glow??.55,duration:F.duration??1.5,ease:"power2.inOut",overwrite:!0}))}}}function By({word:r,chips:t,floor:e,director:i}){let n=at(".hero"),s=le(".hero__words",n),o=at(".pill",n),a=at(".hero__bottom",n),l=le(".hero__meta li",n),c=at(".hero__scroll",n),u=at("#nav");if(!$t.reduced){wt.set(s,{yPercent:118,rotate:3,transformOrigin:"0% 100%"}),wt.set([o,a,c],{autoAlpha:0,y:24}),wt.set(l,{autoAlpha:0,y:14}),wt.set(u,{yPercent:-100,autoAlpha:0});let h=wt.timeline({scrollTrigger:{trigger:n,start:"top top",end:"bottom top",scrub:!0}});h.to(s[0],{yPercent:-60,autoAlpha:0,filter:"blur(8px)",ease:"power1.in",duration:.6},.05),h.to(s[1],{yPercent:-40,autoAlpha:0,filter:"blur(8px)",ease:"power1.in",duration:.6},.1),h.to(a,{y:-60,autoAlpha:0,ease:"power1.in",duration:.45},0),h.to([o,c,...l],{autoAlpha:0,duration:.25},0)}return e&&document.addEventListener("fox-poke",()=>wt.fromTo(e.uniforms.uPulse,{value:1.2},{value:0,duration:2.4,ease:"power2.out",overwrite:!0})),{intro(){if($t.reduced)return;let h=wt.timeline({defaults:{ease:"expo.out"}});return r&&h.to(r.uniforms.uReveal,{value:1,duration:2.6,ease:"power2.inOut"},.2),e&&h.fromTo(e.uniforms.uFade,{value:0},{value:1,duration:2.4,ease:"power2.out"},.4),t&&h.to(t,{reveal:1,duration:2.2,ease:"power3.out"},2),h.to(s,{yPercent:0,rotate:0,duration:1.5,stagger:.12},1.15),h.to(o,{autoAlpha:1,y:0,duration:1.2},1.5),h.to(a,{autoAlpha:1,y:0,duration:1.3},1.6),h.to(l,{autoAlpha:1,y:0,duration:1,stagger:.07},1.75),h.to(c,{autoAlpha:1,y:0,duration:1},2.1),h.to(u,{yPercent:0,autoAlpha:1,duration:1.3},1.4),h},frame(){let h=i?i.state.heroP:0;r&&(r.uniforms.uOut.value=Yn(.02,.75,h)),t&&(t.out=Yn(0,.65,h)),e&&(e.uniforms.uAmp.value=1+h*2.5,e.uniforms.uFade2.value=1-Yn(.05,.6,h))}}}function ky(r,{color:t="#f3f5ff",back:e="#ff8a3d",backAmt:i=.32,repeat:n=1}={}){return new ae({uniforms:{uTex:{value:r},uOffset:{value:0},uRepeat:{value:n},uColor:{value:new xt(t)},uBack:{value:new xt(e)},uBackAmt:{value:i},uFade:{value:1}},side:Ki,transparent:!0,depthWrite:!1,vertexShader:`
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
      }`})}var fd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.group=new He,this.object=this.group,this.spin=0;let n=C0(["SELECT","FROM","LEFT JOIN","WHERE","GROUP BY","HAVING","ORDER BY","PL/SQL","XLSX"],{height:i?160:256,font:Le.display,weight:700}),s=C0(["SQL HARMONY","ORACLE FUSION CLOUD","WEB + WINDOWS","FREE TO START","CHATGPT INSIDE"],{height:i?96:128,font:Le.mono,weight:500,color:"#ffb36b",sepColor:"#7d9bff"}),o=3.3,a=.62,l=Math.max(1,Math.round(2*Math.PI*o/a/n.aspect));this.outer=new qt(new Fa(o,o,a,160,1,!0),ky(n.texture,{repeat:l}));let c=2.35,u=.2,h=Math.max(1,Math.round(2*Math.PI*c/u/s.aspect));this.inner=new qt(new Fa(c,c,u,128,1,!0),ky(s.texture,{repeat:h,color:"#ffc28a",back:"#6f8cff",backAmt:.22}));let f=new qt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uColor:{value:new xt("#ff7a2a")},uAmt:{value:.22}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 uColor; uniform float uAmt; varying vec2 vUv; void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*4.0)*smoothstep(1.0, 0.55, d)*uAmt; gl_FragColor = vec4(uColor*a, 1.0); }"}));f.scale.set(9,5,1),f.position.z=-1.5,this.glow=f,this.tilt=new He,this.tilt.rotation.set(.32,0,-.1),this.inner.rotation.x=-.18,this.inner.rotation.z=.22,this.tilt.add(this.outer,this.inner),this.group.add(f,this.tilt),this.group.visible=!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible)return;let n=this.world.scrollVel||0;this.spin+=e*(.06+Math.min(.9,Math.abs(n)/2500))*(n<-30?-1:1),this.outer.material.uniforms.uOffset.value=this.spin,this.inner.material.uniforms.uOffset.value=-this.spin*1.3+t*.01;let s=Math.min(i.w/8.4,i.h/4.3);this.group.position.set(i.x,i.y-i.h*.06,0),this.group.scale.setScalar(s);let o=i.progress;this.tilt.rotation.x=.55-o*.45+this.world.pointer.y*.08,this.tilt.rotation.y=this.world.pointer.x*.12,this.tilt.rotation.z=-.1+Math.sin(t*.3)*.02}};var m2=`
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
}`,dd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.group=new He,this.object=this.group,this.think=0,this.ok=0,this.uniforms={uTime:{value:0},uThink:{value:0},uOk:{value:0},uPointer:{value:new Ft}};let n=new La(1,i?28:56),s=new ae({uniforms:this.uniforms,vertexShader:`
        ${m2}
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
        }`});this.sphere=new qt(n,s);let o=new vo(new dc(new La(1.42,2)),new Ia({color:new xt("#8fa8ff"),transparent:!0,opacity:.16,blending:qe,depthWrite:!1}));this.lattice=o;let a=new qt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uAmt:{value:.55},uThink:this.uniforms.uThink,uOk:this.uniforms.uOk},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uAmt; uniform float uThink; uniform float uOk; varying vec2 vUv;
          void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*3.0) * smoothstep(1.0, 0.55, d) * (uAmt + uThink*0.35);
          vec3 c = mix(vec3(1.0,0.35,0.25), vec3(0.45,0.4,1.0), smoothstep(0.0,1.0,d));
          c = mix(c, vec3(0.2,1.0,0.6), uOk*0.7);
          gl_FragColor = vec4(c*a*0.55, 1.0); }`}));a.scale.set(5.2,5.2,1),a.position.z=-1.2,this.halo=a,this.group.add(a,this.sphere,o),this.group.visible=!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible)return;let n=this.uniforms;n.uTime.value=t,n.uThink.value+=(this.think-n.uThink.value)*Math.min(1,e*3),n.uOk.value+=(this.ok-n.uOk.value)*Math.min(1,e*4),n.uPointer.value.lerp(this.world.pointer,.05);let s=Math.min(i.w,i.h)*.3;this.group.position.set(i.x,i.y,0),this.group.scale.setScalar(s*(1+Math.sin(t*1.3)*.012+n.uThink.value*.04)),this.sphere.rotation.y=t*.12,this.lattice.rotation.set(t*.05,-t*.08,0),this.lattice.material.opacity=.12+n.uThink.value*.2}};var D0=["DEV1","DEV2","TEST","UAT","PROD"],g2=`
  varying float vT;
  attribute float aT;
  void main() { vT = aT; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,_2=`
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
  }`,pd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.group=new He,this.object=this.group,this.active=1,this.tilt=new He,this.group.add(this.tilt),this.nodes=[],this.time=0;let n=new yn({color:"#ff8a3d",emissive:"#ff5a1a",emissiveIntensity:.9,roughness:.25,metalness:.1,clearcoat:1,flatShading:!0});this.hub=new qt(new mc(.34,0),n),this.hubGlow=zy("#ff6a1a",1.2),this.hubGlow.scale.setScalar(2.2);let s=Hy("SQL HARMONY",{color:"#ffd2ad",size:52});s.position.set(0,-.62,0),s.scale.multiplyScalar(.34),this.hubLabel=s,this.tilt.add(this.hubGlow,this.hub,s),this._q=new Ji;let o=new Cs(.11,24,16),a=new Cs(.42,12,8),l=new si({visible:!1});this.hits=[],this.hovered=-1,this.ray=new Zr;let c=new Ds(.2,.006,6,64);D0.forEach((u,h)=>{let f=h/D0.length*Math.PI*2+.35,d=2.25+h%2*.35,p=new U(Math.cos(f)*d,Math.sin(h*1.7)*.35,Math.sin(f)*d*.9),_=new si({color:new xt("#8fb0ff")}),m=new qt(o,_);m.position.copy(p);let g=new qt(a,l);g.position.copy(p),g.userData.index=h,this.hits.push(g),this.tilt.add(g);let y=new qt(c,new si({color:"#8fb0ff",transparent:!0,opacity:.6,blending:qe,depthWrite:!1}));y.position.copy(p);let b=zy("#4d7cff",.9);b.position.copy(p),b.scale.setScalar(.9);let v=Hy(u,{color:"#e6ecff",size:56});v.position.copy(p).add(new U(0,.36,0)),v.scale.multiplyScalar(.36);let S=p.clone().multiplyScalar(.5).add(new U(0,.9+h%2*.3,0)),E=new pc(new U(0,0,0),S,p).getPoints(80),x=new Ie().setFromPoints(E);x.setAttribute("aT",new Te(new Float32Array(E.map((D,N)=>N/(E.length-1))),1));let w=new ae({uniforms:{uTime:{value:0},uActive:{value:0},uColor:{value:new xt("#5f86ff")},uHot:{value:new xt("#ffb36b")},uFade:{value:1}},vertexShader:g2,fragmentShader:_2,transparent:!0,depthWrite:!1,blending:qe}),A=new xo(x,w),R=new xo(x,w);R.position.y=.012,this.tilt.add(A,R,b,m,y,v),this.nodes.push({node:m,ring:y,glow:b,label:v,beamMat:w,mat:_,phase:h*1.3,act:h===this.active?1:0})});for(let u=0;u<2;u++){let h=new qt(new Ds(1.1+u*.55,.004,4,160),new si({color:u?"#4d7cff":"#ff8a3d",transparent:!0,opacity:.25,blending:qe,depthWrite:!1}));h.rotation.x=Math.PI/2,this.tilt.add(h)}this.tilt.rotation.x=.42,this.group.visible=!1}setActive(t){this.active=t}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible){this.hovered>=0&&(this.hovered=-1,document.dispatchEvent(new CustomEvent("cursor-label",{detail:null})));return}this.ray.setFromCamera(this.world.pointer,this.world.camera);let n=this.ray.intersectObjects(this.hits,!1)[0],s=n?n.object.userData.index:-1;s!==this.hovered&&(this.hovered=s,document.dispatchEvent(new CustomEvent("cursor-label",{detail:s>=0?D0[s]:null})));let o=Math.min(i.w/6.4,i.h/3.4);this.group.position.set(i.x,i.y-i.h*.04,0),this.group.scale.setScalar(o),this.tilt.rotation.y=t*.05+this.world.pointer.x*.25,this.tilt.rotation.x=.42-this.world.pointer.y*.1,this.hub.rotation.y=t*.6,this.hub.rotation.x=Math.sin(t*.5)*.3,this.tilt.updateWorldMatrix(!0,!1);let a=this.tilt.getWorldQuaternion(this._q).invert().multiply(this.world.camera.quaternion);this.hubLabel.quaternion.copy(a),this.nodes.forEach((l,c)=>{let u=c===this.active?1:0;l.act+=(u-l.act)*Math.min(1,e*4);let h=1+Math.sin(t*2+l.phase)*.06;l.node.scale.setScalar((1+l.act*.6)*h),l.ring.scale.setScalar(1+l.act*.9+Math.sin(t*1.5+l.phase)*.08),l.ring.quaternion.copy(a),l.mat.color.set(l.act>.5?"#ffd2ad":"#8fb0ff").lerp(new xt("#ffffff"),l.act*.3),l.ring.material.color.set(l.act>.5?"#ff9a50":"#8fb0ff"),l.glow.material.opacity=.45+l.act*.5,l.glow.scale.setScalar(.7+l.act*.6),l.label.quaternion.copy(a),l.label.material.opacity=.55+l.act*.45,l.beamMat.uniforms.uTime.value=t+l.phase,l.beamMat.uniforms.uActive.value=l.act})}};function zy(r,t){let e=new qt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uColor:{value:new xt(r)},opacity:{value:t}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv;
        vec4 mv = modelViewMatrix * vec4(0.0,0.0,0.0,1.0);
        vec2 sc = vec2(length(modelMatrix[0].xyz), length(modelMatrix[1].xyz));
        mv.xy += position.xy * sc;
        gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float opacity; varying vec2 vUv;
        void main(){ float d = length(vUv-0.5)*2.0; float a = exp(-d*d*5.0) * smoothstep(1.0, 0.6, d) * opacity; gl_FragColor = vec4(uColor*a, 1.0); }`}));return Object.defineProperty(e.material,"opacity",{get(){return e.material.uniforms.opacity.value},set(i){e.material.uniforms&&(e.material.uniforms.opacity.value=i)}}),e}function Hy(r,{color:t,size:e}){let{texture:i,aspect:n}=Ly(r,{size:e,color:t,font:Le.mono,weight:600,bg:"rgba(10,14,30,0.55)",border:"rgba(150,170,255,0.35)"});return new qt(new Fe(n,1),new si({map:i,transparent:!0,depthWrite:!1,toneMapped:!1}))}var Vc=new U;function Kn(r,t,e,i,n,s){let o=2*Math.PI*n/4,a=Math.max(s-2*n,0),l=Math.PI/4;Vc.copy(t),Vc[i]=0,Vc.normalize();let c=.5*o/(o+a),u=1-Vc.angleTo(r)/l;return Math.sign(Vc[e])===1?u*c:a/(o+a)+c+c*(1-u)}var ts=class r extends As{constructor(t=1,e=1,i=1,n=2,s=.1){let o=n*2+1;if(s=Math.min(t/2,e/2,i/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:n,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,u=new U(t,e,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new U,m=.5/o;for(let g=0,y=0;g<h.length;g+=3,y+=2)switch(l.fromArray(h,g),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[g+0]=u.x*Math.sign(l.x)+c.x*s,h[g+1]=u.y*Math.sign(l.y)+c.y*s,h[g+2]=u.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[y+0]=Kn(_,c,"z","y",s,i),d[y+1]=1-Kn(_,c,"y","z",s,e);break;case 1:_.set(-1,0,0),d[y+0]=1-Kn(_,c,"z","y",s,i),d[y+1]=1-Kn(_,c,"y","z",s,e);break;case 2:_.set(0,1,0),d[y+0]=1-Kn(_,c,"x","z",s,t),d[y+1]=Kn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),d[y+0]=1-Kn(_,c,"x","z",s,t),d[y+1]=1-Kn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),d[y+0]=1-Kn(_,c,"x","y",s,t),d[y+1]=1-Kn(_,c,"y","x",s,e);break;case 5:_.set(0,0,-1),d[y+0]=Kn(_,c,"x","y",s,t),d[y+1]=1-Kn(_,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};function x2(r,t){let e=new ts(r,.5,t,5,.12),i=e.attributes.position;for(let n=0;n<i.count;n++){let s=i.getY(n),o=(s+.25)/.5,a=1-o*.14;i.setX(n,i.getX(n)*a),i.setZ(n,i.getZ(n)*a-o*.04),o>.98&&i.setY(n,s-.02*(1-(i.getX(n)**2+i.getZ(n)**2)/(r*r*.25)))}return e.computeVertexNormals(),e}function v2(r,{w:t=256,h:e=256,color:i="#ffb36b",size:n=120,font:s=Le.display,weight:o=700,sub:a=""}={}){let l=document.createElement("canvas");l.width=t,l.height=e;let c=l.getContext("2d");return c.clearRect(0,0,t,e),c.fillStyle=i,c.textAlign="center",c.textBaseline="middle",c.font=`${o} ${n}px ${s}`,c.fillText(r,t/2,e/2+(a?-n*.1:n*.04)),a&&(c.font=`500 ${n*.32}px ${Le.mono}`,c.globalAlpha=.7,c.fillText(a,t/2,e/2+n*.55)),Qr(l)}var y2=[{t:"S",x:-1.55,y:.55,z:.2,rx:.5,ry:.25,rz:.18},{t:"Q",x:-.35,y:1.05,z:-.4,rx:.42,ry:-.2,rz:-.12},{t:"L",x:.95,y:.6,z:.1,rx:.55,ry:.15,rz:.1},{t:"Ctrl",x:-1.2,y:-.75,z:.5,rx:.62,ry:.3,rz:-.2,w:1.3,size:70},{t:"RUN",x:.55,y:-.8,z:.6,rx:.5,ry:-.25,rz:.08,w:1.9,accent:!0,size:92,sub:"SUBMIT"},{t:"Tab",x:1.95,y:-.1,z:-.6,rx:.4,ry:-.35,rz:-.22,size:78}],md=class{constructor(t,e){this.world=t,this.anchor=e,this.group=new He,this.object=this.group,this.keys=[],this.seqT=0,this.ray=new Zr;let i=new yn({color:"#1d2130",roughness:.46,metalness:.05,clearcoat:.5,clearcoatRoughness:.35,sheen:.35,sheenRoughness:.5,sheenColor:new xt("#ff9a50")}),n=new yn({color:"#ff6b1a",roughness:.32,metalness:0,clearcoat:1,clearcoatRoughness:.12,emissive:"#ff4a0a",emissiveIntensity:.15});for(let s of y2){let o=s.w||1,a=new He;a.position.set(s.x,s.y,s.z),a.rotation.set(s.rx,s.ry,s.rz);let l=new qt(x2(o,1),s.accent?n.clone():i),c=new qt(new Fe(o*.74,.74),new si({map:v2(s.t,{w:Math.round(256*o),color:s.accent?"#1a0a03":"#ffffff",size:s.size||120,sub:s.sub}),color:s.accent?new xt(1,1,1):new xt(2.4,1.25,.55),transparent:!0,depthWrite:!1,toneMapped:!1}));c.rotation.x=-Math.PI/2,c.position.y=.262,c.position.z=-.03,c.renderOrder=3,l.add(c),a.add(l),this.group.add(a),this.keys.push({holder:a,body:l,base:a.position.clone(),press:0,target:0,phase:Math.random()*6,accent:!!s.accent,t:s.t})}this.run=this.keys.find(s=>s.accent),this.group.visible=!1}click(){return this.hovered?(this.hovered.kick=1.2,!0):!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible){this.hovered&&(this.hovered=null,document.dispatchEvent(new CustomEvent("cursor-label",{detail:null})));return}let n=Math.min(i.w/5.2,i.h/3.6);this.group.position.set(i.x,i.y,0),this.group.scale.setScalar(n),this.group.rotation.y=this.world.pointer.x*.25+Math.sin(t*.2)*.08,this.group.rotation.x=-this.world.pointer.y*.15,this.seqT=(this.seqT+e)%4.2;let s=["S","Q","L","RUN"],o=[.4,.75,1.1,1.9];for(let u of this.keys){let h=s.indexOf(u.t),f=0;if(h>=0){let d=this.seqT-o[h];d>0&&d<.26&&(f=Math.sin(d/.26*Math.PI))}u.target=Math.max(f,u.hover||0)}this.ray.setFromCamera(this.world.pointer,this.world.camera),this.bodies||(this.bodies=this.keys.map(u=>u.body));let l=this.ray.intersectObjects(this.bodies,!1)[0]?.object,c=this.keys.find(u=>u.body===l)||null;c!==this.hovered&&(this.hovered=c,document.dispatchEvent(new CustomEvent("cursor-label",{detail:c?"Press":null})));for(let u of this.keys){u.kick=Math.max(0,(u.kick||0)-e*3),u.target=Math.max(u.target,u.kick),u.hover=u.body===l?.35:0,u.press+=(u.target-u.press)*Math.min(1,e*14);let h=Math.sin(t*.9+u.phase)*.06;u.holder.position.set(u.base.x,u.base.y+h,u.base.z),u.body.position.y=-u.press*.16,u.body.scale.setScalar(1-u.press*.03),u.accent&&(u.body.material.emissiveIntensity=.15+u.press*1.6)}}};var S2=[[["k","SELECT"],["t"," h.invoice_num, h.invoice_amount,"]],[["t","       s.vendor_name, h.invoice_date"]],[["k","FROM"],["t","   ap_invoices_all h"]],[["k","JOIN"],["t","   poz_suppliers_v s"]],[["k","  ON"],["t","   s.vendor_id = h.vendor_id"]],[["k","WHERE"],["t","  h.invoice_amount > "],["n","1000"]]],Vy=["INVOICE_ID","INVOICE_NUM","INVOICE_DATE","INVOICE_AMOUNT","VENDOR_ID","PAYMENT_STATUS_FLAG"],M2=["AP_INVOICES_ALL","AP_INVOICE_LINES_ALL","POZ_SUPPLIERS_V","GL_JE_HEADERS","GL_JE_LINES","PER_ALL_PEOPLE_F","HZ_PARTIES","RA_CUSTOMER_TRX_ALL"],R0=[["INV-26-1187","41 137.24","Acme Paper Ltd","2026-09-30"],["INV-26-1186","11 205.80","Northwind GmbH","2026-09-30"],["NW-88213","8 952.60","Northwind GmbH","2026-09-29"],["INV-26-1179","4 582.03","Globex Corp","2026-09-29"],["GX-55120","1 619.20","Globex Corp","2026-09-28"],["AC-00932","1 634.00","Acme Paper Ltd","2026-09-27"],["INV-26-1160","2 388.72","Initech LLC","2026-09-26"]],P0=class{constructor(t,e){this.w=t,this.h=e,this.c=document.createElement("canvas"),this.c.width=t,this.c.height=e,this.g=this.c.getContext("2d"),this.tex=Qr(this.c,{mips:!1,aniso:8}),this.t=0,this.chars=[],S2.forEach((i,n)=>{for(let[s,o]of i)for(let a of o)this.chars.push([s,a,n]);this.chars.push(["t",`
`,n])}),this.draw(0)}draw(t){let{g:e,w:i,h:n}=this,s=i/1280;e.setTransform(s,0,0,s,0,0);let o=1280,a=800;e.fillStyle="#0b0e17",e.fillRect(0,0,o,a),e.fillStyle="#111522",e.fillRect(0,0,o,40),this.drawFox(e,14,8,24),e.font=`600 15px ${Le.body}`,e.fillStyle="#e6eaf7",e.textBaseline="middle",e.fillText("SQLHarmonyDesk",48,21),e.fillStyle="#6f7896",e.fillText("\u2014  DEV2",178,21),e.strokeStyle="#8a93ad",e.lineWidth=1.5,e.beginPath(),e.moveTo(o-132,21),e.lineTo(o-120,21),e.stroke(),e.strokeRect(o-84,15,11,11),e.beginPath(),e.moveTo(o-38,15),e.lineTo(o-27,26),e.moveTo(o-27,15),e.lineTo(o-38,26),e.stroke(),e.fillStyle="#0e1220",e.fillRect(0,40,270,a-72),e.fillStyle="#6f7896",e.font=`600 12px ${Le.mono}`,e.fillText("TABLES",20,66),To(e,16,80,238,30,8),e.fillStyle="#161b2c",e.fill(),e.fillStyle="#8a93ad",e.font=`13px ${Le.mono}`,e.fillText("\u2315  ap_inv",28,96);let l=132;M2.forEach((R,D)=>{let N=D===0;e.fillStyle=N?"#ffb36b":"#c3cae0",e.font=`${N?600:400} 13px ${Le.mono}`,e.fillText(`${N?"\u25BE":"\u25B8"} ${R}`,20,l),l+=26,N&&(Vy.forEach((I,F)=>{let H=Math.floor(t*.8)%Vy.length===F;H&&(e.fillStyle="rgba(255,122,42,0.14)",e.fillRect(12,l-12,246,22)),e.fillStyle=H?"#ffe3c6":"#8a93ad",e.font=`12px ${Le.mono}`,e.fillText(`   ${I.toLowerCase()}`,22,l),e.fillStyle="#4f5878",e.fillText(F===2?"DATE":F===3||F===0||F===4?"NUMBER":"VARCHAR2",196,l),l+=22}),l+=6)});let c=270;e.fillStyle="#0b0e17",e.fillRect(c,40,o-c,44);let u=["invoices.sql","suppliers.sql","+"],h=c+14;u.forEach((R,D)=>{e.font=`13px ${Le.body}`;let N=e.measureText(R).width+30;D===0&&(To(e,h,50,N,34,8),e.fillStyle="#151a2a",e.fill(),e.fillStyle="#ff8a3d",e.fillRect(h+10,82,N-20,2)),e.fillStyle=D===0?"#eef1fb":"#6f7896",e.fillText(R,h+15,68),h+=N+6});let f=(R,D,N,I)=>{e.font=`600 13px ${Le.body}`;let F=e.measureText(D).width+26;return To(e,R,96,F,30,8),e.fillStyle=N,e.fill(),e.fillStyle=I,e.fillText(D,R+13,112),R+F+8},d=t%9>4.2&&t%9<4.9,p=c+14;p=f(p,d?"\u25A0  Running":"\u25B6  Run",d?"#b45309":"#16a34a","#fff"),p=f(p,"PL/SQL","#151a2a","#a9b2cf"),p=f(p,"Export CSV","#151a2a","#a9b2cf"),p=f(p,"Export XLSX","#151a2a","#a9b2cf"),e.font=`12px ${Le.mono}`,e.fillStyle="#34d99b",e.fillText("\u25CF",o-230,112),e.fillStyle="#a9b2cf",e.fillText("SSO \xB7 signed in",o-212,112);let _=136;e.fillStyle="#0d1120",e.fillRect(c,_,o-c,250);let m=Math.min(this.chars.length,Math.floor(t%9/4*this.chars.length)),g=0,y=0;e.font=`15px ${Le.mono}`;let b=e.measureText("M").width;for(let R=0;R<6;R++)e.fillStyle="#3d4566",e.fillText(String(R+1).padStart(2," "),c+14,_+26+R*26);let v=c+56,S=_+26;for(let R=0;R<m;R++){let[D,N]=this.chars[R];if(N===`
`){g++,y=0;continue}e.fillStyle=D==="k"?"#8fb0ff":D==="n"?"#ffb36b":"#e6eaf7",e.fillText(N,c+56+y*b,_+26+g*26),y++,v=c+56+y*b,S=_+26+g*26}if((Math.floor(t*2)%2===0||m<this.chars.length)&&(e.fillStyle="#ff8a3d",e.fillRect(v+1,S-11,2,20)),t%9>1.2&&t%9<2.6){let R=c+56+14*b,D=_+40;To(e,R,D,300,128,10),e.fillStyle="#161b2c",e.fill(),e.strokeStyle="rgba(150,170,255,0.25)",e.lineWidth=1,e.stroke(),["invoice_num        VARCHAR2","invoice_amount     NUMBER","invoice_date       DATE","invoice_currency   VARCHAR2"].forEach((N,I)=>{I===0&&(e.fillStyle="rgba(255,122,42,0.18)",e.fillRect(R+6,D+8+I*28,288,26)),e.fillStyle=I===0?"#ffe3c6":"#a9b2cf",e.font=`13px ${Le.mono}`,e.fillText(N,R+16,D+22+I*28)})}let E=_+262;e.fillStyle="#0b0e17",e.fillRect(c,E,o-c,a-E-32);let x=t%9>4.9?Math.min(R0.length,Math.floor((t%9-4.9)*8)):t%9<4.2?R0.length:0,w=[c+18,c+230,c+410,c+690];e.font=`600 12px ${Le.mono}`,e.fillStyle="#6f7896",["INVOICE_NUM","INVOICE_AMOUNT","VENDOR_NAME","INVOICE_DATE"].forEach((R,D)=>e.fillText(R,w[D],E+22)),e.fillStyle="rgba(150,170,255,0.12)",e.fillRect(c,E+36,o-c,1);for(let R=0;R<x;R++){let D=E+58+R*30;R%2&&(e.fillStyle="rgba(255,255,255,0.025)",e.fillRect(c,D-16,o-c,30)),e.font=`13px ${Le.mono}`,R0[R].forEach((N,I)=>{e.fillStyle=I===1?"#ffd2ad":"#c3cae0",e.fillText(N,w[I],D)})}e.font=`12px ${Le.mono}`,e.fillStyle="#8a93ad",e.fillText("Rows 1\u201350 of 1 284",c+18,a-52);let A=1+Math.floor(t/3)%4;e.fillText(`\u2039  Page ${A} / 26  \u203A`,o-190,a-52),e.fillStyle="#111522",e.fillRect(0,a-32,o,32),e.fillStyle="#34d99b",e.fillText("\u25CF",14,a-15),e.fillStyle="#a9b2cf",e.fillText("Connected \xB7 DEV2 \xB7 Oracle Fusion Cloud",32,a-15),e.fillStyle="#6f7896",e.fillText("UTF-8   PL/SQL off   v0.5.0",o-250,a-15),this.tex.needsUpdate=!0}drawFox(t,e,i,n){this._fox||(this._fox=Wl({ry:-16,rx:8})),t.save(),t.translate(e+n/2,i+n/2),t.scale(n/2.4,n/2.4);for(let s of this._fox)t.beginPath(),t.moveTo(s.pts[0][0],s.pts[0][1]+.15),t.lineTo(s.pts[1][0],s.pts[1][1]+.15),t.lineTo(s.pts[2][0],s.pts[2][1]+.15),t.closePath(),t.fillStyle=Gl[s.role],t.fill();t.restore()}};function b2(){let r=document.createElement("canvas");r.width=r.height=256;let t=r.getContext("2d"),e=Wl({ry:0,rx:0});t.translate(128,132),t.scale(92,92);for(let i of e){t.beginPath(),t.moveTo(...i.pts[0]),t.lineTo(...i.pts[1]),t.lineTo(...i.pts[2]),t.closePath();let n=.75+.25*i.n[2];t.fillStyle=`rgba(255,${Math.round(150*n)},${Math.round(90*n)},${.9})`,t.fill(),t.strokeStyle="rgba(255,200,150,0.6)",t.lineWidth=.008,t.stroke()}return Qr(r)}var gd=class{constructor(t,e,{mobile:i=!1}={}){this.world=t,this.anchor=e,this.mobile=i,this.group=new He,this.object=this.group,this.open=0,this.power=0,this.spin=0,this._acc=0;let n=new yn({color:"#2b303c",metalness:.82,roughness:.3,clearcoat:.35,clearcoatRoughness:.25}),s=new yo({color:"#0c0e15",roughness:.55,metalness:.2}),o=new qt(new ts(3.4,.12,2.3,4,.05),n);o.position.y=.06;let a=new qt(new Fe(2.96,1.1),new yo({color:"#141824",roughness:.7,metalness:.3}));a.rotation.x=-Math.PI/2,a.position.set(0,.1205,-.32);let l=new ts(.17,.03,.155,2,.02),c=14,u=5,h=new ac(l,s,c*u),f=new xe,d=0;for(let M=0;M<u;M++)for(let E=0;E<c;E++)f.makeTranslation(-1.33+E*.205,.128,-.76+M*.205),h.setMatrixAt(d++,f);let p=new qt(new ts(1.25,.004,.78,2,.002),new yn({color:"#343a48",metalness:.6,roughness:.22,clearcoat:.8}));p.position.set(0,.121,.62),this.lid=new He,this.lid.position.set(0,.12,-1.15);let _=new qt(new ts(3.4,2.26,.06,4,.03),n);_.position.set(0,1.13,-.03);let m=new qt(new Fe(3.3,2.16),new yn({color:"#05060a",roughness:.15,metalness:0,clearcoat:1}));m.position.set(0,1.13,.0012);let g=i?960:1280;this.screen=new P0(g,Math.round(g*.625)),this.screenMat=new si({map:this.screen.tex,color:new xt(0,0,0),toneMapped:!1});let y=new qt(new Fe(3.16,1.975),this.screenMat);y.position.set(0,1.15,.0025);let b=new qt(new Fe(.62,.62),new si({map:b2(),transparent:!0,depthWrite:!1,toneMapped:!1,color:new xt(1.2,1.2,1.2)}));b.position.set(0,1.13,-.0615),b.rotation.y=Math.PI,this.lid.add(_,m,y,b);let v=new qt(new Fe(6,4.4),new ae({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying vec2 vUv; void main(){ vec2 d=(vUv-0.5)*vec2(1.0,1.3); float a=exp(-dot(d,d)*9.0)*0.75*smoothstep(0.5,0.38,length(vUv-0.5)); gl_FragColor=vec4(0.0,0.0,0.0,a);}"}));v.rotation.x=-Math.PI/2,v.position.y=-.01;let S=new qt(new Fe(3.2,1.6),new ae({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"uniform float uAmt; varying vec2 vUv; void main(){ float a = smoothstep(0.0,1.0,vUv.y) * (1.0 - abs(vUv.x-0.5)*1.6) * uAmt; gl_FragColor=vec4(vec3(0.35,0.45,0.9)*a*0.35,1.0);}"}));S.rotation.x=-Math.PI/2,S.position.set(0,.145,-.35),this.spill=S,this.body=new He,this.body.add(v,o,a,h,p,S,this.lid),this.body.position.set(0,-.9,.3),this.group.add(this.body),this.group.visible=!1}update(t,e){let i=this.anchor;if(this.group.visible=i.visible,!i.visible)return;let n=this.world.w<760?Math.min(i.w/5.3,i.h/3.7):Math.min(i.w/4.3,i.h/3.3);this.group.position.set(i.x,i.y,0),this.group.scale.setScalar(n);let s=this.open;this.lid.rotation.x=Kr.lerp(Math.PI/2-.02,-.26,s);let o=this.world.pointer.x,a=this.world.pointer.y;this.group.rotation.set(Kr.lerp(.62,.2,s)-a*.06,Kr.lerp(-.75,-.32,s)+o*.12+Math.sin(t*.3)*.03,Kr.lerp(.08,0,s)),this.body.position.y=-.9+Math.sin(t*.8)*.03;let l=s>.55?1:0;this.power+=(l-this.power)*Math.min(1,e*2.5);let c=this.power<.95?.85+Math.random()*.15:1,u=this.power*c;this.screenMat.color.setRGB(u*1.05,u*1.05,u*1.05),this.spill.material.uniforms.uAmt.value=this.power,this.power>.01&&(this._acc+=e,this._acc>(this.mobile?.125:.083)&&(this._acc=0,this.screen.draw(t)))}};var _d=class{constructor(t,e){this.world=t,this.anchor=e,this.group=new He,this.object=this.group,this.reveal=0,this.rings=[];let i=(s,o)=>new ae({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uTime:{value:0},uC1:{value:new xt(s)},uC2:{value:new xt(o)},uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform vec3 uC1; uniform vec3 uC2; uniform float uAmt; varying vec2 vUv;
          void main(){ float t = fract(vUv.x - uTime*0.08); float head = pow(t, 6.0);
          vec3 c = mix(uC2, uC1, t); gl_FragColor = vec4(c * (0.18 + head*1.6) * uAmt, 1.0); }`}),n=[[1.75,"#ffb36b","#ff5a1a",[1.2,.2,0]],[2.05,"#8fb0ff","#4d7cff",[.4,1,.3]],[2.35,"#ffd2ad","#ff6b1a",[-.6,.5,1.1]]];for(let[s,o,a,l]of n){let c=new qt(new Ds(s,.012,8,220),i(o,a));c.rotation.set(...l),this.rings.push({m:c,speed:.12+s*.04,axis:new U(...l).normalize()}),this.group.add(c)}this.glow=new qt(new Fe(1,1),new ae({transparent:!0,depthWrite:!1,blending:qe,uniforms:{uTime:{value:0},uAmt:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; uniform float uAmt; varying vec2 vUv;
          void main(){ vec2 p = (vUv - 0.5) * 2.0; float d = length(p); float a = atan(p.y, p.x);
          float rays = pow(0.5 + 0.5 * sin(a * 9.0 + uTime * 0.25), 6.0) * 0.6 + pow(0.5 + 0.5 * sin(a * 5.0 - uTime * 0.18), 8.0) * 0.5;
          float core = exp(-d * d * 7.0);
          float halo = exp(-d * 2.6) * rays * smoothstep(1.0, 0.2, d);
          vec3 c = vec3(1.0, 0.45, 0.14) * core * 0.9 + vec3(1.0, 0.6, 0.3) * halo * 0.45;
          gl_FragColor = vec4(c * uAmt * smoothstep(1.0, 0.7, d), 1.0); }`})),this.glow.scale.set(9,9,1),this.glow.position.z=-2.2,this.group.add(this.glow),this.group.visible=!1}update(t){let e=this.anchor;if(this.group.visible=e.visible,!e.visible)return;let i=Math.min(1,Math.max(0,(e.progress-.12)/.3));this.reveal+=(i-this.reveal)*.05;let n=e.h/2.3*.95;this.group.position.set(e.x,e.y,0),this.group.scale.setScalar(n*(.8+this.reveal*.2));for(let s of this.rings)s.m.rotateOnAxis(s.axis,.0025+s.speed*.004),s.m.material.uniforms.uTime.value=t*s.speed*3,s.m.material.uniforms.uAmt.value=this.reveal;this.glow.material.uniforms.uTime.value=t,this.glow.material.uniforms.uAmt.value=this.reveal*.8}};var Gy=[[["k","SELECT"],[""," invoice_id,"]],[["","       invoice_num,"]],[["","       invoice_date,"]],[["","       invoice_amount,"]],[["","       amount_paid,"]],[["","       invoice_currency_code"]],[["k","FROM"],["","   ap_invoices_all"]],[["k","WHERE"],["","  invoice_date >= "],["p",":p_from_date"]],[["","  "],["k","AND"],["","  org_id = "],["p",":p_org_id"]],[["k","ORDER BY"],[""," invoice_date "],["k","DESC"]]],w2=[["300000047112381","INV-26-1187","2026-09-30","41 137.24","0.00","USD"],["300000047112377","INV-26-1186","2026-09-30","11 205.80","11 205.80","USD"],["300000047112352","NW-88213","2026-09-29","8 952.60","0.00","EUR"],["300000047112349","INV-26-1179","2026-09-29","4 582.03","4 582.03","USD"],["300000047112330","GX-55120","2026-09-28","619.20","0.00","GBP"],["300000047112318","INV-26-1171","2026-09-28","298.42","298.42","USD"],["300000047112301","AC-00932","2026-09-27","1 634.00","0.00","EUR"],["300000047112296","INV-26-1165","2026-09-27","725.39","725.39","USD"],["300000047112288","NW-88197","2026-09-26","559.50","0.00","EUR"],["300000047112270","INV-26-1160","2026-09-26","388.72","388.72","USD"]];function Wy(r){let t=at(".workbench");if(!t)return()=>{};let e=at(".workbench__pin",t),i=at(".workbench__stage",t),n=at(".app-wrap",t),s=at(".app",t),o=at("#wb-code"),a=at(".ed__gutter",t),l=at("#wb-rows"),c=at(".tb--submit",t),u=at(".tb--cols",t),h=at(".tb--xlsx",t),f=at(".tb--format",t),d=at(".app__status .st",t),p=at(".app__toast",t),_=at(".app__toast-text",t),m=le(".step",t),g=le("th.col-pick",t),y=at('.cb[data-callout-target="plsql"]',t),b=le(".callout",t),v=[];Gy.forEach((O,tt)=>{for(let[rt,gt]of O)for(let ht of gt)v.push([rt,ht]);tt<Gy.length-1&&v.push(["",`
`])}),a.textContent=Array.from({length:12},(O,tt)=>tt+1).join(`
`),l.innerHTML=w2.map(O=>`<tr>${O.map((tt,rt)=>`<td class="${rt===1||rt===3?"pk":""}${rt>3?" hide-s":""}">${tt}</td>`).join("")}</tr>`).join("");let S=le("tr",l),M=le("td.pk",l),E=-1,x=O=>{if(O===E)return;E=O;let tt="",rt=null,gt="",ht=()=>{gt&&(tt+=rt?`<span class="${rt}">${gt}</span>`:gt,gt="")};for(let vt=0;vt<O;vt++){let[$,j]=v[vt];$!==rt&&(ht(),rt=$),gt+=j==="<"?"&lt;":j===">"?"&gt;":j}ht(),o.innerHTML=tt+'<span class="ed__caret"></span>'},w=1040,A=600,R=()=>{let O=window.innerWidth<=760;w=O?620:1040,A=O?560:600,s.style.width=w+"px",s.style.height=A+"px";let tt=i.getBoundingClientRect(),rt=Math.min((tt.width-8)/w,(tt.height-8)/A,1.25);n.style.setProperty("--app-w",`${w*rt}px`),n.style.setProperty("--app-h",`${A*rt}px`),s.style.setProperty("--app-s",rt),D(rt)},D=O=>{let tt=s.getBoundingClientRect(),rt=tt.width/w||1;b.forEach(gt=>{let ht=at(`[data-callout-target="${gt.dataset.for}"]`,s);if(!ht||ht.offsetParent===null){gt.style.display="none";return}gt.style.display="";let vt=ht.getBoundingClientRect(),$=(vt.left+vt.width/2-tt.left)/rt*O,j=(vt.top-tt.top)/rt*O,pt=parseFloat(gt.dataset.dy||"0");gt.style.left=`${$}px`,gt.style.top=`${j-pt}px`,gt.style.setProperty("--stem",`${10+Math.max(0,pt)}px`)})},N={instances:0,tabs:0,params:1,plsql:1,fix:1,format:2,xlsx:2,history:2},I=0,F=0,H=-1,B=.016,Y={x:0,y:0};window.addEventListener("pointermove",O=>{Y.x=O.clientX/innerWidth-.5,Y.y=O.clientY/innerHeight-.5}),$t.reduced?I=1:Bt.create({trigger:t,pin:e,start:"top top",end:()=>"+="+Math.round(window.innerHeight*(window.innerWidth<=760?2.2:2.8)),onUpdate:O=>I=O.progress,onRefresh:R}),window.addEventListener("resize",R),requestAnimationFrame(R);let W=(O,tt,rt)=>O&&O.classList.toggle(tt,rt),P=O=>{let tt=$t.reduced?1:Yn(0,.2,O),rt=lo(34,0,tt)-Y.y*4*tt,gt=lo(-18,0,tt)+Y.x*6*tt,ht=lo(5,0,tt),vt=lo(-280,0,tt),$=lo(80,0,tt);n.style.transform=`translate3d(0, ${$}px, ${vt}px) rotateX(${rt}deg) rotateY(${gt}deg) rotateZ(${ht}deg)`,s.style.setProperty("--sheen",`${lo(-80,180,Yn(.04,.3,O))}%`);let j=vr((O-.14)/.28);x(Math.round(j*v.length));let pt=O>.44&&O<.5;W(c,"is-press",pt),W(y,"is-on",!1);let Dt=O<.44?"Ready":O<.5?"Running\u2026":"Successful Response \xB7 10 rows";d.textContent!==Dt&&(d.textContent=Dt,d.className="st"+(O>=.44&&O<.5?" is-run":O>=.5?" is-ok":""));let dt=vr((O-.5)/.16);S.forEach((G,Kt)=>{let he=vr(dt*S.length-Kt);G.style.opacity=he,G.style.transform=`translateY(${(1-he)*10}px)`});let Vt=O>.72;g.forEach(G=>W(G,"is-picked",Vt)),M.forEach(G=>W(G,"is-picked",Vt)),W(u,"is-press",O>.78&&O<.82),W(h,"is-press",O>.9&&O<.94),W(f,"is-press",!1);let Tt=0,At="";O>.8&&O<.89?(Tt=Yn(.8,.82,O)*(1-Yn(.87,.89,O)),At="2 columns copied"):O>.92&&(Tt=Yn(.92,.94,O),At="results.xlsx exported"),At&&_.textContent!==At&&(_.textContent=At),p.style.opacity=Tt,p.style.transform=`translateY(${(1-Tt)*14}px) scale(${.96+Tt*.04})`;let Qt=O<.44?0:O<.72?1:2,ne=[[.1,.44],[.44,.72],[.72,1]];m.forEach((G,Kt)=>{W(G,"is-on",Kt===Qt),G.style.setProperty("--p",vr((O-ne[Kt][0])/(ne[Kt][1]-ne[Kt][0])))}),b.forEach(G=>{let Kt=N[G.dataset.for],he=!$t.reduced&&O>.16&&Kt===Qt?1:0,De=parseFloat(G.dataset.on||"0"),Zt=De+(he-De)*Math.min(1,B*9);G.dataset.on=Zt.toFixed(3),G.style.opacity=Zt,G.style.transform=`translate(-50%, calc(-100% - ${4+Zt*8}px)) scale(${.92+Zt*.08})`})};return O=>{B=O;let tt=1-Math.pow(5e-4,O);F+=(I-F)*tt,(Math.abs(F-H)>5e-5||Y.x||Y.y||b.some(rt=>{let gt=parseFloat(rt.dataset.on||"0");return gt>.001&&gt<.999}))&&(P(F),H=F)}}function Xy(r){let t=at(".features");if(!t)return()=>{};let e=at(".features__pin",t),i=at(".features__track",t),n=le(".feature",t),s=at(".features__cur",t),o=at(".features__progress i",t),a=n.map((h,f)=>[E2,T2,A2,C2][f]?.(h)),l=-1,c=h=>{if(h===l)return;let f=l;if(l=h,r?.setFeature(h),a.forEach((d,p)=>p===h?d?.play():d?.pause()),s){let d=f<h?1:-1;wt.fromTo(s,{yPercent:60*d,autoAlpha:0},{yPercent:0,autoAlpha:1,duration:.6,ease:"expo.out"}),s.textContent=String(h+1).padStart(2,"0")}n.forEach((d,p)=>d.classList.toggle("is-active",p===h))},u=()=>Math.max(0,i.scrollWidth-window.innerWidth);if(!$t.reduced){let h=wt.to(i,{x:()=>-u(),ease:"none",scrollTrigger:{trigger:t,pin:e,start:"top top",end:()=>"+="+Math.round(u()*1.25+window.innerHeight*.4),scrub:.8,invalidateOnRefresh:!0,onUpdate:f=>{o&&(o.style.transform=`scaleX(${f.progress})`)}}});return()=>{let f=window.innerWidth/2,d=0,p=1/0;n.forEach((m,g)=>{let y=m.getBoundingClientRect(),b=(y.left+y.width/2-f)/window.innerWidth,v=Math.abs(b);v<p&&(p=v,d=g);let S=vr(v*1.4);m.style.transform=`perspective(1400px) rotateY(${-b*16}deg) translateZ(${-S*120}px) scale(${1-S*.06})`,m.style.opacity=String(1-S*.45)});let _=h.scrollTrigger;_&&_.isActive?c(d):_&&_.progress<=0&&c(0)}}return c(0),()=>{}}function E2(r){let t=at(".demo--copy",r);if(!t)return null;let e=le(".mg-row:not(.mg-head) .pick",t),i=at(".clip__text",t),n=i.textContent;i.textContent="";let s=wt.timeline({paused:!0,repeat:-1,repeatDelay:.6});return s.call(()=>{t.classList.remove("is-picked"),i.textContent=""}),s.call(()=>t.classList.add("is-picked"),null,.4),e.forEach((o,a)=>{s.call(()=>{let l=t.getBoundingClientRect(),c=o.getBoundingClientRect(),u=i.getBoundingClientRect(),h=document.createElement("span");h.className="fly",h.textContent=o.textContent,t.appendChild(h),wt.fromTo(h,{x:c.left-l.left,y:c.top-l.top,scale:1,autoAlpha:1},{x:u.left-l.left+a*18,y:u.top-l.top,scale:.8,duration:.75,ease:"power3.inOut",onComplete:()=>wt.to(h,{autoAlpha:0,duration:.2,onComplete:()=>h.remove()})})},null,.8+a*.14)}),s.to(i,{duration:1.1,scrambleText:{text:n,chars:"'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-",speed:.8}},1.5),s.to({},{duration:1.8}),s}function T2(r){let t=at(".demo--history",r);if(!t)return null;let e=at(".hist-search__q",t),i=le(".hist-list li",t),n="invoice",s=wt.timeline({paused:!0,repeat:-1,repeatDelay:.8});s.call(()=>{e.textContent="",i.forEach(l=>l.classList.remove("is-hit"))}),s.set(i,{height:"auto",autoAlpha:1,paddingTop:7,paddingBottom:7});for(let l=1;l<=n.length;l++)s.call(()=>e.textContent=n.slice(0,l),null,.4+l*.12);let o=i.filter(l=>l.dataset.k!=="invoice"),a=i.filter(l=>l.dataset.k==="invoice");return s.to(o,{height:0,paddingTop:0,paddingBottom:0,autoAlpha:0,duration:.5,ease:"expo.inOut",stagger:.05},1.5),s.call(()=>a[0]?.classList.add("is-hit"),null,2.1),s.fromTo(a[0]||{},{x:0},{x:6,duration:.15,yoyo:!0,repeat:1},2.15),s.to({},{duration:2.2}),s}function A2(r){let t=at(".demo--format",r);if(!t)return null;let e=at(".fmt-code code",t),i=at(".fmt-btn",t),n=[["select","k",0,0],["invoice_id,","",0,0],["invoice_num,","",1,7],["amount","",1,7],["from","k",1,0],["ap_invoices_all","",0,0],["where","k",1,0],["amount","",0,0],[">","",0,0],["1000","p",0,0],["order","k",1,0],["by","k",0,0],["invoice_num","",0,0]],s=n.map(([c,u])=>{let h=document.createElement("span");return h.className="tok"+(u?" "+u:""),h.textContent=c,h._raw=c,h._up=u==="k"?c.toUpperCase():c,h}),o=()=>{e.textContent="",s.forEach((c,u)=>{c.textContent=c._raw,e.appendChild(c),u<s.length-1&&e.appendChild(document.createTextNode(" "))})},a=()=>{e.textContent="",s.forEach((c,u)=>{let[,,h,f]=n[u];u>0&&e.appendChild(document.createTextNode(h?`
`+" ".repeat(f):" ")),c.textContent=c._up,e.appendChild(c)})};o();let l=wt.timeline({paused:!0,repeat:-1,repeatDelay:.4});return l.call(()=>o()),l.call(()=>i.classList.add("is-press"),null,.9),l.call(()=>i.classList.remove("is-press"),null,1.15),l.call(()=>{let c=vs.getState(s);a(),vs.from(c,{duration:1.1,ease:"expo.inOut",stagger:.02,scale:!0})},null,1.15),l.to({},{duration:2.8}),l}function C2(r){let t=at(".demo--excel",r);if(!t)return null;let e=le(".xl-cells span",t),i=at(".xl-file__bar i",t),n=at(".xl-file__name",t),s=wt.timeline({paused:!0,repeat:-1,repeatDelay:.6});return s.call(()=>{e.forEach(o=>o.classList.remove("is-lit")),n.textContent="results.xlsx"}),s.set(i,{scaleX:0}),e.forEach((o,a)=>s.call(()=>o.classList.add("is-lit"),null,.3+a*.08)),s.to(i,{scaleX:1,duration:1.2,ease:"power2.inOut"},.6),s.call(()=>n.textContent="results.xlsx  \u2713",null,1.85),s.to(e,{scale:.9,duration:.2,yoyo:!0,repeat:1,stagger:.02},1.9),s.to({},{duration:1.6}),s}function Yy(r){let t=at(".ai-card");if(!t)return;let e=at(".ai-card__fix",t),i=at(".ai-card__msg",t),n=at(".ai-card__apply",t),s=at(".ai-card__bubble",t),o=at(".ai-card__bubble-wrap",t),a=i.dataset.msg;if($t.reduced){i.textContent=a;return}let l=wt.timeline({paused:!0,repeat:-1,repeatDelay:1.2});l.call(()=>{t.classList.remove("is-fixed"),i.textContent="",r&&(r.think=0,r.ok=0)}),l.set(s,{autoAlpha:0,y:14}),l.set(o,{height:0}),l.call(()=>e.classList.add("is-press"),null,.8),l.call(()=>{e.classList.remove("is-press"),r&&(r.think=1)},null,1.05),l.to(o,{height:"auto",duration:.7,ease:"expo.out"},1.15),l.to(s,{autoAlpha:1,y:0,duration:.6,ease:"expo.out"},1.2),l.to(i,{duration:1.8,text:{value:a},ease:"none"},1.5),l.call(()=>n.classList.add("is-press"),null,3.7),l.call(()=>{n.classList.remove("is-press"),t.classList.add("is-fixed"),r&&(r.think=0,r.ok=1),wt.fromTo(t,{boxShadow:"0 0 0 0 rgba(52,217,155,0.0)"},{boxShadow:"0 0 0 6px rgba(52,217,155,0.25)",duration:.35,yoyo:!0,repeat:1})},null,3.95),l.call(()=>r&&(r.ok=0),null,5.6),l.to(s,{autoAlpha:0,y:-8,duration:.5,ease:"power2.in"},6.6),l.to(o,{height:0,duration:.6,ease:"expo.inOut"},6.8),l.to({},{duration:.6}),Bt.create({trigger:t,start:"top 85%",end:"bottom 10%",onToggle:c=>c.isActive?l.play():l.pause()}),wt.fromTo(t,{y:60,rotateX:10,transformPerspective:1200},{y:-20,rotateX:-4,ease:"none",scrollTrigger:{trigger:".ai",start:"top bottom",end:"bottom top",scrub:!0}})}function qy(r){let t=le('.inst-tabs [role="tab"]'),e=at(".inst-status__name");if(!t.length)return;let i=at(".inst-tabs"),n=document.createElement("span");n.className="inst-tabs__glider",n.setAttribute("aria-hidden","true"),i.prepend(n);let s=(u,h)=>{let f=t[u];wt.to(n,{x:f.offsetLeft,width:f.offsetWidth,height:f.offsetHeight,y:f.offsetTop-parseFloat(getComputedStyle(n).top||0),duration:h||$t.reduced?0:.7,ease:"expo.out"})};window.addEventListener("resize",()=>s(o,!0));let o=1,a=!1,l=(u,h)=>{o=u,h&&(a=!0),s(u),t.forEach((f,d)=>f.setAttribute("aria-selected",String(d===u))),r?.setActive(u),e&&($t.reduced?e.textContent=t[u].textContent:wt.to(e,{duration:.6,scrambleText:{text:t[u].textContent,chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",speed:.6}}))};t.forEach((u,h)=>{u.addEventListener("click",()=>l(h,!0)),u.addEventListener("keydown",f=>{if(f.key==="ArrowRight"||f.key==="ArrowLeft"){let d=(h+(f.key==="ArrowRight"?1:t.length-1))%t.length;t[d].focus(),l(d,!0)}})});let c=null;Bt.create({trigger:".instances",start:"top 70%",end:"bottom 30%",onToggle:u=>{clearInterval(c),u.isActive&&!$t.reduced&&(c=setInterval(()=>{a||l((o+1)%t.length,!1)},2600))}}),at(".instances")?.addEventListener("click",u=>{u.target.closest("button, a")||r&&r.hovered>=0&&l(r.hovered,!0)}),l(1,!1),requestAnimationFrame(()=>s(1,!0)),document.fonts?.ready.then(()=>s(o,!0))}function $y(r){let t=at(".desktop");if(!t)return()=>{};let e=at(".desktop__pin",t),i=le(".desk-list li",t),n=0,s=0,o=()=>window.innerWidth>1100&&window.innerHeight>=700;return $t.reduced?n=1:Bt.matchMedia({"(min-width: 1101px) and (min-height: 700px)":()=>{let a=Bt.create({trigger:t,pin:e,start:"top top",end:"+=120%",onUpdate:l=>n=l.progress});return()=>a.kill()},"(max-width: 1100px), (max-height: 699px)":()=>{let a=Bt.create({trigger:t,start:"top 85%",end:"center 45%",onUpdate:l=>n=l.progress});return()=>a.kill()}}),a=>{s+=(n-s)*(1-Math.pow(.002,a)),r&&(r.open=Yn(.02,o()?.5:.85,s)),i.forEach((l,c)=>l.classList.toggle("is-lit",s>.3+c*.12||!o()))}}function Zy(){let r=at(".ring__caption");if(!r||$t.reduced)return;let[t,e]=le("span",r);wt.fromTo(t,{x:-60},{x:40,ease:"none",scrollTrigger:{trigger:".ring",start:"top bottom",end:"bottom top",scrub:!0}}),wt.fromTo(e,{x:60},{x:-40,ease:"none",scrollTrigger:{trigger:".ring",start:"top bottom",end:"bottom top",scrub:!0}})}function Jy(){!at(".cta__title")||$t.reduced||(wt.fromTo(".cta__inner",{y:80},{y:0,ease:"none",scrollTrigger:{trigger:".cta",start:"top bottom",end:"top top",scrub:!0}}),Bt.matchMedia({"(min-height: 640px)":()=>{let t=Bt.create({trigger:".cta",pin:".cta__pin",start:"top top",end:"+=55%"});return()=>t.kill()}}))}function Ky(r){at(".studio")?.addEventListener("pointerdown",()=>r?.click()),!$t.reduced&&le(".studio__cards .card").forEach((t,e)=>{wt.fromTo(t,{x:$t.mobile?0:60+e*20,rotationZ:2.5},{x:0,rotationZ:0,ease:"none",scrollTrigger:{trigger:t,start:"top 98%",end:"top 60%",scrub:!0}})})}function jy(){!at(".video")||$t.reduced||wt.fromTo(".video-wrap",{rotateX:24,scale:.88,y:60,transformPerspective:1600,transformOrigin:"50% 100%"},{rotateX:0,scale:1,y:0,ease:"none",scrollTrigger:{trigger:".video-wrap",start:"top bottom",end:"center 60%",scrub:!0}})}function xd(r,t,e){let i=[];return i.push(Wy(e)),i.push(Xy(t.director)),Yy(t.orb),qy(t.constellation),i.push($y(t.laptop)),Zy(),Jy(),Ky(t.keys),jy(),{frame(n){for(let s of i)s?.(n)}}}xd.gl=async(r,t,e)=>{let i=(n,s)=>r.anchor(at(n),s);t.ring=r.add(new fd(r,i('[data-anchor="ring"]',{margin:.3}),{mobile:e.mobile})),t.orb=r.add(new dd(r,i('[data-anchor="orb"]',{margin:.3}),{mobile:e.mobile})),t.constellation=r.add(new pd(r,i('[data-anchor="constellation"]',{margin:.3}),{mobile:e.mobile})),t.keys=r.add(new md(r,i('[data-anchor="keys"]',{margin:.3}))),t.laptop=r.add(new gd(r,i('[data-anchor="laptop"]',{margin:.3}),{mobile:e.mobile})),t.portal=r.add(new _d(r,i('[data-anchor="cta"]',{margin:.5})))};function Qy(){if(!$t.fine||$t.reduced)return{frame(){}};let r=at(".cursor"),t=at(".cursor__dot",r),e=at(".cursor__ring",r),i=at(".cursor__label",r),n={x:innerWidth/2,y:innerHeight/2},s={x:n.x,y:n.y},o=!1;window.addEventListener("pointermove",u=>{n.x=u.clientX,n.y=u.clientY,o||(o=!0,r.style.opacity=1,s.x=n.x,s.y=n.y)},{passive:!0}),document.addEventListener("pointerleave",()=>{o=!1,r.style.opacity=0}),window.addEventListener("pointerdown",()=>r.classList.add("is-down")),window.addEventListener("pointerup",()=>r.classList.remove("is-down"));let a=null,l=null,c=()=>{let u=a?.dataset.cursor||!a&&l||null;r.classList.toggle("is-label",!!u),r.classList.toggle("is-link",!!a&&!u),u&&(i.textContent=u)};return document.addEventListener("pointerover",u=>{a=u.target.closest('[data-cursor], a, button, summary, [role="tab"], label'),c()}),document.addEventListener("cursor-label",u=>{l=u.detail||null,c()}),{frame(u){let h=1-Math.pow(4e-4,u);s.x+=(n.x-s.x)*h,s.y+=(n.y-s.y)*h,t.style.transform=`translate3d(${n.x}px, ${n.y}px, 0)`,e.style.transform=`translate3d(${s.x}px, ${s.y}px, 0)`}}}function t1(){!$t.fine||$t.reduced||(le("[data-magnetic]").forEach(r=>{let t=at(".btn__label",r),e=wt.quickTo(r,"x",{duration:.6,ease:"power3.out"}),i=wt.quickTo(r,"y",{duration:.6,ease:"power3.out"}),n=t?wt.quickTo(t,"x",{duration:.6,ease:"power3.out"}):null,s=t?wt.quickTo(t,"y",{duration:.6,ease:"power3.out"}):null;r.addEventListener("pointermove",o=>{let a=r.getBoundingClientRect(),l=o.clientX-(a.left+a.width/2),c=o.clientY-(a.top+a.height/2);e(l*.28),i(c*.38),n?.(l*.12),s?.(c*.16),r.style.setProperty("--mx",`${o.clientX-a.left}px`),r.style.setProperty("--my",`${o.clientY-a.top}px`)}),r.addEventListener("pointerleave",()=>{wt.to(r,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"}),t&&wt.to(t,{x:0,y:0,duration:1.1,ease:"elastic.out(1, 0.35)"})})}),le(".btn__label").forEach(r=>{r.dataset.text||(r.dataset.text=r.textContent.trim())}))}function e1(){!$t.fine||$t.reduced||(le("[data-tilt]").forEach(r=>{wt.set(r,{transformPerspective:900});let t=wt.quickTo(r,"rotationX",{duration:.6,ease:"power3.out"}),e=wt.quickTo(r,"rotationY",{duration:.6,ease:"power3.out"});r.addEventListener("pointermove",i=>{let n=r.getBoundingClientRect(),s=(i.clientX-n.left)/n.width,o=(i.clientY-n.top)/n.height;t((.5-o)*7),e((s-.5)*7),r.style.setProperty("--mx",`${s*100}%`),r.style.setProperty("--my",`${o*100}%`)}),r.addEventListener("pointerleave",()=>{t(0),e(0)})}),le(".video").forEach(r=>{r.addEventListener("pointermove",t=>{let e=r.getBoundingClientRect(),i=(t.clientX-e.left)/e.width,n=(t.clientY-e.top)/e.height;r.style.setProperty("--ry",`${(i-.5)*5}deg`),r.style.setProperty("--rx",`${(.5-n)*5}deg`)}),r.addEventListener("pointerleave",()=>{r.style.setProperty("--rx","0deg"),r.style.setProperty("--ry","0deg")})}))}function i1(){let r=document.documentElement,t=at("#nav"),e=at(".progress span"),i=at(".rail__num"),n=at(".rail__name"),s=at(".rail__line i"),o=at(".burger"),a=at("#menu"),l=le(".nav__links a"),c=window.scrollY,u=!1,h=p=>{r.classList.toggle("menu-open",p),o?.setAttribute("aria-expanded",String(p)),o?.setAttribute("aria-label",p?"Close menu":"Open menu"),a?.setAttribute("aria-hidden",String(!p)),p&&wt.fromTo(le(".menu__links a, .menu__foot .btn"),{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.9,stagger:.05,ease:"expo.out",delay:.2})};o?.addEventListener("click",()=>h(!r.classList.contains("menu-open"))),a?.addEventListener("click",p=>{p.target.closest("a")&&h(!1)}),window.addEventListener("keydown",p=>{p.key==="Escape"&&r.classList.contains("menu-open")&&h(!1)});let f={Workbench:"#workbench",Features:"#features","AI help":"#ai",Desktop:"#desktop",FAQ:"#faq"},d=0;return document.addEventListener("section",p=>{let{name:_,index:m}=p.detail;d=Math.max(d,le("[data-section]").length),i&&wt.to(i,{duration:.6,scrambleText:{text:String(m+1).padStart(2,"0"),chars:"0123456789",speed:.6}}),n&&wt.to(n,{duration:.8,scrambleText:{text:_,chars:"upperCase",speed:.5}});let g=f[_];l.forEach(y=>y.classList.toggle("is-active",y.getAttribute("href")===g))}),{closeMenu:()=>h(!1),frame(){let p=window.scrollY,_=document.documentElement.scrollHeight-window.innerHeight,m=_>0?p/_:0;e&&(e.style.transform=`scaleX(${m})`),s&&(s.style.transform=`scaleY(${m})`),t?.classList.toggle("is-scrolled",p>30);let g=p-c;r.classList.contains("menu-open")||(g>6&&p>500&&!u?(u=!0,t?.classList.add("is-hidden")):(g<-6||p<200)&&u&&(u=!1,t?.classList.remove("is-hidden"))),c=p}}}function n1(){if($t.reduced)return;le("[data-split]").forEach(e=>{Qo.create(e,{type:"lines,words",mask:"lines",linesClass:"split-line",wordsClass:"sw",autoSplit:!0,onSplit(i){return wt.from(i.words,{yPercent:115,rotate:4,transformOrigin:"0% 100%",duration:1.3,ease:"expo.out",stagger:.045,scrollTrigger:{trigger:e,start:"top 88%",once:!0}})}})}),le(".eyebrow").forEach(e=>{let i=[...e.childNodes].find(o=>o.nodeType===3&&o.textContent.trim());if(!i)return;let n=document.createElement("span");n.textContent=i.textContent.trim(),e.replaceChild(n,i);let s=n.textContent;n.style.minWidth=`${s.length*.62}em`,wt.set(e,{autoAlpha:0}),Bt.create({trigger:e,start:"top 90%",once:!0,onEnter:()=>{wt.to(e,{autoAlpha:1,duration:.4}),wt.fromTo(n,{scrambleText:{text:""}},{duration:1.2,scrambleText:{text:s,chars:"ABCDEFGHIJKLMNOPQRSTUVWXYZ/_<>01",speed:.7,revealDelay:.2}})}})});let r=le(".lead, .ticks li, .desk-list li, .studio__cards .card, .download, .inst-tabs, .inst-status, .qa, .spec, .cta__buttons, .cta__dev, .ring__caption, .features__side, .footer__top");r.forEach(e=>wt.set(e,{autoAlpha:0,y:34})),Bt.batch(r,{start:"top 92%",once:!0,onEnter:e=>wt.to(e,{autoAlpha:1,y:0,duration:1.2,ease:"expo.out",stagger:.08,overwrite:!0})});let t=at("[data-words]");if(t){let e=Qo.create(t,{type:"words",wordsClass:"w"});wt.to(e.words,{opacity:1,ease:"none",stagger:.1,scrollTrigger:{trigger:t,start:"top 82%",end:"bottom 45%",scrub:.6}}),le(".mark-word",t).forEach(i=>{wt.to(i,{"--u":1,ease:"none",scrollTrigger:{trigger:i,start:"top 62%",end:"top 45%",scrub:.6}})})}}function r1(){le(".qa").forEach(t=>{let e=at("summary",t),i=at(".qa__a",t);e.addEventListener("click",n=>{$t.reduced||(n.preventDefault(),t.open?wt.to(i,{height:0,duration:.6,ease:"expo.out",onComplete:()=>{t.open=!1,wt.set(i,{clearProps:"height"}),Bt.refresh()}}):(t.open=!0,wt.fromTo(i,{height:0},{height:"auto",duration:.8,ease:"expo.out",onComplete:()=>Bt.refresh()}),wt.fromTo(at("p",i),{y:16,autoAlpha:0},{y:0,autoAlpha:1,duration:.8,ease:"expo.out",delay:.05})))})});let r=at(".download__more");r&&r.addEventListener("toggle",()=>Bt.refresh())}function s1(){le("[data-copy]").forEach(r=>{r.addEventListener("click",async()=>{let t=r.dataset.copy,e=!1;try{await navigator.clipboard.writeText(t),e=!0}catch{let n=r.previousElementSibling;if(n){let s=document.createRange();s.selectNodeContents(n);let o=window.getSelection();o.removeAllRanges(),o.addRange(s)}}r.textContent=e?"Copied":"Selected",r.classList.add("is-done"),setTimeout(()=>{r.textContent="Copy",r.classList.remove("is-done")},1800)})})}function o1(){le("[data-count]").forEach(r=>{let t=parseFloat(r.dataset.count),e=parseInt(r.dataset.decimals||"0",10),i=r.dataset.prefix||"";if($t.reduced)return;let n={v:t===0?99:0};r.textContent=i+n.v.toFixed(e),Bt.create({trigger:r,start:"top 90%",once:!0,onEnter:()=>wt.to(n,{v:t,duration:t===0?1.6:2,ease:"expo.out",onUpdate:()=>r.textContent=i+n.v.toFixed(e)})})})}function a1(){let r=at(".video"),t=at("#video-modal");if(!r||!t)return;let e=at(".modal__video",t),i=at(".modal__frame",t),n=r.dataset.video,s=()=>{t.hidden=!1,Li?.stop(),$t.artifact?e.innerHTML=`<div class="modal__fallback"><p>The video opens on YouTube.</p><a class="btn btn--fox" href="https://www.youtube.com/watch?v=${n}" target="_blank" rel="noopener"><span class="btn__label">Watch on YouTube</span></a></div>`:e.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${n}?autoplay=1&rel=0" title="SQL Harmony demo" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`,wt.fromTo(at(".modal__backdrop",t),{autoAlpha:0},{autoAlpha:1,duration:.5}),wt.fromTo(i,{scale:.86,y:40,autoAlpha:0,rotateX:8},{scale:1,y:0,autoAlpha:1,rotateX:0,duration:.9,ease:"expo.out"}),at(".modal__close",t).focus()},o=()=>{wt.to(i,{scale:.92,autoAlpha:0,duration:.35,ease:"power2.in"}),wt.to(at(".modal__backdrop",t),{autoAlpha:0,duration:.4,onComplete:()=>{t.hidden=!0,e.innerHTML="",Li?.start(),r.focus()}})};r.addEventListener("click",a=>{a.preventDefault(),s()}),t.addEventListener("click",a=>{a.target.closest("[data-close]")&&o()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&!t.hidden&&o()})}function l1(){let r=at(".footer__word");if(!r)return;let t=le(".fw",r).filter(i=>!i.classList.contains("fw--gap"));if($t.reduced||(wt.from(t,{yPercent:70,rotateX:-80,autoAlpha:0,duration:1.4,ease:"expo.out",stagger:.05,scrollTrigger:{trigger:r,start:"top 96%",once:!0}}),!$t.fine))return;let e=t.map(i=>({l:i,y:wt.quickTo(i,"y",{duration:.6,ease:"power3.out"}),r:wt.quickTo(i,"rotateX",{duration:.6,ease:"power3.out"}),s:wt.quickTo(i,"scaleY",{duration:.6,ease:"power3.out"})}));r.addEventListener("pointermove",i=>{for(let n of e){let s=n.l.getBoundingClientRect(),o=Math.abs(i.clientX-(s.left+s.width/2))/s.width,a=Math.max(0,1-o/2.2);n.y(-a*s.height*.12),n.r(a*-18),n.s(1+a*.08)}}),r.addEventListener("pointerleave",()=>e.forEach(i=>(i.y(0),i.r(0),i.s(1))))}function c1(){let r=at(".marquee__track");if(!r||$t.reduced)return{frame(){}};r.innerHTML+=r.innerHTML;let t=0,e=r.scrollWidth/2;window.addEventListener("resize",()=>e=r.scrollWidth/2);let i=0;return{frame(n){let s=Li?Li.velocity:0;t-=Math.min(4e3,60+Math.abs(s)*30)*n*(s<0?-1:1),e>0&&(t=(t%e+e)%e-e),i+=(Math.max(-12,Math.min(12,s*.6))-i)*.1,r.style.transform=`translate3d(${t}px,0,0) skewX(${-i}deg)`}}}function u1(){let r=at(".sound");if(!r)return;let t=null,e=null,i=null,n=!1,s=null,o=[146.83,220,277.18,329.63,369.99,415.3,440,554.37,659.25],a=[880,987.77,1108.73,1318.51,1479.98];function l(p=4.5,_=2.6){let m=t.sampleRate,g=m*p,y=t.createBuffer(2,g,m);for(let b=0;b<2;b++){let v=y.getChannelData(b);for(let S=0;S<g;S++)v[S]=(Math.random()*2-1)*Math.pow(1-S/g,_)}return y}function c(){t=new(window.AudioContext||window.webkitAudioContext),e=t.createGain(),e.gain.value=0,i=t.createBiquadFilter(),i.type="lowpass",i.frequency.value=1200,i.Q.value=.4;let p=t.createConvolver();p.buffer=l();let _=t.createGain();_.gain.value=.7;let m=t.createGain();m.gain.value=.35,i.connect(m).connect(e),i.connect(p).connect(_).connect(e),e.connect(t.destination)}function u(p,_,m){let g=t.createGain();g.gain.setValueAtTime(0,_),g.gain.linearRampToValueAtTime(.05,_+m*.4),g.gain.linearRampToValueAtTime(0,_+m),g.connect(i);for(let y of[-6,0,7]){let b=t.createOscillator();b.type=y===0?"sine":"triangle",b.frequency.value=p,b.detune.value=y,b.connect(g),b.start(_),b.stop(_+m+.1)}}function h(){if(!n)return;let p=t.currentTime,_=o[Math.floor(Math.random()*3)];u(_/2,p,9);for(let m=0;m<3;m++){let g=o[2+Math.floor(Math.random()*(o.length-2))];u(g,p+m*.9+Math.random()*.6,6+Math.random()*3)}s=setTimeout(h,5200+Math.random()*1800)}function f(p=a[Math.floor(Math.random()*a.length)],_=.035){if(!n||!t)return;let m=t.currentTime,g=t.createOscillator(),y=t.createGain();g.type="sine",g.frequency.value=p,y.gain.setValueAtTime(0,m),y.gain.linearRampToValueAtTime(_,m+.008),y.gain.exponentialRampToValueAtTime(1e-4,m+.35),g.connect(y).connect(i),g.start(m),g.stop(m+.4)}function d(){if(n=!n,n&&!t&&c(),r.setAttribute("aria-pressed",String(n)),r.setAttribute("aria-label",n?"Turn ambient sound off":"Turn ambient sound on"),!t)return;t.resume();let p=t.currentTime;e.gain.cancelScheduledValues(p),e.gain.setValueAtTime(e.gain.value,p),e.gain.linearRampToValueAtTime(n?.9:0,p+(n?2.5:.8)),clearTimeout(s),n&&(h(),f(1318.51,.05))}return r.addEventListener("click",d),$t.fine&&document.addEventListener("pointerover",p=>{let _=p.target.closest('a, button, summary, [role="tab"]');_&&_!==r&&f()}),{frame(){if(!n||!i)return;let p=Math.min(1,Math.abs(Li?Li.velocity:0)/40);i.frequency.setTargetAtTime(1100+p*2600,t.currentTime,.25)}}}function h1(r){let t=Qy();t1(),e1();let e=i1();n1(),r1(),s1(),o1(),a1(),l1();let i=c1(),n=u1();return{closeMenu:e.closeMenu,frame(s){t.frame(s),e.frame(s),i.frame(s),n?.frame(s)}}}wt.registerPlugin(Bt,Qo,Fl,so,vs,sa);wt.config({nullTargetWarn:!1});Bt.config({ignoreMobileResize:!0});so.create("silk","0.16, 1, 0.3, 1");var Dr=document.documentElement;"scrollRestoration"in history&&(history.scrollRestoration="manual");function D2(r=180){let t=document.createElement("canvas");t.width=t.height=r;let e=t.getContext("2d"),i=e.createImageData(r,r);for(let n=0;n<i.data.length;n+=4){let s=Math.random()*255;i.data[n]=i.data[n+1]=i.data[n+2]=s,i.data[n+3]=255}return e.putImageData(i,0,0),t.toDataURL("image/png")}async function R2(){Dr.classList.remove("no-js"),Dr.classList.add("js",$t.reduced?"reduced":"anim"),$t.fine&&Dr.classList.add("has-cursor"),window.scrollTo(0,0);let r=Px(),t=at(".grain");t&&(t.style.backgroundImage=`url(${D2()})`);try{await Promise.race([Promise.all([document.fonts.load('800 200px "Bricolage Grotesque"'),document.fonts.load('500 40px "JetBrains Mono"'),document.fonts.load('italic 400 40px "Instrument Serif"'),document.fonts.load('400 16px "Geist"')]),_x(4e3)])}catch{}r.set(.3);let e=null,i={};try{e=new sd(at("#gl"),{mobile:$t.mobile,reduced:$t.reduced}),e.failed&&(e=null)}catch(l){console.warn("WebGL off:",l),e=null}if(e)try{Dr.classList.add("webgl-on"),i.backdrop=e.add(new od),i.dust=e.add(new ad({count:$t.mobile?650:1400})),i.shards=e.add(new ld({levels:2})),i.director=Oy(e,i.shards,{backdrop:i.backdrop,mobile:$t.mobile});let l=()=>i.director.state.fox;i.word=e.add(new cd(e,l,{mobile:$t.mobile})),i.floor=e.add(new hd(e,l,{mobile:$t.mobile})),i.chips=e.add(new ud(e,l,{mobile:$t.mobile})),r.set(.45),await xd.gl?.(e,i,$t),r.set(.6),await e.warmup(),r.set(.92)}catch(l){console.warn("3D disabled:",l),Dr.classList.remove("webgl-on"),Dr.classList.add("webgl-off"),e=null}else Dr.classList.add("webgl-off");/[?&]debug=1/.test(location.search)&&(window.__gl={world:e,...i});let n=Ex();n?.stop();let s=By({word:i.word,chips:i.chips,floor:i.floor,director:i.director}),o=xd(e,i,$t),a=h1($t);Cx(()=>a.closeMenu?.()),Tx(l=>{e?(e.scrollVel=Ax(),i.director?.frame(),s.frame(),o.frame?.(l),e.render(l)):o.frame?.(l),a.frame?.(l)}),Bt.refresh(),await r.finish(),Dr.classList.add("is-ready"),n?.start(),i.director?.intro(),s.intro(),a.intro?.(),window.addEventListener("load",()=>Bt.refresh()),document.fonts?.ready&&document.fonts.ready.then(()=>Bt.refresh())}R2().catch(r=>{console.error(r),at("#preloader")?.classList.add("is-done"),Dr.classList.remove("anim"),Dr.classList.add("is-ready")});})();
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
