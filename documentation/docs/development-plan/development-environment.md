---
sidebar_position: 4
---

# Development Environment

ToolShed is a JavaScript project that uses NPM to manage dependencies. It's IDE agnostic, so as long as your IDE can understand package.json, you're good to go. Projects shouldn't force developers to use a specific editor - that's dumb.

ToolShed’s JavaScript runs on NodeJS, in two different environments: the backend/server, and the frontend/browser (at least on Chrome). While the backend is a predictable environment, the frontend isn’t, so we’re using a tool called Babel to transpile modern JavaScript syntax into an older, least-common-denominator kind of syntax supported by more (and older) browsers. To test our code, we’re going to unit test with Jest. We plan to test core business logic, where appropriate.

On the backend, we’re using ExpressJS as our HTTP server, and Sequelize as our ORM (database access via JS). The frontend is being developed as a series of non-SPA react apps, but we might switch to single-page if it makes sense down the line.

We manually deploy our code to AWS, where we also use a managed PostgreSQL instance in RDS.

As far as documentation, we plan to use structured comments that can be read by tools like JSDoc and translated to markdown for insertion into this documentation site. 