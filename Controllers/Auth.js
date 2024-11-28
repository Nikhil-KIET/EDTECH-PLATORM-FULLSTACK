
const otpGenerator = require('otp-generator')

const User=require("../Models/User")
const Otp=require("../Models/Otp")
const bcrypt = require('bcrypt');
const jsonwebtoken=require("jsonwebtoken")

const cookieParser=require("cookie-parser")


//send otp


async function sendOtp(req,res){
    try {
        const {email}=req.body;

        let user=await User.findOne({email:email});
        if(!user){
            res.status(401).json({
                success:false,
                message:"Please register your email id first   ||  please enter a correct email id"
            })
        }

        

        const otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false ,lowerCaseAlphabets:false});

        // if needed check for uniqueness of OTP

        let newOtp=await Otp.create({email,otp});


        res.status(200).json({

            success:true,
            message:"otp sended sucessfully"
        })





        
    } catch (error) {
        console.log(err)
        res.status(400).json({
            success:false,
            message:"ERROR IN SENFING OTP ,PLEASE TRY AFGAIN"
        })


        
    }
}

//signup


async function signup(req,res){
    try {

        const{firstName,lastName,email,phone,password,confirmpassword,accountType,otp}=req.body

        if(!firstname || !lastname || !email || !phone || !password || !confirmpassword || !accountType ||!otp){
            res.status(401).json({
                success:false,
                message:"Please fill all the fields!!"
            })
        }
        if(password!==confirmpassword){
            res.status(401).json({
                success:false,
                message:"Password mismatch with ConfirmPassword"
            })


        }
        await User.findOne({email});
        if(User){
            res.status(401).json({
                success:false,
                message:"An User is already registered with this email",
            })
        }

    let newOtp=await Otp.find({email}).sort({createdAt:-1}).limit(1)

    if( newOtp.length<=0 || newOtp.otp!=otp ){
        res.status(400).json({
            success:false,
            message:"invalid Otp"
        })
    }

        password=bcrypt.hash(password,7);

        const image= `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`

        



       

        const newUser=User.create({firstname,lastname,email,phone,password,accountType,image})

        res.status(200),json({
            success:true,
            message:"user created sucessfully",
        })



        
    } catch (error) {
        console.log(err)

        res.status(400).json({
            success:false,
            message:"SIGNUP FAILED PLEASE TRY AGAIN"
        })


        
    }
}

//login

async function login(req,res){
    try {

        const{email,password}=req.body;

        const user=User.findOne({email});
        if(!user){
            res.status(401).json({
                success:false,
                message:"The emailid you Entered is not registered please signup "
            })
        }
       if(! await bcrypt.compare(password,user.password)){
        res.status(401).json({
            success:false,
            message:"Incorrect Password "
        })

       }

       const token=jsonwebtoken.sign({
        id:user._id,
        raccountType:user.accountType,
        email:user.email,

       },process.env.JWT_SECREAT,{
        expiresIn:"3hr"

       })

       res.status(200).cookie("studynotion",token,{
        httpOnly:true,
        expiresIn:"3hr",
       }).json({
        success:true,
        message:"Login sucessfull"
       })






        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"Login failed Please try again "
        })
        
    }
}




//chnage password

async function changePass(){
    try {
        const {email,oldPass,newPass,cnfNewPass}=req.body

        if(!await bcrypt.compare(oldpass,await User.findOne(email).password)){
            res.status(400).json({
                success:false,
                message:"old  passwordis incorrect"
            })
        }
        if(newPass!==cnfNewPass){
            res.status(400).json({
                success:false,
                message:"newPass and cnf newpass mismatch"
            })

        }
        let hashed=bcrypt.hash(newPass,7);
        let upadtedUser=User.findOneAndUpdate({email},{password:hashed})
        res.status(200).json({
            success:true,
            message:"Password chnaged Sucessfully"
        })

        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Password chnage failed Plz try again"
        })
        
    }
}

module.exports={sendOtp,login,signup,changePass}


