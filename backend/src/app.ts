import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config";
import authRoutes from "./routes/authRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/dashboard-data", dashboardRoutes);
app.get("/", (req, res) => {
	res.send("API running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
