 import express from "express";
 import {
   addDoctor,
   loginAdmin,
   getDoctors,
   alldoctors,
 } from "../controllers/adminController.js";
 import upload from "../middlewares/multer.js";
 import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

 const adminRouter = express.Router();

 adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
 adminRouter.post("/login", loginAdmin);
 // debug: list all doctors (requires admin auth)
 adminRouter.post("/change-availability", authAdmin, changeAvailability);
 adminRouter.post("/all-doctors",authAdmin, alldoctors)

 export default adminRouter