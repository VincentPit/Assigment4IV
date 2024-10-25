// scatterPlot.js

import React from 'react';
import Points from './points';
import XAxis from './xAxis';
import YAxis from './yAxis';


function ScatterPlot(props){
    const { offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation, setTooltipX, setTooltipY, setTooltipData} = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    //console.log("props:", props);
    console.log("data", data);
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            <Points data={data} xScale={xScale} yScale={yScale} selectedStation={selectedStation} setSelectedStation={setSelectedStation} setTooltipX ={setTooltipX} setTooltipY={setTooltipY} setTooltipData={setTooltipData}/>
            <YAxis yScale={yScale} height={height} axisLabel={"Trip duration end in"} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Trip duration start from"} />
        </g>
    );
}

export default ScatterPlot