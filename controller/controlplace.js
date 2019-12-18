const PlaceModel = require('../models').Place
const UserModel = require('../models').User

class PlaceController{
    static findtop5(req,res){
        PlaceModel.findAll(
            {
                include:[
                    UserModel
                ]
            }
        )
        .then((data)=>{
            res.render('home', { places: data})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static showSignUp(req,res){
        res.render('signup')
    }
    static createUser(req,res){
        UserModel.create({...req.body,login: 0})
        .then(x=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
    }
}


  


module.exports=PlaceController