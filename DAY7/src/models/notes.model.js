const mongoose=require("mongoose")

/*in what format you will store your data 
SCHEMA--structure

new mongoose.Schema()*/

const noteSchema=new mongoose.Schema({
    title: String,
    description: String,
})

/** Create a model  --to perform any operation
 * 
 mongoose.model("COLLECTION NAME")
 */
const noteModel=mongoose.model("notes" , noteSchema)

module.exports=noteModel;