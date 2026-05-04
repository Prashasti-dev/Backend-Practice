/**server create krna */

const express=require("express")
const noteModel=require("./models/note.model")
const cors=require('cors')

const app=express()
app.use(cors())  //server cross origin request accept krna chaalu kr deta hai

app.use(express.json())  //middleware

/**
 * -POST /api/notes
 * -create new node and save data in mongoDB
 * req.body=title,description
 */
app.post("/api/notes", async(req,res)=>{
const{title, description}=req.body
//ab is data ko new note create & save  krna hai mongoDB me --opr perform krna h note pe

const note=await noteModel.create({
    title,description
    })
    res.status(201).json({
        message:"note ban gya hai"
})
})


/**
 * -GET /api/notes
 * -fetch all the notes from mongodb and send them to response
 */
app.get("/api/notes", async(req,res)=>{
  const note= await noteModel.find();

  res.status(200).json({
    message:"Note fetch ho gya hai ",note
  })
})

/**
 * -DELETE /api/notes/:id
 * delete note with the id from req.params
 */
app.delete('/api/notes/:id', async(req,res)=>{
    const id =req.params.id
    const note= await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message:'Note delete ho gya j'
    })
})

/**
 * -PTACH /api/notes/:id
 * -update the description of the node by id
 * -req.body{description}
 */

app.patch('/api/notes/:id', async(req,res)=>{
    const id= req.params.id
    const {description}=req.body

   await noteModel.findByIdAndUpdate(id, {description})

   res.status(200).json({
    message:"Note update ho gya hai"
   })
})


module.exports=app