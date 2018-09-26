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
          subSystems: [
            {
              systemName: 'Sub System 0',
              powerUsage: .20,
              powerUsed: 200
            },
            {
              systemName: 'Sub System 1',
              powerUsage: .30,
              powerUsed: 300
            },
            {
              systemName: 'Sub System 2',
              powerUsage: .25,
              powerUsed: 250
            },
            {
              systemName: 'Sub System 3',
              powerUsage: .25,
              powerUsed: 250
            }
          ]
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
          {this.state.systems.map((system, index) => {
            return(
              <System
                key={index}
                name={system.name}
                powerUsage={system.powerUsage}
                totalPower={system.totalPower}
                subSystems={system.subSystems}
              />
            );
          })}
        </main>
      </div>
    );
  }
}

export default App;
