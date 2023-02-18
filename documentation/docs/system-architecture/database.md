---
sidebar_position: 2
---
# Database 

## Database Diagrams

**Entity-relation diagram**

The Design Document - Part I Architecture describes the software architecture and how the requirements are mapped into the design. This document will be a combination of diagrams and text that describes what the diagrams are showing.

**Table Design**

***Accounts***

| COLUMN_NAME         | DATA_TYPE          | NULLABLE | DATA_DEFAULT | COLUMN_ID | COMMENTS |
|---------------------|--------------------|----------|--------------|-----------|----------|
| CUSTOMER_ID         | NUMBER             | No       |              | 1         |          |
| EMAIL_ADDRESS       | VARCHAR2(255 BYTE) | No       |              | 2         |          |
| PASSWORD            | VARCHAR2(60 BYTE)  | No       |              | 3         |          |
| FIRST_NAME          | VARCHAR2(60 BYTE)  | No       |              | 4         |          |
| LAST_NAME           | VARCHAR2(60 BYTE)  | No       |              | 5         |          |
| SHIPPING_ADDRESS_ID | NUMBER             | Yes      | NULL         | 6         |          |
| BILLING_ADDRESS_ID  | NUMBER             | Yes      | "NULL        |           |          |


***Addresses***

| COLUMN_NAME | DATA_TYPE         | NULLABLE | DATA_DEFAULT | COLUMN_ID | COMMENTS |
|-------------|-------------------|----------|--------------|-----------|----------|
| ADDRESS_ID  | NUMBER            | No       |              | 1         |          |
| CUSTOMER_ID | NUMBER            | Yes      |              | 2         |          |
| LINE1       | VARCHAR2(60 BYTE) | No       |              | 3         |          |
| LINE2       | VARCHAR2(60 BYTE) | Yes      | NULL         | 4         |          |
| CITY        | VARCHAR2(40 BYTE) | No       |              | 5         |          |
| STATE       | VARCHAR2(2 BYTE)  | No       |              | 6         |          |
| ZIP_CODE    | VARCHAR2(10 BYTE) | No       |              | 7         |          |
| PHONE       | VARCHAR2(12 BYTE) | No       |              | 8         |          |
| DISABLED    | NUMBER(1,0)       | Yes      | "0           |           |          |

***Listings***

| COLUMN_NAME      | DATA_TYPE           | NULLABLE | DATA_DEFAULT | COLUMN_ID | COMMENTS |
|------------------|---------------------|----------|--------------|-----------|----------|
| PRODUCT_ID       | NUMBER              | No       |              | 1         |          |
| CATEGORY_ID      | NUMBER              | Yes      |              | 2         |          |
| PRODUCT_CODE     | VARCHAR2(10 BYTE)   | No       |              | 3         |          |
| PRODUCT_NAME     | VARCHAR2(255 BYTE)  | No       |              | 4         |          |
| DESCRIPTION      | VARCHAR2(1500 BYTE) | No       |              | 5         |          |
| LIST_PRICE       | NUMBER(10,2)        | No       |              | 6         |          |
| DISCOUNT_PERCENT | NUMBER(10,2)        | Yes      | 0.00         | 7         |          |
| DATE_ADDED       | DATE                | Yes      | "NULL        |           |          |

***Categories***

| COLUMN_NAME   | DATA_TYPE          | NULLABLE | DATA_DEFAULT | COLUMN_ID | COMMENTS |
|---------------|--------------------|----------|--------------|-----------|----------|
| CATEGORY_ID   | NUMBER             | No       |              | 1         |          |
| CATEGORY_NAME | VARCHAR2(255 BYTE) | No       |              | 2         |          |

