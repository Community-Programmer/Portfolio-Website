import { Router } from "express";
import { createTimeline, getTimeline } from "./TimelineController";


const router = Router();

router.get("/", getTimeline);
// router.post("/", createTimeline);

export default router;