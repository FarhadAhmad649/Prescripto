# 🩺 Prescripto - Doctor Appointment & Healthcare Management Platform

![Prescripto Banner](./screenshots/banner.png)

Prescripto is a full-stack healthcare management platform built to simplify the process of connecting patients with doctors through a modern digital appointment system.

The platform enables patients to search for doctors, view profiles, book appointments, and manage their healthcare interactions. Doctors can manage appointments, update availability, and handle patient information, while administrators can monitor and manage the overall system.

Built using the MERN stack, Prescripto demonstrates real-world full-stack development practices including secure authentication, RESTful API design, database management, cloud image storage, and responsive user interfaces.

---

## 🚀 Features

### 👨‍⚕️ Patient Features

- User registration and secure authentication
- Browse doctors by specialization
- View detailed doctor profiles
- Book appointments with available doctors
- Manage upcoming appointments
- Cancel appointments
- Update personal profile information
- Upload and manage profile images
- View appointment history


### 🩺 Doctor Features

- Dedicated doctor dashboard
- Manage doctor profile
- Update availability status
- View booked appointments
- Manage appointment requests
- Access patient appointment details
- Track appointment activities


### 🛡️ Admin Features

- Complete admin dashboard
- Manage doctors and patients
- Add new doctors
- Remove doctors
- Monitor appointments
- Manage platform operations


---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Axios
- Context API
- Vite


## Backend

- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- Middleware-based architecture


## Database

- MongoDB
- Mongoose ODM


## Other Technologies

- Cloudinary (Image Storage)
- Multer (File Upload Handling)
- bcrypt (Password Hashing)
- JSON Web Token (Authentication)
- Git & GitHub


---

# 🏗️ Project Architecture

```
Prescripto
│
├── Frontend
│   │
│   ├── Components
│   ├── Pages
│   ├── Context API
│   ├── Assets
│   └── Services
│
├── Backend
│   │
│   ├── Controllers
│   ├── Models
│   ├── Routes
│   ├── Middleware
│   └── Config
│
└── Database
    │
    └── MongoDB
```

---

# 🔐 Authentication & Security

Prescripto implements secure authentication and authorization using:

- JWT-based authentication
- Protected API routes
- Role-based access control
- Password encryption using bcrypt
- Secure environment variable management
- Backend validation middleware


---

# 📸 Screenshots

Add your screenshots inside the `screenshots` folder.

Example:

```
screenshots/
│
├── banner.png
├── home.png
├── doctor-dashboard.png
├── admin-dashboard.png
└── appointment.png
```

---

# ⚙️ Installation & Setup

Follow these steps to run the project locally.

## Clone Repository

```bash
git clone https://github.com/FarhadAhmad649/Prescripto.git

cd Prescripto
```

---

## Install Frontend Dependencies

```bash
cd frontend

npm install
```

---

## Install Backend Dependencies

```bash
cd backend

npm install
```

---

# Environment Variables

Create a `.env` file inside the backend directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_cloudinary_api_key

CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
```

---

# Running the Application

## Start Backend Server

```bash
npm run server
```

## Start Frontend Development Server

```bash
npm run dev
```

The application will run locally on your configured ports.

---

# 📡 API Modules

## Authentication

```
POST /api/user/register

POST /api/user/login
```

## Doctors

```
GET /api/doctor/list

POST /api/doctor/add

PUT /api/doctor/update
```

## Appointments

```
POST /api/appointment/book

GET /api/appointment/list

PUT /api/appointment/cancel
```

---

# 🎯 Project Objectives

The purpose of Prescripto is to provide a digital healthcare solution that improves accessibility and efficiency between doctors and patients.

The project focuses on:

- Simplifying appointment scheduling
- Reducing manual healthcare management processes
- Providing separate dashboards for different user roles
- Creating a secure and scalable healthcare platform
- Applying modern full-stack development practices


---

# 🌱 Future Enhancements

Planned improvements include:

- Online video consultation
- Payment gateway integration
- Prescription generation system
- Email and SMS appointment reminders
- AI healthcare assistant
- Medical history tracking
- Advanced analytics dashboard


---

# 📚 Learning Outcomes

Through building Prescripto, I gained practical experience in:

- Designing full-stack MERN applications
- Creating RESTful APIs
- Implementing authentication systems
- Managing MongoDB databases
- Handling file uploads with Cloudinary
- Building responsive React interfaces
- Structuring scalable backend applications


---

# 👨‍💻 Developer

## Farhad Ahmad

**Software Engineer | Full Stack MERN Developer**

Skills:

- React.js
- Node.js
- Express.js
- MongoDB
- JavaScript
- REST APIs
- Tailwind CSS
- Cloud Deployment
- AI Integration


---

# ⭐ Support

If you find this project useful or interesting, consider giving it a ⭐ on GitHub.

Your feedback and suggestions are highly appreciated.
