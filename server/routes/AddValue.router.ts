import express from "express";
import {
  addValue,
  getValue,
  getValueById,
} from "@controllers/AddValue.controller";

const router = express.Router();

router.route("/").post(addValue).get(getValue);
router.route("/:id").get(getValueById);

export default router;
