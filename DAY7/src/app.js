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


module.exports=app