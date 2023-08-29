const Program = require("../../models/academic/Program");
const catchAsync = require("../../utils/catchAsync");
exports.createProgram = catchAsync(async (req, res, next) => {
  const academicProgramCreated = await Program.create({
    name: req.body.name,
    duration: req.body.duration,
    createdBy: req.user._id,
  });
  res.status(201).json({
    status: "success",
    message: "Programme Crée avec succès",
    academicProgramCreated,
  });
});
exports.getPrograms = catchAsync(async (req, res, next) => {
  const programs = await Program.find();
  res.status(201).json({
    status: "success",
    message: "Programmes chargés avec succès",
    data: programs,
  });
});
