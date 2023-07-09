import React, { useEffect, useRef } from 'react';
import { Chart, DoughnutController, ArcElement, CategoryScale, Title, Tooltip } from 'chart.js';

Chart.register(DoughnutController, ArcElement, CategoryScale, Title, Tooltip);

const DoughnutChart = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: 'doughnut',
        data: {
          labels: data.map(item => item['Feature label']),
          datasets: [{
            data: data.map(item => item['Pie value']),
            backgroundColor: [
              // Add colors for each segment of the doughnut chart
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      return () => newChartInstance.destroy();
    }
  }, [chartContainer, data]);

  return (
    <div style={{height: '500px'}}>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default DoughnutChart;
