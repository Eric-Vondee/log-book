const Supervisor = require('../../models/supervisor.model');

module.exports = async(req,res) => {
    try{

        const supervisor = await Supervisor.findOne({_id: req.decoded.id}, {
            password: 0
        })
                        //.populate('students')

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
                message: 'supervisor profile fetched successfully',
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