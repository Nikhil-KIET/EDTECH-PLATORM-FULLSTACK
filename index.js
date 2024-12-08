const express=require("express");
const router=require("./Routes/Route")
const upload=require("express-fileupload")
const cookieParser=require("cookie-parser");
require("dotenv").config()
const {dbconnect}=require("./Config/dbconfig")
const cors=require("cors")
const cloudinaryconfig=require("./Config/cloudinaryconfig")


const app=express();
app.use(upload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(express.json())
app.use(cookieParser())


dbconnect()
cloudinaryconfig()

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true

}))



app.use("/apiv1",router)




app.listen(4000,()=>{
    console.log("server started listemning","4000")
})

app.get("/",(req,res)=>{
    res.send("THE SERVER IS RUNNING SUCESSFUYLLY")
    
})







