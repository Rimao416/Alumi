const mongoose=require("mongoose")
const User=require("./User")
const studentSchema=new mongoose.Schema({})
studentSchema.set("toObject", { virtuals: true }); // Définissez l'option pour inclure les champs virtuels lors de la conversion en objet
studentSchema.set("toJSON", { virtuals: true }); // Définissez l'option pour inclure les champs virtuels lors de la conversion en JSON

// Définissez la valeur par défaut pour le champ "role" comme "admin"
studentSchema.pre("validate", function (next) {
  if (!this.role) {
    this.role = "student";
  }
  if (!this.code) {
    "STU" +
      Math.floor(100 + Math.random() * 900) +
      Date.now().toString().slice(2, 4) +
      this.name
        .split(" ")
        .map((name) => name[0])
        .join("")
        .toUpperCase();
  }
  next();
});

const Student=User.discriminator('Student',studentSchema)
module.exports = Student;