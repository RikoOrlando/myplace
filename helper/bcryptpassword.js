const bcrypt = require('bcrypt');
const saltRounds = 5;

class Password{
    static hash (params) {
        return new Promise (function (resolve,reject) {
            bcrypt.genSalt(saltRounds,function(err,salt) {
                bcrypt.hash(params, salt, function(err,hash){
                    if(err){
                        reject(err)
                    }else{
                        resolve(hash)
                    }
                })
            })
        })
    }
    
    static compare(pass,hashed){
        return new Promise (function(resolve,reject){
            bcrypt.compare(pass, hashed, function(err, res) {
                resolve(res)
            });
        })
    }
}

module.exports=Password



