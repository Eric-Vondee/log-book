const CreateUser = require('./create');
const Login = require('./login');
const UpdateProfile = require('./updateProfile');
const UpdateLogbook = require('./updateLogbook');
const UpdateDailyActivities = require('./updateDailyActivities');
const GetUsers = require('./getAll');
const UpdateApprovalStatus = require('./updateApprovalStatus');
const UploadScafImage = require('./uploadScafForm');
const GetUserProfile = require('./getProfile');
const Logout = require('./logout');
const DeleteUser = require('./delete');

const UserController = Object.freeze({
    CreateUser,
    Login,
    UpdateProfile,
    UpdateLogbook,
    UpdateDailyActivities,
    GetUsers,
    UpdateApprovalStatus,
    UploadScafImage,
    GetUserProfile,
    Logout,
    DeleteUser
})

module.exports = UserController