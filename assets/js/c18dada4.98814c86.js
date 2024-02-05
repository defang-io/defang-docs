"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[9524],{7120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=n(7624),o=n(2172);const s={title:"Deploy container using the CLI",sidebar_position:300},a="Deploy container using the CLI",r={id:"tutorials/deploy-container-using-the-cli",title:"Deploy container using the CLI",description:"This example is useful if you already have a Docker container built manually or through a CI/CD system and have that the resulting image is available in a public or private repository accessible by Defang.",source:"@site/docs/tutorials/deploy-container-using-the-cli.mdx",sourceDirName:"tutorials",slug:"/tutorials/deploy-container-using-the-cli",permalink:"/docs/tutorials/deploy-container-using-the-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/tutorials/deploy-container-using-the-cli.mdx",tags:[],version:"current",sidebarPosition:300,frontMatter:{title:"Deploy container using the CLI",sidebar_position:300}},c={},l=[];function u(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"deploy-container-using-the-cli",children:"Deploy container using the CLI"}),"\n",(0,i.jsx)(t.p,{children:"This example is useful if you already have a Docker container built manually or through a CI/CD system and have that the resulting image is available in a public or private repository accessible by Defang."}),"\n",(0,i.jsx)(t.h1,{id:"step-1---docker-compose",children:"Step 1 - Docker Compose"}),"\n",(0,i.jsx)(t.p,{children:"If you already have a Docker Compose file for your service(s) you can use it directly. Else you can create one like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"version: '3.9'\nservices:\n  service1:\n    # This is just an example, replace with the image you want\n    image: \"docker.io/nginx:latest\"\n    ports:\n      - mode: ingress\n        target: 3000\t\t\n"})}),"\n",(0,i.jsx)(t.h1,{id:"step-2---deploy",children:"Step 2 - Deploy"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"defang compose up --tail\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>a});var i=n(1504);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);