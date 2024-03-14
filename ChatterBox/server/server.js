const express = require('express');
const session = require('express-session');
const db = require('./config/connection'); 
const routes = require('./controllers'); 
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const sess = {
    secret: 'secret',
    cookie: {}, 
    resave: false,
    saveUninitialized: true,
}

// Express session middleware
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Once the database connection is open, start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
    app.use(routes);
});
