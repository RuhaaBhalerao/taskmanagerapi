# 🚀 Task Manager API

## 📌 Description

A production-ready Task Management REST API built using Node.js, Express, and MongoDB.
This API allows users to register, login, and manage tasks with optimized performance using indexing and caching.

---

## ✨ Features

* User Registration & Authentication (JWT)
* Secure Password Hashing (bcrypt)
* Create, Read, Update, Delete Tasks
* In-memory caching for fast task retrieval
* Indexed database for optimized queries
* Environment-based configuration
* Production-ready setup
* Cloud deployment (Render)

---

## 🛠 Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* bcrypt

---

## 📡 API Endpoints

### 🔐 Auth Routes

#### Register

POST /api/auth/register
Body:

```json
{
  "name": "Ruhaa",
  "email": "ruhaa@gmail.com",
  "password": "123456"
}
```

#### Login

POST /api/auth/login
Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

### 📋 Task Routes (Protected)

#### Create Task

POST /api/tasks

#### Get Tasks

GET /api/tasks

#### Update Task

PUT /api/tasks/:id

#### Delete Task

DELETE /api/tasks/:id

---

## ⚡ Performance Optimizations

### Database Indexing

* Email index → faster login lookup
* userId index → faster task queries
* status + priority → optimized filtering

### Caching

* GET /tasks cached for 60 seconds
* Cache invalidated on create/update/delete

---

## 🔐 Environment Variables

| Variable   | Description               |
| ---------- | ------------------------- |
| PORT       | Server port               |
| MONGO_URI  | MongoDB connection string |
| JWT_SECRET | Secret key for JWT        |

---

## ⚙️ Installation Guide

```bash
git clone <repo-url>
cd task-manager-api
npm install
npm run dev
```

---

## ☁️ Deployment Guide

1. Push code to GitHub
2. Go to Render
3. Create new Web Service
4. Add environment variables
5. Deploy

---

## 🧪 Testing Guide

Use Postman to test:

* Register user
* Login
* Create task
* Get tasks
* Update task

---

## 🔗 Live URL

(Add your Render URL here)

---

## 📸 Screenshots

(Add screenshots folder images here)

---

## 👨‍💻 Author

Ruhaa Bhalerao
