import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Cadastro.module.css';

const ICONES_DISPONIVEIS = [
  "https://cdn-icons-png.flaticon.com/512/2921/2921222.png", // Bloco de notas (Padrão)
  "https://cdn-icons-png.flaticon.com/512/839/839860.png",   // Compras/Carrinho
  "https://cdn-icons-png.flaticon.com/512/3079/3079009.png", // Urgente/Alerta
  "https://cdn-icons-png.flaticon.com/512/2910/2910798.png", // Casa/Pessoal
  "https://cdn-icons-png.flaticon.com/512/3050/3050529.png", // Trabalho/Maleta
  "https://cdn-icons-png.flaticon.com/512/2387/2387679.png", // Estudos/Livro
];

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    titulo: '',
    descricao: '',
    dataValidade: '',
    imagemUrl: ICONES_DISPONIVEIS[0] 
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const selecionarImagem = (url) => {
    setForm({ ...form, imagemUrl: url });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/tarefas', form);
      alert('Lembrete salvo com sucesso!');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Erro ao salvar. Verifique se o servidor está rodando.');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Novo Lembrete</h2>
      <form onSubmit={handleSubmit} className={styles.formulario}>
        <div className={styles.grupo}>
          <label>Título:</label>
          <input type="text" name="titulo" value={form.titulo} onChange={handleChange} required placeholder="Ex: Pagar conta de luz"/>
        </div>
        <div className={styles.grupo}>
          <label>Descrição:</label>
          <textarea name="descricao" value={form.descricao} onChange={handleChange} required rows="3"/>
        </div>
        <div className={styles.grupo}>
          <label>Data de Validade:</label>
          <input type="date" name="dataValidade" value={form.dataValidade} onChange={handleChange} required />
        </div>


        <div className={styles.grupo}>
          <label>Escolha um Ícone:</label>
          <div className={styles.selecaoImagens}>
            {ICONES_DISPONIVEIS.map((url, index) => (
              <img 
                key={index}
                src={url} 
                alt={`Opção ${index}`}
                onClick={() => selecionarImagem(url)}
                className={`${styles.opcaoImagem} ${form.imagemUrl === url ? styles.imagemSelecionada : ''}`}
              />
            ))}
          </div>
          <input type="hidden" name="imagemUrl" value={form.imagemUrl} />
        </div>

        <button type="submit" className={styles.botaoSalvar}>Salvar</button>
      </form>
    </div>
  );
}

export default Cadastro;