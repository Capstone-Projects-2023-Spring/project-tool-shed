---
sidebar_position: 2
---
# Integration tests

#### 1. Use Case 1: 
- Description: User can search for a tool.
- Objective: Verify that the user can search for tools that other users have listed.
- Expected Test Result: The user will only see tools other users have listed that fit the search criteria.

#### 2. Use Case 2: 
- Description: User can sell their tool.
- Objective: Verify that the tool has been listed to be sold.
- Expected Test Result: The tool is listed in tool listings.

#### 3. Use Case 3: 
- Description: User can rent out their tool.
- Objective: Verify that a tool that is listed can be seen by other users.
- Expected Test Result: The tool is available to other users when they search for tools.

#### 4. Use Case 4: 
- Description: User can find tools that are available nearby.
- Objective: Verify nearby tools can be seen by the user.
- Expected Test Result: Only available tools that are within a specific mile radius are visible.

#### 5. Use Case 5:
- Description: User can be notified when a tool is available to rent.
- Objective: Verify that a user receives a notification at appropriate times.
- Expected Test Result: The user receives a notification once a tool goes from unavailable to available and the user had selected to be notified of its availability.

#### 6. Use Case 6:
- Description: User can remove a tool from their listing.
- Objective: Verify that a tool is removed from the database.
- Expected Test Result: A tool that has been removed can't be found in search results.
