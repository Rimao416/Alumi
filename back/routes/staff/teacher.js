const express=require("express")
const { registerTeacher, getAllTeacher } = require("../../controllers/staff/teacherController");
const teacherRouter=express.Router()
teacherRouter.post("/register",registerTeacher)
teacherRouter.get("/",getAllTeacher)
module.exports=teacherRouter


