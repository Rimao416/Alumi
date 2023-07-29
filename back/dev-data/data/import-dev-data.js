const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const AcademicYear = require('../../models/academic/AcademicYear');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.set('strictQuery',true)
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const academicYear = JSON.parse(
  fs.readFileSync(`${__dirname}/academicYear.json`, 'utf-8')
);

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await AcademicYear.create(academicYear);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    await AcademicYear.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv)