import React from 'react';
import ScatterplotChart from './ScatterplotChart';

export default {
  title: 'Example/ScatterplotChart',
  component: ScatterplotChart,
};

const Template = (args) => <ScatterplotChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { 'Feature Label': 'Feature 1', 'X values': 10, 'Y values': 20, 'Feature info text': 'Info 1' },
    { 'Feature Label': 'Feature 2', 'X values': 30, 'Y values': 40, 'Feature info text': 'Info 2' },
    { 'Feature Label': 'Feature 3', 'X values': 50, 'Y values': 60, 'Feature info text': 'Info 3' },
    { 'Feature Label': 'Feature 4', 'X values': 20, 'Y values': 3, 'Feature info text': 'Info 4' },
    { 'Feature Label': 'Feature 3', 'X values': 27, 'Y values': 20, 'Feature info text': 'Info 5' },
    { 'Feature Label': 'Feature 3', 'X values': 12, 'Y values': 28, 'Feature info text': 'Info 3' },
    // Add more data as needed
  ],
};
