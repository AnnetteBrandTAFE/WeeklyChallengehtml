// imported the express module
const express = require("express");

// created an instance of an app by invoking the express function
const app = express();
const bodyParser= require('body-parser')


//allow for static files e.g. html, css,js to be requested and returned in a response
app.use(express.static("public"));
// public will just be the name of the folder that contains all docs i.e. index.js/css/html

// these are used so that we can use the bodyparser to be able to read data from the body of the request
app.use(bodyParser.urlencoded({extended: false}))
// these are used so that we can load templates
// REMEMBER to always check the file route(second part)
app.set('views', './public/views')
app.set('view engine', 'hbs')

// registering a route/url, get registers the route, the first argument is the name of the route
// the second one is the function that will handle any requests for the route
//the response being motorworld
//usually if the pade is just app.get('/') this will be the homepage
app.get(
    "/", //oot directory(default page[home] for a website)
    function (request, response) {
        console.log("A request for home has been recieved");
    response.send(`<h1 style="color: blue;"> hello</h1>`);
});

app.get(
    "/message", 
    function (request, response) {
    console.log("A request for the message route has been recieved");
    response.send("hello Service NSW students");
});

const port = 3000;

app.listen(port, function () {
    console.log(`The express server is listening: http://localhost:${port}`);
});

