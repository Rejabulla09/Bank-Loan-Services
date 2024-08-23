
import {CarLoan} from "../models/carLoan.js"
import { User } from "../models/user.js";

export const applyCarLoan = async(req,res) =>{

    const {loan_name , user_name , D_O_B , address, phn, requested_amount, loan_period, car_name } = req.body;

    try {

        const user = req.user;

        if(user.no_of_loans == 1 ){
            return res.json({
                message : "You already have a loan you can't apply for a 2nd loan now",
            })
        }

        if(user.balance < 5000){
            return res.json({
                message : "You should atleast have 5000 in your account everytime"
            })
        }

        const loan = await CarLoan.create({
            loan_name,
            user_name,
            D_O_B,
            address,
            phn,
            requested_amount,
            loan_period,
            car_name,
            userId : req.user,
        })


        user.no_of_loans += 1;

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


export const approveCarLoan = async(req,res) =>{

 

}