require("dotenv").config();// ye declare or call kerne ke badd he hum .env ke value ko access ker payenge baki iske bina nahi ker payenge 

const mongoose = require('mongoose');




async function connectDB(){
    try {
       await mongoose.connect(process.env.MONGO_URI)

       console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;
