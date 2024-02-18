
import { Router } from "express";
// import {isAdmin} from "../utils/index.js"
import { Administrater } from "../controller/index.js";
const {Login,createDoctor} = Administrater
const router = Router();

router.post("/login", Login);
router.post("/createDoctor", createDoctor);


export default router;