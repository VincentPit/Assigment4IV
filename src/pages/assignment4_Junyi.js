import React from 'react'
import * as d3 from "d3"
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container} from 'react-bootstrap'
import ScatterPlot from '../components/scatterPlot'
import BarChart from '../components/barChart'
import Tooltip from '../components/tooltips'


const csvUrl = 'https://gist.githubusercontent.com/hogwild/3b9aa737bde61dcb4dfa60cde8046e04/raw/citibike2020.csv'

function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(()=>{
        d3.csv(csvPath).then(data => {
            data.forEach(d => {
                d.start = +d.start;
                d.tripdurationS = +d.tripdurationS;
                d.end = +d.end;
                d.tripdurationE = +d.tripdurationE;
            });
            setData(data);
        });
    }, []);
    return dataAll;
}

const Charts = () => {
    const [month, setMonth] = React.useState('4');
    //Q1.5 define hooks to link the points and bars
    //Notes: you should define the hooks at the beginning of the component; a hook cannot be defined after the if ... else... statement;
    const [selectedStation, setSelectedStation] = React.useState(null);
    const [tooltipX, setTooltipX] = React.useState(null);
    const [tooltipY, setTooltipY] = React.useState(null);
    const [tooltipData, setTooltipData] = React.useState(null);


    const dataAll = useData(csvUrl);
    if (!dataAll) {
        return <pre>Loading...</pre>;
    };
    const WIDTH = 1000;
    const HEIGHT = 600;
    const margin = { top: 40, right: 40, bottom: 40, left: 40};
    const innerHeightScatter = HEIGHT - margin.top - margin.bottom;
    const innerHeightBar = HEIGHT - margin.top - margin.bottom-120;
    const innerWidth = WIDTH - margin.left - margin.right -100;
    const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = dataAll.filter( d => { 
        return d.month === MONTH[month] 
    });

   
    const xScaleScatter = d3.scaleLinear()
        .domain([0, d3.max(dataAll, d => d.tripdurationS)])
        .range([0, innerWidth])
        .nice();
    const yScaleScatter = d3.scaleLinear()
        .domain([0, d3.max(dataAll, d => d.tripdurationE)])
        .range([innerHeightScatter, 0])
        .nice();

//Q1.2: Complete the xScaleBar and yScaleBar
//Hint: use d3.scaleBand for xScaleBar
    const xScaleBar = d3.scaleBand()
    .domain(data.map(d => d.station)) 
    .range([0, innerWidth])
    .padding(0.2);


    const yScaleBar = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.start)]) 
    .range([innerHeightBar, 0])
    .nice();

    const changeHandler = (event) => {
        setMonth(event.target.value);
    };
    return (
        <Container >
            <Row>
                <Col lg={3} md={2}>
                    <input key="slider" type='range' min='0' max='11' value={month} step='1' onChange={changeHandler}/>
                    <input key="monthText" type="text" value={MONTH[month]} readOnly/>
                </Col>
                
            </Row>
            <Row className='justify-content-md-center'>
                <Col>
                    <svg width={WIDTH} height={HEIGHT}>
                        <ScatterPlot offsetX={margin.left} offsetY={margin.top} data={data} xScale={xScaleScatter} yScale={yScaleScatter} 
                        height={innerHeightScatter} width={innerWidth} selectedStation={selectedStation}  
                            setSelectedStation={setSelectedStation}  setTooltipX={setTooltipX}  
                            setTooltipY={setTooltipY}
                            setTooltipData={setTooltipData}
                        />
                    </svg>
                </Col>
                <Col>
                    <svg width={WIDTH} height={HEIGHT}>
                        <BarChart offsetX={margin.left} offsetY={margin.top} data={data} xScale={xScaleBar} 
                        yScale={yScaleBar} height={innerHeightBar} width={innerWidth}
                        selectedStation={selectedStation}  // Pass selected station
                        setSelectedStation={setSelectedStation}  // Pass setter
                        />
                    </svg>
                </Col>
            </Row>
            {/* Q1.6: add the Tooltip 
            1. you should get the selected pointed first and pass it to the <Tooltip />
            2. you should define the hooks for X and Y coordinates of the tooltip; 
            3. to get the position of the mouse event, you can use event.pageX and event.pageY;
            */}
            <Tooltip d={tooltipData} x={tooltipX} y={tooltipY} />

        </Container>
    )   
}


export default Charts