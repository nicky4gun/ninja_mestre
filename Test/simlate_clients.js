
const sendRequest = async (url, data, count) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const text = await res.json();
        console.log(`Client ${count}:`, text);

    } catch (error) {
        console.error(`Client ${count} error:`, error);
    }
}

for (let i = 1; i <= 10; i++) {
    sendRequest('http://localhost:3000/write-file', { content: `Hej, dette er noget tekst fra client ${i}!` }, i);
}