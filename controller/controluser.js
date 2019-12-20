const PlaceModel = require('../models').Place
const UserModel = require('../models').User
const Compare = require('../helper/bcryptpassword')

undefined
class UserController {
   static updateUser(req,res){
       let user = null
       UserModel.findOne({where:{username: req.body.username}})
       .then(data=>{
           user = data
            return Compare.compare(req.body.password, data.password)
        })
        .then((hash)=>{
            if(hash){
                req.session.userId = user.id
                res.redirect(`/user/${user.id}`)
            }
            else{
                res.render('login',{err:'Password salah'})
            }
       })
       .catch(err=>res.render('login',{err:'Username belum terdaftar'}))
   }
   static showLogin(req,res){
       res.render('login', {err:null})
   }
    static showUserPage(req,res){
        let userdata = null
        UserModel.findOne({include: [PlaceModel],where:{id: req.params.user_id}})
        .then(data=>{
            userdata = data
            return PlaceModel.findAll()
        })
        .then(places=>{
            let visited = []
            let unvisited = []
            userdata['Places'].forEach(element => {
                visited.push(element.id)
            });
            places.forEach(element => {
                if(visited.includes(element.id) === false){
                    unvisited.push(element)
                }
            });
            
            res.render('userpage',{user:userdata, unvisited, user_id:req.params.user_id})
        })
        .catch(err=>res.send(err))
    }
    static logOutUser(req,res){
        req.session.destroy()
        res.redirect('/')
    }

    static edit(req,res){
        UserModel.findOne({where:{id:req.params.id}})
        .then((data)=>{
            res.render('editprofile',{data,err:null})
        })
    }

    static edituser(req,res){
        let update = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            description: req.body.description
        }
        UserModel.update(update,{where:{id:req.params.id}})
        .then((data)=>{
            res.redirect('/')
        })
    }
}


module.exports=UserController