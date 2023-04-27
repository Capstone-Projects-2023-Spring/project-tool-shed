---
sidebar_position: 4
---

# Features and Requirements

## High Level Requirements Overview

To begin using the platform, users will need to register online accounts through the "Create Account" option. Once the account creation process is complete, users can manage their tools and determine their availability and daily rates for public use. To facilitate tool searches, users can employ specific keywords such as "Table saw" or "Miter Saw" to browse available low-cost, locally owned tools. Furthermore, search results can be filtered by tool type and mile radius to refine the search. 

When a user selects a tool for purchase or rental, they can communicate with the owner to agree on a date and price. The platform will facilitate the return process by setting an agreed-upon window for tool return.

For users seeking to sell or lend their tools to others, the listing process involves providing tool information and uploading images of the tool. Once another user requests the tool, the owner will receive a notification.

## Functional Requirements 

- The system shall require registration using a login system, this will be with a username and password

    - Login security will use a login system like Okta’s auth0 login security https://auth0.com/login-security 

      - Auth0 can handle bot detection, brute force attacks, and other security related issues without the need of a credit card on the developer's part 

      - This component implements best practices for mobile logins and is easy to set up to ensure security is at the forefront of the website 

- The system shall require a home page which will contain many functional components which allow a user to interact with the site

    - Contains ability to upload a new listing of a tool 

    - Contains a user’s profile which has a menu for settings, logout option, and view profile 

    - The home page mainly consists of a list of tools available to rent within the default parameters. These parameters can be changed, and a map will reflect where the available tools are located 

- The system shall allow users to list a new tool  

    - Details associated with the listing that must be completed before posting live to the public area... description, picture (at least 1), general location (zip code) 

    - Details associated with the listing that are optional to add are... monetary rate for tool rental, monetary value for tool purchase, more than 1 picture 

- The system shall contain a list of tools nearby to rent and an interactive map to show associated locations of the tools 

    - Ability to select an available tool to rent or purchase 

    - Ability to navigate the minimap 

    - Manually adjust radius/distance by entering in values to parameters 

    - Clicking on a listing will pop up larger on the screen to indicate that is the tool in that location 

    - The search/filter function applies to the map and list of tools to rent/purchase by different criteria 

    - Search filters include: within # miles, availability status, type of job, rating, and time posted 

- The system shall have a menu of properties/settings

    - By clicking account settings, users can change: 

      - Personal details 

      - Payment information 

      - Privacy settings 

      - Delete Account 

- The system shall contain a sidebar on the left with the following menus 

    - Home 

    - Saved Listings 

    - Your Listings 

 

- The system shall show no listings if none are found that meet the filter criteria, the home page of the Tool Shed contains suggestions of other tools nearby 

    - The user will only receive tool recommendations if there is no tool that fits the filters for a particular search 

    - The user will receive recommended tools that are similar to the filter criteria but may not 100% match being based on location and previous searches

 

- The system shall have a “Saved Listings” page which will be accessible through the navigation bar after the user signs in and is also located in the navigation bar. 

    - Saved Listings page will contain two sections. 

      - Saved Sellers/Sheds 

      - Saved Listings 

    - Saved Listings Seller/Sheds section will contain details for any Seller/Shed that the log in user has selected to be a favorite. Details will include (Name, Zip Code, Number of tools listed) Clicking on this section will bring the user to the seller's Tool Shed. 

 

- The system shall have a “Your Listings” page which will be accessible through the navigation bar after the user signs in and is also located in the navigation bar. 

    - Your Listings page will contain two sections 

      - Your Listings (Active) 

      - Your Listings (Inactive) 

    - Your Listings Active will have details regarding your tools available for rent/purchase. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) 

      - Listing details will show either available, or the location of the tool if the tool is currently in use by another registered user 

    - Your Listings Inactive will have similar details regarding your tools, but will be highlighted with a red background. Details will include (Tool Name, Type, Description, Cost, Availability, Owner) 

 

- The system shall allow users to rate tools (or users) with a star system ranging from 1 to 5 which will become available once a tool has been returned to the owner or a tool has been sold. 

    - A rating of 1 star would imply the reviewer of the tool (or user) did not have a positive experience and would not recommend it to a friend 

    - A rating of 5 stars would imply the reviewer of the tool (or user) did have a positive experience and would recommend the tool (or user) to a friend 

 - The system shall allow users will have access to contact information of other users

    - A notification will consist of the meeting address and the instructions from the seller/renter (TO BE EDITED)
 

 

## Nonfunctional Requirements 

- Tool-Shed will have a simple, easy to understand user-interface throughout. 

    - Multiple listings will be contained per row/column that are interactive. 

      - Clicking on each listing from this initial page will take you to a more detailed view of the specific listing. 

      - From this more detailed listing, users will be shown a pin on a map letting them know the general vicinity of the tool.  

    - The listings on the initial search menu will provide only necessary information to determine if it may be a good candidate for purchase/rent. 

      - In the case of multiple images, a carousel feature will cycle through them. 

- Rendering at max 10 listings, the Tool Shed web app should load listings in under one minute

- Users must have verifiable identification

- Users can only have one account

- User login information will be secure via Okta’s auth0 login security

- The Video Library will be moderated so that there will only be relevant videos

- Will use a PostgreSQL server to store information

- The mapping/search navigation system will only show relevant United States information

- Meeting locations must be in a map-friendly format (Street, Zip, State) format