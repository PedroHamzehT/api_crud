const express = require('express'); // Const retorna um função
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express(); // Const chamando a função express()
app.use(express.json());    // Permitir enviar dados em formato JSON
app.use(cors());    // Liberando acesso para todos os domínios

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true
});
requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));   // .use() lê as requisições http: get,post,etc.
// (url prefixo, arquivo das rotas)

app.listen(3001); // Mandando a APP ouvir a porta 3001 do navegador