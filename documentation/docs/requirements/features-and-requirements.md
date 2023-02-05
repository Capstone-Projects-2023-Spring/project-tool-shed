---
sidebar_position: 4
---

# Features and Requirements
## Functional Requirements 

- Tool Shed will require registration using a login system, this will be with a username and password or via a google/Facebook account 

    - Login security will use a login system like Okta’s auth0 login security https://auth0.com/login-security 

      - Auth0 can handle bot detection, brute force attacks, and other security related issues without the need of a credit card on the developer's part 

      - This component implements best practices for mobile logins and is easy to set up to ensure security is at the forefront of the website 

- The home page will appear first when the user signs in and is also located in the navigation bar. 

    - Home page contains the notification button where the user see’s any updates on listings they opted to be notified for 

    - Home page contains plus icon for the user to upload a new listing of a tool 

    - Home page contains a picture in the right-hand corner of the user’s profile which has a drop-down menu for settings, logout option, and view profile 

    - The home page mainly consists of a list of tools available to rent within the default parameters. These parameters can be changed, and a map will reflect where the available tools are located 

- The plus icon on the home page of the app allows users to list a new tool  

    - Details associated with the listing that must be completed before posting live to the public are... description, picture (at least 1), general location (zip code) 

    - Details associated with the listing that are optional to add are... monetary rate for tool rental, monetary value for tool purchase, more than 1 picture 

- The home page of our app contains a list of tools nearby to rent and an interactive map to show associated locations of the tools 

    - Pins represents an available tool to rent or purchase 

    - Users will be able to move the map around and zoom in and out to view more pins 

    - Users will be able to adjust the search radius manually by entering in values to parameters 

    - The crosshairs button redirects the user to the user’s location on the map 

    - When a user clicks on a pin that listing will pop up larger on the screen to indicate that is the tool in that location 

    - The search/filter function applies to the map and list of tools to rent/purchase by different criteria 

      - Search filters include: within # miles, availability status, type of job, rating, and time posted 

- By clicking the user display avatar, a menu of properties/settings will be accessible. 

    - By clicking account settings, users can change: 

      - Personal details 

      - Payment information 

      - Privacy settings 

      - Delete Account 

- Homepage will contain sidebar on the left with the following menus 

    - Home 

    - Saved Listings 

    - Your Listings 

 

- If no listings are found that meet the filter criteria, the home page of the Tool Shed contains suggestions of other tools nearby 

    - The user will only receive tool recommendations if there is no tool that fits the filters for a particular search 

    - The user will receive recommended tools that are similar to the filter criteria but may not 100% match 

 

- The “Saved Listings” page will be accessible through the navigation bar after the user signs in and is also located in the navigation bar. 

    - Saved Listings page will contain two sections. 

      - Saved Sellers/Sheds 

      - Saved Listings 

    - Saved Listings Seller/Sheds section will contain details for any Seller/Shed that the log in user has selected to be a favorite. Details will include (Name, Zip Code, Number of tools listed) Clicking on this section will bring the user to the seller's Tool Shed. 

    - Saved Listings page will also display specific listings that the log in user has chosen to select as favorites. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) 

 

- The “Your Listings” page will be accessible through the navigation bar after the user signs in and is also located in the navigation bar. 

    - Your Listings page will contain two sections 

      - Your Listings (Active) 

      - Your Listings (Inactive) 

    - Your Listings Active will have details regarding your tools available for rent/purchase. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) 

      - Listing details will show either available, or the location of the tool if the tool is currently in use by another registered user 

    - Your Listings Inactive will have similar details regarding your tools, but will be highlighted with a red background. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) 

 

- Tool Shed allows users to rate tools (or users) with a star system ranging from 1 to 5 which will become available once a tool has been returned to the owner or a tool has been sold. 

    - A rating of 1 star would imply the reviewer of the tool (or user) did not have a positive experience and would not recommend it to a friend 

    - A rating of 5 stars would imply the reviewer of the tool (or user) did have a positive experience and would recommend the tool (or user) to a friend 

 

 

 

## Nonfunctional Requirements 

- Tool-Shed will have a simple, easy to understand user-interface throughout. 

    - Multiple listings will be contained per row/column that are interactive. 

      - Clicking on each listing from this initial page will take you to a more detailed view of the specific listing. 

      - From this more detailed listing, users will be shown a pin on a map letting them know the general vicinity of the tool.  

 

    - The listings on the initial search menu will provide only necessary information to determine if it may be a good candidate for purchase/rent. 

      - In the case of multiple images, a carousel feature will cycle through them. 

- Rendering only a specific number of listings at a time will allow for better performance. 

- Users must have verifiable identification. 

- Users can only have one account. 

- User login information will be secure via Okta’s auth0 login security. 

- Users will have access to contact information of other users. 

- The Video Library will be moderated so that there will only be relevant videos. 

- User Reviews will be moderated to prevent actions such as review bombing. 

- Will use a PostgreSQL server to store information. 
