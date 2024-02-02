import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Usuário:', username, 'Senha:', password);
  };

  return (
    <div class="login-container">
    <h2 class="text-center">Login</h2>
    <form class="login-form">
      <div class="mb-3">
        <label for="username" class="form-label">Usuário</label>
        <input type="text" class="form-control" id="username" placeholder="Digite seu usuário"/>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Senha</label>
        <input type="password" class="form-control" id="password" placeholder="Digite sua senha"/>
      </div>
      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
    </div>
  );
};

export default LoginPage;
