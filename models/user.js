var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String },
    age: { type: Number },
    gender: { type: String, enum: [ "Male", "Female", "Other" ] },
    education: { type: String },
    email: { type: String },
    state: { type: String },
    city: { type: String },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }],
    
});

var userModel = mongoose.model('user', userSchema);

module.exports = userModel;
