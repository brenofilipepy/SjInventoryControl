import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate('/login');
  };

  return (
    <div class="container-fluid bg-info">
      <div class="container d-flex align-items-center justify-content-center" style={{height: 100 + "vh"}}>
        <div class="card w-50 h-60">
          <div class="card-body">
          <form>
            <center>
              <h2 class="display-6">Cadastre-se</h2>
            </center>
            <div class="mb-3">
              <label for="nome" class="form-label">Nome</label>
              <input type="text" class="form-control" id="nome" placeholder="Digite seu nome"/>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="email" placeholder="Digite seu e-mail"/>
            </div>
            <div class="mb-3">
              <label for="senha" class="form-label">Senha</label>
              <input type="password" class="form-control" id="senha" placeholder="Digite sua senha"/>
            </div>
            <center>
              <div class="d-flex justify-content-between mb-3">
                <button type="button" class="btn btn-primary flex-fill me-2">Cadastrar</button>
                <button onClick={handleBackToLogin} type="button" class="btn btn-warning flex-fill">Voltar para Login</button>
              </div>
            </center>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;



