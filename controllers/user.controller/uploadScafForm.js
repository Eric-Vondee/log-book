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

        let user = await User.findOne({_id: id})

        if(!user){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'user not found'
            })
        }

        else{
            await user.updateOne({scafImage: imageUrl});
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'image uploaded successfully',
                payload: imageUrl
            });
        }
    }
    catch(error){
        res.status(400).send({
            status: "ERROR",
            statusCode: 400,
			message: error.message
		});
    }
}
