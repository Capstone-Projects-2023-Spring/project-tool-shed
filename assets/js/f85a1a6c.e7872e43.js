"use strict";(self.webpackChunktu_cis_4398_docs_template=self.webpackChunktu_cis_4398_docs_template||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),l=c(n),b=s,g=l["".concat(d,".").concat(b)]||l[b]||p[b]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=b;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[l]="string"==typeof e?e:s,i[1]=a;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const o={sidebar_position:1},i="Unit tests",a={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit tests",description:"For each method, one or more test cases.",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-tool-shed/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-tool-shed/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"lokyen",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-tool-shed/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-tool-shed/docs/testing/integration-testing"}},d={},c=[{value:"* describe(&quot;GET /user/new&quot;, () =&gt; {",id:"-describeget-usernew---",level:4},{value:"* describe(&quot;POST /user/new&quot;, () =&gt; {",id:"-describepost-usernew---",level:4},{value:"* describe(&quot;POST /user/:user_id/edit&quot;, () =&gt; {",id:"-describepost-useruser_idedit---",level:4},{value:"* describe(&quot;POST /user/login&quot;, () =&gt; {",id:"-describepost-userlogin---",level:4},{value:"* describe(&quot;GET /user/login&quot;, () =&gt; {",id:"-describeget-userlogin---",level:4},{value:"* Other tests pending...",id:"-other-tests-pending",level:4}],u={toc:c};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,s.kt)("p",null,"For each method, one or more test cases."),(0,s.kt)("p",null,"A test case consists of input parameter values and expected results."),(0,s.kt)("p",null,"All external classes should be stubbed using mock objects."),(0,s.kt)("p",null,"Testing will be done using Jest"),(0,s.kt)("h4",{id:"-describeget-usernew---"},'* describe("GET /user/new", () => {'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- should get user and redirect to / \n- otherwise redirect to new_user.html \n")),(0,s.kt)("p",null,"}) "),(0,s.kt)("h4",{id:"-describepost-usernew---"},'* describe("POST /user/new", () => {'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'- describe("when passed a first name, lastname, email and password", () => { \n    Respond with a 200 status code \n    New entry created in database \n    Redirect user to /user \n}) \n- describe("when first name, lastname, email or password missing", () => {\n    Respond with a 400 status code \n    Respond with json error object \n    No new entry created in database \n}) \n')),(0,s.kt)("p",null,"}) "),(0,s.kt)("h4",{id:"-describepost-useruser_idedit---"},'* describe("POST /user/:user_id/edit", () => {'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'- describe("when user id passed", () => { \n    Respond with a 200 status code \n    Able to save new changes to database \n}) \n- describe("when user id not found", () => { \n    Respond with a 404 status code\n    Respond with error json object \n}) \n- describe("when user id incorrect", () => { \n    Respond with a 403 status code \n    Respond with error json object \n}) \n')),(0,s.kt)("p",null,"}) "),(0,s.kt)("h4",{id:"-describepost-userlogin---"},'* describe("POST /user/login", () => {'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'- describe("when passed a username and password", () => { \n    Respond with a 200 status code \n    Redirect user to homepage (/) \n}) \n- describe("when username or password is missing or incorrect", () => { \n    Respond with json error object \n    Respond with a 400 status code  \n}) \n')),(0,s.kt)("p",null,"}) "),(0,s.kt)("h4",{id:"-describeget-userlogin---"},'* describe("GET /user/login", () => {'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"- render login page \n- otherwise respond with error json object \n")),(0,s.kt)("p",null,"}) "),(0,s.kt)("h4",{id:"-other-tests-pending"},"* Other tests pending..."))}l.isMDXComponent=!0}}]);