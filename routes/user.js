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
    GetUserProfile,
    Logout,
    DeleteUser,
    UploadProfileImage,
    UploadActivitiesImage
} = require('../controllers/user.controller/index');

const {SupervisorAuth, ImageUploader, UserAuth} = require('../middleware/index')

router.get('/profile', UserAuth, GetUserProfile);
router.get('/',  GetUsers);

router.delete('/:id', SupervisorAuth, DeleteUser);
router.post('/', SupervisorAuth, CreateUser);
router.post('/logout',  Logout);
router.post('/login', Login);
router.put('/update/profile/:id', SupervisorAuth, UpdateProfile);// updates user profile by supervisor 
router.put('/update/profile', UserAuth, UpdateProfile);
router.put('/update/logbook', UserAuth, UpdateLogbook);
router.put('/update/record', UserAuth, UpdateDailyActivities);
router.put('/update/status', SupervisorAuth, UpdateApprovalStatus);
router.put('/upload/:id/image', UserAuth, ImageUploader('/scaf-form/:id'),  UploadScafImage)
router.put('/upload/:id/profile-image', UserAuth, ImageUploader('/profile-image/:id'), UploadProfileImage);
router.put('/upload/:id/activities-image', UserAuth, ImageUploader('/activities/:id'), UploadActivitiesImage);

module.exports = router