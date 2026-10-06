const fs = require('node:fs/promises');
const EventEmitter = require('node:events');
const path = require('node:path');

const filePath = path.join(
    __dirname,
    '../../data/log.txt'
);

const eventEmitter = new EventEmitter();

eventEmitter.on('logMessage', (message) => {
    console.log(`${new Date().toISOString()} - ` + message);
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

function requestLogger(req, res, next) {
    res.on('finish', () => {
        log(
            `${req.method} ${req.originalUrl} - ${res.statusCode}`
        )
    });

    next();
}

module.exports = {
    log,
    requestLogger
};
