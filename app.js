const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient

const url='mongodb://127.0.0.1/27017/';

mongoClient.connect(url,(err,db)=>{
    if(err){
        console.log("error"+err);
    }
    else{
        console.log("connected");
        var dbo=db.db("task-manager");
        var myobj={
            name:"DP",
            address:"madanthyar"
        };

        // dbo.collection("task").insertOne(myobj,(err,res)=>{
        //     if(err) throw err;
        //     console.log("document inserted");
            
        // })

        const obj=[{
            name:'dp1',
            address:'mangalore'
            },
            {
                name:'dp2',
                address:'madanthyar'
            }
        ]

        // dbo.collection("task").insertMany(obj,(err,res)=>{
        //     if(err) throw err;
        //     console.log("many document inserted");
            
        // })

        dbo.collection("task").find({},{projection:{address:0}}).toArray((err,res)=>{
            console.log(res);
            console.log(res[2].name);
            db.close()
        })

        // dbo.createCollection("task",(err,res)=>{
        //     if(err) throw err;
        //     console.log("collection created");
        //     db.close()
        // })
    }
})