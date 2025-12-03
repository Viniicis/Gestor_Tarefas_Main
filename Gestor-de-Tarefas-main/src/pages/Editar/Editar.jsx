import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Editar.module.css';

function Editar() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    dataValidade: '',
    imagemUrl: ''
  });

  // Novo estado para controlar o carregamento
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      try {
        const response = await axios.get(`http://localhost:5000/tarefas`); 
        
        // Procura a tarefa pelo ID
        const tarefaAtual = response.data.find(t => t._id === id);
        
        // SE NÃO ACHAR A TAREFA, NÃO TENTE ACESSAR OS DADOS
        if (!tarefaAtual) {
          alert("Tarefa não encontrada!");
          navigate('/'); // Volta para home
          return;
        }

        // Formata a data com segurança
        let dataFormatada = '';
        if (tarefaAtual.dataValidade) {
            dataFormatada = tarefaAtual.dataValidade.split('T')[0];
        }

        setForm({
          titulo: tarefaAtual.titulo,
          descricao: tarefaAtual.descricao,
          dataValidade: dataFormatada,
          imagemUrl: tarefaAtual.imagemUrl || ''
        });
        
        setLoading(false); // Dados carregados com sucesso

      } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao carregar dados.");
        navigate('/');
      }
    }
    carregarDados();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/tarefas/${id}`, form);
      alert('Tarefa atualizada!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Erro ao atualizar.');
    }
  };

  // Enquanto estiver carregando, mostra apenas um texto, para não quebrar a tela
  if (loading) {
      return <div className={styles.container}><p>Carregando dados da tarefa...</p></div>;
  }

  return (
    <div className={styles.container}>
      <h2>Editar Tarefa</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.grupo}>
          <label>Título:</label>
          <input type="text" name="titulo" value={form.titulo} onChange={handleChange} required />
        </div>
        <div className={styles.grupo}>
          <label>Descrição:</label>
          <textarea name="descricao" value={form.descricao} onChange={handleChange} required rows="3" />
        </div>
        <div className={styles.grupo}>
          <label>Data de Validade:</label>
          <input type="date" name="dataValidade" value={form.dataValidade} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.botaoSalvar}>Atualizar</button>
      </form>
    </div>
  );
}

export default Editar;