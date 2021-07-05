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

router.post('/api/login', jsonParser, function(req, res) {
  if (req.body.username == "ElbarenluvR" && req.body.password == "gl0r10usPurP0s3") {
      res.send({token : 'SlbCStyYUL1cg90HBOKkepDEPeLdKvkD'})
  } else {
    res.send({token : 'Fail'})
  }
});

router.post('/api/account', jsonParser, function(req, res) {
  if (req.body.cookie == "YWRtaW4=") {
      res.send({flag : 'Flag: tw1tt3r_tw0tt3r_vulnerableuser', username : 'Welcome, admin!'})
  } else {
    res.send({flag : 'Fail'})
  }
});

router.get('/JpkP0KKXlV78jx6fF1Yi/dashboard', function(req, res) {
  if (req.query.auth == "SlbCStyYUL1cg90HBOKkepDEPeLdKvkD") {
    res.sendFile(path + '/pages/dashboard.html')
  } else res.send("Sorry, you're not allowed to see this page 😭")
})

router.get('/JpkP0KKXlV78jx6fF1Yi', function(req, res) {
  res.sendFile(path + '/pages/developers.html')
})

router.get('/JpkP0KKXlV78jx6fF1Yi/login', function(req, res) {
  res.sendFile(path + '/pages/login.html')
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));