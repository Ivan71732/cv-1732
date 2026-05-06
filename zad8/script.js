const form = document.getElementById("backendForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            message: message,
            index: "71732"
        })
    })
    .then(response => response.json())
    .then(data => {
        result.innerHTML =
            "Dane zostały poprawnie wysłane do backendu.<br>ID: " + data.id;

        form.reset();

        console.log(data);
    })
    .catch(error => {
        result.innerHTML = "Wystąpił błąd.";
        console.log(error);
    });
});
