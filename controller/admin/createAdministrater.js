import {administraterMdl} from "../../model/admin/index.js";


const createAdministrater =async (req,res,next)=>{
  try{
        const username = req.body.username;
        const password = req.body.password;
        const name = req.body.name;
        const role = req.body.role;

        console.log("dddaaaaaattttaaaa");
        const data = await administraterMdl({ username,password,name,role });
        if (data instanceof Error) throw new Error("Something went wrong");
  }catch(error){

    console.error(error)
    next(error)
  }
  

}

export default createAdministrater;
