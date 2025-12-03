const express = require('express');
const routes = express.Router();
const TarefaController = require('./controllers/TarefaController');

routes.get('/tarefas', TarefaController.index);
routes.post('/tarefas', TarefaController.store);
routes.delete('/tarefas/:id', TarefaController.delete);
routes.put('/tarefas/:id', TarefaController.update);

module.exports = routes;