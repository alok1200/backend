import { Router } from "express";
import  {registorUser}  from "../controllers/User.Controllers.js";

const router = Router();

router.route("/register").post(
    upload.fields([{
        name: "avatar",
        maxCount: 1
    }, {
        name: "coverImage",
        maxCount: 1
    }])
);

export default router;
