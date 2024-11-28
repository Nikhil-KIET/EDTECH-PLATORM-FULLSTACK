const Profile=require("../Models/Profile")
const User=require("../Models/User")

async function createProfile(req,res){

  try {

    const {name,contactNumber,about,dateOfBirth,gender}=req.body;

    const{userId}=req.user._id

    let uid=await User.findById({_id:userId});

    if(uid.additionalDetails===null){
        let profile=await Profile.create({contactNumber,about,dateOfBirth,gender});
        await User.findByIdAndUpdate({_id:userId},{additionalDetails:profile._id})

        res.status(200).json({
            success:true,
            message:"PROFILE CREATED SUCESSFULLY"
        })




    }else{
        let profile=await Profile.findByIdAndUpdate({_id:uid.additionalDetails},{contactNumber,about,dateOfBirth,gender});

        res.status(200).json({
            success:true,
            message:"PROFILE Updated SUCESSFULLY"
        })
    }

    //it is cahnged just for twsting
    res.status(200).json({
        success:true,
        message:"PROFILE Updated SUCESSFULLY"
    })
    
  } catch (error) {

    res.status(401).json({
        success:false,
        message:"PROFILE CREATION/UPDATION SUCESSFULLY"
    })


    
  }


    

    

    




}

module.exports={createProfile}