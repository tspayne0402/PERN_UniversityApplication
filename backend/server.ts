// This is the main entry point for the backend application and is where the Express server is initialised and configured.

import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';


dotenv.config(); // Loads environment variables

const app: Application = express();
const PORT: number = Number(process.env.PORT ?? 5000);

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

// TODO: Add other API routes.

// Error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://${PORT}`);
});

export default app;