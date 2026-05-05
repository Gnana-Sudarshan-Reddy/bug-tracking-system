# Bug Tracking System (Mini Jira)

A comprehensive Bug Tracking System featuring a Spring Boot backend, MySQL database, and a beautiful, modern React frontend.

## 🔧 Tech Stack
- **Backend**: Java (Spring Boot), Spring Data JPA, Hibernate
- **Database**: MySQL
- **Testing**: JUnit + Postman
- **Frontend**: React (Vite), React Router, Axios, Vanilla CSS with Glassmorphism and Dark Mode

## 📌 Features
- **Create / Assign / Close Bugs**: Full CRUD operations for bugs.
- **Track Status**: Lifecycle tracking for bugs (`OPEN` → `IN_PROGRESS` → `CLOSED`).
- **User Roles**: 
  - **Admin**: Has full access. Can view all bugs, assign bugs to testers, and update bug statuses.
  - **Tester**: Can create bugs and update the status of bugs explicitly assigned to them.
- **Beautiful UI**: Built with modern aesthetics in mind, featuring dark mode, glassmorphism, responsive grids, and subtle micro-animations.

## 🚀 Getting Started

### Prerequisites
- **Java 17+**
- **Node.js** (v18+)
- **MySQL** (Running locally on default port 3306)

### Database Setup
1. Ensure your MySQL service is running.
2. Create a database named `bug_tracker` (or let Hibernate auto-create it if configured).
3. The application uses `root` with no password by default. To change this, update `backend/src/main/resources/application.properties`.

### Running the Backend (Spring Boot)
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Run the application using Maven:
   ```bash
   mvn spring-boot:run
   ```
*(The backend runs on `http://localhost:8080`)*

> **Note**: The application automatically seeds an `admin` and `tester` user into the database upon the first run!

### Running the Frontend (React)
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
*(The frontend runs on `http://localhost:5173`)*

## 🔐 Default Credentials
You can log in to the application using the following default accounts (auto-seeded on backend startup):
- **Admin**: Username: `admin` | Password: `admin123`
- **Tester**: Username: `tester` | Password: `tester123`

## 📁 Project Structure
```text
Bug Tracking System/
├── backend/               # Spring Boot Application
│   ├── src/main/java/     # Java Source Code (Models, Controllers, Services, Repositories)
│   └── src/main/resources/# application.properties
├── frontend/              # React Application
│   ├── src/pages/         # React Pages (Dashboard, Login, CreateBug, BugDetails)
│   ├── src/index.css      # Core Vanilla CSS styles
│   └── package.json       # Node dependencies
└── README.md              # Project Documentation
```

## 📜 License
This project is open-source and available for educational purposes.
