const express = require('express');
const session = require('express-session');
const db = require('./config/connection'); 
const routes = require('./controllers'); 
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');

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
app.use(cors({origin: true}));

// Once the database connection is open, start the server
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
    app.use(routes);
});

// Placeholder authentication middleware
app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const userAuth = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: { "private-Key": process.env.CHAT_ENGINE_PRIVATE_KEY}}
        )
    return res.status(200).json(userAuth.data);
        } catch (e) {
            console.error(e); // Log the full error
            if (e.response) {
                console.error(e.response.data);
                return res.status(e.response.status).json({ error: e.response.data });
            }
            return res.status(400).json({ error: "Error creating user" });
        }
});