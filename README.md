# QT Global Software Blog Application Backend

This is the backend service for the QT Global Software Blog Application, built using Node.js and PostgreSQL.

## Features

- User authentication (registration and login)
- CRUD operations for blog posts and comments
- RESTful API

## Technologies Used

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT for authentication

## API Documentation

The API documentation is available at [https://qt-global-software-be.onrender.com/api/docs/](https://qt-global-software-be.onrender.com/api/docs/).

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muhozajohn/QT-Global-Software-be.git
   cd QT-Global-Software-be
2. Install dependencies:
   ```bash
   npm install
3. Set up the PostgreSQL database. Create a database and run the SQL script provided in the scripts folder to create tables and insert sample data.

4. Create a .env file in the root directory and add your database configuration and JWT secret. Use the .env.example file as a reference.

5. Run migrations and seeders:
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
6. Start the server:
    ```bash
    npm start
7. Sample for Creating User Table
- To create the User table, you can use the following command:
   ```bash
   npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string,avatar:string

### Authentication
To add new users and assign roles, use the registration endpoint provided in the API documentation. The authentication process uses JWT tokens, which should be included in the Authorization header for protected routes.

### Project Structure
- src/controllers: API request handlers
- src/dbase/config: Database configuration
- src/dbase/models: Sequelize models
- src/routes: API routes
- src/middleware: Middleware for authentication and error handling
### License
This project is licensed under the MIT License.
   
