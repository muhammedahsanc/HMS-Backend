
import { Router } from "express";
import { User } from "../controller/index.js";
const {signUp} = User
const router = Router();

router.post("/user-signup", signUp);



export default router;