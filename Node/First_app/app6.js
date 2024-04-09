// Event -- a signal something has happened in website 

const EventEmitter = require('events');// its a class
const emitter  = new EventEmitter();// instance of a class

// Register a listener
// using normal fun
// emitter.on('messageLogged',function(arg){//arg is user define argument it can be e, eventArg too
//     console.log('Listener Called', arg)
// })
// using arrow fun
emitter.on('messageLogged',(arg) =>{//arg is user define argument it can be e, eventArg too
    console.log('Listener Called', arg);
});

// Raise Event
emitter.emit('messageLogged',{id : 1, url: 'http://'});//to trace event or making a noice , produce - signalling the event happens
// using obj to  id and url for privacy which act as private

// exercise:
emitter.on ('logging', (arg) => {
    console.log('Listener logged', arg);
});
emitter.emit('logging', {id : 1, data : 'your here'});