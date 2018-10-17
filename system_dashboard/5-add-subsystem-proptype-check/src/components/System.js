import React from 'react';
import SubSystem from './SubSystem';

const System = () => {
  return(
    <section>
      <h1>System 1</h1>
      <h2>System Stats</h2>
      <ul>
        <li>Power Usage: 0</li>
        <li>Total Power: 1000</li>
        <li>Total SubSystems: 4</li>
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

export default System;
