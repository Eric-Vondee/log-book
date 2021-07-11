const express = require('express');
const router = express.Router();

const {
    CreateUser,
    Login,
    UpdateProfile,
    UpdateLogbook,
    UpdateDailyActivities,
    GetUsers,
    UpdateApprovalStatus,
    UploadScafImage,
    GetUserProfile
} = require('../controllers/user.controller/index');

const {SupervisorAuth, ImageUploader, UserAuth} = require('../middleware/index')

router.get('/profile', UserAuth, GetUserProfile);
router.get('/',  GetUsers);


router.post('/', SupervisorAuth, CreateUser);

router.post('/login', Login);
router.put('/update/profile', UserAuth, UpdateProfile);
router.put('/update/logbook', UserAuth, UpdateLogbook);
router.put('/update/record', UserAuth, UpdateDailyActivities);
router.put('/update/status', SupervisorAuth, UpdateApprovalStatus);
router.put('/upload/:id/image', UserAuth, ImageUploader('/scaf-form/:id'),  UploadScafImage)

module.exports = router