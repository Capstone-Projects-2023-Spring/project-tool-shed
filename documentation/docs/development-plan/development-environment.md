---
sidebar_position: 4
---

# Development Environment

ToolShed is an NPM project written in JavaScript, which means any IDE capable of reading package.json files can open and edit the project. This could range from NetBeans to VS Code to Vim. This is the norm, since many developers have different preferences for IDEs and editors & a project shouldn’t force developers to use tools they’re not productive with. 

ToolShed’s JavaScript runs on NodeJS, in two different environments: the backend/server, and the frontend/browser. While the backend is a predictable environment, the frontend isn’t, so we’re using a tool called Babel to transpile modern JavaScript syntax into an older, least-common-denominator kind of syntax supported by more (and older) browsers. To test our code, we’re going to unit test with Jest. We plan to test core business logic, where appropriate. 

On the backend, we’re using ExpressJS as our HTTP server, and sequelize as our ORM (database access via JS). We’re starting with server-side rendered XHTML for our frontend, and then we might switch to or use ReactJS in parts of the project. If we go the react route, we can target other platforms using the same codebase via ReactNative. 

While ToolShed runs as a mostly self-contained project locally, we plan to deploy it to a fully fledged cloud environment. In this cloud environment, we’d ideally have any image files stored in an S3 bucket or similar, and we’d have a real, persistent, distributed postgresql cluster driving the database. 

As far as documentation, we plan to use structured comments that can be read by tools like JSDoc and translated to markdown for insertion into our documentation site. 