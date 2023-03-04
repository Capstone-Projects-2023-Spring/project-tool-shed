---
sidebar_position: 3
---
# Acceptance test

#### 1. Creating an account
- Enter the url: TBD
- Click on the "login" option on the navigation bar
- There is an option to either "login" or "sign up", and select "create an account"
- Enter a unique username, which has to be an email and enter a password
- Click enter to submit account credentials

    Expected Result: 
    - The user created an account and is redirected to the homepage, which looks different depending on whether a user is logged in or not.
    - If the user tries to enter a username which isn't an email, the user will not be able to successfully create an account and there will be a reminder that the username needs to be an email

#### 2. Logging in
- Enter the url: TBD
- Click on the "login" option on the navigation bar
- There is an option to either "login" or "sign up" and click on "login"
- Enter account username and password

    Expected Result: 
    - The entered credentials match an existing user account and the user is redirected to the homepage, which should look different depending on whether a user is loggin or not
    - The user enters credentials that don't match and the user is told to "try again"

#### 3. Creating a listing
- Select "List Tool" on the navigation bar
- A form should appear on screen
- The user fills out the form 
- Click on upload image to add image to form
- Click submit

    Expected Result:
    - Redirected to homepage
    - Able to find that tool under "Your listings (Active)" 

#### 4. Searching for a specific tool
- On the search bar, enter a tool name
- Click on filter to filter search results
- Selects some filters 
- Click submit

    Expected Result:
    - The webpage will display a list of tools that are actively listed and fit the search criteria and videos tutorials/projects using those tools
    - If there are no tools that fit the search criteria, the webpage displays tool recommendations

#### 5. Rating a tool (Will be edited/modified in the future)
- Click "account" on the navigation bar
- Click "history" from drop down menu
- Click on "rate tool"
- Click on number of stars out of 5
- Click submit

    Expected Results:
    - There is a star rating attach to the specific tool if you search for it

#### 6. Deleting account
- On the navigation bar click on account
- Select "delete account" from the drop down menu
- Click on "delete" button 

    Expected Result:
    - Account should be deleted
    - User is redirected to home page and is logged out
    - user is unable to login to account with their credentials

#### 7. Editing username or password
- On the navigation bar click on account
- Select "edit account" from the drop down menu
- Click on "edit" next to username or password 
- Enter new username or password
- Click on submit

    Expected Result:
    - Username or password are modified
    - User is redirected to account page 
    - The next time user logins the new username and/or new password logs the user into their account

#### 8. Searching for nearby tools
- Select "Nearby Tools" on navigation bar
- Select filter results
- Click on filters like tools for rent, mile radius

    Expected Result:
    - Able to see tools available in the nearby area with an interactive map displayed


