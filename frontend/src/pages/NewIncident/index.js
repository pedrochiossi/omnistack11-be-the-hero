import React from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';

const NewIncident = () => {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="logo" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </section>
        <form>
          <input type="text" placeholder="Título do Caso" />
          <textarea type="email" placeholder="Descrição" />
          <input type="text" placeholder="Valor em Reais" />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewIncident;
