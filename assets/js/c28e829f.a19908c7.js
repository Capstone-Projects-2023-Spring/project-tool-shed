"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[6937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(v,i(i({ref:t},p),{},{components:n})):o.createElement(v,i({ref:t},p))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:4},i="Development Environment",s={unversionedId:"development-plan/development-environment",id:"development-plan/development-environment",title:"Development Environment",description:"ToolShed is a JavaScript-based project that effectively utilizes NPM to manage its dependencies. The project is designed to be IDE agnostic, thereby enabling seamless integration with any IDE that is capable of interpreting package.json files. Our objective is to ensure that developers are not constrained to use a specific editor or IDE, as we believe that such an approach is counterproductive.",source:"@site/docs/development-plan/development-environment.md",sourceDirName:"development-plan",slug:"/development-plan/development-environment",permalink:"/project-tool-shed/docs/development-plan/development-environment",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/development-plan/development-environment.md",tags:[],version:"current",lastUpdatedBy:"Nate Symer",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Schedule",permalink:"/project-tool-shed/docs/development-plan/schedule"},next:{title:"Version Control",permalink:"/project-tool-shed/docs/development-plan/version-control"}},l={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-environment"},"Development Environment"),(0,r.kt)("p",null,"ToolShed is a JavaScript-based project that effectively utilizes NPM to manage its dependencies. The project is designed to be IDE agnostic, thereby enabling seamless integration with any IDE that is capable of interpreting package.json files. Our objective is to ensure that developers are not constrained to use a specific editor or IDE, as we believe that such an approach is counterproductive."),(0,r.kt)("p",null,"ToolShed is executed on NodeJS, with its functionality spanning across two distinct environments - the backend/server and the frontend/browser (primarily on Chrome). While the backend environment is predictable, the frontend environment is relatively volatile. As such, we rely on a tool called Babel to transpile modern JavaScript syntax into a backward-compatible format that can be supported by older browsers. We intend to validate our code by utilizing Jest for unit testing, primarily focusing on core business logic."),(0,r.kt)("p",null,"For the backend, we have opted to use ExpressJS as our HTTP server and Sequelize as our Object-Relational Mapping (ORM) tool for database access via JavaScript. On the frontend, we are developing non-single-page react apps that we may eventually transition into a single-page format if it makes sense down the line."),(0,r.kt)("p",null,"We deploy our code manually to Amazon Web Services (AWS), where we also utilize a managed PostgreSQL instance in RDS."),(0,r.kt)("p",null,"Regarding documentation, we intend to leverage structured comments that can be read by tools like JSDoc and can be converted into markdown for inclusion in our documentation site."))}d.isMDXComponent=!0}}]);