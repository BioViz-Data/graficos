import React from 'react';
import DoughnutChart from './DoughnutChart';

export default {
  title: 'Example/DoughnutChart',
  component: DoughnutChart,
};

const Template = (args) => <DoughnutChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { 'Feature label': 'Feature 1', 'Pie value': 10 },
    { 'Feature label': 'Feature 2', 'Pie value': 20 },
    { 'Feature label': 'Feature 3', 'Pie value': 30 },
    // Add more data as needed
  ],
};
