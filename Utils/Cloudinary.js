const cloudinary = require('cloudinary').v2


async function uploadFiles(file){
    try {
        let option={
            folder:"imgdb",
    
        }
        return upload=await cloudinary.uploader.upload(file.tempFilePath,option).catch((err)=>{
            console.log(err)
        })
        
    } catch (error) {
        console.log(err)
        
    }

    
}

module.exports=uploadFiles;