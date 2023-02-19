"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[6937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?o.createElement(v,i(i({ref:t},p),{},{components:n})):o.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},i="Development Environment",s={unversionedId:"development-plan/development-environment",id:"development-plan/development-environment",title:"Development Environment",description:"ToolShed is an NPM project written in JavaScript, which means any IDE capable of reading package.json files can open and edit the project. This could range from NetBeans to VS Code to Vim. This is the norm, since many developers have different preferences for IDEs and editors & a project shouldn\u2019t force developers to use tools they\u2019re not productive with.",source:"@site/docs/development-plan/development-environment.md",sourceDirName:"development-plan",slug:"/development-plan/development-environment",permalink:"/project-tool-shed/docs/development-plan/development-environment",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/development-plan/development-environment.md",tags:[],version:"current",lastUpdatedBy:"aaronthom123",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Schedule",permalink:"/project-tool-shed/docs/development-plan/schedule"},next:{title:"Version Control",permalink:"/project-tool-shed/docs/development-plan/version-control"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"ToolShed is an NPM project written in JavaScript, which means any IDE capable of reading package.json files can open and edit the project. This could range from NetBeans to VS Code to Vim. This is the norm, since many developers have different preferences for IDEs and editors & a project shouldn\u2019t force developers to use tools they\u2019re not productive with. "),(0,r.kt)("p",null,"ToolShed\u2019s JavaScript runs on NodeJS, in two different environments: the backend/server, and the frontend/browser. While the backend is a predictable environment, the frontend isn\u2019t, so we\u2019re using a tool called Babel to transpile modern JavaScript syntax into an older, least-common-denominator kind of syntax supported by more (and older) browsers. To test our code, we\u2019re going to unit test with Jest. We plan to test core business logic, where appropriate. "),(0,r.kt)("p",null,"On the backend, we\u2019re using ExpressJS as our HTTP server, and sequelize as our ORM (database access via JS). We\u2019re starting with server-side rendered XHTML for our frontend, and then we might switch to or use ReactJS in parts of the project. If we go the react route, we can target other platforms using the same codebase via ReactNative. "),(0,r.kt)("p",null,"While ToolShed runs as a mostly self-contained project locally, we plan to deploy it to a fully fledged cloud environment. In this cloud environment, we\u2019d ideally have any image files stored in an S3 bucket or similar, and we\u2019d have a real, persistent, distributed postgresql cluster driving the database. "),(0,r.kt)("p",null,"As far as documentation, we plan to use structured comments that can be read by tools like JSDoc and translated to markdown for insertion into our documentation site."))}d.isMDXComponent=!0}}]);