import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {
  StyledMessage,
  ConfirmationMessage,
  NoticeMessage,
  WarningMessage,
  ErrorMessage
} from './styled/Message';

const Message = ({
  children,
  severity,
  dismiss
}) => {
  const content =
  <Fragment>
  {children}
  <Button func={dismiss}>Dismiss</Button>
  </Fragment>

  switch(severity) {
    case 'Confirmation':
      return <ConfirmationMessage>{content}</ConfirmationMessage>;
    case 'Notice':
      return <NoticeMessage>{content}</NoticeMessage>;
    case 'Warning':
      return <WarningMessage>{content}</WarningMessage>;
    case 'Error':
      return <ErrorMessage>{content}</ErrorMessage>;
    default:
      return <StyledMessage>{content}</StyledMessage>;
  }
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
  severity: PropTypes.oneOf([
    'Message',
    'Confirmation',
    'Notice',
    'Warning',
    'Error'
  ])
}

export default Message;


