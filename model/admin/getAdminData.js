import { adminSchema } from "../../schemas/index.js";


const getAdminData = async({username})=>{

try {
    const Data = await adminSchema.findOne({username});
    return Data
} catch (error) {
    console.log(error);
}
}
export default getAdminData