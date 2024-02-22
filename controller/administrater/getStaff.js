import {getStaffMdl} from "../../model/administrater/index.js";
const getStaff =async (req,res,next)=>{
  try{
        const administraterRole = req.user.role;
        if(administraterRole=='Doctor-Administrater'){
          const data = await getStaffMdl();
          if (data instanceof Error) throw new Error("Something went wrong");
          return res.status(200).json({
            message: "Successfully Completed",
            data:data
          });
        }else{
          throw new Error("Unautharized access");
        }
       
  }catch(error){
    console.error(error)
    next(error)
  }
  

}

export default getStaff;
