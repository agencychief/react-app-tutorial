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
      totalSubSystems: this.props.totalSubSystems,
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

System.propTypes = {
  name: PropTypes.string.isRequired,
  powerUsage: PropTypes.number.isRequired,
  totalPower: PropTypes.number.isRequired,
  totalSubSystems: PropTypes.number,
}

export default System;
