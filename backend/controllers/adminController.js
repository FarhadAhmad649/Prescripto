import validator from 'validator'
import {v2 as cloudinary} from 'cloudinary' 
import doctorModel from '../models/doctorModel.js '
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'
import mongoose from "mongoose";
import appointmentModel from '../models/appointmentModel.js'

// API for adding doctor
const addDoctor = async (req, res) => {
  try {
    const { name, email,password,speciality,degree,experience,about,fees,address } = req.body;
    const imageFile = req.file;

    // checking for all the data to add doctor
    if (
      !name || !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees ||
      !address ||
      !imageFile
    ) {
      return res.json({ success: false, message: "Missing Requirements" });
    }
    // Validating email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Invalid email",
      });
    }
    // Validating strong password
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }
    // hashing doctor password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });
    const imageUrl = imageUpload.secure_url;

    // creating doctor data
    const doctorData = {
      name,
      email,
      image: imageUrl,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      date: Date.now(),
    };

    // Adding a new doctor to the doctors database
    const newDoctor = new doctorModel(doctorData);
    const saved = await newDoctor.save();

    // console.log(
    //   "adminController: doctor saved",
    //   saved._id,
    //   "db:",
    //   mongoose.connection.name
    // );

    res.json({ success: true, message: "Doctor added" });
  } catch (error) {
    console.log("adminController error:", error);
    res.json({ success: false, message: error.message });
  }
};

const getDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({});
    return res.json({ success: true, data: doctors });
  } catch (error) {
    console.log("getDoctors error:", error);
    return res.json({ success: false, message: error.message });
  }
};

// API to get all doctors list for the admin panel
const alldoctors = async (req, res)=>{
  try {

    const doctors = await doctorModel.find({}).select('-password')
    res.json({success:true, doctors})
    
  } catch (error) {
    console.log("getDoctors error:", error)
    return res.json({ success: false, message: error.message })
  }
}

// API for admin login
const loginAdmin = async(req, res)=>{
    try{
        const {email, password} = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password, process.env.JWT_SECRET)

            res.json({success:true, token})
        }else{
            res.json({success:false, message:"Invalid credentials"})
        }

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// API to get all appointments list
const appointmentsAdmin = async(req, res)=>{
  try {

    const appointments = await appointmentModel.find({})

    return res.json({success:true, appointments})
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// API for appointment cancellation
const appointmentCancel = async (req, res) => {
  try {
 
    const { appointmentId } = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId);


    await appointmentModel.findByIdAndUpdate(appointmentId, {
      cancelled: true,
    });

    // Releasing doctor slot

    const { docId, slotDate, slotTime } = appointmentData;

    const doctorData = await doctorModel.findById(docId);

    let slots_booked = doctorData.slots_booked;

    slots_booked[slotDate] = slots_booked[slotDate].filter(
      (e) => e !== slotTime,
    );

    await doctorModel.findByIdAndUpdate(docId, { slots_booked });

    res.json({ success: true, message: "Appointment Cancel" });
  } catch (error) {
    console.log(error);
  }
};

export { addDoctor, loginAdmin, getDoctors, alldoctors, appointmentsAdmin, appointmentCancel};