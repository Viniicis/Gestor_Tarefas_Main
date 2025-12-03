const Tarefa = require('../models/Tarefa');

module.exports = {
  // LISTAR
  async index(req, res) {
    const tarefas = await Tarefa.find().sort({ dataValidade: 1 });
    return res.json(tarefas);
  },

  // CRIAR
  async store(req, res) {
    const { titulo, descricao, dataValidade, imagemUrl } = req.body;
    
    // Se não tiver imagem, usa uma padrão
    const imagemFinal = imagemUrl || "https://cdn-icons-png.flaticon.com/512/2921/2921222.png";

    const tarefa = await Tarefa.create({
      titulo,
      descricao,
      dataValidade,
      imagemUrl: imagemFinal
    });

    return res.json(tarefa);
  },

  // DELETAR
  async delete(req, res) {
    await Tarefa.findByIdAndDelete(req.params.id);
    return res.json({ message: "Deletado com sucesso" });
  },

  // ADICIONE ESTA FUNÇÃO DENTRO DO MODULE.EXPORTS:
  async update(req, res) {
    try {
      const { titulo, descricao, dataValidade, imagemUrl } = req.body;

      // Encontra pelo ID e atualiza, retornando o novo dado (new: true)
      const tarefaAtualizada = await Tarefa.findByIdAndUpdate(
        req.params.id,
        { titulo, descricao, dataValidade, imagemUrl },
        { new: true } 
      );

      return res.json(tarefaAtualizada);
    } catch (error) {
      return res.status(400).json({ error: "Erro ao atualizar tarefa" });
    }
  },
  
};