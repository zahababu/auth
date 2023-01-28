const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authUser = async(req, res, next) => {
    const token = req.signedCookies.token

    if (!token) {
        throw new CustomError.UnauthenticatedError('authnt')
    }
    try {
        const payload = isTokenValid({ token })
        console.log(payload);
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('authnt')
    }
}

module.exports = {
    authUser,
    // authorizePermissions,
};