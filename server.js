
const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>My Advanced IP Server</title>
            </head>
            <body>
                <h1>Jess's Advanced IP Server!</h1>
                <p>My Node.js and Express server is working!</p>
            </body>
        </html>
    `);
});
app.get("/about", (req, res) => {
    res.send("<h1>About My Server</h1><p>This is my Advanced IP project!</p>");
});

app.get("/api/info", (req, res) => {
    res.json({
        course: "Advanced IP",
        project: "My Node.js Server",
        student: "Jess"
    });
});

app.get("/users/:name", (req, res) => {
    const name = req.params.name;

    res.send(`<h1>Hello, ${name}!</h1>`);
});

app.get("/search", (req, res) => {
    const name = req.query.name;

    res.send(`<h1>Search result: ${name}</h1>`);
});


app.post("/api/students", (req, res) => {
    const { name, course } = req.body;

    res.status(201).json({
        message: "Student registered successfully",
        student: {
            name: name,
            course: course
        }
    });
});


app.use((req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1><p>Sorry, this page doesn't exist!</p>");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});
