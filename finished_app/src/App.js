import React, { Component } from 'react';
import axios from 'axios';
import System from './components/System';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const self = this;
    function getFacebookRepo() {
      return axios.get('https://api.github.com/repos/facebook/create-react-app');
    }
    
    function getFacebookBranches() {
      return axios.get('https://api.github.com/repos/facebook/create-react-app/branches');
    }

    function getReduxRepo() {
      return axios.get('https://api.github.com/repos/reduxjs/redux');
    }
    
    function getReduxBranches() {
      return axios.get('https://api.github.com/repos/reduxjs/redux/branches');
    }

    axios.all([getFacebookRepo(), getFacebookBranches(), getReduxRepo(), getReduxBranches()])
      .then(axios.spread((facebookRepo, facebookBranches, reduxRepo, reduxBranches) => {
        let apiSystems = [];
        let facebookSubSystems = facebookBranches.data.map(branch => {
          return(
            {
              id: branch.commit.sha,
              systemName: branch.name,
              powerUsage:0,
              powerUsed: 0
            }
          );
        });
        let facebook = {
          id: facebookRepo.data.id,
          name: facebookRepo.data.name,
          totalPower: facebookRepo.data.stargazers_count,
          subSystems: facebookSubSystems
        }

        let reduxSubSystems = reduxBranches.data.map(branch => {
          return(
            {
              id: branch.commit.sha,
              systemName: branch.name,
              powerUsage:0,
              powerUsed: 0
            }
          );
        });
        let redux = {
          id: reduxRepo.data.id,
          name: reduxRepo.data.name,
          totalPower: reduxRepo.data.stargazers_count,
          subSystems: reduxSubSystems
        }
        apiSystems.push(facebook);
        apiSystems.push(redux);
        self.setState({systems: apiSystems});
      }));
  }

  render() {
    return (
      <div>
        <header>
          <h1>System Dashboard</h1>
        </header>
        <main>
          <h2>Major Systems</h2>
          {this.state.systems &&
            this.state.systems.map((system, index) => {
              return(
                <System
                  key={index}
                  name={system.name}
                  powerUsage={system.powerUsage}
                  totalPower={system.totalPower}
                  subSystems={system.subSystems}
                />
              );
            })
          }
        </main>
      </div>
    );
  }
}

export default App;
