// @ts-nocheck
import { connectDB } from "@config/db";
import express, { Express } from "express";
import { notFound, errorHandler } from "@middleware/errorMiddleware";

const app: Express = express();

app.use(express.json());

app.use(notFound());
app.use(errorHandler());

connectDB().catch((err) => console.log(err));

export default app;
