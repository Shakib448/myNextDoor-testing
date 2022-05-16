// @ts-nocheck
import { connectDB } from "@config/db";
import express, { Express } from "express";
import addValueRoutes from "@routes/AddValue.router";
import cors from "cors";
import compression from "compression";
import morgan from "morgan";

const app: Express = express();

app.use(morgan("dev"));
// middleware
app.use(express.json());
app.use(cors());
app.use(compression());

// routes
app.use("/api/add-value", addValueRoutes);

connectDB().catch((err) => console.log(err));

export default app;
