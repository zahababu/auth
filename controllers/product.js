const Product = require('../models/products')
const { StatusCodes } = require('http-status-codes')
const customErr = require("../errors")
const products = require('../models/products')
const path = require('path')

const createProduct = async(req, res) => {
    req.body.user = req.user.userId
    const product = await Product.create(req.body)
    res.status(StatusCodes.CREATED).json({ product })
}


const getAllProduct = async(req, res) => {
    const product = await Product.find({})
    res.status(StatusCodes.OK).json({ product, count: product.length })
}


const getSingleProduct = async(req, res) => {
    const { id: productId } = req.params

    const product = await Product.findOne({ _id: productId })
    if (!product) {
        throw new customErr.NotFoundError("chal bagh nahi ye")
    }

    res.status(StatusCodes.OK).json({ product })
}


const UpdateProduct = async(req, res) => {
    const { id: productId } = req.params

    const product = await Product.findOneAndUpdate({ _id: productId }, req.body, { new: true, runValidators: true })
    if (!product) {
        throw new customErr.NotFoundError("chal bagh nahi ye")
    }
    res.status(StatusCodes.OK).json({ product })
}


const delProduct = async(req, res) => {
    const { id: productId } = req.params

    const product = await Product.findOne({ _id: productId })
    if (!product) {
        throw new customErr.NotFoundError("chal bagh nahi ye")
    }

    res.status(StatusCodes.OK).json({ product })

    await product.remove()

    res.status(StatusCodes.OK).json({ product, msg: 'hata di ' })
}


const UpProductImage = async(req, res) => {
    if (!req.files) {
        throw new customErr.BadRequestError('No File Uploaded');
    }
    const productImage = req.files.image;

    if (!productImage.mimetype.startsWith('image')) {
        throw new customErr.BadRequestError('Please Upload Image');
    }

    const maxSize = 1024 * 1024;

    if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError(
            'Please upload image smaller than 1MB'
        );
    }
    const imagePath = path.join(
        __dirname,
        '../public/uploads/' + `${productImage.name}`
    );
    await productImage.mv(imagePath);
    res.status(StatusCodes.OK).json({ image: `/uploads/${productImage.name}` });
}


module.exports = {
    createProduct,
    getAllProduct,
    UpProductImage,
    UpdateProduct,
    delProduct,
    getSingleProduct
}