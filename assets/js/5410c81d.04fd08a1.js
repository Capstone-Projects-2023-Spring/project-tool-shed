"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[6654],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=n,d=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return a?o.createElement(d,i(i({ref:t},m),{},{components:a})):o.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=a(7462),n=(a(7294),a(3905));const r={sidebar_position:1},i="Activities",l={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-tool-shed/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"aaronthom123",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-tool-shed/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-tool-shed/docs/development-plan/tasks"}},s={},u=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top-Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Tests",id:"tests",level:2}],m={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"activities"},"Activities"),(0,n.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,n.kt)("p",null,"In order to fulfill the requirements proposed later in this document our team plans to analyze the needs of our stakeholders and work in an Agile process to actualize specific points into our website. Since our stakeholders are very familiar with our project and have worked as stakeholders before on other projects, communication with them has gone extremely well. From talking with stakeholders, we can find the features that are most important to our website and strategize our time for this project. For instance, our stakeholder has expressed that it is a high priority to have a system which recommends tools to users. We will be meeting with our stakeholders weekly to ensure alignment of the project. Our team then started researching what it would take to build out such a system in the scope of the rest of the project. "),(0,n.kt)("p",null,"Another important part of our requirements' gathering process was whiteboarding and ticketing all our features, components, and tasks so that all group members could be on the same page. We found that using Miro and Jira respectively has been extremely useful in keeping our requirements organized as well as the process of organization bringing to light additional aspects that we need to flesh out. An example of where our group discovered another required element through our organization process was our messaging system. Although we had discussed using a confirmation email to be the communication between users, we concluded that embedding our own messaging system would be feasible and easier in the long run."),(0,n.kt)("p",null,"Below you can visualize the gathered information that was inspired by our team and stakeholders.  These plans and organization tools will enable our team to stay organized and align with the needs of our stakeholders. "),(0,n.kt)("p",null,"!! Figure out how to add images "),(0,n.kt)("h2",{id:"top-level-design"},"Top-Level Design"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create initial UI components for simple navigation through site "),(0,n.kt)("li",{parentName:"ol"},"Establish backend communication with UI components "),(0,n.kt)("li",{parentName:"ol"},"Implement a user registration and login system "),(0,n.kt)("li",{parentName:"ol"},"Develop a tool listing system that allows users to post tools they would like to rent or sell "),(0,n.kt)("li",{parentName:"ol"},"Develop a tool management system for editing and removing current user listings "),(0,n.kt)("li",{parentName:"ol"},"Create a page that shows tool listings within a certain distance relative to the user "),(0,n.kt)("li",{parentName:"ol"},"Develop a system that allows users to search for tools/specify search criteria "),(0,n.kt)("li",{parentName:"ol"},"Develop a way to allow users to be notified when currently unavailable tool becomes available "),(0,n.kt)("li",{parentName:"ol"},"Create a transaction system for scheduling a tool to rent or purchasing a tool "),(0,n.kt)("li",{parentName:"ol"},"Implement a notification system that notifies a user when their listed tool has been scheduled for rent or purchased "),(0,n.kt)("li",{parentName:"ol"},"Establish a communication system between users for transactional purposes "),(0,n.kt)("li",{parentName:"ol"},"Create a review/report system for completed transactions  "),(0,n.kt)("li",{parentName:"ol"},"Implement a recommended tools feature to recommend tools based on a project they\u2019re working on  "),(0,n.kt)("li",{parentName:"ol"},"Test site functionality to ensure reliability and security of features ")),(0,n.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create initial UI components for simple navigation through site ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The webpages will include: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Home Page ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Search bar to search for tools "),(0,n.kt)("li",{parentName:"ul"},"Filter button to filter search results "),(0,n.kt)("li",{parentName:"ul"},"Log off button to sign out of account "))),(0,n.kt)("li",{parentName:"ul"},"Profile Page ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Account settings to edit account information "),(0,n.kt)("li",{parentName:"ul"},"Notifications  "),(0,n.kt)("li",{parentName:"ul"},"Button to delete account "),(0,n.kt)("li",{parentName:"ul"},"List of Listings  "),(0,n.kt)("li",{parentName:"ul"},"Rental/Purchase history "),(0,n.kt)("li",{parentName:"ul"},"Star ratings given by other users "))),(0,n.kt)("li",{parentName:"ul"},"Tools Listing Page ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Lists all the tools "))),(0,n.kt)("li",{parentName:"ul"},"Login page ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Login button "),(0,n.kt)("li",{parentName:"ul"},"Sign up button to make account for new users "))))))),(0,n.kt)("li",{parentName:"ol"},"Establish backend communication with UI components ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Enable communication between the user interface components and the backend to store listed tools, reviews and accounts to the database. "))),(0,n.kt)("li",{parentName:"ol"},"Implement a user registration and login system ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Design user interface for user to enter account information "),(0,n.kt)("li",{parentName:"ul"},"Allow users to create an account. "),(0,n.kt)("li",{parentName:"ul"},"Allow users to login to their accounts. "),(0,n.kt)("li",{parentName:"ul"},"Account information is stored in the database. "))),(0,n.kt)("li",{parentName:"ol"},"Develop a tool listing system that allows users to post tools they would like to rent or sell ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Design a website interface for users to enter information on their tool to create a new tool listing that would be visible to any other users   "),(0,n.kt)("li",{parentName:"ul"},"Information will include the name of the tool, type of tool (electric, battery, etc.), zip code, condition of tool "),(0,n.kt)("li",{parentName:"ul"},"Upload image button that will allow the user to upload images of the tool "),(0,n.kt)("li",{parentName:"ul"},"List tool button to submit the information  "))),(0,n.kt)("li",{parentName:"ol"},"Develop a tool management system to edit and remove current user listings ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Design a website interface for users to edit information on a tool listing they made     "),(0,n.kt)("li",{parentName:"ul"},"Implement a delete button on the listing to remove a tool that the user had added from the listing page  "))),(0,n.kt)("li",{parentName:"ol"},"Create a page that shows tool listings within a certain distance relative to the user ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will see a list of tools listed for sale or rent within a certain mile radius from the user with the use of the Google maps API by limiting their search with a specific mile radius "),(0,n.kt)("li",{parentName:"ul"},"If there are no tools that fit the search criteria the user will see a list of recommended tools or tools that are similar  "),(0,n.kt)("li",{parentName:"ul"},"On each listing there is a button to contact the seller to rent or buy the tool "))),(0,n.kt)("li",{parentName:"ol"},"Develop a system that allows users to search for tools/specify search criteria ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users can filter search results to tools located close to the user using the Google Maps API, type of tool (battery, electric, etc.) by selecting various options on the filter "))),(0,n.kt)("li",{parentName:"ol"},"Develop a way to allow users to be notified when currently unavailable tools become available ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Notify button on the tool listing "),(0,n.kt)("li",{parentName:"ul"},"The user can select to be notified when the tool becomes available "),(0,n.kt)("li",{parentName:"ul"},"The user will receive a notification through a message "))),(0,n.kt)("li",{parentName:"ol"},"Create a transaction system for scheduling a tool to rent or purchase ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The user will be able to schedule a tool to rent or purchase by clicking the schedule tool button where there will be options to select a day "))),(0,n.kt)("li",{parentName:"ol"},"Implement a notification system that notifies a user when their listed tool has been scheduled for rent or purchase  ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will receive a notification  "))),(0,n.kt)("li",{parentName:"ol"},"Establish a communication system between users for transactional purposes ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will be able to contact other users  "))),(0,n.kt)("li",{parentName:"ol"},"Create a review/ report system for completed transactions ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Users will be able to write a review of a tool and a star rating "),(0,n.kt)("li",{parentName:"ul"},"Users will be able to give a star rating of the tool owner if rating or the seller if purchasing "),(0,n.kt)("li",{parentName:"ul"},"Users will be able to report another user for a faulty transaction or tool "))),(0,n.kt)("li",{parentName:"ol"},"Implement a recommended tools feature to recommend tools based on a project they\u2019re working on ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Shows recommended tools to user  "),(0,n.kt)("li",{parentName:"ul"},"If user can\u2019t find a tool, recommended tools will be shown instead of no results "))),(0,n.kt)("li",{parentName:"ol"},"Test site functionality to ensure reliability and security of features ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tests will be done in most sprints. The types of testing are written below")))),(0,n.kt)("h2",{id:"tests"},"Tests"),(0,n.kt)("p",null,"There will be 3 different types of testing for the Tool Shed App which are unit testing, integration testing and acceptance tests. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Unit",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Our team will utilize jest testing framework to implement unit tests for our react native type-script code. There will be a test for each method and function in our code to ensure proper functionality. "))),(0,n.kt)("li",{parentName:"ul"},"Integration",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Integration testing will also be using jest testing framework to ensure the flow of our user stories are capable and successful. Jest will allow us to make mock objects for this testing implementation.  "))),(0,n.kt)("li",{parentName:"ul"},"Acceptance",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Our team will create a series of tasks that will encapsulate all the functional and non-functional requirements for the Tool Shed app. These tasks will be completed by actual users and our team will take notes of every interaction the user takes on the interface. After this, analysis will be done to see if they were able to complete the flow or if there were difficulties due to the interface. From these results we can go back and ensure any missteps will not happen again.")))))}p.isMDXComponent=!0}}]);