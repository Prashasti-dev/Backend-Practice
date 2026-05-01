const mongoose=require("mongoose")


function connectToDB(){
    mongoose.connect("mongodb+srv://prashasti:RRQ0KFOU8Vxa3FoO@cluster0.0vqyrm1.mongodb.net/day-7")
    .then(()=>{
        console.log("database connected")
    })
}

module.exports=connectToDB
