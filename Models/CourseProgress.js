const mongoose =require("mongoose");

const SubSection=require("./SubSection")
const Course=require("./Course")



const courseProgressSchema =new mongoose.Schema({
    courseID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"

    },
    completedVideos:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubSection"
    }
    ]

    

   


})

module.exports=mongoose.model("CourseProgress",courseProgressSchema)