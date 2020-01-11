import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

import logo from '../../../assets/img/logo-white.png'
import './style.css'

import FormLogin from './ModalLogin'

const loginFacebook = (response) => {
  console.log('Facebook ', response)
}

const loginGoogle = (response) => {
  console.log('Google ', response)
}
const loginGoogleError = (error) => {
  alert('Error')
  console.log(error)
}

const LoginPage = (props) => {
  const { history } = props
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => setShowModal(!showModal)

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

                <div className="login-btn mt-3">
                  <GoogleLogin
                    clientId="1080911581648-vcnjasi1kv81ho4hokp4hfeqbeea7tob.apps.googleusercontent.com"
                    onSuccess={loginGoogle}
                    onFailure={loginGoogleError}
                    render={(renderProps) => (
                      <button {...renderProps} className="btn btn-app btn-sosmed" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i className="fa fa-google pull-left" />
                        Login with Google
                      </button>
                    )}
                  />

                  <FacebookLogin
                    appId="2435743850084417"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={loginFacebook}
                    cssClass="btn btn-app btn-sosmed"
                    icon="fa-facebook pull-left"
                  />
                  <button className="btn btn-app btn-sosmed" onClick={handleModal}>
                    <i className="fa fa-envelope pull-left" />
                    Masuk Dengan Email
                  </button>
                </div>

                <div className="extra font-14 mt-2">
                  <span>
                    Belum punya akun?
                    <Link to="/register"> Daftar Sekarang</Link>
                  </span>
                </div>

                <div className="login-btn mt-3" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <FormLogin show={showModal} handleModal={handleModal} history={history} />
    </div>
  )
}

export default LoginPage
