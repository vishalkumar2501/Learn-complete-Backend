// basiclly ye schema isliea banana padta hai  ke jisse hume ye malum chal sake ke database me kaise data store kerna chathe hai string , integer .....etc 

const mangoose = require('mongoose');

const postSchema = new mongoose.Schema({  
  image: String,
  caption: String,
})

const postModel = mongoose.model('post', postSchema);// isme post naam ke collection me postSchima ka sara data store hoga


module.exports = postModel;