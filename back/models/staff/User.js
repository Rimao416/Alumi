const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le Nom est obligatoire"],
    },
    lastname: {
      type: String,
      required: [true, "Le Prénom est obligatoire"],
    },
    email: {
      type: String,
      required: [true, "L'Email est obligatoire"],
      unique: [true, "L'Email est déjà utilisé"],
      validate: {
        validator: function (value) {
          return validator.isEmail(value);
        },
        message: "Entrez une adresse mail valide",
      },
    },
    password: {
      type: String,
      required: [true, "Le mot de passe est obligatoire"],
      minlength: [8, "Le mot de passe doit contenir au moins 8 caractères"],
      select: false,
    },
  
    code: {
      type: String,
    },
    sexe: {
      type: String,
      required: [true, "Le sexe est obligatoire"],
      enum: { values: ["Femme", "Homme"], message: "Entrez un sexe valide" },
    },
    photo: {
      type: String,
      default: "default.png",
    },
      role: { type: String, required: true },
    

  },
  {
    discriminatorKey: "role",
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
    // Only run this function if password was actually modified
    if (!this.isModified("password")) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    next();
  });

  userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    const myPass = await bcrypt.compare(candidatePassword, userPassword);
    return myPass;
  };


//model
const User = mongoose.model("User", userSchema);

module.exports = User;
