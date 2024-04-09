const fs = require('node:fs');
const file = fs.readdirSync('./');// shows the all file
// const a_file = fs.readd
console.log(file);

// syntax = fs.readdir(path, function(err, file(string)));
// error
fs.readdir('.$', function(err, files){
    if (err) console.log('Error', err)
    else console.log('Result', files)//same as sync fun  
});
// corrected
fs.readdir('./', function(err, files){
    if (err) console.log('Error', err)
    else console.log('Result', files)//same as sync fun  
});