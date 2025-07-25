const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tasknest91@gmail.com', // Your email
        pass: 'ekqk rbkm zogp xuyv'    // Your Gmail App Password
    }
});

// POST route to handle email sending
app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Email options
    const mailOptions = {
        from: 'tasknest91@gmail.com', // Sender's email
        to: 'tasknest91@gmail.com',   // Replace with your recipient email
        subject: `New Message from ${name}`,
        text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully!');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email.');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
