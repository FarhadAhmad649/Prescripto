import validator from 'validator'
import {v2 as cloudinary} from 'cloudinary' 
import doctorModel from '../models/doctorModel.js '
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import path from 'path'

// API for adding doctor
const addDoctor = async (req, res)=>{

    try{
        const {name, email, password, speciality, degree, experience, about, fees, address } = req.body

        const imageFile = req.file

        // checking for all the data to add doctor
        if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address ){
            return res.json({success:false, message:"Missing Requirements"})
        }
        // Validating email
        if(!validator.isEmail(email)){
            return res.json({
              success: false,
              message: "Invalid email",
            });
        }
        // Validating strong password
        if(password.length < 8){
            return res.json({
              success: false,
              message: "Please enter a strong password",
            });
        }
        // hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload  = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        // creating doctor data
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        // Adding a new doctor to the doctors database
        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({success:true, message:"Doctor added"})

    }catch(error){
        console.log(error)
        res.json({success:false, message:error.message})
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

export {addDoctor, loginAdmin}