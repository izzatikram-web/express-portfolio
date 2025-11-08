const express = require('express');
const router = express.Router();

// Home
router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

// About
router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// Projects (client-side renders the cards; no server variable required)
router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects' });
});

// Contact (simple form to Formspree; no server variable required)
router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
