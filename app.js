const express = require("express");

const app = express();
const port = 3000;

app.get("/programming-language", (req, res) => {
    res.send("Javascript");
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

// command to run:  node app.js