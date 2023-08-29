const AcademicYear = require("../../models/academic/AcademicYear");
// const Admin = require("../../model/Staff/Admin");
const catchAsync = require("../../utils/catchAsync");

exports.createAcademicYear = catchAsync(async (req, res) => {
  const { fromYear, toYear } = req.body;
  //check if exists
  // const academicYear = await AcademicYear.findOne();
  // if (academicYear) {
  //   throw new Error("Academic year already exists");
  // }
  //create
  const academicYearCreated = await AcademicYear.create({
    fromYear,
    toYear,
    createdBy: req.user._id,
  }); // A decommenter
  // // console.log(fromYear, toYear);
  // //push academic into admin
  // // const admin = await Admin.findById(req.userAuth._id);
  // // admin.academicYears.push(academicYearCreated._id);
  // // await admin.save();
  res.status(201).json({
    status: "success",
    message: "Année académique crée avec succès",
    academicYearCreated,
  });
});
//@desc  get all Academic Years
//@route GET /api/v1/academic-years
//@acess  Private
exports.getAcademicYears = catchAsync(async (req, res) => {
  const academicYears = await AcademicYear.find();

  res.status(201).json({
    status: "success",
    message: "Années Académiques chargées avec Succès",
    data: academicYears,
  });
});

//@desc  get single Academic Year
//@route GET /api/v1/academic-years/:id
//@acess  Private
exports.getAcademicYear = catchAsync(async (req, res) => {
  const academicYears = await AcademicYear.findById(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic years fetched successfully",
    data: academicYears,
  });
});

//@desc   Update  Academic Year
//@route  PUT /api/v1/academic-years/:id
//@acess  Private
exports.updateAcademicYear = catchAsync(async (req, res) => {
  const { name, fromYear, toYear } = req.body;
  //check name exists
  const createAcademicYearFound = await AcademicYear.findOne({ name });
  if (createAcademicYearFound) {
    throw new Error("Academic year already exists");
  }
  const academicYear = await AcademicYear.findByIdAndUpdate(
    req.params.id,
    {
      name,
      fromYear,
      toYear,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    message: "Academic years updated successfully",
    data: academicYear,
  });
});

//@desc   Update  Academic Year
//@route  PUT /api/v1/academic-years/:id
//@acess  Private
exports.deleteAcademicYear = catchAsync(async (req, res) => {
  await AcademicYear.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic year deleted successfully",
  });
});
