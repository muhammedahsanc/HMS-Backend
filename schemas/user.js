import { Schema, model, connect } from "mongoose";
import "dotenv/config";

const schemaData = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role: { type: String },
    status: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }, 
  },
  {
    timestamps: true,
  }
);
export default model('user', schemaData);