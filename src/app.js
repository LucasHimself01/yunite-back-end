var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
 
var fs = require('fs');
var path = require('path');
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let cors = require('cors')
app.use(cors());

//controllers
let imageController = require('./controller/ImageController')

//routes
var router = express.Router();
app.use('/', router);

imageController.getProfilePicture(router);
imageController.postProfilePicture(router);

mongoose.connect(`mongodb+srv://yunison:MongodbCesar3@yunite.9xz8p.mongodb.net/Yunite?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected!!');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

let config = require('./config');
app.listen(process.env.PORT || config.port, () => console.log("Port " + config.port + " is now active."));

module.exports = app;