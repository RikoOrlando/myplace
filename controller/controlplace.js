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
            res.render('home', { places: data})
        })
        .catch((err)=>{
            res.send(err)
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