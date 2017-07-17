var express = require('express');
var app = express();

//example
// app.get('/', function (req, res) {
//   res.send('Hello World');
// // });

// exercise 1
// app.get('/hello', function (req, res) {
//   res.end('<h1>Hello World!</h1>');
// });

//exercise 2
// app.get('/hello', function (req, res) {
//   var name = req.query.name;
//   if (name) {
//     res.send('<h1>Hello ' + name + '! </h1>')
//   }
//   else{
//   res.send('<h1>Hello World!</h1>');
//   }
// });

//note: res.send() will send the HTTP response. 
//res.end() will end the response process

//exercise 3
//test: https://reddit-nodejs-api-marissacodes.c9users.io/calculator/add?num1=2&num2=6
app.get('/calculator/:operation', function (req, res) {
  var num1 = Number(req.query.num1); //declare num1 as a number, otherwise it concatenates when adding
  var num2 = Number(req.query.num2);
  var operation = req.params.operation;
  var solution; //we'll define it later

  if(!num1) {
    num1 = 0;
  } 
  
  if(!num2) {
  num2 = 0;
  } 
  
  if(operation === "add") {
    solution = (num1) + (num2);
  } 
  
  if(operation === "multiply") {
    solution = (num1) * (num2);
  } 
  
  if(operation !== "add" && operation !== "multiply") {
    res.status(400).send("Bad Request");
    } 
    
   res.send(JSON.stringify(
     {
      "operation": operation,
      "firstOperand": num1,
      "secondOperand": num2,
      "solution": solution
      }
    ));  
  }
);







/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening at http://%s:', process.env.C9_HOSTNAME);
});
