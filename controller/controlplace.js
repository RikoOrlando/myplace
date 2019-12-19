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
            for(let i = 0; i<data.length; i++) {
                data[i].setDataValue('visitor',data[i].Users.length)
            }
            data = data.sort((a, b) => {return b.getDataValue('visitor') - a.getDataValue('visitor')})
            data = data.slice(0,5)
            //disini
            res.render('home', { places: data, userId: req.session.userId})
        })
        .catch((err)=>{
            res.send(err)
        })
    }
    static showSignUp(req,res){
        res.render('signup')
    }
    static createUser(req,res){
        // res.send(req.body)
        UserModel.create({...req.body,login: 0})
        .then(x=>{
            res.redirect('/')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static description(req,res){
        PlaceModel.findOne({
            where:{id:req.params.place_id}
        })
        .then(data=>{
            res.render('placedescription', {data:data})
        })
        
    }
}


  


module.exports=PlaceController