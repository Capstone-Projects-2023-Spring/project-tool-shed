---
sidebar_position: 2
---
## Database Diagrams

**Entity-relation diagram**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Table Design**

| **COLUMN_NAME**         | DATA_TYPE          | NULLABLE | DATA_DEFAULT | COLUMN_ID | COMMENTS |
|-------------------------|--------------------|----------|--------------|-----------|----------|
| **CUSTOMER_ID**         | NUMBER             | No       |              | 1         |          |
| **EMAIL_ADDRESS**       | VARCHAR2(255 BYTE) | No       |              | 2         |          |
| **PASSWORD**            | VARCHAR2(60 BYTE)  | No       |              | 3         |          |
| **FIRST_NAME**          | VARCHAR2(60 BYTE)  | No       |              | 4         |          |
| **LAST_NAME**           | VARCHAR2(60 BYTE)  | No       |              | 5         |          |
| **SHIPPING_ADDRESS_ID** | NUMBER             | Yes      | NULL         | 6         |          |
| **BILLING_ADDRESS_ID**  | NUMBER             | Yes      | "NULL        |           |          |
