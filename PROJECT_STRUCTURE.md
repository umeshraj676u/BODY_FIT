# 📁 Project Structure - Fitness Tracker

## 🗂️ Complete File Structure

```
Gymproject/
│
├── 📄 .env                    # Environment variables (CREATE THIS FILE)
├── 📄 .env.example            # Environment variables template
├── 📄 .gitignore              # Git ignore file
├── 📄 package.json            # Dependencies & scripts
├── 📄 README.md               # Main documentation
├── 📄 DEPLOYMENT.md           # Deployment guide
├── 📄 SETUP.md                # Quick setup guide
│
├── 🎨 Frontend Files (Root)
│   ├── index.html             # Main homepage
│   ├── login.html             # Login page
│   ├── signup.html            # Signup page
│   ├── payment.html           # Payment page
│   ├── supplement.html        # Supplements page
│   ├── style.css              # Main stylesheet
│   │
│   └── 🏋️ Workout Pages
│       ├── abs.html
│       ├── arm.html
│       ├── biceps.html
│       ├── cardio.html
│       ├── chest.html
│       ├── legs.html
│       ├── shoulder.html
│       ├── triceps.html
│       ├── weightlifting.html
│       ├── yoga.html
│       └── zumba.html
│
├── 🖥️ Backend (Gymproject/)
│   ├── server.js              # Main server file
│   │
│   ├── 📁 config/
│   │   ├── database.js        # Database configuration
│   │   └── testConnection.js  # DB connection test
│   │
│   ├── 📁 models/             # Database models
│   │   ├── index.js           # Model exports & relationships
│   │   ├── User.js            # User model
│   │   ├── Member.js          # Member model
│   │   ├── Trainer.js         # Trainer model
│   │   ├── Plan.js            # Plan model
│   │   ├── Payment.js         # Payment model
│   │   ├── Lead.js            # Lead model
│   │   ├── Contact.js         # Contact model
│   │   ├── InventoryItem.js   # Inventory model
│   │   ├── ClassSchedule.js   # Class schedule model
│   │   └── Program.js         # Program model
│   │
│   ├── 📁 routes/             # API routes
│   │   ├── auth.js            # Authentication routes
│   │   ├── users.js           # User routes
│   │   ├── members.js         # Member routes
│   │   ├── trainers.js        # Trainer routes
│   │   ├── payments.js        # Payment routes
│   │   ├── payment.js         # Razorpay payment routes
│   │   ├── plans.js           # Plan routes
│   │   ├── programs.js        # Program routes
│   │   ├── classSchedule.js   # Class schedule routes
│   │   ├── inventory.js       # Inventory routes
│   │   ├── leads.js           # Lead routes
│   │   ├── contact.js         # Contact routes
│   │   ├── bmi.js             # BMI calculator routes
│   │   ├── videos.js          # Video routes
│   │   └── admin.js           # Admin routes
│   │
│   ├── 📁 controllers/        # Controllers
│   │   └── authController.js  # Auth controller
│   │
│   ├── 📁 middleware/         # Middleware
│   │   ├── auth.js            # Authentication middleware
│   │   └── errorHandler.js    # Error handling middleware
│   │
│   └── 📁 Other Files
│       ├── login.html         # Login page (served by server)
│       ├── index.html         # Index page
│       ├── script.js          # Client-side scripts
│       └── syncDatabase.js    # Database sync utility
│
├── 👨‍💼 Admin Dashboard (admin/)
│   ├── dashboard.html         # Admin dashboard
│   ├── login.html             # Admin login
│   ├── members.html           # Member management
│   ├── payments.html          # Payment management
│   ├── plans.html             # Plan management
│   ├── trainers.html          # Trainer management
│   ├── schedule.html          # Schedule management
│   ├── settings.html          # Settings
│   ├── admin.js               # Admin scripts
│   └── style.css              # Admin styles
│
├── 🎥 Videos (videos/)        # Exercise videos
│   ├── abs/
│   ├── arm/
│   ├── biceps/
│   ├── cardio/
│   ├── chest/
│   ├── legs/
│   ├── shoulder/
│   ├── triceps/
│   ├── weight lifting/
│   ├── yoga/
│   └── zumba/
│
└── 📦 Assets
    ├── supplimentimg/         # Supplement images
    ├── favicon.png
    ├── gym333.jpeg
    └── ... (other images)
```

## 🔄 Data Flow

### Frontend → Backend
```
User Action (Frontend)
    ↓
API Call (Fetch/Axios)
    ↓
Express Route (routes/)
    ↓
Controller (if needed)
    ↓
Model (models/)
    ↓
Database (MySQL)
```

### Backend → Frontend
```
Database (MySQL)
    ↓
Model (models/)
    ↓
Controller/Route
    ↓
JSON Response
    ↓
Frontend Display
```

## 🗄️ Database Structure

### Tables
- `users` - User accounts (Owner, Manager, Trainer, Staff)
- `members` - Gym members
- `trainers` - Trainers
- `plans` - Membership plans
- `payments` - Payment records
- `leads` - Lead management
- `contacts` - Contact form submissions
- `inventoryitems` - Inventory management
- `classschedules` - Class schedules
- `programs` - Workout programs

### Relationships
- Trainer → Members (One-to-Many)
- Member → Payments (One-to-Many)
- Trainer → ClassSchedules (One-to-Many)

## 🌐 API Endpoints Structure

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /login` - Legacy login

### Members
- `GET /api/members` - Get all members
- `POST /api/members` - Create member
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Payments
- `POST /api/payment/order` - Create Razorpay order
- `POST /api/payments` - Record payment

### Admin
- `GET /api/admin/*` - Admin endpoints

## 🚀 Deployment Structure

### Production Setup
```
Server (VPS/Cloud)
    ↓
Nginx (Reverse Proxy)
    ↓
Node.js (PM2)
    ↓
Express Server
    ↓
MySQL Database
```

### Static Files
- Frontend HTML/CSS/JS → Served by Express
- Videos → Served by Express/Nginx
- Images → Served by Express/Nginx

## 📝 Key Files to Modify for Deployment

1. **.env** - Environment variables
2. **Gymproject/config/database.js** - Database config
3. **Gymproject/server.js** - Server config
4. **package.json** - Dependencies
5. **nginx config** - Reverse proxy (if using)

## 🔐 Security Files

- `.env` - Never commit to git
- `.gitignore` - Ignores sensitive files
- `middleware/auth.js` - Authentication
- `JWT_SECRET` - Store in .env

---

**This structure ensures clean separation of concerns and easy deployment! 🎯**

