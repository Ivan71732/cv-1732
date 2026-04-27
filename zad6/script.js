fetch("data.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        document.getElementById("about").textContent = data.about;
        document.getElementById("email").textContent = "E-mail: " + data.email;
        document.getElementById("city").textContent = "Miasto: " + data.city;

        const skillsList = document.getElementById("skillsList");
        data.skills.forEach(function(skill) {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const projectsList = document.getElementById("projectsList");
        data.projects.forEach(function(project) {
            const li = document.createElement("li");
            li.textContent = project;
            projectsList.appendChild(li);
        });
    })
    .catch(function(error) {
        console.log("Błąd pobierania danych:", error);
    });
