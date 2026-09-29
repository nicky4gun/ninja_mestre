
const data = "Hej, dette er noget tekst!";

fetch("http://localhost:3000/write-file", {
    method: "POST",
    headers: {
        "Content-Type": "text/plain"
    },
    body: data
})
.then(response => response.text())
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error("Fejl:", error);
});

