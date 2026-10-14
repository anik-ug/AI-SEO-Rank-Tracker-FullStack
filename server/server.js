import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import rankRouter from "./routes/rankRoutes.js";
import analysisRouter from "./routes/analysisRoutes.js";
import { startRankTrackingCron } from "./cron/rankTrackingCron.js";
import contactRouter from "./routes/contactRoutes.js";

dotenv.config({ path: join(dirname(fileURLToPath(import.meta.url)), "../.env") });

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/auth", authRouter);
app.use("/api/rank", rankRouter);
app.use("/api/analysis", analysisRouter);
app.use("/api/contact", contactRouter);

// Start cron jobs
startRankTrackingCron();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
