---
sidebar_position: 5
---

# Version Control
- GitHub will serve as the version control system for Tool Shed, providing a reliable and widely-used platform for managing source code.
- Branch protection will be implemented to require at least two code reviews before any changes can be merged to the main branch. This will maintain the quality and stability of the main branch, ensuring it is always in a deployable state. 
- Each task or feature will be assigned its own branch and named using Jira's Issue Tags to facilitate tracking and organization. 
- Regular merging with the staging branch will be conducted to minimize the occurrence of merge conflicts.
- Completed features will be pushed to a staging branch for review, with weekly code reviews conducted before any changes are pushed to the main branch for production. This will ensure that all code changes are thoroughly reviewed and tested prior to release.  