
const tag=require("../Models/Tag")


async function createTag(req,res){
    try {
        const {name,desc}=req.body

        if(!name || !desc){
          return  res.status(400).json({
                success:false,
                message:"All files are required"
            })
        }

        let newTag=await tag.create({name,desc});
       return res.status(200).json({
            success:true,
            message:"Tag creaeted Sucessfully"
        })



        
        

    } catch (error) {
        console.log(error)

       return res.status(400).json({
            success:false,
            message:"TAG CREATION FAILED"
        })
        
    }

}

async function getAllTags(req,res){
    try {
        let tags=await tag.find({},{name:true,desc:true})
        res.status(200).json({
            success:true,
            message:tags
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"TAG FETCHING FAILED"
        })

        
    }
}

module.exports={createTag,getAllTags}
