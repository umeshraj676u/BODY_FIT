# 🏋️ Fitness Tracker - Gym Management System

Complete Gym Management System with Backend, Frontend, and Admin Dashboard.

## 📋 Project Structure

```
Gymproject/
├── Gymproject/           # Backend Server
│   ├── config/          # Database configuration
│   ├── controllers/     # Controllers
│   ├── middleware/      # Auth & Error handling
│   ├── models/          # Database models
│   ├── routes/          # API routes
│   └── server.js        # Main server file
├── admin/               # Admin Dashboard
│   ├── dashboard.html
│   ├── members.html
│   ├── payments.html
│   └── ...
├── videos/              # Exercise videos
├── index.html           # Frontend Homepage
├── *.html              # Frontend pages (workout pages, etc.)
└── package.json        # Dependencies
```

## 🚀 Features

### Frontend
- ✅ Homepage with hero section
- ✅ Workout pages (Abs, Arms, Biceps, Chest, Legs, Shoulder, Triceps, Cardio, Yoga, Zumba, Weightlifting)
- ✅ BMI Calculator
- ✅ Supplements section
- ✅ Payment integration (Razorpay)
- ✅ Contact form
- ✅ Exercise videos

### Backend
- ✅ RESTful API with Express.js
- ✅ MySQL Database with Sequelize ORM
- ✅ JWT Authentication
- ✅ User roles (Owner, Manager, Trainer, Staff)
- ✅ Member Management
- ✅ Trainer Management
- ✅ Payment Processing
- ✅ Class Schedule Management
- ✅ Inventory Management
- ✅ Lead Management

### Admin Dashboard
- ✅ Dashboard overview
- ✅ Member management
- ✅ Payment tracking
- ✅ Plan management
- ✅ Trainer management
- ✅ Class schedule
- ✅ Settings

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Step 1: Clone the Repository
```bash
git clone <your-repo-url>
cd Gymproject
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Setup Environment Variables
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_NAME=gymproject
DB_USER=root
DB_PASSWORD=your_database_password

# JWT Secret Key (Change this to a strong random string)
JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRES_IN=1h

# Razorpay Configuration
RAZORPAY_KEY_ID=rzp_test_YourKeyHere
RAZORPAY_KEY_SECRET=YourSecretHere

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

### Step 4: Setup Database
1. Create MySQL database:
```sql
CREATE DATABASE gymproject;
```

2. The database tables will be automatically created when you start the server (using Sequelize sync).

### Step 5: Start the Server
```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The server will start on `http://localhost:3000`

## 🌐 Deployment

### Option 1: Deploy on VPS/Cloud Server (Ubuntu)

#### 1. Install Node.js and MySQL
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MySQL
sudo apt-get update
sudo apt-get install mysql-server
```

#### 2. Setup MySQL Database
```bash
sudo mysql -u root -p
```
```sql
CREATE DATABASE gymproject;
CREATE USER 'gymuser'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON gymproject.* TO 'gymuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### 3. Upload Project Files
```bash
# Using SCP or SFTP, upload your project files to the server
scp -r Gymproject user@your-server-ip:/var/www/
```

#### 4. Install Dependencies
```bash
cd /var/www/Gymproject
npm install --production
```

#### 5. Setup Environment Variables
```bash
nano .env
# Add your production environment variables
```

#### 6. Install PM2 (Process Manager)
```bash
npm install -g pm2
pm2 start Gymproject/server.js --name gymproject
pm2 save
pm2 startup
```

#### 7. Setup Nginx (Reverse Proxy)
```bash
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/gymproject
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/gymproject /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### Option 2: Deploy on Heroku

#### 1. Install Heroku CLI
```bash
# Download from https://devcenter.heroku.com/articles/heroku-cli
```

#### 2. Login to Heroku
```bash
heroku login
```

#### 3. Create Heroku App
```bash
heroku create your-app-name
```

#### 4. Add MySQL Addon (JawsDB)
```bash
heroku addons:create jawsdb:kitefin
```

#### 5. Set Environment Variables
```bash
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret_key
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret
```

#### 6. Deploy
```bash
git push heroku main
```

### Option 3: Deploy on Railway

1. Connect your GitHub repository to Railway
2. Add environment variables in Railway dashboard
3. Railway will automatically detect Node.js and deploy
4. Add MySQL service in Railway and connect it

### Option 4: Deploy on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Add MySQL database service

## 🔐 Security Notes

1. **Change JWT Secret**: Use a strong random string for `JWT_SECRET` in production
2. **Database Password**: Use a strong password for database
3. **HTTPS**: Always use HTTPS in production (use Let's Encrypt for free SSL)
4. **Environment Variables**: Never commit `.env` file to git
5. **CORS**: Update `CORS_ORIGIN` with your production domain

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /login` - Legacy login endpoint

### Members
- `GET /api/members` - Get all members
- `POST /api/members` - Create member
- `PUT /api/members/:id` - Update member
- `DELETE /api/members/:id` - Delete member

### Payments
- `POST /api/payment/order` - Create Razorpay order
- `POST /api/payments` - Record payment

### Trainers
- `GET /api/trainers` - Get all trainers
- `POST /api/trainers` - Create trainer

### Programs & Plans
- `GET /api/programs` - Get all programs
- `GET /api/plans` - Get all plans

### Other
- `GET /api/videos` - Get exercise videos
- `POST /api/contact` - Submit contact form
- `POST /api/bmi` - Calculate BMI

## 🛠️ Development

### Run in Development Mode
```bash
npm run dev
```

### Database Sync
The database will automatically sync when the server starts. Tables are created/modified based on models.

### Create Admin User
You can create an admin user by calling the register endpoint:
```bash
curl -X POST http://localhost:3000/register \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123","role":"Owner"}'
```

## 📞 Support

For issues or questions, please contact the development team.

## 📄 License

ISC

---

**Made with ❤️ for Fitness Enthusiasts**

