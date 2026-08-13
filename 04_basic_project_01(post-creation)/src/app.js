const express = require('express');
const multer = require('multer');
const app = express();

app.use(express.json());// ye middleware bas raw data ke liye hai bas postman me 
//but iss baar hum koi naya data used kr rahe hai form-data body ke ander to wahi wala  
//middleware bhi used kerna padega  jisko multer bolte hai -> npm i multer

const upload = multer({storege: multer.memoryStorage()})// middleare for form-data



app.post('/create-post' , upload.single('image'), async (req, res) => {

    console.log(req.body);
    console.log(req.file); 
})
    


module.exports = app;
