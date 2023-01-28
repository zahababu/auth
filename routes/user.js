const express = require('express');
const router = express.Router();
const { authUser } = require('../middleware/auth')
const {
    getAll,
    getOne,
    showCurrentUser,
    upUser,
    upUserPass,
    delUser
} = require('../controllers/user')

router.route('/').get(authUser, getAll)
router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').patch(upUser)
router.route('/updateUserPass').patch(upUserPass)
router.route('/deleteUser').delete(delUser)
router.route('/:id').get(authUser, getOne)

module.exports = router;