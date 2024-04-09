// path module

const path = require('path');

var pathObj = path.parse(__filename);// it show the info about the current file 
var pathObj = path.parse(__dirname);// it not give the gives the info and the directory name as folder name (first-app)
console.log(pathObj)