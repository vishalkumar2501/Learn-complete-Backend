const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    uri:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    artist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'  ,//user collection ka refrence pass kaiye hai 
        required:true
    },
    
    
})      


const musicModel = mongoose.model('Music',musicSchema);         

