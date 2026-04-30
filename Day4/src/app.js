const express=require("express");

const app=express();
console.log("server running on port 8080");

app.use(express.json())
const notes=[]

// POST
app.post("/notes", (req,res)=>{
        console.log(req.body);
        notes.push(req.body)  //jab data jyada aa skta h jyada data handle krna ho
        console.log(notes);
        
        res.send("notes created")
})

// GET
app.get("/notes", (req, res)=>{
    res.send(notes)
})

//for single value ke liye use request. params
// DELETE 
app.delete("/notes/:index",(req, res)=>{
    delete notes[req.params.index]
    res.send("notes deleted succesfully")
})


// PATCH 

app.patch("/notes/:index", (req, res)=>{
    notes[req.params.index].description=req.body.description
    notes[req.params.index].title=req.body.title
    res.send("notes updated")
    console.log("note updated")
})

module.exports=app //server is exported from app.js and send out
