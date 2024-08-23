import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    phone : {
        type : Number,
        required : true
    },

    pan : {
        type : String,
        required : true
    },

    balance : {
        type : Number,
        default : 0
    },

    password : {
        type : String,
        required : true,
        select : false
    },

    createdAt : {
        type : Date,
        default : Date.now,
    },

    no_of_loans : {
        type : Number,
        default : 0
    },

    loans : {
        type : [],
    },

    transfer_Hist : {
        type : [],
    }
});

export const User = mongoose.model("user",schema);