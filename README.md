# E-commerce task

## Introduction

This project involves the development of an E-Commerce application with various features, including user registration, product management, and user authentication. The application is built using React for the frontend and a Node.js-based backend, with data storage managed through a Sequelize-based database.

## Technologies Used

- ReactJS
- MUI 
- Node.js
- Express
- Sequelize ORM
- MySQL

## Features Implemented

- User registration and login functionality with JWT authentication
- Responsive frontend design using Material-UI components
- Integration with backend API for data retrieval and storage
- Adding, fetching, and displaying products on the frontend
- Custom error handling and displaying alerts for users

## Frontend Implementation

### Navbar Component

- Creation of a responsive navbar with menu items, register, and login buttons
- Implementation of a mobile-friendly design for smaller screens

### Register Component

- Design of a registration form with necessary input fields
- Integration with the backend to handle user registration

### Products Component

- Displaying products fetched from the backend using Axios
- Addition of a button to add products to the cart with state management

## Backend Implementation

### User Management

- Setup of routes for user registration and login functionality
- Integration of JWT for user authentication and authorization

### Product Management

- Implementation of CRUD operations for products
- Integration with Sequelize ORM for MySQL database interactions

### Error Handling

- Creation of custom error messages for different scenarios
- Setup of error responses and status codes for various API requests

## How to Run

### Frontend

1. Open the `frontend` directory in your terminal.
2. Run `npm install` to install the necessary packages.
3. Run `npm start` to start the frontend server.

### Backend

1. Open the `backend` directory in your terminal.
2. Run `npm install` to install the necessary packages.
3. Run `npm run app` to start the backend server.

