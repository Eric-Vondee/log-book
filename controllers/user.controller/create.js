const User = require('../../models/user.model');
const Supervisor = require('../../models/supervisor.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../config');

module.exports = async(req, res) => {
    try{
        const {fullname, email, phonenumber, startDate, matricNumber,  gender, companyName, department, password} = req.body

        const supervisor = await Supervisor.findOne({_id: req.decoded.id})
        if(!supervisor){
            return res.status(400).send({
                status: 'ERROR',
                statusCode: 400,
                message: 'supervisor not found'
            })
        }
        const user = await User.findOne({email: email})
        if(user){
            return res.status(400).send({
                status: 'ERROR',
                statusCode: 400,
                message: 'email already exists'
            })
        }
        
        else{
               //hash password
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(password, salt);
              const token = jwt.sign({
                  email,
              }, config.USER_JWT, {expiresIn: "30 Seconds"});
            
            const createUser = await User.create({
                fullname, 
                email, 
                startDate,
                supervisorID: supervisor.id,
                matricNumber,
                phonenumber,
                gender,
                companyName, 
                department,
                password: hashedPassword
            })
            await supervisor.updateOne(
                {$push: {students: createUser.id }}
            )
            res.cookie('access_token', token, {
                maxAge: new Date(Date.now() + 30000),
                http0nly: true
            })
            return res.status(201).send({
                status:'OK',
                statusCode: 201,
                message: 'user created successfully',
                payload: {token, fullname, email}
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