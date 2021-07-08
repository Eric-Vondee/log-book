const CreateSupervisor = require('./create');
const Login = require('./login');
const UpdateProfile = require('./updateProfile');

const SupervisorController = Object.freeze({
    CreateSupervisor,
    Login,
    UpdateProfile,
})

module.exports = SupervisorController