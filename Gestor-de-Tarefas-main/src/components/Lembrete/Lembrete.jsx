import React from 'react';
import { Link } from 'react-router-dom'; // <--- Importe o Link
import styles from './Lembrete.module.css';

function Lembrete({ dados, aoDeletar }) {
  const dataFormatada = new Date(dados.dataValidade).toLocaleDateString('pt-BR');

  return (
    <div className={styles.card}>
      <div className={styles.imagemContainer}>
        <img src={dados.imagemUrl || "https://cdn-icons-png.flaticon.com/512/2921/2921222.png"} alt="Ícone" className={styles.icone}/>
      </div>

      <div className={styles.conteudo}>
        <h3 className={styles.titulo}>{dados.titulo}</h3>
        <p className={styles.descricao}>{dados.descricao}</p>
        <span className={styles.data}>📅 Vence em: {dataFormatada}</span>
      </div>

      <div className={styles.botoes}>
        {/* BOTÃO EDITAR */}
        <Link to={`/editar/${dados._id}`} className={styles.botaoEditar} title="Editar">
          ✏️
        </Link>

        {/* BOTÃO DELETAR */}
        <button className={styles.botaoDeletar} onClick={() => aoDeletar(dados._id)} title="Excluir">
          🗑️
        </button>
      </div>
    </div>
  );
}

export default Lembrete;