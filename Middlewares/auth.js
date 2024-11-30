
const jwt=require("jsonwebtoken")
require("cookie-parser")

require("dotenv").config()


//auth


async function auth(req,res,next){
    try {
        const token = req.cookies.cook;
        console.log(token)
       


        if(!token){
            res.status(400).json({
                success:false,
                message:"token not found"
            })
        }

        const decode=jwt.verify(token,process.env.JWT_SECREAT)
        console.log(decode)
        req.user=decode

        next();

        
    } catch (error) {
        console.log(error)
        res.status(400).json({
            success:false,
            message:"token verification failed "
        })

        
    }
}


//istsudent 

async function isStudent(req,res){
    try {
        const {user}=req.body;
        if(!user){
            res.status(400).json({
                success:false,
                message:"user not found in req body"
            })
        }
        if(user.accountType!=="Student"){
            res.status(400).json({
                success:false,
                message:"This isprotected rounteonly for studens"
            })
        }
        next()
        
    } catch (error) {

        res.status(400).json({
            success:false,
            message:"Error occured while accesing student route"
        })
        
    }
}




//isInstructor

async function isInstructor(req,res){
    try {
        const {user}=req.body;
        if(!user){
            res.status(400).json({
                success:false,
                message:"user not found in req body"
            })
        }
        if(user.accountType!=="Instructor"){
            res.status(400).json({
                success:false,
                message:"This isprotected rounteonly for Instructor"
            })
        }
        next()
        
    } catch (error) {

        res.status(400).json({
            success:false,
            message:"Error occured while accesing Instructor route"
        })
        
    }
}


//isadmin

async function isAdmin(req,res){
    try {
        const {user}=req.body;
        if(!user){
            res.status(400).json({
                success:false,
                message:"user not found in req body"
            })
        }
        if(user.accountType!=="Admin"){
            res.status(400).json({
                success:false,
                message:"This isprotected rounteonly for Admin"
            })
        }
        next()
        
    } catch (error) {

        res.status(400).json({
            success:false,
            message:"Error occured while accesing Admin route"
        })
        
    }
}

module.exports={auth,isAdmin,isInstructor,isStudent}


