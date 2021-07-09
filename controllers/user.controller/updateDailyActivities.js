const User = require('../../models/user.model');

module.exports = async(req,res) => {
    try{
        const{day, contents, documentID} = req.body
     
        const user = await User.findOne({_id: req.decoded.id})
        if(!user){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'user not found'
            })
        }
 
        else{
            const data = {
                day: day,
                contents: contents
            }
             await User.updateOne({
                _id: user.id,
                'logbook._id': documentID
            }, {
                $push: {'logbook.$.days': data}
            })
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'daily record added successfully'
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