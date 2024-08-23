import { Loan } from "../models/loan.js";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendcookie } from "../utils/features.js";


// export const adminLogin = async (req, res) => {

//     const { email, password } = req.body;

//     try {

//         const user = await User.findOne({ email: email });

//         if (!user) {
//             return res.status(401).json({
//                 message: "Invalid email or password"
//             })
//         }

//         const hashedPassword = bcrypt.compare(password, user.password);

//         if (!hashedPassword) {
//             return res.status(401).json({
//                 message: "Invalid email or password"
//             })
//         }

//         if (req.user.role == "user") {
//             return res.status(401).json({
//                 message: "Invalid email or password"
//             })
//         }

//         res.json({
//             success: true,
//             message: "welcome!"
//         })

//     } catch (error) {
//         console.log(error);
//         res.json({
//             message: "error"
//         })
//     }

// }

// export const adminLogin2 = async(req,res) =>{

//     const user = req.user;

//     if(user.role == "admin"){
//         return res.json({
//             message : "welcome"
//         })
//     }

//     else{
//         return res.json({
//             message : "wrong"
//         })
//     }
// }



export const adminLogin = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return res.status(401).json({
            message: "Invalid username or password"
        })
    }



    else if (user) {
        const ismatch = await bcrypt.compare(password, user.password);

        if (!ismatch) {
            return res.status(401).json({
                message: "Invalid username or password"
            })
        }

        else if (user.role !== "admin") {
            return res.status(401).json({
                message: "Unauthorized. Only admins are allowed to login"
            })
        }

        else {

           return sendcookie(user, res, 201, `welcome back ${user.name}`);

            // return res.json({
            //     message: "Login Successful",
            //     user
            // })
        }


    }

    // const ismatch = await bcrypt.compare(password,user.password);
    // // console.log(ismatch);

    // else if(!ismatch){
    //     return res.status(401).json({
    //         success : false,
    //         message : "Password not matched",
    //     })
    // }

    // else if(user.role !== "admin" ){
    //    return res.status(401).json({
    //         message : "Unauthorized. Only admins are allowed to login"
    //     })
    // }

    // else{
    //    return res.json({
    //         message : "Login Successful",
    //         user
    //     })
    // }
}


export const adminUpdate = async (req, res) => {

    const { loanId, action } = req.body;
    // console.log("fff");

    try {

        const loan = await Loan.findByIdAndUpdate(loanId, { status: action }, { new: true });

        res.json({
            loan
        })

    } catch (error) {
        console.log(error);
        res.json({
            message: "error"
        })
    }
}