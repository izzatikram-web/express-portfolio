// app.js — Final working version

const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// --- Middleware ---
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- View Engine Setup ---
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout');

// Safe defaults so EJS never sees undefined vars
app.use((req, res, next) => {
  if (typeof res.locals.title === 'undefined')  res.locals.title  = '';
  if (typeof res.locals.active === 'undefined') res.locals.active = '';
  next();
});

// --- Routes ---

// Home
app.get('/', (req, res) => {
  res.render('index', { title: 'Home', active: 'home' });
});

// About
app.get('/about', (req, res) => {
  res.render('about', { title: 'About', active: 'about' });
});

// Projects
app.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

// Contact (GET)
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', active: 'contact', flash: null });
});

// Contact (POST)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).render('contact', {
      title: 'Contact',
      active: 'contact',
      flash: 'All fields are required.',
    });
  }

  res.render('contact', {
    title: 'Contact',
    active: 'contact',
    flash: 'Thanks! Your message has been sent.',
  });
});

// --- 404 (Not Found) ---
app.use((req, res) => {
  res.status(404).render('error', { title: 'Not Found' });
});

// --- General Error Handler ---
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).render('error', { title: 'Error' });
});

module.exports = app;
