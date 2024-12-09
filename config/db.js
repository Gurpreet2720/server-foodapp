import { createRequire } from "module";
const require = createRequire(import.meta.url);
const mongoose = require('mongoose');

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://gurpreet2015pta:Makkar2720@gurpreet.wr83j.mongodb.net/food-del').then(()=>{console.log("DB connected")})
}