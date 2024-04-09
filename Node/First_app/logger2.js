const EventEmitter = require('events');

var url  = "http://mylogger.io/log"


class Logger extends EventEmitter{// logger cls has all the properties of EventEmitter class by using extend fun

    log(message){ // when a class define the inner fun don't need for the function keword
        // Send an HTTP request
        console.log(message)

        // Raise Event
        this.emit('messageLogged',{id: 1, url: 'http://'}); 
    }
    
}


module.exports = Logger;