const Section=require("../Models/Section")
const Course=require("../Models/Course")



async function createSection(req,res){
    try {
        const{name,courseId}=req.body
        if(!name || !courseId){
            res.status(401).json({
                success:false,
                message:"all fields are required"
            })
        }
        const newSec=await Section.create({name});

        const newCourse=await Course.findByIdAndUpdate({courseId},{$push:{courseContent:newSec._id}});

        res.status(200),json({
            success:true,
            message:"Section sucessfully created",
        })
        
    } catch (error) {

        console.log(error)
        res.status(401).json({
            success:false,
            message:"SECTION CREATION FAILED"
        })
        
    }
}

async function updateSection(req,res){
    try {
        const {name,sectionId}=req.body
        if(!name){
            res.status(401).json({
                success:false,
                message:"all fields are required"
            })


        }
        const newSec=await Section.findByIdAndUpdate({sectionId},{name});

        res.status(200),json({
            success:true,
            message:"Section Updated Sucessfully",
        })



        
    } catch (error) {
        console.log(error)
        res.status(401).json({
            success:false,
            message:"SECTION UpDATION FAILED"
        })
        
    }
}

async function deleteSection(req,res){
    try {


        //try using params

        const{sectionId}=req.params;
        if(!sectionId){
            res.status(401).json({
                success:false,
                message:"all fields are required"
            })


        }
        await Section.findByIdAndDelete({sectionId});
        res.status(200).json({
            success:true,
            mesaage:"Section deleted sucessfully"
        })
             

        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"DELETING SECTION FAILED"
        })
        
    }
}

module.exports={createSection,updateSection,deleteSection}