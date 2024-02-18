import jwt from "jsonwebtoken"
import {getAdminData} from "../model/admin/index.js"
const isAdmin = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("UNAUTHERISED_ACCESS NO TOKEN");
    jwt.verify(token, "secret", async (error, decoded) => {
      if (error) {
          console.log(error);
          throw new Error("UNAUTHERISED_ACCESS");
      } else {
        const username = decoded.username;
        const UserDelails = await getAdminData({ username });
        // console.log(UserDelails);
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
export default isAdmin