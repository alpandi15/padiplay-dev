import React from 'react'
import GoogleLogin from 'react-google-login'
import { useAlert } from 'react-alert'
import { connect } from 'react-redux'
import { getLoginSosmed } from '../../../actions/auth/loginAction'
import './styles.css'
import { config } from '../../../config'

const loginGoogleError = (error) => {
  alert('Error')
  console.log(error)
}

const LoginButton = (props) => {
  const { appIdGoogle } = config

  const Alert = useAlert()

  const loginGoogle = async (response) => {
    const { getLoginSosmed, history } = props
    const data = {
      token: `${response.accessToken}`,
      driver: 'google'
    }
    const res = await getLoginSosmed(data)
    if (res.success) {
      Alert.success(res.meta.message)
      history.push('/')
    } else {
      Alert.error(res.message)
    }
    console.log('Google ', response.accessToken)
  }
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

const mapStateToProps = (state) => ({
  loading: state.userStore.loading
})

const mapDispatchToProps = (dispatch) => ({
  getLoginSosmed: (data) => dispatch(getLoginSosmed(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton)
