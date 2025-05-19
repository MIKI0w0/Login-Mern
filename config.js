import mongoose from "mongoose";

export const connectDB = async () => {
    try {

        //recordar poner la base de datos de mongoDB aqui

        await mongoose.connect("mongodb://localhost:27017/yourdbname");
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}