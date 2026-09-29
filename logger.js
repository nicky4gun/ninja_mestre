const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('logMessage', (message) => {
    console.log(`${message}`);
});

function log(message) {
    eventEmitter.emit('logMessage', message);
}

module.exports = { log };
