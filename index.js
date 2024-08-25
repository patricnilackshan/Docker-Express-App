const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("<h1>Hello WORLD</h1>");
});
app.get("/PATRIC", (req, res) => {
	res.send("<h1>Hello PATRIC</h1>");
});
app.get("/USER", (req, res) => {
	res.send("<h1>Hello USER</h1>");
});

app.listen(8000, () => {
	console.log("App Connected");
});
