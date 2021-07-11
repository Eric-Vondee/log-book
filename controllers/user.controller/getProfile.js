const User = require('../../models/user.model');

module.exports = async(req,res) => {
    try{

        const user = await User.findOne({_id: req.decoded.id}, {
            password: 0
        })

        if(!user){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'user not found'
            })
        }
        else{
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'user fetched successfully',
                payload: user
            })
        }
    }
    catch(error){
        return res.status(500).send({
            status: 'ERROR',
            statusCode: 500,
            message: error.message
        })
    }
}