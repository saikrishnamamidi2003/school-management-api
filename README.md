# School Management API

A RESTful API built with **Node.js, Express.js, and MySQL** to manage school data.
The API allows users to **add new schools** and **retrieve a list of schools sorted by proximity to a given location**.

---

## 🚀 Features

* Add new schools with location details
* Retrieve schools sorted by distance from user location
* Input validation for API requests
* Distance calculation using geographical coordinates
* RESTful API design
* Deployed backend service for live testing

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MySQL**
* **Postman** (API testing)
* **Render** (deployment)

---

## 📂 Project Structure

```
school-management-api
│
├── config
│   └── db.js
│
├── controllers
│   └── schoolController.js
│
├── routes
│   └── schoolRoutes.js
│
├── postman
│   └── school-management-api.postman_collection.json
│
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```
git clone https://github.com/yourusername/school-management-api.git
```

Navigate to the project directory:

```
cd school-management-api
```

Install dependencies:

```
npm install
```

Create a `.env` file and add your database configuration:

```
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
```

Start the server:

```
npm run dev
```

Server runs on:

```
http://localhost:5000
```

---

## 📌 API Endpoints

### 1️⃣ Add School

**Endpoint**

```
POST /api/addSchool
```

**Request Body**

```json
{
  "name": "ABC School",
  "address": "Hyderabad",
  "latitude": 17.385,
  "longitude": 78.486
}
```

**Response**

```json
{
  "message": "School added successfully"
}
```

---

### 2️⃣ List Schools

Returns schools sorted by proximity to user location.

**Endpoint**

```
GET /api/listSchools
```

**Example Request**

```
/api/listSchools?latitude=17.385&longitude=78.486
```

**Response**

```json
[
  {
    "id": 1,
    "name": "ABC School",
    "address": "Hyderabad",
    "latitude": 17.385,
    "longitude": 78.486,
    "distance": 0
  }
]
```

---

## 🌍 Live API

Base URL:

```
https://school-management-api-lf7v.onrender.com
```

Example Endpoint:

```
https://school-management-api-lf7v.onrender.com/api/listSchools?latitude=17.385&longitude=78.486
```

---

## 🧪 API Testing

A Postman collection is included in the repository:

```
postman/school-management-api.postman_collection.json
```

Import this file into **Postman** to test the APIs easily.

---

## 👨‍💻 Author

**Sai Krishna Mamidi**

* GitHub: https://github.com/saikrishnamamidi2003
* Email: [saikrishnamamidi2003@gmail.com](mailto:saikrishnamamidi2003@gmail.com)

---

## 📄 License

This project is developed as part of a **Node.js backend assessment task**.
