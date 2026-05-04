/**1    server start krna 
 * 2    database se connect krna
 */

const app=require("./src/app")
require ("dotenv").config()
const connectToDB=require("./src/config/database")

connectToDB()

app.listen(3000,()=>{
    console.log("server started on port 3000")
})
