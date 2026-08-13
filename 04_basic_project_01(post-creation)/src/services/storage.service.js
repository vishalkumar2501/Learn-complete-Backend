const ImageKit = require("@imagekit/nodejs"); // ImageKit package import karta hai

const imageKit = new ImageKit({ // ImageKit ka object create karta hai
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY // .env se ImageKit ki private key leta hai
});

async function uploadFile(buffer){ // File upload karne ka function

   console.log(buffer); // Buffer ko terminal mein check karta hai

   const result = await imageKit.files.upload({ // File ko ImageKit par upload karta hai
      file: buffer.toString("base64"), // Buffer ko Base64 mein convert karta hai
      fileName:"image.jpg" // Uploaded file ka naam
   });

   return result; // ImageKit ka upload result return karta hai
}

module.exports = uploadFile; // Function ko doosri files mein use karne ke liye export karta hai