import express from "express";
import userRouter from "./routes/user.js"
import taskRouter from "./routes/task.js"
import homeLoanRouter from "./routes/homeLoan.js"
import carLoanRouter from "./routes/carLoan.js"
import educationLoanRouter from "./routes/educationLoan.js"
import personalLoanRouter from "./routes/personalLoan.js"
import {config} from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

config({
    path : "./data/config.env",
})

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET","POST","PUT","DELETE"],
    credentials : true
}));

app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",taskRouter);
app.use("/api/v1/Homeloans",homeLoanRouter);
app.use("/api/v1/Carloans",carLoanRouter);
app.use("/api/v1/Educationloans",educationLoanRouter);
app.use("/api/v1/Personalloans",personalLoanRouter);

// app.use("/api/v1/loans",loanRouter);




app.get("/" , (req,res) =>{
    res.send("nice");
})




