const CreateUser = require('./create');
const Login = require('./login');
const UpdateProfile = require('./updateProfile');
const UpdateLogbook = require('./updateLogbook');
const UpdateDailyActivities = require('./updateDailyActivities');
const GetUsers = require('./getAll');
const UpdateApprovalStatus = require('./updateApprovalStatus');

const UserController = Object.freeze({
    CreateUser,
    Login,
    UpdateProfile,
    UpdateLogbook,
    UpdateDailyActivities,
    GetUsers,
    UpdateApprovalStatus
})

module.exports = UserController