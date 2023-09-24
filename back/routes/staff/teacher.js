const express = require("express");
const multer = require("multer");
const {
  registerTeacher,
  getAllTeacher,
  uploadUserPhoto,
  resizeUserPhoto
} = require("../../controllers/staff/teacherController");
const teacherRouter = express.Router();

teacherRouter.post("/register", uploadUserPhoto,resizeUserPhoto, registerTeacher);
teacherRouter.get("/", getAllTeacher);
module.exports = teacherRouter;
