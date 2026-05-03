/**
 * server ko create karna
 */


const express=require("express")
const noteModel=require("./models/notes.model")

const app=express()

//middleware
app.use(express.json())

/**
 * -POST /notes
 * -( req.body)--  me title aur desc aayega =>{title, description}
 */

//API-->
app.post("/notes", async(req, res)=>{
    const{title, description} =req.body    //destructure 

    /** noteModel.create() -note ko create kregi and data store kregi mumbai wale cluster me  , kitna time lgega nhi pta toh await lga diya and storen in  a const */
  const note= await noteModel.create({
        title,description 
    })
    
    res.status(201).json({
        message:"note succesfully create ho gya h",
        note
    })
})


app.get("/notes",async (req,res)=>{
   const note= await noteModel.find()  //database me saare notes ko return krke note var ke andar save and res me saved 
   /**find method retrun data in the form  of array of objects */

   res.status(200).json({
    message:"Notes fetched succesfully",
    note
   })
})


module.exports=app