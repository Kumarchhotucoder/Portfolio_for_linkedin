const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required.' });
  }

  try {
    // Create a transporter using your email service (e.g., Gmail)
    // IMPORTANT: In a real app, you should use environment variables for user/pass
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'chhotu6826@gmail.com', // Replace with your email or use .env
        pass: process.env.EMAIL_PASS || 'your_app_password_here' // Replace with your app password or use .env
      }
    });

    const mailOptions = {
      from: email,
      to: 'chhotu6826@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message from ' + name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    // Note: This will fail until the user provides a real EMAIL_PASS
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please check server configuration.' });
  }
});

module.exports = router;
