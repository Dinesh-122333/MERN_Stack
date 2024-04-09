// (function(exports, require, module, __filename, __dirname){ block contains }) Wrapper functions

console.log(__filename)//shows the current file path
console.log(__dirname)//shows the export file path
var url  = "http://mylogger.io/log"

function log(message){
    // Send an HTTP request
    console.log(message)
}

// module.exports.log = log;//exporting the function to app.js
// module.export.endpoint = url;//exporting the variable to app.js
module.exports = log;