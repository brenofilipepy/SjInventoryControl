import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css'
import RegisterDefaultForm from './registerDefaultForm.tsx';

const RegisterClientForm = () => {
    const registerForm = (
        <>
            <div className="col-md-4">
                <label for="name" className="form-label">Nome</label>
                <input type="text" className="form-control mb-3" id="name"/>

                <label for="email" className="form-label">Email</label>
                <input type="text" className="form-control mb-3" id="email"/>

                <label for="phone" className="form-label">Telefone</label>
                <input type="number" className="form-control mb-3" id="phone"/>

            </div>

            <div className="col-md-4">
                <label for="cpf" className="form-label">CPF/CNPJ</label>
                <input type="number" className="form-control mb-3" id="cpf"/>

                <label for="address" className="form-label">Endereço</label>
                <input type="text" className="form-control mb-3" id="address"/>
            </div>
        </>
    )
    return (
        <div>
            <RegisterDefaultForm formName={"Registrar Cliente"}>
                {registerForm}
            </RegisterDefaultForm>
        </div>
    );
}

export default RegisterClientForm;