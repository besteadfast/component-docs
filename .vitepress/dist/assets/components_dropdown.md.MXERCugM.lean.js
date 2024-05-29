import{o as y,u as B,c as pe,l as j,K as de,H as U,T as ce,t as K,p as he,N as X,a as g,S as ve}from"./chunks/transition.DUdFBSsx.js";import{b as be}from"./chunks/use-resolve-button-type.2n_ImYNw.js";import{y as fe,w as ke,h as ge,f as Ee,a as ye,O as me}from"./chunks/hidden.BNZQTbgH.js";import{s as m,j as E,d as M,a4 as F,X as xe,y as z,v as ee,a5 as J,F as te,z as Se,x as _e,R as A,N as Ce,o as V,e as H,w as L,I as C,k as I,n as N,a as l,t as W,r as ae,a2 as Pe,a3 as Oe,c as ie,E as we,D as Fe,b as f,a1 as se}from"./chunks/framework.BQiZN-Cb.js";function De(e){throw new Error("Unexpected object: "+e)}var x=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))(x||{});function Te(e,i){let a=i.resolveItems();if(a.length<=0)return null;let n=i.resolveActiveIndex(),t=n??-1,o=(()=>{switch(e.focus){case 0:return a.findIndex(u=>!i.resolveDisabled(u));case 1:{let u=a.slice().reverse().findIndex((v,k,s)=>t!==-1&&s.length-k-1>=t?!1:!i.resolveDisabled(v));return u===-1?u:a.length-1-u}case 2:return a.findIndex((u,v)=>v<=t?!1:!i.resolveDisabled(u));case 3:{let u=a.slice().reverse().findIndex(v=>!i.resolveDisabled(v));return u===-1?u:a.length-1-u}case 4:return a.findIndex(u=>i.resolveId(u)===e.id);case 5:return null;default:De(e)}})();return o===-1?n:o}function le(e={},i=null,a=[]){for(let[n,t]of Object.entries(e))oe(a,ne(i,n),t);return a}function ne(e,i){return e?e+"["+i+"]":i}function oe(e,i,a){if(Array.isArray(a))for(let[n,t]of a.entries())oe(e,ne(i,n.toString()),t);else a instanceof Date?e.push([i,a.toISOString()]):typeof a=="boolean"?e.push([i,a?"1":"0"]):typeof a=="string"?e.push([i,a]):typeof a=="number"?e.push([i,`${a}`]):a==null?e.push([i,""]):le(a,i,e)}function Be(e,i,a){let n=m(a==null?void 0:a.value),t=E(()=>e.value!==void 0);return[E(()=>t.value?e.value:n.value),function(o){return t.value||(n.value=o),i==null?void 0:i(o)}]}function Y(e){return[e.screenX,e.screenY]}function Re(){let e=m([-1,-1]);return{wasMoved(i){let a=Y(i);return e.value[0]===a[0]&&e.value[1]===a[1]?!1:(e.value=a,!0)},update(i){e.value=Y(i)}}}let G=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function Z(e){var i,a;let n=(i=e.innerText)!=null?i:"",t=e.cloneNode(!0);if(!(t instanceof HTMLElement))return n;let o=!1;for(let v of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))v.remove(),o=!0;let u=o?(a=t.innerText)!=null?a:"":n;return G.test(u)&&(u=u.replace(G,"")),u}function Ae(e){let i=e.getAttribute("aria-label");if(typeof i=="string")return i.trim();let a=e.getAttribute("aria-labelledby");if(a){let n=a.split(" ").map(t=>{let o=document.getElementById(t);if(o){let u=o.getAttribute("aria-label");return typeof u=="string"?u.trim():Z(o).trim()}return null}).filter(Boolean);if(n.length>0)return n.join(", ")}return Z(e).trim()}function Le(e){let i=m(""),a=m("");return()=>{let n=y(e);if(!n)return"";let t=n.innerText;if(i.value===t)return a.value;let o=Ae(n).trim().toLowerCase();return i.value=t,a.value=o,o}}function $e(e,i){return e===i}var Ie=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Ie||{}),Ve=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Ve||{}),Ne=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ne||{});function je(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let re=Symbol("ListboxContext");function q(e){let i=Ce(re,null);if(i===null){let a=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,q),a}return i}let Ue=M({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>$e},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:i,attrs:a,emit:n}){let t=m(1),o=m(null),u=m(null),v=m(null),k=m([]),s=m(""),r=m(null),P=m(1);function O(p=d=>d){let d=r.value!==null?k.value[r.value]:null,c=me(p(k.value.slice()),_=>y(_.dataRef.domRef)),b=d?c.indexOf(d):null;return b===-1&&(b=null),{options:c,activeOptionIndex:b}}let w=E(()=>e.multiple?1:0),[D,R]=Be(E(()=>e.modelValue),p=>n("update:modelValue",p),E(()=>e.defaultValue)),T=E(()=>D.value===void 0?B(w.value,{1:[],0:void 0}):D.value),h={listboxState:t,value:T,mode:w,compare(p,d){if(typeof e.by=="string"){let c=e.by;return(p==null?void 0:p[c])===(d==null?void 0:d[c])}return e.by(p,d)},orientation:E(()=>e.horizontal?"horizontal":"vertical"),labelRef:o,buttonRef:u,optionsRef:v,disabled:E(()=>e.disabled),options:k,searchQuery:s,activeOptionIndex:r,activationTrigger:P,closeListbox(){e.disabled||t.value!==1&&(t.value=1,r.value=null)},openListbox(){e.disabled||t.value!==0&&(t.value=0)},goToOption(p,d,c){if(e.disabled||t.value===1)return;let b=O(),_=Te(p===x.Specific?{focus:x.Specific,id:d}:{focus:p},{resolveItems:()=>b.options,resolveActiveIndex:()=>b.activeOptionIndex,resolveId:$=>$.id,resolveDisabled:$=>$.dataRef.disabled});s.value="",r.value=_,P.value=c??1,k.value=b.options},search(p){if(e.disabled||t.value===1)return;let d=s.value!==""?0:1;s.value+=p.toLowerCase();let c=(r.value!==null?k.value.slice(r.value+d).concat(k.value.slice(0,r.value+d)):k.value).find(_=>_.dataRef.textValue.startsWith(s.value)&&!_.dataRef.disabled),b=c?k.value.indexOf(c):-1;b===-1||b===r.value||(r.value=b,P.value=1)},clearSearch(){e.disabled||t.value!==1&&s.value!==""&&(s.value="")},registerOption(p,d){let c=O(b=>[...b,{id:p,dataRef:d}]);k.value=c.options,r.value=c.activeOptionIndex},unregisterOption(p){let d=O(c=>{let b=c.findIndex(_=>_.id===p);return b!==-1&&c.splice(b,1),c});k.value=d.options,r.value=d.activeOptionIndex,P.value=1},theirOnChange(p){e.disabled||R(p)},select(p){e.disabled||R(B(w.value,{0:()=>p,1:()=>{let d=F(h.value.value).slice(),c=F(p),b=d.findIndex(_=>h.compare(c,F(_)));return b===-1?d.push(c):d.splice(b,1),d}}))}};fe([u,v],(p,d)=>{var c;h.closeListbox(),ke(d,ge.Loose)||(p.preventDefault(),(c=y(u))==null||c.focus())},E(()=>t.value===0)),xe(re,h),pe(E(()=>B(t.value,{0:j.Open,1:j.Closed})));let S=E(()=>{var p;return(p=y(u))==null?void 0:p.closest("form")});return z(()=>{ee([S],()=>{if(!S.value||e.defaultValue===void 0)return;function p(){h.theirOnChange(e.defaultValue)}return S.value.addEventListener("reset",p),()=>{var d;(d=S.value)==null||d.removeEventListener("reset",p)}},{immediate:!0})}),()=>{let{name:p,modelValue:d,disabled:c,form:b,..._}=e,$={open:t.value===0,disabled:c,value:T.value};return J(te,[...p!=null&&T.value!=null?le({[p]:T.value}).map(([Q,ue])=>J(Ee,de({features:ye.Hidden,key:Q,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:b,name:Q,value:ue}))):[],U({ourProps:{},theirProps:{...a,...ce(_,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:$,slots:i,attrs:a,name:"Listbox"})])}}}),Me=M({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-listbox-button-${K()}`}},setup(e,{attrs:i,slots:a,expose:n}){let t=q("ListboxButton");n({el:t.buttonRef,$el:t.buttonRef});function o(s){switch(s.key){case g.Space:case g.Enter:case g.ArrowDown:s.preventDefault(),t.openListbox(),A(()=>{var r;(r=y(t.optionsRef))==null||r.focus({preventScroll:!0}),t.value.value||t.goToOption(x.First)});break;case g.ArrowUp:s.preventDefault(),t.openListbox(),A(()=>{var r;(r=y(t.optionsRef))==null||r.focus({preventScroll:!0}),t.value.value||t.goToOption(x.Last)});break}}function u(s){switch(s.key){case g.Space:s.preventDefault();break}}function v(s){t.disabled.value||(t.listboxState.value===0?(t.closeListbox(),A(()=>{var r;return(r=y(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})})):(s.preventDefault(),t.openListbox(),je(()=>{var r;return(r=y(t.optionsRef))==null?void 0:r.focus({preventScroll:!0})})))}let k=be(E(()=>({as:e.as,type:i.type})),t.buttonRef);return()=>{var s,r;let P={open:t.listboxState.value===0,disabled:t.disabled.value,value:t.value.value},{id:O,...w}=e,D={ref:t.buttonRef,id:O,type:k.value,"aria-haspopup":"listbox","aria-controls":(s=y(t.optionsRef))==null?void 0:s.id,"aria-expanded":t.listboxState.value===0,"aria-labelledby":t.labelRef.value?[(r=y(t.labelRef))==null?void 0:r.id,O].join(" "):void 0,disabled:t.disabled.value===!0?!0:void 0,onKeydown:o,onKeyup:u,onClick:v};return U({ourProps:D,theirProps:w,slot:P,attrs:i,slots:a,name:"ListboxButton"})}}}),qe=M({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-listbox-options-${K()}`}},setup(e,{attrs:i,slots:a,expose:n}){let t=q("ListboxOptions"),o=m(null);n({el:t.optionsRef,$el:t.optionsRef});function u(s){switch(o.value&&clearTimeout(o.value),s.key){case g.Space:if(t.searchQuery.value!=="")return s.preventDefault(),s.stopPropagation(),t.search(s.key);case g.Enter:if(s.preventDefault(),s.stopPropagation(),t.activeOptionIndex.value!==null){let r=t.options.value[t.activeOptionIndex.value];t.select(r.dataRef.value)}t.mode.value===0&&(t.closeListbox(),A(()=>{var r;return(r=y(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})}));break;case B(t.orientation.value,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return s.preventDefault(),s.stopPropagation(),t.goToOption(x.Next);case B(t.orientation.value,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return s.preventDefault(),s.stopPropagation(),t.goToOption(x.Previous);case g.Home:case g.PageUp:return s.preventDefault(),s.stopPropagation(),t.goToOption(x.First);case g.End:case g.PageDown:return s.preventDefault(),s.stopPropagation(),t.goToOption(x.Last);case g.Escape:s.preventDefault(),s.stopPropagation(),t.closeListbox(),A(()=>{var r;return(r=y(t.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case g.Tab:s.preventDefault(),s.stopPropagation();break;default:s.key.length===1&&(t.search(s.key),o.value=setTimeout(()=>t.clearSearch(),350));break}}let v=he(),k=E(()=>v!==null?(v.value&j.Open)===j.Open:t.listboxState.value===0);return()=>{var s,r,P,O;let w={open:t.listboxState.value===0},{id:D,...R}=e,T={"aria-activedescendant":t.activeOptionIndex.value===null||(s=t.options.value[t.activeOptionIndex.value])==null?void 0:s.id,"aria-multiselectable":t.mode.value===1?!0:void 0,"aria-labelledby":(O=(r=y(t.labelRef))==null?void 0:r.id)!=null?O:(P=y(t.buttonRef))==null?void 0:P.id,"aria-orientation":t.orientation.value,id:D,onKeydown:u,role:"listbox",tabIndex:0,ref:t.optionsRef};return U({ourProps:T,theirProps:R,slot:w,attrs:i,slots:a,features:X.RenderStrategy|X.Static,visible:k.value,name:"ListboxOptions"})}}}),ze=M({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-listbox.option-${K()}`}},setup(e,{slots:i,attrs:a,expose:n}){let t=q("ListboxOption"),o=m(null);n({el:o,$el:o});let u=E(()=>t.activeOptionIndex.value!==null?t.options.value[t.activeOptionIndex.value].id===e.id:!1),v=E(()=>B(t.mode.value,{0:()=>t.compare(F(t.value.value),F(e.value)),1:()=>F(t.value.value).some(h=>t.compare(F(h),F(e.value)))})),k=E(()=>B(t.mode.value,{1:()=>{var h;let S=F(t.value.value);return((h=t.options.value.find(p=>S.some(d=>t.compare(F(d),F(p.dataRef.value)))))==null?void 0:h.id)===e.id},0:()=>v.value})),s=Le(o),r=E(()=>({disabled:e.disabled,value:e.value,get textValue(){return s()},domRef:o}));z(()=>t.registerOption(e.id,r)),Se(()=>t.unregisterOption(e.id)),z(()=>{ee([t.listboxState,v],()=>{t.listboxState.value===0&&v.value&&B(t.mode.value,{1:()=>{k.value&&t.goToOption(x.Specific,e.id)},0:()=>{t.goToOption(x.Specific,e.id)}})},{immediate:!0})}),_e(()=>{t.listboxState.value===0&&u.value&&t.activationTrigger.value!==0&&A(()=>{var h,S;return(S=(h=y(o))==null?void 0:h.scrollIntoView)==null?void 0:S.call(h,{block:"nearest"})})});function P(h){if(e.disabled)return h.preventDefault();t.select(e.value),t.mode.value===0&&(t.closeListbox(),A(()=>{var S;return(S=y(t.buttonRef))==null?void 0:S.focus({preventScroll:!0})}))}function O(){if(e.disabled)return t.goToOption(x.Nothing);t.goToOption(x.Specific,e.id)}let w=Re();function D(h){w.update(h)}function R(h){w.wasMoved(h)&&(e.disabled||u.value||t.goToOption(x.Specific,e.id,0))}function T(h){w.wasMoved(h)&&(e.disabled||u.value&&t.goToOption(x.Nothing))}return()=>{let{disabled:h}=e,S={active:u.value,selected:v.value,disabled:h},{id:p,value:d,disabled:c,...b}=e,_={id:p,ref:o,role:"option",tabIndex:h===!0?void 0:-1,"aria-disabled":h===!0?!0:void 0,"aria-selected":v.value,disabled:void 0,onClick:P,onFocus:O,onPointerenter:D,onMouseenter:D,onPointermove:R,onMousemove:R,onPointerleave:T,onMouseleave:T};return U({ourProps:_,theirProps:b,slot:S,attrs:a,slots:i,name:"ListboxOption"})}}});const He={__name:"BaseDropdown",props:{buttonClasses:String,iconClasses:String,iconOpenClasses:String,optionClasses:String,optionsContainerClasses:String,optionActiveClasses:String,optionSelectedClasses:String,optionUnavailableClasses:String,options:Object,transitionClasses:Object},setup(e){const i=e,a=m(i.options.find(n=>n.isDefault)??i.options[0]);return(n,t)=>(V(),H(I(Ue),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=o=>a.value=o)},{default:L(()=>[C(I(Me),{class:N(e.buttonClasses)},{default:L(({open:o})=>[l("span",null,W(a.value.title),1),l("span",{class:N(o?e.iconOpenClasses:e.iconClasses)},[ae(n.$slots,"icon")],2)]),_:3},8,["class"]),C(I(ve),Pe(Oe(e.transitionClasses)),{default:L(()=>[C(I(qe),{class:N(e.optionsContainerClasses)},{default:L(()=>[(V(!0),ie(te,null,we(e.options,o=>(V(),H(I(ze),{as:"template",key:o.id,value:o,disabled:o.isUnavailable},{default:L(({active:u,selected:v})=>[l("li",{class:N(`
                        ${e.optionClasses} ${u?e.optionActiveClasses:""} ${v?e.optionSelectedClasses:""} ${o.isUnavailable?e.optionUnavailableClasses:""}
                    `)},W(o.title),3)]),_:2},1032,["value","disabled"]))),128))]),_:1},8,["class"])]),_:1},16)]),_:3},8,["modelValue"]))}},Ke={__name:"Dropdown",props:{options:Object},setup(e){return(i,a)=>(V(),H(He,{buttonClasses:"flex justify-between items-center w-full border rounded py-s2 px-s4 mb-s2 bg-transparent interact:bg-blue-100 transition duration-300",iconClasses:"transform rotate-0 transition-all duration-300",iconOpenClasses:"transform rotate-180 transition-all duration-300",optionsContainerClasses:"border rounded",optionClasses:"cursor-pointer w-full py-s2 px-s4 interact:bg-blue-100 interact:outline-none transition duration-300",optionActiveClasses:"bg-blue-100",optionSelectedClasses:"bg-blue-100",options:e.options,transitionClasses:{enter:"transition-scale duration-150 origin-top ease-in-out",enterFrom:"scale-y-0 opacity-0",enterTo:"scale-y-100 opacity-100",leave:"transition-scale duration-300 origin-top ease-in-out",leaveFrom:"scale-y-100 opacity-100",leaveTo:"scale-y-0 opacity-0"}},{icon:L(()=>[ae(i.$slots,"icon")]),_:3},8,["options"]))}},Qe=se("",4),Xe=l("h2",{id:"functionality",tabindex:"-1"},[f("Functionality "),l("a",{class:"header-anchor",href:"#functionality","aria-label":'Permalink to "Functionality"'},"​")],-1),Je=l("h2",{id:"styling",tabindex:"-1"},[f("Styling "),l("a",{class:"header-anchor",href:"#styling","aria-label":'Permalink to "Styling"'},"​")],-1),We={id:"buttonclasses",tabindex:"-1"},Ye=l("a",{class:"header-anchor",href:"#buttonclasses","aria-label":'Permalink to "buttonClasses <Pill label="Prop" />"'},"​",-1),Ge=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "flex justify-between items-center w-full border rounded py-s2 px-s4 mb-s2 bg-transparent interact:bg-blue-100 transition duration-300"')],-1),Ze={id:"iconclasses",tabindex:"-1"},et=l("a",{class:"header-anchor",href:"#iconclasses","aria-label":'Permalink to "iconClasses <Pill label="Prop" />"'},"​",-1),tt=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "transform rotate-0 transition-all duration-300"')],-1),at={id:"iconopenclasses",tabindex:"-1"},it=l("a",{class:"header-anchor",href:"#iconopenclasses","aria-label":'Permalink to "iconOpenClasses <Pill label="Prop" />"'},"​",-1),st=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "transform rotate-180 transition-all duration-300"')],-1),lt={id:"optionscontainerclasses",tabindex:"-1"},nt=l("a",{class:"header-anchor",href:"#optionscontainerclasses","aria-label":'Permalink to "optionsContainerClasses <Pill label="Prop" />"'},"​",-1),ot=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "border rounded"')],-1),rt={id:"optionclasses",tabindex:"-1"},ut=l("a",{class:"header-anchor",href:"#optionclasses","aria-label":'Permalink to "optionClasses <Pill label="Prop" />"'},"​",-1),pt=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "cursor-pointer w-full py-s2 px-s4 interact:bg-blue-100 interact:outline-none transition duration-300"')],-1),dt={id:"optionactiveclasses",tabindex:"-1"},ct=l("a",{class:"header-anchor",href:"#optionactiveclasses","aria-label":'Permalink to "optionActiveClasses <Pill label="Prop" />"'},"​",-1),ht=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "bg-blue-100"')],-1),vt={id:"optionselectedclasses",tabindex:"-1"},bt=l("a",{class:"header-anchor",href:"#optionselectedclasses","aria-label":'Permalink to "optionSelectedClasses <Pill label="Prop" />"'},"​",-1),ft=l("ul",null,[l("li",null,"Type: String"),l("li",null,'Default: "bg-blue-100"')],-1),kt=l("h2",{id:"content",tabindex:"-1"},[f("Content "),l("a",{class:"header-anchor",href:"#content","aria-label":'Permalink to "Content"'},"​")],-1),gt={id:"options",tabindex:"-1"},Et=l("a",{class:"header-anchor",href:"#options","aria-label":'Permalink to "options <Pill label="Prop" />"'},"​",-1),yt=se("",5),Pt=JSON.parse('{"title":"Dropdown","description":"","frontmatter":{},"headers":[],"relativePath":"components/dropdown.md","filePath":"components/dropdown.md"}'),mt={name:"components/dropdown.md"},Ot=Object.assign(mt,{setup(e){return(i,a)=>{const n=Fe("Pill");return V(),ie("div",null,[Qe,l("div",null,[C(Ke,{options:[{id:"option",title:"option one"},{id:"option",title:"option two"}]})]),Xe,Je,l("h3",We,[f("buttonClasses "),C(n,{label:"Prop"}),f(),Ye]),Ge,l("h3",Ze,[f("iconClasses "),C(n,{label:"Prop"}),f(),et]),tt,l("h3",at,[f("iconOpenClasses "),C(n,{label:"Prop"}),f(),it]),st,l("h3",lt,[f("optionsContainerClasses "),C(n,{label:"Prop"}),f(),nt]),ot,l("h3",rt,[f("optionClasses "),C(n,{label:"Prop"}),f(),ut]),pt,l("h3",dt,[f("optionActiveClasses "),C(n,{label:"Prop"}),f(),ct]),ht,l("h3",vt,[f("optionSelectedClasses "),C(n,{label:"Prop"}),f(),bt]),ft,kt,l("h3",gt,[f("options "),C(n,{label:"Prop"}),f(),Et]),yt])}}});export{Pt as __pageData,Ot as default};
