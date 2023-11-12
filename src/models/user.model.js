const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    coverImage: {
        type: String
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })

userSchema.pre("save", function(err, data, next) {
    if (!this.isModified("password")) next();

    this.password = bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = function(password) {
    bcrypt.compare(password, this.password)
}

const User = mongoose.model('User', userSchema);

exports.User = User;