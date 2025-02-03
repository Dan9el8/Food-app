import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://donak:20041200ku.@cluster0.4wnbt.mongodb.net/food_delivery').then(()=>console.log("DB Connected"));
}