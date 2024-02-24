import React from 'react';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';


const LineChartComponent = () => {
    const data = {
        labels: ['Colar de Esmeraldas', 'Brinco de Pérola', 'Pingente de Diamante', 'Pulseira de Rubi'],
        datasets: [
          {
            label: 'Quantidade',
            data: [49, 30, 25, 39],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      };
  
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
  
      return (
        <div>
          <Line data={data} options={options} />
        </div>
      );
};

export default LineChartComponent;