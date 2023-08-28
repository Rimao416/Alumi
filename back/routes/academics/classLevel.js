const express = require("express");
const classLevelController = require("../../controllers/academic/classLevel");

const classLevelRouter = express.Router();
classLevelRouter.route("/").post(classLevelController.createClassLevel);

classLevelRouter.route('/').get(classLevelController.getClassLevels);

module.exports = classLevelRouter;
