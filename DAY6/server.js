/*server.js ka kaam ->database se connect krna aur usko start krna */

const app= require("./src/app")
const mongoose=require("mongoose")  //express server and database ---connect

function connectToDB(){
    
    mongoose.connect("YOUR_MONGODB_CONNECTION_STRING_HERE")

    //jb connect ho jaye toh call back chla dena
    .then(()=>{
        console.log("Connected to Database"); 
    })
}

connectToDB()

app.listen(3000 ,()=>{
    console.log("server is running on port 3000");  
})