// console.log("Application Frameworks");
// console.log("Lab 03");

// 01 - read file
const fs = require('fs');
fs.readFile('file.txt', 'utf8', function (err, data) {
 if (err) throw err;
 console.log(data);
});