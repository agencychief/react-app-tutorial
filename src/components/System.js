import React from 'react';

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
        <li>
          <h3>Sub System 0</h3>
          <ul>
            <li>Power Usage: 20%</li>
            <li>Power Used: 200</li>
          </ul>
        </li>
        <li>
          <h3>Sub System 1</h3>
          <ul>
            <li>Power Usage: 30%</li>
            <li>Power Used: 300</li>
          </ul>
        </li>
        <li>
          <h3>Sub System 2</h3>
          <ul>
            <li>Power Usage: 25%</li>
            <li>Power Used: 250</li>
          </ul>
        </li>
        <li>
          <h3>Sub System3</h3>
          <ul>
            <li>Power Usage: 25%</li>
            <li>Power Used: 250</li>
          </ul>
        </li>
      </ol>
    </section>
  );
}

export default System;
