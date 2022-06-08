import express from "express";
import {
  addDetails,
  addValue,
  getValue,
  getValueById,
} from "@controllers/AddValue.controller";

const router = express.Router();

router.route("/").post(addValue).get(getValue);
router.route("/:id").get(getValueById).post(addDetails);

export default router;
