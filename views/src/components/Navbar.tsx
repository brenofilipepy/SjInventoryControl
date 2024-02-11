import React, { useState } from 'react';
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
          {/* <a className="sidebar-toggle js-sidebar-toggle">
            <i className="hamburger align-self-center"></i>
          </a> */}

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav navbar-align">
              <li className="nav-item dropdown">
              </li>
              <li className="nav-item dropdown">
                <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown"
                  data-bs-toggle="dropdown">
                  <div className="position-relative">
                    <i className="align-middle" data-feather="message-square"></i>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0"
                  aria-labelledby="messagesDropdown">
                  <div className="dropdown-menu-header">
                    <div className="position-relative">
                      4 New Messages
                    </div>
                  </div>
                  <div className="list-group">
                    <a href="#" className="list-group-item">
                      <div className="row g-0 align-items-center">
                        <div className="col-2">
                          <img src="img/avatars/avatar-5.jpg"
                            className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                        </div>
                        <div className="col-10 ps-2">
                          <div className="text-dark">Vanessa Tucker</div>
                          <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu
                            tortor.</div>
                          <div className="text-muted small mt-1">15m ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="row g-0 align-items-center">
                        <div className="col-2">
                          <img src="img/avatars/avatar-2.jpg"
                            className="avatar img-fluid rounded-circle" alt="William Harris" />
                        </div>
                        <div className="col-10 ps-2">
                          <div className="text-dark">William Harris</div>
                          <div className="text-muted small mt-1">Curabitur ligula sapien euismod
                            vitae.</div>
                          <div className="text-muted small mt-1">2h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="row g-0 align-items-center">
                        <div className="col-2">
                          <img src="img/avatars/avatar-4.jpg"
                            className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                        </div>
                        <div className="col-10 ps-2">
                          <div className="text-dark">Christina Mason</div>
                          <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.
                          </div>
                          <div className="text-muted small mt-1">4h ago</div>
                        </div>
                      </div>
                    </a>
                    <a href="#" className="list-group-item">
                      <div className="row g-0 align-items-center">
                        <div className="col-2">
                          <img src="img/avatars/avatar-3.jpg"
                            className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                        </div>
                        <div className="col-10 ps-2">
                          <div className="text-dark">Sharon Lessman</div>
                          <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed,
                            posuere ac, mattis non.</div>
                          <div className="text-muted small mt-1">5h ago</div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="dropdown-menu-footer">
                    <a href="#" className="text-muted">Show all messages</a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#"
                  data-bs-toggle="dropdown">
                  <i className="align-middle" data-feather="settings"></i>
                </a>

                <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#"
                  data-bs-toggle="dropdown">
                  <i className="bi bi-person-circle fs-2"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item" href="pages-profile.html"><i className="align-middle me-1"
                    data-feather="user"></i> Perfil</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#" onClick={logout}>Sair</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    );
};

export default NavBar;