const mongoose = require('mongoose');
const Schema = mongoose.Schema

const supervisorSchema = new Schema({
    fullname: {type: String},
    email: {type: String},
    password: {type: String},
    gender: {type: String, enum: ['male', 'female'] },
    phonenumber: {type: String, maxlength: 11},
    profileImage: {type: String},
    companyName: {type: String, maxlength: 100},
    position: {type: String, maxlength: 100},
    department: {type: String},
    isSupervisor: {type: Boolean, default:true},
    isVerified: {type: Boolean},
    students: [{type: mongoose.Schema.Types.ObjectId, ref:'user'}]
}, {
    timestamps: true
})

module.exports = mongoose.model('supervisor', supervisorSchema);