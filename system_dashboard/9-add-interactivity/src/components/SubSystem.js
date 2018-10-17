import React from 'react';
import PropTypes from 'prop-types';

const SubSystem = ({systemName, powerUsage, powerUsed, updatePowerUsage}) => {
  return(
    <li>
      <h3>{systemName}</h3>
      <ul>
        <li>Power Usage: {`${(powerUsage * 100).toFixed(0)}%`}</li>
        <li>
          <input onChange={updatePowerUsage}
            type="range" min="0" max="100" step="5" />
        </li>
        <li>Power Used: {powerUsed}</li>
      </ul>
    </li>
  );
}

SubSystem.propTypes = {
  systemName: PropTypes.string.isRequired,
  powerUsage: PropTypes.number.isRequired,
  powerUsed: PropTypes.number,
  updatePowerUsage: PropTypes.func.isRequired
};

export default SubSystem;
