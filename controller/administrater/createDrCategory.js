import {categoryMdl} from "../../model/administrater/index.js";


const createDrCategory =async (req,res,next)=>{
  try{
        const administraterRole = req.user.role;
        if(administraterRole=='Doctor-Administrater'){
        const name = req.body.department;
        const department = req.user.role
        console.log(name,"cntrl caaaaaaaaaaat");
          const data = await categoryMdl({name,department});
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

export default createDrCategory;
