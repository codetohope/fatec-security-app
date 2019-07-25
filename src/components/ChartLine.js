import React, {Component} from 'react';
import { Line } from "react-chartjs-2";

class ChartLine extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartLineData:{
                labels: ['Jan', 'Fev',
                'Mar', 'Abr', 'Mai',
            'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
                datasets:[
                    {
                        label:'2017',
                        data:[
                            5, 10, 5, 14, 20, 15, 6, 14, 8, 12, 15, 5, 10
                        ],
                        borderColor: 'rgba(77, 166, 253, 0.85)',
                        backgroundColor: 'transparent',
                    },
                    {
                        label: '2018',
                        data: [
                            9, 14, 11, 6, 5, 4, 3, 8, 11, 10, 13, 18, 5
                        ],
                        borderColor: 'rgba(6, 204, 6, 0.85)',
                        backgroundColor: 'transparent',
                    }
                ]
            }
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'right'
    }

    render(){
        return(
            <div className="chartline">
                <Line
                    data={this.state.chartLineData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Latrocinio por mês ',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default ChartLine;