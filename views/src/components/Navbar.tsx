import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
              data-bs-toggle="dropdown">
              <i className="bi bi-person-circle fs-2"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <i className="align-middle me-1" data-feather="user"></i>
                Perfil
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#" onClick={logout}>Sair</a>
            </div>
          </li>
        </ul>
      </div>

      {/* Componentize this model below */}
      <div className
        ="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Configurações de Perfil</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="profilePicture" className="form-label">Foto de Perfil</label>
                  <input type="file" className="form-control" id="profilePicture" accept="image/*" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneNumber" className="form-label">Telefone</label>
                  <input type="text" className="form-control" id="phoneNumber" placeholder="Alterar seu número de telefone" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Descartar</button>
              <button type="button" className="btn btn-primary">Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
