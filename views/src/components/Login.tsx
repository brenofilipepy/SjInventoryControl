import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Usuário:', username, 'Senha:', password);
  };

  const handleSignUp = () => {
    navigate('/cadastro'); // Navega para a página de cadastro
  };

  return (
    <div class="container-fluid bg-success">
      <div class="container d-flex align-items-center justify-content-center" style={{height: 100 + "vh"}}>
        <div class="card w-50 h-50">
          <div class="card-body">
            <form class="login-form">
              <center>
                <h2 class="display-6">Controle de Estoque</h2>
                <h2 class="display-6">Santos Jewelry</h2>
              </center>
              <br/>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">@</span>
                  <input type="type" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <div class="mb-3">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">**</span>
                  <input type="password" class="form-control" placeholder="Senha" aria-label="Senha" aria-describedby="basic-addon1"/>
                </div>
              </div>
              <br/><br/>
              <center>
                <div class="d-flex justify-content-between mb-3">
                  <button type="button" class="btn btn-primary flex-fill me-2">Entrar</button>
                  <button onClick={handleSignUp} type="button" class="btn btn-warning flex-fill">Cadastrar-se</button>
                </div>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
