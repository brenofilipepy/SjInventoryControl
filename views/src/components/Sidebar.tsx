import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SjLogo from '../public/img/SJLogo.png';

type SetSelectedItemFunction = (item: string) => void;

const SideBar = ({ selectedItem, setSelectedItem }: { selectedItem: string, setSelectedItem: SetSelectedItemFunction }) => {
    const navigate = useNavigate();

    const listProducts = () => {
        setSelectedItem("list-products-item");
    }

    const listClients = () => {
        setSelectedItem("list-clients-item");
    }

    const home = () => {
        setSelectedItem("list-clients-item");
        navigate('/');
    }

    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"></link>
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" onClick={home}>
                    <img src={SjLogo} className="img-fluid" width={200 + "px"} height={50 + "px"} />
                    <center>
                        <span className="lead align-middle">SjInventoryControl</span>
                    </center>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Produtos
                    </li>

                    <li className={`sidebar-item ${selectedItem === "list-products-item" ? "active" : ""}`}>
                        <a className="sidebar-link" onClick={listProducts}>
                            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Listar</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Clientes
                    </li>

                    <li className={`sidebar-item ${selectedItem === "list-clients-item" ? "active" : ""}`}>
                        <a className="sidebar-link" onClick={listClients}>
                            <i className="align-middle" data-feather="square"></i> <span className="align-middle">Listar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default SideBar;