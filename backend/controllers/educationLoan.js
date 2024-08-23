import { EducationLoan } from "../models/educationLoan.js";


export const applyEducationLoan = async(req,res) =>{

    const {loan_name , user_name ,father_name,father_occupation,School_name,lastYear_percentage,standard, D_O_B , address, phn, requested_amount, loan_period} = req.body;

    try {

        const loan = await EducationLoan.create({
            loan_name,
            user_name,
            father_name,
            father_occupation,
            School_name,
            standard,
            lastYear_percentage,
            D_O_B,
            address,
            phn,
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