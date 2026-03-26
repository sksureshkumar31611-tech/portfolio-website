# EmailJS Setup Guide

## 📧 How to Make Your Contact Form Work

Your contact form is now configured to actually send emails to your Gmail address using EmailJS service.

## 🚀 Quick Setup (5 minutes)

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Create Email Service**
1. Click "Add New Service"
2. Service Name: `gmail`
3. Connect your Gmail account
4. Follow the verification steps

### **Step 3: Create Email Template**
1. Click "Add New Template"
2. Template Name: `template_abc123`
3. Template Content:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Message: {{message}}

Reply to: {{reply_to}}
```

### **Step 4: Get Your Keys**
1. Go to Account → API Keys
2. Copy your **Public Key**
3. Replace `YOUR_PUBLIC_KEY` in script.js

### **Step 5: Update script.js**
Open `script.js` and replace:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
```

## ✅ After Setup

Your contact form will:
- Send emails directly to `ureshkumar31611@gmail.com`
- Show sender's name and email
- Include subject and message
- Provide success/error notifications

## 🎯 Benefits

✅ **Real email delivery** - No more simulation  
✅ **Professional appearance** - Works like real contact forms  
✅ **Mobile responsive** - Works on all devices  
✅ **Error handling** - Shows success/failure messages  
✅ **Spam protection** - EmailJS handles security  

## 🔧 Features

- **Form validation** - Checks all fields
- **Email validation** - Verifies email format
- **Loading states** - Shows "Sending..." while processing
- **Success notifications** - Confirms message sent
- **Form reset** - Clears after successful send

## 📱 Testing

1. Open your portfolio
2. Fill out the contact form
3. Send a test message
4. Check your Gmail inbox

Your contact form will be fully functional! 🎉
