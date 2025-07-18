let express = require('express');
let bodyParser = require('body-parser');
let multer  = require('multer')

//multer = multer();
app = express();
app.use(bodyParser.json());
//app.use(multer.array());
app.use(express.static('public'));
storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
})

// Request get Method
app.post('/basic', function (req, res) {
    res.end("This is a post request");
})


// Request with Get URL
app.get('/url', function (req, res) {

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;


    res.end(firstName + " " + lastName);
});


// Request header
app.get('/header', function (req, res) {
    let firstName = req.header("firstName");
    let lastName = req.header("lastName");

    res.end(firstName + " " + lastName);
})


// Request Post Method
app.post('/basic2', function (req, res) {
    res.end("This is a post request");
})

// Request with URL query
app.post('/url2', function (req, res) {

    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    res.send(firstName + " " + lastName);
})

// Request with Header
app.post('/header2', function (req, res) {
    let userName = req.header("userName");
    let password = req.header("password");

    res.end("UserName: " + userName + " " + "Password: " + password);
})


// Post Application Json
app.post('/json', function (req, res) {
    let jsonData = req.body;
    let jsonString = JSON.stringify(jsonData);
    res.send(jsonString);
})

// Multipart Form Data
app.post('/multipart', function (req, res) {
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
})

// File upload
upload = multer({storage: storage}).single('myFile');

app.post('/file', function (req, res) {
    upload(req,res,  function (error) {
        if (error) {
            res.send("File Upload Failed");
        }
        else{
            res.send("File Upload Success");
        }
    })
})





app.listen(8000, function () {
    console.log('listening to port 8000 sucessfully');
});