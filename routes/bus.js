const express = require('express')
const router = express.Router()
const { busPost,getBus,get1Bus,delBus,upBus } = require('../controllers/bus')

router.route('/bus').post(busPost).get(getBus)
router.route('/bus/:id').get(get1Bus).put(upBus).delete(delBus)


module.exports = router