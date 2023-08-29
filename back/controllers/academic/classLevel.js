const ClassLevel = require("../../models/academic/ClassLevel");
const catchAsync = require("../../utils/catchAsync");
const classAuthorize = ["Licence", "Master", "Doctorat"];
exports.createClassLevel = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  console.log(name)
  const classLevel = await ClassLevel.find({
    name: {
      $regex: name,
      $options: "i",
    },
  }).countDocuments();

  const classCreated = await ClassLevel.create({
    name: name + " " + (classLevel + 1),
    createdBy: req.user._id,
  });
  res.status(201).json({
    status: "success",
    message: "Niveau Crée avec succès",
    classCreated,
  });
});

exports.getClassLevels = catchAsync(async (req, res, next) => {
  const classLevels = await ClassLevel.find();
  res.status(201).json({
    status: "success",
    message: "Class levels fetched successfully",
    data: classLevels,
  });
});
