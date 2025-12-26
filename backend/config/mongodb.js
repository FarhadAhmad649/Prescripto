import mongoose from "mongoose";

const connectDB = async ()=>{

    mongoose.connection.on('connected', ()=> console.log('Database connected'))
    mongoose.connection.on('error', (err)=> console.error('MongoDB connection error:', err.message))

    try {
            await mongoose.connect(
              `${process.env.MONGODB_URI}/prescripto`
            );
    } catch (err) {
        console.error('MongoDB connect failed:', err.message)
        process.exit(1)
    }
}

export default connectDB