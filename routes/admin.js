
import { Router } from "express";
import {isAdmin} from "../utils/index.js"
import { Admin } from "../controller/index.js";
const {AdminLogin,createAdministrater,getAdministrater} = Admin
const router = Router();

router.post("/login", AdminLogin);
router.post("/createAdministrater",isAdmin, createAdministrater);
router.get("/getAdministrater",isAdmin, getAdministrater);




export default router;