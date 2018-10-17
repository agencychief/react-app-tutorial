import React, { Component } from 'react';
import System from './components/System';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>System Dashboard</h1>
        </header>
        <main>
          <h2>Major Systems</h2>
          <System />
        </main>
      </div>
    );
  }
}

export default App;
