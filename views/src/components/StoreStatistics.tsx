import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LineChartComponent from './LineChartComponent.tsx';
import DoughnutChartComponent from './DoughnutChartComponent.tsx';
import BarChartComponent from './BarChartComponent.tsx';

const StoreStatistics = () => {
    return (
        <>
        <center>
          <h3 className='lead'>Estatísticas da Loja</h3>
        </center>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
              <div className="card">
                <div className="card-body">
                  <center>
                    <h5 className="card-title">Produtos mais vendidos no mês</h5>
                    <div className="" style={{height: 400 + "px"}}>
                        <DoughnutChartComponent/>    
                    </div>
                  </center>
                  {/* <a href="#" className="card-link">Ver em Detalhes</a> */}
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className="card">
                <div className="card-body">
                  <center>
                    <h5 className="card-title">Clientes que Mais compraram no mês</h5>
                    <div style={{height: 400 + "px"}}>
                      <BarChartComponent/>
                    </div>
                  </center>
                  {/* <a href="#" className="card-link">Ver em Detalhes</a> */}
                </div>
              </div>
            </div>

            <div className='col-md-4'>
              <div className="card">
                <div className="card-body">
                  <center>
                    <h5 className="card-title">Produtos com Estoque abaixo do mínimo</h5>
                    <div style={{height: 400 + "px"}}>
                        <LineChartComponent/>    
                    </div>
                  </center>
                  {/* <a href="#" className="card-link">Ver em Detalhes</a> */}
                </div>
              </div>
            </div>
          </div>
        </>
    )
};

export default StoreStatistics;