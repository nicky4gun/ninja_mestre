
const data = "Hej, dette er noget tekst!";

fetch("http://localhost:3000/write-file", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ content: data })
})
.then(response => response.json())
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error("Fejl:", error);
});

