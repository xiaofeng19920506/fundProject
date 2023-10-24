const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email cannot be empty!"],
        unique: [true, "Email is already registered!"],
    },
    password: {
        type: String,
        required: [true, "Password cannot be empty!"],
        unique: false,
    },
    userName: {
        type: String,
        required: [true, "Username cannot be empty!"],
        unique: [true, "Username is already taken!"],
    },
    phone: {
        type: String,
        required: [true, "Phone cannot be empty!"],
        unique: [true, "Phone is already registered!"],
    },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);