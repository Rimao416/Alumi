const express = require("express");
const academicTermController = require("../../controllers/academic/academicTerm");
const authController = require("../../controllers/staff/authController");

const academicTermRouter = express.Router();


academicTermRouter.use(authController.protect)
academicTermRouter.use(authController.restrictTo("Admin"))
academicTermRouter.route("/").get(academicTermController.getAcademicTerms);
academicTermRouter.route("/").post(academicTermController.createAcademicTerm);

module.exports = academicTermRouter;
