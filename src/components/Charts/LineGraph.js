import React, { Component } from 'react'
import Chart from "chart.js";
import classes from "./LineGraph.module.css";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif"
Chart.defaults.global.legend.display = true;
//--Chart Style Options--//



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + .1)) + min;
}

const getState = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(244, 144, 128, 0.8)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [getRandomInt(-1, 1), getRandomInt(-1, 1), getRandomInt(-1, 1), getRandomInt(-1, 1), getRandomInt(-1, 1), getRandomInt(-1, 1), getRandomInt(-1, 1)]
        }
    ]
});


export default class LineGraph extends Component {
    chartRef = React.createRef();

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 2000);
    }

    componentDidMount() {
        this.buildChart();
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const myChartRef = this.chartRef.current.getContext("2d");
        const { data, average, labels } = this.props;

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        const { height: graphHeight } = myChartRef.canvas;

        let gradientLine = myChartRef
            .createLinearGradient(0, 0, 0, graphHeight);
        gradientLine.addColorStop(0, "rgb(0, 0, 110, 0.2)");
        gradientLine.addColorStop(0.5, "rgb(135, 0, 110, 0.35)");
        gradientLine.addColorStop(1, "rgb(255, 0, 110, 0.7)");

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: "Sales",
                        data: [getRandomInt(-100, 100), getRandomInt(-100, 100), getRandomInt(-100, 100), getRandomInt(-100, 100), getRandomInt(-100, 100), getRandomInt(-100, 100), getRandomInt(-100, 100)],
                        fill: true,
                        fillColor: gradientLine,
                        backgroundColor: gradientLine,

                        borderColor: "#6610f2"
                    },
                    {
                        label: "National Average",
                        data: average,
                        fill: false,
                        borderColor: "#E0E0E0"
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });

    }

    render() {

        return (
            <div className={ classes.graphContainer }>
                <canvas
                    id="myChart"
                    ref={ this.chartRef }
                />
            </div>
        )
    }
}

