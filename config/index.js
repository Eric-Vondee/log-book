const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    MONGO_URI: process.env.MONGO_URI,
    SUPERVISOR_JWT: process.env.SUPERVISOR_JWT,
    USER_JWT: process.env.USER_JWT,
}