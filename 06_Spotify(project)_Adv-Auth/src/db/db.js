const mongoose = require('mongoose');

async function connectDB(){
  
  try{

       await mangoose.connect(process.env.MONGO_URI)
       console.log('Database connect successfully');

    }
    catch(error){
      console.log('Database connection error' ,error); 
    }
}

module.exports = connectDB 