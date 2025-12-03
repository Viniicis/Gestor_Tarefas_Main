import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lembrete from '../../components/Lembrete/Lembrete';
import styles from './Home.module.css';

function Home() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      const resposta = await axios.get('http://localhost:5000/tarefas');
      setTarefas(resposta.data);
      setCarregando(false);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      setCarregando(false);
    }
  };

  const deletarTarefa = async (id) => {
    if (window.confirm("Deseja realmente excluir este lembrete?")) {
      try {
        await axios.delete(`http://localhost:5000/tarefas/${id}`);
        setTarefas(tarefas.filter(tarefa => tarefa._id !== id));
      } catch (error) {
        alert("Erro ao excluir.");
      }
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Meus Lembretes</h1>
        <p>Gerencie suas tarefas diárias</p>
      </header>

      {carregando ? (
        <p>Carregando tarefas...</p>
      ) : tarefas.length > 0 ? (
        <div className={styles.lista}>
          {tarefas.map((tarefa) => (
            <Lembrete 
              key={tarefa._id} 
              dados={tarefa} 
              aoDeletar={deletarTarefa} 
            />
          ))}
        </div>
      ) : (
        <div className={styles.vazio}>
          <p>Você não tem lembretes cadastrados.</p>
        </div>
      )}
    </div>
  );
}

export default Home;