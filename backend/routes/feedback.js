const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const { sendFeedbackNotification } = require('../utils/emailService');

// Submit feedback
router.post('/', async (req, res) => {
  try {
    // Save to database
    const feedback = new Feedback(req.body);
    await feedback.save();

    // Send email notification
    await sendFeedbackNotification(req.body);

    res.status(201).json({ 
      success: true,
      message: 'Feedback submitted successfully!' 
    });
  } catch (error) {
    console.error('Feedback submission error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Error submitting feedback. Please try again later.' 
    });
  }
});

module.exports = router; 