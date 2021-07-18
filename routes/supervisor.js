const express = require('express');
const router = express.Router();

const {
    CreateSupervisor,
    Login,
    UpdateProfile,
    GetSuperviorProfile,
    Logout,
    UploadProfileImage
} = require('../controllers/supervisor.controller/index');

const {SupervisorAuth, ImageUploader} = require('../middleware/')

router.post('/logout', Logout);
router.get('/profile', SupervisorAuth, GetSuperviorProfile);
router.post('/', CreateSupervisor);
router.post('/login', Login);
router.put('/update/profile', SupervisorAuth, UpdateProfile);
router.put('/upload/:id/profile-image', ImageUploader('/profile-image/:id'), UploadProfileImage);

module.exports = router
