import React from 'react'

const Radio = ({
  input,
  label,
  id,
  className,
  checked,
  handleClick
}) => {
  // console.log(name)
  return (
    <div className="form-check">
      <input {...input} className={className} type="radio" id={id} checked={checked} onClick={handleClick} />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Radio
