const express = require('express');
const router = express.Router();

const {
    CreateSupervisor,
    Login,
    UpdateProfile,
    GetSuperviorProfile,
    Logout
} = require('../controllers/supervisor.controller/index');

const {SupervisorAuth} = require('../middleware/')

router.post('/logout', Logout);
router.get('/profile', SupervisorAuth, GetSuperviorProfile);
router.post('/', CreateSupervisor);
router.post('/login', Login);
router.put('/update/profile', SupervisorAuth, UpdateProfile);


module.exports = router