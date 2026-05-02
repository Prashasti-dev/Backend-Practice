const mongoose=require("mongoose")


function connectToDB(){
    mongoose.connect("Your cluster url")
    .then(()=>{
        console.log("database connected")
    })
}

module.exports=connectToDB
