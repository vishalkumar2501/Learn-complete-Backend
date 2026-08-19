const musicModel = require('../models/music.model');
const {uploadFile} = require('../services/storage.service');
const jwt = require('jsonwebtoken');


async function createModel(req, res) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message:"You are not authorized to create music"
        });
    }
    try{

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded.role !== 'artist'){
        return res.status(403).json({
            message:"You are not authorized to create music"
        });
    }
    }
    catch(error){   
        return res.status(401).json({
            message:"You are not authorized to create music"
        });
    }
    const {title} = req.body;
    const file = req.file;
}   
    

