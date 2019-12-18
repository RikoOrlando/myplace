const express = require('express')
const app = express()
const router = require('./router')
const Controller = require('./controller/controluser')


//home page
app.get('/',Controller.showHome)//akan render home.ejs dan menyediakan data" places

app.get('/sign-up', Controller.showSignUp)//render form 
app.post('/sign-up', Controller.createUser)// islogin = false (default)

app.get('/log-in', Controller.showLogin)//render form login
app.post('/log-in', Controller.updateUser)// update isLogin jadi true

app.get('/:place_id/place', Controller.showPlace)// kalau gambar recommended di klik akan pindah ke page deskripsi tempat

app.listen(3000,()=>{
    console.log("server dengan local host 3000 sedang berjalan")
})