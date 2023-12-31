const express = require('express')
const swaggerUi = require('swagger-ui-express');
const fs = require("fs");
const YAML = require("yaml");
const file  = fs.readFileSync('./swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)
const app = express();
const port = process.env.PORT || 5000;

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

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

app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({params: req.params.token})
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

