## CRUD Operations: Node.js Express MongoDB This repository contains a Node.js application that implements CRUD (Create, Read, Update, Delete)

### CRUD Operations

#### Brief explanation of what this api documentatipn can do

#### Authentication & Authorization:

\*\*Authenticate and authorize email and password using JWT (jason web token).This passwords are encrypted using bycrypt so as to prevent attacks on user data privacy.

#### Create account

\*\*Users can create account by sending a post requests on the usrt api route

#### Update user profile

\*\*Also user can choose to update there profile information which can be to edit there email or full name and it also allow user to use features like

1. Forgot Password
2. Reset Password
3. Edit photo

\*\*it also manages sending of emails to notify the users about there registration when they are been onboarded for the first time on the app.

#### Delete user profile

\*\*User can also perform delete on an account, Built with MongoDB, Node.js, React, Express, and deployed on Heroku, this app provides a user-friendly interface and reliable cloud storage for your users.
Features

- user Management: Add, edit, and delete users to stay on top of your commitments.
- Status Tracking: Mark users as complete or incomplete to monitor your progress.
- Responsive Design: Enjoy a consistent experience across various devices and screen sizes.
- Cloud Storage: users are stored securely in a MongoDB Atlas database, ensuring data persistence.
- User Authentication: Register and log in securely to access your users from anywhere.
- Real-time Updates: Any changes made to users are reflected in real time.
- Customization: Categorize users with labels or tags for better organization.
  Technologies Used

- Backend: The server-side logic is handled by Node.js and Express, providing smooth communication between the frontend and database.
- Database: MongoDB is utilized for storing users and user information.
  Deployment: The app is deployed on Git, making it accessible online.

operations using Express.js and MongoDB. It provides endpoints for managing users.

## Prerequisites Before you begin, ensure that you have the following installed:

Node.js: [https://nodejs.org](https://nodejs.org) - MongoDB: [https://www.mongodb.com](https://www.mongodb.com)

## Getting Started

1.  Clone the repository: `git clone https://github.com/olabodeIdowu/crud-operations.git`
2.  Install the dependencies:
    `cd crud-operations`
    `npm install`
    `npm install -g ndb`
    `npm install -g nodemon`

3.  Configure the MongoDB connection: Open the `config.env` file and update the MongoDB connection URL according to your MongoDB setup.

#### create a file in the root directory name:

"config.env" file

#### Inside this file create your enviroment cconstant variables e.g the mongoDB database string for connection, smtp mailer, port e.t.c

- PORT=3000
- NODE_ENV=development
- BASE_URL=http://localhost:3000

#### You can register for a mongoDB Atlas account:

Gon on MongoDB: [https://www.mongodb.com](https://www.mongodb.com). to register and learn about how to use mongoDB atlas to persist data on cloud.

- DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@crud-operations.0zbbccs.mongodb.net/crud-operaions?retryWrites=true&w=majority&appName=crud-operaions

#### You can register for a mailtrap for an smtp account:

Mailtrap: [https://mailtrap.](https://mailtrap.io) to allow you received your emails. So instead of our email getting spam we will use maiiltrap to trap this emails during development and during production we can use any mailer of your choice e.g gmail, sendgrid.

- EMAILTRAP_USERNAME=c8f648f5b34dr9
- EMAILTRAP_PASSWORD=e34616c458Gwmo
- EMAILTRAP_PORT=2525
- EMAILTRAP_HOST=sandbox.smtp.mailtrap.io

#### create your JWT_SECRET, JWT_EXPIRE & JWT_COOKIE_EXPIRE. Ths will allow us set informations of our JWT informations that are used to sign in user into our application. This is very essential and must not be disclosed to an one.

- JWT_SECRET=XC98LOTY1SD468KLoHY9gNkn22EeVtLy.9.0hu02
- JWT_EXPIRES_IN=1d
- JWT_COOKIE_EXPIRES_IN=1

4. Start the server in development mode:

- npm run dev
- The server will start running on `http://localhost:3000`.
