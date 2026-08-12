const express = require('express');
const app = express();

const noteModel = require('./models/note.model');// ye kya kaam kerta hai ke ye noteModel ko import kerta hai jisme humne schema banaya hai database ke liye


app.use(express.json());

                       /*   No. of API's  */
/*-------------------(1) POST/notes => Get all notes--------------------------- */
app.post('/notes' , async (req, res)=>{
   const data = req.body;                        /* {title , description } */
   await noteModel.create({
      title: data.title,
      description: data.description
  })
  res.status(201).json({
    message: 'Note created successfully'
 })

})

/*(2)---------------------- GET/notes => Get all notes---------------------------- */

app.get('/notes', async (req, res) =>{
  const data = await noteModel.find();   // find() humesha [] format me data return
  res.status(200).json({                 //kerta hai chahe 1 ya 100 data ho d.b me 
    message: 'All notes fetched successfully',
    notes: data
  })
})

/*find() => find all data from database or return [] /null if no data found
findOne() => find one data from db in object format or return null if no data found
findById() => find data by id from database 

/*----------------------(3) DELETE/notes/:id => Delete note by id-------------- */

app.delete('/notes/:id' , async (req, res) =>{
  const id = req.params.id;
  await noteModel.findOneAndDelete({_id: id});
  res.status(200).json({
    message: 'Note deleted successfully'  
  })
})


/*(4) PATCH/notes/:id => Update note by id */

app.patch('/notes/:id' , async (req, res) =>{
  const id = req.params.id;
  const descp = req.body.description;
  await noteModel.findOneAndUpdate({_id: id}, {description: descp});
  res.status(200).json({
    message: 'Note updated successfully'
  })
})

module.exports = app;