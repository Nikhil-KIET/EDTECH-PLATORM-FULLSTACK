const { default: mongoose } = require("mongoose");
const Profile=require("../Models/Profile")
const User=require("../Models/User")

const fileupload=require("../Utils/Cloudinary")

async function createProfile(req,res){

  try {

    const {name,contactNumber,about,dateOfBirth,gender}=req.body;
    

    const userId=req.user.id

    let uid=await User.findById({_id:userId});

    if(uid.additionalDetails===null){
        let profile=await Profile.create({contactNumber,about,dateOfBirth,gender});
        await User.findByIdAndUpdate({_id:userId},{additionalDetails:profile._id})

        res.status(200).json({
            success:true,
            message:"PROFILE CREATED SUCESSFULLY"
        })




    }else{

      let id=uid.additionalDetails
      


        let profile=await Profile.findByIdAndUpdate({_id:id},{contactNumber,about,dateOfBirth,gender});

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
    console.log(error)

    res.status(401).json({
        success:false,
        message:"PROFILE CREATION/UPDATION Failed"
    })


    
  }


    

    

    




}

async function updateUser(req,res){
  try {
    const{dp}=req.files;
    const {id}=req.user
    
    let newdp=await fileupload(dp)

    const newUser=await User.findByIdAndUpdate({_id:id},{image:newdp.secure_url});

    res.status(200).json({
      success:true,
      message:"PROFILEPIC UPDATED SUCESS FULLY",
      url:newdp.secure_url
    })
    
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success:true,
      message:"PROFILEPIC UPDATED FAILED"
    })
    
  }
}

module.exports={createProfile,updateUser}