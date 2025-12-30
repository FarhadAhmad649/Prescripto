 import express from "express";
 import {
   addDoctor,
   loginAdmin,
   getDoctors,
 } from "../controllers/adminController.js";
 import upload from "../middlewares/multer.js";
 import authAdmin from "../middlewares/authAdmin.js";

 const adminRouter = express.Router();

 adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
 adminRouter.post("/login", loginAdmin);
 // debug: list all doctors (requires admin auth)
 adminRouter.get("/doctors", authAdmin, getDoctors);

 export default adminRouter