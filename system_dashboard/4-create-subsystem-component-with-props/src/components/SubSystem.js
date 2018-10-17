import React from 'react';

const SubSystem = ({systemName, powerUsage, powerUsed}) => {
  return(
    <li>
      <h3>{systemName}</h3>
      <ul>
        <li>Power Usage: {powerUsage}</li>
        <li>Power Used: {powerUsed}</li>
      </ul>
    </li>
  );
}

export default SubSystem;
