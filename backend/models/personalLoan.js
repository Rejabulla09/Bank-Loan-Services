import mongoose from "mongoose";


const schema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },

    loan_name : {
        type : String,
        default : "Personal Loan"
    },

    user_name : {
        type : String,
        required : true, 
    },

    D_O_B : {
        type  : String,

    },

    address : {
        type : String,
    },

    phn : {
        type : Number,
    },

    Reason : {
        type : String,
        required : true
    },

    requested_amount : {
        type : Number,
        required : true
    },

    loan_period : {
        type : Date,
        required : true
    },  

    // amount_paid : {
    //     type : Number,
    //     default : 
    // },

    status :{
        type : String,
        default : "pending"
    }
})

export const PersonalLoan = mongoose.model("personalloan",schema);