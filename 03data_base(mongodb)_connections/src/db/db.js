const mongoose = require('mongoose');



async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://backend:ShvLlYzRRgfkYd3d@complete-backend-learn.odhpnrf.mongodb.net/halley');


    console.log('Connected to MongoDB');

    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  } 
}

module.exports = connectDB;