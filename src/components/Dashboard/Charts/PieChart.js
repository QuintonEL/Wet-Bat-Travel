import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Blue', 'Purple', 'Yellow', 'Orange', 'Green'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 7, 10, 16],
      backgroundColor: [
        'rgba(91, 191, 186, 0.2)',
        'rgba(95, 108, 175, 0.2)',
        'rgba(231, 240, 195, 0.2)',
        'rgba(240, 207, 133, 0.2)',
        'rgba(164, 212, 174, 0.2)',
      ],
      borderColor: [
        'rgba(91, 191, 186, 1)',
        'rgba(95, 108, 175, 1)',
        'rgba(231, 240, 195, 1)',
        'rgba(240, 207, 133, 1)',
        'rgba(164, 212, 174, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <Pie data={data} 	
      width={245}
      height={245}
      options={{ maintainAspectRatio: false, plugins: {legend: false}}}
    />
  </>
);

export default PieChart;