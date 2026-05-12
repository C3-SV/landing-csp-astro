import{r as re}from"./index.C5BVv2q5.js";var Ui={exports:{}},lr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xc;function Tf(){if(xc)return lr;xc=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(r,s,o){var a=null;if(o!==void 0&&(a=""+o),s.key!==void 0&&(a=""+s.key),"key"in s){o={};for(var u in s)u!=="key"&&(o[u]=s[u])}else o=s;return s=o.ref,{$$typeof:n,type:r,key:a,ref:s!==void 0?s:null,props:o}}return lr.Fragment=e,lr.jsx=t,lr.jsxs=t,lr}var kc;function wf(){return kc||(kc=1,Ui.exports=Tf()),Ui.exports}var p=wf();const bf="modulepreload",Af=function(n){return"/"+n},Oc={},Sf=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){let a=function(d){return Promise.all(d.map(_=>Promise.resolve(_).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),h=u?.nonce||u?.getAttribute("nonce");s=a(t.map(d=>{if(d=Af(d),d in Oc)return;Oc[d]=!0;const _=d.endsWith(".css"),T=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${T}`))return;const P=document.createElement("link");if(P.rel=_?"stylesheet":bf,_||(P.as="script"),P.crossOrigin="",P.href=d,h&&P.setAttribute("nonce",h),document.head.appendChild(P),_)return new Promise((k,D)=>{P.addEventListener("load",k),P.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(a){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=a,window.dispatchEvent(u),!u.defaultPrevented)throw a}return s.then(a=>{for(const u of a||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var uu="7.7.4";const Rf=n=>typeof n=="function",le=function(n,e){if(typeof n=="function")return function(){return n(arguments)?e.apply(this,arguments):t=>e(t,...arguments)};switch(n){case 0:case 1:throw new RangeError(`Invalid arity ${n}`);case 2:return function(t,r){return arguments.length>=2?e(t,r):function(s){return e(s,t)}};case 3:return function(t,r,s){return arguments.length>=3?e(t,r,s):function(o){return e(o,t,r)}};case 4:return function(t,r,s,o){return arguments.length>=4?e(t,r,s,o):function(a){return e(a,t,r,s)}};case 5:return function(t,r,s,o,a){return arguments.length>=5?e(t,r,s,o,a):function(u){return e(u,t,r,s,o)}};default:return function(){if(arguments.length>=n)return e.apply(this,arguments);const t=arguments;return function(r){return e(r,...t)}}}},Ct=n=>n,hu=Ct,Cf=n=>()=>n,Pf=Cf(void 0),Nf=Pf;function xf(n,e,t,r,s,o,a,u,h){switch(arguments.length){case 1:return n;case 2:return e(n);case 3:return t(e(n));case 4:return r(t(e(n)));case 5:return s(r(t(e(n))));case 6:return o(s(r(t(e(n)))));case 7:return a(o(s(r(t(e(n))))));case 8:return u(a(o(s(r(t(e(n)))))));case 9:return h(u(a(o(s(r(t(e(n))))))));default:{let d=arguments[0];for(let _=1;_<arguments.length;_++)d=arguments[_](d);return d}}}const Dc="effect/GlobalValue";let ur;const kr=(n,e)=>(ur||(globalThis[Dc]??=new Map,ur=globalThis[Dc]),ur.has(n)||ur.set(n,e()),ur.get(n)),Vc=n=>typeof n=="string",kf=n=>typeof n=="number",du=Rf,fu=n=>typeof n=="object"&&n!==null,Of=n=>fu(n)||du(n),Bt=le(2,(n,e)=>Of(n)&&e in n),Df=le(2,(n,e)=>Bt(n,"_tag")&&n._tag===e),Mo=n=>fu(n)&&!Array.isArray(n),Vf=n=>`BUG: ${n} - please report an issue at https://github.com/Effect-TS/effect/issues`;class si{self;called=!1;constructor(e){this.self=e}next(e){return this.called?{value:e,done:!0}:(this.called=!0,{value:this.self,done:!1})}return(e){return{value:e,done:!0}}throw(e){throw e}[Symbol.iterator](){return new si(this.self)}}const ao=Symbol.for("effect/Utils/YieldWrap");class pu{#e;constructor(e){this.#e=e}[ao](){return this.#e}}function Mf(n){if(typeof n=="object"&&n!==null&&ao in n)return n[ao]();throw new Error(Vf("yieldWrapGet"))}const Ue=kr("effect/Utils/isStructuralRegion",()=>({enabled:!1,tester:void 0})),ji=kr(Symbol.for("effect/Hash/randomHashCache"),()=>new WeakMap),Dt=Symbol.for("effect/Hash"),Pn=n=>{if(Ue.enabled===!0)return 0;switch(typeof n){case"number":return Fo(n);case"bigint":return wt(n.toString(10));case"boolean":return wt(String(n));case"symbol":return wt(String(n));case"string":return wt(n);case"undefined":return wt("undefined");case"function":case"object":return n===null?wt("null"):n instanceof Date?Pn(n.toISOString()):n instanceof URL?Pn(n.href):Lf(n)?n[Dt]():mu(n);default:throw new Error(`BUG: unhandled typeof ${typeof n} - please report an issue at https://github.com/Effect-TS/effect/issues`)}},mu=n=>(ji.has(n)||ji.set(n,Fo(Math.floor(Math.random()*Number.MAX_SAFE_INTEGER))),ji.get(n)),gu=n=>e=>e*53^n,Lo=n=>n&3221225471|n>>>1&1073741824,Lf=n=>Bt(n,Dt),Fo=n=>{if(n!==n||n===1/0)return 0;let e=n|0;for(e!==n&&(e^=n*4294967295);n>4294967295;)e^=n/=4294967295;return Lo(e)},wt=n=>{let e=5381,t=n.length;for(;t;)e=e*33^n.charCodeAt(--t);return Lo(e)},Ff=(n,e)=>{let t=12289;for(let r=0;r<e.length;r++)t^=xf(wt(e[r]),gu(Pn(n[e[r]])));return Lo(t)},Uf=n=>Ff(n,Object.keys(n)),ii=function(){if(arguments.length===1){const t=arguments[0];return function(r){return Object.defineProperty(t,Dt,{value(){return r},enumerable:!1}),r}}const n=arguments[0],e=arguments[1];return Object.defineProperty(n,Dt,{value(){return e},enumerable:!1}),e},Fn=Symbol.for("effect/Equal");function Uo(){return arguments.length===1?n=>Os(n,arguments[0]):Os(arguments[0],arguments[1])}function Os(n,e){if(n===e)return!0;const t=typeof n;if(t!==typeof e)return!1;if(t==="object"||t==="function"){if(n!==null&&e!==null){if(Mc(n)&&Mc(e))return Pn(n)===Pn(e)&&n[Fn](e)?!0:Ue.enabled&&Ue.tester?Ue.tester(n,e):!1;if(n instanceof Date&&e instanceof Date)return n.toISOString()===e.toISOString();if(n instanceof URL&&e instanceof URL)return n.href===e.href}if(Ue.enabled){if(Array.isArray(n)&&Array.isArray(e))return n.length===e.length&&n.every((r,s)=>Os(r,e[s]));if(Object.getPrototypeOf(n)===Object.prototype&&Object.getPrototypeOf(n)===Object.prototype){const r=Object.keys(n),s=Object.keys(e);if(r.length===s.length){for(const o of r)if(!(o in e&&Os(n[o],e[o])))return Ue.tester?Ue.tester(n,e):!1;return!0}}return Ue.tester?Ue.tester(n,e):!1}}return Ue.enabled&&Ue.tester?Ue.tester(n,e):!1}const Mc=n=>Bt(n,Fn),Or=Symbol.for("nodejs.util.inspect.custom"),_u=n=>{try{if(Bt(n,"toJSON")&&du(n.toJSON)&&n.toJSON.length===0)return n.toJSON();if(Array.isArray(n))return n.map(_u)}catch{return{}}return $f(n)},Ds=n=>JSON.stringify(n,null,2),jf=(n,e=2)=>{if(typeof n=="string")return n;try{return typeof n=="object"?Bf(n,e):String(n)}catch{return String(n)}},Bf=(n,e)=>{let t=[];const r=JSON.stringify(n,(s,o)=>typeof o=="object"&&o!==null?t.includes(o)?void 0:t.push(o)&&(Vs.fiberRefs!==void 0&&yu(o)?o[jo](Vs.fiberRefs):o):o,e);return t=void 0,r},jo=Symbol.for("effect/Inspectable/Redactable"),yu=n=>typeof n=="object"&&n!==null&&jo in n,Vs=kr("effect/Inspectable/redactableState",()=>({fiberRefs:void 0})),$f=n=>yu(n)&&Vs.fiberRefs!==void 0?n[jo](Vs.fiberRefs):n,oi=(n,e)=>{switch(e.length){case 0:return n;case 1:return e[0](n);case 2:return e[1](e[0](n));case 3:return e[2](e[1](e[0](n)));case 4:return e[3](e[2](e[1](e[0](n))));case 5:return e[4](e[3](e[2](e[1](e[0](n)))));case 6:return e[5](e[4](e[3](e[2](e[1](e[0](n))))));case 7:return e[6](e[5](e[4](e[3](e[2](e[1](e[0](n)))))));case 8:return e[7](e[6](e[5](e[4](e[3](e[2](e[1](e[0](n))))))));case 9:return e[8](e[7](e[6](e[5](e[4](e[3](e[2](e[1](e[0](n)))))))));default:{let t=n;for(let r=0,s=e.length;r<s;r++)t=e[r](t);return t}}};let qf="3.17.7";const zf=()=>qf,Hf=Symbol.for("effect/Effect"),Gf=Symbol.for("effect/Stream"),Wf=Symbol.for("effect/Sink"),Kf=Symbol.for("effect/Channel"),co={_R:n=>n,_E:n=>n,_A:n=>n,_V:zf()},Jf={_A:n=>n,_In:n=>n,_L:n=>n,_E:n=>n,_R:n=>n},Qf={_Env:n=>n,_InErr:n=>n,_InElem:n=>n,_InDone:n=>n,_OutErr:n=>n,_OutElem:n=>n,_OutDone:n=>n},vu={[Hf]:co,[Gf]:co,[Wf]:Jf,[Kf]:Qf,[Fn](n){return this===n},[Dt](){return ii(this,mu(this))},[Symbol.iterator](){return new si(new pu(this))},pipe(){return oi(this,arguments)}},Eu={[Dt](){return ii(this,Uf(this))},[Fn](n){const e=Object.keys(this),t=Object.keys(n);if(e.length!==t.length)return!1;for(const r of e)if(!(r in n&&Uo(this[r],n[r])))return!1;return!0}};({...Eu});const Yf=n=>Array.isArray(n)?n:Array.from(n),Bi=n=>Array.isArray(n)?n:[n],Xf=Symbol.for("effect/Context/Tag"),lo=Symbol.for("effect/Context/Reference"),Zf="effect/STM",ep=Symbol.for(Zf),Iu={...vu,_op:"Tag",[ep]:co,[Xf]:{_Service:n=>n,_Identifier:n=>n},toString(){return Ds(this.toJSON())},toJSON(){return{_id:"Tag",key:this.key,stack:this.stack}},[Or](){return this.toJSON()},of(n){return n},context(n){return ap(this,n)}},tp={...Iu,[lo]:lo},np=n=>()=>{const e=Error.stackTraceLimit;Error.stackTraceLimit=2;const t=new Error;Error.stackTraceLimit=e;function r(){}return Object.setPrototypeOf(r,Iu),r.key=n,Object.defineProperty(r,"stack",{get(){return t.stack}}),r},rp=()=>(n,e)=>{const t=Error.stackTraceLimit;Error.stackTraceLimit=2;const r=new Error;Error.stackTraceLimit=t;function s(){}return Object.setPrototypeOf(s,tp),s.key=n,s.defaultValue=e.defaultValue,Object.defineProperty(s,"stack",{get(){return r.stack}}),s},Tu=Symbol.for("effect/Context"),sp={[Tu]:{_Services:n=>n},[Fn](n){if(op(n)&&this.unsafeMap.size===n.unsafeMap.size){for(const e of this.unsafeMap.keys())if(!n.unsafeMap.has(e)||!Uo(this.unsafeMap.get(e),n.unsafeMap.get(e)))return!1;return!0}return!1},[Dt](){return ii(this,Fo(this.unsafeMap.size))},pipe(){return oi(this,arguments)},toString(){return Ds(this.toJSON())},toJSON(){return{_id:"Context",services:Array.from(this.unsafeMap).map(_u)}},[Or](){return this.toJSON()}},wu=n=>{const e=Object.create(sp);return e.unsafeMap=n,e},ip=n=>{const e=new Error(`Service not found${n.key?`: ${String(n.key)}`:""}`);if(n.stack){const t=n.stack.split(`
`);if(t.length>2){const r=t[2].match(/at (.*)/);r&&(e.message=e.message+` (defined at ${r[1]})`)}}if(e.stack){const t=e.stack.split(`
`);t.splice(1,3),e.stack=t.join(`
`)}return e},op=n=>Bt(n,Tu),ap=(n,e)=>wu(new Map([[n.key,e]])),cp=le(3,(n,e,t)=>{const r=new Map(n.unsafeMap);return r.set(e.key,t),wu(r)}),$i=kr("effect/Context/defaultValueCache",()=>new Map),bu=n=>{if($i.has(n.key))return $i.get(n.key);const e=n.defaultValue();return $i.set(n.key,e),e},lp=(n,e)=>n.unsafeMap.has(e.key)?n.unsafeMap.get(e.key):bu(e),up=le(2,(n,e)=>{if(!n.unsafeMap.has(e.key)){if(lo in e)return bu(e);throw ip(e)}return n.unsafeMap.get(e.key)}),hp=cp,dp=up,fp=np,Au=rp,pp=vu,Su=Symbol.for("effect/Micro"),Ms=Symbol.for("effect/Micro/MicroExit"),Ir=n=>typeof n=="object"&&n!==null&&Su in n,Lc=Symbol.for("effect/Micro/MicroCause"),mp={_E:Ct};class Bo extends globalThis.Error{_tag;traces;[Lc];constructor(e,t,r){const s=`MicroCause.${e}`;let o,a,u;if(t instanceof globalThis.Error){o=`(${s}) ${t.name}`,a=t.message;const h=a.split(`
`).length;u=t.stack?`(${s}) ${t.stack.split(`
`).slice(0,h+3).join(`
`)}`:`${o}: ${a}`}else o=s,a=jf(t,0),u=`${o}: ${a}`;r.length>0&&(u+=`
    ${r.join(`
    `)}`),super(a),this._tag=e,this.traces=r,this[Lc]=mp,this.name=o,this.stack=u}pipe(){return oi(this,arguments)}toString(){return this.stack}[Or](){return this.stack}}class gp extends Bo{error;constructor(e,t=[]){super("Fail",e,t),this.error=e}}const Ru=(n,e=[])=>new gp(n,e);class _p extends Bo{defect;constructor(e,t=[]){super("Die",e,t),this.defect=e}}const Cu=(n,e=[])=>new _p(n,e);class yp extends Bo{constructor(e=[]){super("Interrupt","interrupted",e)}}const Pu=(n=[])=>new yp(n),Nu=n=>n._tag==="Fail",xu=n=>n._tag==="Interrupt",qi=n=>n._tag==="Fail"?n.error:n._tag==="Die"?n.defect:n,vp=le(2,(n,e)=>{const t=[...n.traces,e];switch(n._tag){case"Die":return Cu(n.defect,t);case"Interrupt":return Pu(t);case"Fail":return Ru(n.error,t)}}),Fc=Symbol.for("effect/Micro/MicroFiber"),Ep={_A:Ct,_E:Ct};class ku{context;interruptible;[Fc];_stack=[];_observers=[];_exit;_children;currentOpCount=0;constructor(e,t=!0){this.context=e,this.interruptible=t,this[Fc]=Ep}getRef(e){return lp(this.context,e)}addObserver(e){return this._exit?(e(this._exit),Nf):(this._observers.push(e),()=>{const t=this._observers.indexOf(e);t>=0&&this._observers.splice(t,1)})}_interrupted=!1;unsafeInterrupt(){this._exit||(this._interrupted=!0,this.interruptible&&this.evaluate(Ko))}unsafePoll(){return this._exit}evaluate(e){if(this._exit)return;if(this._yielded!==void 0){const s=this._yielded;this._yielded=void 0,s()}const t=this.runLoop(e);if(t===vn)return;const r=Uc.interruptChildren&&Uc.interruptChildren(this);if(r!==void 0)return this.evaluate(Le(r,()=>t));this._exit=t;for(let s=0;s<this._observers.length;s++)this._observers[s](t);this._observers.length=0}runLoop(e){let t=!1,r=e;this.currentOpCount=0;try{for(;;){if(this.currentOpCount++,!t&&this.getRef(ai).shouldYield(this)){t=!0;const s=r;r=Le(Ap,()=>s)}if(r=r[Ls](this),r===vn){const s=this._yielded;return Ms in s?(this._yielded=void 0,s):vn}}}catch(s){return Bt(r,Ls)?Nn(s):Nn(`MicroFiber.runLoop: Not a valid effect: ${String(r)}`)}}getCont(e){for(;;){const t=this._stack.pop();if(!t)return;const r=t[Fs]&&t[Fs](this);if(r)return{[e]:r};if(t[e])return t}}_yielded=void 0;yieldWith(e){return this._yielded=e,vn}children(){return this._children??=new Set}}const Uc=kr("effect/Micro/fiberMiddleware",()=>({interruptChildren:void 0})),Ip=n=>Tr(()=>{for(const r of n)r.unsafeInterrupt();const e=n[Symbol.iterator](),t=Tr(()=>{let r=e.next();for(;!r.done;){if(r.value.unsafePoll()){r=e.next();continue}const s=r.value;return Ho(o=>{s.addObserver(a=>{o(t)})})}return xn});return t}),$o=Symbol.for("effect/Micro/identifier"),Z=Symbol.for("effect/Micro/args"),Ls=Symbol.for("effect/Micro/evaluate"),lt=Symbol.for("effect/Micro/successCont"),Xt=Symbol.for("effect/Micro/failureCont"),Fs=Symbol.for("effect/Micro/ensureCont"),vn=Symbol.for("effect/Micro/Yield"),Tp={_A:Ct,_E:Ct,_R:Ct},Ou={...pp,_op:"Micro",[Su]:Tp,pipe(){return oi(this,arguments)},[Symbol.iterator](){return new si(new pu(this))},toJSON(){return{_id:"Micro",op:this[$o],...Z in this?{args:this[Z]}:void 0}},toString(){return Ds(this)},[Or](){return Ds(this)}};function wp(n){return Nn("Micro.evaluate: Not implemented")}const Dr=n=>({...Ou,[$o]:n.op,[Ls]:n.eval??wp,[lt]:n.contA,[Xt]:n.contE,[Fs]:n.ensure}),pt=n=>{const e=Dr(n);return function(){const t=Object.create(e);return t[Z]=n.single===!1?arguments:arguments[0],t}},Du=n=>{const e={...Dr(n),[Ms]:Ms,_tag:n.op,get[n.prop](){return this[Z]},toJSON(){return{_id:"MicroExit",_tag:n.op,[n.prop]:this[Z]}},[Fn](t){return Op(t)&&t._tag===n.op&&Uo(this[Z],t[Z])},[Dt](){return ii(this,gu(wt(n.op))(Pn(this[Z])))}};return function(t){const r=Object.create(e);return r[Z]=t,r[lt]=void 0,r[Xt]=void 0,r[Fs]=void 0,r}},ke=Du({op:"Success",prop:"value",eval(n){const e=n.getCont(lt);return e?e[lt](this[Z],n):n.yieldWith(this)}}),Vt=Du({op:"Failure",prop:"cause",eval(n){let e=n.getCont(Xt);for(;xu(this[Z])&&e&&n.interruptible;)e=n.getCont(Xt);return e?e[Xt](this[Z],n):n.yieldWith(this)}}),Pt=n=>Vt(Ru(n)),qo=pt({op:"Sync",eval(n){const e=this[Z](),t=n.getCont(lt);return t?t[lt](e,n):n.yieldWith(Go(e))}}),Tr=pt({op:"Suspend",eval(n){return this[Z]()}}),bp=pt({op:"Yield",eval(n){let e=!1;return n.getRef(ai).scheduleTask(()=>{e||n.evaluate(xn)},this[Z]??0),n.yieldWith(()=>{e=!0})}}),Ap=bp(0),Sp=n=>Nn(n),Vu=ke(void 0),Rp=n=>Tr(()=>{try{return ke(n.try())}catch(e){return Pt(n.catch(e))}}),Cp=n=>zo(function(e,t){n(t).then(r=>e(ke(r)),r=>e(Sp(r)))},n.length!==0),Mu=n=>zo(function(e,t){try{n.try(t).then(r=>e(ke(r)),r=>e(Pt(n.catch(r))))}catch(r){e(Pt(n.catch(r)))}},n.try.length!==0),Vr=pt({op:"WithMicroFiber",eval(n){return this[Z](n)}}),zo=pt({op:"Async",single:!1,eval(n){const e=this[Z][0];let t=!1,r=!1;const s=this[Z][1]?new AbortController:void 0,o=e(a=>{t||(t=!0,r?n.evaluate(a):r=a)},s?.signal);return r!==!1?r:(r=!0,n._yielded=()=>{t=!0},s===void 0&&o===void 0||n._stack.push(Pp(()=>(t=!0,s?.abort(),o??xn))),vn)}}),Pp=pt({op:"AsyncFinalizer",ensure(n){n.interruptible&&(n.interruptible=!1,n._stack.push(Qo(!0)))},contE(n,e){return xu(n)?Le(this[Z](),()=>Vt(n)):Vt(n)}}),Ho=n=>zo(n,n.length>=2),Lu=(...n)=>Tr(()=>Np(n.length===1?n[0]():n[1].call(n[0]))),Np=pt({op:"Iterator",contA(n,e){const t=this[Z].next(n);return t.done?ke(t.value):(e._stack.push(this),Mf(t.value))},eval(n){return this[lt](void 0,n)}}),Fu=le(2,(n,e)=>Zt(n,t=>e)),Uu=le(2,(n,e)=>Le(n,t=>{const r=Ir(e)?e:typeof e=="function"?e(t):e;return Ir(r)?r:ke(r)})),xp=le(2,(n,e)=>Le(n,t=>{const r=Ir(e)?e:typeof e=="function"?e(t):e;return Ir(r)?Fu(r,t):ke(t)})),Le=le(2,(n,e)=>{const t=Object.create(kp);return t[Z]=n,t[lt]=e,t}),kp=Dr({op:"OnSuccess",eval(n){return n._stack.push(this),this[Z]}}),Zt=le(2,(n,e)=>Le(n,t=>ke(e(t)))),Op=n=>Bt(n,Ms),Go=ke,Wo=Vt,Ko=Wo(Pu()),Nn=n=>Wo(Cu(n)),Dp=n=>n._tag==="Failure",xn=Go(void 0),Vp="setImmediate"in globalThis?globalThis.setImmediate:n=>setTimeout(n,0);class Jo{tasks=[];running=!1;scheduleTask(e,t){this.tasks.push(e),this.running||(this.running=!0,Vp(this.afterScheduled))}afterScheduled=()=>{this.running=!1,this.runTasks()};runTasks(){const e=this.tasks;this.tasks=[];for(let t=0,r=e.length;t<r;t++)e[t]()}shouldYield(e){return e.currentOpCount>=e.getRef(Fp)}flush(){for(;this.tasks.length>0;)this.runTasks()}}const Mp=n=>Vr(e=>ke(dp(e.context,n))),Lp=le(2,(n,e)=>Vr(t=>{const r=t.context;return t.context=e(r),$u(n,()=>(t.context=r,Vu))})),zi=le(3,(n,e,t)=>Lp(n,hp(e,t)));class Fp extends Au()("effect/Micro/currentMaxOpsBeforeYield",{defaultValue:()=>2048}){}class ai extends Au()("effect/Micro/currentScheduler",{defaultValue:()=>new Jo}){}const Up=le(n=>Ir(n[0]),(n,e,t)=>Le(n,r=>e(r)?ke(r):Pt(t(r)))),jp=le(2,(n,e)=>{const t=Object.create(Bp);return t[Z]=n,t[Xt]=e,t}),Bp=Dr({op:"OnFailure",eval(n){return n._stack.push(this),this[Z]}}),ju=le(3,(n,e,t)=>jp(n,r=>e(r)?t(r):Vt(r))),$p=le(3,(n,e,t)=>ju(n,e,r=>Uu(t(r),Vt(r)))),qp=le(2,(n,e)=>$p(n,Nu,t=>e(t.error))),zp=le(3,(n,e,t)=>ju(n,r=>Nu(r)&&e(r.error),r=>t(r.error))),Hi=le(3,(n,e,t)=>zp(n,Df(e),t)),Bu=function(){const n=globalThis.Error.stackTraceLimit;globalThis.Error.stackTraceLimit=2;const e=new globalThis.Error;globalThis.Error.stackTraceLimit=n;function t(s,o){const a=e.stack;if(!a)return o;const u=a.split(`
`)[2]?.trim().replace(/^at /,"");if(!u)return o;const h=u.match(/\((.*)\)$/);return vp(o,`at ${s} (${h?h[1]:u})`)}const r=s=>o=>Kp(o,a=>Vt(t(s,a)));return arguments.length===2?r(arguments[1])(arguments[0]):r(arguments[0])},Hp=le(2,(n,e)=>{const t=Object.create(Gp);return t[Z]=n,t[lt]=e.onSuccess,t[Xt]=e.onFailure,t}),Gp=Dr({op:"OnSuccessAndFailure",eval(n){return n._stack.push(this),this[Z]}}),$u=le(2,(n,e)=>Qp(t=>Hp(t(n),{onFailure:r=>Le(e(Wo(r)),()=>Vt(r)),onSuccess:r=>Le(e(Go(r)),()=>ke(r))}))),Wp=le(3,(n,e,t)=>$u(n,r=>e(r)?t(r):xn)),Kp=le(2,(n,e)=>Wp(n,Dp,t=>e(t.cause))),Qo=pt({op:"SetInterruptible",ensure(n){if(n.interruptible=this[Z],n._interrupted&&n.interruptible)return()=>Ko}}),Jp=n=>Vr(e=>e.interruptible?n:(e.interruptible=!0,e._stack.push(Qo(!1)),e._interrupted?Ko:n)),Qp=n=>Vr(e=>e.interruptible?(e.interruptible=!1,e._stack.push(Qo(!0)),n(Jp)):n(Ct)),Yp=pt({op:"While",contA(n,e){return this[Z].step(n),this[Z].while()?(e._stack.push(this),this[Z].body()):xn},eval(n){return this[Z].while()?(n._stack.push(this),this[Z].body()):xn}}),Xp=(n,e,t)=>Vr(r=>{const s=t?.concurrency,o=Math.max(1,s),a=Yf(n);let u=a.length;if(u===0)return t?.discard?Vu:ke([]);const h=t?.discard?void 0:new Array(u);let d=0;return o===1?Fu(Yp({while:()=>d<a.length,body:()=>e(a[d],d),step:h?_=>h[d++]=_:_=>d++}),h):Ho(_=>{const T=new Set;let P,k=0,D=0,$=!1,U=!1;function q(){for($=!0;k<o&&d<u;){const F=d,J=a[F];d++,k++;try{const z=Zp(r,e(J,F),!0,!0);T.add(z),z.addObserver(j=>{T.delete(z),!U&&(j._tag==="Failure"?P===void 0&&(P=j,u=d,T.forEach(H=>H.unsafeInterrupt())):h!==void 0&&(h[F]=j.value),D++,k--,D===u?_(P??ke(h)):!$&&k<o&&q())})}catch(z){P=Nn(z),u=d,T.forEach(j=>j.unsafeInterrupt())}}$=!1}return q(),Tr(()=>(U=!0,d=u,Ip(T)))})}),Zp=(n,e,t=!1,r=!1)=>{const s=new ku(n.context,n.interruptible);return r||(n.children().add(s),s.addObserver(()=>n.children().delete(s))),t?s.evaluate(e):n.getRef(ai).scheduleTask(()=>s.evaluate(e),0),s},qu=(n,e)=>{const t=new ku(ai.context(e?.scheduler??new Jo));if(t.evaluate(n),e?.signal)if(e.signal.aborted)t.unsafeInterrupt();else{const r=()=>t.unsafeInterrupt();e.signal.addEventListener("abort",r,{once:!0}),t.addObserver(()=>e.signal.removeEventListener("abort",r))}return t},Is=(n,e)=>new Promise((t,r)=>{qu(n,e).addObserver(t)}),em=(n,e)=>Is(n,e).then(t=>{if(t._tag==="Failure")throw t.cause;return t.value}),tm=n=>{const e=new Jo,t=qu(n,{scheduler:e});return e.flush(),t._exit??Nn(t)},nm=n=>{const e=tm(n);if(e._tag==="Failure")throw e.cause;return e.value},rm=(function(){class n extends globalThis.Error{}return Object.assign(n.prototype,Ou,Eu,{[$o]:"Failure",[Ls](){return Pt(this)},toString(){return this.message?`${this.name}: ${this.message}`:this.name},toJSON(){return{...this}},[Or](){const e=this.stack;return e?`${this.toString()}
${e.split(`
`).slice(1).join(`
`)}`:this.toString()}}),n})(),zu=(function(){return class extends rm{constructor(n){super(),n&&Object.assign(this,n)}}})(),Ge=n=>{class e extends zu{_tag=n}return e.prototype.name=n,e};var jc={};(class extends Ge("InvalidRouteConfig"){constructor(n,e){const t=e?`Expected route config to have a ${e} for key ${n} but none was found.`:`Encountered an invalid route config during backfilling. ${n} was not found.`;super({reason:t})}});(class extends Ge("UnknownFileType"){constructor(n){const e=`Could not determine type for ${n}`;super({reason:e})}});(class extends Ge("InvalidFileType"){constructor(n,e){const t=`File type ${n} not allowed for ${e}`;super({reason:t})}});(class extends Ge("InvalidFileSize"){constructor(n){const e=`Invalid file size: ${n}`;super({reason:e})}});var sm=class extends Ge("InvalidURL"){constructor(n){super({reason:`Failed to parse '${n}' as a URL.`})}};(class extends Ge("RetryError"){});var im=class extends Ge("FetchError"){},om=class extends Ge("InvalidJson"){},am=class extends Ge("BadRequestError"){getMessage(){return Mo(this.json)&&typeof this.json.message=="string"?this.json.message:this.message}},hs=class extends Ge("UploadAborted"){},Bc=class extends Ge("UploadAborted"){};const cm=n=>Lu(function*(){const e=typeof window<"u"?window.location.origin:jc.VERCEL_URL?`https://${jc.VERCEL_URL}`:"http://localhost:3000",t=yield*Rp({try:()=>new URL(n,e),catch:()=>new sm(n)});return t.pathname==="/"&&(t.pathname="/api/uploadthing"),t}),$c=n=>n instanceof URL?n:nm(cm(n));function lm(){}function um(){return new Proxy(lm,{get:(n,e)=>e})}const hm={BAD_REQUEST:400,NOT_FOUND:404,FORBIDDEN:403,INTERNAL_SERVER_ERROR:500,INTERNAL_CLIENT_ERROR:500,TOO_LARGE:413,TOO_SMALL:400,TOO_MANY_FILES:400,KEY_TOO_LONG:400,URL_GENERATION_FAILED:500,UPLOAD_FAILED:500,MISSING_ENV:500,INVALID_SERVER_CONFIG:500,FILE_LIMIT_EXCEEDED:500};function dm(n,e){return typeof n=="string"?n:n instanceof Error||n&&typeof n=="object"&&"message"in n&&typeof n.message=="string"?n.message:e??"An unknown error occurred"}var In=class Hu extends zu{_tag="UploadThingError";name="UploadThingError";cause;code;data;constructor(e){const t=typeof e=="string"?{code:"INTERNAL_SERVER_ERROR",message:e}:e,r=t.message??dm(t.cause,t.code);super({message:r}),this.code=t.code,this.data=t.data,t.cause instanceof Error?this.cause=t.cause:Mo(t.cause)&&kf(t.cause.status)&&Vc(t.cause.statusText)?this.cause=new Error(`Response ${t.cause.status} ${t.cause.statusText}`):Vc(t.cause)?this.cause=new Error(t.cause):this.cause=t.cause}static toObject(e){return{code:e.code,message:e.message,data:e.data}}static serialize(e){return JSON.stringify(Hu.toObject(e))}};function fm(n){for(const[e,t]of Object.entries(hm))if(t===n)return e;return"INTERNAL_SERVER_ERROR"}var Ts=class extends fp("uploadthing/Fetch")(){};const Gu=(n,e)=>Le(Mp(Ts),t=>{const r=new Headers(e?.headers??[]),s={url:n.toString(),method:e?.method,body:e?.body,headers:Object.fromEntries(r)};return Mu({try:o=>t(n,{...e,headers:r,signal:o}),catch:o=>new im({error:o instanceof Error?{...o,name:o.name,message:o.message,stack:o.stack}:o,input:s})}).pipe(qp(o=>qo(()=>console.error(o.input))),Zt(o=>Object.assign(o,{requestUrl:s.url})),Bu("fetch"))}),pm=n=>Mu({try:async()=>({json:await n.json(),ok:n.ok,status:n.status}),catch:e=>new om({error:e,input:n.requestUrl})}).pipe(Up(({ok:e})=>e,({json:e,status:t})=>new am({status:t,message:`Request to ${n.requestUrl} failed with status ${t}`,json:e})),Zt(({json:e})=>e),Bu("parseJson"));new TextEncoder;const mm=()=>{let n,e;const t=new AbortController;return{promise:new Promise((s,o)=>{n=s,e=o}),ac:t,resolve:n,reject:e}},qc=(function(){const n="abcdef0123456789";return function(t){let r="";for(let s=0;s<t;s++)r+=n.charAt(Math.floor(Math.random()*16));return r}})(),Wu=()=>{const n=qc(32),e=qc(16),t="01";return{b3:`${n}-${e}-${t}`,traceparent:`00-${n}-${e}-${t}`}},gm=n=>{const e=new URL(n.url),t=new URLSearchParams(e.search);return t.set("actionType",n.actionType),t.set("slug",n.slug),e.search=t.toString(),e},Ku=n=>(e,t)=>Lu(function*(){const r=gm({url:n.url,slug:n.endpoint,actionType:e}),s=new Headers(yield*Cp(async()=>typeof n.headers=="function"?await n.headers():n.headers));return n.package&&s.set("x-uploadthing-package",n.package),s.set("x-uploadthing-version",uu),s.set("Content-Type","application/json"),s.set("b3",n.traceHeaders.b3),s.set("traceparent",n.traceHeaders.traceparent),yield*Gu(r,{method:"POST",body:JSON.stringify(t),headers:s}).pipe(Uu(pm),Zt(hu),Hi("FetchError",a=>Pt(new In({code:"INTERNAL_CLIENT_ERROR",message:`Failed to report event "${e}" to UploadThing server`,cause:a}))),Hi("BadRequestError",a=>Pt(new In({code:fm(a.status),message:a.getMessage(),cause:a.json}))),Hi("InvalidJson",a=>Pt(new In({code:"INTERNAL_CLIENT_ERROR",message:"Failed to parse response from UploadThing server",cause:a}))))}),zc=n=>{console.warn(`⚠️ [uploadthing][deprecated] ${n}`)},_m=(n,e,t,r)=>Ho(s=>{const o=new XMLHttpRequest;o.open("PUT",t.url,!0),o.setRequestHeader("Range",`bytes=${e}-`),o.setRequestHeader("x-uploadthing-version",uu),o.setRequestHeader("b3",r.traceHeaders.b3),o.setRequestHeader("traceparent",r.traceHeaders.traceparent),o.responseType="json";let a=0;o.upload.addEventListener("progress",({loaded:h})=>{const d=h-a;r.onUploadProgress?.({loaded:h,delta:d}),a=h}),o.addEventListener("load",()=>{o.status>=200&&o.status<300&&Mo(o.response)?Bt(o.response,"error")?s(new In({code:"UPLOAD_FAILED",message:String(o.response.error),data:o.response})):s(ke(o.response)):s(new In({code:"UPLOAD_FAILED",message:`XHR failed ${o.status} ${o.statusText}`,data:o.response}))}),o.addEventListener("error",()=>{s(new In({code:"UPLOAD_FAILED"}))});const u=new FormData;return"uri"in n?u.append("file",{uri:n.uri,type:n.type,name:n.name,...e>0&&{range:e}}):u.append("file",e>0?n.slice(e):n),o.send(u),qo(()=>o.abort())}),Ju=(n,e,t)=>Gu(e.url,{method:"HEAD",headers:t.traceHeaders}).pipe(Zt(({headers:r})=>parseInt(r.get("x-ut-range-start")??"0",10)),xp(r=>t.onUploadProgress?.({delta:r,loaded:r})),Le(r=>_m(n,r,e,{traceHeaders:t.traceHeaders,onUploadProgress:s=>t.onUploadProgress?.({delta:s.delta,loaded:s.loaded+r})})),Zt(hu),Zt(r=>({name:n.name,size:n.size,key:e.key,lastModified:n.lastModified,serverData:r.serverData,get url(){return zc("`file.url` is deprecated and will be removed in uploadthing v9. Use `file.ufsUrl` instead."),r.url},get appUrl(){return zc("`file.appUrl` is deprecated and will be removed in uploadthing v9. Use `file.ufsUrl` instead."),r.appUrl},ufsUrl:r.ufsUrl,customId:e.customId,type:n.type,fileHash:r.fileHash}))),ym=(n,e)=>{const t=Wu(),r=Ku({endpoint:String(n),package:e.package,url:e.url,headers:e.headers,traceHeaders:t}),s=e.files.reduce((a,u)=>a+u.size,0);let o=0;return Le(r("upload",{input:"input"in e?e.input:null,files:e.files.map(a=>({name:a.name,size:a.size,type:a.type,lastModified:a.lastModified}))}),a=>Xp(a,(u,h)=>Le(qo(()=>e.onUploadBegin?.({file:e.files[h].name})),()=>Ju(e.files[h],u,{traceHeaders:t,onUploadProgress:d=>{o+=d.delta,e.onUploadProgress?.({file:e.files[h],progress:d.loaded/e.files[h].size*100,loaded:d.loaded,delta:d.delta,totalLoaded:o,totalProgress:o/s})}})),{concurrency:6}))},vm=n=>{const e=um();return{uploadFiles:(s,o)=>{const a=typeof s=="function"?s(e):s,u=n?.fetch??window.fetch;return ym(a,{...o,skipPolling:{},url:$c(n?.url),package:n?.package,input:o.input}).pipe(zi(Ts,u),h=>Is(h,o.signal&&{signal:o.signal})).then(h=>{if(h._tag==="Success")return h.value;throw h.cause._tag==="Interrupt"?new Bc:qi(h.cause)})},createUpload:async(s,o)=>{const a=new Map,u=typeof s=="function"?s(e):s,h=Wu(),d=Ku({endpoint:String(u),package:n?.package,url:$c(n?.url),headers:o.headers,traceHeaders:h}),_=n?.fetch??window.fetch,T=await em(d("upload",{input:"input"in o?o.input:null,files:o.files.map(F=>({name:F.name,size:F.size,type:F.type,lastModified:F.lastModified}))}).pipe(zi(Ts,_))),P=o.files.reduce((F,J)=>F+J.size,0);let k=0;const D=(F,J)=>Ju(F,J,{traceHeaders:h,onUploadProgress:z=>{k+=z.delta,o.onUploadProgress?.({...z,file:F,progress:Math.round(z.loaded/F.size*100),totalLoaded:k,totalProgress:Math.round(k/P*100)})}}).pipe(zi(Ts,_));for(const[F,J]of T.entries()){const z=o.files[F];if(!z)continue;const j=mm();a.set(z,{deferred:j,presigned:J}),Is(D(z,J),{signal:j.ac.signal}).then(H=>{if(H._tag==="Success")return j.resolve(H.value);throw H.cause._tag==="Interrupt"?new hs:qi(H.cause)}).catch(H=>{H instanceof hs||j.reject(H)})}return{pauseUpload:F=>{const J=Bi(F??o.files);for(const z of J){const j=a.get(z);if(!j)return;if(j.deferred.ac.signal.aborted)throw new Bc;j.deferred.ac.abort()}},resumeUpload:F=>{const J=Bi(F??o.files);for(const z of J){const j=a.get(z);if(!j)throw"No upload found";j.deferred.ac=new AbortController,Is(D(z,j.presigned),{signal:j.deferred.ac.signal}).then(H=>{if(H._tag==="Success")return j.deferred.resolve(H.value);throw H.cause._tag==="Interrupt"?new hs:qi(H.cause)}).catch(H=>{H instanceof hs||j.deferred.reject(H)})}},done:async F=>{const J=[],z=Bi(F??o.files);for(const H of z){const E=a.get(H);if(!E)throw"No upload found";J.push(E.deferred.promise)}const j=await Promise.all(J);return F?j[0]:j}}},routeRegistry:e}},Em="Copa Salvadoreña de Programación 2026",Im=[{value:"instagram",label:"Instagram"},{value:"linkedin",label:"LinkedIn"},{value:"c3",label:"C3"},{value:"esen",label:"ESEN"},{value:"omegaup",label:"OmegaUp"},{value:"profesor",label:"Profesor / docente"},{value:"amigo_companero",label:"Amigo o compañero"},{value:"institucion",label:"Institución educativa"},{value:"otro",label:"Otro"}],Tm=[{value:"docente",label:"Docente"},{value:"coordinador_academico",label:"Coordinador académico"},{value:"director",label:"Director"},{value:"encargado_institucional",label:"Encargado institucional"},{value:"mentor",label:"Mentor"},{value:"otro",label:"Otro"}];function ut(...n){return n.filter(Boolean).join(" ")}function ws(n,e){return`${n?.trim()??""} ${e?.trim()??""}`.trim()}function wm(n,e){const t=n.members.map(o=>ws(o.firstName,o.lastName)),r=[n.teamOmegaUpUser.trim()].filter(Boolean),s={studentIds:n.members.map(o=>({memberId:o.id,fileName:o.studentIdFile?.fileName??"",fileUrl:o.studentIdFile?.fileUrl??"",provider:o.studentIdFile?.provider??"uploadthing"})),imageConsents:n.category==="colegios"?(n.schoolImageConsentFiles??[]).map(o=>({fileName:o.fileName,fileUrl:o.fileUrl,provider:o.provider})):[]};return{to:[n.contactEmail,n.category==="colegios"?n.responsible.email:void 0,...n.members.map(o=>o.email)].filter(Boolean),subject:`${Em} - Inscripcion recibida (${n.teamName})`,registrationId:e,teamName:n.teamName,category:n.category,institution:n.institution,members:t,omegaUpUsers:r,responsible:n.category==="colegios"?{firstName:n.responsible.firstName,lastName:n.responsible.lastName,email:n.responsible.email,phone:n.responsible.phone,role:n.responsible.role}:null,status:"recibida",documentsSummary:s,nextSteps:"Tu inscripcion fue recibida. El comite de la Copa revisara documentos y contactara al responsable con los siguientes pasos."}}const bm=()=>{};var Hc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Am=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],a=n[t++],u=n[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},Yu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,_=o>>2,T=(o&3)<<4|u>>4;let P=(u&15)<<2|d>>6,k=d&63;h||(k=64,a||(P=64)),r.push(t[_],t[T],t[P],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Qu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Am(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const T=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new Sm;const P=o<<2|u>>4;if(r.push(P),d!==64){const k=u<<4&240|d>>2;if(r.push(k),T!==64){const D=d<<6&192|T;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Sm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rm=function(n){const e=Qu(n);return Yu.encodeByteArray(e,!0)},Us=function(n){return Rm(n).replace(/\./g,"")},Xu=function(n){try{return Yu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=()=>Cm().__FIREBASE_DEFAULTS__,Nm=()=>{if(typeof process>"u"||typeof Hc>"u")return;const n=Hc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},xm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xu(n[1]);return e&&JSON.parse(e)},ci=()=>{try{return bm()||Pm()||Nm()||xm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zu=n=>ci()?.emulatorHosts?.[n],km=n=>{const e=Zu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},eh=()=>ci()?.config,th=n=>ci()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Us(JSON.stringify(t)),Us(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function Mm(){const n=ci()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jm(){const n=Pe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bm(){return!Mm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $m(){try{return typeof indexedDB=="object"}catch{return!1}}function qm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="FirebaseError";class mt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zm,Object.setPrototypeOf(this,mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mr.prototype.create)}}class Mr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Hm(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new mt(s,u,r)}}function Hm(n,e){return n.replace(Gm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Gm=/\{\$([^}]+)}/g;function Wm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const o=n[s],a=e[s];if(Gc(o)&&Gc(a)){if(!rn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Gc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Km(n,e){const t=new Jm(n,e);return t.subscribe.bind(t)}class Jm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Qm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Gi),s.error===void 0&&(s.error=Gi),s.complete===void 0&&(s.complete=Gi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Gi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function nh(n){return(await fetch(n,{credentials:"include"})).ok}class sn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Om;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zm(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xm(n){return n===Jt?void 0:n}function Zm(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ym(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const tg={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},ng=Q.INFO,rg={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},sg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=rg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yo{constructor(e){this.name=e,this._logLevel=ng,this._logHandler=sg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const ig=(n,e)=>e.some(t=>n instanceof t);let Wc,Kc;function og(){return Wc||(Wc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ag(){return Kc||(Kc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rh=new WeakMap,uo=new WeakMap,sh=new WeakMap,Wi=new WeakMap,Xo=new WeakMap;function cg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Nt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&rh.set(t,n)}).catch(()=>{}),Xo.set(e,n),e}function lg(n){if(uo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});uo.set(n,e)}let ho={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||sh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ug(n){ho=n(ho)}function hg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ki(this),e,...t);return sh.set(r,e.sort?e.sort():[e]),Nt(r)}:ag().includes(n)?function(...e){return n.apply(Ki(this),e),Nt(rh.get(this))}:function(...e){return Nt(n.apply(Ki(this),e))}}function dg(n){return typeof n=="function"?hg(n):(n instanceof IDBTransaction&&lg(n),ig(n,og())?new Proxy(n,ho):n)}function Nt(n){if(n instanceof IDBRequest)return cg(n);if(Wi.has(n))return Wi.get(n);const e=dg(n);return e!==n&&(Wi.set(n,e),Xo.set(e,n)),e}const Ki=n=>Xo.get(n);function fg(n,e,{blocked:t,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,e),u=Nt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Nt(a.result),h.oldVersion,h.newVersion,Nt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const pg=["get","getKey","getAll","getAllKeys","count"],mg=["put","add","delete","clear"],Ji=new Map;function Jc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ji.get(e))return Ji.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pg.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return Ji.set(e,o),o}ug(n=>({...n,get:(e,t,r)=>Jc(e,t)||n.get(e,t,r),has:(e,t)=>!!Jc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_g(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _g(n){return n.getComponent()?.type==="VERSION"}const fo="@firebase/app",Qc="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Yo("@firebase/app"),yg="@firebase/app-compat",vg="@firebase/analytics-compat",Eg="@firebase/analytics",Ig="@firebase/app-check-compat",Tg="@firebase/app-check",wg="@firebase/auth",bg="@firebase/auth-compat",Ag="@firebase/database",Sg="@firebase/data-connect",Rg="@firebase/database-compat",Cg="@firebase/functions",Pg="@firebase/functions-compat",Ng="@firebase/installations",xg="@firebase/installations-compat",kg="@firebase/messaging",Og="@firebase/messaging-compat",Dg="@firebase/performance",Vg="@firebase/performance-compat",Mg="@firebase/remote-config",Lg="@firebase/remote-config-compat",Fg="@firebase/storage",Ug="@firebase/storage-compat",jg="@firebase/firestore",Bg="@firebase/ai",$g="@firebase/firestore-compat",qg="firebase",zg="12.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po="[DEFAULT]",Hg={[fo]:"fire-core",[yg]:"fire-core-compat",[Eg]:"fire-analytics",[vg]:"fire-analytics-compat",[Tg]:"fire-app-check",[Ig]:"fire-app-check-compat",[wg]:"fire-auth",[bg]:"fire-auth-compat",[Ag]:"fire-rtdb",[Sg]:"fire-data-connect",[Rg]:"fire-rtdb-compat",[Cg]:"fire-fn",[Pg]:"fire-fn-compat",[Ng]:"fire-iid",[xg]:"fire-iid-compat",[kg]:"fire-fcm",[Og]:"fire-fcm-compat",[Dg]:"fire-perf",[Vg]:"fire-perf-compat",[Mg]:"fire-rc",[Lg]:"fire-rc-compat",[Fg]:"fire-gcs",[Ug]:"fire-gcs-compat",[jg]:"fire-fst",[$g]:"fire-fst-compat",[Bg]:"fire-vertex","fire-js":"fire-js",[qg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Map,Gg=new Map,mo=new Map;function Yc(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kn(n){const e=n.name;if(mo.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;mo.set(e,n);for(const t of wr.values())Yc(t,n);for(const t of Gg.values())Yc(t,n);return!0}function Zo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xt=new Mr("app","Firebase",Wg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=zg;function ih(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:po,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw xt.create("bad-app-name",{appName:String(s)});if(t||(t=eh()),!t)throw xt.create("no-options");const o=wr.get(s);if(o){if(rn(t,o.options)&&rn(r,o.config))return o;throw xt.create("duplicate-app",{appName:s})}const a=new eg(s);for(const h of mo.values())a.addComponent(h);const u=new Kg(t,r,a);return wr.set(s,u),u}function ea(n=po){const e=wr.get(n);if(!e&&n===po&&eh())return ih();if(!e)throw xt.create("no-app",{appName:n});return e}function Jg(){return Array.from(wr.values())}function kt(n,e,t){let r=Hg[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(a.join(" "));return}kn(new sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="firebase-heartbeat-database",Yg=1,br="firebase-heartbeat-store";let Qi=null;function oh(){return Qi||(Qi=fg(Qg,Yg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(br)}catch(t){console.warn(t)}}}}).catch(n=>{throw xt.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function Xg(n){try{const t=(await oh()).transaction(br),r=await t.objectStore(br).get(ah(n));return await t.done,r}catch(e){if(e instanceof mt)ht.warn(e.message);else{const t=xt.create("idb-get",{originalErrorMessage:e?.message});ht.warn(t.message)}}}async function Xc(n,e){try{const r=(await oh()).transaction(br,"readwrite");await r.objectStore(br).put(e,ah(n)),await r.done}catch(t){if(t instanceof mt)ht.warn(t.message);else{const r=xt.create("idb-set",{originalErrorMessage:t?.message});ht.warn(r.message)}}}function ah(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=1024,e_=30;class t_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new r_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Zc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>e_){const s=s_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){ht.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Zc(),{heartbeatsToSend:t,unsentEntries:r}=n_(this._heartbeatsCache.heartbeats),s=Us(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return ht.warn(e),""}}}function Zc(){return new Date().toISOString().substring(0,10)}function n_(n,e=Zg){const t=[];let r=n.slice();for(const s of n){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),el(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),el(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class r_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $m()?qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xg(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Xc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function el(n){return Us(JSON.stringify({version:2,heartbeats:n})).length}function s_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){kn(new sn("platform-logger",e=>new gg(e),"PRIVATE")),kn(new sn("heartbeat",e=>new t_(e),"PRIVATE")),kt(fo,Qc,n),kt(fo,Qc,"esm2020"),kt("fire-js","")}i_("");var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function y(){}y.prototype=g.prototype,E.F=g.prototype,E.prototype=new y,E.prototype.constructor=E,E.D=function(I,v,w){for(var m=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)m[Ae-2]=arguments[Ae];return g.prototype[v].apply(I,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,g,y){y||(y=0);const I=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)I[v]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(v=0;v<16;++v)I[v]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=E.g[0],y=E.g[1],v=E.g[2];let w=E.g[3],m;m=g+(w^y&(v^w))+I[0]+3614090360&4294967295,g=y+(m<<7&4294967295|m>>>25),m=w+(v^g&(y^v))+I[1]+3905402710&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(y^w&(g^y))+I[2]+606105819&4294967295,v=w+(m<<17&4294967295|m>>>15),m=y+(g^v&(w^g))+I[3]+3250441966&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(w^y&(v^w))+I[4]+4118548399&4294967295,g=y+(m<<7&4294967295|m>>>25),m=w+(v^g&(y^v))+I[5]+1200080426&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(y^w&(g^y))+I[6]+2821735955&4294967295,v=w+(m<<17&4294967295|m>>>15),m=y+(g^v&(w^g))+I[7]+4249261313&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(w^y&(v^w))+I[8]+1770035416&4294967295,g=y+(m<<7&4294967295|m>>>25),m=w+(v^g&(y^v))+I[9]+2336552879&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(y^w&(g^y))+I[10]+4294925233&4294967295,v=w+(m<<17&4294967295|m>>>15),m=y+(g^v&(w^g))+I[11]+2304563134&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(w^y&(v^w))+I[12]+1804603682&4294967295,g=y+(m<<7&4294967295|m>>>25),m=w+(v^g&(y^v))+I[13]+4254626195&4294967295,w=g+(m<<12&4294967295|m>>>20),m=v+(y^w&(g^y))+I[14]+2792965006&4294967295,v=w+(m<<17&4294967295|m>>>15),m=y+(g^v&(w^g))+I[15]+1236535329&4294967295,y=v+(m<<22&4294967295|m>>>10),m=g+(v^w&(y^v))+I[1]+4129170786&4294967295,g=y+(m<<5&4294967295|m>>>27),m=w+(y^v&(g^y))+I[6]+3225465664&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(w^g))+I[11]+643717713&4294967295,v=w+(m<<14&4294967295|m>>>18),m=y+(w^g&(v^w))+I[0]+3921069994&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(v^w&(y^v))+I[5]+3593408605&4294967295,g=y+(m<<5&4294967295|m>>>27),m=w+(y^v&(g^y))+I[10]+38016083&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(w^g))+I[15]+3634488961&4294967295,v=w+(m<<14&4294967295|m>>>18),m=y+(w^g&(v^w))+I[4]+3889429448&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(v^w&(y^v))+I[9]+568446438&4294967295,g=y+(m<<5&4294967295|m>>>27),m=w+(y^v&(g^y))+I[14]+3275163606&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(w^g))+I[3]+4107603335&4294967295,v=w+(m<<14&4294967295|m>>>18),m=y+(w^g&(v^w))+I[8]+1163531501&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(v^w&(y^v))+I[13]+2850285829&4294967295,g=y+(m<<5&4294967295|m>>>27),m=w+(y^v&(g^y))+I[2]+4243563512&4294967295,w=g+(m<<9&4294967295|m>>>23),m=v+(g^y&(w^g))+I[7]+1735328473&4294967295,v=w+(m<<14&4294967295|m>>>18),m=y+(w^g&(v^w))+I[12]+2368359562&4294967295,y=v+(m<<20&4294967295|m>>>12),m=g+(y^v^w)+I[5]+4294588738&4294967295,g=y+(m<<4&4294967295|m>>>28),m=w+(g^y^v)+I[8]+2272392833&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^y)+I[11]+1839030562&4294967295,v=w+(m<<16&4294967295|m>>>16),m=y+(v^w^g)+I[14]+4259657740&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(y^v^w)+I[1]+2763975236&4294967295,g=y+(m<<4&4294967295|m>>>28),m=w+(g^y^v)+I[4]+1272893353&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^y)+I[7]+4139469664&4294967295,v=w+(m<<16&4294967295|m>>>16),m=y+(v^w^g)+I[10]+3200236656&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(y^v^w)+I[13]+681279174&4294967295,g=y+(m<<4&4294967295|m>>>28),m=w+(g^y^v)+I[0]+3936430074&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^y)+I[3]+3572445317&4294967295,v=w+(m<<16&4294967295|m>>>16),m=y+(v^w^g)+I[6]+76029189&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(y^v^w)+I[9]+3654602809&4294967295,g=y+(m<<4&4294967295|m>>>28),m=w+(g^y^v)+I[12]+3873151461&4294967295,w=g+(m<<11&4294967295|m>>>21),m=v+(w^g^y)+I[15]+530742520&4294967295,v=w+(m<<16&4294967295|m>>>16),m=y+(v^w^g)+I[2]+3299628645&4294967295,y=v+(m<<23&4294967295|m>>>9),m=g+(v^(y|~w))+I[0]+4096336452&4294967295,g=y+(m<<6&4294967295|m>>>26),m=w+(y^(g|~v))+I[7]+1126891415&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~y))+I[14]+2878612391&4294967295,v=w+(m<<15&4294967295|m>>>17),m=y+(w^(v|~g))+I[5]+4237533241&4294967295,y=v+(m<<21&4294967295|m>>>11),m=g+(v^(y|~w))+I[12]+1700485571&4294967295,g=y+(m<<6&4294967295|m>>>26),m=w+(y^(g|~v))+I[3]+2399980690&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~y))+I[10]+4293915773&4294967295,v=w+(m<<15&4294967295|m>>>17),m=y+(w^(v|~g))+I[1]+2240044497&4294967295,y=v+(m<<21&4294967295|m>>>11),m=g+(v^(y|~w))+I[8]+1873313359&4294967295,g=y+(m<<6&4294967295|m>>>26),m=w+(y^(g|~v))+I[15]+4264355552&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~y))+I[6]+2734768916&4294967295,v=w+(m<<15&4294967295|m>>>17),m=y+(w^(v|~g))+I[13]+1309151649&4294967295,y=v+(m<<21&4294967295|m>>>11),m=g+(v^(y|~w))+I[4]+4149444226&4294967295,g=y+(m<<6&4294967295|m>>>26),m=w+(y^(g|~v))+I[11]+3174756917&4294967295,w=g+(m<<10&4294967295|m>>>22),m=v+(g^(w|~y))+I[2]+718787259&4294967295,v=w+(m<<15&4294967295|m>>>17),m=y+(w^(v|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,E.g[2]=E.g[2]+v&4294967295,E.g[3]=E.g[3]+w&4294967295}r.prototype.v=function(E,g){g===void 0&&(g=E.length);const y=g-this.blockSize,I=this.C;let v=this.h,w=0;for(;w<g;){if(v==0)for(;w<=y;)s(this,E,w),w+=this.blockSize;if(typeof E=="string"){for(;w<g;)if(I[v++]=E.charCodeAt(w++),v==this.blockSize){s(this,I),v=0;break}}else for(;w<g;)if(I[v++]=E[w++],v==this.blockSize){s(this,I),v=0;break}}this.h=v,this.o+=g},r.prototype.A=function(){var E=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;g=this.o*8;for(var y=E.length-8;y<E.length;++y)E[y]=g&255,g/=256;for(this.v(E),E=Array(16),g=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)E[g++]=this.g[y]>>>I&255;return E};function o(E,g){var y=u;return Object.prototype.hasOwnProperty.call(y,E)?y[E]:y[E]=g(E)}function a(E,g){this.h=g;const y=[];let I=!0;for(let v=E.length-1;v>=0;v--){const w=E[v]|0;I&&w==g||(y[v]=w,I=!1)}this.g=y}var u={};function h(E){return-128<=E&&E<128?o(E,function(g){return new a([g|0],g<0?-1:0)}):new a([E|0],E<0?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return T;if(E<0)return U(d(-E));const g=[];let y=1;for(let I=0;E>=y;I++)g[I]=E/y|0,y*=4294967296;return new a(g,0)}function _(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return U(_(E.substring(1),g));if(E.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(g,8));let I=T;for(let w=0;w<E.length;w+=8){var v=Math.min(8,E.length-w);const m=parseInt(E.substring(w,w+v),g);v<8?(v=d(Math.pow(g,v)),I=I.j(v).add(d(m))):(I=I.j(y),I=I.add(d(m)))}return I}var T=h(0),P=h(1),k=h(16777216);n=a.prototype,n.m=function(){if($(this))return-U(this).m();let E=0,g=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);E+=(I>=0?I:4294967296+I)*g,g*=4294967296}return E},n.toString=function(E){if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if($(this))return"-"+U(this).toString(E);const g=d(Math.pow(E,6));var y=this;let I="";for(;;){const v=z(y,g).g;y=q(y,v.j(g));let w=((y.g.length>0?y.g[0]:y.h)>>>0).toString(E);if(y=v,D(y))return w+I;for(;w.length<6;)w="0"+w;I=w+I}},n.i=function(E){return E<0?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(let g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function $(E){return E.h==-1}n.l=function(E){return E=q(this,E),$(E)?-1:D(E)?0:1};function U(E){const g=E.g.length,y=[];for(let I=0;I<g;I++)y[I]=~E.g[I];return new a(y,~E.h).add(P)}n.abs=function(){return $(this)?U(this):this},n.add=function(E){const g=Math.max(this.g.length,E.g.length),y=[];let I=0;for(let v=0;v<=g;v++){let w=I+(this.i(v)&65535)+(E.i(v)&65535),m=(w>>>16)+(this.i(v)>>>16)+(E.i(v)>>>16);I=m>>>16,w&=65535,m&=65535,y[v]=m<<16|w}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(E,g){return E.add(U(g))}n.j=function(E){if(D(this)||D(E))return T;if($(this))return $(E)?U(this).j(U(E)):U(U(this).j(E));if($(E))return U(this.j(U(E)));if(this.l(k)<0&&E.l(k)<0)return d(this.m()*E.m());const g=this.g.length+E.g.length,y=[];for(var I=0;I<2*g;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let v=0;v<E.g.length;v++){const w=this.i(I)>>>16,m=this.i(I)&65535,Ae=E.i(v)>>>16,st=E.i(v)&65535;y[2*I+2*v]+=m*st,F(y,2*I+2*v),y[2*I+2*v+1]+=w*st,F(y,2*I+2*v+1),y[2*I+2*v+1]+=m*Ae,F(y,2*I+2*v+1),y[2*I+2*v+2]+=w*Ae,F(y,2*I+2*v+2)}for(E=0;E<g;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=g;E<2*g;E++)y[E]=0;return new a(y,0)};function F(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function J(E,g){this.g=E,this.h=g}function z(E,g){if(D(g))throw Error("division by zero");if(D(E))return new J(T,T);if($(E))return g=z(U(E),g),new J(U(g.g),U(g.h));if($(g))return g=z(E,U(g)),new J(U(g.g),g.h);if(E.g.length>30){if($(E)||$(g))throw Error("slowDivide_ only works with positive integers.");for(var y=P,I=g;I.l(E)<=0;)y=j(y),I=j(I);var v=H(y,1),w=H(I,1);for(I=H(I,2),y=H(y,2);!D(I);){var m=w.add(I);m.l(E)<=0&&(v=v.add(y),w=m),I=H(I,1),y=H(y,1)}return g=q(E,v.j(g)),new J(v,g)}for(v=T;E.l(g)>=0;){for(y=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),w=d(y),m=w.j(g);$(m)||m.l(E)>0;)y-=I,w=d(y),m=w.j(g);D(w)&&(w=P),v=v.add(w),E=q(E,m)}return new J(v,E)}n.B=function(E){return z(this,E).h},n.and=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)&E.i(I);return new a(y,this.h&E.h)},n.or=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)|E.i(I);return new a(y,this.h|E.h)},n.xor=function(E){const g=Math.max(this.g.length,E.g.length),y=[];for(let I=0;I<g;I++)y[I]=this.i(I)^E.i(I);return new a(y,this.h^E.h)};function j(E){const g=E.g.length+1,y=[];for(let I=0;I<g;I++)y[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(y,E.h)}function H(E,g){const y=g>>5;g%=32;const I=E.g.length-y,v=[];for(let w=0;w<I;w++)v[w]=g>0?E.i(w+y)>>>g|E.i(w+y+1)<<32-g:E.i(w+y);return new a(v,E.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=_,ta=a}).apply(typeof tl<"u"?tl:typeof self<"u"?self:typeof window<"u"?window:{});var ds=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ch,pr,lh,bs,go,uh,hh,dh;(function(){var n,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof ds=="object"&&ds];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function s(i,c){if(c)e:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in l))break e;l=l[b]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function _(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function T(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,b,S){for(var x=Array(arguments.length-2),W=2;W<arguments.length;W++)x[W-2]=arguments[W];return c.prototype[b].apply(f,x)}}var P=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function k(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function D(i,c){for(let f=1;f<arguments.length;f++){const b=arguments[f];var l=typeof b;if(l=l!="object"?l:b?Array.isArray(b)?"array":l:"null",l=="array"||l=="object"&&typeof b.length=="number"){l=i.length||0;const S=b.length||0;i.length=l+S;for(let x=0;x<S;x++)i[l+x]=b[x]}else i.push(b)}}class ${constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(i){a.setTimeout(()=>{throw i},0)}function q(){var i=E;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class F{constructor(){this.h=this.g=null}add(c,l){const f=J.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var J=new $(()=>new z,i=>i.reset());class z{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let j,H=!1,E=new F,g=()=>{const i=Promise.resolve(void 0);j=()=>{i.then(y)}};function y(){for(var i;i=q();){try{i.h.call(i.g)}catch(l){U(l)}var c=J;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}H=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var w=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i})();function m(i){return/^[\s\xa0]*$/.test(i)}function Ae(i,c){v.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}T(Ae,v),Ae.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Ae.Z.h.call(this)},Ae.prototype.h=function(){Ae.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var st="closure_listenable_"+(Math.random()*1e6|0),We=0;function Kr(i,c,l,f,b){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=b,this.key=++We,this.da=this.fa=!1}function $t(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function X(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function vi(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function fn(i){const c={};for(const l in i)c[l]=i[l];return c}const qt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ee(i,c){let l,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(l in f)i[l]=f[l];for(let S=0;S<qt.length;S++)l=qt[S],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function Fe(i){this.src=i,this.g={},this.h=0}Fe.prototype.add=function(i,c,l,f,b){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const x=qn(i,c,f,b);return x>-1?(c=i[x],l||(c.fa=!1)):(c=new Kr(c,this.src,S,!!f,b),c.fa=l,i.push(c)),c};function Ne(i,c){const l=c.type;if(l in i.g){var f=i.g[l],b=Array.prototype.indexOf.call(f,c,void 0),S;(S=b>=0)&&Array.prototype.splice.call(f,b,1),S&&($t(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function qn(i,c,l,f){for(let b=0;b<i.length;++b){const S=i[b];if(!S.da&&S.listener==c&&S.capture==!!l&&S.ha==f)return b}return-1}var zn="closure_lm_"+(Math.random()*1e6|0),Hn={};function Jr(i,c,l,f,b){if(Array.isArray(c)){for(let S=0;S<c.length;S++)Jr(i,c[S],l,f,b);return null}return l=O(l),i&&i[st]?i.J(c,l,u(f)?!!f.capture:!1,b):Ei(i,c,l,!1,f,b)}function Ei(i,c,l,f,b,S){if(!c)throw Error("Invalid event type");const x=u(b)?!!b.capture:!!b;let W=A(i);if(W||(i[zn]=W=new Fe(i)),l=W.add(c,l,f,x,S),l.proxy)return l;if(f=Ii(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)w||(b=x),b===void 0&&(b=!1),i.addEventListener(c.toString(),f,b);else if(i.attachEvent)i.attachEvent(Yr(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ii(){function i(l){return c.call(i.src,i.listener,l)}const c=Xr;return i}function Qr(i,c,l,f,b){if(Array.isArray(c))for(var S=0;S<c.length;S++)Qr(i,c[S],l,f,b);else f=u(f)?!!f.capture:!!f,l=O(l),i&&i[st]?(i=i.i,S=String(c).toString(),S in i.g&&(c=i.g[S],l=qn(c,l,f,b),l>-1&&($t(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[S],i.h--)))):i&&(i=A(i))&&(c=i.g[c.toString()],i=-1,c&&(i=qn(c,l,f,b)),(l=i>-1?c[i]:null)&&Gn(l))}function Gn(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[st])Ne(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Yr(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=A(c))?(Ne(l,i),l.h==0&&(l.src=null,c[zn]=null)):$t(i)}}}function Yr(i){return i in Hn?Hn[i]:Hn[i]="on"+i}function Xr(i,c){if(i.da)i=!0;else{c=new Ae(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Gn(i),i=l.call(f,c)}return i}function A(i){return i=i[zn],i instanceof Fe?i:null}var R="__closure_events_fn_"+(Math.random()*1e9>>>0);function O(i){return typeof i=="function"?i:(i[R]||(i[R]=function(c){return i.handleEvent(c)}),i[R])}function V(){I.call(this),this.i=new Fe(this),this.M=this,this.G=null}T(V,I),V.prototype[st]=!0,V.prototype.removeEventListener=function(i,c,l,f){Qr(this,i,c,l,f)};function ve(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new v(c,i);else if(c instanceof v)c.target=c.target||i;else{var b=c;c=new v(f,i),ee(c,b)}b=!0;let S,x;if(l)for(x=l.length-1;x>=0;x--)S=c.g=l[x],b=Oe(S,f,!0,c)&&b;if(S=c.g=i,b=Oe(S,f,!0,c)&&b,b=Oe(S,f,!1,c)&&b,l)for(x=0;x<l.length;x++)S=c.g=l[x],b=Oe(S,f,!1,c)&&b}V.prototype.N=function(){if(V.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)$t(l[f]);delete i.g[c],i.h--}}this.G=null},V.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},V.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Oe(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let b=!0;for(let S=0;S<c.length;++S){const x=c[S];if(x&&!x.da&&x.capture==l){const W=x.listener,me=x.ha||x.src;x.fa&&Ne(i.i,x),b=W.call(me,f)!==!1&&b}}return b&&!f.defaultPrevented}function Ke(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function Zr(i){i.g=Ke(()=>{i.g=null,i.i&&(i.i=!1,Zr(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Qd extends I{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Zr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wn(i){I.call(this),this.h=i,this.g={}}T(Wn,I);var Fa=[];function Ua(i){X(i.g,function(c,l){this.g.hasOwnProperty(l)&&Gn(c)},i),i.g={}}Wn.prototype.N=function(){Wn.Z.N.call(this),Ua(this)},Wn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ti=a.JSON.stringify,Yd=a.JSON.parse,Xd=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function ja(){}function Ba(){}var Kn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wi(){v.call(this,"d")}T(wi,v);function bi(){v.call(this,"c")}T(bi,v);var zt={},$a=null;function es(){return $a=$a||new V}zt.Ia="serverreachability";function qa(i){v.call(this,zt.Ia,i)}T(qa,v);function Jn(i){const c=es();ve(c,new qa(c))}zt.STAT_EVENT="statevent";function za(i,c){v.call(this,zt.STAT_EVENT,i),this.stat=c}T(za,v);function xe(i){const c=es();ve(c,new za(c,i))}zt.Ja="timingevent";function Ha(i,c){v.call(this,zt.Ja,i),this.size=c}T(Ha,v);function Qn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Yn(){this.g=!0}Yn.prototype.ua=function(){this.g=!1};function Zd(i,c,l,f,b,S){i.info(function(){if(i.g)if(S){var x="",W=S.split("&");for(let ne=0;ne<W.length;ne++){var me=W[ne].split("=");if(me.length>1){const ge=me[0];me=me[1];const Qe=ge.split("_");x=Qe.length>=2&&Qe[1]=="type"?x+(ge+"="+me+"&"):x+(ge+"=redacted&")}}}else x=null;else x=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+c+`
`+l+`
`+x})}function ef(i,c,l,f,b,S,x){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+c+`
`+l+`
`+S+" "+x})}function pn(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+nf(i,l)+(f?" "+f:"")})}function tf(i,c){i.info(function(){return"TIMEOUT: "+c})}Yn.prototype.info=function(){};function nf(i,c){if(!i.g)return c;if(!c)return null;try{const S=JSON.parse(c);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var l=S[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let x=1;x<f.length;x++)f[x]=""}}}}return Ti(S)}catch{return c}}var ts={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ga={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wa;function Ai(){}T(Ai,ja),Ai.prototype.g=function(){return new XMLHttpRequest},Wa=new Ai;function Xn(i){return encodeURIComponent(String(i))}function rf(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function gt(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new Wn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ka}function Ka(){this.i=null,this.g="",this.h=!1}var Ja={},Si={};function Ri(i,c,l){i.M=1,i.A=rs(Je(c)),i.u=l,i.R=!0,Qa(i,null)}function Qa(i,c){i.F=Date.now(),ns(i),i.B=Je(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),lc(l.i,"t",f),i.C=0,l=i.j.L,i.h=new Ka,i.g=Rc(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Qd(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var b="readystatechange";Array.isArray(b)||(b&&(Fa[0]=b.toString()),b=Fa);for(let S=0;S<b.length;S++){const x=Jr(l,b[S],f||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=i.J?fn(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Jn(),Zd(i.i,i.v,i.B,i.l,i.S,i.u)}gt.prototype.ba=function(i){i=i.target;const c=this.O;c&&vt(i)==3?c.j():this.Y(i)},gt.prototype.Y=function(i){try{if(i==this.g)e:{const W=vt(this.g),me=this.g.ya(),ne=this.g.ca();if(!(W<3)&&(W!=3||this.g&&(this.h.h||this.g.la()||gc(this.g)))){this.K||W!=4||me==7||(me==8||ne<=0?Jn(3):Jn(2)),Ci(this);var c=this.g.ca();this.X=c;var l=sf(this);if(this.o=c==200,ef(this.i,this.v,this.B,this.l,this.S,W,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var S=f;break t}}S=null}if(i=S)pn(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Pi(this,i);else{this.o=!1,this.m=3,xe(12),Ht(this),Zn(this);break e}}if(this.R){i=!0;let ge;for(;!this.K&&this.C<l.length;)if(ge=of(this,l),ge==Si){W==4&&(this.m=4,xe(14),i=!1),pn(this.i,this.l,null,"[Incomplete Response]");break}else if(ge==Ja){this.m=4,xe(15),pn(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else pn(this.i,this.l,ge,null),Pi(this,ge);if(Ya(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),W!=4||l.length!=0||this.h.h||(this.m=1,xe(16),i=!1),this.o=this.o&&i,!i)pn(this.i,this.l,l,"[Invalid Chunked Response]"),Ht(this),Zn(this);else if(l.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Li(x),x.P=!0,xe(11))}}else pn(this.i,this.l,l,null),Pi(this,l);W==4&&Ht(this),this.o&&!this.K&&(W==4?wc(this.j,this):(this.o=!1,ns(this)))}else Ef(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,xe(12)):(this.m=0,xe(13)),Ht(this),Zn(this)}}}catch{}finally{}};function sf(i){if(!Ya(i))return i.g.la();const c=gc(i.g);if(c==="")return"";let l="";const f=c.length,b=vt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ht(i),Zn(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,l+=i.h.i.decode(c[S],{stream:!(b&&S==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function Ya(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function of(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Si:(l=Number(c.substring(l,f)),isNaN(l)?Ja:(f+=1,f+l>c.length?Si:(c=c.slice(f,f+l),i.C=f+l,c)))}gt.prototype.cancel=function(){this.K=!0,Ht(this)};function ns(i){i.T=Date.now()+i.H,Xa(i,i.H)}function Xa(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Qn(d(i.aa,i),c)}function Ci(i){i.D&&(a.clearTimeout(i.D),i.D=null)}gt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(tf(this.i,this.B),this.M!=2&&(Jn(),xe(17)),Ht(this),this.m=2,Zn(this)):Xa(this,this.T-i)};function Zn(i){i.j.I==0||i.K||wc(i.j,i)}function Ht(i){Ci(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Ua(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Pi(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||Ni(l.h,i))){if(!i.L&&Ni(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)cs(l),os(l);else break e;Mi(l),xe(18)}}else l.xa=b[1],0<l.xa-l.K&&b[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Qn(d(l.Va,l),6e3));tc(l.h)<=1&&l.ta&&(l.ta=void 0)}else Wt(l,11)}else if((i.L||l.g==i)&&cs(l),!m(c))for(b=l.Ba.g.parse(c),c=0;c<b.length;c++){let ne=b[c];const ge=ne[0];if(!(ge<=l.K))if(l.K=ge,ne=ne[1],l.I==2)if(ne[0]=="c"){l.M=ne[1],l.ba=ne[2];const Qe=ne[3];Qe!=null&&(l.ka=Qe,l.j.info("VER="+l.ka));const Kt=ne[4];Kt!=null&&(l.za=Kt,l.j.info("SVER="+l.za));const Et=ne[5];Et!=null&&typeof Et=="number"&&Et>0&&(f=1.5*Et,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const It=i.g;if(It){const us=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(us){var S=f.h;S.g||us.indexOf("spdy")==-1&&us.indexOf("quic")==-1&&us.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(xi(S,S.h),S.h=null))}if(f.G){const Fi=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Fi&&(f.wa=Fi,ie(f.J,f.G,Fi))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var x=i;if(f.na=Sc(f,f.L?f.ba:null,f.W),x.L){nc(f.h,x);var W=x,me=f.O;me&&(W.H=me),W.D&&(Ci(W),ns(W)),f.g=x}else Ic(f);l.i.length>0&&as(l)}else ne[0]!="stop"&&ne[0]!="close"||Wt(l,7);else l.I==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?Wt(l,7):Vi(l):ne[0]!="noop"&&l.l&&l.l.qa(ne),l.A=0)}}Jn(4)}catch{}}var af=class{constructor(i,c){this.g=i,this.map=c}};function Za(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ec(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function tc(i){return i.h?1:i.g?i.g.size:0}function Ni(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function xi(i,c){i.g?i.g.add(c):i.h=c}function nc(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Za.prototype.cancel=function(){if(this.i=rc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function rc(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return k(i.i)}var sc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let b,S=null;f>=0?(b=i[l].substring(0,f),S=i[l].substring(f+1)):b=i[l],c(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function _t(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof _t?(this.l=i.l,er(this,i.j),this.o=i.o,this.g=i.g,tr(this,i.u),this.h=i.h,ki(this,uc(i.i)),this.m=i.m):i&&(c=String(i).match(sc))?(this.l=!1,er(this,c[1]||"",!0),this.o=nr(c[2]||""),this.g=nr(c[3]||"",!0),tr(this,c[4]),this.h=nr(c[5]||"",!0),ki(this,c[6]||"",!0),this.m=nr(c[7]||"")):(this.l=!1,this.i=new sr(null,this.l))}_t.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(rr(c,ic,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(rr(c,ic,!0),"@"),i.push(Xn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(rr(l,l.charAt(0)=="/"?hf:uf,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",rr(l,ff)),i.join("")},_t.prototype.resolve=function(i){const c=Je(this);let l=!!i.j;l?er(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)tr(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=c.h.lastIndexOf("/");b!=-1&&(f=c.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let x=0;x<b.length;){const W=b[x++];W=="."?f&&x==b.length&&S.push(""):W==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&x==b.length&&S.push("")):(S.push(W),f=!0)}f=S.join("/")}else f=b}return l?c.h=f:l=i.i.toString()!=="",l?ki(c,uc(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Je(i){return new _t(i)}function er(i,c,l){i.j=l?nr(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function tr(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function ki(i,c,l){c instanceof sr?(i.i=c,pf(i.i,i.l)):(l||(c=rr(c,df)),i.i=new sr(c,i.l))}function ie(i,c,l){i.i.set(c,l)}function rs(i){return ie(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function nr(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function rr(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,lf),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lf(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var ic=/[#\/\?@]/g,uf=/[#\?:]/g,hf=/[#\?]/g,df=/[#\?@]/g,ff=/#/g;function sr(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Gt(i){i.g||(i.g=new Map,i.h=0,i.i&&cf(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=sr.prototype,n.add=function(i,c){Gt(this),this.i=null,i=mn(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function oc(i,c){Gt(i),c=mn(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function ac(i,c){return Gt(i),c=mn(i,c),i.g.has(c)}n.forEach=function(i,c){Gt(this),this.g.forEach(function(l,f){l.forEach(function(b){i.call(c,b,f,this)},this)},this)};function cc(i,c){Gt(i);let l=[];if(typeof c=="string")ac(i,c)&&(l=l.concat(i.g.get(mn(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return Gt(this),this.i=null,i=mn(this,i),ac(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=cc(this,i),i.length>0?String(i[0]):c):c};function lc(i,c,l){oc(i,c),l.length>0&&(i.i=null,i.g.set(mn(i,c),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const b=Xn(l);l=cc(this,l);for(let S=0;S<l.length;S++){let x=b;l[S]!==""&&(x+="="+Xn(l[S])),i.push(x)}}return this.i=i.join("&")};function uc(i){const c=new sr;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function mn(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function pf(i,c){c&&!i.j&&(Gt(i),i.i=null,i.g.forEach(function(l,f){const b=f.toLowerCase();f!=b&&(oc(this,f),lc(this,b,l))},i)),i.j=c}function mf(i,c){const l=new Yn;if(a.Image){const f=new Image;f.onload=_(yt,l,"TestLoadImage: loaded",!0,c,f),f.onerror=_(yt,l,"TestLoadImage: error",!1,c,f),f.onabort=_(yt,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=_(yt,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function gf(i,c){const l=new Yn,f=new AbortController,b=setTimeout(()=>{f.abort(),yt(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?yt(l,"TestPingServer: ok",!0,c):yt(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(b),yt(l,"TestPingServer: error",!1,c)})}function yt(i,c,l,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(l)}catch{}}function _f(){this.g=new Xd}function Oi(i){this.i=i.Sb||null,this.h=i.ab||!1}T(Oi,ja),Oi.prototype.g=function(){return new ss(this.i,this.h)};function ss(i,c){V.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(ss,V),n=ss.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,or(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ir(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,or(this)),this.g&&(this.readyState=3,or(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hc(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function hc(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?ir(this):or(this),this.readyState==3&&hc(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,ir(this))},n.Na=function(i){this.g&&(this.response=i,ir(this))},n.ga=function(){this.g&&ir(this)};function ir(i){i.readyState=4,i.l=null,i.j=null,i.B=null,or(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function or(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function dc(i){let c="";return X(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Di(i,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=dc(l),typeof i=="string"?l!=null&&Xn(l):ie(i,c,l))}function ue(i){V.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(ue,V);var yf=/^https?$/i,vf=["POST","PUT"];n=ue.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wa.g(),this.g.onreadystatechange=P(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(S){fc(this,S);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)l.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())l.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(S=>S.toLowerCase()=="content-type"),b=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(vf,c,void 0)>=0)||f||b||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,x]of l)this.g.setRequestHeader(S,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){fc(this,S)}};function fc(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,pc(i),is(i)}function pc(i){i.A||(i.A=!0,ve(i,"complete"),ve(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,ve(this,"complete"),ve(this,"abort"),is(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),is(this,!0)),ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?mc(this):this.Xa())},n.Xa=function(){mc(this)};function mc(i){if(i.h&&typeof o<"u"){if(i.v&&vt(i)==4)setTimeout(i.Ca.bind(i),0);else if(ve(i,"readystatechange"),vt(i)==4){i.h=!1;try{const S=i.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=S===0){let x=String(i.D).match(sc)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),f=!yf.test(x?x.toLowerCase():"")}l=f}if(l)ve(i,"complete"),ve(i,"success");else{i.o=6;try{var b=vt(i)>2?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.ca()+"]",pc(i)}}finally{is(i)}}}}function is(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||ve(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function vt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return vt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Yd(c)}};function gc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(i){const c={};i=(i.g&&vt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(m(i[f]))continue;var l=rf(i[f]);const b=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const S=c[b]||[];c[b]=S,S.push(l)}vi(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ar(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function _c(i){this.za=0,this.i=[],this.j=new Yn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ar("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ar("baseRetryDelayMs",5e3,i),this.Za=ar("retryDelaySeedMs",1e4,i),this.Ta=ar("forwardChannelMaxRetries",2,i),this.va=ar("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new Za(i&&i.concurrentRequestLimit),this.Ba=new _f,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_c.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,f){xe(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=Sc(this,null,this.W),as(this)};function Vi(i){if(yc(i),i.I==3){var c=i.V++,l=Je(i.J);if(ie(l,"SID",i.M),ie(l,"RID",c),ie(l,"TYPE","terminate"),cr(i,l),c=new gt(i,i.j,c),c.M=2,c.A=rs(Je(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=Rc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),ns(c)}Ac(i)}function os(i){i.g&&(Li(i),i.g.cancel(),i.g=null)}function yc(i){os(i),i.v&&(a.clearTimeout(i.v),i.v=null),cs(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function as(i){if(!ec(i.h)&&!i.m){i.m=!0;var c=i.Ea;j||g(),H||(j(),H=!0),E.add(c,i),i.D=0}}function If(i,c){return tc(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Qn(d(i.Ea,i,c),bc(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const b=new gt(this,this.j,i);let S=this.o;if(this.U&&(S?(S=fn(S),ee(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=Ec(this,b,c),l=Je(this.J),ie(l,"RID",i),ie(l,"CVER",22),this.G&&ie(l,"X-HTTP-Session-Id",this.G),cr(this,l),S&&(this.R?c="headers="+Xn(dc(S))+"&"+c:this.u&&Di(l,this.u,S)),xi(this.h,b),this.Ra&&ie(l,"TYPE","init"),this.S?(ie(l,"$req",c),ie(l,"SID","null"),b.U=!0,Ri(b,l,null)):Ri(b,l,c),this.I=2}}else this.I==3&&(i?vc(this,i):this.i.length==0||ec(this.h)||vc(this))};function vc(i,c){var l;c?l=c.l:l=i.V++;const f=Je(i.J);ie(f,"SID",i.M),ie(f,"RID",l),ie(f,"AID",i.K),cr(i,f),i.u&&i.o&&Di(f,i.u,i.o),l=new gt(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=Ec(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),xi(i.h,l),Ri(l,f,c)}function cr(i,c){i.H&&X(i.H,function(l,f){ie(c,f,l)}),i.l&&X({},function(l,f){ie(c,f,l)})}function Ec(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var b=i.i;let W=-1;for(;;){const me=["count="+l];W==-1?l>0?(W=b[0].g,me.push("ofs="+W)):W=0:me.push("ofs="+W);let ne=!0;for(let ge=0;ge<l;ge++){var S=b[ge].g;const Qe=b[ge].map;if(S-=W,S<0)W=Math.max(0,b[ge].g-100),ne=!1;else try{S="req"+S+"_"||"";try{var x=Qe instanceof Map?Qe:Object.entries(Qe);for(const[Kt,Et]of x){let It=Et;u(Et)&&(It=Ti(Et)),me.push(S+Kt+"="+encodeURIComponent(It))}}catch(Kt){throw me.push(S+"type="+encodeURIComponent("_badmap")),Kt}}catch{f&&f(Qe)}}if(ne){x=me.join("&");break e}}x=void 0}return i=i.i.splice(0,l),c.G=i,x}function Ic(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;j||g(),H||(j(),H=!0),E.add(c,i),i.A=0}}function Mi(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Qn(d(i.Da,i),bc(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Tc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Qn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,xe(10),os(this),Tc(this))};function Li(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Tc(i){i.g=new gt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Je(i.na);ie(c,"RID","rpc"),ie(c,"SID",i.M),ie(c,"AID",i.K),ie(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&ie(c,"TO",i.ia),ie(c,"TYPE","xmlhttp"),cr(i,c),i.u&&i.o&&Di(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=rs(Je(c)),l.u=null,l.R=!0,Qa(l,i)}n.Va=function(){this.C!=null&&(this.C=null,os(this),Mi(this),xe(19))};function cs(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function wc(i,c){var l=null;if(i.g==c){cs(i),Li(i),i.g=null;var f=2}else if(Ni(i.h,c))l=c.G,nc(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var b=i.D;f=es(),ve(f,new Ha(f,l)),as(i)}else Ic(i);else if(b=c.m,b==3||b==0&&c.X>0||!(f==1&&If(i,c)||f==2&&Mi(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),b){case 1:Wt(i,5);break;case 4:Wt(i,10);break;case 3:Wt(i,6);break;default:Wt(i,2)}}}function bc(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Wt(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const b=!f;f=new _t(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||er(f,"https"),rs(f),b?mf(f.toString(),l):gf(f.toString(),l)}else xe(2);i.I=0,i.l&&i.l.pa(c),Ac(i),yc(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Ac(i){if(i.I=0,i.ja=[],i.l){const c=rc(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ja,c),D(i.ja,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.oa()}}function Sc(i,c,l){var f=l instanceof _t?Je(l):new _t(l);if(f.g!="")c&&(f.g=c+"."+f.g),tr(f,f.u);else{var b=a.location;f=b.protocol,c=c?c+"."+b.hostname:b.hostname,b=+b.port;const S=new _t(null);f&&er(S,f),c&&(S.g=c),b&&tr(S,b),l&&(S.h=l),f=S}return l=i.G,c=i.wa,l&&c&&ie(f,l,c),ie(f,"VER",i.ka),cr(i,f),f}function Rc(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new ue(new Oi({ab:l})):new ue(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cc(){}n=Cc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ls(){}ls.prototype.g=function(i,c){return new Me(i,c)};function Me(i,c){V.call(this),this.g=new _c(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new gn(this)}T(Me,V),Me.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Vi(this.g)},Me.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Ti(i),i=l);c.i.push(new af(c.Ya++,i)),c.I==3&&as(c)},Me.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,Me.Z.N.call(this)};function Pc(i){wi.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}T(Pc,wi);function Nc(){bi.call(this),this.status=1}T(Nc,bi);function gn(i){this.g=i}T(gn,Cc),gn.prototype.ra=function(){ve(this.g,"a")},gn.prototype.qa=function(i){ve(this.g,new Pc(i))},gn.prototype.pa=function(i){ve(this.g,new Nc)},gn.prototype.oa=function(){ve(this.g,"b")},ls.prototype.createWebChannel=ls.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,dh=function(){return new ls},hh=function(){return es()},uh=zt,go={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ts.NO_ERROR=0,ts.TIMEOUT=8,ts.HTTP_ERROR=6,bs=ts,Ga.COMPLETE="complete",lh=Ga,Ba.EventType=Kn,Kn.OPEN="a",Kn.CLOSE="b",Kn.ERROR="c",Kn.MESSAGE="d",V.prototype.listen=V.prototype.J,pr=Ba,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,ch=ue}).apply(typeof ds<"u"?ds:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn="12.13.0";function o_(n){jn=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on=new Yo("@firebase/firestore");function _n(){return on.logLevel}function M(n,...e){if(on.logLevel<=Q.DEBUG){const t=e.map(na);on.debug(`Firestore (${jn}): ${n}`,...t)}}function an(n,...e){if(on.logLevel<=Q.ERROR){const t=e.map(na);on.error(`Firestore (${jn}): ${n}`,...t)}}function Ar(n,...e){if(on.logLevel<=Q.WARN){const t=e.map(na);on.warn(`Firestore (${jn}): ${n}`,...t)}}function na(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,fh(n,r,t)}function fh(n,e,t){let r=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw an(r),new Error(r)}function he(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||fh(e,s,r)}function se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends mt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Re.UNAUTHENTICATED)))}shutdown(){}}class c_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class l_{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new en;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new en,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new en)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new ph(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new Re(e)}}class u_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class h_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new u_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Re.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class nl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class d_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){he(this.o===void 0,3512);const r=o=>{o.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>r(o)))};const s=o=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new nl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(he(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new nl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=f_(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<t&&(r+=e.charAt(s[o]%62))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function _o(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),o=e.charAt(r);if(s!==o)return Yi(s)===Yi(o)?te(s,o):Yi(s)?1:-1}return te(n.length,e.length)}const p_=55296,m_=57343;function Yi(n){const e=n.charCodeAt(0);return e>=p_&&e<=m_}function On(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl="__name__";class Ye{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&K(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const o=Ye.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return te(e.length,t.length)}static compareSegments(e,t){const r=Ye.isNumericId(e),s=Ye.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):_o(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ta.fromString(e.substring(4,e.length-2))}}class ce extends Ye{construct(e,t,r){return new ce(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ce(t)}static emptyPath(){return new ce([])}}const g_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends Ye{construct(e,t,r){return new Te(e,t,r)}static isValidIdentifier(e){return g_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rl}static keyField(){return new Te([rl])}static fromServerFormat(e){const t=[];let r="",s=0;const o=()=>{if(r.length===0)throw new L(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new L(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new L(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ce.fromString(e))}static fromName(e){return new G(ce.fromString(e).popFirst(5))}static empty(){return new G(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(n,e,t){if(!t)throw new L(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function __(n,e,t,r){if(e===!0&&r===!0)throw new L(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sl(n){if(!G.isDocumentKey(n))throw new L(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function il(n){if(G.isDocumentKey(n))throw new L(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function gh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K(12329,{type:typeof n})}function yo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=sa(n);throw new L(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ur(n,e){if(!gh(n))throw new L(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new L(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol=-62135596800,al=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*al);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ol)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/al}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ur(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ol;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:pe("string",ae._jsonSchemaVersion),seconds:pe("number"),nanoseconds:pe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ae(0,0))}static max(){return new oe(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=-1;function y_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Mt(s,G.empty(),e)}function v_(n){return new Mt(n.readTime,n.key,Sr)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(oe.min(),G.empty(),Sr)}static max(){return new Mt(oe.max(),G.empty(),Sr)}}function E_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class T_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ia(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==I_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,r)=>{t(e)}))}static reject(e){return new C(((t,r)=>{r(e)}))}static waitFor(e){return new C(((t,r)=>{let s=0,o=0,a=!1;e.forEach((u=>{++s,u.next((()=>{++o,a&&o===s&&t()}),(h=>r(h)))})),a=!0,o===s&&t()}))}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next((s=>s?C.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,o)=>{r.push(t.call(this,s,o))})),this.waitFor(r)}static mapArray(e,t){return new C(((r,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next((_=>{a[d]=_,++u,u===o&&r(a)}),(_=>s(_)))}}))}static doWhile(e,t){return new C(((r,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):r()};o()}))}}function w_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function jr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}oa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=-1;function ca(n){return n==null}function js(n){return n===0&&1/n==-1/0}function b_(n){return typeof n=="number"&&Number.isInteger(n)&&!js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="";function A_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cl(e)),e=S_(n.get(t),e);return cl(e)}function S_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case _h:t+="";break;default:t+=o}}return t}function cl(n){return n+_h+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function yh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fs(this.root,e,this.comparator,!1)}getReverseIterator(){return new fs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fs(this.root,e,this.comparator,!0)}}class fs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,s,o){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=s??Ee.EMPTY,this.right=o??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,o){return new Ee(e??this.key,t??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const o=r(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,r),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ee.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,r,s,o){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ul(this.data.getIterator())}getIteratorFrom(e){return new ul(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class ul{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new qe([])}unionWith(e){let t=new be(Te.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new qe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return On(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new R_("Invalid base64 string: "+o):o}})(e);return new nt(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const C_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cn(n){if(he(!!n,39018),typeof n=="string"){let e=0;const t=C_.exec(n);if(he(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(n.seconds),nanos:Ie(n.nanos)}}function Ie(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Dn(n){return typeof n=="string"?nt.fromBase64String(n):nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="server_timestamp",Eh="__type__",Ih="__previous_value__",Th="__local_write_time__";function la(n){return(n?.mapValue?.fields||{})[Eh]?.stringValue===vh}function ua(n){const e=n.mapValue.fields[Ih];return la(e)?ua(e):e}function Bs(n){const e=cn(n.mapValue.fields[Th].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,t,r,s,o,a,u,h,d,_,T){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=_,this.apiKey=T}}const $s="(default)";class qs{constructor(e,t){this.projectId=e,this.database=t||$s}static empty(){return new qs("","")}get isDefaultDatabase(){return this.database===$s}isEqual(e){return e instanceof qs&&e.projectId===this.projectId&&e.database===this.database}}function N_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new L(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="__type__",x_="__max__",ps={mapValue:{}},bh="__vector__",vo="value";function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?la(n)?4:O_(n)?9007199254740991:k_(n)?10:11:K(28295,{value:n})}function rt(n,e){if(n===e)return!0;const t=ln(n);if(t!==ln(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Bs(n).isEqual(Bs(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=cn(s.timestampValue),u=cn(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,o){return Dn(s.bytesValue).isEqual(Dn(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,o){return Ie(s.geoPointValue.latitude)===Ie(o.geoPointValue.latitude)&&Ie(s.geoPointValue.longitude)===Ie(o.geoPointValue.longitude)})(n,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return Ie(s.integerValue)===Ie(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Ie(s.doubleValue),u=Ie(o.doubleValue);return a===u?js(a)===js(u):isNaN(a)&&isNaN(u)}return!1})(n,e);case 9:return On(n.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(ll(a)!==ll(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!rt(a[h],u[h])))return!1;return!0})(n,e);default:return K(52216,{left:n})}}function Rr(n,e){return(n.values||[]).find((t=>rt(t,e)))!==void 0}function Vn(n,e){if(n===e)return 0;const t=ln(n),r=ln(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return(function(o,a){const u=Ie(o.integerValue||o.doubleValue),h=Ie(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1})(n,e);case 3:return hl(n.timestampValue,e.timestampValue);case 4:return hl(Bs(n),Bs(e));case 5:return _o(n.stringValue,e.stringValue);case 6:return(function(o,a){const u=Dn(o),h=Dn(a);return u.compareTo(h)})(n.bytesValue,e.bytesValue);case 7:return(function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const _=te(u[d],h[d]);if(_!==0)return _}return te(u.length,h.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,a){const u=te(Ie(o.latitude),Ie(a.latitude));return u!==0?u:te(Ie(o.longitude),Ie(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return dl(n.arrayValue,e.arrayValue);case 10:return(function(o,a){const u=o.fields||{},h=a.fields||{},d=u[vo]?.arrayValue,_=h[vo]?.arrayValue,T=te(d?.values?.length||0,_?.values?.length||0);return T!==0?T:dl(d,_)})(n.mapValue,e.mapValue);case 11:return(function(o,a){if(o===ps.mapValue&&a===ps.mapValue)return 0;if(o===ps.mapValue)return 1;if(a===ps.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},_=Object.keys(d);h.sort(),_.sort();for(let T=0;T<h.length&&T<_.length;++T){const P=_o(h[T],_[T]);if(P!==0)return P;const k=Vn(u[h[T]],d[_[T]]);if(k!==0)return k}return te(h.length,_.length)})(n.mapValue,e.mapValue);default:throw K(23264,{he:t})}}function hl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=cn(n),r=cn(e),s=te(t.seconds,r.seconds);return s!==0?s:te(t.nanos,r.nanos)}function dl(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const o=Vn(t[s],r[s]);if(o)return o}return te(t.length,r.length)}function Mn(n){return Eo(n)}function Eo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=cn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Dn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return G.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const o of t.values||[])s?s=!1:r+=",",r+=Eo(o);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Eo(t.fields[a])}`;return s+"}"})(n.mapValue):K(61005,{value:n})}function As(n){switch(ln(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ua(n);return e?16+As(e):16;case 5:return 2*n.stringValue.length;case 6:return Dn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,o)=>s+As(o)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Bn(r.fields,((o,a)=>{s+=o.length+As(a)})),s})(n.mapValue);default:throw K(13486,{value:n})}}function Io(n){return!!n&&"integerValue"in n}function ha(n){return!!n&&"arrayValue"in n}function Ss(n){return!!n&&"mapValue"in n}function k_(n){return(n?.mapValue?.fields||{})[wh]?.stringValue===bh}function mr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Bn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=mr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mr(n.arrayValue.values[t]);return e}return{...n}}function O_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===x_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ss(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(t)}setAll(e){let t=Te.emptyPath(),r={},s=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=mr(a):s.push(u.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,r,s)}delete(e){const t=this.field(e.popLast());Ss(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ss(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Bn(t,((s,o)=>e[s]=o));for(const s of r)delete e[s]}clone(){return new Be(mr(this.value))}}function Ah(n){const e=[];return Bn(n.fields,((t,r)=>{const s=new Te([t]);if(Ss(r)){const o=Ah(r.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)})),new qe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,r,s,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new je(e,0,oe.min(),oe.min(),oe.min(),Be.empty(),0)}static newFoundDocument(e,t,r,s){return new je(e,1,t,oe.min(),r,s,0)}static newNoDocument(e,t){return new je(e,2,t,oe.min(),oe.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,oe.min(),oe.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t){this.position=e,this.inclusive=t}}function fl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const o=e[s],a=n.position[s];if(o.field.isKeyField()?r=G.comparator(G.fromName(a.referenceValue),t.key):r=Vn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function pl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!rt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,t="asc"){this.field=e,this.dir=t}}function D_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{}class ye extends Sh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new M_(e,t,r):t==="array-contains"?new U_(e,r):t==="in"?new j_(e,r):t==="not-in"?new B_(e,r):t==="array-contains-any"?new $_(e,r):new ye(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new L_(e,r):new F_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Vn(t,this.value)):t!==null&&ln(this.value)===ln(t)&&this.matchesComparison(Vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends Sh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Lt(e,t)}matches(e){return Rh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rh(n){return n.op==="and"}function Ch(n){return V_(n)&&Rh(n)}function V_(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function To(n){if(n instanceof ye)return n.field.canonicalString()+n.op.toString()+Mn(n.value);if(Ch(n))return n.filters.map((e=>To(e))).join(",");{const e=n.filters.map((t=>To(t))).join(",");return`${n.op}(${e})`}}function Ph(n,e){return n instanceof ye?(function(r,s){return s instanceof ye&&r.op===s.op&&r.field.isEqual(s.field)&&rt(r.value,s.value)})(n,e):n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((o,a,u)=>o&&Ph(a,s.filters[u])),!0):!1})(n,e):void K(19439)}function Nh(n){return n instanceof ye?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mn(t.value)}`})(n):n instanceof Lt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Nh).join(" ,")+"}"})(n):"Filter"}class M_ extends ye{constructor(e,t,r){super(e,t,r),this.key=G.fromName(r.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class L_ extends ye{constructor(e,t){super(e,"in",t),this.keys=xh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class F_ extends ye{constructor(e,t){super(e,"not-in",t),this.keys=xh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xh(n,e){return(e.arrayValue?.values||[]).map((t=>G.fromName(t.referenceValue)))}class U_ extends ye{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ha(t)&&Rr(t.arrayValue,this.value)}}class j_ extends ye{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rr(this.value.arrayValue,t)}}class B_ extends ye{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Rr(this.value.arrayValue,t)}}class $_ extends ye{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ha(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Rr(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,t=null,r=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function ml(n,e=null,t=[],r=[],s=null,o=null,a=null){return new q_(n,e,t,r,s,o,a)}function da(n){const e=se(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>To(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(o){return o.field.canonicalString()+o.dir})(r))).join(","),ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Mn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Mn(r))).join(",")),e.Te=t}return e.Te}function fa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!D_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Ph(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!pl(n.startAt,e.startAt)&&pl(n.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,t=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function z_(n,e,t,r,s,o,a,u){return new li(n,e,t,r,s,o,a,u)}function H_(n){return new li(n)}function gl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function G_(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function W_(n){return n.collectionGroup!==null}function gr(n){const e=se(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new be(Te.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Hs(o,r))})),t.has(Te.keyField().canonicalString())||e.Ie.push(new Hs(Te.keyField(),r))}return e.Ie}function tn(n){const e=se(n);return e.Ee||(e.Ee=K_(e,gr(n))),e.Ee}function K_(n,e){if(n.limitType==="F")return ml(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Hs(s.field,o)}));const t=n.endAt?new zs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zs(n.startAt.position,n.startAt.inclusive):null;return ml(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function wo(n,e,t){return new li(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function kh(n,e){return fa(tn(n),tn(e))&&n.limitType===e.limitType}function Oh(n){return`${da(tn(n))}|lt:${n.limitType}`}function hr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Nh(s))).join(", ")}]`),ca(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Mn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Mn(s))).join(",")),`Target(${r})`})(tn(n))}; limitType=${n.limitType})`}function pa(n,e){return e.isFoundDocument()&&(function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):G.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)})(n,e)&&(function(r,s){for(const o of gr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,u,h){const d=fl(a,u,h);return a.inclusive?d<=0:d<0})(r.startAt,gr(r),s)||r.endAt&&!(function(a,u,h){const d=fl(a,u,h);return a.inclusive?d>=0:d>0})(r.endAt,gr(r),s))})(n,e)}function J_(n){return(e,t)=>{let r=!1;for(const s of gr(n)){const o=Q_(s,e,t);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Q_(n,e,t){const r=n.field.isKeyField()?G.comparator(e.key,t.key):(function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Vn(h,d):K(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,((t,r)=>{for(const[s,o]of r)e(s,o)}))}isEmpty(){return yh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=new Ve(G.comparator);function Gs(){return Y_}const Dh=new Ve(G.comparator);function ms(...n){let e=Dh;for(const t of n)e=e.insert(t.key,t);return e}function Vh(n){let e=Dh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Yt(){return _r()}function Mh(){return _r()}function _r(){return new hn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const X_=new Ve(G.comparator),Z_=new be(G.comparator);function Ce(...n){let e=Z_;for(const t of n)e=e.add(t);return e}const ey=new be(te);function ty(){return ey}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:js(e)?"-0":e}}function Lh(n){return{integerValue:""+n}}function ny(n,e){return b_(e)?Lh(e):ma(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(){this._=void 0}}function ry(n,e,t){return n instanceof Cr?(function(s,o){const a={fields:{[Eh]:{stringValue:vh},[Th]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&la(o)&&(o=ua(o)),o&&(a.fields[Ih]=o),{mapValue:a}})(t,e):n instanceof Pr?Uh(n,e):n instanceof Nr?jh(n,e):(function(s,o){const a=Fh(s,o),u=_l(a)+_l(s.Ae);return Io(a)&&Io(s.Ae)?Lh(u):ma(s.serializer,u)})(n,e)}function sy(n,e,t){return n instanceof Pr?Uh(n,e):n instanceof Nr?jh(n,e):t}function Fh(n,e){return n instanceof Ws?(function(r){return Io(r)||(function(o){return!!o&&"doubleValue"in o})(r)})(e)?e:{integerValue:0}:null}class Cr extends ui{}class Pr extends ui{constructor(e){super(),this.elements=e}}function Uh(n,e){const t=Bh(e);for(const r of n.elements)t.some((s=>rt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Nr extends ui{constructor(e){super(),this.elements=e}}function jh(n,e){let t=Bh(e);for(const r of n.elements)t=t.filter((s=>!rt(s,r)));return{arrayValue:{values:t}}}class Ws extends ui{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function _l(n){return Ie(n.integerValue||n.doubleValue)}function Bh(n){return ha(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,t){this.field=e,this.transform=t}}function oy(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Pr&&s instanceof Pr||r instanceof Nr&&s instanceof Nr?On(r.elements,s.elements,rt):r instanceof Ws&&s instanceof Ws?rt(r.Ae,s.Ae):r instanceof Cr&&s instanceof Cr})(n.transform,e.transform)}class ay{constructor(e,t){this.version=e,this.transformResults=t}}class at{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new at}static exists(e){return new at(void 0,e)}static updateTime(e){return new at(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class hi{}function $h(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zh(n.key,at.none()):new Br(n.key,n.data,at.none());{const t=n.data,r=Be.empty();let s=new be(Te.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new dn(n.key,r,new qe(s.toArray()),at.none())}}function cy(n,e,t){n instanceof Br?(function(s,o,a){const u=s.value.clone(),h=vl(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):n instanceof dn?(function(s,o,a){if(!Rs(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=vl(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(qh(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(n,e,t):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function yr(n,e,t,r){return n instanceof Br?(function(o,a,u,h){if(!Rs(o.precondition,a))return u;const d=o.value.clone(),_=El(o.fieldTransforms,h,a);return d.setAll(_),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof dn?(function(o,a,u,h){if(!Rs(o.precondition,a))return u;const d=El(o.fieldTransforms,h,a),_=a.data;return _.setAll(qh(o)),_.setAll(d),a.convertToFoundDocument(a.version,_).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((T=>T.field)))})(n,e,t,r):(function(o,a,u){return Rs(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,e,t)}function ly(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),o=Fh(r.transform,s||null);o!=null&&(t===null&&(t=Be.empty()),t.set(r.field,o))}return t||null}function yl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&On(r,s,((o,a)=>oy(o,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Br extends hi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class dn extends hi{constructor(e,t,r,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function qh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function vl(n,e,t){const r=new Map;he(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const o=n[s],a=o.transform,u=e.data.field(o.field);r.set(o.field,sy(a,u,t[s]))}return r}function El(n,e,t){const r=new Map;for(const s of n){const o=s.transform,a=t.data.field(s.field);r.set(s.field,ry(o,a,e))}return r}class zh extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uy extends hi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&cy(o,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Mh();return this.mutations.forEach((s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=$h(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(oe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ce())}isEqual(e){return this.batchId===e.batchId&&On(this.mutations,e.mutations,((t,r)=>yl(t,r)))&&On(this.baseMutations,e.baseMutations,((t,r)=>yl(t,r)))}}class ga{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){he(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=(function(){return X_})();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new ga(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe,Y;function fy(n){switch(n){case N.OK:return K(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return K(15467,{code:n})}}function py(n){if(n===void 0)return an("GRPC error has no .code"),N.UNKNOWN;switch(n){case fe.OK:return N.OK;case fe.CANCELLED:return N.CANCELLED;case fe.UNKNOWN:return N.UNKNOWN;case fe.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case fe.INTERNAL:return N.INTERNAL;case fe.UNAVAILABLE:return N.UNAVAILABLE;case fe.UNAUTHENTICATED:return N.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case fe.NOT_FOUND:return N.NOT_FOUND;case fe.ALREADY_EXISTS:return N.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return N.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case fe.ABORTED:return N.ABORTED;case fe.OUT_OF_RANGE:return N.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return N.UNIMPLEMENTED;case fe.DATA_LOSS:return N.DATA_LOSS;default:return K(39323,{code:n})}}(Y=fe||(fe={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ta([4294967295,4294967295],0);class my{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gy(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function _y(n,e){return bo(n,e.toTimestamp())}function Tn(n){return he(!!n,49232),oe.fromTimestamp((function(t){const r=cn(t);return new ae(r.seconds,r.nanos)})(n))}function Hh(n,e){return Ao(n,e).canonicalString()}function Ao(n,e){const t=(function(s){return new ce(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function yy(n){const e=ce.fromString(n);return he(Sy(e),10190,{key:e.toString()}),e}function So(n,e){return Hh(n.databaseId,e.path)}function vy(n){const e=yy(n);return e.length===4?ce.emptyPath():Iy(e)}function Ey(n){return new ce(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Iy(n){return he(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Il(n,e,t){return{name:So(n,e),fields:t.value.mapValue.fields}}function Ty(n,e){let t;if(e instanceof Br)t={update:Il(n,e.key,e.value)};else if(e instanceof zh)t={delete:So(n,e.key)};else if(e instanceof dn)t={update:Il(n,e.key,e.data),updateMask:Ay(e.fieldMask)};else{if(!(e instanceof uy))return K(16599,{dt:e.type});t={verify:So(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(o,a){const u=a.transform;if(u instanceof Cr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Pr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Nr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ws)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw K(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:_y(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:K(27497)})(n,e.precondition)),t}function wy(n,e){return n&&n.length>0?(he(e!==void 0,14353),n.map((t=>(function(s,o){let a=s.updateTime?Tn(s.updateTime):Tn(o);return a.isEqual(oe.min())&&(a=Tn(o)),new ay(a,s.transformResults||[])})(t,e)))):[]}function by(n){let e=vy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){he(r===1,65062);const _=t.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let o=[];t.where&&(o=(function(T){const P=Gh(T);return P instanceof Lt&&Ch(P)?P.getFilters():[P]})(t.where));let a=[];t.orderBy&&(a=(function(T){return T.map((P=>(function(D){return new Hs(yn(D.field),(function(U){switch(U){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(P)))})(t.orderBy));let u=null;t.limit&&(u=(function(T){let P;return P=typeof T=="object"?T.value:T,ca(P)?null:P})(t.limit));let h=null;t.startAt&&(h=(function(T){const P=!!T.before,k=T.values||[];return new zs(k,P)})(t.startAt));let d=null;return t.endAt&&(d=(function(T){const P=!T.before,k=T.values||[];return new zs(k,P)})(t.endAt)),z_(e,s,a,o,u,"F",h,d)}function Gh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=yn(t.unaryFilter.field);return ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=yn(t.unaryFilter.field);return ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=yn(t.unaryFilter.field);return ye.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=yn(t.unaryFilter.field);return ye.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ye.create(yn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lt.create(t.compositeFilter.filters.map((r=>Gh(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K(1026)}})(t.compositeFilter.op))})(n):K(30097,{filter:n})}function yn(n){return Te.fromServerFormat(n.fieldPath)}function Ay(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Wh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.yt=e}}function Cy(n){const e=by({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.bn=new Ny}addToCollectionParentIndex(e,t){return this.bn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Mt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Ny{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new be(ce.comparator),o=!s.has(r);return this.index[t]=s.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new be(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kh=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(Kh,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ft(0)}static ar(){return new Ft(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="LruGarbageCollector",xy=1048576;function bl([n,e],[t,r]){const s=te(n,t);return s===0?te(e,r):s}class ky{constructor(e){this.Pr=e,this.buffer=new be(bl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Oy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(wl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){jr(t)?M(wl,"Ignoring IndexedDB error during garbage collection: ",t):await ia(t)}await this.Ar(3e5)}))}}class Dy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(oa.ce);const r=new ky(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Tl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tl):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,o,a,u,h,d;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(e,s)))).next((T=>(r=T,u=Date.now(),this.removeTargets(e,r,t)))).next((T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(e,r)))).next((T=>(d=Date.now(),_n()<=Q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-_}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-_}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T}))))}}function Vy(n,e){return new Dy(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.changes=new hn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&yr(r.mutation,s,qe.empty(),ae.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ce()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ce()){const s=Yt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((o=>{let a=ms();return o.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Yt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ce())))}populateOverlays(e,t,r){const s=[];return r.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,r,s){let o=Gs();const a=_r(),u=(function(){return _r()})();return t.forEach(((h,d)=>{const _=r.get(d.key);s.has(d.key)&&(_===void 0||_.mutation instanceof dn)?o=o.insert(d.key,d):_!==void 0?(a.set(d.key,_.mutation.getFieldMask()),yr(_.mutation,d,_.mutation.getFieldMask(),ae.now())):a.set(d.key,qe.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((d,_)=>a.set(d,_))),t.forEach(((d,_)=>u.set(d,new Ly(_,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(e,t){const r=_r();let s=new Ve(((a,u)=>a-u)),o=Ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let _=r.get(h)||qe.empty();_=u.applyToLocalView(d,_),r.set(h,_);const T=(s.get(u.batchId)||Ce()).add(h);s=s.insert(u.batchId,T)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,_=h.value,T=Mh();_.forEach((P=>{if(!o.has(P)){const k=$h(t.get(P),r.get(P));k!==null&&T.set(P,k),o=o.add(P)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,T))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return G_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):W_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-o.size):C.resolve(Yt());let u=Sr,h=o;return a.next((d=>C.forEach(d,((_,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(_)?C.resolve():this.remoteDocumentCache.getEntry(e,_).next((P=>{h=h.insert(_,P)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,h,d,Ce()))).next((_=>({batchId:u,changes:Vh(_)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next((r=>{let s=ms();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const o=t.collectionGroup;let a=ms();return this.indexManager.getCollectionParents(e,o).next((u=>C.forEach(u,(h=>{const d=(function(T,P){return new li(P,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((_=>{_.forEach(((T,P)=>{a=a.insert(T,P)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,s)))).next((a=>{o.forEach(((h,d)=>{const _=d.getKey();a.get(_)===null&&(a=a.insert(_,je.newInvalidDocument(_)))}));let u=ms();return a.forEach(((h,d)=>{const _=o.get(h);_!==void 0&&yr(_.mutation,d,qe.empty(),ae.now()),pa(t,d)&&(u=u.insert(h,d))})),u}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return C.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Tn(s.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:Cy(s.bundledQuery),readTime:Tn(s.readTime)}})(t)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(){this.overlays=new Ve(G.comparator),this.Lr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yt();return C.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&r.set(s,o)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,o)=>{this.St(e,t,o)})),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Yt(),o=t.length+1,a=new G(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let o=new Ve(((d,_)=>d-_));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let _=o.get(d.largestBatchId);_===null&&(_=Yt(),o=o.insert(d.largestBatchId,_)),_.set(d.getKey(),d)}}const u=Yt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,_)=>u.set(d,_))),!(u.size()>=s)););return C.resolve(u)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new dy(t,r));let o=this.Lr.get(t);o===void 0&&(o=Ce(),this.Lr.set(t,o)),this.Lr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(){this.kr=new be(_e.Kr),this.qr=new be(_e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new _e(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new _e(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new G(new ce([])),r=new _e(t,e),s=new _e(t,e+1),o=[];return this.qr.forEachInRange([r,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new G(new ce([])),r=new _e(t,e),s=new _e(t,e+1);let o=Ce();return this.qr.forEachInRange([r,s],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new _e(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.Jr=t}static Kr(e,t){return G.comparator(e.key,t.key)||te(e.Jr,t.Jr)}static Ur(e,t){return te(e.Jr,t.Jr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new be(_e.Kr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hy(o,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Hr=this.Hr.add(new _e(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?aa:this.Yn-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),s=new _e(t,Number.POSITIVE_INFINITY),o=[];return this.Hr.forEachInRange([r,s],(a=>{const u=this.Zr(a.Jr);o.push(u)})),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new be(te);return t.forEach((s=>{const o=new _e(s,0),a=new _e(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([o,a],(u=>{r=r.add(u.Jr)}))})),C.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let o=r;G.isDocumentKey(o)||(o=o.child(""));const a=new _e(new G(o),0);let u=new be(te);return this.Hr.forEachWhile((h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Jr)),!0)}),a),C.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){he(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return C.forEach(t.mutations,(s=>{const o=new _e(s.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Hr=r}))}nr(e){}containsKey(e,t){const r=new _e(t,0),s=this.Hr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){this.ti=e,this.docs=(function(){return new Ve(G.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let r=Gs();return t.forEach((s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():je.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let o=Gs();const a=t.path,u=new G(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:_}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||E_(v_(_),r)<=0||(s.has(_.key)||pa(t,_))&&(o=o.insert(_.key,_.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(e,t,r,s){K(9500)}ni(e,t){return C.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new zy(this)}getSize(e){return C.resolve(this.size)}}class zy extends My{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)})),C.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e){this.persistence=e,this.ri=new hn((t=>da(t)),fa),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.ii=0,this.si=new _a,this.targetCount=0,this.oi=Ft._r()}forEachTarget(e,t){return this.ri.forEach(((r,s)=>t(s))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),C.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ft(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.lr(t),C.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const o=[];return this.ri.forEach(((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),C.waitFor(o).next((()=>s))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((a=>{o.push(s.markPotentiallyOrphaned(e,a))})),C.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t){this._i={},this.overlays={},this.ai=new oa(0),this.ui=!1,this.ui=!0,this.ci=new By,this.referenceDelegate=e(this),this.li=new Hy(this),this.indexManager=new Py,this.remoteDocumentCache=(function(s){return new qy(s)})((r=>this.referenceDelegate.hi(r))),this.serializer=new Ry(t),this.Pi=new Uy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new $y(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new Gy(this.ai.next());return this.referenceDelegate.Ti(),r(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,t){return C.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class Gy extends T_{constructor(e){super(),this.currentSequenceNumber=e}}class ya{constructor(e){this.persistence=e,this.Ri=new _a,this.Ai=null}static Vi(e){return new ya(e)}get di(){if(this.Ai)return this.Ai;throw K(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.di,(r=>{const s=G.fromPath(r);return this.mi(e,s).next((o=>{o||t.removeEntry(s,oe.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return C.or([()=>C.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ks{constructor(e,t){this.persistence=e,this.fi=new hn((r=>A_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Vy(this,t)}static Vi(e,t){return new Ks(e,t)}Ti(){}Ii(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return C.forEach(this.fi,((r,s)=>this.wr(e,r,s).next((o=>o?C.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(a=>this.wr(e,a,t).next((u=>{u||(r++,o.removeEntry(a,oe.min()))})))).next((()=>o.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),C.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=As(e.data.value)),t}wr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=Ce(),s=Ce();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new va(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Bm()?8:w_(Pe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const o={result:null};return this.gs(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(e,t,s,r).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Wy;return this.ys(e,t,a).next((u=>{if(o.result=u,this.As)return this.ws(e,t,a,u.size)}))})).next((()=>o.result))}ws(e,t,r,s){return r.documentReadCount<this.Vs?(_n()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(_n()<=Q.DEBUG&&M("QueryEngine","Query:",hr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(_n()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(t))):C.resolve())}gs(e,t){if(gl(t))return C.resolve(null);let r=tn(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=wo(t,null,"F"),r=tn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=Ce(...o);return this.fs.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,r).next((h=>{const d=this.Ss(t,u);return this.bs(t,d,a,h.readTime)?this.gs(e,wo(t,null,"F")):this.Ds(e,d,t,h)}))))})))))}ps(e,t,r,s){return gl(t)||s.isEqual(oe.min())?C.resolve(null):this.fs.getDocuments(e,r).next((o=>{const a=this.Ss(t,o);return this.bs(t,a,r,s)?C.resolve(null):(_n()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),hr(t)),this.Ds(e,a,t,y_(s,Sr)).next((u=>u)))}))}Ss(e,t){let r=new be(J_(e));return t.forEach(((s,o)=>{pa(e,o)&&(r=r.add(o))})),r}bs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,t,r){return _n()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",hr(t)),this.fs.getDocumentsMatchingQuery(e,t,Mt.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="LocalStore";class Qy{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Ve(te),this.Fs=new hn((o=>da(o)),fa),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fy(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Yy(n,e,t,r){return new Qy(n,e,t,r)}async function Qh(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((o=>(s=o,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((o=>{const a=[],u=[];let h=Ce();for(const d of s){a.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}for(const d of o){u.push(d.batchId);for(const _ of d.mutations)h=h.add(_.key)}return t.localDocuments.getDocuments(r,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function Xy(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return(function(u,h,d,_){const T=d.batch,P=T.keys();let k=C.resolve();return P.forEach((D=>{k=k.next((()=>_.getEntry(h,D))).next(($=>{const U=d.docVersions.get(D);he(U!==null,48541),$.version.compareTo(U)<0&&(T.applyToRemoteDocument($,d),$.isValidDocument()&&($.setReadTime(d.commitVersion),_.addEntry($)))}))})),k.next((()=>u.mutationQueue.removeMutationBatch(h,T)))})(t,r,e,o).next((()=>o.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let h=Ce();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Zy(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function ev(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=aa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}class Al{constructor(){this.activeTargetIds=ty()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tv{constructor(){this.vo=new Al,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Al,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl="ConnectivityMonitor";class Rl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(Sl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(Sl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gs=null;function Ro(){return gs===null?gs=(function(){return 268435456+Math.round(2147483648*Math.random())})():gs++,"0x"+gs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="RestConnection",rv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class sv{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===$s?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,o){const a=Ro(),u=this.Qo(e,t.toUriEncodedString());M(Xi,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),_=Fr(d);return this.zo(e,u,h,r,_).then((T=>(M(Xi,`Received RPC '${e}' ${a}: `,T),T)),(T=>{throw Ar(Xi,`RPC '${e}' ${a} failed with error: `,T,"url: ",u,"request:",r),T}))}jo(e,t,r,s,o,a){return this.Wo(e,t,r,s,o)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,o)=>e[o]=s)),r&&r.headers.forEach(((s,o)=>e[o]=s))}Qo(e,t){const r=rv[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="WebChannelConnection",dr=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(s){setTimeout((()=>{throw s}),0)}}))};class wn extends sv{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!wn.c_){const e=hh();dr(e,uh.STAT_EVENT,(t=>{t.stat===go.PROXY?M(Se,"STAT_EVENT: detected buffering proxy"):t.stat===go.NOPROXY&&M(Se,"STAT_EVENT: detected no buffering proxy")})),wn.c_=!0}}zo(e,t,r,s,o){const a=Ro();return new Promise(((u,h)=>{const d=new ch;d.setWithCredentials(!0),d.listenOnce(lh.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case bs.NO_ERROR:const T=d.getResponseJson();M(Se,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(T)),u(T);break;case bs.TIMEOUT:M(Se,`RPC '${e}' ${a} timed out`),h(new L(N.DEADLINE_EXCEEDED,"Request time out"));break;case bs.HTTP_ERROR:const P=d.getStatus();if(M(Se,`RPC '${e}' ${a} failed with status:`,P,"response text:",d.getResponseText()),P>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);const D=k?.error;if(D&&D.status&&D.message){const $=(function(q){const F=q.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(F)>=0?F:N.UNKNOWN})(D.status);h(new L($,D.message))}else h(new L(N.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new L(N.UNAVAILABLE,"Connection failed."));break;default:K(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(Se,`RPC '${e}' ${a} completed.`)}}));const _=JSON.stringify(s);M(Se,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",_,r,15)}))}T_(e,t,r){const s=Ro(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=o.join("");M(Se,`Creating RPC '${e}' stream ${s}: ${d}`,u);const _=a.createWebChannel(d,u);this.I_(_);let T=!1,P=!1;const k=new iv({Jo:D=>{P?M(Se,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(T||(M(Se,`Opening RPC '${e}' stream ${s} transport.`),_.open(),T=!0),M(Se,`RPC '${e}' stream ${s} sending:`,D),_.send(D))},Ho:()=>_.close()});return dr(_,pr.EventType.OPEN,(()=>{P||(M(Se,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),dr(_,pr.EventType.CLOSE,(()=>{P||(P=!0,M(Se,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(_))})),dr(_,pr.EventType.ERROR,(D=>{P||(P=!0,Ar(Se,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),k.o_(new L(N.UNAVAILABLE,"The operation could not be completed")))})),dr(_,pr.EventType.MESSAGE,(D=>{if(!P){const $=D.data[0];he(!!$,16349);const U=$,q=U?.error||U[0]?.error;if(q){M(Se,`RPC '${e}' stream ${s} received error:`,q);const F=q.status;let J=(function(H){const E=fe[H];if(E!==void 0)return py(E)})(F),z=q.message;F==="NOT_FOUND"&&z.includes("database")&&z.includes("does not exist")&&z.includes(this.databaseId.database)&&Ar(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),J===void 0&&(J=N.INTERNAL,z="Unknown error status: "+F+" with message "+q.message),P=!0,k.o_(new L(J,z)),_.close()}else M(Se,`RPC '${e}' stream ${s} received:`,$),k.__($)}})),wn.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return dh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ov(n){return new wn(n)}function Zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){return new my(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn.c_=!1;class Yh{constructor(e,t,r=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl="PersistentStream";class av{constructor(e,t,r,s,o,a,u,h){this.Ci=e,this.S_=r,this.b_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Yh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(an(t.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.D_===t&&this.G_(r,s)}),(r=>{e((()=>{const s=new L(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{r((()=>this.z_(s)))})),this.stream.onMessage((s=>{r((()=>++this.F_==1?this.J_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(Cl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(Cl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class cv extends av{constructor(e,t,r,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=wy(e.writeResults,e.commitTime),r=Tn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ey(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Ty(this.serializer,r)))};this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{}class uv extends lv{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,Ao(t,r),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(N.UNKNOWN,o.toString())}))}jo(e,t,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.jo(e,Ao(t,r),s,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(N.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function hv(n,e,t,r){return new uv(n,e,t,r)}class dv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(an(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="RemoteStore";class fv{constructor(e,t,r,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Ft(1e3),this.Va=new Ft(1001),this.da=new Set,this.ma=[],this.fa=o,this.fa.Mo((a=>{r.enqueueAndForget((async()=>{zr(this)&&(M($r,"Restarting streams for network reachability change."),await(async function(h){const d=se(h);d.da.add(4),await qr(d),d.ga.set("Unknown"),d.da.delete(4),await fi(d)})(this))}))})),this.ga=new dv(r,s)}}async function fi(n){if(zr(n))for(const e of n.ma)await e(!0)}async function qr(n){for(const e of n.ma)await e(!1)}function zr(n){return se(n).da.size===0}async function Xh(n,e,t){if(!jr(e))throw e;n.da.add(1),await qr(n),n.ga.set("Offline"),t||(t=()=>Zy(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M($r,"Retrying IndexedDB access"),await t(),n.da.delete(1),await fi(n)}))}function Zh(n,e){return e().catch((t=>Xh(n,t,e)))}async function pi(n){const e=se(n),t=Ut(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:aa;for(;pv(e);)try{const s=await ev(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,mv(e,s)}catch(s){await Xh(e,s)}ed(e)&&td(e)}function pv(n){return zr(n)&&n.Ta.length<10}function mv(n,e){n.Ta.push(e);const t=Ut(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function ed(n){return zr(n)&&!Ut(n).x_()&&n.Ta.length>0}function td(n){Ut(n).start()}async function gv(n){Ut(n).ra()}async function _v(n){const e=Ut(n);for(const t of n.Ta)e.ea(t.mutations)}async function yv(n,e,t){const r=n.Ta.shift(),s=ga.from(r,e,t);await Zh(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await pi(n)}async function vv(n,e){e&&Ut(n).Y_&&await(async function(r,s){if((function(a){return fy(a)&&a!==N.ABORTED})(s.code)){const o=r.Ta.shift();Ut(r).B_(),await Zh(r,(()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s))),await pi(r)}})(n,e),ed(n)&&td(n)}async function Pl(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),M($r,"RemoteStore received new credentials");const r=zr(t);t.da.add(3),await qr(t),r&&t.ga.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await fi(t)}async function Ev(n,e){const t=se(n);e?(t.da.delete(2),await fi(t)):e||(t.da.add(2),await qr(t),t.ga.set("Unknown"))}function Ut(n){return n.wa||(n.wa=(function(t,r,s){const o=se(t);return o.sa(),new cv(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gv.bind(null,n),t_:vv.bind(null,n),ta:_v.bind(null,n),na:yv.bind(null,n)}),n.ma.push((async e=>{e?(n.wa.B_(),await pi(n)):(await n.wa.stop(),n.Ta.length>0&&(M($r,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.wa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t,r,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,o){const a=Date.now()+r,u=new Ea(e,t,a,s,o);return u.start(r),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(n,e){if(an("AsyncQueue",`${e}: ${n}`),jr(n))return new L(N.UNAVAILABLE,`${e}: ${n}`);throw n}class Iv{constructor(){this.queries=Nl(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(t,r){const s=se(t),o=s.queries;s.queries=Nl(),o.forEach(((a,u)=>{for(const h of u.va)h.onError(r)}))})(this,new L(N.ABORTED,"Firestore shutting down"))}}function Nl(){return new hn((n=>Oh(n)),kh)}function Tv(n){n.xa.forEach((e=>{e.next()}))}var xl,kl;(kl=xl||(xl={})).Ba="default",kl.Cache="cache";const wv="SyncEngine";class bv{constructor(e,t,r,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Ru={},this.Au=new hn((u=>Oh(u)),kh),this.Vu=new Map,this.du=new Set,this.mu=new Ve(G.comparator),this.fu=new Map,this.gu=new _a,this.pu={},this.yu=new Map,this.wu=Ft.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function Av(n,e,t){const r=Pv(n);try{const s=await(function(a,u){const h=se(a),d=ae.now(),_=u.reduce(((k,D)=>k.add(D.key)),Ce());let T,P;return h.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let D=Gs(),$=Ce();return h.xs.getEntries(k,_).next((U=>{D=U,D.forEach(((q,F)=>{F.isValidDocument()||($=$.add(q))}))})).next((()=>h.localDocuments.getOverlayedDocuments(k,D))).next((U=>{T=U;const q=[];for(const F of u){const J=ly(F,T.get(F.key).overlayedDocument);J!=null&&q.push(new dn(F.key,J,Ah(J.value.mapValue),at.exists(!0)))}return h.mutationQueue.addMutationBatch(k,d,q,u)})).next((U=>{P=U;const q=U.applyToLocalDocumentSet(T,$);return h.documentOverlayCache.saveOverlays(k,U.batchId,q)}))})).then((()=>({batchId:P.batchId,changes:Vh(T)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let d=a.pu[a.currentUser.toKey()];d||(d=new Ve(te)),d=d.insert(u,h),a.pu[a.currentUser.toKey()]=d})(r,s.batchId,t),await mi(r,s.changes),await pi(r.remoteStore)}catch(s){const o=nd(s,"Failed to persist write");t.reject(o)}}function Ol(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Au.forEach(((o,a)=>{const u=a.view.Oa(e);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=se(a);h.onlineState=u;let d=!1;h.queries.forEach(((_,T)=>{for(const P of T.va)P.Oa(u)&&(d=!0)})),d&&Tv(h)})(r.eventManager,e),s.length&&r.Ru.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Sv(n,e){const t=se(n),r=e.batch.batchId;try{const s=await Xy(t.localStore,e);sd(t,r,null),rd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mi(t,s)}catch(s){await ia(s)}}async function Rv(n,e,t){const r=se(n);try{const s=await(function(a,u){const h=se(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let _;return h.mutationQueue.lookupMutationBatch(d,u).next((T=>(he(T!==null,37113),_=T.keys(),h.mutationQueue.removeMutationBatch(d,T)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,_,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,_))).next((()=>h.localDocuments.getDocuments(d,_)))}))})(r.localStore,e);sd(r,e,t),rd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mi(r,s)}catch(s){await ia(s)}}function rd(n,e){(n.yu.get(e)||[]).forEach((t=>{t.resolve()})),n.yu.delete(e)}function sd(n,e,t){const r=se(n);let s=r.pu[r.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),r.pu[r.currentUser.toKey()]=s}}async function mi(n,e,t){const r=se(n),s=[],o=[],a=[];r.Au.isEmpty()||(r.Au.forEach(((u,h)=>{a.push(r.bu(h,e,t).then((d=>{if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:t?.targetChanges.get(h.targetId)?.current;r.sharedClientState.updateQueryState(h.targetId,_?"current":"not-current")}if(d){s.push(d);const _=va.Es(h.targetId,d);o.push(_)}})))})),await Promise.all(a),r.Ru.H_(s),await(async function(h,d){const _=se(h);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>C.forEach(d,(P=>C.forEach(P.Ts,(k=>_.persistence.referenceDelegate.addReference(T,P.targetId,k))).next((()=>C.forEach(P.Is,(k=>_.persistence.referenceDelegate.removeReference(T,P.targetId,k)))))))))}catch(T){if(!jr(T))throw T;M(Jy,"Failed to update sequence numbers: "+T)}for(const T of d){const P=T.targetId;if(!T.fromCache){const k=_.vs.get(P),D=k.snapshotVersion,$=k.withLastLimboFreeSnapshotVersion(D);_.vs=_.vs.insert(P,$)}}})(r.localStore,o))}async function Cv(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){M(wv,"User change. New user:",e.toKey());const r=await Qh(t.localStore,e);t.currentUser=e,(function(o,a){o.yu.forEach((u=>{u.forEach((h=>{h.reject(new L(N.CANCELLED,a))}))})),o.yu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mi(t,r.Ns)}}function Pv(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Sv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rv.bind(null,e),e}class Js{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=di(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,t){return null}Bu(e,t){return null}Ou(e){return Yy(this.persistence,new Ky,e.initialUser,this.serializer)}xu(e){return new Jh(ya.Vi,this.serializer)}Mu(e){return new tv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Js.provider={build:()=>new Js};class Nv extends Js{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,t){he(this.persistence.referenceDelegate instanceof Ks,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Oy(r,e.asyncQueue,t)}xu(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new Jh((r=>Ks.Vi(r,t)),this.serializer)}}class Co{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ol(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cv.bind(null,this.syncEngine),await Ev(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Iv})()}createDatastore(e){const t=di(e.databaseInfo.databaseId),r=ov(e.databaseInfo);return hv(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,o,a,u){return new fv(r,s,o,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ol(this.syncEngine,t,0)),(function(){return Rl.v()?new Rl:new nv})())}createSyncEngine(e,t){return(function(s,o,a,u,h,d,_){const T=new bv(s,o,a,u,h,d);return _&&(T.Su=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=se(t);M($r,"RemoteStore shutting down."),r.da.add(5),await qr(r),r.fa.shutdown(),r.ga.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Co.provider={build:()=>new Co};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="FirestoreClient";class xv{constructor(e,t,r,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=Re.UNAUTHENTICATED,this.clientId=ra.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,(async a=>{M(jt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(jt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=nd(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function eo(n,e){n.asyncQueue.verifyOperationInProgress(),M(jt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Qh(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Dl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kv(n);M(jt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Pl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Pl(e.remoteStore,s))),n._onlineComponents=e}async function kv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(jt,"Using user provided OfflineComponentProvider");try{await eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Ar("Error using user provided cache. Falling back to memory cache: "+t),await eo(n,new Js)}}else M(jt,"Using default OfflineComponentProvider"),await eo(n,new Nv(void 0));return n._offlineComponents}async function Ov(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(jt,"Using user provided OnlineComponentProvider"),await Dl(n,n._uninitializedComponentsProvider._online)):(M(jt,"Using default OnlineComponentProvider"),await Dl(n,new Co))),n._onlineComponents}function Dv(n){return Ov(n).then((e=>e.syncEngine))}function Vv(n,e){const t=new en;return n.asyncQueue.enqueueAndForget((async()=>Av(await Dv(n),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="ComponentProvider",Vl=new Map;function Lv(n,e,t,r,s){return new P_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,id(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od="firestore.googleapis.com",Ml=!0;class Ll{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new L(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=od,this.ssl=Ml}else this.host=e.host,this.ssl=e.ssl??Ml;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xy)throw new L(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}__("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=id(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new L(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gi{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ll({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ll(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new a_;switch(r.type){case"firstParty":return new h_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Vl.get(t);r&&(M(Mv,"Removing Datastore"),Vl.delete(t),r.terminate())})(this),Promise.resolve()}}function Fv(n,e,t,r={}){n=yo(n,gi);const s=Fr(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;s&&nh(`https://${u}`),o.host!==od&&o.host!==u&&Ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!rn(h,a)&&(n._setSettings(h),r.mockUserToken)){let d,_;if(typeof r.mockUserToken=="string")d=r.mockUserToken,_=Re.MOCK_USER;else{d=Dm(r.mockUserToken,n._app?.options.projectId);const T=r.mockUserToken.sub||r.mockUserToken.user_id;if(!T)throw new L(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new Re(T)}n._authCredentials=new c_(new ph(d,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ia(this.firestore,e,this._query)}}class we{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}toJSON(){return{type:we._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ur(t,we._jsonSchema))return new we(e,r||null,new G(ce.fromString(t.referencePath)))}}we._jsonSchemaVersion="firestore/documentReference/1.0",we._jsonSchema={type:pe("string",we._jsonSchemaVersion),referencePath:pe("string")};class Ot extends Ia{constructor(e,t,r){super(e,t,H_(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new G(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function Uv(n,e,...t){if(n=He(n),mh("collection","path",e),n instanceof gi){const r=ce.fromString(e,...t);return il(r),new Ot(n,null,r)}{if(!(n instanceof we||n instanceof Ot))throw new L(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return il(r),new Ot(n.firestore,null,r)}}function jv(n,e,...t){if(n=He(n),arguments.length===1&&(e=ra.newId()),mh("doc","path",e),n instanceof gi){const r=ce.fromString(e,...t);return sl(r),new we(n,null,new G(r))}{if(!(n instanceof we||n instanceof Ot))throw new L(N.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ce.fromString(e,...t));return sl(r),new we(n.firestore,n instanceof Ot?n.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="AsyncQueue";class Ul{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new Yh(this,"async_queue_retry"),this.lc=()=>{const r=Zi();r&&M(Fl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const t=Zi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const t=Zi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise((()=>{}));const t=new en;return this.Tc((()=>this.sc&&this.uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.rc.push(e),this.Ic())))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!jr(e))throw e;M(Fl,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_((()=>this.Ic()))}}Tc(e){const t=this.hc.then((()=>(this.ac=!0,e().catch((r=>{throw this._c=r,this.ac=!1,an("INTERNAL UNHANDLED ERROR: ",jl(r)),r})).then((r=>(this.ac=!1,r))))));return this.hc=t,t}enqueueAfterDelay(e,t,r){this.Pc(),this.cc.indexOf(e)>-1&&(t=0);const s=Ea.createAndSchedule(this,e,t,r,(o=>this.Ec(o)));return this.oc.push(s),s}Pc(){this._c&&K(47125,{Rc:jl(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const t of this.oc)if(t.timerId===e)return!0;return!1}dc(e){return this.Ac().then((()=>{this.oc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.oc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Ac()}))}mc(e){this.cc.push(e)}Ec(e){const t=this.oc.indexOf(e);this.oc.splice(t,1)}}function jl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ad extends gi{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ul,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ul(e),this._firestoreClient=void 0,await e}}}function Bv(n,e){const t=typeof n=="object"?n:ea(),r=typeof n=="string"?n:$s,s=Zo(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=km("firestore");o&&Fv(s,...o)}return s}function $v(n){if(n._terminated)throw new L(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||qv(n),n._firestoreClient}function qv(n){const e=n._freezeSettings(),t=Lv(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new xv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $e(nt.fromBase64String(e))}catch(t){throw new L(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $e(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ur(e,$e._jsonSchema))return $e.fromBase64String(e.bytes)}}$e._jsonSchemaVersion="firestore/bytes/1.0",$e._jsonSchema={type:pe("string",$e._jsonSchemaVersion),bytes:pe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ct._jsonSchemaVersion}}static fromJSON(e){if(Ur(e,ct._jsonSchema))return new ct(e.latitude,e.longitude)}}ct._jsonSchemaVersion="firestore/geoPoint/1.0",ct._jsonSchema={type:pe("string",ct._jsonSchemaVersion),latitude:pe("number"),longitude:pe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ur(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new L(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:pe("string",Ze._jsonSchemaVersion),vectorValues:pe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=/^__.*__$/;class Hv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new dn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Br(e,this.data,t,this.fieldTransforms)}}function ld(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{dataSource:n})}}class wa{constructor(e,t,r,s,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.fc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new wa({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.wc(e),r}Sc(e){const t=this.path?.child(e),r=this.i({path:t,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Qs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(ld(this.dataSource)&&zv.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class Gv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||di(e)}V(e,t,r,s=!1){return new wa({dataSource:e,methodName:t,targetDoc:r,path:Te.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wv(n){const e=n._freezeSettings(),t=di(n._databaseId);return new Gv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Kv(n,e,t,r,s,o={}){const a=n.V(o.merge||o.mergeFields?2:0,e,t,s);fd("Data must be an object, but it was:",a,r);const u=hd(r,a);let h,d;if(o.merge)h=new qe(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const _=[];for(const T of o.mergeFields){const P=Aa(e,T,t);if(!a.contains(P))throw new L(N.INVALID_ARGUMENT,`Field '${P}' is specified in your field mask but missing from your input data.`);Yv(_,P)||_.push(P)}h=new qe(_),d=a.fieldTransforms.filter((T=>h.covers(T.field)))}else h=null,d=a.fieldTransforms;return new Hv(new Be(u),h,d)}class ba extends Ta{_toFieldTransform(e){return new iy(e.path,new Cr)}isEqual(e){return e instanceof ba}}function ud(n,e){if(dd(n=He(n)))return fd("Unsupported field value:",e,n),hd(n,e);if(n instanceof Ta)return(function(r,s){if(!ld(s.dataSource))throw s.Dc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Dc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return(function(r,s){const o=[];let a=0;for(const u of r){let h=ud(u,s.bc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(n,e)}return(function(r,s){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ny(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ae.fromDate(r);return{timestampValue:bo(s.serializer,o)}}if(r instanceof ae){const o=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bo(s.serializer,o)}}if(r instanceof ct)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $e)return{bytesValue:gy(s.serializer,r._byteString)};if(r instanceof we){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Dc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Hh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ze)return(function(a,u){const h=a instanceof Ze?a.toArray():a;return{mapValue:{fields:{[wh]:{stringValue:bh},[vo]:{arrayValue:{values:h.map((_=>{if(typeof _!="number")throw u.Dc("VectorValues must only contain numeric values.");return ma(u.serializer,_)}))}}}}}})(r,s);if(Wh(r))return r._toProto(s.serializer);throw s.Dc(`Unsupported field value: ${sa(r)}`)})(n,e)}function hd(n,e){const t={};return yh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(n,((r,s)=>{const o=ud(s,e.yc(r));o!=null&&(t[r]=o)})),{mapValue:{fields:t}}}function dd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof ct||n instanceof $e||n instanceof we||n instanceof Ta||n instanceof Ze||Wh(n))}function fd(n,e,t){if(!dd(t)||!gh(t)){const r=sa(t);throw r==="an object"?e.Dc(n+" a custom object"):e.Dc(n+" "+r)}}function Aa(n,e,t){if((e=He(e))instanceof cd)return e._internalPath;if(typeof e=="string")return Qv(n,e);throw Qs("Field path arguments must be of type string or ",n,!1,void 0,t)}const Jv=new RegExp("[~\\*/\\[\\]]");function Qv(n,e,t){if(e.search(Jv)>=0)throw Qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new cd(...e.split("."))._internalPath}catch{throw Qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Qs(n,e,t,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new L(N.INVALID_ARGUMENT,u+n+h)}function Yv(n,e){return n.some((t=>t.isEqual(e)))}function Bl(){return new ba("serverTimestamp")}const $l="@firebase/firestore",ql="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,t,r,s,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new we(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Xv extends pd{data(){return super.data()}}function Zv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class _s{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bn extends pd{constructor(e,t,r,s,o,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=bn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}bn._jsonSchemaVersion="firestore/documentSnapshot/1.0",bn._jsonSchema={type:pe("string",bn._jsonSchemaVersion),bundleSource:pe("string","DocumentSnapshot"),bundleName:pe("string"),bundle:pe("string")};class Cs extends bn{data(e={}){return super.data(e)}}class vr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new _s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Cs(this._firestore,this._userDataWriter,r.key,r,new _s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const h=new Cs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new _s(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const h=new Cs(s._firestore,s._userDataWriter,u.doc.key,u.doc,new _s(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,_=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),_=a.indexOf(u.doc.key)),{type:eE(u.type),doc:h,oldIndex:d,newIndex:_}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=vr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ra.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr._jsonSchemaVersion="firestore/querySnapshot/1.0",vr._jsonSchema={type:pe("string",vr._jsonSchemaVersion),bundleSource:pe("string","QuerySnapshot"),bundleName:pe("string"),bundle:pe("string")};function tE(n,e,t){n=yo(n,we);const r=yo(n.firestore,ad),s=Zv(n.converter,e),o=Wv(r);return nE(r,[Kv(o,"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,at.none())])}function nE(n,e){const t=$v(n);return Vv(t,e)}(function(e,t=!0){o_(Un),kn(new sn("firestore",((r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new ad(new l_(r.getProvider("auth-internal")),new d_(a,r.getProvider("app-check-internal")),N_(a,s),a);return o={useFetchStreams:t,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),kt($l,ql,e),kt($l,ql,"esm2020")})();var rE="firebase",sE="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt(rE,sE,"app");function md(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iE=md,gd=new Mr("auth","Firebase",md());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new Yo("@firebase/auth");function oE(n,...e){Ys.logLevel<=Q.WARN&&Ys.warn(`Auth (${Un}): ${n}`,...e)}function Ps(n,...e){Ys.logLevel<=Q.ERROR&&Ys.error(`Auth (${Un}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n,...e){throw Sa(n,...e)}function et(n,...e){return Sa(n,...e)}function _d(n,e,t){const r={...iE(),[e]:t};return new Mr("auth","Firebase",r).create(e,{appName:n.name})}function nn(n){return _d(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return gd.create(n,...e)}function B(n,e,...t){if(!n)throw Sa(e,...t)}function it(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ps(e),new Error(e)}function ft(n,e){n||it(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(){return typeof self<"u"&&self.location?.href||""}function aE(){return zl()==="http:"||zl()==="https:"}function zl(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(aE()||Fm()||"connection"in navigator)?navigator.onLine:!0}function lE(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=Vm()||Um()}get(){return cE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n,e){ft(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dE=new Hr(3e4,6e4);function Ca(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function $n(n,e,t,r,s={}){return vd(n,s,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=Lr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return Lm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(d.credentials="include"),yd.fetch()(await Ed(n,n.config.apiHost,t,u),d)})}async function vd(n,e,t){n._canInitEmulator=!1;const r={...uE,...e};try{const s=new pE(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ys(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ys(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw ys(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw ys(n,"user-disabled",a);const _=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw _d(n,_,d);dt(n,_)}}catch(s){if(s instanceof mt)throw s;dt(n,"network-request-failed",{message:String(s)})}}async function fE(n,e,t,r,s={}){const o=await $n(n,e,t,r,s);return"mfaPendingCredential"in o&&dt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Ed(n,e,t,r){const s=`${e}${t}?${r}`,o=n,a=o.config.emulator?Ra(n.config,s):`${n.config.apiScheme}://${s}`;return hE.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}class pE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),dE.get())})}}function ys(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=et(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mE(n,e){return $n(n,"POST","/v1/accounts:delete",e)}async function Xs(n,e){return $n(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gE(n,e=!1){const t=He(n),r=await t.getIdToken(e),s=Pa(r);B(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,a=o?.sign_in_provider;return{claims:s,token:r,authTime:Er(to(s.auth_time)),issuedAtTime:Er(to(s.iat)),expirationTime:Er(to(s.exp)),signInProvider:a||null,signInSecondFactor:o?.sign_in_second_factor||null}}function to(n){return Number(n)*1e3}function Pa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xu(t);return s?JSON.parse(s):(Ps("Failed to decode base64 JWT payload"),null)}catch(s){return Ps("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Hl(n){const e=Pa(n);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof mt&&_E(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _E({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(n){const e=n.auth,t=await n.getIdToken(),r=await xr(n,Xs(e,{idToken:t}));B(r?.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const o=s.providerUserInfo?.length?Id(s.providerUserInfo):[],a=EE(n.providerData,o),u=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!a?.length,d=u?h:!1,_={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,_)}async function vE(n){const e=He(n);await Zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EE(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Id(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(n,e){const t=await vd(n,{},async()=>{const r=Lr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,a=await Ed(n,s,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(h.credentials="include"),yd.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function TE(n,e){return $n(n,"POST","/v2/accounts:revokeToken",Ca(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){B(e.length!==0,"internal-error");const t=Hl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(B(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:o}=await IE(e,t);this.updateTokensAndExpiration(r,s,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:o}=t,a=new An;return r&&(B(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(B(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),o&&(B(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new An,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(n,e){B(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ze{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new yE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new No(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await xr(this,this.stsTokenManager.getToken(this.auth,e));return B(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gE(this,e)}reload(){return vE(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ze({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(nn(this.auth));const e=await this.getIdToken();return await xr(this,mE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,a=t.photoURL??void 0,u=t.tenantId??void 0,h=t._redirectEventId??void 0,d=t.createdAt??void 0,_=t.lastLoginAt??void 0,{uid:T,emailVerified:P,isAnonymous:k,providerData:D,stsTokenManager:$}=t;B(T&&$,e,"internal-error");const U=An.fromJSON(this.name,$);B(typeof T=="string",e,"internal-error"),Tt(r,e.name),Tt(s,e.name),B(typeof P=="boolean",e,"internal-error"),B(typeof k=="boolean",e,"internal-error"),Tt(o,e.name),Tt(a,e.name),Tt(u,e.name),Tt(h,e.name),Tt(d,e.name),Tt(_,e.name);const q=new ze({uid:T,auth:e,email:s,emailVerified:P,displayName:r,isAnonymous:k,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:U,createdAt:d,lastLoginAt:_});return D&&Array.isArray(D)&&(q.providerData=D.map(F=>({...F}))),h&&(q._redirectEventId=h),q}static async _fromIdTokenResponse(e,t,r=!1){const s=new An;s.updateFromServerResponse(t);const o=new ze({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Zs(o),o}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];B(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Id(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!o?.length,u=new An;u.updateFromIdToken(r);const h=new ze({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!o?.length};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl=new Map;function ot(n){ft(n instanceof Function,"Expected a class definition");let e=Gl.get(n);return e?(ft(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Gl.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Td.type="NONE";const Wl=Td;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(n,e,t){return`firebase:${n}:${e}:${t}`}class Sn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:o}=this.auth;this.fullUserKey=Ns(this.userKey,s.apiKey,o),this.fullPersistenceKey=Ns("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Xs(this.auth,{idToken:e}).catch(()=>{});return t?ze._fromGetAccountInfoResponse(this.auth,t,e):null}return ze._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Sn(ot(Wl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=s[0]||ot(Wl);const a=Ns(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const _=await d._get(a);if(_){let T;if(typeof _=="string"){const P=await Xs(e,{idToken:_}).catch(()=>{});if(!P)break;T=await ze._fromGetAccountInfoResponse(e,P,_)}else T=ze._fromJSON(e,_);d!==o&&(u=T),o=d;break}}catch{}const h=s.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new Sn(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new Sn(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Sd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Cd(e))return"Blackberry";if(Pd(e))return"Webos";if(bd(e))return"Safari";if((e.includes("chrome/")||Ad(e))&&!e.includes("edge/"))return"Chrome";if(Rd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function wd(n=Pe()){return/firefox\//i.test(n)}function bd(n=Pe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ad(n=Pe()){return/crios\//i.test(n)}function Sd(n=Pe()){return/iemobile/i.test(n)}function Rd(n=Pe()){return/android/i.test(n)}function Cd(n=Pe()){return/blackberry/i.test(n)}function Pd(n=Pe()){return/webos/i.test(n)}function Na(n=Pe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function wE(n=Pe()){return Na(n)&&!!window.navigator?.standalone}function bE(){return jm()&&document.documentMode===10}function Nd(n=Pe()){return Na(n)||Rd(n)||Pd(n)||Cd(n)||/windows phone/i.test(n)||Sd(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e=[]){let t;switch(n){case"Browser":t=Kl(Pe());break;case"Worker":t=`${Kl(Pe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Un}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SE(n,e={}){return $n(n,"GET","/v2/passwordPolicy",Ca(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=6;class CE{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??RE,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jl(this),this.idTokenSubscription=new Jl(this),this.beforeStateQueue=new AE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ot(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Sn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xs(this,{idToken:e}),r=await ze._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=this.redirectUser?._redirectEventId,a=r?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&u?.user&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Zs(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(nn(this));const t=e?He(e):null;return t&&B(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ot(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SE(this),t=new CE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Mr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await TE(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ot(e)||this._popupRedirectResolver;B(t,this,"argument-error"),this.redirectPersistenceManager=await Sn.create(this,[ot(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,s);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&oE(`Error while retrieving App Check token: ${e.error}`),e?.token}}function xa(n){return He(n)}class Jl{constructor(e){this.auth=e,this.observer=null,this.addObserver=Km(t=>this.observer=t)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NE(n){ka=n}function xE(n){return ka.loadJS(n)}function kE(){return ka.gapiScript}function OE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(n,e){const t=Zo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(rn(o,e??{}))return s;dt(s,"already-initialized")}return t.initialize({options:e})}function VE(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ot);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function ME(n,e,t){const r=xa(n);B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,o=kd(e),{host:a,port:u}=LE(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},_=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){B(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),B(rn(d,r.config.emulator)&&rn(_,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=_,r.settings.appVerificationDisabledForTesting=!0,Fr(a)?nh(`${o}//${a}${h}`):FE()}function kd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function LE(n){const e=kd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const o=s[1];return{host:o,port:Ql(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:Ql(a)}}}function Ql(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function FE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,t){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(n,e){return fE(n,"POST","/v1/accounts:signInWithIdp",Ca(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="http://localhost";class un extends Od{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new un(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):dt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...o}=t;if(!r||!s)return null;const a=new un(r,s);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Rn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Rn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}buildRequest(){const e={requestUri:UE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Lr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Dd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Gr{constructor(){super("facebook.com")}static credential(e){return un._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Gr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return un._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return At.credential(t,r)}catch{return null}}}At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Gr{constructor(){super("github.com")}static credential(e){return un._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Gr{constructor(){super("twitter.com")}static credential(e,t){return un._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rt.credential(t,r)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const o=await ze._fromIdTokenResponse(e,r,s),a=Yl(r);return new Ln({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Yl(r);return new Ln({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Yl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends mt{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ei.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ei(e,t,r,s)}}function Vd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ei._fromErrorAndOperation(n,o,e,r):o})}async function jE(n,e,t=!1){const r=await xr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ln._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(nn(r));const s="reauthenticate";try{const o=await xr(n,Vd(r,s,e,n),t);B(o.idToken,r,"internal-error");const a=Pa(o.idToken);B(a,r,"internal-error");const{sub:u}=a;return B(n.uid===u,r,"user-mismatch"),Ln._forOperation(n,s,o)}catch(o){throw o?.code==="auth/user-not-found"&&dt(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $E(n,e,t=!1){if(Xe(n.app))return Promise.reject(nn(n));const r="signIn",s=await Vd(n,r,e),o=await Ln._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(o.user),o}function qE(n,e,t,r){return He(n).onIdTokenChanged(e,t,r)}function zE(n,e,t){return He(n).beforeAuthStateChanged(e,t)}const ti="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ti,"1"),this.storage.removeItem(ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=1e3,GE=10;class Ld extends Md{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);bE()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,GE):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},HE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ld.type="LOCAL";const WE=Ld;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd extends Md{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Fd.type="SESSION";const Ud=Fd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new _i(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:o}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await KE(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=Oa("",20);s.port1.start();const _=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(T){const P=T;if(P.data.eventId===d)switch(P.data.status){case"ack":clearTimeout(_),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(P.data.response);break;default:clearTimeout(_),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function QE(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function YE(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XE(){return navigator?.serviceWorker?.controller||null}function ZE(){return jd()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="firebaseLocalStorageDb",eI=1,ni="firebaseLocalStorage",$d="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yi(n,e){return n.transaction([ni],e?"readwrite":"readonly").objectStore(ni)}function tI(){const n=indexedDB.deleteDatabase(Bd);return new Wr(n).toPromise()}function xo(){const n=indexedDB.open(Bd,eI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ni,{keyPath:$d})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ni)?e(r):(r.close(),await tI(),e(await xo()))})})}async function Xl(n,e,t){const r=yi(n,!0).put({[$d]:e,value:t});return new Wr(r).toPromise()}async function nI(n,e){const t=yi(n,!1).get(e),r=await new Wr(t).toPromise();return r===void 0?null:r.value}function Zl(n,e){const t=yi(n,!0).delete(e);return new Wr(t).toPromise()}const rI=800,sI=3;class qd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>sI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(ZE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await YE(),!this.activeServiceWorker)return;this.sender=new JE(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||XE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await Xl(e,ti,"1"),await Zl(e,ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Xl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>nI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Zl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=yi(s,!1).getAll();return new Wr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qd.type="LOCAL";const iI=qd;new Hr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(n,e){return e?ot(e):(B(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Od{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function aI(n){return $E(n.auth,new Da(n),n.bypassAuthState)}function cI(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),BE(t,new Da(n),n.bypassAuthState)}async function lI(n){const{auth:e,user:t}=n;return B(t,e,"internal-error"),jE(t,new Da(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,r,s,o=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aI;case"linkViaPopup":case"linkViaRedirect":return lI;case"reauthViaPopup":case"reauthViaRedirect":return cI;default:dt(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI=new Hr(2e3,1e4);class En extends zd{constructor(e,t,r,s,o){super(e,t,s,o),this.provider=r,this.authWindow=null,this.pollId=null,En.currentPopupAction&&En.currentPopupAction.cancel(),En.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,En.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uI.get())};e()}}En.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="pendingRedirect",xs=new Map;class dI extends zd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xs.get(this.auth._key());if(!e){try{const r=await fI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xs.set(this.auth._key(),e)}return this.bypassAuthState||xs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fI(n,e){const t=gI(e),r=mI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function pI(n,e){xs.set(n._key(),e)}function mI(n){return ot(n._redirectPersistence)}function gI(n){return Ns(hI,n.config.apiKey,n.name)}async function _I(n,e,t=!1){if(Xe(n.app))return Promise.reject(nn(n));const r=xa(n),s=oI(r,e),a=await new dI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=600*1e3;class vI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!EI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Hd(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(et(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yI&&this.cachedEventUids.clear(),this.cachedEventUids.has(eu(e))}saveEventToCache(e){this.cachedEventUids.add(eu(e)),this.lastProcessedEventTime=Date.now()}}function eu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function EI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(n,e={}){return $n(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wI=/^https?/;async function bI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await II(n);for(const t of e)try{if(AI(t))return}catch{}dt(n,"unauthorized-domain")}function AI(n){const e=Po(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!wI.test(t))return!1;if(TI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=new Hr(3e4,6e4);function tu(){const n=tt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function RI(n){return new Promise((e,t)=>{function r(){tu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tu(),t(et(n,"network-request-failed"))},timeout:SI.get()})}if(tt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(tt().gapi?.load)r();else{const s=OE("iframefcb");return tt()[s]=()=>{gapi.load?r():t(et(n,"network-request-failed"))},xE(`${kE()}?onload=${s}`).catch(o=>t(o))}}).catch(e=>{throw ks=null,e})}let ks=null;function CI(n){return ks=ks||RI(n),ks}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Hr(5e3,15e3),NI="__/auth/iframe",xI="emulator/auth/iframe",kI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DI(n){const e=n.config;B(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ra(e,xI):`https://${n.config.authDomain}/${NI}`,r={apiKey:e.apiKey,appName:n.name,v:Un},s=OI.get(n.config.apiHost);s&&(r.eid=s);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Lr(r).slice(1)}`}async function VI(n){const e=await CI(n),t=tt().gapi;return B(t,n,"internal-error"),e.open({where:document.body,url:DI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kI,dontclear:!0},r=>new Promise(async(s,o)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),u=tt().setTimeout(()=>{o(a)},PI.get());function h(){tt().clearTimeout(u),s(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LI=500,FI=600,UI="_blank",jI="http://localhost";class nu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BI(n,e,t,r=LI,s=FI){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h={...MI,width:r.toString(),height:s.toString(),top:o,left:a},d=Pe().toLowerCase();t&&(u=Ad(d)?UI:t),wd(d)&&(e=e||jI,h.scrollbars="yes");const _=Object.entries(h).reduce((P,[k,D])=>`${P}${k}=${D},`,"");if(wE(d)&&u!=="_self")return $I(e||"",u),new nu(null);const T=window.open(e||"",u,_);B(T,n,"popup-blocked");try{T.focus()}catch{}return new nu(T)}function $I(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI="__/auth/handler",zI="emulator/auth/handler",HI=encodeURIComponent("fac");async function ru(n,e,t,r,s,o){B(n.config.authDomain,n,"auth-domain-config-required"),B(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Un,eventId:s};if(e instanceof Dd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Wm(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))a[_]=T}if(e instanceof Gr){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(a.scopes=_.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const _ of Object.keys(u))u[_]===void 0&&delete u[_];const h=await n._getAppCheckToken(),d=h?`#${HI}=${encodeURIComponent(h)}`:"";return`${GI(n)}?${Lr(u).slice(1)}${d}`}function GI({config:n}){return n.emulator?Ra(n,zI):`https://${n.authDomain}/${qI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ud,this._completeRedirectFn=_I,this._overrideRedirectResult=pI}async _openPopup(e,t,r,s){ft(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const o=await ru(e,t,r,Po(),s);return BI(e,o,Oa())}async _openRedirect(e,t,r,s){await this._originValidation(e);const o=await ru(e,t,r,Po(),s);return QE(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(ft(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await VI(e),r=new vI(e);return t.register("authEvent",s=>(B(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(no,{type:no},s=>{const o=s?.[0]?.[no];o!==void 0&&t(!!o),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Nd()||bd()||Na()}}const KI=WI;var su="@firebase/auth",iu="1.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YI(n){kn(new sn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;B(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xd(n)},d=new PE(r,s,o,h);return VE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),kn(new sn("auth-internal",e=>{const t=xa(e.getProvider("auth").getImmediate());return(r=>new JI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),kt(su,iu,QI(n)),kt(su,iu,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=300,ZI=th("authIdTokenMaxAge")||XI;let ou=null;const eT=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ZI)return;const s=t?.token;ou!==s&&(ou=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tT(n=ea()){const e=Zo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=DE(n,{popupRedirectResolver:KI,persistence:[iI,WE,Ud]}),r=th("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=eT(o.toString());zE(t,a,()=>a(t.currentUser)),qE(t,u=>a(u))}}const s=Zu("auth");return s&&ME(t,`http://${s}`),t}function nT(){return document.getElementsByTagName("head")?.[0]??document}NE({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const o=et("internal-error");o.customData=s,t(o)},r.type="text/javascript",r.charset="UTF-8",nT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YI("Browser");const Va={apiKey:"AIzaSyBwFFR0999h_Svq9P5Z5zm0D_-VXa4d-Bs",authDomain:"landing-csp.firebaseapp.com",projectId:"landing-csp",messagingSenderId:"1062879122375",appId:"1:1062879122375:web:db74158808cf45fcaeffe2"},rT=new Set(["tu_api_key","tu-proyecto.firebaseapp.com","tu-proyecto","1234567890","1:1234567890:web:abcdef123456"]),ko=Object.entries(Va).filter(([,n])=>!n).map(([n])=>n),Oo=Object.entries(Va).filter(([,n])=>typeof n=="string"&&rT.has(n.trim())).map(([n])=>n),Gd=[...new Set([...ko,...Oo])],sT={invalidEnvKeys:Gd},Ma=Gd.length===0;if(!Ma){const n=[];ko.length&&n.push(`faltantes: ${ko.join(", ")}`),Oo.length&&n.push(`placeholders: ${Oo.join(", ")}`),console.warn(`[Firebase] Configuracion incompleta (${n.join(" | ")}). Revisa las variables PUBLIC_FIREBASE_* en .env.`)}const ri=Ma?Jg().length?ea():ih(Va):null,au=ri?Bv(ri):null;ri&&tT(ri);function Do(n){if(Array.isArray(n))return n.map(Do);if(n!==null&&typeof n=="object"&&Object.getPrototypeOf(n)===Object.prototype){const e={};return Object.entries(n).forEach(([t,r])=>{r!==void 0&&(e[t]=Do(r))}),e}return n}const iT="registrations";async function oT(n){if(!au||!Ma){const h=sT.invalidEnvKeys.join(", ");throw new Error(`Firebase no esta configurado correctamente. Revisa las variables PUBLIC_FIREBASE_* (${h}).`)}const e=n.teamSize??3,t=n.members.slice(0,e);if(t.some(h=>{const d=h.studentIdFile?.fileUrl,_=h.studentIdFile&&"size"in h.studentIdFile;return!d&&!_}))throw new Error("Todos los miembros incluidos deben tener su documento subido.");if(n.category==="colegios"&&!(n.schoolImageConsentFiles??[]).length)throw new Error("Debes subir al menos un consentimiento para colegios.");const s=jv(Uv(au,iT)),o=s.id,a={id:o,category:n.category,teamName:n.teamName,institution:n.institution,discoverySource:n.discoverySource,discoverySourceOther:n.discoverySourceOther??"",teamDescription:n.teamDescription,teamOmegaUpUser:n.teamOmegaUpUser,contactEmail:n.contactEmail??"",members:t.map(h=>({id:h.id,firstName:h.firstName,lastName:h.lastName,age:Number(h.age),email:h.email,whatsapp:h.whatsapp??"",career:h.career??"",universityYear:h.universityYear??"",schoolGrade:h.schoolGrade??"",about:h.about??"",linkedin:h.linkedin??"",studentIdFile:h.studentIdFile??null})),responsible:n.category==="colegios"?{firstName:n.responsible.firstName,lastName:n.responsible.lastName,email:n.responsible.email,phone:n.responsible.phone,institution:n.responsible.institution,role:n.responsible.role,relationship:n.responsible.relationship,comments:n.responsible.comments??""}:void 0,consents:{dataReviewAccepted:n.dataReviewAccepted,privacyAccepted:n.privacyAccepted,universityImageConsentAccepted:!!n.universityImageConsentAccepted,schoolImageConsentFiles:n.schoolImageConsentFiles??[]},status:"recibida",adminNotes:"",createdAt:Bl(),updatedAt:Bl()},u=Do(a);return await tE(s,u),o}const aT=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;function Wd(n){return n==="universidades"?["team","members","confirmation"]:["team","members","responsible","confirmation"]}function La(n){return n?aT.test(n.trim()):!1}function cT(n){if(!n?.trim())return!0;try{const e=new URL(n.trim());return["www.linkedin.com","linkedin.com","lnkd.in"].includes(e.hostname)}catch{return!1}}function lT(n){return n===""?!1:Number.isInteger(n)&&n>=10&&n<=99}function uT(n,e,t){const r={},s=`members.${e}`;return n.firstName.trim()||(r[`${s}.firstName`]="Ingresa el nombre del participante."),n.lastName.trim()||(r[`${s}.lastName`]="Ingresa el apellido del participante."),lT(n.age)||(r[`${s}.age`]="Ingresa una edad válida."),n.email.trim()?La(n.email)||(r[`${s}.email`]="Ingresa un correo electrónico válido."):r[`${s}.email`]="Ingresa un correo electrónico.",t==="universidades"&&(n.career?.trim()||(r[`${s}.career`]="Ingresa la carrera del participante."),n.universityYear?.trim()||(r[`${s}.universityYear`]="Ingresa el año de estudio."),cT(n.linkedin)||(r[`${s}.linkedin`]="Ingresa un enlace válido de LinkedIn.")),t==="colegios"&&!n.schoolGrade?.trim()&&(r[`${s}.schoolGrade`]="Ingresa el grado o año escolar."),!n.studentIdFile?.fileUrl&&!("size"in(n.studentIdFile??{}))&&(r[`${s}.studentIdFile`]="Sube el documento del participante."),r}function hT(n){const e={};return n.teamName.trim()||(e.teamName="Ingresa el nombre del equipo."),n.institution.trim()||(e.institution="Ingresa el nombre de la institución."),n.discoverySource||(e.discoverySource="Selecciona cómo conocieron la Copa."),n.discoverySource==="otro"&&!n.discoverySourceOther?.trim()&&(e.discoverySourceOther="Especifica cómo conocieron la Copa."),n.teamDescription.trim()||(e.teamDescription="Ingresa una descripción breve del equipo."),n.teamOmegaUpUser.trim()||(e.teamOmegaUpUser="Ingresa el usuario de OmegaUp del equipo."),n.contactEmail&&!La(n.contactEmail)&&(e.contactEmail="Ingresa un correo electrónico válido."),e}function dT(n){const e={},t=n.teamSize??3;for(let r=0;r<t;r++)Object.assign(e,uT(n.members[r],r,n.category));return e}function fT(n){if(n.category==="universidades")return{};const e=n.teamSize??3;if(!(n.category==="colegios"||e<3))return{};const r={},s=n.responsible;return s.firstName.trim()||(r["responsible.firstName"]="Ingresa el nombre del responsable."),s.lastName.trim()||(r["responsible.lastName"]="Ingresa el apellido del responsable."),s.email.trim()?La(s.email)||(r["responsible.email"]="Ingresa un correo electrónico válido."):r["responsible.email"]="Ingresa un correo electrónico.",s.phone.trim()||(r["responsible.phone"]="Ingresa un número de teléfono o WhatsApp."),s.institution.trim()||(r["responsible.institution"]="Ingresa el nombre de la institución."),s.role||(r["responsible.role"]="Selecciona el rol del responsable."),s.relationship.trim()||(r["responsible.relationship"]="Ingresa la relación con el equipo."),r}function pT(n){const e={};if(n.dataReviewAccepted||(e.dataReviewAccepted="Debes confirmar que revisaste la información."),n.privacyAccepted||(e.privacyAccepted="Debes aceptar el tratamiento de datos personales."),n.category==="universidades"&&!n.universityImageConsentAccepted&&(e.universityImageConsentAccepted="Debes aceptar el uso de imagen."),n.category==="colegios"){const t=n.schoolImageConsentFiles;(Array.isArray(t)?t.length>0:!!t)||(e.schoolImageConsentFiles="Debes subir al menos un consentimiento de imagen.")}return e}function Qt(n,e){switch(e){case"team":return hT(n);case"members":return dT(n);case"responsible":return fT(n);case"confirmation":return pT(n);default:return{}}}function mT(n){const e={};return Wd(n.category).forEach(r=>{Object.assign(e,Qt(n,r))}),e}const Kd=3,ro="csp-registration-draft",gT={team:"Equipo",members:"Integrantes",responsible:"Responsable",confirmation:"Confirmación"};function so(n){return{id:n,firstName:"",lastName:"",age:"",email:"",whatsapp:"",career:"",universityYear:"",schoolGrade:"",about:"",linkedin:"",studentIdFile:null}}function Jd(n){return{teamSize:3,category:n,teamName:"",institution:"",discoverySource:"",discoverySourceOther:"",teamDescription:"",teamOmegaUpUser:"",contactEmail:"",members:[so("member-1"),so("member-2"),so("member-3")],responsible:{firstName:"",lastName:"",email:"",phone:"",institution:"",role:"",relationship:"",comments:""},universityImageConsentAccepted:!1,schoolImageConsentFiles:[],dataReviewAccepted:!1,privacyAccepted:!1,status:"recibida",adminNotes:""}}function _T(n){return{version:Kd,...n}}function yT(n,e){try{const t=JSON.parse(n);if(t.version!==Kd||t.category!==e)return null;const r=Jd(e),s=(t.members??r.members).map((o,a)=>({...r.members[a],...o,studentIdFile:o.studentIdFile&&typeof o.studentIdFile=="object"?o.studentIdFile:null}));return{...r,...t,category:e,members:s,schoolImageConsentFiles:Array.isArray(t.schoolImageConsentFiles)?t.schoolImageConsentFiles:[],responsible:{...r.responsible,...t.responsible??{}}}}catch{return null}}function Vo(n){return n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(2)} MB`}const vT=vm({url:"/api/uploadthing",package:"uploadthing"});function vs(n){return n?Array.isArray(n)?n:[n]:[]}function cu({endpoint:n,value:e=null,multiple:t,label:r,description:s,error:o,onChange:a,onError:u,onUploadingChange:h}){const[d,_]=re.useState(null),[T,P]=re.useState(null),[k,D]=re.useState(""),$=n==="studentIdUploader"?2*1024*1024:3*1024*1024,U=re.useMemo(()=>e?Array.isArray(e)?e:[e]:[],[e]),q=U.length>0,F=U.length===1?`Archivo seleccionado: ${U[0].fileName}`:`${U.length} archivos seleccionados y cargados.`,J=z=>{D("");const j=z.target.files?.[0];if(j){if(j.size>$){const H=n==="studentIdUploader"?"2MB":"3MB",E=`El archivo "${j.name}" supera el límite de ${H}.`;D(E),u?.(E);return}if(_(j),a(j),j.type.startsWith("image/")){const H=new FileReader;H.onload=E=>{P(E.target?.result)},H.readAsDataURL(j)}else P(null)}};return p.jsxs("div",{className:"space-y-2",children:[p.jsx("div",{className:"flex items-center justify-between gap-2",children:p.jsx("label",{className:"text-sm font-medium text-csp-black",children:r})}),p.jsx("p",{className:"text-xs text-csp-black/70",children:s??"Adjunta el comprobante o archivo solicitado."}),!q&&!d?p.jsx("p",{className:"text-xs text-csp-black/70",children:"Selecciona un archivo desde tu dispositivo. Se mostrará una vista previa."}):null,q&&!d?p.jsxs("div",{className:"rounded-md border border-csp-accent/40 bg-csp-white p-2 text-xs text-csp-black/80",children:[p.jsx("p",{className:"font-medium text-csp-primary",children:F}),p.jsx("p",{className:"mt-1",children:"Archivo cargado correctamente. Si lo necesitas, puedes cambiarlo."})]}):null,T&&d?p.jsxs("div",{className:"rounded-md border border-csp-primary/30 overflow-hidden bg-white p-2 space-y-2",children:[p.jsx("img",{src:T,alt:d.name,className:"w-full h-40 object-cover rounded"}),p.jsxs("div",{className:"text-xs space-y-1",children:[p.jsx("p",{className:"font-medium text-csp-primary",children:d.name}),p.jsx("p",{className:"text-csp-black/60",children:Vo(d.size)})]})]}):null,p.jsx("div",{className:ut("rounded-md border-2 border-dashed border-csp-neutral/70 bg-csp-soft p-4","focus-within:border-csp-blue",(o||k)&&"border-csp-error",(d||q)&&"border-csp-accent/70"),children:p.jsxs("label",{className:"flex flex-col items-center justify-center cursor-pointer gap-3",children:[p.jsxs("div",{className:"text-center",children:[p.jsx("p",{className:"text-csp-black font-medium text-sm",children:"Arrastra o selecciona el archivo"}),p.jsx("p",{className:"text-xs text-csp-black/70 mt-1",children:n==="studentIdUploader"?"PDF, PNG, JPG/JPEG - máximo 2MB":"PDF, PNG, JPG/JPEG - máximo 3MB"})]}),p.jsx("input",{type:"file",onChange:J,accept:".pdf,.png,.jpg,.jpeg",className:"hidden"}),p.jsx("button",{type:"button",onClick:z=>{z.preventDefault(),z.currentTarget.closest("label")?.querySelector('input[type="file"]')?.click()},className:"bg-csp-blue text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-csp-primary transition",children:d||q?"Cambiar archivo":"Seleccionar archivo"})]})}),k?p.jsxs("p",{className:"form-error flex items-start gap-1",children:[p.jsx("span",{"aria-hidden":"true",className:"font-semibold",children:"!"}),p.jsx("span",{children:k})]}):null,o?p.jsxs("p",{className:"form-error flex items-start gap-1",children:[p.jsx("span",{"aria-hidden":"true",className:"font-semibold",children:"!"}),p.jsx("span",{children:o})]}):null]})}function Cn({error:n}){return n?p.jsxs("p",{className:"form-error flex items-start gap-1",children:[p.jsx("span",{"aria-hidden":"true",className:"font-semibold",children:"!"}),p.jsx("span",{children:n})]}):null}function de({label:n,error:e,className:t,id:r,...s}){const o=e&&r?`${r}-error`:void 0,a=[s["aria-describedby"],o].filter(Boolean).join(" ")||void 0;return p.jsxs("div",{className:"space-y-1",children:[n?p.jsx("label",{className:"text-sm font-medium text-csp-black",htmlFor:r,children:n}):null,p.jsx("input",{className:ut("h-11 w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",e&&"border-csp-error focus:border-csp-error focus:ring-csp-error/20",t),"aria-describedby":a,"aria-invalid":e?"true":void 0,id:r,...s}),p.jsx(Cn,{error:e})]})}function io({label:n,error:e,className:t,id:r,...s}){const o=e&&r?`${r}-error`:void 0,a=[s["aria-describedby"],o].filter(Boolean).join(" ")||void 0;return p.jsxs("div",{className:"space-y-1",children:[n?p.jsx("label",{className:"text-sm font-medium text-csp-black",htmlFor:r,children:n}):null,p.jsx("textarea",{className:ut("w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 py-2 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",e&&"border-csp-error focus:border-csp-error focus:ring-csp-error/20",t),"aria-describedby":a,"aria-invalid":e?"true":void 0,id:r,...s}),p.jsx(Cn,{error:e})]})}function lu({label:n,error:e,options:t,placeholder:r,className:s,id:o,...a}){const u=e&&o?`${o}-error`:void 0,h=[a["aria-describedby"],u].filter(Boolean).join(" ")||void 0;return p.jsxs("div",{className:"space-y-1",children:[n?p.jsx("label",{className:"text-sm font-medium text-csp-black",htmlFor:o,children:n}):null,p.jsxs("select",{className:ut("h-11 w-full rounded-md border border-csp-neutral/70 bg-csp-white px-3 text-sm text-csp-black outline-none transition focus:border-csp-blue focus:ring-2 focus:ring-csp-blue/25",e&&"border-csp-error focus:border-csp-error focus:ring-csp-error/20",s),"aria-describedby":h,"aria-invalid":e?"true":void 0,id:o,...a,children:[r?p.jsx("option",{value:"",children:r}):null,t.map(d=>p.jsx("option",{value:d.value,children:d.label},d.value))]}),p.jsx(Cn,{error:e})]})}function ET({steps:n,currentStep:e,stepStates:t,onStepClick:r}){function s(o,a){return o==="valid"?"bg-csp-accent text-csp-white":o==="invalid"?"bg-csp-error text-csp-white":a?"bg-csp-primary text-csp-white":"bg-csp-soft text-csp-primary border border-csp-primary/25"}return p.jsx("div",{className:"w-full overflow-x-auto",children:p.jsx("ol",{className:"flex min-w-max items-center gap-3",children:n.map((o,a)=>{const u=a===e,h=t[a]??"default";return p.jsxs("li",{className:"flex items-center gap-3",children:[p.jsxs("button",{className:"flex flex-col items-center gap-1",onClick:()=>r(a),type:"button",children:[p.jsx("div",{className:ut("flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",s(h,u)),children:h==="valid"?"✓":a+1}),p.jsx("span",{className:ut("whitespace-nowrap text-xs font-medium",u?"text-csp-primary":"text-csp-black/65"),children:o})]}),a<n.length-1?p.jsx("div",{className:"h-[2px] w-8 bg-csp-neutral/30"}):null]},o)})})})}function Es({children:n,variant:e="default"}){const t={default:"bg-csp-primary text-csp-white",accent:"bg-csp-accent text-csp-white",success:"bg-csp-accent/15 text-csp-accent"};return p.jsx("span",{className:ut("inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",t[e]),children:n})}function fr({children:n,className:e}){return p.jsx("div",{className:ut("rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp",e),children:n})}function oo({children:n,className:e,variant:t="primary",isLoading:r=!1,disabled:s,...o}){const a={primary:"bg-csp-blue text-csp-white hover:bg-csp-primary focus-visible:ring-csp-blue",secondary:"border border-csp-primary text-csp-primary hover:bg-csp-soft focus-visible:ring-csp-primary",ghost:"border border-transparent text-csp-primary hover:bg-csp-soft focus-visible:ring-csp-primary"};return p.jsx("button",{className:ut("inline-flex h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60",a[t],e),disabled:s||r,...o,children:r?"Procesando...":n})}function IT({message:n}){return p.jsx("div",{className:"fixed right-4 top-4 z-50 rounded-md border border-csp-blue/30 bg-csp-blue/10 px-4 py-3 text-sm font-medium text-csp-blue shadow-csp",role:"status",children:n})}function TT({category:n}){const[e,t]=re.useState(()=>Jd(n)),r=re.useMemo(()=>{const A=Wd(n),R=e.teamSize??3;return A.filter(O=>O==="responsible"?e.category==="colegios"||R<3:!0)},[n,e.teamSize,e.category]),s=re.useMemo(()=>r.map(A=>gT[A]),[r]),[o,a]=re.useState(0),[u,h]=re.useState(()=>r.map(()=>"default")),[d,_]=re.useState({}),[T,P]=re.useState({}),[k,D]=re.useState({}),[$,U]=re.useState(!1),[q,F]=re.useState("idle"),[J,z]=re.useState(""),[j,H]=re.useState(""),[E,g]=re.useState(!1),[y,I]=re.useState({}),[v,w]=re.useState(0),m=r[o],Ae=o>0,st=o===r.length-1,We=Object.values(y).some(Boolean),Kr=$||!!k[m];re.useEffect(()=>{const A=window.setTimeout(()=>{const R=window.localStorage.getItem(ro);if(!R){g(!0);return}const O=yT(R,n);O&&(t(O),H("Se restauró un borrador.")),g(!0)},0);return()=>window.clearTimeout(A)},[n]),re.useEffect(()=>{const A=e.teamSize??3;w(R=>Math.min(R,Math.max(0,A-1)))},[e.teamSize]),re.useEffect(()=>{E&&window.localStorage.setItem(ro,JSON.stringify(_T(e)))},[e,E]),re.useEffect(()=>{if(!j)return;const A=window.setTimeout(()=>H(""),3e3);return()=>window.clearTimeout(A)},[j]);const $t=q==="saving"?"Guardando inscripción...":q==="success"?"Inscripción enviada":We?"Subiendo archivo...":"",X=re.useMemo(()=>Object.keys(d).length?Object.fromEntries(Object.entries(d).filter(([A])=>Kr?!0:!!T[A])):{},[d,Kr,T]),vi=(A,R)=>{h(O=>{const V=[...O];return V[A]=Object.keys(R).length?"invalid":"valid",V})},fn=A=>{const R=r[A],O=Qt(e,R);return vi(A,O),O},qt=A=>{P(R=>R[A]?R:{...R,[A]:!0})},ee=A=>{qt(A);const R=fn(o);_(R)},Fe=(A,R)=>{t(O=>({...O,[A]:R}))},Ne=(A,R)=>{t(O=>{const V=[...O.members];return V[A]={...V[A],...R},{...O,members:V}})},qn=(A,R)=>{I(O=>({...O,[A]:R}))},zn=A=>{t(R=>{const O=Hn(R.members,A);return{...R,teamSize:A,members:O}})},Hn=(A,R)=>{const O=[...A];for(;O.length<R;)O.push(Jr(`member-${O.length+1}`));return O.slice(0,R)},Jr=A=>({id:A,firstName:"",lastName:"",age:"",email:"",whatsapp:"",career:"",universityYear:"",schoolGrade:"",about:"",linkedin:"",studentIdFile:null}),Ei=A=>{We||q==="saving"||(fn(o),_({}),a(A))},Ii=()=>{if(We||q==="saving")return;D(R=>({...R,[m]:!0}));const A=fn(o);_(A),!(Object.keys(A).length>0)&&a(R=>Math.min(R+1,r.length-1))},Qr=()=>{We||q==="saving"||(_({}),a(A=>Math.max(A-1,0)))},Gn=We||q==="saving",Yr=async()=>{if(We)return;U(!0),D(r.reduce((O,V)=>({...O,[V]:!0}),{}));const A=mT(e),R=r.map(O=>Object.keys(Qt(e,O)).length?"invalid":"valid");if(h(R),_(A),Object.keys(A).length>0){z("Hay campos pendientes por corregir antes de enviar."),await(await Sf(async()=>{const{default:V}=await import("./sweetalert2.esm.all.i0D1jcg2.js");return{default:V}},[])).default.fire({title:"Revisa algunos campos",text:"Hay información que falta o necesita corregirse. Te marcamos los campos para que puedas revisarlos.",confirmButtonText:"Entendido",icon:"warning"});return}z(""),F("saving");try{const O={...e};if(O.members=await Promise.all(e.members.map(async Oe=>{if(Oe.studentIdFile&&typeof Oe.studentIdFile=="object"&&"size"in Oe.studentIdFile&&!("fileUrl"in Oe.studentIdFile)){const Ke=Oe.studentIdFile,Zr=await Xr(Ke,"studentIdUploader");return{...Oe,studentIdFile:Zr}}return Oe})),e.category==="colegios"){const Oe=Array.isArray(e.schoolImageConsentFiles)?e.schoolImageConsentFiles:e.schoolImageConsentFiles?[e.schoolImageConsentFiles]:[];O.schoolImageConsentFiles=await Promise.all(Oe.map(async Ke=>Ke&&typeof Ke=="object"&&"size"in Ke&&!("fileUrl"in Ke)?Xr(Ke,"consentUploader"):Ke))}const V=await oT(O),ve=wm(O,V);console.log("[EMAIL PREVIEW] Pendiente integrar con Resend / SendGrid / Apps Script / Cloud Functions",ve),F("success"),window.localStorage.removeItem(ro),window.location.assign(`/inscripcion/exito?id=${V}`)}catch(O){z(O instanceof Error?O.message:"No fue posible enviar la inscripción."),F("idle")}},Xr=async(A,R)=>{const[O]=await vT.uploadFiles(R,{files:[A]});if(!O)throw new Error("No file was uploaded");return{fileName:O.name,fileSize:O.size,fileType:O.type,fileUrl:O.ufsUrl||"",fileKey:O.key,uploadedAt:new Date().toISOString(),purpose:R==="studentIdUploader"?"student-id":"image-consent",provider:"uploadthing"}};return p.jsxs(p.Fragment,{children:[j?p.jsx(IT,{message:j}):null,p.jsxs(fr,{className:"space-y-5",children:[p.jsx(ET,{currentStep:o,onStepClick:Ei,stepStates:u,steps:s}),$t?p.jsx("p",{className:"rounded-md bg-csp-soft px-3 py-2 text-sm text-csp-primary",children:$t}):null,J?p.jsx("p",{className:"rounded-md bg-csp-error/10 p-3 text-sm text-csp-error",children:J}):null,m==="team"?p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"flex items-center justify-between rounded-md bg-csp-soft p-3",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"font-display text-lg font-semibold text-csp-primary",children:"Datos del equipo"}),p.jsx("p",{className:"text-sm text-csp-black/70",children:"Completa la información general para iniciar la inscripción."})]}),p.jsx(Es,{variant:"accent",children:e.category==="colegios"?"Colegios":"Universidades"})]}),p.jsx(de,{error:X.teamName,id:"teamName",label:"Nombre del equipo *",onChange:A=>Fe("teamName",A.target.value),onBlur:()=>ee("teamName"),value:e.teamName}),p.jsx(de,{error:X.institution,id:"institution",label:e.category==="colegios"?"Colegio / institución educativa *":"Universidad / institución *",onChange:A=>Fe("institution",A.target.value),onBlur:()=>ee("institution"),value:e.institution}),p.jsx(lu,{error:X.discoverySource,id:"discoverySource",label:"¿Cómo conocieron la Copa? *",onChange:A=>Fe("discoverySource",A.target.value),onBlur:()=>ee("discoverySource"),options:Im,placeholder:"Selecciona una opción",value:e.discoverySource}),e.discoverySource==="otro"?p.jsx(de,{error:X.discoverySourceOther,id:"discoverySourceOther",label:"Especifica la fuente *",onChange:A=>Fe("discoverySourceOther",A.target.value),onBlur:()=>ee("discoverySourceOther"),value:e.discoverySourceOther??""}):null,p.jsx(io,{error:X.teamDescription,id:"teamDescription",label:"Descripción breve del equipo *",onChange:A=>Fe("teamDescription",A.target.value),onBlur:()=>ee("teamDescription"),rows:4,value:e.teamDescription}),p.jsxs("div",{className:"rounded-md border border-csp-primary/20 bg-csp-soft p-3",children:[p.jsxs("div",{className:"mb-2 flex flex-wrap items-center gap-2",children:[p.jsx("p",{className:"text-sm font-semibold text-csp-primary",children:"Usuario de OmegaUp"}),p.jsx(Es,{children:"Obligatorio para competir"})]}),p.jsx(de,{error:X.teamOmegaUpUser,id:"teamOmegaUpUser",label:"Usuario de OmegaUp del equipo *",onChange:A=>Fe("teamOmegaUpUser",A.target.value),onBlur:()=>ee("teamOmegaUpUser"),value:e.teamOmegaUpUser}),p.jsx("p",{className:"mt-1 text-xs text-csp-black/70",children:"Usaremos este usuario para registrar y validar la participación del equipo en la plataforma de competencia."})]}),p.jsx(de,{error:X.contactEmail,id:"contactEmail",label:"Correo principal (opcional)",onChange:A=>Fe("contactEmail",A.target.value),onBlur:()=>ee("contactEmail"),type:"email",value:e.contactEmail??""}),p.jsxs("div",{className:"rounded-md border-2 border-csp-accent/20 bg-gradient-to-br from-csp-accent/5 to-csp-primary/5 p-4",children:[p.jsx("label",{className:"text-sm font-semibold text-csp-primary block mb-3",children:"¿Cuántos integrantes tiene el equipo? *"}),p.jsx("div",{className:"flex gap-3",children:[1,2,3].map(A=>p.jsxs("button",{type:"button",onClick:()=>zn(A),className:`flex-1 py-3 rounded-md font-semibold transition ${e.teamSize===A?"bg-csp-primary text-csp-white shadow-lg scale-105":"bg-csp-white text-csp-primary border-2 border-csp-primary/30 hover:border-csp-primary/60"}`,children:[A," ",A===1?"persona":"personas"]},A))}),(e.teamSize??3)<3?p.jsx("p",{className:"mt-3 text-xs text-csp-accent font-medium",children:"Por la complejidad del desafío, no se recomienda grupos de menos de 3 personas."}):null]})]}):null,m==="members"?p.jsxs("div",{"data-step":"members",className:"space-y-6",children:[p.jsx("div",{className:"rounded-md bg-csp-soft p-4",children:p.jsxs("div",{className:"flex items-start justify-between gap-4",children:[p.jsxs("div",{className:"flex-1",children:[p.jsx("h2",{className:"font-display text-lg font-semibold text-csp-primary",children:"Integrantes del equipo"}),p.jsx("p",{className:"mt-1 text-sm text-csp-black/70",children:"Completa los datos de cada integrante. Desliza horizontalmente para ver el siguiente."})]}),p.jsx("div",{className:"bg-csp-primary/10 rounded-lg px-3 py-2 whitespace-nowrap",children:p.jsxs("p",{className:"text-sm font-semibold text-csp-primary",children:[(v??0)+1," de ",e.teamSize??3]})})]})}),p.jsxs("div",{className:"relative group",children:[p.jsx("button",{type:"button","aria-label":"Integrante anterior",onClick:()=>w(A=>Math.max(A-1,0)),disabled:(v??0)<=0,className:"absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-csp-primary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-csp-primary/50",children:p.jsx("span",{className:"text-xl font-bold",children:"‹"})}),p.jsx("div",{className:"overflow-hidden rounded-lg border-2 border-csp-primary/20",children:p.jsx("div",{className:"flex transition-transform duration-300",style:{transform:`translateX(-${(v??0)*100}%)`},children:e.members.slice(0,e.teamSize??3).map((A,R)=>{const O=`members.${R}`;return p.jsx("div",{className:"min-w-full flex-shrink-0 p-6",children:p.jsxs("div",{className:"rounded-lg border-2 border-csp-accent/30 bg-gradient-to-br from-csp-primary/8 to-csp-accent/8 p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow",children:[p.jsxs("div",{className:"flex items-center gap-3 pb-4 border-b border-csp-primary/15",children:[p.jsx("div",{className:"flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-csp-primary to-csp-accent text-base font-bold text-csp-white shadow-md",children:R+1}),p.jsxs("div",{className:"flex-1",children:[p.jsxs("h3",{className:"font-display font-semibold text-csp-primary text-base",children:["Integrante ",R+1]}),R===0?p.jsx("p",{className:"text-xs text-csp-accent font-semibold",children:"Capitán del equipo"}):null]})]}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsx(de,{error:X[`${O}.firstName`],id:`member-${R}-firstName`,label:"Nombre *",placeholder:"Ej. Juan",onChange:V=>Ne(R,{firstName:V.target.value}),onBlur:()=>ee(`${O}.firstName`),value:A.firstName}),p.jsx(de,{error:X[`${O}.lastName`],id:`member-${R}-lastName`,label:"Apellido *",placeholder:"Ej. Pérez",onChange:V=>Ne(R,{lastName:V.target.value}),onBlur:()=>ee(`${O}.lastName`),value:A.lastName})]}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsx(de,{error:X[`${O}.age`],id:`member-${R}-age`,label:"Edad *",placeholder:"Ej. 17",onChange:V=>Ne(R,{age:V.target.value?Number(V.target.value):""}),onBlur:()=>ee(`${O}.age`),type:"number",value:A.age}),p.jsx(de,{error:X[`${O}.email`],id:`member-${R}-email`,label:"Correo electrónico *",placeholder:"correo@ejemplo.com",onChange:V=>Ne(R,{email:V.target.value}),onBlur:()=>ee(`${O}.email`),type:"email",value:A.email})]}),p.jsx(de,{id:`member-${R}-whatsapp`,label:"WhatsApp",placeholder:"Código país + número, ej. +503 7123 4567",onChange:V=>Ne(R,{whatsapp:V.target.value}),onBlur:()=>ee(`${O}.whatsapp`),value:A.whatsapp??""}),e.category==="universidades"?p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsx(de,{error:X[`${O}.career`],id:`member-${R}-career`,label:"Carrera *",onChange:V=>Ne(R,{career:V.target.value}),onBlur:()=>ee(`${O}.career`),value:A.career??""}),p.jsx(de,{error:X[`${O}.universityYear`],id:`member-${R}-universityYear`,label:"Año de estudio *",onChange:V=>Ne(R,{universityYear:V.target.value}),onBlur:()=>ee(`${O}.universityYear`),value:A.universityYear??""})]}),p.jsx(de,{error:X[`${O}.linkedin`],id:`member-${R}-linkedin`,label:"LinkedIn (opcional)",onChange:V=>Ne(R,{linkedin:V.target.value}),onBlur:()=>ee(`${O}.linkedin`),placeholder:"https://www.linkedin.com/in/tu-perfil",type:"url",value:A.linkedin??""})]}):p.jsx(de,{error:X[`${O}.schoolGrade`],id:`member-${R}-schoolGrade`,label:"Grado / año escolar *",placeholder:"Ej. 3° año",onChange:V=>Ne(R,{schoolGrade:V.target.value}),onBlur:()=>ee(`${O}.schoolGrade`),value:A.schoolGrade??""}),p.jsx(io,{id:`member-${R}-about`,label:"Sobre ti (opcional)",onChange:V=>Ne(R,{about:V.target.value}),onBlur:()=>ee(`${O}.about`),rows:3,value:A.about??""}),p.jsx(cu,{endpoint:"studentIdUploader",error:X[`${O}.studentIdFile`],label:"Carné estudiantil o documento de estudiante *",onChange:V=>Ne(R,{studentIdFile:V}),onUploadingChange:V=>qn("members",V),value:A.studentIdFile??null})]})},A.id)})})}),p.jsx("button",{type:"button","aria-label":"Siguiente integrante",onClick:()=>w(A=>{const R=e.teamSize??3;return Math.min(A+1,Math.max(0,R-1))}),disabled:(v??0)>=Math.max(0,(e.teamSize??3)-1),className:"absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-csp-primary text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:bg-csp-primary/50",children:p.jsx("span",{className:"text-xl font-bold",children:"›"})})]}),p.jsxs("div",{className:"flex items-center justify-center gap-3",children:[p.jsx("div",{className:"flex gap-2",children:Array.from({length:e.teamSize??3}).map((A,R)=>p.jsx("button",{type:"button","aria-label":`Ir al integrante ${R+1}`,"aria-current":R===v||void 0,onClick:()=>w(R),className:`h-3 transition-all ${R===v?"w-8 bg-csp-primary rounded-full":"w-3 bg-csp-primary/40 rounded-full hover:bg-csp-primary/60"}`},R))}),p.jsx("p",{className:"text-xs text-csp-black/60 font-medium",children:"Toca los puntos o desliza para navegar"})]})]}):null,m==="responsible"?p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{className:"rounded-md bg-csp-soft p-3",children:[p.jsx("h2",{className:"font-display text-lg font-semibold text-csp-primary",children:"Responsable institucional"}),p.jsx("p",{className:"mt-1 text-sm text-csp-black/70",children:"Registra a la persona adulta o institucional que acompañará la inscripción del equipo."})]}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsx(de,{error:X["responsible.firstName"],id:"responsible-firstName",label:"Nombre *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,firstName:A.target.value}})),onBlur:()=>ee("responsible.firstName"),value:e.responsible.firstName}),p.jsx(de,{error:X["responsible.lastName"],id:"responsible-lastName",label:"Apellido *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,lastName:A.target.value}})),onBlur:()=>ee("responsible.lastName"),value:e.responsible.lastName})]}),p.jsx(de,{error:X["responsible.email"],id:"responsible-email",label:"Correo electrónico *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,email:A.target.value}})),onBlur:()=>ee("responsible.email"),type:"email",value:e.responsible.email}),p.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[p.jsx(de,{error:X["responsible.phone"],id:"responsible-phone",label:"Número de teléfono / WhatsApp *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,phone:A.target.value}})),onBlur:()=>ee("responsible.phone"),value:e.responsible.phone}),p.jsx(de,{error:X["responsible.institution"],id:"responsible-institution",label:"Institución *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,institution:A.target.value}})),onBlur:()=>ee("responsible.institution"),value:e.responsible.institution})]}),p.jsx(lu,{error:X["responsible.role"],id:"responsible-role",label:"Rol *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,role:A.target.value}})),onBlur:()=>ee("responsible.role"),options:Tm,placeholder:"Selecciona un rol",value:e.responsible.role}),p.jsx(de,{error:X["responsible.relationship"],id:"responsible-relationship",label:"Relación con el equipo *",onChange:A=>t(R=>({...R,responsible:{...R.responsible,relationship:A.target.value}})),onBlur:()=>ee("responsible.relationship"),value:e.responsible.relationship}),p.jsx(io,{id:"responsible-comments",label:"Comentarios adicionales (opcional)",onChange:A=>t(R=>({...R,responsible:{...R.responsible,comments:A.target.value}})),onBlur:()=>ee("responsible.comments"),rows:3,value:e.responsible.comments??""})]}):null,m==="confirmation"?p.jsxs("div",{className:"space-y-4",children:[p.jsxs(fr,{className:"space-y-2",children:[p.jsx("h2",{className:"font-display text-lg font-semibold text-csp-primary",children:"Información del equipo"}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Nombre:"})," ",e.teamName||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Categoría:"})," ",e.category]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Institución:"})," ",e.institution||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Fuente:"})," ",e.discoverySource||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Descripción:"})," ",e.teamDescription||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Usuario de OmegaUp:"})," ",e.teamOmegaUpUser||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Correo principal:"})," ",e.contactEmail||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Estado inicial:"})," ",p.jsx(Es,{variant:"success",children:"Recibida"})]})]}),p.jsxs(fr,{className:"space-y-3",children:[p.jsx("h3",{className:"font-display text-lg font-semibold text-csp-primary",children:"Integrantes"}),e.members.map((A,R)=>p.jsxs("div",{className:"rounded-md border border-csp-soft p-3 text-sm",children:[p.jsxs("div",{className:"mb-1 flex items-center gap-2",children:[p.jsxs("p",{className:"font-medium text-csp-primary",children:["Miembro ",R+1,": ",ws(A.firstName,A.lastName)||"-"]}),R===0?p.jsx(Es,{children:"Capitán"}):null]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Nombre:"})," ",ws(A.firstName,A.lastName)||"-"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Correo:"})," ",A.email||"-"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Edad:"})," ",A.age||"-"]}),p.jsxs("p",{children:[p.jsx("strong",{children:"WhatsApp:"})," ",A.whatsapp||"-"]}),p.jsxs("p",{children:[p.jsxs("strong",{children:[e.category==="universidades"?"Carrera/Año":"Grado escolar",":"]})," ",e.category==="universidades"?`${A.career||"-"} / ${A.universityYear||"-"}`:A.schoolGrade||"-"]}),e.category==="universidades"?p.jsxs("p",{children:[p.jsx("strong",{children:"LinkedIn:"})," ",A.linkedin||"-"]}):null,p.jsxs("p",{children:[p.jsx("strong",{children:"Documento:"})," ",A.studentIdFile?A.studentIdFile.fileName||A.studentIdFile.name||"Documento adjunto":"No adjunto"]})]},A.id))]}),e.category==="colegios"?p.jsxs(fr,{className:"space-y-2",children:[p.jsx("h3",{className:"font-display text-lg font-semibold text-csp-primary",children:"Responsable"}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Nombre:"})," ",ws(e.responsible.firstName,e.responsible.lastName)||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Correo:"})," ",e.responsible.email||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Teléfono:"})," ",e.responsible.phone||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Institución:"})," ",e.responsible.institution||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Rol:"})," ",e.responsible.role||"-"]}),p.jsxs("p",{className:"text-sm",children:[p.jsx("strong",{children:"Relación:"})," ",e.responsible.relationship||"-"]}),p.jsxs("div",{className:"space-y-2 pt-2",children:[p.jsx("p",{className:"text-sm font-medium text-csp-primary",children:"Consentimientos de uso de imagen"}),vs(e.schoolImageConsentFiles).length>0?p.jsx("div",{className:"space-y-2",children:vs(e.schoolImageConsentFiles).map((A,R)=>{const O=A.fileName||A.name||`Archivo ${R+1}`,V=A.fileSize||A.size||0;return p.jsxs("div",{className:"rounded-md border border-csp-accent/30 bg-csp-white p-2 text-xs",children:[p.jsx("p",{className:"font-medium text-csp-primary",children:O}),p.jsx("p",{className:"text-csp-black/60",children:V?Vo(V):""})]},A.fileKey??O)})}):p.jsx("p",{className:"text-xs text-csp-black/60",children:"No hay consentimientos adjuntos"})]})]}):null,p.jsxs(fr,{className:"space-y-4",children:[p.jsx("h3",{className:"font-display text-lg font-semibold text-csp-primary",children:"Confirmaciones y consentimientos"}),p.jsxs("label",{className:"flex items-start gap-2 text-sm",children:[p.jsx("input",{checked:e.dataReviewAccepted,className:"mt-1",onChange:A=>{qt("dataReviewAccepted");const R={...e,dataReviewAccepted:A.target.checked};t(R),_(Qt(R,m))},onBlur:()=>ee("dataReviewAccepted"),type:"checkbox"}),p.jsx("span",{children:"He revisado que la información ingresada es correcta y confirmo que todos los integrantes cumplen con las bases de la competencia."})]}),p.jsx(Cn,{error:X.dataReviewAccepted}),p.jsxs("label",{className:"flex items-start gap-2 text-sm",children:[p.jsx("input",{checked:e.privacyAccepted,className:"mt-1",onChange:A=>{qt("privacyAccepted");const R={...e,privacyAccepted:A.target.checked};t(R),_(Qt(R,m))},onBlur:()=>ee("privacyAccepted"),type:"checkbox"}),p.jsx("span",{children:"Acepto el tratamiento de los datos personales para fines relacionados con la Copa Salvadoreña de Programación 2026."})]}),p.jsx(Cn,{error:X.privacyAccepted}),e.category==="universidades"?p.jsxs(p.Fragment,{children:[p.jsxs("label",{className:"flex items-start gap-2 text-sm",children:[p.jsx("input",{checked:!!e.universityImageConsentAccepted,className:"mt-1",onChange:A=>{qt("universityImageConsentAccepted");const R={...e,universityImageConsentAccepted:A.target.checked};t(R),_(Qt(R,m))},onBlur:()=>ee("universityImageConsentAccepted"),type:"checkbox"}),p.jsx("span",{children:"Acepto el uso de imagen, nombre de equipo y afiliación institucional en fotografías, transmisiones y material oficial de la Copa Salvadoreña de Programación 2026."})]}),p.jsx(Cn,{error:X.universityImageConsentAccepted})]}):p.jsxs("div",{className:"space-y-2",children:[p.jsx("p",{className:"text-sm font-medium text-csp-primary",children:"Consentimientos de uso de imagen *"}),vs(e.schoolImageConsentFiles).length>0?p.jsx("div",{className:"space-y-2",children:vs(e.schoolImageConsentFiles).map((A,R)=>{const O=A.fileName||A.name||`Archivo ${R+1}`,V=A.fileSize||A.size||0;return p.jsxs("div",{className:"rounded-md border border-csp-accent/30 bg-csp-white p-2 text-xs",children:[p.jsx("p",{className:"font-medium text-csp-primary",children:O}),p.jsx("p",{className:"text-csp-black/60",children:V?Vo(V):""})]},A.fileKey??O)})}):p.jsx("p",{className:"text-xs text-csp-black/60",children:"No hay consentimientos adjuntos"}),p.jsx(cu,{description:"Adjunta los consentimientos de uso de imagen firmados por los responsables correspondientes de cada estudiante.",endpoint:"consentUploader",error:X.schoolImageConsentFiles,label:"Cargar consentimientos de uso de imagen *",multiple:!0,onChange:A=>t(R=>{const O={...R,schoolImageConsentFiles:A??[]};return _(Qt(O,m)),O}),value:e.schoolImageConsentFiles??[]})]})]})]}):null,p.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-t border-csp-soft pt-4",children:[p.jsx(oo,{disabled:!Ae||We||q==="saving",onClick:Qr,type:"button",variant:"secondary",children:"Atrás"}),st?p.jsx(oo,{isLoading:q==="saving",onClick:Yr,type:"button",disabled:Gn,children:"Enviar inscripción"}):p.jsx(oo,{disabled:We||q==="saving",onClick:Ii,type:"button",children:"Siguiente"})]})]})]})}function wT(n){return n==="colegios"||n==="universidades"?n:null}function ST(){const[n,e]=re.useState(null),[t,r]=re.useState(!1);return re.useEffect(()=>{const s=new URLSearchParams(window.location.search),o=wT(s.get("categoria")?.trim()??null);if(!o){window.location.replace("/inscripcion");return}e(o),r(!0)},[]),!t||!n?p.jsx("div",{className:"rounded-lg border border-csp-soft bg-csp-white p-6 shadow-csp",children:p.jsx("p",{className:"text-sm text-csp-black/70",children:"Cargando formulario..."})}):p.jsx(TT,{category:n})}export{ST as RegistrationRoute};
