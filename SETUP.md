# ⚡ Quick Setup Guide

## 📝 Step 1: Create .env File

Root directory me `.env` file create karein with ye content:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=gymproject
DB_USER=root
DB_PASSWORD=Riy@z485001

# JWT Secret Key (Production me strong key use karein)
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRES_IN=1h

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_YourKeyHere
RAZORPAY_KEY_SECRET=YourSecretHere

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## 📦 Step 2: Install Dependencies

```bash
npm install
```

## 🗄️ Step 3: Setup MySQL Database

MySQL me database create karein:

```sql
CREATE DATABASE gymproject;
```

## 🚀 Step 4: Start Server

```bash
# Development mode
npm run dev

# Production mode
npm start
```

## ✅ Step 5: Test

Browser me open karein: http://localhost:3000

---

**Note:** Agar koi error aaye to check karein:
- MySQL running hai ya nahi
- Database credentials sahi hain ya nahi
- Port 3000 available hai ya nahi

