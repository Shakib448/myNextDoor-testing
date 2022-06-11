import express from "express";
import {
  addDetails,
  addValue,
  deleteValue,
  getValue,
  getValueById,
} from "@controllers/AddValue.controller";

const router = express.Router();

router.route("/").post(addValue).get(getValue);
router.route("/:id").get(getValueById).post(addDetails);
router.route("/delete/:id").delete(deleteValue);

export default router;
