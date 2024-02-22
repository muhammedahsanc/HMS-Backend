import { administraterSchema, categorySchema } from "../../schemas/index.js";

const getDrCategoryMdl = async ({ role }) => {
  try {
    const data = await categorySchema.find({ department: role });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default getDrCategoryMdl;
