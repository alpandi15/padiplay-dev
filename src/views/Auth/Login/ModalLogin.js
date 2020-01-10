import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'

import validate from './validate'
import { getLoginData } from '../../../actions/auth/loginAction'

import AlerComponent from '../../../components/Alert'

const renderField = ({
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
    <>
      {touched && ((error && <span className="error-input">{error}</span>))}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i className="material-icons">{icon}</i></span>
        </div>
        <input {...input} className={className} placeholder={placeholder} type={type} />
      </div>
    </>
  )
}

const ButtonLogin = ({
  input,
  type,
  className,
  invalid,
  loading,
  submitting
}) => {
  return (
    <button className={className} type={type} {...input} disabled={invalid || submitting || loading}>
      {
        !submitting ? 'Login'
        : (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
        )
      }
    </button>
  )
}

const ModalLogin = (props) => {
  const {
    show,
    handleModal,
    handleSubmit,
    invalid,
    loading,
    submitting
  } = props

  const [alertState, setAlertState] = useState({
    show: false,
    success: false,
    message: ''
  })
  const Alert = useAlert()

  const onSubmit = async (values) => {
    const { getLoginData, error, history } = props
    const data = {
      email: values.username,
      password: values.password
    }
    if (!error) {
      const res = await getLoginData(data)
      if (res.success) {
        Alert.success(res.meta.message)
        setAlertState({
          message: res.meta.message,
          success: res.success,
          show: true
        })
        history.push('/')
      } else {
        Alert.error(res.message)
        setAlertState({
          message: res.message,
          success: res.success,
          show: true
        })
      }
    }
  }

  const handleAlert = () => {
    setAlertState({
      ...alertState,
      show: !alertState.show
    })
  }

  return (
    <Modal
      show={show}
      onHide={handleModal}
      animation
      autoFocus
      centered
      size="md"
    >
      <Modal.Body>
        <div>
          <div className="login-title mb-4">
            <b>Masuk</b>
            {' '}
            {'ke Akun Anda'}
          </div>
          <AlerComponent
            show={alertState.show}
            variant={alertState.success ? 'success' : 'danger'}
            title={alertState.success ? 'Success: ' : 'Error: '}
            message={alertState.message}
            onClose={handleAlert}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              icon="mail_outline"
              className="form-control form-app"
              name="email"
              type="text"
              component={renderField}
              placeholder="Email/Phone"
            />

            <Field
              icon="lock_open"
              className="form-control form-app"
              name="password"
              type="password"
              component={renderField}
              placeholder="Password"
            />
            <div className="login-option d-flex">
              <div className="custom-control custom-switch mr-auto">
                <input type="checkbox" className="custom-control-input" id="customSwitch1" />
              </div>
              <div className="forget">
                <Link to="/forgot-password"> Lupa Password</Link>
              </div>
            </div>
            <div className="login-btn mt-3">
              <ButtonLogin
                className="btn btn-app btn-login"
                type="submit"
                invalid={invalid}
                submitting={submitting}
                loading={loading}
              />
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  )
}

const mapStateToProps = (state) => ({
  loading: state.userStore.loading,
  userData: state.userStore.userData,
  values: getFormValues('LoginForm')(state)
})

const mapDispatchToProps = (dispatch) => ({
  getLoginData: (data) => dispatch(getLoginData(data))
})

export default reduxForm({
  form: 'LoginForm',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(ModalLogin))
