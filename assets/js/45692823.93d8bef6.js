"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[232],{4012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(7624),i=n(2172);const r={title:"Security",description:"Defang configures your cloud applications and services with security best practices.",sidebar_position:275},o="Security",c={id:"concepts/security",title:"Security",description:"Defang configures your cloud applications and services with security best practices.",source:"@site/docs/concepts/security.md",sourceDirName:"concepts",slug:"/concepts/security",permalink:"/docs/concepts/security",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/concepts/security.md",tags:[],version:"current",sidebarPosition:275,frontMatter:{title:"Security",description:"Defang configures your cloud applications and services with security best practices.",sidebar_position:275},sidebar:"docsSidebar",previous:{title:"Configuration",permalink:"/docs/concepts/configuration"},next:{title:"Domains",permalink:"/docs/concepts/domains"}},a={},d=[{value:"Roles &amp; Permissions",id:"roles--permissions",level:2},{value:"Networking",id:"networking",level:2},{value:"TLS",id:"tls",level:2},{value:"Secrets",id:"secrets",level:2}];function p(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"security",children:"Security"}),"\n",(0,s.jsx)(t.p,{children:'Defang\'s philosophy is to operate on a principle of "least-privilege". This means that we only give your services the permissions they need to operate.'}),"\n",(0,s.jsxs)(t.p,{children:["Because Defang creates roles, you need to have the appropriate permissions to create roles in your cloud provider account, typically the ",(0,s.jsx)(t.code,{children:"AdministratorAccess"})," policy in AWS."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"Best practice is to run the Defang CLI in a CI/CD environment and to restrict deployment permissions at that level."})}),"\n",(0,s.jsx)(t.h2,{id:"roles--permissions",children:"Roles & Permissions"}),"\n",(0,s.jsx)(t.p,{children:"Defang creates roles for your services to use, and attaches policies to those roles. This means that your services only have the permissions they need to operate, and nothing more."}),"\n",(0,s.jsx)(t.h2,{id:"networking",children:"Networking"}),"\n",(0,s.jsx)(t.p,{children:"Defang configures Security Groups, deploys applictions to a private subnet and uses an Application Load Balancer to route traffic to your services from the public internet only when required."}),"\n",(0,s.jsx)(t.h2,{id:"tls",children:"TLS"}),"\n",(0,s.jsx)(t.p,{children:"Defang automates the process of obtaining and renewing TLS certificates for your services using AWS Certificate Manager."}),"\n",(0,s.jsx)(t.h2,{id:"secrets",children:"Secrets"}),"\n",(0,s.jsx)(t.p,{children:"Secrets are stored in AWS Systems Manager Parameter Store, and are encrypted using a key stored in AWS Key Management Service (KMS)."})]})}function l(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>c,M:()=>o});var s=n(1504);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);