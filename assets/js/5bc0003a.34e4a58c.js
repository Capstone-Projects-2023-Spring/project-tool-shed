"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:2},i="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"Figure 1. High level technical design of the Tool Shed Website.",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-tool-shed/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Cameron Metzinger",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-tool-shed/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-tool-shed/docs/requirements/general-requirements"}},c={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,o.kt)("mermaid",{value:"graph LR\n  subgraph backend [Backend]\n  B[Load Balancer &\\nSSL Termination] <--\x3e|HTTP| C\n  B <--\x3e|HTTP| CC\n  B <--\x3e|HTTP| CCC\n  subgraph Q [Application server pool]\n  C[Application Server\\nExpress.js]\n  CC[Application Server\\nExpress.js]\n  CCC[Application Server\\nExpress.js]\n  end\n  C <--\x3e|read/write| D[(PostgreSQL)]\n  CC <--\x3e|read/write| D[(PostgreSQL)]\n  CCC <--\x3e|read/write| D[(PostgreSQL)]\n  end\n  subgraph frontend [Frontend]\n  A[Web Browser] <--\x3e|HTTPS| B\n  E[Mobile App] <--\x3e|HTTPS| B\n  end\n  subgraph tool-finding-system [Tool Finding System]\n  TF[Application Server\\nNode.js]\n  TF --\x3e|read/write| D[(PostgreSQL)]\n  end\n  subgraph video-library [Video Library]\n  V[Application Sever\\nYouTube API]\n  V --\x3e|read| Y[(YouTube Database)]\n  end"}),(0,o.kt)("p",{align:"center"},(0,o.kt)("b",null,"Figure 1.")," High level technical design of the Tool Shed Website."),(0,o.kt)("br",null),(0,o.kt)("p",null,"The application is a basic database-driven web application. Frontend clients (web browsers, mobile apps, etc) send HTTPS requests to a load balancer (which terminates SSL/TLS) and forwards the request to a pool of application serverx. Each app server uses the database to fulfill requests, which get passed back through the load balancer to the client. This architecture allows for automatic scaling (out) to match the traffic the web application experiences to the number of servers serving the request. "),(0,o.kt)("p",null,"Figure 1 also shows that the HTTPS requests that come into the backend get SSL terminated. This is so that the application server can be designed with fewer dev-ops things in mind. Using the load balancer as a singular entry/exit point for the backend also frees up developers from having to worry about hardening their web application against attacks on the open internet."))}d.isMDXComponent=!0}}]);