import { connect } from "mongoose";
import { config } from "dotenv";
config();

const dbConnection = async () => {
  try {
    if (await connect('mongodb://0.0.0.0/HMS')) {
      console.log("DB Connected Successfully");
    } else {
      throw new Error("ERR DB Connection");
    }
  } catch (error) {
    console.error(error);
    // next(error); // Note: You can't use `next` here directly unless you're in a middleware function.
  }
};

export { dbConnection };
