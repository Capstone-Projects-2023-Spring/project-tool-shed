---
sidebar_position: 1
---
# Unit tests
For each method, one or more test cases.

A test case consists of input parameter values and expected results.

All external classes should be stubbed using mock objects.

Testing will be done using Jest

#### * describe("GET /user/new", () => { 
    - should get user and redirect to / 
    - otherwise redirect to new_user.html 
}) 

#### * describe("POST /user/new", () => { 
    - describe("when passed a first name, lastname, email and password", () => { 
        Respond with a 200 status code 
        New entry created in database 
        Redirect user to /user 
    }) 
    - describe("when first name, lastname, email or password missing", () => {
        Respond with a 400 status code 
        Respond with json error object 
        No new entry created in database 
    }) 
}) 

#### * describe("POST /user/:user_id/edit", () => { 
    - describe("when user id passed", () => { 
        Respond with a 200 status code 
        Able to save new changes to database 
    }) 
    - describe("when user id not found", () => { 
        Respond with a 404 status code
        Respond with error json object 
    }) 
    - describe("when user id incorrect", () => { 
        Respond with a 403 status code 
        Respond with error json object 
    }) 
}) 

#### * describe("POST /user/login", () => { 
    - describe("when passed a username and password", () => { 
        Respond with a 200 status code 
        Redirect user to homepage (/) 
    }) 
    - describe("when username or password is missing or incorrect", () => { 
        Respond with json error object 
        Respond with a 400 status code  
    }) 
}) 

#### * describe("GET /user/login", () => { 
    - render login page 
    - otherwise respond with error json object 
}) 


#### * Other tests pending...
