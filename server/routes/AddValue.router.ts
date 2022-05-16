import { addValue } from "@controllers/AddValue.controller";
import express from "express";

const router = express.Router();

router.route("/").post(addValue);

export default router;
