"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[6585],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:5},i="Version Control",l={unversionedId:"development-plan/version-control",id:"development-plan/version-control",title:"Version Control",description:"- GitHub will serve as the version control system for Tool Shed, providing a reliable and widely-used platform for managing source code.",source:"@site/docs/development-plan/version-control.md",sourceDirName:"development-plan",slug:"/development-plan/version-control",permalink:"/project-tool-shed/docs/development-plan/version-control",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/development-plan/version-control.md",tags:[],version:"current",lastUpdatedBy:"lokyen",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Development Environment",permalink:"/project-tool-shed/docs/development-plan/development-environment"},next:{title:"System Architecture",permalink:"/project-tool-shed/docs/category/system-architecture"}},c={},s=[],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"version-control"},"Version Control"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GitHub will serve as the version control system for Tool Shed, providing a reliable and widely-used platform for managing source code."),(0,o.kt)("li",{parentName:"ul"},"Branch protection will be implemented to require at least one code review before any changes can be merged to the main branch. This will maintain the quality and stability of the main branch, ensuring it is always in a deployable state. "),(0,o.kt)("li",{parentName:"ul"},"Each task or feature will be assigned its own branch and named using Jira's Issue Tags to facilitate tracking and organization. "),(0,o.kt)("li",{parentName:"ul"},"Regular merging with the staging branch will be conducted to minimize the occurrence of merge conflicts."),(0,o.kt)("li",{parentName:"ul"},"Completed features will be pushed to a staging branch for review, with weekly code reviews conducted before any changes are pushed to the main branch for production. This will ensure that all code changes are thoroughly reviewed and tested prior to release.")))}d.isMDXComponent=!0}}]);