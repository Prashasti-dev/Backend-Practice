const express=require("express")
const app=express()

app.use(express.json()) //middleware  express.js is now capable to read frontend data
 
//create note
const notes=[]

app.post("/notes" , (req,res)=>{
    console.log(req.body);  //req.body ke andar data mangwaenge
    notes.push(req.body)

    res.send("note created")
})
app.listen(3000,()=>{
    console.log("server is running on port no 3000");
})

//GET -->retrieve resources or list of resources
app.get("/notes" , (req, res)=>{
    res.send(notes)
})