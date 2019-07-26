import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';

class ChartBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartBarData:{
                labels: ['Homicídio Doloso', 'Homicídio Culposo',
                'Tentativa de Homicídio', 'Lesão Corporal', 
                'Latrocínio', 'Estupro'],
                datasets:[
                    {
                        label:'',
                        data:[
                            617594,
                            181045,
                            153060,
                            106519,
                            105162,
                            95072
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
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
            <div className="chart">
                <Bar
                    data={this.state.chartBarData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Gráfico de Crimes 2018',
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

export default ChartBar;