const { string, required } = require('joi')
const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name less nigga"],
        minlength: 3,
        maxlength: 50
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide valid email',
        },
    },
    password: {
        type: String,
        required: [true, 'pas nigga word bi ach'],
        minlength: 8
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
})

userSchema.pre('save', async function() {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

userSchema.methods.comparePassword = async function(candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch

}
module.exports = mongoose.model('User', userSchema)