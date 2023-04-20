"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1650],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},l="Acceptance test",o={unversionedId:"testing/acceptence-testing",id:"testing/acceptence-testing",title:"Acceptance test",description:"1. Creating an account",source:"@site/docs/testing/acceptence-testing.md",sourceDirName:"testing",slug:"/testing/acceptence-testing",permalink:"/project-tool-shed/docs/testing/acceptence-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/testing/acceptence-testing.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Symer",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Integration tests",permalink:"/project-tool-shed/docs/testing/integration-testing"}},p={},c=[{value:"1. Creating an account",id:"1-creating-an-account",level:4},{value:"2. Logging in",id:"2-logging-in",level:4},{value:"3. Creating a listing",id:"3-creating-a-listing",level:4},{value:"4. Searching for a specific tool",id:"4-searching-for-a-specific-tool",level:4},{value:"5. Rating a tool (Will be edited/modified in the future)",id:"5-rating-a-tool-will-be-editedmodified-in-the-future",level:4},{value:"6. Deleting account",id:"6-deleting-account",level:4},{value:"7. Editing username or password",id:"7-editing-username-or-password",level:4},{value:"8. Searching for nearby tools",id:"8-searching-for-nearby-tools",level:4}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"acceptance-test"},"Acceptance test"),(0,r.kt)("h4",{id:"1-creating-an-account"},"1. Creating an account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter the url: TBD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click on the "login" option on the navigation bar')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'There is an option to either "login" or "sign up", and select "create an account"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a unique username, which has to be an email and enter a password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click enter to submit account credentials"),(0,r.kt)("p",{parentName:"li"},"  Expected Result: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The user created an account and is redirected to the homepage, which looks different depending on whether a user is logged in or not."),(0,r.kt)("li",{parentName:"ul"},"If the user tries to enter a username which isn't an email, the user will not be able to successfully create an account and there will be a reminder that the username needs to be an email")))),(0,r.kt)("h4",{id:"2-logging-in"},"2. Logging in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter the url: TBD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click on the "login" option on the navigation bar')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'There is an option to either "login" or "sign up" and click on "login"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter account username and password"),(0,r.kt)("p",{parentName:"li"},"  Expected Result: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The entered credentials match an existing user account and the user is redirected to the homepage, which should look different depending on whether a user is loggin or not"),(0,r.kt)("li",{parentName:"ul"},'The user enters credentials that don\'t match and the user is told to "try again"')))),(0,r.kt)("h4",{id:"3-creating-a-listing"},"3. Creating a listing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Select "List Tool" on the navigation bar')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A form should appear on screen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The user fills out the form ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on upload image to add image to form")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click submit"),(0,r.kt)("p",{parentName:"li"},"  Expected Result:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Redirected to homepage"),(0,r.kt)("li",{parentName:"ul"},'Able to find that tool under "Your listings (Active)" ')))),(0,r.kt)("h4",{id:"4-searching-for-a-specific-tool"},"4. Searching for a specific tool"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the search bar, enter a tool name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on filter to filter search results")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selects some filters ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click submit"),(0,r.kt)("p",{parentName:"li"},"  Expected Result:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The webpage will display a list of tools that are actively listed and fit the search criteria and videos tutorials/projects using those tools"),(0,r.kt)("li",{parentName:"ul"},"If there are no tools that fit the search criteria, the webpage displays tool recommendations")))),(0,r.kt)("h4",{id:"5-rating-a-tool-will-be-editedmodified-in-the-future"},"5. Rating a tool (Will be edited/modified in the future)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click "account" on the navigation bar')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click "history" from drop down menu')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click on "rate tool"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on number of stars out of 5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click submit"),(0,r.kt)("p",{parentName:"li"},"  Expected Results:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"There is a star rating attach to the specific tool if you search for it")))),(0,r.kt)("h4",{id:"6-deleting-account"},"6. Deleting account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the navigation bar click on account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Select "delete account" from the drop down menu')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click on "delete" button '),(0,r.kt)("p",{parentName:"li"},"  Expected Result:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Account should be deleted"),(0,r.kt)("li",{parentName:"ul"},"User is redirected to home page and is logged out"),(0,r.kt)("li",{parentName:"ul"},"user is unable to login to account with their credentials")))),(0,r.kt)("h4",{id:"7-editing-username-or-password"},"7. Editing username or password"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the navigation bar click on account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Select "edit account" from the drop down menu')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Click on "edit" next to username or password ')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter new username or password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on submit"),(0,r.kt)("p",{parentName:"li"},"  Expected Result:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username or password are modified"),(0,r.kt)("li",{parentName:"ul"},"User is redirected to account page "),(0,r.kt)("li",{parentName:"ul"},"The next time user logins the new username and/or new password logs the user into their account")))),(0,r.kt)("h4",{id:"8-searching-for-nearby-tools"},"8. Searching for nearby tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Select "Nearby Tools" on navigation bar')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select filter results")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click on filters like tools for rent, mile radius"),(0,r.kt)("p",{parentName:"li"},"  Expected Result:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Able to see tools available in the nearby area with an interactive map displayed")))))}u.isMDXComponent=!0}}]);