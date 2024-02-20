import React, { ReactNode, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

interface DefaultRegisterFormProps {
    children: ReactNode;
    formName: string;
}

const RegisterDefaultForm = ({children, formName} : DefaultRegisterFormProps) => {
    return (
        <div className="container">
            <h1 className="mb-2">{formName}</h1>  
            <div className="row">
                {children}
            </div>
            <div className="row">
                <div className="col-md-6">
                    <button type="button" className="btn btn-success">Registrar</button>
                </div>
            </div>
        </div>
    )
};

export default RegisterDefaultForm;