import React from 'react';
import HeatmapChart from './HeatmapChart.jsx';

export default {
  title: 'Example/HeatmapChart',
  component: HeatmapChart,
};

const Template = (args) => <HeatmapChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    { 'Feature label': 'Feature 1', 'Condition label': 'Condition 1', 'Condition value': 10, 'Feature info text': 'Info 1' },
    { 'Feature label': 'Feature 2', 'Condition label': 'Condition 2', 'Condition value': 20, 'Feature info text': 'Info 2' },
    { 'Feature label': 'Feature 3', 'Condition label': 'Condition 3', 'Condition value': 30, 'Feature info text': 'Info 3' },
    // Add more data as needed
  ],
};
