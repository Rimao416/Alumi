const express = require("express");
const { registerAdmin,loginAdmin } = require("../../controllers/staff/admin");
// const {
//   registerAdmCtrl,
//   loginAdminCtrl,
// } = require("../../controller/staff/admin");


const adminRouter = express.Router();

//register
adminRouter.post("/register",registerAdmin);
adminRouter.post("/login",loginAdmin);

//login
adminRouter.post("/login", (req,res)=>{
    console.log("Non non")
});


module.exports = adminRouter;
