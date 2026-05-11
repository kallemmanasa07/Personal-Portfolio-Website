const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());

/* MongoDB Connection */

mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB")

.then(() => console.log("MongoDB Connected"))

.catch(err => console.log(err));

/* Schema */

const projectSchema = new mongoose.Schema({

    title: String,
    description: String,
    github: String

});

/* Model */

const Project = mongoose.model("Project", projectSchema);

/* Static Project Data */

const projects = [

    {
        title: "Online Code Editor with Live Preview",
        description: "A web-based code editor supporting HTML, CSS, and JavaScript with live preview.",
        github: "https://github.com/kallemmanasa07/Online-Code-Editor-with-Live-Preview"
    },

    {
        title: "TaskTact Intelligent To-Do Manager",
        description: "Smart task management application for organizing daily activities efficiently.",
        github: "https://github.com/kallemmanasa07/TaskTact-Intelligent-To-Do-Manager"
    }

];

/* API */

app.get("/projects", async (req, res) => {

    res.json(projects);

});

/* Server */

app.listen(5000, () => {

    console.log("Server Running on Port 5000");

});