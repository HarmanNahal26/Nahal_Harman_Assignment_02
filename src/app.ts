import express, { Express } from "express";
import morgan from 'morgan';

// Initialize Express application
const app: Express = express();

// Morgan middleware to log HTTP requests
app.use(morgan('dev'));

// Built-in middleware to parse JSON bodies
app.use(express.json());

export default app;