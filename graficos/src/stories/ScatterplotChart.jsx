import React, { useEffect, useRef } from 'react';
import { Chart, ScatterController, PointElement, LinearScale, Title, Tooltip } from 'chart.js';

Chart.register(ScatterController, PointElement, LinearScale, Title, Tooltip);

const ScatterplotChart = ({ data }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chart(chartContainer.current, {
        type: 'scatter',
        data: {
          datasets: data.map(item => ({
            label: item['Feature Label'],
            data: [{
              x: item['X values'],
              y: item['Y values']
            }],
            pointBackgroundColor: 'rgba(75, 192, 192, 0.6)',
            pointBorderColor: 'rgba(75, 192, 192, 1)',
            pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
            pointHoverBorderColor: 'rgba(75, 192, 192, 1)'
          }))
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: {
              callbacks: {
                afterBody: function(tooltipItems) {
                  return data[tooltipItems[0].dataIndex]['Feature info text'];
                }
              }
            }
          }
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

export default ScatterplotChart;
