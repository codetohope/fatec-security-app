import React, { Component } from 'react';
import ChartLine from './components/ChartLine';
import ChartBar from './components/ChartBar';
import GeneralTable from './components/GeneralTable';
import Vision from './components/Vision';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralTable />
        <hr/>
        <ChartBar />
        <ChartLine />
        <Vision />
      </div>
    )
  }
}

export default App;
