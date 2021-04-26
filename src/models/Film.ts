import {Schema, SchemaTypes, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  country: {
    type: SchemaTypes.ObjectId,
    ref: "country"
  },
  duration: {
    type: Number,
    min: 1
  },
  yearOfIssue: {
    type: Number,
    min: 1900
  },
  age: {
    type: Number,
    min: 0,
    max: 18
  },
  categories: [{
    type: SchemaTypes.ObjectId,
    ref: "category"
  }],
  linkImg: {
    type: String
  },
  linkKinopoisk: {
    type: String
  },
  linkVideo: {
    type: String
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

export const User = model("Film", schema);