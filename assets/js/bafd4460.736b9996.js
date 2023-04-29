"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[9617],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||n;return a?i.createElement(d,l(l({ref:t},u),{},{components:a})):i.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},200:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var i=a(7462),r=(a(7294),a(3905));const n={sidebar_position:4},l="Features and Requirements",o={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"High Level Requirements Overview",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-tool-shed/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"lokyen",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-tool-shed/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-tool-shed/docs/requirements/use-case-descriptions"}},s={},p=[{value:"High Level Requirements Overview",id:"high-level-requirements-overview",level:2},{value:"Functional Requirements",id:"functional-requirements",level:2},{value:"Nonfunctional Requirements",id:"nonfunctional-requirements",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,r.kt)("h2",{id:"high-level-requirements-overview"},"High Level Requirements Overview"),(0,r.kt)("p",null,'To begin using the platform, users will need to register online accounts through the "Create Account" option. Once the account creation process is complete, users can manage their tools and determine their availability and daily rates for public use. To facilitate tool searches, users can employ specific keywords such as "Table saw" or "Miter Saw" to browse available low-cost, locally owned tools. Furthermore, search results can be filtered by tool type and mile radius to refine the search. '),(0,r.kt)("p",null,"When a user selects a tool for purchase or rental, they can communicate with the owner to agree on a date and price. The platform will facilitate the return process by setting an agreed-upon window for tool return."),(0,r.kt)("p",null,"For users seeking to sell or lend their tools to others, the listing process involves providing tool information and uploading images of the tool. Once another user requests the tool, the owner will receive a notification."),(0,r.kt)("h2",{id:"functional-requirements"},"Functional Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall require registration using a login system, this will be with a username and password"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Login security will use a login system like Okta\u2019s auth0 login security ",(0,r.kt)("a",{parentName:"p",href:"https://auth0.com/login-security"},"https://auth0.com/login-security")," "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Auth0 can handle bot detection, brute force attacks, and other security related issues without the need of a credit card on the developer's part ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This component implements best practices for mobile logins and is easy to set up to ensure security is at the forefront of the website ")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall require a home page which will contain many functional components which allow a user to interact with the site"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contains ability to upload a new listing of a tool ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Contains a user\u2019s profile which has a menu for settings, logout option, and view profile ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The home page mainly consists of a list of tools available to rent within the default parameters. These parameters can be changed, and a map will reflect where the available tools are located ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall allow users to list a new tool  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Details associated with the listing that must be completed before posting live to the public area... description, picture (at least 1), general location (zip code) ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Details associated with the listing that are optional to add are... monetary rate for tool rental, monetary value for tool purchase, more than 1 picture ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall contain a list of tools nearby to rent and an interactive map to show associated locations of the tools "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to select an available tool to rent or purchase ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ability to navigate the minimap ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Manually adjust radius/distance by entering in values to parameters ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clicking on a listing will pop up larger on the screen to indicate that is the tool in that location ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The search/filter function applies to the map and list of tools to rent/purchase by different criteria ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search filters include: within # miles, tool category, tool maker, and user rating")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall have a menu of properties/settings"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"By clicking account settings, users can change: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Personal details ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Delete Account ")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall contain a bar at the top with the following menus "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Home ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Profile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Tools")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Listings ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Reviews")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Messages"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall show no listings if none are found that meet the filter criteria, the home page of the Tool Shed contains suggestions of other tools nearby "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The user will only receive tool recommendations if there is no tool that fits the filters for a particular search ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The user will receive recommended tools that are similar to the filter criteria but may not 100% match being based on location and previous searches"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall have a \u201cYour Listings\u201d page which will be accessible through the navigation bar after the user signs in and is also located in the navigation bar. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Listings page will contain two sections "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Listings (Active) ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Listings (Inactive) ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Listings Active will have details regarding your tools available for rent/purchase. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Listing details will show either available, or the location of the tool if the tool is currently in use by another registered user "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your Listings Inactive will have similar details regarding your tools, but will be highlighted with a red background. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) "))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall allow users to rate users with a star system ranging from 1 to 5 "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A rating of 1 star would imply the reviewer of the tool (or user) did not have a positive experience and would not recommend it to a friend ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A rating of 5 stars would imply the reviewer of the tool (or user) did have a positive experience and would recommend the tool (or user) to a friend ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system shall allow users will have access to contact information of other users"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A notification will consist of the meeting address and the instructions from the seller/renter (TO BE EDITED)")))),(0,r.kt)("h2",{id:"nonfunctional-requirements"},"Nonfunctional Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tool-Shed will have a simple, easy to understand user-interface throughout. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Multiple listings will be contained per row/column that are interactive. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clicking on each listing from this initial page will take you to a more detailed view of the specific listing. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"From this more detailed listing, users will be shown a pin on a map letting them know the general vicinity of the tool.  ")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The listings on the initial search menu will provide only necessary information to determine if it may be a good candidate for purchase/rent. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the case of multiple images, a carousel feature will cycle through them. "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Rendering at max 10 listings, the Tool Shed web app should load listings in under one minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users must have verifiable identification")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users can only have one account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User login information will be secure via Okta\u2019s auth0 login security")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Video Library will be moderated so that there will only be relevant videos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Will use a PostgreSQL server to store information")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The mapping/search navigation system will only show relevant United States information")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Meeting locations must be in a map-friendly format (Street, Zip, State) format"))))}m.isMDXComponent=!0}}]);