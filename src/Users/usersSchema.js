import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
});

userSchema.pre("save", async function (next) {
  const newUser = this;
  const plainPassword = newUser.password;
  if (newUser.isModified("password")) {
    newUser.password = await bcrypt.hash(plainPassword, 10);
  }
  next();
});

export default model("User", userSchema);
