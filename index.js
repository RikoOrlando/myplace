const express = require('express')
const app = express()
// const router = require('./router')
const PlaceController = require('./controller/controlplace')
const UserController = require('./controller/controluser')
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'));


//home page
app.get('/',PlaceController.findtop5)//akan render home.ejs dan menyediakan data" places

app.get('/sign-up', PlaceController.showSignUp)//render form 
app.post('/sign-up', PlaceController.createUser)// islogin = false (default)

app.get('/log-in', UserController.showLogin)//render form login
app.post('/log-in', UserController.updateUser)// update isLogin jadi true

app.get('/user/:user_id', UserController.showUserPage)

app.get('/log-out/:user_id', UserController.logOutUser)

// app.get('/:place_id/place', ControllerPlace.showPlace)// kalau gambar recommended di klik akan pindah ke page deskripsi tempat

app.listen(3000,()=>{
    console.log("server dengan local host 3000 sedang berjalan")
})