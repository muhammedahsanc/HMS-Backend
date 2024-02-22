import { staffSchema } from "../../schemas/index.js";

const staffId = async () => {
  try {
    const latestStaff = await staffSchema.findOne({}, {}, { sort: { 'staff_id': -1 } });
    const latestStaffId = latestStaff ? parseInt(latestStaff.staff_id) : 0;
    console.log(latestStaffId, "staff id model");
    return latestStaffId;
  } catch (error) {
    console.log(error);
  }
};

export default staffId;
