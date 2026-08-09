//server ko create karna iss file ka kaam hota hai 
const express = require('express')
const app = express();

app.use(express.json());  //----> ye middleware ka kaam karta hai jo bhi request aati hai body se usse read karne me help karta hai

const notes = []

/*  title , description  */
/*(---1----) post  / notes */   //----> ye api create ke hai jiska naam hai notes 

app.post('/notes', (req, res) => {   // iss api se frontend se data backend me bheja jaa raha hai aur backend me data ko store karne ke liye notes array me push kar rahe hai
  
  notes.push( req.body);
  res.status(201).json({
      message: "note created successfully",
  })
})

/*(----2-----) Get  / notes */   //----> ye api create ke hai jiska naam hai notes

app.get('/notes', (req, res)=>{  // or iss api se frontend me data bheja jaa raha hai jo backend me store hai notes array me
  res.status(200).json({
    message: "all notes are fetched successfully",
    notes: notes
  })
 
})


/*(----3-----) Delete/notes(static)/:index(dynamics hai iss liye considered as a params) */ //-->ye bhi api create ke hai jiska naam hai notes


app.delete('/notes/:index', (req, res)=>{
  const idx = req.params.index
  delete notes[ idx ] 
  res.status(200).json({
    message: "note deleted successfully"
  })
})



module.exports = app;