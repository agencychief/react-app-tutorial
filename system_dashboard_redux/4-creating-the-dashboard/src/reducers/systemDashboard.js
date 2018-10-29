const inititalState = {
  modalOpen: false,
  systems: []
};

function systemDashboard(state = inititalState, action) {
  switch(action.type) {
    case 'CLOSE_MODAL':
      return {
        ...state,
        modalOpen: false
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        modalOpen: !state.modalOpen
      }
    default:
      return state;
  }
}

export default systemDashboard;
