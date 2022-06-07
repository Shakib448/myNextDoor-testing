import express from "express";
import {
  addValue,
  getValue,
  getValueById,
  addDetails,
} from "@controllers/AddValue.controller";

const router = express.Router();

router.route("/").post(addValue).get(getValue);
router.route("/:id").get(getValueById).post(addDetails);

export default router;
