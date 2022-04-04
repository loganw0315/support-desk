const express = require('express')
const { builtinModules } = require('module')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')

router.post('/', registerUser)

router.post('/login', loginUser)

module.exports = router