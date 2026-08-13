const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service")
const postModel =require("./models/post.model")



const app = express();
app.use(express.json());// ye middleware bas raw data ke liye hai bas postman me 
//but iss baar hum koi naya data used kr rahe hai form-data body ke ander to wahi wala  
//middleware bhi used kerna padega  jisko multer bolte hai -> npm i multer

const upload = multer({storage: multer.memoryStorage()})// middleare for form-data


app.post('/create-post' , upload.single('image'), async (req, res) => {

    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).jason({
        message:"post created successfully",
        post

    })
})
    


module.exports = app;
