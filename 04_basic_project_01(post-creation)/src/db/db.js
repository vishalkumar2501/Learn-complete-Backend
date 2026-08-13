const mongoose = require('mongoose'); // MongoDB ke saath connection ke liye Mongoose

async function connectDB(){ // MongoDB connection ke liye function
    try {
       await mongoose.connect(process.env.MONGO_URI); // .env se MongoDB URI lekar connect karta hai

       console.log('MongoDB connected successfully'); // Successful connection ka message
    } catch (error) {
        console.error('Error connecting to MongoDB:', error); // Connection error show karta hai
    }
}

module.exports = connectDB; // Function ko doosri file mein use karne ke liye export karta hai