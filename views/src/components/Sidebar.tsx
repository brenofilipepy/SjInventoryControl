import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import SjLogo from '../public/img/SJLogo.png';

const SideBar = () => {
    return (
        <nav id="sidebar" className="sidebar js-sidebar">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet"></link>
            <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="#">
                    <img src={SjLogo} className="img-fluid" width={200 + "px"} height={50 + "px"} />
                    <center>
                        <span className="lead align-middle">SjInventoryControl</span>
                    </center>
                </a>

                <ul className="sidebar-nav">
                    <li className="sidebar-header">
                        Produtos
                    </li>

                    <li className="sidebar-item active">
                        <a className="sidebar-link" href="index.html">
                            <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Listar</span>
                        </a>
                    </li>

                    <li className="sidebar-header">
                        Clientes
                    </li>

                    <li className="sidebar-item">
                        <a className="sidebar-link" href="ui-buttons.html">
                            <i className="align-middle" data-feather="square"></i> <span className="align-middle">Listar</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default SideBar;