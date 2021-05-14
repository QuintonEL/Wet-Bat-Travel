import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE'],
  datasets: [
    {
      label: 'Bookings',
      data: [3, 11, 9, 16, 12, 19],
      fill: false,
      backgroundColor: '#f0cf85',
      borderColor: '#5bbfba',
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