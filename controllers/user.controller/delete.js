const User = require('../../models/user.model');
const Supervisor = require('../../models/supervisor.model');

module.exports = async(req,res) => {
    try{
        const{id} = req.params
        const user = await User.findOne({_id: id })
        const supervisor = await Supervisor.findOne({_id: req.decoded.id})

        if(!user){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'user not found'
            })
        }
        else{
            await user.remove()
            await supervisor.updateOne({$pull: {students: id}})
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'intern deleted successfully'
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