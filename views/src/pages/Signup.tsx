import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css'
import Defaultform from '../components/DefaultForm.tsx';
import SjLogo from '../public/img/SJLogo.png';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  const customHeader = (
    <div className="text-center mt-4">
      <img src={SjLogo} className="img-fluid" width={200 + "px"} height={50 + "px"} />
      <h1 className="h2">Vamos Começar!</h1>
      <p className="lead">
        Comece criando seu usuário para utilizar o sistema de controle de estoque.
      </p>
    </div>
  );

  const customFooter = (
    <div className="text-center mb-3">
      Já possui uma conta? <a onClick={handleBackToLogin} href="#">Voltar para Login</a>
    </div>
  );

  const customForm = (
    <form>
      <div className="mb-3">
        <label className="form-label">Nome Completo</label>
        <input className="form-control form-control-lg" type="text" name="name" placeholder="Digite seu nome" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control form-control-lg" type="email" name="email" placeholder="Digite seu email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Senha</label>
        <input className="form-control form-control-lg" type="password" name="password" placeholder="Digite sua senha" />
      </div>
      <div className="d-grid gap-2 mt-3">
        <a href="index.html" className="btn btn-lg btn-primary">Sign up</a>
      </div>
    </form>
  );

  return (
    <Defaultform customHeader={customHeader} customFooter={customFooter}>
      {customForm}
    </Defaultform>
  );
};

export default SignUpPage;



