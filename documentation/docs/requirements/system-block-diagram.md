---
sidebar_position: 2
---

# System Block Diagram

```mermaid
graph LR
  subgraph backend [Backend]
  B[Load Balancer &\nSSL Termination] <-->|HTTP| C
  B <-->|HTTP| CC
  B <-->|HTTP| CCC
  subgraph Q [Application server pool]
  C[Application Server\nExpress.js]
  CC[Application Server\nExpress.js]
  CCC[Application Server\nExpress.js]
  end
  C <-->|read/write| D[(PostgreSQL)]
  CC <-->|read/write| D[(PostgreSQL)]
  CCC <-->|read/write| D[(PostgreSQL)]
  subgraph tool-finding-system [Tool Finding System]
  TF[Application Server\nNode.js]
  TF -->|read/write| D[(PostgreSQL)]
  end
  subgraph frontend [Frontend]
  A[Web Browser] <-->|HTTPS| B
  E[Mobile App] <-->|HTTPS| B
  TF -->|HTTP| B
  end
```
<p align="center"><b>Figure 1.</b> High level technical design of the Tool Shed Website.</p> 
<br></br>
 

The application is a basic database-driven web application. Frontend clients (web browsers, mobile apps, etc) send HTTPS requests to a load balancer (which terminates SSL/TLS) and forwards the request to a pool of application serverx. Each app server uses the database to fulfill requests, which get passed back through the load balancer to the client. This architecture allows for automatic scaling (out) to match the traffic the web application experiences to the number of servers serving the request. 

 

Figure 1 also shows that the HTTPS requests that come into the backend get SSL terminated. This is so that the application server can be designed with fewer dev-ops things in mind. Using the load balancer as a singular entry/exit point for the backend also frees up developers from having to worry about hardening their web application against attacks on the open internet.
