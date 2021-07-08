const User = require('../../models/user.model')


module.exports = async(req, res) => {
    try{
        const {fullname, phonenumber, matricNumber, companyName, department} = req.body

        const user = await User.findOne({_id: req.decoded.id})
        if(!user){
            return res.status(400).send({
                status: 'ERROR',
                statusCode: 400,
                message: 'user not found'
            })
        }
        else{

            await user.updateOne({
                fullname: fullname || user.fullname,
                phonenumber: phonenumber || user.phonenumber,
                matricNumber: matricNumber || user.matricNumber,
                companyName: companyName || user.companyName,
                department: department || user.department
            })
            return res.status(200).send({
                status:'OK',
                statusCode: 200,
                message: 'user profile updated successfully'
          })
        }
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            status: 'ERROR',
            statusCode: 500,
            message: error.message,
        })
    }
}