# User Management System — RESTful API

A RESTful API for managing users, built for Syntecxhub Project 1.

## Features
- Full CRUD operations (Create, Read, Update, Delete) for users
- MongoDB storage with Mongoose schema/validation
- Passwords hashed with bcrypt before storage
- Endpoints secured with HTTP Basic Authentication
- Ready to test in Postman

## Tech Stack
- Node.js + Express
- MongoDB + Mongoose
- bcryptjs for password hashing
- dotenv for environment config

## Project Structure
```
user-management-system/
├── config/
│   └── db.js              # MongoDB connection
├── controllers/
│   └── userController.js  # CRUD logic
├── middleware/
│   └── auth.js            # Basic Auth middleware
├── models/
│   └── User.js             # Mongoose User schema
├── routes/
│   └── userRoutes.js       # /api/users routes
├── .env.example
├── .gitignore
├── package.json
└── server.js
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy the environment file and fill in your values:
   ```bash
   cp .env.example .env
   ```
   - `MONGO_URI` — your local or Atlas MongoDB connection string
   - `ADMIN_USERNAME` / `ADMIN_PASSWORD` — credentials required for Basic Auth on every endpoint

3. Start MongoDB locally (if not using Atlas), then run the server:
   ```bash
   npm run dev   # with nodemon, for development
   # or
   npm start
   ```

The API will run at `http://localhost:5000` by default.

## Authentication

Every `/api/users` endpoint requires **HTTP Basic Authentication** using the
`ADMIN_USERNAME` and `ADMIN_PASSWORD` set in your `.env` file. Requests without
valid credentials receive a `401 Unauthorized` response.

## API Endpoints

| Method | Endpoint          | Description          |
|--------|-------------------|-----------------------|
| POST   | `/api/users`      | Create a new user     |
| GET    | `/api/users`      | Get all users          |
| GET    | `/api/users/:id`  | Get a single user      |
| PUT    | `/api/users/:id`  | Update a user          |
| DELETE | `/api/users/:id`  | Delete a user          |

### Sample request body (POST / PUT)
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePass123",
  "role": "user"
}
```

## Testing with Postman

1. Open Postman and create a new request.
2. Set the method and URL (e.g. `POST http://localhost:5000/api/users`).
3. Go to the **Authorization** tab → select **Basic Auth** → enter the
   `ADMIN_USERNAME` and `ADMIN_PASSWORD` from your `.env` file.
4. For `POST` and `PUT` requests, go to the **Body** tab → select **raw** → **JSON**,
   and paste a sample request body like the one above.
5. Send the request and confirm the response:
   - `POST /api/users` → `201 Created` with the new user (password excluded)
   - `GET /api/users` → `200 OK` with an array of users
   - `GET /api/users/:id` → `200 OK` with the matching user, or `404` if not found
   - `PUT /api/users/:id` → `200 OK` with the updated user
   - `DELETE /api/users/:id` → `200 OK` with a confirmation message
6. Try omitting the Authorization header to confirm you get a `401 Unauthorized`.

Tip: Save these requests in a Postman Collection named "User Management System"
so you can re-run and share them easily.

## Submitting to GitHub

Per the Syntecxhub internship requirements, push this project to a repository named:
```
Syntecxhub_User-Management-System
```
