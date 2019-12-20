// const router = require('express').Router()
const express = require('express')
const app = express()
const router = express.Router()
const cekSession = require('../middlewares/cekSession')
const session = require('express-session')
const PlaceController = require('../controller/controlplace')
const UserController = require('../controller/controluser')
const UserPlaceController = require('../controller/controluserplace')
app.use(session({
    secret: 'keyboard cat'
  }))

router.use(cekSession)
router.get('/:user_id', UserController.showUserPage)

router.get('/:user_id/places/:place_id', PlaceController.description)

router.post('/:user_id/places/:place_id', UserPlaceController.review)

router.get('/:user_id/:place_id/delete', UserPlaceController.deletePlace)

router.get('/edit/:id', UserController.edit)
router.post('/edit/:id', UserController.edituser)

module.exports = router