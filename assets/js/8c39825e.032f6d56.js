"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[8525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:3},a="Schedule",s={unversionedId:"development-plan/schedule",id:"development-plan/schedule",title:"Schedule",description:"Milestone Demos",source:"@site/docs/development-plan/schedule.md",sourceDirName:"development-plan",slug:"/development-plan/schedule",permalink:"/project-tool-shed/docs/development-plan/schedule",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/development-plan/schedule.md",tags:[],version:"current",lastUpdatedBy:"Justin Gallagher",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Tasks",permalink:"/project-tool-shed/docs/development-plan/tasks"},next:{title:"Development Environment",permalink:"/project-tool-shed/docs/development-plan/development-environment"}},l={},c=[{value:"Milestone Demos",id:"milestone-demos",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"schedule"},"Schedule"),(0,r.kt)("mermaid",{value:"gantt\n    dateFormat  YYYY-MM-DD\n    title       Project Schedule\n\n    section Elaboration Phase\n    General Document Requirements: des1, 2023-01-28, 1w\n    Backlog                   :    done, after des1, 1d\n    Sprint 0                  :    active, des2, after des1, 1w\n       Software Development Plan Document   : active, 2023-02-08, 3d\n      \n\n    section Construction Phase\n    Design Document - Architecture :        , 2023-02-12, 1w\n    \n    Sprint 1                  :     , 2023-02-15, 2w\n        Create Login Screen   : des5, 2023-02-15, 4d\n        Login Button          : des6, after des5, 2d\n        Homepage              : crit, 2023-02-21, 8d\n        Profile Page          :     , 2023-02-25, 4d\n    \n    Sprint 2                  :     , 2023-03-01, 2w\n        Search Bar            : des7, 2023-03-02, 3d\n        Listing               : des8, after des7, 4d\n        Account               :     , 2023-03-10, 3d\n  \n   Milestone Demo 1           :milestone, 2023-03-14, 0d\n   \n   Sprint 3                   :     , 2023-03-15, 2w\n        Notification System   :     , 2023-03-15, 2d\n        Search Filter         :     , 2023-03-20, 7d\n   \n   Milestone Demo 2           :milestone, 2023-03-28, 0d\n   \n   Sprint 4                   :    , 2023-03-29, 2w\n        Community Engagement  :    , 2023-03-29, 5d\n        Recommended Tools     :    , 2023-04-03, 9d\n   \n   Milestone Demo 3           :milestone, 2023-04-11, 0d\n   \n   Sprint 5                   :    , 2023-04-12, 16d\n        Video Library         :    , 2023-04-12, 8d\n        Settings              :    , 2023-04-20, 7d\n   Final Demo                 :milestone, 2023-04-27, 0d\n   "}),(0,r.kt)("h2",{id:"milestone-demos"},"Milestone Demos"),(0,r.kt)("p",null,"Throughout the semester there will be 3 demonstrations of our project, below are the features and requirements that are applicable to said demonstrations."),(0,r.kt)("p",null,"Schedule | Project Tool Shed\nMilestone Demo 1\nF1. Accounts\nR1. User can create an account\nR2. User can login to their account\nR3. User can edit account\nF2. Homepage\nR1. User can view starting landing page\nR2. Logged in user should see previously looked at tools\nR3. Show listing of tools\nF3. Listing Tools\nR1. User can add a listing of their shared tool\nR2. User can view other listings of tools\nR3. User can remove or hide a tool listing (draft)\nR4. User can edit an existing listing's title, description, image, availability, and price. "),(0,r.kt)("p",null,"Milestone Demo 2\nF4. Notifications\nR1. User can receive notification when a tool they require is listed\nR2. Notification will show what the tool was and the new availability status\nF5. Search\nR1. User can enter text queries to find tools they are looking for\nR2. Search results show all of the tools within the search criteria\nR3. When the user updates the search bar the tools listed will change\nF6. Recommended Tools\nR1. User will be recommended tools based on location and recently viewed tools\nR2. Tools recommended will change if a user changes their location or views different tools"),(0,r.kt)("p",null,'Milestone Demo 3\nF7. Aestically Pleasing UI\nR1. All web pages have a similar theme\nR2. Feedback from previous demos will be showcase in the sense of button, listing, and search beautification updates\nF8. Video Library\nR1. User can enter the video library search\nR2. User can search a "how to" or "help" video\nR3. User can be redirected to a Youtube video appropriate to their search'),(0,r.kt)("p",null,"Final Demo\nAll features cleaned up and functional in occordance with the requirements listed above"))}p.isMDXComponent=!0}}]);