const express = require('express');
const session = require('express-session');
const app = express();

// Middleware setup

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true, // Set the cookie as HTTP-only, Optional
    maxAge: 60*30 // In secs, Optional
  }

}));


