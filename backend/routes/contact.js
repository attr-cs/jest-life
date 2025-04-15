const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendContactNotification } = require('../utils/emailService');

// Submit contact form
router.post('/', async (req, res) => {
  try {
    // Save to database
    const contact = new Contact(req.body);
    await contact.save();

    // Send email notification
    await sendContactNotification(req.body);

    res.status(201).json({ 
      success: true,
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error sending message. Please try again later.' 
    });
  }
});

module.exports = router; 