import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/app.css'
import RegisterDefaultForm from './RegisterDefaultForm.tsx';

const RegisterProductForm = () => {
    const registerForm = (
        <>
            <div className="col-md-4">
                <label for="name" className="form-label">Nome</label>
                <input type="text" className="form-control mb-3" id="name"/>

                <label for="category" className="form-label">Categoria</label>
                <input type="text" className="form-control mb-3" id="category"/>

                <label for="supplier" className="form-label">Fornecedor</label>
                <input type="text" className="form-control mb-3" id="supplier"/>

                <label for="description" className="form-label">Descrição</label>
                <input type="text" className="form-control mb-3" id="description"/>

                <label for="quantity" className="form-label">Quantidade</label>
                <input type="number" className="form-control mb-3" id="quantity"/>
            </div>

            <div className="col-md-4">
                <label for="addDate" className="form-label">Data de Adição</label>
                <input type="date" className="form-control mb-3" id="addDate"/>

                <label for="cost" className="form-label">Preço de Compra</label>
                <input type="number" className="form-control mb-3" id="cost"/>

                <label for="price" className="form-label">Valor de Venda</label>
                <input type="number" className="form-control mb-3" id="price"/>

                <label for="measure" className="form-label">Medida</label>
                <input type="text" className="form-control mb-3" id="measure"/>

                <label for="weight" className="form-label">Peso</label>
                <input type="text" className="form-control mb-3" id="weight"/>
            </div>

            <div className="col-md-4">
                {/* so pode aceitar ate 13 digitos numericos */}
                <label for="eanCode" className="form-label">Código EAN</label>
                <input type="text" className="form-control mb-3" id="eanCode"/>

                <label for="skuCode" className="form-label">Código SKU</label>
                <input type="text" className="form-control mb-3" id="skuCode"/>

                <label for="orderDate" className="form-label">Data do Pedido</label>
                <input type="date" className="form-control mb-3" id="orderDate"/>

                <label for="sendDate" className="form-label">Data de Envio</label>
                <input type="date" className="form-control mb-3" id="sendDate"/>

                <label for="deliveryDate" className="form-label">Data de Entrega</label>
                <input type="date" className="form-control mb-3" id="deliveryDate"/>
            </div>
            
        </>
    )
    return (
        <div>
            <RegisterDefaultForm formName={"Registrar Produto"}>
                {registerForm}
            </RegisterDefaultForm>
        </div>
    );
}

export default RegisterProductForm;