const PlaceModel = require('../models').Place
const UserModel = require('../models').User



class UserController {
   static updateUser(req,res){
       UserModel.update({login: 1},{where:{password: req.body.password}, returning: true})
       .then(arr=>{
           res.redirect(`/user/${arr[1][0].id}`)
       })
       .catch(err=>res.send(err))
   }
   static showLogin(req,res){
       res.render('login')
   }
    static showUserPage(req,res){
        UserModel.findOne({include: [PlaceModel],where:{id: req.params.user_id,login: 1}})
        .then(data=>{
            // res.send(data)
            res.render('userpage',{user:data})
        })
        .catch(err=>res.send(err))
    }
    static logOutUser(req,res){
        // res.send(`res: ${res}`)
        UserModel.update({login: 0},{where:{id:req.params.user_id, login:1}, returning: true})
        .then(x=>{
            res.redirect('/')
        })
        .catch(err=>res.send(err))
    }
}


module.exports=UserController