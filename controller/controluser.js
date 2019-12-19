const PlaceModel = require('../models').Place
const UserModel = require('../models').User


class UserController {
   static updateUser(req,res){
       let user;
       UserModel.findOne({where:{username: req.body.username}})
       .then(data=>{
           user = data
           if(!data){
            res.send('user not found')
           }
       })
       .then(arr=>{
<<<<<<< HEAD

           res.redirect(`/user/${arr[1][0].id}`)
=======
           req.session.userId = user.id
           res.redirect(`/user/${user.id}`)
>>>>>>> 5b1bf2cf8305d28434945304f45888f34afc34cd
       })
       .catch(err=>res.send(err))
   }
   static showLogin(req,res){
       res.render('login')
   }
    static showUserPage(req,res){
        let userdata = null
        UserModel.findOne({include: [PlaceModel],where:{id: req.params.user_id,login: 1}})
        .then(data=>{
            // res.send(data)
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
        // res.send(`res: ${res}`)
        UserModel.update({login: 0},{where:{id:req.params.user_id, login:1}, returning: true})
        .then(x=>{
            res.redirect('/')
        })
        .catch(err=>res.send(err))
    }
}


module.exports=UserController