const mongoose = require('mongoose');
const Schema = mongoose.Schema

const LogBookSchema = new Schema ({
    monthOfCommencement: {type: String},
    weekNumber: {type: Number},
    project: {type: String, maxlength: 300},
    department: {type: String},
    comments: {type: String},
    days: [{ 
        monday: {type: String},
        tuesday: {type: String},
        wednesday: {type: String},
        thursday: {type: String},
        friday: {type: String},
        saturday: {type: String},
        sunday: {type: String}
    }],
    isApproved: {type: Boolean, default: false}
})
const userSchema = new Schema({
    fullname: {type: String},
    email: {type: String},
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
    logbook: [LogBookSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);