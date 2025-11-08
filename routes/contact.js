const express = require('express');
const router = express.Router();

// GET /contact
router.get('/', (req, res) => {
  res.render('contact', { title: 'Contact', active: 'contact', flash: null });
});

// POST /contact (optional demo)
router.post('/', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).render('contact', {
      title: 'Contact',
      active: 'contact',
      flash: 'All fields are required.'
    });
  }
  res.render('contact', {
    title: 'Contact',
    active: 'contact',
    flash: 'Thanks! I’ll get back to you soon.'
  });
});

module.exports = router;
