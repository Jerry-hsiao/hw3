(function(e){function t(t){for(var n,o,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a={app:0},s=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-02e24ccc":"607c3b8f"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-02e24ccc":1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-02e24ccc":"4499eb68"}[e]+".css",a=u.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===n||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[e],p.parentNode.removeChild(p),r(s)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/hw3/dist/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var p=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},a=[],s=(r("034f"),r("2877")),i={},u=Object(s["a"])(i,o,a,!1,null,null,null),c=u.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container",staticStyle:{width:"30%"}},[r("form",[r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"InputEmail"}},[e._v("Email address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"email",id:"InputEmail","aria-describedby":"emailHelp"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}}),r("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[e._v("Please enter email address")])]),r("div",{staticClass:"mb-3"},[r("label",{staticClass:"form-label",attrs:{for:"InputPassword"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"InputPassword",autocomplete:""},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}}),r("div",{staticClass:"form-text",attrs:{id:"passwordHelp"}},[e._v(" Please enter your password ")])]),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.login()}}},[e._v(" Submit ")])])])])},p=[],f=(r("99af"),{name:"Login",data:function(){return{url:"https://vue3-course-api.hexschool.io/v2",path:"hexschooljerry",user:{username:"",password:""}}},methods:{login:function(){var e=this;console.log(this.user),this.axios.post("".concat(this.url,"/admin/signin"),this.user).then((function(t){console.log(t);var r=t.data,n=r.token,o=r.expired;document.cookie="hexToken=".concat(n,"; expires=").concat(new Date(o),";"),e.$router.push("/products")})).catch((function(e){console.dir(e)}))}},mounted:function(){}}),m=f,h=Object(s["a"])(m,d,p,!1,null,null,null),v=h.exports;n["a"].use(l["a"]);var b=[{path:"/",name:"Login",component:v},{path:"/products",name:"Products",component:function(){return r.e("chunk-02e24ccc").then(r.bind(null,"e6dc"))}}],g=new l["a"]({mode:"history",base:"/hw3/dist/",routes:b}),w=g,y=r("bc3a"),x=r.n(y),P=r("130e"),_=(r("ab8b"),r("7b17"),r("15f5"),r("7051"),r("1157")),C=r.n(_);window.$=window.jQuery=C.a,n["a"].use(P["a"],x.a),n["a"].config.productionTip=!1,new n["a"]({router:w,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.a5851c15.js.map