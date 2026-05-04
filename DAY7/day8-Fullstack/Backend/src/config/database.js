
const mongoose=require("mongoose")


/**database se connect kr jaana */

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB")
    })
}

module.exports=connectToDB