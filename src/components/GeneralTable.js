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

    getHeaderProps = (columnName) => {
        return (
            <span style={
                {
                    fontSize: '13pt',
                    fontWeight: 'bold'
                }
            }>{columnName}</span>
        )
    }

    getRowProps = (row) => row.original.qtyOcurrencies > row.original.trend.lastQtyOcurrencies?
        <span>{row.value} <FontAwesomeIcon icon={faAngleDoubleUp} color="red" /></span>:
        <span>{row.value} <FontAwesomeIcon icon={faAngleDoubleDown} color="green" /></span>

    render() {
        return (
            <ReactTable
                data={this.state.data}
                columns={
                    [
                        {
                            Header: () => this.getHeaderProps('DP'),
                            accessor: 'dp',
                        },
                        {
                            Header: () => this.getHeaderProps('CRIME'),
                            accessor: 'name',
                            Cell: row => this.getRowProps(row)
                        },
                        {
                            Header: () => this.getHeaderProps('OCORRÊNCIAS'),
                            accessor: 'qtyOcurrencies',
                            Cell: row => <span className='number'>{row.value}</span>
                        }
                    ]
                }
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
                style={
                    {
                        textAlign: 'center',
                        fontFamily: 'Courier New',
                        borderRadius: '2px',
                        border: '2px solid gray'
                    }
                }
                getTrProps={(state, rowInfo) => {
                        if (rowInfo !== undefined) {
                            return {
                                style: {
                                    background: rowInfo.index % 2 === 0? '#80b1bd' : '#6f868c'
                                }
                            }
                        } else return {}
                    }
                }
            />
        );
    }
}

export default GeneralTable;