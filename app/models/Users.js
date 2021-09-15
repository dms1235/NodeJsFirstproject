var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = new Schema({
    Name: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        trim: true,

    },
    mobile: {
        type: Number,
        trim: true,
    },
    createdDate: { type: Date, default: Date.now }
       
});

const App_users = mongoose.model('App_User', UserSchema);
exports.App_users = App_users;
