const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: false
    },
    LastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    }
})

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
