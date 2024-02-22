import { Schema, model, connect } from "mongoose";
import "dotenv/config";

const schemaData = new Schema(
  {
    name: { type: String },
    department: { type: String },
    status: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }, 
  },
  {
    timestamps: true,
  }
);
export default model('category', schemaData);