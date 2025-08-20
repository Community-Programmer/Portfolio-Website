import express from "express";
import { config } from "dotenv";
import profileRoutes from "./Profile/profileRoutes"
import themeRoutes from "./Theme/themeRoute";
import skillRoutes from "./Skill/SkillRoutes";
import globalErrorHandler from "./middleware/globalErrorHandler";
import cors from "cors";

config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
}); 

app.use("/api/v1/profile", profileRoutes);
app.use("/api/v1/theme", themeRoutes);
app.use("/api/v1/skills", skillRoutes);
app.use(globalErrorHandler);

export default app;