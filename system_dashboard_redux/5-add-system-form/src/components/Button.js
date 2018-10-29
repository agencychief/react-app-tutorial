import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, func}) => (
  <button onClick={func}>{children}</button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  func: PropTypes.func.isRequired
}

export default Button;
