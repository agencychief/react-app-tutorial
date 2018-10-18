import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import {
  closeModal,
  toggleModal,
  dismissMessage
} from '../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    dashboard: state.systemDashboard
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCloseModal: () => {
      dispatch(closeModal());
    },
    onToggleModal: () => {
      dispatch(toggleModal());
    },
    onDismissMessage: () => {
      dispatch(dismissMessage());
    }
  }
}

const App = connect(
  mapStateToProps, mapDispatchToProps
  )(Dashboard);

export default App;



