# 🚀 Deployment Guide - Fitness Tracker Gym Management System

## 📋 Quick Deployment Checklist

- [ ] Node.js installed (v14+)
- [ ] MySQL installed and running
- [ ] Database created
- [ ] Environment variables configured
- [ ] Dependencies installed
- [ ] Server tested locally
- [ ] Production environment setup

## 🖥️ Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
Create `.env` file in root directory with:
```env
PORT=3000
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_NAME=gymproject
DB_USER=root
DB_PASSWORD=your_password
JWT_SECRET=your_secret_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
```

### 3. Setup MySQL Database
```sql
CREATE DATABASE gymproject;
```

### 4. Start Server
```bash
npm start
# or for development
npm run dev
```

## ☁️ Production Deployment Options

### Option 1: VPS Deployment (Ubuntu/Debian)

#### Step 1: Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MySQL
sudo apt-get install mysql-server -y
sudo mysql_secure_installation

# Install Nginx
sudo apt-get install nginx -y

# Install PM2
sudo npm install -g pm2
```

#### Step 2: Database Setup
```bash
sudo mysql -u root -p
```

```sql
CREATE DATABASE gymproject CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'gymuser'@'localhost' IDENTIFIED BY 'StrongPassword123!';
GRANT ALL PRIVILEGES ON gymproject.* TO 'gymuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### Step 3: Upload Project
```bash
# Create project directory
sudo mkdir -p /var/www/gymproject
sudo chown -R $USER:$USER /var/www/gymproject

# Upload files (using SCP, FTP, or Git)
cd /var/www/gymproject
git clone <your-repo-url> .
# OR upload files manually
```

#### Step 4: Install Dependencies
```bash
cd /var/www/gymproject
npm install --production
```

#### Step 5: Configure Environment
```bash
nano .env
```

Add production environment variables:
```env
PORT=3000
NODE_ENV=production
DB_HOST=localhost
DB_PORT=3306
DB_NAME=gymproject
DB_USER=gymuser
DB_PASSWORD=StrongPassword123!
JWT_SECRET=generate_strong_random_secret_key_here
JWT_EXPIRES_IN=1h
RAZORPAY_KEY_ID=your_production_key
RAZORPAY_KEY_SECRET=your_production_secret
CORS_ORIGIN=https://yourdomain.com
```

#### Step 6: Start with PM2
```bash
cd /var/www/gymproject
pm2 start Gymproject/server.js --name gymproject
pm2 save
pm2 startup
# Follow the instructions shown
```

#### Step 7: Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/gymproject
```

Add:
```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    # Increase body size for file uploads
    client_max_body_size 50M;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Serve static files directly
    location /videos/ {
        alias /var/www/gymproject/videos/;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/gymproject /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### Step 8: Setup SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

### Option 2: Heroku Deployment

#### Step 1: Install Heroku CLI
Download from: https://devcenter.heroku.com/articles/heroku-cli

#### Step 2: Login
```bash
heroku login
```

#### Step 3: Create App
```bash
heroku create your-app-name
```

#### Step 4: Add Database
```bash
heroku addons:create jawsdb:kitefin
```

#### Step 5: Set Config Vars
```bash
heroku config:set NODE_ENV=production
heroku config:set JWT_SECRET=your_secret_key
heroku config:set RAZORPAY_KEY_ID=your_key
heroku config:set RAZORPAY_KEY_SECRET=your_secret
```

#### Step 6: Deploy
```bash
git push heroku main
```

### Option 3: Railway Deployment

1. Go to https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Connect your repository
4. Add MySQL service
5. Set environment variables:
   - `DB_HOST` (from MySQL service)
   - `DB_USER` (from MySQL service)
   - `DB_PASSWORD` (from MySQL service)
   - `DB_NAME` (from MySQL service)
   - `JWT_SECRET`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
6. Railway will auto-deploy

### Option 4: Render Deployment

1. Go to https://render.com
2. Create new "Web Service"
3. Connect GitHub repository
4. Settings:
   - Build Command: `npm install`
   - Start Command: `npm start`
5. Add "PostgreSQL" or "MySQL" database
6. Add environment variables
7. Deploy

## 🔒 Security Best Practices

### 1. Environment Variables
- Never commit `.env` file
- Use strong passwords
- Rotate secrets regularly

### 2. Database Security
- Use strong database passwords
- Limit database user privileges
- Enable SSL for database connections in production

### 3. JWT Secret
Generate strong secret:
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. HTTPS
Always use HTTPS in production:
- Use Let's Encrypt (free SSL)
- Force HTTPS redirects
- Use secure cookies

### 5. CORS
Update CORS origin to your production domain:
```env
CORS_ORIGIN=https://yourdomain.com
```

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Check MySQL status
sudo systemctl status mysql

# Check if database exists
mysql -u root -p -e "SHOW DATABASES;"

# Test connection
mysql -u gymuser -p gymproject
```

### Port Already in Use
```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill process
sudo kill -9 <PID>
```

### PM2 Issues
```bash
# Check PM2 status
pm2 status

# View logs
pm2 logs gymproject

# Restart app
pm2 restart gymproject
```

### Nginx Issues
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Restart Nginx
sudo systemctl restart nginx
```

## 📊 Monitoring

### PM2 Monitoring
```bash
# Monitor in real-time
pm2 monit

# View logs
pm2 logs

# Restart on crash
pm2 start Gymproject/server.js --name gymproject --max-restarts 10
```

### Database Backup
```bash
# Backup database
mysqldump -u gymuser -p gymproject > backup_$(date +%Y%m%d).sql

# Restore database
mysql -u gymuser -p gymproject < backup_20240101.sql
```

## 🔄 Updates & Maintenance

### Update Application
```bash
cd /var/www/gymproject
git pull
npm install --production
pm2 restart gymproject
```

### Update Dependencies
```bash
npm update
npm audit fix
```

## 📞 Support

If you face any issues during deployment:
1. Check server logs: `pm2 logs gymproject`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Check database connection
4. Verify environment variables
5. Check firewall settings

---

**Happy Deploying! 🚀**

