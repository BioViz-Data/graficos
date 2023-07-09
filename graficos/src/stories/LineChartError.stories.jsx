import React from 'react';
import LineChartWithErrorBars from './LineChartError.jsx';

export default {
  title: 'Example/LineChartError',
  component: LineChartWithErrorBars,
};

const Template = (args) => <LineChartWithErrorBars {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  // Here you can specify default props for your component
};
