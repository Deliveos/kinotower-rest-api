import {Schema, SchemaTypes, model } from "mongoose";

const schema = new Schema({
  message: {
    type: String,
    required: true
  },
  film: {
    type: SchemaTypes.ObjectId,
    ref: "film"
  },
  user: {
    type: SchemaTypes.ObjectId,
    ref: "user"
  },
  ball: {
    type: Number,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date
  }
}, {
  id: true,
});

export const User = model("Review", schema);