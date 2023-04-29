---
sidebar_position: 3
---
# Acceptance test


#### 1. Creating an account
- Enter the url: toolshed.symer.io:5000
- Click on the "Sign Up" option on the navigation bar
- Enter a first and last name, unique username, which has to be an email, password, at least one address, city, state and zipcode
- Click enter to submit account credentials

    Expected Results: 
    - The user created an account and is redirected to the homepage, which looks different depending on whether a user is logged in or not.
    - If the user tries to enter something that isn't an email under the email field, the user will not be able to successfully create an account and there will be a reminder that the username needs to be an email
    - The user will be unable to create an account if any of the fields aren't filled in except for Address Line 2

#### 2. Logging in
- Enter the url: toolshed.symer.io:5000
- Click on the "Login" option on the navigation bar
- Enter account email and password
- Click Sign In button

    Expected Results: 
    - The entered credentials match an existing user account and the user is redirected to the homepage, which should look different depending on whether a user is logged in or not
    - The user enters credentials that don't match and the user gets an error message
    
#### 3. Editing Account
- On the navigation bar click on the person icon on the far right
- Click on the "Account" tab
- Click on the bolded blue text that says "Edit Account Information"
- Make any change to account information 
- Click Submit button

    Expected Results:
    - If user changed email, then the next time they try to log in with their previous credentials they won't be able to log in unless they use their new email

#### 3. Adding a Tool
- Click on "General" dropdown menu
- Click on "Add Tool" option from dropdown menu
- The user fills out the form 
- Click on the "Save" button

    Expected Results:
    - After clicking on the "General" dropdown menu and clicking on "Tools" the tools the user has added should be visible along with the information (manual, tool image, youtube video, etc.) the user added.

#### 4. Viewing My Tools
- Click on "General" dropdown menu
- Click on "Tools" option from dropdown menu

    Expected Results:
    - If the user had added tools to their account, the user should see all the tools they added along with the information they added for that tool
    - If the user didn't add any tools, the page should be blank

#### 5. Editing Tool Details
- Click on "General" dropdown menu
- Click on "Tools" option from dropdown menu
- Under a specific tool, click "Edit Tool" button
- Change anything to the Tool Information form 
- Click "Save" button

    Expected Results: 
    - Clicking on "General" dropdown menu and on "Tools" option from dropdown menu, the user should see that the tool details of a specific tool are different     

#### 6. Creating a Listing from an Already-added Tool
- Click on "General" dropdown menu
- Click on "Tools" option from dropdown menu
- Under a specific tool, click "Edit Tool" button
- Scroll down until Listings can be seen
- Click on "+ New Listing"
- Click on "Active" 
- Fill out the form 
- Click the "Create" button

    Expected Results:
    - After clicking "Create" under Listings and the user navigates to the "General" dropdown menu and selects "Listings" the user should be able to see their newly created listing of their tool

#### 7. View My Listings
- Click on "General" dropdown menu
- Click on "Listings" option from dropdown menu

    Expected Results:
    - If the user had created listings of their tools, the user should see all the listings they've created along with the information they added for that tool and listing
    - If the user didn't create any listings, the page should be blank

#### 8. Deactivate a Listing
- Click on "General" dropdown menu
- Click on "Listings" option from dropdown menu
- Click on Edit
- Scroll down to "Listings"
- Click the Active button

    Expected Results:
    - The Active button goes from blue to grey once it is clicked to show that it is inactive
    - Other users should not be able to find this listing when they search for it
    - No red pin should show up of this listing on the homepage

#### 9. Searching for a specific tool
- On the homepage the user enters the name of tool under Search Query

    Expected Results:
    - There will be red pins on the map below to show active tool listings that fit the search criteria the user entered
    - If there are no tools that fit the search criteria nothing will appear on the map 

#### 10. Find Active Listings Nearby
- Click on the "Login" option on the navigation bar
- Enter account email and password
- Click Sign In button
- On the homepage scroll down to where the map is
- Ensure that the search filter for user ratings is set to 5 stars as all users are initially given a 5/5 star rating

    Expected Results:
    - There will be red pins on the map below to show active tool listings that are near the logged in user
    - If there are no tools that fit the search criteria nothing will appear on the map 
   
#### 11. Messaging a User to Rent Tool
- The user is logged in and the user has either search for a tool or looked at nearby listing
- Click on the red pin, which represents an active tool listing on the map 
- On the right side click on the "Contact" button 
- Where it says "Type your message here", type a message and click "send"

    Expected Results:
    - Clicking the red pin should show the listing details webpage which shows information on the tool, the cost and days
    - Clicking on the "contact" button leads to a chat 
    - Clicking "send" button should send a message to the user

#### 12. Viewing Messages
- On the right side of navigation bar click on the mail icon

    Expected Results:
    - Clicking on the mail icon the user should see "Chat with"
    - Clicking on the "Chat with" the user should see all chat history with another user
    - If the user never had a chat with another user the page should be blank

#### 13. Reviewing and Rating a User
- Click on "General" dropdown menu
- Select Create Review
- Find a user and click on "Review User" button
- Enter text and click on star rating to give user
- Click "submit" button

    Expected Results:
    - The user is redirected to their details page
    - The user who was reviewed should be able to see their reviews under "My Reviews under the "General" dropdown menu 

#### 14. Viewing Reviews Given to Logged In User
- Under the "General" dropdown menu, select "My Reviews"

    Expected Results:
    - If no one has given the user a review it should be blank
    - If reviews have been given, the user should see who sent the review, the content of the review and the star rating given to them
    - If the user was given a low rating like 0/5 stars the user should see a red warning on their reviews




