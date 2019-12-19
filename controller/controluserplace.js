const User = require('../models').User
const Modeluserplace = require('../models').UserPlace
const Place = require('../models').Place

class Controlleruserplace{
    static review(req,res){
        let data = {
            PlaceId: req.params.place_id,
            UserId: req.params.user_id,
            score:req.body.score
        }
        Modeluserplace.create(data)
        .then(data=>{
            let address = '/user/'+data.UserId
            res.redirect(address)
        })

    }
    static deletePlace(req,res){
        Modeluserplace.destroy({where:{UserId: req.params.user_id,PlaceId: req.params.place_id}})
        .then(x=>{
            // res.send(data)
            res.redirect(`/user/${req.params.user_id}`)
        })
        .catch(err=>res.send(err))
    }
}

module.exports=Controlleruserplace