console.log("Hello, World! this is starting backend journey ");

const fs = require('fs');
fs.writeFile('output.txt', 'writing File', (err) => {
  if(err) console.log('error occured');
  else console.log('file written successfully');
   
}   ) 

const catMe = require('cat-me');  
 
 console.log(catMe());