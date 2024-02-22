import { staffSchema } from "../../schemas/index.js";

const getStaffMdl = async () => {
  try {
    const data = await staffSchema.find({ role: "doctor" });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getStaffMdl;
