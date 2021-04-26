import {Schema, model } from "mongoose";

const schema = new Schema({
  fio: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    uniquie: true
  }, 
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: "user"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  id: true,
});

export const User = model("User", schema);