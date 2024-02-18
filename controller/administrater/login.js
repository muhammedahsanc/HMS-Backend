import {loginMdl} from "../../model/administrater/index.js";
import {generateToken} from "../../utils/index.js";
let token; 
const Login =async (req,res,next)=>{
  try{
    const username = req.body.username
    const password = req.body.password
    console.log(username);
    console.log(password);
    const data = await loginMdl({ username,password });
    console.log(data,"adminis stara");
    if (data instanceof Error) throw new Error("Something went wrong");
    token = generateToken(data.username)
          let role = data.role;
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

export default Login;
