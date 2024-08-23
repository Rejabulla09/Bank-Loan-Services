import mongoose from "mongoose";


const schema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },

    loan_name : {
        type : String,
        default : "Education Loan"
    },

    user_name : {
        type : String,
        required : true, 
    },

    father_name : {
        type : String,
        required : true,
    },

    father_occupation : {
        type : String,
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

    School_name : {
        type : String,
        required : true
    },

    standard : {
        type : String,
        required : true
    },

    lastYear_percentage : {
        type : Number,
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

export const EducationLoan = mongoose.model("educationloan",schema);