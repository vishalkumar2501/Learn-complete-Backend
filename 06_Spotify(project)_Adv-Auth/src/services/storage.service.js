const {ImageKit} = require('@imagekit/nodejs');

const ImageKitClint = new ImageKit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    
}) 

async function uploadFile(file){
    try{
        const result = await ImageKitClint.files.upload({
            file,
            fileName:"music_" + Date.now(),
            folder:'music'
        })

    return result;

    }catch(error){
        console.log(error);
    }
}

module.exports ={ uploadFile };