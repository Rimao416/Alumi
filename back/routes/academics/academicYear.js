const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
  updateAcademicYear,
  deleteAcademicYear,
} = require("../../controller/academics/academicYear");
// const isAdmin = require("../../middlewares/isAdmin");
// const isLogin = require("../../middlewares/isLogin");

const academicYearRouter = express.Router();

academicYearRouter
  .route("/")
  .post(createAcademicYear)
  .get(getAcademicYears);
academicYearRouter
  .route("/:id")
  .get(getAcademicYear)
  .put(updateAcademicYear)
  .delete(deleteAcademicYear);
// academicYearRouter
//   .route("/")
//   .post(isLogin, isAdmin, createAcademicYear)
//   .get(isLogin, isAdmin, getAcademicYears);
// academicYearRouter
//   .route("/:id")
//   .get(isLogin, isAdmin, getAcademicYear)
//   .put(isLogin,isAdmin,updateAcademicYear)
//   .delete(isLogin, isAdmin, deleteAcademicYear);
module.exports = academicYearRouter;
