const mongoose =require("mongoose");


const Section=require("./Section")
const User =require("./User")
const Tag=require("./Tag")
const Rating=require("./Rating")



const courseschema =new mongoose.Schema({
    courseName:{
        type:String,
    },
    courseDesc:{
        type:String,
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    whatYouWillLearn:{
        type:String,
    },
    courseContent:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
        
        }

    ],
    ratingAndReviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"Rating",

        }
    ],
    price:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    tag:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"Tag",

        }

    ],
    studentsEnrolled:[
        {
            type:mongoose.Schema.Types.ObjectId,
        ref:"User" 
            
        }
    ]


    


   


})

module.exports=mongoose.model("Course",courseschema)