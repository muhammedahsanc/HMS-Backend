import jwt from "jsonwebtoken"
import {getAdministraterData} from "../model/administrater/index.js"
const isAdministrater = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("UNAUTHERISED_ACCESS NO TOKEN");
    jwt.verify(token, "secret", async (error, decoded) => {
      if (error) {
          console.log(error);
          throw new Error("UNAUTHERISED_ACCESS");
      } else {
        const username = decoded.username;
        const UserDelails = await getAdministraterData({ username });
        console.log(UserDelails,"isadministrater");
        if (UserDelails) {
          req.user = UserDelails;
          next();
        } else {
          throw new Error("UNAUTHERISED_ACCESS");
        }
      }      
    });
  } catch (error) {
    next(error);
  }
};
export default isAdministrater