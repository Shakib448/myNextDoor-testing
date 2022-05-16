// @ts-nocheck
import { connectDB } from "@config/db";
import express, { Express } from "express";

const app: Express = express();

app.use(express.json());

connectDB().catch((err) => console.log(err));

export default app;
