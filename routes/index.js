// Importing module
var express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
var bodyParser = require('body-parser');
var database = require('../database.js');
const session = require('express-session');



var router = express.Router();

const app = express();

// Importing controller
const {LoginAuthentication, LoginRedirect ,LogoutAuthentication} = require('../controller/Authentication.js');
const Upload = require('../controller/Upload.js');
const {FoundedItems,LostedItems}= require('../controller/ItemList.js');
const Verify = require('../controller/VerifyPost.js');
const { title } = require('process');



const upload = multer({ 
    storage: multer.memoryStorage()
});
app.set('veiw engine','ejs');
app.use('/static', express.static(path.join(__dirname, 'public')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
// routes
router.get('/', function(req, res) {
 res.render('index', { title: 'Express', session : req.session });
});
router.get('/FoundedItems',FoundedItems);
router.get('/LostedItems',LostedItems);
router.post('/',upload.single('img'),Upload);
router.post('/Verify',Verify)
router.post('/Logout',LogoutAuthentication);
router.post('/Login', LoginAuthentication);
router.get('/Login',LoginRedirect);


module.exports = router;
