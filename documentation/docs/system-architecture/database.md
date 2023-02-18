---
sidebar_position: 2
---
# Database 

## Database Diagrams

**Entity-relation diagram**

[![](https://mermaid.ink/img/pako:eNqNVNFugjAU_RXTZ2PUzD34VkunTaCQFra4kBAC1ZGoLKU8GPTfVxBnVXQjPEDPuTf3nnt6K5DkqQBTIKSVxWsZb8NdTz9BISRMkrzcqd7hMBgcqh5MUymKYtoLgX5PNBQrsc7l_syxs0Jlu_UVp42rTn_NiWUxzHlErFDRwJlhdsFQwH3XwawTtAnFo1C9Q4YWkI2j12F0DY4fgYj4SwN7MTHuQx8b4NjAPokXIdcy4ZEZ6y1cegWawRbhcGbjm0aOdwpX_2wfO5DYUaueWfBkYpYEOf9wmfVIijfCuB9R6OCHSsI_CHxBPI_QefRskjNi2884xxsLmSrogcxdtux2yBm8qfCiQpu5NaOZ2GOuFSD_ed4u8Bz41Ast52FdjScwR4x4PnGpmWcyvLayHoDHCML3lWhTITegGscMYep3MHQjteq18ervX1FAH2yF3MZZqi98o0oI1JfYihDUNzYVq7jcqPreHjU1LlXO97sETJUsRR-U36keVbslwHQVbwp9KtJM5dI5LZFmlxx_AB_5NKQ?type=png)](https://mermaid.live/edit#pako:eNqNVNFugjAU_RXTZ2PUzD34VkunTaCQFra4kBAC1ZGoLKU8GPTfVxBnVXQjPEDPuTf3nnt6K5DkqQBTIKSVxWsZb8NdTz9BISRMkrzcqd7hMBgcqh5MUymKYtoLgX5PNBQrsc7l_syxs0Jlu_UVp42rTn_NiWUxzHlErFDRwJlhdsFQwH3XwawTtAnFo1C9Q4YWkI2j12F0DY4fgYj4SwN7MTHuQx8b4NjAPokXIdcy4ZEZ6y1cegWawRbhcGbjm0aOdwpX_2wfO5DYUaueWfBkYpYEOf9wmfVIijfCuB9R6OCHSsI_CHxBPI_QefRskjNi2884xxsLmSrogcxdtux2yBm8qfCiQpu5NaOZ2GOuFSD_ed4u8Bz41Ast52FdjScwR4x4PnGpmWcyvLayHoDHCML3lWhTITegGscMYep3MHQjteq18ervX1FAH2yF3MZZqi98o0oI1JfYihDUNzYVq7jcqPreHjU1LlXO97sETJUsRR-U36keVbslwHQVbwp9KtJM5dI5LZFmlxx_AB_5NKQ)

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

