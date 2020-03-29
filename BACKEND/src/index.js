const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //cors('http://meuapp.com') quando estiver em produção
app.use(express.json());

app.use(routes);

app.listen(3333);