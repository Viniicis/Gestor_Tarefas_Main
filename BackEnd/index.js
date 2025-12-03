require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');


const app = express();

app.use(cors());
app.use(express.json());

// --- SUA CONEXÃO MONGO DB ---
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('Banco de Dados Conectado!'))
  .catch((err) => console.error('Erro na conexão:', err));

// rotas
app.use(routes);

//Porta 5000
app.listen(5000, () => {
  console.log('Servidor rodando OK');
});