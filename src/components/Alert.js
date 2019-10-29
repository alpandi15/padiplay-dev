import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = ({s
  ...props
}) => {
  return (
    <Alert {...props} dismissible>
      <strong>{props.title}: </strong>
      <p>
        {props.message}
      </p>
    </Alert>
  );
}

export default AlertComponent;