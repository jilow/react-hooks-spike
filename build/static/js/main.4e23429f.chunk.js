(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(15),n(4)),u=n(5),i=n(7),m=n(6),s=n(8),d=n(1);function b(e){var t=Object(a.useState)(1),n=Object(d.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(e.name),u=Object(d.a)(l,2),i=u[0],m=u[1],s=Object(a.useState)({x:0,y:0}),b=Object(d.a)(s,2),p=b[0],E=b[1];return Object(a.useEffect)(function(){var e=function(e){return E({x:e.pageX.toFixed(2),y:e.pageY.toFixed(2)})};return document.addEventListener("pointermove",e),function(){document.removeEventListener("pointermove",e)}}),r.a.createElement("div",null,r.a.createElement("p",null,i),r.a.createElement("input",{value:i,onChange:function(e){return m(e.target.value)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,o),r.a.createElement("button",{onClick:function(){return c(o+1)}},"+"),r.a.createElement("button",{onClick:function(){return c(o-1)}},"-"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("code",null,"Pointer location: ",p.x,"x, ",p.y,"y"))}n(17);var p=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(b,{name:"Hooks Demo"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.4e23429f.chunk.js.map