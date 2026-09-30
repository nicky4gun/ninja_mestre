const fs = require('node:fs/promises');
const EventEmitter = require('node:events');
const path = require('node:path');

const filePath = path.join(
    __dirname,
    '../data/log.txt'
);

const eventEmitter = new EventEmitter();

eventEmitter.on('logMessage', (message) => {
    console.log(message);
});

eventEmitter.on('logMessage', async (message) => {
    try {
        await fs.appendFile(filePath, `${new Date().toISOString()} - ${message}\n`, 'utf8');
    }
    catch (error) {
        console.error('Error appending to log file:', error);
    }
});

function log(message) {
    eventEmitter.emit('logMessage', message);
}

module.exports = { log };
