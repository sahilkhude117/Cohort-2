const globalcatchMiddleware = (err, req, res, next) => {
    console.log('hii');
    res.status(500).json({message: err.message});

}

module.exports = globalcatchMiddleware;