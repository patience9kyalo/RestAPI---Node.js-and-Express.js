# Simple REST API — Node.js & Express.js

A lightweight RESTful API built with Node.js and Express.js that supports full CRUD operations on a users resource. Data is stored in-memory, making it a great reference project for learning REST API fundamentals.

---

## Features

- Get all users
- Get a single user by ID
- Create a new user
- Update an existing user
- Delete a user
- Input validation with meaningful error responses
- ES Module syntax (`import`/`export`)

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Node.js](https://nodejs.org/) | Runtime environment |
| [Express.js](https://expressjs.com/) v5 | Web framework |
| [Nodemon](https://nodemon.io/) | Auto-restarts server on file changes (dev) |
| [CORS](https://www.npmjs.com/package/cors) | Cross-Origin Resource Sharing |

---

## Project Structure

```
simple-rest-api/
├── Controllers/
│   └── user.js       # Request handlers (business logic)
├── Routes/
│   └── users.js      # Route definitions
├── index.js          # Entry point — sets up Express server
└── package.json
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ installed

### Installation

```bash
# Clone the repository
git clone https://github.com/patience9kyalo/RestAPI---Node.js-and-Express.js.git

# Navigate into the project directory
cd RestAPI---Node.js-and-Express.js

# Install dependencies
npm install
```

### Running the Server

```bash
npm start
```

The server will start at **http://localhost:3000**

---

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/users` | Get all users |
| `GET` | `/users/:id` | Get a user by ID |
| `POST` | `/users` | Create a new user |
| `PUT` | `/users/:id` | Update a user by ID |
| `DELETE` | `/users/:id` | Delete a user by ID |

---

## Usage Examples

### Get all users
```http
GET /users
```

**Response `200 OK`:**
```json
[
  { "id": 1, "name": "John Doe", "email": "john@gmail.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@gmail.com" }
]
```

---

### Get user by ID
```http
GET /users/1
```

**Response `200 OK`:**
```json
{ "data": { "id": 1, "name": "John Doe", "email": "john@gmail.com" } }
```

**Response `404 Not Found`:**
```json
{ "error": "User not found" }
```

---

### Create a new user
```http
POST /users
Content-Type: application/json

{
  "name": "Alice Wanjiru",
  "email": "alice@example.com"
}
```

**Response `201 Created`:**
```json
{ "data": { "id": 3, "name": "Alice Wanjiru", "email": "alice@example.com" } }
```

**Response `400 Bad Request`** (missing fields):
```json
{ "error": "Name and email are required" }
```

---

### Update a user
```http
PUT /users/1
Content-Type: application/json

{
  "name": "Johnathan Doe"
}
```

**Response `200 OK`:**
```json
{ "data": { "id": 1, "name": "Johnathan Doe", "email": "john@gmail.com" } }
```

---

### Delete a user
```http
DELETE /users/3
```

**Response `204 No Content`**

---

## Notes

- Data is stored **in-memory** and resets every time the server restarts. There is no database connected.
- At least one field (`name` or `email`) must be provided when updating a user.

---

## License

ISC
