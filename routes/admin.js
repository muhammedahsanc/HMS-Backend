
import { Router } from "express";
import { Admin } from "../controller/index.js";
const {AdminLogin,createAdministrater} = Admin
const router = Router();

router.post("/login", AdminLogin);
router.post("/createAdministrater", createAdministrater);



export default router;