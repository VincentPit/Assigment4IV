import React from 'react';
import Bars from './bars';  // Make sure to import the Bars component
import XAxis from './xAxis'; // Import XAxis component
import YAxis from './yAxis';  // Import YAxis component

function BarChart(props){
    const {offsetX, offsetY, data, xScale, yScale, height, width, selectedStation, setSelectedStation } = props;
    //task1: transform the <g> with the offsets so that the barchart can show properly 
    //task2: import the components needed and uncomment the components in the return 
    
    
    return (
        <g transform={`translate(${offsetX}, ${offsetY})`}>
            {/* Render the Bars, YAxis, and XAxis components */}
            <Bars data={data} xScale={xScale} yScale={yScale} height={height} setSelectedStation={setSelectedStation} selectedStation = {selectedStation} />
            <YAxis yScale={yScale} height={height} axisLabel={"Bikers start from"} />
            <XAxis xScale={xScale} height={height} width={width} axisLabel={"Months"} />
        </g>
    );
}

export default BarChart