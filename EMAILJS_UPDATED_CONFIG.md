# 📧 EmailJS Updated Configuration

## 🆕 Your New EmailJS Configuration

### **Updated Service Details:**
- **Service ID**: `service_3et1287`
- **Template ID**: `template_mgd8ftq`
- **Public Key**: `EqkMWfZss4OA2r6iC`
- **Recipient Email**: `ureshkumar31611@gmail.com`

## ✅ **Configuration Updated in Code**

### **JavaScript (script.js):**
```javascript
await emailjs.send("service_3et1287", "template_mgd8ftq", {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    reply_to: email
});
```

## 🎯 **What This Changes:**

### **✅ Updated Service:**
- **Old**: `service_qb3m2yf`
- **New**: `service_3et1287`

### **✅ Updated Template:**
- **Old**: `template_abc123`
- **New**: `template_mgd8ftq`

### **✅ Same Configuration:**
- **Public Key**: `EqkMWfZss4OA2r6iC` (unchanged)
- **Recipient Email**: `ureshkumar31611@gmail.com` (unchanged)

## 🔄 **Next Steps:**

### **1. Test Contact Form:**
1. Open your portfolio: `index.html`
2. Go to Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check if email arrives at `ureshkumar31611@gmail.com`

### **2. Verify EmailJS Service:**
- Login to EmailJS dashboard
- Confirm service `service_3et1287` is active
- Verify template `template_mgd8ftq` exists
- Check email routing is correct

## 📋 **Contact Form Fields:**

The form sends these parameters to your template:
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Message subject
- `message` - Message content
- `reply_to` - Reply-to email (same as sender)

## 🔧 **Template Setup:**

Your EmailJS template `template_mgd8ftq` should include:
- **To**: `ureshkumar31611@gmail.com`
- **From**: `{{from_name}} <{{from_email}}>`
- **Subject**: `{{subject}}`
- **Content**: Include `{{message}}` and `{{from_email}}`

## 🎉 **Ready to Test!**

Your contact form now uses the updated EmailJS configuration. Test it to ensure emails are being sent correctly to your inbox!
