---
sidebar_position: 1
---
# Design

## Class Diagram
```mermaid
classDiagram
    class Address {
        +int id;
        +String line_one;
        +String line_two;
        +String city;
        +String state;
        +String zip_code;
    }
    class PaymentMethod {
        +int id;
        +String label;
        +Blob data;
        +int type;
    }
    class User{
        +int id;
        +String email_address;
        +Blob password_digest;
        +String first_name;
        +String last_name;
        +Address address;
        +setPassword(String password);
        +passwordMatches(String aPassword) bool;
    }
    class ToolCategory {
        +int id;
        +String name;
    }
    class Tool {
        +int id;
        +String description;
        +ToolCategory category;
        +ToolMaker maker;
    }
    class ToolMaker {
        +int id;
        +String name;
    }
    class Listing {
        +Tool tool;
        +double price;
    }
    Tool --> ToolCategory
    Tool --> ToolMaker
    Listing --> Tool
    Listing --> User
    User --> Address
    User --> PaymentMethod
```

## Components & Interfaces

Toolshed is a thin-client webapp that loads/stores data from/in PostgreSQL.

The primary component of Toolshed is the backend webserver. The backend server implements the data model in the previous section via the Sequelize ORM, which manages migrations (table creation/updates based on data model changes) & query generation. Each endpoint on the backend server serves an HTML page based on data it loads from the database.

The database is PostgreSQL, which uses a TCP protocol (not too dissimilar to a binary version of HTTP) to transmit queries and result sets. As mentioned before, Sequelize will manage the schema of the database.

The client/frontend is currently a basic form-driven static HTML affair, with the expectation that as interactivity increases, the "thickness" of the client increases to the point where there is no more UI logic on the backend. This is made easier by the fact that the backend and frontend are both JavaScript.


## Sequence Diagram - Removing a Listing

<details><summary>Use Case Remove a listing/tool</summary>


As someone who uses this site to rent tools to make extra money, the user wants to be able to remove a tool listing to make sure it is available for their personal use. 

1. The user navigates to (URL:TBD) and enters their username and password followed by clicking the ‘Login’ button. 

2. The user clicks on the (button: ACTIVE_LISTINGS) and is presented with their active listings 

    - AVAILABLE: <i>Gas Hedge Trimmer (NAME) (CONTACT) (EDIT)</i> 

    - AVAILABLE: <i>Circular Saw (NAME) (CONTACT) (EDIT)</i> 

    - AVAILABLE: <i>20-Gal Electric Air Compressor (NAME) (CONTACT) (EDIT)</i> 

3. The user clicks on the (button: EDIT) associated with the listing they would like to change 

4. The user is presented with the following choices 

    - Header: AVAILABLE: <i>20-Gal Electric Air Compressor (NAME) (CONTACT)</i> 

      - Change Availability (button: AVAILABLE) (button: NOT_AVAILABLE) 

      - Change Contact Information (button: CHANGE_CONTACT_INFO) 

      - Change Description (button: MODIFY_DESCRIPTION) 

5. The user will select the (button: NOT_AVAILABLE) to remove the listing from the public eye. Now this tool cannot be rented, and it is only for personal use by the original lister 

6. If the user wishes to list the same tool again, they click the Change Availability (button: AVAILABLE) to re-list the tool 

</details> 

