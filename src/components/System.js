import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import SubSystem from './SubSystem';

const SystemContainer = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 10px;
  border: 5px solid hsl(${props => props.Danger || 0}, 100%, 50%);

`;

const SystemTitle = styled.h1`
  width: 100%;
`;

const SystemInformation = styled.div`
  flex: 1;
`;

const SubSystemContainer = styled.div`
  flex: 2;
`;

const SubSystemList = styled.ol`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 0;
`;

const blink = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Message = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2em;
  font-weight: bold;
  color: ${props => props.Danger ? `hsl(0, 100%, 50%)` : `hsl(240, 100%, 50%)`};
  animation: ${props => props.Danger ? `${blink} 1s linear alternate infinite` : `none`};
`;

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
    let isDanger = this.state.totalPowerUnits - this.state.totalPowerUsed <= 0;
    return(
      <SystemContainer Danger={isDanger === true ? `0` : `240`}>
        <SystemTitle>{this.state.name}</SystemTitle>
        <SystemInformation>
          <h2>System Stats</h2>
          <ul>
            <li>Power Usage: {this.state.totalPowerUsed}</li>
            <li>Total Power: {this.state.totalPowerUnits}</li>
            <li>Total SubSystems: {this.state.subSystems.length}</li>
          </ul>
        </SystemInformation>
        <SubSystemContainer>
          <h2>Sub Systems</h2>
          <SubSystemList>
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
          </SubSystemList>
        </SubSystemContainer>
        {isDanger ?
          <Message Danger>Danger</Message> :
          <Message>System Okay</Message>
        }
      </SystemContainer>
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
