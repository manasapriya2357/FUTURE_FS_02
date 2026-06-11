# Mini CRM - Client Lead Management System

A full-stack Mini CRM application built to manage client leads, track their progress, store follow-up notes, and help businesses manage incoming clients efficiently.

This project represents a real-world lead management workflow used by agencies, freelancers, and startups.

---

## 🚀 Features

### 🔐 Admin Login
- Admin-only access to CRM dashboard
- Protected login system
- Unauthorized users cannot access the dashboard

### 👥 Lead Management (CRUD)
- Add new leads
- View all leads
- Edit lead details
- Delete leads

Lead information includes:
- Name
- Email
- Phone
- Source
- Notes
- Status

### 📊 Dashboard Analytics
Displays:
- Total Leads
- New Leads
- Contacted Leads
- Converted Leads

### 🔄 Lead Status Tracking

Track lead progress:

- New
- Contacted
- Converted

### 🔎 Search & Filter
- Search leads by name or email
- Filter leads based on status

### 📝 Follow-up Notes
- Add notes for each lead
- Update lead information during follow-ups

### ⏱ Timestamp Tracking
MongoDB automatically stores:
- Created date
- Updated date

### 💾 Database Storage
- Lead data is stored permanently using MongoDB Atlas
- Data remains available after refreshing the application

---

# 🛠 Tech Stack

## Frontend
- React.js
- Axios
- CSS

## Backend
- Node.js
- Express.js

## Database
- MongoDB Atlas
- Mongoose

## Tools
- VS Code
- Git
- GitHub

---

# 📂 Project Structure

```
FUTURE_FS_02

├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   ├── LeadTable.jsx
│   │   │   └── Login.jsx
│   │   │
│   │   └── App.jsx
│
├── server
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1. Clone Repository

```
git clone <your-github-repository-link>
```

---

# Backend Setup

Go to server folder:

```
cd server
```

Install dependencies:

```
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
```

Start backend server:

```
node index.js
```

Backend runs on:

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal:

```
cd client
```

Install dependencies:

```
npm install
```

Start React application:

```
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🔑 Admin Login

Example admin credentials:

Username:

```
admin
```

Password:

```
admin123
```

---

# 📌 Future Improvements

- JWT authentication
- Multiple admin accounts
- Role-based permissions
- Advanced analytics charts
- Email notifications

---

# 👩‍💻 Author

Manasa Priya

Built as a Client Lead Management System project.