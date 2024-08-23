
import express from "express";
import {isAuthenticated} from "../middlewares/auth.js"
import { applyCarLoan } from "../controllers/carLoan.js";

const router = express.Router();

router.post("/applyCarLoan",isAuthenticated,applyCarLoan);

export default router;