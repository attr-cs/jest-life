const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendContactNotification = async (contactData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Contact Form Submission',
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${contactData.name}</p>
      <p><strong>Email:</strong> ${contactData.email}</p>
      <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
      <p><strong>Institution:</strong> ${contactData.institution || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${contactData.message}</p>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact notification email sent');
  } catch (error) {
    console.error('Error sending contact notification:', error);
    throw error;
  }
};

const sendFeedbackNotification = async (feedbackData) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Feedback Submission',
    html: `
      <h2>New Feedback Submission</h2>
      <p><strong>Name:</strong> ${feedbackData.name}</p>
      <p><strong>Email:</strong> ${feedbackData.email}</p>
      <p><strong>Phone:</strong> ${feedbackData.phone || 'Not provided'}</p>
      <p><strong>Institution:</strong> ${feedbackData.institution || 'Not provided'}</p>
      <p><strong>Rating:</strong> ${'★'.repeat(feedbackData.rating)}${'☆'.repeat(5-feedbackData.rating)}</p>
      <p><strong>Testimonial:</strong></p>
      <p>${feedbackData.message}</p>
      <p><em>Submitted on: ${new Date().toLocaleString()}</em></p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Feedback notification email sent');
  } catch (error) {
    console.error('Error sending feedback notification:', error);
    throw error;
  }
};

module.exports = {
  sendContactNotification,
  sendFeedbackNotification
}; 