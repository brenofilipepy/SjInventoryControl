import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row text-muted">
                    <div className="col-6 text-start">
                        <p className="mb-0">
                            <a className="text-muted" href="#" target="_blank">
                                <strong>Controle de Estoque</strong>
                            </a> - <a className="text-muted" href="#" target="_blank">
                                <strong>Santos Jewelry</strong>
                            </a>&copy;
                        </p>
                    </div>
                    <div className="col-6 text-end">
                        <p className="mb-0">
                            Desenvolvido por <a className="text-muted" href="https://www.linkedin.com/in/breno-filipe100a/" target="_blank">Breno Filipe</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;