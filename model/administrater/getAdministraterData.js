import { administraterSchema } from "../../schemas/index.js";


const getAdministraterData = async({username})=>{

try {
    const Data = await administraterSchema.findOne({username});
    return Data
} catch (error) {
    console.log(error);
}
}
export default getAdministraterData