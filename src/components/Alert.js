import React from 'react'
import { Alert } from 'react-bootstrap'

function AlertComponent ({
  variant = 'danger',
  title,
  show,
  message,
  onClose,
  ...props
}) {
  return (
    <Alert show={show} variant={variant} onClose={onClose} dismissible {...props}>
      <strong>
        {title}
        :
        {' '}
      </strong>
      <p>
        {message}
      </p>
    </Alert>
  )
}

export default AlertComponent
