# Business Management System

## Description
This project serves as the backend for a business management application. It is built using Node.js, The project is designed to manage various aspects of a small business, including creating and managing business entities, products, and meetings. Authentication is implemented to ensure that only authorized users can perform certain actions.

## Component
- controllers: Contains the controller files that handle the HTTP requests and responses.
-Services: Contains the service files that handle the
business logic.
- Routes: Contains the route files that define the endpoints.
- Models: Contains the Mongoose models for MongoDB.
- Middlewares: Contains the middleware files for authentication, authorization.
- Swager documentation: Definitions of using swagger for implementing API Endpoints 
- Config : Contains the configuration files such as database configuration.

## Technologies Used
- Node.js
- MongoDB
- bcrypt for password hashing
- dotenv for environment variables
- Swagger
- JWT for authentication


## Features
1. **Authentication and Authorization**
   - Sign up and sign in with username and password.
   - Passwords are stored in the database in a hashed format using bcrypt.
   - JWT is used for authenticating users.
   - Middleware to protect routes and ensure the user is authenticated.
   - Authorization to ensure only admin users can perform certain actions.

3. **Environment Variables**
   - Configuration through `.env` file.

4. **Unit Test**
- Unit tests were performed

## Prepare
1. Clone the repository - git clone https://github.com/efratDadon/nodeProject
2. Install dependencies using `npm install`
3. Set the environment variables in the `.env` file
4. Run the app using `node app.js`

## Usage
- Register as a new user or log in as an existing user
- Explore the services offered and schedule appointments
- Administrators can manage users, services and meetings

## API Endpoints
# Business
`POST /api/business: Create a new business.
`PUT /api/business/:id: Update an existing business.
# Services
`POST /api/services: Create a new service.
`PUT /api/services/:id: Update an existing service.
`DELETE /api/services/:id: Delete a service.
# Meeting
`POST /api/meetings: Create a new meeting.
`PUT /api/meetings/:id: Update an existing meeting.
`DELETE /api/meetings/:id: Delete a meeting.
# User
`POST /api/user: Create a new user.
# Auth
`POST /api/auth/signup: Sign up a new user.
`POST /api/auth/signin: Sign in an existing user.
