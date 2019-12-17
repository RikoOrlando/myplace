const express = require('express')
const app = express()
const router = require('./router')


//home page
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.post('/',(req,res)=>{
    
})


app.use('/user', router.user)

app.listen(3000,()=>{
    console.log("server dengan local host 3000 sedang berjalan")
})