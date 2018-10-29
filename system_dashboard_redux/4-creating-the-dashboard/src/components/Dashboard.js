import React from 'react';
import propTypes from 'prop-types';
import Modal from './Modal';
import Button from './Button';

const Dashboard = ({
  dashboard,
  onToggleModal,
  onCloseModal}) => {
  return(
    <div>
      <h1>Dashboard</h1>
      {dashboard.modalOpen &&
        <Modal>
          <p>Modal open</p>
          <Button func={onCloseModal}>Close Modal</Button>
        </Modal>
      }
      <Button func={onToggleModal}>Toggle Modal</Button>
    </div>
  );
};

Dashboard.propTypes = {
  dashboard: propTypes.object
}

export default Dashboard;
