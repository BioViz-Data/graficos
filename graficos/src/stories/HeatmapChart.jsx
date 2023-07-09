import React from 'react';
import {
  Heatmap,
  HeatmapSeries,
  HeatmapCell,
  schemes,
  LinearXAxis,
  LinearXAxisTickSeries,
  LinearXAxisTickLabel,
  LinearYAxis,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  ChartTooltip
} from 'reaviz';

const HeatmapChart = ({ data }) => {
  const heatmapData = data.map(item => ({
    key: item['Feature label'],
    data: [
      {
        key: item['Condition label'],
        data: item['Condition value'],
        metadata: {
          info: item['Feature info text']
        }
      }
    ]
  }));

  return (
    <Heatmap
      height={400}
      width={600}
      data={heatmapData}
      xAxis={
        <LinearXAxis
          type="category"
          axisLine={null}
          tickSeries={
            <LinearXAxisTickSeries
              label={<LinearXAxisTickLabel padding={5} />}
            />
          }
        />
      }
      yAxis={
        <LinearYAxis
          type="category"
          axisLine={null}
          tickSeries={
            <LinearYAxisTickSeries
              line={null}
              label={<LinearYAxisTickLabel padding={5} />}
            />
          }
        />
      }
      series={
        <HeatmapSeries
          colorScheme={schemes.Greens}
          emptyColor={"#fff"}
          padding={0.01}
          cell={
            <HeatmapCell
              style={{ stroke: "#9f9f9f" }}
              tooltip={
                <ChartTooltip
                  formatter={(data) => (
                    <>
                      <strong>{data.key}</strong>
                      <br />
                      {data.metadata.info}
                    </>
                  )}
                />
              }
            />
          }
        />
      }
    />
  );
};

export default HeatmapChart;
