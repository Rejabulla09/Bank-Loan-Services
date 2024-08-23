import express from "express";
import { User } from "../models/user.js";
import { addmoney, debitmoney, findLoans, getAllUsers, getMyProfile, login, logout, register, transferMoney } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import {  adminLogin, adminUpdate } from "../controllers/admin.js";


const router = express.Router();

router.get("/all",getAllUsers)

 router.post("/new",register)


 router.post("/login",login)

 router.get("/logout",logout)

 router.get("/allLoans",isAuthenticated,findLoans)

 router.post("/adminlogin",adminLogin)
 
//  router.get("/adminlogin2",isAuthenticated,adminLogin2)

 router.post("/admin/action",isAuthenticated,adminUpdate);

 router.put("/credit",isAuthenticated,addmoney)

 router.put("/debit",isAuthenticated,debitmoney)

 router.post("/transfer",isAuthenticated,transferMoney);

 //through query
// router.get("/userid",getUserDetails2)

//dynamic id
router.get("/me",isAuthenticated,getMyProfile)
// router.get("/userid/:id",getMyProfile)

export default router;