const express = require('express')
const router = express.Router()
const {home, createUser,slot,slotToken,slotPost} = require('../controllers/tasks')

router.route('/').get(home).post(createUser)
router.route('/slot').get(slot).post(slotPost)
router.route('/slot/token').get(slotToken).post(slotToken)


module.exports = router
