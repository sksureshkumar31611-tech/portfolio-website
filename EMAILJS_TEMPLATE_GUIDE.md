# EmailJS Template Creation Guide

## 📧 Step-by-Step Template Setup

### **🚀 Step 1: Login to EmailJS**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Login" → Enter your credentials
3. You'll see your dashboard

---

### **📧 Step 2: Create Email Service**
1. **Click "Email Services"** in left menu
2. **Click "Add New Service"** button
3. **Select "Gmail"** from the list
4. **Click "Connect Service"**
5. **Choose your Gmail account**
6. **Allow permissions** when prompted
7. **Service Name**: Enter `gmail`
8. **Click "Create Service"**

✅ **Result**: You'll see "gmail" in your services list

---

### **📝 Step 3: Create Email Template**
1. **Click "Email Templates"** in left menu
2. **Click "Create New Template"** button
3. **Fill Template Details**:

#### **Template Information:**
- **Template Name**: `template_abc123`
- **Subject**: `New Contact Form Message from {{from_name}}`

#### **Email Content** (copy exactly):
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Message: {{message}}

Reply to: {{reply_to}}
```

#### **Template Variables** (auto-generated):
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email

4. **Click "Save"** button
5. **Click "Create Template"** to confirm

✅ **Result**: Template `template_abc123` created successfully

---

### **🔑 Step 4: Get Your API Key**
1. **Click "Account"** in left menu (bottom)
2. **Click "API Keys"** tab
3. **Copy your Public Key** (starts with "Bf...")
4. **Keep this key secure** - don't share publicly

---

### **⚙️ Step 5: Update Your Website**
1. **Open `script.js` file**
2. **Find this line**:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
```
3. **Replace `YOUR_PUBLIC_KEY`** with your actual key
4. **Save the file**

**Example**:
```javascript
emailjs.init("Bf1234567890abcdefghijklmnopqrstuvwxyz"); // Your actual key
```

---

### **🧪 Step 6: Test Your Contact Form**
1. **Open your portfolio website**
2. **Navigate to Contact section**
3. **Fill out the form**:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test message
4. **Click "Send Message"**
5. **Check your Gmail inbox**
6. **Look for email** from EmailJS

✅ **Success**: You should receive the test message!

---

## 📋 Template Structure Reference

### **Required Variables:**
```javascript
{
    from_name: "John Doe",
    from_email: "john@example.com", 
    subject: "Test Subject",
    message: "This is my message",
    to_email: "ureshkumar31611@gmail.com",
    reply_to: "john@example.com"
}
```

### **Email Template Variables:**
- `{{from_name}}` → John Doe
- `{{from_email}}` → john@example.com
- `{{subject}}` → Test Subject  
- `{{message}}` → This is my message
- `{{reply_to}}` → john@example.com

---

## 🔧 Troubleshooting

### **❌ "Email sending failed"**
1. **Check API key** in script.js
2. **Verify service name** is `gmail`
3. **Confirm template name** is `template_abc123`
4. **Check Gmail permissions**

### **❌ "Template not found"**
1. **Go to Email Templates**
2. **Verify template name** matches exactly
3. **Check template is active**
4. **Refresh browser cache**

### **❌ "Service not found"**
1. **Go to Email Services**
2. **Verify service name** is `gmail`
3. **Check service is active**
4. **Recreate if necessary**

---

## ✅ Final Checklist

- [ ] EmailJS account created
- [ ] Gmail service named `gmail` created
- [ ] Template named `template_abc123` created
- [ ] API key copied to script.js
- [ ] Contact form tested
- [ ] Test email received

---

## 🎯 What You'll Get

✅ **Real email delivery** to ureshkumar31611@gmail.com  
✅ **Professional contact form** that actually works  
✅ **Sender information** included in emails  
✅ **Reply functionality** for easy responses  
✅ **Error handling** with user feedback  

Your contact form will be fully functional after following these steps! 🎉
