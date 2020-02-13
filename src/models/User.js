const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const Role = require('./Role');

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        unique:true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    role: {
        type: String,
        required: true,
        validate: value => {
          if (!Role.isRole(value)) {
            throw new Error({error: 'Invalid Role type'})
          }
        }
    },
    tokens: [
        {
          token: {
            type: String,
            required: true
          }
        }
    ]
});

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this;
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY);
    user.tokens = user.tokens.concat({token});
    await user.save();
    return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
