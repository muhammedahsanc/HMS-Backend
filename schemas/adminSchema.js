import { Schema, model, connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const schemaData = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    forgetPassword: { type: String },
    status: { type: Boolean, default: true }
  },
  {
    timestamps: true,
  }
);

export default model('Admin', schemaData, 'admin');
