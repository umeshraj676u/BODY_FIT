# ✅ Deployment Checklist - Fitness Tracker

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
- [ ] Node.js installed (v14+)
- [ ] MySQL installed and running
- [ ] `.env` file created with all variables
- [ ] Dependencies installed (`npm install`)
- [ ] Database created in MySQL

### 2. Configuration
- [ ] Database credentials updated in `.env`
- [ ] JWT_SECRET changed to strong random string
- [ ] Razorpay keys updated (if using payments)
- [ ] CORS_ORIGIN updated for production domain
- [ ] Port configured (default: 3000)

### 3. Code Updates
- [x] Environment variables setup
- [x] Database config uses env variables
- [x] JWT secret uses env variables
- [x] Razorpay config uses env variables
- [x] CORS configured properly
- [x] Error handling middleware added

### 4. Security
- [ ] Strong JWT secret generated
- [ ] Strong database password set
- [ ] `.env` file in `.gitignore`
- [ ] Sensitive data not hardcoded
- [ ] HTTPS configured (for production)

### 5. Testing
- [ ] Server starts without errors
- [ ] Database connection works
- [ ] Frontend loads correctly
- [ ] Login/Register works
- [ ] API endpoints tested
- [ ] Admin dashboard accessible

## 🚀 Deployment Steps

### Local Testing First
```bash
# 1. Install dependencies
npm install

# 2. Create .env file (copy from .env.example)
# Edit .env with your credentials

# 3. Create database
mysql -u root -p
CREATE DATABASE gymproject;

# 4. Start server
npm start

# 5. Test in browser
http://localhost:3000
```

### Production Deployment

#### Option 1: VPS (Ubuntu)
- [ ] Server setup (Node.js, MySQL, Nginx)
- [ ] Database created
- [ ] Project files uploaded
- [ ] Dependencies installed
- [ ] PM2 installed and configured
- [ ] Nginx configured
- [ ] SSL certificate installed
- [ ] Firewall configured
- [ ] Domain DNS configured

#### Option 2: Heroku
- [ ] Heroku CLI installed
- [ ] Heroku app created
- [ ] Database addon added
- [ ] Environment variables set
- [ ] App deployed
- [ ] Domain configured (optional)

#### Option 3: Railway/Render
- [ ] Account created
- [ ] Project connected
- [ ] Database service added
- [ ] Environment variables set
- [ ] Auto-deployment enabled

## 📝 Post-Deployment

### Verification
- [ ] Website accessible
- [ ] All pages load correctly
- [ ] Database connection working
- [ ] Login/Register functional
- [ ] Admin dashboard accessible
- [ ] API endpoints working
- [ ] Payment integration tested (if applicable)
- [ ] Videos loading correctly
- [ ] Images loading correctly

### Monitoring
- [ ] Server logs monitored
- [ ] Error logs checked
- [ ] Database backups scheduled
- [ ] Uptime monitoring setup
- [ ] Performance monitoring setup

### Maintenance
- [ ] Backup strategy in place
- [ ] Update procedure documented
- [ ] Rollback plan ready
- [ ] Support contact information

## 🐛 Troubleshooting

### Common Issues
- [ ] Database connection errors → Check credentials
- [ ] Port already in use → Change PORT in .env
- [ ] CORS errors → Update CORS_ORIGIN
- [ ] JWT errors → Check JWT_SECRET
- [ ] Static files not loading → Check file paths
- [ ] Videos not loading → Check video directory path

## 📞 Support

If you need help:
1. Check logs: `pm2 logs gymproject`
2. Check database connection
3. Verify environment variables
4. Check file permissions
5. Review error messages

---

**Ready to Deploy! 🚀**

Fill this checklist before deploying to ensure everything is configured correctly.

