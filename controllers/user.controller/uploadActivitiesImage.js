const User = require('../../models/user.model');

module.exports = async(req,res) => {
    try{
        if(!req.file){
            return res.status(400).send({
                status: "ERROR",
                statusCode: 400,
                message: 'no or invalid image'
            })
        }
      
        const {id} = req.params;
        const imageUrl = req.file.path;

        const user = await User.findOne({_id: req.decoded.id})
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
                'logbook._id': id
            }, {
                'logbook.$.image': imageUrl
            })
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'image uploaded successfully',
                payload: imageUrl
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