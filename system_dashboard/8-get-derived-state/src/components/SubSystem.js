import React from 'react';
import PropTypes from 'prop-types';

const SubSystem = ({systemName, powerUsage, powerUsed}) => {
  return(
    <li>
      <h3>{systemName}</h3>
      <ul>
        <li>Power Usage: {`${powerUsage * 100}%`}</li>
        <li>Power Used: {powerUsed}</li>
      </ul>
    </li>
  );
}

SubSystem.propTypes = {
  systemName: PropTypes.string.isRequired,
  powerUsage: PropTypes.number.isRequired,
  powerUsed: PropTypes.number
};

export default SubSystem;
