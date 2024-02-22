
import { Router } from "express";
import {isAdministrater} from "../utils/index.js"
import { Administrater } from "../controller/index.js";
const {Login,createDoctor,createDrCategory,getCategory,getStaff} = Administrater
const router = Router();
router.post("/login", Login);
router.post("/createDoctor",isAdministrater, createDoctor);
router.post("/category",isAdministrater,createDrCategory);
router.get("/getCategory",isAdministrater,getCategory);
router.get("/getStaff",isAdministrater,getStaff);



export default router;