const express = require("express");
const academicProgramController = require("../../controllers/academic/program");

const academicProgramRouter = express.Router();
academicProgramRouter.route("/").get(academicProgramController.getPrograms);

academicProgramRouter.route("/").post(academicProgramController.createProgram);

module.exports = academicProgramRouter;
