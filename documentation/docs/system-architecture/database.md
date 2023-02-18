---
sidebar_position: 2
---
# Database 

## Database Diagrams

**Entity-relation diagram**

[![](https://mermaid.ink/img/pako:eNqNlF1vgjAUhv8K6fVi1MxdeFfbqs34SgtbXEgIkepIVBYoF0b97ysKCtYvwgX0PO1p3_P27MA8jQUYApHhJFpm0TrYGOrxc5HB-TwtNtLY7zud_c6AcZyJPB8aAVDvCUORFMs029aMmeQy2SxbTDVvd_o7jmDMCOchxYG0fWtEmOF-XsLI555jEdaMjxtxk9qkF8gvyNAUsr5K9NE1RjOP1BlrqP8MQtSbtZh3neEeVANNqK8xP9QNkYPbWE9fy5069hWkL4YphyOTnM9-ihy0uuweK9ZUlFiQmmEle_ssg4G-S8j5t8PwM_XGlHEvtKFFnhYDvgjyKXVdak9C3SIXaERN8xFzuPJmUyhVy4nDZnetV8fLzRoPdKpyVH5vpnCZg33kPc1wx9z19JfsVLGasreqiglHjLoedez2uoPurdujCuYyioguv_IncnxbxQlDxPZuEOqMZXVKD5ffZ8nAG1iLbB0lseo4R80CIH_FWgSgbBmxWETFSpYbOSg0KmTKt5s5GMqsEG-g-ItVSas2BYaLaJWrUREnMs2sUxc7NrPDPxZQT_4?type=png)](https://mermaid.live/edit#pako:eNqNlF1vgjAUhv8K6fVi1MxdeFfbqs34SgtbXEgIkepIVBYoF0b97ysKCtYvwgX0PO1p3_P27MA8jQUYApHhJFpm0TrYGOrxc5HB-TwtNtLY7zud_c6AcZyJPB8aAVDvCUORFMs029aMmeQy2SxbTDVvd_o7jmDMCOchxYG0fWtEmOF-XsLI555jEdaMjxtxk9qkF8gvyNAUsr5K9NE1RjOP1BlrqP8MQtSbtZh3neEeVANNqK8xP9QNkYPbWE9fy5069hWkL4YphyOTnM9-ihy0uuweK9ZUlFiQmmEle_ssg4G-S8j5t8PwM_XGlHEvtKFFnhYDvgjyKXVdak9C3SIXaERN8xFzuPJmUyhVy4nDZnetV8fLzRoPdKpyVH5vpnCZg33kPc1wx9z19JfsVLGasreqiglHjLoedez2uoPurdujCuYyioguv_IncnxbxQlDxPZuEOqMZXVKD5ffZ8nAG1iLbB0lseo4R80CIH_FWgSgbBmxWETFSpYbOSg0KmTKt5s5GMqsEG-g-ItVSas2BYaLaJWrUREnMs2sUxc7NrPDPxZQT_4)

**Table Design**

***UserAccount***

| COLUMN_NAME         | DATA_TYPE          | NULLABLE | DATA_DEFAULT | COLUMN_ID | COMMENTS |
|---------------------|--------------------|----------|--------------|-----------|----------|
| CUSTOMER_ID         | NUMBER             | No       |              | 1         |          |
| EMAIL_ADDRESS       | VARCHAR2(255 BYTE) | No       |              | 2         |          |
| PASSWORD            | VARCHAR2(60 BYTE)  | No       |              | 3         |          |
| FIRST_NAME          | VARCHAR2(60 BYTE)  | No       |              | 4         |          |
| LAST_NAME           | VARCHAR2(60 BYTE)  | No       |              | 5         |          |
| SHIPPING_ADDRESS_ID | NUMBER             | Yes      | NULL         | 6         |          |
| BILLING_ADDRESS_ID  | NUMBER             | Yes      | "NULL        |           |          |


***Address***

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

***Listing***

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

