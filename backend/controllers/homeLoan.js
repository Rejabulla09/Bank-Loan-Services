
import {HomeLoan} from "../models/homeLoan.js"
import { Loan } from "../models/loan.js";

export const applyHomeLoan = async(req,res) =>{

    const {loan_name , user_name , D_O_B , address, phn, requested_amount, loan_period} = req.body;

    try {

        const user = req.user;

        // if(user.no_of_loans == 1 ){
        //     return res.json({
        //         message : "You already have a loan you can't apply for a 2nd loan now",
        //     })
        // }

        // if(user.balance < 5000){
        //     return res.json({
        //         message : "You should atleast have 5000 in your account everytime"
        //     })
        // }

        const loan = await HomeLoan.create({
            loan_name,
            user_name,
            D_O_B,
            address,
            phn,
            requested_amount,
            loan_period,
            userId : req.user,
        })

        

        user.loans.push(loan);
        user.no_of_loans += 1;

        loan.total_EMI = requested_amount / loan_period ;

        await loan.save();
        await user.save();

        res.status(201).json({
            message : "Thank You For applying, Your loan request has been successfully granted. We'll give you a message after some time. ",
            success : true,
            loan
        })

        
    } catch (error) {
        console.log(error);
        res.json({
            message : "error"
        })
    }


}



export const allHomeLoans = async(req,res) =>{

    const loans =  await HomeLoan.find({});

    res.json({
        loans
    })

}


export const approveLoan = async(req,res) =>{

    const { id } = req.body;

    const loan = await HomeLoan.findById(id);

    if(!loan){
        return res.json({
            message : "No loan Found"
        })
    }

    // console.log(loan);

    loan.status = "approved";

    await loan.save();

    res.json({
        message : "Loan Approved",
    })
}


export const rejectLoan = async(req,res) =>{

    const { id } = req.body;

    const loan = await HomeLoan.findById(id);

    // console.log(loan);

    loan.status = "rejected";

    await loan.save();

    res.json({
        message : "Loan Rejected",
    })
}

export const payEmi = async(req,res) =>{

    const { id,amount } = req.body;

    const loan = await HomeLoan.findById(id);

    if(amount > loan.requested_amount){
        return res.json({
            message : "Loan amount is lesser then that , enter a valid amount"
        })
    }


    loan.loan_amount_paid += Number(amount);

    loan.loan_amount_pending = loan.requested_amount - amount;

    
    if(amount > loan.loan_amount_pending){
        return res.json({
            message : "The pending loan amount is lesser then the amount you entered"
        })
    }

    await loan.save();

    res.json({
        message : "Emi payed",
    })

}