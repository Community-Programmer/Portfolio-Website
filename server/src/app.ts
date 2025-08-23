import express from "express";
import { config } from "dotenv";
import profileRoutes from "./Profile/profileRoutes"
import themeRoutes from "./Theme/themeRoute";
import skillRoutes from "./Skill/SkillRoutes";
import projectRoutes from "./Project/ProjectRoutes";
import timelineRoutes from "./Timeline/TimelineRoutes";
import contactRoutes from "./Contact/ContactRoutes";
import globalErrorHandler from "./middleware/globalErrorHandler";
import cors from "cors";

config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
}); 

app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/theme", themeRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/timeline", timelineRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use(globalErrorHandler);

export default app;