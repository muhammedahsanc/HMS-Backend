import { administraterSchema } from "../../schemas/index.js";

const createAdministrater = async ({ username,password,name,role }) => {
    try {
        const user = await administraterSchema.create({ username,password,name,role });
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Failed to create administrater." };
    }
};

export default createAdministrater;
