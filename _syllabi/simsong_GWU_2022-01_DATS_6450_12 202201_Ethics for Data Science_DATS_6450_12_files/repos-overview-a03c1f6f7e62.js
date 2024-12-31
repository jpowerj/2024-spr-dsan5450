"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["repos-overview"],{82102:(e,t,r)=>{var s=r(9067),o=r(85893),n=r(67294),a=r(36199),i=r(34232),_=r(32769),d=r(17891),l=r(90874),c=r(69942);function u({initialPayload:e,appPayload:t}){let[r]=n.useState(e?.repo),[s]=n.useState(e?.currentUser),u=(0,n.useMemo)(()=>({}),[]);return(0,n.useEffect)(()=>{let e=document.querySelector(".footer");e&&(e.querySelector(".mt-6")?.classList.replace("mt-6","mt-0"),e.querySelector(".border-top")?.classList.remove("border-top"))},[]),(0,o.jsx)(d.E.Provider,{value:t,children:(0,o.jsx)(c.xp,{initialValue:c._G.xxxlarge,children:(0,o.jsx)(i.n,{appName:"react-code-view-overview",category:"",metadata:u,children:(0,o.jsx)(l.M,{user:s,children:(0,o.jsx)(_.d,{repository:r,children:(0,o.jsx)(a.Z,{initialPayload:e})})})})})})}try{u.displayName||(u.displayName="ReposOverview")}catch{}(0,s.t)("repos-overview",{Component:u})},95253:(e,t,r)=>{let s;r.d(t,{YT:()=>u,qP:()=>m,yM:()=>p});var o=r(88149),n=r(86058),a=r(44544),i=r(71643);let{getItem:_}=(0,a.Z)("localStorage"),d="dimension_",l=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,s=new n.R(e)}catch(e){}function c(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,r]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(d)&&(t[e.replace(d,"")]=r,delete t[e]);let r=document.querySelector("meta[name=visitor-payload]");if(r){let e=JSON.parse(atob(r.content));Object.assign(t,e)}let s=new URLSearchParams(window.location.search);for(let[e,r]of s)l.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,i.B)().toString(),Object.assign(t,e)}function u(e){s?.sendPageView(c(e))}function m(e,t={}){let r=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=r?{service:r}:{};for(let[e,r]of Object.entries(t))null!=r&&(o[e]=`${r}`);if(s){let t=e||"unknown";c(o),s.sendEvent(t,c(o))}}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},9067:(e,t,r)=>{r.d(t,{t:()=>l});var s=r(96843);let o=new s.e;var n=r(85893),a=r(76006),i=r(88003),_=r(32369);let d=class ReactPartialElement extends i.S{async getReactNode(e){var t;let{Component:r}=await (t=this.name,o.getRegistration(t));return(0,n.jsx)(_.S,{partialName:this.name,embeddedData:e,Component:r,wasServerRendered:this.hasSSRContent,ssrError:!!this.ssrError})}constructor(...e){super(...e),this.nameAttribute="partial-name"}};function l(e,t){o.register(e,t)}d=function(e,t,r,s){var o,n=arguments.length,a=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,s);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a}([a.Ih],d)},34634:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(67294);let o=(0,s.createContext)({})},17891:(e,t,r)=>{r.d(t,{E:()=>o,M:()=>n});var s=r(67294);let o=(0,s.createContext)(void 0);function n(){let e=(0,s.useContext)(o);return e}},89226:(e,t,r)=>{r.d(t,{V:()=>a});var s=r(67294),o=r(89250),n=r(34634);function a(){let e=(0,s.useContext)(n.A),t=(0,o.TH)();return e[t.key]}},73968:(e,t,r)=>{r.d(t,{T:()=>o});var s=r(89226);function o(){let e=(0,s.V)(),t=e&&"loaded"===e.type?e.data:void 0;return t?.payload}},88479:(e,t,r)=>{r.d(t,{W:()=>p,h:()=>m});var s=r(85893),o=r(58989),n=r(89250),a=r(67294),i=r(15981),_=r(17891),d=r(73968);function l({App:e}){return!function(){let e=(0,d.T)(),t=(0,_.M)();(0,a.useEffect)(()=>{function r(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:e,appPayload:t}}))}return document.addEventListener(i.QE.INITIAL,r),()=>{document.removeEventListener(i.QE.INITIAL,r)}},[]),(0,a.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:e,appPayload:t}}))},[t,e])}(),e?(0,s.jsx)(e,{children:(0,s.jsx)(n.j3,{})}):(0,s.jsx)(n.j3,{})}try{l.displayName||(l.displayName="AppWrapper")}catch{}var c=r(17551),u=r(34634);let m=(0,a.createContext)(null);function p({App:e,appPayload:t,children:r,error:a,history:i,location:d,navigateOnError:p,Router:v,routes:h,routeStateMap:f}){return(0,s.jsx)(o.i,{routes:h,history:i,children:a&&!p?(0,s.jsx)(c.m,{...a}):(0,s.jsx)(_.E.Provider,{value:t,children:(0,s.jsx)(m.Provider,{value:a,children:(0,s.jsx)(u.A.Provider,{value:f,children:(0,s.jsxs)(v,{location:d,navigator:i,children:[(0,s.jsx)(n.Z5,{children:(0,s.jsx)(n.AW,{element:(0,s.jsx)(l,{App:e}),children:h.map(({path:e,Component:t},r)=>(0,s.jsx)(n.AW,{path:e,element:(0,s.jsx)(t,{})},r))})}),r]})})})})})}try{m.displayName||(m.displayName="NavigationErrorContext")}catch{}try{p.displayName||(p.displayName="AppRouter")}catch{}},72982:(e,t,r)=>{r.d(t,{S:()=>ErrorBoundary});var s=r(85893),o=r(17551),n=r(67294);let ErrorBoundary=class ErrorBoundary extends n.Component{static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e){"function"==typeof this.props.onError?this.props.onError(e):setTimeout(()=>{throw e})}render(){return this.state.error?this.props.fallback||(0,s.jsx)(o.m,{type:"httpError"}):this.props.children}constructor(e){super(e),this.state={error:null}}}},17551:(e,t,r)=>{r.d(t,{m:()=>i});var s=r(85893),o=r(75308),n=r(42483);let a={404:"Didn\u2019t find anything here!",500:"Looks like something went wrong!"};function i({httpStatus:e,type:t}){let r="fetchError"===t?"Looks like network is down!":a[e||500];return(0,s.jsxs)(o.Z,{as:"h1",tabIndex:-1,sx:{display:"flex",flexDirection:"column",minWidth:"100%",minHeight:"100%",alignItems:"center",justifyContent:"center"},children:["Error",e?(0,s.jsx)(n.Z,{sx:{fontSize:"144px",fontWeight:"bold",lineHeight:1},children:e}):null,(0,s.jsx)(n.Z,{sx:{fontSize:4,pt:2},children:r})]})}try{i.displayName||(i.displayName="ErrorPage")}catch{}},32369:(e,t,r)=>{r.d(t,{S:()=>m});var s=r(85893),o=r(67294),n=r(1343),a=r(12599),i=r(58989),_=r(89250),d=r(78249);function l({children:e,history:t}){let[r,n]=(0,o.useState)({location:t.location});return(0,d.g)(()=>t.listen(n),[t]),(0,s.jsx)(_.F0,{location:r.location,navigator:t,children:e})}try{l.displayName||(l.displayName="PartialRouter")}catch{}var c=r(77617),u=r(59112);function m({partialName:e,embeddedData:t,Component:r,wasServerRendered:_,ssrError:d}){let m=o.useRef(),p=globalThis.window;m.current||(m.current=p?(0,u.l)({window:p}):(0,a.PP)({initialEntries:[{pathname:"/"}]}));let v=m.current;return(0,s.jsx)(n.R,{appName:e,wasServerRendered:_,children:(0,s.jsx)(i.i,{history:v,routes:[],children:(0,s.jsxs)(l,{history:v,children:[(0,s.jsx)(r,{...t.props}),(0,s.jsx)(c.P,{ssrError:d})]})})})}try{m.displayName||(m.displayName="PartialEntry")}catch{}}},e=>{var t=t=>e(e.s=t);e.O(0,["react-lib","vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_primer_octicons-react_dist_index_esm_js-node_modules_primer_react_lib-es-2e8e7c","vendors-node_modules_primer_react_lib-esm_Box_Box_js","vendors-node_modules_primer_react_lib-esm_Button_Button_js","vendors-node_modules_primer_react_lib-esm_ActionList_index_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_primer_react_lib-esm_Overlay_Overlay_js-node_modules_primer_react_lib-es-fa1130","vendors-node_modules_primer_react_lib-esm_Text_Text_js-node_modules_primer_react_lib-esm_Text-85a14b","vendors-node_modules_primer_react_lib-esm_AnchoredOverlay_AnchoredOverlay_js-node_modules_pri-b1f750","vendors-node_modules_primer_react_lib-esm_FormControl_FormControl_js","vendors-node_modules_react-router-dom_dist_index_js","vendors-node_modules_github_relative-time-element_dist_index_js","vendors-node_modules_primer_react_lib-esm_PageLayout_PageLayout_js","vendors-node_modules_primer_react_lib-esm_ConfirmationDialog_ConfirmationDialog_js","vendors-node_modules_primer_react_lib-esm_Label_Label_js-node_modules_primer_react_lib-esm_Se-7a5fb9","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_github_alive-client_dist-bf5aa2","vendors-node_modules_primer_react_lib-esm_UnderlineNav_index_js","vendors-node_modules_primer_react_lib-esm_AvatarStack_AvatarStack_js-node_modules_primer_reac-40f070","vendors-node_modules_primer_react_lib-esm_Avatar_Avatar_js-node_modules_primer_react_lib-esm_-5d5372","vendors-node_modules_github_catalyst_lib_index_js-node_modules_github_hydro-analytics-client_-978abc2","ui_packages_soft-nav_soft-nav_ts","ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92","ui_packages_paths_index_ts","ui_packages_ref-selector_RefSelector_tsx","app_assets_modules_github_blob-anchor_ts-app_assets_modules_github_filter-sort_ts-app_assets_-681869","ui_packages_commit-attribution_index_ts-ui_packages_commit-checks-status_index_ts-ui_packages-5acf59","app_assets_modules_react-code-view_pages_CodeView_tsx"],()=>t(82102)),e.O()}]);
//# sourceMappingURL=repos-overview-af48513e8131.js.map