import mongoose, { Schema } from "mongoose";

const UserScheme = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    minlength: 8,
    maxlength: 12,
  },
  password: {
    type: String,
    trim: true,
    required: true,
    minlength: 8,
    maxlength: 12,
    select: false,
  },
});

export const UserModel = mongoose.model("user", UserScheme);
