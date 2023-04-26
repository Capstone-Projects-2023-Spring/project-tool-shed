---
sidebar_position: 4
---

# Development Environment

ToolShed is a JavaScript-based project that effectively utilizes NPM to manage its dependencies. The project is designed to be IDE agnostic, thereby enabling seamless integration with any IDE that is capable of interpreting package.json files. Our objective is to ensure that developers are not constrained to use a specific editor or IDE, as we believe that such an approach is counterproductive.

ToolShed is executed on NodeJS, with its functionality spanning across two distinct environments - the backend/server and the frontend/browser (primarily on Chrome). While the backend environment is predictable, the frontend environment is relatively volatile. As such, we rely on a tool called Babel to transpile modern JavaScript syntax into a backward-compatible format that can be supported by older browsers. We intend to validate our code by utilizing Jest for unit testing, primarily focusing on core business logic.

For the backend, we have opted to use ExpressJS as our HTTP server and Sequelize as our Object-Relational Mapping (ORM) tool for database access via JavaScript. On the frontend, we are developing non-single-page react apps that we may eventually transition into a single-page format if it makes sense down the line.

We deploy our code manually to Amazon Web Services (AWS), where we also utilize a managed PostgreSQL instance in RDS.

Regarding documentation, we intend to leverage structured comments that can be read by tools like JSDoc and can be converted into markdown for inclusion in our documentation site.
