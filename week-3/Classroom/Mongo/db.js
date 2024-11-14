const mongoose = require("mongoose");

mongoose.connect (
    ""
)

const User = mongoose.model('Cat',{ email: String ,username :String,password:String });

const user = new User({ 
    email: "kityy@gmail.com", 
    username: "Kityy", 
    password:"121324"
});

user.save();
