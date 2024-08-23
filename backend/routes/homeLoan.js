
import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { allHomeLoans, applyHomeLoan, approveLoan, payEmi, rejectLoan } from "../controllers/homeLoan.js";

const router = express.Router();

router.post("/applyHomeLoan",isAuthenticated,applyHomeLoan);
router.get("/all",isAuthenticated,allHomeLoans);
router.put("/approve",isAuthenticated,approveLoan);
router.put("/reject",isAuthenticated,rejectLoan);
router.put("/emi",isAuthenticated,payEmi);

export default router;