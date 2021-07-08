const Supervisor = require('../../models/supervisor.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../../config');

module.exports = async(req, res) => {
    try{
        const {fullname, email, phonenumber, position, gender, companyName, department, password} = req.body

        const supervisor = await Supervisor.findOne({email: email})
        if(supervisor){
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
              }, config.SUPERVISOR_JWT, {expiresIn: "30 Seconds"});
            
            await Supervisor.create({
                fullname, 
                email, 
                phonenumber,
                position,
                gender,
                companyName, 
                department,
                password: hashedPassword
            })
            res.cookie('supervisor_token', token, {
                maxAge: new Date(Date.now() + 30000),
                http0nly: true
            })
            return res.status(201).send({
                status:'OK',
                statusCode: 201,
                message: 'supervisor created successfully',
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