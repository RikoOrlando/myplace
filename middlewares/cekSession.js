
function cekSession(req,res,next){
    if(req.session.userId){
        next()
    }else{
        res.redirect('/log-in')
    }
}

module.exports = cekSession