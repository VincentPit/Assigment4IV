import React from 'react';

function Bars(props) {
    const { data, xScale, yScale, height, selectedStation, setSelectedStation } = props;

    const getColor = (station) => (station === selectedStation ? 'red' : 'steelblue');

    const handleMouseEnter = (station) => {
        setSelectedStation(station);
    };

    const handleMouseOut = () => {
        setSelectedStation(null);
    };

    if (data) {
        return (
            <g>
                {data.map((d, index) => (
                    <rect
                        key={index}
                        x={xScale(d.station)}
                        y={height - yScale(d.start)}
                        width={xScale.bandwidth()}
                        height={yScale(d.start)}
                        fill={getColor(d.station)}
                        onMouseEnter={() => handleMouseEnter(d.station)}
                        onMouseOut={handleMouseOut}
                    />
                ))}
            </g>
        );
    } else {
        return <g></g>;
    }
}

export default Bars;
