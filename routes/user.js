const express = require('express');
const router = express.Router();

const {
    CreateUser,
    Login,
    UpdateProfile,
    UpdateLogbook,
    UpdateDailyActivities,
    GetUsers,
    UpdateApprovalStatus
} = require('../controllers/user.controller/index');

const {SupervisorAuth, UserAuth} = require('../middleware/index')

router.get('/', SupervisorAuth, GetUsers);
router.post('/', SupervisorAuth, CreateUser);

router.post('/login', Login);
router.put('/update/profile', UserAuth, UpdateProfile);
router.put('/update/logbook', UserAuth, UpdateLogbook);
router.put('/update/record', UserAuth, UpdateDailyActivities);
router.put('/update/status', SupervisorAuth, UpdateApprovalStatus);

module.exports = router