"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=a,f=p["".concat(s,".").concat(g)]||p[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5096:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Getting Started",l={unversionedId:"Getting Started",id:"Getting Started",title:"Getting Started",description:"Install the CLI",source:"@site/docs/02-Getting Started.md",sourceDirName:".",slug:"/Getting Started",permalink:"/docs/Getting Started",draft:!1,editUrl:"https://github.com/defang-io/defang-docs.git/docs/02-Getting Started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/Intro"},next:{title:"Generate new code using AI",permalink:"/docs/Tutorials/Generate new code using AI"}},s={},c=[{value:"<strong>Install the CLI</strong>",id:"install-the-cli",level:3},{value:"<strong>Authenticate with Defang</strong>",id:"authenticate-with-defang",level:3},{value:"Build and Deploy a Service",id:"build-and-deploy-a-service",level:3},{value:"<strong>Monitor a Service</strong>",id:"monitor-a-service",level:3},{value:"<strong>Upgrade a Service</strong>",id:"upgrade-a-service",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"install-the-cli"},(0,a.kt)("strong",{parentName:"h3"},"Install the CLI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"TODO: point to the github builds\n")),(0,a.kt)("h3",{id:"authenticate-with-defang"},(0,a.kt)("strong",{parentName:"h3"},"Authenticate with Defang")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"defang login\n")),(0,a.kt)("h3",{id:"build-and-deploy-a-service"},"Build and Deploy a Service"),(0,a.kt)("p",null,"Defang supports various ways of creating and deploying services to the cloud. The following tutorials dive into each one in more details:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/Tutorials/Generate%20new%20code%20using%20AI"},"Generate new code using AI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/Tutorials/Deploy%20code%20using%20the%20CLI"},"Deploy code using the CLI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/Tutorials/Deploy%20container%20using%20the%20CLI"},"Deploy container using the CLI")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/Tutorials/Deploy%20using%20Pulumi"},"Deploy using Pulumi"))),(0,a.kt)("h3",{id:"monitor-a-service"},(0,a.kt)("strong",{parentName:"h3"},"Monitor a Service")),(0,a.kt)("p",null,"By default, all the output (stdout and stderr) from your app is routed through the Defang log cluster. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"From the CLI:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"defang tail --name service1\n"))),(0,a.kt)("li",{parentName:"ul"},"From the Defang portal:","  ",(0,a.kt)("a",{parentName:"li",href:"https://portal.defang.io/"},"https://portal.defang.io/"))),(0,a.kt)("h3",{id:"upgrade-a-service"},(0,a.kt)("strong",{parentName:"h3"},"Upgrade a Service")),(0,a.kt)("p",null,"To upgrade your app (for example, updating the base image of your container) you can run the same update command as before and it will build and deploy the latest version. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped."))}d.isMDXComponent=!0}}]);