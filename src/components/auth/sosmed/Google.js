import React from 'react'
import GoogleLogin from 'react-google-login'
import './styles.css'
import { config } from '../../../config'

const loginGoogle = (response) => {
  console.log('Google ', response)
}
const loginGoogleError = (error) => {
  alert('Error')
  console.log(error)
}

const LoginButton = () => {
  const { appIdGoogle } = config
  return (
    <GoogleLogin
      clientId={appIdGoogle}
      onSuccess={loginGoogle}
      onFailure={loginGoogleError}
      render={(renderProps) => (
        <button {...renderProps} className="btn btn-app btn-sosmed" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <i className="fa fa-google pull-left" />
          Login with Google
        </button>
      )}
    />
  )
}

export default LoginButton
