import fetch from 'cross-fetch';

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}

export function toggleModal() {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export function dismissMessage() {
  return {
    type: 'DISMISS_MESSAGE'
  }
}


export function setMessage(newMessage) {
  // newMessage === {text: String, severity: String}
  return {
    type: 'SET_MESSAGE',
    message: newMessage
  }
}

function toggleIsFetching() {
  return {
    type: 'TOGGLE_ISFETCHING'
  }
}

function addNewSystem(newSystem) {
  return {
    type: 'ADD_NEW_SYSTEM',
    newSystem: newSystem
  }
}

export function fetchSystem(githubAccount, repoName) {
  return function(dispatch) {
    const newMessage = {
      text: `Fetching ${repoName} from ${githubAccount}.`,
      severity: 'Notice'
    }
    dispatch(toggleIsFetching());
    dispatch(setMessage(newMessage))
    return Promise.all([
      fetch(`https://api.github.com/repos/${githubAccount}/${repoName}`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} ${response.statusText}`);
      }),
      fetch(`https://api.github.com/repos/${githubAccount}/${repoName}/branches`)
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error(`${response.status} ${response.statusText}`);
      }),
    ])
    .then(([repo, branches]) => {
      const subSystems = branches.map(branch => {
        return({
          id: branch.commit.sha,
          name: branch.name,
          power: {
            percentUsed: 0,
            numberUsed: 0
          }
        });
      });
      const newSystem = {
        id: repo.id,
        name: repo.name,
        isDanger: false,
        subSystems: subSystems,
        power: {
          basePower: repo.stargazers_count,
          usedPower: 0,
          actualPower: repo.stargazers_count
        }
      };
      dispatch(addNewSystem(newSystem));
      dispatch(setMessage({
        text: `${newSystem.name} successfully added!`,
        severity: 'Confirmation'
      }));
      dispatch(toggleIsFetching());
      dispatch(toggleModal());
    })
    .catch(err => {
      dispatch(setMessage({
        text: `${err.name}: ${err.message}`,
        severity: 'Error'
      }));
      dispatch(toggleIsFetching());
      dispatch(toggleModal());
    })
  }
}

