import React, { useEffect, useRef } from 'react';
import { select } from 'd3-selection';
import { axisBottom } from 'd3-axis';

function XAxis(props) {
    const { xScale, height, width, axisLabel } = props;
    const axisRef = useRef(); // Create a reference for the axis

    useEffect(() => {
        if (xScale) {
            // Render the axis using the selected scale
            const axis = axisBottom(xScale)
                .tickFormat((d) => d) // Ensure tick format is correct for your data
                .ticks(5); // Adjust number of ticks if needed

            select(axisRef.current).call(axis);

            // Rotate x-axis labels
            console.log("axisRef.current", axisRef.current);
            select(axisRef.current)
                .selectAll("text") // Select all text elements
                .attr("transform", "rotate(-45)") // Rotate the text
                .attr("text-anchor", "end") // Anchor the text at the end
                .attr("dx", "-0.5em") // Adjust horizontal position
                .attr("dy", "0.35em"); // Adjust vertical position
        }
    }, [xScale]); // Re-render if xScale changes

    return (
        <g transform={`translate(0, ${height})`}>
            <g ref={axisRef} />
            <text
                style={{ textAnchor: 'middle', fontSize: '15px' }}
                x={width / 2}
                y={30} // Adjust vertical position for the label
            >
                {axisLabel}
            </text>
        </g>
    );
}

export default XAxis;
