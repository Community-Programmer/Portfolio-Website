import { Router } from "express";
import { getSkills } from "./SkillController";


const router = Router();

router.get("/", getSkills);

export default router;