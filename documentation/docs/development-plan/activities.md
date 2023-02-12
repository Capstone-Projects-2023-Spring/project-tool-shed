---
sidebar_position: 1
---

# Activities

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


        