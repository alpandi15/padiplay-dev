import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { useAlert } from 'react-alert'

import validate from './validate'
import { getLoginData } from '../../../actions/auth/loginAction'
import logo from '../../../assets/img/logo-white.png'
import 'views/Login/style.css'
import './style.css'

const renderField = ({
  input,
  label,
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
        <input {...input} className={className} placeholder={label} type={type} />
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

const LoginPage = (props) => {
  const {
    handleSubmit,
    invalid,
    loading,
    submitting
  } = props

  const Alert = useAlert()

  const onSubmit = async (values) => {
    const { getLoginData, error, history } = props
    const data = {
      username: values.username,
      password: values.password
    }
    if (!error) {
      const res = await getLoginData(data)
      if (res.success) {
        Alert.success(res.meta.message)
        history.push('/')
      } else {
        Alert.error(res.message)
      }
    }
  }

  useEffect(() => {
    const { userData } = props
    console.log('User ', userData)
  }, [props])

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
                  <b>Masuk</b>
                  ke Akun Anda
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <Field
                    icon="mail_outline"
                    className="form-control form-app"
                    name="username"
                    type="text"
                    component={renderField}
                    placeholder="Email/Username"
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
                      <a href="/"><small>Lupa Password</small></a>
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
                  <div className="extra font-14 mt-2">
                    <span>
                      Belum punya akun?
                      <a href="/"> Daftar Sekarang</a>
                    </span>
                  </div>

                  <div className="login-btn mt-3">

                    <GoogleLogin
                      clientId="1080911581648-vcnjasi1kv81ho4hokp4hfeqbeea7tob.apps.googleusercontent.com"
                      // onSuccess={loginGoogle}
                      // onFailure={onFailureIntialGoogle}
                      render={(renderProps) => (
                        <button {...renderProps} className="btn btn-danger btn-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                          <span className="fa fa-google" />
                          Login with Google
                        </button>
                      )}
                    />

                    <FacebookLogin
                      appId="2435743850084417"
                      autoLoad={false}
                      fields="name,email,picture"
                      // callback={loginFacebook}
                      cssClass="btn btn-primary btn-login"
                      icon="fa-facebook"
                    />

                  </div>
                </form>
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
  getLoginData: (data) => dispatch(getLoginData(data))
})

export default reduxForm({
  form: 'LoginForm',
  validate
})(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
