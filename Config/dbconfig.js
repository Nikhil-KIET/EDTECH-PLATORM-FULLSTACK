const mongoose =require("mongoose");
require("dotenv").config()

function dbconnect(){
   
        mongoose.connect(process.env.DB_URL,{
            usenewUrlParser:true,
            useUnifiedTopology:true,

        }) .then(()=>{
            console.log("DB CONNECTION SUCESSFULL")
        }).catch((err)=>{
            console.log("DB CONNECTION FAILED",err.message)
            process.exit(1);

        })
        
    
}

 module.exports={dbconnect}