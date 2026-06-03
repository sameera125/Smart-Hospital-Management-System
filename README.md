# 🏥 Smart Hospital Management System

A full-stack healthcare management platform developed using ReactJS, Spring Boot, MySQL, and REST APIs.

## 📌 Project Overview
The Smart Hospital Management System provides role-based access for Admin, Doctor, and Patient users.

## 🚀 Features

### 👨‍💼 Admin Module
- Admin Login
- Manage Patients
- Manage Doctors
- View Consultation Records
- View Payment Records
- Manage Medicine Orders
- Dashboard Analytics
- Reports Management

### 👨‍⚕️ Doctor Module
- Doctor Login
- View Assigned Consultations
- Create E-Prescriptions
- Manage Consultation Status

### 🧑 Patient Module
- Patient Registration & Login
- Search Doctors
- Book Consultation
- Online Payment
- Video/Chat/Phone Consultation
- View Prescriptions
- Order Medicines
- Track Medicine Orders

## 💊 Medicine Order Tracking
- Ordered
- Packed
- Shipped
- Delivered

## 💳 Payment Module
- Consultation Fee Payment
- Payment Success Tracking

## 🛠️ Technologies Used

### Frontend
- ReactJS
- HTML
- CSS
- JavaScript
- Axios

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate

### Database
- MySQL

## 🗄️ Database Tables
- patients
- doctors
- doctor_login
- consultations
- appointments
- payments
- prescriptions
- medicine_order

## 🔄 Workflow
1. Patient registers and logs in.
2. Patient searches doctor.
3. Patient books consultation.
4. Patient makes payment.
5. Doctor provides prescription.
6. Patient orders medicine.
7. Admin manages delivery status.

## ▶️ Installation

### Frontend
npm install
npm start

### Backend
mvn clean install
mvn spring-boot:run

### Database
Import hospital_db.sql and update application.properties.

## 🔮 Future Enhancements
- Real-time chat
- WebRTC video calling
- Email notifications
- Doctor ratings

## 👨‍💻 Developed By
Sk Sameera
