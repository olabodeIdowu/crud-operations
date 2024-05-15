## CRUD Operations: Node.js Express MongoDB This repository contains a Node.js application that implements CRUD (Create, Read, Update, Delete) 

### CRUD Operations
#### Brief explanation of what this api documentatipn can do

***Authenticate and authorize email and password using JWT (jason web token).This passwords are encrypted using bycrypt so as to prevent attacks on user data privacy. 

***Users can create account by sending a post requests on the usrt api route

***Also user can choose to update there profile information which can be to edit there email or full name and it also allow user to use features like

A) Forgot Password
B) Reset Password

***it also manages sending of emails to notify the users about there registration when they are been onboarded for the first time on the app.

***User can also perform delete on an account, Built with MongoDB, Node.js, React, Express, and deployed on Heroku, this app provides a user-friendly interface and reliable cloud storage for your users.
Features

***user Management: Add, edit, and delete users to stay on top of your commitments.
***Status Tracking: Mark users as complete or incomplete to monitor your progress.
***Responsive Design: Enjoy a consistent experience across various devices and screen sizes.
***Cloud Storage: users are stored securely in a MongoDB Atlas database, ensuring data persistence.
***User Authentication: Register and log in securely to access your users from anywhere.
***Real-time Updates: Any changes made to users are reflected in real time.
***Customization: Categorize users with labels or tags for better organization.
Technologies Used

Backend: The server-side logic is handled by Node.js and Express, providing smooth communication between the frontend and database.
Database: MongoDB is utilized for storing users and user information.
Deployment: The app is deployed on Git, making it accessible online.

operations using Express.js and MongoDB. It provides endpoints for managing users. 

## Prerequisites Before you begin, ensure that you have the following installed:
 Node.js: [https://nodejs.org](https://nodejs.org) - MongoDB: [https://www.mongodb.com](https://www.mongodb.com)
 
## Getting Started 

 1. Clone the repository: ``` git clone https://github.com/olabodeIdowu/crud-operations.git ``` 
 2. Install the dependencies: 
 ``` cd crud-operations ```
 ``` npm install ```
``` npm install -g ndb ``` 
``` npm install -g nodemon ```

 3. Configure the MongoDB connection: Open the `config.env` file and update the MongoDB connection URL according to your MongoDB setup. 
 
#### create a file in the root directory name: 
"config.env" file

#### Inside this file create your enviroment cconstant variables e.g the mongoDB database string for connection, smtp mailer, port e.t.c

***PORT=3000
***NODE_ENV=development

#### You can register for a mongoDB Atlas account:
Gon on MongoDB: [https://www.mongodb.com](https://www.mongodb.com). to register and learn about how to use mongoDB atlas to persist data on cloud. 

***DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@crud-operations.0zbbccs.mongodb.net/crud-operaions?retryWrites=true&w=majority&appName=crud-operaions

#### You can register for a mailtrap for an smtp account:
Mailtrap: [https://mailtrap.](https://mailtrap.io) to allow you received your emails. So instead of our email getting spam we will use maiiltrap to trap this emails during development and during production we can use any mailer of your choice e.g gmail, sendgrid.

***EMAILTRAP_USERNAME=c8f648f5b34dr9
***EMAILTRAP_PASSWORD=e34616c458Gwmo
***EMAILTRAP_PORT=2525
***EMAILTRAP_HOST=sandbox.smtp.mailtrap.io

#### create your JWT_SECRET, JWT_EXPIRE & JWT_COOKIE_EXPIRE. Ths will allow us set informations of our JWT informations that are used to sign in user into our application. This is very essential and must not be disclosed to an one.

***JWT_SECRET=XC98LOTY1SD468KLoHY9gNkn22EeVtLy.9.0hu02
***JWT_EXPIRES_IN=1d
***JWT_COOKIE_EXPIRES_IN=1

4. Start the server in development mode:
***npm run dev 
***The server will start running on `http://localhost:3000`. 

## Endpoints The following endpoints are available: -

**GET /users**: Retrieve all users. 
**GET /users/:id**: Retrieve a user by ID. -
**POST /users**: Create a new user. - 
**PATCH /users/:id**: Update a specific user by ID. - 
**DELETE /users/:id**: Delete a specific user by ID.
    
## Request and Response Formats ### user Object A user object has the following properties:

- `id` (string): The unique identifier of the user
- `full name` (string): The full name of the user.
- `email address` (string): The email address of the user. - `status` (string): The status of the user,
-`password` (string): The password of the user.
-`passwordConfirm` (string): Confirm passwordr.
-`photo` (string): The photo of the user. -   (e.g., "todo", "in-progress", "done").

### GET /users **Request:** ``` GET /users ``` 

**Response:** ``` Status: 200 OK Content-Type: application/json [ { "id": "1", "full name": "user 1", "email address": "email address of user 1", "status": "todo" }, { "id": "2", "full name": "user 2", "email address": "email address of user 2", "status": "in-progress" }, ... ] `
      ``
### GET /users/:id **Request:** ``` GET /users/1 ```

**Response:** ``` Status: 200 OK Content-Type: application/json { "id": "1", "full name": "user 1", "email address": "email address of user 1", "status": "todo" } ```
       
### POST /users **Request:

** ``` POST /users Content-Type: application/json { "full name": "New user", "email address": "email address of New user", "status": "todo" } ``` **Response:** ``` Status: 201 Created Content-Type: application/json { "id": "3", "full name": "New user", "email address": "email address of New user", "status": "todo" } ```

### PATCH /users/:id **Request:
** ``` PATCH /users/1 Content-Type: application/json { "full name": "Updated user", "email address": "Updated email address", "status": "in-progress" } ``` **Response:** ``` Status: 200 OK Content-Type: application/json { "id": "1", "full name": "Updated user", "email address": "Updated email address", "status": "in-progress" } ```
 
### DELETE /users/:id **Request:** ``` DELETE /users/1
   ```**Response:** ``` 
   Status: 204 No Content ``` 
   
## Error Handling - If a user is not found, the server will respond with a 404 status code. - If there is a validation error in the request body, the server will respond with a 400 status code and an error message.


