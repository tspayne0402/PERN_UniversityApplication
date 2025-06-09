// This is the main entry point for the backend application and is where the Express server is initialised and configured.

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Loads environment variables

const app = express();
const PORT = process.env.PORT | 5000;

// Enable CORS for all routes. Allows for the controlled sharing of resources between different web pages.
app.use(cors());

// Uses express to parse incoming requests with JSON payloads.
app.use(express.json());

app.get('/', (req, res) => {
    res.send('University & Career Navigator API is running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${PORT}`);
})