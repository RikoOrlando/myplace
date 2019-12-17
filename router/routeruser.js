const express = require('express')
const router = express.Router()
const controller = require('../controller/controluser')


router.get('/:id', controller.profile)




module.exports = router