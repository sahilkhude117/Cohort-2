/**
 * Create 4 Routes
 *  1.Get => Check no of kidneys and health status
 *  2.post => add new kidney
 *  3.put => user can replace a kidney,make it healthy
 *  4.delete => remove Kidney
 */

const express = require("express")
const app = express();

app.use(express.json());

const users = [{
    name: "Janardan",
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

// 1.Get => Check no of kidneys and health status
app.get("/",function(req,res){
    const januKidneys = users[0].kidneys;
    const numberOfjanuKidneys = januKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < januKidneys.length; i++) {
        if(januKidneys[i].healthy){
            numberOfHealthyKidneys =  numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnHealthyKidneys = numberOfjanuKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfjanuKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    })
})

// 2.post => add new kidney
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg : "Done!"
    })
})

// 3.put => user can replace a kidney,make it healthy
app.put("/",function(req,res){
    if(isThereatleastOneUnhealthyKidney()){
        for( let i = 0; i<users[0].kidneys.length;i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({
            msg : "Updated"
        }) 
    } else {
        res.sendStatus(411).json({
            msg:"You have no bad kidneys"
        })
    }    
})

// 4.delete => remove Kidney
app.delete("/",function(req,res){
    //411 if unhealthy => 0
    if(isThereatleastOneUnhealthyKidney()){
        const newKidneys = [];
        for( let i = 0; i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"Deleted"})
    } else{
        res.sendStatus(411).json({
            msg:"You have no bad kidneys"
        })
    }
    
})

function isThereatleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for( let i = 0; i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);

