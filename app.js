// console.log("Application Frameworks");
// console.log("Lab 03");

// 01 - read file
// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', function (err, data) {
//  if (err) throw err;
//  console.log(data);
// });

// 02 - Write to file
// const fs = require('fs');
// fs.readFile('file.txt', 'utf8', function (err, data) {
//  if (err) throw err;
//  console.log(data);
// });

// 03 Creating a web server
const http = require('http');
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'});
 res.write('Hello World!');
 res.end();
}).listen(8080);