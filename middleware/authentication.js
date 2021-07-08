const config = require('../config/index');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const Supervisor = require('../models/supervisor.model');

exports.UserAuth = async (req, res, next) => {
	try {
		const token =
            (req.body && req.body.access_token) ||
            (req.query && req.query.access_token) ||
            req.headers["x-access-token"] ||
            req.cookies.access_token

		if (token) {
			jwt.verify(token, config.USER_JWT, async (error, decoded) => {
				if (error) {
					return res.status(401).send({
                        status: 'ERROR',
                        statusCode: 401,
						message: 'Authorization Denied/Invalid Token'
					});
				}

				let user = await User.findOne({email: decoded.email});
	
				if (user) {
                    decoded.id = user._id;
					req.decoded = decoded;
					next();
				}
				else {
                    return res.status(401).send({
                        status: 'ERROR',
                        statusCode: 401,
						message: 'Authorization Denied/Invalid Token'
					});
				}
			});

		}
		else {
			return res.status(401).send({
                status: 'ERROR',
                statusCode: 401,
                message: 'Authorization Denied/Invalid Token'
            });
		}

	} catch (error) {
		res.status(503).send({
            status: 'ERROR',
            statusCode: 503,
			message: error.message
		});
	}
}

exports.SupervisorAuth = async (req, res, next) => {
	try {
		const token =
            (req.body && req.body.supervisor_token) ||
            (req.query && req.query.supervisor_token) ||
            req.headers["x-supervisor-token"] ||
            req.cookies.supervisor_token

		if (token) {
			jwt.verify(token, config.SUPERVISOR_JWT, async (error, decoded) => {
				if (error) {
					return res.status(401).send({
                        status: 'ERROR',
                        statusCode: 401,
						message: 'Authorization Denied/Invalid Token'
					});
				}
				let supervisor = await Supervisor.findOne({email: decoded.email});
	
				if (supervisor) {
                    decoded.id =supervisor._id;
					req.decoded = decoded;
					next();
				}
				else {
                    return res.status(401).send({
                        status: 'ERROR',
                        statusCode: 401,
						message: 'Authorization Denied/Invalid Token'
					});
				}
			});

		}
		else {
			return res.status(401).send({
                status: 'ERROR',
                statusCode: 401,
                message: 'Authorization Denied/Invalid Token'
            });
		}

	} catch (error) {
		console.log(error)
		res.status(503).send({
            status: 'ERROR',
            statusCode: 503,
			message: error.message
		});
	}
}