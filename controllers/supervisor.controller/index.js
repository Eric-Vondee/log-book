const CreateSupervisor = require('./create');
const Login = require('./login');
const UpdateProfile = require('./updateProfile');
const GetSuperviorProfile = require('./getProfile');

const SupervisorController = Object.freeze({
    CreateSupervisor,
    Login,
    UpdateProfile,
    GetSuperviorProfile
})

module.exports = SupervisorController