// Extending EventEmitter

const EventEmitter = require('events')

const Logger = require('./logger2')
const logger = new Logger();//instance of Logger cls which is in logger2.js

logger.on('messageLogged', (arg) =>{
    console.log('Listener Called', arg);
});

logger.log('message');