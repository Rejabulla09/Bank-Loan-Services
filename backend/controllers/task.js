
import {Task} from "../models/task.js"

export const newtask = async(req,res) =>{

    const{ title,description } = req.body;

    await Task.create({
        title,
        description,
        user : req.user
    })


    res.status(201).json({
        success : true,
        message : 'Task Created successfully'
    })
}


export const getMyTask  = async(req,res) =>{
const userid = req.user._id;
console.log(userid);

    const task = await Task.find({user : userid});

    res.status(200).json({
        success : true,
        task
    })
}


export const updatetask = async(req,res) =>{

    const {id} = req.params;

    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({
            success : false,
            message : "Invalid Id"
        })
    }

    task.isCompleted = !task.isCompleted;
    
    await task.save();

    res.status(200).json({
        success : true,
        message : "task updated",
    })
}

export const deletetask = async(req,res) =>{

    const{ id } = req.params;

    const task = await Task.findById(id);

    if(!task){
        return res.status(404).json({
            success : false,
            message : "Invalid Id!"
        })
    }

    await task.deleteOne();

    res.status(200).json({
        success : true,
        message : "Task deleted"
    })

}