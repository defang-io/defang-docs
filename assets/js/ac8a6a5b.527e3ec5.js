"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[5160],{9636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var o=n(7624),i=n(2172);const r={title:"Deploy an outline using AI",sidebar_position:50},s="Deploy an outline using AI",a={id:"tutorials/generate-new-code-using-ai",title:"Deploy an outline using AI",description:"Defang supports generating new project outlines using integration with an AI model. Using this feature, you can describe what you would like the service to do and the CLI will then generate a project outline with all the files required to make it work.",source:"@site/docs/tutorials/generate-new-code-using-ai.mdx",sourceDirName:"tutorials",slug:"/tutorials/generate-new-code-using-ai",permalink:"/docs/tutorials/generate-new-code-using-ai",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/tutorials/generate-new-code-using-ai.mdx",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Deploy an outline using AI",sidebar_position:50},sidebar:"docsSidebar",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Build and deploy code",permalink:"/docs/tutorials/deploy-code-compose"}},l={},d=[{value:"Step 1 - Create a new folder for the project",id:"step-1---create-a-new-folder-for-the-project",level:2},{value:"Step 2 - Use the CLI generate command",id:"step-2---use-the-cli-generate-command",level:2},{value:"Step 3 - Review the Code",id:"step-3---review-the-code",level:2},{value:"Step 4 - Build and Deploy",id:"step-4---build-and-deploy",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"deploy-an-outline-using-ai",children:"Deploy an outline using AI"}),"\n",(0,o.jsx)(t.p,{children:"Defang supports generating new project outlines using integration with an AI model. Using this feature, you can describe what you would like the service to do and the CLI will then generate a project outline with all the files required to make it work."}),"\n",(0,o.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/afglsBYieuc?si=GCvHhBu3H9ktMDHA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0}),"\n",(0,o.jsx)(t.h2,{id:"step-1---create-a-new-folder-for-the-project",children:"Step 1 - Create a new folder for the project"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:"mkdir service1\ncd service1\n"})}),"\n",(0,o.jsx)(t.h2,{id:"step-2---use-the-cli-generate-command",children:"Step 2 - Use the CLI generate command"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-text",children:'defang login\ndefang generate\n\n? Choose the language you\'d like to use:  [Use arrows to move, type to filter]\n> Nodejs\n  Golang\n  Python\n\n? Please describe the service you\'d like to build:\nA basic service with 2 REST endpoints. The default endpoint will be for health check and should return a JSON object like this: { "status": "OK" }. The /echo endpoint will echo back all request parameters in the response.\n'})}),"\n",(0,o.jsx)(t.p,{children:"This will generate the different files required to start your project based on your prompt and the language selected."}),"\n",(0,o.jsx)(t.h2,{id:"step-3---review-the-code",children:"Step 3 - Review the Code"}),"\n",(0,o.jsx)(t.p,{children:"You can open the files in a code editor to review or make changes as needed before deploying the service."}),"\n",(0,o.jsx)(t.h2,{id:"step-4---build-and-deploy",children:"Step 4 - Build and Deploy"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"defang compose up\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>s});var o=n(1504);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);