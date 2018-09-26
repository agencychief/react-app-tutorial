import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SubSystem from './SubSystem';

class System extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      totalPowerUsed: this.props.powerUsage,
      totalPowerUnits: this.props.totalPower,
      subSystems: this.props.subSystems,
    };
    this.sumTotalPowerUsage = this.sumTotalPowerUsage.bind(this);
    this.updatePowerUsage = this.updatePowerUsage.bind(this);
  }

  sumTotalPowerUsage() {
    let totalPowerUsage = 0;
    this.state.subSystems.map(subSystem => totalPowerUsage += subSystem.powerUsed);
    this.setState({totalPowerUsed: totalPowerUsage});
  }

  updatePowerUsage(event, id) {
    let currentPercentage = Number(event.target.value / 100);

    const currentSubSystem = this.state.subSystems.find(subSystem => subSystem.id === id);
    currentSubSystem.powerUsage = currentPercentage;
    currentSubSystem.powerUsed = Math.floor(this.state.totalPowerUnits * currentPercentage);
    this.sumTotalPowerUsage();
    this.setState(() => currentSubSystem);
  }

  render() {
    return(
      <section>
        <h1>{this.state.name}</h1>
        <h2>System Stats</h2>
        <ul>
          <li>Power Usage: {this.state.totalPowerUsed}</li>
          <li>Total Power: {this.state.totalPowerUnits}</li>
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
                updatePowerUsage={(event) => this.updatePowerUsage(event, subSystem.id)}
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
