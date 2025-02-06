const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
	res.json({ message: "Hello from Ubuntu1 " });
});

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server running on http://0.0.0.0:${PORT}`);
});
