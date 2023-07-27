const Teacher = require("../../models/staff/Teacher")
const catchAsync = require("../../utils/catchAsync")

const createSendToken=require("../../utils/createSendToken")


exports.registerTeacher=catchAsync(async(req,res,next)=>{
    const {name,lastname,email,password,sexe}=req.body
    // Check if email exists
   
    const createTeacher=await Teacher.create({
        name,
        lastname,
        email,
        password,
        sexe
    })
    createSendToken(createTeacher,201,res)
})

exports.getAllTeacher=catchAsync(async(req,res,next)=>{
    const teacher=await Teacher.find()
    res.status(200).json({
        status:"success",
        data:teacher
    })
})