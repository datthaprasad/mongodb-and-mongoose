const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/task-manager',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("database connected with mongoose");

}).catch(()=>{
    console.log("error while connect");
})



module.exports={mongoose};