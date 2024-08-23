import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { applyPersonalLoan } from "../controllers/personalLoan.js";


const router = express.Router();

router.post("/applyPersonalLoan",isAuthenticated,applyPersonalLoan)

export default router;