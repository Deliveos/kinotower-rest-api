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
  isApproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  id: true,
});

export const Review = model("Review", schema);