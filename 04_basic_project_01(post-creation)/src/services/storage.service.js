// iss file ka isliye hum used ker rahe hai ke jisse abhi cloude services  me imagekit used ker rahe hai baad me kuch or bhi ckoude services used ker sakte hai jaise cloudanary, amazone s3 .....etc isliye  jab kuch fix na ho to aaise he file me code likhte hai   
const ImageKit = require("@imagekit/nodejs")

const  imageKit = new ImageKit({
    
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY // imageKit pr jaker devloper opn me 
    })                                                   //   privete link copy then hear pest


async function uploadFile(buffer){

   console.log(buffer);


  const result = await imageKit.files.upload({
      file: buffer.toString("base64"),
      fileName:"image.jpg"
  })


  return result;

}


module.exports = uploadFile;
