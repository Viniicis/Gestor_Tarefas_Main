import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lembrete from '../../components/Lembrete/Lembrete';
import styles from './Home.module.css';

function Home() {
  // Requisito: Gerenciamento de estado com useState
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Requisito: Requisições HTTP com useEffect
  useEffect(() => {
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    try {
      // Ajuste a porta 5000 conforme seu backend
      const resposta = await axios.get('http://localhost:5000/tarefas');
      setTarefas(resposta.data);
      setCarregando(false);
    } catch (error) {
      console.error("Erro ao buscar tarefas:", error);
      setCarregando(false);
    }
  };

  // Função passada para o filho (Lift State Up / Callback)
  const deletarTarefa = async (id) => {
    if (window.confirm("Deseja realmente excluir este lembrete?")) {
      try {
        await axios.delete(`http://localhost:5000/tarefas/${id}`);
        // Atualiza a lista localmente filtrando o item removido
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

      {/* Requisito: Renderização condicional */}
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