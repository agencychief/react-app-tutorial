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

export function fetchSystem(githubAccount, repoName) {
  return function(dispatch) {
    const newMessage = {
      text: `Fetching ${repoName} from ${githubAccount}.`,
      severity: 'Notice'
    }
    dispatch(toggleIsFetching());
    dispatch(setMessage(newMessage))
  }
}