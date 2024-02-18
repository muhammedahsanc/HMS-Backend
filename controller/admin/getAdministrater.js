
import {getAdministraterMdl}  from "../../model/admin/index.js"


const getAdministrater = async(req,res,next)=>{
    const adminRole = req.user.role;
     if(adminRole=='admin'){
    const data = await getAdministraterMdl()
    return res.status(200).json({
        message: "Successfully Completed",
        data
      });
    }else{
      throw new Error("Unautharized access");

    }
}

export default getAdministrater