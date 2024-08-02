const express = require("express");
const router = express.Router();
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    await transporter.sendMail({
      from: email, // Use the email provided by the user as the sender
      to: "support@zunim.com.ng", // Email address of the recipient (admin)
      subject: subject || "Contact Form Submission", // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Plain text body
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`, // HTML body
    });

    res.status(200).json({ message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send contact form" });
  }
});

module.exports = router;
