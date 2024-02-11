import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import SideBar from '../components/Sidebar.tsx';
import NavBar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import SjLogo from '../public/img/public/SJLogo.png';

const HomePage = () => {
  const navigate = useNavigate();

  const home = () => {
    navigate('/');
  }
  return (
    <div className="wrapper">
      <SideBar/>
      <div className="main">
        <NavBar/>
        <main className="content">
          {/* conteudo */}
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
