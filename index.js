var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World');
// // });

// app.get('/hello', function (req, res) {
//   res.end('<h1>Hello World!</h1>');
// });

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

app.get('/calculator/:operation', function (req, res) {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var operation = req.params.operation;

  if(!num1) {
    num1 = 0;
  } if(!num2) {
  num2 = 0;
  } if(operation !== "add" && operation !== "multiply") {
    res.status(400).send("Bad Request");
  } if(operation === "add") {
     res.send({
      "operation": "add",
      "firstOperand": num1,
      "secondOperand": num2,
      "solution": num1 + num2
    });
  } res.send({
      "operation": "multiply",
      "firstOperand": num1,
      "secondOperand": num2,
      "solution": num1 * num2
    });
  } 
// console.log(req.params); console.log(req.query);
  // res.end(JSON.stringify());
);







/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Example app listening at http://%s:', process.env.C9_HOSTNAME);
});
