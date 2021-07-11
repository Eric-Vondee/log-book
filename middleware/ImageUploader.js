const multer = require("multer");
const {CloudinaryStorage} = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;


exports.ImageUploader = (folder='', field='image')=> async(req,res, next) => {
    try{
        let id = req.params.id ? req.params.id: req.decoded.id
        let paths = folder.split('/:id');
        let destFolder = paths.length === 0 && paths[0].length ===0 ? `/logbook`:paths.length === 0 && paths[0].length >=1 ? 
        `/logbook/${folder}`: paths.length >=1 && paths[1].length === 0 ? `/logbook/${paths[0]}/${id}`:
        `/logbook/${paths[0]}/${id}${paths[1]}`

        	const storage = new CloudinaryStorage({
				cloudinary,
				params:{
					folder: destFolder,
					allowedFormats: ["jpg", "png", "svg"],
					public_id: (req, file) => ''
				}
            })
            const parser = multer({storage: storage}).single(field)
            parser(req,res,next);
    }
    catch(error){
        console.log(error)
        res.status(400).send({
            statusCode: 400,
            status: 'ERROR',
            message: error.message
        })
    }
}