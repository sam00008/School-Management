import { addSchool, listSchool } from "../controller/school.controller.js";
import { Router } from "express";

const router = Router();

router.route("/addSchool").post(addSchool);
router.route("/listSchool").get(listSchool);

export default router;