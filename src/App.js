import React, { Component } from 'react';
import System from './components/System';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      systems: [
        {
          name: 'System 1',
          powerUsage: 0,
          totalPower: 1000,
          totalSubSystems: 4,
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <header>
          <h1>System Dashboard</h1>
        </header>
        <main>
          <h2>Major Systems</h2>
          <System 
            name={this.state.systems[0].name}
            powerUsage={this.state.systems[0].powerUsage}
            totalPower={this.state.systems[0].totalPower}
            totalSubSystems={this.state.systems[0].totalSubSystems}
          />
        </main>
      </div>
    );
  }
}

export default App;
