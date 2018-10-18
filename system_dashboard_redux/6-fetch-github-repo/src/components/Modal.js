import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModal = styled.div`
  background-color: rgba(0,0,0,.6);
  z-index: 10;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  div { width: 50%; margin: 0 auto; }
`;

const Modal = ({children}) => (
  <StyledModal>
    <div> {children} </div>
  </StyledModal>
);

Modal.propTypes = {
  children: PropTypes.node
}

export default Modal;
