(this.webpackJsonp9ijakids=this.webpackJsonp9ijakids||[]).push([[0],{22:function(e,c,t){},23:function(e,c,t){},33:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),s=t(13),r=t.n(s),i=(t(22),t(23),t(14)),l=t(8),j=function(e){var c=Object(n.useState)(null),t=Object(l.a)(c,2),a=t[0],s=t[1],r=Object(n.useState)(!0),i=Object(l.a)(r,2),j=i[0],d=i[1],o=Object(n.useState)(null),h=Object(l.a)(o,2),u=h[0],b=h[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw console.log(e),Error("Request access by clicking button at ==>> https://cors-anywhere.herokuapp.com/corsdemo and REFRESH this page ");return e.json()})).then((function(e){s(e),d(!1),b(null)})).catch((function(e){b(e.message)}))}),[e]),{data:a,setData:s,isPending:j,error:u}},d=t(0);var o=function(e){var c=e.data,t=e.setData,a=Object(n.useState)(""),s=Object(l.a)(a,2),r=s[0],i=s[1];return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("div",{className:"left",children:Object(d.jsx)("a",{href:"",children:"9ija Kids Game"})}),Object(d.jsx)("div",{className:"middle",children:Object(d.jsx)("h3",{children:"Your one-stop-app for kids games"})}),Object(d.jsxs)("div",{className:"right",children:[Object(d.jsx)("ul",{id:"menu",children:Object(d.jsxs)("li",{class:"parent",children:[Object(d.jsx)("a",{href:"#",children:"Filter Games"}),Object(d.jsxs)("ul",{class:"child",children:[Object(d.jsxs)("li",{class:"parent",children:[Object(d.jsxs)("a",{href:"#",children:["Group",Object(d.jsx)("span",{class:"expand",children:"\xbb"})]}),Object(d.jsxs)("ul",{class:"child",children:[Object(d.jsx)("li",{onClick:function(e){e.preventDefault();var n=c.filter((function(e){return e.Group.includes("Academic")}));t(n)},children:Object(d.jsx)("a",{href:"",nowrap:!0,children:"Academic "})}),Object(d.jsx)("li",{onClick:function(e){e.preventDefault();var n=c.filter((function(e){return e.Group.includes("Financial Literacy")}));t(n)},children:Object(d.jsx)("a",{href:"",nowrap:!0,children:"Financial Literacy"})})]})]}),Object(d.jsxs)("li",{class:"parent",children:[Object(d.jsxs)("a",{href:"#",children:["Levels",Object(d.jsx)("span",{class:"expand",children:"\xbb"})]}),Object(d.jsxs)("ul",{class:"child",children:[Object(d.jsx)("li",{onClick:function(e){e.preventDefault();var n=c.filter((function(e){return e.Level.includes("Key Stage 1")}));t(n)},children:Object(d.jsx)("a",{href:"",nowrap:!0,children:"Key Stage 1"})}),Object(d.jsx)("li",{onClick:function(e){e.preventDefault();var n=c.filter((function(e){return e.Level.includes("Key Stage 2")}));t(n)},children:Object(d.jsx)("a",{href:"",nowrap:!0,children:"key Stage 2"})})]})]})]})]})}),Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=c.filter((function(e){return e.Topic.toLowerCase().includes(r.toLowerCase())}));t(n)},children:Object(d.jsx)("input",{type:"search",placeholder:"Search Games..",onChange:function(e){i((function(c){return e.target.value}))}})}),Object(d.jsx)("div",{className:"filter"})]})]})},h=function(e){var c=e.GameDescription,t=e.GameImage,n=e.GameTitle,a=e.Group,s=(e.Level,e.Subject),r=e.Topic;return Object(d.jsx)("div",{className:"herocard",children:Object(d.jsx)("div",{class:"card-box",children:Object(d.jsxs)("div",{class:"card",children:[Object(d.jsx)("div",{class:"top",children:Object(d.jsx)("img",{src:t,alt:"game"})}),Object(d.jsxs)("div",{class:"bottom",children:[Object(d.jsxs)("h1",{children:["Game Title ",Object(d.jsxs)("span",{children:[" - ",n]})]}),Object(d.jsx)("h3",{children:a}),Object(d.jsx)("h2",{children:c}),Object(d.jsx)("div",{class:"price",children:Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:s})})}),Object(d.jsx)("h2",{children:r})]})]})})})};var u=function(e){var c=e.data;return console.log(c),Object(d.jsx)("div",{className:"hero",children:c.map((function(e){var c=e.GameDescription,t=e.GameImage,n=e.GameTitle,a=e.Group,s=(e.Level,e.Subject),r=e.Topic;return Object(d.jsx)(h,{GameDescription:c,GameImage:t,GameTitle:n,Group:a,Subject:s,Topic:r})}))})};var b=function(){return Object(d.jsx)("div",{})},O=t(15),x=t(2);var p=function(e){var c=e.data,t=e.setData;return Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(O.a,{children:Object(d.jsxs)(x.c,{children:[Object(d.jsxs)(x.a,{path:"/search",children:[Object(d.jsx)(o,{data:c,setData:t}),Object(d.jsx)("h1",{children:"Search Result"})]}),Object(d.jsxs)(x.a,{path:"/",children:[Object(d.jsx)(o,{data:c,setData:t}),Object(d.jsx)(u,{data:c}),Object(d.jsx)(b,{})]})]})})})},f=function(){var e=j("https://cors-anywhere.herokuapp.com/https://partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter",{headers:Object(i.a)({"Content-Type":"origin"},"Content-Type","x-requested-with")}),c=e.data,t=e.setData,n=e.isPending,a=e.error;return Object(d.jsxs)("div",{className:"home",children:[a&&Object(d.jsx)("div",{children:a}),n&&Object(d.jsx)("div",{children:"Loading...."}),c&&Object(d.jsx)(p,{data:c,setData:t}),console.log(c)]})};var v=function(){return Object(d.jsx)("div",{className:"app",children:Object(d.jsx)(f,{})})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.02f5f095.chunk.js.map