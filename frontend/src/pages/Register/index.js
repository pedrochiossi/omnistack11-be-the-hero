import React from 'react';
import './styles.css';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoImg from '../../assets/logo.svg';

const Register = () => {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={LogoImg} alt="logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na platafora e ajude pessoas a encontrarem os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para o logon
          </Link>
        </section>
        <form>
          <input type="text" placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="whatsapp" />
          <div className="input-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
