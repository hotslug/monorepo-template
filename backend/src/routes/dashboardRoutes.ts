import { Router } from "express";
import { getDashboardData } from "../controllers/dashboardController";
import { protect } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", protect, getDashboardData); // Protect this route

export default router;
