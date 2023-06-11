const express = require('express')
const app = express()
const port = 5000 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello from OneSocial!');
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "irajeshbhattarai",
        followers: 120,
        follows: 89,
        date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`
    };
    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "Rajesh Bhattarai",
        followers: 180,
        follows: 79,
        date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`
    };
    res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "irajesh",
        followers: 329,
        follows: 319,
        date: `${new Date().getDate()} ${new Date().getMonth() + 1} ${new Date().getFullYear()}`
    };
    res.status(200).json(instaSocial);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

