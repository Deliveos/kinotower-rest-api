import {Schema, SchemaTypes, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  parent: {
    type: SchemaTypes.ObjectId,
    ref: "category",
    default: null
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  id: true,
});

export const Category = model("Category", schema);