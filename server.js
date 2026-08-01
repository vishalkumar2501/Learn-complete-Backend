const express = require('express');

const app = express();

app.get('/', (req, res)=> {  // slace api per koi bhi request(req) aati hai to aap uska response(res) kya bhejoge 
 res.send(" hello jii"); // hello jii  bhejoge 
})

app.get('/about' , (req, res) => {
  res.send("hello about page");
})



app.listen(3000, () => {
   
  console.log('Server is running on port 3000');
});

