import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + .1)) + min;
}

// var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
// gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
// gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");



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


class LineChart extends Component {
    getInitialState() {
        return getState();
    }

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 2000);
    }

    render() {
        return (
            <>

                <div className="container">
                    <nav className="navbar">
                        <h1>NAV</h1>
                    </nav>

                    <div>
                        <h2>Line Example</h2>
                        <Line data={ this.state } />
                    </div>

                    <main className="content">
                        <div className="item1">
                            picture
                        </div>
                        <div className="item2">
                            <div className="WA">
                                $10,000
                            </div>
                            <div className="NumCoins">
                                4
                            </div>
                        </div>
                        <div className="item3">
                            Space
                        </div>
                        <div className="item4">
                            <div className="CurrentValue">
                                $12,000
                            </div>
                            <div className="DailyPercent">
                                5.0%
                            </div>
                        </div>
                        <div className="item5">
                            <div className="Profit">$2,000
                            </div>
                            <div className="ProfitPercent">
                                20%
                            </div>
                        </div>
                    </main>
                    <footer className="footer">
                        <h1>FOOTER</h1>
                    </footer>
                </div>
            </>
        );
    }
}

export default LineChart;