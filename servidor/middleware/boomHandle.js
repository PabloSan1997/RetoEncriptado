
const boomHandle = (error, req, res, next)=>{
    if(error.isBoom){
        const message = error.output.payload;
        res.status(message.statusCode).json(message);
    }
    res.json(error);
    next(error);
}
module.exports = {boomHandle}