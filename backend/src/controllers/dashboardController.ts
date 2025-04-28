import { Request, Response } from "express";

export const getDashboardData = (req: Request, res: Response) => {
	res.json({
		message: "Welcome to your dashboard, " + req.user?.id,
	});
};
