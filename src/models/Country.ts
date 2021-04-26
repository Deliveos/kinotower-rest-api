import {Schema, SchemaTypes, model } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  id: true,
});

export const User = model("Country", schema);