const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "12345";

const app = express();
app.use(express.json());

//Database Connection
mongoose.connect(
    ,
);

const User = mongoose.model("User", {
    email: String,
    username: String,
    password: String,
});


app.post("/signin", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const isUsername = await User.find({username : username });
    const isEmail = await User.find({email : email });
    if(isUsername || isEmail ) {
        return res.status(400).json({
            msg: "User Already Exists"
        });
    }


    const user = new User ({
        email : email,
        username: username,
        password: password
    })

    user.save();

    res.json({
        msg: "User Created Successfully"
    })

});

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        //return list of users other than this username
        return res.json({
            users: ALL_USERS.filter(function(value){
                if(value.username == username){
                    return false;
                }else{
                    return true;
                }
            })
        });
    } catch (err){
        return res.status(403).json({
            msg: "Invalid Input",
        });
    }
});

app.listen(3000);


