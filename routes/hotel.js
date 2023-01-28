const express = require('express')
const router = express.Router()
const { hotelPost, get1Hot, getHot, upHot, delHot } = require('../controllers/hotel')

router.route('/hotel').get(getHot).post(hotelPost)
router.route('/hotel/:id').get(get1Hot).put(upHot).delete(delHot)

module.exports = router