import React from 'react'
import FacebookLogin from 'react-facebook-login'
import './styles.css'
import { config } from '../../../config'

const loginFacebook = (response) => {
  console.log('Facebook ', response)
}

const LoginButton = () => {
  const { appIdFacebook } = config
  return (
    <FacebookLogin
      appId={appIdFacebook}
      autoLoad={false}
      fields="name,email,picture"
      callback={loginFacebook}
      cssClass="btn btn-app btn-sosmed"
      icon="fa-facebook pull-left"
    />
  )
}

export default LoginButton
