import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login.tsx';
import SignUpPage from './pages/Signup.tsx';
import HomePage from './pages/Home.tsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
