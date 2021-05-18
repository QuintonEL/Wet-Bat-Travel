import React from 'react';
import { Doughnut } from 'react-chartjs-2';

// doughnut chart used for close ratios
const data = {
  labels: ['Purple', 'Yellow'],
  datasets: [
    {
      label: '',
      data: [70, 30],
      backgroundColor: [
        'rgba(95, 108, 175, 0.2)',
        'rgba(231, 240, 195, 0.2)',

      ],
      borderColor: [
        'rgba(95, 108, 175, 1)',
        'rgba(231, 240, 195, 1)',

      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <Doughnut data={data} options={{plugins: {legend: false}}}/>
  </>
);

export default DoughnutChart;