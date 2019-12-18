const modelplace = require('../models').Place
const model = require('../models')

class Place{
    static findtop5(req,res){
        modelplace.findAll(
            {
                include:[
                    model.User,
                ]
            }
        )
        .then((data)=>{
            data.forEach(element => {
                console.log(element.dataValues)
                console.log(element.Users.length)
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
Place.findtop5('r','r')

let data ={
    name: 'Jalan Malioboro',
    location: 'Yogyakarta',
    description:'maksimal 255 char'
  }



  


module.exports=Place