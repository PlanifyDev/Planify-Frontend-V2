(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[80],{69080:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return A}});var r=e(93433),i=e(15861),o=e(29439),a=e(87757),u=e.n(a),c=e(68520),l=e.n(c),s=e(29466),f=e(47313),v=e(43265),d=e(69099),p=e(35898),x=e(9019),h=e(11338),m=e(58434),g=e(85077),Z=e(48175),b=e(71361),j=e(42593),k=e(21421),w=e(14631),_=e(81296),B=e(46417),P=[{value:"latest",label:"Latest"},{value:"popular",label:"Popular"},{value:"oldest",label:"Oldest"}],y=function(n,t){return"latest"===t?l()(n,["createdAt"],["desc"]):"oldest"===t?l()(n,["createdAt"],["asc"]):"popular"===t?l()(n,["view"],["desc"]):n};function A(){var n=(0,h.Z)().themeStretch,t=(0,m.Z)(),e=(0,f.useState)([]),a=(0,o.Z)(e,2),c=a[0],l=a[1],A=(0,f.useState)("latest"),C=(0,o.Z)(A,2),S=C[0],O=C[1],I=y(c,S),q=(0,f.useCallback)((0,i.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,g.Z.get("/api/blog/posts/all");case 3:e=n.sent,t.current&&l(e.data.posts),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[t]);(0,f.useEffect)((function(){q()}),[q]);return(0,B.jsx)(b.Z,{title:"Blog: Posts",children:(0,B.jsxs)(v.Z,{maxWidth:!n&&"lg",children:[(0,B.jsx)(w.Z,{heading:"Blog",links:[{name:"Dashboard",href:Z.vB.root},{name:"Blog",href:Z.vB.blog.root},{name:"Posts"}],action:(0,B.jsx)(d.Z,{variant:"contained",component:s.rU,to:Z.vB.blog.new,startIcon:(0,B.jsx)(j.Z,{icon:"eva:plus-fill"}),children:"New Post"})}),(0,B.jsxs)(p.Z,{mb:5,direction:"row",alignItems:"center",justifyContent:"space-between",children:[(0,B.jsx)(_.x5,{}),(0,B.jsx)(_.cO,{query:S,options:P,onSort:function(n){n&&O(n)}})]}),(0,B.jsx)(x.ZP,{container:!0,spacing:3,children:(c.length?I:(0,r.Z)(Array(12))).map((function(n,t){return n?(0,B.jsx)(x.ZP,{item:!0,xs:12,sm:6,md:0===t?6:3,children:(0,B.jsx)(_.Gg,{post:n,index:t})},n.id):(0,B.jsx)(k.M2,{},t)}))})]})})}},2785:function(n,t,e){var r=e(35705),i=e(36428)(r);n.exports=i},71839:function(n,t,e){var r=e(2785),i=e(2114);n.exports=function(n,t){var e=-1,o=i(n)?Array(n.length):[];return r(n,(function(n,r,i){o[++e]=t(n,r,i)})),o}},89318:function(n,t,e){var r=e(95434),i=e(30207),o=e(81186),a=e(71839),u=e(40078),c=e(36902),l=e(49674),s=e(19908),f=e(95585);n.exports=function(n,t,e){t=t.length?r(t,(function(n){return f(n)?function(t){return i(t,1===n.length?n[0]:n)}:n})):[s];var v=-1;t=r(t,c(o));var d=a(n,(function(n,e,i){return{criteria:r(t,(function(t){return t(n)})),index:++v,value:n}}));return u(d,(function(n,t){return l(n,t,e)}))}},40078:function(n){n.exports=function(n,t){var e=n.length;for(n.sort(t);e--;)n[e]=n[e].value;return n}},85445:function(n,t,e){var r=e(72060);n.exports=function(n,t){if(n!==t){var e=void 0!==n,i=null===n,o=n===n,a=r(n),u=void 0!==t,c=null===t,l=t===t,s=r(t);if(!c&&!s&&!a&&n>t||a&&u&&l&&!c&&!s||i&&u&&l||!e&&l||!o)return 1;if(!i&&!a&&!s&&n<t||s&&e&&o&&!i&&!a||c&&e&&o||!u&&o||!l)return-1}return 0}},49674:function(n,t,e){var r=e(85445);n.exports=function(n,t,e){for(var i=-1,o=n.criteria,a=t.criteria,u=o.length,c=e.length;++i<u;){var l=r(o[i],a[i]);if(l)return i>=c?l:l*("desc"==e[i]?-1:1)}return n.index-t.index}},36428:function(n,t,e){var r=e(2114);n.exports=function(n,t){return function(e,i){if(null==e)return e;if(!r(e))return n(e,i);for(var o=e.length,a=t?o:-1,u=Object(e);(t?a--:++a<o)&&!1!==i(u[a],a,u););return e}}},68520:function(n,t,e){var r=e(89318),i=e(95585);n.exports=function(n,t,e,o){return null==n?[]:(i(t)||(t=null==t?[]:[t]),i(e=o?void 0:e)||(e=null==e?[]:[e]),r(n,t,e))}}}]);