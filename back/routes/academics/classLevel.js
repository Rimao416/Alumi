const express = require("express");
const classLevelController = require("../../controllers/academic/classLevel");
const authController = require("../../controllers/staff/authController");
const classLevelRouter = express.Router();

classLevelRouter.use(authController.protect)
classLevelRouter.use(authController.restrictTo("Admin"))
classLevelRouter.route("/").post(classLevelController.createClassLevel);

classLevelRouter.route('/').get(classLevelController.getClassLevels);

module.exports = classLevelRouter;
