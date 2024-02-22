import { administraterSchema } from "../../schemas/index.js";

const getAdministraterMdl = async()=>{

try {
    const allData = await administraterSchema.find({});
    return allData
} catch (error) {
    console.log(error);
}
}

export default getAdministraterMdl
