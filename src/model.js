const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
    activityLevel: { type: String, required: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
