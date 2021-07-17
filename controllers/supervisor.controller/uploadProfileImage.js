const Supervisor= require('../../models/supervisor.model');
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

        let supervisor = await Supervisor.findOne({_id: id})

        if(!supervisor){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'supervisor not found'
            })
        }

        else{
            await supervisor.updateOne({profileImage: imageUrl});
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
