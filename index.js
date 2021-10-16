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
  res.sendFile(path + '/pages/login.html');
});

// iICsZ9TpUQ
// vVPfM9GcHD

router.get('/api/code', function(req, res) {
  console.log(req.query.code)
  if (req.query.code == "badapples123") {
    res.send({secret: "iICsZ9TpUQ"})
  } else {
    res.send("Whoops! Wrong code.")
  }
});

router.post('/api/unlock', jsonParser, function(req, res) {
    console.log(req.body)
    if (req.body.code == "vVPfM9GcHD") {
        res.send({key: "b4d_4ppl3s_4tw"})
    }
});

router.post('/api/login', jsonParser, function(req, res) {
  if (req.body.key == "b4d_4ppl3s_4tw") {
      res.send({token : 'SlbCStyYUL1cg90HBOKkepDEPeLdKvkD'})
  } else {
    res.send({token : 'Fail'})
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