import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'],
  datasets: [
    {
      label: 'Green',
      data: [3, 11, 9, 16, 12, 19],
      fill: false,
      backgroundColor: '#f0cf85',
      borderColor: '#5bbfba',
      gridLines: {
        drawOnArea: false,
      },
    },
    {
      label: 'Purple',
      data: [10, 2, 12, 8, 15, 10],
      fill: false,
      backgroundColor: '#e7f0c3',
      borderColor: '#5f6caf',
      gridLines: {
        drawOnArea: false,
      },
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;