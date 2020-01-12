import React from 'react'

const Field = ({
  input,
  placeholder,
  type,
  className,
  icon,
  meta: {
    touched,
    error
  }
}) => {
  return (
    <div className="field-container">
      {touched && ((error && <span className="error-input">{error}</span>))}
      <div className="input-group mb-3">
        {icon
          ? (
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1"><i className="material-icons">{icon}</i></span>
            </div>
          )
          : null}
        <input value="jadwal" {...input} className={className} placeholder={placeholder} type={type} />
      </div>
    </div>
  )
}

export default Field
