var express = require('express');

app = express();


// basic response
app.get('/', function (req, res) {
    res.send('Hello Express js');
});



// Routing Response
app.post('/two', function (req, res) {
    res.send('Hello Express js two');
});



// Status Code changed
app.get('/three', function (req, res) {
    res.status(400).end('Response successfull')
});

// JSON Response
app.get('/four', function (req, res) {
    let myJSONArray = [{
        name: "Nahid Hasan", city: "Khulna", faculty: "CSE"
    }, {
        name: "Ahnaf Rashid", city: "Dhaka", faculty: "Data analyst"
    }, {
        name: "Ramim Shahriar", city: "Dinajpur", faculty: "Food"
    }]

    res.json(myJSONArray);
});

// Download Response
app.get('/five', function (req, res) {
    res.download("./uploads/AC.png");
});


// Response Redirect
app.get('/bangladesh', function (req, res) {
    res.redirect("http://localhost:8000/india")
});
app.get('/india', function (req, res) {
    res.send("Hello India")
});

// Response Header
app.get('/six', function (req, res) {
    res.append("name", "nahid hasan");
    res.append("city", "khulna");
    res.append("faculty", "cse");
    res.status(201).end("Hello Six");
});

// Response Cookies
app.get('/seven', function (req, res) {
    res.cookie("name", "nahid hasan");
    res.cookie("city", "khulna");
    res.cookie("faculty", "cse");
    res.end("Cookie set successfully");
});
// Response clear Cookies
app.get('/eight', function (req, res) {
    res.clearCookie("faculty")
    res.end("Cookie cleared successfully");
});

app.listen(8000, function () {
    console.log('Example app listening on port 8000');
})