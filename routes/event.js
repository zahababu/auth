const express = require('express')
const router = express.Router()
const { eventPost, get1Eve, getEve, upEve, delEve } = require('../controllers/event')

router.route('/event').post(eventPost).get(getEve)
router.route('/event/:id').get(get1Eve).put(upEve).delete(delEve)

module.exports = router