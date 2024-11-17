const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { authorization } = req.headers;
    if(authorization){
        const token = authorization.split(" ")[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            if(decoded){
                req.user = decoded;
                next();
            } else res.status(401).send("Unauthorized");
        } catch (error) {
            res.status(401).send("Unauthorized");
        }
    } else res.status(401).send("Unauthorized");
}

module.exports = adminMiddleware;