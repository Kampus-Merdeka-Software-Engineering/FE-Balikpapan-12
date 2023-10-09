require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 5500;

const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use((req, res, next) => {
    console.log(`Method: ${req.method} ${req.path}`);
    next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/fe/revou.html'));
  });
  app.get('/style', function(req, res) {
    res.sendFile(path.join(__dirname, '/fe/style.css'));
  });
  app.get('/script', function(req, res) {
    res.sendFile(path.join(__dirname, '/fe/index.js'));
  });
  app.get('/img/:urlImg', function(req, res) {
    res.sendFile(path.join(__dirname, `/fe/img/${req.params.urlImg}`));
  });

routes.forEach((route) => app.use(route));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
