import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertComponent = ({
  error,
  variant,
  ...props
}) => {
  return (
    <Alert show={error} variant={variant} {...props} dismissible>
      <strong>{props.title}: </strong>
      <p>
        {props.message}
      </p>
    </Alert>
  );
}

export default AlertComponent;