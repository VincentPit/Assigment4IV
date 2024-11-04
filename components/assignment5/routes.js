import React from "react";

function Routes(props){
    const {projection, routes, selectedAirline} = props;
    // TODO: 
    // return the routes of the selected airline; 
    // If the selectedAirlineID is null (i.e., no airline is selected), return <g></g>.

    //if (!selectedAirlineID) {
        //return <g></g>;
    //}
    console.log("SELECTED airline:",selectedAirline );
    const airlineRoutes = routes.filter(route => route.AirlineID === selectedAirline);
    console.log("ROUTES:", routes);
    return (
        <g>
            {airlineRoutes.map((route, index) => {
                const [sourceX, sourceY] = projection([route.SourceLongitude, route.SourceLatitude]) || [0, 0];
                const [destX, destY] = projection([route.DestLongitude, route.DestLatitude]) || [0, 0];

                return (
                    <line
                        key={index}
                        x1={sourceX}
                        y1={sourceY}
                        x2={destX}
                        y2={destY}
                        stroke="#ff69b4"
                        strokeWidth={1}
                        opacity={0.7}
                    />
                );
            })}
        </g>
    );
}


export { Routes }