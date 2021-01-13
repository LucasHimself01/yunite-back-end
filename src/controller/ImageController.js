const { router } = require('../app')
let imageModel = require('../models/ImageModel')

exports.getProfilePicture = function (router) {
    router.get('/profilePicture', async (req, res) => {
        imageModel.find({}, (err, items) => {
            if (err) {
                console.log(err);
            }
            else {
                return res.status(200).send({ profilePicture: profilePicture });
            }
        });
        return res.status(500).send();
    })
}

exports.postProfilePicture = function (router) {
    router.post('/profilePicture', async (req, res, next) => {
        var obj = {
            name: req.body.name,
            uploadDate: req.body.uploadDate,
            img: {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: 'image/png'
            }
        }
        imageModel.create(obj, (err, item) => {
            if (err) {
                console.log(err);
            }
            else {
                //item.save();
                //res.redirect('/');
            }
        })
    })
}