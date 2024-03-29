import {administraterMdl} from "../../model/admin/index.js";


const createAdministrater =async (req,res,next)=>{
  try{
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const role = req.body.role;
        const adminRole = req.user.role;
        if(adminRole=='admin'){
          const data = await administraterMdl({ username,password,name,role });
          if (data instanceof Error) throw new Error("Something went wrong");
          return res.status(200).json({
            message: "Successfully Completed",
          });
        }else{
          throw new Error("Unautharized access");
        }
       
  }catch(error){

    console.error(error)
    next(error)
  }
  

}

export default createAdministrater;
