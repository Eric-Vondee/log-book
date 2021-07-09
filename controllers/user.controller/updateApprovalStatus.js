const User = require('../../models/user.model');

module.exports = async(req,res) => {
    try{
        const{userID, documentID, status} = req.body
     
        const user = await User.findOne({_id: userID})
        if(!user){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'user not found'
            })
        }
 
        else{
             await User.updateOne({
                _id: user.id,
                'logbook._id': documentID
            }, {
                'logbook.$.isApproved': status
            })
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'status updated successfully'
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