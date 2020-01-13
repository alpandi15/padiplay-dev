import React from 'react'

const Button = ({
  input,
  type,
  className,
  invalid,
  loading,
  submitting,
  label
}) => {
  return (
    <button className={className} type={type} {...input} disabled={invalid || submitting || loading}>
      {
        !submitting ? label
        : (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
        )
      }
    </button>
  )
}

export default Button
