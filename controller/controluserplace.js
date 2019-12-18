
const Modeluserplace = require('../models').UserPlace

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
}

module.exports=Controlleruserplace