require('dotenv').config(); // <--- Primeira linha do arquivo
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./src/routes');


const app = express();

// O cors permite que seu Front-end acesse esse Back-end
app.use(cors());
app.use(express.json());

// --- SUA CONEXÃO MONGO DB ---
// Lembre-se de trocar <db_password> pela senha que você criou no site
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log('✅ Banco de Dados Conectado!'))
  .catch((err) => console.error('❌ Erro na conexão:', err));

// Usar as rotas
app.use(routes);

// Rodar na porta 5000
app.listen(5000, () => {
  console.log('🚀 Servidor rodando: http://localhost:5000');
});