import { administraterSchema } from "../../schemas/index.js";

const doctorMdl = async ({ username,password,name,department }) => {
    try {
        const user = await administraterSchema.create({ username,password,name,department });
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Failed to create administrater." };
    }
};

export default doctorMdl;
