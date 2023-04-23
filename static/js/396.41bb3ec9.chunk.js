"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[396],{42420:function(e,t,o){o.d(t,{Z:function(){return Z}});var n=o(4942),i=o(63366),r=o(87462),a=o(47313),s=o(83061),c=o(50317),l=o(38743),d=o(91615),u=o(25469),p=o(22131);function f(e){return(0,p.Z)("MuiFab",e)}var m=(0,o(655).Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),v=o(88564),b=o(46417),h=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],g=(0,v.ZP)(l.Z,{name:"MuiFab",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,d.Z)(o.size))],"inherit"===o.color&&t.colorInherit,t[(0,d.Z)(o.size)],t[o.color]]}})((function(e){var t,o=e.theme,i=e.ownerState;return(0,r.Z)({},o.typography.button,(t={minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"}},(0,n.Z)(t,"&.".concat(m.focusVisible),{boxShadow:o.shadows[6]}),(0,n.Z)(t,"&.".concat(m.disabled),{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground}),t),"small"===i.size&&{width:40,height:40},"medium"===i.size&&{width:48,height:48},"extended"===i.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===i.variant&&"small"===i.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===i.variant&&"medium"===i.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===i.color&&{color:"inherit"})}),(function(e){var t=e.theme,o=e.ownerState;return(0,r.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=t.palette[o.color]&&{color:t.palette[o.color].contrastText,backgroundColor:t.palette[o.color].main,"&:hover":{backgroundColor:t.palette[o.color].dark,"@media (hover: none)":{backgroundColor:t.palette[o.color].main}}})})),Z=a.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiFab"}),n=o.children,a=o.className,l=o.color,p=void 0===l?"default":l,m=o.component,v=void 0===m?"button":m,Z=o.disabled,w=void 0!==Z&&Z,x=o.disableFocusRipple,y=void 0!==x&&x,S=o.focusVisibleClassName,C=o.size,E=void 0===C?"large":C,T=o.variant,R=void 0===T?"circular":T,k=(0,i.Z)(o,h),D=(0,r.Z)({},o,{color:p,component:v,disabled:w,disableFocusRipple:y,size:E,variant:R}),P=function(e){var t=e.color,o=e.variant,n=e.classes,i=e.size,r={root:["root",o,"size".concat((0,d.Z)(i)),"inherit"===t?"colorInherit":t]};return(0,c.Z)(r,f,n)}(D);return(0,b.jsx)(g,(0,r.Z)({className:(0,s.Z)(P.root,a),component:v,disabled:w,focusRipple:!y,focusVisibleClassName:(0,s.Z)(P.focusVisible,S),ownerState:D,ref:t},k,{children:n}))}))},11686:function(e,t,o){o.d(t,{Z:function(){return C}});var n=o(29439),i=o(4942),r=o(63366),a=o(87462),s=o(47313),c=o(83061),l=o(50317),d=o(17551),u=o(88564),p=o(25469),f=o(42420),m=o(61689),v=o(91615),b=o(22131);function h(e){return(0,b.Z)("MuiSpeedDialAction",e)}var g=(0,o(655).Z)("MuiSpeedDialAction",["fab","fabClosed","staticTooltip","staticTooltipClosed","staticTooltipLabel","tooltipPlacementLeft","tooltipPlacementRight"]),Z=o(46417),w=["className","delay","FabProps","icon","id","open","TooltipClasses","tooltipOpen","tooltipPlacement","tooltipTitle"],x=(0,u.ZP)(f.Z,{name:"MuiSpeedDialAction",slot:"Fab",skipVariantsResolver:!1,overridesResolver:function(e,t){var o=e.ownerState;return[t.fab,!o.open&&t.fabClosed]}})((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({margin:8,color:t.palette.text.secondary,backgroundColor:t.palette.background.paper,"&:hover":{backgroundColor:(0,d._4)(t.palette.background.paper,.15)},transition:"".concat(t.transitions.create("transform",{duration:t.transitions.duration.shorter}),", opacity 0.8s"),opacity:1},!o.open&&{opacity:0,transform:"scale(0)"})})),y=(0,u.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltip",overridesResolver:function(e,t){var o=e.ownerState;return[t.staticTooltip,!o.open&&t.staticTooltipClosed,t["tooltipPlacement".concat((0,v.Z)(o.tooltipPlacement))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,i.Z)({position:"relative",display:"flex",alignItems:"center"},"& .".concat(g.staticTooltipLabel),(0,a.Z)({transition:t.transitions.create(["transform","opacity"],{duration:t.transitions.duration.shorter}),opacity:1},!o.open&&{opacity:0,transform:"scale(0.5)"},"left"===o.tooltipPlacement&&{transformOrigin:"100% 50%",right:"100%",marginRight:8},"right"===o.tooltipPlacement&&{transformOrigin:"0% 50%",left:"100%",marginLeft:8}))})),S=(0,u.ZP)("span",{name:"MuiSpeedDialAction",slot:"StaticTooltipLabel",overridesResolver:function(e,t){return t.staticTooltipLabel}})((function(e){var t=e.theme;return(0,a.Z)({position:"absolute"},t.typography.body1,{backgroundColor:t.palette.background.paper,borderRadius:t.shape.borderRadius,boxShadow:t.shadows[1],color:t.palette.text.secondary,padding:"4px 16px",wordBreak:"keep-all"})})),C=s.forwardRef((function(e,t){var o=(0,p.Z)({props:e,name:"MuiSpeedDialAction"}),i=o.className,d=o.delay,u=void 0===d?0:d,f=o.FabProps,b=void 0===f?{}:f,g=o.icon,C=o.id,E=o.open,T=o.TooltipClasses,R=o.tooltipOpen,k=void 0!==R&&R,D=o.tooltipPlacement,P=void 0===D?"left":D,L=o.tooltipTitle,M=(0,r.Z)(o,w),z=(0,a.Z)({},o,{tooltipPlacement:P}),F=function(e){var t=e.open,o=e.tooltipPlacement,n=e.classes,i={fab:["fab",!t&&"fabClosed"],staticTooltip:["staticTooltip","tooltipPlacement".concat((0,v.Z)(o)),!t&&"staticTooltipClosed"],staticTooltipLabel:["staticTooltipLabel"]};return(0,l.Z)(i,h,n)}(z),N=s.useState(k),j=(0,n.Z)(N,2),A=j[0],I=j[1],V={transitionDelay:"".concat(u,"ms")},_=(0,Z.jsx)(x,(0,a.Z)({size:"small",className:(0,c.Z)(F.fab,i),tabIndex:-1,role:"menuitem",ownerState:z},b,{style:(0,a.Z)({},V,b.style),children:g}));return k?(0,Z.jsxs)(y,(0,a.Z)({id:C,ref:t,className:F.staticTooltip,ownerState:z},M,{children:[(0,Z.jsx)(S,{style:V,id:"".concat(C,"-label"),className:F.staticTooltipLabel,ownerState:z,children:L}),s.cloneElement(_,{"aria-labelledby":"".concat(C,"-label")})]})):(!E&&A&&I(!1),(0,Z.jsx)(m.Z,(0,a.Z)({id:C,ref:t,title:L,placement:P,onClose:function(){I(!1)},onOpen:function(){I(!0)},open:E&&A,classes:T},M,{children:_})))}))},29210:function(e,t,o){o.d(t,{Z:function(){return F}});var n=o(29439),i=o(4942),r=o(63366),a=o(87462),s=o(47313),c=(o(96214),o(83061)),l=o(50317),d=o(88564),u=o(25469),p=o(19860),f=o(62242),m=o(70265),v=o(86983),b=o(46417),h=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],g={entering:{transform:"none"},entered:{transform:"none"}},Z=s.forwardRef((function(e,t){var o=(0,p.Z)(),n={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},i=e.addEndListener,c=e.appear,l=void 0===c||c,d=e.children,u=e.easing,Z=e.in,w=e.onEnter,x=e.onEntered,y=e.onEntering,S=e.onExit,C=e.onExited,E=e.onExiting,T=e.style,R=e.timeout,k=void 0===R?n:R,D=e.TransitionComponent,P=void 0===D?f.ZP:D,L=(0,r.Z)(e,h),M=s.useRef(null),z=(0,v.Z)(d.ref,t),F=(0,v.Z)(M,z),N=function(e){return function(t){if(e){var o=M.current;void 0===t?e(o):e(o,t)}}},j=N(y),A=N((function(e,t){(0,m.n)(e);var n=(0,m.C)({style:T,timeout:k,easing:u},{mode:"enter"});e.style.webkitTransition=o.transitions.create("transform",n),e.style.transition=o.transitions.create("transform",n),w&&w(e,t)})),I=N(x),V=N(E),_=N((function(e){var t=(0,m.C)({style:T,timeout:k,easing:u},{mode:"exit"});e.style.webkitTransition=o.transitions.create("transform",t),e.style.transition=o.transitions.create("transform",t),S&&S(e)})),O=N(C);return(0,b.jsx)(P,(0,a.Z)({appear:l,in:Z,nodeRef:M,onEnter:A,onEntered:I,onEntering:j,onExit:_,onExited:O,onExiting:V,addEndListener:function(e){i&&i(M.current,e)},timeout:k},L,{children:function(e,t){return s.cloneElement(d,(0,a.Z)({style:(0,a.Z)({transform:"scale(0)",visibility:"exited"!==e||Z?void 0:"hidden"},g[e],T,d.props.style),ref:F},t))}}))})),w=o(42420),x=o(91615),y=o(27816),S=o(53800),C=o(22131);function E(e){return(0,C.Z)("MuiSpeedDial",e)}var T=(0,o(655).Z)("MuiSpeedDial",["root","fab","directionUp","directionDown","directionLeft","directionRight","actions","actionsClosed"]),R=["ref"],k=["ariaLabel","FabProps","children","className","direction","hidden","icon","onBlur","onClose","onFocus","onKeyDown","onMouseEnter","onMouseLeave","onOpen","open","openIcon","TransitionComponent","transitionDuration","TransitionProps"],D=["ref"];function P(e){return"up"===e||"down"===e?"vertical":"right"===e||"left"===e?"horizontal":void 0}var L=(0,d.ZP)("div",{name:"MuiSpeedDial",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t["direction".concat((0,x.Z)(o.direction))]]}})((function(e){var t=e.theme,o=e.ownerState;return(0,a.Z)({zIndex:t.zIndex.speedDial,display:"flex",alignItems:"center",pointerEvents:"none"},"up"===o.direction&&(0,i.Z)({flexDirection:"column-reverse"},"& .".concat(T.actions),{flexDirection:"column-reverse",marginBottom:-32,paddingBottom:48}),"down"===o.direction&&(0,i.Z)({flexDirection:"column"},"& .".concat(T.actions),{flexDirection:"column",marginTop:-32,paddingTop:48}),"left"===o.direction&&(0,i.Z)({flexDirection:"row-reverse"},"& .".concat(T.actions),{flexDirection:"row-reverse",marginRight:-32,paddingRight:48}),"right"===o.direction&&(0,i.Z)({flexDirection:"row"},"& .".concat(T.actions),{flexDirection:"row",marginLeft:-32,paddingLeft:48}))})),M=(0,d.ZP)(w.Z,{name:"MuiSpeedDial",slot:"Fab",overridesResolver:function(e,t){return t.fab}})((function(){return{pointerEvents:"auto"}})),z=(0,d.ZP)("div",{name:"MuiSpeedDial",slot:"Actions",overridesResolver:function(e,t){var o=e.ownerState;return[t.actions,!o.open&&t.actionsClosed]}})((function(e){var t=e.ownerState;return(0,a.Z)({display:"flex",pointerEvents:"auto"},!t.open&&{transition:"top 0s linear 0.2s",pointerEvents:"none"})})),F=s.forwardRef((function(e,t){var o=(0,u.Z)({props:e,name:"MuiSpeedDial"}),i=(0,p.Z)(),d={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},f=o.ariaLabel,m=o.FabProps,h=(m=void 0===m?{}:m).ref,g=o.children,w=o.className,C=o.direction,T=void 0===C?"up":C,F=o.hidden,N=void 0!==F&&F,j=o.icon,A=o.onBlur,I=o.onClose,V=o.onFocus,_=o.onKeyDown,O=o.onMouseEnter,B=o.onMouseLeave,K=o.onOpen,W=o.open,H=o.TransitionComponent,U=void 0===H?Z:H,q=o.transitionDuration,G=void 0===q?d:q,J=o.TransitionProps,Q=(0,r.Z)(o.FabProps,R),X=(0,r.Z)(o,k),Y=(0,S.Z)({controlled:W,default:!1,name:"SpeedDial",state:"open"}),$=(0,n.Z)(Y,2),ee=$[0],te=$[1],oe=(0,a.Z)({},o,{open:ee,direction:T}),ne=function(e){var t=e.classes,o=e.open,n=e.direction,i={root:["root","direction".concat((0,x.Z)(n))],fab:["fab"],actions:["actions",!o&&"actionsClosed"]};return(0,l.Z)(i,E,t)}(oe),ie=s.useRef();s.useEffect((function(){return function(){clearTimeout(ie.current)}}),[]);var re=s.useRef(0),ae=s.useRef(),se=s.useRef([]);se.current=[se.current[0]];var ce=s.useCallback((function(e){se.current[0]=e}),[]),le=(0,v.Z)(h,ce),de=function(e,t){return function(o){se.current[e+1]=o,t&&t(o)}};s.useEffect((function(){ee||(re.current=0,ae.current=void 0)}),[ee]);var ue=function(e){"mouseleave"===e.type&&B&&B(e),"blur"===e.type&&A&&A(e),clearTimeout(ie.current),"blur"===e.type?ie.current=setTimeout((function(){te(!1),I&&I(e,"blur")})):(te(!1),I&&I(e,"mouseLeave"))},pe=function(e){"mouseenter"===e.type&&O&&O(e),"focus"===e.type&&V&&V(e),clearTimeout(ie.current),ee||(ie.current=setTimeout((function(){if(te(!0),K){K(e,{focus:"focus",mouseenter:"mouseEnter"}[e.type])}})))},fe=f.replace(/^[^a-z]+|[^\w:.-]+/gi,""),me=s.Children.toArray(g).filter((function(e){return s.isValidElement(e)})),ve=me.map((function(e,t){var o=e.props,n=o.FabProps,i=(n=void 0===n?{}:n).ref,c=o.tooltipPlacement,l=(0,r.Z)(o.FabProps,D),d=c||("vertical"===P(T)?"left":"top");return s.cloneElement(e,{FabProps:(0,a.Z)({},l,{ref:de(t,i)}),delay:30*(ee?t:me.length-t),open:ee,tooltipPlacement:d,id:"".concat(fe,"-action-").concat(t)})}));return(0,b.jsxs)(L,(0,a.Z)({className:(0,c.Z)(ne.root,w),ref:t,role:"presentation",onKeyDown:function(e){_&&_(e);var t,o,n,i=e.key.replace("Arrow","").toLowerCase(),r=ae.current,a=void 0===r?i:r;if("Escape"===e.key)return te(!1),se.current[0].focus(),void(I&&I(e,"escapeKeyDown"));if(P(i)===P(a)&&void 0!==P(i)){e.preventDefault();var s=i===a?1:-1,c=(t=re.current+s,o=0,n=se.current.length-1,t<o?o:t>n?n:t);se.current[c].focus(),re.current=c,ae.current=a}},onBlur:ue,onFocus:pe,onMouseEnter:pe,onMouseLeave:ue,ownerState:oe},X,{children:[(0,b.jsx)(U,(0,a.Z)({in:!N,timeout:G,unmountOnExit:!0},J,{children:(0,b.jsx)(M,(0,a.Z)({color:"primary","aria-label":f,"aria-haspopup":"true","aria-expanded":ee,"aria-controls":"".concat(fe,"-actions")},Q,{onClick:function(e){Q.onClick&&Q.onClick(e),clearTimeout(ie.current),ee?(te(!1),I&&I(e,"toggle")):(te(!0),K&&K(e,"toggle"))},className:(0,c.Z)(ne.fab,Q.className),ref:le,ownerState:oe,children:s.isValidElement(j)&&(0,y.Z)(j,["SpeedDialIcon"])?s.cloneElement(j,{open:ee}):j}))})),(0,b.jsx)(z,{id:"".concat(fe,"-actions"),role:"menu","aria-orientation":P(T),className:(0,c.Z)(ne.actions,!ee&&ne.actionsClosed),ownerState:oe,children:ve})]}))}))}}]);