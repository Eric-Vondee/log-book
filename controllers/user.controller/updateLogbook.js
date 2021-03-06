const User = require('../../models/user.model');

module.exports = async(req,res) => {
    try{
        const{month, week, department, comments, project} = req.body
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
                monthOfCommencement: month || user.logbook.monthOfCommencement,
                weekNumber: week || user.logbook.weekNumber,
                project: project || user.logbook.project,
                department: department || user.logbook.department,
                comments: comments || user.logbook.comments
            }
            await user.updateOne({$addToSet:{logbook: data}});
            return res.status(200).send({
                status: 'OK',
                statusCode: 200,
                message: 'logbook updated successfully'
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