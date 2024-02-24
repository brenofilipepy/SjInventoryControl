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
import RegisterProductForm from '../components/RegisterProductForm.tsx';
import RegisterClientForm from '../components/RegisterClientForm.tsx';
import products from '../components/test/data-mocks/products.data.mock.ts'
import clients from '../components/test/data-mocks/clients.data.mock.ts'
import StoreStatistics from '../components/StoreStatistics.tsx';
import SjLogo from '../public/img/public/SJLogo.png';

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("home");  

  const home = () => {
    navigate('/');
  }

  return (
    <div className="wrapper">
      <SideBar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      <div className="main">
        <NavBar/>
        <main className="content">
          {selectedItem === "home" && <StoreStatistics />}
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
  // Produtos com Estoque abaixo do mínimo

};

export default HomePage;
