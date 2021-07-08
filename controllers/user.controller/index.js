const CreateUser = require('./create');
const Login = require('./login');
const UpdateProfile = require('./updateProfile');

const UserController = Object.freeze({
    CreateUser,
    Login,
    UpdateProfile
})

module.exports = UserController