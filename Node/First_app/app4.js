// OS module

const os = require ('os');

var totalMemory = os.totalmem();
var freeMem = os.freemem();


console.log('Total Memory:' + totalMemory);//giving the info of memory in local machine
console.log('Free Memory:' + freeMem);//giving the info of free memory in local machine

console.log(os.version());//giving the info of version of local machine
console.log(os.arch());// gives the bit rate of local machine 64 or 32
console.log(os.cpus());// gives the total info about my local machine
console.log(os.availableParallelism());