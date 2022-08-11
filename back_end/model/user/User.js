const mongoose = require('mongoose');

// create schema

const userSchema = new mongoose.Schema({
    firstName: {
        required: [true, 'First name is required'],
        type: String,
    },
    lastName: {
        require: [true, 'Last name is required'],
        type: String,
    },
    profilePhoto :{
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    },
    email :{
        type: String,
        required: [true, 'Email is required'],
    },
    bio :{
        type: String,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    postCount: {
        type: Number,
        default: 0,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role: {
        type: String,
        enum: ['Admin','Guest','Blogger'],
    },
    isFollowing: {
        type: Boolean,
        default: false,
    },
    isUnFollowing: {
        type: Boolean,
        default: false,
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    accountVerificationToken: String,
    accountVerificaionTokenExpires: Date,

    viewedBy : {        // data assevation //regarding to mongoDB
        type: [             // mongoDB object
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],        

    },

    followers : {       
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],      
    },

    followeing : {       
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],      
    },

    passwordChangeAt: Date,
    passwordResetTocken: String,
    passwordResetExpires: Date,

    active:{
        type: Boolean,
        default: false,
    }
},
{
    toJSON: {               // mongoose style of configaration
        virtuals: true,
    },
    toObject: {             // id to object
        virtuals:true,
    },
    timestamps: true,       // when the user was created
}
);

// compile schema into model
const User = mongoose.model('User', userSchema);

module.exports = User;