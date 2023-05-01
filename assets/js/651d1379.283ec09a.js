"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[7607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(a),m=n,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||r;return a?o.createElement(d,i(i({ref:t},c),{},{components:a})):o.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:5},i="Use-case descriptions",s={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"Use-case descriptions",description:"Use Case 1  - Search for Tool Listings",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-tool-shed/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Symer",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-tool-shed/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-tool-shed/docs/category/software-development-plan"}},l={},p=[{value:"Use Case #1  - Search for Tool Listings",id:"use-case-1----search-for-tool-listings",level:2},{value:"Use Case #2  - Find Nearby Tool Listings",id:"use-case-2----find-nearby-tool-listings",level:2},{value:"Use Case #3 - Edit Tool Details",id:"use-case-3---edit-tool-details",level:2},{value:"Use Case #4 - List a Tool",id:"use-case-4---list-a-tool",level:2},{value:"Use Case #5 - Remove a Tool Listing",id:"use-case-5---remove-a-tool-listing",level:2},{value:"Use Case #6 - Review Tool Owner",id:"use-case-6---review-tool-owner",level:2}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,n.kt)("h2",{id:"use-case-1----search-for-tool-listings"},"Use Case #1  - Search for Tool Listings"),(0,n.kt)("p",null,"A user wants to search their local neighborhood for a hedge trimmer. They use Tool Shed to find a tool so that they can get the job done today and not go over their budget to purchase a brand-new one. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user navigates to ",(0,n.kt)("a",{parentName:"p",href:"http://toolshed.symer.io:5000/"},"http://toolshed.symer.io:5000/"),' and clicks on "Log In" to sign in to their account.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user enters a tool (eg. hedge trimmer) into the Search Query")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user adjusts some of the filters (eg. Tool Category, Tool Maker, User Rating, Search Radius) to narrow down their search.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user is presented with red pins on the map if there are any active tool listings that fit the search query.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user can either click on the red pin to get the tool listing details or they can exit the website."))),(0,n.kt)("h2",{id:"use-case-2----find-nearby-tool-listings"},"Use Case #2  - Find Nearby Tool Listings"),(0,n.kt)("p",null,"A user has an unexpected afternoon off from work and wants to see what tools are available now to see what projects they can complete around the house. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The homeowner visits the website, logs in to their account, and ends up on the homepage of the website.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The homeowner scrolls down to the map.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The homeowner is able to adjust the Search Radius.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The homeowner is presented with red pins on the map if there are any nearby listings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The homeowner can click on any of the red pins to view the tool listing details or exit the website."))),(0,n.kt)("h2",{id:"use-case-3---edit-tool-details"},"Use Case #3 - Edit Tool Details"),(0,n.kt)("p",null,"A user wants to edit the details of a tool that they have already added to their account. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user navigates to the website, logs in to their account, and ends up on the homepage of the website. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "General" dropdown menu and clicks on "Tools". ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user sees all the tools they've added to the site.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "Edit Tool" button of the tool they want to edit.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user sees all the current information on the tool. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user clicks on the textbox under description.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user deletes the current text under description and enters new information. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user then clicks the "Save" button.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "General" dropdown menu and clicks on "Tools" where the user will see that the tool description has changed.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user exits the website."))),(0,n.kt)("h2",{id:"use-case-4---list-a-tool"},"Use Case #4 - List a Tool"),(0,n.kt)("p",null,"A user would like to rent out tools that they are not currently using to earn some extra money. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user navigates to the website, logs in to their account, and ends up on the homepage of the website. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "General" dropdown menu and clicks on "Add Tool". ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user fills out the form"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Name of Tool ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Description ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Category")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Maker")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user adds a YouTube video on how to use tool, photo and/or manual.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks the button "Create".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user scrolls down to Listings and clicks "+ New Listings".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks "Active" and fills out price, max # of billing intervals and billing interval.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks "Create" to create a new listing.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user can scroll down to Listings and click "+ New Listings" to create more listings of the same tool or exits the website.'))),(0,n.kt)("h2",{id:"use-case-5---remove-a-tool-listing"},"Use Case #5 - Remove a Tool Listing"),(0,n.kt)("p",null,"As someone who uses this site to rent tools to make extra money, the user wants to be able to remove a tool listing to make sure it is available for their personal use. "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user navigates to the website, logs in to their account, and ends up on the homepage of the website.  ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "General" dropdown menu and clicks on "Listings" to view their current listings. ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user selects a listing that they want to remove and clicks on "Edit".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user scrolls down to "Listings" and sees the "Active" button which is blue to show it\'s active.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "Active" button and it turns grey, which shows it\'s inactive now.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on "Save".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user exits the website."))),(0,n.kt)("h2",{id:"use-case-6---review-tool-owner"},"Use Case #6 - Review Tool Owner"),(0,n.kt)("p",null,"A user wants to review their experience with the rented tool and the tool owner."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user navigates to the website, logs in to their account, and ends up on the homepage of the website. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user clicks on the "General" dropdown menu and clicks on "Create Review". ')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user sees a list of users.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'The user finds the user they want to review and clicks the button "Review User".')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user writes a review in the text box and selects a star rating. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user clicks submit. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The user exits the website."))))}h.isMDXComponent=!0}}]);