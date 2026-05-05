<div align="center">
  <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java"/>
  <img src="https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot" alt="Spring Boot"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
  
  <br />
  
  <h1>🐞 Mini Jira: Bug Tracking System</h1>
  <p>
    <strong>A sleek, high-performance, full-stack issue tracking system built for modern teams.</strong>
  </p>
</div>

<hr />

## 📖 Table of Contents
- [✨ Features](#-features)
- [🏗️ Architecture & Tech Stack](#-architecture--tech-stack)
- [🚀 Quick Start Guide](#-quick-start-guide)
  - [1. Database Setup](#1-database-setup)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [🔐 Default Credentials](#-default-credentials)
- [📁 Project Structure](#-project-structure)

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **User Roles** | Secure access control for `ADMIN` and `TESTER` roles. |
| **Kanban Dashboard** | A beautiful, glassmorphic dashboard to visualize all active and closed bugs. |
| **Lifecycle Tracking** | Move bugs dynamically through `OPEN` ➡️ `IN_PROGRESS` ➡️ `CLOSED` states. |
| **Smart Assignment** | Admins can easily re-assign tasks to specific testers on the fly. |
| **Dark Mode UI** | Premium dark-themed UI featuring gradients, blurs, and hover micro-animations. |

---

## 🏗️ Architecture & Tech Stack

This project is separated into a robust backend API and a lightning-fast frontend client.

- **Backend (API):** Java 17, Spring Boot, Spring Data JPA, Hibernate
- **Database:** MySQL
- **Frontend (UI):** React, Vite, React Router, Axios, Vanilla CSS (Glassmorphism design)

---

## 🚀 Quick Start Guide

Follow these steps to get the project running locally on your machine.

<details>
<summary><strong>1️⃣ Database Setup (MySQL)</strong></summary>

1. Ensure your local MySQL server is running on the default port `3306`.
2. Create a new database named `bug_tracker`.
3. *Note: The Spring Boot app expects a username `root` with no password. To change this, edit `backend/src/main/resources/application.properties`.*
</details>

<details>
<summary><strong>2️⃣ Backend Setup (Spring Boot)</strong></summary>

1. Open your terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Build and run the application:
   ```bash
   mvn spring-boot:run
   ```
   *(The API will start locally on port `8080`)*
</details>

<details>
<summary><strong>3️⃣ Frontend Setup (React)</strong></summary>

1. Open a **new** terminal window and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the Node modules:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *(The UI will be accessible at `http://localhost:5173`)*
</details>

---

## 🔐 Default Credentials

To make testing easier, the backend automatically seeds two default accounts into the database when you start it for the first time!

| Role | Username | Password | Permissions |
| :--- | :--- | :--- | :--- |
| 🛡️ **Admin** | `admin` | `admin123` | Full system access. Assign bugs, update status. |
| 🧪 **Tester** | `tester` | `tester123` | Create bugs, view dashboard, update assigned bugs. |

---

## 📁 Project Structure

```bash
Bug Tracking System/
├── backend/               # ☕ Spring Boot REST API
│   ├── src/main/java/     # Models, Controllers, Services, Repositories
│   └── src/main/resources/# Configuration properties
├── frontend/              # ⚛️ React UI Client
│   ├── src/pages/         # React Views (Dashboard, Login, CreateBug, BugDetails)
│   ├── src/index.css      # Core Vanilla CSS (Dark mode + Glassmorphism)
│   └── package.json       # Frontend dependencies
└── README.md              # 📖 You are here
```

<hr />
<p align="center">Made with ❤️ for modern software teams.</p>
