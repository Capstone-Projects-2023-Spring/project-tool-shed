---
sidebar_position: 5
---

# Use-case descriptions
## Use Case #1  - Searching for Tools

A user wants to search their local neighborhood for a hedge trimmer. They use tool shed to find the tool so that they get the job done today and do not go over their budget to purchase a brand-new one. 

1. The user navigates to sharemytoolshed.com/

2. The user clicks the (LOGIN) button in the nav bar

3. The user enters their email and password. 

4. The user clicks the (LOGIN) button. They're redirected back to sharemytooshed.com/.

5. The user adjusts the search parameters in the search form to: 

    - Search Radius: 15 kilometers

    - Maker: Rigid

6. The user clicks the (button: SEARCH_TOOL) which will complete the request and execute the database query. 

7. The user is presented with 3 search results 

    - AVAILABLE: <i>Gas Hedge Trimmer (NAME) (CONTACT)</i> 

    - AVAILABLE: <i>Electric (Battery) Hedge Trimmer (NAME) (CONTACT)</i> 

    - AVAILABLE: <i>Electric (Wireless) Hedge Trimmer (NAME) (CONTACT)</i> 

8. The user clicks option 3, which is within their budget so they can afford the tool, and clicks the (button: CONTACT) and is presented with the contact information for Electric (Wireless) Hedge Trimmer. 

9. The user contacts the person responsible for Electric (Wireless) Hedge Trimmer. 

10. The user clicks the (button: LOG_OFF) and closes the website. 


 

## Use Case #2 - Editing Tool Details

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




## Use Case #3 - Listing a Tool

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

 

 

## Use Case #4  - Finding Nearby Tools

A user has an unexpected afternoon off from work and wants to see what tools are available now to see what projects they can complete around the house. 

1. The homeowner visits the base URL of the website (apex hostname and root path) 

2. If the homeowner isn’t logged in, they are presented with controls to do so 

3. The homeowner is brought to their user homescreen/dashboard 

4. The homeowner clicks the button “Nearby Now”, which takes them to a screen where they can browse the tools that are available to borrow and are within a search radius that is adjustable via scrubber bar control. 

5. The homeowner selects a tool and is presented with contact information for the owner of the tool. 

6. The homeowner can optionally close the website or log out afterwards. 


 

## Use Case #5 - Review Tool Owner

A user wants to review their experience with the rented tool and the tool owner.

1. The user navigates to the website, logs in to their account, and ends up on the homepage of the website. 

2. The user clicks on the "General" dropdown menu and clicks on "Create Review". 

3. The user sees a list of users.

4. The user finds the user they want to review and clicks the button "Review User".

5. The user writes a review in the text box and selects a star rating. 

6. The user clicks submit. 

7. The user exits the site.

 


## Use Case #6 - Removing a Listing

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
