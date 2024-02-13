import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from '../components/Sidebar.tsx';
import NavBar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import ProductTableGenerator from '../components/ProductTableGenerator.tsx';
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

  return (
    <div className="wrapper">
      <SideBar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      <div className="main">
        <NavBar/>
        <main className="content">
          {/* conteudo */}

          {selectedItem === "list-products-item" && <ProductTableGenerator data={products} />}
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
