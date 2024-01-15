const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://shashank81:Shas123@cluster0.bbjcco5.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
 console.log("mongod connected");
})
.catch(()=>{
 console.log("fialed to disconnected");
})
const LongInSchema=new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 password:{
  type:String,
  required:true
 }
})

const collection=new mongoose.model("Collection",LongInSchema)
module.exports=collection