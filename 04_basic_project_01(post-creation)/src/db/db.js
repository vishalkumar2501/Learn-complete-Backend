const mongoose = require('mongoose');



async function connectDB(){
    try {
       await mongoose.connect('mongodb+srv://backend:ShvLlYzRRgfkYd3d@complete-backend-learn.odhpnrf.mongodb.net/project-1')

       console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = connectDB;
