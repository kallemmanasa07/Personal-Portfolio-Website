fetch("http://localhost:5000/projects")

.then(response => response.json())

.then(data => {

    let output = "";

    data.forEach(project => {

        output += `

        <div class="project-card">

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <a href="${project.github}" target="_blank">
                View GitHub
            </a>

        </div>

        `;
    });

    document.getElementById("project-container").innerHTML = output;

})

.catch(error => {

    console.log("Error:", error);

});