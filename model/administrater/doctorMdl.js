import { staffSchema } from "../../schemas/index.js";

const doctorMdl = async ({
  username,
  password,
  staff_id,
  name,
  category_name,
  category_id,
  qualification,
  administrater_id,
  role
}) => {
  try {
    console.log(category_name, category_id, "caaaaaaaaaaat");
    const user = await staffSchema.create({
      username,
      password,
      staff_id,
      name,
      category_name,
      category_id,
      qualification,
      administrater_id,
      role,
    });
    return user;
  } catch (error) {
    console.error(error);
    return { error: "Failed to create administrater." };
  }
};

export default doctorMdl;
