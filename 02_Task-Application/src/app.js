//server ko create karna iss file ka kaam hota hai 
const express = require('express')
const app = express();

app.use(express.json());  //----> ye middleware ka kaam karta hai jo bhi request aati hai body se usse read karne me help karta hai

const notes = []

/*  title , description  */
/* post  / notes */   //----> ye api create ke hai jiska naam hai notes 

app.post('/notes', (req, res) => {

  console.log( req.body);
})






module.exports = app;