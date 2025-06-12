// This is the main entry point for the backend application and is where the Express server is initialised and configured.

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');


require('dotenv').config(); // Loads environment variables

const app = express();

// Enable CORS for all routes. Allows for the controlled sharing of resources between different web pages.
app.use(cors());
// Uses express to parse incoming requests with JSON payloads.
app.use(express.json());
// Enable helmet for security related HTTP headers.
app.use(helmet());
// Enable mrogan to use as a HTTP request logger
app.use(morgan('dev'));
// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true}))

app.get('/', (req, res) => {
    res.json({ message: 'University & Career Navigator API is running!' });
});

const PORT: number = Number(process.env.PORT ?? 5000);

app.listen(PORT, () => {
    console.log(`Server is running on http://${PORT}`);
})