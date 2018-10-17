import React, {Component} from 'react';
import SubSystem from './SubSystem';

class System extends Component {

  constructor(props) {
    super(props);
    this.state = {
      powerUsage: 0,
      totalPower: 1000,
      totalSubSystems: 4,
    };
  }

  render() {
    return(
      <section>
        <h1>System 1</h1>
        <h2>System Stats</h2>
        <ul>
          <li>Power Usage: {this.state.powerUsage}</li>
          <li>Total Power: {this.state.totalPower}</li>
          <li>Total SubSystems: {this.state.totalSubSystems}</li>
        </ul>
        <h2>Sub Systems</h2>
        <ol>
          <SubSystem
            systemName={`Sub System 0`}
            powerUsage={.20}
            powerUsed={200}
          />
          <SubSystem
            systemName={`Sub System 1`}
            powerUsage={.30}
            powerUsed={300}
          />
          <SubSystem
            systemName={`Sub System 2`}
            powerUsage={.25}
            powerUsed={250}
          />
          <SubSystem
            systemName={`Sub System 3`}
            powerUsage={.25}
            powerUsed={250}
          />
        </ol>
      </section>
    );
  }
  
}

export default System;
