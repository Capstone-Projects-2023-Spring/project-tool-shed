"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const l={sidebar_position:1},r="Design",s={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"Design",description:"Class Diagram",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-tool-shed/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Nathaniel Symer",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-tool-shed/docs/category/system-architecture"},next:{title:"Database",permalink:"/project-tool-shed/docs/system-architecture/database"}},o={},p=[{value:"Class Diagram",id:"class-diagram",level:2},{value:"Components &amp; Interfaces",id:"components--interfaces",level:2},{value:"Sequence Diagram - Removing a Listing",id:"sequence-diagram---removing-a-listing",level:2},{value:"Sequence Diagram - Search for a Listing",id:"sequence-diagram---search-for-a-listing",level:2},{value:"Sequence Diagram - Notify User when Tool is Available",id:"sequence-diagram---notify-user-when-tool-is-available",level:2},{value:"Sequence Diagram - Selling a Tool",id:"sequence-diagram---selling-a-tool",level:2},{value:"Sequence Diagram - Listing a Tool",id:"sequence-diagram---listing-a-tool",level:2},{value:"Sequence Diagram - Use Case #6",id:"sequence-diagram---use-case-6",level:2},{value:"Algorithms",id:"algorithms",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"design"},"Design"),(0,i.kt)("h2",{id:"class-diagram"},"Class Diagram"),(0,i.kt)("mermaid",{value:"classDiagram\n    class Address {\n        +int id;\n        +String line_one;\n        +String line_two;\n        +String city;\n        +String state;\n        +String zip_code;\n    }\n    class PaymentMethod {\n        +int id;\n        +String label;\n        +Blob data;\n        +int type;\n    }\n    class User{\n        +int id;\n        +String email_address;\n        +Blob password_digest;\n        +String first_name;\n        +String last_name;\n        +Address address;\n        +List~PaymentMethod~ payment_methods;\n        +setPassword(String password);\n        +passwordMatches(String aPassword) bool;\n    }\n    class ToolCategory {\n        +int id;\n        +String name;\n    }\n    class Tool {\n        +int id;\n        +String description;\n        +ToolCategory category;\n        +ToolMaker maker;\n    }\n    class ToolMaker {\n        +int id;\n        +String name;\n    }\n    class Listing {\n        +Tool tool;\n        +double price;\n    }\n    Tool --\x3e ToolCategory\n    Tool --\x3e ToolMaker\n    Listing --\x3e Tool\n    Listing --\x3e User\n    User --\x3e Address\n    User --\x3e PaymentMethod"}),(0,i.kt)("h2",{id:"components--interfaces"},"Components & Interfaces"),(0,i.kt)("p",null,"Toolshed is a thin-client webapp that loads/stores data from/in PostgreSQL."),(0,i.kt)("p",null,"The primary component of Toolshed is the backend webserver. The backend server implements the data model in the previous section via the Sequelize ORM, which manages migrations (table creation/updates based on data model changes) & query generation. Each endpoint on the backend server serves an HTML page based on data it loads from the database."),(0,i.kt)("p",null,"The database is PostgreSQL, which uses a TCP protocol (not too dissimilar to a binary version of HTTP) to transmit queries and result sets. As mentioned before, Sequelize will manage the schema of the database."),(0,i.kt)("p",null,'The client/frontend is currently a basic form-driven static HTML affair, with the expectation that as interactivity increases, the "thickness" of the client increases to the point where there is no more UI logic on the backend. This is made easier by the fact that the backend and frontend are both JavaScript.'),(0,i.kt)("h2",{id:"sequence-diagram---removing-a-listing"},"Sequence Diagram - Removing a Listing"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Use Case Remove a listing/tool"),(0,i.kt)("p",null,"As someone who uses this site to rent tools to make extra money, the user wants to be able to remove a tool listing to make sure it is available for their personal use. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user navigates to (URL:TBD) and enters their username and password followed by clicking the \u2018Login\u2019 button. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: ACTIVE_LISTINGS) and is presented with their active listings "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AVAILABLE: ",(0,i.kt)("i",null,"Gas Hedge Trimmer (NAME) (CONTACT) (EDIT)")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AVAILABLE: ",(0,i.kt)("i",null,"Circular Saw (NAME) (CONTACT) (EDIT)")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AVAILABLE: ",(0,i.kt)("i",null,"20-Gal Electric Air Compressor (NAME) (CONTACT) (EDIT)")," ")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: EDIT) associated with the listing they would like to change ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user is presented with the following choices "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Header: AVAILABLE: ",(0,i.kt)("i",null,"20-Gal Electric Air Compressor (NAME) (CONTACT)")," "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change Availability (button: AVAILABLE) (button: NOT_AVAILABLE) ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change Contact Information (button: CHANGE_CONTACT_INFO) ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change Description (button: MODIFY_DESCRIPTION) ")))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user will select the (button: NOT_AVAILABLE) to remove the listing from the public eye. Now this tool cannot be rented, and it is only for personal use by the original lister ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the user wishes to list the same tool again, they click the Change Availability (button: AVAILABLE) to re-list the tool ")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid.live/edit#pako:eNptksFOGzEQhl9l5BMVJA-wB6QUeqgUqMSGnixVE3vYteIdB8-YKkK8e-2waQPqzfI_3_if3_NqXPJkOiP0XIgd3QYcMk6W0WnKUAAFHoWy5T1mDS7skRViavfrNASG3mUi_qj7Jt-i4haFPqFHMogGHuCOuHyUpck9aZNl1quV8IJKUM9lcX19GVMHfdlOQaVaaSaqB0-sAaNAYtikFKEfycPjw9pyTI3yHdyM5HYCmkCIIDxBqaNBEKgt_F-7GNWyr8iiPfRAmgO91F5SnCORpxLjYW66KF2LYWjDBF4ul5Ypth4Nb_R90nNuxiq1yQfAAUNNjtifButgW1QT38TgduQvvlRgfkbG9HvVkqA5PWnqEZP_YHKGnfI8B9yIPFCvqEUu7n9sfq1-rr6vV1_X387gd3mu_RyAp38fY67MRHnC4OsuvVoGsEZHmsiarh495p01lt9qHRZN_YGd6TQXujJlX5M_7d3pknyo63f3vpvHFX37A8Pq8ZU"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNptksFOGzEQhl9l5BMVJA-wB6QUeqgUqMSGnixVE3vYteIdB8-YKkK8e-2waQPqzfI_3_if3_NqXPJkOiP0XIgd3QYcMk6W0WnKUAAFHoWy5T1mDS7skRViavfrNASG3mUi_qj7Jt-i4haFPqFHMogGHuCOuHyUpck9aZNl1quV8IJKUM9lcX19GVMHfdlOQaVaaSaqB0-sAaNAYtikFKEfycPjw9pyTI3yHdyM5HYCmkCIIDxBqaNBEKgt_F-7GNWyr8iiPfRAmgO91F5SnCORpxLjYW66KF2LYWjDBF4ul5Ypth4Nb_R90nNuxiq1yQfAAUNNjtifButgW1QT38TgduQvvlRgfkbG9HvVkqA5PWnqEZP_YHKGnfI8B9yIPFCvqEUu7n9sfq1-rr6vV1_X387gd3mu_RyAp38fY67MRHnC4OsuvVoGsEZHmsiarh495p01lt9qHRZN_YGd6TQXujJlX5M_7d3pknyo63f3vpvHFX37A8Pq8ZU?type=png",alt:null}))),(0,i.kt)("h2",{id:"sequence-diagram---search-for-a-listing"},"Sequence Diagram - Search for a Listing"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Use Case Search For Local Tool"),(0,i.kt)("p",null,"The user wants to search their local neighborhood for a hedge trimmer. They would like to get the job done today and do not have the budget to purchase a brand-new one. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user navigates to (URL:TBD) and enters their username and password. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks the (LOGIN) button. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: RENT_TOOL) and completes the following fields. "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zip Code: ##### ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Search Radius: 15 miles ")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks the (button: SEARCH_TOOL) which will complete the request and execute the database query. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user is presented with 3 search results "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AVAILABLE: ",(0,i.kt)("i",null,"Gas Hedge Trimmer (NAME) (CONTACT)")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AVAILABLE: ",(0,i.kt)("i",null,"Electric (Battery) Hedge Trimmer (NAME) (CONTACT)")," ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AVAILABLE: ",(0,i.kt)("i",null,"Electric (Wireless) Hedge Trimmer (NAME) (CONTACT)")," ")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks option 3 and clicks the (button: CONTACT) and is presented with the contact information for Electric (Wireless) Hedge Trimmer. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user contacts the person responsible for Electric (Wireless) Hedge Trimmer. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks the (button: LOG_OFF) and closes the website. ")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid.live/edit#pako:eNrVU8lOwzAQ_ZWRT6AuF245VEIqt0DpdkGRkGtPEgvHDl4kqqr_zmRpS6HlDDlZM29zPLNjwkpkCfP4HtEInCpeOF5l5l4E62Dt0WUG6GtOo8lkoG2hzLgMlU5gGTeVCh7aGggXJZqguPZgDays1bAsUcJ6kXYaJ-6IpEaNZAKpLRo2NcbjcytlJH70Vk0NhFbizcPNJoZgTQKLh6fV62o2S2874onQ6A86fal8rfkWHGVrMrX9X72ebR01Dwi5dRVwIztj8O11L1pNeeAb7pH-yTyFeUS3PVoceu2dv_o00AX62hqPR_S58FksXiDhc4e-vB6-zRxrSfnlj-xXXP5Q_PadPWoUNFe2Doom6e6fxO7HkwYaZnl-Sfsbq0dCZtiQVegqriTt4q7hZSyUWGHGEjpKzHnUIWOZ2ROUx2CXWyNYElzEIeueu19dluS0gVRFqWiFH7v9btd8yGpuXqw9YPafkGpRvQ"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNrVU8lOwzAQ_ZWRT6AuF245VEIqt0DpdkGRkGtPEgvHDl4kqqr_zmRpS6HlDDlZM29zPLNjwkpkCfP4HtEInCpeOF5l5l4E62Dt0WUG6GtOo8lkoG2hzLgMlU5gGTeVCh7aGggXJZqguPZgDays1bAsUcJ6kXYaJ-6IpEaNZAKpLRo2NcbjcytlJH70Vk0NhFbizcPNJoZgTQKLh6fV62o2S2874onQ6A86fal8rfkWHGVrMrX9X72ebR01Dwi5dRVwIztj8O11L1pNeeAb7pH-yTyFeUS3PVoceu2dv_o00AX62hqPR_S58FksXiDhc4e-vB6-zRxrSfnlj-xXXP5Q_PadPWoUNFe2Doom6e6fxO7HkwYaZnl-Sfsbq0dCZtiQVegqriTt4q7hZSyUWGHGEjpKzHnUIWOZ2ROUx2CXWyNYElzEIeueu19dluS0gVRFqWiFH7v9btd8yGpuXqw9YPafkGpRvQ?type=png",alt:null}))),(0,i.kt)("h2",{id:"sequence-diagram---notify-user-when-tool-is-available"},"Sequence Diagram - Notify User when Tool is Available"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Use Case Notify When Available"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user navigates to (URL:TBD) and enters their username and password followed by clicking the \u2018Login\u2019 button.  ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: RENT_TOOL) and completes the following fields. "),(0,i.kt)("p",{parentName:"li"},"-Name of Tool: Air Blower "),(0,i.kt)("p",{parentName:"li"},"-Zip Code: ##### "),(0,i.kt)("p",{parentName:"li"},"-Search Radius: 15 miles ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks (button: SEARCH_TOOL) which will complete the request and execute the database query. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user is presented with this result "),(0,i.kt)("p",{parentName:"li"},"-There are no Air Blowers within 15 miles "),(0,i.kt)("p",{parentName:"li"},"-Show rented out tools ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks (Show Rented Out Tools) which will show if that tool is being rented out in the area. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user is presented with the following results "),(0,i.kt)("p",{parentName:"li"},"-Gas Air Blower (NAME) (CONTACT) "),(0,i.kt)("p",{parentName:"li"},"-Electric (Battery) Air Blower (NAME) (CONTACT) "),(0,i.kt)("p",{parentName:"li"},"-Electric (Wireless) Air Blower (NAME) (CONTACT) ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks the desired item and receives a prompt. "),(0,i.kt)("p",{parentName:"li"},"-You will be notified when this item is listed. ")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid.live/edit#pako:eNq1VD1v2zAQ_SsXTjYaD101ZGiy1S0aKx4KGChO5EkiTJEqP2wIaf57T5Rs2HULdGg1CJR4fO_du-O9CukUiUIE-p7ISnrS2Hjsdhb4QRmdh20gP3336KOWukcbwQAGWLtGWyilJ7K3IWoMecKIFQa63a7G7Q_eHc_403vkg9XDwzswBZSp6nQMYDITEymyUaMJ4Cy8OGegbEnBdrM-S9YHjHSh2sAqoylGe17DcyI_wOKxJbkPHC-TRzmAq285lhNA5Qn3oOs53ccLEegJtJXOe5IRFp6i13RAAzpAsiFJSSHUycxIZzlZXjED1qgN5_ADXlgYNqhnL8mqaaFyBqvsB2ewodA7GwgWm4mPD5dnKjMsL_NezVTZVZ1L1nD8iePacqjmQGn06M6iSjE6WzCljd9Gu0-WZOwZWunQGxzCVI8xlA34gg39Cb13fTJcpAC18x2gVSfCkMt9yXFdt2s_qms__jKXsnVH2Fo8sO1YGcqyw_LfkgYy3BGzJe__b0KfXdT1AB39rjj5BHfn2CYBeu-6nhv1I1HPvgMNBC7FO_jqEhy1MVAR2BFPc5McW7IQW-4ao0PUtslt3Ssunbpjslk8_XLpxL3oyHeoFQ-W1zFoJ2JLHe1EwUuFfr8TO_vGcZiiKwcrRRF9onsxgc9DSBQ13zH-S0rzIPo0Tao8sN5-AiiKg38"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNq1VD1v2zAQ_SsXTjYaD101ZGiy1S0aKx4KGChO5EkiTJEqP2wIaf57T5Rs2HULdGg1CJR4fO_du-O9CukUiUIE-p7ISnrS2Hjsdhb4QRmdh20gP3336KOWukcbwQAGWLtGWyilJ7K3IWoMecKIFQa63a7G7Q_eHc_403vkg9XDwzswBZSp6nQMYDITEymyUaMJ4Cy8OGegbEnBdrM-S9YHjHSh2sAqoylGe17DcyI_wOKxJbkPHC-TRzmAq285lhNA5Qn3oOs53ccLEegJtJXOe5IRFp6i13RAAzpAsiFJSSHUycxIZzlZXjED1qgN5_ADXlgYNqhnL8mqaaFyBqvsB2ewodA7GwgWm4mPD5dnKjMsL_NezVTZVZ1L1nD8iePacqjmQGn06M6iSjE6WzCljd9Gu0-WZOwZWunQGxzCVI8xlA34gg39Cb13fTJcpAC18x2gVSfCkMt9yXFdt2s_qms__jKXsnVH2Fo8sO1YGcqyw_LfkgYy3BGzJe__b0KfXdT1AB39rjj5BHfn2CYBeu-6nhv1I1HPvgMNBC7FO_jqEhy1MVAR2BFPc5McW7IQW-4ao0PUtslt3Ssunbpjslk8_XLpxL3oyHeoFQ-W1zFoJ2JLHe1EwUuFfr8TO_vGcZiiKwcrRRF9onsxgc9DSBQ13zH-S0rzIPo0Tao8sN5-AiiKg38?type=png",alt:null}))),(0,i.kt)("h2",{id:"sequence-diagram---selling-a-tool"},"Sequence Diagram - Selling a Tool"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Use Case Selling a Tool"),"A homeowner wants to list a tool to sell it as they no longer need it anymore and for other users to be able to purchase it.",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user enters the URL.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user enters their username and password.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: LOGIN).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user is brought to the homepage.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: LIST_TOOL) and completes the following fields."))),(0,i.kt)("p",null,"Name of tool"),(0,i.kt)("p",null,"Zip Code: #####"),(0,i.kt)("p",null,"Type of tool (Electric, Battery, Wireless, etc.)"),(0,i.kt)("p",null,"Type of Listing (Sell or For Rent)"),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: INSERT_IMAGE) to upload an image of the tool.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user then clicks the (button: SUBMIT) to add tool to a listing.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user sees a list of tools being sold after clicking submit.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user can click the (button: LIST_TOOL) to list another tool if they want to.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: LOG_OFF) to log off account.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user exits the website.")))),(0,i.kt)("mermaid",{value:"    sequenceDiagram\n    title Selling a Tool\n    actor u as User\n    participant b as browser\n    participant s as server\n    participant d as database\n    activate u\n    u ->> b: Enter URL\n    activate b\n    b ->> s: Enter login information\n    activate s\n    s ->> d: Check if user exists\n    activate d\n    alt is a User\n    d --\x3e> s: User exists\n    s --\x3e> b: User logins in successfully\n    else\n    d --\x3e> s: User doesn't exist\n    s --\x3e> b: Error message\n    b --\x3e> u: Try again\n    end\n    u ->> b: Clicks button (LIST_TOOL)\n    b ->> s: Requests for LIST_TOOL page\n    s --\x3e> b: returns LIST_TOOL page\n    b --\x3e> u: Displays LIST_TOOL page\n    u ->> b: Selects selling as type of listing\n    b ->> s: Requests for sell form\n    s --\x3e> b: Returns form \n    b --\x3e> u: Displays form\n    u --\x3e> b: Fills out form\n    b ->> s: Sends form \n    s ->> d: Sends data from form to be stored\n    d --\x3e> s: Tool is added to listings\n    deactivate d\n    s --\x3e> b: returns newly updated LIST_TOOL page\n    b --\x3e> u: displays updated LIST_TOOL page\n    u ->> b: Clicks LOG_OFF button\n    b --\x3e> u: User is logged off\n    deactivate s\n    deactivate b\n    deactivate u"}),(0,i.kt)("h2",{id:"sequence-diagram---listing-a-tool"},"Sequence Diagram - Listing a Tool"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Use Case Listing a Tool"),"The user would like to rent out tools that they are not currently using to earn some extra money.",(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user navigates to (URL:TBD) and enters their username and password followed by clicking the (button: LOGIN).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: LIST_TOOL) and completes the following fields."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Name of Tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Zip Code: #####")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type of Tool (Electric, Battery, Wireless, etc.)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type of Listing (For Rent)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Price (Price per hour/day/week)")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: INSERT_IMAGE) to upload images of the tool.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks the (button: SUBMIT) to add tool to the list of tools for rent.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user is brought to the local listings menu once submission is successful.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user clicks on the (button: LIST_TOOL) to repeat the process for as many tools as they would like to list for rent.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The user can then close the website or click the (button: LOG_OFF).")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mermaid.live/edit#pako:eNqlVsFy2yAQ_RWGa52MHNmeSoccOrlkJr007aWjC4a1wwSBC8ipm8m_dwFZlhxnYiU-wYp97Nu3u-aZciOAltTBnwY0hxvJ1pbVlWbcG0ssaA-20gR_aJFb5mFgTOuL6-sv36x5cmBLEi2OSE1-_bg7cm0PJWu7Cc73YLfB14YwnHfkwdSwYWsg3pAlEGWYAHEElpySMa0R6oZ5tmQOSoJIVkIPSuCnI4j96WTe7y4Q5xCRb6w-iSLgDZw2GETpktK5Szcg08Po09mnBiFShkv0WmNK2wSRlbF1wBLSbRTbgSBGkwZdiOMWQL9CH2S-U62LbyWVipqla6QOFzAvjT5PwUO6OMgtZj3E4rpwUUUERtiPSYjBJHIJ5GNKbpmS4jXCGBVdwzk4t2pUJ0ekO1rMVrauLMbKxZXkj47cScztT2MUWTbej9eqbbYDzCGWsRINMT7Xa29ijdEqdNlpaqNlehfmPLVuNe48ua0DqfMFOxXPAKo2gqmxMcV26ro-pJhoCMXN7C62a2DMcIWcmRZ7Dq5Z1tKPqzMHWgxGAX8A_kjkijCl0tU4yUIs54z4PgmG7bjxOPy4lchPMnKWwsehpbkZmQWwE7X7ThOkWotMAj1jcS7gjJaghBvdBSmmjlpEdXKtT2h8ZhNoeIp6IlrUs5W33brPtUZvJqYUxnLpPr9_0aB6evb-M6PSVdsrdEJrwL8mKfDV8hxsFfUPUENFS1wKZh8rWukXPMcab-53mtNyxZSDCW02mMz9E6ezgpD41Pme3kHxOTShG6Z_G4NnvG0gbmn5TP_S8iq7uiy-5lmWL_KimE2LCd2hFY2L-ddZvphnsyIvpouXCf0XAbLLYjrNZ_Msm2f5fJZls5f_heo-HQ"},(0,i.kt)("img",{parentName:"a",src:"https://mermaid.ink/img/pako:eNqlVsFy2yAQ_RWGa52MHNmeSoccOrlkJr007aWjC4a1wwSBC8ipm8m_dwFZlhxnYiU-wYp97Nu3u-aZciOAltTBnwY0hxvJ1pbVlWbcG0ssaA-20gR_aJFb5mFgTOuL6-sv36x5cmBLEi2OSE1-_bg7cm0PJWu7Cc73YLfB14YwnHfkwdSwYWsg3pAlEGWYAHEElpySMa0R6oZ5tmQOSoJIVkIPSuCnI4j96WTe7y4Q5xCRb6w-iSLgDZw2GETpktK5Szcg08Po09mnBiFShkv0WmNK2wSRlbF1wBLSbRTbgSBGkwZdiOMWQL9CH2S-U62LbyWVipqla6QOFzAvjT5PwUO6OMgtZj3E4rpwUUUERtiPSYjBJHIJ5GNKbpmS4jXCGBVdwzk4t2pUJ0ekO1rMVrauLMbKxZXkj47cScztT2MUWTbej9eqbbYDzCGWsRINMT7Xa29ijdEqdNlpaqNlehfmPLVuNe48ua0DqfMFOxXPAKo2gqmxMcV26ro-pJhoCMXN7C62a2DMcIWcmRZ7Dq5Z1tKPqzMHWgxGAX8A_kjkijCl0tU4yUIs54z4PgmG7bjxOPy4lchPMnKWwsehpbkZmQWwE7X7ThOkWotMAj1jcS7gjJaghBvdBSmmjlpEdXKtT2h8ZhNoeIp6IlrUs5W33brPtUZvJqYUxnLpPr9_0aB6evb-M6PSVdsrdEJrwL8mKfDV8hxsFfUPUENFS1wKZh8rWukXPMcab-53mtNyxZSDCW02mMz9E6ezgpD41Pme3kHxOTShG6Z_G4NnvG0gbmn5TP_S8iq7uiy-5lmWL_KimE2LCd2hFY2L-ddZvphnsyIvpouXCf0XAbLLYjrNZ_Msm2f5fJZls5f_heo-HQ?type=png",alt:null}))),(0,i.kt)("h2",{id:"sequence-diagram---use-case-6"},"Sequence Diagram - Use Case #6"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"As someone who uses this site to rent tools to make extra money, the user wants to be able to remove a tool listing to make sure it is available for their personal use."),"1. The user navigates to (URL:TBD) and enters their username and password followed by clicking the \u2018Login\u2019 button. 2. The user clicks on the (button: ACTIVE_LISTINGS) and is presented with their active listings - AVAILABLE: Gas Hedge Trimmer (NAME) (CONTACT) (EDIT) - AVAILABLE: Circular Saw (NAME) (CONTACT) (EDIT) - AVAILABLE: 20-Gal Electric Air Compressor (NAME) (CONTACT) (EDIT) 3. The user clicks on the (button: EDIT) associated with the listing they would like to change 4. The user is presented with the following choices - Header: AVAILABLE: 20-Gal Electric Air Compressor (NAME) (CONTACT) - Change Availability (button: AVAILABLE) (button: NOT_AVAILABLE) - Change Contact Information (button: CHANGE_CONTACT_INFO) - Change Description (button: MODIFY_DESCRIPTION) 5. The user will select the (button: NOT_AVAILABLE) to remove the listing from the public eye. Now this tool cannot be rented, and it is only for personal use by the original lister 6. If the user wishes to list the same tool again, they click the Change Availability (button: AVAILABLE) to re-list the tool"),(0,i.kt)("mermaid",{value:'sequenceDiagram\n    actor TO as ToolOwner\n    participant B as Browser\n    participant S as Server\n    participant DB as Database\n    activate TO\n    TO->>B: Fills out and submits login form\n    activate B\n    B->>S: POSTs form\n    activate S\n    S->>DB: Queries for corresponding user\n    activate DB\n    DB->>S: Returns user\n    deactivate DB\n    S->>DB: Queries for user\'s active listings\n    activate DB\n    DB->>S: Returns active listings\n    deactivate DB\n    S->>B: Renders active listings\n    deactivate S\n    B->>TO: Displays active listings page to User\n    deactivate B\n    TO->>B: Clicks edit on listing\n    activate B\n    B->>S: Requests "Edit Listing" page\n    activate S\n    S->>DB: Requests listing\n    activate DB\n    DB->>S: Returns listing\n    deactivate DB\n    S->>B: Renders "Edit Listing" page\n    deactivate S\n    B->>TO: Displays "Edit Listing" page\n    deactivate B\n    TO->>B: Changes form control that corresponds <br />to tool availability to "Not available" and clicks save\n    activate B\n    B->>S: Posts the edited form to the backend\n    activate S\n    S->>DB: Issues an UPDATE query to change the tool status\n    S->>B: Re-renders the "Edit Listing" page\n    deactivate S\n    B->>TO: Displays new "Edit Listing" page\n    deactivate TO\n '}),(0,i.kt)("h2",{id:"algorithms"},"Algorithms"),(0,i.kt)("p",null,"Tool Shed will constantly run and execute database queries to determine similar patterns and form submissions through known categories. Once jobs have been completed, Tool Shed will be able to recommend tools and supplies that are known to have successfully completed similar jobs in the past. Using Google YouTube API, search queries will be returned with instructional videos that are highly recommended in the how-to field. "),(0,i.kt)("p",null,"More TBD"))}m.isMDXComponent=!0}}]);