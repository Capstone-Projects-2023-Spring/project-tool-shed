---
sidebar_position: 3
---

# Schedule

```mermaid
gantt
    dateFormat  YYYY-MM-DD
    title       Project Schedule

    section Elaboration Phase
    General Document Requirements: des1, 2023-01-28, 1w
    Backlog                   :    done, after des1, 1d
    Sprint 0                  :    active, des2, after des1, 1w
       Software Development Plan Document   : active, 2023-02-08, 3d
      

    section Construction Phase
    Design Document - Architecture :        , 2023-02-12, 1w
    
    Sprint 1                  :     , 2023-02-15, 2w
        Create Login Screen   : des5, 2023-02-15, 4d
        Login Button          : des6, after des5, 2d
        Homepage              : crit, 2023-02-21, 8d
        Profile Page          :     , 2023-02-25, 4d
    
    Sprint 2                  :     , 2023-03-01, 2w
        Search Bar            : des7, 2023-03-02, 3d
        Listing               : des8, after des7, 4d
        Account               :     , 2023-03-10, 3d
  
   Milestone Demo 1           :milestone, 2023-03-14, 0d
   
   Sprint 3                   :     , 2023-03-15, 2w
        Notification System   :     , 2023-03-15, 2d
        Search Filter         :     , 2023-03-20, 7d
   
   Milestone Demo 2           :milestone, 2023-03-28, 0d
   
   Sprint 4                   :    , 2023-03-29, 2w
        Community Engagement  :    , 2023-03-29, 5d
        Recommended Tools     :    , 2023-04-03, 9d
   
   Milestone Demo 3           :milestone, 2023-04-11, 0d
   
   Sprint 5                   :    , 2023-04-12, 16d
        Video Library         :    , 2023-04-12, 8d
        Settings              :    , 2023-04-20, 7d
   Final Demo                 :milestone, 2023-04-27, 0d
   
```
## Milestone Demos
Throughout the semester there will be 4 demonstrations of our project, below are the features and requirements that will be presented.

Schedule | Project Tool Shed

## Milestone Demo 1
- F1. Accounts
    - R1. User can create an account
    - R2. User can login to their account
    - R3. User can edit account 
- F2. Homepage
    - R1. User can view starting landing page
    - R2. Logged in user should see previously looked at tools
    - R3. Show listing of tools 
- F3. Listing Tools
    - R1. User can add a listing of their shared tool
    - R2. User can view other listings of tools
    - R3. User can remove or hide a tool listing (draft) 
    - R4. User can edit an existing listing's title, description, image, availability

## Milestone Demo 2
- F4. Notifications
    - R1. User can receive notification when a tool they require is listed
    - R2. Notification will show the tool and availability status 
- F5. Search
    - R1. User can enter text queries to find tools they are looking for
    - R2. Search results show all of the tools within the search criteria
    - R3. When the user updates the search bar the tools listed will change
- F6. Tool Revlevancy and Info
    - R1. Users should be able to upload tool manuals, and YouTube Videos.
    - R2. Users should be able to tag tools by project type, use case, and specific requirements such as material types if applicable
- F7. Recommended Tools
   - R1. User will be recommended tools based on location and recently viewed tools
   - R2. Tools recommended will change if a user changes their location or views different tools
   - R3. Tools should be relevant to project type, and materials used (some tools may be used for woodworking while another may be used for metal specific jobs)

## Milestone Demo 3
- F7. Video Library
    - R1. Users will be presented relavant videos below their tool search query 
    - R2. User can search a "how to" or "help" video
    - R3. Tools should have associated YouTube videos uploaded by tool owners. 
    - R4. User can be redirected to a Youtube video appropriate to their search
- F8. Tool Exchange
    - R1. Borrower will be provided with some sort of way to communicate with the tool owner
    - R2. User will be presented with some sort of validation at the time of tool exchange
    - R3. User will be able to report any misbehavior