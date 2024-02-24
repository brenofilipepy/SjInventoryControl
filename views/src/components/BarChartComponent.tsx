import React from 'react';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


const BarChartComponent = () => {
    const data = {
        labels: ['Maria Oliveira', 'Empresa ABC Ltda', 'José Santos', 'Ana Pereira'],
        datasets: [{
          label: 'Compras feitas',
          data: [91, 80, 65, 59],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
          ],
          borderWidth: 1
        }]
    };

    return (
        <>
            <Bar data={data}/>
        </>
    )
};

export default BarChartComponent;