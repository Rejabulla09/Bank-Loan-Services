import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { applyEducationLoan } from "../controllers/educationLoan.js";

const router = express.Router();

router.post("/applyEducationLoan",isAuthenticated,applyEducationLoan);

export default router;