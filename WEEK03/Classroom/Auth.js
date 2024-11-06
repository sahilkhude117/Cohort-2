const express = require("express");
const jwt = require("jsonwebtoken"); //
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [{
    username : "sahilkhude11@gmail.com",
    password: "123",
    name : "Sahil Khude"
},
{
    username : "Sameer@gmail.com",
    password: "1233",
    name : "Sameer"
},
{
    username : "Aditya@gmail.com",
    password: "1243",
    name : "Aditya Bhosale"
}]

function userExists(username,password){
    let userExists = false;
    //logic to return true or false if user exists
    for( let i = 0; i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
            userExists = true;
        }
    }
    return userExists;
}

app.post("/signin", function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username,password)){
        return res.status(403).json({
            msg : "User Doesnt Exist in our memory db",
        });
    }

    var token = jwt.sign({username: username }, jwtPassword);
    return res.json({
        token,
    });
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

