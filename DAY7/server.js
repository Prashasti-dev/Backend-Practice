const app=require("./src/app")
const mongoose=require("mongoose")
const connectToDB=require("./src/config/database")
require("dotenv").config()

connectToDB()

app.listen(8000, ()=>{
        console.log("app running on port 8000")
})