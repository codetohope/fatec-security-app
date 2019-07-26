import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDoubleUp, faAngleDoubleDown} from '@fortawesome/free-solid-svg-icons';

class GeneralTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <ReactTable
                data={this.state.data}
                columns={[
                    {
                        Header: () => (
                            <span style={{
                                fontSize: '13pt',
                                fontWeight: 'bold'
                            }}>DP</span>
                        ),
                        accessor: 'dp',
                    },
                    {
                        Header: () => (
                            <span style={{
                                fontSize: '13pt',
                                fontWeight: 'bold'
                            }}>CRIME</span>
                        ),
                        accessor: 'name',
                        Cell: row =>  {
                            return row.original.qtyOcurrencies > row.original.trend.lastQtyOcurrencies?
                            <span>{row.value} <FontAwesomeIcon icon={faAngleDoubleUp} color="red" /></span>:
                            <span>{row.value} <FontAwesomeIcon icon={faAngleDoubleDown} color="green" /></span>
                        }
                    }, 
                    {
                        Header: () => (
                            <span style={{
                                fontSize: '13pt',
                                fontWeight: 'bold'
                            }}>OCORRÊNCIAS</span>
                        ),
                        accessor: 'qtyOcurrencies',
                        Cell: props => <span className='number'>{props.value}</span>
                    }
                ]}
                loading={this.state.loading}
                manual
                onFetchData={(state, instance) => {
                    this.setState({loading: true})
                    axios.get('mock/data.json')
                    .then((response) => {
                        this.setState({
                            data: response.data,
                            loading: false
                        })
                    })
                }}
                minRows={this.state.data.length}
                showPagination={false}
                style={{
                    textAlign: 'center',
                    fontFamily: 'Courier New',
                    borderRadius: '2px',
                    border: '2px solid gray'
                }}
                getTrProps={(state, rowInfo) => {
                    if (rowInfo !== undefined) {
                        console.log('row', rowInfo)
                        return {
                            style: {
                                background: rowInfo.index % 2 === 0? '#80b1bd': '#6f868c'
                            }
                        }
                    } else return {}
                }}
            />
        );
    }
}

export default GeneralTable;