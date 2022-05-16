// @ts-nocheck
import { connectDB } from "@config/db";
import express, { Express } from "express";
import addValueRoutes from "@routes/AddValue.router";

const app: Express = express();

app.use(express.json());
app.use("/api/add-value", addValueRoutes);

connectDB().catch((err) => console.log(err));

export default app;
