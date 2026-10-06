require('dotenv').config();

const express = require('express');
const fs = require('node:fs/promises');
const path = require('node:path');
const logger = require('./utils/logger.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger.requestLogger);

const filePath = path.join(
    __dirname,
    '../data/ninja.txt'
);

app.get('/', (req, res) => {
    res.send('Serveren Kører');
});

app.get('/read-file', async (req, res) => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        logger.log('File content read successfully');

        res.status(200).send(fileContent);
    } catch (error) {
        logger.log('Error reading file');
        console.error(error);

        res.status(500).json({ error: 'Unable to read file' });
    }
});

app.post('/write-file', async (req, res) => {
    const content = req.body?.content;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    try {
        logger.log('Writing to file...')
        await fs.writeFile(filePath, content, 'utf8');

        logger.log('File written successfully');
        res.status(201).json({ message: 'File written successfully' });
    } catch (error) {
        logger.log('Error writing file');
        console.error(error);

        res.status(500).json({ error: 'Something went wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});

