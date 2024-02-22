import { categorySchema } from "../../schemas/index.js";

const categoryMdl = async ({ name,department}) => {
    try {
        console.log(department,"mdellllll cat");
        const user = await categorySchema.create({name,department});
        return user;
    } catch (error) {
        console.error(error);
        return { error: "Failed to create administrater." };
    }
};

export default categoryMdl;

