var express = require('express');
var app = express();
var router = express.Router();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', __dirname);
  
var path = __dirname;
var jsonParser = bodyParser.json();

app.use('/', router);
app.use('/assets', express.static(path + '/assets'))
  
router.get('/',function(req, res){
  res.sendFile(path + '/pages/index.html');
});

router.post('/api/developers', jsonParser, function(req, res) {
    if (req.body.token == "d3v3l0p3rsrUl3") {
        console.log('ay')
        res.send({url : '/JpkP0KKXlV78jx6fF1Yi'})
    }
});

router.get('/JpkP0KKXlV78jx6fF1Yi', function(req, res) {
  res.sendFile(path + '/pages/developers.html')
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));