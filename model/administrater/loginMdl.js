import {administraterSchema} from "../../schemas/index.js";

const loginMdl = async({username,password}) =>
{
    try {
        const user = await administraterSchema.findOne({username,password});
        return user; 
        console.log(user,"admini data");
      } catch (error) {
        console.error(error);
        return error;
      }
}
export default loginMdl