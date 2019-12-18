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
            res.render('userpage',{user:userdata, unvisited})
        })
    }
}


module.exports=UserController