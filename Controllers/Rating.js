const Rating=require("../Models/Rating")
const Course=require("../Models/Course")


async function createRating(req,res){
    try {
        const{courseId,rating,review}=req.body
        if(!courseId || !rating ||!review){
            res.status(401).json({
                success:false,
                message:"all field are required"
            })
        }

        let ex=await Rating.aggregate([{ $match: { course: courseId } },{$match :{user:req.user._id}}])
        if(ex){
            res.status(401).json({
                success:false,
                message:"You have alreday rated this course"
            })
        }

        let newRating=await Rating.create({user:req.user._id,ratig,review,course:courseId});

        await Course.findByIdAndUpdate({_id:courseId},{$push:{ratingAndReviews:newRating._id}});

        res.status(200).json({
            success:true,
            message:"Rating added sucessfully",
        })


        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"RATING CREATION FAILED"
        })
        
    }
}

async function avgRating(req,res){
    try {
        const {courseId}=req.body;
        if(!courseId){
            res.status(401).json({
                success:false,
                message:"courseid is required"
            })
        }
        let avg = await Rating.aggregate([
            { $match: { course: courseId } },
            { 
              $group: { 
                _id: null, 
                avgRating: { $avg: "$rating" } 
              } 
            }
          ]);

          if(avg.length()<=0){
            res.status(401).json({
                success:false,
                message:"No rating exits for this course currently",
                avg:0
            })
          }

        res.status(200),json({
            success:true,
            message:"Average rating fetched succesfully",
            avg:avg[0]
          })

        
    } catch (error) {
        res.status(401).json({
            success:false,
            message:"FAILED TO FECTH RATING "
            
        })

        
    }
}

module.exports={createRating,avgRating}
