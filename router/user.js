// const router = require('express').Router()
const express = require('express')
const router = express.Router()

const PlaceController = require('../controller/controlplace')
const UserController = require('../controller/controluser')
const UserPlaceController = require('../controller/controluserplace')

router.get('/:user_id', UserController.showUserPage)

router.get('/:user_id/places/:place_id', PlaceController.description)

router.post('/:user_id/places/:place_id', UserPlaceController.review)

module.exports = router