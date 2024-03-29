import { Schema, model, connect } from "mongoose";
import "dotenv/config";

const schemaData = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    staff_id: { type: String },
    name: { type: String },
    category_name: { type: String },
    category_id: { type: String },
    qualification: { type: String },
    administrater_id: { type: String },
    role: { type: String },
    status: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }, 
  },
  {
    timestamps: true,
  }
);
export default model('staff', schemaData);