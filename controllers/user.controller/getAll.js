const User = require('../../models/user.model');

module.exports = async(req,res) => {
    try{
        const{id} = req.query
        const supervisor = await User.find({supervisorID: id})

        if(!supervisor){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'supervisor not found'
            })
        }
        else{
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'interns fetched successfully',
                payload: supervisor
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