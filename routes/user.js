const express = require('express');
const router = express.Router();

const {
    CreateUser,
    Login,
    UpdateProfile
} = require('../controllers/user.controller/index');

const {SupervisorAuth, UserAuth} = require('../middleware/index')

router.post('/', SupervisorAuth, CreateUser);

router.post('/login', Login);
router.put('/update/profile', UserAuth, UpdateProfile);

module.exports = router