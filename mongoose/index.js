const {mongoose}=require('./app')

Task=mongoose.model("Task",{
    description:{
        type:String,
        required:true,
        minlength:5,
        validate(value){
            if(value==="dattha")
                throw new Error("name dattha not valid");
        }
    }
});

const task1=new Task({
    description:"dattha2"
})

task1.save().then(()=>{
    console.log("saved");
}).catch((err)=>{
    console.log("error "+err.message[0]);
})

