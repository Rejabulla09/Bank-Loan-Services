import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendcookie } from "../utils/features.js";
import {CarLoan} from "../models/carLoan.js"
import jwt from "jsonwebtoken";


export const getAllUsers = () =>{

}

export const login = async(req,res) =>{

    const {email,password} = req.body;

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return res.status(401).json({
            success : false,
            message : "Invalid email or password",
        })
    }


    const ismatch = await bcrypt.compare(password,user.password);
    // console.log(ismatch);

    if(!ismatch){
        return res.status(401).json({
            success : false,
            message : "Password not matched",
        })
    }

    sendcookie(user,res,201,`welcome back ${user.name}`);

}

export const register = async(req,res) =>{

   


    const {name, email, password, phone, pan} = req.body;

    let user = await User.findOne({ email });

    if(user){
        return res.status(401).json({
            success : false,
            message : "USer already exist",
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    user = await User.create({
        name,
        email,
        password : hashedPassword,
        phone,
        pan,
        // no_of_loans : user.
    })

    sendcookie(user,res,201,"Registered Successfully");


}

export const getMyProfile = async(req,res) =>{
    res.status(200).json({
        success : true,
        user : req.user
    })
}


export const logout = (req,res) =>{

    res.status(200).cookie("token","",{
        expires : new Date(Date.now())
    })
    .json({
        succes : true
    })
}


export const addmoney = async(req,res) =>{

   const user = req.user;
//    console.log(user);

    const { money } = req.body;

    user.balance += Number(money);

    user.transfer_Hist.push(`${money} credited by self on ${new Date(Date.now())}`);

    await user.save();


    res.json({
        user
    })

}

export const debitmoney = async(req,res) => {

    const user = req.user;

    const { debit } = req.body;

    user.balance -= Number(debit);

    user.transfer_Hist.push(`${debit} debited by self on ${new Date(Date.now())}`);

    
    await user.save();
    
    // console.log("moneyyyyyyyyyyyyyyyyyyyyy");
    res.json({
        user
    })

}

export const transferMoney = async(req,res) =>{

    const user = req.user;

    const { email,money } = req.body;

    const Seconduser = await User.findOne({email : email});

    user.balance -= Number(money);

    Seconduser.balance += Number(money);

    user.transfer_Hist.push(`${money} transferred to ${Seconduser.name} on ${new Date(Date.now())}`);
    Seconduser.transfer_Hist.push(`${money} received from ${user.name} on ${new Date(Date.now())}`);

    await user.save();

    await Seconduser.save();

    res.json({
        message : "Transfer Successful",
        Seconduser,
    })
}
 

export const findLoans = async(req,res) =>{
    const userid = req.user._id;

    const carLoans = await CarLoan.find({userId : userid});

    res.status(200).json({
        carLoans
    })
}







// export const getAllUsers = async(req,res)=>{

//     const user =  await User.find({});
 
//     res.json({
//      success : true,
//      user
//     })
//  }


//  export const register = async(req,res) =>{

//     const {name, email, password} = req.body;

//     await User.create({
//         name,
//         email,
//         password
//     })

//     res.status(201).cookie("token","sohel").json({
//         message : "registered successfully",
//     })
// }


// export const getUSerDetails = async(req,res)=>{

//     const{id} = req.params;

//     const user = await User.findById(id);

//     res.json({
//         user,
//     })
// }


// export const getUserDetails2 = async(req,res)=>{

//     const {id} = req.query;

//     const user = await User.findById(id);

//     res.json({
//         user,
//     })
// }
