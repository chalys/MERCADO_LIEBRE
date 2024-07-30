module.exports = (req,res,next)=>{
    if (req.cookies.userLogin){
        ewa.locals.userLogin = req.session.userLogin
    }
    next()
}