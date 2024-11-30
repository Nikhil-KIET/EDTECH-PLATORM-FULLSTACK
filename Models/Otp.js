const mongoose =require("mongoose");
const { sendMail } = require("../Utils/Nodemailer");




const otpSchema =new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:5*60

    } 



  
    

   



})

async function sendVerificationemail(email,otp){
    try {
        
        await sendMail("STUDY NOTION OTP",email,otp);
        
    } catch (error) {
        console.log(error)
        
    }

}

otpSchema.pre('save',async function (next){

    await sendVerificationemail(this.email,this.otp);
    next()

    


})

module.exports=mongoose.model("Otp",otpSchema)