const User = require('../../models/user.model')
const jwt = require('jsonwebtoken');
const brcypt = require('bcrypt');
const config = require('../../config');

module.exports = async(req, res) => {
    try{
        const {email,password} = req.body

        const user = await User.findOne({email: email})
        if(!user){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'user not found'
            })
        }
        //comapre stored and passed password 
        let compare = await brcypt.compare(password, user.password)
        if(!compare) return res.status(401).send({status: 'ERROR', statuCode: 401, message:'invalid email or password'});
        else{
            let token = jwt.sign({
                email
            }, config.USER_JWT, {expiresIn: '10 days'});

            res.cookie('access_token', token, {
                maxAge: new Date(Date.now() + 206400000),
                http0nly: true
            })
            return res.status(200).send({
                status: "OK",
                statusCode: 200,
                message: "Log in Successful",
                payload: {token, email, id: user.id, fullname: user.fullname, isVerified: user.isVerified, gender:user.gender}
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