[![](https://mermaid.ink/img/pako:eNptksFOGzEQhl9l5BMVJA-wB6QUeqgUqMSGnixVE3vYteIdB8-YKkK8e-2waQPqzfI_3_if3_NqXPJkOiP0XIgd3QYcMk6W0WnKUAAFHoWy5T1mDS7skRViavfrNASG3mUi_qj7Jt-i4haFPqFHMogGHuCOuHyUpck9aZNl1quV8IJKUM9lcX19GVMHfdlOQaVaaSaqB0-sAaNAYtikFKEfycPjw9pyTI3yHdyM5HYCmkCIIDxBqaNBEKgt_F-7GNWyr8iiPfRAmgO91F5SnCORpxLjYW66KF2LYWjDBF4ul5Ypth4Nb_R90nNuxiq1yQfAAUNNjtifButgW1QT38TgduQvvlRgfkbG9HvVkqA5PWnqEZP_YHKGnfI8B9yIPFCvqEUu7n9sfq1-rr6vV1_X387gd3mu_RyAp38fY67MRHnC4OsuvVoGsEZHmsiarh495p01lt9qHRZN_YGd6TQXujJlX5M_7d3pknyo63f3vpvHFX37A8Pq8ZU?type=png)](https://mermaid.live/edit#pako:eNptksFOGzEQhl9l5BMVJA-wB6QUeqgUqMSGnixVE3vYteIdB8-YKkK8e-2waQPqzfI_3_if3_NqXPJkOiP0XIgd3QYcMk6W0WnKUAAFHoWy5T1mDS7skRViavfrNASG3mUi_qj7Jt-i4haFPqFHMogGHuCOuHyUpck9aZNl1quV8IJKUM9lcX19GVMHfdlOQaVaaSaqB0-sAaNAYtikFKEfycPjw9pyTI3yHdyM5HYCmkCIIDxBqaNBEKgt_F-7GNWyr8iiPfRAmgO91F5SnCORpxLjYW66KF2LYWjDBF4ul5Ypth4Nb_R90nNuxiq1yQfAAUNNjtifButgW1QT38TgduQvvlRgfkbG9HvVkqA5PWnqEZP_YHKGnfI8B9yIPFCvqEUu7n9sfq1-rr6vV1_X387gd3mu_RyAp38fY67MRHnC4OsuvVoGsEZHmsiarh495p01lt9qHRZN_YGd6TQXujJlX5M_7d3pknyo63f3vpvHFX37A8Pq8ZU)

## Sequence Diagram - Search for a Listing

<details><summary>Use Case Search For Local Tool</summary>

The user wants to search their local neighborhood for a hedge trimmer. They would like to get the job done today and do not have the budget to purchase a brand-new one. 

1. The user navigates to (URL:TBD) and enters their username and password. 

2. The user clicks the (LOGIN) button. 

3. The user clicks on the (button: RENT_TOOL) and completes the following fields. 

    - Zip Code: ##### 

    - Search Radius: 15 miles 

4. The user clicks the (button: SEARCH_TOOL) which will complete the request and execute the database query. 

5. The user is presented with 3 search results 

    - AVAILABLE: <i>Gas Hedge Trimmer (NAME) (CONTACT)</i> 

    - AVAILABLE: <i>Electric (Battery) Hedge Trimmer (NAME) (CONTACT)</i> 

    - AVAILABLE: <i>Electric (Wireless) Hedge Trimmer (NAME) (CONTACT)</i> 

6. The user clicks option 3 and clicks the (button: CONTACT) and is presented with the contact information for Electric (Wireless) Hedge Trimmer. 

7. The user contacts the person responsible for Electric (Wireless) Hedge Trimmer. 

8. The user clicks the (button: LOG_OFF) and closes the website. 
    
</details> 

[![](https://mermaid.ink/img/pako:eNrVU8lOwzAQ_ZWRT6AuF245VEIqt0DpdkGRkGtPEgvHDl4kqqr_zmRpS6HlDDlZM29zPLNjwkpkCfP4HtEInCpeOF5l5l4E62Dt0WUG6GtOo8lkoG2hzLgMlU5gGTeVCh7aGggXJZqguPZgDays1bAsUcJ6kXYaJ-6IpEaNZAKpLRo2NcbjcytlJH70Vk0NhFbizcPNJoZgTQKLh6fV62o2S2874onQ6A86fal8rfkWHGVrMrX9X72ebR01Dwi5dRVwIztj8O11L1pNeeAb7pH-yTyFeUS3PVoceu2dv_o00AX62hqPR_S58FksXiDhc4e-vB6-zRxrSfnlj-xXXP5Q_PadPWoUNFe2Doom6e6fxO7HkwYaZnl-Sfsbq0dCZtiQVegqriTt4q7hZSyUWGHGEjpKzHnUIWOZ2ROUx2CXWyNYElzEIeueu19dluS0gVRFqWiFH7v9btd8yGpuXqw9YPafkGpRvQ?type=png)](https://mermaid.live/edit#pako:eNrVU8lOwzAQ_ZWRT6AuF245VEIqt0DpdkGRkGtPEgvHDl4kqqr_zmRpS6HlDDlZM29zPLNjwkpkCfP4HtEInCpeOF5l5l4E62Dt0WUG6GtOo8lkoG2hzLgMlU5gGTeVCh7aGggXJZqguPZgDays1bAsUcJ6kXYaJ-6IpEaNZAKpLRo2NcbjcytlJH70Vk0NhFbizcPNJoZgTQKLh6fV62o2S2874onQ6A86fal8rfkWHGVrMrX9X72ebR01Dwi5dRVwIztj8O11L1pNeeAb7pH-yTyFeUS3PVoceu2dv_o00AX62hqPR_S58FksXiDhc4e-vB6-zRxrSfnlj-xXXP5Q_PadPWoUNFe2Doom6e6fxO7HkwYaZnl-Sfsbq0dCZtiQVegqriTt4q7hZSyUWGHGEjpKzHnUIWOZ2ROUx2CXWyNYElzEIeueu19dluS0gVRFqWiFH7v9btd8yGpuXqw9YPafkGpRvQ)

## Sequence Diagram - Review Tool Owner

<details><summary>Use Case Review Tool Owner</summary>

A user wants to review their experience with the rented tool and the tool owner.

1. The user navigates to the website, logs in to their account, and ends up on the homepage of the website. 

2. The user clicks on the "General" dropdown menu and clicks on "Create Review". 

3. The user sees a list of users.

4. The user finds the user they want to review and clicks the button "Review User".

5. The user writes a review in the text box and selects a star rating. 

6. The user clicks submit. 

7. The user exits the site.
    
</details>  

```mermaid
    sequenceDiagram
    actor u as Renter
    participant b as browser
    participant s as server
    participant d as database
    activate u
    u ->> b: Clicks button "Create Review" from dropdown menu
    activate b
    b ->> s: Requests for users page
    activate s
    s ->> d: Queries for users
    activate d
    d -->> s: Returns users
    deactivate d
    s -->> b: renders user page
    deactivate s
    b -->> u: Displays user page
    deactivate b
    u ->> b: Clicks button "Review User"
    activate b
    b ->> s: Requests for Review user page 
    activate s
    s -->> b: Renders Review user page 
    deactivate s
    b -->> u: Displays Review user page
    deactivate b
    u -->> b: Enters review and star rating and clicks submit
    activate b
    b ->> s: POST form
    activate s
    s ->> d: Loads data to correct fields
    activate d
    d -->> s: Sends accepted data signal
    deactivate d
    s -->> b: Renders profile page
    deactivate s
    b -->> u: Displays profile page
    deactivate b
    deactivate u
```

## Sequence Diagram - Editing Tool Details

<details><summary>Use Case Editing Tool Details</summary>
A user wants to edit the details of a tool that they have already added to their account. 

1. The user navigates to the website, logs in to their account, and ends up on the homepage of the website. 

2. The user clicks on the "General" dropdown menu and clicks on "Tools". 

3. The user sees all the tools they've added to the site.

4. The user clicks on the "Edit Tool" button of the tool they want to edit.

5. The user sees all the current information on the tool. 

6. The user clicks on the textbox under description.

7. The user deletes the current text under description and enters new information. 

8. The user then clicks the "Save" button.

9. The user clicks on the "General" dropdown menu and clicks on "Tools" where the user will see that the tool description has changed.

10. The user exits the site.


</details>  

```mermaid
    sequenceDiagram
    actor u as Tool Owner
    participant b as browser
    participant s as server
    participant d as database
    activate u
    u ->> b: Clicks button "Tools" from dropdown menu
    activate b
    b ->> s: Requests for Tools page
    activate s
    s ->> d: Queries for Tool Owner's tools
    activate d
    d -->> s: Returns Tool Owner's tools
    deactivate d
    s -->> b: renders Tools page
    deactivate s
    b -->> u: Displays Tools page
    deactivate b
    u ->> b: Clicks button "Edit Tool"
    activate b
    b ->> s: Requests for Tool Information 
    activate s
    s ->> d: Queries for Tool Information
    activate d
    d -->> s: Returns Tool Information
    deactivate d
    s -->> b: Renders Tool Information 
    deactivate s
    b -->> u: Displays Tool Information form
    deactivate b
    u -->> b: Enters new information and clicks save button
    activate b
    b ->> s: POST form
    activate s
    s ->> d: Update query to change information stored about tool
    activate d
    d -->> s: Returns Tool
    deactivate d
    s -->> b: Renders Tool
    deactivate s
    b -->> u: Displays Tool with updated details
    deactivate b
    deactivate u
```

## Sequence Diagram - Listing a Tool
<details><summary>Use Case Listing a Tool</summary>
A user would like to rent out tools that they are not currently using to earn some extra money. 

1. The user navigates to the website, logs in to their account, and ends up on the homepage of the website. 

2. The user clicks on the "General" dropdown menu and clicks on "Add Tool". 

3. The user fills out the form

    - Name of Tool 

    - Description 

    - Category

    - Maker

3. The user adds a YouTube video on how to use tool, photo and/or manual.

4. The user clicks the button "Create".

5. The user scrolls down to Listings and clicks "+ New Listings".

6. The user clicks "Active" and fills out price, max # of billing intervals and billing interval.

7. The user clicks "Create" to create a new listing.

5. The user can scroll down to Listings and click "+ New Listings" to create more listings of the same tool or exits the site.


</details>  

[![](https://mermaid.ink/img/pako:eNqlVsFy2yAQ_RWGa52MHNmeSoccOrlkJr007aWjC4a1wwSBC8ipm8m_dwFZlhxnYiU-wYp97Nu3u-aZciOAltTBnwY0hxvJ1pbVlWbcG0ssaA-20gR_aJFb5mFgTOuL6-sv36x5cmBLEi2OSE1-_bg7cm0PJWu7Cc73YLfB14YwnHfkwdSwYWsg3pAlEGWYAHEElpySMa0R6oZ5tmQOSoJIVkIPSuCnI4j96WTe7y4Q5xCRb6w-iSLgDZw2GETpktK5Szcg08Po09mnBiFShkv0WmNK2wSRlbF1wBLSbRTbgSBGkwZdiOMWQL9CH2S-U62LbyWVipqla6QOFzAvjT5PwUO6OMgtZj3E4rpwUUUERtiPSYjBJHIJ5GNKbpmS4jXCGBVdwzk4t2pUJ0ekO1rMVrauLMbKxZXkj47cScztT2MUWTbej9eqbbYDzCGWsRINMT7Xa29ijdEqdNlpaqNlehfmPLVuNe48ua0DqfMFOxXPAKo2gqmxMcV26ro-pJhoCMXN7C62a2DMcIWcmRZ7Dq5Z1tKPqzMHWgxGAX8A_kjkijCl0tU4yUIs54z4PgmG7bjxOPy4lchPMnKWwsehpbkZmQWwE7X7ThOkWotMAj1jcS7gjJaghBvdBSmmjlpEdXKtT2h8ZhNoeIp6IlrUs5W33brPtUZvJqYUxnLpPr9_0aB6evb-M6PSVdsrdEJrwL8mKfDV8hxsFfUPUENFS1wKZh8rWukXPMcab-53mtNyxZSDCW02mMz9E6ezgpD41Pme3kHxOTShG6Z_G4NnvG0gbmn5TP_S8iq7uiy-5lmWL_KimE2LCd2hFY2L-ddZvphnsyIvpouXCf0XAbLLYjrNZ_Msm2f5fJZls5f_heo-HQ?type=png)](https://mermaid.live/edit#pako:eNqlVsFy2yAQ_RWGa52MHNmeSoccOrlkJr007aWjC4a1wwSBC8ipm8m_dwFZlhxnYiU-wYp97Nu3u-aZciOAltTBnwY0hxvJ1pbVlWbcG0ssaA-20gR_aJFb5mFgTOuL6-sv36x5cmBLEi2OSE1-_bg7cm0PJWu7Cc73YLfB14YwnHfkwdSwYWsg3pAlEGWYAHEElpySMa0R6oZ5tmQOSoJIVkIPSuCnI4j96WTe7y4Q5xCRb6w-iSLgDZw2GETpktK5Szcg08Po09mnBiFShkv0WmNK2wSRlbF1wBLSbRTbgSBGkwZdiOMWQL9CH2S-U62LbyWVipqla6QOFzAvjT5PwUO6OMgtZj3E4rpwUUUERtiPSYjBJHIJ5GNKbpmS4jXCGBVdwzk4t2pUJ0ekO1rMVrauLMbKxZXkj47cScztT2MUWTbej9eqbbYDzCGWsRINMT7Xa29ijdEqdNlpaqNlehfmPLVuNe48ua0DqfMFOxXPAKo2gqmxMcV26ro-pJhoCMXN7C62a2DMcIWcmRZ7Dq5Z1tKPqzMHWgxGAX8A_kjkijCl0tU4yUIs54z4PgmG7bjxOPy4lchPMnKWwsehpbkZmQWwE7X7ThOkWotMAj1jcS7gjJaghBvdBSmmjlpEdXKtT2h8ZhNoeIp6IlrUs5W33brPtUZvJqYUxnLpPr9_0aB6evb-M6PSVdsrdEJrwL8mKfDV8hxsFfUPUENFS1wKZh8rWukXPMcab-53mtNyxZSDCW02mMz9E6ezgpD41Pme3kHxOTShG6Z_G4NnvG0gbmn5TP_S8iq7uiy-5lmWL_KimE2LCd2hFY2L-ddZvphnsyIvpouXCf0XAbLLYjrNZ_Msm2f5fJZls5f_heo-HQ)

## Sequence Diagram - Use Case #6

<details>
    <summary>As someone who uses this site to rent tools to make extra money, the user wants to be able to remove a tool listing to make sure it is available for their personal use.</summary>
    
1. The user navigates to (URL:TBD) and enters their username and password followed by clicking the ‘Login’ button.
2. The user clicks on the (button: ACTIVE_LISTINGS) and is presented with their active listings
    - AVAILABLE: Gas Hedge Trimmer (NAME) (CONTACT) (EDIT)
    - AVAILABLE: Circular Saw (NAME) (CONTACT) (EDIT)
    - AVAILABLE: 20-Gal Electric Air Compressor (NAME) (CONTACT) (EDIT)
3. The user clicks on the (button: EDIT) associated with the listing they would like to change
4. The user is presented with the following choices
    - Header: AVAILABLE: 20-Gal Electric Air Compressor (NAME) (CONTACT)
    - Change Availability (button: AVAILABLE) (button: NOT_AVAILABLE)
    - Change Contact Information (button: CHANGE_CONTACT_INFO)
    - Change Description (button: MODIFY_DESCRIPTION)
5. The user will select the (button: NOT_AVAILABLE) to remove the listing from the public eye. Now this tool cannot be rented, and it is only for personal use by the original lister
6. If the user wishes to list the same tool again, they click the Change Availability (button: AVAILABLE) to re-list the tool
    
</details>

```mermaid
sequenceDiagram
    actor TO as ToolOwner
    participant B as Browser
    participant S as Server
    participant DB as Database
    activate TO
    TO->>B: Fills out and submits login form
    activate B
    B->>S: POSTs form
    activate S
    S->>DB: Queries for corresponding user
    activate DB
    DB->>S: Returns user
    deactivate DB
    S->>DB: Queries for user's active listings
    activate DB
    DB->>S: Returns active listings
    deactivate DB
    S->>B: Renders active listings
    deactivate S
    B->>TO: Displays active listings page to User
    deactivate B
    TO->>B: Clicks edit on listing
    activate B
    B->>S: Requests "Edit Listing" page
    activate S
    S->>DB: Requests listing
    activate DB
    DB->>S: Returns listing
    deactivate DB
    S->>B: Renders "Edit Listing" page
    deactivate S
    B->>TO: Displays "Edit Listing" page
    deactivate B
    TO->>B: Changes form control that corresponds <br />to tool availability to "Not available" and clicks save
    activate B
    B->>S: Posts the edited form to the backend
    activate S
    S->>DB: Issues an UPDATE query to change the tool status
    S->>B: Re-renders the "Edit Listing" page
    deactivate S
    B->>TO: Displays new "Edit Listing" page
    deactivate TO
 
```

## Algorithms
Tool Shed will constantly run and execute database queries to determine similar patterns and form submissions through known categories. Once jobs have been completed, Tool Shed will be able to recommend tools and supplies that are known to have successfully completed similar jobs in the past. Using Google YouTube API, search queries will be returned with instructional videos that are highly recommended in the how-to field. 


