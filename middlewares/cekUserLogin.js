const User = require('../models').User
// const session = require('express-session')

function cekUserLogin(req,res,next){
        // /:user_id/places/:place_id
    User.findOne({where:{id: req.params.user_id}})
    .then(user=>{
        if(!user){
            res.send('User Not Found')
        }else if(user.login===0){
            res.send('belum login')
        }else if(user.login===1){
            next()
        }else{
            res.send('belum login')
        }
    })
    .catch(err=>{res.send(err)})
}

module.exports = cekUserLogin