"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[979],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={title:"Deploy container using the CLI",sidebar_position:300},a="Deploy container using the CLI",l={unversionedId:"tutorials/deploy-container-using-the-cli",id:"tutorials/deploy-container-using-the-cli",title:"Deploy container using the CLI",description:"This example is useful if you already have a Docker container built manually or through a CI/CD system and have that the resulting image is available in a public or private repository accessible by Defang.",source:"@site/docs/tutorials/deploy-container-using-the-cli.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-container-using-the-cli",permalink:"/docs/tutorials/deploy-container-using-the-cli",draft:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/tutorials/deploy-container-using-the-cli.mdx",tags:[],version:"current",sidebarPosition:300,frontMatter:{title:"Deploy container using the CLI",sidebar_position:300},sidebar:"tutorialSidebar",previous:{title:"Deploy code using the CLI",permalink:"/docs/tutorials/deploy-code-using-the-cli"},next:{title:"Deploy using Pulumi",permalink:"/docs/tutorials/deploy-using-pulumi"}},s={},c=[],u={toc:c},p="wrapper";function y(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-container-using-the-cli"},"Deploy container using the CLI"),(0,o.kt)("p",null,"This example is useful if you already have a Docker container built manually or through a CI/CD system and have that the resulting image is available in a public or private repository accessible by Defang."),(0,o.kt)("h1",{id:"step-1---docker-compose"},"Step 1 - Docker Compose"),(0,o.kt)("p",null,"If you already have a Docker Compose file for your service(s) you can use it directly. Else you can create one like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\nservices:\n  service1:\n    # This is just an example, replace with the image you want\n    image: \"docker.io/nginx:latest\"\n    ports:\n      - mode: ingress\n        target: 3000        \n")),(0,o.kt)("h1",{id:"step-2---deploy"},"Step 2 - Deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"defang compose up --tail\n")))}y.isMDXComponent=!0}}]);