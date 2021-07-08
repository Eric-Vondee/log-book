const Supervisor = require('../../models/supervisor.model')
const jwt = require('jsonwebtoken');
const brcypt = require('bcrypt');
const config = require('../../config');

module.exports = async(req, res) => {
    try{
        const {email,password} = req.body

        const supervisor = await Supervisor.findOne({email: email})
        if(!supervisor){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'supervisor not found'
            })
        }
        //comapre stored and passed password 
        let compare = await brcypt.compare(password, supervisor.password)
        if(!compare) return res.status(401).send({status: 'ERROR', statuCode: 401, message:'invalid email or password'});
        else{
            let token = jwt.sign({
                email
            }, config.SUPERVISOR_JWT, {expiresIn: '10 days'});

            res.cookie('supervisor_token', token, {
                maxAge: new Date(Date.now() + 206400000),
                http0nly: true
            })
            return res.status(200).send({
                status: "OK",
                statusCode: 200,
                message: "Log in Successful",
                payload: {token, email, id: supervisor.id, fullname: supervisor.fullname, isVerified: supervisor.isVerified, gender:supervisor.gender}
            })
        }
    }
    catch(error){
        return res.status(500).send({
            status: 'ERROR',
            statusCode: 500,
            message: error.message,
        })
    }
}