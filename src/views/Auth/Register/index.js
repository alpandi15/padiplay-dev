import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useAlert } from 'react-alert'
import { Field, reduxForm, getFormValues } from 'redux-form'

import validate from './validate'
import { registerUser } from '../../../actions/auth/loginAction'

import logo from '../../../assets/img/logo-white.png'
import './style.css'

const renderCheckbox = (props) => {
  const {
    input,
    type,
    className,
    children
  } = props
  return (
    <div className="form-check mr-auto">
      <input className={className} type={type} value="" id="tos" {...input} />
      {children}
    </div>
  )
}

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
    <div className="field-container">
      {touched && ((error && <span className="error-input">{error}</span>))}
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1"><i className="material-icons">{icon}</i></span>
        </div>
        <input {...input} className={className} placeholder={placeholder} type={type} />
      </div>
    </div>
  )
}

const ButtonLogin = ({
  input,
  type,
  className,
  invalid,
  loading,
  submitting,
  text
}) => {
  return (
    <button className={className} type={type} {...input} disabled={invalid || submitting || loading}>
      {
        !submitting ? text
        : (
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
        )
      }
    </button>
  )
}

const Register = (props) => {
  const {
    invalid,
    loading,
    submitting,
    handleSubmit
  } = props

  const [alertState, setAlertState] = useState({
    show: false,
    success: false,
    message: ''
  })

  const Alert = useAlert()

  const onSubmit = async (values) => {
    const { registerUser, error, history } = props
    const data = {
      phone: values.phone,
      email: values.email,
      password: values.password
    }
    if (!error) {
      const res = await registerUser(data)
      console.log('Data', res)
      if (res.success) {
        Alert.success(res.meta.message)
        setAlertState({
          message: res.meta.message,
          success: res.success,
          show: true
        })
        history.push('/login')
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

  return (
    <div className="wrapper-app">
      <div className="content login d-flex v-center justify-content-center" style={{ minHeight: '100vh' }}>
        <div className="login-form col-md-8">
          <div className="logo p-4 mb-5 text-center text-md-left">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="box-shadow">
            <div className="row">
              <div className="col-md-6 p-5 cover-wrapper d-none d-md-none d-lg-block">
                <div className="login-text">
                  <div className="font-20 font-bold text-uppercase" style={{ letterSpacing: '3px' }}>
                    Selamat Datang
                  </div>
                  <div className="mb-3">
                    di Padiplay
                  </div>
                  <div style={{ color: '#d0d0d0' }}>
                    <small>
                      <p>Padiplay memiliki dedikasi untuk pelaku esport.</p>

                      <p>Padiplay adalah platform untuk mempermudah penyelenggara untuk menjalankan suatu turnament esport, juga memberikan kemudahan kepada pemain untuk menumkan kompetisi esport.</p>
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-12 col-lg-6 p-5 form">
                <div className="login-title mb-4">
                  Bergabung Sekarang
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Field
                    icon="mail_outline"
                    className="form-control form-app"
                    name="email"
                    type="text"
                    component={renderField}
                    placeholder="Email"
                  />
                  <Field
                    icon="smartphone"
                    className="form-control form-app"
                    name="phone"
                    type="text"
                    component={renderField}
                    placeholder="Nomor Telepon"
                  />
                  <Field
                    icon="lock_open"
                    className="form-control form-app"
                    name="password"
                    type="password"
                    component={renderField}
                    placeholder="Password"
                  />
                  <Field
                    icon="lock_open"
                    className="form-control form-app"
                    name="password_confirm"
                    type="password"
                    component={renderField}
                    placeholder="Konfirmasi Password"
                  />
                  <div className="login-option">
                    <Field
                      icon="lock_open"
                      className="form-check-input"
                      name="agree"
                      type="checkbox"
                      component={renderCheckbox}
                      checked
                    >
                      <label className="form-check-label" htmlFor="tos">
                        <small>Saya setuju dengan Aturan penggunaan dan Kebijakan privasi Padiplay</small>
                      </label>
                    </Field>
                  </div>
                  <div className="login-btn mt-3">
                    <ButtonLogin
                      className="btn btn-app btn-login"
                      type="submit"
                      invalid={invalid}
                      submitting={submitting}
                      loading={loading}
                      text="Daftar"
                    />
                  </div>
                </form>


                <div className="extra font-14 mt-2">
                  <span>
                    Sudah punya akun?
                    <Link to="/login"> Masuk</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  loading: state.userStore.loading,
  userData: state.userStore.userData,
  values: getFormValues('LoginForm')(state)
})

const mapDispatchToProps = (dispatch) => ({
  registerUser: (data) => dispatch(registerUser(data))
})

export default reduxForm({
  form: 'LoginForm',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(Register))
