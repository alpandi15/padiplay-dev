import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const Calendar = ({
  input,
  className,
  icon,
  placeholder,
  meta: { touched, error }
}) => {
  if (typeof input.value === 'object') {
    input.value = new Date(input.value)
  } else if (typeof input.value === 'string') {
    input.value = input && input.value ? input.value : null
  }
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
        <DatePicker
          selected={typeof input.value === 'string'
            ? new Date(input.value)
            : typeof input.value === 'object'
              ? input.value
              : null}
          onChange={input.onChange}
          dateFormat="dd-MM-yyyy"
          className={className}
          placeholderText={placeholder}
          showYearDropdown
          showMonthDropdown
        />
      </div>
    </div>
  )
}

export default Calendar
