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

app.post('/login', (req, res) => {

const { username, password } = req.body;
const user = users.find(u => u.username === username && u.password === password);

if (user) {
    req.session.userId = user.id; // Store user ID in session
    res.send('Login successful');

  } else {
    res.status(401).send('Invalid login credentials');
  }

});
app.get('/home', (req, res) => {

        if (req.session.userId) {
    // User is authenticated
    res.send(Welcome to the Home page, 
        User </span><span class="p">${
                                    </span><span class="nx">req</span><span class="p">
                                          .</span><span class="nx">session</span>  
                                                                        <span class="p">.</span><span class="nx">userId</span><span class="p">}</span><span class="s2">!);

              } 
      else {
    // User is not authenticated
    res.status(401).send('Unauthorized');

  }
});

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.status(500).send('Error logging out');
    } else {
      res.redirect('/'); // Redirects to the home page after logout
    }
  });

});






