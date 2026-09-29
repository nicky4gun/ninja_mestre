const express = require('express');
const fs = require('node:fs/promises');
const path = require('node:path');

const app = express();

app.use(express.json());

const PORT = 3000;

const filePath = path.join(
    __dirname,
    './data/ninja.txt'
)

app.get('/', (req, res) => {
    res.send('Serveren Kører');
});

app.get('/read-file', async (req, res) => {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        return res.status(200).send(fileContent);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Unable to read file' });
    }
});

app.post('/write-file', async (req, res) => {
    const content = req.body?.content;

    try {
        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, content, 'utf8');

        res.status(201).json({ message: 'File written successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Somthing went wrong' });
    }
});

app.listen(PORT, () => {
    console.log(`Serveren kører på http://localhost:${PORT}`);
});

