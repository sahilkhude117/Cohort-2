const express = require("express");
const app = express();
const z = require("zod");

// array of Numbers
const schema = z.array(z.number());

// 

app.use(express.json());

function validateInput(obj) {
    const schemaa = z.object({
        email : z.string().email(),
        password : z.string().min(8)
    });

    const responce = schemaa.safeParse(obj);
    console.log(responce);
}

app.post("/login",function(req,res){
    const responce = validateInput(req.body)
    if(!responce.success) {
        res.json({
            msg: "Your Inputs are Invalid"
        })
        return;
    }
})

app.post("/health-checkup" ,function (req,res){
    const responce = schemaa.safeParse({
        email : "sahilkhude@gmail.com",
        password : "Assdgughwodff",
        country : "IN"
    })

    res.send({
        responce
    })
});

app.get("/health-checkup" ,function (req,res){
    const responce = schemaa.safeParse({
        email : "sahilkhude@gmail.com",
        password : "Assdgughwodff",
        country : "IN"
    })
    res.send({
        responce
    })
});


//Global Catches
app.use(function(err,req,res,next){
    res.status(403).json({
        msg : "Server Downn"
    })
})


app.listen(3000);