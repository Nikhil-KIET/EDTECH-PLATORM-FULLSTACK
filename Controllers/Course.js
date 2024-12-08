
const Course=require("../Models/Course")
const User=require("../Models/User")

const Tag=require("../Models/Tag")

const uploadFiles=require("../Utils/Cloudinary")

async function createCourse(req,res){
    try {

        const {courseName,courseDesc,whatYouWillLearn,price,tag}=req.body

        const {thumbnail}=req.files

        if(!courseName|| !courseDesc || !whatYouWillLearn || !price){
            res.status(400).json({
                success:false,
                message:"All field are required"
            })
        }


        let imgUrl=await uploadFiles(thumbnail)

        let newTag=Tag.findById({tag});
        if(!newTag){
            res.status(401).json({
                success:false,
                mesage:"the given tag is invalid "
            })
        }
        let userId=req.user.id
        let newCourse=await Course.create({courseName,courseDesc,whatYouWillLearn,price,instructor:userId,thumbnail:imgUrl.secure_url})

        

        await User.findByIdAndUpdate({_id:userId},{$push:{courses:newCourse._id}})

        await Tag.findByIdAndUpdate({_id:tag},{$push:{course:newCourse._id}})



        res.status(200).json({
            success:true,
            message:"Course Successsfully Created"
        })

        




        
    } catch (error) {

        console.log(error)
        res.status(400).json({
            success:false,
            message:"COURSE CREATION FAILED"
        })
        
    }
}


async function getCourses(req,res){

    try {
        let allCourse=await Course.find({});

        res.status(200).json({
            success:true,
            message:"all courses are fetched sucessfuly",
            allCourse
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"all courses FETCHING FAILED"
        
        })
        
    }

}

async function getDetails(req,res){
    try {
        const{courseId}=req.body;

        let newCourse=await Course.aggregate({
            $match: { _id: courseId }
        }
        ).populate({
            path:"instructor",
            
        }).populate("tag").populate("ratingAndReviews").populate({
            path:"courseContent",
            populate:{
                path:"subSection"
            }
        }).exec()

        res.status(200).json({
            success:true,
            message:"courcse detail fetching sucessfull",
            newCourse

        })

        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"courcse detail fetching Failed"
            

        })
        
    }
}

module.exports={createCourse,getCourses,getDetails}