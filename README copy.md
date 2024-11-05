# Personal Agenda App

Goalkeep is a personal agenda mobile app that makes organizing tasks effortless and visually appealing. Users can create custom categories for their tasks to help prioritize their life goals, assign them to any day of the year, and benefit from color-coded organization for clarity. It provides a powerful way to stay on top of pending tasks and prioritize effectively, especially for the working professional.

The app is divided into a back-end server, a front-end client, and a database. Here's a step-by-step guide for setting it up on your device:

### Problem Space

About 81% of recent grads express feeling unprepared for certain life skills, including time management, which could impact their ability to keep up with hobbies as they juggle new responsibilities​.

Most agenda apps are catered towards students and helping organize their classes and midterms. Calendar apps are centered around planning commitments that have a fixed "time" associated. And other planner apps resemble more of to-do list, rather than a life-planner app! Goalkeep helps users plan all facets of their life, whether it's hobby activities, professional tasks, upcoming meetings, or anything else!

### User Profile

Users are former students who are just joining the workforce and are struggling to maintain their hobbies and passions while balancing their professional duties. Intended user is anyone between the ages of 24-33 who benefit from being able to organize their lives holistically using tasks and categories.

## Setup Instructions

### Server Setup
1. **Fill in `.env` file**  
   - Duplicate the `env.sample` file and rename it to `.env`.
   - You will need to CREATE a new DATABASE in your choice of DBMS. Name the database whatever you like.
   - Fill in the necessary environment variables, including the database information. Ensure you set the `DB_LOCAL_NAME` variable to the name of your new database.

2. **Install dependencies**  
   Run `npm install` in Terminal or VSCode Terminal to install all required libraries.

3. **Run migrations**
   Run `npx knex migrate:latest` to create the necessary tables (categories, tasks, months) in your new database.

4. **Seed the database**
   Run `npx knex seed:run` to populate the database tables with sample data.

   Now you can run `npm run dev` to start the server!

### Front-end Setup
1. **Fill in `.env` file**  
   - Duplicate the `env.sample` file and rename it to `.env`.
   - Set the `VITE_APP_BASE_URL` variable to the domain that your server is running on (e.g. `http://localhost:8080`)

2. **Install dependencies**  
   Run `npm install` in Terminal or VSCode Terminal to install all required libraries.

   Now you can run `npm run dev` to start your client and open up the URL in a browser to access the app!

## Sprint 1 Functionalities/Testing:

- *Home Route (/)*: Automatically redirects to the current date.
- *Month View*: Displays all tasks for the current month. You can navigate through all months of 2024, with seeded data for September to December. Clicking a date in the calendar displays the tasks for that day. Clicking a blank date does nothing.
- *Daily Tasks*: The bottom half of the home page shows tasks due on the current day. Click on a task to view its details, including a "Done" button to remove it.
- *Category Management*: You can create new categories, assign one of three available colors, and add a name and details about the category.
- *Task Creation*: New tasks can be added to existing or new categories. Created tasks will be added to the calendar and viewed just like any seeded task.

## Sprint 1 Limitations:
- Although the app will work as intended for tablet and desktop, it is not yet optimized visually for those viewports.
- "Details" of a category is not being used in this iteration of the app currently, but will be used in a future sprint to edit and view all categories.
- Hitting "done" on a task will remove it from the database, and therefore the app. In future sprints, a separate page will be created to show all completed tasks to users.