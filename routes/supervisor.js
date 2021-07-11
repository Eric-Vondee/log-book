const express = require('express');
const router = express.Router();

const {
    CreateSupervisor,
    Login,
    UpdateProfile,
    GetSuperviorProfile
} = require('../controllers/supervisor.controller/index');

const {SupervisorAuth} = require('../middleware/')

router.get('/profile', SupervisorAuth, GetSuperviorProfile);
router.post('/', CreateSupervisor);
router.post('/login', Login);
router.put('/update/profile', SupervisorAuth, UpdateProfile);


module.exports = router