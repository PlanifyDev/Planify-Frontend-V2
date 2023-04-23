"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[853],{54843:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(29439),i=t(72791);function a(e){var n=(0,i.useState)(e||!1),t=(0,r.Z)(n,2),a=t[0],s=t[1];return{toggle:a,onToggle:function(){return s(!a)},onOpen:function(){return s(!0)},onClose:function(){return s(!1)},setToggle:s}}},20853:function(e,n,t){t.r(n),t.d(n,{default:function(){return xe}});var r=t(4942),i=t(47630),a=t(26445),s=t(20890),o=t(61889),d=t(25212),c=t(27245),l=t(53767),u=t(64554),p=t(63466),m=t(53026),x=t(80645),h=t(78199),f=t(80184),g=(0,i.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)({backgroundSize:"cover",backgroundImage:"url(https://minimal-assets-api.vercel.app/assets/overlay.svg), url(https://minimal-assets-api.vercel.app/assets/images/faqs/hero.jpg)",padding:n.spacing(10,0)},n.breakpoints.up("md"),{height:560,padding:0})})),v=(0,i.ZP)(l.Z)((function(e){var n=e.theme;return(0,r.Z)({textAlign:"center"},n.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:n.spacing(10)})}));function b(){return(0,f.jsx)(g,{children:(0,f.jsx)(a.Z,{component:h.NM,sx:{position:"relative",height:"100%"},children:(0,f.jsxs)(v,{spacing:5,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(h.gH,{text:"How",sx:{color:"primary.main"},variants:(0,h.EU)().inRight}),(0,f.jsx)("br",{}),(0,f.jsxs)(u.Z,{sx:{display:"inline-flex",color:"common.white"},children:[(0,f.jsx)(h.gH,{text:"can",sx:{mr:2}}),(0,f.jsx)(h.gH,{text:"we",sx:{mr:2}}),(0,f.jsx)(h.gH,{text:"help",sx:{mr:2}}),(0,f.jsx)(h.gH,{text:"you?"})]})]}),(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)(x.Z,{stretchStart:280,placeholder:"Search support",InputProps:{startAdornment:(0,f.jsx)(p.Z,{position:"start",children:(0,f.jsx)(m.Z,{icon:"eva:search-fill",sx:{color:"text.disabled",width:20,height:20}})})},sx:{"& .MuiOutlinedInput-root":{color:"common.white"}}})})]})})})}var Z=t(84506),j=t(29439),y=t(63366),w=t(87462),R=t(72791),C=(t(57441),t(28182)),k=t(90767),S=t(93736),A=t(56125),P=t(10703);var G=R.createContext({}),M=t(98278),N=t(95159),q=t(30208);function U(e){return(0,N.Z)("MuiAccordion",e)}var E=(0,q.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),I=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],_=(0,i.ZP)(P.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[(0,r.Z)({},"& .".concat(E.region),n.region),n.root,!t.square&&n.rounded,!t.disableGutters&&n.gutters]}})((function(e){var n,t=e.theme,i={duration:t.transitions.duration.shortest};return n={position:"relative",transition:t.transitions.create(["margin"],i),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:t.palette.divider,transition:t.transitions.create(["opacity","background-color"],i)},"&:first-of-type":{"&:before":{display:"none"}}},(0,r.Z)(n,"&.".concat(E.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,r.Z)(n,"&.".concat(E.disabled),{backgroundColor:t.palette.action.disabledBackground}),n}),(function(e){var n=e.theme,t=e.ownerState;return(0,w.Z)({},!t.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:n.shape.borderRadius,borderTopRightRadius:n.shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:n.shape.borderRadius,borderBottomRightRadius:n.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!t.disableGutters&&(0,r.Z)({},"&.".concat(E.expanded),{margin:"16px 0"}))})),T=R.forwardRef((function(e,n){var t=(0,S.Z)({props:e,name:"MuiAccordion"}),r=t.children,i=t.className,a=t.defaultExpanded,s=void 0!==a&&a,o=t.disabled,d=void 0!==o&&o,c=t.disableGutters,l=void 0!==c&&c,u=t.expanded,p=t.onChange,m=t.square,x=void 0!==m&&m,h=t.TransitionComponent,g=void 0===h?A.Z:h,v=t.TransitionProps,b=(0,y.Z)(t,I),P=(0,M.Z)({controlled:u,default:s,name:"Accordion",state:"expanded"}),N=(0,j.Z)(P,2),q=N[0],E=N[1],T=R.useCallback((function(e){E(!q),p&&p(e,!q)}),[q,p,E]),W=R.Children.toArray(r),D=(0,Z.Z)(W),H=D[0],V=D.slice(1),B=R.useMemo((function(){return{expanded:q,disabled:d,disableGutters:l,toggle:T}}),[q,d,l,T]),F=(0,w.Z)({},t,{square:x,disabled:d,disableGutters:l,expanded:q}),O=function(e){var n=e.classes,t={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,k.Z)(t,U,n)}(F);return(0,f.jsxs)(_,(0,w.Z)({className:(0,C.Z)(O.root,i),ref:n,ownerState:F,square:x},b,{children:[(0,f.jsx)(G.Provider,{value:B,children:H}),(0,f.jsx)(g,(0,w.Z)({in:q,timeout:"auto"},v,{children:(0,f.jsx)("div",{"aria-labelledby":H.props.id,id:H.props["aria-controls"],role:"region",className:O.region,children:V})}))]}))})),W=t(95080);function D(e){return(0,N.Z)("MuiAccordionSummary",e)}var H=(0,q.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),V=["children","className","expandIcon","focusVisibleClassName","onClick"],B=(0,i.ZP)(W.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){var n,t=e.theme,i=e.ownerState,a={duration:t.transitions.duration.shortest};return(0,w.Z)((n={display:"flex",minHeight:48,padding:t.spacing(0,2),transition:t.transitions.create(["min-height","background-color"],a)},(0,r.Z)(n,"&.".concat(H.focusVisible),{backgroundColor:t.palette.action.focus}),(0,r.Z)(n,"&.".concat(H.disabled),{opacity:t.palette.action.disabledOpacity}),(0,r.Z)(n,"&:hover:not(.".concat(H.disabled,")"),{cursor:"pointer"}),n),!i.disableGutters&&(0,r.Z)({},"&.".concat(H.expanded),{minHeight:64}))})),F=(0,i.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,n){return n.content}})((function(e){var n=e.theme,t=e.ownerState;return(0,w.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!t.disableGutters&&(0,r.Z)({transition:n.transitions.create(["margin"],{duration:n.transitions.duration.shortest})},"&.".concat(H.expanded),{margin:"20px 0"}))})),O=(0,i.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,n){return n.expandIconWrapper}})((function(e){var n=e.theme;return(0,r.Z)({display:"flex",color:n.palette.action.active,transform:"rotate(0deg)",transition:n.transitions.create("transform",{duration:n.transitions.duration.shortest})},"&.".concat(H.expanded),{transform:"rotate(180deg)"})})),z=R.forwardRef((function(e,n){var t=(0,S.Z)({props:e,name:"MuiAccordionSummary"}),r=t.children,i=t.className,a=t.expandIcon,s=t.focusVisibleClassName,o=t.onClick,d=(0,y.Z)(t,V),c=R.useContext(G),l=c.disabled,u=void 0!==l&&l,p=c.disableGutters,m=c.expanded,x=c.toggle,h=(0,w.Z)({},t,{expanded:m,disabled:u,disableGutters:p}),g=function(e){var n=e.classes,t=e.expanded,r=e.disabled,i=e.disableGutters,a={root:["root",t&&"expanded",r&&"disabled",!i&&"gutters"],focusVisible:["focusVisible"],content:["content",t&&"expanded",!i&&"contentGutters"],expandIconWrapper:["expandIconWrapper",t&&"expanded"]};return(0,k.Z)(a,D,n)}(h);return(0,f.jsxs)(B,(0,w.Z)({focusRipple:!1,disableRipple:!0,disabled:u,component:"div","aria-expanded":m,className:(0,C.Z)(g.root,i),focusVisibleClassName:(0,C.Z)(g.focusVisible,s),onClick:function(e){x&&x(e),o&&o(e)},ref:n,ownerState:h},d,{children:[(0,f.jsx)(F,{className:g.content,ownerState:h,children:r}),a&&(0,f.jsx)(O,{className:g.expandIconWrapper,ownerState:h,children:a})]}))}));function L(e){return(0,N.Z)("MuiAccordionDetails",e)}(0,q.Z)("MuiAccordionDetails",["root"]);var J=["className"],K=(0,i.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),Q=R.forwardRef((function(e,n){var t=(0,S.Z)({props:e,name:"MuiAccordionDetails"}),r=t.className,i=(0,y.Z)(t,J),a=t,s=function(e){var n=e.classes;return(0,k.Z)({root:["root"]},L,n)}(a);return(0,f.jsx)(K,(0,w.Z)({className:(0,C.Z)(s.root,r),ref:n,ownerState:a},i))})),X=t(32988);function Y(){return(0,f.jsx)(f.Fragment,{children:X.c_.map((function(e){return(0,f.jsxs)(T,{children:[(0,f.jsx)(z,{expandIcon:(0,f.jsx)(m.Z,{icon:"eva:arrow-ios-downward-fill",width:20,height:20}),children:(0,f.jsx)(s.Z,{variant:"subtitle1",children:e.heading})}),(0,f.jsx)(Q,{children:(0,f.jsx)(s.Z,{children:e.detail})})]},e.id)}))})}var $=t(27760),ee=t(36151);function ne(){return(0,f.jsxs)(l.Z,{component:h.DG,spacing:3,children:[(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)(s.Z,{variant:"h4",children:"Haven't found the right help?"})}),(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Name"})}),(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Email"})}),(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Subject"})}),(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)($.Z,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})}),(0,f.jsx)(c.m.div,{variants:(0,h.EU)().inUp,children:(0,f.jsx)(ee.Z,{size:"large",variant:"contained",children:"Submit Now"})})]})}var te=t(84395),re=t(34663),ie=t(94721),ae=t(73974),se=t(76278),oe=t(54843),de=t(53861),ce=t(5977),le=[{label:"Managing your account",icon:"https://minimal-assets-api.vercel.app/assets/icons/faqs/ic_account.svg",href:"#"},{label:"Payment",icon:"https://minimal-assets-api.vercel.app/assets/icons/faqs/ic_payment.svg",href:"#"},{label:"Delivery",icon:"https://minimal-assets-api.vercel.app/assets/icons/faqs/ic_delivery.svg",href:"#"},{label:"Problem with the Product",icon:"https://minimal-assets-api.vercel.app/assets/icons/faqs/ic_package.svg",href:"#"},{label:"Return & Refund",icon:"https://minimal-assets-api.vercel.app/assets/icons/faqs/ic_refund.svg",href:"#"},{label:"Guarantees and assurances",icon:"https://minimal-assets-api.vercel.app/assets/icons/faqs/ic_assurances.svg",href:"#"}];function ue(){var e=(0,de.Z)("up","md"),n=(0,oe.Z)(),t=n.toggle,r=n.onOpen,i=n.onClose;return e?(0,f.jsx)(u.Z,{component:h.DG,sx:{mb:15,display:"grid",gap:3,gridTemplateColumns:{md:"repeat(3, 1fr)",lg:"repeat(6, 1fr)"}},children:le.map((function(e){return(0,f.jsx)(c.m.div,{variants:(0,h.EU)().in,children:(0,f.jsx)(pe,{category:e})},e.label)}))}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(te.Z,{position:"absolute",color:"transparent",sx:{top:-120,boxShadow:0},children:[(0,f.jsx)(re.Z,{children:(0,f.jsx)(ee.Z,{startIcon:(0,f.jsx)(m.Z,{icon:"eva:menu-2-fill"}),onClick:r,children:"Categories"})}),(0,f.jsx)(ie.Z,{})]}),(0,f.jsx)(ae.ZP,{open:t,onClose:i,children:(0,f.jsx)(u.Z,{sx:{p:1,display:"grid",gap:1,gridTemplateColumns:"repeat(2, 1fr)"},children:le.map((function(e){return(0,f.jsxs)(se.Z,{onClick:i,sx:{py:2,maxWidth:140,borderRadius:1,textAlign:"center",typography:"body2",alignItems:"center",flexDirection:"column",justifyContent:"center",bgcolor:"background.neutral"},children:[(0,f.jsx)(ce.Z,{alt:e.icon,src:e.icon,sx:{width:48,height:48,mb:1}}),e.label]},e.label)}))})})]})}function pe(e){var n=e.category,t=n.label,r=n.icon;return(0,f.jsxs)(P.Z,{variant:"outlined",sx:{px:2,height:260,borderRadius:2,display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center","&:hover":{boxShadow:function(e){return e.customShadows.z24}}},children:[(0,f.jsx)(ce.Z,{alt:r,visibleByDefault:!0,disabledEffect:!0,src:r,sx:{mb:2,width:80,height:80}}),(0,f.jsx)(s.Z,{variant:"subtitle2",children:t})]})}var me=(0,i.ZP)("div")((function(e){var n=e.theme;return(0,r.Z)({paddingTop:n.spacing(8)},n.breakpoints.up("md"),{paddingTop:n.spacing(11)})}));function xe(){return(0,f.jsx)(d.Z,{title:"Faqs",children:(0,f.jsxs)(me,{children:[(0,f.jsx)(b,{}),(0,f.jsxs)(a.Z,{sx:{mt:15,mb:10,position:"relative"},children:[(0,f.jsx)(ue,{}),(0,f.jsx)(s.Z,{variant:"h3",sx:{mb:5},children:"Frequently asked questions"}),(0,f.jsxs)(o.ZP,{container:!0,spacing:10,children:[(0,f.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(Y,{})}),(0,f.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,f.jsx)(ne,{})})]})]})]})})}},84506:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(83878),i=t(59199),a=t(40181),s=t(25267);function o(e){return(0,r.Z)(e)||(0,i.Z)(e)||(0,a.Z)(e)||(0,s.Z)()}}}]);
//# sourceMappingURL=853.b18ea8b9.chunk.js.map