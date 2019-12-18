let usermodel = require('../models').User
let model = require('../models')



class Controller {
    static profile(req,res){
        usermodel.findOne(
            {
                include:[
                    model.Place
                ],
                where:{id:1}
            }
        )
        .then((data)=>{
            console.log(data.Places)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
}




let data = {
    first_name: 'Febriani',
    last_name: 'Kenedy',
    username: 'febrianikenedy',
    email: 'febrianikenedy@gmail.com',
    password: 'febrianikenedy',
    description: 'Jangan Menyerah',
    birthday:null
  }



let review = {
    UserId: 6,
    PlaceId: 9,
    rating: 4,
    review: 'max 255 char'
  }

 


module.exports=Controller