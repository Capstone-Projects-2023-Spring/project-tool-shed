---
sidebar_position: 1
---

# Activities

## Requirements Gathering
In order to fulfill the requirements proposed later in this document our team plans to analyze the needs of our stakeholders and work in an Agile process to actualize specific points into our website. Since our stakeholders are very familiar with our project and have worked as stakeholders before on other projects, communication with them has gone extremely well. From talking with stakeholders, we can find the features that are most important to our website and strategize our time for this project. For instance, our stakeholder has expressed that it is a high priority to have a system which recommends tools to users. We will be meeting with our stakeholders weekly to ensure alignment of the project. Our team then started researching what it would take to build out such a system in the scope of the rest of the project. 

Another important part of our requirements' gathering process was whiteboarding and ticketing all our features, components, and tasks so that all group members could be on the same page. We found that using Miro and Jira respectively has been extremely useful in keeping our requirements organized as well as the process of organization bringing to light additional aspects that we need to flesh out. An example of where our group discovered another required element through our organization process was our messaging system. Although we had discussed using a confirmation email to be the communication between users, we concluded that embedding our own messaging system would be feasible and easier in the long run.

Below you can visualize the gathered information that was inspired by our team and stakeholders.  These plans and organization tools will enable our team to stay organized and align with the needs of our stakeholders. 

![Miro Image](/workspaces/project-tool-shed/documentation/static/img/miro1.png "Miro1")
![Miro Image](documentation/static/img/miro2.png "Miro2")
![Jira Image](/workspaces/project-tool-shed/documentation/static/img/Jira.png "Jira")


## Top-Level Design
1. Create initial UI components for simple navigation through site 
2. Establish backend communication with UI components 
3. Implement a user registration and login system 
4. Develop a tool listing system that allows users to post tools they would like to rent or sell 
5. Develop a tool management system for editing and removing current user listings 
6. Create a page that shows tool listings within a certain distance relative to the user 
7. Develop a system that allows users to search for tools/specify search criteria 
8. Develop a way to allow users to be notified when currently unavailable tool becomes available 
9. Create a transaction system for scheduling a tool to rent or purchasing a tool 
10. Implement a notification system that notifies a user when their listed tool has been scheduled for rent or purchased 
11. Establish a communication system between users for transactional purposes 
12. Create a review/report system for completed transactions  
13. Implement a recommended tools feature to recommend tools based on a project they’re working on  
14. Test site functionality to ensure reliability and security of features 

## Detailed Design
1. Create initial UI components for simple navigation through site 
    - The webpages will include: 
        * Home Page 
            + Search bar to search for tools 
            + Filter button to filter search results 
            + Log off button to sign out of account 
        * Profile Page 
            + Account settings to edit account information 
            + Notifications  
            + Button to delete account 
            + List of Listings  
            + Rental/Purchase history 
            + Star ratings given by other users 
        * Tools Listing Page 
            + Lists all the tools 
        * Login page 
            + Login button 
            + Sign up button to make account for new users 
2. Establish backend communication with UI components 
    - Enable communication between the user interface components and the backend to store listed tools, reviews and accounts to the database. 
3. Implement a user registration and login system 
    - Design user interface for user to enter account information 
    - Allow users to create an account. 
    - Allow users to login to their accounts. 
    - Account information is stored in the database. 
4. Develop a tool listing system that allows users to post tools they would like to rent or sell 
    - Design a website interface for users to enter information on their tool to create a new tool listing that would be visible to any other users   
    - Information will include the name of the tool, type of tool (electric, battery, etc.), zip code, condition of tool 
    - Upload image button that will allow the user to upload images of the tool 
    - List tool button to submit the information  
5. Develop a tool management system to edit and remove current user listings 
    - Design a website interface for users to edit information on a tool listing they made     
    - Implement a delete button on the listing to remove a tool that the user had added from the listing page  
6. Create a page that shows tool listings within a certain distance relative to the user 
    - Users will see a list of tools listed for sale or rent within a certain mile radius from the user with the use of the Google maps API by limiting their search with a specific mile radius 
    - If there are no tools that fit the search criteria the user will see a list of recommended tools or tools that are similar  
    - On each listing there is a button to contact the seller to rent or buy the tool 
7. Develop a system that allows users to search for tools/specify search criteria 
    - Users can filter search results to tools located close to the user using the Google Maps API, type of tool (battery, electric, etc.) by selecting various options on the filter 
8. Develop a way to allow users to be notified when currently unavailable tools become available 
    - Notify button on the tool listing 
    - The user can select to be notified when the tool becomes available 
    - The user will receive a notification through a message 
9. Create a transaction system for scheduling a tool to rent or purchase 
    - The user will be able to schedule a tool to rent or purchase by clicking the schedule tool button where there will be options to select a day 
10. Implement a notification system that notifies a user when their listed tool has been scheduled for rent or purchase  
    - Users will receive a notification  
11. Establish a communication system between users for transactional purposes 
    - Users will be able to contact other users  
12. Create a review/ report system for completed transactions 
    - Users will be able to write a review of a tool and a star rating 
    - Users will be able to give a star rating of the tool owner if rating or the seller if purchasing 
    - Users will be able to report another user for a faulty transaction or tool 
13. Implement a recommended tools feature to recommend tools based on a project they’re working on 
    - Shows recommended tools to user  
    - If user can’t find a tool, recommended tools will be shown instead of no results 
14. Test site functionality to ensure reliability and security of features 
    - Tests will be done in most sprints. The types of testing are written below

## Tests
There will be 3 different types of testing for the Tool Shed App which are unit testing, integration testing and acceptance tests. 

- Unit
    * Our team will utilize jest testing framework to implement unit tests for our react native type-script code. There will be a test for each method and function in our code to ensure proper functionality. 
- Integration
    * Integration testing will also be using jest testing framework to ensure the flow of our user stories are capable and successful. Jest will allow us to make mock objects for this testing implementation.  
- Acceptance
    * Our team will create a series of tasks that will encapsulate all the functional and non-functional requirements for the Tool Shed app. These tasks will be completed by actual users and our team will take notes of every interaction the user takes on the interface. After this, analysis will be done to see if they were able to complete the flow or if there were difficulties due to the interface. From these results we can go back and ensure any missteps will not happen again.  
        