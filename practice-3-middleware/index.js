var express = require ('express');
var app = express();


// Application Level Middleware
/*
app.use(function (req, res, next){


    console.log("Application Level Middleware")
    next();
})

app.get('/', function (req, res) {
    res.send('This is Home Page');
})

app.get('/contact', function (req, res) {
    res.send('This is Contact Page');
})

app.get('/about', function (req, res) {
    res.send('This is About Page');
})
 */

// Route Level Middleware

app.get('/', function (req, res) {
    res.send('This is Home Page');
})

app.get('/contact', function (req, res) {
    res.send('This is Contact Page');
})


app.use('/about',  function (req, res, next) {
    console.log('This is About Middleware');
    next();
})
app.get('/about', function (req, res) {
    res.send('This is About Page');
})


app.listen(5000,  function () {
    console.log('listening to port 5000...');
});
