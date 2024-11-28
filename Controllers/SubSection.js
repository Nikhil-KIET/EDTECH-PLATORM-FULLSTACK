const Section = require("../Models/Section");
const SubSection=require("../Models/SubSection")

const videoUpload=require("../Utils/Cloudinary")

async function createSubsection(req,res){
    try {

        const  {name,desc,sectionId}=req.body
        let vdo =req.files.video;
        if(!name || !desc || !vdo){
            res.status(401).json({
                success:false,
                message:"all fileds are compulsary"
            })
        }

        const videoUrl=await videoUpload(vod).secure_url;


        let ss=await SubSection.create({name,desc,videoUrl})

        await Section.findByIdAndUpdate({_id:sectionId},{$push:{subSection:ss._id}});


        res.status(200).json({
            success:true,
            message:"Subsection creayed sucess fully"
        })



        
    } catch (error) {

        res.status(401).json({
            success:false,
            message:"SUBSECTION CREATION FAILED"
        })
        
    }
}

async function updateSubsection(req,res){
    try {
        const  {name,desc,subsectionId}=req.body
        let vdo =req.files.video;
        if(!name || !desc || !vdo){
            res.status(401).json({
                success:false,
                message:"all fileds are compulsary"
            })
        }
        const videoUrl=await videoUpload(vod).secure_url;

        let ss=await SubSection.findByIdAndUpdate({_id:subsectionId},{name,desc})

        res.status(200).json({
            success:true,
            message:"Subsection Updated sucessfully"
        })




        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"SUBSECTION UPDATION FAILED"
        })
        
        
    }
}

async function deleteSubsection(req,res){
    try {

        const {subsectionId}=req.body;

        let ss= SubSection.findByIdAndDelete({_id:subsectionId})
        res.status(200).json({
            success:true,
            message:"Subsection deleted sucessfully"
        })


        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"SUBSECTION deleted FAILED"
        })
        
    }
}

module.exports={createSubsection,updateSubsection,deleteSubsection}