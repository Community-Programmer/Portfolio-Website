import { Router } from "express";
import { getTheme } from "./themeContoller";

const router = Router();

router.get("/", getTheme);

export default router;