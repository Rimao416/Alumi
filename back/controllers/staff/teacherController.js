const Teacher = require("../../models/staff/Teacher");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");

const createSendToken = require("../../utils/createSendToken");
const multer = require("multer");
const sharp = require("sharp");

// MULTER CONFIGURATION
// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     const ext = file.mimetype.split('/')[1];
//     cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
//   }
// });
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single("photo");
exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  // console.log(req.file)

  req.file.filename = `user-${Date.now()}.jpeg`;
  req.body.photo = req.file.filename;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

exports.registerTeacher = catchAsync(async (req, res, next) => {
  // console.log(req.file, req.body);
  // const { name, lastname, email, sexe } = req.body;
  // console.log(req.file.path);
  // Check if email exists

  const createTeacher = await Teacher.create(req.body);
  res.status(200).json({
    status: "success",
    message: "Professeur(e) ajouté(e) avec succès",
    createTeacher,
  });
  console.log("Ajouté avec succes");

  // createSendToken(createTeacher,201,res)
});

exports.getAllTeacher = catchAsync(async (req, res, next) => {
  const teacher = await Teacher.find();
  res.status(200).json({
    status: "success",
    data: teacher,
  });
});
