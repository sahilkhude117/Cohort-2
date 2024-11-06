const express = require("express");

const app = express();

let numberOfrequests = 0;

function countRequests(req,res,next){
    numberOfrequests++;
    console.log()
    next();
}

//automatically applied to all routes
app.use(countRequests);

//extracts body
app.use(express.json());

function userMiddleware(res, res,next){
    if(username != "sahil" || password != "pass"){
        res.status(403).json({
            msg : "Wrong Inputs"
        });
    } else{
        next();
    }
}

function KidneyMiddleware(res, res, next){
    if(kidneyId != 1 && kidneyId != 2){
        res.status(403).json({
            msg : "Incorrect Inputs"
        });
    } else{
        next();
    }
}

app.get("/health-checkup",userMiddleware,KidneyMiddleware,function (req,res){
    const KidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    res.send("Your Heart is healthy healthy");
});

app.get("/kidney-check",userMiddleware,KidneyMiddleware,function (req,res){
    const KidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    res.send("Kidneys are healthy");
});


// global catches
app.use(function(err,req,res,next){
    res.json({
        msg : "Server Down"
    })
})

app.listen(3000);