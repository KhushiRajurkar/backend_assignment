# Backend Assignment

## Description
This is a **backend API** built using **Node.js, Express.js, and MongoDB** for user authentication and task management. It includes **JWT-based authentication**, **secure CRUD operations**, and **rate limiting for security**.

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JSON Web Token (JWT)
- **Security Features:** Rate Limiting, Middleware-based Authorization

## Features
✅ **User Authentication (Signup/Login with JWT)**  
✅ **Task Management (CRUD API for tasks)**  
✅ **Protected Routes (Only authenticated users can access tasks)**  
✅ **Rate Limiting to prevent abuse**  

## API Endpoints
| Method | Endpoint             | Description |
|--------|----------------------|-------------|
| `POST` | `/api/auth/signup`   | Register a new user |
| `POST` | `/api/auth/login`    | Login and get a JWT token |
| `POST` | `/api/tasks`         | Create a new task (Requires JWT) |
| `GET`  | `/api/tasks`         | Get all tasks (Requires JWT) |
| `PUT`  | `/api/tasks/:id`     | Update a task (Requires JWT) |
| `DELETE` | `/api/tasks/:id`  | Delete a task (Requires JWT) |

## How to Run Locally

### 1️⃣ Clone the repository
```sh
git clone https://github.com/KhushiRajurkar/backend_assignment.git
cd backend_assignment
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` file and add:
```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the server
```sh
node src/server.js
```
The API will run on `http://localhost:5000/` 🚀  

## Screenshots
### ✅ User Signup in Postman
![Screenshot 2025-03-15 114249](https://github.com/user-attachments/assets/ab5a9b90-b474-47a6-88ae-9997b6b51b9c)

### ✅ User Login & Token Generation
![Screenshot 2025-03-15 114334](https://github.com/user-attachments/assets/8a0a8321-c4ee-492a-b586-3c72a3056a6e)

### ✅ Creating a Task (Authenticated)
![Screenshot 2025-03-15 114537](https://github.com/user-attachments/assets/f7da48e6-2561-415b-88d1-bec7a4bebe90)

### ✅ Retrieving Tasks (Authenticated)
![Screenshot 2025-03-15 114644](https://github.com/user-attachments/assets/b209219a-c1ad-4dab-8520-4fb09d180861)

## 📜 License
This project is for educational purposes and is not intended for production use.

---
💡 **Created by [Khushi Rajurkar](https://github.com/KhushiRajurkar)**
