import { Router } from "express";
import { getProfile } from "./profileController";

const router = Router();

router.get("/", getProfile);

export default router;