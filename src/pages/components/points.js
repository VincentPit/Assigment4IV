

function Points(props) {
    const { data, xScale, yScale, selectedStation, setSelectedStation, setTooltipX, setTooltipY, setTooltipData } = props;

    const getColor = (station) => (station === selectedStation ? 'red' : 'steelblue');

    const handleMouseEnter = (event, d) => {
        setSelectedStation(d.station);
        setTooltipX(event.pageX);  // Capture the X position
        setTooltipY(event.pageY);  // Capture the Y position
        setTooltipData(d);         // Set the tooltip data to the current data point
        console.log("passed to tool", d);
    };
    
    const handleMouseOut = () => {
        setSelectedStation(null);
        setTooltipX(null);
        setTooltipY(null);
        setTooltipData(null);
    };
    
    return (
        <g>
            {selectedStation && (
                    <rect
                        x={0} 
                        y={0}
                        width={1000} 
                        height={600} 
                        fill="yellow"
                        opacity={0.5}
                    />
                )}
            {data.map((d, index) => (
                

                <circle
                    key={index}
                    cx={xScale(d.tripdurationS)}
                    cy={yScale(d.tripdurationE)}
                    r={5}
                    fill={getColor(d.station)}
                    onMouseEnter={(event) => handleMouseEnter(event, d)}
                    onMouseOut={handleMouseOut}
                />
            ))}
        </g>
    );
}

export default Points;
