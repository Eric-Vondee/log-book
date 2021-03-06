const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LogBookSchema = new Schema ({
    monthOfCommencement: {type: String},
    weekNumber: {type: Number},
    project: {type: String, maxlength: 300},
    department: {type: String},
    comments: {type: String},
    image: {type: String}, 
    days: [{ 
        day: {type: String},
        contents:{type: String}
    }],
    isApproved: {type: String, enum:['pending', 'approved'], default: 'pending'}
})
const userSchema = new Schema({
    fullname: {type: String},
    email: {type: String},
    profileImage: {type: String},
    gender: {type:String, enum:['male', 'female']},
    password: {type: String},
    startDate: {type: String},
    endDate: {type: String},
    supervisorID: {type: String},
    matricNumber: {type: String},
    phonenumber: {type: String, maxlength: 11},
    companyName: {type: String, maxlength: 100},
    department: {type: String},
    isVerified: {type: Boolean},
    scafImage: {type:String},
    logbook: [LogBookSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);