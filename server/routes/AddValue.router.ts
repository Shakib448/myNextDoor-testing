import express from "express";
import { addValue ,getValue} from "@controllers/AddValue.controller";


const router = express.Router();

router.route("/").post(addValue).get(getValue);

export default router;
