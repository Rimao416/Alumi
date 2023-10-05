const catchAsync = require("../../utils/catchAsync");
const Subject = require("../../models/academic/Subject");
const classLevelModel = require("../../models/academic/ClassLevel");
const AppError = require("../../utils/appError");
exports.createSubject = catchAsync(async (req, res, next) => {
  const { name, academicTerm, classLevel, teacher } = req.body;
  //   Un sujet doit avoir au moins une classe

  console.log(classLevel);
  if (!classLevel || classLevel.length === 0) {
    return next(
      new AppError("Une matière doit avoir au moins une classe", 400)
    );
  }
  const subjectCreated = new Subject({
    name,
    academicTerm,
    classLevel,
    teacher,
  });

  subjectCreated.save().then(() => {
    // Pour chaque classe, ajoutez la matière
    classLevel.forEach((classId) => {
      classLevelModel.findByIdAndUpdate(
        classId,
        { $push: { subjects: subjectCreated._id } }, // Ajoutez la matière à la classe
        { upsert: true }, // Créez la classe si elle n'existe pas
        (err, doc) => {
          if (err) {
            console.error(err);
            // Gérez les erreurs ici
          }
        }
      );
    });
  });

  res.status(201).json({
    status: "success",
    message: "Sujet crée avec succès",
    subjectCreated,
  });
});

exports.getSubjects = catchAsync(async (req, res, next) => {
  const subjects = await Subject.find().populate("classLevel academicTerm");
  res.status(201).json({
    status: "success",
    message: "Sujets fetched successfully",
    data: subjects,
  });
});

exports.updateSubjects = catchAsync(async (req, res, next) => {
  const { name, academicTerm, classLevel, teacher } = req.body;
  const uniqueClassLevel = [...new Set(classLevel)];
  //   Un sujet doit avoir au moins une classe
  if (!uniqueClassLevel || uniqueClassLevel.length === 0) {
    return next(
      new AppError("Une matière doit avoir au moins une classe", 400)
    );
  }
  const subjectUpdated = await Subject.findByIdAndUpdate(
    req.params.id,
    {
      name,
      academicTerm,
      uniqueClassLevel,
      teacher,
    },
    {
      new: true,
    }
  );
  const classLevelUpdated = await classLevelModel.updateMany(
    { subjects: req.params.id },
    { $pull: { subjects: req.params.id } }
  );
  console.log(classLevelUpdated);

  const classLevelAdd = await classLevelModel.updateMany(
    { _id: { $in: uniqueClassLevel } },
    { $addToSet: { subjects: req.params.id } }
  );
  console.log(classLevelAdd);

  res.status(201).json({
    status: "success",
    message: "Sujet modifié avec succès",
    subjectUpdated,
  });
  console.log(req.body);
});
