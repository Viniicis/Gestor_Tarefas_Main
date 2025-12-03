const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
  titulo: String,
  descricao: String,
  dataValidade: Date,
  imagemUrl: String,
  criadoEm: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Tarefa', TarefaSchema);