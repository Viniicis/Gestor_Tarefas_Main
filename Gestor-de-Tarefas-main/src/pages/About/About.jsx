import React from 'react';

function About() {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '40px auto', 
      padding: '40px', 
      backgroundColor: 'white', 
      borderRadius: '16px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#007bff', marginBottom: '10px' }}>📌 Sobre o TaskManager</h1>
      
      <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.6' }}>
          Desenvolvido durante a disciplina de <strong>Linguagem de Programação para Internet</strong>, este projeto demonstra a integração entre Front-end e Back-end.
          <br />
          Sua missão é simplificar a organização pessoal através de uma interface moderna e responsiva.
      </p>

      <hr style={{ border: '0', borderTop: '1px solid #eee', margin: '30px 0' }} />

      <div style={{ textAlign: 'left', display: 'inline-block' }}>
        <h3 style={{ color: '#333' }}>🛠 Tecnologias:</h3>
        <ul style={{ color: '#666', lineHeight: '1.8' }}>
          <li>⚛️ <strong>ReactJS</strong> (Interface Moderna)</li>
          <li>🟢 <strong>Node.js & Express</strong> (API Rápida)</li>
          <li>🍃 <strong>MongoDB</strong> (Banco de Dados na Nuvem)</li>
          <li>🎨 <strong>CSS Modules</strong> (Estilização Modular)</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '40px', fontSize: '0.9rem', color: '#999' }}>
        Desenvolvido por <strong>Vinicius Paulo Pereira </strong> <br />
        <strong>Guilherme Antônio de Souza</strong> <br />
        <strong>Sarah Ferreira Vilela</strong>
      </div>
    </div>
  );
}

export default About;