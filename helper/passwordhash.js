const crypto = require('crypto');

function hashpassword(sct,param){
    const secret = sct
    const pass = 'myplace'+ param
    const hash = crypto.createHmac('sha256', secret)
                       .update(pass)
                       .digest('hex');
    return hash
}

module.exports=hashpassword