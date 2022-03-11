const express = require('express')
const router = express.Router()
const {home, createUser,slot} = require('../controllers/tasks')

router.route('/').get(home).post(createUser)
router.route('/slot').get(slot)


module.exports = router
