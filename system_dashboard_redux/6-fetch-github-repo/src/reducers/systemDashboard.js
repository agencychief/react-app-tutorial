
const inititalState = {
  modalOpen: false,
  isFetching: false,
  message: {
    text: '',
    severity: 'Message'
  },
  systems: []
};


function systemDashboard(state = inititalState, action) {
  switch(action.type) {
    case 'ADD_NEW_SYSTEM':
      return {
        ...state,
        systems: [
          action.newSystem,
          ...state.systems
          
        ]
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: false
      }
    case 'DISMISS_MESSAGE':
      return {
        ...state,
        message: {
          text: '',
          severity: 'Message'
        }
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen
      }
    case 'TOGGLE_ISFETCHING':
      return {
        ...state,
        isFetching: !state.isFetching
      }
    case 'SET_MESSAGE':
      return {
        ...state,
        message: {
          text: action.message.text,
          severity: action.message.severity
        }
      }
    default:
      return state;
  }
}

export default systemDashboard;