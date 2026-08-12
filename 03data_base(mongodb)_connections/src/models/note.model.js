const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({  // schema yaha create kiye hai data base ko 
      title: String,                      // ko batane ke liye ke kis tarike ka data 
      description: String                 // ko store karna hai


})

const noteModel = mongoose.model('note', noteSchema);  
/* noteModel  wo cheez jisse tum actually database me note save/dhundh/delete kar sakte ho jo ke crud operation performs hota hai wahi  */

module.exports = noteModel;