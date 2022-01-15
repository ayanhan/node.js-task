 const errorHandler = (err,req,res,next) => {
     return res.status(500).json({mes:err})
 }

 module.exports = errorHandler 