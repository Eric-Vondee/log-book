const CreateSupervisor = require('./create');
const Login = require('./login');
const UpdateProfile = require('./updateProfile');
const GetSuperviorProfile = require('./getProfile');
const Logout = require('./logout');
const UploadProfileImage = require('./uploadProfileImage');

const SupervisorController = Object.freeze({
    CreateSupervisor,
    Login,
    UpdateProfile,
    GetSuperviorProfile,
    Logout,
    UploadProfileImage
})

module.exports = SupervisorController