const jwt = require('jsonwebtoken')

const createeJWT = ({ payload }) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
    return token
}

const valid = ({ token }) => jwt.verify(token, process.env.JWT_SECRET)

const aCTR = ({ res, user }) => {
    const token = createeJWT({ payload: user })
    const od = 1000 * 60 * 60 * 24
    res.cookie('token', token, {
        httpOnly: true,
        exprires: new Date(Date().now + od),
        secure: process.env.NODE_ENV === 'production',
        signed: true
    })
}

module.exports = {
    createeJWT,
    valid,
    aCTR
}