const express=require("express");
const router=require("./Routes/Route")
const upload=require("express-fileupload")
require("dotenv").config()
const {dbconnect}=require("./Config/dbconfig")
const cors=require("cors")

const app=express();

app.use(express.json())

app.use("/apiv1",router)
app.use(upload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));


app.listen(4000,()=>{
    console.log("server started listemning","4000")
})

app.get("/",(req,res)=>{
    res.send("THE SERVER IS RUNNING SUCESSFUYLLY")
    
})
dbconnect()
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true

}))




