import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from '../components/Sidebar.tsx';
import NavBar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import ProductTableGenerator from '../components/ProductTableGenerator.tsx';
import ClientTableGenerator from '../components/ClientTableGenerator.tsx';
import UserModal from '../components/UserModal.tsx';
import RegisterProductForm from '../components/registerProductForm.tsx';
import RegisterClientForm from '../components/registerClientForm.tsx';
import SjLogo from '../public/img/public/SJLogo.png';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");  

  const home = () => {
    navigate('/');
  }

  const products = [
    {
      "id": 1,
      "nome": "Brinco de Ouro",
      "tipo": "Brinco",
      "material": "Ouro 18k",
      "pedra": "Zircônia",
      "preco": 800.00
    },
    {
      "id": 2,
      "nome": "Pulseira de Prata",
      "tipo": "Pulseira",
      "material": "Prata 925",
      "pedra": null,
      "preco": 350.00
    },
    {
      "id": 3,
      "nome": "Anel de Safira",
      "tipo": "Anel",
      "material": "Ouro Branco",
      "pedra": "Safira",
      "preco": 3000.00
    },
    {
      "id": 4,
      "nome": "Colar de Esmeraldas",
      "tipo": "Colar",
      "material": "Ouro 24k",
      "pedra": "Esmeralda",
      "preco": 6000.00
    },
    {
      "id": 5,
      "nome": "Brinco de Pérola",
      "tipo": "Brinco",
      "material": "Prata 925",
      "pedra": "Pérola",
      "preco": 500.00
    },
    {
      "id": 6,
      "nome": "Pingente de Diamante",
      "tipo": "Pingente",
      "material": "Ouro 18k",
      "pedra": "Diamante",
      "preco": 2500.00
    },
    {
      "id": 7,
      "nome": "Pulseira de Rubi",
      "tipo": "Pulseira",
      "material": "Ouro 18k",
      "pedra": "Rubi",
      "preco": 1800.00
    },
    {
      "id": 8,
      "nome": "Anel de Topázio",
      "tipo": "Anel",
      "material": "Ouro Amarelo",
      "pedra": "Topázio",
      "preco": 1200.00
    },
    {
      "id": 9,
      "nome": "Colar de Opala",
      "tipo": "Colar",
      "material": "Prata 925",
      "pedra": "Opala",
      "preco": 900.00
    },
    {
      "id": 10,
      "nome": "Brinco de Ametista",
      "tipo": "Brinco",
      "material": "Ouro Rosa",
      "pedra": "Ametista",
      "preco": 700.00
    }
  ];

  const clients = [
    {
        "id": 1,
        "name": "João da Silva",
        "type": "Pessoa Física",
        "cpf": "123.456.789-00",
        "cnpj": "",
        "address": "Rua A, 123",
        "email": "joao@example.com",
        "phone": "(12) 3456-7890",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 10:00:00"
    },
    {
        "id": 2,
        "name": "Maria Oliveira",
        "type": "Pessoa Física",
        "cpf": "987.654.321-00",
        "cnpj": "",
        "address": "Avenida B, 456",
        "email": "maria@example.com",
        "phone": "(34) 5678-9012",
        "status": "Inativo",
        "activityLog": "Última atividade: 2024-02-13 15:30:00"
    },
    {
        "id": 3,
        "name": "Empresa ABC Ltda",
        "type": "Pessoa Jurídica",
        "cpf": "",
        "cnpj": "12.345.678/0001-90",
        "address": "Rua C, 789",
        "email": "contato@empresaabc.com",
        "phone": "(56) 7890-1234",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 11:45:00"
    },
    {
        "id": 4,
        "name": "José Santos",
        "type": "Pessoa Física",
        "cpf": "543.210.987-00",
        "cnpj": "",
        "address": "Travessa D, 012",
        "email": "jose@example.com",
        "phone": "(78) 9012-3456",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 09:15:00"
    },
    {
        "id": 5,
        "name": "Empresa XYZ SA",
        "type": "Pessoa Jurídica",
        "cpf": "",
        "cnpj": "98.765.432/0001-21",
        "address": "Avenida E, 345",
        "email": "contato@empresaxyz.com",
        "phone": "(90) 1234-5678",
        "status": "Inativo",
        "activityLog": "Última atividade: 2024-02-13 14:20:00"
    },
    {
        "id": 6,
        "name": "Ana Pereira",
        "type": "Pessoa Física",
        "cpf": "876.543.210-00",
        "cnpj": "",
        "address": "Rua F, 678",
        "email": "ana@example.com",
        "phone": "(23) 4567-8901",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 08:00:00"
    },
    {
        "id": 7,
        "name": "Empresa QRS SA",
        "type": "Pessoa Jurídica",
        "cpf": "",
        "cnpj": "76.543.210/0001-34",
        "address": "Avenida G, 901",
        "email": "contato@empresaqrs.com",
        "phone": "(45) 6789-0123",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 10:30:00"
    },
    {
        "id": 8,
        "name": "Pedro Almeida",
        "type": "Pessoa Física",
        "cpf": "345.678.901-00",
        "cnpj": "",
        "address": "Rua H, 234",
        "email": "pedro@example.com",
        "phone": "(67) 8901-2345",
        "status": "Inativo",
        "activityLog": "Última atividade: 2024-02-13 16:45:00"
    },
    {
        "id": 9,
        "name": "Empresa UVW Ltda",
        "type": "Pessoa Jurídica",
        "cpf": "",
        "cnpj": "34.567.890/0001-67",
        "address": "Avenida I, 567",
        "email": "contato@empresauvw.com",
        "phone": "(78) 9012-3456",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 09:00:00"
    },
    {
        "id": 10,
        "name": "Maria da Silva",
        "type": "Pessoa Física",
        "cpf": "234.567.890-00",
        "cnpj": "",
        "address": "Rua J, 890",
        "email": "maria.silva@example.com",
        "phone": "(89) 0123-4567",
        "status": "Ativo",
        "activityLog": "Última atividade: 2024-02-14 12:00:00"
    }
]

  return (
    <div className="wrapper">
      <SideBar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      <div className="main">
        <NavBar/>
        <main className="content">
          {/* conteudo */}
          {selectedItem === "list-products-item" && <ProductTableGenerator data={products} />}
          {selectedItem === "list-clients-item" && <ClientTableGenerator data={clients} />}
          {selectedItem === "register-products-item" && <RegisterProductForm />}
          {selectedItem === "register-clients-item" && <RegisterClientForm />}
        </main>
        <Footer/>
      </div>
    </div>
  );
  // Produtos mais vendidos no mes
  // Top Clientes que mais compram
  // Top fornecedor
  // Produtos com Estoque abaixo do mínimo

};

export default HomePage;
