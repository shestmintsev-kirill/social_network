(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[6],{386:function(e,t,c){"use strict";var n=c(3),a=c(1),r=c(0),s=c(4),o=c.n(s),l=c(69),i=function(e,t){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c};t.a=function(e){var t=e.actions,c=e.author,s=e.avatar,u=e.children,j=e.className,m=e.content,b=e.prefixCls,O=e.datetime,f=i(e,["actions","author","avatar","children","className","content","prefixCls","datetime"]),d=r.useContext(l.b),h=d.getPrefixCls,v=d.direction,p=h("comment",b),x=s?r.createElement("div",{className:"".concat(p,"-avatar")},"string"===typeof s?r.createElement("img",{src:s,alt:"comment-avatar"}):s):null,g=t&&t.length?r.createElement("ul",{className:"".concat(p,"-actions")},t.map((function(e,t){return r.createElement("li",{key:"action-".concat(t)},e)}))):null,y=(c||O)&&r.createElement("div",{className:"".concat(p,"-content-author")},c&&r.createElement("span",{className:"".concat(p,"-content-author-name")},c),O&&r.createElement("span",{className:"".concat(p,"-content-author-time")},O)),E=r.createElement("div",{className:"".concat(p,"-content")},y,r.createElement("div",{className:"".concat(p,"-content-detail")},m),g),N=o()(p,Object(a.a)({},"".concat(p,"-rtl"),"rtl"===v),j);return r.createElement("div",Object(n.a)({},f,{className:N}),r.createElement("div",{className:"".concat(p,"-inner")},x,E),u?function(e,t){return r.createElement("div",{className:o()("".concat(e,"-nested"))},t)}(p,u):null)}},402:function(e,t,c){"use strict";c.r(t);var n=c(52),a=c(161),r=c(376),s=c(81),o=c(0),l=c.n(o),i=c(26),u=c(386),j=c(378),m=c(204),b=c(6),O=a.a.TextArea,f=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.chat.status}));return Object(o.useEffect)((function(){return e(Object(m.c)()),function(){e(Object(m.d)())}}),[e]),Object(b.jsxs)("div",{children:["error"===t&&Object(b.jsx)("div",{children:"Disconnect, restart page"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)(v,{})]})]})},d=function(){var e=Object(i.d)((function(e){return e.chat.messages})),t=Object(o.useRef)(null),c=Object(o.useState)(!0),a=Object(n.a)(c,2),s=a[0],l=a[1];return Object(o.useEffect)((function(){var e;s&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[s,e]),e.length?Object(b.jsxs)("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;t.scrollHeight-t.scrollTop!==t.clientHeight?l(!1):l(!0)},children:[e.map((function(e){return Object(b.jsx)(h,{message:e},e.id)})),Object(b.jsx)("div",{ref:t})]}):Object(b.jsx)(b.Fragment,{children:Array.from(Array(3)).map((function(e,t){return Object(b.jsx)(r.a,{active:!0,avatar:!0},t)}))})},h=l.a.memo((function(e){var t=e.message;return Object(b.jsx)(u.a,{author:t.userName,avatar:Object(b.jsx)(j.a,{src:t.photo,alt:"photo"}),content:Object(b.jsx)("p",{children:t.message})})})),v=function(){var e=Object(o.useState)(""),t=Object(n.a)(e,2),c=t[0],a=t[1],r=Object(i.d)((function(e){return e.chat.status})),l=Object(i.c)();return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{onChange:function(e){return a(e.currentTarget.value)},value:c}),Object(b.jsx)(s.a,{disabled:"ready"!==r||!c.length,onClick:function(){c.length&&(l(Object(m.b)(c)),a(""))},children:"Send"})]})};t.default=function(){return Object(b.jsx)(f,{})}}}]);
//# sourceMappingURL=6.1f347369.chunk.js.map