import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://koyyadaanusha:anusha31082005@cluster0.o9nkb.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}