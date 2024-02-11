import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css'
import Defaultform from '../components/DefaultForm.tsx';
import SjLogo from '../public/img/SJLogo.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Lógica de autenticação
    console.log('Usuário:', username, 'Senha:', password);
    navigate('/');
  };

  const handleSignUp = () => {
    navigate('/cadastro'); // Navega para a página de cadastro
  };

  const customHeader = (
    <div className="text-center mt-4">
      <img src={SjLogo} className="img-fluid" width={200 + "px"} height={50 + "px"} />
      <h1 className="h2">Controle de Estoque</h1>
      <p className="lead">
        Entre com a sua conta para continuar
      </p>
    </div>
  );

  const customFooter = (
    <div className="text-center mb-3">
      Não possui uma conta? <a onClick={handleSignUp} href="#">Cadastre-se</a>
    </div>
  );

  const customForm = (
    <form>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control form-control-lg" type="email" name="email" placeholder="Digite seu email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Senha</label>
        <input className="form-control form-control-lg" type="password" name="password" placeholder="Digite sua senha" />
      </div>
      <div>
        <div className="form-check align-items-center">
          <input id="customControlInline" type="checkbox" className="form-check-input" value="remember-me" name="remember-me" checked />
          <label className="form-check-label text-small" for="customControlInline">Lembrar-me</label>
        </div>
      </div>
      <div className="d-grid gap-2 mt-3">
        <a onClick={handleLogin} href="#" className="btn btn-lg btn-primary">Login</a>
      </div>
    </form>
  );

  return (
    <div>
      <Defaultform customHeader={customHeader} customFooter={customFooter}>
        {customForm}
      </Defaultform>
    </div>
  );
};

export default LoginPage;
