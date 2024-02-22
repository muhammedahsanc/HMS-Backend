import { doctorMdl, staffId } from "../../model/administrater/index.js";

const createDoctor = async (req, res, next) => {
  try {
    const adminRole = req.user.role;
    if (adminRole == "Doctor-Administrater") {
      const latestDoctor = await staffId();
      const doctorInfo = req.body;
      const [category_id, category_name] = doctorInfo.department.split("|");
      const staff_id = latestDoctor + 1;
      const username = req.body.username;
      const password = req.body.password;
      const name = req.body.doctorName;
      const qualification = req.body.qualification;
      const role = "doctor";
      const administrater_id = req.user._id;
      const data = await doctorMdl({
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
      if (data instanceof Error) throw new Error("Something went wrong");
      return res.status(200).json({
        message: "Successfully Completed",
      });
    } else {
      throw new Error("Unautharized access");
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export default createDoctor;
