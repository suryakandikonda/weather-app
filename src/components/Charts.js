import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: [(new Date().getDate()-1), (new Date().getDate()-2), (new Date().getDate()-3), (new Date().getDate()-4), (new Date().getDate()-5), (new Date().getDate()-6), (new Date().getDate()-7)],
                datasets: [
                    {
                        label: 'Humidity (in %)',
                        data: [
                            30,
                            35,
                            31,
                            29,
                            36,
                            40,
                            35
                        ],
                        backgroundColor: [
                            'rgba(255, 255, 255, 1)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 255, 255, 0.6)'
                        ]
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }
    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={20}

                    options={{ 
                        title: {
                            display:this.props.displayTitle,
                            text: 'Humidity of last 7 days',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                     }}
                />
            </div>
        );
    }
}

export default Chart;