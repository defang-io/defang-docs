"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8936],{2984:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>t,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=n(7624),o=n(2172);const c={title:"Resources",description:"Customize the resources your Defang services use.",sidebar_position:275},t="Resources",i={id:"concepts/resources",title:"Resources",description:"Customize the resources your Defang services use.",source:"@site/docs/concepts/resources.md",sourceDirName:"concepts",slug:"/concepts/resources",permalink:"/docs/concepts/resources",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/concepts/resources.md",tags:[],version:"current",sidebarPosition:275,frontMatter:{title:"Resources",description:"Customize the resources your Defang services use.",sidebar_position:275}},u={},a=[{value:"Examples",id:"examples",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Pulumi",id:"pulumi",level:3}];function d(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"resources",children:"Resources"}),"\n",(0,r.jsx)(s.p,{children:"You can configure the resources available to your Defang services as required. You can configure the CPU, memory, and disk space allocated to your services as well as the number of replicas and whether or not your services requires access to GPUs."}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"services:\n  gpu-service:\n    scale: 3\n    deploy:\n      resources:\n        reservations:\n          cpus: '1.0'\n          memory: 2048M\n          devices:\n            - capabilities: [\"gpu\"]\n"})}),"\n",(0,r.jsx)(s.h3,{id:"pulumi",children:"Pulumi"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"const service = new defang.DefangService(\"gpu-service\", {\n  deploy: {\n    replicas: 3,\n    resources: {\n        reservations: {\n            cpu: 1.0,\n            memory: 2048,\n            devices: [{capabilities: ['gpu']}]\n        }\n    }\n  }\n});\n"})})]})}function l(e={}){const{wrapper:s}={...(0,o.M)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2172:(e,s,n)=>{n.d(s,{I:()=>i,M:()=>t});var r=n(1504);const o={},c=r.createContext(o);function t(e){const s=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),r.createElement(c.Provider,{value:s},e.children)}}}]);