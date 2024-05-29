import{b as E,o as h,u as N,H as F}from"./transition.DUdFBSsx.js";import{x as b,s as x,j as S,d as L}from"./framework.BQiZN-Cb.js";function P(e){if(E.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var g=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(g||{}),O=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(O||{}),A=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(A||{});function M(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var y=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(y||{});function I(e,t=0){var r;return e===((r=P(e))==null?void 0:r.body)?!1:N(t,{0(){return e.matches(w)},1(){let o=e;for(;o!==null;){if(o.matches(w))return!0;o=o.parentElement}return!1}})}var T=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(T||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function C(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function D(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?r:!1}function _(e,t=r=>r){return e.slice().sort((r,o)=>{let l=t(r),n=t(o);if(l===null||n===null)return 0;let i=l.compareDocumentPosition(n);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function G(e,t,{sorted:r=!0,relativeTo:o=null,skipElements:l=[]}={}){var n;let i=(n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?n:document,u=Array.isArray(e)?r?_(e):e:M(e);l.length>0&&u.length>1&&(u=u.filter(d=>!l.includes(d))),o=o??i.activeElement;let p=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(o))-1;if(t&4)return Math.max(0,u.indexOf(o))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=t&32?{preventScroll:!0}:{},m=0,f=u.length,c;do{if(m>=f||m+f<=0)return 0;let d=s+m;if(t&16)d=(d+f)%f;else{if(d<0)return 3;if(d>=f)return 1}c=u[d],c==null||c.focus(a),m+=p}while(c!==i.activeElement);return t&6&&D(c)&&c.select(),2}function v(e,t,r){E.isServer||b(o=>{document.addEventListener(e,t,r),o(()=>document.removeEventListener(e,t,r))})}function $(e,t,r){E.isServer||b(o=>{window.addEventListener(e,t,r),o(()=>window.removeEventListener(e,t,r))})}function R(e,t,r=S(()=>!0)){function o(n,i){if(!r.value||n.defaultPrevented)return;let u=i(n);if(u===null||!u.getRootNode().contains(u))return;let p=function s(a){return typeof a=="function"?s(a()):Array.isArray(a)||a instanceof Set?a:[a]}(e);for(let s of p){if(s===null)continue;let a=s instanceof HTMLElement?s:h(s);if(a!=null&&a.contains(u)||n.composed&&n.composedPath().includes(a))return}return!I(u,y.Loose)&&u.tabIndex!==-1&&n.preventDefault(),t(n,u)}let l=x(null);v("pointerdown",n=>{var i,u;r.value&&(l.value=((u=(i=n.composedPath)==null?void 0:i.call(n))==null?void 0:u[0])||n.target)},!0),v("mousedown",n=>{var i,u;r.value&&(l.value=((u=(i=n.composedPath)==null?void 0:i.call(n))==null?void 0:u[0])||n.target)},!0),v("click",n=>{l.value&&(o(n,()=>l.value),l.value=null)},!0),v("touchend",n=>o(n,()=>n.target instanceof HTMLElement?n.target:null),!0),$("blur",n=>o(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var K=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(K||{});let U=L({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:o,...l}=e,n={"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return F({ourProps:n,theirProps:l,slot:{},attrs:r,slots:t,name:"Hidden"})}}});export{g as N,_ as O,G as P,C as S,O as T,K as a,$ as b,U as f,y as h,P as m,I as w,R as y};