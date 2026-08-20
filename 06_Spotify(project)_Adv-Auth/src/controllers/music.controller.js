const musicModel = require('../models/music.model');
const { uploadFile } = require('../services/storage.service');
const albumModel = require('../models/album.model');    
const jwt = require('jsonwebtoken');

async function createModel(req, res) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "You are not authorized to create music"
        });
    }

    try {
        // 1. Token verify karein
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // 2. Role check karein
        if (decoded.role !== 'artist') {
            return res.status(403).json({
                message: "You are not authorized to create music"
            });
        }

        const { title } = req.body;
        const file = req.file;

        // 3. File upload aur Database entry
        const result = await uploadFile(file.buffer.toString('base64'));
        const music = await musicModel.create({
            title,
            uri: result.url,
            artist: decoded.id
        });

        // 4. Success response
        return res.status(201).json({
            message: "Music created successfully",
            music: {
                id: music._id,
                title: music.title,
                uri: music.uri,
                artist: music.artist
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Internal server error"
        });
    }
}

async function createAlbum(req , res) {
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "You are not authorized to create album"
        });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if(decoded.role !== 'artist'){
            return res.status(403).json({
                message: "You are not authorized to create album"
            });
        }
        const {title , musics} = req.body;
        const album = await albumModel.create({
            title,
            musics:musics,
            artist: decoded.id
        });
        return res.status(201).json({
            message: "Album created successfully",  
            album: {
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics:album.musics,

            }
        });
    } catch (error) {
        return res.status(401).json({
            message: error.message || "Internal server error"
        });
    }   
}
module.exports = { createModel , createAlbum};