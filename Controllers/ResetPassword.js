
const User=require("../Models/User")

const bcrypt=require("bcrypt")

const {sendMail}=require("../Utils/Nodemailer")
const crypto =require("crypto")

async function reset(req,res){
    try {

        const{email}=req.body

        const newUser=await User.findOne({email})
        if(!newUser){
            res.status(401).json({
                success:false,
                message:"No account exists with this email"
            })
        }
        let uuid=crypto.randomUUID();

       await  User.findByIdAndUpdate(newUser._id,{resetToken:uuid,resetTime:Date.now()*100000})

       let link=`www.resetmypass/${uuid}`

       await sendMail("Link to Rest your Password",email,link);

       res.status(200).json({
        success:true,
        message:"Passord Rest Link Sent To Your Registered EmaiL Address"
       })




        
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success:false,
            message:"PASSWORD RESET FAILED !PLZ TRY AGAIN AFTER SOME TIME"
        })
        
    }
}

async function resetPass (req,res){
    try {
        const {email,pass,cnfPass,uuid}=req.body

        if(pass!==cnfPass){
            res.status(400).json({
                success:false,
                message:"pass and cnfpass mismatch"
            })
        }
        let user=await User.findOne({email});
        if(user.resetToken!==uuid || user.resetTime<Date.now() ){
            return res.status(400).json({
                success:false,
                message:"token mismatch or link expired"
            })

        }

        let hased=await bcrypt.hash(pass,7);


        let newUser=await User.findOneAndUpdate({email},{password:hased,resetToken:null});
        res.status(200).json({
            success:true,
            message:"Password Updated SucessFully"
        })

        
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success:false,
            message:"PASSWPRD RESET FAILED "
        })
        
    }
}

module.exports={reset,resetPass}
