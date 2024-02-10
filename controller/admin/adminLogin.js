import {loginMdl} from "../../model/admin/index.js";
import jwt from "jsonwebtoken";
let token;

const AdminLogin =async (req,res,next)=>{
  try{
    const username = req.body.username
    const password = req.body.password
    console.log(username);
    console.log(password);
    const data = await loginMdl({ username,password });
    if (data instanceof Error) throw new Error("Something went wrong");
    token = jwt.sign({ username:data.username }, "secret", { expiresIn: "3d" });
          let role = 'admin';
          return res.status(200).json({
            message: "Successfully Completed",
            token,
            data: data.username,
            role,
          });
  }catch(error){

    console.error(error)
    next(error)
  }
  

}

export default AdminLogin;
