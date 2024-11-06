const express = require("express");

const app = express();

app.use(express.json());

app.post("/health-checkup" ,function (req,res){
    const Kidneys = req.body.kidneyId;
    const kidneyLenght = Kidneys.length;
    

    res.send("Your Heart is healthy healthy");
});


// global catches
app.use(function(err,req,res,next){
    res.json({
        msg : "Server Down"
    })
})

app.listen(3000);