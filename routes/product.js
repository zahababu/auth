const express = require('express');
const router = express.Router();
const {
    authenticateUser,
    authorizePermissions,
} = require('../middleware/authentication');

const {
    createProduct,
    getAllProduct,
    UpProductImage,
    UpdateProduct,
    delProduct,
    getSingleProduct
} = require('../controllers/product');
const { route } = require('express/lib/router');

router.route('/').post([authenticateUser, authorizePermissions('admin')], createProduct)
    .get(getAllProduct)
router.route('/uploadImg').post([authenticateUser, authorizePermissions('admin')], UpProductImage)
router.route('/:id').get(getSingleProduct)
    .patch([authenticateUser, authorizePermissions('admin')], UpdateProduct)
    .delete([authenticateUser, authorizePermissions('admin')], delProduct)

module.exports = router