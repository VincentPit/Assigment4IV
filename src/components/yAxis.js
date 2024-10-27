


import React from 'react';
import { select } from 'd3-selection';
import { axisLeft } from 'd3-axis';

function YAxis(props) {
    const { yScale, height, axisLabel } = props;

    if (yScale) {
        return (
            <g>
                <g ref={(node) => select(node).call(axisLeft(yScale))} />
                <text
                    style={{ textAnchor: 'end', fontSize: '15px' }}
                    transform={`translate(-20, ${height / 2}) rotate(-90)`}
                >
                    {axisLabel}
                </text>
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default YAxis;