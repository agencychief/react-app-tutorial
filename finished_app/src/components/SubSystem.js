import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SubSystemContainer = styled.li`
  list-style: none;
  padding: 10px;
  margin: 10px;
  border: 5px solid hsl(${props => props.percentageUsed || 100}, 100%, 50%);
  background-color: hsla(${props => props.percentageUsed || 100}, 100%, 50%, .3);
`;

const SubSystem = ({systemName, powerUsage, powerUsed, updatePowerUsage}) => {
  return(
    <SubSystemContainer percentageUsed={String(((powerUsage * 100) - 100) * -1)}>
      <h3>{systemName}</h3>
      <ul>
        <li>Power Usage: {`${(powerUsage * 100).toFixed(0)}%`}</li>
        <li>
          <input onChange={updatePowerUsage}
            type="range" min="0" max="100" step="5" />
        </li>
        <li>Power Used: {powerUsed}</li>
      </ul>
    </SubSystemContainer>
  );
}

SubSystem.propTypes = {
  systemName: PropTypes.string.isRequired,
  powerUsage: PropTypes.number.isRequired,
  powerUsed: PropTypes.number,
  updatePowerUsage: PropTypes.func.isRequired
};

export default SubSystem;
