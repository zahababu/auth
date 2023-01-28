const User = require('../models/user')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const user = require('../models/user')

const getAll = async(req, res) => {
    const user = await User.find({ role: 'user' }).select('-password')
    res.status(StatusCodes.OK).json({ user })
}
const getOne = async(req, res) => {
    const user = await User.findOne({ _id: req.params.id }).select('-password')
    if (!user) {
        throw new CustomError.NotFoundError(`nahi hai be: ${req.params.id}`)
    }
    res.status(StatusCodes.OK).json({ user })
}
const showCurrentUser = async(req, res) => {

}
const upUser = async(req, res) => {
    res.send(req.body)
}
const upUserPass = async(req, res) => {
    res.send(req.body)
}
const delUser = async(req, res) => {

}

module.exports = {
    getAll,
    getOne,
    showCurrentUser,
    upUser,
    upUserPass,
    delUser
}