import express, { Express } from "express";
import morgan from 'morgan';
import healthRoutes from "./api/v1/routes/healthRoutes";
import ticketRoutes from "./api/v1/routes/ticketRoutes";

// Initialize Express application
const app: Express = express();

// Morgan middleware to log HTTP requests
app.use(morgan('dev'));

// Built-in middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", healthRoutes);
app.use("/api/v1", ticketRoutes);

export default app;