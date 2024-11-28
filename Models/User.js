const mongoose =require("mongoose");
const Profile=require("./Profile");
const CourseProgress=require("./CourseProgress")


const userSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true

        
    },
    lastName:{
        type:String,
        required:true,
        trim:true

        
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    accountType:{
        type:String,
        enum:["Admin","Instructor","Student"],
        required:true,
        
    },
    phone:{
        type:String,
        required:true

    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,

        default:null,
        
        ref:"Profile"
    },
    courses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Course"

        }
    ],
    image:{
        type:String,
        required:true,

    },
    courseProgress:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"CourseProgress"

        }
    ],
    resetToken:{
        type:String
    },
    resetTime:{
        type:Date
    }


    



})

module.exports=mongoose.model("User",userSchema)