const express = require('express');
const router = express.Router()

const SupervisorRouter = require('./supervisor');
const UserRouter = require('./user');

router.use('/supervisors', SupervisorRouter);
router.use('/users', UserRouter);

module.exports = router