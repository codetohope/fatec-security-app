import React, { Component } from 'react';
import ChartLine from './components/ChartLine';
import ChartBar from './components/ChartBar';
import GeneralTable from './components/GeneralTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GeneralTable />
        <ChartBar />
        <ChartLine />
      </div>
    )
  }
}

export default App;
