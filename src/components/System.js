import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SubSystem from './SubSystem';

class System extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      powerUsage: this.props.powerUsage,
      totalPower: this.props.totalPower,
      subSystems: this.props.subSystems,
    };
  }

  render() {
    return(
      <section>
        <h1>{this.state.name}</h1>
        <h2>System Stats</h2>
        <ul>
          <li>Power Usage: {this.state.powerUsage}</li>
          <li>Total Power: {this.state.totalPower}</li>
          <li>Total SubSystems: {this.state.subSystems.length}</li>
        </ul>
        <h2>Sub Systems</h2>
        <ol>
          {this.state.subSystems.map((subSystem, index) => {
            return(
              <SubSystem
                key={index}
                systemName={subSystem.systemName}
                powerUsage={subSystem.powerUsage}
                powerUsed={subSystem.powerUsed}
              />
            );
          })}
        </ol>
      </section>
    );
  }
}

System.propTypes = {
  name: PropTypes.string.isRequired,
  powerUsage: PropTypes.number.isRequired,
  totalPower: PropTypes.number.isRequired,
  subSystems: PropTypes.array.isRequired,
}

export default System;
