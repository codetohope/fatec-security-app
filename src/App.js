import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import ChartLine from './components/ChartLine';
import ChartBar from './components/ChartBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChartBar />
        <ChartLine />
      </div>
    )
  }
}

export default App;
