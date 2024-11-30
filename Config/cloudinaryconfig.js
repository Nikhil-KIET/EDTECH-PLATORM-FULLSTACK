
const cloudinary = require('cloudinary').v2;



async function cloudinaryconfig(){

    try {
        cloudinary.config({ 
            cloud_name: 'dg0ipzurd', 
            api_key: '395862334727711', 
            api_secret: 'qLV-FXvzrPIFIacyKBPF1uHjkmk'
          });
        
    } catch (error) {

        console.log("error in connecting to cloudinary",error)
        
    }

}
module.exports=cloudinaryconfig

