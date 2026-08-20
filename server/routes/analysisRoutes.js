import express from "express";
import auth from "../middleware/auth.js";
import { analyzeUrl, deleteAnalysis, getAnalyses, getAnalysis,getDailyUsage } from "../controllers/analysisController.js";

const analysisRouter = express.Router();

analysisRouter.post("/analyze", auth, analyzeUrl);
analysisRouter.get("/list", auth, getAnalyses);
analysisRouter.get("/:id", auth, getAnalysis);
analysisRouter.delete("/:id", auth, deleteAnalysis);
analysisRouter.get("/daily-usage", auth, getDailyUsage);

export default analysisRouter;
