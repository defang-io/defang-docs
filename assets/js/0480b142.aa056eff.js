"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5277],{8640:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var n=o(7624),r=o(2172);const t={sidebar_position:600,title:"FAQ",description:"Frequently asked questions about Defang."},i="FAQ",a={id:"faq",title:"FAQ",description:"Frequently asked questions about Defang.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/faq.md",tags:[],version:"current",sidebarPosition:600,frontMatter:{sidebar_position:600,title:"FAQ",description:"Frequently asked questions about Defang."}},c={},l=[{value:"<strong>Which cloud/region is the app being deployed to?</strong>",id:"which-cloudregion-is-the-app-being-deployed-to",level:3},{value:"<strong>Can I bring my own AWS or other cloud account?</strong>",id:"can-i-bring-my-own-aws-or-other-cloud-account",level:3},{value:"<strong>On AWS, can I deploy to services such as EC2, EKS, or Lambda?</strong>",id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",level:3},{value:"<strong>Can I access AWS storage services such as S3 or database services such as RDS ? How?</strong>",id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds--how",level:3},{value:"<strong>Do you plan to support other clouds?</strong>",id:"do-you-plan-to-support-other-clouds",level:3},{value:"<strong>Can I run production apps on DOP?</strong>",id:"can-i-run-production-apps-on-dop",level:3}];function d(e){const s={a:"a",h1:"h1",h3:"h3",li:"li",strong:"strong",ul:"ul",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"faq",children:"FAQ"}),"\n",(0,n.jsx)(s.h3,{id:"which-cloudregion-is-the-app-being-deployed-to",children:(0,n.jsx)(s.strong,{children:"Which cloud/region is the app being deployed to?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Currently we are deploying to AWS us-west-2."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"can-i-bring-my-own-aws-or-other-cloud-account",children:(0,n.jsx)(s.strong,{children:"Can I bring my own AWS or other cloud account?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"With the current release, which is designed for customers to try out the Defang model with non-production apps, your apps are deployed to Defang\u2019s AWS account. We are working on bring-your-own-account for an upcoming release."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"on-aws-can-i-deploy-to-services-such-as-ec2-eks-or-lambda",children:(0,n.jsx)(s.strong,{children:"On AWS, can I deploy to services such as EC2, EKS, or Lambda?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The current release includes support for containers only, deployed to ECS. Future releases shall include support for Lambda, EC2 etc. Using our Pulumi provider, it is possible to combine Defang services with other native AWS resources."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"can-i-access-aws-storage-services-such-as-s3-or-database-services-such-as-rds--how",children:(0,n.jsx)(s.strong,{children:"Can I access AWS storage services such as S3 or database services such as RDS ? How?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Yes, you can access any storage service from the underlying cloud platform (AWS) or from a remote database service. To secure access from your Defang services, you should use our published public IPs in your AWS security group or IP allow list."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"do-you-plan-to-support-other-clouds",children:(0,n.jsx)(s.strong,{children:"Do you plan to support other clouds?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"While we currently deploy to AWS, the Defang model is designed to be inherently portable. We plan to support other clouds in future releases."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"can-i-run-production-apps-on-dop",children:(0,n.jsx)(s.strong,{children:"Can I run production apps on DOP?"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The current release of DOP is meant for testing and trial purposes only. Deployment of productions apps is not supported and explicitly disallowed by the ",(0,n.jsx)(s.a,{href:"https://defang.io/terms-conditions.html",children:"Terms and Conditions"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2172:(e,s,o)=>{o.d(s,{I:()=>a,M:()=>i});var n=o(1504);const r={},t=n.createContext(r);function i(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);