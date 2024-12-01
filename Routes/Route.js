const express=require("express");
const { login, signup, changePass, sendOtp } = require("../Controllers/Auth");
const {createCourse,getCourses,getDetails } = require("../Controllers/Course");
const { createPay, verifySign } = require("../Controllers/CreatePay");
const { reset, resetPass } = require("../Controllers/ResetPassword");
const { createProfile, updateUser } = require("../Controllers/Profile");
const { createRating, avgRating } = require("../Controllers/Rating");
const { createSection, updateSection, deleteSection } = require("../Controllers/Section");
const { createSubsection, updateSubsection, deleteSubsection } = require("../Controllers/SubSection");
const { createTag, getAllTags } = require("../Controllers/Tag");
const { auth } = require("../Middlewares/auth");


//debugging if any of the function giving undefined
//console.log( login, signup, changePass,createCourse,getCourses,getDetails,createPay, verifySign,reset,createProfile, createRating, avgRating,createSection, updateSection, deleteSection,createSubsection, updateSubsection, deleteSubsection,createTag, getAllTags)

const router=express.Router();



router.get("/login",login)
router.post("/signup",signup)//chk
router.post("/createCourse",createCourse)//chk
router.get("/getCourses",getCourses)
router.get("/courseDetails",getDetails)
router.post("/buyCourse",createPay)//chk
router.get("/checkSign",verifySign)//chk
router.put("/changePass",changePass)
router.get("/resetPass",reset)
router.post("/createProfile",auth,createProfile)//chk
router.post("/createRating",createRating)//chk
router.get("/avgRating",avgRating)
router.post("/createSection",createSection)//chk
router.put("/updateSection",updateSection)//chk
router.delete("/deleteSection",deleteSection)
router.post("/createSubs",createSubsection)//chk
router.put("/updateSubs",updateSubsection)
router.delete("/deleteSubs",deleteSubsection)
router.post("/createTag",createTag)//chk
router.get("/getTag",getAllTags)
router.get("/sendOtp",sendOtp)
router.put("/updatePic",auth,updateUser)
router.put("/updatePass",resetPass)


module.exports=router




