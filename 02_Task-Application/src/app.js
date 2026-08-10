//server ko create karna iss file ka kaam hota hai 
const express = require('express')
const app = express();

app.use(express.json());  //----> ye middleware ka kaam karta hai jo bhi request aati hai body se usse read karne me help karta hai

const notes = []

/*  title , description  */
/*(---1----) post  / notes */   //----> ye api create ke hai jiska naam hai notes 

app.post('/notes', (req, res) => {   // 
  notes.push( req.body);
  res.status(201).json({
      message: "note created successfully",
  })
})

/*(----2-----) Get  / notes */   //----> ye api create ke hai jiska naam hai notes

app.get('/notes', (req, res)=>{  
  res.status(200).json({
    message: "all notes are fetched successfully",
    notes: notes
  })
 
})


/*(----3-----) Delete/notes(static)/:index(dynamics hai iss liye considered as a params) */ //-->ye bhi api create ke hai jiska naam hai notes


app.delete('/notes/:index', (req, res)=>{
  const idx = req.params.index
  delete notes[idx] 
  res.status(200).json({
    message: "note deleted successfully"
  })
})

/*(----4-----) Patch/notes(static)/:index(dynamics hai iss liye considered as a params) */ //-->ye bhi api create ke hai jiska naam hai notes

app.patch('/notes/:index', (req, res) => {
  const idx = req.params.index;
  const des = req.body.description
  const tit = req.body.title

  notes[idx].description = des;
  notes[idx].title = tit;
  res.status(200).json({
    message: "notes updated sucessfully"  
  })

  
})




module.exports = app;