(this["webpackJsonpre-events-state-layouts"]=this["webpackJsonpre-events-state-layouts"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(3),a=c.n(r),o=(c(12),c(13),c(4)),i=c(5),l=c(7),u=c(6),m=c(0);function j(e){var t=e.icon,c=e.onSwitch;return Object(m.jsx)("div",{className:"icon",children:Object(m.jsx)("span",{className:"material-icons",onClick:function(){c("view_list"===t?"view_module":"view_list")},children:t})})}function d(e){var t=e.card,c=t.name,s=t.color,n=t.price,r=t.img,a={backgroundImage:"url(".concat(r,")")};return Object(m.jsxs)("li",{className:"card",style:a,children:[Object(m.jsx)("h2",{className:"card__name",children:c}),Object(m.jsx)("div",{className:"card__color",children:s}),Object(m.jsxs)("div",{className:"card__price",children:[Object(m.jsxs)("span",{className:"price",children:["$",n]}),Object(m.jsx)("button",{className:"btn",children:"ADD TO CARD"})]})]})}function h(e){var t=e.cards;return Object(m.jsx)("ul",{className:"cards",children:t.map((function(e,t){return Object(m.jsx)(d,{card:e},t)}))})}function b(e){var t=e.card,c=t.name,s=t.color,n=t.price,r=t.img,a={backgroundImage:"url(".concat(r,")")};return Object(m.jsxs)("li",{className:"item",style:a,children:[Object(m.jsx)("div",{className:"img"}),Object(m.jsx)("h2",{className:"card__name",children:c}),Object(m.jsx)("div",{className:"card__color",children:s}),Object(m.jsxs)("span",{className:"price",children:["$",n]}),Object(m.jsx)("button",{className:"btn",children:"ADD TO CARD"})]})}function g(e){var t=e.cards;return Object(m.jsx)("ul",{className:"list",children:t.map((function(e,t){return Object(m.jsx)(b,{card:e},t)}))})}var p=function(e){Object(l.a)(c,e);var t=Object(u.a)(c);function c(e){var s;return Object(o.a)(this,c),(s=t.call(this,e)).products=e.products,s.state={icon:"view_list"},s}return Object(i.a)(c,[{key:"render",value:function(){var e=this;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(j,{icon:this.state.icon,onSwitch:function(t){return e.setState({icon:t})}}),"view_list"===this.state.icon?Object(m.jsx)(h,{cards:this.products}):Object(m.jsx)(g,{cards:this.products})]})}}]),c}(n.a.Component),v=[{name:"Nike Metcon 2",price:"130",color:"red",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"},{name:"Nike Metcon 2",price:"130",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"},{name:"Nike Metcon 2",price:"130",color:"blue",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"},{name:"Nike Metcon 2",price:"130",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"},{name:"Nike free run",price:"170",color:"black",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"},{name:"Nike Metcon 3",price:"150",color:"green",img:"https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"}];var O=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(p,{products:v})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.a924e9ce.chunk.js.map