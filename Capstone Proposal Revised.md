# Project Title
GoalKeep - Achieve your goals, your way.

## Overview

Goalkeep is a personal agenda mobile app that makes organizing tasks effortless and visually appealing. Users can create custom categories for their tasks to help prioritize their life goals, assign them to any day of the year, and benefit from color-coded organization for clarity. It provides a powerful way to stay on top of pending tasks and prioritize effectively, especially for the working professional.

### Problem Space

About 81% of recent grads express feeling unprepared for certain life skills, including time management, which could impact their ability to keep up with hobbies as they juggle new responsibilities​.

Most agenda apps are catered towards students and helping organize their classes and midterms. Calendar apps are centered around planning commitments that have a fixed "time" associated. And other planner apps resemble more of to-do list, rather than a life-planner app! Goalkeep helps users plan all facets of their life, whether it's hobby activities, professional tasks, upcoming meetings, or anything else!

### User Profile

Users are former students who are just joining the workforce and are struggling to maintain their hobbies and passions while balancing their professional duties. Intended user is anyone between the ages of 24-33 who benefit from being able to organize their lives holistically using tasks and categories.

### Features

- Calendar and task list homepage:
    - Top half of page has a calendar that will show color-coded bubbles if a task is associated with that date
    - Bottom half shows all the tasks (color-coded by category) associated for the day
- Add categories for organizing your tasks(ex. Fitness and Nutrition, Networking & Career, Skill Building)
- Add tasks (ex. Log calories in MyFitnessPal, Finish JS: Lecture 12 in The Odin Project)


## Implementation
Sprint 1 Functionalities:
- Homepage will display a calendar on the top half of the page, and the current day's task list on the bottom half of the page. Calendar will need to correctly display dates associated with the day of the week (i.e October 1st in 2024 starts on a Tuesday, therefore Sunday and Monday should have no date number inside their box). Inside the individual calendar date boxes, there will be color-coded bubbles on each day where a task is due. On the bottom half of the page is the task list for the current day. Time permitting, version A of the Homepage mockup will be implemented where the tasks are grouped by their respective categories and clicking on a category shows all the tasks for that category. Most likely, Version B will be incorporated, which is just a task list that is unsorted, but color-coded by respective category. Clicking on a task will show a drop down of the details associated with the task, where user can mark the task as "done", essentially deleting the task. Clicking on a date box will take the user to that respective day and the associated tasks.
    - Future sprint functionalities: Although an edit text box will be in the drop down, the functionality to edit a task will be introduced in a future sprint. Seeing the current list of Categories will be introduced in a future sprint.
- Add a category page will allow user to add a category by filling out the form. Only "Name", "Details", and "Color" will need to be provided. The color field should be a dropdown of the set colors available for Sprint 1 (Max 5). Form validation will need to be added to make sure text boxes are included. Multiple categories can have the same color
    - Future sprint functionalities: Allow the ability to edit and delete categories. Include form validation that checks that the same name doesn't exist already when adding a category. For sprint 1, goal is to allow users to add categories only.
- Add a task page will allow user to add a category by filling out the form. "Name", "Description", "Category", "Deadline" (Month and Day) will be required to create the task. If able within the sprint, a drop-down will be incorporated to allow users to select a category from the most updated list of categories that have been added (similar to how in InStock our team incorporated the logic to provide the most up to date list of warehouses when editing/adding an inventory item). Otherwise, users will need to type in the category, and form validation will ensure that it exists.
    - Future sprint functionalities: Allow the ability to edit and delete categories. For sprint 1, goal is to allow users to add tasks only (unless time is available). Tasks that are marked as done do not get stored anywhere for Sprint 1 - that will be introduced in a later functionality so that users can see all the tasks they completed 

### Tech Stack

- Client-side
    - React
    - react-router-dom
    - axios
- Server-side
    - Node.js
    - Express
    - Knex
Database Manager System (DBMS)
    - MySQL

### APIs

No external APIs needed for GoalKeep.

### Sitemap + Brief description of each page

- Home Calendar and Task List page
    - Central homepage for seeing all tasks 
- Add a category page
    - Simple form for adding a category. Form validation will be implemented to ensure all fields are filled out correctly. If able within the sprint period, a drop down menu will be incorporated to choose from a set selection of colors.
    - Limitations: Ability to edit or delete a category will not be incoporated in this sprint, and will be saved for future 
- Add a task page
    - Simple form for adding a task, linked to an already existing category.
    - Limitations: Ability to edit or delete a category will not be incoporated in this sprint, and will be saved for future

### Mockups

![Home Calendar and Task List page](./src/assets/mockups/Home%20Calendar%20Page.png)
![Add a category page](./src/assets/mockups/Add%20a%20category%20page%20(Form).png)
![Add a task page](./src/assets/mockups/Add%20a%20task%20page%20(Form).png)


The mock up below is NOT part of this sprint (and should therefore not be marked), but is an additional page built in Figma.
![Log-in Page](./src/assets/mockups/Log-in%20Page.png)

### Data
![SQL Database Structure](./src/assets/mockups/SQL%20Database%20Structure%20Final.png)


### Endpoints


Categories route:
- route("/categories")
    - get
    - post

Tasks routes:
- route("/tasks")
    - get
    - post

- route("/:taskId")
    - delete

- route("/:month/tasks")
    - get

- route("/:month/:date/tasks")
    - get

Months routes
- route("/months")
    - get

## Roadmap

-Create client

-Create server

-Client-side:
    - Create Homepage Calendar and Task List page
    - Create Add task/category page

-Server-side:
    - Create seed data for 2024's calendar year (or for just 1 months as sample)
    - Create endpoints for retrieving 

-Database:
    - Create database for GoalKeep
    - Create table for categories
    - Create table for tasks
    -Create table for months and their startdates

---

## Future Implementations
- Integration for Tablet/Desktop viewports
- Eventually switch to React Native so that it can become a mobile app 
