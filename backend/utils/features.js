
import jwt from "jsonwebtoken";


export const sendcookie = (user,res,statuscode=201,message) =>{
    const token = jwt.sign({ _id : user._id},process.env.JWT_SECRET);

    res.status(statuscode).cookie("token",token,{
        httpOnly : true,
        maxAge : 15 * 60 * 1000
    }).json({
        success : true,
        message : message,
    })
}