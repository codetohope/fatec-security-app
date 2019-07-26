import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import ChartLine from './components/ChartLine';
import ChartBar from './components/ChartBar';
import Vision from './components/Vision'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartBar />
        <ChartLine />
        <Vision />
      </div>
    )
  }
}

export default App;
