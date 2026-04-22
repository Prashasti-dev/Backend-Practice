const express=require ("express");
const app= express(); //create instance of server 
 
app.get('/',(req , res)=>{
        res.send("hello world")
})
app.get("/about", (req, res)=>{
res.send("this is about page")
})
app.get("/home", (req, res)=>{
res.send("this is home page")
})
app.listen(3000) //server started
