import mongoose from "mongoose";


const schema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true,
    },

    loan_name : {
        type : String,
        default : "Home Loan"
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

    requested_amount : {
        type : Number,
        required : true
    },

    loan_amount_paid : {
        type : Number,
        default : 0
    },

    loan_amount_pending : {
        type : Number,
        default : 0,
    },

    total_EMI : {
        type : Number,
        default : 0,
    },

    loan_period : {
        type : Number,
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

export const HomeLoan = mongoose.model("homeloan",schema);