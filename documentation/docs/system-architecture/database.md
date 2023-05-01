---
sidebar_position: 2
---
# Database 

## Database Diagrams

**Entity-relation diagram**

```mermaid
erDiagram
    User }|..|| Address: "Primary Address"
    User }|..o| Address: "Billing Address"
    User ||..|{ Tool: "Tool Ownership"
    User ||..|{ UserReview: "As Reviewer"
    User ||..|{ UserReview: "As Reviewee"
    Listing |o..|| Tool: "Listing a Tool"
    Tool }|..o| ToolCategory: ""
    Tool }|..o| ToolMaker: ""
    Tool ||..o| FileUpload: "Manual"
    Tool ||..o| FileUpload: "Photo"
    FileUpload }|..|| User: "Uploader"
    UserMessage }|..|| User: "Recipient"
    UserMessage }|..|| User: "Sender"
    UserMessage }|..o| Listing: "Topic of message"
```

**Table Design**

The design of the tables is managed by Sequelize. Sequelize derives table and column names from model and attribute names (respectively). For more information, see `./models.js`.
