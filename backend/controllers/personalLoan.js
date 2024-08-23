import { PersonalLoan } from "../models/personalLoan.js";



export const applyPersonalLoan = async(req,res) =>{

    const {loan_name , user_name , D_O_B ,Reason, address, phn, requested_amount, loan_period} = req.body;

    try {

        const loan = await PersonalLoan.create({
            loan_name,
            user_name,
            D_O_B,
            address,
            phn,
            Reason,
            requested_amount,
            loan_period,
            userId : req.user,
        })

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