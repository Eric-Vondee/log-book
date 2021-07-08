const Supervisor = require('../../models/supervisor.model')

module.exports = async(req, res) => {
    try{
        const {fullname, phonenumber, position, companyName, department} = req.body

        const supervisor = await Supervisor.findOne({_id: req.decoded.id})
        if(!supervisor){
            return res.status(404).send({
                status: 'ERROR',
                statusCode: 404,
                message: 'supervisor not found'
            })
        }
        else{
            await supervisor.updateOne({
                fullname: fullname || supervisor.fullname,
                phonenumber: phonenumber || supervisor.phonenumber,
                position: position || supervisor.position ,
                companyName: companyName || supervisor.companyName,
                department: department || supervisor.department
            })
            return res.status(200).send({
                status:'OK',
                statusCode: 200,
                message: 'profile updated successfully'
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