import React from 'react';
import propTypes from 'prop-types';
import Modal from './Modal';
import Button from './Button';
import AddSystemForm from '../containers/AddSystemForm';
import Message from './Message';

const Dashboard = ({
  dashboard,
  onToggleModal,
  onCloseModal,
  onDismissMessage
}) => {
  return(
    <div>
      <h1>Dashboard</h1>
      {dashboard.modalOpen &&
        <Modal>
          <Button func={onCloseModal}>Close Modal</Button>
          <AddSystemForm />
        </Modal>
      }
      <Button func={onToggleModal}>Add System</Button>
      {dashboard.message.text !== '' &&
        <Message severity={dashboard.message.severity} dismiss={onDismissMessage}>
          {dashboard.message.text}
        </Message>
      }
    </div>
  );
};

Dashboard.propTypes = {
  dashboard: propTypes.object
}

export default Dashboard;
