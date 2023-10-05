const express = require("express");
const subjectProgramController = require("../../controllers/academic/Subject");
const authController = require("../../controllers/staff/authController");

const subjectProgramRouter = express.Router();

subjectProgramRouter.use(authController.protect);
subjectProgramRouter.use(authController.restrictTo("Admin"));
subjectProgramRouter.route("/").post(subjectProgramController.createSubject);
subjectProgramRouter.route("/").get(subjectProgramController.getSubjects);
subjectProgramRouter.route("/:id").put(subjectProgramController.updateSubjects);

// subjectProgramRouter.route("/").post(academicProgramController.createProgram);

module.exports = subjectProgramRouter;
