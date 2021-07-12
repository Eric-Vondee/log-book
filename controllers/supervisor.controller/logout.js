module.exports = async(req,res) => {
    try{
        res.clearCookie('supervisor_token', {
            expires: new Date(Date.now() + 206400000),
			// signed: true,
			httpOnly: true
        })
        return res.status(200).send({
            status: 'OK',
            statusCode: 200,
            message: 'logged out'
        })
    }
    catch(error){
        return res.status(500).send({
            status: 'ERROR',
            statusCode: 500,
            message: error.message
        })
    }
}