import {adminSchema} from "../../schemas/index.js";

const loginMdl = async({username,password}) =>
{
    console.log(username,password,"mooodel");
    try {
        const user = await adminSchema.findOne({username,password});
        return user; 
      } catch (error) {
        console.error(error);
        return error;
      }
}
export default loginMdl