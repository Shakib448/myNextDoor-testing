import express from "express";
import {
  updateDetails,
  addValue,
  deleteValue,
  getValue,
  getValueById,
} from "@controllers/AddValue.controller";

const router = express.Router();

router.route("/").post(addValue).get(getValue);
router.route("/:id").get(getValueById).put(updateDetails);
router.route("/delete/:id").delete(deleteValue);

export default router;
