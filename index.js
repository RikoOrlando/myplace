const express = require('express')
const app = express()
const user = require('./router/user')
const PlaceController = require('./controller/controlplace')
const UserController = require('./controller/controluser')
const UserPlaceController = require('./controller/controluserplace')
const session = require('express-session')
const cekUserLogin = require('./middlewares/cekUserLogin')
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(session({
    secret: 'keyboard cat'
  }))


//home page
app.get('/',PlaceController.findtop5)//akan render home.ejs dan menyediakan data" places

app.get('/sign-up', PlaceController.showSignUp)//render form 
app.post('/sign-up', PlaceController.createUser)// islogin = false (default)

app.get('/log-in', UserController.showLogin)//render form login
app.post('/log-in', UserController.updateUser)// update isLogin jadi true

app.get('/log-out/:user_id', UserController.logOutUser)

app.use('/user', user)


app.listen(3000,()=>{
    console.log("server dengan local host 3000 sedang berjalan")
})