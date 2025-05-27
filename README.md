# 🏖️ Puffertour

**Version:** 1.0  
**Authors:**  
- Sareef Masameng (System Analyst)  
- Sola Phaiboonsombat (Programmer)  
- Nawapol Phikampol (Project Manager)  
- Waranyu Kongsomboon (Programmer)  
- Aditep Baemmuang (Programmer)  
- MuhammadSofron Malee (Programmer)

---

## 📖 Table of Contents
1. [Project Overview](#-project-overview)  
2. [Features](#-features)  
3. [Technology Stack](#-technology-stack)
4. [Folder Structure](#-folder-structure)  
5. [Getting Started](#️-getting-started)  
6. [Usage](#-usage)
7. [API Endpoints](#-api-endpoints)
8. [Testing](#-testing)
9. [Contributing](#-contributing)  
10. [License](#-license)  

---

## 📖 Project Overview

Puffertour เป็นเว็บแอปพลิเคชันสำหรับจองทัวร์ในจังหวัดสงขลา ที่พัฒนาขึ้นเพื่อให้นักท่องเที่ยวสามารถจองทัวร์ได้อย่างสะดวกและมีประสิทธิภาพ

### สำหรับผู้ใช้ทั่วไป:
- เรียกดูทัวร์รายวันหรือแพ็กเกจทัวร์  
- ดูรายละเอียดและรีวิวจากผู้ใช้คนอื่น  
- จองและชำระเงินออนไลน์อย่างปลอดภัย  
- เขียน/อ่านรีวิว และติดตามประวัติการจอง  

### สำหรับผู้ดูแลระบบ:
- จัดการข้อมูลทัวร์ (เพิ่ม/แก้ไข/ลบ)  
- อนุมัติและจัดการการจอง  
- ติดตามสถิติการใช้งานของผู้ใช้  
- จัดการผู้ใช้และระบบรีวิว

---

## 🚀 Features

### 🎨 User Interface
- **Responsive Design**: รองรับทั้งเดสก์ท็อป แท็บเล็ต และโมบาย  
- **Modern UI/UX**: ออกแบบที่สวยงามและใช้งานง่าย  

### 🔐 Authentication & Authorization
- **User Registration/Login**: ระบบสมัครสมาชิกและเข้าสู่ระบบ  
- **Role-based Access**: แบ่งสิทธิ์การใช้งานระหว่างผู้ใช้ทั่วไปและแอดมิน  

### 🗺️ Tour Management
- **Tour Catalog**: แสดงทัวร์รายวันและแพ็กเกจทัวร์  
- **Tour Details**: กำหนดการเดินทาง รูปภาพ และรีวิว  
- **Search & Filter**: ค้นหาและกรองทัวร์ตามความต้องการ  

### 📅 Booking System
- **Flexible Booking**: เลือกวันที่และจำนวนผู้เดินทางได้อิสระ  
- **Real-time Availability**: ตรวจสอบที่นั่งว่างแบบเรียลไทม์  
- **Booking Management**: จัดการการจองและสถานะ  

### 💳 Payment System
- **Online Payment**: ระบบชำระเงินออนไลน์ที่ปลอดภัย  
- **Flexible Cancellation**: ยกเลิกการจองภายในระยะเวลาที่กำหนด  
- **Payment History**: ประวัติการชำระเงิน  

### 👤 User Dashboard
- **Booking History**: ประวัติการจองทั้งหมด  
- **Payment Status**: สถานะการชำระเงิน  
- **Profile Management**: จัดการข้อมูลส่วนตัว  

### ⭐ Review System
- **Write Reviews**: เขียนรีวิวและให้คะแนนทัวร์  
- **Read Reviews**: อ่านรีวิวจากผู้ใช้คนอื่น  
- **Rating System**: ระบบให้คะแนนแบบ 5 ดาว  

### 🛡️ Admin Panel
- **Tour Management**: สร้าง แก้ไข และลบทัวร์  
- **User Management**: จัดการข้อมูลผู้ใช้  
- **Booking Oversight**: ตรวจสอบและอนุมัติการจอง  
- **Analytics**: สถิติและรายงานการใช้งาน  

### 📞 Support
- **Contact Page**: หน้าติดต่อสอบถาม  
- **Help Center**: คำถามที่พบบ่อยและคู่มือการใช้งาน  

---

## 🛠️ Technology Stack

### Frontend
- **React.js** - JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript
- **CSS3/SCSS** - Styling and responsive design
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB/MySQL** - Database management
- **JWT** - JSON Web Tokens for authentication

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control

---

## 📂 Folder Structure

```plaintext
Puffertour/
├── client/                              # Front-end (React)
│   ├── public/                          # Static assets (HTML, images, icons)
│   │   ├── index.html                   # Main HTML template
│   │   ├── favicon.ico                  # Site favicon
│   │   └── images/                      # Static images
│   ├── src/
│   │   ├── components/                  # Reusable React components
│   │   │   ├── common/                  # Common UI components
│   │   │   ├── layout/                  # Layout components
│   │   │   └── forms/                   # Form components
│   │   ├── pages/                       # Page-level views & routes
│   │   │   ├── Home/                    # Homepage
│   │   │   ├── Tours/                   # Tour listing and details
│   │   │   ├── Booking/                 # Booking pages
│   │   │   ├── Dashboard/               # User dashboard
│   │   │   └── Admin/                   # Admin panel
│   │   ├── services/                    # API calls (axios wrappers)
│   │   │   ├── api.js                   # API configuration
│   │   │   ├── tourService.js           # Tour-related API calls
│   │   │   ├── userService.js           # User-related API calls
│   │   │   └── bookingService.js        # Booking-related API calls
│   │   ├── styles/                      # Global & component CSS
│   │   │   ├── globals.css              # Global styles
│   │   │   ├── variables.css            # CSS variables
│   │   │   └── components/              # Component-specific styles
│   │   ├── utils/                       # Utility functions
│   │   ├── hooks/                       # Custom React hooks
│   │   ├── context/                     # React context providers
│   │   ├── App.tsx                      # Main application entry
│   │   └── index.tsx                    # ReactDOM render & setup
│   ├── .env                             # Environment variables
│   ├── .env.example                     # Environment variables template
│   ├── package.json                     # Front-end dependencies & scripts
│   └── tsconfig.json                    # TypeScript configuration
│
├── server/                              # Back-end (Node.js/Express)
│   ├── controllers/                     # Request handlers
│   │   ├── authController.js            # Authentication logic
│   │   ├── tourController.js            # Tour management logic
│   │   ├── bookingController.js         # Booking logic
│   │   └── userController.js            # User management logic
│   ├── models/                          # Database schemas / ORM models
│   │   ├── User.js                      # User model
│   │   ├── Tour.js                      # Tour model
│   │   ├── Booking.js                   # Booking model
│   │   └── Review.js                    # Review model
│   ├── routes/                          # Express route definitions
│   │   ├── auth.js                      # Authentication routes
│   │   ├── tours.js                     # Tour routes
│   │   ├── bookings.js                  # Booking routes
│   │   └── users.js                     # User routes
│   ├── middleware/                      # Custom middleware
│   │   ├── auth.js                      # Authentication middleware
│   │   ├── validation.js                # Input validation
│   │   └── errorHandler.js              # Error handling
│   ├── services/                        # Business logic & utilities
│   │   ├── emailService.js              # Email notifications
│   │   ├── paymentService.js            # Payment processing
│   │   └── uploadService.js             # File upload handling
│   ├── config/                          # Configuration files
│   │   ├── database.js                  # Database configuration
│   │   ├── auth.js                      # Authentication config
│   │   └── constants.js                 # Application constants
│   ├── uploads/                         # Uploaded files directory
│   ├── tests/                           # Test files
│   ├── .env                             # Environment variables
│   ├── .env.example                     # Environment variables template
│   ├── app.js                           # Express app setup & middleware
│   ├── server.js                        # Server entry point
│   └── package.json                     # Back-end dependencies & scripts
│
├── docs/                                # Documentation
│   ├── api-documentation.md             # API documentation
│   ├── user-guide.md                    # User guide
│   └── admin-guide.md                   # Admin guide
├── Requirement-specification-Document.pdf  # SRS, use cases, UI mockups
├── docker-compose.yml                   # Container orchestration
├── docker-compose.prod.yml              # Production container config
├── .gitignore                           # Git ignore rules
├── README.md                            # This file
└── LICENSE                              # License information
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js** (v14.x or higher)
- **npm** or **yarn**
- **Docker** and **Docker Compose** (for containerized deployment)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/sareefhub/Puffertour.git
cd Puffertour
```

### 2. Configure Environment Variables

#### Client Environment
```bash
cd client
cp .env.example .env
```

แก้ไขไฟล์ `client/.env`:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_PAYMENT_PUBLIC_KEY=your_payment_public_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

#### Server Environment
```bash
cd ../server
cp .env.example .env
```

แก้ไขไฟล์ `server/.env`:
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_db_username
DB_PASS=your_db_password
DB_NAME=puffertour_db

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (for notifications)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

# Payment Gateway Configuration
PAYMENT_SECRET_KEY=your_payment_secret_key
PAYMENT_PUBLIC_KEY=your_payment_public_key

# File Upload Configuration
MAX_FILE_SIZE=5MB
UPLOAD_DIR=./uploads
```

### 3. Installation & Running

#### Option A: Run with Docker Compose (Recommended)
```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop all services
docker-compose down
```

#### Option B: Manual Installation
```bash
# Install server dependencies
cd server
npm install
npm run dev

# In another terminal, install client dependencies
cd ../client
npm install
npm start
```

### 4. Access the Application
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000
- **API Documentation**: http://localhost:5000/api-docs (if Swagger is configured)

---

## 📘 Usage

### For Regular Users

1. **Registration**: สร้างบัญชีผู้ใช้ใหม่
2. **Browse Tours**: เรียกดูทัวร์ที่มีให้บริการ
3. **Tour Details**: ดูรายละเอียดทัวร์และรีวิว
4. **Make Booking**: จองทัวร์และเลือกวันที่
5. **Payment**: ชำระเงินออนไลน์
6. **Manage Bookings**: ติดตามสถานะการจองในแดชบอร์ด
7. **Write Reviews**: เขียนรีวิวหลังจากใช้บริการ

### For Administrators

1. **Admin Login**: เข้าสู่ระบบด้วยบัญชีแอดมิน
2. **Tour Management**: จัดการข้อมูลทัวร์
3. **Booking Management**: อนุมัติและติดตามการจอง
4. **User Management**: จัดการข้อมูลผู้ใช้
5. **Reports**: ดูรายงานสถิติการใช้งาน

---

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - สมัครสมาชิก
- `POST /api/auth/login` - เข้าสู่ระบบ
- `POST /api/auth/logout` - ออกจากระบบ
- `GET /api/auth/profile` - ดูข้อมูลโปรไฟล์

### Tours
- `GET /api/tours` - ดูรายการทัวร์ทั้งหมด
- `GET /api/tours/:id` - ดูรายละเอียดทัวร์
- `POST /api/tours` - สร้างทัวร์ใหม่ (Admin only)
- `PUT /api/tours/:id` - แก้ไขข้อมูลทัวร์ (Admin only)
- `DELETE /api/tours/:id` - ลบทัวร์ (Admin only)

### Bookings
- `GET /api/bookings` - ดูรายการการจองของผู้ใช้
- `POST /api/bookings` - สร้างการจองใหม่
- `GET /api/bookings/:id` - ดูรายละเอียดการจอง
- `PUT /api/bookings/:id` - อัพเดทสถานะการจอง
- `DELETE /api/bookings/:id` - ยกเลิกการจอง

### Reviews
- `GET /api/reviews/tour/:tourId` - ดูรีวิวของทัวร์
- `POST /api/reviews` - เขียนรีวิวใหม่
- `PUT /api/reviews/:id` - แก้ไขรีวิว
- `DELETE /api/reviews/:id` - ลบรีวิว

---

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test

# Run tests with coverage
npm run test:coverage
```

### Test Types
- **Unit Tests**: ทำการทดสอบฟังก์ชันแต่ละส่วน
- **Integration Tests**: ทดสอบการทำงานร่วมกันของระบบ
- **API Tests**: ทดสอบ REST API endpoints
- **E2E Tests**: ทดสอบการใช้งานจริงของผู้ใช้

---

## 🤝 Contributing

เรายินดีรับการมีส่วนร่วมจากทุกคน! โปรดปฏิบัติตามขั้นตอนดังนี้:

### การเตรียมการ
1. Fork โปรเจ็กต์นี้
2. สร้าง feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'Add some AmazingFeature'`)
4. Push ไปยัง branch (`git push origin feature/AmazingFeature`)
5. สร้าง Pull Request

### Guidelines
- ใช้ชื่อ commit messages ที่ชัดเจน
- เขียน tests สำหรับ features ใหม่
- ปฏิบัติตาม coding standards ที่กำหนด
- อัพเดท documentation เมื่อจำเป็น

### Code Style
- ใช้ **ESLint** และ **Prettier** สำหรับ JavaScript/TypeScript
- ปฏิบัติตาม **Airbnb JavaScript Style Guide**
- ตั้งชื่อตัวแปรและฟังก์ชันให้สื่อความหมาย

---

## 📞 Contact & Support

หากมีคำถามหรือต้องการความช่วยเหลือ สามารถติดต่อได้ที่:

### Development Team
- **Project Manager**: Nawapol Phikampol
- **System Analyst**: Sareef Masameng
- **Lead Developer**: Sola Phaiboonsombat

---

## 🔄 Changelog

### Version 1.0 (Current)
- ✅ เปิดตัวระบบพื้นฐานสำหรับการจองทัวร์
- ✅ ระบบ Authentication และ Authorization
- ✅ ระบบจัดการทัวร์และการจอง
- ✅ ระบบรีวิวและให้คะแนน
- ✅ Admin Panel สำหรับการจัดการ
- ✅ ระบบชำระเงินออนไลน์

### Planned Features
- 🔄 Mobile Application (iOS/Android)
- 🔄 Multi-language Support
- 🔄 Advanced Analytics Dashboard
- 🔄 Integration with more Payment Gateways
- 🔄 Real-time Chat Support

---

## 🏆 Acknowledgments

- ขขอบคุณทีมพัฒนาทุกคนที่ร่วมมือกันสร้างสรรค์โปรเจ็กต์นี้
- ขอบคุณมหาวิทยาลัยที่ให้การสนับสนุน
- ขอบคุณชุมชน Open Source สำหรับ libraries และ tools ที่ใช้งาน

---

<div align="center">
Made with ❤️ by Puffertour Development Team
</div>
