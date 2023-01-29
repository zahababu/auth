const CustomError = require('../errors')
const { isTokenValid } = require('../utils')

const authUser = async(req, res, next) => {
    const token = req.signedCookies.token

    if (!token) {
        throw new CustomError.UnauthenticatedError('authnt')
    }
    try {
        const { name, userId, role } = isTokenValid({ token })
        req.user = { name: name, userId: userId, role: role }
        console.log(payload);
        next()
    } catch (error) {
        throw new CustomError.UnauthenticatedError('authnt')
    }
}

const authPerm = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new CustomError.UnauthorizedError(
                'Unauthorized to access this route'
            );
        }
        next();
    };
};

module.exports = {
    authUser,
    authPerm
    // authorizePermissions,
};