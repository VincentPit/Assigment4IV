// pages/index.js
import React from 'react';
import ScatterPlot from './components/scatterPlot'; // Adjust path as necessary
import * as d3 from 'd3';

const data = [
  { xValue: 10, yValue: 20 },
  { xValue: 30, yValue: 40 },
  { xValue: 50, yValue: 60 },
];

const xScale = d3.scaleLinear().domain([0, 100]).range([0, 500]);
const yScale = d3.scaleLinear().domain([0, 100]).range([500, 0]);

const Home = () => (
  <svg width={600} height={600}>
    <ScatterPlot
      offsetX={50}
      offsetY={50}
      data={data}
      xScale={xScale}
      yScale={yScale}
      height={500}
      width={500}
    />
  </svg>
);

export default Home;
