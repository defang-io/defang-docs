"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(a,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u[c]="string"==typeof e?e:o,l[1]=u;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={title:"Deploy using Pulumi",sidebar_position:400},l="Deploy using Pulumi",u={unversionedId:"tutorials/deploy-using-pulumi",id:"tutorials/deploy-using-pulumi",title:"Deploy using Pulumi",description:"TODO: Write this section",source:"@site/docs/tutorials/deploy-using-pulumi.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-using-pulumi",permalink:"/docs/tutorials/deploy-using-pulumi",draft:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/tutorials/deploy-using-pulumi.mdx",tags:[],version:"current",sidebarPosition:400,frontMatter:{title:"Deploy using Pulumi",sidebar_position:400},sidebar:"tutorialSidebar",previous:{title:"Deploy container using the CLI",permalink:"/docs/tutorials/deploy-container-using-the-cli"},next:{title:"Samples",permalink:"/docs/samples"}},a={},p=[],s={toc:p},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-using-pulumi"},"Deploy using Pulumi"),(0,o.kt)("p",null,"TODO: Write this section"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"...\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"By default, Pulumi will not touch the deployment if nothing has changed. Set ",(0,o.kt)("inlineCode",{parentName:"li"},"forceNewDeployment: true")," to instruct Pulumi to force the re-deployment of the service.")))}d.isMDXComponent=!0}}]);