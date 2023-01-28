const express = require('express')
const router = express.Router()
const { carPost,getCar,upCar,delCar,get1Car } = require('../controllers/car')

router.route('/car').post(carPost).get(getCar)
router.route('/car/:id').put(upCar).delete(delCar).get(get1Car)

module.exports = router