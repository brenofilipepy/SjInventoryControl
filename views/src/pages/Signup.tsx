import React, { useState, ReactComponentElement } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css'
import Defaultform from '../components/DefaultForm.tsx';
import SjLogo from '../public/img/SJLogo.png';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', password: '' });

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

  const registerUser = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:4000/user', JSON.stringify(formData), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
        alert(response.data.message);
        handleBackToLogin();
    } catch (error) {
        alert(error.data.message);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUser();
  }

  const customForm = (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Nome Completo</label>
        <input className="form-control form-control-lg" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Digite seu nome" />
      </div>
      <div className="mb-3">
        <label className="form-label">Email</label>
        <input className="form-control form-control-lg" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Digite seu email" />
      </div>
      <div className="mb-3">
        <label className="form-label">Senha</label>
        <input className="form-control form-control-lg" type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Digite sua senha" />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-lg btn-primary">Sign up</button>
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



